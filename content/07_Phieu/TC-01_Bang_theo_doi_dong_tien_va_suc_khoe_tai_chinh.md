---
title: "PHIẾU TC-01. BẢNG THEO DÕI DÒNG TIỀN VÀ SỨC KHỎE TÀI CHÍNH"
code: "TC-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.1.1"
status: "đang áp dụng"
draft_date: "04/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - TC-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU TC-01. BẢNG THEO DÕI DÒNG TIỀN VÀ SỨC KHỎE TÀI CHÍNH

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | TC-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.1, đang áp dụng |
| Ngày biên soạn | 04/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | TC-01 |
| **Màu** | VÀNG, bảng theo dõi cảnh báo tài chính và dòng tiền |
| **Ai dùng** | `KTV`, `KTT`, `COO`, `CEO` |
| **Sinh từ** | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 6, Điều 7, Điều 22, Điều 34;<br>[[OBK-SOP-NB-03_Quan_ly_tien\|OBK-SOP-NB-03]] mục 5.6;<br>[[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]];<br>[[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi dòng tiền và sức khỏe tài chính là công cụ quản trị thanh khoản và giám sát hiệu quả vận hành cốt lõi của oBacker. Bảng kết nối dữ liệu dòng tiền thực tế giữa ba chu trình: thu tiền khách hàng [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu|OBK-SOP-NB-02]], mua sắm thanh toán [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]] và quản lý ngân quỹ [[OBK-SOP-NB-03_Quan_ly_tien|OBK-SOP-NB-03]].

Bảng được `KTV` lập và cập nhật định kỳ:
1. **Theo dõi tuần:** Cập nhật số dư khả dụng thực tế tại các tài khoản ngân hàng và tồn quỹ tiền mặt vào ngày làm việc cuối tuần (thứ Sáu);
2. **Tổng hợp tháng:** Lập bảng tổng kết dòng tiền và đo lường 05 chỉ số tài chính cốt lõi trong thời hạn 05 ngày làm việc đầu tháng kế tiếp;
3. **Cảnh báo đột xuất:** Báo cáo ngay `KTT` và `CEO` khi chỉ số dự phòng tiền mặt (`Runway`) giảm xuống ít hơn 03 tháng chi phí hoạt động.

## CẤU TRÚC THEO DÕI DÒNG TIỀN THỰC TẾ
 
Dòng tiền thực tế được theo dõi trên cơ sở dòng tiền thực thu và thực chi (Cash Inflow - Cash Outflow), tuân thủ nguyên tắc **Nguồn dữ liệu tài chính duy nhất (Single Source of Financial Truth)**: 100% số liệu dòng tiền và số dư bắt buộc phải đọc và đối khớp trực tiếp với Hệ thống Sổ cái và Sổ chi tiết tài khoản kế toán theo Thông tư 99/2025/TT-BTC:
 
