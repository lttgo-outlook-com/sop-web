---
title: "BẢNG UE-01. BẢNG THEO DÕI VÀ TÍNH TOÁN CHỈ SỐ KINH TẾ ĐƠN VỊ, CAC, LTV VÀ ĐỐI SOÁT HOA HỒNG HAI CHIỀU"
code: "UE-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.2.0.0"
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
# BẢNG UE-01. BẢNG THEO DÕI VÀ TÍNH TOÁN CHỈ SỐ KINH TẾ ĐƠN VỊ, CAC, LTV VÀ ĐỐI SOÁT HOA HỒNG HAI CHIỀU

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | UE-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.2.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | UE-01 |
| **Màu** | TÍM, bảng theo dõi kinh tế đơn vị và đối soát hoa hồng hai chiều |
| **Ai dùng** | `KTV`, `KTT`, `AM`, `PM`, `COO`, `CEO` |
| **Sinh từ** | [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]];<br>[[HH-02_Phieu_bao_cao_hoa_hong_thang\|HH-02]];<br>[[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]];<br>[[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]];<br>[[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]];<br>[[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx\|CK-02]];<br>`MT-01` (ma trận kích hoạt, bản lưu trữ tại `_luu_tru/phieu/`);<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 23a;<br>Thông tư 99/2025/TT-BTC |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi và tính toán chỉ số kinh tế đơn vị, chi phí thu hút khách hàng (`CAC`), giá trị vòng đời khách hàng (`LTV`), tỷ lệ duy trì (`Retention`) và đối soát hoa hồng hai chiều được áp dụng bắt buộc tại oBacker nhằm mục đích:
1. Đo lường hiệu quả kinh tế trên từng đơn vị khách hàng (`Unit Economics`), kiểm soát cân bằng giữa chi phí tăng trưởng và giá trị thực tế tạo ra.
2. Tự động hóa tính toán và đối soát hoa hồng hai chiều:
   - Chiều A (Outbound): oBacker chi trả hoa hồng cho đối tác giới thiệu khách hàng theo [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang|OBK-SOP-PM]] và hoa hồng thưởng duy trì cho chuyên viên quản lý khách hàng (`AM`).
   - Chiều B (Inbound): oBacker làm đại lý phân phối lại (`Reseller`) phôi thiết bị chữ ký số, hóa đơn điện tử CyberX và nhận hoa hồng đại lý môi giới đầu vào từ ngân hàng, đối tác dịch vụ quốc tế.
3. Cung cấp bộ tham số định lượng phục vụ hệ thống tính toán tự động.

Bảng được lập và cập nhật theo các mốc thời gian:
- **Định kỳ tháng:** `KTV` tổng hợp số liệu từ ngày 01 đến ngày 05 hằng tháng, đồng bộ với mốc khóa sổ kế toán tháng và tính doanh thu tại Sổ DT-02.
- **Kỳ thanh toán hoa hồng đối tác:** Chốt số liệu hoa hồng trước ngày 05 hằng tháng, xuất Báo cáo hoa hồng tháng HH-02 gửi đối tác từ ngày 05 đến ngày 10 hằng tháng, kích hoạt lệnh chuyển khoản trước ngày 10 hằng tháng.
- **Kỳ đối soát đại lý đầu vào:** Đối soát công nợ với Vendor CyberX và đối tác ngân hàng trước ngày 15 hằng tháng.

---

## 1. BỘ CHỈ SỐ KINH TẾ ĐƠN VỊ CỐT LÕI (UNIT ECONOMICS)

Mọi chỉ số trong bảng đều được tính toán bằng công thức toán học và được thực thi tự động qua hệ thống tính toán tự động.

```
                  +----------------------------------------------+
                  |         BỘ CHỈ SỐ UNIT ECONOMICS             |
                  +----------------------------------------------+
                  |  CAC        = (Chi phí Mkt + Sales) / KH mới |
                  |  ARPU       = Tổng MRR / Số KH hoạt động    |
                  |  Gross Margin = (Doanh thu - Giá vốn) / DT   |
                  |  Churn Rate = KH rời bỏ / KH đầu kỳ          |
                  |  LTV        = (ARPU x Gross Margin) / Churn  |
                  |  LTV / CAC  >= 3.0 (Ngưỡng an toàn)          |
                  |  Payback    <= 06 tháng (Thu hồi vốn CAC)    |
                  |  NRR        >= 105% (Duy trì doanh thu thuần)|
                  +----------------------------------------------+
```

### 1.1. Chi phí thu hút khách hàng mới (CAC - Customer Acquisition Cost)

Chi phí thu hút một khách hàng mới trả tiền được xác định theo công thức:

