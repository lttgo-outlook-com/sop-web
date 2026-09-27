---
title: "GÓI DỊCH VỤ VÀ HẠNG MỤC KÈM GÓI"
code: "OBK-DM-GOI"
type: "danh-muc"
folder: "10_DanhMuc"
level: "Danh mục"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-DM-00 Danh mục dịch vụ và bảng giá"
previous_version: "R.1.0.0"
law_as_of: ""
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - OBK-DM-GOI
  - obacker Grow
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
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] Danh mục dịch vụ và bảng giá |
| Số gói back office obacker Grow | 20 |
| Số hạng mục chỉ bán kèm gói | 16 |
| Nguồn dữ liệu | `_du_lieu_danh_muc/danh_muc.tsv`, kết xuất ngày 15/09/2026 |
| Nguồn dữ liệu | Bản kết xuất danh mục sản phẩm |

> [!note] BẢN SINH TỰ ĐỘNG
> Nội dung sinh lại từ bản kết xuất của hệ thống danh mục sản phẩm.
> Bản gốc của mức giá và của mô tả là hệ thống danh mục sản phẩm.

---

## 1. BỐN LOẠI QUAN HỆ GIỮA CÁC MÃ

Sáu trang bảng giá xếp mã theo mảng dịch vụ và theo thứ tự chữ cái. Năm mục sau đây xếp cùng các mã đó theo quan hệ gói. Dữ liệu đầy đủ của một mã nằm ở trang bảng giá của mảng tương ứng.

| Loại | Nghĩa | Mục |
| --- | --- | --- |
| Gói back office | thuê bao trọn gói kế toán, thuế, và các nghĩa vụ định kỳ | mục 2 |
| Hạng mục chỉ bán kèm gói | hệ thống danh mục sản phẩm ghi loại `addon` | mục 3 và mục 4 |
| Gói thành lập doanh nghiệp | hệ thống danh mục sản phẩm ghi loại `bundle` | mục 4 |
| Dòng thuê bao | nhiều mã cùng một dòng sản phẩm, khác nhau ở thời hạn | mục 5 |

---

## 2. GÓI BACK OFFICE obacker Grow

Đơn vị tính của các gói là tháng, nên con số trong bảng là giá của một tháng, chưa có thuế giá trị gia tăng.



### Doanh nghiệp trong nước

| Hạng gói | Kỳ 2 tháng | Kỳ 3 tháng | Kỳ 6 tháng | Kỳ 12 tháng |
| --- | --- | --- | --- | --- |
| Starter | `OBG-STR-STD-2M`<br>1.250.000 | `OBG-STR-STD-3M`<br>1.250.000 | `OBG-STR-STD-6M`<br>1.187.500 | `OBG-STR-STD-12M`<br>1.125.000 |
| Scale | không có | `OBG-SCL-STD-3M`<br>5.000.000 | `OBG-SCL-STD-6M`<br>4.750.000 | `OBG-SCL-STD-12M`<br>4.500.000 |
| Premium | không có | `OBG-PRM-STD-3M`<br>14.500.000 | `OBG-PRM-STD-6M`<br>13.775.000 | `OBG-PRM-STD-12M`<br>13.050.000 |

### Doanh nghiệp có vốn nước ngoài

| Hạng gói | Kỳ 2 tháng | Kỳ 3 tháng | Kỳ 6 tháng | Kỳ 12 tháng |
| --- | --- | --- | --- | --- |
| Starter | không có | `OBG-STR-FDI-3M`<br>1.750.000 | `OBG-STR-FDI-6M`<br>1.687.500 | `OBG-STR-FDI-12M`<br>1.625.000 |
| Scale | không có | `OBG-SCL-FDI-3M`<br>5.500.000 | `OBG-SCL-FDI-6M`<br>5.250.000 | `OBG-SCL-FDI-12M`<br>5.000.000 |
| Premium | không có | `OBG-PRM-FDI-3M`<br>15.000.000 | `OBG-PRM-FDI-6M`<br>14.275.000 | `OBG-PRM-FDI-12M`<br>13.550.000 |


