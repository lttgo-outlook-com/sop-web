# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## MCP search API

This repository is deployed as a single Cloud Run service that serves both the
Quartz static site and a Node.js MCP search server (same container, port 8080,
behind Google IAP — no public access without authentication).

Endpoints:

- `/mcp` — MCP endpoint (streamable HTTP transport).
- `/api/search?q=&folder=&status=&type=` — REST full-text search over the SOP
  vault index (all parameters optional).
- `/api/document/<code>` — fetch a single document by its SOP code.
- `/healthz` — health probe.

MCP tools exposed on `/mcp`:

- `search_documents` — full-text search across the SOP vault.
- `get_document` — retrieve a document's full content by code.
- `list_documents` — list documents with optional folder/status/type filters.

The search index (`dist/vault-index.json`) is built at image-build time by
`scripts/build-index.mjs` and is the only data source for the MCP tools at
runtime — the container never reads `content/` directly.

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
