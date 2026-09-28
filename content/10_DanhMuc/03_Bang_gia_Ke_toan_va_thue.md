---
title: "BẢNG GIÁ DỊCH VỤ KẾ TOÁN VÀ THUẾ"
code: "OBK-DM-KT"
type: "danh-muc"
folder: "10_DanhMuc"
level: "Danh mục"
version: "R.1.1.0"
status: "đang áp dụng"
draft_date: "15/09/2026"
author: "CEO"
reviewer: "CEO"
review_status: "chưa soát"
approver: "CEO"
approval_status: "chưa phê duyệt"
parent: "OBK-DM-00 Danh mục dịch vụ và bảng giá"
previous_version: ""
law_as_of: ""
next_review: ""
distribution: "nội bộ"
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
| Phiên bản | R.1.1.0, đang áp dụng |
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
| `ADD-BANK-ACC` | Phụ Phí Quản Lý Tài Khoản Ngân Hàng Ngoài Định Mức | tài khoản | 100.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `ADD-FCT-RETURN` | Phí Kê Khai Thuế Nhà Thầu Nước Ngoài (FCT) Phát Sinh Thêm | tờ khai | 500.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `ADD-PAYROLL-EMP` | Phụ Phí Tính Lương & Quản Lý BHXH Nhân Sự Ngoài Định Mức | người lao động | 100.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `ADD-PAYROLL-RUN` | Phụ Phí Kỳ Chạy Lương Bổ Sung Trong Tháng | kỳ | 500.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `ADD-RETAIL-UNIT` | Phụ Phí Nhập Liệu Đơn Bán Lẻ POS / TMĐT Không Bảng Kê Gom | đơn hàng | 5.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `ADD-TAX-INSPECT` | Dịch Vụ Cử Nhân Sự Tham Gia Thanh Tra Thuế Trực Tiếp Tại Trụ Sở | kỳ | 15.000.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `ADD-TXN-BLOCK-1000` | Phụ Phí Mở Rộng Định Mức: Block +1.000 Giao Dịch / Tháng | tháng | 2.500.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `ADD-TXN-BLOCK-1500` | Phụ Phí Mở Rộng Định Mức: Block +1.500 Giao Dịch / Tháng | tháng | 3.500.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `ADD-TXN-BLOCK-500` | Phụ Phí Mở Rộng Định Mức: Block +500 Giao Dịch / Tháng | tháng | 1.500.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `ADD-TXN-PRIME-OVER` | Phụ Phí Hóa Đơn Vượt Trần Gói Prime (Trên 7.000 Giao Dịch) | hóa đơn | 12.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `ADD-VOUCHER-RAW` | Phụ Phí Nhập Liệu Chứng Từ Giấy Scan / Thủ Công Vượt Định Mức | chứng từ | 10.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `OB-BANK-TRX` | Dịch vụ hỗ trợ - Giao dịch ngân hàng | tháng | 1.000.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `OB-ONSITE-SUPP` | Dịch vụ hỗ trợ Onsite | tuần | 800.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `OB-TAX-PRESENT` | Hỗ trợ cùng lên trình diện thuế | gói | 1.000.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-ACC-TRANS` | Chuyển đổi dữ liệu kế toán | lần | chưa có giá | tính khi xuất hóa đơn | chưa ghi | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-FLR` | Báo cáo vay/trả nợ nước ngoài | báo cáo/tháng | 500.000 | tính khi xuất hóa đơn | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-HR5` | Add-on: Thêm 5 nhân sự tính lương | tháng | 675.000 | tính khi xuất hóa đơn | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-INV-FIX` | Xử lý hóa đơn sai sót | hóa đơn | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-INV1` | Add-on: Xuất 01 hóa đơn lẻ | hóa đơn | 150.000 | tính khi xuất hóa đơn | 8% | không | chưa ghi | oBacker |
| `OBG-ADD-INV5` | Add-on: Dịch vụ xuất hóa đơn - Gói 5 hóa đơn/tháng | tháng | 400.000 | tính khi xuất hóa đơn | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-LEG2C` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | gói | 1.700.000 | tính khi xuất hóa đơn | 8% | có | chưa ghi | oBacker |
| `OBG-ADD-LEG2H` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | tháng | 1.700.000 | tính khi xuất hóa đơn | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ADD-PRF` | Thông báo chuyển lợi nhuận ra nước ngoài | báo cáo | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-TPR` | Kê khai giao dịch & hồ sơ giá giao dịch liên kết | báo cáo | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `OBG-ADD-TRX100` | Add-on: Thêm 100 giao dịch kế toán/tháng | tháng | 900.000 | tính khi xuất hóa đơn | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ENT` | obacker Grow - Gói Enterprise | tháng | chưa có giá | tính khi xuất hóa đơn | chưa ghi | có | oBacker tự thực hiện | oBacker |
| `OBG-HEALTH-CHECK` | Dịch Vụ Rà Soát Sức Khỏe Sổ Sách & Đánh Giá Rủi Ro Tuân Thủ Quá Khứ | năm | 3.000.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `OBG-MTH1` | Add-on: obacker Grow - Tháng đầu tiên thành lập công ty | tháng | 0 | tính khi xuất hóa đơn | 8% | có | oBacker tự thực hiện | oBacker |
| `OBG-ONB-CORE` | Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Core | lần | 3.000.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `OBG-ONB-GROWTH` | Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Growth & Prime | lần | 6.000.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `OBG-PTR-CORE` | Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp Việt Nam | năm | 27.000.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `OBG-PTR-CORE-FDI` | Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp FDI | năm | 40.500.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `OBG-PTR-GROWTH` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp Việt Nam | năm | 84.000.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `OBG-PTR-GROWTH-FDI` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp FDI | năm | 113.400.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `OBG-PTR-PRIME` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Chiến Lược May Đo (Partner Prime) | năm | 180.000.000 | tính khi xuất hóa đơn | 10% | có | oBacker tự thực hiện | oBacker |
| `OBG-RESTATE-BASE` | Dịch Vụ Khắc Phục & Lập Lại Sổ Sách Kế Toán - Khung Cơ Sở | năm | 6.000.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `OBG-TAX-AMEND` | Dịch Vụ Lập Hồ Sơ Khai Bổ Sung Điều Chỉnh Thuế | tờ khai | 500.000 | tính khi xuất hóa đơn | 10% | không | oBacker tự thực hiện | oBacker |
| `REP-FDI-ACT-Q` | Báo cáo hoạt động đầu tư - Công ty trắng | báo cáo/quý | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-FDI-MON-6M` | Báo cáo giám sát đánh giá đầu tư - Công ty trắng | báo cáo/nửa năm | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-FDI-PRJ-Y` | Báo cáo thực hiện dự án đầu tư năm - Công ty trắng | báo cáo | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-CIT-Y` | Tờ khai quyết toán thuế TNDN - Công ty trắng | báo cáo | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-FS` | Báo cáo tài chính - Công ty trắng | báo cáo | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-PIT-Q` | Báo cáo thuế TNCN quý - Công ty trắng | báo cáo/quý | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |
| `REP-T-VAT-Q` | Báo cáo thuế GTGT quý - Công ty trắng | báo cáo/quý | 500.000 | tính khi xuất hóa đơn | 8% | không | oBacker tự thực hiện | oBacker |



