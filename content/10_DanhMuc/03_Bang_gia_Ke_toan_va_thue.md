---
title: "BẢNG GIÁ DỊCH VỤ KẾ TOÁN VÀ THUẾ"
code: "OBK-DM-KT"
type: "danh-muc"
folder: "10_DanhMuc"
level: "Danh mục"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "15/09/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-DM-00 Danh mục dịch vụ và bảng giá"
previous_version: ""
law_as_of: ""
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - OBK-DM-KT
tags:
  - loai/danh-muc
  - cap/danh-muc
---

# BẢNG GIÁ DỊCH VỤ KẾ TOÁN VÀ THUẾ

## Danh mục, áp dụng cho việc tra mã dịch vụ và mức giá

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-DM-KT |
| Cấp tài liệu | Danh mục |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 15/09/2026 |
| Người biên soạn | `CEO` |
| Người soát | đã soát |
| Người phê duyệt | đã phê duyệt |
| Văn bản cấp trên | [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] Danh mục dịch vụ và bảng giá |
| Số mã dịch vụ | 44 |
| Nguồn dữ liệu | `_du_lieu_danh_muc/danh_muc.tsv`, kết xuất ngày 15/09/2026 |
| Nguồn dữ liệu | Bản kết xuất danh mục sản phẩm |

> [!note] BẢN SINH TỰ ĐỘNG
> Nội dung sinh lại từ bản kết xuất của hệ thống danh mục sản phẩm.
> Bản gốc của mức giá và của mô tả là hệ thống danh mục sản phẩm.

---

## 1. QUY TRÌNH VÀ ĐIỀU KHOẢN ÁP DỤNG

| Hạng mục | Tài liệu |
| --- | --- |
| Chuẩn vận hành dịch vụ | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] Chuẩn vận hành dịch vụ |
| Quy trình của bộ phận thực hiện | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] Kế toán và thuế |
| Bảng tra SLA | [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] Bảng tra SLA |
| Điều khoản dịch vụ cụ thể | [[02_Accounting_Tax_VI\|Điều khoản dịch vụ kế toán và thuế]], [[02_Accounting_Tax_EN\|bản tiếng Anh]] |
| Bản điều khoản chung | [[00_TnC_Master_VI\|Bản Điều Khoản Chung]], bản tiếng Anh [[00_TnC_Master_EN\|Master T&C]] |
| Điều khoản nạp ví | [[07_Wallet_VI\|Ví oBacker]], bản tiếng Anh [[07_Wallet_EN\|Wallet]] |
| Thứ tự ưu tiên áp dụng | Đơn Đặt Hàng, Điều Khoản Dịch Vụ Cụ Thể, Bản Điều Khoản Chung, Chính sách Bảo vệ Dữ liệu Cá nhân |

Quan hệ giữa gói và hạng mục bán kèm gói: xem [[01_Goi_dich_vu_va_hang_muc_kem_goi|Gói dịch vụ và hạng mục kèm gói]].

---

## 2. BẢNG GIÁ

Giá ghi bằng đồng Việt Nam, tính cho một đơn vị tính. Mã trong bảng là mã của hệ thống danh mục sản phẩm.



