---
title: "BẢNG UE-01. BẢNG THEO DÕI VÀ ĐỐI SOÁT HOA HỒNG HAI CHIỀU (SETTLEMENT COMMISSION)"
code: "UE-01"
type: "sop"
folder: "90_ThuVien"
level: "Phiếu thao tác"
version: "R.3.0.1"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - UE-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# BẢNG UE-01. BẢNG THEO DÕI VÀ ĐỐI SOÁT HOA HỒNG HAI CHIỀU (SETTLEMENT COMMISSION)

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | UE-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.3.0.1, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | UE-01 |
| **Màu** | TÍM, bảng theo dõi kinh tế đơn vị và đối soát hoa hồng hai chiều |
| **Ai dùng** | `KTV`, `KTT`, `AM`, `PM`, `COO`, `CEO` |
| **Sinh từ** | [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]];<br>[[HH-02_Phieu_bao_cao_hoa_hong_thang\|HH-02]];<br>[[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]];<br>[[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]];<br>[[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]];<br>`MT-01` (ma trận kích hoạt, bản lưu trữ tại `_luu_tru/phieu/`);<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 23a;<br>Thông tư 99/2025/TT-BTC |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi và đối soát hoa hồng hai chiều áp dụng cho hai chiều hoa hồng:
   - Chiều A (Outbound): oBacker chi trả hoa hồng cho đối tác giới thiệu khách hàng theo [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang|OBK-SOP-PM]] và hoa hồng thưởng duy trì cho chuyên viên quản lý khách hàng (`AM`).
   - Chiều B (Inbound): oBacker làm đại lý phân phối lại (`Reseller`) phôi thiết bị chữ ký số, hóa đơn điện tử CyberX và nhận hoa hồng đại lý môi giới đầu vào từ ngân hàng, đối tác dịch vụ quốc tế.

Bảng được lập và cập nhật theo các mốc thời gian:
- **Định kỳ tháng:** `KTV` tổng hợp số liệu từ ngày 01 đến ngày 05 hằng tháng, đồng bộ với mốc khóa sổ kế toán tháng và tính doanh thu tại Sổ DT-02.
- **Kỳ thanh toán hoa hồng đối tác:** Chốt số liệu hoa hồng trước ngày 05 hằng tháng, xuất Báo cáo hoa hồng tháng HH-02 gửi đối tác từ ngày 05 đến ngày 10 hằng tháng, kích hoạt lệnh chuyển khoản trước ngày 10 hằng tháng.
- **Kỳ đối soát đại lý đầu vào:** Đối soát công nợ với Vendor CyberX và đối tác ngân hàng trước ngày 15 hằng tháng.

---

## 1. BỘ CHỈ SỐ KINH TẾ ĐƠN VỊ (ĐÃ CẮT 07/10/2026)

Bộ chỉ số kinh tế đơn vị (CAC, ARPU, biên lợi nhuận gộp, Churn Rate, LTV, LTV/CAC, Payback, NRR) đã cắt khỏi phiếu này. Công thức và ngưỡng của từng chỉ số khôi phục từ phiên bản R.2.0.0 của phiếu trên git.

## 2. CƠ CHẾ ĐỐI SOÁT VÀ TÍNH TOÁN HOA HỒNG HAI CHIỀU

