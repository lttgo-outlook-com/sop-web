---
title: "PHIẾU LU-01. BẢNG THEO DÕI VÀ THANH TOÁN TIỀN LƯƠNG CHUẨN"
code: "LU-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.2.1.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - LU-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU LU-01. BẢNG THEO DÕI VÀ THANH TOÁN TIỀN LƯƠNG CHUẨN

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | LU-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.2.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | LU-01 |
| **Màu** | ĐỎ, bảng thanh toán tiền lương và nghĩa vụ bảo hiểm, thuế |
| **Ai dùng** | `HR`, `KTV`, `KTT`, `TGĐ`, `NTT` |
| **Sinh từ** | [[01_Khung_nhan_su_tong_hop\|OBK-QCNS-01]];<br>[[02_Chuong_trinh_tang_luong_dinh_ky\|OBK-QCNS-02]];<br>[[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]];<br>[[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]];<br>Bảng thanh toán tiền lương theo mẫu số 01-LĐTL Phụ lục I Thông tư 99/2025/TT-BTC;<br>Bảng chấm công `BM-09`, biểu mẫu tự thiết kế riêng tại [[PL_BM_Bieu_mau_mua_sam_thanh_toan\|OBK-SOP-NB-PL-BM]], làm cơ sở lập bảng 01-LĐTL theo [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] mục 6.6b |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi và thanh toán tiền lương chuẩn (Payroll Master Register) là chứng từ thanh toán tiền lương và nghĩa vụ lao động chính thức của oBacker. Bảng được lập hằng tháng để tổng hợp dữ liệu chấm công, tính toán thu nhập thời gian thực tế, tiền làm thêm giờ (OT), phụ cấp lương, tiền thưởng hiệu suất KPI theo OBK-QCNS-08, thưởng doanh thu, trích nộp bảo hiểm xã hội bắt buộc và tính toán khấu trừ thuế thu nhập cá nhân theo quy định pháp luật.

Bảng được vận hành theo lịch kỳ chuẩn hằng tháng:
1. **Ngày 22 hằng tháng:** `HR` chuyển giao Bảng chấm công `BM-09` đã có chữ ký phê duyệt của `CEO` cho `KTV`;
2. **Từ ngày 23 đến ngày 25 hằng tháng:** `KTV` tính lương, bóc tách thu nhập làm thêm giờ miễn thuế thu nhập cá nhân theo Job NB-36, khấu trừ tạm ứng và lập Bảng thanh toán tiền lương mẫu số 01-LĐTL;
3. **Trước ngày 28 hằng tháng:** `KTT` soát xét và ký xác nhận chức danh Kế toán trưởng; `TGĐ` phê duyệt bảng lương theo Job NB-37;
4. **Ngày làm việc cuối cùng của tháng:** `NTT` tạo lệnh và `TGĐ` hoặc `Chủ tịch HĐQT` xác nhận lệnh chuyển khoản tiền lương vào tài khoản ngân hàng chính chủ của người lao động. Tiền lương chi trả là tiền lương và các chế độ của chính tháng đó; nếu ngày cuối tháng trùng ngày nghỉ thì chi trả vào ngày làm việc cuối cùng trước đó.

## CẤU TRÚC BẢNG THANH TOÁN TIỀN LƯƠNG MẪU 01-LĐTL

Bảng thanh toán tiền lương theo mẫu số 01-LĐTL Phụ lục I Thông tư 99/2025/TT-BTC gồm 07 phân nhóm trường dữ liệu chuẩn hóa. Bảng chấm công `BM-09` là một biểu mẫu riêng, làm đầu vào của bảng này, xem mục BM-09 tại OBK-SOP-NB-PL-BM; cấu trúc `BM-09` không nằm trong phiếu này.

### Nhóm I. Thông tin nhân sự và Cấp bậc