| Mã dòng | Hạng mục dòng tiền | Nguồn tài khoản kế toán đối chiếu | Kỳ trước thực hiện | Kỳ này kế hoạch | Kỳ này thực tế | Chênh lệch thực tế với kế hoạch |
| --- | --- | --- | --- | --- | --- | --- |
| **I** | **DÒNG TIỀN VÀO THỰC TẾ (CASH INFLOW)** | | | | | |
| I.1 | Thu phí dịch vụ kế toán và thuế định kỳ | Sổ chi tiết TK 131, TK 3387, TK 511 và Báo Có TK 112 | | | | |
| I.2 | Thu dịch vụ thành lập doanh nghiệp và giấy phép | Sổ chi tiết TK 131, TK 511 và Báo Có TK 112, Phiếu thu TK 111 | | | | |
| I.3 | Thu dịch vụ tư vấn doanh nghiệp và dịch vụ khác | Sổ chi tiết TK 131, TK 511 và Báo Có TK 112 | | | | |
| I.4 | Thu hồi nợ khó đòi và thu nhập hoạt động tài chính | Sổ chi tiết TK 1388, TK 515, TK 711 và Báo Có TK 112 | | | | |
| **T1** | **TỔNG DÒNG TIỀN VÀO TRONG KỲ** | `T1 = I.1 + I.2 + I.3 + I.4` (Khớp Tổng phát sinh Nợ TK 111, 112) | | | | |
| **II** | **DÒNG TIỀN RA THỰC TẾ (CASH OUTFLOW)** | | | | | |
| II.1 | Chi lương nhân sự và các khoản trích theo lương | Bảng lương [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]], Sổ chi tiết TK 334, TK 338 (3383, 3384, 3386), Báo Nợ TK 112 | | | | |
| II.2 | Chi thuê văn phòng và dịch vụ tiện ích văn phòng | Hợp đồng thuê mặt bằng, Sổ chi tiết TK 6427, Báo Nợ TK 112 | | | | |
| II.3 | Chi thuê bao phần mềm và hạ tầng công nghệ | Sổ theo dõi PM-01, Sổ chi tiết TK 242, TK 642, Báo Nợ TK 112 | | | | |
| II.4 | Chi đối tác cung ứng (chữ ký số, hóa đơn, công chứng) | Sổ nhà cung cấp NC-01, Sổ chi tiết TK 331, Báo Nợ TK 112 | | | | |
| II.5 | Chi hoa hồng đối tác giới thiệu khách hàng | Báo cáo HH-02, Sổ chi tiết TK 641, TK 3335 (khấu trừ TNCN 10%), Báo Nợ TK 112 | | | | |
| II.6 | Chi tiếp khách, hành chính và vật tư tiêu hao | Đề nghị thanh toán theo OBK-SOP-NB-01, Sổ chi tiết TK 642, Báo Nợ TK 112 | | | | |
| II.7 | Chi nộp thuế và nghĩa vụ ngân sách Nhà nước | Tờ khai thuế, Sổ chi tiết TK 333 (33311, 3334, 3335) và Giấy nộp tiền NSNN | | | | |
| **T2** | **TỔNG DÒNG TIỀN RA TRONG KỲ** | `T2 = II.1 + ... + II.7` | | | | |
| **III** | **DÒNG TIỀN THUẦN TRONG KỲ (NET CASH FLOW)** | `NCF = T1 - T2` | | | | |
| **IV** | **SỐ DƯ TIỀN VÀ TƯƠNG ĐƯƠNG TIỀN** | | | | | |
| IV.1 | Số dư tồn quỹ tiền mặt tại các văn phòng | Biên bản kiểm kê quỹ tiền mặt KQ-01 | | | | |
| IV.2 | Số dư tài khoản chính tại Vietcombank | Bảng đối chiếu ngân hàng NH-01 (Tài khoản thanh toán chính) | | | | |
| IV.3 | Số dư tài khoản chi lương tại Techcombank | Bảng đối chiếu ngân hàng NH-01 (Tài khoản chi lương và thuế) | | | | |
| IV.4 | Số dư tài khoản dự phòng tại ACB | Bảng đối chiếu ngân hàng NH-01 (Tài khoản dự phòng) | | | | |
| **T4** | **TỔNG SỐ DƯ TIỀN KHẢ DỤNG CUỐI KỲ** | `T4 = IV.1 + IV.2 + IV.3 + IV.4` | | | | |

## BẢNG 5 CHỈ SỐ SỨC KHỎE TÀI CHÍNH VÀ VẬN HÀNH CỐT LÕI

Năm chỉ số này phản ánh năng lực tạo tiền, hiệu suất vận hành, tính an toàn thanh khoản và kỷ luật chi tiêu của oBacker:

| STT | Tên chỉ số | Ký hiệu | Công thức tính toán | Mục tiêu kiểm soát | Ý nghĩa quản trị và ngưỡng cảnh báo |
| --- | --- | --- | --- | --- | --- |
| 1 | Doanh thu định kỳ hằng tháng và Hợp đồng mới | `MRR` và `New Bookings` | `MRR = Tổng doanh thu từ hợp đồng dịch vụ định kỳ đang hiệu lực`<br>`New Bookings = Tổng giá trị ký mới hợp đồng một lần` | Tỷ trọng MRR đạt từ 60% tổng doanh thu trở lên | Phản ánh mức độ bền vững của nguồn thu. Nếu tỷ trọng MRR ít hơn 50%, doanh nghiệp phụ thuộc nhiều vào bán mới, dòng tiền có độ biến động cao. |
| 2 | Tỷ lệ thu hồi công nợ đúng hạn | `CR` (Collection Rate) | `CR = (Số tiền công nợ thu hồi đúng hạn / Tổng nợ phải thu đến hạn trong kỳ) * 100%` | Đạt từ 90% trở lên | Đo lường hiệu quả thu hồi nợ và kỷ luật thanh toán của khách hàng. Nếu CR ít hơn 85%, kích hoạt thang nhắc nợ theo phiếu CN-01. |
| 3 | Tỷ lệ chi phí nhân sự trên doanh thu | `PCR` (Personnel Cost Ratio) | `PCR = (Tổng chi phí nhân sự gồm lương, bảo hiểm, thưởng / Doanh thu thuần) * 100%` | Không quá 45% | Kiểm soát chi phí lớn nhất của công ty dịch vụ. Nếu PCR vượt quá 45%, Ban điều hành phải dừng bổ sung nhân sự mới và rà soát định biên. |
| 4 | Thời gian dự phòng tiền mặt | `Runway` | `Runway = Tổng số dư tiền khả dụng T4 / Chi phí hoạt động bình quân 01 tháng (Burn Rate)` | Duy trì từ 03 tháng trở lên theo Điều 34 [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] | Số tháng công ty tiếp tục duy trì hoạt động bình thường nếu nguồn thu bị gián đoạn. Ngưỡng đỏ khi Runway ít hơn 03 tháng. |
| 5 | Tỷ suất lợi nhuận gộp dịch vụ | `GM` (Gross Margin) | `GM = [(Doanh thu thuần - Giá vốn trực tiếp) / Doanh thu thuần] * 100%` | Đạt từ 50% trở lên | Đánh giá hiệu quả kinh tế của danh mục dịch vụ sau khi trừ chi phí nhân sự thực hiện trực tiếp và chi phí công cụ đối tác. |

### Thang phân cấp cảnh báo sức khỏe tài chính

Ban điều hành áp dụng 03 mức cảnh báo để kích hoạt hành động tương ứng:

```
[MỨC XANH - AN TOÀN]
- Điều kiện: Runway từ 04 tháng trở lên; CR từ 90% trở lên; PCR không quá 40%; GM từ 55% trở lên.
- Hành động: Duy trì vận hành bình thường, triển khai các kế hoạch đầu tư công nghệ theo ngân sách năm.

[MỨC VÀNG - CẢNH BÁO]
- Điều kiện: Runway từ 03 tháng đến dưới 04 tháng; hoặc CR từ 80% đến dưới 90%; hoặc PCR từ 41% đến 45%.
- Hành động: KTT rà soát các khoản chi mua sắm mới; siết chặt tạm ứng nội bộ; AM đôn đốc thu hồi nợ quá hạn.

[MỨC ĐỎ - NGUY CƠ MẤT THANH KHOẢN]
- Điều kiện: Runway ít hơn 03 tháng; hoặc CR ít hơn 80%; hoặc PCR vượt quá 45%.
- Hành động: KTT lập báo cáo khẩn cấp trình BOM và HĐQT trong thời hạn 24 giờ.
             Dừng toàn bộ chi phí mua sắm tài sản, dừng tuyển dụng mới ngoài kế hoạch cấp bách.
             Áp dụng biện pháp tạm dừng cung cấp dịch vụ đối với khách hàng nợ quá hạn trên 30 ngày.
```

## BẢNG DỰ BÁO DÒNG TIỀN 03 THÁNG CUỐN CHIẾU

