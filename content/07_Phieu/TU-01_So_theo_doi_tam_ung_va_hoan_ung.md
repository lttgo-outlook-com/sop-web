---
title: "PHIẾU TU-01. SỔ THEO DÕI TẠM ỨNG VÀ HOÀN ỨNG NỘI BỘ"
code: "TU-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
law_as_of: ""
next_review: ""
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - TU-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU TU-01. SỔ THEO DÕI TẠM ỨNG VÀ HOÀN ỨNG NỘI BỘ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | TU-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | TU-01 |
| **Màu** | VÀNG, sổ theo dõi cảnh báo tài chính |
| **Ai dùng** | `KTV`, `AD-KT`, Quản lý trực tiếp (`TL`), `KTT` |
| **Sinh từ** | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 36, Điều 37, Điều 38;<br>[[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] Luồng C |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi tạm ứng và hoàn ứng nội bộ áp dụng cho toàn bộ các khoản tạm ứng tiền mặt hoặc chuyển khoản cấp cho người lao động của oBacker phục vụ các nhiệm vụ công tác, mua sắm vật tư hàng hóa, tiếp khách hoặc triển khai hoạt động chuyên môn theo dự toán đã được cấp có thẩm quyền phê duyệt.

Sổ được `KTV` mở theo dõi liên tục, cập nhật ngay khi phát sinh lệnh chi tạm ứng và đóng mục theo dõi khi người lao động hoàn tất quyết toán hoàn ứng kèm đầy đủ chứng từ hợp pháp.

## NGUYÊN TẮC VÀ ĐIỀU KIỆN TẠM ỨNG

Căn cứ quy định tại Điều 36 [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]], hoạt động tạm ứng tuân thủ các nguyên tắc sau:
1. Tạm ứng chỉ cấp cho nhân sự chính thức hoặc đang trong thời gian thử việc tại oBacker để phục vụ nhiệm vụ cụ thể được giao; không cấp tạm ứng với mục đích giữ tiền dự phòng cá nhân.
2. Mức tối đa cho một khoản tạm ứng là **10.000.000 đồng** theo định mức ĐM-19. Mọi đề xuất tạm ứng vượt mức 10.000.000 đồng bắt buộc phải do `CEO` phê duyệt bằng văn bản.
3. Một người lao động không được có quá **03 khoản tạm ứng** chưa hoàn tất thủ tục tất toán. Đề nghị tạm ứng thứ tư bị hệ thống từ chối cho đến khi hoàn ứng xong các khoản trước đó.
4. Tiền tạm ứng được chuyển khoản trực tiếp vào tài khoản ngân hàng chính chủ của người đề nghị. Chỉ chi tiền mặt đối với các khoản dưới mức tối đa chi tiền mặt theo quy chế tài chính (ít hơn 05 triệu đồng).
5. Phân định hạch toán theo Thông tư 99/2025/TT-BTC và [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] Điều 6.6a: Tạm ứng thực hiện nhiệm vụ công tác, mua sắm hạch toán vào bên Nợ Tài khoản 141; riêng khoản tạm ứng tiền lương theo đợt thực hiện theo biểu mẫu `BM-08` và hạch toán vào bên Nợ Tài khoản 334, thu hồi bằng cách trừ vào tiền lương thực lĩnh của kỳ.

## KHUÔN SỔ THEO DÕI TẠM ỨNG VÀ HOÀN ỨNG

Bảng theo dõi gồm các trường thông tin chuẩn hóa:

