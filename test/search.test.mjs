import { test } from "node:test"
import assert from "node:assert/strict"
import { createSearchEngine, tokenize, fold } from "../src/search.mjs"

// --- Synthetic index (6 docs, Vietnamese, deliberately different tf/len) ---

function doc(overrides) {
  return {
    id: "",
    code: "",
    codeField: "",
    title: "",
    folder: "",
    type: "sop",
    status: "đang áp dụng",
    version: "R.1.0.0",
    aliases: [],
    headings: [],
    plainText: "",
    raw: "RAW",
    tf: {},
    len: 0,
    ...overrides,
  }
}

const INDEX = {
  schemaVersion: 1,
  generatedAt: "2026-09-30T00:00:00.000Z",
  docCount: 6,
  docs: [
    doc({
      id: "02_NoiBo/OBK-SOP-NB-05_X.md",
      code: "OBK-SOP-NB-05",
      codeField: "OBK-SOP-NB-05",
      title: "Tuyển dụng và onboarding nội bộ",
      folder: "02_NoiBo",
      aliases: ["OBK-SOP-NB-05"],
      headings: ["1. MỤC ĐÍCH"],
      plainText:
        "Tài liệu này thuộc bộ tài liệu quản trị nhân sự của công ty, ban hành kèm theo quyết định của giám đốc. Phạm vi áp dụng cho toàn bộ các cấp quản lý trong nội bộ công ty. Quy trình tuyển dụng nội bộ gồm nhiều bước: đăng tin, sàng lọc hồ sơ, phỏng vấn và thông báo kết quả tuyển dụng cuối cùng.",
      tf: { quy: 9, trinh: 4, tuyen: 5, dung: 1, phan: 3, vien: 2, hop: 2 },
      len: 26,
    }),
    doc({
      id: "02_NoiBo/OBK-SOP-NB-06_X.md",
      code: "OBK-SOP-NB-06",
      codeField: "OBK-SOP-NB-06",
      title: "Quy trình onboarding nhân viên mới",
      folder: "02_NoiBo",
      aliases: ["OBK-SOP-NB-06"],
      headings: ["1. MỤC ĐÍCH"],
      plainText:
        "Quy trình onboarding áp dụng cho nhân viên mới được tuyển dụng trong năm tài chính hiện hành theo phân cấp quản lý.",
      tf: { quy: 3, trinh: 3, onboarding: 3, nhan: 2, vien: 1, tuyen: 1, dung: 1 },
      len: 16,
    }),
    doc({
      id: "01_ToChuc/OBK-QCTC-02_X.md",
      code: "OBK-QCTC-02",
      codeField: "OBK-QCTC-02",
      title: "Quy chế tổ chức và phân quyền",
      folder: "01_ToChuc",
      type: "van-ban",
      aliases: ["OBK-QCTC-02"],
      headings: ["1. MỤC ĐÍCH"],
      plainText:
        "Quy chế tổ chức và phân quyền nội bộ của công ty quy định rõ trách nhiệm, quyền hạn của từng cấp quản lý và quy trình vận hành theo quy định.",
      tf: { quyen: 5, che: 3, to: 4, chuc: 4, phan: 4, quy: 2 },
      len: 22,
    }),
    doc({
      id: "01_ToChuc/OBK-QCTC-03_X.md",
      code: "OBK-QCTC-03",
      codeField: "OBK-QCTC-03",
      title: "Bảng phân quyền hệ thống",
      folder: "01_ToChuc",
      type: "van-ban",
      aliases: ["OBK-QCTC-03"],
      headings: ["1. MỤC ĐÍCH"],
      plainText:
        "Bảng phân quyền hệ thống theo vai trò, trách nhiệm trong quy trình vận hành nội bộ của công ty.",
      tf: { phan: 4, quyen: 4, he: 2, thong: 2, vai: 2, tro: 2, quy: 1, trinh: 1 },
      len: 18,
    }),
    doc({
      id: "03_DichVu/OBK-SOP-DV-01_X.md",
      code: "OBK-SOP-DV-01",
      codeField: "OBK-SOP-DV-01",
      title: "Quy trình báo cáo chi phí dịch vụ",
      folder: "03_DichVu",
      status: "còn hiệu lực",
      aliases: ["OBK-SOP-DV-01"],
      headings: ["1. MỤC ĐÍCH"],
      plainText:
        "Quy trình báo cáo chi phí dịch vụ được thực hiện định kỳ hàng tháng theo mẫu biểu chuẩn của bộ phận kế toán.",
      tf: { quy: 3, trinh: 3, bao: 3, cao: 3, chi: 3, phi: 3, dich: 2, vu: 2, thang: 2 },
      len: 24,
    }),
    doc({
      id: "07_Phieu/PHI-E-01_X.md",
      code: "PHI-E-01",
      codeField: "",
      title: "Phiếu chi",
      folder: "07_Phieu",
      type: "danh-muc",
      status: "",
      version: "",
      aliases: ["phi-chieu"],
      headings: [],
      plainText:
        "Phiếu chi dùng cho các khoản thanh toán tiền mặt trong kho quỹ theo quy định hiện hành.",
      tf: { phieu: 3, chi: 3, thanh: 2, toan: 2, tien: 2, mat: 2, quyen: 1, dinh: 1 },
      len: 18,
    }),
  ],
}

