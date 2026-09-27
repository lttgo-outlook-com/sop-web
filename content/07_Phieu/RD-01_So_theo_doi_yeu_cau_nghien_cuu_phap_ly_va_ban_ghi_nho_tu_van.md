---
title: "SỔ RD-01. THEO DÕI YÊU CẦU NGHIÊN CỨU PHÁP LÝ VÀ BẢN GHI NHỚ TƯ VẤN (TICKET LOG)"
code: "RD-01"
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
  - RD-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# SỔ RD-01. THEO DÕI YÊU CẦU NGHIÊN CỨU PHÁP LÝ VÀ BẢN GHI NHỚ TƯ VẤN (TICKET LOG)

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | RD-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | RD-01 |
| **Màu** | XANH LÁ CÂY, nghiên cứu pháp lý và tư vấn quản trị doanh nghiệp |
| **Ai dùng** | Chuyên viên nghiên cứu pháp lý (`CV-RD`), Trưởng bộ phận Legal R&D (`TL-RD`), Chuyên viên pháp lý (`CV-LS`), Chuyên viên Quản lý khách hàng (`AM`), Giám đốc điều hành (`COO`), Giám đốc điều hành cấp cao (`CEO`) |
| **Sinh từ** | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] mục 2 nhóm B, nhóm C;<br>[[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3;<br>[[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]];<br>[[VB-01_So_theo_doi_vu_viec_tu_van_va_hop_dong\|VB-01]] |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi được áp dụng bắt buộc để quản lý toàn bộ các yêu cầu nghiên cứu pháp lý, giải đáp tình huống chuyên sâu, thẩm định điều khoản lệch hợp đồng và lập bản ghi nhớ tư vấn quản trị tại oBacker, bao gồm:
1. Các yêu cầu nghiên cứu, đánh giá tác động của văn bản quy phạm pháp luật mới phát sinh từ các bộ phận nghiệp vụ (`LIC`, `KT`, `LD`, `LS`) hoặc chỉ đạo từ Ban Giám đốc (`CEO`, `COO`).
2. Các yêu cầu thẩm định điều khoản lệch hợp đồng kinh tế Tier 3 (giới hạn trách nhiệm, bồi thường thiệt hại, luật áp dụng, cơ quan tài phán) do bộ phận thương mại chuyển giao theo Job `AM-24` và `RD-18`.
3. Các yêu cầu soạn thảo Bản ghi nhớ tư vấn quản trị doanh nghiệp (Advisory Memo) giải đáp cho khách hàng về cấu trúc đầu tư, thuế nhà thầu, chính sách lao động đặc thù hoặc bảo vệ dữ liệu cá nhân.

Sổ là công cụ duy nhất để kiểm soát tiến độ xử lý Ticket nghiên cứu, kiểm soát việc tuân thủ ranh giới hành nghề tư vấn doanh nghiệp (không phát hành văn bản dưới danh nghĩa luật sư), bảo đảm 100% căn cứ pháp lý được đối chiếu từ kho văn bản nội bộ `05_PhapLuat/` và kiểm soát chất lượng hai lớp độc lập trước khi phát hành.

## KHUÔN SỔ THEO DÕI YÊU CẦU NGHIÊN CỨU VÀ TƯ VẤN (TICKET LOG)

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã phiếu yêu cầu (`Ticket ID`) | Mã định danh duy nhất: `RD-[Năm]-[Số thứ tự]` (ví dụ: `RD-2026-0027`) |
| 2 | Ngày giờ tiếp nhận | Thời điểm nhận được phiếu yêu cầu từ hệ thống hoặc thư điện tử |
| 3 | Nguồn gốc yêu cầu | Một trong 3 nguồn: `Chỉ đạo từ Ban Giám đốc`, `Nội bộ các bộ phận Delivery`, `Từ khách hàng qua AM` |
| 4 | Mã khách hàng liên quan | Mã khách hàng theo [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] (để trống nếu là nghiên cứu nội bộ) |
| 5 | Tên đối tượng hoặc Dự án | Tên doanh nghiệp khách hàng thụ hưởng hoặc tên chuyên đề nghiên cứu nội bộ |
| 6 | Lĩnh vực pháp lý chính | Một trong các lĩnh vực: `Doanh nghiệp`, `Đầu tư FDI`, `Thuế và Hải quan`, `Lao động`, `Hợp đồng`, `Dữ liệu` |
| 7 | Tóm tắt vấn đề nghiên cứu | Mô tả ngắn gọn nội dung tình huống thực tế và câu hỏi cần giải đáp |
| 8 | Phân loại mức độ phức tạp | Một trong 4 mức: `Mức 1 Đơn giản`, `Mức 2 Trung bình`, `Mức 3 Phức tạp`, `Mức 4 Trọng yếu` |
| 9 | Mốc thời hạn cam kết (SLA) | Mốc hạn chót hoàn thành tính theo bảng cam kết dịch vụ nội bộ |
| 10 | Chuyên viên thụ lý (`CV-RD`) | Họ tên chuyên viên nghiên cứu pháp lý trực tiếp tra cứu và soạn thảo văn bản |
| 11 | Người kiểm soát lớp hai (`TL-RD`) | Trưởng bộ phận Legal R&D trực tiếp kiểm tra lập luận và căn cứ pháp lý |
| 12 | Hình thức sản phẩm đầu ra | `Bản ghi nhớ tư vấn quản trị`, `Báo cáo nghiên cứu pháp lý`, `Phiếu thẩm tra điều khoản Tier 3`, `Bản tin chính sách` |
| 13 | Tuân thủ ranh giới hành nghề | Đánh dấu `Đạt` nếu sản phẩm đúng chuẩn tư vấn quản trị, không dùng từ cấm và không danh xưng luật sư |
| 14 | Số lượng căn cứ pháp luật | Số lượng điều khoản luật, nghị định, thông tư đã đối chiếu thực tế trong kho `05_PhapLuat/` |
| 15 | Văn bản mới phát hiện | Số hiệu văn bản mới chưa có trong kho cần nhập bổ sung (kích hoạt Job `RD-02`) |
| 16 | Kết luận đánh giá rủi ro | Một trong 4 mức: `Rủi ro Thấp`, `Rủi ro Trung bình`, `Rủi ro Cao`, `Rủi ro Nghiêm trọng (không thực hiện)` |
| 17 | Tình trạng kiểm soát hai lớp | `Đạt ngay lần đầu`, `Phải chỉnh sửa bổ sung căn cứ`, `Yêu cầu làm lại` |
| 18 | Thẩm quyền phê duyệt | `TL-RD` (văn bản nội bộ) hoặc `CEO` (Bản ghi nhớ gửi khách hàng hoặc rà soát lệch Tier 3) |
| 19 | Ngày hoàn thành thực tế | Ngày giờ hoàn tất việc phê duyệt và phát hành chính thức |
| 20 | Đánh giá đúng hạn | Ghi nhận: `Đúng hạn tuyệt đối`, `Trễ hạn do mở rộng phạm vi`, `Trễ hạn do lỗi nội bộ` |
| 21 | Trạng thái Ticket | Một trong 5 trạng thái: `Đang nghiên cứu`, `Chờ duyệt lớp hai`, `Chờ CEO duyệt`, `Đã bàn giao`, `Đã lưu trữ` |
| 22 | Đường dẫn tài liệu lưu trữ | Đường dẫn tới tệp văn bản hoàn chỉnh trong kho hồ sơ điện tử |
| 23 | Bài học kinh nghiệm | Nội dung nghiệp vụ cập nhật vào sổ tay hướng dẫn hoặc sổ căn cứ pháp lý |

## NGUYÊN TẮC TƯ VẤN DOANH NGHIỆP VÀ BỐN MỨC PHỨC TẠP

### 1. Ranh giới hành nghề tư vấn quản trị doanh nghiệp

oBacker là công ty tư vấn quản lý doanh nghiệp và cung ứng dịch vụ hỗ trợ doanh nghiệp hoạt động theo Luật Doanh nghiệp (mã ngành 7020, 8210, 8299), không phải là tổ chức hành nghề luật sư theo Luật Luật sư. Toàn bộ nhân sự tuân thủ nghiêm ngặt các nguyên tắc sau:
- **Tuyệt đối cấm sử dụng thuật ngữ hành nghề luật sư:** Không sử dụng các từ "Ý kiến pháp lý" (`Legal Opinion`), "Thư tư vấn của luật sư", "Luật sư của chúng tôi" trong mọi sản phẩm giao cho khách hàng hoặc lưu hành nội bộ.
- **Sản phẩm chuẩn hóa:**
  * Khách hàng bên ngoài: Đầu ra là "Bản ghi nhớ tư vấn quản trị" (Advisory Memo) hoặc "Văn bản phân tích rủi ro tuân thủ doanh nghiệp".
  * Nội bộ công ty: Đầu ra là "Báo cáo nghiên cứu pháp lý" (Legal Research Report) hoặc "Bản đánh giá tác động chính sách".
- **Không tham gia tố tụng:** oBacker không nhận đại diện tố tụng tại Tòa án hoặc Trọng tài thương mại. Mọi vụ việc có yếu tố tranh chấp tố tụng được chuyển tiếp sang các tổ chức hành nghề luật sư đối tác theo Job `LS-18`.
- **Căn cứ từ kho pháp luật nội bộ:** 100% điều khoản viện dẫn phải được tra cứu từ các bản văn quy phạm pháp luật đã được xác minh trong kho `05_PhapLuat/`. Không sử dụng các trích dẫn không rõ nguồn gốc từ mạng internet.

### 2. Bốn mức độ phức tạp và cam kết thời gian hoàn thành (SLA)

| Mức độ phức tạp | Đặc điểm nội dung nghiên cứu | Thời hạn cam kết SLA | Thẩm quyền phê duyệt |
| --- | --- | --- | --- |
| **Mức 1 Đơn giản** | Tra cứu điều kiện thủ tục hành chính, tra cứu hiệu lực văn bản, xác định mức thuế suất thông thường | Trong thời hạn tối đa 08 giờ làm việc | Trưởng bộ phận Legal R&D (`TL-RD`) |
| **Mức 2 Trung bình** | Đối chiếu từ 02 đến 04 văn bản pháp luật, phân tích nghĩa vụ thuế nhà thầu, điều kiện đầu tư FDI thông thường | Trong thời hạn tối đa 02 ngày làm việc | Trưởng bộ phận Legal R&D (`TL-RD`) |
| **Mức 3 Phức tạp** | Xung đột giữa luật chung và luật chuyên ngành, cấu trúc giao dịch có vốn nước ngoài, thẩm định điều khoản lệch Tier 3 theo `AM-24` | Từ 03 ngày làm việc đến 05 ngày làm việc | `CEO` phê duyệt sau khi `TL-RD` kiểm soát lớp hai |
| **Mức 4 Trọng yếu** | Tái cấu trúc mô hình hoạt động toàn công ty, tình huống pháp lý chưa có văn bản hướng dẫn rõ ràng, nguy cơ tranh chấp lớn | Theo kế hoạch do `CEO` phê duyệt | `CEO` trực tiếp chỉ đạo và phê duyệt |

### 3. Quy trình thẩm định điều khoản lệch hợp đồng Tier 3 (AM-24 & RD-18)

Khi khách hàng yêu cầu sửa đổi các điều khoản pháp lý cốt lõi trong Hợp đồng dịch vụ mẫu (giới hạn trách nhiệm bồi thường, điều khoản phạt vi phạm, cơ quan giải quyết tranh chấp, luật áp dụng, thỏa thuận bảo mật):
1. `AM` lập Phiếu đề nghị điều chỉnh điều khoản hợp đồng gửi Legal R&D trên hệ thống.
2. `CV-RD` thẩm tra mức độ rủi ro, đối chiếu với các quy chế nội bộ ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]], [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]]) và soạn thảo Phiếu thẩm tra rủi ro trong thời hạn 01 ngày làm việc.
3. `TL-RD` kiểm soát lớp hai và chuyển trình `CEO`.
4. `CEO` phê duyệt chấp thuận, chấp thuận có điều kiện hoặc từ chối sửa đổi trong thời hạn tối đa 02 ngày làm việc kể từ thời điểm tiếp nhận.