| Cột | Tên trường dữ liệu | Quy cách và nội dung ghi nhận |
| --- | --- | --- |
| 1 | Số thứ tự | Đánh số thứ tự tăng dần từ 1 đến hết danh sách nhân sự |
| 2 | Mã nhân viên (`Employee ID`) | Khuôn định danh: `OBK-NV-[Số thứ tự 3 chữ số]` |
| 3 | Họ và tên người lao động | Họ và tên đầy đủ theo Giấy tờ tùy thân và Hợp đồng lao động |
| 4 | Chức danh / Vị trí công tác | Chức danh chuyên môn: Chuyên viên Kế toán, Chuyên viên Pháp lý, Chuyên viên Nhân sự, Chuyên viên Công nghệ, Chuyên viên Thương mại (`AM`) |
| 5 | Bộ phận / Phòng ban | Phòng Dịch vụ, Phòng Kế toán nội bộ, Phòng Nhân sự, Phòng Công nghệ, Ban Điều hành |
| 6 | Cấp bậc chuyên môn (`Rank`) | Phân loại cấp bậc theo [[01_Khung_nhan_su_tong_hop\|OBK-QCNS-01]]: P1 (Thực tập / Khởi đầu), P2 (Tiêu chuẩn), P3 (Nâng cao), P4 (Chuyên gia), M1 (Quản lý), hoặc `TL-CN` |

### Nhóm II. Tiền lương theo Hợp đồng lao động

| Cột | Tên trường dữ liệu | Quy cách và nội dung ghi nhận |
| --- | --- | --- |
| 7 | Tiền lương chính theo Hợp đồng lao động | Mức lương ghi trong Hợp đồng lao động, làm căn cứ đóng bảo hiểm xã hội bắt buộc. Bảo đảm không thấp hơn mức lương tối thiểu vùng theo quy định pháp luật |
| 8 | Tiền lương ngày bình thường | `Lương ngày = Lương chính / Số ngày công chuẩn của tháng` theo Nghị định 145/2020/NĐ-CP Điều 54 khoản 1 điểm a tiết a3 |
| 9 | Tiền lương giờ bình thường | `Lương giờ = Lương ngày / 08 giờ` theo Nghị định 145/2020/NĐ-CP Điều 54 khoản 1 điểm a tiết a4 |

### Nhóm III. Dữ liệu công và Thời gian làm việc thực tế

Dữ liệu được trích xuất từ Bảng chấm công `BM-09` đã qua phê duyệt:

| Cột | Tên trường dữ liệu | Đơn vị tính | Nguồn dữ liệu và căn cứ |
| --- | --- | --- | --- |
| 10 | Số ngày công chuẩn của tháng | Ngày | Lịch chu kỳ từ ngày 21 tháng trước đến ngày 20 tháng này, trừ ngày nghỉ hằng tuần và ngày lễ, tết theo quy định tại [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] mục 1.2 |
| 11 | Số ngày công làm việc thực tế | Ngày | Công làm việc thực tế tại văn phòng và công làm việc từ xa có phê duyệt |
| 12 | Số ngày nghỉ phép năm hưởng lương | Ngày | Nghỉ phép năm theo quy định tại Bộ luật Lao động Điều 113 và đơn nghỉ phép đã duyệt |
| 13 | Số ngày nghỉ lễ, tết hưởng nguyên lương | Ngày | Nghỉ lễ, tết theo quy định tại Bộ luật Lao động Điều 112 |
| 14 | Số ngày nghỉ không hưởng lương | Ngày | Nghỉ việc riêng không hưởng lương hoặc ngày vắng mặt không phép |
| 15 | Số giờ làm thêm ngày thường (OT 150%) | Giờ | Số giờ làm thêm vào ngày làm việc bình thường theo phiếu đăng ký NS-07 |
| 16 | Số giờ làm thêm ngày nghỉ tuần (OT 200%) | Giờ | Số giờ làm thêm vào ngày nghỉ hằng tuần (thứ Bảy, Chủ Nhật) |
| 17 | Số giờ làm thêm ngày lễ, tết (OT 300%) | Giờ | Số giờ làm thêm vào ngày nghỉ lễ, tết hưởng 300% theo Bộ luật Lao động Điều 98 |

