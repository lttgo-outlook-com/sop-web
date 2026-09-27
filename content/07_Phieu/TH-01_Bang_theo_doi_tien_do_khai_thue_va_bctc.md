---
title: "PHIẾU TH-01. BẢNG THEO DÕI TIẾN ĐỘ KHAI THUẾ VÀ BÁO CÁO TÀI CHÍNH"
code: "TH-01"
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
  - TH-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU TH-01. BẢNG THEO DÕI TIẾN ĐỘ KHAI THUẾ VÀ BÁO CÁO TÀI CHÍNH

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | TH-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | TH-01 |
| **Màu** | VÀNG, bảng theo dõi lịch tuân thủ và tiến độ nộp |
| **Ai dùng** | Kế toán viên phụ trách (`KTV`), Trưởng nhóm Kế toán (`TL-KT`), Kế toán trưởng (`KTT`) |
| **Sinh từ** | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]];<br>[[13_Lich_tuan_thu_va_quy_trinh_khai_nop\|OBK-HB-13]];<br>[[PL_A_Bang_kiem\|OBK-HB-PL-A]] |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi được áp dụng để kiểm soát toàn bộ lịch tuân thủ nghĩa vụ thuế định kỳ hằng tháng, hằng quý và quyết toán năm cho 100% doanh nghiệp khách hàng đang sử dụng dịch vụ kế toán thuế tại oBacker.

## KHUÔN BẢNG THEO DÕI TIẾN ĐỘ KHAI THUẾ VÀ BÁO CÁO TÀI CHÍNH

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã khách hàng (`Client ID`) | Mã định danh khách hàng trên hệ thống oBacker |
| 2 | Tên công ty | Tên đầy đủ trên Giấy chứng nhận đăng ký doanh nghiệp |
| 3 | Mã số thuế | Mã số thuế doanh nghiệp 10 chữ số |
| 4 | Kỳ khai thuế | Khai theo Quý hoặc Khai theo Tháng (xác định theo doanh thu năm trước liền kề) |
| 5 | Tờ khai thuế GTGT | Mẫu 01/GTGT: Ghi rõ ngày hoàn thành lập, ngày soát và ngày gửi |
| 6 | Tờ khai thuế TNCN | Mẫu 05/KK-TNCN: Ghi rõ ngày hoàn thành lập, ngày soát và ngày gửi |
| 7 | Tạm tính thuế TNDN quý | Số tiền tạm tính phải nộp, ngày thông báo cho khách hàng và ngày khách hàng nộp tiền vào ngân sách nhà nước (mốc 30/04, 31/07, 31/10 và 31/01 năm sau) |
| 8 | Báo cáo sử dụng hóa đơn | Mẫu BC26/HĐĐT (ghi nhận đối với khách hàng thuộc đối tượng phải nộp báo cáo theo quy định) |
| 9 | BCTC và Quyết toán năm | Bộ Báo cáo tài chính, Tờ khai quyết toán thuế TNDN (03/TNDN), Quyết toán thuế TNCN (05/QTT-TNCN), hạn ngày thứ 90 sau khi kết thúc năm tài chính |
| 10 | Thông báo tiếp nhận (01-1/TB-TĐT) | Ngày và giờ nhận thông báo tiếp nhận hồ sơ khai thuế điện tử từ cơ quan thuế (trong vòng 15 phút sau khi nộp) |
| 11 | Thông báo chấp nhận (01-2/TB-TĐT) | Trạng thái Chấp nhận hoặc Không chấp nhận từ cơ quan thuế (trong vòng 01 ngày làm việc sau khi tiếp nhận) |
| 12 | Kế toán viên phụ trách (`KTV`) | Họ tên chuyên viên trực tiếp lập hồ sơ khai thuế |
| 13 | Người soát (`TL-KT`) | Trưởng nhóm Kế toán chịu trách nhiệm kiểm tra tính hợp lệ và phê duyệt |
| 14 | Trạng thái tổng thể | Chưa đủ chứng từ, Đang lập tờ khai, Chờ duyệt ký, Đã nộp chờ phản hồi, Đã chấp nhận hoàn tất |

## QUY TRÌNH KIỂM SOÁT KỲ KHAI THUẾ VÀ QUYẾT TOÁN

