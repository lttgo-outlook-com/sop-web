import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// @ts-ignore
const shortcutsScript = `
document.addEventListener("nav", () => {
  let gPressed = false
  let gTimer = null
  let lastFocused = null

  const modal = document.getElementById("shortcuts-modal")
  const trigger = document.getElementById("shortcuts-trigger")
  const closeBtn = document.getElementById("shortcuts-close")

  const toggleModal = (show) => {
    if (!modal) return
    const isCurrentlyOpen = modal.style.display === "flex"
    const willOpen = show !== undefined ? show : !isCurrentlyOpen
    if (willOpen && !isCurrentlyOpen) {
      lastFocused = document.activeElement
      modal.style.display = "flex"
      document.body.style.overflow = "hidden"
      requestAnimationFrame(() => {
        if (closeBtn) closeBtn.focus()
      })
    } else {
      modal.style.display = "none"
      document.body.style.overflow = ""
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus()
      lastFocused = null
    }
  }

  if (trigger) trigger.addEventListener("click", () => toggleModal(true))
  if (closeBtn) closeBtn.addEventListener("click", () => toggleModal(false))
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) toggleModal(false)
    })
    // Giữ focus trong modal khi Tab (a11y) — quan trọng vì đây là tính năng phím tắt.
    modal.addEventListener("keydown", (e) => {
      if (e.key !== "Tab" || modal.style.display !== "flex") return
      const focusables = [...modal.querySelectorAll("button, [href], input, [tabindex]:not([tabindex='-1'])")]
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    })
  }

  const handleKeyDown = (e) => {
    const target = e.target
    const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable

    if (e.key === "Escape") {
      if (modal && modal.style.display === "flex") {
        toggleModal(false)
        e.preventDefault()
        return
      }
    }

    if (isInput) return

    // '?' opens shortcuts modal
    if (e.key === "?" || (e.shiftKey && e.key === "/")) {
      e.preventDefault()
      toggleModal()
      return
    }

    // '/' opens search
    if (e.key === "/") {
      e.preventDefault()
      const searchBtn = document.querySelector(".search-button")
      if (searchBtn) searchBtn.click()
      return
    }

    // 'g' prefix for navigation
    if (e.key === "g" || e.key === "G") {
      gPressed = true
      clearTimeout(gTimer)
      gTimer = setTimeout(() => { gPressed = false }, 1000)
      return
    }

    if (gPressed) {
      gPressed = false
      clearTimeout(gTimer)
      const baseDir = document.querySelector(".brand-link")?.getAttribute("href") || ""
      const cleanBase = baseDir.replace(/\\/$/, "")

      if (e.key === "h" || e.key === "H") {
        window.location.href = cleanBase || "/"
      } else if (e.key === "c" || e.key === "C") {
        window.location.href = (cleanBase ? cleanBase : "") + "/08_SoCanCu/OBK-CC"
      } else if (e.key === "t" || e.key === "T") {
        window.location.href = (cleanBase ? cleanBase : "") + "/Trạng-thái-ban-hành"
      } else if (e.key === "n" || e.key === "N") {
        window.location.href = (cleanBase ? cleanBase : "") + "/Nhật-ký-sửa-toàn-kho"
      }
    }
  }

  document.addEventListener("keydown", handleKeyDown)
  window.addCleanup(() => document.removeEventListener("keydown", handleKeyDown))
})
`