Theo OBK-SOP-NB-03 mục 5.6, `KTV` lập bảng dự báo dòng tiền 03 tháng cuốn chiếu vào ngày 05 hằng tháng:

| Hạng mục dự báo | Tháng M+1 | Tháng M+2 | Tháng M+3 | Ghi chú nguồn dự báo |
| --- | --- | --- | --- | --- |
| **1. Dự kiến tiền thu về** | | | | |
| Thu từ hợp đồng định kỳ ổn định | | | | Danh sách khách hàng định kỳ đang chăm sóc |
| Thu hồi nợ phải thu đến hạn | | | | Bảng tuổi nợ CN-01 mục 6.5.1 |
| Thu từ hợp đồng mới dự kiến ký kết | | | | Báo cáo cơ hội bán hàng của bộ phận Thương mại |
| **Tổng tiền dự kiến thu (A)** | | | | |
| **2. Dự kiến tiền chi ra** | | | | |
| Chi tiền lương và bảo hiểm xã hội | | | | Bảng lương chuẩn [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]] kỳ gần nhất nhân biến động |
| Chi văn phòng và vận hành cố định | | | | Hợp đồng thuê nhà và chi phí định kỳ PM-01 |
| Chi đối tác cung ứng và hoa hồng | | | | Dự kiến theo doanh số bán hàng mới |
| Thuế và các nghĩa vụ ngân sách | | | | Lịch nộp thuế môn bài, thuế GTGT, TNCN, TNDN |
| **Tổng tiền dự kiến chi (B)** | | | | |
| **3. Cân đối dòng tiền dự kiến** | | | | |
| Chênh lệch thu - chi dự kiến (`A - B`) | | | | |
| Số dư tiền đầu kỳ dự kiến | | | | Bằng số dư cuối kỳ trước chuyển sang |
| Số dư tiền cuối kỳ dự kiến | | | | Số dư đầu kỳ cộng Chênh lệch thu - chi |
| **Số tháng dự phòng tiền mặt (Runway dự phóng)** | | | | So sánh với ngưỡng tối thiểu 03 tháng |

## CÁC BƯỚC THỰC HIỆN VÀ ĐIỀU PHỐI DÒNG TIỀN

```
[ ]  1. THU THẬP VÀ ĐỐI SOÁT DỮ LIỆU ĐẦU VÀO (NGÀY 01 - 03 HẰNG THÁNG)
        - KTV thu thập số liệu thu tiền thực tế từ sổ kế toán tiền gửi và sổ chi tiết công nợ CN-01.
        - Thu thập số liệu chi tiêu thực tế từ các đề nghị thanh toán OBK-SOP-NB-01 đã chi trong tháng.
        - Lấy số liệu tiền lương và trích theo lương từ Bảng thanh toán tiền lương [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan|LU-01]] đã duyệt.
        - Khóa số dư tiền mặt theo biên bản KQ-01 và số dư tiền gửi ngân hàng theo biên bản NH-01.

[ ]  2. TÍNH TOÁN CÁC CHỈ SỐ VẬN HÀNH VÀ SỨC KHỎE TÀI CHÍNH (NGÀY 04 HẰNG THÁNG)
        - Tính toán chính xác 05 chỉ số: MRR/New Bookings, CR, PCR, Runway và Gross Margin.
        - So sánh từng chỉ số với mục tiêu kiểm soát và phân loại theo thang cảnh báo Xanh - Vàng - Đỏ.
        - Lập phân tích nguyên nhân đối với các chỉ số rơi vào mức Vàng hoặc mức Đỏ.

[ ]  3. XÂY DỰNG DỰ BÁO DÒNG TIỀN 03 THÁNG CUỐN CHIẾU (NGÀY 04 HẰNG THÁNG)
        - Kết nối dữ liệu nợ phải thu từ bảng tuổi nợ CN-01 và các khoản cam kết chi từ NB-01.
        - Không làm tròn số liệu để khớp ngân sách; phản ánh trung thực chênh lệch thực tế.
        - Tính toán Runway dự phóng cho 03 tháng tiếp theo.

[ ]  4. SOÁT XÉT VÀ PHÊ DUYỆT BÁO CÁO (NGÀY 05 HẰNG THÁNG)
        - KTT soát xét toàn bộ số liệu dòng tiền, kiểm tra tính cân đối và xác thực các điểm cảnh báo.
        - KTT ký xác nhận và trình Tổng giám đốc (CEO) phê duyệt báo cáo sức khỏe tài chính.
        - Báo cáo kết quả bằng văn bản cho Ban điều hành (BOM) và Hội đồng quản trị (HĐQT).
```

