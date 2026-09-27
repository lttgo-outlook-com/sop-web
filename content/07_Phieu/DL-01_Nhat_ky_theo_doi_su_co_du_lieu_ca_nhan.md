---
title: "PHIẾU DL-01. NHẬT KÝ THEO DÕI SỰ CỐ DỮ LIỆU CÁ NHÂN"
code: "DL-01"
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
previous_version: "R.1.0.0"
aliases:
  - DL-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU DL-01. NHẬT KÝ THEO DÕI SỰ CỐ DỮ LIỆU CÁ NHÂN

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | DL-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | DL-01 |
| **Màu** | ĐỎ, nhật ký kiểm soát sự cố rủi ro an toàn thông tin |
| **Ai dùng** | Cán bộ bảo vệ dữ liệu cá nhân (`DPO`), Quản trị IT, `CEO`, `COO`, `TL` |
| **Sinh từ** | [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo\|OBK-SOP-NB-09]];<br>[[06_Data_Protection_VI\|OBK-TnC-06]] |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Nhật ký theo dõi sự cố dữ liệu cá nhân được kích hoạt ngay khi xuất hiện bất kỳ dấu hiệu vi phạm an toàn dữ liệu cá nhân tại oBacker, bao gồm:
1. Sự cố rò rỉ, lộ lọt, mất mát, hủy hoại hoặc truy cập trái phép vào dữ liệu cá nhân của người lao động oBacker hoặc dữ liệu của khách hàng do oBacker xử lý;
2. Sự cố kỹ thuật an toàn thông tin: máy chủ bị tấn công, mã độc tống tiền, lộ thông tin xác thực quản trị hệ thống;
3. Sự cố do yếu tố con người: gửi nhầm dữ liệu khách hàng qua thư điện tử, thất lạc thiết bị chứa dữ liệu công ty, nhân sự sao chép dữ liệu nội bộ trái phép.

Nhật ký do Cán bộ bảo vệ dữ liệu cá nhân (`DPO`) trực tiếp mở, ghi nhận, theo dõi toàn bộ diễn biến từ thời điểm phát hiện đến khi hoàn thành khắc phục và đóng hồ sơ sự cố.

## PHÂN CẤP 3 MỨC ĐỘ RỦI RO SỰ CỐ

Căn cứ quy định tại Điều 23 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và quy trình [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo|OBK-SOP-NB-09]], sự cố được phân thành 03 mức độ:

| Mức độ rủi ro | Tiêu chí nhận diện kỹ thuật | Nghĩa vụ báo cáo cơ quan nhà nước |
| --- | --- | --- |
| **Mức 1 (Rủi ro Thấp)** | Dữ liệu cá nhân cơ bản bị lộ trong phạm vi nội bộ hẹp; đã thu hồi ngay trong vòng 02 giờ; không có dấu hiệu bị phát tán ra ngoài hoặc bị bên thứ ba khai thác; không có nguy cơ gây thiệt hại cho chủ thể dữ liệu. | Ghi nhận sổ nhật ký nội bộ; lập biên bản đánh giá rủi ro xác nhận không thuộc diện bắt buộc thông báo ra bên ngoài. |
| **Mức 2 (Rủi ro Trung bình)** | Dữ liệu cá nhân cơ bản bị rò rỉ ra ngoài (danh sách họ tên, số điện thoại, thư điện tử); số lượng chủ thể dữ liệu bị ảnh hưởng từ 10 cá nhân đến 100 cá nhân; có khả năng gây phiền toái hoặc rủi ro thư rác cho chủ thể dữ liệu. | `DPO` báo cáo `CEO`. Lập văn bản thông báo gửi Cơ quan chuyên trách bảo vệ dữ liệu cá nhân (A05 - Bộ Công an) trong vòng 72 giờ và gửi thông báo cho chủ thể dữ liệu. |
| **Mức 3 (Rủi ro Cao / Đặc biệt nghiêm trọng)** | Rò rỉ dữ liệu cá nhân nhạy cảm (Căn cước công dân, dữ liệu sinh trắc học, thông tin tiền lương, tài khoản ngân hàng); số lượng chủ thể dữ liệu bị ảnh hưởng từ 101 cá nhân trở lên; hệ thống máy chủ bị xâm nhập trái phép; dữ liệu bị phát tán hoặc rao bán công khai. | Kích hoạt Ban chỉ đạo khẩn cấp. Bắt buộc lập hồ sơ thông báo gửi Cơ quan chuyên trách (A05 - Bộ Công an) CHẬM NHẤT TRONG VÒNG 72 GIỜ. Thông báo công khai đến toàn bộ chủ thể dữ liệu bị ảnh hưởng. |

## KHUÔN NHẬT KÝ THEO DÕI SỰ CỐ DỮ LIỆU CÁ NHÂN

Bảng theo dõi gồm các trường thông tin chuẩn hóa:

