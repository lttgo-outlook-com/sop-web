---
title: "BẢNG HD-02. SỔ THEO DÕI HÓA ĐƠN ĐIỆN TỬ ĐẦU RA VÀ ĐẦU VÀO"
code: "HD-02"
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
  - HD-02
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# BẢNG HD-02. SỔ THEO DÕI HÓA ĐƠN ĐIỆN TỬ ĐẦU RA VÀ ĐẦU VÀO

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | HD-02 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | HD-02 |
| **Màu** | CAM, theo dõi hóa đơn và thuế giá trị gia tăng |
| **Ai dùng** | Kế toán viên thuế (`KTV`), Kế toán trưởng (`KTT`), Trưởng bộ phận Kế toán (`TL-KT`), Giám đốc điều hành cấp cao (`CEO`) |
|| **Sinh từ** | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]];<br>[[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]];<br>[[04_Quan_ly_chung_tu\|OBK-SOP-04]];<br>Nghị định 254/2026/NĐ-CP; Thông tư 91/2026/TT-BTC |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi được áp dụng bắt buộc cho toàn bộ hóa đơn điện tử phát sinh tại oBacker, bao gồm hai chiều:
1. Hóa đơn điện tử đầu ra do oBacker phát hành cho khách hàng (dịch vụ kế toán, tư vấn quản trị, cấp phát chữ ký số đại lý CyberX, hỗ trợ thủ tục doanh nghiệp).
2. Hóa đơn điện tử đầu vào do các nhà cung cấp phát hành cho oBacker (phí đại lý chữ ký số CyberX, máy chủ điện toán đám mây, thuê văn phòng, phần mềm văn phòng, dịch vụ viễn thông).

Sổ là công cụ kiểm soát tính hợp pháp, hợp lệ, tình trạng gửi dữ liệu đến cơ quan thuế, theo dõi các trường hợp xử lý sai sót (điều chỉnh tăng, điều chỉnh giảm, điều chỉnh giảm giá trị về 0, hoặc thay thế theo Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC), bảo đảm đối khớp số liệu với tờ khai thuế giá trị gia tăng và sổ cái kế toán.