```
                      +---------------------------------------+
                      |   CƠ CHẾ ĐỐI SOÁT HOA HỒNG 2 CHIỀU    |
                      +---------------------------------------+
                                          |
         +--------------------------------+--------------------------------+
         |                                                                 |
         v                                                                 v
+-----------------------------------+             +-----------------------------------+
| CHIỀU A: oBacker CHI TRẢ HOA HỒNG |             | CHIỀU B: oBacker LÀM ĐẠI LÝ       |
| (Outbound Commission)             |             | (Inbound Reseller & Commission)   |
+-----------------------------------+             +-----------------------------------+
| 1. Đối tác giới thiệu (PM-07):   |             | 1. Mua sỉ bán lẻ (Reseller):      |
|    10% x Doanh thu thực thu trong |             |    Token USB & HĐĐT CyberX        |
|    12 tháng (từ Sổ DT-02/CN-01)   |             |    Biên lợi nhuận = Bán lẻ - Sỉ   |
| 2. Sinh tự động Báo cáo HH-02    |             |    Khớp hóa đơn Sổ HD-02, CK-02   |
| 3. Kích hoạt MT-01 (TG-13)        |             | 2. Hoa hồng đại lý môi giới:      |
|    Lập Đề nghị thanh toán NB-01   |             |    Mở TK ngân hàng, đối tác ngoại |
|    Chuyển khoản trước ngày 10     |             |    Hạch toán Nợ 1388 / Có 5113    |
| 4. Thưởng AM theo NRR và gia hạn |             |    Đối soát kỳ nhận tiền về 112   |
+-----------------------------------+             +-----------------------------------+
```

### 2.1. Chiều A: oBacker chi trả hoa hồng (Outbound Commission)

#### A.1. Hoa hồng đối tác giới thiệu khách hàng (Referral Partner Commission)
- **Căn cứ pháp lý và nội bộ:** [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang|OBK-SOP-PM]] mục 1.5, Điều 23a [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] và Điều 4 Hợp đồng mẫu giới thiệu khách hàng.
- **Công thức tính toán:**
  $$\text{Tiền hoa hồng đối tác} = 10\% \times \text{Doanh thu thực thu hợp lệ trong 12 tháng}$$
- **Điều kiện và quy tắc đối soát:**
  1. Doanh thu tính hoa hồng là số tiền thực tế khách hàng đã thanh toán vào tài khoản ngân hàng của oBacker, được kế toán đối khớp tại Sổ DT-02 và Sổ CN-01.
  2. Thời hạn tính hoa hồng tối đa 12 tháng kể từ ngày phát sinh khoản thanh toán đầu tiên theo Job `PM-06`.
  3. Dịch vụ tính hoa hồng gồm các dịch vụ trong Hợp đồng dịch vụ đầu tiên và các khoản gia hạn của chính dịch vụ đó; không tính hoa hồng cho các dịch vụ bán thêm khác ngoài hợp đồng đầu tiên.
  4. Đối với đối tác cá nhân: Khấu trừ thuế thu nhập cá nhân 10% tại nguồn theo Nghị định 253/2026/NĐ-CP Điều 50 khoản 2 đối với mỗi lần chi trả từ 05 triệu đồng trở lên (trừ trường hợp cá nhân đủ điều kiện lập cam kết thu nhập theo mẫu `OBK-BM-TNCN-08`). Khoản chi dưới 05 triệu đồng không phải khấu trừ thuế TNCN tại nguồn.

#### A.2. Quy trình liên kết tự động và kích hoạt thanh toán Chiều A
Quy trình thực thi thanh toán hoa hồng đối tác được tự động hóa qua chuỗi liên kết:
1. **Bước 1 (Lấy dữ liệu thực thu):** Vào ngày 01 của tháng, hệ thống tính toán tự động truy xuất dữ liệu doanh thu thực thu của các khách hàng có mã giới thiệu từ Sổ `DT-02` và `CN-01`.
2. **Bước 2 (Tính toán và sinh báo cáo):** Script tự động tính số tiền hoa hồng 10%, đối chiếu điều kiện 12 tháng, kết xuất bảng dữ liệu tự động điền vào Phiếu HH-02.
3. **Bước 3 (Gửi đối soát):** Chuyên viên `PM` kiểm tra và gửi Báo cáo `HH-02` cho đối tác qua thư điện tử trong khoảng thời gian từ ngày 05 đến ngày 10 hằng tháng.
4. **Bước 4 (Kích hoạt thanh toán tự động):**
   - Khi báo cáo được đối tác xác nhận hoặc hết thời hạn 07 ngày làm việc mà không có khiếu nại, điểm kích hoạt `TG-13` (theo Ma trận MT-01, bản lưu trữ tại `_luu_tru/phieu/`) kích hoạt thủ tục Đề nghị thanh toán theo `OBK-SOP-NB-01`.
   - Kế toán viên thanh toán (`KTV`) lập ủy nhiệm chi trình `KTT` và `CEO` phê duyệt trên hệ thống ngân hàng điện tử, thực hiện chuyển tiền cho đối tác trước ngày 10 của tháng kế tiếp.

