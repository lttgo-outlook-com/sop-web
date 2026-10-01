/**
 * oauth.mjs — MCP OAuth authorization server (MCP auth spec 2025-06-18),
 * proxying Google Sign-in as the upstream identity provider.
 *
 * Claude custom connectors reach this server with no credentials, read the
 * RFC 9728 protected-resource metadata from the 401, discover this
 * authorization server via RFC 8414, register via RFC 7591 (or use a Client
 * ID Metadata Document), send the user to /oauth/authorize, and we bounce
 * the user to accounts.google.com. After Google signs the user in and the
 * email-domain check passes, we issue a short-lived authorization code that
 * Claude exchanges at /oauth/token. The resulting bearer tokens are opaque,
 * HMAC-signed (stateless, valid on any Cloud Run instance).
 *
 * The same Google client also backs the website login (session cookie flow
 * via /oauth/authorize?mode=web).
 *
 * Endpoints mounted by the server:
 *   GET  /.well-known/oauth-protected-resource[/mcp]   RFC 9728
 *   GET  /.well-known/oauth-authorization-server        RFC 8414
 *   POST /oauth/register                                RFC 7591 (DCR)
 *   GET  /oauth/authorize                               302 -> Google (MCP + web)
 *   GET  /oauth/callback                                Google -> 302 to client
 *   POST /oauth/token                                   authorization_code | refresh_token
 *
 * No external dependencies: node:crypto + global fetch only.
 */

import {
  createHash,
  createHmac,
  createPublicKey,
  randomBytes,
  timingSafeEqual,
  verify as cryptoVerify,
} from "node:crypto"

const b64u = (data) => Buffer.from(data).toString("base64url")

const ACCESS_TTL_S = 3600
const REFRESH_TTL_S = 90 * 86400
const CODE_TTL_S = 600
const PENDING_TTL_MS = 10 * 60 * 1000
const WEB_SESSION_TTL_S = 7 * 86400
const JWKS_TTL_MS = 10 * 60 * 1000
const CLIENT_TTL_MS = 7 * 86400 * 1000
const MAX_CLIENTS = 1000

