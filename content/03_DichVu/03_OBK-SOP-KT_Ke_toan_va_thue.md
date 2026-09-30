---
title: "OBK-SOP-KT KẾ TOÁN VÀ THUẾ"
code: "OBK-SOP-KT"
type: "sop"
folder: "03_DichVu"
level: "Cấp 2, quy trình bộ phận"
version: "R.1.0.1"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-00 Chuẩn vận hành dịch vụ"
law_as_of: "Pháp luật có hiệu lực tại ngày 25/08/2026"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - OBK-SOP-KT
tags:
  - loai/sop
  - cap/2
  - nghiep-vu/nghia-vu-ke-toan
  - nghiep-vu/thanh-tra-kiem-tra-thue
  - nghiep-vu/muc-toi-da-luat-dinh
---
# OBK-SOP-KT KẾ TOÁN VÀ THUẾ

## SOP cấp 2, áp dụng cho bộ phận Kế toán dịch vụ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-KT |
| Cấp tài liệu | Cấp 2, SOP bộ phận |
| Phiên bản | R.1.0.1, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] Chuẩn vận hành dịch vụ |
| Hướng dẫn cấp 3 | `04_Handbook_KeToan/`, 22 chương và 7 phụ lục |

> [!note] BẮT BUỘC ĐỌC TRƯỚC
> Bộ phận này là bộ phận duy nhất đã có hướng dẫn cấp 3 đầy đủ. Nhưng Handbook Kế toán hiện đang chứa cả ba cấp: một số chương của Handbook là nội dung cấp 1 và cấp 2. Tài liệu này HÚT phần cấp 2 lên và để lại phần cấp 3. Bảng chuyển cấp đầy đủ, chỉ đích danh chương nào đi đâu và chương nào phải sửa, nằm tại `PL_3` mục 3. Trước khi dùng Handbook, đọc bảng đó.

---

## 1. MỤC TIÊU VÀ RANH GIỚI

### 1.1. Mục tiêu

1. Khách hàng hoàn tất đúng, đủ và đúng hạn mọi nghĩa vụ kế toán và thuế, không phát sinh tiền phạt và tiền chậm nộp.
2. Sổ sách của khách phản ánh đúng bản chất giao dịch và chịu được một cuộc thanh tra thuế, không phải chỉ chịu được một kỳ kê khai.
3. Chất lượng đầu ra không phụ thuộc vào việc ai làm; mọi kết quả truy được về chứng từ gốc.

### 1.2. Trong phạm vi

| Nhóm | Đầu việc |
| --- | --- |
| Chứng từ và sổ sách | Thu thập, kiểm tra, số hóa, lưu trữ chứng từ;<br>hạch toán;<br>khóa sổ và đối chiếu kỳ |
| Thuế định kỳ | Thuế GTGT;<br>tạm nộp thuế TNDN quý;<br>khấu trừ thuế TNCN;<br>thuế nhà thầu nước ngoài (FCT);<br>hóa đơn điện tử |
| Báo cáo năm | Báo cáo tài chính năm;<br>quyết toán thuế TNDN;<br>quyết toán thuế TNCN |
| Xử lý sai sót | Khai bổ sung, điều chỉnh sai sót kỳ trước, xử lý hóa đơn sai |
| Làm việc với cơ quan thuế | Giải trình văn bản;<br>hỗ trợ kỳ kiểm tra và thanh tra thuế |
| Tư vấn trong gói | Trả lời câu hỏi nghiệp vụ kế toán và thuế trong giới hạn gói dịch vụ |

### 1.3. Ngoài phạm vi

| Nội dung | Bộ phận phụ trách |
| --- | --- |
| Giấy phép lao động, đăng ký doanh nghiệp, đăng ký đầu tư, thay đổi ĐKKD | Licensing |
| Hợp đồng lao động, bảng chấm công, BHXH, báo cáo lao động, đăng ký nội quy | Lao Động |
| Tranh chấp thuế phải lập luận pháp lý hoặc phải ra văn bản có ký cho khách | Bộ phận Dịch vụ pháp lý, xem [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]]. Việc khởi kiện tại tòa án thì chuyển đối tác thuê ngoài theo LS-18 |
| Nghiệp vụ chưa có chuẩn;<br>kết luận sẽ dùng cho mọi khách về sau;<br>cấu trúc giao dịch chưa có tiền lệ | Legal R&D, xem [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]]. Quy tắc phân ba lớp tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 5.5 |
| Đàm phán phạm vi, phí, gia hạn, khiếu nại | AM |
| Kế toán NỘI BỘ của chính oBacker | Xem [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]], hoàn toàn khác bộ này |