| Mã | Tên dịch vụ | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Thuế suất GTGT | Thu theo kỳ | Nguồn cung cấp | Bên xuất hóa đơn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OB-BANK-TRX` | Dịch vụ hỗ trợ - Giao dịch ngân hàng | tháng | 1.000.000 | 1.080.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `OB-ONSITE-SUPP` | Dịch vụ hỗ trợ Onsite | tuần | 800.000 | 864.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `OB-TAX-PRESENT` | Hỗ trợ cùng lên trình diện thuế | gói | 1.000.000 | 1.080.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-ACC-TRANS` | Chuyển đổi dữ liệu kế toán | lần | chưa có giá | chưa có giá | chưa ghi | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-FLR` | Báo cáo vay/trả nợ nước ngoài | báo cáo/tháng | 500.000 | 540.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-HR5` | Add-on: Thêm 5 nhân sự tính lương | tháng | 675.000 | 729.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-INV-FIX` | Xử lý hóa đơn sai sót | hóa đơn | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-INV1` | Add-on: Xuất 01 hóa đơn lẻ | hóa đơn | 150.000 | 162.000 | 8% | không | chưa ghi | oBacker |
| `OBG-ADD-INV5` | Add-on: Dịch vụ xuất hóa đơn - Gói 5 hóa đơn/tháng | tháng | 400.000 | 432.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-LEG2C` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | gói | 1.700.000 | 1.836.000 | 8% | có | chưa ghi | oBacker |
| `OBG-ADD-LEG2H` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | tháng | 1.700.000 | 1.836.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-PRF` | Thông báo chuyển lợi nhuận ra nước ngoài | báo cáo | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-TPR` | Kê khai giao dịch & hồ sơ giá giao dịch liên kết | báo cáo | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-TRX100` | Add-on: Thêm 100 giao dịch kế toán/tháng | tháng | 900.000 | 972.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ENT` | obacker Grow - Gói Enterprise | tháng | chưa có giá | chưa có giá | chưa ghi | có | oBacker tự thực hiện | oBacker |
| `OBG-MTH1` | Add-on: obacker Grow - Tháng đầu tiên thành lập công ty | tháng | 0 | 0 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-PRM-FDI-12M` | obacker Grow - Gói FDI Premium - 12 tháng | tháng | 13.550.000 | 14.634.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-PRM-FDI-3M` | obacker Grow - Gói FDI Premium - 3 tháng | tháng | 15.000.000 | 16.200.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-PRM-FDI-6M` | obacker Grow - Gói FDI Premium - 6 tháng | tháng | 14.275.000 | 15.417.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-PRM-STD-12M` | obacker Grow - Gói Premium - 12 tháng | tháng | 13.050.000 | 14.094.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-PRM-STD-3M` | obacker Grow - Gói Premium - 3 tháng | tháng | 14.500.000 | 15.660.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-PRM-STD-6M` | obacker Grow - Gói Premium - 6 tháng | tháng | 13.775.000 | 14.877.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-SCL-FDI-12M` | obacker Grow - Gói FDI Scale - 12 tháng | tháng | 5.000.000 | 5.400.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-SCL-FDI-3M` | obacker Grow - Gói FDI Scale - 3 tháng | tháng | 5.500.000 | 5.940.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-SCL-FDI-6M` | obacker Grow - Gói FDI Scale - 6 tháng | tháng | 5.250.000 | 5.670.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-SCL-STD-12M` | obacker Grow - Gói Scale - 12 tháng | tháng | 4.500.000 | 4.860.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-SCL-STD-3M` | obacker Grow - Gói Scale - 3 tháng | tháng | 5.000.000 | 5.400.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-SCL-STD-6M` | obacker Grow - Gói Scale - 6 tháng | tháng | 4.750.000 | 5.130.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-FDI-12M` | obacker Grow - Gói FDI Starter - 12 tháng | tháng | 1.625.000 | 1.755.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-FDI-3M` | obacker Grow - Gói FDI Starter - 3 tháng | tháng | 1.750.000 | 1.890.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-FDI-3M-KM` | Add-on: obacker Grow - Gói FDI Starter - 3 tháng đầu tiên | tháng | 875.000 | 945.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-FDI-6M` | obacker Grow - Gói FDI Starter - 6 tháng | tháng | 1.687.500 | 1.822.500 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-STD-12M` | obacker Grow - Gói Starter - 12 tháng | tháng | 1.125.000 | 1.215.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-STD-2M` | obacker Grow - Gói Starter - 2 tháng | tháng | 1.250.000 | 1.350.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-STD-3M` | obacker Grow - Gói Starter - 3 tháng | tháng | 1.250.000 | 1.350.000 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-STD-3M-KM` | Add-on: obacker Grow - Gói Starter - 3 tháng đầu tiên | tháng | 0 | 0 | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-STR-STD-6M` | obacker Grow - Gói Starter - 6 tháng | tháng | 1.187.500 | 1.282.500 | 8% | có | oBacker tự thực hiện | oBacker |
| `REP-FDI-ACT-Q` | Báo cáo hoạt động đầu tư - Công ty trắng | báo cáo/quý | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-FDI-MON-6M` | Báo cáo giám sát đánh giá đầu tư - Công ty trắng | báo cáo/nửa năm | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-FDI-PRJ-Y` | Báo cáo thực hiện dự án đầu tư năm - Công ty trắng | báo cáo | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-CIT-Y` | Tờ khai quyết toán thuế TNDN - Công ty trắng | báo cáo | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-FS` | Báo cáo tài chính - Công ty trắng | báo cáo | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-PIT-Q` | Báo cáo thuế TNCN quý - Công ty trắng | báo cáo/quý | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-VAT-Q` | Báo cáo thuế GTGT quý - Công ty trắng | báo cáo/quý | 500.000 | 540.000 | 8% | không | oBacker tự thực hiện | oBacker |



