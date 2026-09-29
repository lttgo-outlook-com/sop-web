---
title: "PHIẾU BC-01. BẢNG KIỂM TRA SAO LƯU DỮ LIỆU VÀ ỨNG PHÓ SỰ CỐ BCP"
code: "BC-01"
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
  - BC-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU BC-01. BẢNG KIỂM TRA SAO LƯU DỮ LIỆU VÀ ỨNG PHÓ SỰ CỐ BCP

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BC-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | BC-01 |
| **Màu** | CAM, kiểm soát an toàn dữ liệu và phục hồi thảm họa |
| **Ai dùng** | Quản trị hệ thống (`IT Admin` / `CV-CN`), `KTT`, `COO`, `CEO`, `TL` |
| **Sinh từ** | [[OBK-SOP-NB-15_Duy_tri_kinh_doanh_lien_tuc_va_sao_luu_du_lieu\|OBK-SOP-NB-15]] |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Phiếu BC-01 được kích hoạt và sử dụng trong ba tình huống vận hành cụ thể:
1. **Kiểm tra định kỳ hằng tuần:** Quản trị hệ thống mở sổ vào sáng Thứ Hai hằng tuần để kiểm tra tính toàn vẹn của các bản sao lưu dữ liệu tự động phát sinh trong tuần trước đó (kế toán, hồ sơ pháp lý số hóa, cấu hình hệ thống).
2. **Tổ chức diễn tập phục hồi thảm họa định kỳ:** Ban duy trì kinh doanh liên tục (BCP) lập biên bản ghi nhận kết quả diễn tập phục hồi số liệu định kỳ 06 tháng một lần (vào Tháng 3 và Tháng 9 hằng năm) để đo lường hai chỉ số RTO và RPO.
3. **Ứng phó sự cố gián đoạn vận hành thực tế:** Ban BCP tra cứu danh bạ liên lạc khẩn cấp và kích hoạt kịch bản điều phối nhân sự, chuyển mạch mạng hoặc khôi phục dữ liệu khi xảy ra thiên tai, hỏa hoạn, mất điện diện rộng, đứt cáp quang Internet hoặc ngừng trệ dịch vụ đám mây.

---

## PHẦN 1. NHẬT KÝ KIỂM TRA TÍNH TOÀN VẸN CÁC BẢN SAO LƯU HÀNG TUẦN

Quản trị hệ thống kiểm tra và điền vào bảng kiểm tra vào sáng Thứ Hai hằng tuần:

| STT | Ngày kiểm tra | Loại dữ liệu sao lưu | Nguồn bản sao lưu kiểm tra | Tên tệp và dung lượng tệp | Tình trạng mã hóa (AES-256) | Kết quả mở tệp giải nén mẫu | Sai lệch phát hiện (nếu có) | Biện pháp xử lý đã thực hiện | Xác nhận của Quản trị IT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |
| 4 | | | | | | | | | |
| 5 | | | | | | | | | |

*Quy cách ghi nhận các cột:*
- **Cột 3 (Loại dữ liệu sao lưu):** Ghi rõ một trong ba nhóm: Dữ liệu kế toán doanh nghiệp; Dữ liệu hồ sơ pháp lý số hóa; hoặc Dữ liệu cấu hình hệ thống máy chủ.
- **Cột 4 (Nguồn bản sao lưu kiểm tra):** Nêu rõ vị trí lưu trữ đang được kiểm tra (Đám mây chính, Đám mây phụ đa vùng, Ổ cứng ngoại vi số 1 hoặc Ổ cứng ngoại vi số 2).
- **Cột 6 (Tình trạng mã hóa):** Đánh giá "Đạt chuẩn mã hóa" nếu tệp sao lưu hoặc phân vùng ổ cứng được mã hóa chuẩn AES-256; ghi "Không đạt" nếu tệp chưa được mã hóa.
- **Cột 7 (Kết quả mở tệp giải nén mẫu):** Bắt buộc giải nén thử nghiệm ngẫu nhiên ít nhất 01 tệp dữ liệu để xác nhận tệp không bị lỗi cấu trúc.
- **Cột 8 và Cột 9:** Ghi nhận cụ thể các lỗi phát hiện (như tệp dung lượng 0 KB, tệp bị ngắt quãng khi tải lên) và biện pháp kích hoạt sao lưu bù ngay lập tức.

---

