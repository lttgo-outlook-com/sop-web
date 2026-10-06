---
title: "BẢNG DT-02. SỔ THEO DÕI DOANH THU, THUẾ, TRẢ TRƯỚC VÀ PHÂN BỔ ĐỊNH KỲ"
code: "DT-02"
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
  - DT-02
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# BẢNG DT-02. SỔ THEO DÕI DOANH THU, THUẾ, TRẢ TRƯỚC VÀ PHÂN BỔ ĐỊNH KỲ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | DT-02 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | DT-02 |
| **Màu** | CAM, theo dõi doanh thu và phân bổ kế toán |
| **Ai dùng** | Kế toán viên doanh thu (`KTV`), Kế toán trưởng (`KTT`), Trưởng bộ phận Kế toán (`TL-KT`), Chuyên viên Quản lý khách hàng (`AM`), Giám đốc điều hành cấp cao (`CEO`) |
| **Sinh từ** | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]];<br>[[05_Quy_trinh_ke_toan_thang\|05_Quy_trinh_ke_toan_thang]];<br>[[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no\|CN-01]];<br>`OBK-QCTC-03` Quy chế kế toán nội bộ;<br>Thông tư 99/2025/TT-BTC |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi được áp dụng bắt buộc để quản trị toàn bộ các khoản doanh thu bán hàng và cung cấp dịch vụ tại oBacker, bao gồm:
1. Các hợp đồng dịch vụ kế toán thuế trọn gói thu tiền trả trước định kỳ 03 tháng, 06 tháng hoặc 12 tháng.
2. Các khoản thu phí bản quyền chữ ký số, hóa đơn điện tử trả trước theo gói năm.
3. Các hợp đồng dịch vụ thực hiện theo từng mốc công việc (thành lập doanh nghiệp, xin giấy phép con, rà soát hợp đồng pháp lý).
4. Các khoản thu dịch vụ phát sinh trả sau theo tháng hoặc theo biên bản nghiệm thu từng đợt.

Sổ phản ánh rành mạch giữa doanh thu chưa thực hiện (Tài khoản 3387), doanh thu thực hiện trong kỳ (Tài khoản 511), thuế giá trị gia tăng đầu ra phải nộp (Tài khoản 33311), và số dư công nợ phải thu của khách hàng (Tài khoản 131) theo đúng chuẩn mực kế toán Việt Nam và Thông tư 99/2025/TT-BTC.

## KHUÔN SỔ THEO DÕI DOANH THU, THUẾ VÀ PHÂN BỔ ĐỊNH KỲ

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã hợp đồng / Đơn hàng | Mã định danh hợp đồng hoặc đơn hàng: `HĐ-[Năm]-[Số]` |
| 2 | Mã khách hàng (`Client ID`) | Mã định danh khách hàng theo [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] |
| 3 | Tên doanh nghiệp khách hàng | Tên đầy đủ trên Giấy chứng nhận đăng ký doanh nghiệp của khách hàng |
| 4 | Gói dịch vụ cung cấp | Tên gói dịch vụ: Kế toán trọn gói, Chữ ký số đại lý, Giấy phép, Tư vấn pháp lý |
| 5 | Ngày bắt đầu dịch vụ | Ngày bắt đầu tính thời hạn cung cấp dịch vụ theo hợp đồng |
| 6 | Ngày kết thúc dịch vụ | Ngày kết thúc hiệu lực gói dịch vụ theo hợp đồng |
| 7 | Thời hạn gói (Số tháng) | Tổng số tháng của gói dịch vụ (ví dụ: 03 tháng, 06 tháng, 12 tháng, 24 tháng) |
| 8 | Giá trị hợp đồng chưa thuế | Tổng số tiền dịch vụ chưa bao gồm thuế giá trị gia tăng (đồng Việt Nam) |
| 9 | Tiền thuế GTGT đầu ra (TK 33311) | Tiền thuế giá trị gia tăng đầu ra phải nộp cơ quan thuế (đồng Việt Nam) |
| 10 | Tổng giá trị thanh toán | Tổng số tiền dịch vụ gồm thuế (đồng Việt Nam) = Cột 8 + Cột 9 |
| 11 | Hình thức thanh toán | Một trong các hình thức: `Trả trước 100%`, `Trả trước 50%`, `Trả định kỳ từng tháng`, `Trả sau khi nghiệm thu` |
| 12 | Số tiền khách hàng đã thanh toán | Số tiền thực tế khách hàng đã chuyển khoản qua ngân hàng (đồng Việt Nam) |
| 13 | Số hóa đơn điện tử phát hành | Số hóa đơn đầu ra ghi nhận trên Sổ [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao\|HD-02]] |
| 14 | Ngày phát hành hóa đơn | Ngày lập và ký số hóa đơn điện tử đầu ra |
| 15 | Số dư Doanh thu chưa thực hiện (TK 3387) | Số tiền ban đầu ghi nhận vào bên Có TK 3387 khi thu tiền trả trước (đồng Việt Nam) |
| 16 | Mức phân bổ doanh thu mỗi tháng | Số tiền phân bổ định kỳ vào bên Có TK 511 hằng tháng = Cột 8 / Cột 7 (đồng Việt Nam) |
| 17 | Doanh thu lũy kế đã phân bổ đầu kỳ | Tổng số tiền đã kết chuyển sang TK 511 từ các kỳ kế toán trước (đồng Việt Nam) |
| 18 | Doanh thu phân bổ trong kỳ này | Số tiền kết chuyển Nợ TK 3387 / Có TK 511 của tháng báo cáo hiện tại (đồng Việt Nam) |
| 19 | Doanh thu lũy kế đến cuối kỳ này | Tổng số tiền đã kết chuyển sang TK 511 đến cuối tháng báo cáo = Cột 17 + Cột 18 |
| 20 | Số dư Doanh thu chưa thực hiện còn lại | Số dư bên Có TK 3387 tại thời điểm cuối kỳ báo cáo = Cột 15 - Cột 19 |
| 21 | Công nợ phải thu (TK 131) | Số tiền khách hàng còn nợ chưa thanh toán (đối khớp với [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no\|CN-01]]) |
| 22 | Tình trạng tuổi nợ | Một trong 4 mức: `Trong hạn`, `Quá hạn từ 01 ngày đến 30 ngày`, `Quá hạn từ 31 ngày đến 60 ngày`, `Quá hạn trên 60 ngày` |
| 23 | Trạng thái thực hiện hợp đồng | Một trong 4 trạng thái: `Đang thực hiện`, `Tạm dừng dịch vụ`, `Đã nghiệm thu thanh lý`, `Đến hạn gia hạn` |
| 24 | Kế toán viên doanh thu (`KTV`) | Họ tên chuyên viên phụ trách theo dõi hợp đồng và lập chứng từ phân bổ |
| 25 | Chuyên viên quản lý khách hàng (`AM`) | Họ tên chuyên viên sở hữu quan hệ khách hàng và phụ trách đôn đốc thanh toán |
| 26 | Ghi chú và sự kiện biến động | Ghi nhận các trường hợp điều chỉnh giảm giá trị về 0, chuyển kỳ hoặc chấm dứt trước hạn |

