---
name: oBacker SOP
description: "oBacker OS — kho tài liệu nội bộ oBacker: xanh corporate, bóng đặc không nhòe, Be Vietnam Pro toàn site, light-only, mật độ admin 12px."
colors:
  obk-blue: "#193cb8"
  obk-blue-hover: "#15329e"
  obk-blue-tint: "#eef2ff"
  obk-blue-border: "#112882"
  obk-orange: "#f77f00"
  obk-orange-hover: "#e07300"
  obk-orange-tint: "#fff7ed"
  obk-cyan: "#1890ff"
  orange-ink: "#78350f"
  canvas: "#faf9f6"
  sunken: "#fafafa"
  panel-header: "#f8fafc"
  hairline: "rgba(226,232,240,0.9)"
  slate-900: "#0f172a"
  slate-800: "#1e293b"
  slate-700: "#334155"
  slate-600: "#475569"
  slate-500: "#64748b"
  slate-400: "#94a3b8"
  slate-300: "#cbd5e1"
  slate-200: "#e2e8f0"
  slate-100: "#f1f5f9"
  slate-50: "#f8fafc"
  success: "#22c55e"
  success-deep: "#166534"
  success-border: "#bbf7d0"
  warning: "#f59e0b"
  danger: "#dc2626"
typography:
  display:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "28px"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "32px"
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: "28px"
  body-doc:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "26px"
  body-table:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "20px"
  tree-item:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  body-admin:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
  label:
    fontFamily: "Be Vietnam Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "16px"
    letterSpacing: "0.05em"
  mono:
    fontFamily: "SF Mono, ui-monospace, Cascadia Code, JetBrains Mono, Menlo, Consolas, monospace"
    fontSize: "11px"
  kbd:
    fontFamily: "SF Mono, ui-monospace, Cascadia Code, JetBrains Mono, Menlo, Consolas, monospace"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "14px"
rounded:
  xs: "1px"
  lg: "4px"
  md: "2px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.obk-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.obk-blue-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  status-badge:
    backgroundColor: "{colors.slate-50}"
    textColor: "{colors.slate-700}"
    rounded: "0px"
    padding: "2px 8px"
  search-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.slate-700}"
    rounded: "{rounded.lg}"
    padding: "6px 12px"
---

# Design System: oBacker SOP (thế giới oBacker OS)

## Overview

**Creative North Star: "oBacker OS — hệ điều hành văn phòng pháp lý"**