## PHẦN 2. BIÊN BẢN DIỄN TẬP PHỤC HỒI THẢM HỌA (DISASTER RECOVERY DRILL)

Áp dụng cho các đợt diễn tập định kỳ 06 tháng một lần hoặc diễn tập đột xuất theo chỉ đạo của `CEO`:

### 2.1. Thông tin chung về đợt diễn tập
- **Đợt diễn tập:** Kỳ ... năm 202... (Kỳ 1 Tháng 3 / Kỳ 2 Tháng 9).
- **Thời điểm bắt đầu:** ...... giờ ...... phút, ngày ....../....../202...
- **Thời điểm hoàn thành:** ...... giờ ...... phút, ngày ....../....../202...
- **Địa điểm thực hiện:** Phòng máy chủ thử nghiệm ảo hóa độc lập (Môi trường Sandbox).
- **Kịch bản thảm họa giả định:** *(Đánh dấu chọn kịch bản)*
  - [ ] Giả định máy chủ dữ liệu kế toán bị hỏng hoàn toàn ổ đĩa cứng;
  - [ ] Giả định văn phòng làm việc bị ngập lụt, toàn bộ thiết bị tại chỗ ngừng hoạt động;
  - [ ] Giả định tài khoản quản trị đám mây chính bị gián đoạn truy cập kéo dài;
  - [ ] Giả định mã độc mã hóa dữ liệu cục bộ, buộc phải khôi phục từ bản sao lưu ngoại vi.

### 2.2. Đo lường chỉ số phục hồi kỹ thuật (RTO và RPO)

| Chỉ số kỹ thuật | Cam kết chuẩn theo quy chế | Kết quả đo đạc thực tế | Đánh giá mức độ đạt |
| --- | --- | --- | --- |
| **Thời gian phục hồi mục tiêu (RTO)** | Từ 04 giờ trở xuống kể từ khi kích hoạt | ...... giờ ...... phút | [ ] ĐẠT &nbsp;&nbsp;&nbsp;&nbsp; [ ] KHÔNG ĐẠT |
| **Điểm phục hồi mục tiêu (RPO)** | Từ 24 giờ trở xuống dữ liệu phát sinh | ...... giờ dữ liệu | [ ] ĐẠT &nbsp;&nbsp;&nbsp;&nbsp; [ ] KHÔNG ĐẠT |

### 2.3. Bảng đối chiếu và kiểm tra tính toàn vẹn số liệu kế toán
*(Do Kế toán trưởng trực tiếp kiểm tra trên môi trường thử nghiệm và xác nhận)*

| Hạng mục đối chiếu | Số liệu trên bản sao lưu thử nghiệm | Số liệu trên sổ sách thực tế trước sự cố | Mức độ trùng khớp | Xác nhận của Kế toán trưởng |
| --- | --- | --- | --- | --- |
| Số lượng chứng từ hóa đơn điện tử | ...... hóa đơn | ...... hóa đơn | Đạt 100% | `KTT` (đã ký) |
| Tổng số dư tiền gửi ngân hàng (TK 112) | ...... đồng | ...... đồng | Đạt 100% | `KTT` (đã ký) |
| Bảng cân đối số phát sinh các tài khoản | Khớp toàn bộ phát sinh Nợ - Có | Khớp toàn bộ phát sinh Nợ - Có | Đạt 100% | `KTT` (đã ký) |
| Danh mục hồ sơ pháp lý số hóa khách hàng | ...... hồ sơ nguyên vẹn | ...... hồ sơ hiện hành | Đạt 100% | `KTT` (đã ký) |

### 2.4. Kết luận và đề xuất cải tiến sau diễn tập
- **Kết luận chung của Ban BCP:** [ ] ĐẠT YÊU CẦU &nbsp;&nbsp;&nbsp;&nbsp; [ ] CẦN DIỄN TẬP LẠI TRONG VÒNG 15 NGÀY.
- **Vấn đề kỹ thuật ghi nhận trong quá trình phục hồi:** ............................................................................
- **Đề xuất cải tiến phương án sao lưu và nâng cấp hạ tầng:** ...................................................................

---

## PHẦN 3. DANH BẠ LIÊN LẠC KHẨN CẤP BCP (EMERGENCY CONTACT DIRECTORY)

### 3.1. Ban chỉ đạo duy trì kinh doanh liên tục (BCP) nội bộ