## NGUYÊN TẮC HẠCH TOÁN DOANH THU VÀ PHÂN BỔ THEO THÔNG TƯ 99/2025/TT-BTC

### 1. Phân biệt doanh thu thực hiện (TK 511) và doanh thu chưa thực hiện (TK 3387)

Theo Quy chế hạch toán kế toán nội bộ OBK-QCTC-03 (hạch toán Tài khoản 3387 và Tài khoản 511):
- **Doanh thu chưa thực hiện (TK 3387):** Toàn bộ số tiền thu trước của khách hàng cho dịch vụ cung cấp trong nhiều kỳ kế toán (gói dịch vụ 06 tháng, 12 tháng) tuyệt đối không được ghi nhận toàn bộ một lần vào Doanh thu bán hàng và cung cấp dịch vụ (TK 511). Kế toán ghi nhận toàn bộ giá trị chưa thuế vào bên Có Tài khoản 3387.
  * Bút toán khi thu tiền trước và xuất hóa đơn:
    + Nợ TK 112 (Tiền gửi ngân hàng): Tổng số tiền thanh toán gồm thuế.
    + Có TK 3387 (Doanh thu chưa thực hiện): Giá trị dịch vụ chưa bao gồm thuế GTGT.
    + Có TK 33311 (Thuế GTGT đầu ra phải nộp): Toàn bộ số tiền thuế GTGT ghi trên hóa đơn.
- **Doanh thu bán hàng và cung cấp dịch vụ (TK 511):** Vào ngày cuối cùng của từng tháng (mốc khóa sổ kế toán tháng theo [[05_Quy_trinh_ke_toan_thang|05_Quy_trinh_ke_toan_thang]]), kế toán lập Chứng từ phân bổ doanh thu để kết chuyển phần doanh thu tương ứng với khối lượng công việc đã hoàn thành trong tháng từ TK 3387 sang TK 511.
  * Bút toán phân bổ định kỳ hằng tháng:
    + Nợ TK 3387: Số tiền phân bổ của tháng = (Tổng giá trị chưa thuế) / (Số tháng của gói dịch vụ).
    + Có TK 511: Ghi nhận doanh thu thuần cung cấp dịch vụ của kỳ báo cáo.

### 2. Nguyên tắc ghi nhận thuế giá trị gia tăng đầu ra (TK 33311)

Theo quy định của Luật Quản lý thuế số 108/2025/QH15 và Nghị định 254/2026/NĐ-CP:
- Toàn bộ nghĩa vụ thuế giá trị gia tăng đầu ra phát sinh ngay tại thời điểm thu tiền trước hoặc thời điểm lập hóa đơn điện tử cho khách hàng.
- Tuyệt đối không phân bổ nghĩa vụ thuế giá trị gia tăng theo từng tháng như doanh thu. Nghĩa vụ thuế giá trị gia tăng phải được kê khai toàn bộ vào tờ khai thuế của kỳ phát sinh hóa đơn.

