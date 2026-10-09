import { classNames } from "../util/lang"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export type StatusTone = "success" | "warning" | "neutral"

/**
 * Trạng thái luôn đọc bằng chữ + màu (không bao giờ chỉ màu).
 * "đang áp dụng" / "còn hiệu lực" → success; "hết hiệu lực" → warning; còn lại neutral.
 */
export function statusTone(status: string | undefined): StatusTone {
  if (status === "đang áp dụng" || status === "còn hiệu lực") return "success"
  if (status === "hết hiệu lực") return "warning"
  return "neutral"
}

/** Trích version dạng chuỗi ("V1.0.0"); trả về undefined nếu không có hoặc không phải string. */
export function docVersion(frontmatter: Record<string, unknown> | undefined): string | undefined {
  const v = frontmatter?.version
  return typeof v === "string" ? v : undefined
}

/** Trích mã phát hành dạng chuỗi ("R.26.10.08.1"); rỗng thì trả về undefined. */
export function docRelease(frontmatter: Record<string, unknown> | undefined): string | undefined {
  const r = frontmatter?.release
  return typeof r === "string" && r.trim() !== "" ? r : undefined
}

/** Trích status dạng chuỗi; trả về undefined nếu không có hoặc không phải string. */
export function docStatus(frontmatter: Record<string, unknown> | undefined): string | undefined {
  const s = frontmatter?.status
  return typeof s === "string" ? s : undefined
}

const StatusBadge: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
  const version = docVersion(frontmatter)
  const status = docStatus(frontmatter)
  const release = docRelease(frontmatter)

  if (!version && !status) {
    return null
  }

  return (
    <span class={classNames(displayClass, "status-badge", `tone-${statusTone(status)}`)}>
      {version && <span class="status-badge-version">{version}</span>}
      {release && (
        <span class="status-badge-sep" aria-hidden="true">
          ·
        </span>
      )}
      {release && (
        <span class="status-badge-version" title="Mã phát hành">
          {release}
        </span>
      )}
      {version && status && (
        <span class="status-badge-sep" aria-hidden="true">
          ·
        </span>
      )}
      {status}
    </span>
  )
}

export default (() => StatusBadge) satisfies QuartzComponentConstructor
