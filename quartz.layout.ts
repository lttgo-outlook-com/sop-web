import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.AdminHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "oBacker Portal": "https://obacker.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({ rootName: "Trang chủ" }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.StatusBadge(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.LegalNav(),
    Component.Explorer({
      title: "Mục lục Quy trình",
      folderDefaultState: "collapsed",
      useSavedState: true,
      filterFn: (node) => {
        const omit = new Set(["CanCu", "VanBan", "raw", "_Nhap"])
        return !omit.has(node.slugSegment)
      },
    }),
    Component.KeyboardShortcuts(),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ rootName: "Trang chủ" }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.LegalNav(),
    Component.Explorer({
      title: "Mục lục Quy trình",
      folderDefaultState: "collapsed",
      useSavedState: true,
      filterFn: (node) => {
        const omit = new Set(["CanCu", "VanBan", "raw", "_Nhap"])
        return !omit.has(node.slugSegment)
      },
    }),
    Component.KeyboardShortcuts(),
  ],
  right: [],
}
