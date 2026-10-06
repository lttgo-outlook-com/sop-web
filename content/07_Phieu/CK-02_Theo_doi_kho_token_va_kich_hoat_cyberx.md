---
title: "PHIẾU CK-02. SỔ THEO DÕI KHO TOKEN TRẮNG VÀ KÍCH HOẠT CHỮ KÝ SỐ CYBERX"
code: "CK-02"
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
  - CK-02
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU CK-02. SỔ THEO DÕI KHO TOKEN TRẮNG VÀ KÍCH HOẠT CHỮ KÝ SỐ CYBERX

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | CK-02 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | CK-02 |
| **Màu** | VÀNG, sổ theo dõi tồn kho và kích hoạt |
| **Ai dùng** | `KTV`, `AD-KT`, `AM` và `KTT` |
| **Sinh từ** | [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] mục 4.6 |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Áp dụng trong công tác quản lý nhập xuất tồn thiết bị phần cứng USB Token trắng của nhà cung cấp CyberX tại văn phòng oBacker, ghi nhận quá trình nạp chứng thư số và đối soát luồng hóa đơn tài chính với nhà cung ứng và khách hàng.

## KHUÔN SỔ THEO DÕI KHO VÀ KÍCH HOẠT

| Cột | Tên trường | Nội dung ghi nhận |
| --- | --- | --- |
| 1 | Số Serial thiết bị Token trắng | Mã số định danh phần cứng do CyberX sản xuất |
| 2 | Ngày nhập kho | Ngày nhận hàng và nhập vào tủ bảo mật |
| 3 | Số hóa đơn đầu vào CyberX | Số hóa đơn GTGT do CyberX xuất cho oBacker |
| 4 | Đơn giá nhập | Đơn giá đại lý theo hợp đồng phân phối (đồng) |
| 5 | Ngày xuất kho kích hoạt | Ngày lấy Token trắng để nạp chứng thư số cho khách hàng |
| 6 | Tên doanh nghiệp khách hàng | Tên khách hàng mua dịch vụ chữ ký số |
| 7 | Mã số thuế khách hàng | Mã số thuế của doanh nghiệp khách hàng |
| 8 | Số Serial chứng thư số kích hoạt | Mã chứng thư số công cộng được cấp trên hệ thống CyberX |
| 9 | Thời hạn chứng thư số | Thời hạn hiệu lực (01 năm, 02 năm, hoặc 03 năm) |
| 10 | Số hóa đơn đầu ra xuất cho KH | Số hóa đơn GTGT do oBacker xuất cho khách hàng |
| 11 | Nhân sự thực hiện (`KTV`) | Kế toán viên trực tiếp thao tác xuất kho và nạp token |

## NGUYÊN TẮC QUẢN LÝ TỒN KHO VÀ ĐẶT HÀNG LẠI

```
ĐỊNH MỨC MUA SẮM:
- Mỗi lần mua hàng, oBacker đặt mua đúng 10 thiết bị USB Token trắng từ CyberX.

ĐIỂM ĐẶT HÀNG LẠI (REORDER POINT):
- Mức tồn kho an toàn tối thiểu là 05 thiết bị Token trắng.
- Khi số lượng Token trắng chưa kích hoạt trong tủ kho giảm xuống còn 05 thiết bị,
  KTV có trách nhiệm lập ngay đề xuất mua sắm lô 10 thiết bị mới để gối đầu.

LUỒNG HÓA ĐƠN VÀ ĐỐI SOÁT:
1. Đối với khách hàng: oBacker xuất hóa đơn GTGT theo đúng gói cước đã bán.
2. Đối với nhà cung cấp: CyberX xuất hóa đơn GTGT cho oBacker theo đơn giá đại lý;
   KTV kiểm tra số lượng khớp với biên bản giao nhận trước khi chuyển KTT duyệt chi.
```

## CÁC BƯỚC THAO TÁC

```
[ ]  1. NHẬP KHO LÔ TOKEN MỚI (10 THIẾT BỊ)
        - Kiểm tra số lượng thực tế, đối chiếu danh sách Serial phần cứng.
        - Tiếp nhận hóa đơn GTGT từ nhà cung cấp CyberX.
        - Cất giữ vào tủ bảo mật của bộ phận Kế toán; ghi tăng 10 dòng vào sổ theo dõi.

[ ]  2. XUẤT KHO VÀ KÍCH HOẠT CHO KHÁCH HÀNG
        - Căn cứ đơn hàng hoặc hợp đồng dịch vụ đã ký với khách hàng.
        - Lấy 01 Token trắng từ tủ kho; ghi nhận ngày xuất kho và tên khách hàng vào sổ.
        - Nạp chứng thư số trên cổng đại lý CyberX vào Token.
        - Ghi nhận số Serial chứng thư số được cấp và thời hạn hiệu lực vào sổ.

[ ]  3. XUẤT HÓA ĐƠN CHO KHÁCH HÀNG VÀ BÀN GIAO
        - Lập và xuất hóa đơn điện tử của oBacker cho khách hàng; ghi số hóa đơn vào sổ.
        - Ký Biên bản bàn giao thiết bị theo Mẫu [[CK-01_Ban_giao_chu_ky_so_va_hoa_don|CK-01]].

[ ]  4. KIỂM ĐẾM TỒN KHO VÀ KÍCH HOẠT MUA BỔ SUNG
        - Đếm số lượng Token trắng còn lại trong tủ kho.
        - Nếu số lượng còn lại bằng 05 thiết bị: KTV gửi ngay email đề xuất mua bổ sung 10 Token mới.
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ theo dõi được cập nhật liên tục trên bảng tính lưu trữ nội bộ. Định kỳ ngày 25 hằng tháng, `AD-KT` và `KTV` tiến hành kiểm kê thực tế tại tủ kho, đối chiếu số dư tồn kho với sổ sách và lập báo cáo gửi `KTT`.

## KÝ XÁC NHẬN

| Kế toán viên theo dõi (`KTV`) | Người quản lý kho (`AD-KT`) | Kế toán trưởng (`KTT`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm tính chủ động trong cung cấp dịch vụ chữ ký số cho khách hàng mới mà không phải chờ đợi giao hàng từ nhà mạng; kiểm soát chặt chẽ tài sản tồn kho, khớp đúng doanh thu đầu ra và chi phí đầu vào đại lý của CyberX.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CK-02 về Sổ cái OBK-MSR |
