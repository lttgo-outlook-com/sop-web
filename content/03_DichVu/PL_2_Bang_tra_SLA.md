---
title: "PHỤ LỤC 2. BẢNG TRA SLA"
code: "OBK-SOP-PL2"
type: "sop"
folder: "03_DichVu"
level: "Phụ lục"
version: "R.1.1.1"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "COO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-00 Chuẩn vận hành dịch vụ"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-SOP-PL2
tags:
  - loai/sop
  - cap/phu-luc
---
# PHỤ LỤC 2. BẢNG TRA SLA

## Bản tra cứu gộp toàn bộ Job của bảy bộ phận

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-PL2 |
| Cấp tài liệu | Phụ lục |
| Phiên bản | R.1.1.1, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | `COO` |
| Người soát | đã soát |
| Người phê duyệt | đã phê duyệt |
| Văn bản cấp trên | `OBK-SOP-00` Chuẩn vận hành dịch vụ |
| Tổng số Job | 223 |
| Cách sinh | Trang này được sinh lại từ bảng Job của các SOP cấp 2 |

> **ĐÂY KHÔNG PHẢI BẢN GỐC.** Tệp này được SINH TỰ ĐỘNG từ bảng Job của các SOP cấp 2.
> Con số SLA sửa ở SOP cấp 2 tương ứng, rồi sinh lại trang này.
> CẤM sửa trực tiếp vào tệp này, vì lần sinh sau sẽ ghi đè.

Quy ước đếm thời gian, ba đồng hồ T1 T2 T3, và ba mốc làm trước thời hạn theo pháp luật:
xem `OBK-SOP-00` mục 7.

---

## 1. TRA THEO BỘ PHẬN

### 1.1. Quản lý khách hàng (OBK-SOP-AM), 30 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| AM-01 | Tiếp nhận và đánh giá lead | Xác nhận đã nhận theo T1;<br>đánh giá phù hợp trong 3 gLV;<br>hẹn lịch làm rõ trong 24 g | Không có | T2 | Không |
| AM-02 | Họp làm rõ nhu cầu | Họp 15 tới 30 phút;<br>ghi biên bản trong 15 phút sau họp;<br>email tóm tắt trong 30 phút sau họp;<br>quyết định trong ngày | Không có | T2 | Không |
| AM-03 | Lập và gửi đề xuất dịch vụ | TL bộ phận cấp đầu vào trong 3 gLV;<br>soạn đề xuất trong 24 g, ca phức tạp tối đa 48 g;<br>gửi khách không quá 48 g sau họp làm rõ | Không có | T2 | Không |
| AM-04 | Theo đuổi đề xuất | Theo đuổi tại T+1, T+3, T+5 (lần cuối).<br>Đề xuất đã hết thời hạn hiệu lực mà khách yêu cầu báo giá lại: báo giá mới theo biểu giá hiện hành, giảm 35%, theo mục 10.4 Bản Điều Khoản Dịch Vụ Kế toán & Thuế | Không có | T2 | Không |
| AM-05 | Chốt hợp đồng và thu tiền lần đầu | Gửi hợp đồng trong ngày khách đồng ý;<br>nhắc thanh toán tại T+1, T+3, T+7 | Không có | T2 | Không |
| AM-06 | Mở hồ sơ khách và bàn giao nội bộ cho bộ phận nghiệp vụ | Trong 1 NLV kể từ xác nhận thanh toán | Không có | T2 | Không |
| AM-07 | Gửi thư chào mừng và thiết lập kênh | Trong 24 g kể từ xác nhận thanh toán | Không có | T2 | Không |
| AM-08 | Thu thập hồ sơ đầu vào | Gửi danh mục trong 1 NLV;<br>nhắc tại T+1 và T+3;<br>chuyển lên cấp trên TP Thương mại tại T+5, theo thang dọc nhánh thương mại tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 8.2;<br>bộ phận nghiệp vụ xác nhận tính hợp lệ trong 2 gLV kể từ khi nhận | Không có | T2 | Không |
| AM-09 | Hoàn tất onboarding | 07 NGÀY LÀM VIỆC, tối đa 10 ngày làm việc nếu chờ hồ sơ từ khách.<br>AM-09 chỉ đóng GIAI ĐOẠN 1 của onboarding; giai đoạn nghiệm thu 30 ngày làm việc thuộc KT-01, xem [[03_Onboarding_khach_hang\|OBK-SOP-03]] và `PL_G` mục 4 | Không có | T3 | Không |
| AM-10 | Tiếp nhận và phân loại yêu cầu | Xác nhận đã nhận theo T1;<br>cam kết mốc theo T2;<br>chuyển bộ phận ngay sau khi phân loại | Không có | T1 | Không |
| AM-11 | Gửi đầu ra cho khách | Nhận từ bộ phận trước hạn gửi khách ≥ 0,5 NLV;<br>gửi khách đúng SLA của Job gốc | Theo Job gốc | T1 | Không |
| AM-12 | Xác nhận khách đã nhận | Nhắc 1 lần sau 2 NLV;<br>sau đó coi như đã nhận | Không có | T1 | Không |
| AM-13 | Cập nhật định kỳ cho khách | Dự án đang chạy: mỗi thứ Sáu. Khách thường xuyên: tuần đầu mỗi tháng | Không có | T1 | Không |
| AM-14 | Xử lý sự cố mức P1 | AM gọi điện dưới 30 phút;<br>kế hoạch dưới 2 g;<br>cập nhật 2 lần mỗi ngày;<br>xong trong 1 NLV, tối đa 2 | Theo bản chất sự cố | T3 | Không |
| AM-15 | Cảnh báo trước rủi ro trễ hạn | Trong 4 gLV kể từ khi bộ phận báo, và luôn trước thời hạn theo pháp luật | Trước thời hạn theo pháp luật | T3 | Không |
| AM-16 | Khảo sát mức độ hài lòng | Mốc 1 tháng, 3 tháng, 6 tháng sau onboarding;<br>sau đó hằng năm | Không có | T1 | Không |
| AM-17 | Đánh giá sức khỏe tài khoản | Mỗi 3 tháng | Không có | T1 | Không |
| AM-18 | Gia hạn hợp đồng + phát hành phụ lục nâng/đổi gói | Rà soát và liên hệ khách trước 60 NGÀY so với ngày hết hạn, khớp bản gốc tại [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] và `PL_G`;<br>đề xuất trong 3 NLV sau khi trao đổi;<br>theo đuổi mỗi 3 ngày;<br>ký xong trước ngày hết hạn;<br>phát hành phụ lục nâng/đổi gói trong 03 ngày làm việc kể từ khi chốt với khách | Ngày hết hạn hợp đồng | T2 | Không |
| AM-19 | Kết thúc dịch vụ và bàn giao dữ liệu | Xác nhận và thông báo lộ trình trong 2 NLV;<br>bộ phận nghiệp vụ chuẩn bị bộ bàn giao trong 5 NLV;<br>gửi khách không muộn hơn ngày kết thúc hợp đồng | Ngày kết thúc hợp đồng | T3 | Không |
| AM-20 | Thu hồi quyền truy cập và lưu trữ hồ sơ | Ba mốc khác nhau. Thu hồi quyền truy cập của oBacker: TRONG 24 GIỜ sau bàn giao, mốc đặt tại KT-29 và `PL_G` S35, AM chỉ theo dõi chứ không tự thu hồi.<br>Khoảng tải dữ liệu của khách: 30 ngày kể từ ngày kết thúc, theo Điều 9 (Chấm dứt và bàn giao) của TnC; trong 30 ngày này oBacker không xóa dữ liệu.<br>Chuyển hồ sơ sang trạng thái lưu trữ hoặc xóa: chỉ sau khi hết 30 ngày tải của khách, là mốc riêng của AM-20 | Không có | T3 | Không |
| AM-21 | Ghi nhận lý do rời bỏ và bài học | 1 tuần sau ngày kết thúc | Không có | T2 | Không |
| AM-22 | Sàng lọc rủi ro khách trước khi nhận | Trong 1 NLV kể từ AM-01. Có bất kỳ dấu hiệu nào ở mục 8.1 thì chuyển CEO trong cùng ngày làm việc và không hẹn họp làm rõ trước khi CEO quyết | Không có | T3 | Không |
| AM-23 | Xin duyệt giá hoặc phạm vi ngoài khung | AM lập tờ trình trong 4 gLV; TP Thương mại quyết trong 1 NLV nếu trong khung; CEO quyết trong 2 NLV nếu ngoài khung.<br>AM KHÔNG báo mức cho khách trước khi có quyết định trên Job | Không có | T2 | Không |
| AM-24 | Chốt hợp đồng dịch vụ và xử lý yêu cầu sửa điều khoản | AM dùng MẪU, không tự sửa điều khoản.<br>Khách đòi sửa thì AM mở Job phụ cho Legal R&D theo RD-18 và chờ kết luận; RD-18 trả kết luận trong 05 NLV.<br>Điều khoản về giá và phạm vi thì theo AM-23 | Không có | T3 | Không |
| AM-25 | Điều phối vụ việc đi qua nhiều bộ phận | AM xác định Job chính trong 4 gLV.<br>Không rõ bộ phận nào sở hữu đầu ra cuối thì chuyển lên COO, và COO chỉ định trước khi việc bắt đầu.<br>AM chỉ nhận bàn giao từ Job chính, không tự ghép kết quả từ các Job phụ | Không có | T2 | Không |
| AM-26 | Theo dõi và xử lý bộ phận trễ SLA nội bộ | Nhắc 1 lần ngay khi quá hạn;<br>vẫn trễ thì chuyển lên TL của bộ phận đó trong cùng ngày làm việc;<br>trễ lần thứ hai với cùng một bộ phận trong một tháng thì báo COO | Không có | T1 | Không |
| AM-27 | Rà soát định kỳ với khách | Mỗi 3 tháng, trong 10 NLV đầu của quý sau. Khách nhóm rủi ro cao theo AM-17 thì rà mỗi tháng | Không có | T1 | Không |
| AM-28 | Phát hiện sớm và xử lý dấu hiệu khách rời bỏ | Lập kế hoạch trong 3 NLV kể từ khi phát hiện dấu hiệu. Nhóm rủi ro cao thì báo TP Thương mại cùng ngày | Không có | T2 | Không |
| AM-29 | Bán thêm và bán chéo dịch vụ | Đề xuất trong 5 NLV kể từ khi phát hiện nhu cầu. Cam kết mốc theo KS-AM-01, không cam kết trước khi TL bộ phận xác nhận | Không có | T2 | Không |
| AM-30 | Rà soát khớp phạm vi hợp đồng với việc đang chạy | Mỗi 3 tháng, cùng kỳ với AM-27.<br>Phát hiện việc ngoài phạm vi thì dừng nhận thêm việc loại đó và chuyển AM-23 trong 2 NLV | Không có | T1 | Không |