## KHUÔN SỔ THEO DÕI HÓA ĐƠN ĐIỆN TỬ ĐẦU RA VÀ ĐẦU VÀO

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã bản ghi (`HD-REC`) | Mã định danh dòng theo dõi: `HD-OUT-[Năm]-[Số]` (đầu ra) hoặc `HD-IN-[Năm]-[Số]` (đầu vào) |
| 2 | Chiều hóa đơn | Ghi rõ `Đầu ra` hoặc `Đầu vào` |
| 3 | Ký hiệu mẫu số hóa đơn | Ký hiệu 1 chữ số phản ánh loại hóa đơn (ví dụ: `1` đối với Hóa đơn giá trị gia tăng) |
| 4 | Ký hiệu hóa đơn | Ký hiệu 6 ký tự gồm chữ cái, năm phát hành, loại hóa đơn (ví dụ: `C26TAA` đối với hóa đơn có mã năm 2026) |
| 5 | Số hóa đơn | Dãy số tự nhiên gồm 8 chữ số (từ `00000001` đến `99999999`) |
| 6 | Ngày lập hóa đơn | Ngày lập ghi trên hóa đơn điện tử theo định dạng `DD/MM/YYYY` |
| 7 | Ngày ký số | Ngày giờ ký số thành công bằng chữ ký số của bên phát hành |
| 8 | Mã cơ quan thuế cấp | Chuỗi 34 ký tự mã số do hệ thống hóa đơn điện tử của Tổng cục Thuế cấp |
| 9 | Mã số thuế đối tác | Mã số thuế bên mua (nếu hóa đơn đầu ra) hoặc bên bán (nếu hóa đơn đầu vào) |
| 10 | Tên đối tác giao dịch | Tên đầy đủ trên đăng ký doanh nghiệp của bên mua hoặc bên bán |
| 11 | Mã đối tác liên kết | Mã khách hàng theo [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] hoặc mã nhà cung cấp theo [[NC-01_So_theo_doi_nha_cung_cap_va_danh_gia\|NC-01]] |
| 12 | Mã hợp đồng / Đơn hàng | Mã hợp đồng kinh tế hoặc đơn hàng liên kết phát sinh nghiệp vụ |
| 13 | Nội dung hàng hóa, dịch vụ | Tóm tắt dịch vụ kế toán, gói chữ ký số, phí máy chủ hoặc dịch vụ tư vấn |
| 14 | Doanh số chưa thuế | Số tiền chưa bao gồm thuế giá trị gia tăng (đồng Việt Nam) |
| 15 | Thuế suất thuế GTGT | Một trong các mức: `0%`, `5%`, `8%`, `10%`, hoặc `Không chịu thuế` |
| 16 | Tiền thuế GTGT | Số tiền thuế giá trị gia tăng (đồng Việt Nam) |
| 17 | Tổng tiền thanh toán | Tổng số tiền thanh toán gồm thuế (đồng Việt Nam) = Cột 14 + Cột 16 |
| 18 | Phân loại nghiệp vụ hóa đơn | Một trong 5 loại: `Gốc`, `Điều chỉnh tăng`, `Điều chỉnh giảm`, `Điều chỉnh giảm giá trị về 0`, `Thay thế` |
| 19 | Số hóa đơn gốc liên quan | Số hóa đơn gốc bị điều chỉnh hoặc thay thế (nếu thuộc dòng hóa đơn thứ cấp) |
| 20 | Ngày của hóa đơn gốc | Ngày lập của hóa đơn gốc bị điều chỉnh hoặc thay thế |
| 21 | Số văn bản thỏa thuận | Số biên bản thỏa thuận sai sót giữa hai bên trước khi lập hóa đơn điều chỉnh/thay thế |
| 22 | Mã thông báo Mẫu 04/SS-HĐĐT | Mã số tiếp nhận của cơ quan thuế đối với thông báo sai sót gửi qua hệ thống thuế |
| 23 | Nguyên tắc kê khai kỳ thuế | Xác định: `Kỳ gốc` (sai sót kỹ thuật/số liệu) hoặc `Kỳ hiện tại` (thay đổi thương mại sau bán hàng) |
| 24 | Kỳ tính thuế đã kê khai | Kỳ kê khai thuế giá trị gia tăng thực tế (ví dụ: `Tháng 08/2026` hoặc `Quý 3/2026`) |
| 25 | Trạng thái thanh toán | Một trong 3 trạng thái: `Chưa thanh toán`, `Đã thanh toán qua ngân hàng`, `Cấn trừ công nợ` |
| 26 | Trạng thái hạch toán sổ sách | Đã ghi nhận sổ cái tài khoản 511, 3387, 131, 33311 (đầu ra) hoặc 156, 642, 331, 1331 (đầu vào) |
| 27 | Kế toán viên thụ lý (`KTV`) | Họ tên chuyên viên phụ trách lập hoặc tiếp nhận kiểm tra hóa đơn |
| 28 | Kế toán trưởng duyệt (`KTT`) | Họ tên người kiểm soát phê duyệt phát hành hoặc chấp thuận ghi nhận chi phí |

## NGUYÊN TẮC XỬ LÝ HÓA ĐƠN THEO NGHỊ ĐỊNH 254/2026/NĐ-CP VÀ THÔNG TƯ 91/2026/TT-BTC

### 1. Nguyên tắc không hủy hóa đơn điện tử đã phát hành

Theo Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC, hóa đơn điện tử có mã của cơ quan thuế hoặc không có mã đã gửi cho người mua tuyệt đối không áp dụng hình thức hủy bỏ hóa đơn. Khi có sai sót hoặc thỏa thuận chấm dứt dịch vụ:
- Trường hợp có thỏa thuận chấm dứt cung cấp dịch vụ đã thu tiền trước: Người bán phát hành Hóa đơn điều chỉnh giảm toàn bộ giá trị về 0 (ghi rõ: "Điều chỉnh giảm giá trị về 0 do chấm dứt hợp đồng dịch vụ số...").
- Trường hợp sai sót thông tin về tên, địa chỉ người mua nhưng không sai mã số thuế và các nội dung khác: Người bán gửi Thông báo hóa đơn điện tử có sai sót theo Mẫu số 04/SS-HĐĐT đến cơ quan thuế, không phải lập lại hóa đơn.
- Trường hợp sai mã số thuế, sai số tiền, thuế suất hoặc quy cách dịch vụ: Hai bên lập văn bản thỏa thuận ghi rõ sai sót, người bán lựa chọn phát hành Hóa đơn điều chỉnh hoặc Hóa đơn thay thế.

### 2. Hai luồng kê khai bổ sung thuế giá trị gia tăng

