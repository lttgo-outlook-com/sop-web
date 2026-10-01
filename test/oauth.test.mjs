/**
 * test/oauth.test.mjs — MCP OAuth flow (spec 2025-06-18) + web session.
 *
 * Simulates the Claude custom connector end to end against a live app:
 *   discovery (RFC 9728/8414) -> DCR (RFC 7591) -> /oauth/authorize ->
 *   Google sign-in (mocked) -> /oauth/callback -> /oauth/token ->
 *   bearer-protected /mcp + /api. The website login (session cookie) is
 *   covered by the same mock. Google's endpoints are stubbed with a local
 *   http server; the id_token is a real RS256 JWT signed with a test key.
 */
import { test, before, after } from "node:test"
import assert from "node:assert/strict"
import { createHash, generateKeyPairSync, createHmac, createPublicKey, createSign, randomBytes } from "node:crypto"
import express from "express"
import { createSearchEngine } from "../src/search.mjs"
import { createApp } from "../src/server.mjs"
import { createOAuth } from "../src/oauth.mjs"

// --- Test Google identity: real RSA keypair, real JWT signatures ----------

const { publicKey, privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 })
const TEST_KID = "testkid"
const jwk = publicKey.export({ format: "jwk" })
jwk.kid = TEST_KID
const JWKS = { [TEST_KID]: createPublicKey({ key: jwk, format: "jwk" }) }

const b64u = (d) => Buffer.from(d).toString("base64url")

function signGoogleIdToken({ email, aud, expSec }) {
  const header = b64u(JSON.stringify({ alg: "RS256", typ: "JWT", kid: TEST_KID }))
  const claims = b64u(
    JSON.stringify({
      iss: "https://accounts.google.com",
      aud,
      sub: "google-subject-1",
      email,
      email_verified: true,
      name: "Test User",
      exp: expSec,
      iat: Math.floor(Date.now() / 1000),
    }),
  )
  const sig = b64u(createSign("RSA-SHA256").update(`${header}.${claims}`).sign(privateKey))
  return `${header}.${claims}.${sig}`
}

function sha256Challenge(verifier) {
  return b64u(createHash("sha256").update(verifier).digest())
}

// --- Mock Google (auth endpoint records the request; token endpoint issues
// --- a JWT for the requested email) ----------------------------------------

const GOOGLE = {
  clientId: "test-google-client-id.apps.googleusercontent.com",
  lastAuthQuery: null,
  emailToIssue: "tuan@obacker.com",
}

function mockGoogle() {
  const app = express()
  app.use(express.urlencoded({ extended: false }))
  app.get("/auth", (req, res) => {
    GOOGLE.lastAuthQuery = req.query
    res.send("<html>mock google auth</html>")
  })
  app.post("/token", (req, res) => {
    const { code, client_id, client_secret, grant_type } = req.body
    if (grant_type !== "authorization_code" || !code || client_id !== GOOGLE.clientId) {
      res.status(400).json({ error: "invalid_request" })
      return
    }
    res.json({
      access_token: "mock-google-access",
      id_token: signGoogleIdToken({
        email: GOOGLE.emailToIssue,
        aud: GOOGLE.clientId,
        expSec: Math.floor(Date.now() / 1000) + 3600,
      }),
      expires_in: 3600,
      token_type: "Bearer",
    })
  })
  return app
}

// --- Index (same shape as the search tests) --------------------------------

function doc(overrides) {
  return {
    id: "", code: "", codeField: "", title: "", folder: "", type: "sop",
    status: "đang áp dụng", version: "R.1.0.0", aliases: [], headings: [],
    plainText: "", raw: "RAW", tf: {}, len: 0, ...overrides,
  }
}

const INDEX = {
  schemaVersion: 1,
  generatedAt: "2026-09-30T00:00:00.000Z",
  docCount: 1,
  docs: [
    doc({
      id: "02_NoiBo/OBK-SOP-NB-05_X.md",
      code: "OBK-SOP-NB-05",
      codeField: "OBK-SOP-NB-05",
      title: "Tuyển dụng và onboarding nội bộ",
      folder: "02_NoiBo",
      aliases: ["OBK-SOP-NB-05"],
      headings: ["1. MỤC ĐÍCH"],
      plainText: "Quy trình tuyển dụng nội bộ.",
      tf: { quy: 2, trinh: 2 },
      len: 4,
    }),
  ],
}

function listen(app) {
  return new Promise((resolve) => {
    const s = app.listen(0, "127.0.0.1", () => resolve(s))
  })
}

// --- SUT -------------------------------------------------------------------

let server, base, googleServer, googleBase
let accessToken, refreshToken