## QUY TRÌNH 5 BƯỚC XỬ LÝ YÊU CẦU NGHIÊN CỨU VÀ TƯ VẤN

```
[1. Tiếp nhận Ticket] -> [2. Tra cứu kho 05_PhapLuat] -> [3. Lập dự thảo báo cáo] -> [4. Kiểm soát lớp hai] -> [5. Phê duyệt & Bàn giao]
```

1. **Tiếp nhận Ticket và phân loại mức độ:** `TL-RD` tiếp nhận yêu cầu, phân loại mức độ phức tạp (Mức 1 đến Mức 4) và phân công chuyên viên thụ lý (`CV-RD`) trong thời hạn tối đa 02 giờ làm việc.
2. **Tra cứu và đối chiếu văn bản quy phạm pháp luật:** `CV-RD` tra cứu toàn văn các văn bản có hiệu lực trong kho `05_PhapLuat/`. Trường hợp phát hiện văn bản mới chưa có trong kho, thực hiện quy trình nạp văn bản bổ sung theo hướng dẫn nội bộ.
3. **Soạn thảo sản phẩm tư vấn:** `CV-RD` xây dựng cấu trúc văn bản theo biểu mẫu chuẩn: Tóm tắt sự việc -> Cơ sở pháp lý -> Phân tích rủi ro và các phương án xử lý -> Khuyến nghị giải pháp quản trị tốt nhất.
4. **Kiểm soát chất lượng lớp hai:** `TL-RD` rà soát từng điều khoản trích dẫn, kiểm tra lập luận logic và kiểm tra việc tuân thủ tuyệt đối chuẩn mực văn phong tư vấn quản trị (không mang danh nghĩa luật sư).
5. **Phê duyệt, bàn giao và lưu trữ:** Trình `CEO` phê duyệt (đối với văn bản gửi khách hàng) hoặc `TL-RD` phê duyệt (văn bản nội bộ); bàn giao kết quả cho người yêu cầu; lưu trữ tệp văn bản vào kho hồ sơ điện tử và ghi nhận bài học kinh nghiệm.