const KeyboardShortcuts: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "shortcuts-bottom-bar")}>
      <button
        id="shortcuts-trigger"
        class="shortcuts-pill"
        type="button"
        aria-label="Phím tắt hệ thống"
      >
        <kbd>?</kbd>
        <span>Phím tắt</span>
      </button>

      <div
        id="shortcuts-modal"
        class="shortcuts-overlay"
        style="display: none;"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortcuts-heading"
      >
        <div class="shortcuts-card">
          <div class="shortcuts-header">
            <h4 id="shortcuts-heading">Phím tắt</h4>
            <button
              id="shortcuts-close"
              class="shortcuts-close-icon"
              type="button"
              aria-label="Đóng"
            >
              ✕
            </button>
          </div>
          <div class="shortcuts-content">
            <div class="shortcuts-section">
              <span class="shortcuts-section-title">Điều hướng</span>
              <div class="shortcut-line">
                <span>Trang chủ</span>
                <div class="shortcut-tags">
                  <kbd>G</kbd> <kbd>H</kbd>
                </div>
              </div>
              <div class="shortcut-line">
                <span>Sổ Căn cứ pháp lý</span>
                <div class="shortcut-tags">
                  <kbd>G</kbd> <kbd>C</kbd>
                </div>
              </div>
              <div class="shortcut-line">
                <span>Trạng thái ban hành</span>
                <div class="shortcut-tags">
                  <kbd>G</kbd> <kbd>T</kbd>
                </div>
              </div>
              <div class="shortcut-line">
                <span>Nhật ký sửa đổi</span>
                <div class="shortcut-tags">
                  <kbd>G</kbd> <kbd>N</kbd>
                </div>
              </div>
            </div>

            <div class="shortcuts-section">
              <span class="shortcuts-section-title">Thao tác</span>
              <div class="shortcut-line">
                <span>Tìm kiếm toàn văn</span>
                <div class="shortcut-tags">
                  <kbd>⌘K</kbd> / <kbd>/</kbd>
                </div>
              </div>
              <div class="shortcut-line">
                <span>Mở bảng phím tắt</span>
                <div class="shortcut-tags">
                  <kbd>?</kbd>
                </div>
              </div>
              <div class="shortcut-line">
                <span>Đóng cửa sổ</span>
                <div class="shortcut-tags">
                  <kbd>Esc</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

KeyboardShortcuts.afterDOMLoaded = shortcutsScript

KeyboardShortcuts.css = `
.shortcuts-bottom-bar {
  margin-top: 0.75rem;
  padding-top: 0.5rem;
}

.shortcuts-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.22rem 0.55rem;
  border-radius: 9999px;
  background-color: var(--light);
  border: 1px solid var(--slate-200);
  font-size: 0.72rem;
  color: var(--slate-500);
  cursor: pointer;
  box-shadow: var(--shadow-subtle);
  transition: all 0.15s ease;
}

.shortcuts-pill:hover {
  background-color: var(--slate-100);
  border-color: var(--slate-300);
  color: var(--slate-900);
}

.shortcuts-pill:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 1px;
}

.shortcuts-pill kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background-color: var(--slate-100);
  border: 1px solid var(--slate-300);
  font-family: var(--codeFont);
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--slate-600);
  line-height: 1;
}

.shortcuts-overlay {
  position: fixed !important;
  inset: 0 !important;
  z-index: 99999 !important;
  background-color: rgba(15, 23, 42, 0.5) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.shortcuts-card {
  position: relative;
  background-color: var(--light);
  border-radius: 4px;
  border: 1px solid var(--slate-200);
  box-shadow: var(--shadow-arch);
  width: 100%;
  max-width: 360px;
  max-height: calc(100vh - 2rem);
  overflow: hidden;
  animation: cardPop 0.15s var(--ease-brand);
}

@keyframes cardPop {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

.shortcuts-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 0.95rem 0.65rem 1.15rem;
  border-bottom: 1px solid var(--slate-200);
  background-color: var(--panel-header);
  border-left: 6px solid var(--primary);
}

.shortcuts-header h4 {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--slate-900);
}

.shortcuts-close-icon {
  background: transparent;
  border: none;
  font-size: 0.8rem;
  color: var(--slate-500);
  cursor: pointer;
  padding: 0.15rem 0.3rem;
  border-radius: 4px;
}

.shortcuts-close-icon:hover {
  background-color: var(--slate-200);
  color: var(--slate-900);
}

.shortcuts-close-icon:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 1px;
}

.shortcuts-content {
  padding: 0.75rem 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
}

.shortcuts-section-title {
  display: block;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--slate-600);
  margin-bottom: 0.35rem;
}

.shortcut-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0;
  font-size: 0.78rem;
  color: var(--slate-700);
  border-bottom: 1px solid var(--slate-100);
}

.shortcut-line:last-child {
  border-bottom: none;
}

.shortcut-tags {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.shortcut-tags kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.3rem;
  height: 1.2rem;
  padding: 0 0.3rem;
  border-radius: 2px;
  background-color: var(--slate-100);
  border: 1px solid var(--slate-300);
  font-family: var(--codeFont);
  font-size: 0.66rem;
  font-weight: 600;
  color: var(--slate-900);
  box-shadow: var(--shadow-subtle);
}
`

export default (() => KeyboardShortcuts) satisfies QuartzComponentConstructor