before(async () => {
  googleServer = await listen(mockGoogle())
  googleBase = `http://127.0.0.1:${googleServer.address().port}`

  const engine = createSearchEngine(INDEX)
  const baseUrl = `http://127.0.0.1:PORT` // replaced below; endpoints are origin-derived
  const oauth = createOAuth({
    baseUrl,
    hmacKey: "test-hmac-key-0123456789-0123456789-0123456789",
    googleClientId: GOOGLE.clientId,
    googleClientSecret: "test-google-secret",
    emailDomain: "obacker.com",
    googleAuthEndpoint: `${googleBase}/auth`,
    googleTokenEndpoint: `${googleBase}/token`,
    jwks: JWKS,
  })
  server = await listen(createApp(engine, oauth))
  base = `http://127.0.0.1:${server.address().port}`
})

after(() => {
  server.close()
  googleServer.close()
})

const json = (res) => res.json()

test("discovery: protected-resource document matches the origin Claude reached", async () => {
  const res = await fetch(`${base}/.well-known/oauth-protected-resource/mcp`)
  assert.equal(res.status, 200)
  const body = await json(res)
  assert.equal(body.resource, `${base}/mcp`)
  assert.deepEqual(body.authorization_servers, [base])
})

test("discovery: authorization-server metadata advertises DCR + PKCE S256 + CIMD", async () => {
  const res = await fetch(`${base}/.well-known/oauth-authorization-server`)
  assert.equal(res.status, 200)
  const body = await json(res)
  assert.equal(body.issuer, base)
  assert.equal(body.authorization_endpoint, `${base}/oauth/authorize`)
  assert.equal(body.token_endpoint, `${base}/oauth/token`)
  assert.equal(body.registration_endpoint, `${base}/oauth/register`)
  assert.deepEqual(body.code_challenge_methods_supported, ["S256"])
  assert.equal(body.client_id_metadata_document_supported, true)
})

test("unauthenticated /mcp gets 401 with a WWW-Authenticate resource_metadata pointer", async () => {
  const res = await fetch(`${base}/mcp`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: {} }),
  })
  assert.equal(res.status, 401)
  const www = res.headers.get("www-authenticate")
  assert.ok(www?.startsWith("Bearer resource_metadata="), www)
  assert.ok(www.includes(`${base}/.well-known/oauth-protected-resource`))
})

test("DCR: Claude registers with its hosted redirect and gets a stable client id", async () => {
  const res = await fetch(`${base}/oauth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_name: "claudeai",
      grant_types: ["authorization_code", "refresh_token"],
      redirect_uris: ["https://claude.ai/api/mcp/auth_callback"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
    }),
  })
  assert.equal(res.status, 201)
  const body = await json(res)
  assert.ok(typeof body.client_id === "string" && body.client_id.length > 0)
  // idempotent: same registration returns the same id
  const again = await fetch(`${base}/oauth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_name: "claudeai",
      redirect_uris: ["https://claude.ai/api/mcp/auth_callback"],
      token_endpoint_auth_method: "none",
    }),
  })
  assert.equal((await json(again)).client_id, body.client_id)

  // loopback redirect (Claude Code) is accepted
  const loop = await fetch(`${base}/oauth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_name: "Claude Code",
      redirect_uris: ["http://localhost/callback", "http://127.0.0.1/callback"],
    }),
  })
  assert.equal(loop.status, 201)

  // non-https non-loopback redirect is rejected
  const bad = await fetch(`${base}/oauth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client_name: "x", redirect_uris: ["http://evil.example.com/cb"] }),
  })
  assert.equal(bad.status, 400)

  // keep the claudeai client id for the rest of the flow
  globalThis.__claudeClientId = body.client_id
})

async function runMcpAuthorize(clientId, redirectUri, { state, codeChallenge, verifier }) {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  })
  const res = await fetch(`${base}/oauth/authorize?${params}`, { redirect: "manual" })
  assert.equal(res.status, 302)
  const location = res.headers.get("location")
  assert.ok(location.startsWith(googleBase + "/auth"), location)
  const googleState = new URL(location).searchParams.get("state")
  assert.ok(googleState)
  // Google sends the user back with an auth code
  const cb = await fetch(`${base}/oauth/callback?code=mock-google-code&state=${googleState}`, {
    redirect: "manual",
  })
  assert.equal(cb.status, 302)
  return { code: new URL(cb.headers.get("location")).searchParams.get("code"), state }
}

test("full MCP OAuth flow: authorize -> Google -> callback -> token -> bearer works", async () => {
  const state = "claude-state-xyz"
  const verifier = randomBytes(32).toString("hex")
  const codeChallenge = sha256Challenge(verifier)
  const { code } = await runMcpAuthorize(
    globalThis.__claudeClientId,
    "https://claude.ai/api/mcp/auth_callback",
    { state, codeChallenge, verifier },
  )
  assert.ok(code, "callback must carry an authorization code")

  const tok = await fetch(`${base}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      code_verifier: verifier,
      redirect_uri: "https://claude.ai/api/mcp/auth_callback",
    }),
  })
  assert.equal(tok.status, 200)
  const body = await json(tok)
  assert.ok(body.access_token)
  assert.ok(body.refresh_token)
  assert.equal(body.token_type, "Bearer")
  accessToken = body.access_token
  refreshToken = body.refresh_token

  // the bearer token now opens /api and /mcp
  const api = await fetch(`${base}/api/search?q=quy`, { headers: { Authorization: `Bearer ${accessToken}` } })
  assert.equal(api.status, 200)
  const apiBody = await json(api)
  assert.equal(apiBody.results[0].code, "OBK-SOP-NB-05")

  const mcp = await fetch(`${base}/mcp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: {
        protocolVersion: "2025-06-18",
        capabilities: {},
        clientInfo: { name: "claude-test", version: "0" },
      },
    }),
  })
  assert.equal(mcp.status, 200)

  // garbage bearer is rejected
  const bad = await fetch(`${base}/api/search?q=quy`, { headers: { Authorization: "Bearer not.a.real-token" } })
  assert.equal(bad.status, 401)
})