---

## 3. PHẠM VI CÔNG VIỆC THEO MÃ

Phạm vi, thời gian và điều kiện áp dụng chép từ hệ thống danh mục sản phẩm. Mã không có dữ liệu ở sáu hạng mục sau đây thì không có mục riêng.



### ADD-BANK-ACC. Phụ Phí Quản Lý Tài Khoản Ngân Hàng Ngoài Định Mức

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Tiếp nhận sao kê điện tử, hạch toán dòng tiền thu - chi, phân loại chi phí và đối chiếu số dư sổ cái với sổ phụ ngân hàng cho 01 tài khoản ngân hàng vượt định mức gói. Kết quả là biên bản đối chiếu số dư tài khoản ngân hàng khớp 100% từng tháng. |
| Thời gian thực hiện | Tính tròn theo tháng phát sinh tài khoản mở thêm. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-FCT-RETURN. Phí Kê Khai Thuế Nhà Thầu Nước Ngoài (FCT) Phát Sinh Thêm

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập tờ khai thuế nhà thầu phát sinh theo từng lần thanh toán hoặc theo tháng đối với các hợp đồng dịch vụ xuyên biên giới (từ hợp đồng thứ 4 trở đi trong tháng đối với Google, Meta, AWS, OpenAI...). Kết quả là Tờ khai thuế nhà thầu Mẫu 01/NTNN có xác nhận tiếp nhận của cơ quan thuế và giấy nộp tiền vào NSNN. |
| Thời gian thực hiện | 02 ngày làm việc kể từ khi nhận chứng từ chuyển tiền quốc tế. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-PAYROLL-EMP. Phụ Phí Tính Lương & Quản Lý BHXH Nhân Sự Ngoài Định Mức

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Tính lương, lập bảng phân bổ lương, theo dõi hồ sơ tăng/giảm BHXH, tính thuế TNCN cho 01 nhân sự phát sinh ngoài định mức của gói Growth (vượt quá 30 người). Kết quả là phiếu lương cá nhân và danh sách đóng BHXH C12 khớp đúng. |
| Thời gian thực hiện | Chốt theo thông báo C12 cơ quan BHXH hàng tháng. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-PAYROLL-RUN. Phụ Phí Kỳ Chạy Lương Bổ Sung Trong Tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Thực hiện thêm 01 đợt chốt bảng chấm công, tính lương và lập danh sách chuyển khoản lương giữa tháng (dành cho nhân viên thời vụ, tạm ứng, hoa hồng). Kết quả là Bảng tính lương và lệnh chuyển tiền đợt bổ sung. |
| Thời gian thực hiện | 02 - 03 ngày làm việc kể từ khi nhận đủ dữ liệu chấm công. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-RETAIL-UNIT. Phụ Phí Nhập Liệu Đơn Bán Lẻ POS / TMĐT Không Bảng Kê Gom

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Xử lý và nhập liệu thủ công từng đơn hàng lẻ từ máy bán hàng POS hoặc sàn TMĐT (Shopee, TikTok) do khách hàng không cung cấp bảng kê tổng hợp Z-Report hoặc không kết nối cổng dữ liệu tập trung. Kết quả là từng giao dịch bán lẻ được định khoản doanh thu và thuế GTGT. |
| Thời gian thực hiện | Đối soát theo tháng phát sinh. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-TAX-INSPECT. Dịch Vụ Cử Nhân Sự Tham Gia Thanh Tra Thuế Trực Tiếp Tại Trụ Sở

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Cử chuyên viên kế toán cấp cao hoặc kế toán trưởng trực tiếp có mặt tại trụ sở khách hàng trong suốt thời gian đoàn thanh tra/kiểm tra thuế làm việc tại bàn. In ấn, đóng tập sổ sách, giải trình trực tiếp các nghiệp vụ hạch toán, cung cấp hóa đơn chứng từ và bảo vệ chi phí hợp lý của doanh nghiệp trước đoàn thanh tra.<br>- *Kết quả công việc:* Toàn bộ hồ sơ giải trình theo yêu cầu của đoàn kiểm tra; tham gia thảo luận biên bản làm việc và hỗ trợ rà soát Dự thảo Biên bản thanh tra thuế để bảo vệ quyền lợi tối đa cho doanh nghiệp. |
| Thời gian thực hiện | Theo toàn bộ thời gian làm việc thực tế của đoàn kiểm tra thuế tại trụ sở (thông thường 03 - 07 ngày làm việc). |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-TXN-BLOCK-1000. Phụ Phí Mở Rộng Định Mức: Block +1.000 Giao Dịch / Tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung hạn mức xử lý thêm 1.000 chứng từ/giao dịch kế toán trong một tháng dương lịch. Kết quả là toàn bộ 1.000 chứng từ phát sinh thêm được kiểm tra tính hợp pháp, hạch toán định khoản và tổng hợp lên báo cáo thuế. |
| Thời gian thực hiện | Đối soát và tính trong kỳ kế toán của tháng phát sinh. |
| Hạn dùng | 1 tháng |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-TXN-BLOCK-1500. Phụ Phí Mở Rộng Định Mức: Block +1.500 Giao Dịch / Tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung hạn mức xử lý thêm 1.500 chứng từ/giao dịch kế toán trong một tháng dương lịch. Toàn bộ chứng từ phát sinh được kiểm tra hợp lệ, hạch toán chi tiết và tổng hợp số liệu vào sổ cái. |
| Thời gian thực hiện | Đối soát và tính trong kỳ kế toán của tháng phát sinh. |
| Hạn dùng | 1 tháng |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-TXN-BLOCK-500. Phụ Phí Mở Rộng Định Mức: Block +500 Giao Dịch / Tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung hạn mức xử lý thêm 500 chứng từ/giao dịch kế toán trong một tháng dương lịch cho khách hàng đang sử dụng gói định kỳ. Kết quả là toàn bộ 500 chứng từ phát sinh được kiểm tra, hạch toán vào phần mềm kế toán và lưu trữ số hóa đầy đủ. |
| Thời gian thực hiện | Đối soát và tính trong kỳ kế toán của tháng phát sinh. |
| Hạn dùng | 1 tháng |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-TXN-PRIME-OVER. Phụ Phí Hóa Đơn Vượt Trần Gói Prime (Trên 7.000 Giao Dịch)

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Xử lý và hạch toán cho từng hóa đơn/chứng từ phát sinh vượt ngoài trần thỏa thuận của gói Partner Prime (từ giao dịch thứ 7.001 trở đi trong tháng). Kết quả là chứng từ vượt trần được hạch toán đầy đủ vào hệ thống. |
| Thời gian thực hiện | Đối soát thực tế cuối tháng; xuất hóa đơn đầu tháng tiếp theo. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### ADD-VOUCHER-RAW. Phụ Phí Nhập Liệu Chứng Từ Giấy Scan / Thủ Công Vượt Định Mức

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Nhập liệu thủ công từng dòng chi tiết, đối chiếu thông tin hóa đơn bán lẻ, biên lai thu tiền từ bản scan giấy không có dữ liệu số XML/Excel vượt định mức của gói. Kết quả là dữ liệu chứng từ số hóa được nhập đầy đủ vào phần mềm kế toán. |
| Thời gian thực hiện | Đối soát và tính trong kỳ xuất hóa đơn phụ phí hàng tháng. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

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
| Gói chứa hạng mục này | OBG-MTH1, OBG-ENT |

