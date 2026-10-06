---
title: "SỔ OBK-MSR. QUẢN TRỊ DỊCH VỤ"
code: "OBK-MSR"
type: "sop"
folder: "07_Phieu"
level: "Sổ cái"
version: "R.2.0.0"
status: "đang áp dụng"
draft_date: "04/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - OBK-MSR
tags:
  - loai/sop
  - cap/so-cai
---
# SỔ OBK-MSR. QUẢN TRỊ DỊCH VỤ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-MSR |
| Cấp tài liệu | Sổ cái |
| Phiên bản | R.2.0.0, đang áp dụng |
| Ngày biên soạn | 04/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Vị trí** | Nguồn sự thật duy nhất cho trạng thái vận hành của 223 Job (172 Job dịch vụ, 51 Job nội bộ); mọi phiếu trong `07_Phieu` là view và hướng dẫn thao tác trên dữ liệu của Sổ cái Quản trị Dịch vụ |
| **Ai dùng** | Vai trò mở Job, `AM`, chuyên viên, `TL line`, `KTT`, `HR`, `COO`, `CEO` theo vai trò ghi và vai trò đọc của từng trường và từng view |

## VỊ TRÍ VÀ TIÊU CHÍ THIẾT KẾ

Sổ cái Quản trị Dịch vụ là nguồn sự thật duy nhất ghi nhận trạng thái vận hành của 223 Job. Một con số trạng thái Job chỉ tồn tại ở một nơi, là sổ cái; các phiếu khác trích xuất, không ghi đè.

Tiêu chí thiết kế là truy vết được dưới hai phút theo NT-4 của OBK-SOP-00: từ một bản ghi, người có thẩm quyền tìm lại được bản gốc đầu vào, bản đầu ra đã gửi và lý do của một quyết định trong dưới hai phút mà không cần hỏi người đã làm.

Năm mươi mốt phiếu trong `07_Phieu` không xóa. Mỗi tệp giữ làm view và hướng dẫn thao tác trên cùng dữ liệu của sổ cái. Sổ mang nghĩa vụ pháp lý (Lương, biến động Bảo hiểm xã hội, giao nhận chứng từ gốc) giữ rõ là view của sổ cái Quản trị Dịch vụ.

## NGUYÊN TẮC GHI

1. **Một sự kiện một bản ghi.** Mỗi sự kiện nghiệp vụ của một Job là một bản ghi duy nhất. Các bước tiếp theo của cùng Job chỉ cập nhật bản ghi đó, không tạo bản ghi mới.
2. **Chuẩn hóa tại lúc ghi nhận, không cuối kỳ.** Dữ liệu được nhập và chuẩn hóa tại thời điểm sự kiện phát sinh trong bước làm việc, không nhập truy lục vào cuối kỳ.
3. **Ba view trích xuất không có bước điền sổ riêng.** View Khách, view Nội bộ và view Pháp lý là các bộ lọc trích xuất trực tiếp từ dữ liệu sổ cái, không có bước ghi sổ riêng cho từng view.

## CẤU TRÚC 28 TRƯỜNG

