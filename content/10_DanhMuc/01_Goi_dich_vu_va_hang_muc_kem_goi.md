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
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
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
| `OBG-PTR-CORE` | Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp Việt Nam | năm | 27.000.000 | tính khi xuất hóa đơn |
| `OBG-PTR-CORE-FDI` | Gói Dịch Vụ Đối Tác Kế Toán & Thuế Nền Tảng (Partner Core) - Doanh Nghiệp FDI | năm | 40.500.000 | tính khi xuất hóa đơn |
| `OBG-PTR-GROWTH` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp Việt Nam | năm | 84.000.000 | tính khi xuất hóa đơn |
| `OBG-PTR-GROWTH-FDI` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Tăng Trưởng (Partner Growth) - Doanh Nghiệp FDI | năm | 113.400.000 | tính khi xuất hóa đơn |
| `OBG-PTR-PRIME` | Gói Dịch Vụ Đối Tác Kế Toán & Quản Trị Chiến Lược May Đo (Partner Prime) | năm | 180.000.000 | tính khi xuất hóa đơn |



---

## 3. PHỤ PHÍ VƯỢT ĐỊNH MỨC FUP VÀ VẬN HÀNH HÀNG THÁNG

Các khoản phụ phí đối soát và phát hành hóa đơn định kỳ hàng tháng dương lịch (Post-billing).



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này |
| --- | --- | --- | --- | --- | --- |
| `ADD-BANK-ACC` | Phụ Phí Quản Lý Tài Khoản Ngân Hàng Ngoài Định Mức | tài khoản | 100.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-FCT-RETURN` | Phí Kê Khai Thuế Nhà Thầu Nước Ngoài (FCT) Phát Sinh Thêm | tờ khai | 500.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-PAYROLL-EMP` | Phụ Phí Tính Lương & Quản Lý BHXH Nhân Sự Ngoài Định Mức | người lao động | 100.000 | tính khi xuất hóa đơn | OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-PAYROLL-RUN` | Phụ Phí Kỳ Chạy Lương Bổ Sung Trong Tháng | kỳ | 500.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-RETAIL-UNIT` | Phụ Phí Nhập Liệu Đơn Bán Lẻ POS / TMĐT Không Bảng Kê Gom | đơn hàng | 5.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TAX-INSPECT` | Dịch Vụ Cử Nhân Sự Tham Gia Thanh Tra Thuế Trực Tiếp Tại Trụ Sở | kỳ | 15.000.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-BLOCK-1000` | Phụ Phí Mở Rộng Định Mức: Block +1.000 Giao Dịch / Tháng | tháng | 2.500.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-BLOCK-1500` | Phụ Phí Mở Rộng Định Mức: Block +1.500 Giao Dịch / Tháng | tháng | 3.500.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-BLOCK-500` | Phụ Phí Mở Rộng Định Mức: Block +500 Giao Dịch / Tháng | tháng | 1.500.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `ADD-TXN-PRIME-OVER` | Phụ Phí Hóa Đơn Vượt Trần Gói Prime (Trên 7.000 Giao Dịch) | hóa đơn | 12.000 | tính khi xuất hóa đơn | OBG-PTR-PRIME |
| `ADD-VOUCHER-RAW` | Phụ Phí Nhập Liệu Chứng Từ Giấy Scan / Thủ Công Vượt Định Mức | chứng từ | 10.000 | tính khi xuất hóa đơn | OBG-PTR-CORE, OBG-PTR-GROWTH, OBG-PTR-PRIME |



---

## 4. ONBOARDING, RÀ SOÁT SỨC KHỎE VÀ KHẮC PHỤC SỔ SÁCH