| Cột | Tên trường dữ liệu | Quy cách và nội dung ghi nhận |
| --- | --- | --- |
| 1 | Mã khoản tạm ứng (`Advance ID`) | Khuôn định danh: `OBK-TU-[Năm]-[Số thứ tự]` |
| 2 | Họ và tên người nhận tạm ứng | Họ tên người lao động trực tiếp nhận tiền |
| 3 | Bộ phận công tác | Tên phòng ban hoặc nhóm chuyên môn |
| 4 | Mục đích tạm ứng | Chi phí công tác, Mua sắm vật tư, Chi phí dịch vụ khác |
| 5 | Số tiền đã tạm ứng (đồng) | Giá trị tiền thực tế đã chi tạm ứng theo lệnh chi |
| 6 | Hình thức chi tiền | Chuyển khoản ngân hàng hoặc Chi tiền mặt tại quỹ |
| 7 | Ngày nhận tiền tạm ứng | Ngày ngân hàng báo Nợ hoặc ngày ký phiếu chi tiền mặt |
| 8 | Ngày kết thúc công tác / mua sắm | Ngày ghi trên vé về, ngày nghiệm thu hàng hóa hoặc kết thúc sự kiện |
| 9 | Thời hạn hoàn ứng quy định | Ngày làm việc cuối cùng người lao động phải nộp đủ hồ sơ hoàn ứng |
| 10 | Ngày nộp hồ sơ quyết toán | Ngày `KTV` tiếp nhận đầy đủ chứng từ gốc từ người hoàn ứng |
| 11 | Số tiền thực chi hợp lệ (đồng) | Tổng giá trị chi tiêu có đủ hóa đơn tài chính và chứng từ hợp pháp |
| 12 | Chênh lệch tài chính (đồng) | Tiền nộp lại quỹ (nếu chi ít hơn tạm ứng) hoặc Tiền nhận thêm (nếu chi vượt) |
| 13 | Số ngày quá hạn hoàn ứng | Số ngày trễ hạn tính từ ngày kế tiếp của mốc Cột 9 |
| 14 | Trạng thái tất toán | Đang trong hạn, Đã hoàn ứng đúng hạn, Quá hạn từ 01 ngày đến 15 ngày, Quá hạn từ 16 ngày trở lên |

## THỜI HẠN HOÀN ỨNG QUY ĐỊNH

Căn cứ quy định tại Điều 37 [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]], thời hạn hoàn ứng được xác định cụ thể theo từng loại hình công việc:

| Loại tạm ứng | Thời hạn hoàn ứng bắt buộc | Điểm bắt đầu tính thời hạn |
| --- | --- | --- |
| **Tạm ứng công tác** | Trong vòng **05 ngày làm việc** | Tính từ ngày kết thúc chuyến công tác (căn cứ vé tàu xe, máy bay hoặc lịch trình được duyệt) |
| **Tạm ứng mua sắm vật tư** | Trong vòng **05 ngày làm việc** | Tính từ ngày bàn giao, nghiệm thu vật tư hoặc ngày chi khoản tiền cuối cùng |
| **Tạm ứng công việc khác** | Trong vòng **15 ngày làm việc** | Tính từ ngày hoàn thành nhiệm vụ ghi trên giấy đề nghị tạm ứng |

Toàn bộ các khoản tạm ứng phát sinh trong tháng 12 hằng năm bắt buộc phải hoàn ứng dứt điểm trước ngày khóa sổ kế toán năm (ngày 31 tháng 12).

## CÁC BƯỚC CẬP NHẬT SỔ VÀ KIỂM SOÁT HOÀN ỨNG