---

## 3. PHẠM VI CÔNG VIỆC THEO MÃ

Phạm vi, thời gian và điều kiện áp dụng chép từ hệ thống danh mục sản phẩm. Mã không có dữ liệu ở sáu hạng mục sau đây thì không có mục riêng.



### OB-BANK-TRX. Dịch vụ hỗ trợ - Giao dịch ngân hàng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Hỗ trợ doanh nghiệp thực hiện các giao dịch ngân hàng định kỳ (nộp - rút tiền mặt, chuyển khoản, xử lý hồ sơ ngân hàng) thay mặt khách hàng. |
| Kỳ thu tiền | thu trước |

### OB-ONSITE-SUPP. Dịch vụ hỗ trợ Onsite

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Cử nhân sự oBacker đến trực tiếp tại văn phòng khách hàng để hỗ trợ các nghiệp vụ kế toán, hành chính, tính phí theo tuần. |
| Hạn dùng | 7 ngày |
| Kỳ thu tiền | thu trước |

### OB-TAX-PRESENT. Hỗ trợ cùng lên trình diện thuế

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Cử nhân sự oBacker cùng đại diện doanh nghiệp lên trình diện hoặc làm việc trực tiếp với cán bộ cơ quan thuế khi có yêu cầu. |

### OBG-ADD-ACC-TRANS. Chuyển đổi dữ liệu kế toán

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Thực hiện chuyển đổi và chuẩn hóa dữ liệu kế toán từ hệ thống cũ (hoặc từ file Excel của khách hàng) sang phần mềm kế toán mới, bao gồm đối chiếu số dư đầu kỳ và xử lý chênh lệch. |
| Ghi chú | Tính theo số lượng dữ liệu giao dịch cần chuyển đổi x 6,000đ/giao dịch; không vượt quá 6.000.000đ cho dữ liệu 1 năm |

### OBG-ADD-FLR. Báo cáo vay/trả nợ nước ngoài

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập báo cáo định kỳ về tình hình rút vốn và trả nợ khoản vay nước ngoài theo quy định của Ngân hàng Nhà nước Việt Nam. |
| Dòng thuê bao | Báo cáo vay/ trả nợ nước ngoài |
| Hạn dùng | 1 tháng |

### OBG-ADD-HR5. Add-on: Thêm 5 nhân sự tính lương

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung 05 nhân sự vào dịch vụ tính lương và quản lý BHXH hàng tháng. Áp dụng khi vượt giới hạn nhân viên của gói hiện tại. |
| Điều kiện áp dụng | Chi ban kem OBG-* |
| Dòng thuê bao | ADD-ON Nhân sự tính lương |
| Hạn dùng | 1 tháng |
| Gói chứa hạng mục này | OBG-ENT |

### OBG-ADD-INV-FIX. Xử lý hóa đơn sai sót

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bao gồm xử lý sai sót hóa đơn mua vào và bán ra (lập biên bản điều chỉnh/hủy, phối hợp với bên mua/bán để xử lý, xuất hóa đơn điều chỉnh hoặc thay thế, báo cáo cơ quan thuế). |
| Điều kiện áp dụng | Tinh theo so hoa don can xu ly. Add-on cho khach co gói OBG-* dang hoat dong. |
| Gói chứa hạng mục này | OBG-STR-FDI-12M, OBG-STR-FDI-3M-KM, OBG-MTH1, OBG-STR-STD-3M-KM, OBG-STR-STD-6M, OBG-STR-STD-12M, OBG-PRM-STD-3M, OBG-ENT, OBG-STR-STD-3M, OBG-STR-STD-2M, OBG-PRM-STD-6M, OBG-PRM-STD-12M, OBG-SCL-STD-12M, OBG-SCL-STD-6M, OBG-SCL-STD-3M, OBG-SCL-FDI-6M, OBG-SCL-FDI-12M, OBG-SCL-FDI-3M, OBG-PRM-FDI-3M, OBG-PRM-FDI-6M, OBG-PRM-FDI-12M, OBG-STR-FDI-6M, OBG-STR-FDI-3M |