$$\text{CAC} = \frac{\text{Tổng chi phí Tiếp thị trong kỳ} + \text{Tổng chi phí Bán hàng trong kỳ}}{\text{Số lượng khách hàng mới ký kết và thanh toán trong kỳ}}$$

Trong đó:
- **Tổng chi phí Tiếp thị:** Gồm chi phí quảng cáo trực tuyến, chi phí sự kiện, chi phí tài liệu tiếp thị và chi phí bản quyền công cụ tiếp thị phát sinh trong tháng báo cáo.
- **Tổng chi phí Bán hàng:** Gồm tiền lương cơ bản phân bổ theo tỷ lệ thời gian tìm kiếm khách hàng mới của bộ phận kinh doanh (`AM`), chi phí tiếp khách bán hàng, và tiền thưởng hoa hồng chốt hợp đồng mới.
- **Số lượng khách hàng mới:** Số pháp nhân hoặc khách hàng cá nhân hoàn tất ký kết hợp đồng dịch vụ đầu tiên và đã chuyển khoản thanh toán đợt đầu vào tài khoản của oBacker trong tháng báo cáo (loại trừ các hợp đồng gia hạn dịch vụ cũ).

### 1.2. Doanh thu bình quân trên mỗi khách hàng (ARPU - Average Revenue Per User)

Doanh thu định kỳ bình quân mà một khách hàng hoạt động đóng góp mỗi tháng:

$$\text{ARPU} = \frac{\text{Tổng doanh thu định kỳ hằng tháng (MRR)}}{\text{Số lượng khách hàng đang hoạt động trong kỳ}}$$

Trong đó:
- `MRR` (Monthly Recurring Revenue): Doanh thu định kỳ hàng tháng từ các hợp đồng dịch vụ kế toán thuế trọn gói và dịch vụ duy trì đang còn hiệu lực, lấy từ Sổ [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo|DT-02]] và Bảng [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh|TC-01]].
- `Số lượng khách hàng đang hoạt động`: Số lượng khách hàng đang sử dụng dịch vụ và không ở trong trạng thái tạm dừng hoặc chấm dứt theo Sổ CRM [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm|KH-01]].

### 1.3. Tỷ suất biên lợi nhuận gộp (GM - Gross Margin)

Biên lợi nhuận gộp phản ánh phần trăm doanh thu còn lại sau khi trừ giá vốn trực tiếp cung cấp dịch vụ:

$$\text{GM\%} = \frac{\text{Doanh thu thuần dịch vụ} - \text{Giá vốn trực tiếp}}{\text{Doanh thu thuần dịch vụ}} \times 100\%$$

Trong đó:
- `Giá vốn trực tiếp`: Chi phí tiền lương và các khoản trích theo lương của nhân sự chuyên môn trực tiếp thực hiện hồ sơ kế toán, thuế, giấy phép (`KTV`, `CV`), cộng chi phí phôi chứng thư số và tài nguyên phần mềm mua từ nhà cung ứng.
- **Mục tiêu kiểm soát:** Duy trì `GM%` từ 50% trở lên theo chuẩn mực tại Bảng [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh|TC-01]].

### 1.4. Tỷ lệ rời bỏ khách hàng và rời bỏ doanh thu (Churn Rate)

Đo lường mức độ suy giảm danh mục khách hàng theo hai phương diện:

1. **Tỷ lệ rời bỏ khách hàng (Logo Churn Rate):**
   $$\text{Logo Churn\%} = \frac{\text{Số khách hàng chấm dứt hợp đồng trong tháng}}{\text{Số lượng khách hàng hoạt động tại đầu tháng}} \times 100\%$$

2. **Tỷ lệ rời bỏ doanh thu gộp (Gross MRR Churn Rate):**
   $$\text{Gross Revenue Churn\%} = \frac{\text{Tổng MRR bị mất do khách hàng chấm dứt dịch vụ}}{\text{Tổng MRR tại thời điểm đầu tháng}} \times 100\%$$

- **Ngưỡng an toàn:** Logo Churn từ 2.0% mỗi tháng trở xuống; Gross Revenue Churn từ 1.5% mỗi tháng trở xuống.

### 1.5. Vòng đời khách hàng và Giá trị vòng đời khách hàng (LTV - Customer Lifetime Value)

1. **Thời gian vòng đời khách hàng bình quân (Customer Lifetime - tính bằng tháng):**
   $$\text{Lifetime (tháng)} = \frac{1}{\text{Tỷ lệ rời bỏ khách hàng (Logo Churn)}}$$

2. **Giá trị vòng đời khách hàng (LTV):**
   $$\text{LTV} = \frac{\text{ARPU} \times \text{GM\%}}{\text{Tỷ lệ rời bỏ khách hàng (Logo Churn)}}$$
   Hoặc tính theo công thức tương đương: $\text{LTV} = \text{ARPU} \times \text{GM\%} \times \text{Lifetime}$