```
[ ]  1. XUẤT CHI TẠM ỨNG VÀ MỞ MÃ THEO DÕI
        - KTV kiểm tra tính hợp lệ của Giấy đề nghị tạm ứng đã được TL và KTT duyệt.
        - Kiểm soát điều kiện số khoản tạm ứng đang tồn của nhân sự (phải ít hơn hoặc bằng 03 khoản).
        - Thực hiện lệnh chuyển tiền hoặc xuất quỹ tiền mặt; nhập dòng dữ liệu mới vào Sổ TU-01 trong vòng 24 giờ.
        - Xác định chính xác "Thời hạn hoàn ứng quy định" dựa trên ngày dự kiến kết thúc nhiệm vụ.

[ ]  2. NHẮC HẸN HOÀN ỨNG TRƯỚC 01 NGÀY LÀM VIỆC
        - KTV rà soát các khoản tạm ứng sắp đến hạn nộp hồ sơ quyết toán.
        - Gửi thư điện tử thông báo cho người tạm ứng trước 01 ngày làm việc so với hạn quy định, hướng dẫn chuẩn bị chứng từ gốc.

[ ]  3. TIẾP NHẬN HỒ SƠ QUYẾT TOÁN VÀ ĐỐI SOÁT CHỨNG TỪ
        - KTV kiểm tra bộ chứng từ gốc: Bảng kê thanh toán, hóa đơn điện tử hợp pháp, vé tàu xe, phòng nghỉ khách sạn.
        - Kiểm tra bằng chứng thanh toán không dùng tiền mặt đối với các hóa đơn có giá trị từ 05 triệu đồng trở lên.
        - Tính toán chính xác số tiền thực chi hợp lệ và số tiền chênh lệch.

[ ]  4. TẤT TOÁN CHÊNH LỆCH VÀ ĐÓNG DÒNG THEO DÕI
        - Trường hợp số tạm ứng lớn hơn số thực chi: người lao động chuyển khoản hoàn trả số tiền thừa vào tài khoản công ty trong vòng 24 giờ.
        - Trường hợp số thực chi lớn hơn số tạm ứng (đã được cấp có thẩm quyền duyệt phần chi vượt): KTV lập đề nghị thanh toán bổ sung cho người lao động.
        - Cập nhật trạng thái "Đã hoàn ứng đúng hạn" và lưu trữ hồ sơ.

[ ]  5. KÍCH HOẠT CẢNH BÁO VÀ CHẾ TÀI QUÁ HẠN HOÀN ỨNG
        - Giai đoạn 1 (Quá hạn từ 01 ngày đến 15 ngày): KTV gửi thư điện tử đôn đốc, gửi kèm Quản lý trực tiếp (TL). Hệ thống tự động khóa quyền tạm ứng mới và quyền đề nghị chi hộ của nhân sự.
        - Giai đoạn 2 (Quá hạn từ 16 ngày trở lên): KTT lập báo cáo gửi CEO; áp dụng quy trình xử lý thu hồi nợ theo quy định pháp luật.
```

## CƠ CHẾ CẢNH BÁO VÀ XỬ LÝ THU HỒI NỢ TẠM ỨNG QUÁ HẠN

Theo quy định tại Điều 102 khoản 1 và Điều 127 khoản 2 Bộ luật Lao động 2019, người sử dụng lao động không được tự ý thực hiện khấu trừ tiền lương đơn phương để thu hồi khoản nợ tạm ứng khi chưa có căn cứ luật định hoặc chưa có văn bản đồng thuận của người lao động. 

Nhằm bảo đảm tính tuân thủ pháp luật lao động và bảo toàn tài chính công ty, cơ chế xử lý khoản tạm ứng quá hạn được áp dụng theo trình tự 4 bước quy định tại Điều 38 [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]]:

1. **Người lao động tự giác chuyển trả (Biện pháp ưu tiên):** `KTV` phát hành thông báo số dư nợ quá hạn kèm thời hạn chuyển trả cụ thể. Người lao động tự giác thực hiện lệnh chuyển khoản hoàn trả toàn bộ số tiền chưa quyết toán vào tài khoản ngân hàng của oBacker.
2. **Ký văn bản thỏa thuận hoàn trả riêng:** Trường hợp người lao động chưa thể hoàn trả một lần, `KTV` phối hợp `HR` lập Văn bản thỏa thuận hoàn trả nợ tạm ứng giữa oBacker và người lao động. Văn bản ghi rõ số tiền nợ, phương thức chi trả và tiến độ trừ dần vào các kỳ thu nhập có sự đồng thuận tự nguyện bằng văn bản của người lao động.
3. **Bù trừ nghĩa vụ tài chính khi chấm dứt hợp đồng lao động:** Trường hợp người lao động nghỉ việc hoặc thôi việc mà vẫn còn khoản nợ tạm ứng chưa hoàn trả, hai bên thực hiện bù trừ nghĩa vụ tài sản khi giải quyết chế độ thanh toán chấm dứt hợp đồng lao động theo quy định tại Điều 48 khoản 1 Bộ luật Lao động.
4. **Khởi kiện dân sự:** Trường hợp người lao động cố tình không hoàn trả và từ chối hợp tác ký thỏa thuận giải quyết, `CEO` quyết định chuyển toàn bộ hồ sơ cho bộ phận pháp lý để khởi kiện thu hồi nợ tại Tòa án theo thủ tục tố tụng dân sự.

### Các biện pháp kỷ luật hành chính nội bộ đi kèm

