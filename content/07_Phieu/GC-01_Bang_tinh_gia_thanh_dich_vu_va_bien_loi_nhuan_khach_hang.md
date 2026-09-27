---
title: "BẢNG GC-01. BẢNG TÍNH GIÁ THÀNH DỊCH VỤ VÀ BIÊN LỢI NHUẬN KHÁCH HÀNG"
code: "GC-01"
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
  - GC-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# BẢNG GC-01. BẢNG TÍNH GIÁ THÀNH DỊCH VỤ VÀ BIÊN LỢI NHUẬN KHÁCH HÀNG

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | GC-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 27/09/2026 |
| Người biên soạn | `CEO` soạn bản đầu. Bản sau do `CEO` phân công |
| Người soát | đã soát |
| Người phê duyệt | đã phê duyệt |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | GC-01 |
| **Màu** | CAM, tính giá thành dịch vụ và phân tích biên lợi nhuận |
| **Ai dùng** | Kế toán viên chi phí (`KTV`), Kế toán trưởng (`KTT`), Trưởng bộ phận dịch vụ (`TL-KT`, `TL-LIC`, `TL-LD`, `TL-LS`), Chuyên viên Quản lý khách hàng (`AM`), Giám đốc điều hành (`COO`), Giám đốc điều hành cấp cao (`CEO`) |
|| **Sinh từ** | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]];<br>[[05_Quy_trinh_ke_toan_thang\|05_Quy_trinh_ke_toan_thang]];<br>[[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]];<br>[[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]];<br>[[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]];<br>[[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]];<br>[[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]];<br>[[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]];<br>Thông tư 99/2025/TT-BTC Điều 11 (Tài khoản 154 và Tài khoản 632) |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Bảng tính giá thành dịch vụ và biên lợi nhuận khách hàng được áp dụng bắt buộc để:
1. Tập hợp toàn bộ chi phí trực tiếp và chi phí phân bổ phát sinh từ việc cung cấp dịch vụ cho khách hàng theo Tài khoản 154 (Chi phí sản xuất, kinh doanh dở dang) quy định tại Thông tư 99/2025/TT-BTC Điều 11 (hoặc Phụ lục II) và [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]].
2. Xác định chính xác giá vốn dịch vụ hoàn thành để kết chuyển sang Tài khoản 632 (Giá vốn hàng bán) tại thời điểm nghiệm thu hoặc phân bổ doanh thu định kỳ theo [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo|DT-02]].
3. Tính toán giá thành dịch vụ đồng bộ qua 04 cấp độ phân tích:
   - Cấp độ 1: Theo từng nhiệm vụ công việc (`Task` gắn với 203 mã Job tại [[PL_2_Bang_tra_SLA|OBK-SOP-PL2]]).
   - Cấp độ 2: Theo từng kết quả bàn giao (`Deliverable` theo [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu|OBK-SOP-PL-G]]).
   - Cấp độ 3: Theo từng gói dịch vụ chuẩn hóa trong Danh mục dịch vụ [[00_Danh_muc_dich_vu_va_bang_gia|OBK-DM-00]] đến [[07_Bang_gia_Dich_vu_o_nuoc_ngoai|OBK-DM-07]].
   - Cấp độ 4: Theo từng khách hàng (phân tích doanh thu, giá vốn, lợi nhuận gộp và tỷ lệ biên lợi nhuận gộp).
4. Xác định điểm hòa vốn cho từng hợp đồng và kích hoạt hệ thống cảnh báo biên lợi nhuận âm (`Negative Margin Alert`) đối với các hợp đồng có nguy cơ phát sinh lỗ hoặc biên lợi nhuận dưới ngưỡng an toàn tài chính của oBacker.

## NGUYÊN TẮC TẬP HỢP CHI PHÍ VÀ CÔNG THỨC TÍNH TOÁN CƠ SỞ

### 1. Phân bổ chi phí nhân công trực tiếp (Direct Labor Cost)

Chi phí nhân công trực tiếp là chi phí thời gian lao động chuyên môn của chuyên viên nghiệp vụ (`KTV`, `CV-LIC`, `CV-LD`, `CV-LS`, `CV-RD`) tham gia xử lý trực tiếp hồ sơ của khách hàng:

$$\text{C}_{\text{labor}} = \text{T}_{\text{hours}} \times \text{R}_{\text{hour}}$$

Trong đó:
- $\text{T}_{\text{hours}}$: Số giờ làm việc thực tế ghi nhận cho công việc trên hệ thống quản lý công việc [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi|CV-01]].
- $\text{R}_{\text{hour}}$: Đơn giá chi phí lương giờ đầy đủ của chuyên viên thực hiện theo ngạch bậc chức danh quy định tại [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan|LU-01]]:

$$\text{R}_{\text{hour}} = \left( \frac{\text{Lương chính}}{\text{Số ngày công chuẩn của tháng} \times 08\text{ giờ}} \right) \times (1 + \text{K}_{\text{ins}})$$

- $\text{K}_{\text{ins}}$: Tỷ lệ các khoản trích theo lương thuộc trách nhiệm chi trả của người sử dụng lao động (21,5% gồm 17% BHXH + 3% BHYT + 1% BHTN + 0,5% BHTNLĐ-BNN; kinh phí công đoàn 2% tính riêng theo quy định pháp luật).

Bảng đơn giá chi phí lương giờ chuẩn theo ngạch bậc chuyên môn quy định tại [[01_Khung_nhan_su_tong_hop|OBK-QCNS-01]] và [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan|LU-01]]:

| Cấp bậc | Vị trí chuyên môn tiêu biểu | Mức lương chính theo tháng (đồng) | Đơn giá lương giờ cơ bản (đồng/giờ) | Tỷ lệ trích đóng bảo hiểm (21,5%) | Đơn giá chi phí nhân công đầy đủ (đồng/giờ) |
| --- | --- | --- | --- | --- | --- |
| P1 | Chuyên viên tập sự, sơ cấp | 6.000.000 | 34.091 | 7.330 | 41.421 |
| P2 | Chuyên viên tiêu chuẩn | 10.000.000 | 56.818 | 12.216 | 69.034 |
| P3 | Chuyên viên nâng cao | 15.000.000 | 85.227 | 18.324 | 103.551 |
| P4 | Chuyên viên cao cấp | 22.000.000 | 125.000 | 26.875 | 151.875 |
| M1 / TL | Trưởng bộ phận chuyên môn | 28.000.000 | 159.091 | 34.205 | 193.296 |

*(Số ngày công chuẩn của tháng tính bình quân 22 ngày làm việc theo [[07_Chinh_sach_cong_chuan_va_cham_cong|OBK-QCNS-07]])*

### 2. Chi phí dịch vụ mua ngoài trực tiếp (Direct Expenses)

Chi phí dịch vụ mua ngoài trực tiếp là các khoản chi phí phát sinh trực tiếp và gắn liền với từng hồ sơ hoặc hợp đồng cụ thể của khách hàng:

$$\text{C}_{\text{direct\_exp}} = \text{C}_{\text{sub}} + \text{C}_{\text{post}} + \text{C}_{\text{fee}} + \text{C}_{\text{sw}}$$

Trong đó:
- $\text{C}_{\text{sub}}$: Chi phí chứng thư số đại lý hoặc thiết bị vật lý mua vào từ đối tác CyberX theo Sổ [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx|CK-02]].
- $\text{C}_{\text{post}}$: Cước bưu phẩm, bưu chính chuyển phát hồ sơ tài liệu vật lý theo Sổ giao nhận [[TL-01_So_giao_nhan_tai_lieu_va_buu_pham|TL-01]].
- $\text{C}_{\text{fee}}$: Phí, lệ phí nộp ngân sách nhà nước theo thông báo nộp tiền hoặc biên lai thu phí của cơ quan đăng ký kinh doanh, sở ban ngành.
- $\text{C}_{\text{sw}}$: Chi phí thuê bao dịch vụ phần mềm chuyên dụng mua ngoài phục vụ riêng cho khách hàng đó.

### 3. Chi phí quản lý chung phân bổ (Overhead Cost Allocation)

Chi phí quản lý chung phân bổ bao gồm chi phí khấu hao công cụ dụng cụ, hạ tầng công nghệ thông tin phục vụ chung, chi phí văn phòng phẩm và chi phí quản lý vận hành gián tiếp phân bổ cho hoạt động cung cấp dịch vụ:

$$\text{C}_{\text{overhead\_alloc}} = \text{C}_{\text{labor}} \times \text{K}_{\text{overhead}}$$

Tỷ lệ phân bổ chi phí chung chuẩn $\text{K}_{\text{overhead}}$ tại oBacker được xác định là 15% trên tổng chi phí nhân công trực tiếp (phù hợp với định mức chi phí quản lý vận hành trong doanh nghiệp dịch vụ tư vấn).

### 4. Tổng giá thành dịch vụ

Tổng giá thành dịch vụ ($\text{Z}$) tập hợp vào bên Nợ Tài khoản 154:

$$\text{Z} = \text{C}_{\text{labor}} + \text{C}_{\text{direct\_exp}} + \text{C}_{\text{overhead\_alloc}}$$

---

## NGUYÊN TẮC THUẾ ĐỐI VỚI GIÁ THÀNH, BIÊN LỢI NHUẬN RESELL VÀ HOA HỒNG MÔI GIỚI

### 1. Thuế giá trị gia tăng (VAT) trong xác định doanh thu và giá vốn

Nguyên tắc quản trị tài chính là **tuyệt đối không dùng giá đã bao gồm thuế giá trị gia tăng để tính toán doanh thu, giá vốn hay lợi nhuận**:

- **Doanh thu thuần (Tài khoản 511):** Bằng tổng giá trị dịch vụ ghi trên hợp đồng hoặc hóa đơn trừ đi thuế giá trị gia tăng đầu ra phải nộp:
  $$\text{Doanh thu thuần (TK 511)} = \text{Tổng giá thanh toán} - \text{Thuế GTGT đầu ra (TK 33311)}$$
- **Giá vốn dịch vụ và hàng hóa mua ngoài (Tài khoản 632):** Bằng giá mua sỉ đại lý từ nhà cung cấp trừ đi thuế giá trị gia tăng đầu vào được khấu trừ:
  $$\text{Giá vốn (TK 632)} = \text{Tổng giá mua sỉ} - \text{Thuế GTGT đầu vào được khấu trừ (TK 1331)}$$
