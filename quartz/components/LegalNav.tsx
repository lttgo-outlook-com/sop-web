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
        <a href={`${baseDir}/08_SoCanCu/OBK-CC`} class="legal-nav-row row-cancu">
          <span class="nav-chip">CC</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Sổ Căn cứ pháp lý</span>
            <span class="nav-row-sub">{canCuCount} trích dẫn điều khoản</span>
          </div>
        </a>
        <a href={`${baseDir}/Trạng-thái-ban-hành`} class="legal-nav-row row-status">
          <span class="nav-chip">TT</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Trạng thái ban hành</span>
            <span class="nav-row-sub">{taiLieuCount} tài liệu toàn công ty</span>
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
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
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

.legal-nav-tag {
  font-size: 11px;
  line-height: 14px;
  font-weight: 600;
  color: #475569;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 2px;
  border: 1px solid #cbd5e1;
  white-space: nowrap;
}

.legal-nav-list {
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

.legal-nav-row.row-cancu {
  border-left: 3.5px solid #193cb8;
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

.row-cancu .nav-chip {
  background: #eef2ff;
  color: #193cb8;
  border: 1px solid rgba(25, 60, 184, 0.25);
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
`

export default (() => LegalNav) satisfies QuartzComponentConstructor