| STT | Trường | Loại | Vai trò ghi | Nghĩa |
| --- | --- | --- | --- | --- |
| 1 | Mã bản ghi | Cơ bản | Hệ thống tự sinh khi tạo bản ghi | Định dạng: MSL-NNNNNNNN |
| 2 | Ngày sự kiện | Cơ bản | Vai trò mở Job | Ngày sự kiện nghiệp vụ phát sinh, không phải ngày nhập |
| 3 | Mã Job | Cơ bản | Vai trò mở Job | Tra bảng Job |
| 4 | Cụm | Cơ bản | Vai trò mở Job | Tra bảng cụm |
| 5 | Bộ phận | Cơ bản | Vai trò mở Job | AM/KT/LIC/LD/LS/PM/RD/NB |
| 6 | Khách | Cơ bản | Vai trò mở Job | Tên khách; 'oBacker' cho Job nội bộ |
| 7 | Hợp đồng | Cơ bản | AM | Mã hợp đồng dịch vụ |
| 8 | Tier | Cơ bản | Vai trò mở Job theo phân mức đã duyệt | T1/T2/T3 |
| 9 | AM | B1 | AM | Người sở hữu quan hệ |
| 10 | Người thực hiện | B2 | Chuyên viên | Người thực hiện Job |
| 11 | Kết luận khả thi (tự làm/thuê ngoài) | B1 - gate | AM hoặc chuyên viên mở Job | Điều kiện xong bước 1 |
| 12 | Tách Job (Job chính/Job phụ) | B1 - gate | AM | Job qua nhiều bộ phận |
| 13 | Hạn nội bộ T2 | B1 | AM | Mốc cam kết với khách |
| 14 | Hạn cơ quan / pháp định | B1 | Vai trò mở Job | Mốc bên ngoài, nếu có |
| 15 | Ngày bắt đầu thực hiện | B2 | Chuyên viên | |
| 16 | Yêu cầu bổ sung dữ liệu cho khách | B2 | Chuyên viên | Ngày + nội dung; NT-3 |
| 17 | Biên nhận cơ quan | B2 - gate | Chuyên viên | Số biên nhận và ngày, nếu nộp cơ quan |
| 18 | Tự soát: kết quả bảng kiểm | B3 - gate | Chuyên viên (mọi Tier) | Tier 1: bắt buộc; các Tier khác: luôn ghi |
| 19 | Lớp 2: người, ngày, kết quả | B3 - gate | TL line (Tier 2, 3) | Tier 1 không có; Job giữ 2 lớp mọi Tier: luôn có |
| 20 | Hậu kiểm: trong mẫu? kết quả, ngày | B3 | TL line hậu kiểm | Tier 1: theo mẫu; Tier 3: bắt buộc |
| 21 | AM nhận đầu ra | B4 - gate | AM | Trước hạn gửi khách ít nhất 0,5 NLV |
| 22 | Ngày gửi khách | B4 | AM | |
| 23 | Kết quả (khách nhận / cơ quan / mục đã đạt) | B5 - gate | AM hoặc chuyên viên | Điều kiện xong bước 5 |
| 24 | Ngày đóng | B5 | Vai trò mở Job | |
| 25 | Thời gian thực (giờ) | B5 | Chuyên viên | Tổng thời gian thực của Job |
| 26 | Chi phí (VNĐ) | B5 | Chuyên viên hoặc AM | Chi phí trực tiếp của Job |
| 27 | Lỗi đầu ra (mức, mô tả, nguyên nhân) | B5 | Chuyên viên + TL line | CS-05; mốc nâng mức nếu Tier 1 |
| 28 | Đề xuất cập nhật mẫu | B5 | Chuyên viên | Có/không + lý do; đầu vào của việc rà cụm |

Quy ước cột Loại:

- Cơ bản: trường tạo bản ghi khi mở Job.
- **B1** đến **B5**: trường thuộc bước tương ứng trong quy trình năm bước của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]].
- Bn - gate: trường là điều kiện xong bước; thiếu trường gate thì không sang bước tiếp theo (quy tắc ghi số 3).
- Trường ghi "nếu có" là trường không bắt buộc; trường không ghi "nếu có" là trường bắt buộc của bước đó theo vai trò ghi.

## CHÍN QUY TẮC GHI

Bản thực hành giai đoạn pilot bằng bảng tính.

