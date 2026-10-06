---
title: "PHIẾU KQ-01. KIỂM KÊ QUỸ TIỀN MẶT"
code: "KQ-01"
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
  - KQ-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU KQ-01. KIỂM KÊ QUỸ TIỀN MẶT

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | KQ-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | KQ-01 |
| **Màu** | XANH, phiếu theo lịch |
| **Ai dùng** | Hội đồng kiểm kê gồm `TQ`, `KTV` và `KTT` (hoặc người được ủy quyền) |
| **Sinh từ** | [[OBK-SOP-NB-03_Quan_ly_tien\|OBK-SOP-NB-03]] mục 5 Job `NB-17`;<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 34 |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Phiếu kiểm kê quỹ tiền mặt được áp dụng định kỳ hằng tháng vào ngày làm việc cuối cùng của tháng, hoặc đột xuất khi có yêu cầu từ `CEO` hoặc `KTT`, hoặc khi bàn giao giữa hai người giữ vai trò `TQ`.

| Loại kiểm kê | Thời điểm thực hiện | Thành phần tham gia |
| --- | --- | --- |
| Định kỳ cuối tháng | 17:00 ngày làm việc cuối cùng của tháng | `TQ`, `KTV`, `KTT` |
| Đột xuất | Theo chỉ đạo của `CEO` hoặc `KTT` | `TQ`, người kiểm tra được chỉ định |
| Bàn giao quỹ | Khi thay đổi nhân sự giữ vai trò `TQ` | `TQ` cũ, `TQ` mới, `KTT` chứng kiến |

## CÁC BƯỚC

```
Thời điểm kiểm kê: ..... giờ ..... ngày ..... / ..... / 2026
Địa điểm: Văn phòng [ ] Đà Nẵng       [ ] Hồ Chí Minh

[ ]  1. KHÓA SỔ quỹ tiền mặt tại thời điểm kiểm kê.
        Số dư sổ quỹ đến thời điểm kiểm kê: ......................... đồng

[ ]  2. KIỂM ĐẾM thực tế từng loại mệnh giá tiền mặt trong két:
        500.000 đồng : .......... tờ = ......................... đồng
        200.000 đồng : .......... tờ = ......................... đồng
        100.000 đồng : .......... tờ = ......................... đồng
        50.000 đồng  : .......... tờ = ......................... đồng
        20.000 đồng  : .......... tờ = ......................... đồng
        10.000 đồng  : .......... tờ = ......................... đồng
        Dưới 10.000đ : .......... tờ = ......................... đồng
        -------------------------------------------------------------
        TỔNG TIỀN MẶT KIỂM ĐẾM THỰC TẾ: ......................... đồng

[ ]  3. ĐỐI CHIẾU số tiền kiểm đếm thực tế với số dư sổ kế toán:
        Số thực tế  : ......................... đồng
        Số sổ sách  : ......................... đồng
        Chênh lệch  : ......................... đồng
                      Khớp [ ]      Thừa [ ]      Thiếu [ ]

[ ]  4. XÁC ĐỊNH NGUYÊN NHÂN nếu có chênh lệch:
        Ghi nhận nguyên nhân cụ thể: .......................................
        ....................................................................

[ ]  5. LẬP BIÊN BẢN và ký xác nhận đầy đủ các bên.
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

**Khớp:** Ký biên bản, lưu hồ sơ kế toán tháng. Kết thúc.

**Lệch thừa hoặc thiếu:**
- Lập biên bản ghi rõ số tiền chênh lệch.
- Báo cáo ngay cho `KTT` và `CEO` trong ngày.
- Nếu thiếu tiền quỹ chưa rõ nguyên nhân: Hạch toán vào Tài sản thiếu chờ xử lý theo Thông tư 99/2025/TT-BTC: Nợ TK 1381 (Tài sản thiếu chờ xử lý) / Có TK 111 (Tiền mặt). Sau khi xác định rõ nguyên nhân do lỗi cá nhân của `TQ`, `TQ` có trách nhiệm bồi thường đủ số tiền thiếu trong vòng 24 giờ (hạch toán Nợ TK 111 hoặc Nợ TK 334 trừ vào tiền lương / Có TK 1381).
- Nếu thừa tiền quỹ chưa rõ nguyên nhân: Hạch toán vào Tài sản thừa chờ giải quyết theo Thông tư 99/2025/TT-BTC: Nợ TK 111 / Có TK 3381 (Tài sản thừa chờ giải quyết). Sau khi có quyết định xử lý của `CEO`, kết chuyển vào thu nhập khác Nợ TK 3381 / Có TK 711.

## KÝ XÁC NHẬN

| Thủ quỹ (`TQ`) | Kế toán viên (`KTV`) | Kế toán trưởng (`KTT`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Kiểm kê quỹ tiền mặt bảo đảm tính toàn vẹn của tài sản tiền mặt tại văn phòng, phát hiện ngay các sai lệch giữa thực tế và sổ sách kế toán, ngăn chặn hành vi sử dụng quỹ sai mục đích.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KQ-01 về Sổ cái OBK-MSR |