const engine = createSearchEngine(INDEX)

// --- Tier 1: metadata ---

test("exact code match wins over BM25 (rank 1, match_type exact)", () => {
  // 'tuyen dung' is a strong BM25 hit for the same doc — exact must still win.
  const r = engine.search("OBK-SOP-NB-05")
  assert.equal(r.total, 1)
  assert.equal(r.results.length, 1)
  assert.equal(r.results[0].code, "OBK-SOP-NB-05")
  assert.equal(r.results[0].match_type, "exact")
  assert.equal(r.results[0].id, "02_NoiBo/OBK-SOP-NB-05_X.md")
  assert.equal(r.results[0].path, r.results[0].id)
})

test("exact match is case-insensitive and also matches codeField/alias/id", () => {
  assert.equal(engine.search("obk-qctc-02").results[0].match_type, "exact")
  // alias (doc 6 has alias 'phi-chieu', code 'PHI-E-01')
  const aliasHit = engine.search("phi-chieu")
  assert.equal(aliasHit.results.length, 1)
  assert.equal(aliasHit.results[0].match_type, "exact")
  assert.equal(aliasHit.results[0].code, "PHI-E-01")
  // getDocument accepts id (folder/file.md) too
  assert.equal(engine.getDocument("02_NoiBo/OBK-SOP-NB-05_X.md").code, "OBK-SOP-NB-05")
  // and code via getDocument
  assert.equal(engine.getDocument("OBK-SOP-NB-05").code, "OBK-SOP-NB-05")
  assert.equal(engine.getDocument("nope"), null)
})

test("code prefix match returns multiple, sorted, match_type code-prefix", () => {
  const r = engine.search("OBK-QCTC")
  assert.equal(r.total, 2)
  assert.deepEqual(
    r.results.map((x) => x.code),
    ["OBK-QCTC-02", "OBK-QCTC-03"],
  )
  assert.ok(r.results.every((x) => x.match_type === "code-prefix"))
})

test("prefix must end on a code boundary (OBK-QC matches nothing)", () => {
  const r = engine.search("OBK-QC")
  assert.equal(r.total, 0)
  // but the full-segment prefix OBK-QCTC does match
  assert.equal(engine.search("OBK-QCTC").total, 2)
})

test("tier 1 wins entirely: code query does not mix in BM25 results", () => {
  // 'quy' would BM25-match many docs, but 'OBK-QCTC' is tier-1 only.
  const r = engine.search("OBK-QCTC")
  assert.equal(r.total, 2)
  assert.ok(r.results.every((x) => x.match_type === "code-prefix"))
})

// --- Tier 2: BM25 ---

test('diacritic-insensitive BM25: "quy trinh" finds "quy trình"', () => {
  const r = engine.search("quy trinh")
  assert.ok(r.total >= 3, `expected >=3 hits, got ${r.total}`)
  assert.ok(r.results.every((x) => x.match_type === "keyword"))
  // doc 1 has the highest weighted 'quy'/'trinh' tf -> ranks first
  assert.equal(r.results[0].code, "OBK-SOP-NB-05")
})