1. **Một sự kiện một bản ghi.** Khi mở Job tại bước 1, tạo một bản ghi duy nhất. Mọi bước sau chỉ cập nhật bản ghi đó, không tạo bản ghi mới và không gộp sự kiện vào sổ khác.
2. **Ai ghi trường nào.** Vai trò thực hiện bước nào thì ghi các trường của bước đó tại thời điểm bước đó (xem cột "Vai trò ghi" tại phần Cấu trúc 28 trường). Không trường nào đòi hỏi nhập hai lần.
3. **Trường gate.** Trường thuộc loại "B1 - gate" đến "B5 - gate" là điều kiện xong bước. Không đủ trường gate thì không sang bước tiếp theo.
4. **Chương trình Tier.** Tier 1 chỉ bắt buộc bảng kiểm tự soát; Tier 2 bắt buộc lớp 2; Tier 3 bắt buộc lớp 2 + hậu kiểm; 27 Job có cờ "giữ 2 lớp mọi Tier" luôn có lớp 2 bắt buộc không phân biệt Tier.
5. **Mâu thuẫn dữ liệu.** Khi hai vai trò ghi nội dung mâu thuẫn nhau, Team Lead của line đó đối chiếu ngay trong ngày phát hiện và ghi bản cuối cùng vào trường ghi chú, không xóa mục ghi ban đầu.
6. **Trách nhiệm.** Team Lead mỗi line chịu trách nhiệm tính chính xác của dữ liệu line mình; trường `AM` do `AM` chịu trách nhiệm; trường cơ quan do chuyên viên chịu trách nhiệm.
7. **Cấm gộp sự kiện vào sổ lẻ.** 51 sổ cũ chỉ còn ghi thêm đến hết chu kỳ hiện hành của từng Job rồi khóa; sau đó một sổ kiểu này chỉ tồn tại ở View Pháp lý.
8. **Báo cáo quản trị.** Các chỉ số M-01 đến M-07 trích xuất trực tiếp từ bảng tính theo bộ lọc, không có bước điền báo cáo riêng.
9. **Chuẩn hóa.** Ghi tại thời điểm làm việc, không ghi bắt buộc cuối kỳ; ngày trong bản ghi là ngày sự kiện thực, không là ngày nhập.

## BA VIEW

| Tên view | Định nghĩa bộ lọc | Vai trò được đọc | Cột hiển thị |
| --- | --- | --- | --- |
| View Khách | Mã Job trong 172 Job dịch vụ; lọc theo `AM` hoặc theo Job | `AM` (mọi Job của khách mình); `CEO`/`COO` | Khách, Hợp đồng, Mã Job, Trạng thái, Tier, Hạn nội bộ T2, Hạn cơ quan, Kết quả, AM |
| View Nội bộ | Toàn bộ 223 Job; bộ lọc theo line, cụm hoặc `AM` | Toàn bộ nhân viên theo vai trò | Toàn bộ 28 trường |
| View Pháp lý | Mã Job thuộc nhóm Lương/Bảo hiểm xã hội/Thuế thu nhập cá nhân (27 Job có cờ) cộng phiếu thu chi `NB-31` | `KTT`, `CEO`, `HR` | Công nhân viên, kỳ, số tiền, ngày nộp, biên nhận, trạng thái; không hiển thị trường thương mại |

Tier của từng Job trong view Nội bộ tra tại cột "Mức Tier" của phụ lục [[PL_2_Bang_tra_SLA|OBK-SOP-PL2]].

## KHỞI ĐỘNG SẠCH

- Sổ cái nhận Job mới từ ngày bắt đầu (04/10/2026). Mọi Job mở từ ngày này có một bản ghi trong sổ cái theo quy tắc ghi số 1.
- 51 sổ cũ, ứng với 51 tệp phiếu trong `07_Phieu`, tiếp tục ghi thêm đến hết chu kỳ hiện hành của từng Job rồi khóa. Sau khi khóa, sổ mang nghĩa vụ pháp lý chỉ còn xuất hiện trong View Pháp lý.
- Không nhập hồi tố. Job mở trước ngày bắt đầu không đưa vào sổ cái; dữ liệu của các Job đó nằm trong sổ cũ đến hết chu kỳ hiện hành.

## NỀN HIỆN HÀNH

Sổ cái chạy trên bảng tính trong giai đoạn pilot, độc lập công cụ, không khóa phần mềm. Ký hiệu `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` dùng thống nhất cho hệ thống quản lý công việc chưa xác định tên.

## CĂN CỨ

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Tiêu chí truy vết dưới hai phút | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-4 | Cơ sở thiết kế cấu trúc bản ghi của sổ cái |
| Bổ sung dữ liệu và phân mức | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-3, NT-5 | Trường yêu cầu bổ sung (mục 16) và chương trình Tier (quy tắc ghi số 4) |
| Phân Tier của 223 Job | [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] cột "Mức Tier" | Tier T1/T2/T3; 27 Job giữ hai lớp mọi Tier |
| Chuẩn phiếu thao tác | `OBK-TTT-05` Cách làm phiếu thao tác | Chuẩn cho 51 tệp phiếu `07_Phieu` giữ làm view của sổ cái |

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Quy tắc ghi số 5: đối chiếu mâu thuẫn dữ liệu có mốc ngay trong ngày phát hiện |