#### A.3. Hoa hồng thưởng chuyên viên quản lý khách hàng (AM Incentive)
- Căn cứ quy chế lương thưởng `OBK-QCNS-01`, bảng lương [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo|OBK-QCNS-02]] và đánh giá CRM [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]].
- **Hoa hồng chốt hợp đồng mới (New Booking):** Tính theo tỷ lệ phần trăm trên giá trị hợp đồng dịch vụ mới ký kết trong tháng khi đạt chỉ tiêu doanh số.
- **Hoa hồng duy trì và gia hạn (Retention Commission):** Thưởng từ 2% đến 5% trên giá trị doanh thu gia hạn hợp đồng định kỳ đối với các khách hàng do `AM` phụ trách khi duy trì chỉ số `NRR` của nhóm khách hàng đạt từ 105% trở lên và tỷ lệ thu hồi công nợ đạt từ 90% trở lên.

---

### 2.2. Chiều B: oBacker làm đại lý và nhận hoa hồng đầu vào (Inbound Commission)

#### B.1. Cơ chế đại lý mua sỉ bán lẻ (Reseller Margin) và bóc tách thuế GTGT, thuế TNDN
Áp dụng đối với thiết bị phần cứng USB Token chữ ký số, gói dịch vụ hóa đơn điện tử hợp tác với nhà cung cấp CyberX (theo quy trình `PL_H` và Sổ [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]]), và bản quyền phần mềm kế toán máy tính:

1. **Nguyên tắc bóc tách thuế giá trị gia tăng (GTGT):**
   - Không lấy giá đã bao gồm thuế GTGT để tính toán doanh thu, giá vốn hoặc biên lợi nhuận.
   - **Doanh thu thuần bán lẻ (TK 5111/5112):** Bằng tổng giá thanh toán của khách hàng trừ đi tiền thuế GTGT đầu ra (TK 33311).
   - **Giá vốn hàng bán (TK 632):** Bằng tổng giá mua sỉ từ nhà cung cấp trừ đi tiền thuế GTGT đầu vào được khấu trừ (TK 1331).
   - **Phân loại thuế suất:**
     * Bản quyền phần mềm kế toán máy tính: Thuộc diện không chịu thuế GTGT (KCT) theo quy định Luật Thuế giá trị gia tăng.
     * Thiết bị phần cứng USB Token và dịch vụ hóa đơn điện tử: Chịu thuế GTGT 10% (hoặc 8% theo chính sách giảm thuế của từng thời kỳ).
     * Thuế GTGT chênh lệch phải nộp ngân sách Nhà nước = `TK 33311 (đầu ra) - TK 1331 (đầu vào)`.

