---
title: "PHIẾU NC-01. SỔ THEO DÕI NHÀ CUNG CẤP VÀ ĐÁNH GIÁ ĐỊNH KỲ"
code: "NC-01"
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
  - NC-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU NC-01. SỔ THEO DÕI NHÀ CUNG CẤP VÀ ĐÁNH GIÁ ĐỊNH KỲ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | NC-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | NC-01 |
| **Màu** | XANH, sổ theo dõi đối tác và nhà cung cấp |
| **Ai dùng** | `KTV`, `AD-KT`, Quản lý trực tiếp (`TL`), `KTT` |
| **Sinh từ** | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 24; Quyết định chỉ đạo `VQ-07`;<br>[[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi nhà cung cấp và đánh giá định kỳ áp dụng cho toàn bộ đối tác, nhà cung cấp hàng hóa và dịch vụ phục vụ hoạt động nội bộ của oBacker, bao gồm: nhà cung cấp thiết bị công nghệ thông tin, văn phòng phẩm, dịch vụ công chứng, dịch vụ dịch thuật pháp lý, hạ tầng máy chủ lưu trữ, bản quyền phần mềm và dịch vụ tư vấn chuyên môn thuê ngoài.

Sổ được `KTV` lập, lưu giữ và cập nhật khi:
1. Phát sinh nhà cung cấp mới được phê duyệt theo quy trình mua sắm nội bộ;
2. Nhà cung cấp có văn bản thông báo thay đổi thông tin pháp lý, mã số thuế, địa chỉ trụ sở hoặc thông tin tài khoản ngân hàng;
3. Đến kỳ đánh giá chất lượng nhà cung cấp định kỳ mỗi 06 tháng (trước ngày 15 tháng 07 và ngày 15 tháng 01 hằng năm).

`KTT` thực hiện kiểm soát định kỳ hằng tháng để đối soát số liệu thanh toán và tính tuân thủ của hồ sơ chứng từ.

## KHUÔN SỔ THEO DÕI NHÀ CUNG CẤP

Bảng theo dõi gồm các trường thông tin chuẩn hóa:

| Cột | Tên trường dữ liệu | Quy cách và nội dung ghi nhận |
| --- | --- | --- |
| 1 | Mã nhà cung cấp (`Vendor ID`) | Khuôn định danh: `OBK-NCC-[Số thứ tự]` |
| 2 | Tên nhà cung cấp | Tên đăng ký kinh doanh chính thức trên Giấy chứng nhận đăng ký doanh nghiệp |
| 3 | Mã số thuế / Mã số doanh nghiệp | Mã số thuế 10 số hoặc 13 số do cơ quan thuế cấp |
| 4 | Nhóm hàng hóa / Dịch vụ | Thiết bị tin học, Văn phòng phẩm, Công chứng - dịch thuật, Dịch vụ phần mềm, Tư vấn chuyên môn |
| 5 | Số tài khoản ngân hàng nhận tiền | Số tài khoản chính chủ của doanh nghiệp hoặc hộ kinh doanh theo hợp đồng |
| 6 | Tên ngân hàng và chi nhánh | Tên đầy đủ của ngân hàng và chi nhánh mở tài khoản thanh toán |
| 7 | Hợp đồng nguyên tắc / Thỏa thuận | Số hợp đồng, ngày ký kết và thời hạn hiệu lực của thỏa thuận cung ứng |
| 8 | Người liên hệ và kênh liên lạc | Họ tên người đại diện bán hàng, số điện thoại công vụ, thư điện tử giao dịch |
| 9 | Điều khoản công nợ và thanh toán | Trả trước, Thanh toán ngay khi nhận hàng, hoặc Trả chậm trong thời hạn quy định (số ngày) |
| 10 | Điểm đánh giá định kỳ gần nhất | Điểm số theo thang điểm 100 tại kỳ đánh giá định kỳ mỗi 06 tháng |
| 11 | Xếp loại nhà cung cấp | Loại A (Ưu tiên), Loại B (Đạt yêu cầu), Loại C (Xem xét thay thế) |
| 12 | Trạng thái giao dịch | Đang hoạt động, Tạm dừng giao dịch, Chấm dứt hợp tác |

## CÁC BƯỚC CẬP NHẬT VÀ QUẢN LÝ SỔ

```
[ ]  1. TIẾP NHẬN VÀ THẨM ĐỊNH NHÀ CUNG CẤP MỚI
        - KTV kiểm tra thông tin pháp lý của nhà cung cấp trên Cổng thông tin quốc gia về đăng ký doanh nghiệp.
        - Xác thực trạng thái hoạt động của mã số thuế trên hệ thống ngành thuế, bảo đảm không thuộc diện đóng mã số thuế hoặc bỏ trốn.
        - Đối chiếu số tài khoản ngân hàng thụ hưởng, bảo đảm trùng khớp với tên pháp nhân cung ứng.
        - Cấp mã định danh OBK-NCC-[Số thứ tự] và nhập thông tin vào sổ trong thời hạn 24 giờ kể từ khi duyệt đề xuất mua sắm.

[ ]  2. THEO DÕI HỢP ĐỒNG NGUYÊN TẮC VÀ ĐIỀU KHOẢN THANH TOÁN
        - Lưu trữ bản sao điện tử hợp đồng nguyên tắc hoặc đơn đặt hàng vào thư mục hồ sơ nhà cung cấp.
        - Ghi nhận chính xác điều khoản hạn mức công nợ và thời hạn thanh toán để đối soát với các đề nghị thanh toán phát sinh.
        - Khi có thông báo thay đổi thông tin tài khoản ngân hàng: tuân thủ đúng Phiếu SC-01, bắt buộc có văn bản xác nhận có chữ ký đại diện pháp luật và con dấu của nhà cung cấp trước khi cập nhật vào sổ.

[ ]  3. KIỂM SOÁT THANH TOÁN VÀ ĐỐI SOÁT ĐỊNH KỲ
        - KTV đối chiếu từng đề nghị thanh toán với thông tin tài khoản trong sổ trước khi trình KTT kiểm soát.
        - Tuyệt đối không thực hiện chuyển khoản sang tài khoản của cá nhân hoặc bên thứ ba không có ủy quyền hợp pháp bằng văn bản.
        - Định kỳ trước ngày 05 hằng tháng: đối chiếu số dư công nợ phải trả với từng nhà cung cấp có dư nợ.

[ ]  4. ĐÁNH GIÁ CHẤT LƯỢNG ĐỊNH KỲ MỖI 06 THÁNG
        - KTV gửi phiếu khảo sát đánh giá đến các bộ phận sử dụng dịch vụ trước ngày 01 tháng 07 và ngày 01 tháng 01 hằng năm.
        - Tổng hợp điểm số theo 4 tiêu chí định lượng quy định tại bảng đánh giá.
        - Trình KTT kiểm soát và báo cáo COO kết quả xếp loại trước ngày 15 của tháng đánh giá.

[ ]  5. XỬ LÝ KẾT QUẢ ĐÁNH GIÁ VÀ ĐIỀU CHỈNH DANH MỤC
        - Nhà cung cấp đạt Loại A: Duy trì hợp tác, xem xét đàm phán chính sách giá và hạn mức công nợ ưu đãi hơn.
        - Nhà cung cấp đạt Loại B: Tiếp tục hợp tác, gửi thư góp ý về các điểm cần cải thiện chất lượng.
        - Nhà cung cấp đạt Loại C: Gửi văn bản cảnh báo; nếu 02 kỳ liên tiếp xếp Loại C thì chuyển trạng thái "Chấm dứt hợp tác" và tìm kiếm đơn vị thay thế.
```

## BẢNG TIÊU CHÍ ĐÁNH GIÁ CHẤT LƯỢNG ĐỊNH KỲ MỖI 06 THÁNG

Mỗi tiêu chí được chấm theo thang điểm từ 0 điểm đến 100 điểm, điểm tổng hợp được tính theo trọng số:

| STT | Tiêu chí đánh giá | Trọng số | Tiêu chuẩn đo lường định lượng |
| --- | --- | --- | --- |
| 1 | Chất lượng hàng hóa / Dịch vụ | 35% | Sản phẩm đúng quy cách kỹ thuật; dịch vụ dịch thuật, công chứng không có sai sót nội dung; tỷ lệ hàng lỗi hoặc phải làm lại ít hơn 2% tổng số giao dịch trong kỳ. |
| 2 | Tiến độ giao hàng và thời gian đáp ứng | 25% | Giao hàng đúng thời hạn ghi trong đơn đặt hàng; phản hồi yêu cầu kỹ thuật hoặc báo giá trong thời hạn 04 giờ làm việc. |
| 3 | Giá cả và tính ổn định thương mại | 20% | Đơn giá cạnh tranh so với mặt bằng thị trường tại cùng thời điểm; giữ giá ổn định theo đúng cam kết trong hợp đồng nguyên tắc, không tăng giá đột xuất. |
| 4 | Tính hợp lệ của chứng từ và hỗ trợ kế toán | 20% | Phát hành hóa đơn điện tử hợp pháp đúng thời điểm theo quy định tại Nghị định 254/2026/NĐ-CP; hồ sơ thanh toán đầy đủ chứng từ gốc; hoàn thành đối chiếu công nợ trong thời hạn 03 ngày làm việc kể từ khi nhận đề nghị. |

### Thang phân loại kết quả đánh giá

- **Loại A (Từ 85 điểm đến 100 điểm):** Nhà cung cấp xuất sắc. Được ưu tiên lựa chọn cho các gói mua sắm tiếp theo và xem xét gia hạn hợp đồng khung dài hạn từ 12 tháng đến 24 tháng.
- **Loại B (Từ 70 điểm đến 84 điểm):** Nhà cung cấp đạt yêu cầu. Tiếp tục duy trì hợp tác theo các điều khoản hiện hành.
- **Loại C (Từ 0 điểm đến 69 điểm):** Nhà cung cấp không đạt tiêu chuẩn. `KTV` lập thông báo chỉ rõ các vi phạm về tiến độ, chất lượng hoặc chứng từ kế toán. Trường hợp 02 kỳ liên tiếp xếp Loại C, oBacker dừng toàn bộ đơn đặt hàng mới và thực hiện thanh lý hợp đồng.

## ĐIỂM KIỂM SOÁT BẮT BUỘC

1. **Điểm kiểm soát KS-NC-01 (Kiểm soát thông tin thụ hưởng):** Trước mỗi lần chuyển tiền thanh toán, `KTV` và `KTT` đối chiếu số tài khoản ngân hàng trên Lệnh chi với Số tài khoản đã ghi nhận trong Sổ NC-01. Mọi trường hợp thay đổi số tài khoản phải có văn bản thông báo chính thức có chữ ký của người đại diện pháp luật bên nhà cung cấp theo đúng thủ tục tại SC-01.
2. **Điểm kiểm soát KS-NC-02 (Kiểm soát tính hợp lệ của hóa đơn):** Hóa đơn điện tử của nhà cung cấp phải được tra cứu xác thực trên Cổng thông tin hóa đơn điện tử của cơ quan thuế trước khi hạch toán chi phí và thực hiện thanh toán.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ theo dõi được `KTV` lưu giữ trên hệ thống cơ sở dữ liệu nội bộ và sao lưu định kỳ vào ngày cuối cùng hằng tháng. Báo cáo đánh giá nhà cung cấp định kỳ mỗi 06 tháng sau khi hoàn thành được gửi lưu trữ tại hồ sơ của phòng Kế toán và chuyển một bản cho `COO` để phục vụ công tác điều hành mua sắm.

## KÝ XÁC NHẬN

| Kế toán viên theo dõi (`KTV`) | Kế toán trưởng kiểm soát (`KTT`) | Giám đốc vận hành phê duyệt (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Việc mua sắm hàng hóa và dịch vụ nội bộ phát sinh thường xuyên với nhiều đối tác khác nhau. Sổ theo dõi tập trung giúp oBacker kiểm soát chặt chẽ thông tin pháp lý và thông tin ngân hàng của đối tác, ngăn ngừa rủi ro chuyển nhầm tiền hoặc gian lận thanh toán, bảo đảm toàn bộ chi phí mua sắm có đủ hóa đơn chứng từ hợp pháp để tính vào chi phí được trừ khi xác định nghĩa vụ thuế thu nhập doanh nghiệp, đồng thời sàng lọc định kỳ để duy trì các nhà cung cấp có chất lượng dịch vụ tốt.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu NC-01 về Sổ cái OBK-MSR |
