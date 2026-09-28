---
title: "GÓI DỊCH VỤ VÀ HẠNG MỤC KÈM GÓI"
code: "OBK-DM-GOI"
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
  - OBK-DM-GOI
  - obacker Grow
  - obacker Partner
tags:
  - loai/danh-muc
  - cap/danh-muc
---

# GÓI DỊCH VỤ VÀ HẠNG MỤC KÈM GÓI

## Danh mục, áp dụng cho việc tra một gói và các hạng mục bán kèm gói đó

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-DM-GOI |
| Cấp tài liệu | Danh mục |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 15/09/2026 |
| Người biên soạn | `CEO` |
| Người soát | đã soát |
| Người phê duyệt | đã phê duyệt |
| Văn bản cấp trên | [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] Danh mục dịch vụ và bảng giá |
| Số gói đối tác obacker Partner | 5 |
| Số phụ phí FUP và vận hành | 11 |
| Số gói back office obacker Grow (chuyển tiếp) | 1 |
| Số hạng mục kèm gói chuyển tiếp | 12 |
| Nguồn dữ liệu | `_du_lieu_danh_muc/danh_muc.tsv`, kết xuất ngày 15/09/2026 |
| Nguồn dữ liệu | Bản kết xuất danh mục sản phẩm |

> [!note] BẢN SINH TỰ ĐỘNG
> Nội dung sinh lại từ bản kết xuất của hệ thống danh mục sản phẩm.
> Bản gốc của mức giá và của mô tả là hệ thống danh mục sản phẩm.

---

## 1. CÁC QUAN HỆ GIỮA CÁC MÃ GÓI VÀ HẠNG MỤC

Sáu trang bảng giá xếp mã theo mảng dịch vụ và theo thứ tự chữ cái. Trang này tổng hợp các mã theo kiến trúc gói dịch vụ của oBacker. Dữ liệu đầy đủ của một mã nằm ở trang bảng giá của mảng tương ứng.

| Loại | Nghĩa | Mục |
| --- | --- | --- |
| Gói đối tác obacker Partner | gói đối tác kế toán, thuế và quản trị định kỳ chuẩn hóa | mục 2 |
| Phụ phí FUP & vận hành | phụ phí vượt định mức giao dịch, lao động, ngân hàng hàng tháng | mục 3 |
| Onboarding & Khắc phục sổ sách | phí chuyển đổi dữ liệu ban đầu và lập lại sổ sách quá khứ | mục 4 |
| Gói thành lập doanh nghiệp | gói combo trọn gói thành lập pháp nhân và công cụ số | mục 5 |
| Dòng thuê bao khác | nhiều mã cùng một dòng sản phẩm, khác nhau ở thời hạn | mục 6 |
| Gói obacker Grow chuyển tiếp | gói cũ dành cho khách hàng hiện hữu đang trong hợp đồng | mục 7 |

---

## 2. GÓI ĐỐI TÁC ĐỊNH KỲ obacker Partner

Gói đối tác quản trị kế toán - thuế định kỳ theo năm tài chính (nghiệm thu theo tháng hoặc quý). Mức giá niêm yết tính theo năm, chưa bao gồm thuế giá trị gia tăng.



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `OBG-PTR-CORE` | Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp Việt Nam | năm | 27.000.000 | 29.700.000 |
| `OBG-PTR-CORE-FDI` | Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp FDI | năm | 40.500.000 | 44.550.000 |
| `OBG-PTR-GROWTH` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp Việt Nam | năm | 84.000.000 | 92.400.000 |
| `OBG-PTR-GROWTH-FDI` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp FDI | năm | 113.400.000 | 124.740.000 |
| `OBG-PTR-PRIME` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Chiến Lược May Đo (Partner Prime) | năm | 180.000.000 | 198.000.000 |



---

## 3. PHỤ PHÍ VƯỢT ĐỊNH MỨC FUP VÀ VẬN HÀNH HÀNG THÁNG