2. **Công thức xác định biên lợi nhuận Reseller trước và sau thuế TNDN (CIT):**
   - **Lợi nhuận gộp Reseller (Lợi nhuận trước thuế - EBT):**
     $$\text{Lợi nhuận trước thuế (EBT)} = \text{Doanh thu thuần (TK 511)} - \text{Giá vốn (TK 632)}$$
   - **Tỷ suất lợi nhuận gộp Reseller%:**
     $$\text{Tỷ suất lợi nhuận gộp\%} = \frac{\text{Lợi nhuận trước thuế}}{\text{Doanh thu thuần (TK 511)}} \times 100\%$$
   - **Nghĩa vụ thuế thu nhập doanh nghiệp (CIT 20%):**
     $$\text{Thuế TNDN phải nộp} = \text{Lợi nhuận trước thuế (EBT)} \times 20\%$$
   - **Biên lợi nhuận ròng sau thuế (Net Profit Margin):**
     $$\text{Lợi nhuận ròng sau thuế} = \text{Lợi nhuận trước thuế} \times (1 - 20\%)$$
     $$\text{Tỷ suất lợi nhuận ròng\%} = \frac{\text{Lợi nhuận ròng sau thuế}}{\text{Doanh thu thuần (TK 511)}} \times 100\%$$

3. **Đối soát định kỳ:** Định kỳ ngày cuối tháng, `KTV` đối chiếu số lượng thiết bị kích hoạt trên Sổ `CK-02`, hóa đơn đầu ra trên Sổ `HD-02` và hóa đơn đầu vào từ CyberX để chốt công nợ thanh toán TK 331 và số thuế GTGT chênh lệch.

#### B.2. Cơ chế nhận hoa hồng môi giới đầu vào và nghĩa vụ Thuế nhà thầu (FCT)
Áp dụng đối với các dịch vụ giới thiệu khách hàng cho đối tác thứ ba:
1. **Hoa hồng giới thiệu mở tài khoản ngân hàng doanh nghiệp:** Hợp tác với các ngân hàng thương mại đối tác (Vietcombank, Techcombank, ACB theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]]). Ngân hàng chi trả phí hoa hồng giới thiệu từ 300.000 đồng đến 1.000.000 đồng trên mỗi tài khoản doanh nghiệp kích hoạt thành công. Doanh thu hoa hồng ghi nhận vào TK 5113, thuế GTGT đầu ra TK 33311 (nếu có).
2. **Hoa hồng dịch vụ thành lập doanh nghiệp quốc tế và Thuế nhà thầu (FCT):**
   - Hợp tác với đối tác nước ngoài (BBCIncorp, đối tác tư vấn thành lập doanh nghiệp tại Singapore, Hoa Kỳ). Đối tác chi trả hoa hồng đại lý từ 10% đến 15% trên giá trị gói dịch vụ thành lập và duy trì pháp nhân nước ngoài.
   - **Nghĩa vụ Thuế nhà thầu nước ngoài (FCT):** Trường hợp oBacker thanh toán phí dịch vụ cho nhà thầu nước ngoài (Vendor ngoại), oBacker có trách nhiệm khấu trừ và nộp thay thuế nhà thầu (gồm thuế TNDN nhà thầu và thuế GTGT nhà thầu) theo quy định tại Nghị định 252/2026/NĐ-CP Điều 10 khoản 1 và Thông tư 89/2026/TT-BTC.
   - **Công thức quy đổi Net-to-Gross khi hợp đồng thỏa thuận giá thuần:**
     $$\text{Doanh thu tính thuế FCT (Gross)} = \frac{\text{Số tiền thực chuyển trả nhà thầu (Net)}}{1 - \%\text{Thuế TNDN FCT} - \%\text{Thuế GTGT FCT}}$$
     theo quy định tại Điều 7 khoản 3 Thông tư 20/2026/TT-BTC.
   - **Thời hạn kê khai nộp thuế FCT:** Kê khai theo từng lần phát sinh thanh toán trong thời hạn tối đa 10 ngày kể từ ngày chuyển tiền ra nước ngoài.