| Cột | Tên trường dữ liệu | Quy cách và nội dung ghi nhận |
| --- | --- | --- |
| 1 | Mã sự cố (`Incident ID`) | Khuôn định danh: `OBK-INC-[Năm]-[Số thứ tự]` |
| 2 | Thời điểm phát hiện sự cố | Giờ, phút, ngày, tháng, năm phát hiện sự cố (Mốc T0) |
| 3 | Người hoặc hệ thống phát hiện | Họ tên nhân sự phát hiện hoặc tên hệ thống giám sát an toàn thông tin tự động |
| 4 | Hệ thống / Phương tiện bị ảnh hưởng | Máy chủ lưu trữ đám mây, hòm thư điện tử công vụ, máy tính cá nhân, hoặc hồ sơ giấy |
| 5 | Loại dữ liệu cá nhân bị xâm phạm | Dữ liệu cơ bản (họ tên, số điện thoại, địa chỉ) hoặc Dữ liệu nhạy cảm (CCCD, lương, sinh trắc học, tài khoản) |
| 6 | Số lượng chủ thể dữ liệu bị ảnh hưởng | Số cá nhân có dữ liệu bị lộ, mất hoặc truy cập trái phép |
| 7 | Mức độ rủi ro xác định | Mức 1 (Thấp), Mức 2 (Trung bình), hoặc Mức 3 (Cao) |
| 8 | Hạn chót thông báo A05 (Mốc 72 giờ) | Mốc thời gian = T0 + 72 giờ (áp dụng cho Mức 2 và Mức 3) |
| 9 | Ngày gửi thông báo và Số công văn A05 | Ngày nộp văn bản báo cáo và số biên nhận tiếp nhận hồ sơ của Cục A05 - Bộ Công an |
| 10 | Tình trạng thông báo cho chủ thể | Đã thông báo qua thư điện tử, Đã thông báo công khai, hoặc Không thuộc diện bắt buộc |
| 11 | Biện pháp cô lập khẩn cấp đã áp dụng | Ngắt mạng, đổi mật khẩu toàn bộ, thu hồi liên kết chia sẻ, khóa tài khoản nghi ngờ |
| 12 | Biện pháp khắc phục và bài học rút ra | Sửa chữa sai sót kỹ thuật, đào tạo nâng cao ý thức nhân sự, cải tiến quy trình quản trị |
| 13 | Trạng thái hồ sơ sự cố | Đang điều tra, Đang khắc phục, Đang theo dõi, Đã đóng hồ sơ |

## QUY TRÌNH XỬ LÝ VÀ THEO DÕI MỐC 72 GIỜ LUẬT ĐỊNH

Căn cứ Điều 23 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Điều 28 Nghị định số 356/2025/NĐ-CP:

```
[ ]  1. TIẾP NHẬN CẢNH BÁO VÀ KHOANH VÙNG KHẨN CẤP (TRONG VÒNG 02 GIỜ)
        - Khi có tin báo sự cố: DPO mở ngay mã định danh OBK-INC-[Năm]-[Số thứ tự] vào Sổ DL-01.
        - Ghi nhận chính xác mốc thời gian phát hiện (T0).
        - Quản trị IT kích hoạt biện pháp cô lập kỹ thuật: Ngắt kết nối thiết bị nhiễm mã độc, thu hồi liên kết chia sẻ công khai,
          buộc đăng xuất toàn bộ phiên làm việc của tài khoản liên quan.
        - Quản trị IT trích xuất và bảo toàn tệp nhật ký hệ thống (Access Log) phục vụ công tác điều tra.

[ ]  2. ĐIỀU TRA VÀ ĐÁNH GIÁ MỨC ĐỘ RỦI RO (TRONG VÒNG 24 GIỜ KỂ TỪ T0)
        - DPO phối hợp Quản trị IT và TL bộ phận liên quan xác định danh mục dữ liệu và số lượng chủ thể dữ liệu bị ảnh hưởng.
        - Xác định sự cố thuộc Mức 1, Mức 2 hay Mức 3 theo Bảng phân cấp rủi ro.
        - Báo cáo kết quả điều tra sơ bộ cho CEO.

[ ]  3. LẬP HỒ SƠ THÔNG BÁO GỬI CƠ QUAN CHUYÊN TRÁCH A05 (CHẬM NHẤT TRONG 72 GIỜ)
        - Đối với sự cố Mức 2 và Mức 3: DPO soạn thảo Thông báo sự cố theo Mẫu quy định tại Nghị định 356/2025/NĐ-CP.
        - Nội dung thông báo gồm: Bản mô tả tính chất sự cố; Thời điểm xảy ra; Loại dữ liệu và số lượng người bị ảnh hưởng;
          Đánh giá hậu quả tiềm tàng; Các biện pháp bảo vệ và giảm thiểu thiệt hại đã áp dụng; Thông tin đầu mối liên hệ của DPO.
        - CEO kiểm tra và ký văn bản thông báo.
        - Gửi văn bản trực tiếp hoặc qua dịch vụ bưu chính công ích đến Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao
          (A05 - Bộ Công an) trước mốc thời gian T0 + 72 giờ.
        - Cập nhật số công văn hoặc mã biên nhận tiếp nhận hồ sơ vào Cột 9 của Sổ DL-01.

[ ]  4. THÔNG BÁO CHO CHỦ THỂ DỮ LIỆU BỊ ẢNH HƯỞNG
        - DPO soạn thảo thư thông báo gửi trực tiếp đến người lao động hoặc khách hàng có dữ liệu bị ảnh hưởng.
        - Cung cấp hướng dẫn chi tiết cho chủ thể dữ liệu: Đổi mật khẩu cá nhân, kích hoạt bảo mật hai lớp (2FA),
          cảnh giác trước các cuộc gọi hoặc tin nhắn lừa đảo mạo danh.

[ ]  5. KHẮC PHỤC TRIỆT ĐỂ, TỔNG KẾT BÀI HỌC VÀ ĐÓNG HỒ SƠ
        - Quản trị IT khôi phục dữ liệu từ bản sao lưu sạch; xử lý điểm yếu kỹ thuật trên hệ thống.
        - DPO tổ chức họp đánh giá nguyên nhân gốc rễ, xác định rõ trách nhiệm cá nhân hoặc bộ phận để xử lý theo quy định nội bộ.
        - Cập nhật mục "Biện pháp khắc phục và bài học rút ra" vào Sổ DL-01.
        - Trình CEO ký duyệt biên bản đóng hồ sơ sự cố.
```