Dịch vụ thiết lập ban đầu, di trú dữ liệu và xử lý tồn đọng sổ sách quá khứ.



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này |
| --- | --- | --- | --- | --- | --- |
| `OBG-HEALTH-CHECK` | Dịch Vụ Rà Soát Sức Khỏe Sổ Sách & Đánh Giá Rủi Ro Tuân Thủ Quá Khứ | năm | 3.000.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ONB-CORE` | Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Core | lần | 3.000.000 | tính khi xuất hóa đơn | OBG-PTR-CORE |
| `OBG-ONB-GROWTH` | Phí Thiết Lập Ban Đầu & Di Trú Dữ Liệu Kế Toán - Gói Growth & Prime | lần | 6.000.000 | tính khi xuất hóa đơn | OBG-PTR-GROWTH, OBG-PTR-PRIME |
| `OBG-RESTATE-BASE` | Dịch Vụ Khắc Phục & Lập Lại Sổ Sách Kế Toán - Khung Cơ Sở | năm | 6.000.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-TAX-AMEND` | Dịch Vụ Lập Hồ Sơ Khai Bổ Sung Điều Chỉnh Thuế | tờ khai | 500.000 | tính khi xuất hóa đơn | chưa ghi |



---

## 5. GÓI THÀNH LẬP DOANH NGHIỆP TRỌN GÓI



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- |
| `OBL-CNC` | Đăng ký thành lập công ty tại Khu công nghệ cao (CNC) Đà Nẵng | gói | chưa có giá | tính khi xuất hóa đơn | chưa ghi |
| `OBL-CPX` | Thành lập công ty - Ngành nghề phức tạp | gói | chưa có giá | tính khi xuất hóa đơn | MB-HOUT-300, MB-USB-DN-NEW-1Y, TRD-STAMP, MB-EC-50 |
| `OBL-DI` | Combo Thành Lập Doanh Nghiệp FDI Mới Trọn Gói (Full Setup Direct Investment) | gói | 55.000.000 | tính khi xuất hóa đơn | F-FDI-NEW, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-DMST` | Đăng ký doanh nghiệp Đổi mới sáng tạo | gói | 15.000.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBL-IFC-UNCON` | Thành lập công ty thành viên IFC Đà Nẵng - Ngành nghề không điều kiện | gói | chưa có giá | tính khi xuất hóa đơn | chưa ghi |
| `OBL-IFC-UNCON-BP` | Thành lập công ty thành viên IFC Đà Nẵng - Ngành nghề không điều kiện - Kế hoạch kinh doanh | gói | chưa có giá | tính khi xuất hóa đơn | chưa ghi |
| `OBL-MA` | Combo Đăng Ký Góp Vốn M&A Doanh Nghiệp FDI Trọn Gói (Full Setup M&A) | gói | 45.000.000 | tính khi xuất hóa đơn | F-FDI-MA, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-STD` | Combo Thành Lập Công Ty Việt Nam Tiêu Chuẩn Trọn Gói | gói | 5.000.000 | tính khi xuất hóa đơn | F-VN-ERC, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `PER-WP-M-TRC` | Combo Giấy Phép Lao Động Lộ Trình Quản Lý & Thẻ Tạm Trú Trọn Gói | gói | 25.000.000 | tính khi xuất hóa đơn | PER-WP-NEW, PER-TRC |



### Hạng mục chỉ bán kèm gói thành lập doanh nghiệp



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- | --- |
| `OBL-ADD-BH` | Add-on: Bảo hộ nhãn hiệu | gói | 4.000.000 | tính khi xuất hóa đơn | OBL-STD, OBL-DI, OBL-MA | IP-TM-SEARCH, IP-TM-REG-1 |
| `OBL-ADD-NCC` | Add-on: Nâng cấp Làm việc từ xa | gói | 5.972.000 | tính khi xuất hóa đơn | OBL-STD, OBL-DI, OBL-MA | MB-TT-DN-1Y, TRD-VOFC, TRD-SIGN |



---

## 6. DÒNG THUÊ BAO KHÁC

Mỗi dòng thuê bao gồm nhiều mã khác nhau ở thời hạn.



### Cổ đông danh nghĩa

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `LICE-NDIR-VN` | Cổ đông danh nghĩa (VN) | người/năm | chưa có giá | tính khi xuất hóa đơn |

### CKS Tập trung doanh nghiệp

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-TT-DN-1Y` | CKS Tập trung Doanh nghiệp - 1 năm | gói | 1.272.000 | tính khi xuất hóa đơn |
| `MB-TT-DN-2Y` | CKS Tập trung Doanh nghiệp - 2 năm | gói | 2.544.000 | tính khi xuất hóa đơn |
| `MB-TT-DN-3Y` | CKS Tập trung Doanh nghiệp - 3 năm | gói | 3.816.000 | tính khi xuất hóa đơn |