### OBG-ADD-INV1. Add-on: Xuất 01 hóa đơn lẻ

| Hạng mục | Nội dung |
| --- | --- |
| Gói chứa hạng mục này | OBG-STR-FDI-3M-KM |

### OBG-ADD-INV5. Add-on: Dịch vụ xuất hóa đơn - Gói 5 hóa đơn/tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung dịch vụ xuất 05 hóa đơn điện tử đầu ra mỗi tháng, bao gồm kê khai trên phần mềm hóa đơn của khách hàng. |
| Dòng thuê bao | ADD-ON Dịch vụ xuất hóa đơn |
| Hạn dùng | 1 tháng |
| Gói chứa hạng mục này | OBG-STR-FDI-3M-KM |

### OBG-ADD-LEG2C. Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng

| Hạng mục | Nội dung |
| --- | --- |
| Dòng thuê bao | ADD-ON Tư vấn pháp lý |
| Số lượng tối thiểu | 12 |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-STR-FDI-6M |

### OBG-ADD-LEG2H. Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung 02 giờ tư vấn pháp lý hoặc tư vấn thuế mỗi tháng vào gói hiện tại. Giờ tư vấn không tích lũy sang tháng sau. |
| Điều kiện áp dụng | Chi ban kem OBG-* |
| Dòng thuê bao | ADD-ON Tư vấn pháp lý |
| Hạn dùng | 1 tháng |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-ENT |

### OBG-ADD-PRF. Thông báo chuyển lợi nhuận ra nước ngoài

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập và nộp thông báo chuyển lợi nhuận ra nước ngoài cho nhà đầu tư nước ngoài tới cơ quan thuế trực tiếp quản lý theo quy định. |

### OBG-ADD-TPR. Kê khai giao dịch & hồ sơ giá giao dịch liên kết

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập tờ khai giao dịch liên kết và hồ sơ xác định giá giao dịch liên kết theo Nghị định 132/2020/NĐ-CP cho doanh nghiệp có giao dịch với các bên liên kết. |

### OBG-ADD-TRX100. Add-on: Thêm 100 giao dịch kế toán/tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung 100 giao dịch kế toán mỗi tháng vào hạn mức xử lý của gói hiện tại. Áp dụng khi vượt giới hạn giao dịch (50/300/1.500) của gói Starter/Scale/Premium. |
| Điều kiện áp dụng | Chi ban kem OBG-* |
| Dòng thuê bao | ADD-ON: Giao dịch kế toán |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-ENT |

### OBG-ENT. obacker Grow - Gói Enterprise

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR thiết kế riêng (custom) cho doanh nghiệp quy mô lớn vượt giới hạn của gói Premium (trên 1.500 giao dịch/tháng hoặc trên 35 nhân viên) hoặc có nhu cầu đặc thù. <br>Thanh toán trả trước (prepaid). <br>Phạm vi và giá thỏa thuận theo từng khách hàng. |
| Dòng thuê bao | obacker Grow |

### OBG-MTH1. Add-on: obacker Grow - Tháng đầu tiên thành lập công ty

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Dịch vụ kế toán - thuế và lao động tháng đầu tiên sau khi thành lập doanh nghiệp, bao gồm: khai báo thuế ban đầu; thiết lập hệ thống sổ sách; hỗ trợ trình diện thuế lần đầu với cơ quan thuế. |
| Điều kiện áp dụng | Chỉ áp dụng khi khách hàng thành lập vào tháng cuối cùng của quý VÀ có mua kèm bất kỳ gói obacker Grow nào. Áp dụng 1 lần duy nhất per tenant. |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 1 tháng |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-STR-FDI-12M, OBG-STR-STD-6M, OBG-STR-STD-12M, OBG-PRM-STD-3M, OBG-ENT, OBG-STR-STD-3M, OBG-STR-STD-2M, OBG-PRM-STD-6M, OBG-PRM-STD-12M, OBG-SCL-STD-12M, OBG-SCL-STD-6M, OBG-SCL-STD-3M, OBG-SCL-FDI-6M, OBG-SCL-FDI-12M, OBG-SCL-FDI-3M, OBG-PRM-FDI-3M, OBG-PRM-FDI-6M, OBG-PRM-FDI-12M, OBG-STR-FDI-6M, OBG-STR-FDI-3M |