- **Phân định thuế suất GTGT theo tính chất sản phẩm:**
  * **Bản quyền phần mềm:** Thuộc đối tượng **không chịu thuế giá trị gia tăng (KCT)** theo quy định của Luật Thuế giá trị gia tăng số 13/2008/QH12 (sửa đổi, bổ sung) và Luật Thuế GTGT số 48/2024/QH15 Điều 5 khoản 21. Khi mua bản quyền phần mềm phân phối lại cho khách hàng, giá mua vào không có thuế GTGT đầu vào; giá bán ra không phát sinh thuế GTGT đầu ra. Toàn bộ giá trị mua vào được tính thẳng vào chi phí giá vốn (TK 154 / TK 632).
  * **Chữ ký số USB Token và Hóa đơn điện tử:** Thiết bị USB Token phần cứng và dịch vụ truyền nhận hóa đơn điện tử thuộc đối tượng chịu thuế suất GTGT 10% (hoặc 8% theo chính sách giảm thuế của từng thời kỳ).
  * **Nghĩa vụ thuế GTGT chênh lệch phải nộp ngân sách:**
    $$\text{Thuế GTGT phải nộp} = \text{Thuế GTGT đầu ra (TK 33311)} - \text{Thuế GTGT đầu vào được khấu trừ (TK 1331)}$$

### 2. Thuế thu nhập doanh nghiệp (CIT) và Biên lợi nhuận sau thuế

Lợi nhuận từ hoạt động cung ứng dịch vụ và phân phối lại theo thuế suất phổ thông là 20% theo quy định của Luật Thuế thu nhập doanh nghiệp.

**Chính sách ưu đãi thuế thu nhập doanh nghiệp của oBacker:**
Công ty Cổ phần OBACKER được xác nhận là Doanh nghiệp Khởi nghiệp sáng tạo theo Văn bản xác nhận ngày 29/12/2025 của Sở Khoa học và Công nghệ thành phố Đà Nẵng, áp dụng cơ chế ưu đãi đặc thù tại Nghị quyết số 136/2024/QH15 Điều 14 khoản 1 điểm a, Nghị quyết số 53/2024/NQ-HĐND và Nghị quyết số 24/2026/NQ-HĐND của HĐND thành phố Đà Nẵng (xem [[CC-KT-90 Miễn thuế TNDN 05 năm từ ngày phát sinh thu nhập chịu thuế cho doanh nghiệp khởi nghiệp sáng tạo tại Đà Nẵng|CC-KT-90]] và [[CC-KT-92 Điều khoản chuyển tiếp tiếp tục hưởng ưu đãi thuế cho văn bản xác nhận cấp trước theo Nghị quyết 24-2026-NQ-HĐND|CC-KT-92]]):
- Thời gian miễn thuế: Miễn 100% thuế TNDN trong 05 năm tính liên tục từ năm đầu tiên phát sinh thu nhập chịu thuế (từ khi có lãi). Trường hợp chưa có lãi thì tính từ năm thứ 04 kể từ năm đầu tiên có doanh thu.
- Thuế suất áp dụng: Thuế TNDN oBacker = 0% $\rightarrow$ Chi phí thuế TNDN hiện hành (TK 8211) = 0 đồng $\rightarrow$ Lợi nhuận ròng sau thuế = Lợi nhuận trước thuế.

Công thức tính toán:

- **Lợi nhuận trước thuế:**
  $$\text{Lợi nhuận trước thuế} = \text{Doanh thu thuần (TK 511)} - \text{Giá vốn (TK 632)} - \text{Chi phí bán hàng (TK 641)} - \text{Chi phí quản lý (TK 642)}$$
- **Chi phí thuế thu nhập doanh nghiệp hiện hành (Tài khoản 8211):**
  * Trong thời gian ưu đãi thuế oBacker (05 năm):
    $$\text{Chi phí thuế TNDN (TK 8211)} = 0\text{ đồng}$$
  * Sau thời gian ưu đãi (hoặc tính theo thuế suất phổ thông 20%):
    $$\text{Chi phí thuế TNDN (TK 8211)} = \text{Thu nhập tính thuế} \times 20\%$$
- **Lợi nhuận ròng sau thuế:**
  * Trong thời gian ưu đãi thuế oBacker (thuế suất 0%):
    $$\text{Lợi nhuận sau thuế} = \text{Lợi nhuận trước thuế}$$
  * Sau thời gian ưu đãi (thuế suất phổ thông 20%):
    $$\text{Lợi nhuận sau thuế} = \text{Lợi nhuận trước thuế} \times (1 - 20\%) = \text{Lợi nhuận trước thuế} \times 80\%$$
- **Biên lợi nhuận ròng sau thuế (`Net Margin %`):**
  $$\text{Net\_Margin\_}\% = \left( \frac{\text{Lợi nhuận sau thuế}}{\text{Doanh thu thuần (TK 511)}} \right) \times 100\%$$

### 3. Thuế nhà thầu nước ngoài (FCT) khi sử dụng dịch vụ đối tác quốc tế

Khi thực hiện các gói dịch vụ có thuê đối tác nước ngoài (dịch vụ tư vấn thành lập doanh nghiệp tại nước ngoài tại Singapore, Mỹ, hoặc mua dịch vụ điện toán đám mây quốc tế), oBacker có nghĩa vụ khấu trừ và nộp thay thuế nhà thầu (gồm thuế TNDN nhà thầu và thuế GTGT nhà thầu) theo quy định tại Nghị định số 252/2026/NĐ-CP và Thông tư số 89/2026/TT-BTC:

- **Trường hợp hợp đồng ký theo giá Net (giá không bao gồm thuế tại Việt Nam):** oBacker quy đổi sang doanh thu tính thuế (Gross) theo Thông tư số 20/2026/TT-BTC Điều 7 khoản 3:
  $$\text{Doanh thu tính thuế Gross} = \frac{\text{Giá Net}}{1 - \%\text{Thuế TNDN nhà thầu} - \%\text{Thuế GTGT nhà thầu}}$$
