---
title: "PHIẾU HH-02. BÁO CÁO HOA HỒNG THÁNG"
code: "HH-02"
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
| Phiên bản | R.1.1.0, đang áp dụng |
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
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

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

Các trường theo Điều 6.1.2 bản mẫu: danh sách Khách Hàng Hợp Lệ, số hóa đơn, số tiền thực thu, ngày thu, số hoa hồng tương ứng, và kỳ báo cáo. Doanh thu tính hoa hồng lấy từ `NB-49`, đối khớp số thực thu tại Sổ DT-02 và Sổ CN-01, chỉ dùng để tính số hoa hồng và không ghi vào báo cáo gửi đối tác, theo Điều 4.2, Điều 4.3 bản mẫu và OBK-SOP-PM-PL1 dòng 16, 17. Số hoa hồng bằng 10% doanh thu tính hoa hồng, làm tròn đến hàng đơn vị đồng theo Điều 4.6, tính toán tự động qua hệ thống tính toán tự động kết nối Bảng UE-01. Với đối tác là doanh nghiệp, số hoa hồng chưa gồm thuế giá trị gia tăng của đối tác, theo Điều 4.1 bản doanh nghiệp. Với đối tác là cá nhân, số hoa hồng là số trước khi khấu trừ thuế thu nhập cá nhân (oBacker khấu trừ 10% tại nguồn nếu mức chi trả từ 05 triệu đồng/lần trở lên và cá nhân không ký hợp đồng lao động hoặc ký hợp đồng lao động dưới 03 tháng). Hạch toán kế toán theo OBK-QCTC-03 điều 3a: Nợ TK 641 (toàn bộ tiền hoa hồng) / Có TK 3335 (thuế TNCN khấu trừ 10%), Có TK 112 (90% tiền chi trả thực tế).

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

Báo cáo hoa hồng đã chấp thuận là một trong bốn điều kiện chi hoa hồng tại OBK-QCTC-01 mục 23a.3. Hết thời hạn phản hồi thì báo cáo xem như đã chấp thuận, nên số liệu gửi đi phải đúng từ lần gửi đầu. Báo cáo chứa thông tin giao dịch của khách, nên chỉ gửi thông tin của khách đã đồng ý.


## Con số của phiếu này lấy ở đâu

Phiếu này không tự đặt con số nào. Tỷ lệ 10%, mốc từ ngày 05 đến ngày 10, mốc 07 ngày làm việc và mốc 05 ngày làm việc lấy từ Điều 4.1, Điều 6.1.1, Điều 6.1.2 và Điều 6.3 bản mẫu, ghi tại OBK-SOP-PM-PL1 dòng 14, 18, 19 và 20. Các mốc trên là mốc theo hợp đồng giới thiệu khách hàng, không phải mốc theo pháp luật.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu HH-02 về Sổ cái OBK-MSR |