test("tokenize folds diacritics, keeps letters without NFD decomposition", () => {
  // NFD folding strips combining marks (à→a) but leaves letters like đ
  // (U+0111, no decomposition) — identical to the indexer, so both sides
  // stay consistent. Tokens shorter than 2 chars are dropped; stopword
  // filtering happens on the query/term-freq side, not in tokenize().
  assert.deepEqual(tokenize("Quá Trình VÀ Quy-định 1 a"), ["qua", "trinh", "va", "quy", "đinh"])
  assert.equal(fold("Tuyển Dụng"), "tuyen dung")
})

test('snippet contains the matched term and is prefixed with "..."', () => {
  const r = engine.search("tuyen dung")
  assert.equal(r.results[0].code, "OBK-SOP-NB-05")
  const excerpt = r.results[0].excerpt
  assert.ok(excerpt.startsWith("..."), `excerpt should start with "...": ${excerpt}`)
  // the matched term appears in its original (diacritic) form
  assert.ok(fold(excerpt).includes("tuyen"), excerpt)
  assert.ok(excerpt.includes("tuyển"), excerpt)
})

test("tier 1 snippet is the first 40 words of plainText", () => {
  const r = engine.search("OBK-SOP-NB-05")
  const words = INDEX.docs[0].plainText.split(/\s+/).slice(0, 40).join(" ")
  assert.equal(r.results[0].excerpt, words)
})

// --- Filters (apply to BOTH tiers) ---

test("folder filter (applies to tier 1 and tier 2)", () => {
  const t1 = engine.search("OBK-SOP-NB-05", { folder: "01_ToChuc" })
  assert.equal(t1.total, 0)
  const t2 = engine.search("quy trinh", { folder: "03_DichVu" })
  assert.equal(t2.total, 1)
  assert.equal(t2.results[0].code, "OBK-SOP-DV-01")
  // no filter -> doc 1 wins
  assert.equal(engine.search("quy trinh").results[0].code, "OBK-SOP-NB-05")
})

test("status filter is case/diacritic-insensitive exact", () => {
  const r = engine.search("quy trinh", { status: "Con Hieu Luc" })
  assert.equal(r.total, 1)
  assert.equal(r.results[0].code, "OBK-SOP-DV-01")
})

test("type filter", () => {
  // 'phan' hits the two van-ban docs in 01_ToChuc (QCTC-02/03)
  const r = engine.search("phan", { type: "van-ban" })
  assert.ok(r.results.every((x) => x.type === "van-ban"))
  assert.ok(r.total >= 2)
})

test("limit caps results, total counts all matches", () => {
  const all = engine.search("quy trinh")
  const capped = engine.search("quy trinh", { limit: 2 })
  assert.equal(capped.results.length, 2)
  assert.equal(capped.total, all.total)
})

// --- Empty / degenerate queries ---

test("empty query returns empty results", () => {
  assert.deepEqual(engine.search("").results, [])
  assert.equal(engine.search("").total, 0)
  assert.equal(engine.search("   ").total, 0)
  // stopword-only query -> no terms -> empty
  assert.equal(engine.search("và của là").total, 0)
})

test("listDocuments filters + shape", () => {
  const all = engine.listDocuments()
  assert.equal(all.length, 6)
  assert.deepEqual(Object.keys(all[0]).sort(), [
    "code",
    "folder",
    "status",
    "title",
    "type",
    "version",
  ])
  const filtered = engine.listDocuments({ folder: "01_ToChuc" })
  assert.equal(filtered.length, 2)
  const limited = engine.listDocuments({ limit: 2 })
  assert.equal(limited.length, 2)
  const byStatus = engine.listDocuments({ status: "còn hiệu lực" })
  assert.equal(byStatus.length, 1)
})

test("result shape: all required fields present", () => {
  const r = engine.search("quy trinh").results[0]
  assert.deepEqual(Object.keys(r).sort(), [
    "code",
    "excerpt",
    "folder",
    "id",
    "match_type",
    "path",
    "score",
    "status",
    "title",
    "type",
    "version",
  ])
  assert.ok(r.score > 0)
})
