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
  border-bottom: 1px solid var(--gray);
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.brand-logo-img {
  height: 22px;
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
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background-color: var(--highlight);
  color: var(--secondary);
  border: 1px solid color-mix(in srgb, var(--secondary) 30%, transparent);
  letter-spacing: 0.05em;
  line-height: 1;
}

.brand-pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--darkgray);
  background-color: var(--light);
  border: 1px solid var(--gray);
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