- **Chi phí thuế nhà thầu nộp thay:** Toàn bộ số tiền thuế TNDN nhà thầu và thuế GTGT nhà thầu mà oBacker nộp thay vào ngân sách nhà nước được tính vào chi phí giá vốn trực tiếp (TK 154 / TK 632) của hợp đồng dịch vụ, bảo đảm phản ánh trung thực toàn bộ giá thành thực tế của dịch vụ.

### 4. Thuế thu nhập cá nhân (PIT) khi chi trả hoa hồng giới thiệu khách hàng

Khi chi trả hoa hồng môi giới, hoa hồng giới thiệu khách hàng (Commission) cho cá nhân theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 23a và [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] Điều 3a:

- **Khấu trừ thuế TNCN 10% tại nguồn:** Căn cứ quy định tại Nghị định số 253/2026/NĐ-CP Điều 50 khoản 2, mọi khoản chi trả tiền hoa hồng môi giới cho cá nhân từ 05 triệu đồng trở lên cho một lần chi trả phải khấu trừ thuế TNCN 10% tại nguồn trước khi thực hiện chi trả (trừ trường hợp cá nhân đủ điều kiện và đã lập văn bản cam kết theo mẫu số `OBK-BM-TNCN-08`).
- **Hạch toán chi phí và dòng tiền:**
  * Nợ TK 641 (Chi phí bán hàng): Toàn bộ số tiền hoa hồng theo tỷ lệ thỏa thuận.
  * Có TK 3335 (Thuế TNCN khấu trừ nộp ngân sách): 10% tiền hoa hồng.
  * Có TK 112 (Tiền gửi ngân hàng): 90% số tiền thực chi chuyển khoản cho đối tác.

---

## BỐN CẤP ĐỘ TÍNH TOÁN GIÁ THÀNH DỊCH VỤ

```
[Cấp độ 1: Task / Job Code] -> [Cấp độ 2: Kết quả bàn giao] -> [Cấp độ 3: Gói dịch vụ] -> [Cấp độ 4: Khách hàng]
```

### Cấp độ 1. Giá thành theo từng nhiệm vụ công việc (Task / Job Code)

Mỗi nhiệm vụ phát sinh trên hệ thống quản lý công việc [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi|CV-01]] được gắn với 01 mã Job thuộc 203 mã Job chuẩn tại [[PL_2_Bang_tra_SLA|OBK-SOP-PL2]].

Giá thành của từng nhiệm vụ $i$ ($\text{Z}_{\text{task}, i}$):

$$\text{Z}_{\text{task}, i} = (\text{T}_i \times \text{R}_i) + \text{C}_{\text{direct}, i} + (\text{T}_i \times \text{R}_i \times \text{K}_{\text{overhead}})$$

*Ví dụ:* Nhiệm vụ soạn thảo hồ sơ đăng ký doanh nghiệp (Job `LIC-02`) do chuyên viên bậc P2 thực hiện trong thời gian 03 giờ làm việc, phát sinh cước gửi thư 30.000 đồng:
- Chi phí nhân công: $3 \times 69.034 = 207.102$ đồng.
- Chi phí trực tiếp mua ngoài: $30.000$ đồng.
- Chi phí quản lý chung phân bổ: $207.102 \times 15\% = 31.065$ đồng.
- Tổng giá thành nhiệm vụ: $207.102 + 30.000 + 31.065 = 268.167$ đồng.

### Cấp độ 2. Giá thành theo kết quả bàn giao (`Deliverable`)

Kết quả bàn giao là hồ sơ hoặc sản phẩm dịch vụ hoàn chỉnh bàn giao cho khách hàng theo quy định tại [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu|OBK-SOP-PL-G]]. Mỗi kết quả bàn giao gồm tập hợp các nhiệm vụ công việc thành phần.

Giá thành của kết quả bàn giao $j$ ($\text{Z}_{\text{deliv}, j}$):

$$\text{Z}_{\text{deliv}, j} = \sum_{i \in \text{Deliv}_j} \text{Z}_{\text{task}, i} + \text{C}_{\text{deliv\_direct}, j}$$

Trong đó $\text{C}_{\text{deliv\_direct}, j}$ là chi phí trực tiếp mua ngoài phát sinh cho toàn bộ kết quả bàn giao (ví dụ: lệ phí nhà nước cấp Giấy chứng nhận đăng ký doanh nghiệp, phí khắc dấu tròn pháp nhân).

### Cấp độ 3. Giá thành theo Gói dịch vụ (Service Package)

Gói dịch vụ là sản phẩm thương mại được chào bán theo Danh mục dịch vụ và Bảng giá [[00_Danh_muc_dich_vu_va_bang_gia|OBK-DM-00]] đến [[07_Bang_gia_Dich_vu_o_nuoc_ngoai|OBK-DM-07]].

Giá thành của gói dịch vụ $k$ trong một kỳ kế toán ($\text{Z}_{\text{pkg}, k}$):

$$\text{Z}_{\text{pkg}, k} = \sum_{j \in \text{Pkg}_k} \text{Z}_{\text{deliv}, j} + \text{C}_{\text{pkg\_direct}, k}$$

Trong đó $\text{C}_{\text{pkg\_direct}, k}$ là các chi phí mua ngoài phát sinh theo gói định kỳ (ví dụ: chi phí bản quyền thiết bị chữ ký số từ CyberX theo gói dịch vụ).

### Cấp độ 4. Giá thành và Biên lợi nhuận theo Khách hàng (Client Margin)

Phân tích hiệu quả tài chính tổng thể đối với từng khách hàng trên cơ sở đối chiếu doanh thu thuần và toàn bộ giá vốn dịch vụ phát sinh trong kỳ:

1. **Doanh thu thuần khách hàng ($\text{R}_{\text{client}}$):** Doanh thu dịch vụ ghi nhận vào Tài khoản 511 trong kỳ từ Sổ theo dõi doanh thu [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo|DT-02]].
2. **Tổng giá vốn dịch vụ khách hàng ($\text{COGS}_{\text{client}}$):** Toàn bộ giá thành dịch vụ hoàn thành đã nghiệm thu kết chuyển từ Tài khoản 154 sang Tài khoản 632 trong kỳ:

$$\text{COGS}_{\text{client}} = \sum_{k \in \text{Client}} \text{Z}_{\text{pkg}, k}$$

3. **Lợi nhuận gộp khách hàng ($\text{Gross\_Profit}_{\text{client}}$):**

$$\text{Gross\_Profit}_{\text{client}} = \text{R}_{\text{client}} - \text{COGS}_{\text{client}}$$

4. **Biên lợi nhuận gộp khách hàng ($\text{Gross\_Margin\_}\%_{\text{client}}$):**

$$\text{Gross\_Margin\_}\%_{\text{client}} = \left( \frac{\text{Gross\_Profit}_{\text{client}}}{\text{R}_{\text{client}}} \right) \times 100\%$$

5. **Lợi nhuận thuần khách hàng ($\text{Net\_Profit}_{\text{client}}$):**

$$\text{Net\_Profit}_{\text{client}} = \text{Gross\_Profit}_{\text{client}} - \text{Chi phí hoa hồng AM} - \text{Chi phí quản lý phân bổ}$$

$$\text{Net\_Margin\_}\%_{\text{client}} = \left( \frac{\text{Net\_Profit}_{\text{client}}}{\text{R}_{\text{client}}} \right) \times 100\%$$

---

## CÔNG THỨC XÁC ĐỊNH ĐIỂM HÒA VỐN VÀ CẢNH BÁO HỢP ĐỒNG ÂM LỢI NHUẬN

### 1. Công thức xác định Điểm hòa vốn (Break-even Point)

Để bảo đảm kiểm soát chi phí thời gian làm việc của chuyên viên, kế toán chi phí xác định điểm hòa vốn cho từng hợp đồng:

**a) Doanh thu hòa vốn tối thiểu ($\text{R}_{\text{breakeven}}$):** Mức doanh thu chưa thuế tối thiểu cần thu của khách hàng để bù đắp đủ chi phí nhân công, chi phí mua ngoài và chi phí quản lý chung:

$$\text{R}_{\text{breakeven}} = \text{C}_{\text{direct\_exp}} + \text{T}_{\text{hours}} \times \text{R}_{\text{hour}} \times (1 + \text{K}_{\text{overhead}})$$

**b) Giới hạn số giờ làm việc hòa vốn ($\text{T}_{\text{max\_hours}}$):** Số giờ lao động tối đa mà chuyên viên được phép tiêu hao cho hợp đồng trước khi hợp đồng bắt đầu phát sinh lỗ:

$$\text{T}_{\text{max\_hours}} = \frac{\text{R}_{\text{contract}} - \text{C}_{\text{direct\_exp}}}{\text{R}_{\text{hour}} \times (1 + \text{K}_{\text{overhead}})}$$

Khi số giờ thực tế $\text{T}_{\text{actual}} > \text{T}_{\text{max\_hours}}$, hợp đồng chuyển sang trạng thái âm lợi nhuận gộp ($\text{Gross\_Margin\_}\% < 0$).

### 2. Hệ thống cảnh báo biên lợi nhuận ba mức (Margin Alert Framework)

Căn cứ vào tỷ lệ biên lợi nhuận gộp ($\text{Gross\_Margin\_}\%$) và tỷ lệ chi phí nhân sự mục tiêu tại [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh|TC-01]], hệ thống phân loại ba mức cảnh báo:

| Mức cảnh báo | Ngưỡng biên lợi nhuận gộp | Trạng thái hợp đồng | Hành động xử lý bắt buộc |
| --- | --- | --- | --- |
| **MỨC XANH** | $\text{Gross\_Margin\_}\% \ge 45\%$ | An toàn tài chính | Duy trì vận hành bình thường, kiểm soát chất lượng đúng hạn theo [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]]. |
| **MỨC VÀNG** | $20\% \le \text{Gross\_Margin\_}\% < 45\%$ | Cảnh báo biên mỏng | `TL` rà soát phân bổ giờ làm việc; rà soát khối lượng chứng từ thực tế của khách hàng so với hạn mức gói dịch vụ; ngăn chặn việc phát sinh đầu việc ngoài phạm vi hợp đồng. |
| **MỨC ĐỎ** | $\text{Gross\_Margin\_}\% < 20\%$ hoặc $< 0\%$ | Báo động âm lợi nhuận (`Negative Margin Alert`) | Kích hoạt cảnh báo đỏ trong thời hạn 04 giờ làm việc. `AM` chủ trì đàm phán phụ lục tăng phí dịch vụ theo Job `AM-23` và `AM-30`; chuẩn hóa quy trình xử lý nội bộ. |

---

## KHUÔN BIỂU MẪU THEO DÕI GIÁ THÀNH DỊCH VỤ VÀ BIÊN LỢI NHUẬN (GC-01)

### Bảng 1. Sổ chi tiết tập hợp chi phí và giá thành theo nhiệm vụ và kết quả bàn giao (Tài khoản 154)

