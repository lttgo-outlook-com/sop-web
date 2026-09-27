---
title: "PHIẾU TS-01. SỔ THEO DÕI TÀI SẢN VÀ CÔNG CỤ DỤNG CỤ"
code: "TS-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "27/09/2026"
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
  - TS-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU TS-01. SỔ THEO DÕI TÀI SẢN VÀ CÔNG CỤ DỤNG CỤ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | TS-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 27/09/2026 |
| Người biên soạn | `CEO` soạn bản đầu. Bản sau do `CEO` phân công |
| Người soát | đã soát |
| Người phê duyệt | đã phê duyệt |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | TS-01 |
| **Màu** | XANH, sổ theo dõi tài sản |
| **Ai dùng** | `AD-KT`, `KTV`, Quản lý trực tiếp (`TL`) và `KTT` |
| **Sinh từ** | [[OBK-SOP-NB-08_Quan_ly_tai_san_va_cong_cu_dung_cu\|OBK-SOP-NB-08]] Điều 6;<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 44 |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi tài sản và công cụ dụng cụ được cập nhật liên tục khi phát sinh các sự kiện: mua sắm mới, cấp phát cho nhân sự, thu hồi khi nhân sự nghỉ việc, điều chuyển giữa hai văn phòng (Đà Nẵng và Hồ Chí Minh), bảo dưỡng định kỳ và thanh lý tài sản.

## KHUÔN SỔ THEO DÕI

Bảng theo dõi gồm các trường thông tin chuẩn hóa:

| Cột | Tên trường | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã tài sản (`Asset Tag`) | Định danh duy nhất theo khuôn: `OBK-TS-[Năm]-[Số]` (TSCĐ) hoặc `OBK-CC-[Năm]-[Số]` (CCDC) |
| 2 | Tên tài sản / CCDC | Tên thiết bị, nhãn hiệu, cấu hình kỹ thuật |
| 3 | Số Serial / IMEI | Số định danh phần cứng do nhà sản xuất phát hành |
| 4 | Ngày bắt đầu sử dụng | Ngày bàn giao đưa vào khai thác sử dụng |
| 5 | Nguyên giá mua vào | Giá trị thanh toán ghi trên hóa đơn tài chính (đồng) |
| 6 | Thời gian phân bổ / Khấu hao | Số tháng phân bổ chi phí (CCDC: tối đa 36 tháng; TSCĐ: theo khung quy định) |
| 7 | Người sử dụng hiện tại | Họ tên và địa chỉ thư điện tử công vụ của nhân sự giữ tài sản |
| 8 | Địa điểm văn phòng | Văn phòng Đà Nẵng hoặc Văn phòng Hồ Chí Minh |
| 9 | Tình trạng hoạt động | Hoạt động bình thường, Chờ sửa chữa, Đang bảo dưỡng, hoặc Chờ thanh lý |
| 10 | Kỳ kiểm kê gần nhất | Ngày thực hiện kiểm kê đối chiếu thực tế (định kỳ trước 31/12 hằng năm) |

## CÁC BƯỚC CẬP NHẬT SỔ

```
[ ]  1. TIẾP NHẬN TÀI SẢN MỚI
        - Kiểm tra hóa đơn mua sắm, phiếu bảo hành và thiết bị thực tế.
        - Dán tem nhãn mã tài sản (Asset Tag) lên vị trí cố định trên thiết bị.
        - Nhập dòng dữ liệu mới vào sổ theo dõi trong vòng 24 giờ kể từ khi nhận hàng.

[ ]  2. BÀN GIAO CẤP PHÁT CHO NHÂN VIÊN
        - Lập Phiếu bàn giao tiếp nhận nhân sự ([[BG-01_Ban_giao_tiep_nhan_nhan_su|BG-01]]).
        - Cập nhật tên người sử dụng và ngày giao máy vào sổ theo dõi.

[ ]  3. ĐIỀU CHUYỂN HOẶC THU HỒI
        - Khi nhân sự nghỉ việc: đối chiếu thu hồi theo Phiếu [[BG-02_Ban_giao_nghi_viec_offboarding|BG-02]].
        - Kiểm tra tình trạng nguyên vẹn của thiết bị, cập nhật trạng thái "Lưu kho chờ cấp phát".
        - Trường hợp điều chuyển giữa hai văn phòng: lập biên bản vận chuyển và cập nhật cột Địa điểm.

[ ]  4. THEO DÕI BẢO TRÌ VÀ THAY THẾ
        - Ghi nhận lịch bảo dưỡng máy tính, thiết bị mạng định kỳ mỗi 06 tháng.
        - Đề xuất sửa chữa hoặc thay thế linh kiện khi hiệu suất suy giảm.

[ ]  5. THANH LÝ TÀI SẢN HỎNG HOẶC HẾT HẠN
        - Thành lập Hội đồng thanh lý tài sản (gồm COO, KTT, AD-KT).
        - Lập biên bản xác nhận hư hỏng không thể phục hồi hoặc chi phí sửa chữa vượt quá giá trị còn lại.
        - Trình Tổng Giám đốc phê duyệt quyết định thanh lý và xóa sổ theo dõi.
```

