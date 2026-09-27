import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// @ts-ignore
const shortcutsScript = `
document.addEventListener("nav", () => {
  let gPressed = false
  let gTimer = null

  const modal = document.getElementById("shortcuts-modal")
  const trigger = document.getElementById("shortcuts-trigger")
  const closeBtn = document.getElementById("shortcuts-close")

  const toggleModal = (show) => {
    if (!modal) return
    const isHidden = modal.classList.contains("hidden")
    const targetState = show !== undefined ? show : isHidden
    if (targetState) {
      modal.classList.remove("hidden")
      document.body.style.overflow = "hidden"
    } else {
      modal.classList.add("hidden")
      document.body.style.overflow = ""
    }
  }

  if (trigger) trigger.addEventListener("click", () => toggleModal(true))
  if (closeBtn) closeBtn.addEventListener("click", () => toggleModal(false))
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) toggleModal(false)
    })
  }

  const handleKeyDown = (e) => {
    const target = e.target
    const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable

    if (e.key === "Escape") {
      if (modal && !modal.classList.contains("hidden")) {
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

    // 't' or 'T' toggles theme
    if (e.key === "t" || e.key === "T") {
      e.preventDefault()
      const darkmodeBtn = document.querySelector(".darkmode")
      if (darkmodeBtn) darkmodeBtn.click()
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
    <div class={classNames(displayClass, "shortcuts-container")}>
      <button id="shortcuts-trigger" class="shortcuts-trigger-btn" aria-label="Phím tắt hỗ trợ">
        <kbd>?</kbd>
        <span>Phím tắt</span>
      </button>

      <div id="shortcuts-modal" class="shortcuts-modal hidden" role="dialog" aria-modal="true" aria-labelledby="shortcuts-title">
        <div class="shortcuts-dialog">
          <div class="shortcuts-dialog-header">
            <h3 id="shortcuts-title">Phím tắt hệ thống</h3>
            <button id="shortcuts-close" class="shortcuts-close-btn" aria-label="Đóng">✕</button>
          </div>
          <div class="shortcuts-dialog-body">
            <div class="shortcuts-group">
              <div class="shortcuts-group-title">Điều hướng nhanh</div>
              <div class="shortcut-row">
                <span>Về trang chủ</span>
                <div class="shortcut-keys"><kbd>G</kbd> <kbd>H</kbd></div>
              </div>
              <div class="shortcut-row">
                <span>Sổ Căn cứ pháp lý</span>
                <div class="shortcut-keys"><kbd>G</kbd> <kbd>C</kbd></div>
              </div>
              <div class="shortcut-row">
                <span>Trạng thái ban hành</span>
                <div class="shortcut-keys"><kbd>G</kbd> <kbd>T</kbd></div>
              </div>
              <div class="shortcut-row">
                <span>Nhật ký sửa đổi</span>
                <div class="shortcut-keys"><kbd>G</kbd> <kbd>N</kbd></div>
              </div>
            </div>

            <div class="shortcuts-group">
              <div class="shortcuts-group-title">Thao tác & Giao diện</div>
              <div class="shortcut-row">
                <span>Tìm kiếm toàn văn</span>
                <div class="shortcut-keys"><kbd>⌘</kbd> <kbd>K</kbd> / <kbd>/</kbd></div>
              </div>
              <div class="shortcut-row">
                <span>Đổi giao diện Sáng / Tối</span>
                <div class="shortcut-keys"><kbd>T</kbd></div>
              </div>
              <div class="shortcut-row">
                <span>Bật bảng trợ giúp phím tắt</span>
                <div class="shortcut-keys"><kbd>?</kbd></div>
              </div>
              <div class="shortcut-row">
                <span>Đóng cửa sổ / Thoát</span>
                <div class="shortcut-keys"><kbd>Esc</kbd></div>
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
.shortcuts-container {
  margin-top: 0.5rem;
}

.shortcuts-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  background: transparent;
  border: 1px solid var(--border-subtle, #e2e8f0);
  font-size: 0.76rem;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
}

.shortcuts-trigger-btn:hover {
  background-color: #f1f5f9;
  color: #0f172a;
  border-color: #cbd5e1;
}

.shortcuts-trigger-btn kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  font-family: var(--codeFont);
  font-size: 0.72rem;
  font-weight: 700;
  color: #334155;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.shortcuts-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.shortcuts-modal.hidden {
  display: none !important;
}

.shortcuts-dialog {
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  animation: modalFadeIn 0.15s ease-out;
}

:root[saved-theme="dark"] .shortcuts-dialog {
  background-color: #1e293b;
  border-color: #334155;
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

.shortcuts-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e2e8f0;
}

:root[saved-theme="dark"] .shortcuts-dialog-header {
  border-bottom-color: #334155;
}

.shortcuts-dialog-header h3 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
}

:root[saved-theme="dark"] .shortcuts-dialog-header h3 {
  color: #f8fafc;
}

.shortcuts-close-btn {
  background: transparent;
  border: none;
  font-size: 1rem;
  color: #64748b;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
}

.shortcuts-close-btn:hover {
  background-color: #f1f5f9;
  color: #0f172a;
}

.shortcuts-dialog-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.shortcuts-group-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
  margin-bottom: 0.65rem;
}

.shortcut-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.85rem;
  color: #334155;
}

:root[saved-theme="dark"] .shortcut-row {
  border-bottom-color: #334155;
  color: #cbd5e1;
}

.shortcut-row:last-child {
  border-bottom: none;
}

.shortcut-keys {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.shortcut-keys kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.4rem;
  padding: 0 0.35rem;
  border-radius: 4px;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  font-family: var(--codeFont);
  font-size: 0.74rem;
  font-weight: 600;
  color: #0f172a;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06);
}

:root[saved-theme="dark"] .shortcut-keys kbd {
  background-color: #0f172a;
  border-color: #475569;
  color: #f8fafc;
}
`

export default (() => KeyboardShortcuts) satisfies QuartzComponentConstructor