## ĐIỂM KIỂM SOÁT BẮT BUỘC

1. **Điểm kiểm soát KS-TC-01 (Kiểm soát mức dự phòng tiền mặt tối thiểu):** Tổng số dư tiền mặt và tiền gửi ngân hàng khả dụng phải bảo đảm chi trả hoạt động tối thiểu 03 tháng. Khi Runway giảm xuống ít hơn 03 tháng, `KTT` phải kích hoạt cảnh báo Mức Đỏ ngay trong ngày làm việc.
2. **Điểm kiểm soát KS-TC-02 (Kiểm soát đối chiếu số liệu tiền thực tế):** Số liệu tồn quỹ tiền mặt và số dư tiền gửi trong Bảng TC-01 phải khớp chính xác 100% với Biên bản kiểm kê quỹ KQ-01 và Biên bản đối chiếu ngân hàng NH-01. Mọi chênh lệch chưa rõ nguyên nhân phải xử lý theo quy trình sự cố chênh lệch tại OBK-SOP-NB-03 mục 5.7.
3. **Điểm kiểm soát KS-TC-03 (Kiểm soát tỷ lệ chi phí nhân sự):** Tỷ lệ chi phí nhân sự trên doanh thu (`PCR`) không được vượt quá mức tối đa 45%. Trường hợp tỷ lệ này vượt 45% trong 02 tháng liên tiếp, Ban điều hành bắt buộc phải ban hành kế hoạch điều chỉnh định biên nhân sự.
4. **Điểm kiểm soát KS-TC-04 (Kiểm soát tỷ lệ thu hồi công nợ):** Tỷ lệ thu hồi nợ đúng hạn (`CR`) phải đạt từ 90% trở lên. Khi tỷ lệ thu hồi đạt ít hơn 90%, bộ phận `AM` phải giải trình bằng văn bản đối với từng khoản nợ quá hạn và thực hiện biện pháp thu hồi theo Sổ CN-01.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Bảng TC-01 được lưu trữ tại hồ sơ quản trị tài chính của phòng Kế toán. Bản điện tử được chuyển giao định kỳ trước ngày 05 hằng tháng cho Tổng giám đốc (`CEO`), Giám đốc vận hành (`COO`) và gửi Hội đồng quản trị (`HĐQT`) phục vụ công tác điều hành chiến lược kinh doanh.

## KÝ XÁC NHẬN

| Kế toán viên lập biểu (`KTV`) | Kế toán trưởng kiểm soát (`KTT`) | Tổng giám đốc phê duyệt (`CEO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Đối với doanh nghiệp cung cấp dịch vụ như oBacker, dòng tiền là điều kiện cốt lõi để duy trì hoạt động liên tục. Doanh thu trên hợp đồng hoặc lợi nhuận kế toán trên sổ sách không bảo đảm doanh nghiệp có đủ tiền mặt thanh toán lương, chi trả tiền thuê mặt bằng, duy trì hạ tầng công nghệ và đáp ứng nghĩa vụ thuế đúng hạn. Bảng TC-01 thiết lập hệ thống quan sát đa chiều về dòng tiền thực tế, đồng thời kiểm soát 05 chỉ số tài chính trọng yếu để Ban điều hành phát hiện sớm rủi ro thanh khoản và chủ động điều phối nguồn lực.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.1 | Sửa từ ngữ ở bảng theo dõi dòng tiền. |