| Cột | Tên trường dữ liệu | Quy cách và hướng dẫn ghi nhận |
| --- | --- | --- |
| 1 | Mã dòng chi phí | Mã định danh: `CP-[Năm]-[Số thứ tự]` |
| 2 | Mã khách hàng (`Client ID`) | Mã định danh khách hàng theo [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] |
| 3 | Tên khách hàng | Tên doanh nghiệp khách hàng |
| 4 | Mã hợp đồng / Đơn hàng | Mã hợp đồng dịch vụ liên kết trên [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]] |
| 5 | Mã công việc (`Task ID`) | Mã định danh nhiệm vụ trên [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] |
| 6 | Mã Job nghiệp vụ | Một trong 203 mã Job tại [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] (ví dụ: `KT-04`, `LIC-02`...) |
| 7 | Mã kết quả bàn giao (`Deliverable ID`) | Mã kết quả bàn giao theo [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu\|OBK-SOP-PL-G]] (ví dụ: `DELIV-01`, `DELIV-02`...) |
| 8 | Mã gói dịch vụ liên kết | Mã gói dịch vụ theo [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] (ví dụ: `KT-GOI-01`...) |
| 9 | Chuyên viên thực hiện | Họ tên và chức danh chuyên môn (`CV-LIC`, `KTV`, `CV-LD`...) |
| 10 | Ngạch bậc chuyên môn | Cấp bậc chuyên môn: `P1`, `P2`, `P3`, `P4`, `M1` |
| 11 | Đơn giá lương giờ đầy đủ (đồng/giờ) | Đơn giá chi phí lương giờ đầy đủ gồm bảo hiểm theo bảng chuẩn |
| 12 | Số giờ làm việc thực tế (giờ) | Số giờ lao động chuyên môn ghi nhận từ timesheet công việc |
| 13 | Chi phí nhân công trực tiếp (đồng) | Cột 13 = Cột 11 $\times$ Cột 12 |
| 14 | Chi phí dịch vụ mua ngoài trực tiếp (đồng) | Tổng chi phí bưu điện, lệ phí nhà nước, chữ ký số mua ngoài |
| 15 | Chi phí quản lý chung phân bổ (đồng) | Cột 15 = Cột 13 $\times$ 15% |
| 16 | Tổng giá thành nhiệm vụ (đồng) | Cột 16 = Cột 13 + Cột 14 + Cột 15 (tập hợp bên Nợ TK 154) |
| 17 | Trạng thái hoàn thành | Một trong các trạng thái: `Đang thực hiện`, `Đã hoàn thành bàn giao` |
| 18 | Ngày hoàn thành nghiệm thu | Ngày ký biên bản bàn giao hoặc ngày phân bổ định kỳ |

### Bảng 2. Bảng tổng hợp giá thành dịch vụ hoàn thành theo gói dịch vụ (Kết chuyển Tài khoản 632)

| Cột | Tên trường dữ liệu | Quy cách và hướng dẫn ghi nhận |
| --- | --- | --- |
| 1 | Mã gói dịch vụ | Mã gói theo [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] |
| 2 | Tên gói dịch vụ | Tên dịch vụ: Kế toán trọn gói, Thành lập doanh nghiệp, Chữ ký số |
| 3 | Kỳ kế toán báo cáo | Tháng/Quý/Năm phát sinh ghi nhận doanh thu và giá vốn |
| 4 | Tổng số nhiệm vụ hoàn thành | Số lượng nhiệm vụ đã hoàn thành trong kỳ của gói dịch vụ |
| 5 | Tổng chi phí nhân công trực tiếp | Tổng cộng Cột 13 của các nhiệm vụ thuộc gói dịch vụ |
| 6 | Tổng chi phí dịch vụ mua ngoài | Tổng cộng Cột 14 của các nhiệm vụ thuộc gói dịch vụ |
| 7 | Tổng chi phí quản lý chung phân bổ | Tổng cộng Cột 15 của các nhiệm vụ thuộc gói dịch vụ |
| 8 | Tổng giá thành dịch vụ hoàn thành | Cột 8 = Cột 5 + Cột 6 + Cột 7 (bút toán Nợ TK 632 / Có TK 154) |
| 9 | Doanh thu thuần của gói dịch vụ | Doanh thu thuần TK 511 tương ứng từ [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]] |
| 10 | Lợi nhuận gộp theo gói | Cột 10 = Cột 9 - Cột 8 |
| 11 | Tỷ lệ biên lợi nhuận gộp (%) | Cột 11 = (Cột 10 / Cột 9) $\times$ 100% |

### Bảng 3. Bảng phân tích biên lợi nhuận, điểm hòa vốn và cảnh báo theo khách hàng

| Cột | Tên trường dữ liệu | Quy cách và hướng dẫn ghi nhận |
| --- | --- | --- |
| 1 | Mã khách hàng (`Client ID`) | Khớp chính xác với [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] |
| 2 | Tên doanh nghiệp khách hàng | Tên đầy đủ trên Giấy chứng nhận đăng ký doanh nghiệp |
| 3 | Chuyên viên quản lý khách hàng (`AM`) | Họ tên chuyên viên sở hữu quan hệ khách hàng |
| 4 | Doanh thu thuần trong kỳ (đồng) | Doanh thu thuần TK 511 ghi nhận từ [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]] |
| 5 | Tổng giá vốn dịch vụ TK 632 (đồng) | Tổng giá thành dịch vụ hoàn thành kết chuyển sang TK 632 |
| 6 | Lợi nhuận gộp (đồng) | Cột 6 = Cột 4 - Cột 5 |
| 7 | Tỷ lệ biên lợi nhuận gộp (%) | Cột 7 = (Cột 6 / Cột 4) $\times$ 100% |
| 8 | Doanh thu hòa vốn tối thiểu (đồng) | Doanh thu tối thiểu cần thiết để không bị lỗ gộp |
| 9 | Giới hạn số giờ làm việc hòa vốn (giờ) | Số giờ tối đa chuyên viên được phép làm trước khi âm lợi nhuận |
| 10 | Số giờ làm việc thực tế (giờ) | Tổng số giờ chuyên viên thực tế đã tiêu hao trong kỳ |
| 11 | Mức cảnh báo biên lợi nhuận | Đánh dấu: `Mức Xanh (An toàn)`, `Mức Vàng (Biên mỏng)`, `Mức Đỏ (Âm lợi nhuận)` |
| 12 | Hành động xử lý đề xuất | Biện pháp điều chỉnh: Tăng phí dịch vụ, Rà soát phạm vi, Tối ưu quy trình |