Các khoản phụ phí đối soát và phát hành hóa đơn định kỳ hàng tháng dương lịch (Post-billing).



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này |
| --- | --- | --- | --- | --- | --- |
| `ADD-BANK-ACC` | Phụ Phí Quản Lý Tài Khoản Ngân Hàng Ngoài Định Mức | tài khoản | 100.000 | 110.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-FCT-RETURN` | Phí Kê Khai Thuế Nhà Thầu Nước Ngoài (FCT) Phát Sinh Thêm | tờ khai | 500.000 | 550.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-PAYROLL-EMP` | Phụ Phí Tính Lương & Quản Lý BHXH Nhân Sự Ngoài Định Mức | người lao động | 100.000 | 110.000 | OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-PAYROLL-RUN` | Phụ Phí Kỳ Chạy Lương Bổ Sung Trong Tháng | kỳ | 500.000 | 550.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-RETAIL-UNIT` | Phụ Phí Nhập Liệu Đơn Bán Lẻ POS / TMĐT Không Bảng Kê Gom | đơn hàng | 5.000 | 5.500 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TAX-INSPECT` | Dịch Vụ Cử Nhân Sự Tham Gia Thanh Tra Thuế Trực Tiếp Tại Trụ Sở | kỳ | 15.000.000 | 16.500.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-BLOCK-1000` | Phụ Phí Mở Rộng Định Mức: Block +1.000 Giao Dịch / Tháng | tháng | 2.500.000 | 2.750.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-BLOCK-1500` | Phụ Phí Mở Rộng Định Mức: Block +1.500 Giao Dịch / Tháng | tháng | 3.500.000 | 3.850.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-BLOCK-500` | Phụ Phí Mở Rộng Định Mức: Block +500 Giao Dịch / Tháng | tháng | 1.500.000 | 1.650.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-PRIME-OVER` | Phụ Phí Hóa Đơn Vượt Trần Gói Prime (Trên 7.000 Giao Dịch) | hóa đơn | 12.000 | 13.200 | OBG-PTR-PRIME |
| `ADD-VOUCHER-RAW` | Phụ Phí Nhập Liệu Chứng Từ Giấy Scan / Thủ Công Vượt Định Mức | chứng từ | 10.000 | 11.000 | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |



---

## 4. ONBOARDING, RÀ SOÁT SỨC KHỎE VÀ KHẮC PHỤC SỔ SÁCH

Dịch vụ thiết lập ban đầu, di trú dữ liệu và xử lý tồn đọng sổ sách quá khứ.



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này |
| --- | --- | --- | --- | --- | --- |
| `OBG-HEALTH-CHECK` | Dịch Vụ Rà Soát Sức Khỏe Sổ Sách & Đánh Giá Rủi Ro Tuân Thủ Quá Khứ | năm | 3.000.000 | 3.300.000 | chưa ghi |
| `OBG-ONB-CORE` | Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Core | lần | 3.000.000 | 3.300.000 | OBG-PTR-CORE |
| `OBG-ONB-GROWTH` | Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Growth & Prime | lần | 6.000.000 | 6.600.000 | OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `OBG-RESTATE-BASE` | Dịch Vụ Khắc Phục & Lập Lại Sổ Sách Kế Toán - Khung Cơ Sở | năm | 6.000.000 | 6.600.000 | chưa ghi |
| `OBG-TAX-AMEND` | Dịch Vụ Lập Hồ Sơ Khai Bổ Sung Điều Chỉnh Thuế | tờ khai | 500.000 | 550.000 | chưa ghi |



---

## 5. GÓI THÀNH LẬP DOANH NGHIỆP TRỌN GÓI



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- |
| `OBL-CNC` | Đăng ký thành lập công ty tại Khu công nghệ cao (CNC) Đà Nẵng | gói | chưa có giá | chưa có giá | chưa ghi |
| `OBL-CPX` | Thành lập công ty - Ngành nghề phức tạp | gói | chưa có giá | chưa có giá | MB-HOUT-300, MB-USB-DN-NEW-1Y, TRD-STAMP, MB-EC-50 |
| `OBL-DI` | Combo Thành Lập Doanh Nghiệp FDI Mới Trọn Gói (Full Setup Direct Investment) | gói | 55.000.000 | 60.500.000 | F-FDI-NEW, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-DMST` | Đăng ký doanh nghiệp Đổi mới sáng tạo | gói | 15.000.000 | 16.200.000 | chưa ghi |
| `OBL-IFC-UNCON` | Thành lập công ty thành viên IFC Đà Nẵng - Ngành nghề không điều kiện | gói | chưa có giá | chưa có giá | chưa ghi |
| `OBL-IFC-UNCON-BP` | Thành lập công ty thành viên IFC Đà Nẵng - Ngành nghề không điều kiện - Kế hoạch kinh doanh | gói | chưa có giá | chưa có giá | chưa ghi |
| `OBL-MA` | Combo Đăng Ký Góp Vốn M&A Doanh Nghiệp FDI Trọn Gói (Full Setup M&A) | gói | 45.000.000 | 49.500.000 | F-FDI-MA, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-STD` | Combo Thành Lập Công Ty Việt Nam Tiêu Chuẩn Trọn Gói | gói | 5.000.000 | 5.500.000 | F-VN-ERC, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `PER-WP-M-TRC` | Combo Giấy Phép Lao Động Lộ Trình Quản Lý & Thẻ Tạm Trú Trọn Gói | gói | 25.000.000 | 27.500.000 | PER-WP-NEW, PER-TRC |



### Hạng mục chỉ bán kèm gói thành lập doanh nghiệp



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- | --- |
| `OBL-ADD-BH` | Add-on: Bảo hộ nhãn hiệu | gói | 4.000.000 | 4.320.000 | OBL-STD, OBL-DI, OBL-MA | IP-TM-SEARCH, IP-TM-REG-1 |
| `OBL-ADD-NCC` | Add-on: Nâng cấp Làm việc từ xa | gói | 5.972.000 | 6.540.880 | OBL-STD, OBL-DI, OBL-MA | MB-TT-DN-1Y, TRD-VOFC, TRD-SIGN |



---

## 6. DÒNG THUÊ BAO KHÁC

Mỗi dòng thuê bao gồm nhiều mã khác nhau ở thời hạn.



### Cổ đông danh nghĩa

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `LICE-NDIR-VN` | Cổ đông danh nghĩa (VN) | người/năm | chưa có giá | chưa có giá |

### CKS Tập trung doanh nghiệp

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-TT-DN-1Y` | CKS Tập trung Doanh nghiệp - 1 năm | gói | 1.272.000 | 1.370.880 |
| `MB-TT-DN-2Y` | CKS Tập trung Doanh nghiệp - 2 năm | gói | 2.544.000 | 2.741.760 |
| `MB-TT-DN-3Y` | CKS Tập trung Doanh nghiệp - 3 năm | gói | 3.816.000 | 4.112.640 |

