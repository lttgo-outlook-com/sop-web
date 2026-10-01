import { joinSegments, pathToRoot } from "../util/path"
import { classNames } from "../util/lang"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AdminHeader: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  // 404 được serve ở URL sâu bất kỳ bởi fallback server/nginx, nên path tương đối
  // (./static/...) sẽ gãy — gắn logo/brand vào root tuyệt đối cho đúng mọi depth.
  const baseDir = fileData.slug === "404" ? "/" : pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "admin-header")}>
      <div class="obk-strip" aria-hidden="true"></div>
      <div class="obk-bar">
        <a class="obk-brand" href={joinSegments(baseDir, "index")}>
          <img
            class="obk-brand-logo"
            src={joinSegments(baseDir, "static/obacker-logo.svg")}
            alt="oBacker"
          />
        </a>
        <span class="obk-online">
          <i aria-hidden="true"></i>
          Nội bộ oBacker
        </span>
      </div>
    </div>
  )
}

AdminHeader.css = `
.admin-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background: #fff;
  border-bottom: 1px solid #1e293b;
  box-shadow: 0 2px 0 #1e293b;
}

.obk-strip {
  height: 2.5px;
  background: linear-gradient(90deg, #193cb8, #1890ff, #f77f00);
}

.obk-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 64px;
  padding: 0 24px;
}

.obk-brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}

.obk-brand-logo {
  display: block;
  height: 30px;
  width: auto;
}

.obk-online {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: #334155;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  white-space: nowrap;
}

.obk-online i {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #22c55e;
  flex: none;
}

@media all and (max-width: 768px) {
  .obk-bar {
    height: 56px;
    padding: 0 16px;
  }

  .obk-brand-logo {
    height: 26px;
  }

  .obk-online {
    display: none;
  }
}
`

export default (() => AdminHeader) satisfies QuartzComponentConstructor