### 3. Nghiệp vụ khách hàng trả sau hoặc thanh toán theo tiến độ (TK 131)

Đối với các dịch vụ thanh toán theo đợt hoặc sau khi nghiệm thu (giấy phép kinh doanh, giải quyết sự cố, tư vấn quản trị theo vụ việc):
- Khi hoàn thành công việc hoặc bàn giao kết quả theo biên bản nghiệm thu:
  * Nợ TK 131: Phải thu của khách hàng (chi tiết theo từng đối tượng khách hàng).
  * Có TK 511: Ghi nhận doanh thu thực hiện trong kỳ.
  * Có TK 33311: Thuế giá trị gia tăng đầu ra tương ứng.
- Khi khách hàng chuyển khoản thanh toán:
  * Nợ TK 112: Tiền gửi ngân hàng.
  * Có TK 131: Giảm trừ công nợ phải thu của khách hàng.
- Toàn bộ số dư nợ TK 131 được đối chiếu định kỳ ngày 25 hằng tháng với Sổ theo dõi công nợ và tuổi nợ CN-01.

### 4. Xử lý khi chấm dứt hợp đồng trước hạn

Trường hợp khách hàng chấm dứt dịch vụ trước hạn khi số dư TK 3387 vẫn còn:
1. Xác định số dư doanh thu chưa thực hiện còn lại tính đến thời điểm chấm dứt hợp đồng.
2. Căn cứ thỏa thuận phạt vi phạm hợp đồng hoặc bồi hoàn:
   - Nếu hoàn trả lại tiền cho khách hàng: Lập hóa đơn điều chỉnh giảm giá trị về 0 hoặc điều chỉnh giảm giá trị tương ứng trên hệ thống hóa đơn điện tử [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao|HD-02]]. Ghi Nợ TK 3387, Nợ TK 33311 (giảm thuế đầu ra tương ứng) / Có TK 112.
   - Nếu số tiền trả trước không hoàn lại theo điều khoản hợp đồng: Kết chuyển toàn bộ số dư TK 3387 còn lại sang Thu nhập khác (TK 711) và hạch toán đúng kỳ phát sinh chấm dứt hợp đồng.

## QUY TRÌNH THEO DÕI VÀ PHÂN BỔ DOANH THU ĐỊNH KỲ

```
[1. Tiếp nhận HĐ & Thu tiền] -> [2. Ghi nhận TK 3387 & Hóa đơn] -> [3. Phân bổ hàng tháng TK 511] -> [4. Đối soát & Báo cáo]
```

1. **Tiếp nhận hợp đồng và thu tiền ban đầu:** `AM` bàn giao hợp đồng cho `KTV`. Kế toán đối chiếu số tiền thực nhận trên sổ phụ ngân hàng [[NH-01_Doi_chieu_ngan_hang|NH-01]].
2. **Ghi nhận ban đầu và phát hành hóa đơn:** `KTV` lập hóa đơn đầu ra trên [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao|HD-02]], hạch toán Nợ TK 112 / Có TK 3387 và Có TK 33311, cập nhật dòng dữ liệu vào Bảng DT-02.
3. **Phân bổ định kỳ ngày cuối tháng:** Vào ngày cuối cùng của từng tháng, `KTV` rà soát danh sách hợp đồng đang hoạt động, lập Bảng kê phân bổ doanh thu, hạch toán Nợ TK 3387 / Có TK 511 cho từng hợp đồng, cập nhật số dư cuối kỳ trên Bảng DT-02.
4. **Đối soát số liệu và lập báo cáo:** `KTT` kiểm tra số dư TK 3387, TK 511 và TK 131 trên Bảng DT-02, đối chiếu với Bảng cân đối số phát sinh tài khoản tháng và Báo cáo tài chính nội bộ TC-01, trình `CEO` phê duyệt trước ngày 05 của tháng tiếp theo.

## KÝ XÁC NHẬN

| Kế toán viên doanh thu (`KTV`) | Kế toán trưởng (`KTT`) | Giám đốc điều hành cấp cao (`CEO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm nguyên tắc phù hợp giữa doanh thu và chi phí trong kế toán; phản ánh trung thực kết quả kinh doanh của từng kỳ kế toán tháng, quý và năm; ngăn chặn việc ghi nhận trước doanh thu khi chưa hoàn thành nghĩa vụ cung cấp dịch vụ; kiểm soát chặt chẽ nghĩa vụ thuế giá trị gia tăng đầu ra và tình hình công nợ phải thu của từng khách hàng theo chuẩn mực kế toán Việt Nam và Thông tư 99/2025/TT-BTC.



---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu DT-02 về Sổ cái OBK-MSR |