### CKS Tập trung Nhân viên

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-TT-NV-1Y` | CKS Tập trung Nhân viên - 1 năm | gói | 390.000 | 421.200 |
| `MB-TT-NV-2Y` | CKS Tập trung Nhân viên - 2 năm | gói | 780.000 | 842.400 |
| `MB-TT-NV-3Y` | CKS Tập trung Nhân viên - 3 năm | gói | 1.170.000 | 1.263.600 |

### Chứng thư số Token Cá nhân

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-CN-CTS-1Y` | Chứng thư số Token Cá nhân - 1 năm | gói | 364.000 | 393.120 |
| `MB-USB-CN-CTS-2Y` | Chứng thư số Token Cá nhân - 2 năm | gói | 628.000 | 678.240 |
| `MB-USB-CN-CTS-3Y` | Chứng thư số Token Cá nhân - 3 năm | gói | 840.000 | 907.200 |
| `MB-USB-CN-NEW-1Y` | CKS USB Token Cá nhân - ĐK mới - 1 năm | gói | 563.000 | 608.040 |
| `MB-USB-CN-NEW-2Y` | CKS USB Token Cá nhân - ĐK mới - 2 năm | gói | 827.000 | 893.160 |
| `MB-USB-CN-NEW-3Y` | CKS USB Token Cá nhân - ĐK mới - 3 năm | gói | 1.039.000 | 1.122.120 |