- **Nguyên tắc hạch toán theo Thông tư 99/2025/TT-BTC:**
  * Khi đối tác phát hành biên bản đối soát xác nhận số hoa hồng được hưởng trong kỳ:
    - Nợ TK 1388 (Phải thu khác - chi tiết từng ngân hàng hoặc đối tác nước ngoài)
    - Có TK 5113 (Doanh thu cung cấp dịch vụ môi giới, đại lý)
    - Có TK 33311 (Thuế GTGT đầu ra phải nộp nếu thuộc diện chịu thuế GTGT)
  * Khi nhận tiền hoa hồng chuyển khoản vào tài khoản ngân hàng của oBacker:
    - Nợ TK 112 (Tiền gửi ngân hàng)
    - Có TK 1388 (Phải thu khác)
- **Đối soát thanh toán:** `KTV` lập bảng theo dõi danh sách khách hàng đã giới thiệu, ngày ngân hàng/đối tác nghiệm thu, đối chiếu với số dư tài khoản ngân hàng tại Phiếu NH-01 để bảo đảm không tồn đọng nợ phải thu quá 30 ngày kể từ ngày chốt đối soát.

---

## 3. KHUÔN THEO DÕI VÀ BẢNG TÍNH THỰC TẾ

### 3.1. Bảng đối soát hoa hồng Chiều A (Outbound - Chi trả đối tác giới thiệu)

| STT | Mã đối tác | Tên đối tác | Mã đăng ký | Tên khách hàng | Ngày thanh toán | Doanh thu thực thu | Tỷ lệ hoa hồng | Tiền hoa hồng | Thuế TNCN khấu trừ | Thực chi đối tác | Trạng thái thanh toán |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | | | | | |
| 2 | | | | | | | | | | | |
| 3 | | | | | | | | | | | |

### 3.2. Bảng đối soát doanh thu và hoa hồng Chiều B (Inbound - Reseller & Đại lý)

| STT | Phân nhóm nghiệp vụ | Tên đối tác / Vendor | Tên khách hàng | Hóa đơn đầu vào / Căn cứ | Hóa đơn đầu ra / Báo Có | Doanh thu chưa thuế | Giá vốn chưa thuế | Biên lợi nhuận / Hoa hồng | TK kế toán ghi nhận | Trạng thái thu tiền |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | | | | |
| 2 | | | | | | | | | | |
| 3 | | | | | | | | | | |

---

## 4. NGUYÊN TẮC HẠCH TOÁN VÀ ĐIỂM KIỂM SOÁT BẮT BUỘC

### 4.1. Nguyên tắc hạch toán kế toán theo Thông tư 99/2025/TT-BTC

1. **Chi phí hoa hồng đối tác giới thiệu (Chiều A):**
   - Hạch toán vào chi phí bán hàng theo OBK-QCTC-03 Điều 3a:
     Nợ TK 641 (Chi phí bán hàng - toàn bộ giá trị hoa hồng theo tỷ lệ thỏa thuận)
     Nợ TK 1331 (Thuế GTGT đầu vào được khấu trừ nếu đối tác là pháp nhân xuất hóa đơn GTGT)
     Có TK 3335 (Thuế TNCN khấu trừ 10% tại nguồn theo Nghị định 253/2026/NĐ-CP nếu đối tác là cá nhân và mức chi trả từ 05 triệu đồng trở lên)
     Có TK 331 / TK 112 (Phải trả đối tác hoặc thanh toán qua ngân hàng)
2. **Doanh thu và giá vốn bán lẻ đại lý Reseller CyberX (Chiều B.1):**
   - Phản ánh giá vốn: Nợ TK 632 (giá mua sỉ chưa thuế) / Nợ TK 1331 (thuế GTGT đầu vào 10% hoặc 8%) / Có TK 331 (CyberX). Riêng phần mềm kế toán không chịu thuế GTGT thì giá vốn ghi nhận toàn bộ vào TK 632.
   - Phản ánh doanh thu bán lẻ: Nợ TK 131, TK 112 / Có TK 5111, Có TK 5112 (doanh thu thuần chưa thuế) / Có TK 33311 (thuế GTGT đầu ra 10% hoặc 8%).
   - Phản ánh thuế TNDN 20%: Nợ TK 8211 (Chi phí thuế TNDN hiện hành) / Có TK 3334 (Thuế TNDN phải nộp) = Lợi nhuận trước thuế x 20%.
