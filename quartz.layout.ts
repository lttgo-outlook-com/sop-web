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
      component: Component.Breadcrumbs({ rootName: "Trang chủ", showCurrentPage: false }),
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
        const omit = new Set(["raw", "_Nhap", "03_DichVu"])
        return !omit.has(node.slugSegment)
      },
      // Hiển thị tên thư mục gọn như breadcrumbs (bỏ prefix "01_", _ → khoảng trắng).
      // Chạy SAU sort (order bên dưới) để giữ thứ tự số 01/02/03... của folder.
      // Self-contained: được serialise qua .toString() và chạy client-side.
      sortFn: (a, b) => {
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        return a.slugSegment.localeCompare(b.slugSegment, undefined, { numeric: true, sensitivity: "base" })
      },
      mapFn: (node) => {
        if (node.isFolder) {
          const ten: Record<string, string> = {
            "01_ToChuc": "Tổ chức",
            "02_NoiBo": "Quy chế nội bộ",
            "03_BangKiem": "Bảng kiểm",
            "09_TnC": "Điều khoản dịch vụ",
            "10_DanhMuc": "Danh mục dịch vụ",
            "11_NhanSu": "Nhân sự",
            "90_ThuVien": "Thư viện tham khảo",
            "SOP_DichVu": "SOP dịch vụ",
            "SOP_NoiBo": "SOP nội bộ",
            "Phieu": "Phiếu",
            "Handbook_KeToan": "Handbook kế toán",
            "HuongDan_NghiepVu": "Hướng dẫn nghiệp vụ",
          }
          node.displayName =
            ten[node.slugSegment] ??
            ten[node.displayName] ??
            node.displayName.replace(/^\d+_/, "").replace(/[_-]/g, " ").trim()
        }
        return node
      },
      order: ["filter", "sort", "map"],
    }),
    Component.KeyboardShortcuts(),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ rootName: "Trang chủ", showCurrentPage: false }),
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
        const omit = new Set(["raw", "_Nhap", "03_DichVu"])
        return !omit.has(node.slugSegment)
      },
      // Hiển thị tên thư mục gọn như breadcrumbs (bỏ prefix "01_", _ → khoảng trắng).
      // Chạy SAU sort (order bên dưới) để giữ thứ tự số 01/02/03... của folder.
      // Self-contained: được serialise qua .toString() và chạy client-side.
      sortFn: (a, b) => {
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        return a.slugSegment.localeCompare(b.slugSegment, undefined, { numeric: true, sensitivity: "base" })
      },
      mapFn: (node) => {
        if (node.isFolder) {
          const ten: Record<string, string> = {
            "01_ToChuc": "Tổ chức",
            "02_NoiBo": "Quy chế nội bộ",
            "03_BangKiem": "Bảng kiểm",
            "09_TnC": "Điều khoản dịch vụ",
            "10_DanhMuc": "Danh mục dịch vụ",
            "11_NhanSu": "Nhân sự",
            "90_ThuVien": "Thư viện tham khảo",
            "SOP_DichVu": "SOP dịch vụ",
            "SOP_NoiBo": "SOP nội bộ",
            "Phieu": "Phiếu",
            "Handbook_KeToan": "Handbook kế toán",
            "HuongDan_NghiepVu": "Hướng dẫn nghiệp vụ",
          }
          node.displayName =
            ten[node.slugSegment] ??
            ten[node.displayName] ??
            node.displayName.replace(/^\d+_/, "").replace(/[_-]/g, " ").trim()
        }
        return node
      },
      order: ["filter", "sort", "map"],
    }),
    Component.KeyboardShortcuts(),
  ],
  right: [],
}