### Gói Enterprise

| Mã | Tên gói | Đơn vị tính | Giá chưa thuế GTGT |
| --- | --- | --- | --- |
| `OBG-ENT` | obacker Grow - Gói Enterprise | tháng | chưa có giá |

Gói Enterprise không có mức giá niêm yết. Mức giá của gói đó xác định theo từng khách.



---

## 3. HẠNG MỤC CHỈ BÁN KÈM GÓI obacker Grow

Cột Gói chứa hạng mục này ghi mã của gói bán kèm. Giá trị `chưa ghi` là hệ thống danh mục sản phẩm chưa điền cột đó.



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này |
| --- | --- | --- | --- | --- | --- |
| `OBG-ADD-ACC-TRANS` | Chuyển đổi dữ liệu kế toán | lần | chưa có giá | chưa có giá | chưa ghi |
| `OBG-ADD-FLR` | Báo cáo vay/trả nợ nước ngoài | báo cáo/tháng | 500.000 | 540.000 | chưa ghi |
| `OBG-ADD-HR5` | Add-on: Thêm 5 nhân sự tính lương | tháng | 675.000 | 729.000 | OBG-ENT |
| `OBG-ADD-INV-FIX` | Xử lý hóa đơn sai sót | hóa đơn | 500.000 | 540.000 | OBG-STR-FDI-12M, OBG-STR-FDI-3M-KM, OBG-MTH1, OBG-STR-STD-3M-KM, OBG-STR-STD-6M, OBG-STR-STD-12M, OBG-PRM-STD-3M, OBG-ENT, OBG-STR-STD-3M, OBG-STR-STD-2M, OBG-PRM-STD-6M, OBG-PRM-STD-12M, OBG-SCL-STD-12M, OBG-SCL-STD-6M, OBG-SCL-STD-3M, OBG-SCL-FDI-6M, OBG-SCL-FDI-12M, OBG-SCL-FDI-3M, OBG-PRM-FDI-3M, OBG-PRM-FDI-6M, OBG-PRM-FDI-12M, OBG-STR-FDI-6M, OBG-STR-FDI-3M |
| `OBG-ADD-INV1` | Add-on: Xuất 01 hóa đơn lẻ | hóa đơn | 150.000 | 162.000 | OBG-STR-FDI-3M-KM |
| `OBG-ADD-INV5` | Add-on: Dịch vụ xuất hóa đơn - Gói 5 hóa đơn/tháng | tháng | 400.000 | 432.000 | OBG-STR-FDI-3M-KM |
| `OBG-ADD-LEG2C` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | gói | 1.700.000 | 1.836.000 | OBG-STR-FDI-6M |
| `OBG-ADD-LEG2H` | Add-on: Tư vấn pháp lý, thuế - 2 giờ/tháng | tháng | 1.700.000 | 1.836.000 | OBG-ENT |
| `OBG-ADD-PRF` | Thông báo chuyển lợi nhuận ra nước ngoài | báo cáo | 500.000 | 540.000 | chưa ghi |
| `OBG-ADD-TPR` | Kê khai giao dịch & hồ sơ giá giao dịch liên kết | báo cáo | 500.000 | 540.000 | chưa ghi |
| `OBG-ADD-TRX100` | Add-on: Thêm 100 giao dịch kế toán/tháng | tháng | 900.000 | 972.000 | OBG-ENT |
| `OBG-MTH1` | Add-on: obacker Grow - Tháng đầu tiên thành lập công ty | tháng | 0 | 0 | OBG-STR-FDI-12M, OBG-STR-STD-6M, OBG-STR-STD-12M, OBG-PRM-STD-3M, OBG-ENT, OBG-STR-STD-3M, OBG-STR-STD-2M, OBG-PRM-STD-6M, OBG-PRM-STD-12M, OBG-SCL-STD-12M, OBG-SCL-STD-6M, OBG-SCL-STD-3M, OBG-SCL-FDI-6M, OBG-SCL-FDI-12M, OBG-SCL-FDI-3M, OBG-PRM-FDI-3M, OBG-PRM-FDI-6M, OBG-PRM-FDI-12M, OBG-STR-FDI-6M, OBG-STR-FDI-3M |
| `OBG-STR-FDI-3M-KM` | Add-on: obacker Grow - Gói FDI Starter - 3 tháng đầu tiên | tháng | 875.000 | 945.000 | TRD-VOFC |
| `OBG-STR-STD-3M-KM` | Add-on: obacker Grow - Gói Starter - 3 tháng đầu tiên | tháng | 0 | 0 | TRD-VOFC |



