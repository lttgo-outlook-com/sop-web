import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LegalNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "legal-nav-container")}>
      <div class="legal-nav-title">Tra cứu nhanh</div>
      <div class="legal-nav-grid">
        <a href={`${baseDir}/08_SoCanCu/OBK-CC`} class="legal-nav-item">
          <span class="legal-nav-icon">§</span>
          <span class="legal-nav-text">Sổ Căn cứ (335)</span>
        </a>
        <a href={`${baseDir}/VanBan`} class="legal-nav-item">
          <span class="legal-nav-icon">¶</span>
          <span class="legal-nav-text">Văn bản luật (84)</span>
        </a>
        <a href={`${baseDir}/Trạng-thái-ban-hành`} class="legal-nav-item">
          <span class="legal-nav-icon">✓</span>
          <span class="legal-nav-text">Trạng thái ban hành</span>
        </a>
        <a href={`${baseDir}/Nhật-ký-sửa-toàn-kho`} class="legal-nav-item">
          <span class="legal-nav-icon">⏱</span>
          <span class="legal-nav-text">Nhật ký sửa đổi</span>
        </a>
      </div>
    </div>
  )
}

LegalNav.css = `
.legal-nav-container {
  margin: 0.75rem 0;
  padding: 0.75rem;
  background-color: var(--lightgray);
  border-radius: 8px;
  border: 1px solid var(--gray);
}

.legal-nav-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--darkgray);
  margin-bottom: 0.5rem;
}

.legal-nav-grid {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.legal-nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  background-color: var(--light);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--dark);
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.15s ease-in-out;
}

.legal-nav-item:hover {
  background-color: var(--highlight);
  border-color: var(--secondary);
  color: var(--secondary);
}

.legal-nav-icon {
  font-weight: bold;
  color: var(--secondary);
  font-size: 0.9rem;
}

.legal-nav-text {
  flex-grow: 1;
}
`

export default (() => LegalNav) satisfies QuartzComponentConstructor
