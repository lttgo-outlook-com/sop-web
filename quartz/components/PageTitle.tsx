import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "brand-header")}>
      <a href={baseDir} class="brand-link" aria-label="oBacker SOP">
        <img
          src={`${baseDir}/static/logo-chu.svg`}
          alt="oBacker"
          class="brand-logo-img light-only"
        />
        <img
          src={`${baseDir}/static/logo-chu-trang.svg`}
          alt="oBacker"
          class="brand-logo-img dark-only"
        />
        <span class="brand-badge">SOP</span>
      </a>
      <span class="brand-pill">R.1.0.0</span>
    </div>
  )
}

PageTitle.css = `
.brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1.25rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
}

.brand-logo-img {
  height: 26px;
  width: auto;
  display: block;
}

:root[saved-theme="dark"] .light-only {
  display: none !important;
}

:root[saved-theme="dark"] .dark-only {
  display: block !important;
}

:root:not([saved-theme="dark"]) .light-only {
  display: block !important;
}

:root:not([saved-theme="dark"]) .dark-only {
  display: none !important;
}

.brand-badge {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  letter-spacing: 0.05em;
  line-height: 1.1;
  display: inline-flex;
  align-items: center;
}

:root[saved-theme="dark"] .brand-badge {
  background-color: rgba(59, 130, 246, 0.15);
  color: #93c5fd;
  border-color: rgba(59, 130, 246, 0.3);
}

.brand-pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: #475569;
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 0.18rem 0.55rem;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

:root[saved-theme="dark"] .brand-pill {
  color: #cbd5e1;
  background-color: #1e293b;
  border-color: #475569;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