### 1.6. Tỷ số hiệu quả vốn LTV / CAC

Tỷ số đánh giá mức độ sinh lời dài hạn so với chi phí đầu tư thu hút khách hàng:

$$\text{Tỷ số LTV/CAC} = \frac{\text{LTV}}{\text{CAC}}$$

Thang phân cấp đánh giá tỷ số LTV/CAC:
- **Mức Xanh (Đạt chuẩn an toàn):** `LTV/CAC >= 3.0`. Mô hình kinh doanh vận hành hiệu quả, chi phí bán hàng và tiếp thị được bù đắp tốt bởi giá trị vòng đời.
- **Mức Vàng (Cảnh báo):** `1.5 <= LTV/CAC < 3.0`. Hiệu quả đầu tư ở mức trung bình, cần cải thiện quy trình bán hàng hoặc giảm chi phí tiếp thị.
- **Mức Đỏ (Nguy hiểm):** `LTV/CAC < 1.5`. Chi phí thu hút khách hàng quá cao so với giá trị nhận lại, đe dọa thâm hụt dòng tiền dài hạn.

### 1.7. Thời gian hoàn vốn chi phí thu hút khách hàng (CAC Payback Period)

Số tháng cần thiết để lợi nhuận gộp từ một khách hàng bù đắp toàn bộ chi phí thu hút khách hàng đó:

$$\text{Payback Period (tháng)} = \frac{\text{CAC}}{\text{ARPU} \times \text{GM\%}}$$

- **Ngưỡng kiểm soát bắt buộc:** `Payback Period <= 06 tháng`.
- Nếu thời gian hoàn vốn vượt quá 06 tháng, Ban Giám đốc phải rà soát lại định biên nhân sự bán hàng và hiệu quả các kênh quảng cáo.

### 1.8. Tỷ lệ giữ chân doanh thu thuần (NRR - Net Revenue Retention)

Chỉ số đo lường tỷ lệ tăng trưởng doanh thu định kỳ từ tập khách hàng hiện hữu sau khi tính cả phần tăng thêm và giảm đi:

$$\text{NRR\%} = \frac{\text{MRR đầu kỳ} + \text{MRR mở rộng bán thêm} - \text{MRR thu hẹp gói} - \text{MRR rời bỏ}}{\text{MRR đầu kỳ}} \times 100\%$$

Trong đó:
- `MRR mở rộng` (Expansion MRR): Doanh thu tăng thêm do khách hàng cũ nâng cấp gói dịch vụ hoặc mua thêm dịch vụ định kỳ mới.
- `MRR thu hẹp` (Contraction MRR): Doanh thu giảm do khách hàng hạ gói dịch vụ nhưng chưa chấm dứt hợp đồng.
- `MRR rời bỏ` (Churned MRR): Doanh thu mất hoàn toàn do khách hàng chấm dứt hợp đồng dịch vụ.
- **Ngưỡng kiểm soát bắt buộc:** `NRR >= 105%`. Phản ánh danh mục khách hàng cũ tự tạo ra mức tăng trưởng doanh thu dương mà chưa cần tính doanh thu từ khách hàng mới.

---

## 2. CƠ CHẾ ĐỐI SOÁT VÀ TÍNH TOÁN HOA HỒNG HAI CHIỀU

Hệ thống hoa hồng tại oBacker được thiết lập trên cơ chế hai chiều minh bạch, kết nối trực tiếp với dòng tiền và hóa đơn chứng từ kế toán.

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
- Căn cứ quy chế lương thưởng `OBK-QCNS-01`, bảng lương [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan|LU-01]] và đánh giá CRM [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm|KH-01]].
- **Hoa hồng chốt hợp đồng mới (New Booking):** Tính theo tỷ lệ phần trăm trên giá trị hợp đồng dịch vụ mới ký kết trong tháng khi đạt chỉ tiêu doanh số.
- **Hoa hồng duy trì và gia hạn (Retention Commission):** Thưởng từ 2% đến 5% trên giá trị doanh thu gia hạn hợp đồng định kỳ đối với các khách hàng do `AM` phụ trách khi duy trì chỉ số `NRR` của nhóm khách hàng đạt từ 105% trở lên và tỷ lệ thu hồi công nợ đạt từ 90% trở lên.

---

### 2.2. Chiều B: oBacker làm đại lý và nhận hoa hồng đầu vào (Inbound Commission)

#### B.1. Cơ chế đại lý mua sỉ bán lẻ (Reseller Margin) và bóc tách thuế GTGT, thuế TNDN
Áp dụng đối với thiết bị phần cứng USB Token chữ ký số, gói dịch vụ hóa đơn điện tử hợp tác với nhà cung cấp CyberX (theo quy trình `PL_H` và Sổ [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx|CK-02]]), và bản quyền phần mềm kế toán máy tính:

