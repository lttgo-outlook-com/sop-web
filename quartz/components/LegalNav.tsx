import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LegalNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "legal-nav-card")}>
      <div class="legal-nav-header">
        <span class="legal-nav-title">Tra cứu nhanh</span>
        <span class="legal-nav-tag">419 mục</span>
      </div>
      <div class="legal-nav-list">
        <a href={`${baseDir}/08_SoCanCu/OBK-CC`} class="legal-nav-row">
          <span class="nav-badge badge-cancu">CC</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Sổ Căn cứ pháp lý</span>
            <span class="nav-row-sub">335 trích dẫn điều khoản</span>
          </div>
        </a>
        <a href={`${baseDir}/VanBan`} class="legal-nav-row">
          <span class="nav-badge badge-vanban">VB</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Văn bản quy phạm</span>
            <span class="nav-row-sub">84 văn bản hợp nhất & luật</span>
          </div>
        </a>
        <a href={`${baseDir}/Trạng-thái-ban-hành`} class="legal-nav-row">
          <span class="nav-badge badge-status">TT</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Trạng thái ban hành</span>
            <span class="nav-row-sub">105 tài liệu toàn công ty</span>
          </div>
        </a>
        <a href={`${baseDir}/Nhật-ký-sửa-toàn-kho`} class="legal-nav-row">
          <span class="nav-badge badge-log">NK</span>
          <div class="nav-row-main">
            <span class="nav-row-title">Nhật ký sửa đổi</span>
            <span class="nav-row-sub">Lịch sử ban hành R.1.0.0</span>
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
  border-radius: 10px;
  border: 1px solid var(--gray);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05);
}

.legal-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid color-mix(in srgb, var(--gray) 60%, transparent);
}

.legal-nav-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--dark);
}

.legal-nav-tag {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--darkgray);
  background-color: var(--light);
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid var(--gray);
}

.legal-nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.legal-nav-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.55rem;
  border-radius: 6px;
  background-color: #ffffff;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.15s ease-in-out;
}

.legal-nav-row:hover {
  background-color: var(--highlight);
  border-color: color-mix(in srgb, var(--secondary) 25%, transparent);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.nav-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

.badge-cancu {
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
}

.badge-vanban {
  background-color: #f5f3ff;
  color: #6d28d9;
  border: 1px solid #ddd6fe;
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
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--dark);
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-row-sub {
  font-size: 0.68rem;
  color: var(--darkgray);
  line-height: 1.2;
}
`

export default (() => LegalNav) satisfies QuartzComponentConstructor