## ĐIỂM KIỂM SOÁT BẮT BUỘC

1. **Điểm kiểm soát KS-DL-01 (Kỷ luật mốc 72 giờ):** Mốc thời gian 72 giờ gửi văn bản báo cáo Cục A05 - Bộ Công an là thời hạn bắt buộc theo quy định tại Điều 23 Luật 91/2025/QH15. Tuyệt đối không trì hoãn báo cáo với lý do chưa hoàn tất điều tra chi tiết; khi chưa có kết luận đầy đủ, oBacker thực hiện gửi báo cáo sơ bộ ban đầu và gửi bổ sung sau.
2. **Điểm kiểm soát KS-DL-02 (Bảo toàn bằng chứng nhật ký hệ thống):** Nghiêm cấm mọi hành vi tự ý xóa tệp nhật ký (log files) hoặc ghi đè dữ liệu trên thiết bị xảy ra sự cố trước khi Quản trị IT hoàn thành việc sao lưu tạo bản sao bằng chứng số học phục vụ giám định.
3. **Điểm kiểm soát KS-DL-03 (Thẩm quyền phát ngôn và ký văn bản):** Duy nhất `CEO` có thẩm quyền ký văn bản báo cáo cơ quan chuyên trách bảo vệ dữ liệu cá nhân và duyệt thông cáo chính thức gửi khách hàng. Các cá nhân khác không tự ý cung cấp thông tin ra bên ngoài.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Nhật ký sự cố DL-01 được lưu trữ bảo mật cấp độ cao nhất do `DPO` trực tiếp quản lý trên phân vùng dữ liệu riêng biệt. Toàn bộ hồ sơ sự cố (Nhật ký, biên bản họp, văn bản gửi Cục A05, bằng chứng thông báo khách hàng) phải được lưu trữ trong thời hạn tối thiểu 05 năm phục vụ công tác thanh tra, kiểm tra chuyên ngành của cơ quan nhà nước.

## KÝ XÁC NHẬN

| Cán bộ bảo vệ dữ liệu (`DPO`) | Quản trị viên hệ thống (IT) | Tổng giám đốc phê duyệt (`CEO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 đặt ra trách nhiệm pháp lý nghiêm ngặt đối với Bên kiểm soát và Bên xử lý dữ liệu. Khi sự cố xảy ra, việc chậm trễ thông báo cơ quan chuyên trách quá thời hạn 72 giờ hoặc không thông báo cho chủ thể dữ liệu có thể dẫn đến mức xử phạt hành chính lên đến 5% tổng doanh thu của năm tài chính trước đó, cùng rủi ro đình chỉ hoạt động xử lý dữ liệu và trách nhiệm bồi thường thiệt hại dân sự. Phiếu DL-01 cung cấp một quy trình ghi nhận chuẩn tắc, kiểm soát chặt chẽ mốc thời gian luật định 72 giờ và lưu vết đầy đủ biện pháp ứng phó.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Căn cứ | Nội dung trích dẫn hoặc áp dụng |
| --- | --- | --- |
| Quy trình sự cố dữ liệu | [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo\|OBK-SOP-NB-09]] | Trình tự 5 bước ứng phó khẩn cấp và trách nhiệm của các vai trò |
| Cam kết bảo vệ dữ liệu | [[06_Data_Protection_VI\|OBK-TnC-06]] | Cam kết của oBacker đối với dữ liệu cá nhân của khách hàng |
| Luật Bảo vệ dữ liệu cá nhân | Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 Điều 23 | Nghĩa vụ thông báo hành vi vi phạm quy định bảo vệ dữ liệu trong vòng 72 giờ |
| Nghị định chi tiết | Nghị định số 356/2025/NĐ-CP Điều 28 | Mẫu văn bản và nội dung chi tiết của thông báo sự cố vi phạm |
| An toàn thông tin mạng | Luật An toàn thông tin mạng số 86/2015/QH13 | Quy định về ứng cứu sự cố và bảo vệ thông tin cá nhân trên mạng |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
