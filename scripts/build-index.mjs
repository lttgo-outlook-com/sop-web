#!/usr/bin/env node
/**
 * build-index.mjs — Build-time search index generator for the SOP MCP server.
 *
 * Reads every markdown file under content/, parses frontmatter, extracts
 * headings and plain text, and writes a single JSON document collection to
 * dist/vault-index.json (schema version 1, see docs/mcp-index-schema.md).
 *
 * Run: node scripts/build-index.mjs   (from repo root; no dependencies)
 *
 * The index is the ONLY data source for the MCP search tools at runtime.
 * The Node runtime in the final Docker image never touches content/ —
 * it serves public/ (static) and dist/vault-index.json (search).
 */

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');
const OUT_DIR = join(ROOT, 'dist');
const OUT_FILE = join(OUT_DIR, 'vault-index.json');

// ---------------------------------------------------------------------------
// Minimal YAML frontmatter parser (flat scalars + string lists).
// The vault's frontmatter is flat by convention (see SOP CLAUDE.md sec. 8);
// nested structures are kept as raw strings, which is enough for metadata.
// ---------------------------------------------------------------------------
function parseFrontmatter(content) {
  const fm = {};
  const lines = content.split('\n');
  if (lines[0].trim() !== '---') return { fm, body: content };
  let i = 1;
  let currentListKey = null;
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '---') {
      i++;
      break;
    }
    const listMatch = line.match(/^\s{2,}-\s+(.*)$/);
    if (listMatch && currentListKey) {
      fm[currentListKey].push(unquote(listMatch[1].trim()));
      continue;
    }
    const kvMatch = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[1];
      const rawVal = kvMatch[2].trim();
      if (rawVal === '') {
        fm[key] = [];
        currentListKey = key;
      } else {
        fm[key] = unquote(rawVal);
        currentListKey = null;
      }
    }
  }
  return { fm, body: lines.slice(i).join('\n') };
}

function unquote(s) {
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

// ---------------------------------------------------------------------------
// Text extraction
// ---------------------------------------------------------------------------

/** Strip markdown noise for indexing and display: wikilinks, hidden notes,
 *  images, inline code markers, table pipes. Keeps plain prose. */
function toPlainText(md) {
  return md
    .replace(/%%[\s\S]*?%%/g, ' ') // Obsidian hidden comments
    .replace(/\[\[([^\]|]*)(?:\|([^\]]*))?\]\]/g, (_m, a, b) => (b || a || '').trim())
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '$1') // links -> label
    .replace(/`{1,3}/g, ' ')
    .replace(/^\s{0,3}\|.*$/gm, (l) => l.replace(/\|/g, ' ')) // table pipes
    .replace(/\r\n/g, '\n');
}

function extractHeadings(md) {
  const out = [];
  for (const line of md.split('\n')) {
    const m = line.match(/^#{2,3}\s+(.*)$/);
    if (m) out.push(m[1].trim());
  }
  return out;
}

/** Tokenize for BM25: lowercase, fold Vietnamese diacritics so that
 *  "quy trinh" matches "quy trình", split on non-alphanumeric. */
export function tokenize(text) {
  const folded = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  return folded.split(/[^\p{L}\p{N}]+/u).filter((t) => t.length >= 2);
}

const STOPWORDS = new Set([
  'va', 'cua', 'la', 'trong', 'cho', 'voi', 'theo', 'duoc', 'khong',
  've', 'neu', 'khi', 'toi', 'cung', 'tu', 'doi', 'hoac', 'nhan',
]);

function termFreq(text) {
  const tf = new Map();
  for (const tok of tokenize(text)) {
    if (STOPWORDS.has(tok)) continue;
    tf.set(tok, (tf.get(tok) ?? 0) + 1);
  }
  return tf;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function walk(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p, base));
    else if (entry.endsWith('.md')) out.push(p);
  }
  return out;
}

const docs = [];
const errors = [];

for (const file of walk(CONTENT)) {
  const rel = relative(ROOT, file);
  const raw = readFileSync(file, 'utf8');
  try {
    const { fm, body } = parseFrontmatter(raw);
    const basename = rel.split('/').pop().replace(/\.md$/, '');
    const title = (typeof fm.title === 'string' && fm.title) || basename;
    const codeMatch = basename.match(/^([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)_/);
    const code =
      (typeof fm.code === 'string' && fm.code) ||
      (codeMatch ? codeMatch[1] : basename);

    const headings = extractHeadings(body);
    const plain = toPlainText(body);
    const tfTitle = termFreq(fm.title ?? title);
    const tfHeadings = termFreq(headings.join('\n'));
    const tfBody = termFreq(plain);

    // Weighted merge: title x3, headings x2, body x1.
    const tf = new Map();
    const add = (m, w) => {
      for (const [t, c] of m) tf.set(t, (tf.get(t) ?? 0) + c * w);
    };
    add(tfTitle, 3);
    add(tfHeadings, 2);
    add(tfBody, 1);

    const codeField = typeof fm.code === 'string' ? fm.code : '';
    docs.push({
      id: relative(CONTENT, file).replace(/\\/g, '/'),
      code,
      codeField,
      title,
      folder: rel.split('/')[1] ?? '',
      type: typeof fm.type === 'string' ? fm.type : '',
      status: typeof fm.status === 'string' ? fm.status : '',
      version: typeof fm.version === 'string' ? fm.version : '',
      release: typeof fm.release === 'string' ? fm.release : '',
      aliases: Array.isArray(fm.aliases) ? fm.aliases : [],
      headings,
      plainText: plain,
      raw,
      tf: Object.fromEntries(tf),
      len: Array.from(tf.values()).reduce((a, b) => a + b, 0),
    });
  } catch (e) {
    errors.push(`${rel}: ${e.message}`);
  }
}

const index = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  docCount: docs.length,
  docs,
};

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JSON.stringify(index));

const kb = (Buffer.byteLength(JSON.stringify(index)) / 1024).toFixed(0);
console.log(`Indexed ${docs.length} documents -> ${OUT_FILE} (${kb} KB)`);
for (const err of errors) console.error(`WARN: ${err}`);
if (docs.length === 0) {
  console.error('FATAL: indexed 0 documents, aborting.');
  process.exit(1);
}