```
[ ]  1. THU THẬP VÀ ĐỐI CHIẾU CHỨNG TỪ ĐẦU VÀO
        - KTV rà soát hóa đơn điện tử mua vào, bán ra trên Cổng thông tin của cơ quan thuế trước ngày 10 của tháng.
        - Đôn đốc khách hàng gửi sao kê ngân hàng và chứng từ thanh toán không dùng tiền mặt trước ngày 12 của tháng.
        - Khóa bảng kê hóa đơn mua vào, bán ra và đối chiếu số dư sổ cái kế toán.

[ ]  2. LẬP TỜ KHAI VÀ TÍNH NGHĨA VỤ THUẾ
        - Đối với kỳ khai THÁNG: hoàn thành lập tờ khai GTGT, TNCN trước ngày 18 của tháng tiếp theo.
        - Đối với kỳ khai QUÝ: hoàn thành lập tờ khai GTGT, TNCN và tạm tính thuế TNDN trước ngày 23 của tháng đầu quý tiếp theo.
        - Đối với kỳ BCTC NĂM: hoàn thành dự thảo Báo cáo tài chính và hồ sơ quyết toán trước ngày 15 của tháng thứ 03 sau khi kết thúc năm tài chính.
        - Xuất tệp dữ liệu định dạng XML và bảng giải trình nghĩa vụ thuế gửi TL-KT soát xét.

[ ]  3. SOÁT XÉT VÀ PHÊ DUYỆT TỜ KHAI
        - TL-KT thực hiện kiểm tra tính hợp lệ của số liệu theo Bảng kiểm PL_A trong thời hạn 24 giờ.
        - Kiểm tra đối chiếu số thuế GTGT đầu vào được khấu trừ, doanh thu chịu thuế và số thuế TNCN đã khấu trừ.
        - Kiểm tra mức tạm nộp 04 quý của thuế TNDN bảo đảm không thấp hơn 80% số thuế TNDN phải nộp theo quyết toán năm.
        - Phê duyệt tờ khai và chuyển KTV chuẩn bị chữ ký số để ký điện tử.

[ ]  4. NỘP TỜ KHAI VÀ THEO DÕI THÔNG BÁO CỦA CƠ QUAN THUẾ
        - KTV thực hiện ký điện tử và gửi hồ sơ khai thuế lên Cổng thông tin của Tổng cục Thuế trước ngày hết hạn ít nhất 02 ngày làm việc.
        - Kiểm tra Thông báo tiếp nhận hồ sơ khai thuế điện tử (Mẫu 01-1/TB-TĐT) trong vòng 15 phút sau khi nộp, ghi nhận vào cột 10.
        - Kiểm tra Thông báo chấp nhận hồ sơ khai thuế điện tử (Mẫu 01-2/TB-TĐT) trong vòng 01 ngày làm việc, ghi nhận vào cột 11.
        - Nếu cơ quan thuế ra thông báo KHÔNG CHẤP NHẬN: KTV cùng TL-KT tìm rõ nguyên nhân, sửa đổi và nộp lại trong vòng 24 giờ.

[ ]  5. THEO DÕI NỘP TIỀN THUẾ VÀ LƯU TRỮ HỒ SƠ
        - Gửi Giấy nộp tiền vào ngân sách nhà nước cho khách hàng kèm văn bản thông báo số tiền thuế phải nộp.
        - Đôn đốc khách hàng hoàn thành nộp tiền thuế chậm nhất vào ngày cuối cùng của thời hạn nộp tờ khai.
        - Tải Giấy xác nhận nộp tiền thuế vào ngân sách nhà nước, cập nhật trạng thái "Đã chấp nhận hoàn tất" vào bảng theo dõi.
        - Lưu trữ hồ sơ điện tử gồm: Tờ khai XML, Thông báo 01-1, Thông báo 01-2 và Giấy nộp tiền vào thư mục khách hàng.
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Bảng theo dõi được cập nhật liên tục bởi các `KTV` và tổng hợp bởi `TL-KT`. Vào ngày 18 và ngày 25 hằng tháng, `TL-KT` xuất báo cáo tiến độ nộp tờ khai gửi `KTT` và `COO` để kiểm soát các trường hợp có nguy cơ chậm nộp. Hồ sơ khai thuế hoàn tất được sao lưu vào kho lưu trữ số của doanh nghiệp khách hàng.

## KÝ XÁC NHẬN

| Kế toán viên phụ trách (`KTV`) | Trưởng nhóm Kế toán (`TL-KT`) | Kế toán trưởng (`KTT`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Loại trừ triệt để nguy cơ trễ hạn nộp tờ khai và trễ hạn nộp tiền thuế của khách hàng, phòng ngừa tiền chậm nộp 0,03%/ngày và các mức xử phạt vi phạm hành chính về thuế từ 2.000.000 đồng đến 25.000.000 đồng theo quy định của pháp luật quản lý thuế.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quy trình kế toán | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] | Chuẩn hóa quy trình cung ứng dịch vụ kế toán và khai thuế |
| Lịch tuân thủ | [[13_Lich_tuan_thu_va_quy_trinh_khai_nop\|OBK-HB-13]] | Toàn văn thời hạn nộp tờ khai, nộp tiền và đếm số ngày chậm nộp |
| Bảng kiểm soát | [[PL_A_Bang_kiem\|OBK-HB-PL-A]] | Bảng kiểm soát kỹ thuật đối với từng sắc thuế GTGT, TNCN, TNDN |

## Căn cứ pháp luật

| # | Văn bản | Điều khoản | Nội dung áp dụng |
| --- | --- | --- | --- |
| 1 | Luật Quản lý thuế số 108/2025/QH15 | Điều 12, Điều 14, Điều 16 | Hồ sơ khai thuế, thời hạn nộp tiền thuế và quy định về tiền chậm nộp |
| 2 | Nghị định số 252/2026/NĐ-CP | Điều 10 | Thời hạn nộp hồ sơ khai thuế theo tháng (ngày 20 tháng tiếp theo), theo quý (ngày cuối cùng tháng đầu quý tiếp theo), và quyết toán năm (ngày thứ 90 sau kết thúc năm tài chính) |
| 3 | Nghị định số 252/2026/NĐ-CP | Điều 24 khoản 2 | Thời hạn tạm nộp thuế TNDN theo quý: ngày 30/04, 31/07, 31/10 và 31/01 năm sau; tổng 04 quý đạt tối thiểu 80% |
| 4 | Nghị định số 252/2026/NĐ-CP | Điều 3 khoản 7 | Quy tắc lùi mốc thời hạn sang ngày làm việc liền kề khi ngày cuối cùng trùng ngày nghỉ theo quy định |
| 5 | Thông tư số 89/2026/TT-BTC | Điều 11, Điều 19, Điều 21, Điều 22 | Thủ tục giao dịch thuế điện tử, biểu mẫu tờ khai GTGT, TNDN và TNCN |
| 6 | Nghị định số 125/2020/NĐ-CP | Điều 13, Điều 14 | Khung xử phạt vi phạm hành chính về hành vi chậm nộp hồ sơ khai thuế |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