### 1.2. Kế toán (OBK-SOP-KT), 30 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| KT-01 | Tiếp nhận khách hàng mới | Bảy ngày làm việc đầu và ba mươi ngày làm việc đầu theo `PL_G` mục 4 | Không có | T3 | Không |
| KT-02 | Thu thập và số hóa chứng từ kỳ | Theo kỳ tháng `PL_G` mục 6.1 | Không có | T1 | Không |
| KT-03 | Hạch toán nghiệp vụ kỳ | Theo kỳ tháng | Không có | T1 | Không |
| KT-04 | Khóa sổ và đối chiếu kỳ | Ngày 18 hằng tháng | Không có | T1 | Không |
| KT-05 | Bàn giao số liệu kỳ cho khách | Ngày 18 hằng tháng | Không có | T1 | Không |
| KT-06 | Bộ báo cáo quản trị tháng, gói G3 | Ngày 18 hằng tháng | Không có | T1 | Không |
| KT-07 | Khai thuế GTGT kỳ | Nháp tờ khai ngày 13; ký gửi ngày 19-20, sau khi KT-04 khóa sổ ngày 18 (khớp mốc "đóng sổ 16-25" của TnC) | Theo `PL_C` phần B | T1 | Không |
| KT-08 | Tạm nộp thuế TNDN quý | Nộp tiền ngày 20 của tháng đầu quý sau | Theo `PL_C` phần B | T1 | Không |
| KT-09 | Khai thuế TNCN khấu trừ theo quý | Ký gửi ngày 23 của tháng đầu quý sau | Theo `PL_C` phần B | T1 | Có |
| KT-10 | Thông báo số thuế phải nộp cho khách | Chậm nhất 01 ngày làm việc trước mốc nội bộ nộp tiền | Không có | T1 | Không |
| KT-11 | Quản lý hóa đơn điện tử | Theo kỳ tháng;<br>hóa đơn sai sót xử lý trong 01 ngày làm việc kể từ khi phát hiện | Theo `PL_C` phần B | T1 | Không |
| KT-12 | Bảng đối chiếu công nợ gửi khách xác nhận | Trong 05 ngày làm việc đầu tháng đầu quý sau | Không có | T1 | Không |
| KT-13 | Báo cáo soát xét trước quyết toán, gói G3 | 31/07 | Không có | T3 | Không |
| KT-14 | Xin xác nhận số liệu quyết toán từ khách | 24/03 | Không có | T3 | Không |
| KT-15 | Lập và nộp báo cáo tài chính năm | Nộp 25/03 | **90 ngày kể từ ngày kết thúc kỳ kế toán năm** | T3 | Không |
| KT-16 | Quyết toán thuế TNDN năm | Nộp 25/03 | Theo `PL_C` phần C | T3 | Không |
| KT-17 | Quyết toán thuế TNCN năm | Nộp 25/03 | Theo `PL_C` phần C | T3 | Có |
| KT-18 | Bàn giao bộ hồ sơ báo cáo tài chính cho khách | Trong 05 ngày làm việc sau khi nộp | Không có | T2 | Không |
| KT-19 | Xử lý sai sót và khai bổ sung | TL-KT xác định phạm vi và đề xuất phương án trong 02 ngày;<br>quyết có khai bổ sung hay không trong 02 ngày tiếp theo | Theo bản chất sai sót | T3 | Không |
| KT-20 | Giải trình văn bản của cơ quan thuế | TL-KT đọc và kết luận yêu cầu trong 01 ngày làm việc;<br>soạn và ký văn bản trong 03 ngày làm việc | **Theo thời hạn ghi trên chính văn bản của cơ quan** | T3 | Không |
| KT-21 | Hỗ trợ kỳ kiểm tra hoặc thanh tra thuế | Phản hồi NGAY trong ngày làm việc;<br>COO lập phương án tiếp đoàn trong 02 ngày làm việc;<br>khi đoàn yêu cầu hồ sơ tại trụ sở thì cung cấp trong 05 GIỜ LÀM VIỆC, mốc nội bộ đặt tại `PL_C` mục B dòng 11 | Theo quyết định về thời hạn kiểm tra.<br>Riêng việc cung cấp hồ sơ, tài liệu, hóa đơn, chứng từ, sổ kế toán khi đoàn yêu cầu tại trụ sở: **06 GIỜ LÀM VIỆC** kể từ khi nhận yêu cầu, chậm hơn là hành vi bị xử phạt | T3 | Không |
| KT-22 | Trả lời câu hỏi nghiệp vụ đã đối chiếu bản gốc | T3 là 01 ngày làm việc | Không có | T1 | Không |
| KT-23 | Trả lời câu hỏi nghiệp vụ chưa đối chiếu bản gốc | T3 là 03 ngày làm việc để TL-KT đối chiếu bản gốc.<br>NHÁNH KÉO DÀI, ba điều kiện đủ theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4a: điều kiện vào nhánh là TL-KT đã tra mà không kết luận được; mốc của nhánh là mốc của Job RD-10; và AM PHẢI cam kết lại T2 với khách trong 04 giờ làm việc kể từ khi mở Job RD-10 | Không có | T2 | Không |
| KT-24 | Xử lý câu hỏi chạm nội dung chưa xác minh được | AM gửi thư hẹn mốc trong 04 giờ làm việc, đúng hạn T2 cho nội dung chưa xác minh được tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.2.4;<br>TL-KT DỪNG và mở Job RD-12 trong cùng ngày làm việc, đồng thời thông tin COO | Không có | T3 | Không |
| KT-25 | Đánh giá tác động khi có văn bản pháp luật mới | Mốc theo BỐN MỨC ƯU TIÊN, bản gốc tại [[21_Cap_nhat_van_ban_phap_luat\|OBK-SOP-21]] mục 6.2.3: Legal R&D hoàn thành đánh giá tác động theo mốc của mức ưu tiên đã phân, `TL-KT` rà danh sách khách bị ảnh hưởng trong cùng mốc đó.<br>Job này không đặt lại con số, chỉ dẫn chiếu | Theo ngày hiệu lực của văn bản | T3 | Không |
| KT-26 | Rà soát đầu năm cho cả danh mục khách | Theo `PL_C` phần D | Không có | T2 | Không |
| KT-27 | Chốt các khoản có mức khống chế trước 31/12 | Trước 31/12 | Không có | T2 | Không |
| KT-28 | Bàn giao khi kết thúc dịch vụ | Chuẩn bị trong 05 ngày làm việc kể từ khi AM báo.<br>Đây là mốc ĐẾM TIẾN từ ngày AM báo, đo thời gian phản ứng của bộ phận.<br>Handbook Chương 20 mục 6.3 có thêm một mốc ĐẾM LÙI, bộ hồ sơ bàn giao phải sẵn sàng chậm nhất 10 ngày làm việc trước ngày kết thúc, đo mức sẵn sàng trước ngày khách rời.<br>Hai mốc có hai điểm neo khác nhau và không thay nhau; khi AM báo muộn thì hai mốc chồng nhau, áp mốc NÀO ĐẾN TRƯỚC và ghi lý do trên Job | Không có | T3 | Không |
| KT-29 | Thu hồi quyền truy cập | Sau bàn giao khách: 24 giờ.<br>Nhân sự nghỉ việc: chậm nhất trong ngày làm việc cuối; 04 giờ nếu nghỉ đột ngột hoặc chấm dứt do vi phạm | Không có | T3 | Không |
| KT-30 | Nộp tiền thuê đất và thuế sử dụng đất | Nộp trong thời hạn ghi trên thông báo của cơ quan thuế | Lần đầu: 30 ngày kể từ ngày ban hành thông báo của cơ quan thuế;<br>các năm tiếp theo: hạn nộp hằng năm theo lựa chọn nộp một lần hoặc hai lần trong năm | T2 | Không |

### 1.3. Licensing (OBK-SOP-LIC), 31 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| LIC-01 | Đánh giá điều kiện và tính khả thi | 02 ngày làm việc với nghiệp vụ quen.<br>Nghiệp vụ lạ: 05 ngày làm việc, trong đó Job RD-09 chiếm 03 ngày làm việc và Licensing chiếm 02 ngày làm việc soạn bản đánh giá.<br>Văn bản chưa có trong kho thì RD-09 không cam kết mốc, và Job này chuyển sang nhánh chưa cam kết được mốc, AM trả lời khách bằng một mốc hẹn theo T2 | Không có | T2 | Không |
| LIC-02 | Thành lập doanh nghiệp trong nước | Soạn hồ sơ 02 ngày làm việc kể từ khi đủ thông tin;<br>nộp trong 01 ngày làm việc sau khi khách ký | Cơ quan cấp trong **03 ngày làm việc** | T2 | Không |
| LIC-03 | Thành lập doanh nghiệp có vốn nước ngoài | Soạn hồ sơ 05 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa | Cơ quan cấp trong **03 ngày làm việc** | T3 | Không |
| LIC-04 | Đăng ký thay đổi nội dung GCN ĐKDN | Soạn hồ sơ 02 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi khách ký, và luôn trong hạn 10 ngày của khách | Khách phải đăng ký trong **10 ngày** kể từ ngày có thay đổi;<br>cơ quan cấp trong **03 ngày làm việc** | T2 | Không |
| LIC-05 | Thông báo thay đổi nội dung ĐKDN | Như LIC-04 | Khách phải thông báo trong **10 ngày**;<br>cơ quan xử lý trong **03 ngày làm việc** | T2 | Không |
| LIC-06 | Thay đổi người đại diện theo pháp luật | Soạn hồ sơ 02 ngày làm việc | Trong **10 ngày**;<br>cơ quan cấp trong **03 ngày làm việc** | T2 | Không |
| LIC-07 | Thay đổi vốn điều lệ | Soạn hồ sơ 02 ngày làm việc | Trong **10 ngày**;<br>cơ quan cấp trong **03 ngày làm việc** | T2 | Không |
| LIC-08 | Theo dõi hạn góp vốn điều lệ | Nhắc khách tại ngày thứ 60 và ngày thứ 80 kể từ ngày cấp GCN | Góp đủ trong **90 ngày**;<br>nếu thiếu thì đăng ký thay đổi vốn trong **30 ngày** kể từ ngày cuối cùng phải góp | T1 | Không |
| LIC-09 | Tạm ngừng kinh doanh | Gửi khách bản để ký trước ngày tạm ngừng ít nhất 08 NGÀY LÀM VIỆC; NỘP trước ngày tạm ngừng ít nhất 06 NGÀY LÀM VIỆC.<br>Hai mốc này là mốc pháp định 03 ngày làm việc cộng hai mốc làm trước của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6, tức 05 ngày làm việc cho đầu ra cần khách ký và 03 ngày làm việc cho hồ sơ nộp cơ quan nhà nước.<br>Mốc cũ 05 ngày làm việc chỉ còn khoảng làm trước thật 02 ngày làm việc, dưới chuẩn NT-6 | Khách phải thông báo chậm nhất **03 ngày làm việc trước ngày tạm ngừng**;<br>mỗi lần không quá **12 tháng**;<br>tổng liên tiếp không quá **24 tháng**;<br>cơ quan cấp trong **01 ngày làm việc** | T2 | Không |
| LIC-10 | Xác nhận kinh doanh trở lại sau tạm ngừng | Nhắc khách 10 ngày trước ngày kết thúc tạm ngừng;<br>nộp trong 02 ngày làm việc kể từ ngày kết thúc | **05 ngày làm việc** kể từ ngày kết thúc thời hạn tạm ngừng.<br>Không xác nhận thì có thể bị THU HỒI GCN ĐKDN và buộc giải thể | T2 | Không |
| LIC-11 | Giải thể doanh nghiệp | Gửi nghị quyết trong 03 ngày làm việc kể từ khi khách thông qua;<br>chấm dứt hoạt động chi nhánh, VPĐD, địa điểm kinh doanh trước khi nộp hồ sơ giải thể | Gửi nghị quyết trong **07 ngày làm việc** kể từ ngày thông qua;<br>gửi hồ sơ giải thể trong **05 ngày làm việc** kể từ ngày thanh toán hết nợ;<br>mốc **180 ngày** | T3 | Không |
| LIC-12 | Đăng ký chi nhánh, VPĐD, địa điểm kinh doanh | Soạn và nộp trong 03 ngày làm việc kể từ khi có quyết định | Gửi hồ sơ trong **10 ngày** kể từ ngày quyết định;<br>cơ quan cấp trong **03 ngày làm việc** | T2 | Không |
| LIC-13 | Chấp thuận chủ trương đầu tư | Soạn hồ sơ 10 ngày làm việc kể từ khi đủ tài liệu | Tùy cấp thẩm quyền. Chủ tịch UBND cấp tỉnh: báo cáo thẩm định trong **14 ngày làm việc**, quyết định trong **03 ngày làm việc**.<br>Ban quản lý KCN: **17 ngày làm việc**.<br>Thủ tướng: thẩm định **20 ngày làm việc**, quyết định **05 ngày làm việc** | T3 | Không |
| LIC-14 | Cấp GCN đăng ký đầu tư | Soạn hồ sơ 05 ngày làm việc kể từ khi đủ tài liệu | Thuộc diện chấp thuận chủ trương: **05 ngày làm việc** kể từ ngày có Quyết định.<br>Không thuộc diện: **10 ngày làm việc** kể từ ngày nhận hồ sơ hợp lệ | T3 | Không |
| LIC-15 | Theo dõi mốc 12 tháng của tổ chức kinh tế do NĐTNN lập trước GCNĐKĐT | Nhắc khách tại tháng thứ 6, tháng thứ 9 và tháng thứ 11 | **12 tháng** kể từ ngày thành lập phải hoàn thành thủ tục cấp GCNĐKĐT.<br>Trước khi có GCNĐKĐT thì CẤM bổ sung ngành nghề khác và CẤM thực hiện dự án | T1 | Không |
| LIC-16 | Đăng ký góp vốn, mua cổ phần của nhà đầu tư nước ngoài | Soạn hồ sơ 03 ngày làm việc;<br>phải nộp trước khi khách thay đổi thành viên, cổ đông | Cơ quan xử lý trong **10 ngày làm việc**.<br>Có đất tại khu vực ảnh hưởng quốc phòng an ninh thì vẫn **10 ngày làm việc** nhưng có bước lấy ý kiến | T3 | Không |
| LIC-17 | Tra điều kiện tiếp cận thị trường | 01 ngày làm việc | Không có | T1 | Không |
| LIC-18 | Cấp giấy phép lao động cho người nước ngoài | Soạn hồ sơ 03 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa và dịch công chứng;<br>nộp sao cho đạt hạn dưới | Nộp **trong 60 ngày nhưng không ít hơn 10 ngày** tính đến ngày dự kiến làm việc;<br>cơ quan cấp trong **10 ngày làm việc** | T3 | Không |
| LIC-19 | Gia hạn giấy phép lao động | Tạo Job tự động 60 ngày trước ngày hết hạn;<br>soạn hồ sơ 03 ngày làm việc | Nộp **trước ít nhất 10 ngày nhưng không quá 45 ngày** trước khi hết hạn `[CC-LIC-09]`;<br>cơ quan giải quyết trong **10 ngày làm việc**;<br>chỉ được gia hạn **01 lần**, tối đa **02 năm** | T2 | Không |
| LIC-20 | Cấp lại giấy phép lao động | Soạn hồ sơ 02 ngày làm việc | Cơ quan giải quyết trong **03 ngày làm việc**;<br>thời hạn giấy cấp lại bằng thời hạn giấy đã cấp trừ thời gian đã làm việc | T2 | Không |
| LIC-21 | Giấy xác nhận không thuộc diện cấp giấy phép lao động | Soạn hồ sơ 02 ngày làm việc | Nộp **trong 60 ngày và không ít hơn 10 ngày** trước ngày dự kiến làm việc; cơ quan cấp trong **05 ngày làm việc**.<br>Trường hợp chỉ phải thông báo: **trước ít nhất 03 ngày làm việc** | T2 | Không |
| LIC-22 | Điều phối đối tác thuê ngoài | Soát xét sản phẩm của đối tác trong 02 ngày làm việc kể từ khi nhận;<br>đối tác không được liên hệ trực tiếp khách | Theo nghiệp vụ | T2 | Không |
| LIC-23 | Bàn giao kết quả và hướng dẫn sau cấp phép | Bàn giao AM trong 01 ngày làm việc kể từ khi nhận kết quả | Không có | T1 | Không |
| LIC-24 | Đăng ký hạn gia hạn vào lịch theo dõi | Ngay tại B5 của Job gốc, trước khi đóng Job | Không có | T1 | Không |
| LIC-25 | Cấp Giấy phép kinh doanh bán lẻ hàng hóa cho DN FDI | Soạn hồ sơ 05 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi ký | Thẩm định và lấy ý kiến từ 21 ngày làm việc đến 28 ngày làm việc | T3 | Không |
| LIC-26 | Cấp Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm | Hướng dẫn cơ sở và lập hồ sơ 03 - 05 ngày làm việc;<br>nộp trong 01 ngày làm việc | Thẩm định thực tế và cấp phép trong 20 ngày làm việc | T3 | Không |
| LIC-27 | Đăng ký hoạt động tổ chức khoa học và công nghệ | Soạn hồ sơ 04 ngày làm việc;<br>rà soát nhân sự 02 ngày làm việc;<br>nộp trong 01 ngày làm việc | Cấp trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ | T3 | Không |
| LIC-28 | Thông báo website thương mại điện tử bán hàng | Rà soát website theo CC-LIC-28-TMDT-01, soạn chính sách 02 ngày làm việc;<br>nộp trực tuyến 01 ngày làm việc | Xác minh pháp lý hoàn thành 30/09/2026 theo VB-122-2025-QH15, VB-248-2026-NĐ-CP, VB-117-2025-NĐ-CP;<br>mốc nộp đối chiếu bản gốc khi mở lại | T2 | Không |
| LIC-29 | Đăng ký website cung cấp dịch vụ TMĐT (Sàn giao dịch TMĐT) | Soạn Đề án và Quy chế 05 - 07 ngày làm việc;<br>nộp hồ sơ giấy trong 02 ngày làm việc sau duyệt điện tử | Thẩm định điện tử 07 ngày làm việc; cấp phép hồ sơ giấy 05 ngày làm việc | T3 | Không |
| LIC-30 | Đăng ký xác lập quyền nhãn hiệu | Tra cứu sơ bộ 01 ngày làm việc;<br>soạn hồ sơ và nộp trong 24 giờ đến 48 giờ làm việc sau ký | Thẩm định hình thức 01 tháng; thẩm định nội dung 09 tháng (thực tế 12 - 16 tháng) | T3 | Không |
| LIC-31 | Đăng ký quyền tác giả (phần mềm, tác phẩm viết, mỹ thuật) | Soạn hồ sơ và in đóng tập 03 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi ký | Cấp Giấy chứng nhận trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ | T2 | Không |

