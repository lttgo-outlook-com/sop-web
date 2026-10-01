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
 * Auth (MCP spec 2025-06-18) is implemented IN THIS process via Google
 * Sign-in as the upstream identity provider — see src/oauth.mjs. The static
 * site sits behind a web session (302 -> Google); /mcp and /api require a
 * bearer token that Claude obtains through the standard MCP OAuth flow
 * (RFC 9728 / 8414 / 7591 + PKCE). A local build with no OAuth env vars is
 * fully open (for dev and the test suite).
 *
 * The static site is the priority: an error in /mcp or /oauth is isolated
 * per request and must never take down static serving.
 *
 * Run: node src/server.mjs   (PORT env, default 8080; INDEX_PATH env, default
 *      dist/vault-index.json built by scripts/build-index.mjs; OAuth via
 *      BASE_URL, OAUTH_HMAC_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
 *      and optional EMAIL_DOMAIN)
 */

import { createServer } from "node:http"
import { existsSync } from "node:fs"
import { join, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import express from "express"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import * as z from "zod/v4"
import { loadIndex } from "./search.mjs"
import { createOAuth } from "./oauth.mjs"

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
 * synthetic-index engine in tests, no filesystem needed. `oauth` is a
 * createOAuth() result or null. When present:
 *   - the static site is gated by a web session (302 -> Google)
 *   - /mcp and /api require a bearer token (401 with RFC 9728 pointer)
 *   - the OAuth discovery + /oauth/* endpoints are mounted
 * When null (no OAuth env vars): everything is open, for local dev/tests.
 */
export function createApp(engine, oauth = null) {
  const app = express()
  app.disable("x-powered-by")
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  if (oauth) {
    // (0) Discovery documents (must be reachable before any auth).
    app.get(["/.well-known/oauth-protected-resource", "/.well-known/oauth-protected-resource/mcp"], oauth.handleResource)
    app.get("/.well-known/oauth-authorization-server", oauth.handleAsMetadata)

    // (0a) OAuth endpoints.
    app.post("/oauth/register", oauth.handleRegister)
    app.get("/oauth/authorize", oauth.handleAuthorize)
    app.get("/oauth/callback", oauth.handleGoogleCallback)
    app.post("/oauth/token", oauth.handleToken)

    // (0b) MCP + REST API gate: bearer token, 401 with RFC 9728 pointer.
    const requireBearer = (req, res, next) => {
      if (oauth.verifyBearer(req)) return next()
      res
        .status(401)
        .set("WWW-Authenticate", `Bearer resource_metadata="${oauth.resourceMetadataFor(req)}"`)
        .json({ error: "unauthorized" })
    }
    app.use("/mcp", requireBearer)
    app.use("/api", requireBearer)

    // (0c) Static site gate: web session, 302 -> Google.
    app.use(oauth.handleWebAuth)
  }

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
      // A URL that names an .html file is a real document link, not a client
      // route: if that file is not in the built site (stale bookmark after a
      // rename), answer a true 404 with the 404 page instead of the homepage.
      // A pretty (extension-less) URL is resolved to its built .html doc so both
      // hard navigations and SPA soft-nav fetches return the real page rather
      // than the homepage; unknown paths still fall through to index.html.
      //
      // Normalize a trailing slash so /tags/loai/ and /tags/loai resolve the
      // same way: a parent tag route (tags/<t>/ is a dir of sub-tags, no
      // index.html) has its page as the SIBLING tags/<t>.html. express.static's
      // 301 to the dir would otherwise skip it and fall through to the homepage.
      // Real folders are unaffected: express.static serves <folder>/index.html
      // directly before this fallback ever runs.
      let cleanPath = req.path
      if (cleanPath.length > 1 && cleanPath.endsWith("/")) cleanPath = cleanPath.slice(0, -1)
      const lastSegment = cleanPath.split("/").at(-1)
      const prefix = PUBLIC_DIR.endsWith("/") ? PUBLIC_DIR : PUBLIC_DIR + "/"
      const resolveInside = (p) => {
        try {
          const candidate = resolve(join(PUBLIC_DIR, decodeURIComponent(p)))
          return candidate === PUBLIC_DIR || candidate.startsWith(prefix) ? candidate : null
        } catch {
          return null // invalid percent-encoding or null byte
        }
      }
      if (lastSegment.endsWith(".html")) {
        const candidate = resolveInside(cleanPath)
        if (!candidate || !existsSync(candidate)) {
          res.status(404).sendFile(`${PUBLIC_DIR}/404.html`, (err) => {
            if (err) next(err)
          })
          return
        }
      } else {
        const docFile = resolveInside(cleanPath + ".html")
        if (docFile && existsSync(docFile)) {
          // Parent tag pages (tags/<t>.html, one dir deep) mis-resolve their
          // relative assets (../index.css -> /tags/index.css, 404) when served at
          // the extension-less URL, so they render unstyled. Redirect to the .html
          // URL so assets resolve from the correct base. Docs (deeper) resolve
          // fine extension-less and must stay extension-less for the SPA, so only
          // the depth-1 tag case redirects.
          const isParentTag = cleanPath.startsWith("/tags/") && !cleanPath.slice(6).includes("/")
          if (isParentTag) {
            res.redirect(cleanPath + ".html")
            return
          }
          res.sendFile(docFile, (err) => {
            if (err) next(err)
          })
          return
        }
        const idxFile = resolveInside(cleanPath + "/index.html")
        if (idxFile && existsSync(idxFile)) {
          res.sendFile(idxFile, (err) => {
            if (err) next(err)
          })
          return
        }
      }
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
export function startServer(engine, port, oauth = null) {
  const app = createApp(engine, oauth)
  const server = createServer(app)
  server.listen(port, () => {
    console.log(`[server] obacker-sop listening on :${port}`)
    if (oauth) {
      console.log("[server] OAuth enabled: static site gated by web session, /mcp + /api by bearer token.")
    } else {
      console.warn("[server] WARNING: OAuth not configured — everything is open. For dev only.")
    }
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

// Build the OAuth provider from env, or null when the vars are absent (dev).
function oauthFromEnv() {
  const googleClientId = process.env.GOOGLE_CLIENT_ID
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
  const oauthHmacKey = process.env.OAUTH_HMAC_KEY
  const baseUrl = process.env.BASE_URL
  if (!googleClientId || !googleClientSecret || !oauthHmacKey || !baseUrl) return null
  return createOAuth({
    baseUrl,
    hmacKey: oauthHmacKey,
    googleClientId,
    googleClientSecret,
    emailDomain: process.env.EMAIL_DOMAIN ?? "",
  })
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
  startServer(engine, port, oauthFromEnv())
}
