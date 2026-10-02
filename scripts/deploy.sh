#!/usr/bin/env bash
set -euo pipefail

# ==============================================================
# Deploy oBacker SOP Web to Google Cloud Run via Google Cloud Build
# Does NOT use GitHub Actions.
#
# Auth is handled IN the app (src/oauth.mjs): static site behind a
# Google Sign-in web session, /mcp + /api behind MCP OAuth bearer
# tokens. Cloud Run IAP is NOT used.
#
# Secrets live in Secret Manager (created once by scripts/setup-secrets.sh):
#   sop-web-google-client-secret -> GOOGLE_CLIENT_SECRET
#   sop-web-oauth-hmac-key       -> OAUTH_HMAC_KEY
# Required env vars before running (non-secret, or read from ./.env):
#   GOOGLE_CLIENT_ID      - Google OAuth client (web) for obacker-ai
# ==============================================================

PROJECT_ID="obacker-ai"
REGION="asia-southeast1"
SERVICE_NAME="sop-web"
# Immutable tag per deploy (commit + time) so every revision can be rolled back.
TAG="$(git rev-parse --short HEAD)-$(date +%Y%m%d%H%M%S)"
IMAGE="asia-southeast1-docker.pkg.dev/${PROJECT_ID}/obk/sop-web:${TAG}"
BASE_URL="https://sop.obacker.com"

# Load local deploy secrets from ./.env if present (gitignored). Lets
# `npm run deploy` run without exporting vars by hand. See .env.example.
if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

for var in GOOGLE_CLIENT_ID; do
  if [[ -z "${!var:-}" ]]; then
    echo "ERROR: env var ${var} is not set. Export it before running this script." >&2
    exit 1
  fi
done

echo "==> [1/2] Submitting build to Google Cloud Build..."
gcloud builds submit . \
  --tag="${IMAGE}" \
  --project="${PROJECT_ID}" \
  --timeout=600s

echo "==> [2/2] Deploying container to Cloud Run (app-level auth, no IAP)..."
gcloud run deploy "${SERVICE_NAME}" \
  --image="${IMAGE}" \
  --project="${PROJECT_ID}" \
  --region="${REGION}" \
  --platform=managed \
  --port=8080 \
  --allow-unauthenticated \
  --no-default-url \
  --no-iap \
  --set-env-vars "BASE_URL=${BASE_URL},GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID},EMAIL_DOMAIN=obacker.com" \
  --set-secrets "GOOGLE_CLIENT_SECRET=sop-web-google-client-secret:latest,OAUTH_HMAC_KEY=sop-web-oauth-hmac-key:latest" \
  --startup-probe "httpGet.path=/healthz,httpGet.port=8080,periodSeconds=3,failureThreshold=20,timeoutSeconds=3" \
  --min-instances=0 \
  --max-instances=5 \
  --cpu=1 \
  --memory=512Mi \
  --timeout=30s \
  --concurrency=50

echo "==> Deploy completed successfully!"
echo "Image: ${IMAGE}"
echo "Domain: https://sop.obacker.com"
