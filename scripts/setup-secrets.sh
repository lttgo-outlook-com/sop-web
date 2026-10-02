#!/usr/bin/env bash
set -euo pipefail

# One-time: move the OAuth secrets from ./.env into Secret Manager and let the
# Cloud Run runtime service account read them. Safe to re-run (adds a version).
PROJECT_ID="obacker-ai"
RUN_SA="648536980516-compute@developer.gserviceaccount.com"

[[ -f .env ]] || { echo "ERROR: ./.env not found" >&2; exit 1; }
set -a; source .env; set +a

put() { # name value
  if gcloud secrets describe "$1" --project="$PROJECT_ID" >/dev/null 2>&1; then
    printf '%s' "$2" | gcloud secrets versions add "$1" --project="$PROJECT_ID" --data-file=-
  else
    printf '%s' "$2" | gcloud secrets create "$1" --project="$PROJECT_ID" \
      --replication-policy=automatic --data-file=-
  fi
  gcloud secrets add-iam-policy-binding "$1" --project="$PROJECT_ID" \
    --member="serviceAccount:${RUN_SA}" --role=roles/secretmanager.secretAccessor >/dev/null
}

put sop-web-google-client-secret "${GOOGLE_CLIENT_SECRET:?missing}"
put sop-web-oauth-hmac-key "${OAUTH_HMAC_KEY:?missing}"
echo "Done. Rotate both values afterwards (old values sit in Cloud Build source tarballs)."
