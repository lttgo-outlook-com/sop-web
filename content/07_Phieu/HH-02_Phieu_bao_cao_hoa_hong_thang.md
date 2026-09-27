---
title: "PHIẾU HH-02. BÁO CÁO HOA HỒNG THÁNG"
code: "HH-02"
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
  - HH-02
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU HH-02. BÁO CÁO HOA HỒNG THÁNG

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | HH-02 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | HH-02 |
| **Màu** | XANH, phiếu theo lịch |
| **Ai dùng** | `PM` lập và gửi. Số liệu lấy từ đầu ra của `NB-49` |
| **Sinh từ** | [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] Job PM-07, PM-08 và KS-PM-08 |
| **Ngày làm phiếu** | 24/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Mỗi tháng, một phiếu cho mỗi đối tác có khách hàng hợp lệ phát sinh doanh thu thực thu trong tháng trước.

| Việc | Hạn |
| --- | --- |
| Gửi báo cáo cho đối tác | Từ ngày 05 đến ngày 10 của tháng liền sau tháng phát sinh doanh thu, theo Điều 6.1.1 bản mẫu |
| Đối tác phản hồi hoặc yêu cầu làm rõ | 07 ngày làm việc kể từ ngày đối tác nhận báo cáo, tính lại từ ngày oBacker cung cấp thông tin làm rõ |

## CÁC BƯỚC

```
Đối tác: ................................   Số hợp đồng: ....................
Kỳ: tháng ...... năm ..........

[ ]  1. Nhận bảng doanh thu tính hoa hồng theo khách của kỳ từ NB-49,
        đối chiếu số tiền thực thu tại Sổ DT-02 và Sổ CN-01.
        Chạy hệ thống tính toán tự động chỉ số kinh tế đơn vị và hoa hồng
        kết nối bảng chỉ số UE-01 để xuất bảng dữ liệu hoa hồng.
        Ngày nhận và chạy tính toán: ....................

[ ]  2. Đối chiếu từng khách với sổ đăng ký giới thiệu.
        Khách còn trong thời gian hưởng hoa hồng [ ]
        Dịch vụ thuộc danh sách dịch vụ của hợp đồng dịch vụ đầu tiên,
        hoặc là phần gia hạn của chính dịch vụ đó [ ]
        Dòng ngoài danh sách dịch vụ: trả lại NB-49, ghi số dòng ..........

[ ]  3. Kiểm điều khoản đồng ý của từng khách trong hợp đồng dịch vụ.
        Số khách đã có điều khoản đồng ý: ..........
        Số khách chưa có điều khoản đồng ý: ..........
        Khách chưa có điều khoản đồng ý: dòng của khách đó chỉ ghi mã đăng ký
        và số hoa hồng tương ứng (Điều 6.1.2), cho tới khi khách đồng ý.

[ ]  4. Lập báo cáo theo bảng tại mục BÁO CÁO GỬI ĐỐI TÁC.

[ ]  5. Gửi báo cáo cho đối tác bằng thư điện tử, từ ngày 05 đến ngày 10.
        Thời điểm gửi: ...... giờ ...... ngày ....................

[ ]  6. Ghi hạn phản hồi của đối tác.
        Ngày đối tác nhận báo cáo: ....................
        Hạn phản hồi, 07 ngày làm việc: ....................

[ ]  7. Chuyển sang PM-08 khi đối tác phản hồi, hoặc khi hết hạn phản hồi.
        Kích hoạt thủ tục Đề nghị thanh toán theo MT-01 (điểm kích hoạt TG-13)
        và OBK-SOP-NB-01 để KTV lập ủy nhiệm chi chuyển khoản trước ngày 10.
```

## BÁO CÁO GỬI ĐỐI TÁC

Các trường theo Điều 6.1.2 bản mẫu: danh sách Khách Hàng Hợp Lệ, số hóa đơn, số tiền thực thu, ngày thu, số hoa hồng tương ứng, và kỳ báo cáo. Doanh thu tính hoa hồng lấy từ `NB-49`, đối khớp số thực thu tại Sổ [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo|DT-02]] và Sổ [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no|CN-01]], chỉ dùng để tính số hoa hồng và không ghi vào báo cáo gửi đối tác, theo Điều 4.2, Điều 4.3 bản mẫu và [[PL_PM_Dieu_kien_thuong_mai_chuan|OBK-SOP-PM-PL1]] dòng 16, 17. Số hoa hồng bằng 10% doanh thu tính hoa hồng, làm tròn đến hàng đơn vị đồng theo Điều 4.6, tính toán tự động qua hệ thống tính toán tự động kết nối Bảng [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission|UE-01]]. Với đối tác là doanh nghiệp, số hoa hồng chưa gồm thuế giá trị gia tăng của đối tác, theo Điều 4.1 bản doanh nghiệp. Với đối tác là cá nhân, số hoa hồng là số trước khi khấu trừ thuế thu nhập cá nhân (khấu trừ 10% tại nguồn theo Nghị định 253/2026/NĐ-CP Điều 50 khoản 2 và [[CC-KT-19 Khấu trừ 10% thuế TNCN với cá nhân không ký HĐLĐ hoặc HĐLĐ dưới 03 tháng, từ 05 triệu đồng-lần|CC-KT-19]] nếu từ 05 triệu đồng trở lên cho một lần chi trả). Hạch toán kế toán theo Thông tư 99/2025/TT-BTC và [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] Điều 3a: Nợ TK 641 (toàn bộ tiền hoa hồng) / Có TK 3335 (thuế TNCN khấu trừ 10%), Có TK 112 (90% tiền chi trả thực tế).

