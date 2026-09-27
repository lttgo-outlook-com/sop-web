---
title: "PHIẾU BH-01. BẢNG THEO DÕI BIẾN ĐỘNG BẢO HIỂM XÃ HỘI VÀ LAO ĐỘNG KHÁCH HÀNG"
code: "BH-01"
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
  - BH-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU BH-01. BẢNG THEO DÕI BIẾN ĐỘNG BẢO HIỂM XÃ HỘI VÀ LAO ĐỘNG KHÁCH HÀNG

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BH-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 27/09/2026 |
| Người biên soạn | `CEO` soạn bản đầu. Bản sau do `CEO` phân công |
| Người soát | đã soát |
| Người phê duyệt | đã phê duyệt |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | BH-01 |
| **Màu** | VÀNG, bảng theo dõi tuân thủ lao động và bảo hiểm xã hội |
| **Ai dùng** | Chuyên viên Lao động (`CV-LD`), Trưởng bộ phận Lao động (`TL-LD`), Chuyên viên Quản lý khách hàng (`AM`) |
| **Sinh từ** | [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] (Job LD-05 đến LD-16);<br>`OBK-HB-51` Hướng dẫn nghiệp vụ lao động và tiền lương |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi được thiết lập nhằm kiểm soát biến động tăng, giảm lao động, tình hình trích nộp bảo hiểm xã hội bắt buộc hằng tháng và việc nộp báo cáo định kỳ tình hình sử dụng lao động theo quy định của pháp luật cho 100% khách hàng ký hợp đồng dịch vụ lao động tiền lương với oBacker.

## KHUÔN BẢNG THEO DÕI BIẾN ĐỘNG LAO ĐỘNG VÀ BẢO HIỂM XÃ HỘI

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã khách hàng (`Client ID`) | Mã định danh khách hàng trên hệ thống oBacker |
| 2 | Tên doanh nghiệp khách hàng | Tên đầy đủ trên Giấy chứng nhận đăng ký doanh nghiệp |
| 3 | Mã số BHXH doanh nghiệp | Mã đơn vị tham gia bảo hiểm xã hội do cơ quan BHXH cấp |
| 4 | Tổng số lao động hiện có | Tổng số người lao động đang làm việc tại doanh nghiệp |
| 5 | Số lao động tham gia BHXH | Số người lao động thuộc diện đóng BHXH bắt buộc tại kỳ theo dõi |
| 6 | Hạn đối soát bảng lương | Mốc gửi bảng lương và đối soát công hằng tháng (trả lương cuối tháng: nhận công từ ngày 20 đến ngày 25, gửi bảng lương từ ngày 29 đến ngày 30; trả lương đầu tháng sau: nhận công từ ngày 01 đến ngày 03, gửi bảng lương từ ngày 04 đến ngày 05 hoặc từ ngày 09 đến ngày 10) |
| 7 | Tờ khai biến động D02-LT | Tờ khai báo tăng, báo giảm hoặc điều chỉnh mức lương đóng BHXH (nộp trước ngày 25 hằng tháng trên phần mềm kê khai điện tử) |
| 8 | Hạn nộp tiền đóng BHXH | Mốc nộp tiền đóng BHXH bắt buộc hằng tháng (ngày cuối cùng của tháng theo quy định) |
| 9 | Báo cáo 06 tháng đầu năm | Báo cáo tình hình sử dụng lao động 06 tháng đầu năm (nộp trước ngày 05/06 hằng năm trên Cổng dịch vụ công quốc gia) |
| 10 | Báo cáo hằng năm | Báo cáo tình hình sử dụng lao động hằng năm (nộp trước ngày 05/12 hằng năm trên Cổng dịch vụ công quốc gia) |
| 11 | Chuyên viên phụ trách (`CV-LD`) | Họ tên chuyên viên chịu trách nhiệm tính lương và kê khai BHXH |
| 12 | Người soát (`TL-LD`) | Trưởng bộ phận Lao động kiểm tra tính hợp lệ và phê duyệt |
| 13 | Trạng thái tuân thủ | Đang đối soát công, Đã nộp D02-LT, Đã gửi thông báo đóng BHXH, Đã nộp tiền BHXH hoàn tất, Đã nộp báo cáo định kỳ |

## QUY TRÌNH KIỂM SOÁT VÀ ĐỐI SOÁT CHU KỲ THÁNG