### CKS Tập trung Nhân viên

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-TT-NV-1Y` | CKS Tập trung Nhân viên - 1 năm | gói | 390.000 | tính khi xuất hóa đơn |
| `MB-TT-NV-2Y` | CKS Tập trung Nhân viên - 2 năm | gói | 780.000 | tính khi xuất hóa đơn |
| `MB-TT-NV-3Y` | CKS Tập trung Nhân viên - 3 năm | gói | 1.170.000 | tính khi xuất hóa đơn |

### Chứng thư số Token Cá nhân

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-CN-CTS-1Y` | Chứng thư số Token Cá nhân - 1 năm | gói | 364.000 | tính khi xuất hóa đơn |
| `MB-USB-CN-CTS-2Y` | Chứng thư số Token Cá nhân - 2 năm | gói | 628.000 | tính khi xuất hóa đơn |
| `MB-USB-CN-CTS-3Y` | Chứng thư số Token Cá nhân - 3 năm | gói | 840.000 | tính khi xuất hóa đơn |
| `MB-USB-CN-NEW-1Y` | CKS USB Token Cá nhân - ĐK mới - 1 năm | gói | 563.000 | tính khi xuất hóa đơn |
| `MB-USB-CN-NEW-2Y` | CKS USB Token Cá nhân - ĐK mới - 2 năm | gói | 827.000 | tính khi xuất hóa đơn |
| `MB-USB-CN-NEW-3Y` | CKS USB Token Cá nhân - ĐK mới - 3 năm | gói | 1.039.000 | tính khi xuất hóa đơn |

### Chứng thư số Token Doanh nghiệp

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-DN-CTS-1Y` | Chứng thư số Token Doanh nghiệp - 1 năm | gói | 600.000 | tính khi xuất hóa đơn |
| `MB-USB-DN-CTS-2Y` | Chứng thư số Token Doanh nghiệp - 2 năm | gói | 1.000.000 | tính khi xuất hóa đơn |
| `MB-USB-DN-CTS-3Y` | Chứng thư số Token Doanh nghiệp - 3 năm | gói | 1.398.000 | tính khi xuất hóa đơn |
| `MB-USB-DN-NEW-1Y` | CKS USB Token Doanh nghiệp - ĐK mới - 1 năm | gói | 899.000 | tính khi xuất hóa đơn |
| `MB-USB-DN-NEW-2Y` | CKS USB Token Doanh nghiệp - ĐK mới - 2 năm | gói | 1.299.000 | tính khi xuất hóa đơn |
| `MB-USB-DN-NEW-3Y` | CKS USB Token Doanh nghiệp - ĐK mới - 3 năm | gói | 1.697.000 | tính khi xuất hóa đơn |

### Chứng thư số Token Hộ kinh doanh

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-HKD-CTS-1Y` | Chứng thư số Token Hộ kinh doanh - 1 năm | gói | 500.000 | tính khi xuất hóa đơn |
| `MB-USB-HKD-CTS-2Y` | Chứng thư số Token Hộ kinh doanh - 2 năm | gói | 900.000 | tính khi xuất hóa đơn |
| `MB-USB-HKD-CTS-3Y` | Chứng thư số Token Hộ kinh doanh - 3 năm | gói | 1.248.000 | tính khi xuất hóa đơn |
| `MB-USB-HKD-NEW-1Y` | CKS USB Token Hộ kinh doanh - ĐK mới - 1 năm | gói | 799.000 | tính khi xuất hóa đơn |
| `MB-USB-HKD-NEW-2Y` | CKS USB Token Hộ kinh doanh - ĐK mới - 2 năm | gói | 1.199.000 | tính khi xuất hóa đơn |
| `MB-USB-HKD-NEW-3Y` | CKS USB Token Hộ kinh doanh - ĐK mới - 3 năm | gói | 1.547.000 | tính khi xuất hóa đơn |