Kỳ báo cáo: tháng ...... năm ..........

| Số thứ tự | Khách hàng hợp lệ | Mã đăng ký | Số hóa đơn | Ngày thu | Số tiền thực thu | Số hoa hồng |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ............ | ............ | ............ | ............ | ............ | ............ |
| Tổng | - | - | - | - | ............ | ............ |

> [!note] GHI CHÚ VỀ THÔNG TIN KHÁCH HÀNG
> Báo cáo ghi đủ số hóa đơn, số tiền thực thu và ngày thu chỉ cho khách đã đồng ý cho oBacker gửi thông tin giao dịch cho bên đã giới thiệu, theo điều khoản đồng ý trong hợp đồng dịch vụ ký với khách. Với khách chưa đồng ý, dòng của khách đó chỉ ghi mã đăng ký và số hoa hồng tương ứng, theo Điều 6.1.2 bản mẫu, cho tới khi khách đồng ý. Thông tin trong báo cáo là Thông Tin Bảo Mật của oBacker, theo Điều 13.2 bản mẫu. Quy tắc tại [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang|OBK-SOP-PM]] KS-PM-08.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

**Đối tác phản hồi hoặc yêu cầu làm rõ:** Job PM-08 cung cấp thông tin làm rõ; hạn 07 ngày làm việc tính lại từ ngày oBacker cung cấp thông tin làm rõ.

**Hết hạn phản hồi mà đối tác chưa phản hồi:** báo cáo được xác định là chính xác và được chấp thuận, trừ trường hợp có sai sót số liệu rõ ràng hoặc gian lận. Job PM-08 ghi ngày chấp thuận.

**Đối tác yêu cầu xác nhận số liệu một dòng:** Job PM-08 gửi văn bản xác nhận số liệu của dòng đó, theo Điều 6.1.3 bản mẫu. Hạn 07 ngày làm việc tính lại như một yêu cầu làm rõ.

**Báo cáo đã chấp thuận:** Job PM-08 chuyển báo cáo cùng hóa đơn hoặc chứng từ của đối tác sang `NB-03` hoặc `NB-07`. Việc chi trong 05 ngày làm việc theo Điều 6.3 bản mẫu: bản doanh nghiệp tính từ ngày muộn hơn giữa ngày báo cáo được chấp thuận và ngày oBacker nhận hóa đơn hợp lệ; bản cá nhân tính từ ngày báo cáo được chấp thuận, và tính từ ngày muộn hơn khi đối tác phải lập hóa đơn theo Điều 6.5.4.

## KÝ XÁC NHẬN

| | |
| --- | --- |
| Đối tác | ............................. |
| Kỳ báo cáo | ............................. |
| Người lập và gửi (`PM`) | ............................. |
| Thời điểm gửi | ............................. |
| Ngày báo cáo được chấp thuận | ............................. |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Báo cáo hoa hồng đã chấp thuận là một trong bốn điều kiện chi hoa hồng tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 23a.3. Hết thời hạn phản hồi thì báo cáo xem như đã chấp thuận, nên số liệu gửi đi phải đúng từ lần gửi đầu. Báo cáo chứa thông tin giao dịch của khách, nên chỉ gửi thông tin của khách đã đồng ý.

### 2. Căn cứ quy định và pháp luật liên quan

| Việc số | Nguồn | Nội dung |
| --- | --- | --- |
| 1 | [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] mục 2.2;<br>[[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]] mục 6.8 | Bảng doanh thu tính hoa hồng từ `NB-49` |
| 2 | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 13, 16, 17 | Thời gian hưởng hoa hồng;<br>cơ sở doanh thu;<br>phạm vi dịch vụ |
| 3 | [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] KS-PM-08 | Thông tin giao dịch đầy đủ chỉ gửi cho khách đã đồng ý;<br>khách chưa đồng ý chỉ ghi mã đăng ký và số hoa hồng tương ứng, theo Điều 6.1.2 bản mẫu |
| 4 và 5 | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 14, 15, 18 | Tỷ lệ, thuế và làm tròn;<br>nội dung và hạn gửi báo cáo |
| 6 và 7 | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 19, 20 | Hạn phản hồi 07 ngày làm việc;<br>hạn chi 05 ngày làm việc |
| 8 | [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]];<br>hệ thống tính toán tự động | Bảng theo dõi và tính toán chỉ số kinh tế đơn vị, CAC, LTV và đối soát hoa hồng hai chiều |
| 9 | [[MT-01_Ma_tran_lien_ket_luong_nghiep_vu_cheo_va_kich_hoat_tu_dong\|MT-01]] điểm TG-13 | Kích hoạt tự động thủ tục Đề nghị thanh toán chi trả hoa hồng đối tác trước ngày 10 |

## Con số của phiếu này lấy ở đâu

Phiếu này không tự đặt con số nào. Tỷ lệ 10%, mốc từ ngày 05 đến ngày 10, mốc 07 ngày làm việc và mốc 05 ngày làm việc lấy từ Điều 4.1, Điều 6.1.1, Điều 6.1.2 và Điều 6.3 bản mẫu, ghi tại [[PL_PM_Dieu_kien_thuong_mai_chuan|OBK-SOP-PM-PL1]] dòng 14, 18, 19 và 20. Các mốc trên là mốc theo hợp đồng giới thiệu khách hàng, không phải mốc theo pháp luật.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