### Nhóm IV. Cấu thành thu nhập thực tế trong kỳ

| Cột | Tên trường dữ liệu | Công thức tính toán | Tính chất thuế thu nhập cá nhân |
| --- | --- | --- | --- |
| 18 | Tiền lương thời gian thực tế | `Cột 18 = (Cột 7 / Cột 10) * (Cột 11 + Cột 12 + Cột 13)` | Thu nhập chịu thuế thu nhập cá nhân |
| 19 | Tiền làm thêm giờ (Tổng OT) | `Cột 19 = (Cột 15 * Cột 9 * 150%) + (Cột 16 * Cột 9 * 200%) + (Cột 17 * Cột 9 * 300%)` | Bóc tách phần miễn thuế tại Nhóm V |
| 20 | Phụ cấp trách nhiệm công việc | Mức phụ cấp cố định theo quyết định bổ nhiệm vai trò quản lý (`TL`, `KTT`) | Thu nhập chịu thuế thu nhập cá nhân |
| 21 | Phụ cấp ăn trưa và đi lại | Mức phụ cấp theo định mức nội bộ oBacker (không quá mức tối đa quy định) | Thu nhập không chịu thuế thu nhập cá nhân trong định mức |
| 22 | Tiền thưởng hiệu suất KPI tháng | Tiền thưởng đánh giá hiệu suất hằng tháng theo [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]] | Thu nhập chịu thuế thu nhập cá nhân |
| 23 | Tiền thưởng doanh thu tháng | Khoản thưởng kinh doanh đã chi ngày 15 hằng tháng, đưa vào bảng lương để quyết toán thuế | Thu nhập chịu thuế thu nhập cá nhân (đã chi tiền đợt ngày 15) |
| 24 | Phần tiền trả bù của kỳ trước | Tiền lương trả bù cho ngày công chưa rõ của kỳ trước được giải quyết theo mục 6.5 | Thu nhập chịu thuế thu nhập cá nhân |
| **25** | **TỔNG THU NHẬP TRONG KỲ (GROSS)** | `Cột 25 = Cột 18 + Cột 19 + Cột 20 + Cột 21 + Cột 22 + Cột 23 + Cột 24` | Tổng thu nhập trước trích nộp và thuế |

### Nhóm V. Tách thu nhập làm thêm giờ miễn thuế thu nhập cá nhân

Căn cứ Nghị định số 253/2026/NĐ-CP Điều 8 khoản 2 và Thông tư hướng dẫn thuế thu nhập cá nhân, phần tiền lương trả cao hơn do làm thêm giờ được miễn thuế thu nhập cá nhân:

| Cột | Tên trường dữ liệu | Công thức tính toán | Quy định áp dụng |
| --- | --- | --- | --- |
| 26 | Tiền lương giờ làm thêm tính theo mức 100% | `Cột 26 = (Cột 15 + Cột 16 + Cột 17) * Cột 9` | Là phần thu nhập trả theo mức bình thường, thuộc diện **CHỊU THUẾ** |
| 27 | Thu nhập làm thêm giờ được MIỄN THUẾ | `Cột 27 = Cột 19 - Cột 26`<br>`= (Cột 15 * Cột 9 * 50%) + (Cột 16 * Cột 9 * 100%) + (Cột 17 * Cột 9 * 200%)` | Phần chênh lệch trả cao hơn mức 100%, được **MIỄN THUẾ THU NHẬP CÁ NHÂN** theo Nghị định 253/2026/NĐ-CP Điều 8 |

### Nhóm VI. Các khoản trích nộp và khấu trừ theo quy định

