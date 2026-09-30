/**
 * server.mjs — oBacker SOP web service: Quartz static site + MCP search API.
 *
 * One Node process serves:
 *   GET  /healthz            -> { ok, docs, indexGeneratedAt }
 *   POST /mcp                -> MCP Streamable HTTP (stateless) with 3 tools
 *   GET  /api/search         -> ?q=&limit=&folder=&status=&type=
 *   GET  /api/document/:code -> full document (code may include %2F slashes)
 *   everything else          -> public/ (built Quartz site, SPA fallback)
 *
 * Auth is handled EXTERNALLY (Google IAP in front on Cloud Run). This process
 * has no authentication code by design — it logs a warning at startup.
 *
 * The static site is the priority: an error in /mcp is isolated per request
 * and must never take down static serving.
 *
 * Run: node src/server.mjs   (PORT env, default 8080; INDEX_PATH env, default
 *      dist/vault-index.json built by scripts/build-index.mjs)
 */

import { createServer } from "node:http"
import { fileURLToPath, pathToFileURL } from "node:url"
import express from "express"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import * as z from "zod/v4"
import { loadIndex } from "./search.mjs"

const REPO_ROOT = fileURLToPath(new URL("../", import.meta.url))
const PUBLIC_DIR = fileURLToPath(new URL("../public/", import.meta.url))
const DEFAULT_INDEX = fileURLToPath(new URL("../dist/vault-index.json", import.meta.url))

const MCP_SERVER_INFO = { name: "obacker-sop", version: "1.0.0" }

/** Build the MCP server (fresh per connection in stateless mode). */
export function createMcpServer(engine) {
  const server = new McpServer(MCP_SERVER_INFO)

  server.registerTool(
    "search_documents",
    {
      title: "Search SOP documents",
      description:
        'Search the oBacker SOP vault. Pass a document code (e.g. OBK-QCTC-02) for an exact or code-prefix match, or free-text keywords (diacritic-insensitive BM25, Vietnamese: "quy trinh" matches "quy trình"). Optional filters: folder, status, type.',
      inputSchema: {
        query: z.string().describe("Document code or free-text keywords"),
        limit: z.number().int().min(1).max(50).optional().describe("Max results (default 10)"),
        folder: z.string().optional().describe("Exact folder, e.g. 02_NoiBo"),
        status: z.string().optional().describe("Exact status, e.g. đang áp dụng"),
        type: z.string().optional().describe("Exact type, e.g. sop, can-cu, van-ban"),
      },
    },
    async ({ query, limit, folder, status, type }) => {
      const result = engine.search(query, { limit: limit ?? 10, folder, status, type })
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      }
    },
  )

  server.registerTool(
    "get_document",
    {
      title: "Get one SOP document",
      description:
        "Fetch one full SOP document by code (e.g. OBK-QCTC-02) or by index id (folder/file.md). Returns frontmatter fields plus content = raw markdown.",
      inputSchema: {
        code: z.string().describe("Document code or index id (folder/file.md)"),
      },
    },
    async ({ code }) => {
      const doc = engine.getDocument(code)
      if (!doc) throw new Error("document not found")
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                id: doc.id,
                code: doc.code,
                codeField: doc.codeField,
                title: doc.title,
                folder: doc.folder,
                type: doc.type,
                status: doc.status,
                version: doc.version,
                aliases: doc.aliases,
                headings: doc.headings,
                content: doc.raw,
              },
              null,
              2,
            ),
          },
        ],
      }
    },
  )

  server.registerTool(
    "list_documents",
    {
      title: "List SOP documents",
      description:
        "List documents in the oBacker SOP vault, optionally filtered by folder, type, status. Returns code, title, folder, status, version, type.",
      inputSchema: {
        folder: z.string().optional().describe("Exact folder, e.g. 02_NoiBo"),
        type: z.string().optional().describe("Exact type, e.g. sop"),
        status: z.string().optional().describe("Exact status, e.g. đang áp dụng"),
        limit: z.number().int().min(1).max(200).optional().describe("Max results (default 50)"),
      },
    },
    async ({ folder, type, status, limit }) => {
      const items = engine.listDocuments({ folder, type, status, limit: limit ?? 50 })
      return {
        content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      }
    },
  )

  return server
}

function parseLimit(value, fallback, max) {
  const n = Number(value)
  if (!Number.isFinite(n) || n <= 0) return fallback
  return Math.min(Math.floor(n), max)
}

function strParam(value) {
  return typeof value === "string" && value !== "" ? value : undefined
}

/**
 * Build the express app. `engine` is a createSearchEngine() result — inject a
 * synthetic-index engine in tests, no filesystem needed.
 */