1. **Nguyên tắc bóc tách thuế giá trị gia tăng (GTGT):**
   - Tuyệt đối không lấy giá đã bao gồm thuế GTGT để tính toán doanh thu, giá vốn hoặc biên lợi nhuận.
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
1. **Hoa hồng giới thiệu mở tài khoản ngân hàng doanh nghiệp:** Hợp tác với các ngân hàng thương mại đối tác (Vietcombank, Techcombank, ACB theo Danh bạ [[DT-01_Danh_ba_thong_tin_doi_tac_nha_cung_cap_va_co_quan|DT-01]]). Ngân hàng chi trả phí hoa hồng giới thiệu từ 300.000 đồng đến 1.000.000 đồng trên mỗi tài khoản doanh nghiệp kích hoạt thành công. Doanh thu hoa hồng ghi nhận vào TK 5113, thuế GTGT đầu ra TK 33311 (nếu có).
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

### 3.1. Bảng theo dõi Unit Economics tổng hợp hằng tháng

| Tháng | Số KH mới | Số KH rời bỏ | Tổng KH hoạt động | Tổng MRR (đồng) | CAC (đồng) | ARPU (đồng) | Gross Margin % | Logo Churn % | LTV (đồng) | Tỷ số LTV/CAC | Payback (tháng) | NRR % | Đánh giá trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |
| | | | | | | | | | | | | | |

### 3.2. Bảng đối soát hoa hồng Chiều A (Outbound - Chi trả đối tác giới thiệu)

| STT | Mã đối tác | Tên đối tác | Mã đăng ký | Tên khách hàng | Ngày thanh toán | Doanh thu thực thu | Tỷ lệ hoa hồng | Tiền hoa hồng | Thuế TNCN khấu trừ | Thực chi đối tác | Trạng thái thanh toán |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | | | | | |
| 2 | | | | | | | | | | | |
| 3 | | | | | | | | | | | |

### 3.3. Bảng đối soát doanh thu và hoa hồng Chiều B (Inbound - Reseller & Đại lý)

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
| **KS-UE-03** | Khấu trừ thuế TNCN đối tác cá nhân | Trước khi lập lệnh chuyển tiền | `KTV` và `KTT` | Bắt buộc trích giữ 10% thuế TNCN đối với khoản chi hoa hồng từ 05 triệu đồng trở lên cho cá nhân theo Nghị định 253/2026/NĐ-CP (trừ khi có cam kết `OBK-BM-TNCN-08`). |
| **KS-UE-04** | Kiểm tra tỷ số LTV/CAC và thời gian hoàn vốn Payback | Báo cáo giao ban tháng | `COO` và `CEO` | Kích hoạt rà soát chi phí tiếp thị và cơ cấu giá bán khi LTV/CAC ít hơn 3.0 hoặc Payback vượt quá 06 tháng. |
| **KS-UE-05** | Đối soát số lượng thiết bị tồn kho và kích hoạt Token CyberX | Ngày khóa sổ cuối tháng | `KTV` và `AM` | Đối khớp giữa thực tế tồn kho, biên bản bàn giao `CK-01` và phiếu theo dõi `CK-02`. Xử lý chênh lệch trong thời hạn 24 giờ. |

---

## KÝ PHÊ DUYỆT VÀ CHẤP THUẬN

| Trưởng bộ phận Kế toán (`TL-KT`) | Kế toán trưởng (`KTT`) | Trưởng phòng Thương mại | Giám đốc điều hành (`COO`) |
| --- | --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Một doanh nghiệp dịch vụ chỉ có thể tăng trưởng bền vững khi từng đơn vị khách hàng tạo ra giá trị thặng dư rõ ràng (`Unit Economics`). Việc theo dõi chặt chẽ chi phí thu hút khách hàng (`CAC`), giá trị vòng đời (`LTV`), thời gian hoàn vốn (`Payback Period`) và tỷ lệ duy trì doanh thu thuần (`NRR`) giúp Ban Giám đốc đưa ra các quyết định mở rộng quy mô an toàn.
 
Cơ chế đối soát hoa hồng hai chiều minh bạch hóa toàn bộ dòng tiền: vừa bảo đảm thanh toán đúng hạn cho đối tác giới thiệu để duy trì mạng lưới kênh bán hàng, vừa thu đúng, thu đủ các khoản lợi nhuận đại lý và hoa hồng từ các nhà cung cấp bên ngoài.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Chuyển tham chiếu ma trận MT-01 về bản lưu trữ và thêm lớp KTT vào chuỗi ký phê duyệt |