### Chứng thư số Token Nhân viên

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `MB-USB-NV-CTS-1Y` | Chứng thư số Token Nhân viên - 1 năm | gói | 364.000 | tính khi xuất hóa đơn |
| `MB-USB-NV-CTS-2Y` | Chứng thư số Token Nhân viên - 2 năm | gói | 628.000 | tính khi xuất hóa đơn |
| `MB-USB-NV-CTS-3Y` | Chứng thư số Token Nhân viên - 3 năm | gói | 840.000 | tính khi xuất hóa đơn |
| `MB-USB-NV-NEW-1Y` | CKS USB Token Nhân viên - ĐK mới - 1 năm | gói | 563.000 | tính khi xuất hóa đơn |
| `MB-USB-NV-NEW-2Y` | CKS USB Token Nhân viên - ĐK mới - 2 năm | gói | 827.000 | tính khi xuất hóa đơn |
| `MB-USB-NV-NEW-3Y` | CKS USB Token Nhân viên - ĐK mới - 3 năm | gói | 1.039.000 | tính khi xuất hóa đơn |

### Giám đốc danh nghĩa - Singapore

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `SG-NDIR` | Giám đốc danh nghĩa - Singapore | người/năm | chưa có giá | tính khi xuất hóa đơn |

### Văn phòng ảo & mail box - Singapore

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `SG-OFFICE` | Văn phòng ảo & mail box - Singapore | năm | chưa có giá | tính khi xuất hóa đơn |

### Thư ký công ty - Singapore

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `SG-SEC` | Thư ký công ty - Singapore | người/năm | chưa có giá | tính khi xuất hóa đơn |

### Văn phòng ảo

| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT |
| --- | --- | --- | --- | --- |
| `TRD-VOFC` | Văn phòng ảo - 12 tháng | gói | 6.000.000 | tính khi xuất hóa đơn |



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
| `OBG-ADD-ACC-TRANS` | Chuyển đổi dữ liệu kế toán | lần | chưa có giá | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ADD-FLR` | Báo cáo vay/trả nợ nước ngoài | báo cáo/tháng | 500.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ADD-HR5` | Add-on: Thêm 5 nhân sự tính lương | tháng | 675.000 | tính khi xuất hóa đơn | OBG-ENT |
| `OBG-ADD-INV-FIX` | Xử lý hóa đơn sai sót | hóa đơn | 500.000 | tính khi xuất hóa đơn | OBG-MTH1, OBG-ENT |
| `OBG-ADD-INV1` | Add-on: Xuất 01 hóa đơn lẻ | hóa đơn | 150.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ADD-INV5` | Add-on: Dịch vụ xuất hóa đơn - Gói 5 hóa đơn/tháng | tháng | 400.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ADD-LEG2C` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | gói | 1.700.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ADD-LEG2H` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | tháng | 1.700.000 | tính khi xuất hóa đơn | OBG-ENT |
| `OBG-ADD-PRF` | Thông báo chuyển lợi nhuận ra nước ngoài | báo cáo | 500.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ADD-TPR` | Kê khai giao dịch & hồ sơ giá giao dịch liên kết | báo cáo | 500.000 | tính khi xuất hóa đơn | chưa ghi |
| `OBG-ADD-TRX100` | Add-on: Thêm 100 giao dịch kế toán/tháng | tháng | 900.000 | tính khi xuất hóa đơn | OBG-ENT |
| `OBG-MTH1` | Add-on: obacker Grow - Tháng đầu tiên thành lập công ty | tháng | 0 | tính khi xuất hóa đơn | OBG-ENT |



---

## 8. HẠNG MỤC CÓ GHI THÀNH PHẦN

