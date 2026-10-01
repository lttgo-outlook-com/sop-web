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
# Required env vars before running (never commit them):
#   GOOGLE_CLIENT_ID      - Google OAuth client (web) for obacker-ai
#   GOOGLE_CLIENT_SECRET  - its secret
#   OAUTH_HMAC_KEY        - random string >= 32 chars (signs bearer tokens)
# ==============================================================

PROJECT_ID="obacker-ai"
REGION="asia-southeast1"
SERVICE_NAME="sop-web"
IMAGE="asia-southeast1-docker.pkg.dev/${PROJECT_ID}/obk/sop-web:latest"
BASE_URL="https://sop.obacker.com"

for var in GOOGLE_CLIENT_ID GOOGLE_CLIENT_SECRET OAUTH_HMAC_KEY; do
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
  --no-default-url \
  --no-iap \
  --set-env-vars "BASE_URL=${BASE_URL},GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID},GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET},OAUTH_HMAC_KEY=${OAUTH_HMAC_KEY},EMAIL_DOMAIN=obacker.com" \
  --min-instances=0 \
  --max-instances=5 \
  --cpu=1 \
  --memory=512Mi \
  --timeout=30s \
  --concurrency=50

echo "==> Deploy completed successfully!"
echo "Domain: https://sop.obacker.com"
