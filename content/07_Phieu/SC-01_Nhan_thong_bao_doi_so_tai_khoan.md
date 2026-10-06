---
title: "PHIẾU SC-01. NHẬN THÔNG BÁO ĐỔI SỐ TÀI KHOẢN NHÀ CUNG CẤP"
code: "SC-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.1.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
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
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | SC-01 |
| **Màu** | ĐỎ, phiếu sự cố |
| **Ai dùng** | Ai nhận được thông báo thì người đó mở phiếu |
| **Sinh từ** | `02_NoiBo/OBK-SOP-NB-01` mục 5.4.2 |
| **Quan hệ với biểu mẫu** | Phiếu này không thay biểu mẫu.<br>Ghi nhận kết quả vào **BM-05 Phiếu xác minh nhà cung cấp**, phần xác minh khi đổi số tài khoản |
| **Ngày làm phiếu** | 04/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

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


## Con số của phiếu này lấy ở đâu

Ngưỡng phải chuyển thử một khoản nhỏ trước là **từ 10.000.000 đồng trở lên**, đặt tại OBK-SOP-NB-01 mục 5.4.2. Phiếu này không tự đặt ngưỡng riêng.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu SC-01 về Sổ cái OBK-MSR |