### 1.4. Lao Động (OBK-SOP-LD), 27 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| LD-01 | Trả lời câu hỏi về quy định lao động | LD-01 không đi qua chuỗi T2.<br>Câu hỏi đã có căn cứ sẵn đã đối chiếu bản gốc trong `PL_1` thì bộ phận trả lời thẳng AM trong 02 giờ làm việc, không cấp mốc ước lượng, vì câu trả lời tới trước cả hạn T2.<br>Câu hỏi phải tra bản gốc thì đi đúng chuỗi: bộ phận cấp mốc ước lượng cho AM trong 02 giờ làm việc theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4, AM cam kết T2 với khách trong 04 giờ làm việc, và T3 là 02 ngày làm việc.<br>NHÁNH KÉO DÀI, ba điều kiện đủ theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4a: điều kiện vào nhánh là bộ phận đã tra mà không kết luận được; mốc của nhánh là mốc của Job RD-10; và AM PHẢI cam kết lại T2 với khách trong 04 giờ làm việc kể từ khi mở Job RD-10.<br>Chạm nội dung chưa xác minh được thì mở Job RD-12, AM gửi thư hẹn mốc trong 04 giờ làm việc, và không trả lời nội dung | Không có | T2 | Không |
| LD-02 | Soạn hợp đồng lao động, phụ lục, thỏa thuận | 02 ngày làm việc kể từ khi nhận đủ thông tin | Không có | T2 | Không |
| LD-03 | Rà soát thời hạn hợp đồng xác định thời hạn | Rà hằng tháng;<br>cảnh báo khách 45 ngày trước ngày hết hạn | Hết hạn mà vẫn làm việc thì phải ký hợp đồng mới trong **30 ngày**;<br>quá 30 ngày thì tự động thành hợp đồng không xác định thời hạn;<br>chỉ được ký thêm hợp đồng xác định thời hạn **01 lần** | T1 | Không |
| LD-04 | Đăng ký mã BHXH lần đầu cho người lao động | 02 ngày làm việc kể từ khi nhận bản scan hợp đồng đã ký | Kê khai và nộp hồ sơ tham gia BHXH bắt buộc trong **30 ngày** kể từ ngày người lao động thuộc đối tượng tham gia | T2 | Có |
| LD-05 | Báo tăng lao động | Đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10 | Theo CC-LD-140, mốc 30 ngày | T1 | Có |
| LD-06 | Báo giảm lao động | Đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10 | **KHÔNG TÌM THẤY mốc số ngày trong kho.** Xem cảnh báo mục 9.2 | T1 | Có |
| LD-07 | Tính lương và lập bảng lương | Khách trả lương cuối tháng: tính ngày 25 tới 28, gửi ngày 29 tới 30.<br>Khách trả lương ngày 05: tính ngày 01 tới 03, gửi ngày 04 tới 05.<br>Khách trả lương ngày 10: tính ngày 06 tới 08, gửi ngày 09 tới 10.<br>Phiếu lương gửi trước ngày trả lương ít nhất 01 ngày | Không có mốc luật cho việc lập;<br>kỳ hạn trả lương theo thỏa thuận và `PL_1` CC-LD-66 | T1 | Có |
| LD-08 | Nhắc khách gửi dữ liệu chấm công | Ngày 20 tới 25 | Không có | T1 | Không |
| LD-09 | Tổng hợp và thông báo số tiền BHXH phải đóng | Tổng hợp ngày 11 tới 14;<br>thông báo ngày 15 | Khách phải nộp tiền chậm nhất **ngày cuối cùng của tháng tiếp theo** | T1 | Có |
| LD-10 | Thông báo kinh phí công đoàn | Ngày 15 | **CHƯA XÁC MINH ĐƯỢC từ kho.** Xem cảnh báo mục 9.3 | T1 | Có |
| LD-11 | Chốt sổ BHXH khi người lao động nghỉ việc | 10 ngày làm việc kể từ ngày chính thức nghỉ việc | **KHÔNG TÌM THẤY mốc số ngày trong kho.** Nghĩa vụ có tại CC-LD-30, không kèm số ngày | T2 | Có |
| LD-12 | Tính và bàn giao hồ sơ chấm dứt hợp đồng lao động | Gửi khách trước hạn thanh toán ít nhất 05 ngày làm việc | **Thanh toán đầy đủ các khoản trong 14 NGÀY LÀM VIỆC** kể từ ngày chấm dứt;<br>bốn trường hợp được kéo dài nhưng không quá **30 ngày** | T2 | Có |
| LD-13 | Đăng ký nội quy lao động | 02 ngày làm việc kể từ khi khách bàn giao nội quy | Bắt buộc với khách sử dụng **từ 10 người lao động trở lên**;<br>nộp hồ sơ trong **10 ngày** kể từ ngày ban hành;<br>cơ quan xử lý trong **07 ngày làm việc**;<br>nội quy có hiệu lực sau **15 ngày** kể từ ngày cơ quan nhận đủ hồ sơ | T3 | Không |
| LD-14 | Lập và cập nhật sổ quản lý lao động | Lập trong 10 ngày làm việc kể từ khi tiếp nhận khách;<br>cập nhật trong 02 ngày làm việc kể từ khi có biến động | Lập trong **30 ngày** kể từ ngày bắt đầu hoạt động;<br>cập nhật kể từ ngày người lao động bắt đầu làm việc | T1 | Không |
| LD-15 | Báo cáo tình hình sử dụng lao động 06 tháng đầu năm | Hoàn tất nội bộ và NỘP chậm nhất 03 NGÀY LÀM VIỆC TRƯỚC 04/06, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6.<br>không cam kết mốc 04/06, vì đó là ngày hợp pháp cuối cùng | **Trước ngày 05 tháng 6** | T2 | Không |
| LD-16 | Báo cáo tình hình sử dụng lao động cả năm | Hoàn tất nội bộ và NỘP chậm nhất 03 NGÀY LÀM VIỆC TRƯỚC 04/12, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6.<br>không cam kết mốc 04/12, vì đó là ngày hợp pháp cuối cùng | **Trước ngày 05 tháng 12** | T2 | Không |
| LD-17 | Thông báo biến động lao động bất thường | Trước ngày 10 của tháng sau kỳ phát sinh | Thực hiện theo hướng dẫn nghiệp vụ của Bộ phận Lao động | T2 | Không |
| LD-18 | Thông báo làm thêm giờ trên 200 tới 300 giờ mỗi năm | Trong 07 ngày kể từ ngày khách bắt đầu tổ chức làm thêm vượt ngưỡng | **Chậm nhất SAU 15 NGÀY** kể từ ngày thực hiện | T2 | Không |
| LD-19 | Rà soát giới hạn giờ làm thêm | Rà hằng tháng khi tính lương;<br>cảnh báo khi đạt 80% mức tối đa tháng hoặc 80% mức tối đa năm | Mức tối đa: **40 giờ mỗi tháng;<br>200 giờ mỗi năm**, hoặc **300 giờ mỗi năm** với 5 nhóm ngành nghề | T1 | Không |
| LD-20 | Rà soát lương tối thiểu vùng | Trong 10 ngày làm việc kể từ ngày nghị định mới được ban hành | Mức hiện hành theo `293/2025/NĐ-CP` hiệu lực 01/01/2026.<br>Doanh nghiệp phải rà soát hợp đồng, thỏa ước và quy chế để điều chỉnh | T2 | Có |
| LD-21 | Hỗ trợ trình tự xử lý kỷ luật lao động | Gửi khách bộ hồ sơ trước ngày họp ít nhất 10 NGÀY LÀM VIỆC.<br>Đây là mốc làm trước thứ hai của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6, đầu ra cần khách ký trước khi gửi ra, tức 05 ngày làm việc làm trước cộng thêm mốc pháp định 05 ngày làm việc thông báo họp.<br>Mốc cũ 07 ngày làm việc chỉ còn khoảng làm trước thật 02 ngày làm việc, dưới chuẩn NT-6 | Thông báo họp **ít nhất 05 ngày làm việc** trước ngày họp.<br>Thời hiệu **06 tháng** kể từ ngày xảy ra hành vi, **12 tháng** nếu liên quan tài chính, tài sản, bí mật công nghệ, bí mật kinh doanh | T3 | Không |
| LD-22 | Rà soát khấu trừ lương | 01 ngày làm việc | Chỉ được khấu trừ để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị, tài sản.<br>**Mức tối đa 30%** tiền lương thực trả hằng tháng sau khi trích nộp BHXH bắt buộc, BHYT, BHTN và thuế TNCN | T2 | Có |
| LD-23 | Giải trình hồ sơ với cơ quan BHXH | Thông báo khách kèm danh mục hồ sơ cần trong 01 ngày làm việc;<br>gửi giải trình trong 02 ngày làm việc kể từ khi nhận đủ hồ sơ từ khách | **Theo thời hạn ghi trên chính văn bản của cơ quan** | T3 | Có |
| LD-24 | Cập nhật công thức và chính sách mới vào bảng tính lương | Ngày 16 tới 19 hằng tháng | Theo ngày hiệu lực văn bản | T2 | Có |
| LD-25 | Rà soát tuân thủ lao động định kỳ | Hằng tháng, trước ngày 10 | Không có | T1 | Không |
| LD-26 | Bàn giao khi kết thúc dịch vụ | Chuẩn bị trong 05 ngày làm việc kể từ khi AM báo | Không có | T3 | Không |
| LD-27 | Quyết toán thuế TNCN năm và đăng ký người phụ thuộc | Hoàn tất nội bộ và NỘP chậm nhất 03 NGÀY LÀM VIỆC TRƯỚC 31/03 năm sau, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6.<br>không cam kết mốc 31/03, vì đó là ngày hợp pháp cuối cùng | Chậm nhất ngày 31 tháng 3 của năm dương lịch tiếp theo, theo Luật Quản lý thuế 108/2025/QH15 | T3 | Có |

