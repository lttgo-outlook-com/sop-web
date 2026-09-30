#!/usr/bin/env bash
set -euo pipefail

# ==============================================================================
# Deploy oBacker SOP Web to Google Cloud Run via Google Cloud Build
# Does NOT use GitHub Actions.
# ==============================================================================

PROJECT_ID="obacker-ai"
REGION="asia-southeast1"
SERVICE_NAME="sop-web"
IMAGE="asia-southeast1-docker.pkg.dev/${PROJECT_ID}/obk/sop-web:latest"

echo "==> [1/2] Submitting build to Google Cloud Build..."
gcloud builds submit . \
  --tag="${IMAGE}" \
  --project="${PROJECT_ID}" \
  --timeout=600s

echo "==> [2/2] Deploying container to Cloud Run with Direct IAP..."
gcloud run deploy "${SERVICE_NAME}" \
  --image="${IMAGE}" \
  --project="${PROJECT_ID}" \
  --region="${REGION}" \
  --platform=managed \
  --port=8080 \
  --no-allow-unauthenticated \
  --no-default-url \
  --iap \
  --min-instances=0 \
  --max-instances=5 \
  --cpu=1 \
  --memory=512Mi \
  --timeout=30s \
  --container-concurrency=50

echo "==> Deploy completed successfully!"
echo "URL: https://${SERVICE_NAME}-648536980516.${REGION}.run.app"
echo "Domain: https://sop.obacker.com"
