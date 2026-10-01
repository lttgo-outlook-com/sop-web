import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "oBacker SOP",
    pageTitleSuffix: " | oBacker",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "vi-VN",
    baseUrl: "sop.obacker.com",
    ignorePatterns: ["private", "templates", ".obsidian", "_lam_viec", "_to_delete", "_luu_tru"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Be Vietnam Pro",
        body: "Be Vietnam Pro",
        code: "SF Mono",
      },
      colors: {
        // oBacker OS design system v3 — light only (không còn dark mode)
        lightMode: {
          light: "#ffffff",
          lightgray: "#faf9f6",
          gray: "#e2e8f0",
          darkgray: "#475569",
          dark: "#1e293b",
          secondary: "#193cb8",
          tertiary: "#f77f00",
          highlight: "#eef2ff",
          textHighlight: "#fef08a88",
        },
        darkMode: {
          light: "#ffffff",
          lightgray: "#faf9f6",
          gray: "#e2e8f0",
          darkgray: "#475569",
          dark: "#1e293b",
          secondary: "#193cb8",
          tertiary: "#f77f00",
          highlight: "#eef2ff",
          textHighlight: "#fef08a88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
