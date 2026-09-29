---
title: "PHIẾU TL-01. SỔ THEO DÕI GIAO NHẬN TÀI LIỆU, THƯ TỪ VÀ BƯU PHẨM"
code: "TL-01"
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
  - TL-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU TL-01. SỔ THEO DÕI GIAO NHẬN TÀI LIỆU, THƯ TỪ VÀ BƯU PHẨM

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | TL-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | TL-01 |
| **Màu** | XANH, sổ theo dõi bưu chính và tài liệu |
| **Ai dùng** | `AD-KT`, `AM`, `KTV`, `CV-LIC`, `CV-LS` và Quản lý trực tiếp (`TL`) |
| **Sinh từ** | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 8;<br>[[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] Job `AM-13` |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Áp dụng cho toàn bộ hoạt động giao nhận tài liệu, hồ sơ pháp lý, chứng từ kế toán, công văn hành chính, thư từ và bưu phẩm giữa oBacker với Khách hàng, Cơ quan Nhà nước (CQNN), Nhà cung ứng (Vendors) và các đối tác liên quan, phát sinh tại văn phòng Đà Nẵng và văn phòng Hồ Chí Minh.

## KHUÔN SỔ THEO DÕI GIAO NHẬN

| Cột | Tên trường | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã quản lý (`Log ID`) | Khuôn: `TL-[Năm]-[Số thứ tự]` |
| 2 | Ngày giờ giao dịch | Thời điểm chính xác nhận bưu phẩm hoặc gửi thư đi |
| 3 | Chiều bưu chính | **ĐẾN** (`Inbound`) hoặc **ĐI** (`Outbound`) |
| 4 | Nhóm đối tác | Khách hàng (`KH`), Cơ quan Nhà nước (`CQNN`), Nhà cung ứng (`Vendor`), hoặc Nội bộ |
| 5 | Tên tổ chức / Cá nhân đối tác | Tên doanh nghiệp khách hàng, tên cơ quan thụ lý hoặc tên nhà cung cấp |
| 6 | Trích yếu nội dung tài liệu | Tên loại hồ sơ (ERC, IRC, Giấy phép lao động, Hóa đơn tài chính, Token CKS, Thông báo thuế...) |
| 7 | Số lượng & Tình trạng | Số lượng bản gốc / bản sao; tình trạng niêm phong phong bì |
| 8 | Phương thức giao nhận | Chuyển phát bưu chính (EMS, Viettel Post...), Giao hàng công nghệ (Grab, Ahamove), Nộp trực tiếp, hoặc Giao nhận tại quầy |
| 9 | Mã vận đơn (`Tracking No`) | Mã số tra cứu hành trình bưu kiện của đơn vị vận chuyển |
| 10 | Nhân sự phụ trách nội bộ | Chuyên viên gửi hoặc nhận (`AM`, `CV-LIC`, `KTV`, `AD-KT`) |
| 11 | Trạng thái xác nhận | Đã tiếp nhận an toàn, Đang chuyển phát, Đã ký nhận thành công, hoặc Trả lại người gửi |

## QUY TRÌNH QUẢN LÝ GIAO NHẬN BƯU CHÍNH VÀ THƯ TỪ

```
[ ]  1. TIẾP NHẬN THƯ TỪ / TÀI LIỆU ĐẾN (INBOUND)
        - AD-KT tiếp nhận bưu phẩm từ bưu tá hoặc khách hàng tại quầy lễ tân.
        - Kiểm tra tính nguyên vẹn của niêm phong; chụp ảnh bưu phẩm nếu có dấu hiệu rách hoặc móp méo.
        - Nhập thông tin vào Sổ giao nhận trong vòng 30 phút kể từ khi nhận.
        - Bàn giao ngay cho Chuyên viên phụ trách vụ việc (AM, KTV, CV-LIC) và yêu cầu ký xác nhận vào sổ.
        - ĐỐI VỚI VĂN BẢN TỪ CQNN (Thuế, Tòa án, Thanh tra...): chuyển ngay trong vòng 01 giờ cho TL và CEO.

[ ]  2. GỬI TÀI LIỆU / KẾT QUẢ ĐI (OUTBOUND)
        - Chuyên viên chuẩn bị tài liệu, đóng gói bảo đảm tính nguyên vẹn kèm Phiếu bàn giao [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu|TL-02]].
        - ĐỐI VỚI GIẤY TỜ GỐC QUAN TRỌNG (Hộ chiếu, ERC/IRC gốc, USB Token): bắt buộc niêm phong có chữ ký giáp lai;
          chỉ sử dụng dịch vụ chuyển phát có bảo hiểm và có chữ ký xác nhận của người nhận.
        - Cung cấp mã vận đơn (Tracking Number) cho khách hàng qua thư điện tử hoặc tin nhắn để khách hàng theo dõi.
        - Cập nhật mã vận đơn và ngày gửi vào Sổ giao nhận.

[ ]  3. THEO DÕI HÀNH TRÌNH VÀ XÁC NHẬN PHÁT THÀNH CÔNG
        - AD-KT tra cứu định kỳ hành trình bưu phẩm mỗi 24 giờ.
        - Khi trạng thái bưu chính báo "Phát thành công": liên hệ với khách hàng/đối tác xác nhận đã nhận đủ hồ sơ.
        - Cập nhật trạng thái "Đã ký nhận thành công" vào sổ; lưu trữ biên lai chuyển phát.
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ theo dõi được cập nhật liên tục trên hệ thống lưu trữ điện tử nội bộ. Báo cáo tình hình giao nhận thư từ và bưu phẩm chậm trễ hoặc thất lạc (nếu có) được gửi cho `COO` vào chiều thứ Sáu hằng tuần.

## KÝ XÁC NHẬN

| Người quản lý sổ (`AD-KT`) | Chuyên viên phụ trách giao dịch | Giám đốc Vận hành (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Loại trừ triệt để tình trạng thất lạc giấy tờ gốc quan trọng của khách hàng (hộ chiếu, giấy chứng nhận đăng ký đầu tư, chứng từ thuế); bảo đảm có dấu vết pháp lý chứng minh thời điểm nộp hồ sơ tới Cơ quan Nhà nước và thời điểm khách hàng nhận bàn giao kết quả.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quản lý tài liệu khách hàng | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 8 | Bảo quản an toàn hồ sơ gốc, không làm thất lạc |
| Chăm sóc khách hàng | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] Job `AM-13` | Cung cấp mã vận đơn và cập nhật tiến độ bưu chính cho khách hàng |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