---

## QUY TRÌNH 4 BƯỚC TÍNH GIÁ THÀNH VÀ KIỂM SOÁT LỢI NHUẬN DỊCH VỤ

```
[1. Thu thập dữ liệu giờ công & chi phí] -> [2. Chạy tính toán 4 cấp độ bằng script] -> [3. Kiểm soát hòa vốn & Cảnh báo] -> [4. Kết chuyển kế toán TK 632]
```

### Bước 1. Thu thập dữ liệu giờ công và chi phí mua ngoài trực tiếp

1. Định kỳ ngày 25 hằng tháng hoặc khi kết thúc hồ sơ dịch vụ, `KTV` trích xuất dữ liệu số giờ làm việc thực tế của từng nhiệm vụ từ [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi|CV-01]].
2. Tập hợp hóa đơn và chứng từ chi phí dịch vụ mua ngoài trực tiếp:
   - Chi phí token và chứng thư số từ Sổ [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx|CK-02]].
   - Chi phí bưu chính chuyển phát từ Sổ giao nhận [[TL-01_So_giao_nhan_tai_lieu_va_buu_pham|TL-01]].
   - Lệ phí nhà nước đã nộp theo biên lai, giấy nộp tiền vào ngân sách nhà nước.
3. Đối chiếu bậc lương của từng chuyên viên thực hiện theo [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan|LU-01]].

### Bước 2. Tính toán giá thành 4 cấp độ bằng script tự động

1. `KTV` nhập dữ liệu vào script tính toán tự động hệ thống tính toán tự động giá thành dịch vụ.
2. Script tự động thực hiện:
   - Áp dụng đơn giá lương giờ chuẩn theo từng bậc chuyên viên;
   - Tính toán chi phí nhân công trực tiếp, chi phí mua ngoài và chi phí quản lý chung phân bổ;
   - Tổng hợp giá thành theo 04 cấp độ: Task, Kết quả bàn giao, Gói dịch vụ và Khách hàng;
   - Tính toán doanh thu hòa vốn và số giờ làm việc hòa vốn tối đa cho từng khách hàng.

### Bước 3. Kiểm soát điểm hòa vốn và phát hiện cảnh báo biên lợi nhuận

1. `KTV` rà soát danh sách các khách hàng rơi vào `Mức Vàng` hoặc `Mức Đỏ`.
2. Đối với các hợp đồng âm lợi nhuận (`Mức Đỏ`):
   - `KTV` gửi thông báo cho `TL` bộ phận chuyên môn và `AM` trong thời hạn 04 giờ làm việc.
   - `TL` kiểm tra nguyên nhân vượt giờ làm việc (do hồ sơ phức tạp, chuyên viên mới làm quen việc, hay do khách hàng gửi chứng từ thiếu).
   - Nếu nguyên nhân do số lượng chứng từ hoặc nghiệp vụ thực tế của khách hàng vượt quá định mức của gói hợp đồng quy định tại [[00_Danh_muc_dich_vu_va_bang_gia|OBK-DM-00]], `AM` phát hành thông báo đề xuất điều chỉnh gói dịch vụ theo Job `AM-23` và `AM-30`.

### Bước 4. Lập chứng từ kết chuyển giá vốn kế toán

1. Căn cứ bảng kết quả tính giá thành dịch vụ hoàn thành đã được `KTT` kiểm tra, `KTV` lập Chứng từ kết chuyển chi phí dịch vụ:
   - Bút toán tập hợp chi phí trong kỳ:
     * Nợ TK 154 (chi tiết theo từng hợp đồng, khách hàng, gói dịch vụ).
     * Có TK 334 (tiền lương chuyên viên trực tiếp).
     * Có TK 338 (các khoản đóng bảo hiểm theo lương 21,5%).
     * Có TK 112, 331 (chi phí dịch vụ mua ngoài trực tiếp).
     * Có TK 242, 214, 112 (chi phí quản lý chung phân bổ).
   - Bút toán kết chuyển giá vốn dịch vụ hoàn thành nghiệm thu trong kỳ:
     * Nợ TK 632 (Giá vốn hàng bán).
     * Có TK 154 (Chi phí sản xuất, kinh doanh dở dang).
2. Chi phí của các nhiệm vụ, hồ sơ chưa hoàn thành hoặc chưa đến kỳ nghiệm thu được giữ lại số dư bên Nợ Tài khoản 154 (chi phí dở dang cuối kỳ).
3. Bảng GC-01 được lưu trữ kèm hồ sơ quyết toán tháng và đối chiếu với Báo cáo tài chính nội bộ [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh|TC-01]].

---

## KÝ XÁC NHẬN

