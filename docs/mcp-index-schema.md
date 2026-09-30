# oBacker SOP Search — Index Schema and MCP Tool Contracts

Internal tool. No auth in the service itself (Google IAP sits in front on
Cloud Run), no database — the build-time index is the only data source.

- Index producer: `scripts/build-index.mjs` → `dist/vault-index.json`
- Search engine: `src/search.mjs` (BM25 k1=1.5, b=0.75 + metadata tiers)
- Service: `src/server.mjs` (MCP Streamable HTTP at `/mcp`, REST under `/api`,
  Quartz static site at `/`)

## Index schema (`dist/vault-index.json`, schemaVersion 1)

```jsonc
{
  "schemaVersion": 1,
  "generatedAt": "ISO",
  "docCount": 672,
  "docs": [
    {
      "id": "02_NoiBo/OBK-SOP-NB-05_....md",   // relative path from content/
      "code": "OBK-SOP-NB-05",                  // document code (frontmatter or filename)
      "codeField": "OBK-SOP-NB-05",             // raw frontmatter code, may be ""
      "title": "OBK-SOP-NB-05. Tuyển dụng và onboarding nội bộ",
      "folder": "02_NoiBo",
      "type": "sop",                            // may be "", "can-cu", "van-ban", ...
      "status": "đang áp dụng",                  // may be ""
      "version": "R.1.0.0",                     // may be ""
      "aliases": ["OBK-SOP-NB-05"],
      "headings": ["1. MỤC ĐÍCH", ...],         // H2/H3 titles, plain text
      "plainText": "... markdown body stripped of wikilinks/hidden notes/tables ...",
      "raw": "... full original markdown incl frontmatter ...",
      "tf": { "quy": 12, "trinh": 8 },          // weighted term frequencies
      "len": 1234                               // sum of tf values
    }
  ]
}
```

`tf` is weighted: title x3, headings x2, body x1. Terms are lowercased with
Vietnamese diacritics folded (NFD, strip combining marks `\u0300-\u036f`);
stopwords removed; min token length 2. The query tokenizer in
`src/search.mjs` must stay identical to the indexer's.

## MCP tools (server `obacker-sop` v1.0.0, endpoint `POST /mcp`)

### `search_documents`

| Input    | Type             | Default | Notes                                                   |
| -------- | ---------------- | ------- | ------------------------------------------------------- |
| `query`  | string, required | —       | Code, code prefix, or free text (diacritic-insensitive) |
| `limit`  | number           | 10      | 1..50                                                   |
| `folder` | string           | —       | Exact, e.g. `02_NoiBo`                                  |
| `status` | string           | —       | Exact, case/diacritic-insensitive                       |
| `type`   | string           | —       | Exact, e.g. `sop`                                       |

Output (JSON text in `content[0].text`):

```jsonc
{
  "results": [
    {
      "code": "OBK-SOP-NB-05",
      "title": "...",
      "folder": "02_NoiBo",
      "status": "...",
      "version": "...",
      "type": "sop",
      "id": "02_NoiBo/OBK-SOP-NB-05_....md",
      "path": "02_NoiBo/OBK-SOP-NB-05_....md",
      "excerpt": "...", // tier 1: first 40 words; keyword: ~60 words centered on top term, "..." prefixed
      "match_type": "exact | code-prefix | keyword",
      "score": 1000, // 1000 for tier 1; BM25 float for keyword
    },
  ],
  "total": 3, // matches before limit
  "queryMs": 0.41,
}
```

Match tiers: Tier 1 (exact code/codeField/alias → `exact`; code prefix on a
boundary, e.g. `OBK-QCTC` → `OBK-QCTC-01/-02/...`) runs first and wins
entirely — no BM25 mixing. Tier 2 is BM25 OR-semantics (`keyword`). Filters
apply to both tiers. Empty query returns empty results.

### `get_document`

| Input  | Type             | Notes                                        |
| ------ | ---------------- | -------------------------------------------- |
| `code` | string, required | Document code or index id (`folder/file.md`) |

Output: full document — frontmatter fields (`id`, `code`, `codeField`,
`title`, `folder`, `type`, `status`, `version`, `aliases`, `headings`) plus
`content` = raw markdown. Unknown code → MCP tool error `document not found`.

### `list_documents`

| Input    | Type   | Default | Notes                             |
| -------- | ------ | ------- | --------------------------------- |
| `folder` | string | —       | Exact                             |
| `type`   | string | —       | Exact                             |
| `status` | string | —       | Exact, case/diacritic-insensitive |
| `limit`  | number | 50      | 1..200                            |

Output: `[{ code, title, folder, status, version, type }]` sorted by id.

## REST equivalents

- `GET /healthz` → `{ ok, docs, indexGeneratedAt }`
- `GET /api/search?q=&limit=&folder=&status=&type=` → same JSON as
  `search_documents`
- `GET /api/document/:code` — `:code` is an Express 5 named wildcard, so it
  also accepts index ids with slashes (`/api/document/02_NoiBo/....md`).
  Response is the same JSON as `get_document`; 404 `{ error: "not found" }`.