export function createOAuth(cfg) {
  const {
    baseUrl,
    hmacKey,
    googleClientId,
    googleClientSecret,
    emailDomain = "",
  } = cfg
  if (!hmacKey || hmacKey.length < 32) {
    throw new Error("createOAuth: hmacKey must be a random string of >= 32 chars")
  }
  if (!googleClientId || !googleClientSecret) {
    throw new Error("createOAuth: googleClientId and googleClientSecret are required")
  }

  // Injectable endpoints for tests.
  const googleAuthEndpoint =
    cfg.googleAuthEndpoint ?? "https://accounts.google.com/o/oauth2/v2/auth"
  const googleTokenEndpoint = cfg.googleTokenEndpoint ?? "https://oauth2.googleapis.com/token"
  const googleCertsUrl = cfg.googleCertsUrl ?? "https://www.googleapis.com/oauth2/v3/certs"
  const jwksStatic = cfg.jwks ?? null // { kid: KeyObject } — tests only

  const callbackUrl = `${baseUrl}/oauth/callback`
  const resourceMetadataUrl = `${baseUrl}/.well-known/oauth-protected-resource`

  // --- HMAC-signed opaque tokens -------------------------------------------

  function signObj(obj) {
    const payload = b64u(JSON.stringify(obj))
    const mac = b64u(createHmac("sha256", hmacKey).update(payload).digest())
    return `${payload}.${mac}`
  }

  function verifyToken(token, typ) {
    if (typeof token !== "string") return null
    const dot = token.lastIndexOf(".")
    if (dot < 0) return null
    const payload = token.slice(0, dot)
    const given = Buffer.from(token.slice(dot + 1), "base64url")
    const expect = createHmac("sha256", hmacKey).update(payload).digest()
    if (expect.length !== given.length || !timingSafeEqual(expect, given)) return null
    let obj
    try {
      obj = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"))
    } catch {
      return null
    }
    if (obj.typ !== typ || typeof obj.exp !== "number" || obj.exp * 1000 < Date.now()) return null
    return obj
  }

  // --- Dynamic clients (RFC 7591) + CIMD -----------------------------------

  // client_id -> { name, redirectUris, at }
  const clients = new Map()

  function clientKey(name, redirectUris) {
    const raw = `${name}|${[...redirectUris].sort().join("|")}`
    return "mcpc_" + createHash("sha256").update(raw).digest("hex").slice(0, 24)
  }

  function upsertClient(name, redirectUris) {
    // Deterministic id: re-registration of the same client is idempotent.
    const id = clientKey(name ?? "mcp-client", redirectUris)
    clients.set(id, { name: name ?? "mcp-client", redirectUris, at: Date.now() })
    sweepClients()
    return id
  }

  function sweepClients() {
    if (clients.size < MAX_CLIENTS) return
    const now = Date.now()
    for (const [id, c] of clients) if (now - c.at > CLIENT_TTL_MS) clients.delete(id)
    if (clients.size >= MAX_CLIENTS) {
      // still over the cap: drop the oldest
      for (const [id] of clients) {
        clients.delete(id)
        if (clients.size < MAX_CLIENTS) break
      }
    }
  }

  // Client ID Metadata Document cache (RFC 9728 CIMD): URL -> { at, doc }
  const cimdCache = new Map()

  async function fetchCimd(docUrl) {
    const hit = cimdCache.get(docUrl)
    if (hit && Date.now() - hit.at < JWKS_TTL_MS) return hit.doc
    const res = await fetch(docUrl, { signal: AbortSignal.timeout(10_000) })
    if (!res.ok) throw new Error(`CIMD fetch failed: ${res.status}`)
    const doc = await res.json()
    cimdCache.set(docUrl, { at: Date.now(), doc })
    return doc
  }

  function isLoopback(url) {
    return url.protocol === "http:" && (url.hostname === "localhost" || url.hostname === "127.0.0.1")
  }

  /** Exact match, or port-agnostic match for loopback redirects (RFC 8252). */
  function redirectMatches(declaredList, actual) {
    let a
    try {
      a = new URL(actual)
    } catch {
      return false
    }
    for (const declared of declaredList) {
      if (declared === actual) return true
      let d
      try {
        d = new URL(declared)
      } catch {
        continue
      }
      if (isLoopback(d) && isLoopback(a) && d.hostname === a.hostname) return true
    }
    return false
  }

  /** Origin of the incoming request — discovery URLs must match what the
   *  client actually reached us at, not a configured constant. */
  function originOf(req) {
    const proto = req.headers["x-forwarded-proto"]?.split(",")[0]?.trim() ?? req.protocol
    return `${proto}://${req.headers.host}`
  }

  /**
   * Resolve a client_id to its registered redirect URIs.
   * Accepts: a registered client id, a CIMD document URL, or a well-known
   * Anthropic client. Returns { name, redirectUris } or null.
   */
  async function resolveClient(clientId) {
    if (typeof clientId !== "string" || clientId === "") return null
    const known = clients.get(clientId)
    if (known) return known
    if (clientId.startsWith("https://")) {
      try {
        const doc = await fetchCimd(clientId)
        const uris = Array.isArray(doc.redirect_uris) ? doc.redirect_uris : []
        if (uris.length === 0) return null
        return { name: doc.client_name ?? "cimd-client", redirectUris: uris, cimd: true }
      } catch {
        return null
      }
    }
    return null
  }

  // --- Pending Google sign-in states (short-lived, per-instance) ------------

  const pending = new Map() // state -> { mode, ... }

  function newPending(obj) {
    const state = randomBytes(24).toString("hex")
    pending.set(state, { ...obj, exp: Date.now() + PENDING_TTL_MS })
    return state
  }

  function takePending(state) {
    const p = pending.get(state)
    if (!p) return null
    pending.delete(state)
    if (p.exp < Date.now()) return null
    return p
  }

  // --- Google id_token verification (JWKS, RS256) ---------------------------

  let jwksCache = { at: 0, keys: null }

  async function getJwks() {
    if (jwksStatic) return jwksStatic
    const now = Date.now()
    if (jwksCache.keys && now - jwksCache.at < JWKS_TTL_MS) return jwksCache.keys
    const res = await fetch(googleCertsUrl, { signal: AbortSignal.timeout(10_000) })
    if (!res.ok) throw new Error(`JWKS fetch failed: ${res.status}`)
    const { keys } = await res.json()
    const map = {}
    for (const k of keys) map[k.kid] = createPublicKey({ key: k, format: "jwk" })
    jwksCache = { at: now, keys: map }
    return map
  }

  async function verifyGoogleIdToken(idToken) {
    const parts = String(idToken).split(".")
    if (parts.length !== 3) return null
    let header, claims
    try {
      header = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"))
      claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"))
    } catch {
      return null
    }
    if (claims.aud !== googleClientId && !(Array.isArray(claims.aud) && claims.aud.includes(googleClientId))) {
      return null
    }
    if (claims.iss !== "https://accounts.google.com" && claims.iss !== "accounts.google.com") return null
    if (typeof claims.exp !== "number" || claims.exp * 1000 < Date.now()) return null
    const keys = await getJwks()
    const key = keys[header.kid]
    if (!key) return null
    // verify(algorithm, data, key, signature): signing input is the data, the
    // base64url signature is the LAST argument.
    const ok = cryptoVerify(
      null,
      Buffer.from(`${parts[0]}.${parts[1]}`),
      key,
      Buffer.from(parts[2], "base64url"),
    )
    if (!ok) return null
    return claims
  }

  function emailAllowed(email) {
    if (!emailDomain) return true
    return String(email).toLowerCase().endsWith(`@${emailDomain.toLowerCase()}`)
  }

  // --- OAuth handlers (express-style) ---------------------------------------

  function htmlError(status, title, detail) {
    return (req, res) => {
      res
        .status(status)
        .type("html")
        .send(
          `<!doctype html><meta charset="utf-8"><title>${title}</title>` +
            `<p style="font-family:system-ui;padding:2rem">${title}</p>` +
            (detail ? `<p style="font-family:system-ui;color:#555">${detail}</p>` : "") +
            `<p><a href="/">Quay về trang chính</a></p>`,
        )
    }
  }

  async function handleRegister(req, res) {
    const body = req.body ?? {}
    const uris = Array.isArray(body.redirect_uris) ? body.redirect_uris : []
    if (uris.length === 0) {
      res.status(400).json({ error: "invalid_redirect_uri", error_description: "redirect_uris required" })
      return
    }
    for (const u of uris) {
      let parsed
      try {
        parsed = new URL(u)
      } catch {
        res.status(400).json({ error: "invalid_redirect_uri", error_description: `bad uri: ${u}` })
        return
      }
      const okScheme = parsed.protocol === "https:" || isLoopback(parsed)
      if (!okScheme) {
        res.status(400).json({ error: "invalid_redirect_uri", error_description: `bad scheme: ${u}` })
        return
      }
    }
    const id = upsertClient(body.client_name, uris)
    res.status(201).json({
      client_id: id,
      client_name: body.client_name,
      redirect_uris: uris,
      grant_types_supported: ["authorization_code", "refresh_token"],
      response_types_supported: ["code"],
      token_endpoint_auth_method: body.token_endpoint_auth_method ?? "none",
    })
  }

  function googleRedirectUrl(state) {
    const params = new URLSearchParams({
      client_id: googleClientId,
      redirect_uri: callbackUrl,
      response_type: "code",
      scope: "openid email profile",
      state,
      prompt: "select_account",
    })
    return `${googleAuthEndpoint}?${params}`
  }

  async function handleAuthorize(req, res) {
    const q = req.query

    // Website session flow (not part of the MCP protocol).
    if (q.mode === "web") {
      let returnTo = typeof q.return_to === "string" ? q.return_to : "/"
      if (!returnTo.startsWith("/") || returnTo.startsWith("//") || returnTo.startsWith("/oauth/")) {
        returnTo = "/"
      }
      const state = newPending({ mode: "web", returnTo })
      res.redirect(googleRedirectUrl(state))
      return
    }

    // MCP authorization-code flow.
    const clientId = typeof q.client_id === "string" ? q.client_id : ""
    const redirectUri = typeof q.redirect_uri === "string" ? q.redirect_uri : ""
    const state = typeof q.state === "string" ? q.state : ""
    const codeChallenge = typeof q.code_challenge === "string" ? q.code_challenge : ""
    const codeChallengeMethod = q.code_challenge_method === "S256" ? "S256" : undefined

    if (q.response_type !== "code") {
      res.status(400).type("html").send("<p>unsupported_response_type</p>")
      return
    }
    const client = await resolveClient(clientId)
    if (!client || !redirectMatches(client.redirectUris, redirectUri)) {
      res.status(400).type("html").send("<p>invalid redirect_uri — liên kết không được đăng ký</p>")
      return
    }
    const s = newPending({
      mode: "mcp",
      client_id: clientId,
      redirect_uri: redirectUri,
      mcp_state: state,
      code_challenge: codeChallenge,
      code_challenge_method: codeChallengeMethod,
      scope: typeof q.scope === "string" ? q.scope : "",
    })
    res.redirect(googleRedirectUrl(s))
  }

  async function handleGoogleCallback(req, res) {
    const { code, state, error, error_description } = req.query
    if (error) {
      return htmlError(400, "Google từ chối đăng nhập", String(error_description ?? error))(req, res)
    }
    const pend = takePending(typeof state === "string" ? state : "")
    if (!pend) {
      return htmlError(400, "Phiên đăng nhập đã hết hạn", "Vui lòng thử lại từ đầu.")(req, res)
    }
    if (!code) return htmlError(400, "Thiếu mã xác thực từ Google")(req, res)

    let google
    try {
      const r = await fetch(googleTokenEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: String(code),
          client_id: googleClientId,
          client_secret: googleClientSecret,
          redirect_uri: callbackUrl,
        }),
        signal: AbortSignal.timeout(15_000),
      })
      google = await r.json()
      if (!r.ok) throw new Error(google.error_description ?? google.error ?? String(r.status))
    } catch (err) {
      return htmlError(502, "Không xác thực được với Google", err.message)(req, res)
    }

    let claims
    try {
      claims = await verifyGoogleIdToken(google.id_token)
    } catch {
      claims = null
    }
    const email = claims?.email
    const verified = claims?.email_verified === true || claims?.email_verified === undefined
    if (!claims || !email || !verified) {
      return htmlError(401, "Không đọc được thông tin tài khoản Google")(req, res)
    }
    if (!emailAllowed(email)) {
      return htmlError(403, "Tài khoản không được cấp quyền", "Chỉ tài khoản nội bộ mới được truy cập.")(
        req,
        res,
      )
    }

    if (pend.mode === "mcp") {
      const codeToken = signObj({
        typ: "code",
        sub: email,
        client_id: pend.client_id,
        redirect_uri: pend.redirect_uri,
        code_challenge: pend.code_challenge || null,
        code_challenge_method: pend.code_challenge_method ?? null,
        scope: pend.scope,
        exp: Math.floor(Date.now() / 1000) + CODE_TTL_S,
        jti: randomBytes(8).toString("hex"),
      })
      const sep = pend.redirect_uri.includes("?") ? "&" : "?"
      const target = `${pend.redirect_uri}${sep}code=${encodeURIComponent(codeToken)}` +
        (pend.mcp_state ? `&state=${encodeURIComponent(pend.mcp_state)}` : "")
      res.redirect(target)
      return
    }

    // web session
    const session = signObj({
      typ: "web",
      sub: email,
      exp: Math.floor(Date.now() / 1000) + WEB_SESSION_TTL_S,
    })
    res.setHeader(
      "Set-Cookie",
      `sop_session=${session}; Path=/; HttpOnly; SameSite=Lax${baseUrl.startsWith("https:") ? "; Secure" : ""}; Max-Age=${WEB_SESSION_TTL_S}`,
    )
    res.redirect(pend.returnTo || "/")
  }

  function verifyPkce(challenge, verifier) {
    if (!challenge || !verifier) return false
    const digest = b64u(createHash("sha256").update(String(verifier)).digest())
    return timingSafeEqual(Buffer.from(digest), Buffer.from(String(challenge)))
  }

  async function handleToken(req, res) {
    const b = req.body ?? {}
    const grant = b.grant_type
    if (grant === "authorization_code") {
      const payload = verifyToken(b.code, "code")
      if (!payload) {
        res.status(400).json({ error: "invalid_grant", error_description: "code expired or invalid" })
        return
      }
      if (payload.code_challenge && !verifyPkce(payload.code_challenge, b.code_verifier)) {
        res.status(400).json({ error: "invalid_grant", error_description: "PKCE verification failed" })
        return
      }
      if (b.redirect_uri && payload.redirect_uri && !redirectMatches([payload.redirect_uri], b.redirect_uri)) {
        res.status(400).json({ error: "invalid_grant", error_description: "redirect_uri mismatch" })
        return
      }
      issueTokens(payload.sub, res)
      return
    }
    if (grant === "refresh_token") {
      const payload = verifyToken(b.refresh_token, "refresh")
      if (!payload) {
        res.status(400).json({ error: "invalid_grant", error_description: "refresh token expired or invalid" })
        return
      }
      issueTokens(payload.sub, res)
      return
    }
    res.status(400).json({ error: "unsupported_grant_type" })
  }

  function issueTokens(email, res) {
    const now = Math.floor(Date.now() / 1000)
    const access = signObj({ typ: "access", sub: email, exp: now + ACCESS_TTL_S })
    const refresh = signObj({ typ: "refresh", sub: email, exp: now + REFRESH_TTL_S, jti: randomBytes(8).toString("hex") })
    res.json({
      access_token: access,
      token_type: "Bearer",
      expires_in: ACCESS_TTL_S,
      refresh_token: refresh,
      scope: "openid email profile",
    })
  }

  // --- Discovery documents ----------------------------------------------------

  function handleResource(req, res) {
    const origin = originOf(req)
    res.json({
      resource: `${origin}/mcp`,
      authorization_servers: [origin],
      scopes_supported: [],
    })
  }

  function handleAsMetadata(req, res) {
    const origin = originOf(req)
    res.json({
      issuer: origin,
      authorization_endpoint: `${origin}/oauth/authorize`,
      token_endpoint: `${origin}/oauth/token`,
      registration_endpoint: `${origin}/oauth/register`,
      grant_types_supported: ["authorization_code", "refresh_token"],
      response_types_supported: ["code"],
      code_challenge_methods_supported: ["S256"],
      token_endpoint_auth_methods_supported: ["none", "client_secret_post"],
      scopes_supported: ["openid", "email", "profile"],
      service_documentation: `${origin}/`,
      client_id_metadata_document_supported: true,
    })
  }

  // --- Verification helpers used by the request gate -------------------------

  function bearerFrom(req) {
    const h = req.header("authorization")
    if (typeof h !== "string" || !h.toLowerCase().startsWith("bearer ")) return ""
    return h.slice(7).trim()
  }

  /** Returns the email of a valid MCP access token, or null. */
  function verifyBearer(req) {
    const p = verifyToken(bearerFrom(req), "access")
    return p && typeof p.sub === "string" ? { email: p.sub } : null
  }

  /** Returns the email of a valid website session cookie, or null. */
  function webSessionEmail(req) {
    const cookie = req.header("cookie")
    if (typeof cookie !== "string") return null
    for (const part of cookie.split(";")) {
      const eq = part.indexOf("=")
      if (eq < 0) continue
      const name = part.slice(0, eq).trim()
      if (name !== "sop_session") continue
      const p = verifyToken(part.slice(eq + 1).trim(), "web")
      return p && typeof p.sub === "string" ? p.sub : null
    }
    return null
  }

  /**
   * Express middleware: gate the static site behind the web session.
   * /api and /mcp are gated separately (401, not redirect), as are the
   * OAuth endpoints themselves and the health probe.
   */
  function handleWebAuth(req, res, next) {
    if (
      req.path.startsWith("/api") ||
      req.path.startsWith("/mcp") ||
      req.path.startsWith("/oauth") ||
      req.path.startsWith("/healthz") ||
      req.path.startsWith("/.well-known")
    ) {
      return next()
    }
    if (webSessionEmail(req)) return next()
    if (req.method !== "GET" && req.method !== "HEAD") return next()
    const q = new URLSearchParams({ mode: "web", return_to: req.path })
    res.redirect(302, `/oauth/authorize?${q}`)
  }

  return {
    resourceMetadataUrl,
    resourceMetadataFor: (req) => `${originOf(req)}/.well-known/oauth-protected-resource`,
    handleRegister,
    handleAuthorize,
    handleGoogleCallback,
    handleToken,
    handleResource,
    handleAsMetadata,
    handleWebAuth,
    verifyBearer,
    webSessionEmail,
    bearerFrom,
  }
}
