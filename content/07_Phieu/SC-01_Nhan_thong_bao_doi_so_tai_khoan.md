---
title: "PHIẾU SC-01. NHẬN THÔNG BÁO ĐỔI SỐ TÀI KHOẢN NHÀ CUNG CẤP"
code: "SC-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
law_as_of: ""
next_review: ""
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - SC-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU SC-01. NHẬN THÔNG BÁO ĐỔI SỐ TÀI KHOẢN NHÀ CUNG CẤP

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | SC-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | SC-01 |
| **Màu** | ĐỎ, phiếu sự cố |
| **Ai dùng** | Ai nhận được thông báo thì người đó mở phiếu |
| **Sinh từ** | `02_NoiBo/OBK-SOP-NB-01` mục 6.4.2 |
| **Quan hệ với biểu mẫu** | Phiếu này không thay biểu mẫu.<br>Ghi nhận kết quả vào **BM-05 Phiếu xác minh nhà cung cấp**, phần xác minh khi đổi số tài khoản |
| **Ngày làm phiếu** | 04/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Mở phiếu ngay khi nhận bất kỳ thông báo đổi số tài khoản nào của nhà cung cấp, qua bất kỳ kênh nào.

## VIỆC PHẢI THUỘC LÒNG

```
┌──────────────────────────────────────────────────────┐
│  1. DỪNG mọi lệnh chi cho nhà cung cấp này.          │
│  2. GỌI số điện thoại gốc trong hồ sơ nhà cung cấp.  │
│  3. KHÔNG dùng số trong email báo đổi.               │
│  4. BÁO KTT trước khi làm việc gì khác.              │
└──────────────────────────────────────────────────────┘
```

Bốn việc trên làm ngay, không mở tài liệu. Tiền chuyển đi rồi thì không lấy lại được.

## HỎI GÌ KHI GỌI

Gọi vào số gốc trong hồ sơ, hỏi đúng ba câu:

1. Công ty có gửi thông báo đổi số tài khoản không?
2. Số tài khoản mới là số nào? Đọc lại để đối chiếu.
3. Ai là người ký thông báo đó?

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

**Bên kia nói không gửi:** đây là lừa đảo. Giữ nguyên số tài khoản cũ, giữ lại email làm bằng chứng, ghi vào sổ sự cố. `KTT` báo `TGĐ`. Không trả lời email đó.

**Bên kia xác nhận có gửi:** điền BM-05 phần xác minh khi đổi số tài khoản. Chỉ `KTV` được sửa số tài khoản trong danh mục nhà cung cấp, và mỗi lần sửa phải có `KTT` duyệt.

**Chưa gọi được người nghe máy:** giữ nguyên trạng thái dừng. Không chuyển tiền cho tới khi xác minh xong. Chậm thanh toán rẻ hơn mất tiền.

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

Đây là loại gian lận phổ biến nhất nhắm vào doanh nghiệp nhỏ tại Việt Nam. Kịch bản: email của nhà cung cấp bị chiếm quyền hoặc bị giả mạo, kẻ gian gửi thông báo đổi số tài khoản kèm hóa đơn thật. Kế toán chuyển tiền vào tài khoản của kẻ gian. Tiền không lấy lại được.

Đây là kịch bản duy nhất trong toàn bộ quy trình mua sắm và thanh toán mà hậu quả không đảo ngược được. Mọi lỗi khác đều sửa được bằng bút toán điều chỉnh hoặc khai bổ sung.

### 2. Căn cứ quy định và pháp luật liên quan

| Nguồn | Nội dung |
| --- | --- |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 6.4.2 | Bắt buộc xác minh bằng cuộc gọi tới số điện thoại đã lưu trong hồ sơ từ trước |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 6.4.3 | Danh mục nhà cung cấp là nguồn duy nhất để lập lệnh chi |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 6.5.5 | Bốn điều kiện để lệnh chi được thực hiện, gồm điều kiện số tài khoản trùng danh mục |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 7 chốt `K2` và `K11` | Xác minh nhà cung cấp trước lần chi đầu;<br>số tài khoản người nhận khớp danh mục |
| `PL_BM` mục BM-05 | Biểu mẫu ghi nhận kết quả xác minh |

## Con số của phiếu này lấy ở đâu

Ngưỡng phải chuyển thử một khoản nhỏ trước là **từ 10.000.000 đồng trở lên**, đặt tại [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]] mục 6.4.2. Phiếu này không tự đặt ngưỡng riêng.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