3. **Doanh thu hoa hồng đại lý đầu vào và Thuế nhà thầu (Chiều B.2):**
   - Khi ghi nhận quyền hưởng hoa hồng ngân hàng / đại lý: Nợ TK 1388 / Có TK 5113, Có TK 33311 (nếu có). Khi nhận tiền chuyển khoản: Nợ TK 112 / Có TK 1388.
   - Khi thanh toán phí cho Vendor nước ngoài theo Nghị định 252/2026/NĐ-CP và Thông tư 20/2026/TT-BTC:
     + Nếu hợp đồng ký theo giá Net (oBacker chịu nộp thay): Quy đổi Gross = Net / (1 - %CIT - %VAT). Hạch toán thuế FCT nộp thay vào giá vốn trực tiếp: Nợ TK 632 / TK 154, Có TK 3338 (hoặc 33382 - Thuế TNDN nhà thầu), Có TK 33312 (Thuế GTGT nhà thầu). Khi nộp thuế: Nợ TK 3338, Nợ TK 33312 / Có TK 112.
     + Nếu hợp đồng ký theo giá Gross (Vendor chịu thuế): Nợ TK 331 (Gross) / Có TK 3338 (CIT FCT), Có TK 33312 (VAT FCT), Có TK 112 (Net chuyển khoản). Kê khai và nộp thay trong thời hạn 10 ngày theo quy định.

### 4.2. Điểm kiểm soát bắt buộc

| Mã | Tên điểm kiểm soát | Vị trí kiểm soát | Người thực hiện | Hành động khi không đạt |
| --- | --- | --- | --- | --- |
| **KS-UE-01** | Kiểm tra điều kiện 12 tháng tính hoa hồng | Trước khi kết xuất Báo cáo `HH-02` | `PM` và `KTV` | Loại bỏ các dòng doanh thu của khách hàng đã vượt quá thời hạn 12 tháng kể từ ngày thanh toán lần đầu. |
| **KS-UE-02** | Đối khớp doanh thu thực thu với sao kê ngân hàng | Trước khi tính hoa hồng Chiều A | `KTV` | Chỉ tính hoa hồng trên số tiền thực tế đã về tài khoản ngân hàng; không tính trên hóa đơn chưa thanh toán hoặc nợ quá hạn. |
| **KS-UE-03** | Khấu trừ thuế TNCN đối tác cá nhân | Trước khi lập lệnh chuyển tiền | `KTV` và `KTT` | Trích giữ 10% thuế TNCN đối với khoản chi hoa hồng từ 05 triệu đồng trở lên cho cá nhân theo Nghị định 253/2026/NĐ-CP (trừ khi có cam kết `OBK-BM-TNCN-08`). |
| **KS-UE-04** | Đối soát số lượng thiết bị tồn kho và kích hoạt Token CyberX | Ngày khóa sổ cuối tháng | `KTV` và `AM` | Đối khớp giữa thực tế tồn kho, biên bản bàn giao `CK-01` và phiếu theo dõi `CK-02`. Xử lý chênh lệch trong thời hạn 24 giờ. |

---

## KÝ PHÊ DUYỆT VÀ CHẤP THUẬN

| Trưởng bộ phận Kế toán (`TL-KT`) | Kế toán trưởng (`KTT`) | Trưởng phòng Thương mại | Giám đốc điều hành (`COO`) |
| --- | --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Chiều A thanh toán đúng hạn cho đối tác giới thiệu; Chiều B thu đủ các khoản lợi nhuận đại lý và hoa hồng từ các nhà cung cấp bên ngoài.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.1 | Gộp trường hợp áp dụng, bỏ mục bộ tham số, lý do ở mục 1 và từ nhấn mạnh |