| Cột | Tên trường dữ liệu | Tỷ lệ trích nộp / Công thức | Căn cứ pháp lý |
| --- | --- | --- | --- |
| 28 | Trích nộp Bảo hiểm xã hội (8%) | `Cột 28 = Cột 7 * 8%` | Luật Bảo hiểm xã hội 2024 Điều 32 |
| 29 | Trích nộp Bảo hiểm y tế (1,5%) | `Cột 29 = Cột 7 * 1,5%` | Luật Bảo hiểm y tế |
| 30 | Trích nộp Bảo hiểm thất nghiệp (1%) | `Cột 30 = Cột 7 * 1%` | Luật Việc làm |
| 31 | Tổng các khoản bảo hiểm trừ lương (10,5%) | `Cột 31 = Cột 28 + Cột 29 + Cột 30` | Tổng nghĩa vụ bảo hiểm của người lao động |
| 32 | Giảm trừ gia cảnh cho bản thân | Mức giảm trừ theo quy định pháp luật về thuế TNCN | Luật Thuế thu nhập cá nhân |
| 33 | Giảm trừ cho người phụ thuộc hợp lệ | Số lượng người phụ thuộc có mã số thuế nhân mức giảm trừ | Đã nộp đủ hồ sơ đăng ký người phụ thuộc |
| 34 | Thu nhập tính thuế thu nhập cá nhân | `Cột 34 = (Cột 25 - Cột 21 - Cột 27) - Cột 31 - Cột 32 - Cột 33`<br>(Nếu kết quả âm thì tính bằng 0 đồng) | Căn cứ tính thuế TNCN theo biểu thuế |
| 35 | Thuế thu nhập cá nhân tạm khấu trừ | Mức khấu trừ bằng 0 đồng đối với toàn bộ nhân sự tham gia phát triển, vận hành, cung cấp dịch vụ của oBacker từ tháng 12/2025 theo cơ chế miễn thuế TNCN 05 năm (Nghị quyết 136/2024/QH15 Điều 14 khoản 1 điểm b, Nghị quyết 53/2024/NQ-HĐND và Nghị quyết 24/2026/NQ-HĐND thành phố Đà Nẵng, Văn bản xác nhận Doanh nghiệp Khởi nghiệp sáng tạo ngày 29/12/2025). Đối với nhân sự không thuộc diện miễn thuế thì tính theo Biểu thuế lũy tiến từng phần trên Cột 34 (hoặc khấu trừ 10% đối với hợp đồng lao động ít hơn 03 tháng từ 05 triệu đồng trở lên) | Nghị quyết 136/2024/QH15;<br>Nghị định 253/2026/NĐ-CP Điều 50 |
| 36 | Khấu trừ tiền thưởng doanh thu đã chi | Bằng đúng số tiền thưởng doanh thu tại Cột 23 đã chi ngày 15 | Khấu trừ kỹ thuật tránh chi trùng 2 lần |
| 37 | Khấu trừ tạm ứng tiền lương (Luồng H) | Số tiền đã tạm ứng trong kỳ theo đề nghị BM-08 và Điều 26a [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] | Khấu trừ thu hồi tạm ứng tiền lương |
| 38 | Khấu trừ bồi thường thiệt hại vật chất | Mức bồi thường theo biên bản xử lý kỷ luật lao động NS-08 (không quá 30% tiền lương tháng theo Bộ luật Lao động Điều 102) | Bộ luật Lao động 2019 Điều 102 |
| **39** | **TỔNG CÁC KHOẢN KHẤU TRỪ** | `Cột 39 = Cột 31 + Cột 35 + Cột 36 + Cột 37 + Cột 38` | Toàn bộ các khoản trừ vào thu nhập |

### Nhóm VII. Tiền lương thực lĩnh và Thông tin thanh toán