### 1.5. Dịch vụ pháp lý (OBK-SOP-LS), 21 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| LS-01 | Tiếp nhận và phân loại yêu cầu pháp lý | Xác nhận đã nhận dưới 30 phút;<br>kết luận phân loại trong 03 gLV, theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4 | Không có | T1 | Không |
| LS-02 | Cấp đầu vào phạm vi và tính khả thi cho `AM` báo giá | 03 gLV, khớp mốc `AM` cần tại AM-03.<br>Nhóm A và nhóm B phải có văn bản nhận việc của `CEO` theo mục 1.5 trước khi gửi `AM` | Không có | T2 | Không |
| LS-03 | Soạn hợp đồng theo yêu cầu của khách | Mức thường 03 NLV;<br>mức phức tạp 05 NLV, tính từ khi nhận đủ đầu vào | Không có | T2 | Không |
| LS-04 | Rà soát hợp đồng do khách đưa | Mức thường 02 NLV;<br>mức phức tạp 04 NLV | Không có | T2 | Không |
| LS-05 | Soạn phụ lục, biên bản, thỏa thuận sửa đổi hoặc chấm dứt | 02 NLV | Không có | T2 | Không |
| LS-06 | Trả lời câu hỏi tư vấn đã có căn cứ đã đối chiếu bản gốc | `T3` là 03 gLV, tức đúng bằng mốc nội dung tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4 và SỚM HƠN hạn `T2` là 04 gLV.<br>Vì vậy không cần cấp mốc ước lượng và không đi qua chuỗi `T2` | Không có | T1 | Không |
| LS-07 | Trả lời câu hỏi tư vấn phải tra bản gốc | `T3` là 03 NLV để `TL-LS` đối chiếu bản gốc.<br>NHÁNH KÉO DÀI, ba điều kiện đủ theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4a: điều kiện vào nhánh là `TL-LS` đã tra mà không kết luận được; mốc của nhánh là mốc của Job RD-10; và `AM` phải cam kết lại `T2` với khách trong 04 gLV kể từ khi mở Job RD-10 | Không có | T2 | Không |
| LS-08 | Xử lý câu hỏi chạm nội dung chưa xác minh được | `AM` gửi thư hẹn mốc trong 04 gLV, đúng hạn `T2` cho nội dung chưa xác minh được tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.2.4;<br>`TL-LS` DỪNG và mở RD-12 trong cùng ngày làm việc | Không có | T3 | Không |
| LS-09 | Lập thư tư vấn hoặc bản ghi nhớ pháp lý | Mức thường 05 NLV;<br>mức phức tạp 08 NLV | Không có | T2 | Không |
| LS-10 | Nghiên cứu chuyên đề theo yêu cầu | Mức thường 07 NLV; mức phức tạp 12 NLV, xếp mức theo mục 2.1. Chốt mức tại LS-02, không đổi giữa đường | Không có | T3 | Không |
| LS-11 | Rà soát tuân thủ doanh nghiệp | 10 NLV kể từ khi nhận đủ hồ sơ, đếm trên thời gian bộ phận này làm.<br>Đồng hồ DỪNG trong lúc chờ đầu vào của ba bộ phận nghiệp vụ, và mỗi lần dừng ghi lý do theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.2.1.<br>Ba bộ phận cấp đầu vào theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4 dòng cuối, tức nội dung dưới 03 gLV | Không có | T3 | Không |
| LS-12 | Rà soát pháp lý phục vụ giao dịch | 15 NLV kể từ khi nhận đủ danh mục tài liệu. Danh mục thiếu thì tạm dừng tính cam kết tiến độ theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.2.1 | Không có | T3 | Không |
| LS-13 | Soạn điều lệ và bộ tài liệu quản trị cho khách | Mức thường 07 NLV;<br>mức phức tạp 10 NLV | Không có | T3 | Không |
| LS-14 | Soạn nội quy lao động và bộ quy chế nhân sự cho khách | 07 NLV kể từ khi nhận đủ đầu vào, đếm trên thời gian bộ phận này làm.<br>Đồng hồ DỪNG trong lúc chờ đầu vào của Bộ phận Lao động và Tiền lương; bộ phận đó cấp đầu vào theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4 dòng cuối, tức nội dung dưới 03 gLV | Không có | T3 | Không |
| LS-15 | Soạn quy chế tài chính và bộ chứng từ nội bộ cho khách | 07 NLV kể từ khi nhận đủ đầu vào, đếm trên thời gian bộ phận này làm.<br>Đồng hồ DỪNG trong lúc chờ đầu vào của Bộ phận Kế toán và Thuế; bộ phận đó cấp đầu vào theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4 dòng cuối, tức nội dung dưới 03 gLV | Không có | T3 | Không |
| LS-16 | Soạn bộ hợp đồng mẫu và biểu mẫu cho khách | 05 NLV | Không có | T2 | Không |
| LS-17 | Hỗ trợ khách làm việc với cơ quan nhà nước trong một vụ việc pháp lý | Đọc và kết luận yêu cầu trong 01 NLV; gửi bản dự thảo cho `AM` chậm nhất **06 NLV** trước hạn ghi trên văn bản của cơ quan.<br>Sáu ngày là 05 ngày làm việc làm trước cho đầu ra cần khách ký theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6, cộng 0,5 NLV `AM` giữ theo mục 7.4, làm tròn lên | Theo thời hạn ghi trên chính văn bản của cơ quan | T3 | Không |
| LS-18 | Điều phối luật sư hoặc đối tác thuê ngoài | Soát xét sản phẩm của đối tác trong 02 NLV kể từ khi nhận. Đối tác không liên hệ trực tiếp khách | Theo hợp đồng với đối tác | T2 | Không |
| LS-19 | Bàn giao sản phẩm pháp lý qua `AM` | Gửi `AM` trước hạn gửi khách ít nhất 0,5 NLV | Theo mốc đã cam kết với khách | T1 | Không |
| LS-20 | Đóng vụ việc và nộp bài học về Legal R&D | 03 NLV kể từ ngày bàn giao. Legal R&D nhận và xử theo RD-16 | Không có | T2 | Không |
| LS-21 | Cập nhật bảng Job và hướng dẫn cấp 3 khi có văn bản pháp luật mới | Theo mốc cập nhật tài liệu của mức ưu tiên đã phân, đặt tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a. Job này không đặt lại con số | Ngày hiệu lực của văn bản | T3 | Không |