### OBG-PRM-FDI-12M. obacker Grow - Gói FDI Premium - 12 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Premium cho doanh nghiệp FDI có quy mô lớn, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 1.500 giao dịch/tháng; <br>(2) tính lương dưới 35 nhân viên; <br>(3) lưu trữ tài liệu điện tử; truy cập formtify.obacker.com; <br>(4) 1 giờ tư vấn pháp lý & thuế/tháng; 3 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 1,500 gd/thang; Luong < 35 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 12 tháng |
| Số lượng tối thiểu | 12 |
| Kỳ thu tiền | thu trước |

### OBG-PRM-FDI-3M. obacker Grow - Gói FDI Premium - 3 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Premium cho doanh nghiệp FDI có quy mô lớn, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 1.500 giao dịch/tháng; <br>(2) tính lương dưới 35 nhân viên; <br>(3) lưu trữ tài liệu điện tử; truy cập formtify.obacker.com; <br>(4) 1 giờ tư vấn pháp lý & thuế/tháng; 3 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 1,500 gd/thang; Luong < 35 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Số lượng tối thiểu | 3 |
| Kỳ thu tiền | thu trước |

### OBG-PRM-FDI-6M. obacker Grow - Gói FDI Premium - 6 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Premium cho doanh nghiệp FDI có quy mô lớn, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 1.500 giao dịch/tháng; <br>(2) tính lương dưới 35 nhân viên; <br>(3) lưu trữ tài liệu điện tử; truy cập formtify.obacker.com; <br>(4) 1 giờ tư vấn pháp lý & thuế/tháng; 3 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 1,500 gd/thang; Luong < 35 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 6 tháng |
| Số lượng tối thiểu | 6 |
| Kỳ thu tiền | thu trước |

### OBG-PRM-STD-12M. obacker Grow - Gói Premium - 12 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Premium cho công ty nội địa có quy mô lớn, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 1.500 giao dịch/tháng; <br>(2) tính lương dưới 35 nhân viên; <br>(3) lưu trữ tài liệu điện tử; truy cập formtify.obacker.com; <br>(4) 1 giờ tư vấn pháp lý & thuế/tháng; <br>(5) 3 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 1,500 gd/thang; Luong < 35 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 12 tháng |
| Số lượng tối thiểu | 12 |
| Kỳ thu tiền | thu trước |

### OBG-PRM-STD-3M. obacker Grow - Gói Premium - 3 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Premium cho công ty nội địa có quy mô lớn, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 1.500 giao dịch/tháng; <br>(2) tính lương dưới 35 nhân viên; <br>(3) lưu trữ tài liệu điện tử; truy cập formtify.obacker.com; <br>(4) 1 giờ tư vấn pháp lý & thuế/tháng; <br>(5) 3 lượt soát xét hợp đồng/tháng; <br>(6) chiết khấu 10% cho các dịch vụ khác do oBacker cung cấp. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 1,500 gd/thang; Luong < 35 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Số lượng tối thiểu | 3 |

### OBG-PRM-STD-6M. obacker Grow - Gói Premium - 6 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Premium cho công ty nội địa có quy mô lớn, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 1.500 giao dịch/tháng; <br>(2) tính lương dưới 35 nhân viên; <br>(3) lưu trữ tài liệu điện tử; truy cập formtify.obacker.com; <br>(4) 1 giờ tư vấn pháp lý & thuế/tháng; <br>(5) 3 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 1,500 gd/thang; Luong < 35 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 6 tháng |
| Số lượng tối thiểu | 6 |
| Kỳ thu tiền | thu trước |

### OBG-SCL-FDI-12M. obacker Grow - Gói FDI Scale - 12 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Scale cho doanh nghiệp FDI đang tăng trưởng, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 300 giao dịch/tháng; <br>(2) tính lương dưới 20 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập formtify.obacker.com;<br>(5) 2 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 300 gd/thang; Luong < 20 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 12 tháng |
| Số lượng tối thiểu | 12 |
| Kỳ thu tiền | thu trước |

### OBG-SCL-FDI-3M. obacker Grow - Gói FDI Scale - 3 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Scale cho doanh nghiệp FDI đang tăng trưởng, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 300 giao dịch/tháng; <br>(2) tính lương dưới 20 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập formtify.obacker.com;<br>(5) 2 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 300 gd/thang; Luong < 20 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Số lượng tối thiểu | 3 |
| Kỳ thu tiền | thu trước |