| Vai trò trong Ban BCP | Chức danh nội bộ | Phân công nhân sự | Kênh liên lạc chính (Số điện thoại) | Kênh liên lạc dự phòng (Thư điện tử / Ứng dụng bảo mật) | Phạm vi phụ trách |
| --- | --- | --- | --- | --- | --- |
| Trưởng ban chỉ đạo | Tổng Giám đốc (`CEO`) | Theo quyết định phân công | Điền theo danh bạ nội bộ | Điền theo danh bạ nội bộ | Toàn công ty |
| Phó Trưởng ban chỉ đạo | Giám đốc Vận hành (`COO`) | Theo quyết định phân công | Điền theo danh bạ nội bộ | Điền theo danh bạ nội bộ | Khối vận hành và điều phối |
| Trưởng nhóm kỹ thuật phục hồi | Quản trị hệ thống (`IT Admin`) | Theo quyết định phân công | Điền theo danh bạ nội bộ | Điền theo danh bạ nội bộ | Hạ tầng CNTT và dữ liệu |
| Thành viên kiểm soát tài chính | Kế toán trưởng (`KTT`) | Theo quyết định phân công | Điền theo danh bạ nội bộ | Điền theo danh bạ nội bộ | Sổ sách kế toán và hóa đơn |
| Thành viên điều phối nhân sự | Phụ trách Nhân sự (`HR`) | Theo quyết định phân công | Điền theo danh bạ nội bộ | Điền theo danh bạ nội bộ | An toàn nhân sự và điều phối |

### 3.2. Danh bạ nhà cung cấp hạ tầng kỹ thuật và đối tác khẩn cấp ngoại bộ

| Lĩnh vực hạ tầng | Tên đơn vị cung cấp | Mã hợp đồng / Mã khách hàng | Đầu mối tiếp nhận sự cố | Người phụ trách tại oBacker | Cam kết thời gian phản hồi (SLA đối tác) |
| --- | --- | --- | --- | --- | --- |
| Đường truyền Internet chính | Đơn vị viễn thông theo hợp đồng | Ghi theo hợp đồng | Tổng đài hỗ trợ kỹ thuật nhà mạng | Quản trị hệ thống | Theo thỏa thuận dịch vụ cam kết |
| Đường truyền Internet dự phòng | Đơn vị viễn thông dự phòng | Ghi theo hợp đồng | Tổng đài hỗ trợ kỹ thuật nhà mạng | Quản trị hệ thống | Theo thỏa thuận dịch vụ cam kết |
| Phần mềm kế toán doanh nghiệp | Đơn vị cung cấp phần mềm kế toán | Ghi theo hợp đồng | Tổng đài hỗ trợ kỹ thuật phần mềm | Kế toán trưởng | Theo thỏa thuận dịch vụ cam kết |
| Hạ tầng điện toán đám mây | Google Cloud / Google Workspace | Mã tài khoản tổ chức | Trung tâm hỗ trợ dịch vụ đám mây | Quản trị hệ thống | Theo gói dịch vụ doanh nghiệp |
| Ban quản lý tòa nhà văn phòng | Đơn vị quản lý tòa nhà trụ sở | Mã hợp đồng thuê mặt bằng | Ban quản lý / Bộ phận kỹ thuật tòa nhà | Quản trị hành chính | Tiếp nhận và xử lý tại chỗ |
| Điện lực sở tại | Điện lực địa bàn trụ sở | Mã khách hàng điện lực | Tổng đài chăm sóc khách hàng điện lực | Quản trị hành chính | Tiếp nhận thông báo sự cố điện |

---

## ĐIỂM KIỂM SOÁT BẮT BUỘC

1. **Điểm kiểm soát KS-BC-01 (Kỷ luật kiểm tra sáng Thứ Hai):** Quản trị hệ thống bắt buộc phải hoàn thành việc kiểm tra các tệp sao lưu dữ liệu và ký xác nhận vào Phần 1 của Phiếu BC-01 trước 11h30 sáng Thứ Hai hằng tuần. Mọi trường hợp bỏ quên kiểm tra quá 02 tuần liên tiếp sẽ bị lập biên bản vi phạm kỷ luật.
2. **Điểm kiểm soát KS-BC-02 (Tính xác thực của đợt diễn tập):** Biên bản diễn tập tại Phần 2 chỉ có giá trị pháp lý nội bộ khi có đầy đủ kết quả đo đạc thực tế của hai chỉ số RTO và RPO, cùng chữ ký xác nhận tính toàn vẹn số liệu của Kế toán trưởng và chữ ký phê duyệt của Tổng Giám đốc (`CEO`).
3. **Điểm kiểm soát KS-BC-03 (Bảo mật thông tin danh bạ):** Danh bạ liên lạc tại Phần 3 chứa dữ liệu cá nhân của nhân sự và thông tin hợp đồng nhà cung cấp, do đó phải được bảo quản ở chế độ nội bộ theo quy định tại [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo|OBK-SOP-NB-09]]; nghiêm cấm chia sẻ danh bạ ra bên ngoài doanh nghiệp.

