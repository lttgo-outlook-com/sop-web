import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, allFiles }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const khoa = (r: string) =>
      r
        .split(".")
        .slice(1)
        .map((x) => x.padStart(4, "0"))
        .join(".")
    const releases = allFiles
      .map((f) => (f.frontmatter as Record<string, unknown> | undefined)?.release)
      .filter((r): r is string => typeof r === "string" && /^R\.\d{2}\.\d{2}\.\d{2}\.\d+$/.test(r))
    const release = releases.length
      ? releases.reduce((a, b) => (khoa(b) > khoa(a) ? b : a))
      : undefined
    return (
      <footer class={`${displayClass ?? ""}`}>
        {release && <p>Phát hành {release}</p>}
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