Quy tắc phân định kỳ kê khai thuế khi phát hành hóa đơn điều chỉnh hoặc thay thế:
1. **Luồng sai sót kỹ thuật hoặc số liệu:** Nếu hóa đơn gốc có sai sót về số liệu, đơn giá, thuế suất dẫn đến khai sai nghĩa vụ thuế của kỳ trước: Người nộp thuế nộp hồ sơ khai bổ sung cho kỳ tính thuế phát sinh hóa đơn gốc bị sai sót (thời hiệu xử lý trong 05 năm theo Luật Quản lý thuế số 108/2025/QH15 Điều 12 khoản 5).
2. **Luồng điều chỉnh thương mại sau bán hàng:** Nếu hóa đơn điều chỉnh phát sinh do chiết khấu thương mại, giảm giá dịch vụ hoặc hoàn trả tiền dịch vụ theo thỏa thuận phát sinh sau khi dịch vụ đã hoàn thành: Người bán kê khai hóa đơn điều chỉnh vào kỳ tính thuế phát sinh việc điều chỉnh (kỳ hiện tại); người mua kê khai vào kỳ tính thuế nhận được hóa đơn điều chỉnh.

### 3. Kiểm soát hóa đơn đại lý chữ ký số CyberX

Đối với dòng sản phẩm chữ ký số đại lý CyberX:
- Khi bán cho khách hàng: oBacker phát hành hóa đơn giá trị gia tăng đầu ra trực tiếp cho khách hàng theo giá bán quy định tại danh mục dịch vụ.
- Đầu vào: CyberX phát hành hóa đơn giá trị gia tăng đầu vào cho oBacker theo giá đại lý. Kế toán đối chiếu số lượng chứng thư số kích hoạt trên sổ [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx|CK-02]] với số lượng trên hóa đơn đầu vào của CyberX trước khi duyệt thanh toán.

## QUY TRÌNH PHÁT HÀNH VÀ QUẢN LÝ HÓA ĐƠN ĐIỆN TỬ

```
[1. Tiếp nhận đề nghị] -> [2. Lập dự thảo & Rà soát] -> [3. Phê duyệt & Ký số] -> [4. Gửi CQT & Khách] -> [5. Ghi sổ & Kê khai]
```

1. **Tiếp nhận đề nghị xuất hóa đơn:** `AM` hoặc `KTV` lập phiếu đề nghị xuất hóa đơn, kèm theo hợp đồng dịch vụ, biên bản nghiệm thu hoặc chứng từ thu tiền ngân hàng qua tài khoản.
2. **Lập dự thảo và rà soát:** `KTV` nhập thông tin vào hệ thống hóa đơn điện tử, đối khớp mã số thuế, tên pháp nhân trên cơ sở dữ liệu quốc gia về đăng ký doanh nghiệp.
3. **Phê duyệt và ký số:** `KTT` kiểm soát số liệu; `CEO` (hoặc người được ủy quyền hợp pháp) ký số phát hành hóa đơn.
4. **Truyền nhận dữ liệu:** Hệ thống tự động gửi hóa đơn sang cơ quan thuế cấp mã (đối với hóa đơn có mã) và gửi đường dẫn tra cứu hóa đơn điện tử cho khách hàng qua thư điện tử chính thức.
5. **Ghi sổ và lưu trữ:** `KTV` cập nhật đầy đủ thông tin vào Sổ HD-02, lưu trữ tệp XML gốc và bản thể hiện PDF tại thư mục lưu trữ chứng từ kế toán theo quy định tại [[04_Quan_ly_chung_tu|OBK-SOP-04]].

## KÝ XÁC NHẬN

| Kế toán viên thuế (`KTV`) | Kế toán trưởng (`KTT`) | Giám đốc điều hành cấp cao (`CEO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm 100% hóa đơn điện tử đầu ra và đầu vào được quản lý tập trung, minh bạch, có đối soát chéo với dòng tiền ngân hàng và hợp đồng dịch vụ; ngăn chặn triệt để các sai phạm về hóa đơn bất hợp pháp; tuân thủ đúng quy định về xử lý sai sót theo Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC; bảo đảm nghĩa vụ thuế giá trị gia tăng được kê khai đầy đủ, chính xác, không gây nguy cơ bị cơ quan thuế xử phạt vi phạm hành chính cho oBacker và khách hàng.



---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu HD-02 về Sổ cái OBK-MSR |