---

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

- Nhật ký kiểm tra hằng tuần (Phần 1) được Quản trị hệ thống cập nhật trên hệ thống lưu trữ số hóa nội bộ và kết xuất báo cáo gửi `COO` vào ngày cuối cùng của mỗi tháng.
- Biên bản diễn tập phục hồi thảm họa (Phần 2) sau khi hoàn thành phải trình `CEO` phê duyệt trong vòng 03 ngày làm việc kể từ ngày kết thúc diễn tập, sau đó lưu trữ tại Hồ sơ BCP công ty trong thời hạn tối thiểu 05 năm.
- Danh bạ liên lạc khẩn cấp (Phần 3) được rà soát cập nhật định kỳ hằng quý; bản in cứng được lưu tại vị trí trực chỉ đạo BCP và tủ hồ sơ an toàn văn phòng.

---

## KÝ XÁC NHẬN

| Quản trị hệ thống (`IT Admin`) | Kế toán trưởng (`KTT`) | Giám đốc Vận hành (`COO`) | Tổng Giám đốc phê duyệt (`CEO`) |
| --- | --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Trong hoạt động cung ứng dịch vụ kế toán, thuế và pháp lý doanh nghiệp, dữ liệu là tài sản cốt lõi quyết định sự tồn tại của oBacker và bảo đảm quyền lợi hợp pháp của khách hàng. Khi xảy ra sự cố thiên tai, mất điện hoặc gián đoạn kỹ thuật số, nếu doanh nghiệp không có cơ chế kiểm tra bản sao lưu định kỳ thì các bản sao lưu tự động có thể bị lỗi mà không ai phát hiện, dẫn đến nguy cơ mất trắng dữ liệu khi thảm họa xảy ra. Phiếu BC-01 ra đời nhằm chuẩn hóa việc kiểm tra tính khả dụng của bản sao lưu mỗi tuần, thiết lập kỷ luật diễn tập phục hồi số liệu định kỳ và cung cấp danh bạ ứng cứu khẩn cấp nhằm bảo đảm hoạt động kinh doanh luôn được duy trì liên tục trong mọi tình huống.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Căn cứ pháp luật hoặc nội bộ | Nội dung quy định áp dụng |
| --- | --- | --- |
| Quy trình duy trì kinh doanh liên tục | [[OBK-SOP-NB-15_Duy_tri_kinh_doanh_lien_tuc_va_sao_luu_du_lieu\|OBK-SOP-NB-15]] | Quy chế sao lưu dữ liệu theo nguyên tắc 3-2-1 và bốn kịch bản ứng phó sự cố BCP |
| Luật An toàn thông tin mạng | Luật An toàn thông tin mạng số 86/2015/QH13 Điều 27 | Trách nhiệm thiết lập và thực hiện phương án sao lưu dự phòng hệ thống thông tin |
| Luật Kế toán | Luật Kế toán số 88/2015/QH13 Điều 41 | Yêu cầu bảo quản, lưu trữ an toàn tài liệu kế toán trên phương tiện điện tử |
| Nghị định hướng dẫn Luật Kế toán | Nghị định số 174/2016/NĐ-CP Điều 11 và Điều 15 | Quy định về nơi lưu trữ, sao lưu và phục hồi tài liệu kế toán điện tử |
| Quản lý tài sản công ty | [[OBK-SOP-NB-08_Quan_ly_tai_san_va_cong_cu_dung_cu\|OBK-SOP-NB-08]] | Quản lý thiết bị lưu trữ ngoại vi chứa dữ liệu sao lưu của oBacker |
| Bảo vệ dữ liệu cá nhân | [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo\|OBK-SOP-NB-09]] | Bảo vệ an toàn dữ liệu cá nhân trong danh bạ liên lạc và quá trình sao lưu |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