## NGUYÊN TẮC HẠCH TOÁN KẾ TOÁN THEO THÔNG TƯ 99/2025/TT-BTC

Toàn bộ tài sản cố định và công cụ dụng cụ trên Sổ TS-01 được hạch toán đồng bộ vào hệ thống sổ kế toán theo Thông tư 99/2025/TT-BTC và nguyên tắc Nguồn dữ liệu tài chính duy nhất quy định tại Điều 2.5 [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]]:
1. **Tài sản cố định hữu hình (tiêu chuẩn nguyên giá từ 30 triệu đồng trở lên và thời gian sử dụng từ 01 năm trở lên):**
   - Mua sắm mới: Nợ TK 211 (Nguyên giá TSCĐ), Nợ TK 1332 (Thuế GTGT đầu vào của TSCĐ) / Có TK 112, Có TK 331.
   - Trích khấu hao định kỳ hằng tháng theo phương pháp đường thẳng: Nợ TK 6424 (Chi phí khấu hao TSCĐ quản lý) hoặc Nợ TK 154 (khấu hao máy móc thiết bị phục vụ dịch vụ) / Có TK 2141 (Hao mòn TSCĐ hữu hình).
   - Thanh lý, nhượng bán: Giảm nguyên giá và hao mòn lũy kế (Nợ TK 2141, Nợ TK 811 / Có TK 211); ghi nhận thu nhập thanh lý (Nợ TK 112 / Có TK 711, Có TK 33311).
2. **Công cụ, dụng cụ (giá trị nhỏ hơn 30 triệu đồng hoặc thời gian sử dụng không quá 01 năm):**
   - Mua nhập kho hoặc đưa vào sử dụng ngay: Nợ TK 153 (hoặc Nợ TK 242 nếu phân bổ nhiều kỳ), Nợ TK 1331 / Có TK 112, Có TK 331.
   - Xuất dùng phân bổ nhiều kỳ (tối đa không quá 36 tháng theo quy định thuế): Nợ TK 242 (Chi phí trả trước) / Có TK 153.
   - Phân bổ định kỳ hằng tháng vào chi phí: Nợ TK 6423 (hoặc Nợ TK 154) / Có TK 242.
3. **Đối chiếu kiểm kê cuối năm:**
   - Biên bản kiểm kê định kỳ trước ngày 31 tháng 12 phải đối khớp 100% giữa hiện vật thực tế, thẻ tài sản và số dư Sổ cái các tài khoản TK 211, TK 214, TK 153, TK 242.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ theo dõi được quản lý tập trung bởi `AD-KT` trên hệ thống lưu trữ nội bộ, sao lưu định kỳ hằng tháng. Bản in đối chiếu kiểm kê cuối năm có chữ ký của Hội đồng kiểm kê được lưu trữ tại hồ sơ kế toán của `KTT`.

## KÝ XÁC NHẬN

| Người quản lý sổ (`AD-KT`) | Kế toán viên kiểm soát (`KTV`) | Kế toán trưởng phê duyệt (`KTT`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Kiểm soát chặt chẽ vòng đời tài sản từ lúc mua sắm đến khi thanh lý, ngăn ngừa thất thoát trang thiết bị làm việc, xác định đúng trách nhiệm cá nhân bảo quản và làm căn cứ trích khấu hao, phân bổ chi phí kế toán hợp pháp.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quản lý tài sản | [[OBK-SOP-NB-08_Quan_ly_tai_san_va_cong_cu_dung_cu\|OBK-SOP-NB-08]] Điều 6 | Cấp phát, thu hồi và kiểm kê tài sản CCDC |
| Định mức phân bổ | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 44 | Nguyên tắc hạch toán khấu hao TSCĐ và phân bổ CCDC |
| Chế độ kế toán | Thông tư 99/2025/TT-BTC | Hướng dẫn kế toán Tài khoản 211, 214, 153, 242 |
| Nguyên tắc tài chính | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 2.5 | Nguyên tắc Nguồn dữ liệu tài chính duy nhất kết nối kế toán |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.1.0.0 | Ban hành bản đầu. |
