import { test, before, after } from "node:test"
import assert from "node:assert/strict"
import { createSearchEngine } from "../src/search.mjs"
import { createApp } from "../src/server.mjs"

// --- Synthetic index, same shape as scripts/build-index.mjs output ---

function doc(overrides) {
  return {
    id: "",
    code: "",
    codeField: "",
    title: "",
    folder: "",
    type: "sop",
    status: "đang áp dụng",
    version: "R.1.0.0",
    aliases: [],
    headings: [],
    plainText: "",
    raw: "RAW",
    tf: {},
    len: 0,
    ...overrides,
  }
}

const INDEX = {
  schemaVersion: 1,
  generatedAt: "2026-09-30T00:00:00.000Z",
  docCount: 3,
  docs: [
    doc({
      id: "02_NoiBo/OBK-SOP-NB-05_X.md",
      code: "OBK-SOP-NB-05",
      codeField: "OBK-SOP-NB-05",
      title: "Tuyển dụng và onboarding nội bộ",
      folder: "02_NoiBo",
      aliases: ["OBK-SOP-NB-05"],
      headings: ["1. MỤC ĐÍCH"],
      plainText:
        "Quy trình tuyển dụng nội bộ gồm nhiều bước: đăng tin, sàng lọc hồ sơ, phỏng vấn và thông báo kết quả tuyển dụng cuối cùng.",
      tf: { quy: 9, trinh: 4, tuyen: 5, dung: 1, phan: 3, vien: 2, hop: 2 },
      len: 26,
    }),
    doc({
      id: "01_ToChuc/OBK-QCTC-02_X.md",
      code: "OBK-QCTC-02",
      codeField: "OBK-QCTC-02",
      title: "Quy chế tổ chức và phân quyền",
      folder: "01_ToChuc",
      type: "van-ban",
      aliases: ["OBK-QCTC-02"],
      headings: ["1. MỤC ĐÍCH"],
      plainText:
        "Quy chế tổ chức và phân quyền nội bộ của công ty quy định rõ trách nhiệm và quyền hạn của từng cấp quản lý.",
      tf: { quyen: 5, che: 3, to: 4, chuc: 4, phan: 4, quy: 2 },
      len: 22,
    }),
    doc({
      id: "07_Phieu/PHI-E-01_X.md",
      code: "PHI-E-01",
      codeField: "",
      title: "Phiếu chi",
      folder: "07_Phieu",
      type: "danh-muc",
      status: "",
      version: "",
      aliases: [],
      headings: [],
      plainText: "Phiếu chi dùng cho các khoản thanh toán tiền mặt trong kho quỹ.",
      tf: { phieu: 3, chi: 3, thanh: 2, toan: 2, tien: 2, mat: 2 },
      len: 14,
    }),
  ],
}

let server
let base

before(async () => {
  const engine = createSearchEngine(INDEX)
  const app = createApp(engine)
  await new Promise((resolve) => {
    server = app.listen(0, "127.0.0.1", resolve)
  })
  base = `http://127.0.0.1:${server.address().port}`
})

after(() => {
  server.close()
})

test("GET /healthz reports engine stats", async () => {
  const res = await fetch(`${base}/healthz`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, {
    ok: true,
    docs: 3,
    indexGeneratedAt: "2026-09-30T00:00:00.000Z",
  })
})