| Cột | Tên trường dữ liệu | Công thức tính toán và quy chuẩn ghi nhận |
| --- | --- | --- |
| **40** | **TIỀN LƯƠNG THỰC LĨNH** | `Cột 40 = Cột 25 - Cột 39`<br>(Số tiền thực tế oBacker chi trả cho người lao động qua ngân hàng; đối với nhân sự oBacker được miễn thuế TNCN thì Cột 35 = 0 đồng nên tiền lương thực lĩnh không bị trừ thuế TNCN) |
| 41 | Số tài khoản ngân hàng thụ hưởng | Số tài khoản chính chủ của người lao động đăng ký trên hợp đồng lao động |
| 42 | Tên ngân hàng và chi nhánh | Tên đầy đủ của ngân hàng thương mại nhận thanh toán |
| 43 | Trạng thái chuyển khoản | Đã chi trả thành công / Lỗi chuyển khoản / Chờ xử lý |
| 44 | Mã tham chiếu giao dịch ngân hàng | Mã giao dịch chuyển tiền do ngân hàng điện tử phản hồi sau khi lệnh khớp |

## QUY TRÌNH TÍNH TOÁN, KIỂM SOÁT VÀ CHI TRẢ TIỀN LƯƠNG

```
[ ]  1. TIẾP NHẬN BẢNG CHẤM CÔNG VÀ RÀ SOÁT CÔNG THỰC TẾ (NGÀY 22)
        - HR chuyển Bảng chấm công BM-09 đã có phê duyệt của CEO cho KTV.
        - KTV kiểm tra đối chiếu danh sách nhân sự trên bảng công với Sổ theo dõi hợp đồng lao động HD-01.

[ ]  2. TÍNH LƯƠNG VÀ BÓC TÁCH THU NHẬP LÀM THÊM GIỜ (NGÀY 23 - 24)
        - KTV tính toán lương thời gian thực tế, tiền làm thêm giờ theo đúng hệ số 150%, 200%, 300%.
        - Bóc tách chính xác phần thu nhập làm thêm giờ được miễn thuế TNCN tại Cột 27 theo Nghị định 253/2026/NĐ-CP.
        - Đưa khoản tiền thưởng đã chi ngày 15 vào bảng lương để tính thuế thu nhập cá nhân của cả tháng.
        - Đối chiếu sổ theo dõi tạm ứng TU-01 để đưa các khoản tạm ứng tiền lương phải thu hồi vào Cột 37.

[ ]  3. KIỂM SOÁT BẢNG LƯƠNG VÀ KÝ XÁC NHẬN (NGÀY 25)
        - KTT kiểm soát tính chính xác của các công thức tính lương, tỷ lệ trích bảo hiểm và biểu thuế TNCN.
        - Đối chiếu tổng quỹ lương với ngân sách hoạt động năm đã được phê duyệt.
        - KTT ký xác nhận trên Bảng thanh toán tiền lương mẫu 01-LĐTL với chức danh Kế toán trưởng.

[ ]  4. PHÊ DUYỆT BẢNG THANH TOÁN TIỀN LƯƠNG (TRƯỚC NGÀY 28)
        - Tổng giám đốc (TGĐ) kiểm tra bảng lương và phê duyệt Bảng thanh toán tiền lương mẫu 01-LĐTL.

[ ]  5. LẬP LỆNH VÀ XÁC NHẬN LỆNH CHI TRẢ QUA NGÂN HÀNG (NGÀY CHI TRẢ)
        - NTT (KTV hoặc KTT) tạo lệnh chuyển tiền lương trên hệ thống ngân hàng điện tử vào tài khoản nhân viên.
        - TGĐ hoặc Chủ tịch HĐQT thực hiện thao tác XÁC NHẬN lệnh chuyển tiền theo Điều 35 OBK-QCTC-01.
        - Tiền lương về tài khoản người lao động vào ngày làm việc cuối cùng của tháng.
        - HR gửi phiếu lương điện tử (Payslip) riêng tư cho từng nhân sự trong thời hạn 24 giờ sau khi chi lương.
```