| Kế toán viên chi phí (`KTV`) | Kế toán trưởng (`KTT`) | Giám đốc điều hành cấp cao (`CEO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Trong hoạt động cung cấp dịch vụ doanh nghiệp (kế toán, pháp lý, giấy phép), chi phí nhân sự chuyên môn và chi phí mua ngoài trực tiếp chiếm tỷ trọng lớn trong tổng chi phí hoạt động. Việc không tính toán giá thành chi tiết đến từng nhiệm vụ công việc dẫn đến các rủi ro quản trị:
1. Không xác định được dịch vụ nào sinh lời, dịch vụ nào đang chịu lỗ, dẫn đến việc duy trì các hợp đồng có biên lợi nhuận âm mà không có biện pháp điều chỉnh.
2. Vi phạm nguyên tắc phù hợp giữa doanh thu và chi phí trong kế toán; không có căn cứ định lượng để hạch toán giá vốn vào Tài khoản 632 và theo dõi chi phí dở dang trên Tài khoản 154 theo đúng quy định tại Thông tư 99/2025/TT-BTC.
3. Không kiểm soát được tình trạng hao phí thời gian lao động của chuyên viên (Scope Creep); thiếu cơ sở định lượng để bộ phận thương mại thương thảo điều chỉnh giá khi khối lượng công việc thực tế vượt thỏa thuận ban đầu.

Phiếu GC-01 thiết lập khuôn khổ tính toán minh bạch, khách quan bằng công thức toán học và script tự động, kết nối trực tiếp dữ liệu giữa điều hành tác nghiệp ([[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi|CV-01]]), chi phí tiền lương ([[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan|LU-01]]), doanh thu ([[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo|DT-02]]) và quản trị quan hệ khách hàng ([[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm|KH-01]]).

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quy chế hạch toán kế toán | [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] | Quy định tập hợp chi phí Tài khoản 154 và kết chuyển giá vốn Tài khoản 632 |
| Quy chế tài chính nội bộ | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] | Chỉ tiêu tỷ lệ chi phí nhân sự PCR và mục tiêu biên lợi nhuận gộp |
| Bảng theo dõi công việc | [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] | Dữ liệu số giờ làm việc thực tế theo 203 mã Job |
| Bảng thanh toán tiền lương | [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]] | Đơn giá chi phí lương giờ và các khoản trích theo lương theo từng ngạch bậc |
| Sổ theo dõi doanh thu | [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]] | Doanh thu thuần dịch vụ phân bổ trong kỳ của từng khách hàng |
| Sổ quản trị khách hàng | [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] | Thông tin hợp đồng, phân loại khách hàng và đánh giá sức khỏe tài khoản |
| Bảng tra cứu SLA 203 Job | [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] | Danh mục 203 mã Job chuẩn hóa toàn công ty |
| Mốc công việc và đầu ra | [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu\|OBK-SOP-PL-G]] | Danh mục kết quả bàn giao chuẩn hóa theo từng gói dịch vụ |
| Danh mục dịch vụ và bảng giá | [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] | Khung giá dịch vụ và hạn mức khối lượng nghiệp vụ chuẩn |

### 3. Căn cứ pháp lý

| Văn bản | Điều khoản | Nội dung áp dụng |
| --- | --- | --- |
| Luật Kế toán số 88/2015/QH13 (sửa đổi bởi Luật số 56/2024/QH15) | Điều 6, Điều 12 | Nguyên tắc kế toán dồn tích và nguyên tắc phù hợp giữa doanh thu và chi phí |
| Thông tư 99/2025/TT-BTC | Phụ lục II | Phương pháp kế toán Tài khoản 154 Chi phí sản xuất, kinh doanh dở dang |
| Thông tư 99/2025/TT-BTC | Phụ lục II | Phương pháp kế toán Tài khoản 632 Giá vốn hàng bán |
| Nghị định 145/2020/NĐ-CP | Điều 54 | Phương pháp tính tiền lương giờ làm việc làm căn cứ xác định chi phí lao động |
| Luật Bảo hiểm xã hội số 41/2024/QH15 | Điều 33 | Tỷ lệ trích đóng các quỹ bảo hiểm bắt buộc của người sử dụng lao động |
| Luật Thuế giá trị gia tăng số 48/2024/QH15 | Điều 5 khoản 21 | Quy định phần mềm thuộc đối tượng không chịu thuế giá trị gia tăng |
| Nghị định 252/2026/NĐ-CP và Thông tư 89/2026/TT-BTC | Toàn văn | Nghĩa vụ khai và nộp thay thuế nhà thầu đối với dịch vụ đối tác quốc tế |
| Thông tư 20/2026/TT-BTC | Điều 7 khoản 3 | Công thức quy đổi giá Net sang doanh thu tính thuế nhà thầu Gross |
| Nghị định 253/2026/NĐ-CP | Điều 50 khoản 2 | Khấu trừ thuế thu nhập cá nhân 10% tại nguồn đối với hoa hồng môi giới từ 05 triệu đồng |
| Nghị quyết số 136/2024/QH15 | Điều 14 khoản 1 | Miễn thuế TNDN 05 năm từ khi có lãi cho Doanh nghiệp Khởi nghiệp sáng tạo tại TP Đà Nẵng |
| Nghị quyết số 53/2024/NQ-HĐND và Nghị quyết số 24/2026/NQ-HĐND | Toàn văn | Cơ chế chính sách đặc thù khởi nghiệp sáng tạo thành phố Đà Nẵng |
| Văn bản xác nhận Sở KH&CN Đà Nẵng ngày 29/12/2025 | Toàn văn | Xác nhận Công ty Cổ phần OBACKER (MST 0402298185) là Doanh nghiệp Khởi nghiệp sáng tạo |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.1.0.0 | Ban hành bản đầu. |
