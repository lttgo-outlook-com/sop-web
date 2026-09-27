import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/search.scss"
// @ts-ignore
import script from "./scripts/search.inline"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

export interface SearchOptions {
  enablePreview: boolean
}

const defaultOptions: SearchOptions = {
  enablePreview: true,
}

export default ((userOpts?: Partial<SearchOptions>) => {
  const Search: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    const searchPlaceholder = i18n(cfg.locale).components.search.searchBarPlaceholder
    return (
      <div class={classNames(displayClass, "search")}>
        <button class="search-button">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
            <title>Search</title>
            <g class="search-path" fill="none">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
          <p>{i18n(cfg.locale).components.search.title}</p>
          <kbd class="search-kbd">⌘K</kbd>
        </button>
        <div class="search-container">
          <div class="search-space">
            <div class="search-bar-header">
              <svg class="search-bar-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                autocomplete="off"
                class="search-bar"
                name="search"
                type="text"
                aria-label={searchPlaceholder}
                placeholder="Tìm kiếm quy trình, căn cứ, SLA..."
              />
              <span class="search-esc-hint"><kbd>Esc</kbd></span>
            </div>
            <div class="search-layout" data-preview={opts.enablePreview}></div>
            <div class="search-footer-bar">
              <span class="footer-hint"><kbd>↑</kbd><kbd>↓</kbd> Di chuyển</span>
              <span class="footer-hint"><kbd>↵</kbd> Xem tài liệu</span>
              <span class="footer-hint"><kbd>Esc</kbd> Đóng</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  Search.afterDOMLoaded = script
  Search.css = style

  return Search
}) satisfies QuartzComponentConstructor