```
[ ]  1. THU THẬP BẢNG CHẤM CÔNG VÀ DANH SÁCH BIẾN ĐỘNG
        - CV-LD gửi văn bản nhắc khách hàng chốt bảng chấm công và danh sách biến động nhân sự vào ngày 20 hằng tháng.
        - Tiếp nhận bảng chấm công, hợp đồng lao động mới ký hoặc quyết định chấm dứt hợp đồng lao động trước ngày 25 hằng tháng.
        - Đối chiếu số người lao động thực tế và số người thuộc diện tham gia bảo hiểm xã hội bắt buộc theo quy định.

[ ]  2. LẬP VÀ NỘP TỜ KHAI BIẾN ĐỘNG LAO ĐỘNG MẪU D02-LT
        - Lập hồ sơ báo tăng đối với người lao động mới ký hợp đồng lao động từ 01 tháng trở lên.
        - Lập hồ sơ báo giảm đối với người lao động chấm dứt hợp đồng lao động hoặc nghỉ việc không hưởng lương từ 14 ngày làm việc trở lên trong tháng.
        - TL-LD kiểm tra hồ sơ biến động, xác nhận mức lương đóng BHXH không thấp hơn mức lương tối thiểu vùng.
        - CV-LD nộp Tờ khai D02-LT qua phần mềm bảo hiểm xã hội điện tử trước ngày 25 hằng tháng, ghi nhận ngày nộp vào cột 7.

[ ]  3. ĐỐI SOÁT THÔNG BÁO C12 VÀ GỬI THÔNG BÁO SỐ TIỀN PHẢI ĐÓNG
        - Tải Thông báo kết quả đóng BHXH, BHYT, BHTN (Mẫu C12-TS) do cơ quan BHXH phát hành từ ngày 11 đến ngày 14 của tháng tiếp theo.
        - Đối chiếu số tiền phải đóng trên Mẫu C12-TS với bảng tính lương nội bộ của khách hàng.
        - Lập Thông báo số tiền đóng bảo hiểm xã hội bắt buộc gửi AM để chuyển cho khách hàng vào ngày 15 của tháng.

[ ]  4. THEO DÕI NỘP TIỀN ĐÓNG BẢO HIỂM XÃ HỘI BẮT BUỘC
        - Đôn đốc khách hàng hoàn tất việc chuyển tiền đóng BHXH bắt buộc vào tài khoản thu của cơ quan BHXH chậm nhất vào ngày cuối cùng của tháng.
        - Thu nhận chứng từ nộp tiền đóng BHXH từ khách hàng, đối chiếu số tài khoản thụ hưởng và nội dung nộp tiền theo đúng cú pháp cơ quan BHXH hướng dẫn.
        - Cập nhật ngày nộp tiền thực tế vào cột 8, chuyển trạng thái "Đã nộp tiền BHXH hoàn tất".

[ ]  5. LẬP VÀ NỘP BÁO CÁO ĐỊNH KỲ TÌNH HÌNH SỬ DỤNG LAO ĐỘNG
        - Kỳ 06 tháng đầu năm: tổng hợp số lượng lao động tăng, giảm từ ngày 01/01 đến ngày 31/05, lập báo cáo và nộp qua Cổng dịch vụ công quốc gia trước ngày 05/06 hằng năm.
        - Kỳ hằng năm: tổng hợp số lượng lao động tăng, giảm từ ngày 01/01 đến ngày 30/11, lập báo cáo và nộp qua Cổng dịch vụ công quốc gia trước ngày 05/12 hằng năm.
        - Lưu trữ Giấy xác nhận nộp thành công từ Cổng dịch vụ công, ghi nhận ngày nộp vào cột 9 và cột 10.
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Bảng theo dõi được cập nhật liên tục bởi `CV-LD` và được `TL-LD` kiểm tra định kỳ vào thứ Hai hằng tuần. Báo cáo tình hình đóng BHXH và rủi ro chậm nộp được gửi cho `KTT` và `COO` vào ngày 26 hằng tháng để phối hợp kiểm soát chi phí tiền lương và bảo hiểm cho khách hàng.

## KÝ XÁC NHẬN

| Chuyên viên Lao động (`CV-LD`) | Trưởng bộ phận Lao động (`TL-LD`) | Giám đốc vận hành (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Kiểm soát chặt chẽ nghĩa vụ đóng bảo hiểm xã hội bắt buộc của người sử dụng lao động, phòng ngừa tiền lãi chậm đóng 0,03%/ngày theo Luật Bảo hiểm xã hội, ngăn ngừa mức xử phạt vi phạm hành chính từ 12% đến 15% tổng số tiền phải đóng theo Nghị định số 283/2026/NĐ-CP, đồng thời bảo đảm quyền lợi khám chữa bệnh BHYT và chế độ ốm đau thai sản của người lao động.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quy trình lao động | [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] | Chuẩn hóa nghiệp vụ hồ sơ lao động, tính lương và trích nộp BHXH |
| Hướng dẫn nghiệp vụ | `OBK-HB-51` | Hướng dẫn kỹ thuật lập hồ sơ biến động D02-LT và biểu mẫu báo cáo |
| Chuẩn vận hành dịch vụ | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] | Nguyên tắc kiểm soát mốc thời gian và cam kết dịch vụ nội bộ |

## Căn cứ pháp luật

| # | Văn bản | Điều khoản | Nội dung áp dụng |
| --- | --- | --- | --- |
| 1 | Bộ luật Lao động số 45/2019/QH14 | Điều 12 | Trách nhiệm quản lý lao động và báo cáo tình hình sử dụng lao động của người sử dụng lao động |
| 2 | Nghị định số 145/2020/NĐ-CP | Điều 4 khoản 2 | Thời hạn nộp báo cáo tình hình thay đổi lao động định kỳ: trước ngày 05/06 và trước ngày 05/12 hằng năm |
| 3 | Luật Bảo hiểm xã hội số 41/2024/QH15 | Điều 31, Điều 34, Điều 41 | Đối tượng tham gia BHXH bắt buộc, thời hạn đóng BHXH hằng tháng và tiền lãi chậm đóng |
| 4 | Nghị định số 283/2026/NĐ-CP | Điều 43, Điều 44 | Mức xử phạt vi phạm hành chính đối với hành vi chậm đóng hoặc trốn đóng bảo hiểm xã hội bắt buộc |
| 5 | Quyết định số 595/QĐ-BHXH và Quyết định số 505/QĐ-BHXH | Điều 23, Điều 31 | Quy trình thu BHXH, cấp sổ BHXH và hướng dẫn lập Tờ khai biến động Mẫu D02-LT |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.1.0.0 | Ban hành bản đầu. |
