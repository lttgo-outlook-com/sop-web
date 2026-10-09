/**
 * search.mjs — Pure BM25 + metadata search engine over the build-time index.
 *
 * No I/O except loading the index JSON once (loadIndex). All other functions
 * operate on in-memory structures only, so tests can inject a synthetic index
 * via createSearchEngine(indexJson) without touching the filesystem.
 *
 * The tokenizer here MUST stay identical to scripts/build-index.mjs:
 * lowercase, NFD diacritic fold, split on non-alphanumeric, min token length
 * 2, same stopword set. If the indexer changes, change both.
 */

import { readFileSync } from "node:fs"

export const STOPWORDS = new Set([
  "va",
  "cua",
  "la",
  "trong",
  "cho",
  "voi",
  "theo",
  "duoc",
  "khong",
  "ve",
  "neu",
  "khi",
  "toi",
  "cung",
  "tu",
  "doi",
  "hoac",
  "nhan",
])

export function fold(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

/** Identical to scripts/build-index.mjs tokenize(): stopword filtering
 *  happens at term-frequency build time (indexer side); query terms get the
 *  same stopword filter applied in bm25(). */
export function tokenize(text) {
  return fold(text)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((t) => t.length >= 2)
}

const K1 = 1.5
const B = 0.75
const EXACT_SCORE = 1000

function normalizeFilter(value) {
  return value == null || value === "" ? null : fold(String(value).trim())
}

function makeFilterMatcher(filters) {
  const folder = normalizeFilter(filters.folder)
  const status = normalizeFilter(filters.status)
  const type = normalizeFilter(filters.type)
  return (doc) =>
    (folder == null || fold(doc.folder) === folder) &&
    (status == null || fold(doc.status) === status) &&
    (type == null || fold(doc.type) === type)
}

function firstWords(text, n) {
  const words = String(text ?? "")
    .split(/\s+/)
    .filter(Boolean)
  return words.slice(0, n).join(" ")
}

/** Position of the first (folded) occurrence of `term` in `text`.
 *  Builds the folded form by walking NFD and dropping combining marks —
 *  the same folding the tokenizer uses, so "quy trinh" matches "quy trình".
 *  Vietnamese NFC text has exactly one character per folded character, so
 *  the index in the folded string equals the index in the NFC text.
 *  Returns -1 when not found. */
function indexOfFolded(text, term) {
  if (!term) return -1
  const nfd = text.normalize("NFD")
  let nf = ""
  for (const ch of nfd) {
    if (!/[\u0300-\u036f]/.test(ch)) nf += ch
  }
  return nf.indexOf(term)
}

/** ~60 words centered on the first occurrence of `term` in `text`.
 *  Prefixes with "..." when the match is not at the very start, appends
 *  "..." when the window does not reach the end. */
function makeSnippet(text, term) {
  const body = String(text ?? "").normalize("NFC")
  if (!term) return firstWords(body, 40)
  const idx = indexOfFolded(body, fold(term))
  if (idx < 0) return firstWords(body, 40)
  const start = Math.max(0, idx - 220)
  const end = Math.min(body.length, idx + term.length + 320)
  let snippet = body.slice(start, end).replace(/\s+/g, " ").trim()
  if (idx > 0) snippet = "..." + snippet
  if (end < body.length) snippet = snippet + "..."
  return snippet
}

function publicResult(doc, excerpt, matchType, score) {
  return {
    code: doc.code,
    title: doc.title,
    folder: doc.folder,
    status: doc.status,
    version: doc.version,
    release: doc.release,
    type: doc.type,
    id: doc.id,
    path: doc.id,
    excerpt,
    match_type: matchType,
    score,
  }
}

export function createSearchEngine(indexJson) {
  const docs = indexJson?.docs ?? []

  // Per-term document frequency and average doc length (BM25 runtime state).
  const df = new Map()
  for (const doc of docs) {
    for (const term of Object.keys(doc.tf ?? {})) {
      df.set(term, (df.get(term) ?? 0) + 1)
    }
  }
  const avgLen = docs.length ? docs.reduce((sum, d) => sum + (d.len ?? 0), 0) / docs.length : 0

  const byCodeOrId = new Map()
  for (const doc of docs) {
    if (doc.code) byCodeOrId.set(fold(doc.code), doc)
    if (doc.id) byCodeOrId.set(fold(doc.id), doc)
  }

  /** Tier 1: metadata exact match, then code prefix.
   *  Returns null when neither applies, in which case the caller runs BM25.
   *  Tier 1 wins entirely: when it returns anything, BM25 results are not
   *  mixed in. */
  function tier1(query, candidates) {
    const q = fold(String(query ?? "").trim())
    if (!q) return []

    // Exact match on code / codeField / any alias (case-insensitive).
    let exact = null
    for (const doc of candidates) {
      if (fold(doc.code) === q) {
        exact = doc
        break
      }
      if (doc.codeField && fold(doc.codeField) === q) {
        exact = doc
        break
      }
      if (doc.aliases?.some((a) => fold(a) === q)) {
        exact = doc
        break
      }
    }
    if (exact) {
      return [publicResult(exact, firstWords(exact.plainText, 40), "exact", EXACT_SCORE)]
    }

    // Code prefix: "OBK-QCTC" matches OBK-QCTC-01, -02, ... The prefix must
    // end on a code boundary (next char is '-' or end of code) so e.g.
    // "OBK-QCT" does not match "OBK-QCTC-01".
    const looksLikeCode = q.includes("-") && q.length >= 4
    if (!looksLikeCode) return []
    const hits = []
    for (const doc of candidates) {
      for (const code of [doc.code, doc.codeField]) {
        if (!code) continue
        const c = fold(code)
        if (c.startsWith(q) && (c.length === q.length || c[q.length] === "-")) {
          hits.push(doc)
          break
        }
      }
    }
    hits.sort((a, b) => fold(a.code).localeCompare(fold(b.code)))
    return hits.map((d) => publicResult(d, firstWords(d.plainText, 40), "code-prefix", EXACT_SCORE))
  }

  /** Tier 2: BM25 over query terms. OR semantics — a doc matches when ANY
   *  query term hits. k1=1.5, b=0.75, idf=(N-df+0.5)/(df+0.5) with N, df and
   *  avgLen over the FULL corpus (built once in loadIndex); df ≤ N always,
   *  so idf stays non-negative even when filters shrink the candidates. */
  function bm25(query, candidates) {
    const terms = [...new Set(tokenize(String(query ?? "")))].filter((t) => !STOPWORDS.has(t))
    if (!terms.length) return []
    const N = docs.length
    const scored = []
    for (const doc of candidates) {
      const len = doc.len ?? 0
      let score = 0
      for (const term of terms) {
        const tf = doc.tf?.[term] ?? 0
        if (!tf) continue
        const d = df.get(term) ?? 0
        const idf = (N - d + 0.5) / (d + 0.5)
        const denom = tf + K1 * (1 - B + (B * len) / (avgLen || 1))
        score += (idf * (tf * (K1 + 1))) / denom
      }
      if (score > 0) scored.push({ doc, score })
    }
    scored.sort((a, b) => b.score - a.score || fold(a.doc.id).localeCompare(fold(b.doc.id)))
    return scored.map(({ doc, score }) => {
      const tfCounts = terms.map((t) => [t, doc.tf?.[t] ?? 0]).filter(([, n]) => n > 0)
      tfCounts.sort((a, b) => b[1] - a[1])
      const topTerm = tfCounts[0]?.[0] ?? terms[0]
      return publicResult(doc, makeSnippet(doc.plainText, topTerm), "keyword", score)
    })
  }

  function search(query, { limit = 10, folder, status, type } = {}) {
    const startedAt = performance.now()
    const queryStr = String(query ?? "")
    const candidates = docs.filter(makeFilterMatcher({ folder, status, type }))
    let results
    if (queryStr.trim() === "") {
      results = []
    } else {
      const t1 = tier1(queryStr, candidates)
      results = t1.length ? t1 : bm25(queryStr, candidates)
    }
    const total = results.length
    return {
      results: results.slice(0, limit),
      total,
      queryMs: Number((performance.now() - startedAt).toFixed(2)),
    }
  }

  function getDocument(codeOrId) {
    const q = fold(String(codeOrId ?? "").trim())
    if (!q) return null
    return byCodeOrId.get(q) ?? null
  }

  function listDocuments({ folder, type, status, limit = 50 } = {}) {
    const matcher = makeFilterMatcher({ folder, type, status })
    const sorted = [...docs].sort((a, b) => fold(a.id).localeCompare(fold(b.id)))
    return sorted
      .filter(matcher)
      .slice(0, limit)
      .map((d) => ({
        code: d.code,
        title: d.title,
        folder: d.folder,
        status: d.status,
        version: d.version,
        release: d.release,
        type: d.type,
      }))
  }

  return {
    search,
    getDocument,
    listDocuments,
    docCount: docs.length,
    indexGeneratedAt: indexJson?.generatedAt ?? null,
  }
}

/** Load the index JSON once and build the runtime structures. */
export function loadIndex(path) {
  const indexJson = JSON.parse(readFileSync(path, "utf8"))
  return createSearchEngine(indexJson)
}