test("GET /api/search keyword (diacritic-insensitive) finds the doc", async () => {
  const res = await fetch(`${base}/api/search?q=quy%20trinh`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.ok(body.total >= 2)
  assert.equal(body.results[0].code, "OBK-SOP-NB-05")
  assert.equal(body.results[0].match_type, "keyword")
  assert.ok(body.queryMs >= 0)
})

test("GET /api/search exact code is rank 1", async () => {
  const res = await fetch(`${base}/api/search?q=OBK-QCTC-02`)
  const body = await res.json()
  assert.equal(body.results[0].code, "OBK-QCTC-02")
  assert.equal(body.results[0].match_type, "exact")
})

test("GET /api/search supports filters", async () => {
  // folder filter: "trinh" does not occur in 01_ToChuc
  const res = await fetch(`${base}/api/search?q=trinh&folder=01_ToChuc`)
  const body = await res.json()
  assert.equal(body.total, 0, 'no "trinh" hits in 01_ToChuc')
  // type filter: only van-ban remains; QCTC-02 has "quy" via "quy định"
  const res2 = await fetch(`${base}/api/search?q=quy&type=van-ban`)
  const body2 = await res2.json()
  assert.ok(body2.results.every((x) => x.type === "van-ban"))
  assert.equal(body2.results[0].code, "OBK-QCTC-02")
})

test("GET /api/document/:code returns full document", async () => {
  const res = await fetch(`${base}/api/document/OBK-QCTC-02`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.equal(body.code, "OBK-QCTC-02")
  assert.equal(body.id, "01_ToChuc/OBK-QCTC-02_X.md")
  assert.equal(body.content, "RAW")
  assert.ok(Array.isArray(body.headings))
})

test("GET /api/document accepts id with slashes (multi-segment path)", async () => {
  const pathRes = await fetch(`${base}/api/document/02_NoiBo/OBK-SOP-NB-05_X.md`)
  assert.equal(pathRes.status, 200)
  assert.equal((await pathRes.json()).code, "OBK-SOP-NB-05")
  const qctc = await fetch(`${base}/api/document/OBK-QCTC-02`)
  assert.equal(qctc.status, 200)
  assert.equal((await qctc.json()).code, "OBK-QCTC-02")
})

test("GET /api/document 404 when not found", async () => {
  const res = await fetch(`${base}/api/document/OBK-NOPE-99`)
  assert.equal(res.status, 404)
  const body = await res.json()
  assert.equal(body.error, "not found")
})

// --- MCP streamable HTTP ---

async function mcpPost(body) {
  return fetch(`${base}/mcp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
    },
    body: JSON.stringify(body),
  })
}

function parseSseOrJson(text) {
  if (text.startsWith("{")) return JSON.parse(text)
  // SSE: take the last "data:" line (the response to the request)
  const dataLines = text
    .split("\n")
    .filter((l) => l.startsWith("data:"))
    .map((l) => l.slice(5).trim())
  return JSON.parse(dataLines.at(-1))
}

test("POST /mcp initialize returns serverInfo", async () => {
  const res = await mcpPost({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2025-06-18",
      capabilities: {},
      clientInfo: { name: "hermes-test", version: "0.0.1" },
    },
  })
  assert.equal(res.status, 200)
  const text = await res.text()
  const msg = parseSseOrJson(text)
  assert.equal(msg.jsonrpc, "2.0")
  assert.equal(msg.id, 1)
  assert.equal(msg.result.serverInfo.name, "obacker-sop")
  assert.equal(msg.result.serverInfo.version, "1.0.0")
})

test("POST /mcp tools/call search_documents works", async () => {
  const res = await mcpPost({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/call",
    params: {
      name: "search_documents",
      arguments: { query: "OBK-QCTC-02", limit: 5 },
    },
  })
  assert.equal(res.status, 200)
  const msg = parseSseOrJson(await res.text())
  assert.equal(msg.id, 2)
  assert.ok(!msg.error, JSON.stringify(msg.error))
  const payload = JSON.parse(msg.result.content[0].text)
  assert.equal(payload.results[0].code, "OBK-QCTC-02")
  assert.equal(payload.results[0].match_type, "exact")
})

test("POST /mcp tools/call get_document works and errors when missing", async () => {
  const ok = await mcpPost({
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: { name: "get_document", arguments: { code: "OBK-QCTC-02" } },
  })
  assert.equal(ok.status, 200)
  const okMsg = parseSseOrJson(await ok.text())
  const okPayload = JSON.parse(okMsg.result.content[0].text)
  assert.equal(okPayload.code, "OBK-QCTC-02")
  assert.equal(okPayload.content, "RAW")

  const miss = await mcpPost({
    jsonrpc: "2.0",
    id: 4,
    method: "tools/call",
    params: { name: "get_document", arguments: { code: "OBK-NOPE-99" } },
  })
  assert.equal(miss.status, 200)
  const missMsg = parseSseOrJson(await miss.text())
  // A tool callback throwing surfaces as an MCP error on the tool result.
  const isError =
    missMsg.error?.message?.includes("document not found") || missMsg.result?.isError === true
  assert.ok(isError, JSON.stringify(missMsg))
})

test("POST /mcp tools/call list_documents works", async () => {
  const res = await mcpPost({
    jsonrpc: "2.0",
    id: 5,
    method: "tools/call",
    params: { name: "list_documents", arguments: { folder: "01_ToChuc" } },
  })
  assert.equal(res.status, 200)
  const msg = parseSseOrJson(await res.text())
  const items = JSON.parse(msg.result.content[0].text)
  assert.equal(items.length, 1)
  assert.equal(items[0].code, "OBK-QCTC-02")
})

test("GET /mcp without session is a method-not-allowed error, not a crash", async () => {
  const res = await fetch(`${base}/mcp`, {
    headers: { Accept: "application/json, text/event-stream" },
  })
  assert.ok(res.status === 405 || res.status === 400)
})