### Chứng thư số Token Doanh nghiệp

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-DN-CTS-1Y` | Chứng thư số Token Doanh nghiệp - 1 năm | gói | 600.000 | 645.120 |
| `MB-USB-DN-CTS-2Y` | Chứng thư số Token Doanh nghiệp - 2 năm | gói | 1.000.000 | 1.074.240 |
| `MB-USB-DN-CTS-3Y` | Chứng thư số Token Doanh nghiệp - 3 năm | gói | 1.398.000 | 1.501.200 |
| `MB-USB-DN-NEW-1Y` | CKS USB Token Doanh nghiệp - ĐK mới - 1 năm | gói | 899.000 | 968.040 |
| `MB-USB-DN-NEW-2Y` | CKS USB Token Doanh nghiệp - ĐK mới - 2 năm | gói | 1.299.000 | 1.397.160 |
| `MB-USB-DN-NEW-3Y` | CKS USB Token Doanh nghiệp - ĐK mới - 3 năm | gói | 1.697.000 | 1.824.120 |

### Chứng thư số Token Hộ kinh doanh

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-HKD-CTS-1Y` | Chứng thư số Token Hộ kinh doanh - 1 năm | gói | 500.000 | 537.120 |
| `MB-USB-HKD-CTS-2Y` | Chứng thư số Token Hộ kinh doanh - 2 năm | gói | 900.000 | 966.240 |
| `MB-USB-HKD-CTS-3Y` | Chứng thư số Token Hộ kinh doanh - 3 năm | gói | 1.248.000 | 1.339.200 |
| `MB-USB-HKD-NEW-1Y` | CKS USB Token Hộ kinh doanh - ĐK mới - 1 năm | gói | 799.000 | 860.040 |
| `MB-USB-HKD-NEW-2Y` | CKS USB Token Hộ kinh doanh - ĐK mới - 2 năm | gói | 1.199.000 | 1.289.160 |
| `MB-USB-HKD-NEW-3Y` | CKS USB Token Hộ kinh doanh - ĐK mới - 3 năm | gói | 1.547.000 | 1.662.920 |