### OBG-ADD-INV5. Add-on: Dịch vụ xuất hóa đơn - Gói 5 hóa đơn/tháng

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Bổ sung dịch vụ xuất 05 hóa đơn điện tử đầu ra mỗi tháng, bao gồm kê khai trên phần mềm hóa đơn của khách hàng. |
| Dòng thuê bao | ADD-ON Dịch vụ xuất hóa đơn |
| Hạn dùng | 1 tháng |

### OBG-ADD-LEG2C. Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng

| Hạng mục | Nội dung |
| --- | --- |
| Dòng thuê bao | ADD-ON Tư vấn pháp lý |
| Số lượng tối thiểu | 12 |
| Kỳ thu tiền | thu trước |

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

### OBG-HEALTH-CHECK. Dịch Vụ Rà Soát Sức Khỏe Sổ Sách & Đánh Giá Rủi Ro Tuân Thủ Quá Khứ

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Áp dụng bắt buộc cho khách hàng hoạt động từ 01 năm trở lên trước khi nhận bàn giao sổ sách. Rà soát đối chiếu toàn bộ số liệu nợ thuế trên cổng eTax, nợ tiền đóng BHXH trên mẫu C12, đối chiếu số dư tiền gửi ngân hàng, kiểm tra tính hợp pháp của hóa đơn đầu vào, rà soát chi phí không được trừ khi tính thuế TNDN. (Khoản phí này được khấu trừ 100% vào hợp đồng khắc phục nếu khách hàng ký hợp đồng khắc phục với oBacker).<br>- *Kết quả công việc:* Báo cáo Rà soát Tuân thủ và Đánh giá Rủi ro (Compliance Health Check Report) chỉ rõ các sai lệch, nguy cơ bị xử phạt hành chính và đề xuất phương án khắc phục chi tiết. |
| Thời gian thực hiện | 05 ngày làm việc / 01 năm tài chính. |
| Hạn dùng | 1 năm |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-MTH1. Add-on: obacker Grow - Tháng đầu tiên thành lập công ty

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Dịch vụ kế toán - thuế và lao động tháng đầu tiên sau khi thành lập doanh nghiệp, bao gồm: khai báo thuế ban đầu; thiết lập hệ thống sổ sách; hỗ trợ trình diện thuế lần đầu với cơ quan thuế. |
| Điều kiện áp dụng | Chỉ áp dụng khi khách hàng thành lập vào tháng cuối cùng của quý VÀ có mua kèm bất kỳ gói obacker Grow nào. Áp dụng 1 lần duy nhất per tenant. |
| Dòng thuê bao | obacker Grow |
| Hạn dùng | 1 tháng |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-ENT |