Song song với việc thu hồi tiền, người lao động vi phạm thời hạn hoàn ứng bị áp dụng ngay các chế tài nội bộ:
- Tạm dừng quyền đề nghị tạm ứng mới và quyền đề nghị chi hộ;
- Đánh giá giảm điểm tiêu chí tuân thủ quy chế nội bộ trong kỳ đánh giá hiệu suất định kỳ theo [[08_Khung_danh_gia_hieu_suat|OBK-QCNS-08]];
- Không xét duyệt các danh hiệu khen thưởng hoặc tiền thưởng hiệu quả công việc theo quy định tại Điều 9 [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo|OBK-QCNS-02]] và quyết định `VQ-31`.

## ĐIỂM KIỂM SOÁT BẮT BUỘC

1. **Điểm kiểm soát KS-TU-01 (Kiểm soát hạn mức và số khoản):** `KTV` kiểm tra không để một cá nhân phát sinh khoản tạm ứng mới khi số khoản chưa tất toán đã đạt con số 03.
2. **Điểm kiểm soát KS-TU-02 (Kiểm soát chứng từ thanh toán không dùng tiền mặt):** Toàn bộ hóa đơn chi tiêu mua sắm từ 05 triệu đồng trở lên trong hồ sơ hoàn ứng bắt buộc phải có chứng từ thanh toán chuyển khoản qua ngân hàng; trường hợp không có chứng từ ngân hàng thì loại bỏ khỏi chi phí được trừ và yêu cầu cá nhân nộp lại tiền mặt.
3. **Điểm kiểm soát KS-TU-03 (Khóa sổ cuối năm):** Ngày 25 tháng 12 hằng năm, `KTV` lập danh sách toàn bộ các khoản tạm ứng còn số dư, đôn đốc tất toán dứt điểm trước ngày 31 tháng 12.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ theo dõi tạm ứng được `KTV` duy trì và cập nhật liên tục. Bản đối chiếu số dư tài khoản tạm ứng (Tài khoản 141) được đối chiếu khớp đúng với sổ cái kế toán vào ngày cuối cùng hằng tháng và trình `KTT` ký phê duyệt.

## KÝ XÁC NHẬN

| Kế toán viên theo dõi (`KTV`) | Quản lý trực tiếp (`TL`) | Kế toán trưởng phê duyệt (`KTT`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Hoạt động tạm ứng là nghiệp vụ cần thiết để đáp ứng các nhu cầu mua sắm và chi phí công tác phục vụ hoạt động sản xuất kinh doanh. Tuy nhiên, việc thiếu theo dõi chặt chẽ dễ dẫn đến tình trạng chiếm dụng vốn công ty, chậm trễ hoàn chứng từ làm mất quyền khấu trừ thuế giá trị gia tăng đầu vào và chi phí được trừ khi quyết toán thuế thu nhập doanh nghiệp. Sổ theo dõi TU-01 thiết lập kỷ luật hoàn ứng trong thời hạn 05 ngày làm việc và xác lập quy trình xử lý thu hồi nợ chặt chẽ, tuân thủ đúng quy định pháp luật lao động.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Căn cứ | Nội dung trích dẫn hoặc áp dụng |
| --- | --- | --- |
| Quy chế tài chính | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 36, Điều 37, Điều 38 | Điều kiện tạm ứng, thời hạn hoàn ứng và chế tài xử lý nợ quá hạn |
| Quy trình mua sắm | [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] Luồng C | Trình tự phê duyệt dự toán tạm ứng và hồ sơ thanh toán hoàn ứng |
| Bộ luật Lao động | Bộ luật Lao động số 45/2019/QH14 Điều 102 và Điều 127 | Quy định về giới hạn quyền khấu trừ tiền lương và các hành vi bị cấm khi xử lý kỷ luật |
| Thanh toán chấm dứt HĐLĐ | Bộ luật Lao động số 45/2019/QH14 Điều 48 khoản 1 | Trách nhiệm thanh toán đầy đủ các khoản tiền liên quan đến quyền lợi của mỗi bên khi chấm dứt hợp đồng |
| Chế độ kế toán doanh nghiệp | Thông tư số 99/2025/TT-BTC Tài khoản 141 | Nguyên tắc hạch toán và theo dõi chi tiết từng đối tượng tạm ứng |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