Danh sách mọi mã có ghi hạng mục thành phần trong hệ thống danh mục sản phẩm.



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- |
| `OBL-ADD-BH` | Add-on: Bảo hộ nhãn hiệu | gói | 4.000.000 | tính khi xuất hóa đơn | IP-TM-SEARCH, IP-TM-REG-1 |
| `OBL-ADD-NCC` | Add-on: Nâng cấp Làm việc từ xa | gói | 5.972.000 | tính khi xuất hóa đơn | MB-TT-DN-1Y, TRD-VOFC, TRD-SIGN |
| `OBL-CPX` | Thành lập công ty - Ngành nghề phức tạp | gói | chưa có giá | tính khi xuất hóa đơn | MB-HOUT-300, MB-USB-DN-NEW-1Y, TRD-STAMP, MB-EC-50 |
| `OBL-DI` | Combo Thành Lập Doanh Nghiệp FDI Mới Trọn Gói (Full Setup Direct Investment) | gói | 55.000.000 | tính khi xuất hóa đơn | F-FDI-NEW, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-MA` | Combo Đăng Ký Góp Vốn M&A Doanh Nghiệp FDI Trọn Gói (Full Setup M&A) | gói | 45.000.000 | tính khi xuất hóa đơn | F-FDI-MA, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `OBL-STD` | Combo Thành Lập Công Ty Việt Nam Tiêu Chuẩn Trọn Gói | gói | 5.000.000 | tính khi xuất hóa đơn | F-VN-ERC, CL-USB-DN-NEW-1Y, CL-HOUT-300 |
| `PER-WP-M-TRC` | Combo Giấy Phép Lao Động Lộ Trình Quản Lý & Thẻ Tạm Trú Trọn Gói | gói | 25.000.000 | tính khi xuất hóa đơn | PER-WP-NEW, PER-TRC |



---

## 9. QUY CHẾ SỬ DỤNG HỢP LÝ VÀ ĐỐI SOÁT PHỤ PHÍ HÀNG THÁNG

Chính sách sử dụng hợp lý áp dụng đối với mọi gói đối tác định kỳ nhằm bảo đảm công bằng tài nguyên vận hành.

| Chỉ số vận hành | Gói Partner Core | Gói Partner Growth | Gói Partner Prime | Phụ phí vượt định mức |
| --- | --- | --- | --- | --- |
| Định mức chứng từ kế toán | 50 chứng từ/tháng | 300 chứng từ/tháng | 1.500 chứng từ/tháng | theo khối chứng từ hoặc 15.000 đồng/chứng từ |
| Tài khoản ngân hàng đối soát | tối đa 02 tài khoản | tối đa 05 tài khoản | không giới hạn thông thường | 300.000 đồng/tài khoản/tháng từ tài khoản vượt |
| Lao động tính lương và bảo hiểm | tối đa 10 lao động | tối đa 30 lao động | tối đa 50 lao động | 50.000 đồng/người/tháng vượt định mức |
| Đợt tính lương phát sinh | 01 đợt/tháng | 01 đợt/tháng | 02 đợt/tháng | 500.000 đồng/đợt phát sinh thêm |
| Hồ sơ thuế nhà thầu nước ngoài | 01 hợp đồng/năm | 03 hợp đồng/tháng | 05 hợp đồng/tháng | 1.500.000 đồng/hồ sơ phát sinh thêm |
| Hỗ trợ thanh tra thuế tại trụ sở | không bao gồm | không bao gồm | 01 ngày/năm | 2.000.000 đồng/ngày làm việc trực tiếp |

Quy định về khối chứng từ phụ trội và trần gói:

- Đối với gói Partner Growth: khi khối lượng chứng từ vượt quá 300 chứng từ/tháng, áp dụng phụ phí theo khối định mức gồm khối 500 chứng từ (2.500.000 đồng/tháng), khối 1.000 chứng từ (5.000.000 đồng/tháng) và khối 1.500 chứng từ (7.500.000 đồng/tháng).
- Khối lượng 1.500 chứng từ/tháng là mức trần vận hành tối đa của gói Partner Growth. Khách hàng vượt ngưỡng này bắt buộc chuyển đổi sang gói Partner Prime hoặc thỏa thuận hợp đồng gói riêng.
- Đối với gói Partner Prime: khối lượng chứng từ vượt trên 1.500 chứng từ/tháng được tính phụ thu với đơn giá 15.000 đồng/chứng từ.

Quy trình đối soát phụ phí hàng tháng:

- Ngày 05 hàng tháng dương lịch, hệ thống đối soát sản lượng chứng từ và khối lượng dịch vụ phát sinh thực tế trong tháng trước liền kề.
- Khi khối lượng chứng từ đạt 80% định mức gói trong tháng, hệ thống gửi thông báo cảnh báo sớm đến khách hàng.
- Bảng đối soát phụ phí được gửi cho khách hàng và xuất hóa đơn gộp vào kỳ thanh toán tiếp theo hoặc thanh toán riêng trong 07 ngày làm việc.

---

## 10. CƠ CHẾ CHUYỂN ĐỔI VÀ NÂNG GÓI TỰ ĐỘNG

Cơ chế nâng gói bảo đảm dịch vụ kế toán thuế tương thích với quy mô thực tế của doanh nghiệp.

- Nâng gói giữa năm tài chính: Khách hàng tự động chuyển đổi lên gói dịch vụ cấp cao hơn từ tháng tiếp theo khi thỏa mãn một trong hai điều kiện: (1) Khối lượng chứng từ thực tế vượt định mức gói hiện tại liên tục 03 tháng dương lịch; hoặc (2) Doanh thu lũy kế phát sinh trong năm tài chính vượt ngưỡng quy mô của gói hiện tại (doanh thu năm vượt 3.000.000.000 đồng đối với gói Partner Core). Chi phí các tháng còn lại được tính bù trừ theo chênh lệch đơn giá của gói mới.
- Đánh giá định kỳ cuối năm tài chính: Vào ngày 31 tháng 12 hàng năm, oBacker đánh giá lại tổng doanh thu, số lao động bình quân và tổng lượng chứng từ phát sinh cả năm để xác định phân hạng gói áp dụng cho hợp đồng năm tài chính tiếp theo.

---

## 11. PHÂN LOẠI DOANH NGHIỆP FDI VÀ HỆ SỐ PHỨC TẠP NGÀNH NGHỀ

Phân loại doanh nghiệp áp dụng chế độ kế toán và nghĩa vụ kiểm toán báo cáo tài chính:

| Phân loại doanh nghiệp | Căn cứ xác định | Chế độ kế toán áp dụng | Nghĩa vụ kiểm toán báo cáo tài chính | Mức phí dịch vụ áp dụng |
| --- | --- | --- | --- | --- |
| Doanh nghiệp Việt Nam siêu nhỏ | Doanh thu năm không quá 3 tỷ đồng hoặc vốn không quá 3 tỷ đồng, lao động không quá 10 người theo Điều 5 Nghị định 80/2021/NĐ-CP | Thông tư 58/2026/TT-BTC | Không bắt buộc kiểm toán độc lập hàng năm | Biểu giá chuẩn gói Partner Core |
| Doanh nghiệp Việt Nam thông thường | Doanh nghiệp vượt tiêu chí siêu nhỏ, quy mô nhỏ, vừa hoặc lớn | Thông tư 99/2025/TT-BTC | Không bắt buộc kiểm toán hàng năm trừ ngành nghề đặc thù | Biểu giá chuẩn gói Partner Growth hoặc Prime |
| Doanh nghiệp có vốn đầu tư nước ngoài (FDI) | Doanh nghiệp có nhà đầu tư nước ngoài nắm giữ vốn điều lệ | Thông tư 99/2025/TT-BTC đầy đủ tài khoản, lập báo cáo lưu chuyển tiền tệ và thuyết minh | Bắt buộc kiểm toán độc lập hàng năm theo Điều 15 Luật Kiểm toán độc lập 2011 | Biểu giá FDI (bằng 125% mức phí doanh nghiệp Việt Nam) |

Hệ số phức tạp ngành nghề:

| Nhóm ngành nghề | Hệ số K | Đặc điểm rủi ro và nghiệp vụ chuyên biệt |
| --- | --- | --- |
| Dịch vụ, Thương mại, Công nghệ thông tin, Tư vấn | 1,0 | Chuẩn nghiệp vụ cơ sở, luồng chứng từ dịch vụ thương mại thông thường |
| Ẩm thực (F&B), Bán lẻ chuỗi, Dịch vụ lưu trú | 1,2 | Quản lý ca kíp lao động, kiểm soát tồn kho nguyên liệu và hóa đơn bán lẻ phân tán |
| Xuất nhập khẩu, Vận tải, Logistics, Thương mại điện tử xuyên biên giới | 1,3 | Tờ khai hải quan, thuế xuất nhập khẩu, thuế nhà thầu nước ngoài và chứng từ thanh toán quốc tế |
| Sản xuất, Gia công, Xây dựng, Thi công hoàn thiện | 1,5 | Bắt buộc lập định mức tiêu hao nguyên vật liệu, tính giá thành sản phẩm và theo dõi công trình dở dang |

Danh mục ngành nghề loại trừ tuyệt đối (không tiếp nhận cung cấp dịch vụ):

- Kinh doanh tiền mã hóa, tài sản ảo không được pháp luật công nhận;
- Dịch vụ tín dụng đen, cầm đồ trái phép;
- Kinh doanh trò chơi điện tử có thưởng, dịch vụ cờ bạc, cá cược;
- Dịch vụ đòi nợ thuê;
- Sản xuất, buôn bán hóa chất độc hại, vũ khí, vật liệu nổ.

---

## 12. CHÍNH SÁCH CHỐT CHẶN QUÝ 4 VÀ THỜI HẠN QUYẾT TOÁN 15/03

Cam kết thời hạn đối với hợp đồng ký kết trong Quý 4:

- Hợp đồng dịch vụ ký mới trong Quý 4 của năm tài chính bắt buộc có thời hạn tối thiểu là 05 quý (kéo dài đến hết ngày 31 tháng 12 của năm tài chính tiếp theo). Quy định này bảo đảm bù đắp chi phí vận hành khi oBacker thực hiện toàn bộ công tác tổng hợp số liệu, lập báo cáo tài chính và quyết toán thuế của năm trước.
- Trường hợp khách hàng đơn phương chấm dứt hợp đồng trước thời hạn 05 quý, khách hàng có nghĩa vụ bồi hoàn chi phí lập báo cáo tài chính năm trước với số tiền tương đương 03 tháng phí dịch vụ theo hợp đồng.

Thời hạn thanh toán đợt 2 phí báo cáo tài chính trước ngày 15/03:

- Chi phí lập báo cáo tài chính và hồ sơ quyết toán năm được phân bổ thành 02 đợt thanh toán: Đợt 1 (50%) thanh toán cùng kỳ phí Quý 4; Đợt 2 (50%) thanh toán trước ngày 15 tháng 03 của năm tài chính tiếp theo.
- Thanh toán đợt 2 là điều kiện bắt buộc để oBacker ký số và chính thức nộp hồ sơ quyết toán thuế, báo cáo tài chính lên cổng thông tin của cơ quan thuế.
- Trường hợp khách hàng chậm thanh toán đợt 2 sau ngày 15 tháng 03, oBacker giữ quyền tạm dừng nộp hồ sơ quyết toán. Khách hàng tự chịu hoàn toàn trách nhiệm pháp lý và các khoản tiền phạt chậm nộp hồ sơ khai thuế phát sinh.

---

## 13. KHUNG DỊCH VỤ THIẾT LẬP BAN ĐẦU, RÀ SOÁT VÀ KHẮC PHỤC SỔ SÁCH

Dịch vụ thiết lập ban đầu và rà soát sức khỏe sổ sách:

- Doanh nghiệp mới thành lập được miễn phí thiết lập ban đầu (`OBG-ONB-CORE`, `OBG-ONB-GROWTH`).
- Doanh nghiệp chuyển đổi từ đơn vị dịch vụ khác sang hoặc đã hoạt động từ 01 năm trở lên bắt buộc thực hiện dịch vụ rà soát sức khỏe sổ sách ban đầu (`OBG-HEALTH-CHECK`) trước khi bàn giao dữ liệu chính thức.

Dịch vụ khắc phục và lập lại sổ sách kế toán (`OBG-RESTATE-BASE`):

- Áp dụng khi kết quả rà soát phát hiện sổ sách cũ bị sai lệch, thiếu chứng từ hoặc vi phạm quy định kế toán thuế.
- Phí dịch vụ xác định theo công thức: Đơn giá cơ sở theo tháng nhân với số tháng cần khắc phục, nhân với hệ số ngành nghề K và hệ số điều chỉnh theo khối lượng chứng từ sai lệch.
- Ranh giới pháp lý: oBacker chỉ chịu trách nhiệm đối với số liệu do oBacker trực tiếp hạch toán và nộp trong thời gian thực hiện hợp đồng. oBacker được miễn trừ toàn bộ trách nhiệm đối với sai phạm, tiền truy thu thuế và tiền phạt phát sinh từ số liệu quá khứ do khách hàng hoặc đơn vị cũ lập trước thời điểm bàn giao.

---

## 14. BẢY NGUYÊN TẮC RANH GIỚI VẬN HÀNH

Mọi hoạt động cung cấp dịch vụ đối tác kế toán, thuế và pháp lý tuân thủ bảy nguyên tắc ranh giới vận hành sau đây:

1. Quản trị chữ ký số an toàn: Không lưu giữ thiết bị chữ ký số vật lý (Token USB) tại văn phòng oBacker quá 24 giờ làm việc. Khuyến nghị khách hàng sử dụng chữ ký số từ xa (HSM Cloud) có phân quyền kiểm soát.
2. Phân định dòng tiền minh bạch: Tuyệt đối không nhận tiền thanh toán hộ nghĩa vụ thuế, bảo hiểm xã hội hoặc tiền phạt qua tài khoản cá nhân của nhân sự oBacker. Khách hàng thực hiện nộp thuế trực tiếp từ tài khoản doanh nghiệp.
3. Tính hợp pháp của hóa đơn chứng từ: Khách hàng chịu trách nhiệm toàn bộ trước pháp luật về tính hợp pháp, hợp lệ và thực tế phát sinh của mọi hóa đơn, chứng từ đầu vào cung cấp cho oBacker.
4. Quyền từ chối hạch toán: oBacker có quyền từ chối hạch toán các khoản chi phí không có căn cứ chứng từ hợp pháp, không phục vụ hoạt động sản xuất kinh doanh hoặc có dấu hiệu rủi ro vi phạm pháp luật thuế.
5. Độc lập chức danh Kế toán trưởng: oBacker không cử nhân sự đứng tên chức danh Kế toán trưởng pháp lý của khách hàng trên đăng ký kinh doanh, trừ trường hợp hai bên ký hợp đồng dịch vụ Kế toán trưởng riêng biệt.
6. Chuẩn mực thời gian phản hồi: Thời gian phản hồi yêu cầu tư vấn chuẩn trong vòng 04 giờ làm việc. Chứng từ kế toán được phân loại và xử lý định kỳ hàng tuần.
7. Bảo mật thông tin tuyệt đối: Dữ liệu tài chính, doanh thu, nhân sự và thông tin kinh doanh của khách hàng được bảo mật theo Thỏa thuận bảo mật thông tin (NDA) và chỉ phục vụ mục đích thực hiện hợp đồng dịch vụ.
---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 28/09/2026 | R.1.1.0 | Hợp nhất kiến trúc ba gói đối tác Partner Core, Partner Growth, Partner Prime, bổ sung gói FUP Add-on và chính sách trần 1.500 chứng từ/tháng |