### OBG-ONB-CORE. Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Core

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Tiếp nhận dữ liệu quá khứ từ đơn vị dịch vụ cũ hoặc file nội bộ của khách hàng; đối soát số dư đầu kỳ trên BCTC năm trước; khởi tạo danh mục tài khoản, tài sản, công nợ, kho lên phần mềm kế toán chuẩn; kiểm tra tính hợp lệ của chữ ký số và tài khoản thuế điện tử (đã bao gồm nạp lại tối đa 200 chứng từ lũy kế trong năm; từ chứng từ 201 trở đi thu 5.000 đ/chứng từ). Kết quả là Hệ thống kế toán số sẵn sàng vận hành và Bảng đối chiếu số dư đầu kỳ chuẩn xác. |
| Thời gian thực hiện | 05 - 07 ngày làm việc. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-CORE |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-ONB-GROWTH. Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Growth & Prime

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Chuyển đổi và chuẩn hóa toàn bộ cơ sở dữ liệu kế toán phức tạp theo Thông tư 99/2025/TT-BTC; đối soát số dư đa tài khoản ngân hàng, danh mục nhiều nhân sự BHXH, tồn kho đa điểm; thiết lập quy trình duyệt chứng từ điện tử qua oBacker OS (đã bao gồm nạp tối đa 200 chứng từ lũy kế; từ chứng từ 201 thu 5.000 đ/chứng từ). Kết quả là Cơ sở dữ liệu kế toán hoàn chỉnh trên hệ thống và Báo cáo kiểm tra tính nhất quán số dư chuyển giao. |
| Thời gian thực hiện | 07 - 10 ngày làm việc. |
| Kỳ thu tiền | thu trước |
| Gói chứa hạng mục này | OBG-PTR-GROWTH, OBG-PTR-PRIME |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-PTR-CORE. Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp Việt Nam

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Áp dụng Chế độ kế toán Doanh nghiệp siêu nhỏ theo Thông tư 58/2026/TT-BTC. Xử lý tối đa 500 chứng từ/giao dịch/tháng; quản lý tối đa 10 lao động tham gia BHXH; quản lý tối đa 02 tài khoản ngân hàng; chạy lương 01 kỳ/tháng. Thiết lập sổ sách kế toán, lập tờ khai thuế GTGT, TNCN quý, quyết toán thuế TNDN và TNCN năm; lập Báo cáo tài chính năm (mẫu B01-DNSN, B02-DNSN); hỗ trợ soạn thảo 02 văn bản nội bộ/năm; lưu trữ hồ sơ chứng từ số hóa.<br>- *Kết quả công việc:* Bộ hồ sơ khai thuế quý/năm có xác nhận nộp thành công qua Tổng cục Thuế (eTax); Báo cáo tài chính năm nộp đúng hạn; Sổ cái và sổ chi tiết kế toán hoàn chỉnh dạng số; Bảng lương và báo cáo đóng BHXH định kỳ. |
| Thời gian thực hiện | Cung cấp định kỳ theo năm tài chính (nghiệm thu và chốt số liệu theo tháng/quý; quyết toán BCTC trước 31/03 năm tiếp theo). |
| Dòng thuê bao | obacker Partner |
| Hạn dùng | 1 năm |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-PTR-CORE-FDI. Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp FDI

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Áp dụng Chế độ kế toán Doanh nghiệp theo Thông tư 99/2025/TT-BTC để bảo đảm điều kiện kiểm toán độc lập. Định mức cho doanh nghiệp FDI quy mô tinh gọn: tối đa 100 chứng từ/tháng; tối đa 03 lao động; 02 tài khoản ngân hàng (01 tài khoản vốn DICA + 01 tài khoản thanh toán VND). Kê khai thuế định kỳ; đối soát giao dịch vốn ngoại hối qua tài khoản DICA; lập báo cáo tình hình thực hiện dự án đầu tư định kỳ nộp Hệ thống Thông tin Quốc gia về Đầu tư (FIA); làm việc với đơn vị kiểm toán độc lập cung cấp số liệu BCTC cuối năm.<br>- *Kết quả công việc:* Tờ khai thuế định kỳ; Báo cáo tài chính theo Thông tư 99/2025/TT-BTC; Biên bản đối soát số dư vốn DICA; Báo cáo đầu tư FIA trực tuyến; Bàn giao hồ sơ số liệu cho công ty kiểm toán độc lập. |
| Thời gian thực hiện | Cung cấp định kỳ theo năm tài chính (nghiệm thu theo tháng/quý; hoàn thành kiểm toán và BCTC trước 31/03). |
| Dòng thuê bao | obacker Partner |
| Hạn dùng | 1 năm |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-PTR-GROWTH. Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp Việt Nam

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Áp dụng Chế độ kế toán Doanh nghiệp toàn diện theo Thông tư 99/2025/TT-BTC. Trần định mức: tối đa 1.500 chứng từ/giao dịch/tháng; quản lý bảng lương và BHXH đến 30 nhân sự; quản lý đến 05 tài khoản ngân hàng; chạy bảng lương tối đa 02 kỳ/tháng. Bao gồm: Kế toán trọn gói, thuế GTGT, TNCN, TNDN; lập trọn bộ Báo cáo tài chính đầy đủ (B01-DN, B02-DN, B03-DN Lưu chuyển tiền tệ, B09-DN Thuyết minh); hỗ trợ rà soát 02 hợp đồng thương mại/tháng (< 10 trang); miễn phí 02 lần thay đổi ĐKKD/năm; soạn thảo 06 văn bản nội bộ/năm; phối hợp và giải trình số liệu cho 01 đợt kiểm toán độc lập hàng năm.<br>- *Kết quả công việc:* Toàn bộ hồ sơ thuế nộp đúng hạn; Bộ BCTC chuẩn Thông tư 99 sẵn sàng phục vụ kiểm toán và gọi vốn; Báo cáo quản trị doanh thu - chi phí định kỳ; Ý kiến pháp lý rà soát hợp đồng; Giấy chứng nhận ĐKKD cập nhật mới. |
| Thời gian thực hiện | Định kỳ liên tục trong 12 tháng của năm tài chính. |
| Dòng thuê bao | obacker Partner |
| Hạn dùng | 1 năm |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-PTR-GROWTH-FDI. Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp FDI

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Áp dụng Thông tư 99/2025/TT-BTC. Xử lý trần cứng 1.500 chứng từ/tháng; quản lý đến 30 nhân sự; quản lý đến 05 tài khoản ngân hàng; chạy lương 02 kỳ/tháng. Tích hợp đầy đủ các nghĩa vụ pháp lý đặc thù của FDI: Kiểm soát luồng tiền tài khoản vốn đầu tư DICA và tài khoản thanh toán; lập và nộp báo cáo giám sát đầu tư định kỳ quý/năm trên cổng FIA; lập tờ khai giao dịch liên kết theo Nghị định 132/2020/NĐ-CP (nếu có); rà soát 02 hợp đồng thương mại/tháng; miễn phí 02 lần thay đổi ĐKKD (phần ERC)/năm; trực tiếp làm việc, bàn giao số liệu và bảo vệ báo cáo trước kiểm toán viên độc lập.<br>- *Kết quả công việc:* Hồ sơ thuế và BCTC kiểm toán hoàn chỉnh; Báo cáo đầu tư FIA trực tuyến; Báo cáo đối soát ngoại hối DICA định kỳ; Tờ khai giao dịch liên kết; Giấy chứng nhận ĐKKD điều chỉnh. |
| Thời gian thực hiện | Định kỳ liên tục trong 12 tháng của năm tài chính. |
| Dòng thuê bao | obacker Partner |
| Hạn dùng | 1 năm |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-PTR-PRIME. Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Chiến Lược May Đo (Partner Prime)

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Gói thiết kế chuyên biệt cho doanh nghiệp quy mô giao dịch lớn hoặc yêu cầu SLA khắt khe (từ 1.500 đến trên 7.000 chứng từ/tháng; quản lý đến 100 nhân sự; quản lý đến 10 tài khoản ngân hàng). Áp dụng Thông tư 99/2025/TT-BTC. Phân bổ Dedicated Account Manager (Quản lý khách hàng chuyên trách); rà soát 05 hợp đồng thương mại/tháng; miễn phí 04 lần thay đổi ĐKKD/năm; soạn thảo 12 văn bản nội bộ/năm; trưởng nhóm kế toán trực tiếp điều phối độc lập với công ty kiểm toán; hỗ trợ trực tiếp 01 đợt thanh tra thuế tại bàn ở mức cơ bản.<br>- *Kết quả công việc:* Hệ thống sổ sách xử lý theo ngày/tuần; Báo cáo quản trị dòng tiền, P&L hàng tháng; BCTC kiểm toán độc lập ban hành đúng hạn; Hồ sơ pháp lý và hợp đồng rà soát ưu tiên trong 24 giờ. |
| Thời gian thực hiện | Định kỳ liên tục trong 12 tháng của năm tài chính. |
| Dòng thuê bao | obacker Partner |
| Hạn dùng | 1 năm |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-RESTATE-BASE. Dịch Vụ Khắc Phục & Lập Lại Sổ Sách Kế Toán - Khung Cơ Sở

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | - *Phạm vi dịch vụ:* Dựng lại hệ thống tài khoản, hạch toán lại các bút toán sai lệch, đối soát số dư đầu kỳ và cuối kỳ, lập lại Bảng cân đối số phát sinh và bộ Báo cáo tài chính năm hoàn chỉnh (áp dụng hệ số chế độ: TT 58 $K=1,0$; TT 133 $K=1,2$; TT 99/200 $K=1,5$. Đã bao gồm 100 chứng từ đầu tiên; từ 101 - 500 chứng từ thu thêm 15.000 đ/chứng từ; từ 501 chứng từ thu thêm 10.000 đ/chứng từ).<br>- *Kết quả công việc:* Bộ sổ sách kế toán hoàn chỉnh (Sổ nhật ký chung, sổ cái, sổ chi tiết); Bộ Báo cáo tài chính năm điều chỉnh hợp thức; Hỗ trợ nộp BCTC thay thế lên cổng thông tin thuế. |
| Thời gian thực hiện | 10 - 20 ngày làm việc / 01 năm tài chính. |
| Hạn dùng | 1 năm |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