## ĐIỂM KIỂM SOÁT BẮT BUỘC

1. **Điểm kiểm soát KS-LU-01 (Kiểm soát tính hợp lệ của bảng công nguồn):** `KTV` chỉ tính toán tiền lương khi nhận được Bảng chấm công `BM-09` có đầy đủ chữ ký của người lập (`HR`) và chữ ký phê duyệt của `CEO`. Mọi sửa đổi dữ liệu công sau ngày 22 phải có văn bản phê duyệt bổ sung của `CEO`.
2. **Điểm kiểm soát KS-LU-02 (Kiểm soát bóc tách thu nhập làm thêm giờ miễn thuế):** Việc tách phần thu nhập làm thêm giờ được miễn thuế TNCN phải có Bảng kê chi tiết giờ làm thêm kèm theo (Job NB-36), lưu trữ cùng hồ sơ lương để phục vụ công tác thanh tra thuế và quyết toán thuế thu nhập cá nhân năm.
3. **Điểm kiểm soát KS-LU-03 (Kiểm soát tỷ lệ trích nộp bảo hiểm và thuế):** Trích nộp bảo hiểm bắt buộc theo đúng tỷ lệ luật định (người lao động 10,5%, công ty 21,5% trên tiền lương đóng BHXH). Đối với thuế thu nhập cá nhân: áp dụng mức thuế tạm khấu trừ bằng 0 đồng cho toàn bộ nhân sự oBacker tham gia phát triển, vận hành và cung cấp dịch vụ được miễn thuế TNCN 05 năm theo Nghị quyết 136/2024/QH15 và xác nhận của Sở Khoa học và Công nghệ thành phố Đà Nẵng; bảo đảm hồ sơ lao động có ghi rõ nhiệm vụ liên quan hoạt động khởi nghiệp sáng tạo.
4. **Điểm kiểm soát KS-LU-04 (Kiểm soát tách quyền lập bảng lương và duyệt chi):** Người lập bảng lương (`KTV`) độc lập với người kiểm soát (`KTT`) và người phê duyệt (`TGĐ`). Trên hệ thống ngân hàng điện tử, người TẠO lệnh chuyển tiền lương phải khác người XÁC NHẬN lệnh theo quy định tại Điều 35 OBK-QCTC-01.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Bảng thanh toán tiền lương chuẩn mẫu 01-LĐTL có đủ 03 chữ ký (`KTV` lập, `KTT` kiểm soát, `TGĐ` duyệt) được lưu trữ tại bộ phận Kế toán tiền lương theo chế độ lưu trữ chứng từ kế toán tối thiểu 10 năm theo Luật Kế toán. Bản trích sao phần dữ liệu bảo hiểm được chuyển cho `HR` để thực hiện đối chiếu hồ sơ cơ quan bảo hiểm xã hội (Job NB-40).

## KÝ XÁC NHẬN

| Người lập biểu (`KTV`) | Kế toán trưởng kiểm soát (`KTT`) | Tổng giám đốc phê duyệt (`TGĐ`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Tiền lương là nghĩa vụ tài chính và pháp lý trực tiếp của oBacker đối với người lao động. Một sai sót trong tính lương không chỉ ảnh hưởng trực tiếp đến quyền lợi của nhân viên mà còn dẫn đến rủi ro xử phạt vi phạm hành chính về lao động, bảo hiểm xã hội và thuế thu nhập cá nhân. Bảng LU-01 chuẩn hóa biểu mẫu thanh toán lương, tích hợp đầy đủ các cấu phần lương thời gian, tiền làm thêm giờ bóc tách miễn thuế theo quy định mới của Nghị định 253/2026/NĐ-CP, đồng thời bảo đảm tính thống nhất giữa hệ thống quản trị nhân sự và hạch toán kế toán.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.2.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu LU-01 về Sổ cái OBK-MSR |
