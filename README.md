# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## MCP search API

This repository is deployed as a single Cloud Run service that serves both the
Quartz static site and a Node.js MCP search server (same container, port 8080).

Endpoints:

- `/mcp` — MCP endpoint (streamable HTTP transport), MCP-OAuth protected.
- `/api/search?q=&folder=&status=&type=` — REST full-text search over the SOP
  vault index (all parameters optional), bearer-token protected.
- `/api/document/<code>` — fetch a single document by its SOP code.
- `/healthz` — health probe (open).

MCP tools exposed on `/mcp`:

- `search_documents` — full-text search across the SOP vault.
- `get_document` — retrieve a document's full content by code.
- `list_documents` — list documents with optional folder/status/type filters.

The search index (`dist/vault-index.json`) is built at image-build time by
`scripts/build-index.mjs` and is the only data source for the MCP tools at
runtime — the container never reads `content/` directly.

## Authentication

Auth is handled inside the app (see `src/oauth.mjs`), not by Cloud Run IAP:

- **Static site** — Google Sign-in web session (cookie `sop_session`, 7 days,
  HttpOnly). Anonymous visitors are redirected through Google and back to the
  page they requested.
- **`/mcp` and `/api`** — MCP OAuth 2.1 flow (RFC 9728 discovery, RFC 8414
  metadata, RFC 7591 dynamic client registration, PKCE S256). Claude registers
  itself, the user signs in with their Google account once, and Claude holds
  a short-lived bearer token. Tokens are opaque HMAC-signed values (stateless,
  valid on any Cloud Run instance): access 1 h, refresh 90 days.
- **Email allowlist** — `EMAIL_DOMAIN` (currently `obacker.com`). Accounts
  outside the domain are denied at sign-in.

The Google OAuth client (type: web application) is created in the Google Cloud
project `obacker-ai`. Required redirect URI: `https://sop.obacker.com/oauth/callback`.

### Connecting Claude to the SOP vault

In Claude (web, desktop, or mobile): Customize → Connectors → Add custom
connector → paste `https://sop.obacker.com/mcp` → Add. When prompted, sign in
with the oBacker Google account. Leave the OAuth client fields blank — Claude
discovers the endpoints and registers itself. No config file, no API key, no
code.

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