## KÝ XÁC NHẬN

| Chuyên viên nghiên cứu (`CV-RD`) | Trưởng bộ phận Legal R&D (`TL-RD`) | Giám đốc điều hành cấp cao (`CEO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm mọi tư vấn pháp lý và quản trị của oBacker được thực hiện trên cơ sở các văn bản quy phạm pháp luật chính thức có hiệu lực; duy trì nghiêm ngặt ranh giới hành nghề tư vấn doanh nghiệp, không xâm phạm phạm vi hành nghề luật sư; kiểm soát tiến độ cam kết dịch vụ (SLA) đối với các yêu cầu nghiên cứu phức tạp; tạo kho tri thức và cơ sở dữ liệu giải pháp tình huống thực tế để phục vụ công tác đào tạo và nâng cao năng lực chuyên môn của toàn công ty.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quy trình nghiên cứu pháp lý | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] | Các nhóm Job nghiên cứu, đánh giá tác động và thẩm định điều khoản lệch |
| Cập nhật văn bản pháp luật | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3 | Quy trình 11 bước cập nhật và đánh giá tác động của văn bản mới |
| Dịch vụ pháp lý doanh nghiệp | [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] | Tiêu chuẩn chất lượng rà soát và soạn thảo hợp đồng kinh tế |
| Quản lý vụ việc tư vấn | [[VB-01_So_theo_doi_vu_viec_tu_van_va_hop_dong\|VB-01]] | Theo dõi tiến độ các vụ việc soạn thảo và rà soát văn bản |

### 3. Căn cứ pháp lý

| Văn bản | Điều khoản | Nội dung áp dụng |
| --- | --- | --- |
| Luật Doanh nghiệp số 59/2020/QH14 (sửa đổi bởi Luật số 76/2025/QH15) | Điều 7, Điều 16 | Quyền tự do kinh doanh dịch vụ tư vấn quản trị và các hành vi bị nghiêm cấm |
| Luật Luật sư số 65/2006/QH11 (sửa đổi, bổ sung bởi Luật số 20/2012/QH13) | Điều 4, Điều 9 | Phạm vi hành nghề luật sư và các hành vi cấm đối với tổ chức không phải tổ chức hành nghề luật sư |
| Luật Ban hành văn bản quy phạm pháp luật số 80/2015/QH13 (sửa đổi bởi Luật số 63/2020/QH14) | Điều 156 | Nguyên tắc áp dụng văn bản quy phạm pháp luật và thứ bậc hiệu lực pháp lý |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