export function createApp(engine) {
  const app = express()
  app.disable("x-powered-by")
  app.use(express.json())

  // (a) Health check.
  app.get("/healthz", (req, res) => {
    res.json({
      ok: true,
      docs: engine.docCount,
      indexGeneratedAt: engine.indexGeneratedAt,
    })
  })

  // (b) MCP endpoint (stateless Streamable HTTP: one transport per POST).
  //     Isolated: a failure here must never take down static serving.
  app.post("/mcp", async (req, res) => {
    const mcp = createMcpServer(engine)
    let transport
    try {
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
        enableJsonResponse: true,
      })
      await mcp.connect(transport)
      res.on("close", () => {
        transport.close()
        mcp.close()
      })
      await transport.handleRequest(req, res, req.body)
    } catch (err) {
      console.error("[mcp] request failed:", err?.message ?? err)
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "internal server error" },
          id: null,
        })
      }
    }
  })
  const mcpMethodNotAllowed = (req, res) => {
    res.status(405).json({
      jsonrpc: "2.0",
      error: { code: -32000, message: "method not allowed" },
      id: null,
    })
  }
  app.get("/mcp", mcpMethodNotAllowed)
  app.delete("/mcp", mcpMethodNotAllowed)

  // (c) REST API.
  app.get("/api/search", (req, res) => {
    const q = typeof req.query.q === "string" ? req.query.q : ""
    res.json(
      engine.search(q, {
        limit: parseLimit(req.query.limit, 10, 50),
        folder: strParam(req.query.folder),
        status: strParam(req.query.status),
        type: strParam(req.query.type),
      }),
    )
  })

  // Document by code or id. Codes never contain slashes, so a plain :code
  // handles them; the wildcard route catches index ids (folder/file.md).
  const handleDocument = (req, res) => {
    // The wildcard param arrives as an array of segments; :code as a string.
    const raw = req.params.doc ?? req.params.code ?? ""
    const code = (Array.isArray(raw) ? raw.join("/") : String(raw)).replace(/^\/+/, "")
    const doc = engine.getDocument(code)
    if (!doc) {
      res.status(404).json({ error: "not found", code })
      return
    }
    res.json({
      id: doc.id,
      code: doc.code,
      codeField: doc.codeField,
      title: doc.title,
      folder: doc.folder,
      type: doc.type,
      status: doc.status,
      version: doc.version,
      aliases: doc.aliases,
      headings: doc.headings,
      content: doc.raw,
    })
  }
  app.get("/api/document/*doc", handleDocument)
  app.get("/api/document/:code", handleDocument)

  // (d) Static Quartz site LAST, with SPA fallback for non-API routes.
  app.use(express.static(PUBLIC_DIR))
  app.use((req, res, next) => {
    if (
      req.method === "GET" &&
      !req.path.startsWith("/api/") &&
      req.path !== "/mcp" &&
      req.path !== "/healthz"
    ) {
      res.sendFile(`${PUBLIC_DIR}/index.html`, (err) => {
        if (err) next(err)
      })
    } else {
      next()
    }
  })

  // Safety net: JSON errors (bad /mcp body, unknown /api routes) become
  // clean JSON instead of crashing the process.
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error("[server] request error:", err?.message ?? err)
    if (res.headersSent) {
      next(err)
      return
    }
    res.status(err?.status ?? err?.statusCode ?? 500).json({
      error: "internal server error",
    })
  })

  return app
}

/** Start listening and wire graceful shutdown (Cloud Run sends SIGTERM). */
export function startServer(engine, port) {
  const app = createApp(engine)
  const server = createServer(app)
  server.listen(port, () => {
    console.log(`[server] obacker-sop listening on :${port}`)
    console.warn(
      "[server] WARNING: no authentication in this process — auth is handled externally (Google IAP) in front of the service.",
    )
  })

  let shuttingDown = false
  const shutdown = (signal) => {
    if (shuttingDown) return
    shuttingDown = true
    console.log(`[server] ${signal} received, shutting down gracefully`)
    server.close(() => process.exit(0))
    setTimeout(() => process.exit(1), 10_000).unref()
  }
  process.on("SIGTERM", () => shutdown("SIGTERM"))
  process.on("SIGINT", () => shutdown("SIGINT"))
  process.on("unhandledRejection", (reason) => {
    console.error("[server] unhandled rejection:", reason)
  })

  return server
}

// Direct-run entrypoint (imports for tests never start the server).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const indexPath = process.env.INDEX_PATH ?? DEFAULT_INDEX
  let engine
  try {
    engine = loadIndex(indexPath)
  } catch (err) {
    console.error(`[server] FATAL: cannot load index at ${indexPath}: ${err.message}`)
    console.error("[server] Build it first: node scripts/build-index.mjs")
    process.exit(1)
  }
  const port = Number(process.env.PORT ?? 8080)
  startServer(engine, port)
}
