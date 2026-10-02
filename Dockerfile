# ==============================================================================
# oBacker SOP Web — Quartz static site + Node MCP search server
#
# The Node server (src/server.mjs) serves BOTH the static site and the API:
#   /               static site (Quartz build output from public/)
#   /mcp            MCP endpoint (streamable HTTP, MCP-OAuth bearer)
#   /api/search     REST full-text search (q, folder, status, type)
#   /api/document   REST document by code
#   /oauth/*        Google Sign-in bridge (web session + MCP OAuth)
#   /healthz        health probe
#
# Auth is in-app (src/oauth.mjs); Cloud Run IAP is NOT used.
#
# Nginx is no longer used — nginx.conf is legacy and intentionally NOT
# referenced anywhere in this file (it will be removed in a later step).
# ==============================================================================

# Stage 1: builder — full deps (incl. dev) to build the site + the search index
FROM node:24-slim AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx quartz build              # static site  -> public/
RUN node scripts/build-index.mjs  # search index -> dist/vault-index.json

# Stage 2 (deps): production-only node_modules, cached by package*.json alone
FROM node:24-alpine AS prod-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev

# Stage 3: runtime — non-root Node server serving static files + API
FROM node:24-alpine AS runtime
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=8080

RUN addgroup -S app && adduser -S app -G app

COPY --from=prod-deps /usr/src/app/node_modules ./node_modules
COPY --from=builder  /usr/src/app/public ./public
COPY --from=builder  /usr/src/app/dist/vault-index.json ./dist/vault-index.json
COPY --from=builder  /usr/src/app/src ./src
COPY --chown=app:app package*.json ./

USER app

EXPOSE 8080
CMD ["node", "src/server.mjs"]