### OBG-SCL-FDI-6M. obacker Grow - Gói FDI Scale - 6 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Scale cho doanh nghiệp FDI đang tăng trưởng, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 300 giao dịch/tháng; <br>(2) tính lương dưới 20 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập formtify.obacker.com;<br>(5) 2 lượt soát xét hợp đồng/tháng; <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 300 gd/thang; Luong < 20 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 6 tháng |
| Số lượng tối thiểu | 6 |
| Kỳ thu tiền | thu trước |

### OBG-SCL-STD-12M. obacker Grow - Gói Scale - 12 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Scale cho công ty nội địa đang tăng trưởng, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 300 giao dịch/tháng; <br>(2) tính lương dưới 20 nhân viên; lưu trữ tài liệu điện tử; <br>(3) truy cập formtify.obacker.com; <br>(4) 2 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 300 gd/thang; Luong < 20 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 12 tháng |
| Số lượng tối thiểu | 12 |
| Kỳ thu tiền | thu trước |

### OBG-SCL-STD-3M. obacker Grow - Gói Scale - 3 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Scale cho công ty nội địa đang tăng trưởng, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 300 giao dịch/tháng; <br>(2) tính lương dưới 20 nhân viên; lưu trữ tài liệu điện tử; <br>(3) truy cập formtify.obacker.com; <br>(4) 2 lượt soát xét hợp đồng/tháng. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 300 gd/thang; Luong < 20 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Số lượng tối thiểu | 3 |
| Kỳ thu tiền | thu trước |

### OBG-SCL-STD-6M. obacker Grow - Gói Scale - 6 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Scale cho công ty nội địa đang tăng trưởng, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 300 giao dịch/tháng; <br>(2) tính lương dưới 20 nhân viên; lưu trữ tài liệu điện tử; <br>(3) truy cập formtify.obacker.com; <br>(4) 2 lượt soát xét hợp đồng/tháng.<br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 300 gd/thang; Luong < 20 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 6 tháng |
| Số lượng tối thiểu | 6 |
| Kỳ thu tiền | thu trước |

### OBG-STR-FDI-12M. obacker Grow - Gói FDI Starter - 12 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Starter cho doanh nghiệp FDI, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 50 gd/thang; Luong < 5 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 12 tháng |
| Số lượng tối thiểu | 12 |
| Kỳ thu tiền | thu trước |

### OBG-STR-FDI-3M. obacker Grow - Gói FDI Starter - 3 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Starter cho doanh nghiệp FDI, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 50 gd/thang; Luong < 5 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Số lượng tối thiểu | 3 |
| Kỳ thu tiền | thu trước |

### OBG-STR-FDI-3M-KM. Add-on: obacker Grow - Gói FDI Starter - 3 tháng đầu tiên

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói khuyến mãi cho khách hàng FDI mới đăng ký gói Starter trong 3 tháng đầu tiên sau khi thành lập. Gói kế toán - thuế - HR cấp Starter cho doanh nghiệp FDI, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | Áp dụng khi khách hàng mới thành lập công ty (<=3 tháng) và khách mua dịch vụ văn phòng ảo 12 tháng nguyên giá TRD-VOFC. Khách có thể dùng hoặc không dùng, không quy đổi ra các dịch vụ khác. |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | TRD-VOFC |

### OBG-STR-FDI-6M. obacker Grow - Gói FDI Starter - 6 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Starter cho doanh nghiệp FDI, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. Không bao gồm chứng nhận kiểm toán độc lập. |
| Điều kiện áp dụng | KT < 50 gd/thang; Luong < 5 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 6 tháng |
| Số lượng tối thiểu | 6 |
| Kỳ thu tiền | thu trước |

### OBG-STR-STD-12M. obacker Grow - Gói Starter - 12 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Starter cho công ty nội địa, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 50 gd/thang; Luong < 5 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 12 tháng |
| Số lượng tối thiểu | 12 |

### OBG-STR-STD-2M. obacker Grow - Gói Starter - 2 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Starter cho công ty nội địa, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 50 gd/thang; Luong < 5 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 2 tháng |
| Số lượng tối thiểu | 2 |
| Kỳ thu tiền | thu trước |

