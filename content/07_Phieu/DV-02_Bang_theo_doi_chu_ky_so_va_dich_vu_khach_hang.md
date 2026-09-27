---
title: "PHIẾU DV-02. BẢNG THEO DÕI HẠN CHỮ KÝ SỐ VÀ DỊCH VỤ ĐỊNH KỲ KHÁCH HÀNG"
code: "DV-02"
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
previous_version: "R.1.0.0"
aliases:
  - DV-02
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU DV-02. BẢNG THEO DÕI HẠN CHỮ KÝ SỐ VÀ DỊCH VỤ ĐỊNH KỲ KHÁCH HÀNG

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | DV-02 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | DV-02 |
| **Màu** | XANH, theo dõi dịch vụ khách hàng |
| **Ai dùng** | Chuyên viên Quản lý khách hàng (`AM`), `KTV` và `TP Thương mại` |
| **Sinh từ** | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] Job `AM-13`;<br>[[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] mục 5 |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi được áp dụng cho toàn bộ khách hàng đang sử dụng các dịch vụ định kỳ hoặc sản phẩm có thời hạn bản quyền do oBacker cung ứng, bao gồm: chữ ký số (Token USB hoặc Smart-CA), gói phần mềm hóa đơn điện tử, dịch vụ kế toán thuế trọn gói, dịch vụ duy trì văn phòng đại diện và tên miền.

## KHUÔN THEO DÕI DỊCH VỤ KHÁCH HÀNG

| Cột | Tên trường | Nội dung ghi nhận |
| --- | --- | --- |
| 1 | Mã khách hàng (`Client ID`) | Mã định danh khách hàng trên hệ thống oBacker |
| 2 | Tên doanh nghiệp khách hàng | Tên đầy đủ trên Giấy chứng nhận đăng ký doanh nghiệp |
| 3 | Mã số thuế | Mã số thuế doanh nghiệp |
| 4 | Loại dịch vụ sử dụng | Chữ ký số, Hóa đơn điện tử, Kế toán trọn gói, Dịch vụ pháp lý |
| 5 | Nhà cung ứng dịch vụ | Viettel, VNPT, CyberLotus, Bkav, EasyCA... |
| 6 | Số Serial chứng thư số / Số HĐ | Mã định danh kỹ thuật để kiểm tra trên hệ thống nhà mạng |
| 7 | Ngày kích hoạt dịch vụ | Ngày bắt đầu tính thời hạn sử dụng |
| 8 | Ngày hết hạn dịch vụ | Ngày cuối cùng chứng thư số hoặc gói dịch vụ còn hiệu lực |
| 9 | Chuyên viên phụ trách (`AM`) | Nhân sự chịu trách nhiệm duy trì liên hệ và chăm sóc khách hàng |
| 10 | Trạng thái gia hạn | Bình thường, Đã gửi thông báo 30 ngày, Đang thương thảo, Đã thanh toán gia hạn, hoặc Khách hàng hủy dịch vụ |

## QUY TRÌNH 5 MỐC NHẮC GIA HẠN VÀ XỬ LÝ DỊCH VỤ

Quy trình nhắc nhở được thiết kế nhằm bảo đảm khách hàng không bị gián đoạn hoạt động xuất hóa đơn và nộp tờ khai thuế:

```
[ ]  1. MỐC TRƯỚC 30 NGÀY SO VỚI NGÀY HẾT HẠN
        - AM xuất danh sách khách hàng đến hạn trong tháng kế tiếp.
        - Gửi Thư điện tử thông báo thời hạn kèm Báo giá chính sách gia hạn ưu đãi.
        - Nêu rõ cảnh báo: Chữ ký số hết hạn sẽ làm gián đoạn nộp tờ khai thuế và xuất hóa đơn điện tử.

[ ]  2. MỐC TRƯỚC 15 NGÀY SO VỚI NGÀY HẾT HẠN
        - AM liên hệ xác nhận nhu cầu của khách hàng qua kênh liên lạc trực tiếp (điện thoại hoặc tin nhắn).
        - Gửi Hợp đồng dịch vụ hoặc Phụ lục gia hạn để khách hàng ký duyệt.
        - Nếu khách hàng đồng ý: chuyển KTV chuẩn bị hồ sơ gia hạn với Nhà mạng.

[ ]  3. MỐC TRƯỚC 07 NGÀY SO VỚI NGÀY HẾT HẠN
        - AM đôn đốc hoàn tất thanh toán phí dịch vụ gia hạn.
        - KTV nộp hồ sơ gia hạn điện tử lên cổng nhà cung ứng CA/hóa đơn ngay khi nhận chứng từ thanh toán.
        - Cập nhật chứng thư số mới vào thiết bị USB Token hoặc kích hoạt gói số hóa đơn mới.

[ ]  4. MỐC NGÀY HẾT HẠN (NGÀY D)
        - Đối với khách hàng ĐÃ GIA HẠN: KTV kiểm tra thử nghiệm chữ ký số mới trên Cổng Tổng cục Thuế,
          lập Biên bản bàn giao theo Mẫu [[CK-01_Ban_giao_chu_ky_so_va_hoa_don|CK-01]].
        - Đối với khách hàng CHƯA GIA HẠN: gửi Thông báo khẩn cấp về việc chữ ký số chính thức hết hiệu lực,
          đề nghị tạm dừng xuất hóa đơn cho đến khi gia hạn thành công.

[ ]  5. MỐC SAU 07 NGÀY KỂ TỪ NGÀY HẾT HẠN
        - Nếu khách hàng xác nhận KHÔNG TIẾP TỤC SỬ DỤNG: AM lập phiếu ghi nhận lý do ngừng dịch vụ,
          hướng dẫn khách hàng thủ tục bàn giao tài khoản quản trị và lưu trữ dữ liệu.
        - Cập nhật trạng thái "Khách hàng hủy dịch vụ" vào sổ theo dõi.
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ theo dõi được cập nhật liên tục bởi `AM` và đối soát cùng `KTV` vào thứ Sáu hằng tuần. Báo cáo tỷ lệ gia hạn dịch vụ thành công (`Renewal Rate`) được gửi `TP Thương mại` và `COO` trong báo cáo định kỳ tháng.

## KÝ XÁC NHẬN

| Chuyên viên Quản lý khách hàng (`AM`) | Kế toán viên đối soát (`KTV`) | Trưởng phòng Thương mại |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm doanh thu định kỳ của oBacker, giữ chân khách hàng thông qua dịch vụ chăm sóc chủ động, ngăn ngừa các vi phạm hành chính về thuế cho khách hàng do nộp tờ khai chậm khi chữ ký số bị gián đoạn.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quản lý khách hàng | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] Job `AM-13` | Cập nhật định kỳ và thông báo thời hạn cho khách hàng |
| Quản lý chữ ký số | [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] mục 5 | Kiểm tra thời hạn hiệu lực và thủ tục bàn giao chữ ký số |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