### 1.6. Đối tác (OBK-SOP-PM), 11 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| PM-01 | Thẩm định hồ sơ đối tác và trình TGĐ ký | Hợp đồng có hiệu lực từ ngày ký, thời hạn 12 tháng | Ngày hết hạn hợp đồng | T2 | Không |
| PM-02 | Tiếp nhận đăng ký khách được giới thiệu | Ngày Được Giới Thiệu là ngày Kênh Đăng Ký nhận thư có đủ năm nội dung. Thời hạn 03 ngày làm việc của PM-03 bắt đầu từ Ngày Được Giới Thiệu | Không có | T1 | Không |
| PM-03 | Tra trùng và xác nhận hoặc từ chối đăng ký | 03 ngày làm việc kể từ Ngày Được Giới Thiệu.<br>Thư chứng minh tiếp xúc trước sau Ghi Nhận Mặc Nhiên: 30 ngày kể từ ngày Ghi Nhận Mặc Nhiên | Hết 03 ngày làm việc mà oBacker chưa phản hồi thì khách được Ghi Nhận Mặc Nhiên kể từ Ngày Được Giới Thiệu | T2 | Không |
| PM-04 | Trình CEO quyết nguồn khi nhiều nguồn | `CEO` quyết và văn bản nêu lý do gửi đối tác trong 10 ngày làm việc kể từ ngày oBacker phát hiện trùng nguồn | Đối tác không đồng ý thì Các Bên áp Điều 15 bản mẫu: thương lượng trong 10 ngày làm việc, sau đó mỗi Bên có quyền khởi kiện | T3 | Không |
| PM-05 | Bàn giao lead cho AM | Hợp đồng không có mốc | Không có | T1 | Không |
| PM-06 | Theo dõi chuyển đổi và mở thời gian hưởng hoa hồng | Ký và thanh toán lần đầu trong 60 ngày kể từ Ngày Được Giới Thiệu;<br>thời gian hưởng hoa hồng 12 tháng kể từ ngày thanh toán lần đầu | Ngày kết thúc thời gian hưởng hoa hồng | T1 | Không |
| PM-07 | Lập và gửi báo cáo hoa hồng tháng | Từ ngày 05 đến ngày 10 của tháng liền sau tháng phát sinh doanh thu | Ngày 10 của tháng liền sau tháng phát sinh doanh thu | T1 | Không |
| PM-08 | Xử lý phản hồi của đối tác về báo cáo | 07 ngày làm việc kể từ ngày đối tác nhận báo cáo, tính lại từ ngày oBacker cung cấp thông tin làm rõ.<br>Việc chi tại `NB-03` hoặc `NB-07` trong 05 ngày làm việc theo mốc tại [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 20 | Hạn chi 05 ngày làm việc | T2 | Không |
| PM-09 | Thông báo hoàn trả hoa hồng | 15 ngày kể từ ngày oBacker hoàn tiền cho khách. Thông báo gửi sau 15 ngày vẫn có hiệu lực khi khoản hoàn tiền phát sinh trong 12 tháng kể từ ngày oBacker trả số hoa hồng tương ứng | Đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo | T2 | Không |
| PM-10 | Gia hạn hoặc trình CEO chấm dứt hợp đồng với đối tác | Thương lượng gia hạn trước ngày hết hạn ít nhất 30 ngày.<br>Đơn phương chấm dứt: văn bản gửi bên kia trước ít nhất 30 ngày.<br>Vi phạm Điều 7, thông tin sai sự thật, vi phạm Điều 2.4: oBacker có quyền chấm dứt ngay.<br>Vi phạm Điều 12, Điều 13, chậm trả tiền trên 30 ngày: 15 ngày khắc phục kể từ ngày nhận thông báo | Ngày hết hạn hợp đồng hoặc ngày chấm dứt ghi trong văn bản | T3 | Không |
| PM-11 | Lưu trữ và xóa dữ liệu sau khi kết thúc | Theo Điều 12.6 bản mẫu | Không có | T3 | Không |

### 1.7. Legal R&D (OBK-SOP-RD), 22 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| RD-01 | Ghi nhận văn bản pháp luật mới | 02 NLV kể từ khi nhận tin báo. Ghi nhận cả khi chưa chắc chắn; thà ghi thừa rồi loại | Không có | T1 | Không |
| RD-02 | Nhập bản gốc vào kho văn bản | 03 NLV kể từ RD-01, và **01 NLV với văn bản mức ưu tiên 1**.<br>Không tải được thì lập phiếu theo dõi tại Sổ theo dõi yêu cầu nghiên cứu pháp lý [[RD-01_So_theo_doi_yeu_cau_nghien_cuu_phap_ly_va_ban_ghi_nho_tu_van\|RD-01]] | Không có | T1 | Không |
| RD-03 | Xác minh hiệu lực và phần bị bãi bỏ | 03 NLV kể từ RD-02, và **01 NLV với văn bản mức ưu tiên 1**.<br>Đọc điều khoản thi hành của văn bản MỚI HƠN, cấm lấy từ trí nhớ và cấm lấy từ nguồn thứ cấp | Không có | T3 | Không |
| RD-04 | Phân mức ưu tiên của văn bản mới | **01 NLV kể từ RD-01.** Phân mức là việc đọc tiêu chí, không phải việc tra bản gốc, nên Job này chạy TRƯỚC RD-02 và RD-03 để hai Job đó biết mình đi nhánh nhanh hay nhánh thường.<br>Bốn mức và tiêu chí theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a | Ngày hiệu lực của văn bản | T2 | Không |
| RD-05 | Lập bản đánh giá tác động | Theo mốc của mức ưu tiên đã phân, đặt tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a, đếm từ ngày ghi nhận tại RD-01.<br>Job này không đặt lại con số.<br>Xem mục 2.1 về cách chuỗi bốn Job trước Job này vừa mốc đó | Ngày hiệu lực của văn bản | T3 | Không |
| RD-06 | Cập nhật sổ căn cứ và bảng tác động ngược | Cùng mốc với RD-05. Sửa dữ liệu nguồn rồi sinh lại sổ; cấm sửa thẳng vào tệp sổ | Không có | T2 | Không |
| RD-07 | Bàn giao yêu cầu sửa cho `TL` bộ phận và theo dõi tới khi đóng | Giao trong 01 NLV kể từ khi xong RD-05.<br>Theo dõi tới khi `TL` bộ phận đóng Job sửa của mình, tức `KT-25`, `LD-24` hoặc `LS-21`; mốc sửa theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a cột cuối.<br>Bộ phận Giấy phép chưa có Job tương đương, nên với bộ phận đó thì mở một Job rời và ghi lý do trên Job này | Ngày hiệu lực của văn bản | T2 | Không |
| RD-08 | Họp thống nhất cách hiểu và cách áp dụng | Họp trong 02 NLV kể từ khi xong RD-05. Đây là bước bắt buộc, không được bỏ | Không có | T2 | Không |
| RD-09 | Cấp cơ sở pháp lý cho nghiệp vụ lạ | Văn bản đã có trong kho: 03 NLV.<br>Văn bản chưa có trong kho: cấp mốc ước lượng cho `TL` bộ phận trong 01 NLV, mở RD-02, và không cam kết mốc kết luận cho tới khi có bản gốc | Không có | T3 | Không |
| RD-10 | Trả lời câu hỏi pháp lý mà bộ phận không tra được | 05 NLV kể từ khi nhận đủ đầu vào.<br>Đây là mốc mà [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] KT-23, [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] LD-01 và [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] LS-07 dẫn chiếu để cộng vào `T3` của mình | Không có | T2 | Không |
| RD-11 | Kết luận pháp lý dùng làm chuẩn nội bộ | 05 NLV kể từ khi nhận đủ đầu vào. Đầu ra là một mã, không phải một câu trả lời rời | Không có | T3 | Không |
| RD-12 | Mở mã cần xác minh và đặt hạn chót cho nội dung chưa xác minh được | Mở trong 01 NLV. Hạn chót là bắt buộc với mã nào có hậu quả không tự lộ ra | Không có | T3 | Không |
| RD-13 | Nâng mức xác minh từ chưa đối chiếu bản gốc hoặc chưa xác minh được lên đã đối chiếu bản gốc | Theo thời hạn cam kết tại Sổ [[RD-01_So_theo_doi_yeu_cau_nghien_cuu_phap_ly_va_ban_ghi_nho_tu_van\|RD-01]]. Nội dung quá hai lần rà soát chưa hoàn thành thì báo cáo `CEO` | Không có | T2 | Không |
| RD-14 | Rà soát hiệu lực toàn sổ căn cứ | Hằng quý, chậm nhất ngày cuối cùng của tháng đầu quý sau. Rà đột xuất ngay khi có văn bản mức ưu tiên 1 | Không có | T1 | Không |
| RD-15 | Rà soát giả thiết và mã chưa kết luận | Mỗi 06 tháng, hoặc ngay khi có văn bản mới ảnh hưởng một giả thiết | Hạn chót cứng của từng giả thiết | T2 | Không |
| RD-16 | Soạn và cập nhật chuẩn nghiệp vụ bàn giao cho Phòng Dịch vụ | Theo kế hoạch quý. Phiếu bài học nhận được thì phản hồi trong 05 NLV là nhận, gộp vào bản quý, hoặc không cần sửa kèm lý do | Không có | T2 | Không |
| RD-17 | Soát nội dung pháp lý của tài liệu trước khi phát hành | 03 NLV kể từ khi nhận bản. Đơn vị này soát NỘI DUNG pháp lý; `COO` quyết bản nào được phát hành | Không có | T3 | Không |
| RD-18 | Soát bộ hợp đồng dịch vụ và bộ điều khoản của oBacker | 05 NLV khi có yêu cầu. Rà lại theo lịch mỗi 06 tháng, và ngay khi một bộ phận thêm hoặc bỏ một Job có đầu ra ra khỏi oBacker | Không có | T3 | Không |
| RD-19 | Soát nội dung pháp lý trước khi công bố ra ngoài | 02 NLV kể từ khi nhận bản. Nội dung pháp lý chưa qua bước này thì không được công bố | Không có | T3 | Không |
| RD-20 | Nghiên cứu phát triển dịch vụ pháp lý mới | Theo kế hoạch quý. Đầu ra phải trả lời được điều kiện kinh doanh trước khi trả lời được giá | Không có | T3 | Không |
| RD-21 | Chuẩn bị nội dung thông báo sự cố dữ liệu cá nhân | Bản dự thảo trong 04 gLV kể từ khi Tech Lead báo.<br>Thời hạn thông báo theo pháp luật hiện chưa xác minh được, xem [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 4 | Chưa xác minh được, chưa xác minh được | T3 | Không |
| RD-22 | Kết luận về hành vi oBacker nghiêm cấm khi có yêu cầu đáng ngờ | Kết luận trong 04 gLV. Báo `CEO` trong ngày phát hiện, không đợi kết luận xong mới báo | Không có | T3 | Không |

### 1.8. Nội bộ (OBK-SOP-NB-00), 51 Job

| Mã Job | Tên Job | SLA nội bộ oBacker | Thời hạn bên ngoài hoặc định mức | Mức Tier | Giữ hai lớp mọi Tier |
| --- | --- | --- | --- | --- | --- |
| NB-01 | Đề nghị mua sắm | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.12, Đ.21, Đ.22 | T2 | Không |
| NB-02 | Lựa chọn nhà cung cấp và ký hợp đồng | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.12, Đ.12a | T3 | Không |
| NB-03 | Đề nghị thanh toán | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.5.1, Đ.18, Đ.19, Đ.23, Đ.24 | T2 | Không |
| NB-04 | Tạm ứng | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.36 | T2 | Không |
| NB-05 | Hoàn ứng | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.37 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.37, Đ.38 chế tài quá hạn | T2 | Không |
| NB-06 | Chi hộ bằng tiền cá nhân, không qua tạm ứng | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.19, Đ.39;<br>`PL_1` CC-KT-30, CC-KT-31 | T2 | Không |
| NB-07 | Thanh toán định kỳ và thanh toán tự động | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.40 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.40 | T1 | Không |
| NB-08 | Rà soát ngân sách bộ phận | Trong 05 ngày làm việc đầu tháng sau | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.22 | T1 | Không |
| NB-09 | Xuất hóa đơn dịch vụ cho khách | Trong 01 ngày làm việc kể từ thời điểm xác định doanh thu | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.14;<br>`PL_1` `CC-DN` không áp dụng, dùng `254/2026/NĐ-CP` Đ.9 k.2 | T1 | Không |
| NB-10 | Duyệt điều khoản thanh toán ngoài chuẩn | Trong 02 ngày làm việc | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.15.1, Đ.15.2, Đ.14.6 | T3 | Không |
| NB-11 | Lập bảng tuổi nợ phải thu | Hằng tuần | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.15.4 | T1 | Không |
| NB-12 | Nhắc phí và nhắc nợ theo bảng mốc | Theo bảng mốc tại [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] mục 6.8.2, là bản gốc.<br>Phân vai trò: `KTV` lập nội dung và số liệu, `AM` gửi cho khách, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.1a | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.1, Đ.16.1a, Đ.16.1b | T1 | Không |
| NB-13 | Đề xuất dừng dịch vụ với khách quá hạn | Trong 02 ngày làm việc kể từ khi chạm mốc | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.2. **TGĐ quyết**, không cấp nào khác | T3 | Không |
| NB-14 | Đối chiếu công nợ phải thu với khách | Trong 05 ngày làm việc đầu tháng đầu quý sau | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.15.4 | T1 | Không |
| NB-15 | Đề xuất xóa nợ phải thu khó đòi | Không có SLA cố định | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.3. **HĐQT quyết**. TGĐ và `KTT` không có quyền xóa nợ | T3 | Không |
| NB-16 | Theo dõi tuổi nợ phục vụ dự phòng | Cùng kỳ NB-11 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.17.1a, bốn mức trích lập | T1 | Không |
| NB-17 | Kiểm quỹ tiền mặt | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.33 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.32, Đ.33 | T2 | Không |
| NB-18 | Đối chiếu sao kê ngân hàng với sổ kế toán | Đối chiếu nhanh mỗi 02 tuần; đối chiếu đầy đủ trong 05 ngày làm việc đầu tháng sau.<br>Hai con số ĐẶT tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.34.3, chốt ngày 07/09/2026 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.34, Đ.48 chốt số 1. Người làm là `AD-KT`, không phải `KTV` | T1 | Không |
| NB-31 | Lập phiếu thu và phiếu chi cho mọi lần nhập, xuất quỹ tiền mặt | Ngay tại thời điểm nhập quỹ hoặc xuất quỹ, không lập sau | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.32; [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] Điều 4; `Thông tư 99/2025/TT-BTC` Tài khoản 111 mục 1 điểm b.<br>**`BM-02` không thay phiếu chi**: `BM-02` là đề nghị trước khi chi, phiếu chi là chứng từ xuất quỹ | T1 | Không |
| NB-19 | Rà soát phân quyền lập và duyệt trên ngân hàng điện tử | Hằng quý, và ngay trong ngày khi có nhân sự nghỉ việc hoặc thay đổi vai trò, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.35.2 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.35, Đ.47, Đ.48 chốt số 4. Người làm là TGĐ, KHÔNG phải `KTT` | T2 | Không |
| NB-20 | Mở, đóng, thay đổi tài khoản ngân hàng | Trong 03 ngày làm việc kể từ khi được duyệt | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.34 | T3 | Không |
| NB-21 | Lập kế hoạch dòng tiền | Trong 05 ngày làm việc đầu tháng | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.22 | T1 | Không |
| NB-22 | Ghi sổ kế toán kỳ của oBacker | Theo lịch tại mục 9 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.42, Đ.43 | T1 | Không |
| NB-23 | Khóa sổ và đối chiếu kỳ của oBacker | Theo lịch tại mục 9 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.43 | T1 | Không |
| NB-24 | Kê khai và nộp thuế của chính oBacker | Làm trước 03 ngày làm việc trước thời hạn theo pháp luật | Theo `PL_1` mục 5 | T2 | Không |
| NB-25 | Lập và nộp báo cáo tài chính năm của oBacker | Nộp trước hạn pháp định ít nhất 05 ngày làm việc | **90 ngày** kể từ ngày kết thúc kỳ kế toán năm. `PL_1` CC-KT-03 | T3 | Không |
| NB-26 | Kiểm kê tài sản và công nợ | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.44 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.44 | T2 | Không |
| NB-27 | Đưa tài liệu kế toán vào lưu trữ | **Trong 12 tháng** kể từ ngày kết thúc kỳ kế toán năm | `PL_1` CC-KT-04;<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.45 | T1 | Không |
| NB-28 | Rà soát các khoản chạm mức tối đa trước 31/12 | Trước 15/12 | `PL_1` CC-KT-11 tới CC-KT-16;<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.21, Đ.26, Đ.27 | T2 | Không |
| NB-29 | Rà soát giao dịch với người có liên quan | Hằng quý;<br>và trước khi ký từng giao dịch thuộc diện | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.12a | T3 | Không |
| NB-30 | Bảy điểm kiểm soát định kỳ | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.48 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.47, Đ.48 | T1 | Không |
| NB-32 | Tạm ứng tiền lương | Theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.6 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.26a;<br>`PL_1` CC-LD-196, CC-LD-197 | T2 | Có |
| NB-33 | Tổng hợp bảng công tạm và gửi xác nhận | Ngày 16 hằng tháng, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.1 | [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] mục 1.2.<br>Người làm là `HR` | T1 | Có |
| NB-34 | Chốt bảng công của kỳ | Ngày 20: `HR` chốt bảng công.<br>Ngày 21: `TL` và `BOM` chốt, hai việc chạy song song.<br>Theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.2 | [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] mục 1.2.<br>Người làm: `HR` cộng công từ ngày 16 đến ngày 20 theo dữ liệu hệ thống và chốt bảng công;<br>`TL` chốt phần nhân viên của bộ phận mình;<br>`BOM` theo [[PL_Tu_dien_vai\|OBK-QCTC-02-PL-A]] mục 3 chốt phần các `TL` | T1 | Có |
| NB-35 | Duyệt toàn bảng công | Ngày 22 hằng tháng, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.2 | [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] mục 1.2.<br>Người làm là `CEO` theo [[PL_Tu_dien_vai\|OBK-QCTC-02-PL-A]] mục 3 | T2 | Có |
| NB-36 | Tính lương, lập Bảng thanh toán tiền lương, và tính phần bù của kỳ trước | Từ ngày 23 hằng tháng, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.4 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Chương 5;<br>[[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] mục 4.3;<br>[[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]].<br>Người làm là `KTV` | T2 | Có |
| NB-37 | Duyệt bảng lương, lập lệnh, xác nhận lệnh và chi lương | Chi xong trong ngày làm việc cuối cùng của tháng, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.4 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.35.<br>Người làm: `TGĐ` duyệt bảng lương;<br>`NTT` lập lệnh;<br>xác nhận lệnh theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 35 | T3 | Có |
| NB-38 | Xét đơn nghỉ phép, đơn cập nhật công, đơn làm việc từ xa, đăng ký làm thêm giờ | Theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.3 | [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] mục 7.<br>Người xét đơn nghỉ phép: quản lý trực tiếp, theo [[Noi_quy_lao_dong\|OBK-NQLD]] Điều 7.5.2;<br>người xét đơn làm việc từ xa: Tổng giám đốc hoặc người được ủy quyền, theo [[Noi_quy_lao_dong\|OBK-NQLD]] Điều 11.2;<br>người xét đơn cập nhật công: quản lý trực tiếp | T1 | Không |
| NB-39 | Đăng ký mã bảo hiểm xã hội lần đầu cho người lao động của oBacker | Thời hạn theo pháp luật: Kê khai và nộp hồ sơ tham gia BHXH bắt buộc trong **30 ngày** kể từ ngày người lao động thuộc đối tượng tham gia | `PL_1` CC-LD-140.<br>Người làm là `HR` | T2 | Có |
| NB-40 | Báo tăng lao động | Thời hạn theo pháp luật: Theo CC-LD-140, mốc 30 ngày | `PL_1` CC-LD-140.<br>Người làm là `HR` | T1 | Có |
| NB-41 | Báo giảm lao động | Thời hạn theo pháp luật: **KHÔNG TÌM THẤY mốc số ngày trong kho.** Xem cảnh báo [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] mục 9.2 | `PL_1` mục 2.7 cảnh báo.<br>Người làm là `HR` | T1 | Có |
| NB-42 | Tổng hợp và nộp tiền bảo hiểm xã hội | Thời hạn theo pháp luật: oBacker phải nộp tiền chậm nhất **ngày cuối cùng của tháng tiếp theo** | `PL_1` CC-LD-143.<br>Người làm: `HR` lập hồ sơ;<br>khoản nộp tiền thực hiện theo chu trình CHI, nhóm N6 | T2 | Có |
| NB-43 | Chốt sổ bảo hiểm xã hội khi người lao động nghỉ việc | Thời hạn theo pháp luật: **KHÔNG TÌM THẤY mốc số ngày trong kho.** Nghĩa vụ có tại CC-LD-30, không kèm số ngày | `PL_1` CC-LD-30, CC-LD-158, CC-LD-159.<br>Người làm là `HR` | T2 | Có |
| NB-44 | Lập và cập nhật sổ quản lý lao động | Thời hạn theo pháp luật: Lập trong **30 ngày** kể từ ngày bắt đầu hoạt động;<br>cập nhật kể từ ngày người lao động bắt đầu làm việc | `PL_1` CC-LD-123 tới CC-LD-125.<br>Người làm là `HR` | T1 | Không |
| NB-45 | Báo cáo tình hình sử dụng lao động 06 tháng đầu năm | Thời hạn theo pháp luật: **Trước ngày 05 tháng 6** | `PL_1` CC-LD-121.<br>Người làm là `HR` | T2 | Không |
| NB-46 | Báo cáo tình hình sử dụng lao động cả năm | Thời hạn theo pháp luật: **Trước ngày 05 tháng 12** | `PL_1` CC-LD-121.<br>Người làm là `HR` | T2 | Không |
| NB-47 | Rà soát giới hạn giờ làm thêm | Mức tối đa theo pháp luật: **40 giờ mỗi tháng;<br>200 giờ mỗi năm**, hoặc **300 giờ mỗi năm** với 5 nhóm ngành nghề | `PL_1` CC-LD-69 tới CC-LD-71.<br>Người làm là `HR` | T1 | Không |
| NB-48 | Rà soát mức lương tối thiểu vùng | Mức hiện hành theo `293/2025/NĐ-CP` hiệu lực 01/01/2026.<br>Doanh nghiệp phải rà soát hợp đồng, thỏa ước và quy chế để điều chỉnh | `PL_1` CC-LD-60 tới CC-LD-63.<br>Người làm là `HR` | T2 | Có |
| NB-49 | Chốt doanh thu tính hoa hồng theo khách | Xong trước mốc gửi báo cáo hoa hồng tại Job `PM-07`; SLA nội bộ do `CEO` chốt khi ban hành | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều về chi hoa hồng giới thiệu khách hàng | T2 | Không |
| NB-50 | Thu hồi hoặc khấu trừ hoa hồng | Đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo, theo Điều 5.5 bản mẫu;<br>nghĩa vụ hoàn trả chỉ áp cho khoản oBacker hoàn tiền trong 12 tháng kể từ ngày oBacker chi hoa hồng tương ứng | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều về chi hoa hồng giới thiệu khách hàng | T3 | Không |
| NB-51 | Hoàn tiền cho khách hoặc xử lý hủy dịch vụ | Không áp | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 12.3 | T3 | Không |

---

## 2. TRA NHANH: JOB CÓ THỜI HẠN BÊN NGOÀI

Đây là nhóm Job mà trễ hạn dẫn tới tiền phạt cho khách hoặc cho oBacker, hoặc trễ một mốc do bên ngoài đặt. Bảng này KHÔNG gồm miền nội bộ, vì bảng Job nội bộ dùng cột định mức và thẩm quyền thay cho cột thời hạn.
Mọi Job trong nhóm này phải đạt khoảng làm trước tối thiểu theo `OBK-SOP-00` NT-6.

| Mã Job | Bộ phận | Tên Job | SLA nội bộ | Thời hạn bên ngoài | Căn cứ |
| --- | --- | --- | --- | --- | --- |
| AM-11 | Quản lý khách hàng | Gửi đầu ra cho khách | Nhận từ bộ phận trước hạn gửi khách ≥ 0,5 NLV;<br>gửi khách đúng SLA của Job gốc | Theo Job gốc | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 6.1 |
| AM-14 | Quản lý khách hàng | Xử lý sự cố mức P1 | AM gọi điện dưới 30 phút;<br>kế hoạch dưới 2 g;<br>cập nhật 2 lần mỗi ngày;<br>xong trong 1 NLV, tối đa 2 | Theo bản chất sự cố | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.3 |
| AM-15 | Quản lý khách hàng | Cảnh báo trước rủi ro trễ hạn | Trong 4 gLV kể từ khi bộ phận báo, và luôn trước thời hạn theo pháp luật | Trước thời hạn theo pháp luật | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6 |
| AM-18 | Quản lý khách hàng | Gia hạn hợp đồng + phát hành phụ lục nâng/đổi gói | Rà soát và liên hệ khách trước 60 NGÀY so với ngày hết hạn, khớp bản gốc tại [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] và `PL_G`;<br>đề xuất trong 3 NLV sau khi trao đổi;<br>theo đuổi mỗi 3 ngày;<br>ký xong trước ngày hết hạn;<br>phát hành phụ lục nâng/đổi gói trong 03 ngày làm việc kể từ khi chốt với khách | Ngày hết hạn hợp đồng | Nội bộ |
| AM-19 | Quản lý khách hàng | Kết thúc dịch vụ và bàn giao dữ liệu | Xác nhận và thông báo lộ trình trong 2 NLV;<br>bộ phận nghiệp vụ chuẩn bị bộ bàn giao trong 5 NLV;<br>gửi khách không muộn hơn ngày kết thúc hợp đồng | Ngày kết thúc hợp đồng | Nội bộ |
| KT-07 | Kế toán | Khai thuế GTGT kỳ | Nháp tờ khai ngày 13; ký gửi ngày 19-20, sau khi KT-04 khóa sổ ngày 18 (khớp mốc "đóng sổ 16-25" của TnC) | Theo `PL_C` phần B | Handbook Ch.09, Ch.13 |
| KT-08 | Kế toán | Tạm nộp thuế TNDN quý | Nộp tiền ngày 20 của tháng đầu quý sau | Theo `PL_C` phần B | Handbook Ch.10;<br>`PL_G` S13 |
| KT-09 | Kế toán | Khai thuế TNCN khấu trừ theo quý | Ký gửi ngày 23 của tháng đầu quý sau | Theo `PL_C` phần B | Handbook Ch.11;<br>`PL_G` S12 |
| KT-11 | Kế toán | Quản lý hóa đơn điện tử | Theo kỳ tháng;<br>hóa đơn sai sót xử lý trong 01 ngày làm việc kể từ khi phát hiện | Theo `PL_C` phần B | Handbook Ch.12, [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|PL_H]] |
| KT-15 | Kế toán | Lập và nộp báo cáo tài chính năm | Nộp 25/03 | **90 ngày kể từ ngày kết thúc kỳ kế toán năm** | `PL_1` CC-KT-03;<br>Handbook Ch.07 |
| KT-16 | Kế toán | Quyết toán thuế TNDN năm | Nộp 25/03 | Theo `PL_C` phần C | Handbook Ch.14 |
| KT-17 | Kế toán | Quyết toán thuế TNCN năm | Nộp 25/03 | Theo `PL_C` phần C | Handbook Ch.11, Ch.14 |
| KT-19 | Kế toán | Xử lý sai sót và khai bổ sung | TL-KT xác định phạm vi và đề xuất phương án trong 02 ngày;<br>quyết có khai bổ sung hay không trong 02 ngày tiếp theo | Theo bản chất sai sót | Handbook Ch.15;<br>`PL_G` S29 |
| KT-20 | Kế toán | Giải trình văn bản của cơ quan thuế | TL-KT đọc và kết luận yêu cầu trong 01 ngày làm việc;<br>soạn và ký văn bản trong 03 ngày làm việc | **Theo thời hạn ghi trên chính văn bản của cơ quan** | `PL_G` S8;<br>Handbook Ch.16 |
| KT-21 | Kế toán | Hỗ trợ kỳ kiểm tra hoặc thanh tra thuế | Phản hồi NGAY trong ngày làm việc;<br>COO lập phương án tiếp đoàn trong 02 ngày làm việc;<br>khi đoàn yêu cầu hồ sơ tại trụ sở thì cung cấp trong 05 GIỜ LÀM VIỆC, mốc nội bộ đặt tại `PL_C` mục B dòng 11 | Theo quyết định về thời hạn kiểm tra.<br>Riêng việc cung cấp hồ sơ, tài liệu, hóa đơn, chứng từ, sổ kế toán khi đoàn yêu cầu tại trụ sở: **06 GIỜ LÀM VIỆC** kể từ khi nhận yêu cầu, chậm hơn là hành vi bị xử phạt | `PL_1` CC-KT-40, CC-KT-41;<br>`PL_G` S9;<br>Handbook Ch.16 |
| KT-25 | Kế toán | Đánh giá tác động khi có văn bản pháp luật mới | Mốc theo BỐN MỨC ƯU TIÊN, bản gốc tại [[21_Cap_nhat_van_ban_phap_luat\|OBK-SOP-21]] mục 6.2.3: Legal R&D hoàn thành đánh giá tác động theo mốc của mức ưu tiên đã phân, `TL-KT` rà danh sách khách bị ảnh hưởng trong cùng mốc đó.<br>Job này không đặt lại con số, chỉ dẫn chiếu | Theo ngày hiệu lực của văn bản | `PL_G` S31;<br>[[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3 |
| KT-30 | Kế toán | Nộp tiền thuê đất và thuế sử dụng đất | Nộp trong thời hạn ghi trên thông báo của cơ quan thuế | Lần đầu: 30 ngày kể từ ngày ban hành thông báo của cơ quan thuế;<br>các năm tiếp theo: hạn nộp hằng năm theo lựa chọn nộp một lần hoặc hai lần trong năm | Handbook Ch.13;<br>NĐ 252/2026 Đ.21, TT 89/2026 Đ.25 |
| LIC-02 | Licensing | Thành lập doanh nghiệp trong nước | Soạn hồ sơ 02 ngày làm việc kể từ khi đủ thông tin;<br>nộp trong 01 ngày làm việc sau khi khách ký | Cơ quan cấp trong **03 ngày làm việc** | `PL_1` CC-DN-01 tới CC-DN-09 |
| LIC-03 | Licensing | Thành lập doanh nghiệp có vốn nước ngoài | Soạn hồ sơ 05 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa | Cơ quan cấp trong **03 ngày làm việc** | `PL_1` CC-DN-06, CC-DT-40 tới CC-DT-47 |
| LIC-04 | Licensing | Đăng ký thay đổi nội dung GCN ĐKDN | Soạn hồ sơ 02 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi khách ký, và luôn trong hạn 10 ngày của khách | Khách phải đăng ký trong **10 ngày** kể từ ngày có thay đổi;<br>cơ quan cấp trong **03 ngày làm việc** | `PL_1` CC-DN-20, CC-DN-21 |
| LIC-05 | Licensing | Thông báo thay đổi nội dung ĐKDN | Như LIC-04 | Khách phải thông báo trong **10 ngày**;<br>cơ quan xử lý trong **03 ngày làm việc** | `PL_1` CC-DN-23, CC-DN-28 |
| LIC-06 | Licensing | Thay đổi người đại diện theo pháp luật | Soạn hồ sơ 02 ngày làm việc | Trong **10 ngày**;<br>cơ quan cấp trong **03 ngày làm việc** | `PL_1` CC-DN-26, CC-DN-14 |
| LIC-07 | Licensing | Thay đổi vốn điều lệ | Soạn hồ sơ 02 ngày làm việc | Trong **10 ngày**;<br>cơ quan cấp trong **03 ngày làm việc** | `PL_1` CC-DN-27 |
| LIC-08 | Licensing | Theo dõi hạn góp vốn điều lệ | Nhắc khách tại ngày thứ 60 và ngày thứ 80 kể từ ngày cấp GCN | Góp đủ trong **90 ngày**;<br>nếu thiếu thì đăng ký thay đổi vốn trong **30 ngày** kể từ ngày cuối cùng phải góp | `PL_1` CC-DN-40 tới CC-DN-45 |
| LIC-09 | Licensing | Tạm ngừng kinh doanh | Gửi khách bản để ký trước ngày tạm ngừng ít nhất 08 NGÀY LÀM VIỆC; NỘP trước ngày tạm ngừng ít nhất 06 NGÀY LÀM VIỆC.<br>Hai mốc này là mốc pháp định 03 ngày làm việc cộng hai mốc làm trước của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6, tức 05 ngày làm việc cho đầu ra cần khách ký và 03 ngày làm việc cho hồ sơ nộp cơ quan nhà nước.<br>Mốc cũ 05 ngày làm việc chỉ còn khoảng làm trước thật 02 ngày làm việc, dưới chuẩn NT-6 | Khách phải thông báo chậm nhất **03 ngày làm việc trước ngày tạm ngừng**;<br>mỗi lần không quá **12 tháng**;<br>tổng liên tiếp không quá **24 tháng**;<br>cơ quan cấp trong **01 ngày làm việc** | `PL_1` CC-DN-50 tới CC-DN-55 |
| LIC-10 | Licensing | Xác nhận kinh doanh trở lại sau tạm ngừng | Nhắc khách 10 ngày trước ngày kết thúc tạm ngừng;<br>nộp trong 02 ngày làm việc kể từ ngày kết thúc | **05 ngày làm việc** kể từ ngày kết thúc thời hạn tạm ngừng.<br>Không xác nhận thì có thể bị THU HỒI GCN ĐKDN và buộc giải thể | `PL_1` CC-DN-56 |
| LIC-11 | Licensing | Giải thể doanh nghiệp | Gửi nghị quyết trong 03 ngày làm việc kể từ khi khách thông qua;<br>chấm dứt hoạt động chi nhánh, VPĐD, địa điểm kinh doanh trước khi nộp hồ sơ giải thể | Gửi nghị quyết trong **07 ngày làm việc** kể từ ngày thông qua;<br>gửi hồ sơ giải thể trong **05 ngày làm việc** kể từ ngày thanh toán hết nợ;<br>mốc **180 ngày** | `PL_1` CC-DN-58 tới CC-DN-66 |
| LIC-12 | Licensing | Đăng ký chi nhánh, VPĐD, địa điểm kinh doanh | Soạn và nộp trong 03 ngày làm việc kể từ khi có quyết định | Gửi hồ sơ trong **10 ngày** kể từ ngày quyết định;<br>cơ quan cấp trong **03 ngày làm việc** | `PL_1` CC-DN-13 |
| LIC-13 | Licensing | Chấp thuận chủ trương đầu tư | Soạn hồ sơ 10 ngày làm việc kể từ khi đủ tài liệu | Tùy cấp thẩm quyền. Chủ tịch UBND cấp tỉnh: báo cáo thẩm định trong **14 ngày làm việc**, quyết định trong **03 ngày làm việc**.<br>Ban quản lý KCN: **17 ngày làm việc**.<br>Thủ tướng: thẩm định **20 ngày làm việc**, quyết định **05 ngày làm việc** | `PL_1` CC-DT-01 tới CC-DT-06 |
| LIC-14 | Licensing | Cấp GCN đăng ký đầu tư | Soạn hồ sơ 05 ngày làm việc kể từ khi đủ tài liệu | Thuộc diện chấp thuận chủ trương: **05 ngày làm việc** kể từ ngày có Quyết định.<br>Không thuộc diện: **10 ngày làm việc** kể từ ngày nhận hồ sơ hợp lệ | `PL_1` CC-DT-07 tới CC-DT-12 |
| LIC-15 | Licensing | Theo dõi mốc 12 tháng của tổ chức kinh tế do NĐTNN lập trước GCNĐKĐT | Nhắc khách tại tháng thứ 6, tháng thứ 9 và tháng thứ 11 | **12 tháng** kể từ ngày thành lập phải hoàn thành thủ tục cấp GCNĐKĐT.<br>Trước khi có GCNĐKĐT thì CẤM bổ sung ngành nghề khác và CẤM thực hiện dự án | `PL_1` CC-DT-13 |
| LIC-16 | Licensing | Đăng ký góp vốn, mua cổ phần của nhà đầu tư nước ngoài | Soạn hồ sơ 03 ngày làm việc;<br>phải nộp trước khi khách thay đổi thành viên, cổ đông | Cơ quan xử lý trong **10 ngày làm việc**.<br>Có đất tại khu vực ảnh hưởng quốc phòng an ninh thì vẫn **10 ngày làm việc** nhưng có bước lấy ý kiến | `PL_1` CC-DT-20 tới CC-DT-30 |
| LIC-18 | Licensing | Cấp giấy phép lao động cho người nước ngoài | Soạn hồ sơ 03 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa và dịch công chứng;<br>nộp sao cho đạt hạn dưới | Nộp **trong 60 ngày nhưng không ít hơn 10 ngày** tính đến ngày dự kiến làm việc;<br>cơ quan cấp trong **10 ngày làm việc** | `PL_1` CC-LIC-01 tới CC-LIC-06 |
| LIC-19 | Licensing | Gia hạn giấy phép lao động | Tạo Job tự động 60 ngày trước ngày hết hạn;<br>soạn hồ sơ 03 ngày làm việc | Nộp **trước ít nhất 10 ngày nhưng không quá 45 ngày** trước khi hết hạn `[CC-LIC-09]`;<br>cơ quan giải quyết trong **10 ngày làm việc**;<br>chỉ được gia hạn **01 lần**, tối đa **02 năm** | `PL_1` CC-LIC-09 |
| LIC-20 | Licensing | Cấp lại giấy phép lao động | Soạn hồ sơ 02 ngày làm việc | Cơ quan giải quyết trong **03 ngày làm việc**;<br>thời hạn giấy cấp lại bằng thời hạn giấy đã cấp trừ thời gian đã làm việc | `PL_1` CC-LIC-10 |
| LIC-21 | Licensing | Giấy xác nhận không thuộc diện cấp giấy phép lao động | Soạn hồ sơ 02 ngày làm việc | Nộp **trong 60 ngày và không ít hơn 10 ngày** trước ngày dự kiến làm việc; cơ quan cấp trong **05 ngày làm việc**.<br>Trường hợp chỉ phải thông báo: **trước ít nhất 03 ngày làm việc** | `PL_1` CC-LIC-12 |
| LIC-22 | Licensing | Điều phối đối tác thuê ngoài | Soát xét sản phẩm của đối tác trong 02 ngày làm việc kể từ khi nhận;<br>đối tác không được liên hệ trực tiếp khách | Theo nghiệp vụ | Nội bộ |
| LIC-25 | Licensing | Cấp Giấy phép kinh doanh bán lẻ hàng hóa cho DN FDI | Soạn hồ sơ 05 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi ký | Thẩm định và lấy ý kiến từ 21 ngày làm việc đến 28 ngày làm việc | Nghị định 09/2018/NĐ-CP Điều 5, Điều 9, Điều 12, Điều 13 (đến 17/10/2026); Nghị định 342/2026/NĐ-CP Điều 5, Điều 9, Điều 11, Điều 12 (từ 18/10/2026) |
| LIC-26 | Licensing | Cấp Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm | Hướng dẫn cơ sở và lập hồ sơ 03 - 05 ngày làm việc;<br>nộp trong 01 ngày làm việc | Thẩm định thực tế và cấp phép trong 20 ngày làm việc | Luật An toàn thực phẩm 2010 Điều 34, Điều 36; Nghị định 15/2018/NĐ-CP Điều 11, Điều 12 |
| LIC-27 | Licensing | Đăng ký hoạt động tổ chức khoa học và công nghệ | Soạn hồ sơ 04 ngày làm việc;<br>rà soát nhân sự 02 ngày làm việc;<br>nộp trong 01 ngày làm việc | Cấp trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ | Luật Khoa học và Công nghệ 2013 Điều 11; Nghị định 08/2014/NĐ-CP Điều 5, Điều 6 |
| LIC-28 | Licensing | Thông báo website thương mại điện tử bán hàng | Rà soát website theo CC-LIC-28-TMDT-01, soạn chính sách 02 ngày làm việc;<br>nộp trực tuyến 01 ngày làm việc | Xác minh pháp lý hoàn thành 30/09/2026 theo VB-122-2025-QH15, VB-248-2026-NĐ-CP, VB-117-2025-NĐ-CP;<br>mốc nộp đối chiếu bản gốc khi mở lại | Luật 122/2025/QH15 Điều 3, 5, 11;<br>NĐ 248/2026/NĐ-CP Điều 4, 5, 8, 10, 13, 14, 23;<br>NĐ 117/2025/NĐ-CP Điều 4, 5, 7;<br>xem CanCu CC-LIC-28-TMDT-01 đến 12, VanBan VB-122 đến VB-117 |
| LIC-29 | Licensing | Đăng ký website cung cấp dịch vụ TMĐT (Sàn giao dịch TMĐT) | Soạn Đề án và Quy chế 05 - 07 ngày làm việc;<br>nộp hồ sơ giấy trong 02 ngày làm việc sau duyệt điện tử | Thẩm định điện tử 07 ngày làm việc; cấp phép hồ sơ giấy 05 ngày làm việc | Nghị định 52/2013/NĐ-CP Điều 54, Điều 55; Nghị định 85/2021/NĐ-CP;<br>hiện đang chặn, xem mục 9 |
| LIC-30 | Licensing | Đăng ký xác lập quyền nhãn hiệu | Tra cứu sơ bộ 01 ngày làm việc;<br>soạn hồ sơ và nộp trong 24 giờ đến 48 giờ làm việc sau ký | Thẩm định hình thức 01 tháng; thẩm định nội dung 09 tháng (thực tế 12 - 16 tháng) | `PL_1` CC-LIC-30-MARKS-01 tới CC-LIC-30-MARKS-10 |
| LIC-31 | Licensing | Đăng ký quyền tác giả (phần mềm, tác phẩm viết, mỹ thuật) | Soạn hồ sơ và in đóng tập 03 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi ký | Cấp Giấy chứng nhận trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ | Luật Sở hữu trí tuệ 2005 (sửa đổi 2022); Nghị định 17/2023/NĐ-CP Điều 38;<br>hiện đang chặn, xem mục 9 |
| LD-03 | Lao Động | Rà soát thời hạn hợp đồng xác định thời hạn | Rà hằng tháng;<br>cảnh báo khách 45 ngày trước ngày hết hạn | Hết hạn mà vẫn làm việc thì phải ký hợp đồng mới trong **30 ngày**;<br>quá 30 ngày thì tự động thành hợp đồng không xác định thời hạn;<br>chỉ được ký thêm hợp đồng xác định thời hạn **01 lần** | `PL_1` CC-LD-02, CC-LD-03 |
| LD-04 | Lao Động | Đăng ký mã BHXH lần đầu cho người lao động | 02 ngày làm việc kể từ khi nhận bản scan hợp đồng đã ký | Kê khai và nộp hồ sơ tham gia BHXH bắt buộc trong **30 ngày** kể từ ngày người lao động thuộc đối tượng tham gia | `PL_1` CC-LD-140 |
| LD-05 | Lao Động | Báo tăng lao động | Đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10 | Theo CC-LD-140, mốc 30 ngày | `PL_1` CC-LD-140 |
| LD-06 | Lao Động | Báo giảm lao động | Đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10 | **KHÔNG TÌM THẤY mốc số ngày trong kho.** Xem cảnh báo mục 9.2 | `PL_1` mục 2.7 cảnh báo |
| LD-07 | Lao Động | Tính lương và lập bảng lương | Khách trả lương cuối tháng: tính ngày 25 tới 28, gửi ngày 29 tới 30.<br>Khách trả lương ngày 05: tính ngày 01 tới 03, gửi ngày 04 tới 05.<br>Khách trả lương ngày 10: tính ngày 06 tới 08, gửi ngày 09 tới 10.<br>Phiếu lương gửi trước ngày trả lương ít nhất 01 ngày | Không có mốc luật cho việc lập;<br>kỳ hạn trả lương theo thỏa thuận và `PL_1` CC-LD-66 | Nội bộ;<br>`PL_1` CC-LD-60 tới CC-LD-80 |
| LD-09 | Lao Động | Tổng hợp và thông báo số tiền BHXH phải đóng | Tổng hợp ngày 11 tới 14;<br>thông báo ngày 15 | Khách phải nộp tiền chậm nhất **ngày cuối cùng của tháng tiếp theo** | `PL_1` CC-LD-143 |
| LD-10 | Lao Động | Thông báo kinh phí công đoàn | Ngày 15 | **CHƯA XÁC MINH ĐƯỢC từ kho.** Xem cảnh báo mục 9.3 | `PL_1` mục 1.2 |
| LD-11 | Lao Động | Chốt sổ BHXH khi người lao động nghỉ việc | 10 ngày làm việc kể từ ngày chính thức nghỉ việc | **KHÔNG TÌM THẤY mốc số ngày trong kho.** Nghĩa vụ có tại CC-LD-30, không kèm số ngày | `PL_1` CC-LD-30, CC-LD-158, CC-LD-159 |
| LD-12 | Lao Động | Tính và bàn giao hồ sơ chấm dứt hợp đồng lao động | Gửi khách trước hạn thanh toán ít nhất 05 ngày làm việc | **Thanh toán đầy đủ các khoản trong 14 NGÀY LÀM VIỆC** kể từ ngày chấm dứt;<br>bốn trường hợp được kéo dài nhưng không quá **30 ngày** | `PL_1` CC-LD-28, CC-LD-29, CC-LD-40 tới CC-LD-49 |
| LD-13 | Lao Động | Đăng ký nội quy lao động | 02 ngày làm việc kể từ khi khách bàn giao nội quy | Bắt buộc với khách sử dụng **từ 10 người lao động trở lên**;<br>nộp hồ sơ trong **10 ngày** kể từ ngày ban hành;<br>cơ quan xử lý trong **07 ngày làm việc**;<br>nội quy có hiệu lực sau **15 ngày** kể từ ngày cơ quan nhận đủ hồ sơ | `PL_1` CC-LD-90 tới CC-LD-98 |
| LD-14 | Lao Động | Lập và cập nhật sổ quản lý lao động | Lập trong 10 ngày làm việc kể từ khi tiếp nhận khách;<br>cập nhật trong 02 ngày làm việc kể từ khi có biến động | Lập trong **30 ngày** kể từ ngày bắt đầu hoạt động;<br>cập nhật kể từ ngày người lao động bắt đầu làm việc | `PL_1` CC-LD-123 tới CC-LD-125 |
| LD-15 | Lao Động | Báo cáo tình hình sử dụng lao động 06 tháng đầu năm | Hoàn tất nội bộ và NỘP chậm nhất 03 NGÀY LÀM VIỆC TRƯỚC 04/06, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6.<br>không cam kết mốc 04/06, vì đó là ngày hợp pháp cuối cùng | **Trước ngày 05 tháng 6** | `PL_1` CC-LD-121 |
| LD-16 | Lao Động | Báo cáo tình hình sử dụng lao động cả năm | Hoàn tất nội bộ và NỘP chậm nhất 03 NGÀY LÀM VIỆC TRƯỚC 04/12, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6.<br>không cam kết mốc 04/12, vì đó là ngày hợp pháp cuối cùng | **Trước ngày 05 tháng 12** | `PL_1` CC-LD-121 |
| LD-17 | Lao Động | Thông báo biến động lao động bất thường | Trước ngày 10 của tháng sau kỳ phát sinh | Thực hiện theo hướng dẫn nghiệp vụ của Bộ phận Lao động | Mức |
| LD-18 | Lao Động | Thông báo làm thêm giờ trên 200 tới 300 giờ mỗi năm | Trong 07 ngày kể từ ngày khách bắt đầu tổ chức làm thêm vượt ngưỡng | **Chậm nhất SAU 15 NGÀY** kể từ ngày thực hiện | `PL_1` CC-LD-71 tới CC-LD-74 |
| LD-19 | Lao Động | Rà soát giới hạn giờ làm thêm | Rà hằng tháng khi tính lương;<br>cảnh báo khi đạt 80% mức tối đa tháng hoặc 80% mức tối đa năm | Mức tối đa: **40 giờ mỗi tháng;<br>200 giờ mỗi năm**, hoặc **300 giờ mỗi năm** với 5 nhóm ngành nghề | `PL_1` CC-LD-69 tới CC-LD-71 |
| LD-20 | Lao Động | Rà soát lương tối thiểu vùng | Trong 10 ngày làm việc kể từ ngày nghị định mới được ban hành | Mức hiện hành theo `293/2025/NĐ-CP` hiệu lực 01/01/2026.<br>Doanh nghiệp phải rà soát hợp đồng, thỏa ước và quy chế để điều chỉnh | `PL_1` CC-LD-60 tới CC-LD-63 |
| LD-21 | Lao Động | Hỗ trợ trình tự xử lý kỷ luật lao động | Gửi khách bộ hồ sơ trước ngày họp ít nhất 10 NGÀY LÀM VIỆC.<br>Đây là mốc làm trước thứ hai của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6, đầu ra cần khách ký trước khi gửi ra, tức 05 ngày làm việc làm trước cộng thêm mốc pháp định 05 ngày làm việc thông báo họp.<br>Mốc cũ 07 ngày làm việc chỉ còn khoảng làm trước thật 02 ngày làm việc, dưới chuẩn NT-6 | Thông báo họp **ít nhất 05 ngày làm việc** trước ngày họp.<br>Thời hiệu **06 tháng** kể từ ngày xảy ra hành vi, **12 tháng** nếu liên quan tài chính, tài sản, bí mật công nghệ, bí mật kinh doanh | `PL_1` CC-LD-99 tới CC-LD-108 |
| LD-22 | Lao Động | Rà soát khấu trừ lương | 01 ngày làm việc | Chỉ được khấu trừ để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị, tài sản.<br>**Mức tối đa 30%** tiền lương thực trả hằng tháng sau khi trích nộp BHXH bắt buộc, BHYT, BHTN và thuế TNCN | `PL_1` CC-LD-64, CC-LD-65 |
| LD-23 | Lao Động | Giải trình hồ sơ với cơ quan BHXH | Thông báo khách kèm danh mục hồ sơ cần trong 01 ngày làm việc;<br>gửi giải trình trong 02 ngày làm việc kể từ khi nhận đủ hồ sơ từ khách | **Theo thời hạn ghi trên chính văn bản của cơ quan** | Nội bộ |
| LD-24 | Lao Động | Cập nhật công thức và chính sách mới vào bảng tính lương | Ngày 16 tới 19 hằng tháng | Theo ngày hiệu lực văn bản | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3 |
| LD-27 | Lao Động | Quyết toán thuế TNCN năm và đăng ký người phụ thuộc | Hoàn tất nội bộ và NỘP chậm nhất 03 NGÀY LÀM VIỆC TRƯỚC 31/03 năm sau, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6.<br>không cam kết mốc 31/03, vì đó là ngày hợp pháp cuối cùng | Chậm nhất ngày 31 tháng 3 của năm dương lịch tiếp theo, theo Luật Quản lý thuế 108/2025/QH15 | Nội bộ; Job KT-09 của [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]]; Điều Khoản Dịch Vụ Kế toán & Thuế (PL-KT) mục 3.1 |
| LS-17 | Dịch vụ pháp lý | Hỗ trợ khách làm việc với cơ quan nhà nước trong một vụ việc pháp lý | Đọc và kết luận yêu cầu trong 01 NLV; gửi bản dự thảo cho `AM` chậm nhất **06 NLV** trước hạn ghi trên văn bản của cơ quan.<br>Sáu ngày là 05 ngày làm việc làm trước cho đầu ra cần khách ký theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6, cộng 0,5 NLV `AM` giữ theo mục 7.4, làm tròn lên | Theo thời hạn ghi trên chính văn bản của cơ quan | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-6, mục 5.5 |
| LS-18 | Dịch vụ pháp lý | Điều phối luật sư hoặc đối tác thuê ngoài | Soát xét sản phẩm của đối tác trong 02 NLV kể từ khi nhận. Đối tác không liên hệ trực tiếp khách | Theo hợp đồng với đối tác | [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]] mục 4 quy tắc đối tác thuê ngoài |
| LS-19 | Dịch vụ pháp lý | Bàn giao sản phẩm pháp lý qua `AM` | Gửi `AM` trước hạn gửi khách ít nhất 0,5 NLV | Theo mốc đã cam kết với khách | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 6.1, mục 7.4 |
| LS-21 | Dịch vụ pháp lý | Cập nhật bảng Job và hướng dẫn cấp 3 khi có văn bản pháp luật mới | Theo mốc cập nhật tài liệu của mức ưu tiên đã phân, đặt tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a. Job này không đặt lại con số | Ngày hiệu lực của văn bản | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3, mục 12.3a;<br>RD-07 |
| PM-01 | Đối tác | Thẩm định hồ sơ đối tác và trình TGĐ ký | Hợp đồng có hiệu lực từ ngày ký, thời hạn 12 tháng | Ngày hết hạn hợp đồng | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 1, 2, 3, 23;<br>[[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]] hàng "Ký hợp đồng giới thiệu khách hàng với đối tác" |
| PM-03 | Đối tác | Tra trùng và xác nhận hoặc từ chối đăng ký | 03 ngày làm việc kể từ Ngày Được Giới Thiệu.<br>Thư chứng minh tiếp xúc trước sau Ghi Nhận Mặc Nhiên: 30 ngày kể từ ngày Ghi Nhận Mặc Nhiên | Hết 03 ngày làm việc mà oBacker chưa phản hồi thì khách được Ghi Nhận Mặc Nhiên kể từ Ngày Được Giới Thiệu | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 7, 8, 9, 10 |
| PM-04 | Đối tác | Trình CEO quyết nguồn khi nhiều nguồn | `CEO` quyết và văn bản nêu lý do gửi đối tác trong 10 ngày làm việc kể từ ngày oBacker phát hiện trùng nguồn | Đối tác không đồng ý thì Các Bên áp Điều 15 bản mẫu: thương lượng trong 10 ngày làm việc, sau đó mỗi Bên có quyền khởi kiện | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 11;<br>[[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]] hàng "Quyết nguồn hưởng hoa hồng khi nhiều nguồn giới thiệu cùng một khách" |
| PM-06 | Đối tác | Theo dõi chuyển đổi và mở thời gian hưởng hoa hồng | Ký và thanh toán lần đầu trong 60 ngày kể từ Ngày Được Giới Thiệu;<br>thời gian hưởng hoa hồng 12 tháng kể từ ngày thanh toán lần đầu | Ngày kết thúc thời gian hưởng hoa hồng | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 10, 12, 13, 17 |
| PM-07 | Đối tác | Lập và gửi báo cáo hoa hồng tháng | Từ ngày 05 đến ngày 10 của tháng liền sau tháng phát sinh doanh thu | Ngày 10 của tháng liền sau tháng phát sinh doanh thu | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 14, 15, 16, 17, 18;<br>[[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]] |
| PM-08 | Đối tác | Xử lý phản hồi của đối tác về báo cáo | 07 ngày làm việc kể từ ngày đối tác nhận báo cáo, tính lại từ ngày oBacker cung cấp thông tin làm rõ.<br>Việc chi tại `NB-03` hoặc `NB-07` trong 05 ngày làm việc theo mốc tại [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 20 | Hạn chi 05 ngày làm việc | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 19, 20, 21 |
| PM-09 | Đối tác | Thông báo hoàn trả hoa hồng | 15 ngày kể từ ngày oBacker hoàn tiền cho khách. Thông báo gửi sau 15 ngày vẫn có hiệu lực khi khoản hoàn tiền phát sinh trong 12 tháng kể từ ngày oBacker trả số hoa hồng tương ứng | Đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 22 |
| PM-10 | Đối tác | Gia hạn hoặc trình CEO chấm dứt hợp đồng với đối tác | Thương lượng gia hạn trước ngày hết hạn ít nhất 30 ngày.<br>Đơn phương chấm dứt: văn bản gửi bên kia trước ít nhất 30 ngày.<br>Vi phạm Điều 7, thông tin sai sự thật, vi phạm Điều 2.4: oBacker có quyền chấm dứt ngay.<br>Vi phạm Điều 12, Điều 13, chậm trả tiền trên 30 ngày: 15 ngày khắc phục kể từ ngày nhận thông báo | Ngày hết hạn hợp đồng hoặc ngày chấm dứt ghi trong văn bản | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 2, 4, 23, 26, 27;<br>[[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]] hàng "Chấm dứt hợp đồng giới thiệu khách hàng với đối tác" |
| RD-04 | Legal R&D | Phân mức ưu tiên của văn bản mới | **01 NLV kể từ RD-01.** Phân mức là việc đọc tiêu chí, không phải việc tra bản gốc, nên Job này chạy TRƯỚC RD-02 và RD-03 để hai Job đó biết mình đi nhánh nhanh hay nhánh thường.<br>Bốn mức và tiêu chí theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a | Ngày hiệu lực của văn bản | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a |
| RD-05 | Legal R&D | Lập bản đánh giá tác động | Theo mốc của mức ưu tiên đã phân, đặt tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a, đếm từ ngày ghi nhận tại RD-01.<br>Job này không đặt lại con số.<br>Xem mục 2.1 về cách chuỗi bốn Job trước Job này vừa mốc đó | Ngày hiệu lực của văn bản | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a |
| RD-07 | Legal R&D | Bàn giao yêu cầu sửa cho `TL` bộ phận và theo dõi tới khi đóng | Giao trong 01 NLV kể từ khi xong RD-05.<br>Theo dõi tới khi `TL` bộ phận đóng Job sửa của mình, tức `KT-25`, `LD-24` hoặc `LS-21`; mốc sửa theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3a cột cuối.<br>Bộ phận Giấy phép chưa có Job tương đương, nên với bộ phận đó thì mở một Job rời và ghi lý do trên Job này | Ngày hiệu lực của văn bản | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3 |
| RD-15 | Legal R&D | Rà soát giả thiết và mã chưa kết luận | Mỗi 06 tháng, hoặc ngay khi có văn bản mới ảnh hưởng một giả thiết | Hạn chót cứng của từng giả thiết | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.2 |
| RD-21 | Legal R&D | Chuẩn bị nội dung thông báo sự cố dữ liệu cá nhân | Bản dự thảo trong 04 gLV kể từ khi Tech Lead báo.<br>Thời hạn thông báo theo pháp luật hiện chưa xác minh được, xem [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 4 | Chưa xác minh được, chưa xác minh được | [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 4 |

Tổng: 83 Job có thời hạn bên ngoài.

---

## 3. LẦN SINH GẦN NHẤT

| Ngày | Số Job | Ghi chú |
| --- | --- | --- |
| 06/10/2026 | 223 | Sinh tự động |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.1 | Sinh lại bảng tra SLA, đổi dẫn chiếu bước của Job LIC-24 từ B10 thành B5 |
