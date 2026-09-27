import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LegalNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  // Đếm động số lượng căn cứ pháp lý thực tế trong kho
  const canCuCount = allFiles
    ? allFiles.filter((file) => {
        const slug = file.slug ?? ""
        const type = file.frontmatter?.type as string | undefined
        return slug.startsWith("CanCu/") || type === "can-cu"
      }).length
    : 338

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
    : 182

  // Tổng hợp động các phiên bản hệ thống đang áp dụng
  const versionSet = new Set<string>()
  if (allFiles) {
    for (const f of allFiles) {
      const v = f.frontmatter?.version as string | undefined
      if (v && typeof v === "string" && v.startsWith("R.")) {
        versionSet.add(v)
      }
    }
  }
  const versionText =
    versionSet.size > 0
      ? `Lịch sử ban hành ${Array.from(versionSet).sort().join(" & ")}`
      : "Lịch sử ban hành R.1.0.0 & R.2.0.0"

  return (
    <div class={classNames(displayClass, "legal-nav-card")}>
      <div class="legal-nav-header">
        <span class="legal-nav-title">Tra cứu nhanh</span>
        <span class="legal-nav-tag">{canCuCount} căn cứ</span>
      </div>
      <div class="legal-nav-list">
        <a href={`${baseDir}/08_SoCanCu/OBK-CC`} class="legal-nav-row">
          <span class="nav-badge badge-cancu">CC</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Sổ Căn cứ pháp lý</span>
            <span class="nav-row-sub">{canCuCount} trích dẫn điều khoản</span>
          </div>
        </a>
        <a href={`${baseDir}/Trạng-thái-ban-hành`} class="legal-nav-row">
          <span class="nav-badge badge-status">TT</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Trạng thái ban hành</span>
            <span class="nav-row-sub">{taiLieuCount} tài liệu toàn công ty</span>
          </div>
        </a>
        <a href={`${baseDir}/Nhật-ký-sửa-toàn-kho`} class="legal-nav-row">
          <span class="nav-badge badge-log">NK</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Nhật ký sửa đổi</span>
            <span class="nav-row-sub">{versionText}</span>
          </div>
        </a>
      </div>
    </div>
  )
}

LegalNav.css = `
.legal-nav-card {
  margin: 1rem 0;
  padding: 0.85rem;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #e2e8f0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05);
}

:root[saved-theme="dark"] .legal-nav-card {
  background-color: #1e293b;
  border-color: #334155;
}

.legal-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
}

:root[saved-theme="dark"] .legal-nav-header {
  border-bottom-color: #334155;
}

.legal-nav-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-main, #0f172a);
}

.legal-nav-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: #64748b;
  background-color: #f1f5f9;
  padding: 2px 8px;
  border-radius: 9999px;
  border: 1px solid #e2e8f0;
}

:root[saved-theme="dark"] .legal-nav-tag {
  background-color: #334155;
  color: #cbd5e1;
  border-color: #475569;
}

.legal-nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.legal-nav-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  background-color: #ffffff;
  text-decoration: none;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

:root[saved-theme="dark"] .legal-nav-row {
  background-color: #1e293b;
  border-color: #334155;
}

.legal-nav-row:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04);
}

:root[saved-theme="dark"] .legal-nav-row:hover {
  background-color: #334155;
  border-color: #475569;
}

.nav-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

.badge-cancu {
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
}

.badge-status {
  background-color: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
}

.badge-log {
  background-color: #fffbeb;
  color: #b45309;
  border: 1px solid #fde68a;
}

.nav-row-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.nav-row-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-main, #0f172a);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-row-sub {
  font-size: 0.74rem;
  color: #64748b;
  line-height: 1.25;
  margin-top: 1px;
}

:root[saved-theme="dark"] .nav-row-sub {
  color: #94a3b8;
}
`

export default (() => LegalNav) satisfies QuartzComponentConstructor