test("PKCE: a wrong code verifier is rejected", async () => {
  const { code } = await runMcpAuthorize(
    globalThis.__claudeClientId,
    "https://claude.ai/api/mcp/auth_callback",
    {
      state: "s2",
      codeChallenge: sha256Challenge(randomBytes(32).toString("hex")),
      verifier: undefined,
    },
  )
  const tok = await fetch(`${base}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      code_verifier: randomBytes(32).toString("hex"), // wrong verifier
      redirect_uri: "https://claude.ai/api/mcp/auth_callback",
    }),
  })
  assert.equal(tok.status, 400)
  const body = await json(tok)
  assert.equal(body.error, "invalid_grant")
})

test("refresh_token grant issues a new access token", async () => {
  const tok = await fetch(`${base}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
  })
  assert.equal(tok.status, 200)
  const body = await json(tok)
  assert.ok(body.access_token)
  const api = await fetch(`${base}/api/search?q=quy`, { headers: { Authorization: `Bearer ${body.access_token}` } })
  assert.equal(api.status, 200)
})

test("authorize rejects an unregistered redirect_uri", async () => {
  const params = new URLSearchParams({
    client_id: globalThis.__claudeClientId,
    redirect_uri: "https://not-registered.example.com/cb",
    response_type: "code",
    state: "s3",
  })
  const res = await fetch(`${base}/oauth/authorize?${params}`, { redirect: "manual" })
  assert.equal(res.status, 400)
})

test("callback with an unknown state is a hard error, not a redirect", async () => {
  const res = await fetch(`${base}/oauth/callback?code=x&state=never-issued`, { redirect: "manual" })
  assert.equal(res.status, 400)
})

test("email outside the allowed domain is denied at the callback", async () => {
  GOOGLE.emailToIssue = "outsider@gmail.com"
  const params = new URLSearchParams({ mode: "web", return_to: "/" })
  const auth = await fetch(`${base}/oauth/authorize?${params}`, { redirect: "manual" })
  assert.equal(auth.status, 302)
  const googleState = new URL(auth.headers.get("location")).searchParams.get("state")
  const cb = await fetch(`${base}/oauth/callback?code=mock&state=${googleState}`, { redirect: "manual" })
  assert.equal(cb.status, 403)
  GOOGLE.emailToIssue = "tuan@obacker.com"
})

test("web session: anonymous GET / redirects to Google; after sign-in the cookie opens the site", async () => {
  const anon = await fetch(`${base}/`, { redirect: "manual" })
  assert.equal(anon.status, 302)
  const authLoc = anon.headers.get("location")
  assert.ok(authLoc.startsWith("/oauth/authorize?"), authLoc)
  assert.ok(authLoc.includes("mode=web"))

  // finish the flow
  const auth = await fetch(`${base}${authLoc}`, { redirect: "manual" })
  assert.equal(auth.status, 302)
  const googleState = new URL(auth.headers.get("location")).searchParams.get("state")
  const cb = await fetch(`${base}/oauth/callback?code=mock&state=${googleState}`, { redirect: "manual" })
  assert.equal(cb.status, 302)
  const setCookie = cb.headers.get("set-cookie")
  assert.ok(setCookie?.startsWith("sop_session="), setCookie)
  const cookie = setCookie.split(";")[0]

  const home = await fetch(`${base}/`, { headers: { Cookie: cookie } })
  assert.equal(home.status, 200)
  const html = await home.text()
  assert.ok(html.length > 0)

  // deep link: an unauthenticated document path redirects and comes back to it
  const deepAnon = await fetch(`${base}/02_NoiBo/whatever.html`, { redirect: "manual" })
  assert.equal(deepAnon.status, 302)
  const deepUrl = new URL(deepAnon.headers.get("location"), base)
  assert.equal(deepUrl.searchParams.get("return_to"), "/02_NoiBo/whatever.html")

  // a forged session cookie is rejected (manual: the 302 must not be followed)
  const forged = await fetch(`${base}/`, { headers: { Cookie: "sop_session=forged.value" }, redirect: "manual" })
  assert.equal(forged.status, 302)
})

test("web gate keeps /healthz open but /api still demands a bearer", async () => {
  assert.equal((await fetch(`${base}/healthz`)).status, 200)
  assert.equal((await fetch(`${base}/api/search?q=quy`)).status, 401)
})
