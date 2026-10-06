import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

/** So sánh 2 phiên bản "R.x.y.z" kiểu semver (so từng phần tử số, R.2.1.0 > R.10.0.0 sai cách string). */
function compareVersions(a: string, b: string): number {
  const pa = a
    .slice(2)
    .split(".")
    .map((n) => parseInt(n, 10) || 0)
  const pb = b
    .slice(2)
    .split(".")
    .map((n) => parseInt(n, 10) || 0)
  const len = Math.max(pa.length, pb.length)
  for (let i = 0; i < len; i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0)
    if (d !== 0) return d
  }
  return 0
}

function formatDay(d: Date | undefined): string | undefined {
  if (!d) return undefined
  const p = (n: number) => String(n).padStart(2, "0")
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()}`
}

const LegalNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  // Đếm động số lượng tài liệu ban hành chính thức (loại trừ index.md nhân bản của 00_INDEX)
  const taiLieuCount = allFiles
    ? allFiles.filter((file) => {
        const slug = file.slug ?? ""
        if (slug === "index" && allFiles.some((f) => f.slug === "00_INDEX")) {
          return false
        }
        const type = file.frontmatter?.type as string | undefined
        return type === "sop" || type === "tnc" || type === "danh-muc"
      }).length
    : null

  // Phiên bản mới nhất (max theo semver) + ngày ban hành gần nhất của nó
  let latestVersion: string | undefined
  let latestDate: Date | undefined
  if (allFiles) {
    for (const f of allFiles) {
      const v = f.frontmatter?.version as string | undefined
      if (v && typeof v === "string" && v.startsWith("R.")) {
        const d = f.dates as { published?: Date; modified?: Date } | undefined
        const date = d?.published ?? d?.modified
        const cmp = latestVersion === undefined ? 1 : compareVersions(v, latestVersion)
        if (cmp > 0) {
          latestVersion = v
          latestDate = date
        } else if (cmp === 0 && date && latestDate && date.getTime() > latestDate.getTime()) {
          latestDate = date
        }
      }
    }
  }
  const versionText = latestVersion
    ? `Mới nhất ${latestVersion}${latestDate ? ` · ${formatDay(latestDate)}` : ""}`
    : "Lịch sử ban hành toàn kho"

  return (
    <div class={classNames(displayClass, "legal-nav-card")}>
      <button type="button" class="legal-nav-header" aria-expanded="true">
        <span class="legal-nav-title">Tra cứu nhanh</span>
        <span class="legal-nav-chevron" aria-hidden="true"></span>
      </button>
      <div class="legal-nav-body">
        <div class="legal-nav-list">
          <div class="legal-nav-list-inner">
            <a href={`${baseDir}/Trạng-thái-ban-hành`} class="legal-nav-row row-status">
              <span class="nav-chip">TT</span>
              <div class="nav-row-main">
                <span class="nav-row-title">Trạng thái ban hành</span>
                <span class="nav-row-sub">
                  {taiLieuCount === null
                    ? "tài liệu toàn công ty"
                    : `${taiLieuCount} tài liệu toàn công ty`}
                </span>
              </div>
            </a>
            <a href={`${baseDir}/Nhật-ký-sửa-toàn-kho`} class="legal-nav-row row-log">
              <span class="nav-chip">NK</span>
              <div class="nav-row-main">
                <span class="nav-row-title">Nhật ký sửa đổi</span>
                <span class="nav-row-sub">{versionText}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

LegalNav.css = `
.legal-nav-card {
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 4px;
  box-shadow: 2px 2px 0 #1e293b;
  padding: 0;
  margin: 0;
}

.legal-nav-header {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 16px;
  background: #f8fafc;
  border: none;
  border-bottom: 1px solid #e2e8f0;
  cursor: default;
  font: inherit;
  color: inherit;
  text-align: left;
  appearance: none;
  -webkit-appearance: none;
}

.legal-nav-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0f172a;
}

.legal-nav-title::before {
  content: "";
  width: 4px;
  height: 14px;
  background: #193cb8;
  flex: none;
}

.legal-nav-body {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.legal-nav-list {
  min-height: 0;
  overflow: hidden;
}

.legal-nav-list-inner {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}

.legal-nav-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 0;
  background: #fff;
  text-decoration: none;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 150ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.legal-nav-row:hover {
  transform: translateY(-1px);
  box-shadow: 2px 2px 0 #1e293b;
}

.legal-nav-row.row-status {
  border-left: 3.5px solid #16a34a;
}

.legal-nav-row.row-log {
  border-left: 3.5px solid #f77f00;
}

.nav-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-family: "SF Mono", ui-monospace, "Cascadia Code", Menlo, Consolas, monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

.row-status .nav-chip {
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.row-log .nav-chip {
  background: #fff7ed;
  color: #78350f;
  border: 1px solid rgba(247, 127, 0, 0.35);
}

.nav-row-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.nav-row-title {
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-row-sub {
  font-size: 11px;
  line-height: 14px;
  color: #64748b;
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Chevron chỉ hiện trên mobile (khối này collapsible ở đó); desktop giữ header tĩnh. */
.legal-nav-chevron {
  display: none;
  width: 7px;
  height: 7px;
  flex: none;
  margin-left: 2px;
  border-right: 1.5px solid #94a3b8;
  border-bottom: 1.5px solid #94a3b8;
  transform: rotate(45deg);
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 768px) {
  .legal-nav-header {
    cursor: pointer;
  }

  .legal-nav-chevron {
    display: block;
  }

  .legal-nav-card.collapsed .legal-nav-body {
    grid-template-rows: 0fr;
  }

  .legal-nav-card.collapsed .legal-nav-chevron {
    transform: rotate(-45deg);
  }

  .legal-nav-card.collapsed .legal-nav-header {
    border-bottom-color: transparent;
  }
}
`

LegalNav.afterDOMLoaded = `
function toggleLegalNav() {
  var card = this.closest(".legal-nav-card")
  var collapsed = card.classList.toggle("collapsed")
  this.setAttribute("aria-expanded", String(!collapsed))
}
function setupLegalNav() {
  var cards = document.getElementsByClassName("legal-nav-card")
  // Desktop: luôn mở. Mobile: mặc định gấp lại (đọc tài liệu là việc chính).
  var mobile = window.matchMedia("(max-width: 768px)").matches
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i]
    var header = card.querySelector(".legal-nav-header")
    if (!header) continue
    card.classList.toggle("collapsed", mobile)
    header.setAttribute("aria-expanded", String(!mobile))
    header.addEventListener("click", toggleLegalNav)
    if (window.addCleanup) window.addCleanup(() => header.removeEventListener("click", toggleLegalNav))
  }
}
document.addEventListener("nav", setupLegalNav)
`

export default (() => LegalNav) satisfies QuartzComponentConstructor