### Chứng thư số Token Nhân viên

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-NV-CTS-1Y` | Chứng thư số Token Nhân viên - 1 năm | gói | 364.000 | 393.120 |
| `MB-USB-NV-CTS-2Y` | Chứng thư số Token Nhân viên - 2 năm | gói | 628.000 | 678.240 |
| `MB-USB-NV-CTS-3Y` | Chứng thư số Token Nhân viên - 3 năm | gói | 840.000 | 907.200 |
| `MB-USB-NV-NEW-1Y` | CKS USB Token Nhân viên - ĐK mới - 1 năm | gói | 563.000 | 608.040 |
| `MB-USB-NV-NEW-2Y` | CKS USB Token Nhân viên - ĐK mới - 2 năm | gói | 827.000 | 893.160 |
| `MB-USB-NV-NEW-3Y` | CKS USB Token Nhân viên - ĐK mới - 3 năm | gói | 1.039.000 | 1.122.120 |

### Giám đốc danh nghĩa - Singapore

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `SG-NDIR` | Giám đốc danh nghĩa - Singapore | người/năm | chưa có giá | chưa có giá |

### Văn phòng ảo & mail box - Singapore

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `SG-OFFICE` | Văn phòng ảo & mail box - Singapore | năm | chưa có giá | chưa có giá |

### Thư ký công ty - Singapore

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `SG-SEC` | Thư ký công ty - Singapore | người/năm | chưa có giá | chưa có giá |

### Văn phòng ảo

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `TRD-VOFC` | Văn phòng ảo - 12 tháng | gói | 6.000.000 | 6.600.000 |



---

## 7. GÓI BACK OFFICE obacker Grow (CHUYỂN TIẾP)

Áp dụng cho khách hàng hiện hữu đang thực hiện hợp đồng. Không áp dụng cho khách hàng ký mới.





### Gói Enterprise

| Mã | Tên gói | Đơn vị tính | Giá chưa thuế GTGT |
| --- | --- | --- | --- |
| `OBG-ENT` | obacker Grow - Gói Enterprise | tháng | chưa có giá |

Gói Enterprise không có mức giá niêm yết. Mức giá của gói đó xác định theo từng khách.

### Hạng mục kèm gói obacker Grow chuyển tiếp

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này |
| --- | --- | --- | --- | --- | --- |
| `OBG-ADD-ACC-TRANS` | Chuyển đổi dữ liệu kế toán | lần | chưa có giá | chưa có giá | chưa ghi |
| `OBG-ADD-FLR` | Báo cáo vay/trả nợ nước ngoài | báo cáo/tháng | 500.000 | 540.000 | chưa ghi |
| `OBG-ADD-HR5` | Add-on: Thêm 5 nhân sự tính lương | tháng | 675.000 | 729.000 | OBG-ENT |
| `OBG-ADD-INV-FIX` | Xử lý hóa đơn sai sót | hóa đơn | 500.000 | 540.000 | OBG-MTH1, OBG-ENT |
| `OBG-ADD-INV1` | Add-on: Xuất 01 hóa đơn lẻ | hóa đơn | 150.000 | 162.000 | chưa ghi |
| `OBG-ADD-INV5` | Add-on: Dịch vụ xuất hóa đơn - Gói 5 hóa đơn/tháng | tháng | 400.000 | 432.000 | chưa ghi |
| `OBG-ADD-LEG2C` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | gói | 1.700.000 | 1.836.000 | chưa ghi |
| `OBG-ADD-LEG2H` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | tháng | 1.700.000 | 1.836.000 | OBG-ENT |
| `OBG-ADD-PRF` | Thông báo chuyển lợi nhuận ra nước ngoài | báo cáo | 500.000 | 540.000 | chưa ghi |
| `OBG-ADD-TPR` | Kê khai giao dịch & hồ sơ giá giao dịch liên kết | báo cáo | 500.000 | 540.000 | chưa ghi |
| `OBG-ADD-TRX100` | Add-on: Thêm 100 giao dịch kế toán/tháng | tháng | 900.000 | 972.000 | OBG-ENT |
| `OBG-MTH1` | Add-on: obacker Grow - Tháng đầu tiên thành lập công ty | tháng | 0 | 0 | OBG-ENT |



---

## 8. HẠNG MỤC CÓ GHI THÀNH PHẦN

Danh sách mọi mã có ghi hạng mục thành phần trong hệ thống danh mục sản phẩm.



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- |
| `OBL-ADD-BH` | Add-on: Bảo hộ nhãn hiệu | gói | 4.000.000 | 4.320.000 | IP-TM-SEARCH, IP-TM-REG-1 |
| `OBL-ADD-NCC` | Add-on: Nâng cấp Làm việc từ xa | gói | 5.972.000 | 6.540.880 | MB-TT-DN-1Y, TRD-VOFC, TRD-SIGN |
| `OBL-CPX` | Thành lập công ty - Ngành nghề phức tạp | gói | chưa có giá | chưa có giá | MB-HOUT-300, MB-USB-DN-NEW-1Y, TRD-STAMP, MB-EC-50 |
| `OBL-DI` | Combo Thành Lập Doanh Nghiệp FDI Mới Trọn Gói (Full Setup Direct Investment) | gói | 55.000.000 | 60.500.000 | F-FDI-NEW, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-MA` | Combo Đăng Ký Góp Vốn M&A Doanh Nghiệp FDI Trọn Gói (Full Setup M&A) | gói | 45.000.000 | 49.500.000 | F-FDI-MA, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-STD` | Combo Thành Lập Công Ty Việt Nam Tiêu Chuẩn Trọn Gói | gói | 5.000.000 | 5.500.000 | F-VN-ERC, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `PER-WP-M-TRC` | Combo Giấy Phép Lao Động Lộ Trình Quản Lý & Thẻ Tạm Trú Trọn Gói | gói | 25.000.000 | 27.500.000 | PER-WP-NEW, PER-TRC |



---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 28/09/2026 | R.1.1.0 | Hợp nhất kiến trúc ba gói đối tác Partner Core, Partner Growth, Partner Prime, bổ sung gói FUP Add-on và chính sách trần 1.500 chứng từ/tháng |
