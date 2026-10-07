---
title: "Ánh xạ nhân sự vào position"
code: "OBK-QCTC-02-PL-D"
type: "sop"
folder: "01_ToChuc"
level: "Phụ lục"
version: "R.1.1.0"
status: "đang áp dụng"
draft_date: "04/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-QCTC-02 Quy chế tổ chức và phân quyền"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-QCTC-02-PL-D
tags:
  - loai/sop
  - cap/phu-luc
---
# Ánh xạ nhân sự vào position

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-QCTC-02-PL-D |
| Cấp tài liệu | Phụ lục |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 04/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] Quy chế tổ chức và phân quyền |


Tệp này NẰM NGOÀI quy chế. Quy chế chỉ nói về position và role; tệp này nói ai đang giữ position nào và làm ở đâu.

Tệp này là nơi ghi người đang giữ từng vị trí. Một người xuất hiện ở nhiều dòng là kiêm nhiệm.

Cột Văn phòng chỉ ghi địa điểm làm việc. Hai văn phòng không phải lớp tổ chức, thẩm quyền chạy theo Dept và Team.

Trạng thái dùng một trong bốn giá trị: `Đang giữ`, `Đang làm thủ tục`, `Đang tuyển`, `Trống`.

Kiêm nhiệm không phải một trạng thái. Một người giữ nhiều vai trò thì mỗi vai trò một dòng, tất cả đều `Đang giữ`; danh sách kiêm nhiệm được sinh tự động ở mục F bằng cách đối chiếu email trùng.

## A. Lớp quản trị

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Chủ tịch HĐQT |  | HCM | Nguyễn Thị Thu Trang<br>trang@obacker.com | Đang giữ |
| Thành viên HĐQT |  | HCM | Đặng Thị Phương Thảo<br>thao.dang@obacker.com | Đang giữ |
| Thành viên HĐQT |  | HCM | Phùng Trần Diệu Hoa<br>hoa.phung@obacker.com | Đang giữ |
| Thành viên HĐQT |  | ĐN | Lê Trọng Tuấn<br>tuan@obacker.com | Đang giữ |
| Người đại diện theo pháp luật, đang ghi trên GCN | `NĐDPL` | HCM | Nguyễn Thị Thu Trang<br>trang@obacker.com | Đang giữ |
| Người đại diện theo pháp luật thứ hai, đang làm thủ tục bổ sung trên Giấy chứng nhận đăng ký doanh nghiệp | `NĐDPL` | ĐN | Lê Trọng Tuấn<br>tuan@obacker.com | Đang làm thủ tục |

## B. BOM, Ban điều hành

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| CEO, Tổng giám đốc | `CEO`, `TGĐ` | ĐN | Lê Trọng Tuấn<br>tuan@obacker.com | Đang giữ |
| COO | `COO` | HCM | Phùng Trần Diệu Hoa<br>hoa.phung@obacker.com | Đang giữ |
| CMO | `CMO` | HCM | Đặng Thị Phương Thảo<br>thao.dang@obacker.com | Đang giữ |

## C. Nhánh CEO

### Commercial Dept

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Head of Commercial, TP Thương mại |  | ĐN | Lê Trọng Tuấn<br>tuan@obacker.com | Đang giữ |
| AM Lead | `AM` | ĐN | Long Nguyen<br>long.nguyen@obacker.com | Đang giữ |
| Account Executive | `AE` | ĐN | Phương Nguyễn<br>phuong.nguyen@obacker.com | Đang giữ |
| Account Executive | `AE` | TPHCM | Linh Phan<br>linh.phan@obacker.com | Đang giữ |
| Partnerships Manager | `PM` | ĐN | Long Nguyen<br>long.nguyen@obacker.com | Đang giữ |

### Finance

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Kế toán trưởng hoặc Người phụ trách kế toán | `KTT` | HCM | Thoa Trương<br>thoa.truong@obacker.com | Đang giữ |
| Kế toán viên nội bộ | `KTV` | ĐN | Giang Đặng<br>giang.dang@obacker.com | Đang giữ |
| Kế toán viên | `KTV` | ĐN | Cao Thị Minh Hiếu<br>hieu.cao@obacker.com | Đang thử việc |
| Người đối chiếu sao kê ngân hàng với sổ kế toán | `AD-KT` | HCM | Yến Dương<br>yen.duong@obacker.com | Đang giữ |
| Thủ quỹ, người giữ quỹ tiền mặt | `TQ` | HCM | Đào Phương Linh<br>linh.dao@obacker.com | Đang giữ |
| Thủ quỹ, người giữ quỹ tiền mặt | `TQ` | ĐN | Sinh Nguyen<br>sinh.nguyen@obacker.com | Đang giữ |

