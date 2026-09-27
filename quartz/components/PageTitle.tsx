import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "brand-header")}>
      <a href={baseDir} class="brand-link">
        <span class="brand-logo">oBacker</span>
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
  gap: 0.45rem;
  text-decoration: none;
}

.brand-logo {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--dark);
  font-family: var(--headerFont);
}

.brand-badge {
  font-size: 0.68rem;
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
