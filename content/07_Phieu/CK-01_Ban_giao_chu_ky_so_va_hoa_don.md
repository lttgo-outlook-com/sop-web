---
title: "PHIẾU CK-01. BÀN GIAO CHỮ KÝ SỐ VÀ HÓA ĐƠN ĐIỆN TỬ"
code: "CK-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.1.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - CK-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU CK-01. BÀN GIAO CHỮ KÝ SỐ VÀ HÓA ĐƠN ĐIỆN TỬ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | CK-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | CK-01 |
| **Màu** | XANH, phiếu bàn giao dịch vụ |
| **Ai dùng** | `KTV`, `AM` và Khách hàng nhận bàn giao |
| **Sinh từ** | [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] mục 5 |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Áp dụng khi oBacker hoàn tất thủ tục cấp phát chữ ký số (Token USB hoặc Cloud-CA) và kích hoạt thành công tài khoản hóa đơn điện tử cho khách hàng, tiến hành bàn giao thiết bị, thông tin tài khoản và hướng dẫn sử dụng.

## CÁC BƯỚC

```
Tên khách hàng / Doanh nghiệp: ............................................
Mã số thuế: ...............................................................
Người đại diện nhận bàn giao: .............................................
Chức vụ: ......................... SĐT: ...................................

[ ]  1. BÀN GIAO THIẾT BỊ VÀ CHỨNG THƯ SỐ
        [ ] Loại chữ ký số: [ ] USB Token       [ ] Smart-CA / Cloud-CA
        [ ] Đơn vị cung cấp (CA): .........................................
        [ ] Số Serial chứng thư số: .......................................
        [ ] Thời hạn hiệu lực: từ ...../...../2026 đến ...../...../202.....
        [ ] Mã PIN mặc định ban đầu: ......................................
        [ ] Khách hàng đã đổi mã PIN riêng thành công: Đã đổi [ ]

[ ]  2. BÀN GIAO TÀI KHOẢN HÓA ĐƠN ĐIỆN TỬ
        [ ] Nhà cung cấp phần mềm HĐĐT: ...................................
        [ ] Đường dẫn đăng nhập hệ thống: .................................
        [ ] Tên đăng nhập (Username): .....................................
        [ ] Mật khẩu khởi tạo: ............................................
        [ ] Trạng thái Tờ khai Mẫu 01/ĐKTĐ-HĐĐT: Cơ quan thuế Chấp nhận [ ]
        [ ] Ký hiệu mẫu số, ký hiệu hóa đơn: ..............................
        [ ] Số lượng hóa đơn đã mua / khởi tạo: .................... số

[ ]  3. KIỂM THỬ KỸ THUẬT VÀ HƯỚNG DẪN SỬ DỤNG
        [ ] Ký số thử nghiệm thành công trên cổng thuế / phần mềm
        [ ] Lập và ký xuất hóa đơn mẫu thử nghiệm thành công
        [ ] Bàn giao tài liệu hướng dẫn sử dụng cho khách hàng
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Lập thành 02 bản chính có giá trị pháp lý như nhau: 01 bản giao khách hàng lưu giữ, 01 bản oBacker lưu hồ sơ quản lý dịch vụ khách hàng do `AM` và `KTV` theo dõi.

## KÝ XÁC NHẬN

| Đại diện Khách hàng nhận bàn giao | Đại diện oBacker bàn giao (`KTV` / `AM`) |
| --- | --- |
| *(Ký, ghi rõ họ tên và đóng dấu nếu có)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Xác lập bằng chứng bàn giao quyền kiểm soát công cụ ký số và hóa đơn tài chính cho khách hàng, bảo đảm khách hàng đã thay đổi mã PIN bảo mật cá nhân, phòng ngừa tranh chấp về trách nhiệm quản lý chứng từ thuế.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CK-01 về Sổ cái OBK-MSR |