> [!note] PHÂN QUYỀN THAO TÁC NGÂN HÀNG ĐIỆN TỬ
> Thao tác **TẠO** lệnh chuyển tiền do `KTV` và `KTT` thực hiện, mỗi người một tài khoản người dùng riêng. Thao tác **XÁC NHẬN** lệnh do `TGĐ` và `Chủ tịch HĐQT` thực hiện, một trong hai là đủ, không chia theo bậc giá trị. Hai thao tác này không phải hai lần phê duyệt; việc phê duyệt khoản chi xảy ra đúng một lần theo ma trận tại `02_NoiBo/OBK-QCTC-01 mục 12.3`. `AD-KT` không có quyền nào trên ngân hàng điện tử và không hạch toán sổ nội bộ; đó là điều kiện để `AD-KT` làm được lớp đối chiếu độc lập. Xem `02_NoiBo/OBK-QCTC-01` mục 35.1a, mục 47.3a và Điều 48 chốt số 1.

> [!note] VAI TRÒ THỦ QUỸ (TQ)
> Vai trò Thủ quỹ do nhân sự được TGĐ phân công đảm nhiệm, tuân thủ ba điều cấm tại `PL_Tu_dien_vai.md` mục 4: không kiêm kế toán, không kiêm quản lý điều hành và không đối chiếu sao kê. Khi chưa bố trí nhân sự giữ vai trò TQ, công ty không thực hiện thu chi tiền mặt.

**Việc `KTV` được TẠO lệnh là ngoại lệ của quy tắc tách quyền 47.3**, đã được ghi lý do và hai kiểm soát bù tại mục 47.3a của quy chế. Mỗi lần đổi người ở `KTV`, `KTT` hoặc `AD-KT` thì kiểm lại ngoại lệ này còn đủ hai kiểm soát bù hay không.

### Legal R&D Team

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Legal R&D Team Lead |  | HCM | Nguyễn Thị Thu Trang<br>trang@obacker.com | Đang giữ |
| Paralegal |  | HCM | Giang Vũ<br>giang.vu@obacker.com | Đang giữ |
| Paralegal |  | HCM | Quan Hoang<br>quan.hoang@obacker.com | Đang giữ |

### HR

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| HR Generalist |  | HCM | Thảo Trương<br>thao.truong@obacker.com | Đang giữ |
| Office Admin |  | HCM | Thảo Trương<br>thao.truong@obacker.com | Đang giữ |

## D. Nhánh COO

### Delivery Dept

Không có position Head of Delivery. COO trực tiếp phụ trách.

### Accounting & Tax Team

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Team Lead | `TL-KT` | HCM | Thoa Trương<br>thoa.truong@obacker.com | Đang giữ |
| Chuyên viên | `CV-KT` | Đà Nẵng | Giang Đặng<br>giang.dang@obacker.com | Đang giữ |
| Chuyên viên | `CV-KT` | Đà Nẵng | Cao Thị Minh Hiếu<br>hieu.cao@obacker.com | Đang thử việc |
| Hành chính Kế toán | `AD-KT` | HCM | Yến Dương<br>yen.duong@obacker.com | Đang giữ |
| External Collaborators, ngoài biên chế |  |  | Truc Nguyen<br>truc.nguyen@obacker.com | Đang giữ |
| External Collaborators, ngoài biên chế |  |  | Hoai Tran<br>hoai.tran@obacker.com | Đang giữ |

### Licensing Team

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Team Lead | `TL-LIC` | HCM | Đào Phương Linh<br>linh.dao@obacker.com | Đang giữ |
| Chuyên viên | `CV-LIC` | Đà Nẵng | Hau Tran<br>hau.tran@obacker.com | Đang giữ |
| Chuyên viên | `CV-LIC` | Đà Nẵng | Sinh Nguyen<br>sinh.nguyen@obacker.com | Đang giữ |
| Chuyên viên | `CV-LIC` | TPHCM | Tin Bui<br>tin.bui@obacker.com | Đang giữ |
| Chuyên viên | `CV-LIC` | TPHCM | Quyen Nguyen<br>quyen.nguyen@obacker.com | Đang giữ |

### Labor & Payroll Team

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Team Lead | `TL-LD` |  | Phùng Trần Diệu Hoa<br>hoa.phung@obacker.com | Đang giữ |
| Chuyên viên | `CV-LD` | TPHCM | Thy Tran<br>thy.tran@obacker.com | Đang giữ |

### Legal Services Team

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Team Lead | `TL-LS` |  | Nguyễn Thị Thu Trang<br>trang@obacker.com | Đang giữ |
| Chuyên viên | `CV-LS` | HCM | Giang Vũ<br>giang.vu@obacker.com | Đang giữ |
| Chuyên viên | `CV-LS` | HCM | Quan Hoang<br>quan.hoang@obacker.com | Đang giữ |

### Tech & Product

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| Tech Lead | `TL-CN` | HCM | Phùng Trần Diệu Hoa<br>hoa.phung@obacker.com | Đang giữ |
| Product Owner | `CV-CN` | HCM | Hồ Khánh Tâm<br>tam.ho@obacker.com | Đang giữ |
| External Đối tác thuê ngoài, ngoài biên chế |  |  | Thinh Nguyen<br>thinh.nguyen@obacker.com | Đang giữ |