Site là một màn hình quản trị: canvas ấm rất nhẹ (#faf9f6), các panel trắng đứng cạnh nhau, mỗi panel được "dồn" xuống nền bằng bóng đặc 2px không nhòe — như hồ sơ đặt trên bàn làm việc chứ không lơ lửng trong không gian. Nhấn thương hiệu là xanh corporate #193cb8 (hành động, liên kết, vạch màu định danh); cam #f77f00 là nhấn thứ hai cho cảnh báo, tag loại, và đúng một dải gradient 2,5px trên cùng của AdminHeader.

Mật độ là của phần mềm nội bộ, không phải trang trình bày: chrome 12px/16px, nội dung tài liệu 15px/26px, bảng dữ liệu thớ chặt 13px/20px. Một font duy nhất — Be Vietnam Pro — cho toàn site từ chrome đến tài liệu, tự tin với tiếng Việt nặng dấu. Không dark mode, không hiệu ứng trang trí: mọi trạng thái phải đọc được bằng chữ + màu, không chỉ màu.

**Key Characteristics:**
- Bóng đặc không nhòe (`2px 2px 0 #1e293b`) là chữ ký chiều sâu — không có blur trong toàn bộ hệ thống.
- Vạch màu đứng bên trái (6px PageHeader, 4px×14px panel, 3.5px badge/dòng) là mẫu lặp lại để định danh.
- Đúng một gradient (xanh → cyan → cam), chỉ ở dải 2,5px trên cùng của AdminHeader.
- Light-only. Không toggle, không `prefers-color-scheme`.
- Radius nhỏ: 4px cho bề mặt, 2px cho tag, 0 cho bảng và badge.

## Colors

Bảng màu corporate hai nhấn trên nền slate trung tính; canvas hơi ấm để panel trắng nổi lên.

### Primary
- **oBacker Blue** (#193cb8): liên kết, nút chính, vạch màu PageHeader, trạng thái active, chip "CC". Hover: #15329e. Nền nhấn: #eef2ff (blue-tint).
- **Signal Orange** (#f77f00): dải gradient header, vạch dòng "Nhật ký", callout quote; hover #e07300; nền nhấn #fff7ed; chữ trên nền cam: #78350f (orange-ink).
- **Process Cyan** (#1890ff): thành phần thứ ba của dải gradient header — không dùng riêng lẻ ngoài dải đó.

### Neutral
- **Warm Canvas** (#faf9f6): nền toàn trang.
- **Panel Header** (#f8fafc): dải đầu của WorkPanel (LegalNav, Explorer, TOC).
- **Hairline** (rgba(226,232,240,0.9)): border 1px của mọi panel và bảng — border làm chính, không phải shadow.
- **Ink Slate 900** (#0f172a): tiêu đề. **Slate 700** (#334155): chữ tài liệu. **Slate 600** (#475569): chữ chrome. **Slate 500** (#64748b): meta, phụ chú. **Slate 400** (#94a3b8): icon, chữ tắt. **Slate 200/100/50**: border mạnh, nền alt, nền tag.

### Ngữ nghĩa
- **Success** #22c55e (chấm online), xanh sâu #16a34a / #166534 (vạch + chip "TT").
- **Warning** #f59e0b (callout warning), **Danger** #dc2626 (callout danger, nút phá huỷ).

### Named Rules

**The One Gradient Rule.** Dải gradient 2,5px xanh → cyan → cam chỉ xuất hiện ở trên cùng của AdminHeader. Mọi nơi khác là màu đơn.

**The Light Only Rule.** Hệ thống chỉ có theme sáng. Không viết rule dark, không giữ biến màu tối, không thêm toggle.

## Typography

**Display/Body Font:** Be Vietnam Pro (self-hosted, 5 @font-face 400–700 + italic) — toàn site, cả chrome lẫn tài liệu.
**Mono Font:** SF Mono (fallback ui-monospace) cho chip mã (CC/TT/NK), kbd phím tắt, bảng mã tài liệu.

**Character:** Một giọng duy nhất, dày dấu tiếng Việt phải đẹp; uppercase + letter-spacing 0.05em là cách "nhấn" thay vì đổi font.

### Hierarchy
- **Display** (700, 20px/28px, -0.025em): tiêu đề trang trong PageHeader và h1 bài viết.
- **Headline** (700, 24px/32px): h2 tài liệu.
- **Title** (600, 19px/28px): h3; h4–h6 thu về 15px/22px 600.
- **Body doc** (400, 15px/26px): nội dung tài liệu, max ~70ch.
- **Body table** (400, 13px/20px): td bảng dữ liệu, callout body.
- **Tree item** (400, 14px/20px): liên kết tên file trong cây Explorer.
- **Body admin** (400, 12px/16px): chrome, sidebar.
- **Label** (700, 12px, 0.05em, UPPERCASE): đầu WorkPanel ("MỤC LỤC QUY TRÌNH"), tiêu đề callout, th header bảng.
- **Kbd** (600, 10px/14px, mono): phím tắt ⌘K, tổ hợp phím.

### Named Rules

**The One Voice Rule.** Be Vietnam Pro là chữ duy nhất (ngoại lệ mono). Không thêm Google Fonts, không font display riêng cho tiêu đề.

## Layout

Desktop ≥1200px: grid 3 cột `280px | minmax(0,1fr) | 250px`, gap 1.75rem, bên trong `.page` padding 1.5rem. AdminHeader fixed toàn ngang (64px + dải 2,5px), body chừa `padding-top: 66.5px`. Sidebar trái sticky, cao `100vh - 82px`, tự cuộn trong panel (explorer nội bộ max 382px). ≤1200px: 2 cột (260px + 1fr), ẩn TOC phải. ≤768px: xếp dọc — AdminHeader 56px (ẩn chip "Nội bộ oBacker"), sidebar thành stack cột (search, LegalNav, Explorer) rồi tới bài viết; bảng cuộn ngang trong `.table-container` (min-width 480px).

## Elevation & Depth

Depth = bóng đặc không nhòe + border hairline, không có shadow môi trường. Bóng "dồn" panel xuống nền canvas như vật đặt trên bàn; shadow tăng 1px khi hover là phản hồi xúc giác.

### Shadow Vocabulary
- **subtle** (`0 1px 2px 0 rgb(0 0 0/0.05)`): chip, dòng LegalNav ở trạng thái nghỉ.
- **arch** (`2px 2px 0 #1e293b`): mọi panel tĩnh (PageHeader, bài viết, LegalNav, Explorer, TOC).
- **arch-lg** (`3px 3px 0 #1e293b`): popover.
- **header** (`0 2px 0 #1e293b`): AdminHeader.
- **btn-primary** (`2px 2px 0 #0f172a`, hover `3px 3px 0`): nút chính, kèm `translateY(-1px)` khi hover, `translateY(1.5px)` + mất bóng khi nhấn.
- **btn-secondary** (`1.5px 1.5px 0 #1e293b` → hover 2.5px): nút phụ, icon button.

### Named Rules

**The No Blur Rule.** Không `blur()` trong bất kỳ box-shadow nào. Bóng có cạnh sắc cùng màu ink (#1e293b / #0f172a) hoặc 5% đen cho bóng nghỉ.

## Shapes

Radius nhỏ và nhất quán: **4px** cho bề mặt (panel, input, chip logo), **2px** cho tag/đính danh, **0** cho bảng và badge (cạnh vuông là đúng với dữ liệu). Vạch màu đứng là "bo góc" tinh thần của hệ thống: PageHeader 6px full chiều cao, đầu panel 4px×14px, dòng LegalNav và tag 3.5px.

## Components

### AdminHeader
Dải gradient 2,5px trên cùng; thanh 64px trắng, border-bottom 1px #1e293b + shadow-header. Trái: logo wordmark (cao 30px) về trang chủ. Phải: chip "Nội bộ oBacker" — nền trắng, border #cbd5e1, radius 4px, chấm xanh 8px #22c55e. Mobile 56px, ẩn chip.

### WorkPanel (LegalNav / Explorer / TOC)
Panel trắng, border hairline, radius 4px, shadow-arch. Dải đầu `#f8fafc` cao ~44px: vạch 4px×14px xanh + tiêu đề UPPERCASE 12px/700/0.05em, chevron xám bên phải. Explorer cuộn trong panel (max 382px), mục đang mở được tự cuộn tới **bên trong panel** chứ không kéo cả trang.

### LegalNav row
Chip vuông 24px mono (CC: nền #eef2ff chữ #193cb8; TT: #f0fdf4/#166534; NK: #fff7ed/#78350f) + title 12px/600 + sub 11px xám. Vạch trái 3.5px theo màu dòng. Hover: `translateY(-1px)` + shadow-arch, 150ms `cubic-bezier(0.16,1,0.3,1)`.

### StatusBadge / tag
11px/600 UPPERCASE, nền slate-50, border hairline, **vạch trái 3.5px**, radius 0. Hover: nền blue-tint, chữ + vạch chuyển xanh.

### Nút
- **Primary:** nền #193cb8, chữ trắng, radius 4px, padding 8px 16px, shadow-btn-primary; hover nền #15329e + bóng 3px + `translateY(-1px)`; active `translateY(1.5px)` không bóng.
- **Secondary / icon:** nền trắng, border #cbd5e1, shadow-btn-secondary (1.5px); hover bóng 2.5px + `translateY(-1px)`.

### Bảng
th: 11px/600 UPPERCASE 0.05em, nền slate-50, border-bottom slate-200. td: 13px/20px. Row hover nền #f8fafc 70%. Wrapper: border hairline, radius 4px, shadow-arch, `overflow-x: auto`; mobile min-width 480px.

### Callout
Blockquote → nền #fff7ed, vạch trái 4px cam, chữ #78350f; note/info → nền #eef2ff, vạch xanh; warning → amber; danger → đỏ; tip → xanh lá. Tiêu đề 12px UPPERCASE 0.05em.

### Chuyển động
150ms, `cubic-bezier(0.16, 1, 0.3, 1)`, chỉ cho transform/opacity/background. `prefers-reduced-motion` → 0.01ms toàn site.

## Do's and Don'ts

### Do:
- **Do** dùng bóng đặc không nhòe (`2px 2px 0 #1e293b`) cho mọi panel và tăng bóng + `translateY(-1px)` khi hover.
- **Do** gắn vạch màu đứng (6px / 4px×14px / 3.5px) cho mọi bề mặt cần định danh: PageHeader, WorkPanel, dòng, tag.
- **Do** viết uppercase 12px, letter-spacing 0.05em, weight 700 cho mọi label panel và tiêu đề bảng.
- **Do** dùng Be Vietnam Pro cho tất cả chữ (400/500/600/700), mono chỉ cho mã tài liệu và phím tắt.
- **Do** để bảng cuộn ngang trong container (mobile min-width 480px) thay vì ép co cụm.

### Don't:
- **Don't** thêm dark mode, toggle theme, hay bất kỳ rule `prefers-color-scheme` nào.
- **Don't** dùng gradient ngoài dải 2,5px của AdminHeader; don't dùng `backdrop-filter`/blur.
- **Don't** lồng Card trong Card — panel đã có border + bóng, nội dung phân tách bằng dải header và đường hairline.
- **Don't** truyền trạng thái bằng màu đơn thuần: mọi status phải có chữ kèm màu.
- **Don't** thêm font mới, icon animation trang trí, hay hiệu ứng marketing — site là phần mềm nội bộ.
- **Don't** sửa tay `content/` — nội dung đồng bộ một chiều từ kho SOP bằng `_tools/dong_bo_sop_web.py`.
