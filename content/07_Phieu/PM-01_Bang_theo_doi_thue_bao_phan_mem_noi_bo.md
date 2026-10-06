---
title: "PHIẾU PM-01. BẢNG THEO DÕI THUÊ BAO PHẦN MỀM VÀ DỊCH VỤ ĐỊNH KỲ NỘI BỘ"
code: "PM-01"
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
  - PM-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU PM-01. BẢNG THEO DÕI THUÊ BAO PHẦN MỀM VÀ DỊCH VỤ ĐỊNH KỲ NỘI BỘ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | PM-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | PM-01 |
| **Màu** | VÀNG, bảng theo dõi cảnh báo |
| **Ai dùng** | Người phụ trách công nghệ (`TL-CN`), `AD-KT`, `KTV` và `KTT` |
| **Sinh từ** | [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 5.0b;<br>[[OBK-SOP-NB-07_Quan_ly_con_dau_va_chu_ky_so\|OBK-SOP-NB-07]] Điều 4 |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi được áp dụng cho toàn bộ các khoản chi tiêu dịch vụ phần mềm đám mây (SaaS), bản quyền ứng dụng, tên miền, máy chủ lưu trữ, dịch vụ viễn thông và chữ ký số phục vụ nội bộ oBacker có chu kỳ thanh toán lặp lại định kỳ hằng tháng hoặc hằng năm.

## KHUÔN THEO DÕI DỊCH VỤ NỘI BỘ

| Cột | Tên trường | Nội dung ghi nhận |
| --- | --- | --- |
| 1 | Mã dịch vụ (`Service ID`) | Khuôn: `OBK-SUB-[Số thứ tự]` |
| 2 | Tên phần mềm / Dịch vụ | Tên ứng dụng (Google Workspace, hạ tầng máy chủ đám mây, chữ ký số công ty, phần mềm kế toán...) |
| 3 | Nhà cung cấp | Tên đơn vị cung ứng dịch vụ |
| 4 | Mục đích sử dụng | Bộ phận thụ hưởng và công việc phục vụ |
| 5 | Đầu mối kỹ thuật phụ trách | Nhân sự chịu trách nhiệm quản trị tài khoản và theo dõi tính năng |
| 6 | Kỳ hạn thanh toán | Hằng tháng (`Monthly`) hoặc Hằng năm (`Annual`) |
| 7 | Ngày bắt đầu hiệu lực | Ngày kích hoạt dịch vụ |
| 8 | Ngày đến hạn thanh toán tiếp theo | Mốc thời gian phải gia hạn hoặc hệ thống tự động trừ tiền |
| 9 | Mức phí dự kiến mỗi kỳ | Số tiền thanh toán (đồng hoặc ngoại tệ quy đổi) |
| 10 | Phương thức thanh toán | Thẻ tín dụng công ty, trích nợ tự động hoặc chuyển khoản ủy quyền |
| 11 | Trạng thái hiện tại | Đang hoạt động, Chờ xem xét gia hạn, Đang nâng cấp, hoặc Yêu cầu hủy |

## QUY TRÌNH NHẮC NHỞ VÀ RA QUYẾT ĐỊNH

Nhằm tránh việc tự động gia hạn các dịch vụ không còn nhu cầu sử dụng hoặc gián đoạn hoạt động do thanh toán chậm, quy trình nhắc nhở gồm 03 mốc thời gian:

```
[ ]  1. MỐC TRƯỚC 30 NGÀY SO VỚI HẠN TÁI TỤC
        - AD-KT rà soát danh sách các dịch vụ sắp đến hạn trong tháng kế tiếp.
        - Gửi phiếu thông báo đến Đầu mối kỹ thuật phụ trách để rà soát nhu cầu.
        - Nội dung rà soát: Có tiếp tục dùng hay không? Số lượng người dùng thực tế có tăng/giảm?

[ ]  2. MỐC TRƯỚC 15 NGÀY SO VỚI HẠN TÁI TỤC
        - Đầu mối kỹ thuật hoàn thành đánh giá hiệu quả sử dụng.
        - Nếu TIẾP TỤC: lập Đề nghị thanh toán theo quy trình mua sắm [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]].
        - Nếu HỦY BỎ: gửi văn bản hoặc thực hiện thao tác hủy gia hạn tự động trên cổng quản trị của nhà cung cấp;
          sao lưu toàn bộ dữ liệu quan trọng trước khi tài khoản bị khóa.

[ ]  3. MỐC TRƯỚC 07 NGÀY SO VỚI HẠN TÁI TỤC
        - KTV kiểm tra số dư thẻ thanh toán hoặc chứng từ chuyển khoản đã hoàn tất.
        - Xác nhận trạng thái gia hạn thành công từ nhà cung cấp.
        - Cập nhật mốc "Ngày đến hạn thanh toán tiếp theo" cho chu kỳ mới vào sổ theo dõi.
```

## NGUYÊN TẮC HẠCH TOÁN KẾ TOÁN THEO THÔNG TƯ 99/2025/TT-BTC

Toàn bộ chi phí thuê bao phần mềm và dịch vụ công nghệ định kỳ nội bộ được kết nối đồng bộ vào sổ kế toán theo nguyên tắc Nguồn dữ liệu tài chính duy nhất tại OBK-QCTC-01 mục 2.5:
1. **Thuê bao trả trước theo kỳ hạn năm (hoặc từ 02 tháng trở lên):**
   - Khi thanh toán tiền: Ghi nhận vào Chi phí trả trước, hạch toán Nợ TK 242 / Có TK 112 (hoặc Có TK 331).
   - Định kỳ ngày cuối tháng: Phân bổ vào chi phí quản lý doanh nghiệp theo số tháng thực tế sử dụng, hạch toán Nợ TK 642 / Có TK 242. Trường hợp phần mềm sử dụng trực tiếp để xử lý tác vụ cho khách hàng, phân bổ vào chi phí dịch vụ Nợ TK 154 / Có TK 242.
2. **Thuê bao thanh toán từng tháng:**
   - Hạch toán trực tiếp vào chi phí hoạt động trong kỳ: Nợ TK 642 (hoặc Nợ TK 154), Nợ TK 1331 (nếu có hóa đơn GTGT đủ điều kiện khấu trừ) / Có TK 112 (trích nợ tự động hoặc thanh toán thẻ ngân hàng).
3. **Đối chiếu số liệu:**
   - Định kỳ ngày 25 hằng tháng, `AD-KT` và `KTV` đối soát chi phí thực tế trên Sổ PM-01 với phát sinh Nợ TK 242, Nợ TK 642 và số liệu chi dòng II.3 trên Bảng TC-01.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Bảng theo dõi được cập nhật trên hệ thống dữ liệu dùng chung của bộ phận Kế toán và Công nghệ. Báo cáo tổng hợp chi phí thuê bao phần mềm được gửi cho `KTT` và `COO` vào ngày 25 hằng tháng để đối soát ngân sách.

## KÝ XÁC NHẬN

| Đầu mối kỹ thuật (`TL-CN`) | Người theo dõi (`AD-KT`) | Kế toán trưởng (`KTT`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Tránh lãng phí chi phí thuê bao hàng tháng/hàng năm cho các phần mềm không còn sử dụng nhưng vẫn bị trừ tiền tự động; đồng thời ngăn ngừa rủi ro gián đoạn hệ thống làm việc do quên gia hạn máy chủ hoặc chữ ký số nội bộ.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu PM-01 về Sổ cái OBK-MSR |