---

## 4. GÓI THÀNH LẬP DOANH NGHIỆP



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- |
| `OBL-CNC` | Đăng ký thành lập công ty tại Khu công nghệ cao (CNC) Đà Nẵng | gói | chưa có giá | chưa có giá | chưa ghi |
| `OBL-CPX` | Thành lập công ty - Ngành nghề phức tạp | gói | chưa có giá | chưa có giá | MB-HOUT-300, MB-USB-DN-NEW-1Y, TRD-STAMP, MB-EC-50 |
| `OBL-DI` | Thành lập công ty FDI - Gói Direct Invest | gói | 55.555.556 | 60.000.000 | chưa ghi |
| `OBL-DMST` | Đăng ký doanh nghiệp Đổi mới sáng tạo | gói | 15.000.000 | 16.200.000 | chưa ghi |
| `OBL-IFC-UNCON` | Thành lập công ty thành viên IFC Đà Nẵng - Ngành nghề không điều kiện | gói | chưa có giá | chưa có giá | chưa ghi |
| `OBL-IFC-UNCON-BP` | Thành lập công ty thành viên IFC Đà Nẵng - Ngành nghề không điều kiện - Kế hoạch kinh doanh | gói | chưa có giá | chưa có giá | chưa ghi |
| `OBL-MA` | Thành lập công ty FDI - Gói M&A | gói | 46.296.296 | 50.000.000 | chưa ghi |
| `OBL-STD` | Thành lập công ty nội địa - Gói Tiêu chuẩn | gói | 2.777.778 | 3.000.000 | chưa ghi |



### Hạng mục chỉ bán kèm gói thành lập doanh nghiệp



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Gói chứa hạng mục này | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- | --- |
| `OBL-ADD-BH` | Add-on: Bảo hộ nhãn hiệu | gói | 4.000.000 | 4.320.000 | OBL-STD, OBL-DI, OBL-MA | IP-TM-SEARCH, IP-TM-REG-1 |
| `OBL-ADD-NCC` | Add-on: Nâng cấp Làm việc từ xa | gói | 5.972.000 | 6.540.880 | OBL-STD, OBL-DI, OBL-MA | MB-TT-DN-1Y, TRD-VOFC, TRD-SIGN |



---

## 5. DÒNG THUÊ BAO KHÁC

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

## 6. HẠNG MỤC CÓ GHI THÀNH PHẦN

Danh sách mọi mã có ghi hạng mục thành phần trong hệ thống danh mục sản phẩm.



| Mã | Tên hạng mục | Đơn vị tính | Giá chưa thuế GTGT | Giá đã có thuế GTGT | Hạng mục thành phần |
| --- | --- | --- | --- | --- | --- |
| `OBL-ADD-BH` | Add-on: Bảo hộ nhãn hiệu | gói | 4.000.000 | 4.320.000 | IP-TM-SEARCH, IP-TM-REG-1 |
| `OBL-ADD-NCC` | Add-on: Nâng cấp Làm việc từ xa | gói | 5.972.000 | 6.540.880 | MB-TT-DN-1Y, TRD-VOFC, TRD-SIGN |
| `OBL-CPX` | Thành lập công ty - Ngành nghề phức tạp | gói | chưa có giá | chưa có giá | MB-HOUT-300, MB-USB-DN-NEW-1Y, TRD-STAMP, MB-EC-50 |



---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