> [!bug] LỖI THƯỜNG GẶP
> Ranh giới với Lao Động. Bảng lương là điểm giao. Lao Động TÍNH lương và làm BHXH; Kế toán HẠCH TOÁN chi phí lương và KHẤU TRỪ, QUYẾT TOÁN thuế TNCN. Một bảng lương sai làm sai cả hai phía. Quy tắc: bảng lương do Lao Động chốt là ĐẦU VÀO BẮT BUỘC của Job kế toán tháng; Kế toán không tự sửa số trên bảng lương, phát hiện sai thì trả về Lao Động và ghi vào Job.

---

## 2. DANH MỤC JOB

Nguồn mốc nội bộ: [[PL_C_Lich_tuan_thu_nam|OBK-SOP-PL-C]] và `PL_G` mục 10.3. Tài liệu này không chép lại lịch 12 tháng; tài liệu này chỉ đặt Job và trỏ tới lịch. Lý do: quy tắc một con số một chỗ tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 2.

Ký hiệu gói: G1 cơ bản, G2 tiêu chuẩn, G3 đầy đủ, G4 theo vụ việc. Định nghĩa gói tại `PL_G` mục 2.2 và mục 9.

%%JOBTABLE:KT%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn theo pháp luật | Căn cứ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| KT-01 | Tiếp nhận khách hàng mới | AM bàn giao sau thanh toán | Hồ sơ pháp lý khách;<br>hiện trạng sổ sách;<br>quyền truy cập hệ thống thuế | Biên bản hiện trạng 14 mục có chữ ký khách;<br>kết luận chế độ kế toán và kỳ khai thuế áp dụng | Bảy ngày làm việc đầu và ba mươi ngày làm việc đầu theo `PL_G` mục 4 | Không có | Handbook Ch.03, Ch.08 |
| KT-02 | Thu thập và số hóa chứng từ kỳ | Theo lịch tháng | Chứng từ gốc từ khách | Bộ chứng từ đã số hóa, đặt tên đúng quy ước, thư mục chờ bổ sung TRỐNG | Theo kỳ tháng `PL_G` mục 6.1 | Không có | Handbook Ch.04 |
| KT-03 | Hạch toán nghiệp vụ kỳ | Chứng từ đã đủ | Bộ chứng từ kỳ;<br>bảng lương do Lao Động chốt | Sổ kế toán kỳ | Theo kỳ tháng | Không có | Handbook Ch.05 |
| KT-04 | Khóa sổ và đối chiếu kỳ | Hạch toán xong | Sổ kỳ;<br>sao kê ngân hàng;<br>bảng kê hóa đơn | Bảng cân đối số phát sinh;<br>bảng kiểm khóa sổ đã ký;<br>bảng chênh lệch;<br>bảng đối chiếu ba chiều;<br>bảng đối chiếu ngân hàng | Ngày 18 hằng tháng | Không có | Handbook Ch.06;<br>`PL_G` S16 |
| KT-05 | Bàn giao số liệu kỳ cho khách | Khóa sổ xong | Bộ sổ kỳ | Biên bản bàn giao số liệu kèm danh mục tồn đọng, kể cả khi trống | Ngày 18 hằng tháng | Không có | `PL_G` S17, N12 |
| KT-06 | Bộ báo cáo quản trị tháng, gói G3 | Khóa sổ xong | Sổ kỳ đã khóa | Bộ báo cáo 5 phần: kết quả theo mảng, dòng tiền, tuổi nợ phải thu, tuổi nợ phải trả, vòng quay tồn kho | Ngày 18 hằng tháng | Không có | `PL_G` S18, N13 |
| KT-07 | Khai thuế GTGT kỳ | Theo lịch | Sổ kỳ đã khóa;<br>bảng đối chiếu ba chiều;<br>xác nhận của khách | Tờ khai đã nộp;<br>Thông báo tiếp nhận;<br>giấy nộp tiền | Ký gửi ngày 13 | Theo `PL_C` phần B | Handbook Ch.09, Ch.13 |
| KT-08 | Tạm nộp thuế TNDN quý | Theo lịch quý | Sổ quý;<br>ước tính kết quả kinh doanh | Giấy nộp tiền | Nộp tiền ngày 20 của tháng đầu quý sau | Theo `PL_C` phần B | Handbook Ch.10;<br>`PL_G` S13 |
| KT-09 | Khai thuế TNCN khấu trừ theo quý | Theo lịch quý | Bảng lương các kỳ trong quý;<br>bảng tính thuế TNCN | Tờ khai đã nộp;<br>Thông báo tiếp nhận;<br>giấy nộp tiền | Ký gửi ngày 23 của tháng đầu quý sau | Theo `PL_C` phần B | Handbook Ch.11;<br>`PL_G` S12 |
| KT-10 | Thông báo số thuế phải nộp cho khách | Sau khi chốt tờ khai | Tờ khai đã chốt | Thông báo số thuế và hạn nộp gửi khách qua AM | Chậm nhất 01 ngày làm việc trước mốc nội bộ nộp tiền | Không có | `PL_G` S14 |
| KT-11 | Quản lý hóa đơn điện tử | Liên tục | Dữ liệu hóa đơn | Bảng kê hóa đơn đã đối chiếu;<br>hồ sơ xử lý hóa đơn sai sót | Theo kỳ tháng;<br>hóa đơn sai sót xử lý trong 01 ngày làm việc kể từ khi phát hiện | Theo `PL_C` phần B | Handbook Ch.12, [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|PL_H]] |
| KT-12 | Bảng đối chiếu công nợ gửi khách xác nhận | Theo quý | Sổ công nợ | Bảng đối chiếu đã gửi và đã được khách xác nhận | Trong 05 ngày làm việc đầu tháng đầu quý sau | Không có | `PL_G` S20 |
| KT-13 | Báo cáo soát xét trước quyết toán, gói G3 | Theo năm | Sổ 6 tháng đầu năm | Báo cáo soát xét | 31/07 | Không có | `PL_G` S21 |
| KT-14 | Xin xác nhận số liệu quyết toán từ khách | Kỳ quyết toán thuế năm | Bộ số liệu năm đã khóa | Bộ hồ sơ xin xác nhận đã gửi khách | 24/03 | Không có | `PL_G` S22 |
| KT-15 | Lập và nộp báo cáo tài chính năm | Kỳ quyết toán thuế năm | Sổ năm đã khóa;<br>xác nhận của khách | Báo cáo tình hình tài chính và Báo cáo kết quả hoạt động đã nộp;<br>Thông báo tiếp nhận | Nộp 25/03 | **90 ngày kể từ ngày kết thúc kỳ kế toán năm** | `PL_1` [[CC-KT-03 Nộp báo cáo tài chính năm, 90 ngày kể từ ngày kết thúc kỳ kế toán năm\|CC-KT-03]];<br>Handbook Ch.07 |
| KT-16 | Quyết toán thuế TNDN năm | Kỳ quyết toán thuế năm | Sổ năm đã khóa;<br>xác nhận của khách | Tờ khai quyết toán đã nộp;<br>Thông báo tiếp nhận;<br>giấy nộp tiền | Nộp 25/03 | Theo `PL_C` phần C | Handbook Ch.14 |
| KT-17 | Quyết toán thuế TNCN năm | Kỳ quyết toán thuế năm | Bảng lương cả năm;<br>hồ sơ người phụ thuộc | Tờ khai quyết toán đã nộp;<br>Thông báo tiếp nhận | Nộp 25/03 | Theo `PL_C` phần C | Handbook Ch.11, Ch.14 |
| KT-18 | Bàn giao bộ hồ sơ báo cáo tài chính cho khách | Sau khi nộp | Bộ hồ sơ đã nộp | Bộ hồ sơ bàn giao | Trong 05 ngày làm việc sau khi nộp | Không có | `PL_G` S24 |
| KT-19 | Xử lý sai sót và khai bổ sung | Phát hiện sai sót | Hồ sơ kỳ có sai sót | Hồ sơ khai bổ sung đã nộp;<br>bản đánh giá tác động | TL-KT xác định phạm vi và đề xuất phương án trong 02 ngày;<br>quyết có khai bổ sung hay không trong 02 ngày tiếp theo | Theo bản chất sai sót | Handbook Ch.15;<br>`PL_G` S29 |
| KT-20 | Giải trình văn bản của cơ quan thuế | Cơ quan thuế gửi văn bản | Văn bản của cơ quan;<br>hồ sơ liên quan | Văn bản giải trình đã ký và đã gửi | TL-KT đọc và kết luận yêu cầu trong 01 ngày làm việc;<br>soạn và ký văn bản trong 03 ngày làm việc | **Theo thời hạn ghi trên chính văn bản của cơ quan** | `PL_G` S8;<br>Handbook Ch.16 |
| KT-21 | Hỗ trợ kỳ kiểm tra hoặc thanh tra thuế | Có quyết định kiểm tra | Quyết định kiểm tra;<br>hồ sơ các kỳ liên quan | Phương án tiếp đoàn;<br>bộ hồ sơ xuất trình;<br>biên bản làm việc | Phản hồi NGAY trong ngày làm việc;<br>COO lập phương án tiếp đoàn trong 02 ngày làm việc;<br>khi đoàn yêu cầu hồ sơ tại trụ sở thì cung cấp trong 05 GIỜ LÀM VIỆC, mốc nội bộ đặt tại `PL_C` mục B dòng 11 | Theo quyết định về thời hạn kiểm tra.<br>Riêng việc cung cấp hồ sơ, tài liệu, hóa đơn, chứng từ, sổ kế toán khi đoàn yêu cầu tại trụ sở: **06 GIỜ LÀM VIỆC** kể từ khi nhận yêu cầu, chậm hơn là hành vi bị xử phạt | `PL_1` [[CC-KT-40 Cung cấp hồ sơ, tài liệu, hóa đơn, chứng từ, sổ kế toán liên quan đến nghĩa vụ thuế trong 06 GIỜ LÀM VIỆC kể từ khi nhận được yêu cầu của cơ\|CC-KT-40]], [[CC-KT-41 Mức phạt của khoản chứa hành vi trên, cùng khung với bốn hành vi khác của cùng khoản, phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng. Bốn hành vi\|CC-KT-41]];<br>`PL_G` S9;<br>Handbook Ch.16 |
| KT-22 | Trả lời câu hỏi nghiệp vụ đã đối chiếu bản gốc | Khách hỏi qua AM | Câu hỏi đã ghi trên hệ thống | Câu trả lời có mã căn cứ | T3 là 01 ngày làm việc | Không có | `PL_G` S1 |
| KT-23 | Trả lời câu hỏi nghiệp vụ chưa đối chiếu bản gốc | Khách hỏi qua AM | Câu hỏi đã ghi trên hệ thống | Câu trả lời sau khi đã nâng lên mức đã đối chiếu bản gốc | T3 là 03 ngày làm việc để TL-KT đối chiếu bản gốc.<br>NHÁNH KÉO DÀI, ba điều kiện đủ theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.4a: điều kiện vào nhánh là TL-KT đã tra mà không kết luận được; mốc của nhánh là mốc của Job RD-10; và AM PHẢI cam kết lại T2 với khách trong 04 giờ làm việc kể từ khi mở Job RD-10 | Không có | `PL_G` S2 |
| KT-24 | Xử lý câu hỏi chạm nội dung chưa xác minh được | Khách hỏi qua AM | Câu hỏi đã ghi trên hệ thống | Không trả lời nội dung. Thư hẹn mốc gửi khách; Job RD-12 đã mở cho Legal R&D | AM gửi thư hẹn mốc trong 04 giờ làm việc, đúng hạn T2 cho nội dung chưa xác minh được tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.2.4;<br>TL-KT DỪNG và mở Job RD-12 trong cùng ngày làm việc, đồng thời thông tin COO | Không có | `PL_G` S3;<br>[[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] NT-1 |
| KT-25 | Đánh giá tác động khi có văn bản pháp luật mới | Legal R&D thông báo | Văn bản mới đã nhập kho | Bản đánh giá tác động;<br>danh sách khách bị ảnh hưởng | Mốc theo BỐN MỨC ƯU TIÊN, bản gốc tại [[21_Cap_nhat_van_ban_phap_luat\|OBK-SOP-21]] mục 6.2.3: Legal R&D hoàn thành đánh giá tác động theo mốc của mức ưu tiên đã phân, `TL-KT` rà danh sách khách bị ảnh hưởng trong cùng mốc đó.<br>Job này không đặt lại con số, chỉ dẫn chiếu | Theo ngày hiệu lực của văn bản | `PL_G` S31;<br>[[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 12.3 |
| KT-26 | Rà soát đầu năm cho cả danh mục khách | Đầu năm | Danh mục khách | Kết luận phân loại kỳ khai thuế, thuế suất và ưu đãi, chế độ kế toán, danh mục hồ sơ cho từng khách | Theo `PL_C` phần D | Không có | `PL_C` phần D |
| KT-27 | Chốt các khoản có mức khống chế trước 31/12 | Cuối năm | Sổ tới thời điểm rà | Bản rà soát các khoản chạm mức tối đa: trang phục, phúc lợi, bảo hiểm hưu trí bổ sung, ăn giữa ca, quỹ lương dự phòng, khấu hao xe từ 9 chỗ trở xuống | Trước 31/12 | Không có | `PL_1` [[CC-KT-11 Chi trang phục bằng tiền, 05 triệu đồng-người-năm\|CC-KT-11]] tới [[CC-KT-16 Ô tô chở người từ 9 chỗ trở xuống, khấu hao tương ứng phần nguyên giá vượt 1,6 tỷ đồng-xe không được trừ\|CC-KT-16]];<br>`PL_C` phần E.2 |
| KT-28 | Bàn giao khi kết thúc dịch vụ | AM báo kết thúc | Toàn bộ hồ sơ khách | Bộ bàn giao đầy đủ;<br>biên bản bàn giao | Chuẩn bị trong 05 ngày làm việc kể từ khi AM báo.<br>Đây là mốc ĐẾM TIẾN từ ngày AM báo, đo thời gian phản ứng của bộ phận.<br>Handbook Chương 20 mục 6.3 có thêm một mốc ĐẾM LÙI, bộ hồ sơ bàn giao phải sẵn sàng chậm nhất 10 ngày làm việc trước ngày kết thúc, đo mức sẵn sàng trước ngày khách rời.<br>Hai mốc có hai điểm neo khác nhau và không thay nhau; khi AM báo muộn thì hai mốc chồng nhau, áp mốc NÀO ĐẾN TRƯỚC và ghi lý do trên Job | Không có | Handbook Ch.20 |
| KT-29 | Thu hồi quyền truy cập | Sau bàn giao hoặc nhân sự nghỉ việc | Danh sách quyền truy cập | Bản ghi đã thu hồi | Sau bàn giao khách: 24 giờ.<br>Nhân sự nghỉ việc: chậm nhất trong ngày làm việc cuối; 04 giờ nếu nghỉ đột ngột hoặc chấm dứt do vi phạm | Không có | `PL_G` S35, S36 |

%%/JOBTABLE:KT%%

---

## 3. VAI TRÒ VÀ RACI

Ký hiệu theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 5.1. Bảng chuyển đổi từ ký hiệu cũ của Handbook tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 5.2.

### 3.1. Ba vai trò của bộ phận

| Ký hiệu | Vai trò | Làm gì | Ký hiệu cũ trong Handbook |
| --- | --- | --- | --- |
| **CV-KT** | Chuyên viên kế toán dịch vụ | Người LÀM. Vận hành nghiệp vụ hằng ngày trên hồ sơ KHÁCH: nhập liệu, lưu chứng từ, hạch toán đơn giản, lập hồ sơ.<br>không tiếp xúc khách | KTV, ký hiệu cũ |
| **TL-KT** | Team Lead bộ phận Kế toán dịch vụ | Chốt kỹ thuật; lớp kiểm soát chất lượng thứ hai; quyết định cách xử lý nghiệp vụ cần xét đoán; ký hồ sơ gửi cơ quan thuế thay khách khi được ủy quyền.<br>Tại 02/09/2026 do người giữ vai trò `KTT` kế toán trưởng NỘI BỘ kiêm nhiệm | KTT |
| **COO** | Giám đốc vận hành, trực tiếp phụ trách Phòng Dịch vụ | Điều hành, định biên, phân bổ khách, trả lời câu hỏi khả thi khi AM và TL-KT xung đột theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 8.2.1 | TBP |

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> OBacker không đứng tên trên báo cáo tài chính của khách trong trường hợp mặc định. Ngoại lệ phải do CEO duyệt từng khách một, bằng văn bản.

> [!danger] RỦI RO BỊ XỬ PHẠT
> Đọc trước khi phân công. Người giữ vai trò `TL-KT` tại 02/09/2026 đồng thời là `KTT`, kế toán trưởng NỘI BỘ của oBacker. Nghĩa là một người vừa chốt kỹ thuật trên sổ sách của KHÁCH vừa phụ trách sổ sách CỦA CHÍNH OBACKER, và đồng thời giữ một chức danh có tính quản lý. Ba điều cấm của Luật Kế toán có thể chạm tới cách bố trí này. Kết luận và ràng buộc phải giữ tại `01_ToChuc/OBK-QCTC-02` mục 19.1 và 19.2.

> [!bug] LỖI THƯỜNG GẶP
> Ba thứ đang bị gọi chung là "kế toán trưởng". Phân biệt rõ trước khi ký bất cứ gì.
>
> Một, `TL-KT` là Team Lead bộ phận Kế toán dịch vụ, người chốt kỹ thuật trên hồ sơ KHÁCH của oBacker.
>
> Hai, `KTT` là kế toán trưởng NỘI BỘ, phụ trách sổ sách CỦA OBACKER; đây là vai trò của mảng nội bộ, xem [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo|OBK-SOP-NB-00]].
>
> Ba, kế toán trưởng CỦA KHÁCH HÀNG, người đứng tên trên báo cáo tài chính của khách; mặc định không phải người của oBacker, ngoại lệ do CEO duyệt từng khách một bằng văn bản.
>
> Ba vai trò này mang ba trách nhiệm pháp lý khác nhau và không thay nhau được. Tại 02/09/2026, vai trò một và vai trò hai do cùng một người giữ; vai trò ba mặc định không thuộc oBacker.

### 3.2. RACI theo 10 bước chuẩn

| Bước | CV-KT | TL-KT | AM | LEG | COO |
| --- | --- | --- | --- | --- | --- |
| B1 Tiếp nhận yêu cầu | I | A | R | N/A | I |
| B2 Lưu trữ đầu vào | R | A | C | N/A | N/A |
| B3 Phân loại Job | R | A | I | N/A | N/A |
| B4 Kiểm tra điều kiện và khả thi | R | A | I | C | C (câu hỏi khả thi khi xung đột với AM) |
| B5 Tổng hợp dữ liệu | R | A | C | N/A | N/A |
| B6 Thực hiện nghiệp vụ | R | A, R (phần cần xét đoán) | I | C | N/A |
| B7 Kiểm soát chất lượng | R (lớp 1) | A, R (lớp 2), và ký hồ sơ gửi cơ quan thuế | I | N/A | N/A |
| B8 Bàn giao qua AM | R | A | R | N/A | I |
| B9 Theo dõi tới khi có kết quả | R | A | R | N/A | I |
| B10 Đóng Job và cập nhật | R | A | C | N/A | I |

---

## 4. ĐIỂM KIỂM SOÁT BẮT BUỘC

| Mã | Chốt | Trước bước nào | Ai kiểm | Không đạt thì làm gì |
| --- | --- | --- | --- | --- |
| KS-KT-01 | Bảng kiểm khóa sổ 100% dòng có kết luận Đạt, Không đạt kèm phương án, hoặc Không áp dụng.<br>không dòng nào để trống. Có chữ ký CV-KT và TL-KT kèm ngày | Trước khi lập tờ khai | TL-KT | Không lập tờ khai. Quay lại B6 |
| KS-KT-02 | Bảng cân đối số phát sinh cân, tồn kho và quỹ tiền mặt không âm | Trước khi khóa sổ | TL-KT | Tìm nguyên nhân. Cấm dùng bút toán cân bằng để xóa chênh lệch |
| KS-KT-03 | Bảng đối chiếu ba chiều hóa đơn, doanh thu sổ, tờ khai GTGT khớp, hoặc mọi chênh lệch có giải thích kèm chứng từ | Trước khi ký gửi tờ khai GTGT | TL-KT | Không ký gửi |
| KS-KT-04 | Có văn bản xác nhận số liệu của khách trước khi ký gửi | Trước khi ký gửi mọi hồ sơ thuế | TL-KT | Không ký gửi. AM chịu trách nhiệm lấy xác nhận |
| KS-KT-05 | Số thuế trên tờ khai khớp số dư tài khoản thuế trên sổ | Trước khi ký gửi | TL-KT | Không ký gửi |
| KS-KT-06 | Đã tải và lưu Thông báo tiếp nhận hồ sơ thuế điện tử | Trước khi đóng Job | CV-KT lập, TL-KT kiểm | Job chưa đóng được. Nộp mà không có Thông báo tiếp nhận là chưa nộp |
| KS-KT-07 | Đã đạt làm trước 03 ngày làm việc trước thời hạn theo pháp luật | Trước ngày nộp | TL-KT | Báo COO. Ghi ngoại lệ kèm lý do |
| KS-KT-08 | Mọi con số luật trong đầu ra đều truy được về một mã `[CC-...]` mức đã đối chiếu bản gốc trong `PL_1` | Trước khi gửi khách | TL-KT | Trả lại. Chuyển sang KT-23 hoặc KT-24 |
| KS-KT-09 | Bảng lương dùng để hạch toán là bản đã được Lao Động chốt, không phải bản nháp | Trước khi hạch toán chi phí lương | CV-KT | Yêu cầu Lao Động chốt. Không tự dùng bản nháp |
| KS-KT-10 | TL-KT xác nhận việc ký hồ sơ không vi phạm ba điều cấm Luật Kế toán và không vượt phạm vi hành nghề | Trước khi ký | TL-KT | TL-KT từ chối ký. COO báo CEO NGAY trong cùng ngày |

---

## 5. LỖI THƯỜNG GẶP

> [!bug] LỖI THƯỜNG GẶP
> Dùng bút toán cân bằng để xóa chênh lệch. Dấu hiệu: bảng chênh lệch sạch một cách bất thường vào cuối kỳ. Hậu quả: chênh lệch không biến mất, chênh lệch chỉ chuyển sang một tài khoản khác và sẽ nổ ra trong kỳ thanh tra. Cách xử lý: chênh lệch chưa giải thích được thì GIỮ LẠI CHỜ XỬ LÝ và ghi vào Nhật ký chênh lệch, không xóa. Xem KS-KT-02.

> [!bug] LỖI THƯỜNG GẶP
> Nộp xong nhưng không lưu Thông báo tiếp nhận. Dấu hiệu: Job đóng, không có tệp Thông báo tiếp nhận. Hậu quả: khi cơ quan thuế nói chưa nhận được hồ sơ thì oBacker không có bằng chứng. Cách xử lý: KS-KT-06 là điểm kiểm soát, không phải khuyến nghị.

> [!bug] LỖI THƯỜNG GẶP
> Trích Luật khi đáng lẽ phải trích Nghị định. Ba điều kiện của khoản chi được trừ có ký hiệu ĐIỂM KHÁC NHAU giữa Luật Thuế TNDN và Nghị định. Cách trình bày "ba điều kiện" là cấu trúc của NGHỊ ĐỊNH, không phải của Luật. Trích Luật cho điều kiện hóa đơn thì phải là điểm c, không phải điểm b. Cách xử lý: chọn một văn bản trích xuyên suốt. Xem `PL_1` mục 0.

> [!bug] LỖI THƯỜNG GẶP
> Trích văn bản hợp nhất mà bỏ năm. `18/VBHN-BTC` có hai văn bản khác nhau; `15/VBHN-BTC` cũng vậy. Cách xử lý: luôn ghi kèm ngày ban hành. Xem `PL_1` mục 6.2.

> [!bug] LỖI THƯỜNG GẶP
> Quên nhóm sáng lập viên khi rà thù lao không được trừ. `19/VBHN-BTC` ngày 04/06/2026 Đ.10 k.8 đ.d phủ cả SÁNG LẬP VIÊN và thành viên hội đồng thành viên, không chỉ thành viên HĐQT. Xem `PL_1` [[CC-KT-20 `19-VBHN-BTC` ngày 04-06-2026 Đ.10 k.8 đ.d phủ CẢ SÁNG LẬP VIÊN và thành viên hội đồng thành viên|CC-KT-20]].

> [!bug] LỖI THƯỜNG GẶP
> Dùng tên báo cáo cũ. Bản hợp nhất Luật Kế toán đổi tên thành "Báo cáo tình hình tài chính" và "Báo cáo kết quả hoạt động". Dùng tên cũ trên hồ sơ gửi cơ quan là dấu hiệu tài liệu chưa cập nhật. Xem `PL_1` [[CC-KT-05 Bản hợp nhất Luật Kế toán ĐỔI TÊN báo cáo, Báo cáo tình hình tài chính và Báo cáo kết quả hoạt động. KHÔNG còn Bảng cân đối kế toán và Báo|CC-KT-05]].

> [!bug] LỖI THƯỜNG GẶP
> Chứng từ bên mua nộp tiền mặt vào tài khoản bên bán. Đây không được tính là chứng từ thanh toán không dùng tiền mặt. Rất nhiều khách làm cách này và tưởng là hợp lệ. Xem `PL_1` [[CC-KT-10 Ngưỡng thanh toán không dùng tiền mặt, 05 triệu đồng ĐÃ GỒM VAT|CC-KT-10]].

---

## 6. CHỈ SỐ ĐO LƯỜNG

Ngoài tám chỉ số chung tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 11.1, bộ phận này đo thêm sáu chỉ số của `PL_G` mục 10.6. Hai chỉ số dưới đây KHÁC NHAU VỀ BẢN CHẤT và không được gộp:

| Mã | Chỉ số | Mục tiêu | Ai chịu |
| --- | --- | --- | --- |
| SLA-03 | **Tỷ lệ nộp đúng hạn đo theo THỜI HẠN THEO PHÁP LUẬT.** Chỉ số gốc, không thay thế được | 100%. Không có ngưỡng nào thấp hơn được chấp nhận | TL-KT;<br>COO nếu nguyên nhân là nguồn lực |
| SLA-04 | **Tỷ lệ giao đúng MỐC NỘI BỘ.** Chỉ số cảnh báo sớm | Từ 95% | TL-KT |

Trượt SLA-04 chưa gây hậu quả pháp lý nhưng đã dùng hết khoảng làm trước, nên việc trượt SLA-04 là tín hiệu báo trước cho SLA-03. SLA-03 không đạt 100% là SỰ CỐ, xử lý theo Handbook Chương 15 và Chương 18, không xử lý theo bảng chỉ số.

---

## 7. GIỚI HẠN GÓI DỊCH VỤ

Bảng giới hạn số lượng theo gói nằm tại `PL_G` mục 10.5, không chép lại ở đây.

**Quy tắc khi vượt giới hạn.** AM chuyển thành yêu cầu G4 và báo giá. Không tự làm thêm miễn phí, và cũng không từ chối thẳng. Người quyết là COO trong hạn mức, CEO nếu vượt.

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> SLA trong `PL_G` mục 10.2 và 10.3 là CHUẨN NỘI BỘ. Chỉ những dòng đã đưa vào hợp đồng hoặc phụ lục dịch vụ mới là nghĩa vụ với khách. AM tuyệt đối không cam kết miệng một mốc không có trong hợp đồng.

---

## 8. QUAN HỆ VỚI CẤP 3

Handbook Kế toán 22 chương và 7 phụ lục là hướng dẫn cấp 3 của bộ phận này. Ba việc phải làm để Handbook về đúng cấp:

1. Sáu chương của Handbook mang nội dung cấp 1 và cấp 2 phải được hạ xuống thành dẫn chiếu. Danh sách và cách sửa tại `PL_3` mục 3.
2. Bộ vai trò CV-KT, TL-KT, AM, TBP, CEO của Handbook phải đổi sang bộ vai trò thống nhất. Bảng chuyển đổi tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 5.2.
3. `PL_G` mục 10.2 cột "Phản hồi đầu tiên" là 04 giờ làm việc, nhưng đó là đồng hồ T2 (cam kết mốc trả lời), không phải T1 (xác nhận đã nhận). Phải sửa tên cột theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 7.2.2, nếu không thì tên cột đó mâu thuẫn với Channel SLA.

Cho tới khi ba việc này xong, khi Handbook và tài liệu này khác nhau thì **lấy tài liệu này**.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
