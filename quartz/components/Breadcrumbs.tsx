import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import breadcrumbsStyle from "./styles/breadcrumbs.scss"
import { FullSlug, SimpleSlug, resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import { trieFromAllFiles } from "../util/ctx"
import { FileTrieNode } from "../util/fileTrie"

type CrumbData = {
  displayName: string
  path: string
}

interface BreadcrumbOptions {
  /**
   * Symbol between crumbs
   */
  spacerSymbol: string
  /**
   * Name of first crumb
   */
  rootName: string
  /**
   * Whether to look up frontmatter title for folders (could cause performance problems with big vaults)
   */
  resolveFrontmatterTitle: boolean
  /**
   * Whether to display the current page in the breadcrumbs.
   */
  showCurrentPage: boolean
}

const defaultOptions: BreadcrumbOptions = {
  spacerSymbol: "❯",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  showCurrentPage: true,
}

function formatCrumb(displayName: string, baseSlug: FullSlug, currentSlug: SimpleSlug): CrumbData {
  // Folder slug dạng "04_Handbook_KeToan" → hiển thị gọn: bỏ prefix thứ tự "04_",
  // dấu _ và - thành khoảng trắng. (Tên trang từ frontmatter đã là tiếng Việt, không đổi.)
  const cleanName = displayName
    .replace(/^\d+_/, "")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  return {
    displayName: cleanName,
    path: resolveRelative(baseSlug, currentSlug),
  }
}

export default ((opts?: Partial<BreadcrumbOptions>) => {
  const options: BreadcrumbOptions = { ...defaultOptions, ...opts }
  const Breadcrumbs: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    ctx,
  }: QuartzComponentProps) => {
    const trie = (ctx.trie ??= trieFromAllFiles(allFiles))
    const slugParts = fileData.slug!.split("/")
    let pathNodes = trie.ancestryChain(slugParts)

    // Tag pages are synthetic (emitted by TagPage, not present in the file trie),
    // so ancestryChain returns undefined and the breadcrumb silently vanishes —
    // inconsistent with every other page type. Synthesize the chain:
    //   Trang chủ ❯ Danh sách thẻ ❯ <tag>   (last node = current, hidden when
    //   showCurrentPage is false) — e.g. /tags/loai -> "Trang chủ ❯ Danh sách thẻ",
    //   /tags/loai/sop -> "Trang chủ ❯ Danh sách thẻ ❯ loai".
    if (!pathNodes && slugParts[0] === "tags") {
      pathNodes = [new FileTrieNode([])]
      for (let i = 1; i <= slugParts.length; i++) {
        const node = new FileTrieNode(slugParts.slice(0, i))
        node.displayName = i === 1 ? "Danh sách thẻ" : slugParts[i - 1]
        pathNodes.push(node)
      }
    }

    if (!pathNodes) {
      return null
    }

    const crumbs: CrumbData[] = pathNodes.map((node, idx) => {
      const crumb = formatCrumb(node.displayName, fileData.slug!, simplifySlug(node.slug))
      if (idx === 0) {
        crumb.displayName = options.rootName
      }

      // For last node (current page), set empty path
      if (idx === pathNodes.length - 1) {
        crumb.path = ""
      }

      return crumb
    })

    if (!options.showCurrentPage) {
      crumbs.pop()
    }

    return (
      <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <div class="breadcrumb-element">
            <a href={crumb.path}>{crumb.displayName}</a>
            {index !== crumbs.length - 1 && <p>{` ${options.spacerSymbol} `}</p>}
          </div>
        ))}
      </nav>
    )
  }
  Breadcrumbs.css = breadcrumbsStyle

  return Breadcrumbs
}) satisfies QuartzComponentConstructor