### OBG-TAX-AMEND. Dịch Vụ Lập Hồ Sơ Khai Bổ Sung Điều Chỉnh Thuế

| Hạng mục | Nội dung |
| --- | --- |
| Phạm vi công việc | Lập hồ sơ khai thuế bổ sung, điều chỉnh cho 01 sắc thuế (GTGT, TNCN, TNDN) trong 01 kỳ tính thuế bị sai sót trong quá khứ. Bao gồm: lập Tờ khai thuế điều chỉnh, Tờ khai bổ sung Mẫu số 01/KHBS, Bản giải trình khai bổ sung Mẫu số 01-1/KHBS theo Luật Quản lý thuế số 108/2025/QH15 và Nghị định 126/2020/NĐ-CP; tính toán số tiền thuế chậm nộp (nếu có); nộp hồ sơ qua mạng thuế điện tử. Kết quả là Hồ sơ khai bổ sung hoàn chỉnh kèm thông báo tiếp nhận của cơ quan thuế. |
| Thời gian thực hiện | 02 - 03 ngày làm việc. |
| Kỳ thu tiền | thu trước |
| Ghi chú | Master SKU Catalog 2026 |

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
| 28/09/2026 | R.1.1.0 | Cập nhật biểu phí kế toán và thuế, bổ sung các gói Partner Core/Growth/Prime, add-on chứng từ (ADD-TXN-*), onboarding di trú và rà soát sức khỏe sổ sách |