### OBG-STR-STD-3M. obacker Grow - Gói Starter - 3 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Starter cho công ty nội địa, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 50 gd/thang; Luong < 5 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Số lượng tối thiểu | 3 |
| Kỳ thu tiền | thu trước |

### OBG-STR-STD-3M-KM. Add-on: obacker Grow - Gói Starter - 3 tháng đầu tiên

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói khuyến mãi cho khách hàng mới đăng ký gói Starter (nội địa) trong 3 tháng đầu tiên sau khi thành lập công ty. Gói kế toán - thuế - HR cấp Starter cho công ty nội địa, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | Áp dụng khi khách hàng mới thành lập công ty (<=3 tháng) và khách mua dịch vụ văn phòng ảo 12 tháng nguyên giá TRD-VOFC. Khách có thể dùng hoặc không dùng, không quy đổi ra các dịch vụ khác. |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 3 tháng |
| Gói chứa hạng mục này | TRD-VOFC |

### OBG-STR-STD-6M. obacker Grow - Gói Starter - 6 tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Gói kế toán - thuế - HR cấp Starter cho công ty nội địa, thanh toán hàng quý. Bao gồm: <br>(1) kế toán dưới 50 giao dịch/tháng; <br>(2) tính lương dưới 5 nhân viên; <br>(3) lưu trữ tài liệu điện tử; <br>(4) truy cập và sử dụng toàn bộ mẫu văn bản, hợp đồng chuẩn hóa trên formtify.obacker.com. <br><br>Phạm vi: đảm bảo tuân thủ các quy định về thuế, kế toán, báo cáo bắt buộc với cơ quan nhà nước. <br>Không bao gồm: tranh tụng, M&A/gọi vốn, xin giấy phép, sở hữu trí tuệ, tư vấn tối ưu thuế, tái cấu trúc, tuyển dụng, sa thải, lao động nước ngoài, marketing, xuất hóa đơn cho khách hàng. |
| Điều kiện áp dụng | KT < 50 gd/thang; Luong < 5 NV |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 6 tháng |
| Số lượng tối thiểu | 6 |

### REP-FDI-ACT-Q. Báo cáo hoạt động đầu tư - Công ty trắng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập báo cáo hoạt động đầu tư hàng quý cho doanh nghiệp FDI không phát sinh hoạt động, nộp cho Sở Kế hoạch & Đầu tư. |

### REP-FDI-MON-6M. Báo cáo giám sát đánh giá đầu tư - Công ty trắng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập báo cáo giám sát, đánh giá đầu tư 6 tháng cho doanh nghiệp FDI không phát sinh hoạt động, nộp cho cơ quan quản lý đầu tư. |

### REP-FDI-PRJ-Y. Báo cáo thực hiện dự án đầu tư năm - Công ty trắng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập báo cáo thực hiện dự án đầu tư năm cho doanh nghiệp FDI không phát sinh hoạt động, nộp cho cơ quan quản lý đầu tư. |

### REP-T-CIT-Y. Tờ khai quyết toán thuế TNDN - Công ty trắng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập 01 tờ khai quyết toán thuế Thu nhập doanh nghiệp (TNDN) tổng kết năm cho công ty không có phát sinh giao dịch. |
| Điều kiện áp dụng | Cho cong ty khong phat sinh hoat dong (cong ty trang) |

### REP-T-FS. Báo cáo tài chính - Công ty trắng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập 01 báo cáo tài chính theo quy định pháp luật, bao gồm Bảng cân đối kế toán, Bảng báo cáo kết quả hoạt động kinh doanh, Báo cáo lưu chuyển tiền tệ. |
| Điều kiện áp dụng | Cho cong ty khong phat sinh hoat dong (cong ty trang) |

### REP-T-PIT-Q. Báo cáo thuế TNCN quý - Công ty trắng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Báo cáo thuế TNCN quý - Công ty trắng |
| Điều kiện áp dụng | Cho cong ty khong phat sinh hoat dong (cong ty trang) |

### REP-T-VAT-Q. Báo cáo thuế GTGT quý - Công ty trắng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập 01 báo cáo thuế Giá trị gia tăng (GTGT) theo quý cho công ty không phát sinh giao dịch. |
| Điều kiện áp dụng | Cho cong ty khong phat sinh hoat dong (cong ty trang) |



---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 21/09/2026 | R.1.0.0 | Ban hành. |