## E. Nhánh CMO

### Marketing

| Vị trí | Ký hiệu | Văn phòng | Người | Trạng thái |
| --- | --- | --- | --- | --- |
| CMO trực tiếp phụ trách | `CMO` | HCM | Đặng Thị Phương Thảo<br>thao.dang@obacker.com | Đang giữ |
| MKT Executive |  | làm việc từ xa, Hải Phòng | Huong Nguyen<br>huong.nguyen@obacker.com | Đang giữ |

## F. Bảng kiêm nhiệm

Bảng này đối chiếu theo email xuất hiện ở nhiều bảng trên. Ngày cập nhật gần nhất: 07/09/2026.

| Người | Số vai trò | Các vai trò đang giữ |
| --- | --- | --- |
| Nguyễn Thị Thu Trang<br>trang@obacker.com | 4 | Chủ tịch HĐQT;<br>NĐDPL trên GCN;<br>Legal R&D Team Lead;<br>Team Lead `TL-LS` |
| Phùng Trần Diệu Hoa<br>hoa.phung@obacker.com | 4 | Thành viên HĐQT;<br>COO;<br>Tech Lead;<br>Team Lead `TL-LD` |
| Lê Trọng Tuấn<br>tuan@obacker.com | 4 | Thành viên HĐQT;<br>NĐDPL thứ hai đang xử lý;<br>CEO và TGĐ;<br>Head of Commercial |
| Đặng Thị Phương Thảo<br>thao.dang@obacker.com | 3 | Thành viên HĐQT;<br>CMO;<br>phụ trách Marketing |
| Long Nguyen<br>long.nguyen@obacker.com | 2 | AM Lead `AM`;<br>Partnerships Manager `PM` |
| Giang Đặng<br>giang.dang@obacker.com | 2 | `KTV` kế toán viên nội bộ;<br>`CV-KT` chuyên viên kế toán dịch vụ |
| Giang Vũ<br>giang.vu@obacker.com | 2 | Paralegal ở Legal R&D;<br>`CV-LS` ở Legal Services |
| Quan Hoang<br>quan.hoang@obacker.com | 2 | Paralegal ở Legal R&D;<br>`CV-LS` ở Legal Services |
| Thoa Trương<br>thoa.truong@obacker.com | 2 | `KTT` kế toán trưởng nội bộ;<br>`TL-KT` Team Lead Accounting & Tax Team |
| Thảo Trương<br>thao.truong@obacker.com | 2 | HR Generalist;<br>Office Admin TPHCM |
| Yến Dương<br>yen.duong@obacker.com | 2 | `AD-KT` Hành chính Kế toán ở Accounting & Tax Team;<br>`AD-KT` người đối chiếu sao kê của mảng nội bộ, từ 07/09/2026 |

Tổng: 41 dòng vai trò có người giữ, 24 người, 3 vị trí đang tuyển, 1 vị trí trống.

> [!note] KIỂM SOÁT ĐỐI CHIẾU SAO KÊ
> `AD-KT` là lớp kiểm soát độc lập của ngoại lệ tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 47.3a: người đối chiếu sao kê không hạch toán và không có quyền nào trên ngân hàng điện tử.
>
> Các điểm kiểm soát đặt tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 34.3 và Điều 48 chốt số 1: kết quả đối chiếu gửi trực tiếp `TGĐ`, không qua `KTT`; và `KTT` không có quyền yêu cầu sửa bảng đối chiếu, chỉ nhận bản sao để xử lý phần kế toán.

### Nguyên tắc áp dụng đối với các vị trí kiêm nhiệm

| # | Nội dung | Quy tắc áp dụng |
| --- | --- | --- |
| 1 | Legal R&D và Legal Services dùng chung một nhóm hai người | Quy tắc ưu tiên tại mục Legal Services Team của [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] |
| 2 | `KTV` nội bộ và `CV-KT` dịch vụ do cùng một người giữ | Sổ sách oBacker và hồ sơ khách tách theo quy trình, xem [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 47 |
| 3 | `COO` giữ cả `TL-LD`, nên hai cấp liền kề của Labor & Payroll Team là một người | Việc chuyển lên cấp trên đi theo [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] và [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] Điều 15 |
| 4 | `KTT` nội bộ và `TL-KT` dịch vụ do cùng một người giữ | [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] Điều 19 |


## G. Vị trí đang tuyển và vị trí trống

| Vị trí | Ký hiệu | Văn phòng | Đơn vị | Trạng thái |
| --- | --- | --- | --- | --- |
| Office Admin |  | ĐN | HR | Đang tuyển |
| Chuyên viên | `CV-KT` | TPHCM | Accounting & Tax Team | Đang tuyển |
| Chuyên viên | `CV-LD` | Đà Nẵng | Labor & Payroll Team | Đang tuyển |

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.0 | Chỉ định hai thủ quỹ: văn phòng Thành phố Hồ Chí Minh là Đào Phương Linh, văn phòng Đà Nẵng là Sinh Nguyen, không đặt người dự phòng |
