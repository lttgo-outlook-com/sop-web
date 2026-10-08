---
title: "BẢNG KIỂM KẾ TOÁN VÀ THUẾ"
code: "BK-03"
type: "sop"
folder: "03_BangKiem"
level: "Bảng kiểm"
version: "V3.0.0"
release: "R.26.10.08.1"
status: "đang áp dụng"
draft_date: "08/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-MSR Quy tắc sổ cái"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases: [BK-03]
tags:
  - loai/sop
---
# BẢNG KIỂM KẾ TOÁN VÀ THUẾ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BK-03 |
| Cấp tài liệu | Bảng kiểm |
| Phiên bản | V3.0.0, đang áp dụng |
| Phát hành | R.26.10.08.1 |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO |
| Người soát | CEO |
| Người phê duyệt | CEO |
| Văn bản cấp trên | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] Quy tắc sổ cái |

## 1. PHẠM VI

Bảng kiểm này áp dụng cho các Job KT-01 đến KT-30 của bộ phận Kế toán và Thuế. Vai trò thực hiện Job ghi từng sự kiện vào sổ cái theo OBK-MSR Quy tắc sổ cái. Mốc, SLA và thời hạn theo pháp luật nằm tại mục 2.

Chữ ký trên hồ sơ thuế của khách: tờ khai và văn bản giải trình là hồ sơ của khách, ký bằng chữ ký điện tử của khách do người đại diện theo pháp luật hoặc người được khách ủy quyền ký (Thông tư 89/2026/TT-BTC Đ.10 k.2 đ.a). TL-KT ký bằng chữ ký điện tử của oBacker chỉ khi đủ hai điều kiện: oBacker đủ tiêu chuẩn kinh doanh dịch vụ làm thủ tục về thuế (Nghị định 252/2026/NĐ-CP Đ.64), và oBacker có hợp đồng dịch vụ làm thủ tục về thuế với khách (Thông tư 89/2026/TT-BTC Đ.10 k.2 đ.b). Thiếu một trong hai điều kiện thì oBacker soạn hồ sơ, khách ký. Mọi trường hợp đều cần văn bản xác nhận số liệu của khách trước khi ký.

## 2. DANH MỤC JOB

%%JOBTABLE:KT%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn theo pháp luật | Căn cứ | Soát bắt buộc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KT-01 | Tiếp nhận khách hàng mới | AM bàn giao sau thanh toán | Hồ sơ pháp lý khách;<br>hiện trạng sổ sách;<br>quyền truy cập hệ thống thuế | Biên bản hiện trạng 14 mục có chữ ký khách;<br>kết luận chế độ kế toán và kỳ khai thuế áp dụng | Bảy ngày làm việc đầu và ba mươi ngày làm việc đầu kể từ khi AM bàn giao; nghiệm thu onboarding khi đủ 14 tiêu chí | Không có | Handbook Ch.03, Ch.08 | Không |
| KT-02 | Thu thập và số hóa chứng từ kỳ | Theo lịch tháng | Chứng từ gốc từ khách | Bộ chứng từ đã số hóa, đặt tên đúng quy ước, thư mục chờ bổ sung trống | Theo kỳ tháng | Không có | Handbook Ch.04 | Không |
| KT-03 | Hạch toán nghiệp vụ kỳ | Chứng từ đã đủ | Bộ chứng từ kỳ;<br>bảng lương do Bộ phận Lao động và Tiền lương chốt | Sổ kế toán kỳ | Theo kỳ tháng | Không có | Handbook Ch.05 | Không |
| KT-04 | Khóa sổ và đối chiếu kỳ | Hạch toán xong | Sổ kỳ;<br>sao kê ngân hàng;<br>bảng kê hóa đơn | Bảng cân đối số phát sinh;<br>bảng kiểm khóa sổ đã ký;<br>bảng chênh lệch;<br>bảng đối chiếu ba chiều;<br>bảng đối chiếu ngân hàng | Ngày 18 hằng tháng | Không có | Handbook Ch.06 | Không |
| KT-05 | Bàn giao số liệu kỳ cho khách | Khóa sổ xong | Bộ sổ kỳ | Biên bản bàn giao số liệu kèm danh mục tồn đọng, kể cả khi trống | Ngày 18 hằng tháng | Không có | Không có | Không |
| KT-06 | Bộ báo cáo quản trị tháng, gói G3 | Khóa sổ xong | Sổ kỳ đã khóa | Bộ báo cáo 5 phần: kết quả theo mảng, dòng tiền, tuổi nợ phải thu, tuổi nợ phải trả, vòng quay tồn kho | Ngày 18 hằng tháng | Không có | Không có | Không |
| KT-07 | Khai thuế GTGT kỳ | Theo lịch | Sổ kỳ đã khóa;<br>bảng đối chiếu ba chiều;<br>xác nhận của khách | Tờ khai đã nộp;<br>Thông báo tiếp nhận;<br>giấy nộp tiền | Nháp tờ khai ngày 13; ký gửi ngày 19-20, sau khi KT-04 khóa sổ ngày 18 | Ngày thứ 20 của tháng tiếp theo với thuế khai theo tháng; ngày cuối cùng của tháng đầu của quý tiếp theo với thuế khai theo quý, theo Nghị định 252/2026/NĐ-CP Đ.10 k.2 và k.3 | Handbook Ch.09, Ch.13 | Không |
| KT-08 | Tạm nộp thuế TNDN quý | Theo lịch quý | Sổ quý;<br>ước tính kết quả kinh doanh | Giấy nộp tiền | Nộp tiền ngày 20 của tháng đầu quý sau | Ngày cuối cùng của tháng đầu của quý tiếp theo quý phát sinh nghĩa vụ thuế, theo Nghị định 252/2026/NĐ-CP Đ.24 k.2 | Handbook Ch.10 | Không |
| KT-10 | Thông báo số thuế phải nộp cho khách | Sau khi chốt tờ khai | Tờ khai đã chốt | Thông báo số thuế và hạn nộp gửi khách qua AM | Chậm nhất 01 ngày làm việc trước mốc nội bộ nộp tiền | Không có | Không có | Không |
| KT-11 | Quản lý hóa đơn điện tử | Liên tục | Dữ liệu hóa đơn | Bảng kê hóa đơn đã đối chiếu;<br>hồ sơ xử lý hóa đơn sai sót | Theo kỳ tháng;<br>hóa đơn sai sót xử lý trong 01 ngày làm việc kể từ khi phát hiện | Không có | Handbook Ch.12, [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|PL_H]] | Không |
| KT-12 | Bảng đối chiếu công nợ gửi khách xác nhận | Theo quý | Sổ công nợ | Bảng đối chiếu đã gửi và đã được khách xác nhận | Trong 05 ngày làm việc đầu tháng đầu quý sau | Không có | Không có | Không |
| KT-13 | Báo cáo soát xét trước quyết toán, gói G3 | Theo năm | Sổ 6 tháng đầu năm | Báo cáo soát xét | 31/07 | Không có | Không có | Không |
| KT-14 | Xin xác nhận số liệu quyết toán từ khách | Kỳ quyết toán thuế năm | Bộ số liệu năm đã khóa | Bộ hồ sơ xin xác nhận đã gửi khách | 24/03 | Không có | Không có | Không |
| KT-15 | Lập và nộp báo cáo tài chính năm | Kỳ quyết toán thuế năm | Sổ năm đã khóa;<br>xác nhận của khách | Báo cáo tình hình tài chính và Báo cáo kết quả hoạt động đã nộp;<br>Thông báo tiếp nhận | Nộp 25/03 | **90 ngày kể từ ngày kết thúc kỳ kế toán năm** | CC-KT-03;<br>Handbook Ch.07 | Không |
| KT-16 | Quyết toán thuế TNDN năm | Kỳ quyết toán thuế năm | Sổ năm đã khóa;<br>xác nhận của khách | Tờ khai quyết toán đã nộp;<br>Thông báo tiếp nhận;<br>giấy nộp tiền | Nộp 25/03 | Ngày cuối cùng của tháng thứ 03 kể từ ngày kết thúc kỳ quyết toán thuế, theo Nghị định 252/2026/NĐ-CP Đ.10 k.5 đ.a | Handbook Ch.14 | Không |
| KT-18 | Bàn giao bộ hồ sơ báo cáo tài chính cho khách | Sau khi nộp | Bộ hồ sơ đã nộp | Bộ hồ sơ bàn giao | Trong 05 ngày làm việc sau khi nộp | Không có | Không có | Không |
| KT-19 | Xử lý sai sót và khai bổ sung | Phát hiện sai sót | Hồ sơ kỳ có sai sót | Hồ sơ khai bổ sung đã nộp;<br>bản đánh giá tác động | TL-KT xác định phạm vi và đề xuất phương án trong 02 ngày;<br>COO quyết có khai bổ sung hay không trong 02 ngày tiếp theo; CEO quyết khi có tiền phạt hoặc rủi ro pháp lý | Theo bản chất sai sót | Handbook Ch.15;<br>[[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] | Không |
| KT-20 | Giải trình văn bản của cơ quan thuế | Cơ quan thuế gửi văn bản | Văn bản của cơ quan;<br>hồ sơ liên quan | Văn bản giải trình đã ký và đã gửi | TL-KT đọc và kết luận yêu cầu trong 01 ngày làm việc;<br>soạn văn bản và trình ký trong 03 ngày làm việc | **Theo thời hạn ghi trên chính văn bản của cơ quan** | Handbook Ch.16 | Không |
| KT-21 | Hỗ trợ kỳ kiểm tra hoặc thanh tra thuế | Có quyết định kiểm tra | Quyết định kiểm tra;<br>hồ sơ các kỳ liên quan | Phương án tiếp đoàn;<br>bộ hồ sơ xuất trình;<br>biên bản làm việc | Phản hồi ngay trong ngày làm việc;<br>COO lập phương án tiếp đoàn trong 02 ngày làm việc;<br>khi đoàn yêu cầu hồ sơ tại trụ sở thì cung cấp trong 05 giờ làm việc | Theo quyết định về thời hạn kiểm tra.<br>Riêng việc cung cấp hồ sơ, tài liệu, hóa đơn, chứng từ, sổ kế toán khi đoàn yêu cầu tại trụ sở: **06 giờ làm việc** kể từ khi nhận yêu cầu, chậm hơn là hành vi bị xử phạt | CC-KT-40, CC-KT-41;<br>Handbook Ch.16 | Không |
| KT-22 | Trả lời câu hỏi nghiệp vụ đã đối chiếu bản gốc | Khách hỏi qua AM | Câu hỏi đã ghi trên hệ thống | Câu trả lời có mã căn cứ | T3 là 01 ngày làm việc | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.2a | Không |
| KT-23 | Trả lời câu hỏi nghiệp vụ chưa đối chiếu bản gốc | Khách hỏi qua AM | Câu hỏi đã ghi trên hệ thống | Câu trả lời sau khi đã nâng lên mức đã đối chiếu bản gốc | T3 là 03 ngày làm việc để TL-KT đối chiếu bản gốc.<br>Trường hợp kéo dài, ba điều kiện đủ: điều kiện áp dụng trường hợp kéo dài là TL-KT đã tra mà không kết luận được; mốc của Job RD-10 thay cho mốc T3 trong trường hợp kéo dài; và AM phải cam kết lại T2 với khách trong 04 giờ làm việc kể từ khi mở Job RD-10 | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.2a | Không |
| KT-24 | Xử lý câu hỏi chạm nội dung chưa xác minh được | Khách hỏi qua AM | Câu hỏi đã ghi trên hệ thống | Không trả lời nội dung. Thư hẹn mốc gửi khách; Job RD-12 đã mở cho Legal R&D | AM gửi thư hẹn mốc trong 04 giờ làm việc, đúng hạn T2 cho nội dung chưa xác minh được;<br>TL-KT dừng và mở Job RD-12 trong cùng ngày làm việc, đồng thời thông tin COO | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| KT-25 | Đánh giá tác động khi có văn bản pháp luật mới | Legal R&D thông báo | Văn bản mới đã nhập kho | Bản đánh giá tác động;<br>danh sách khách bị ảnh hưởng | Mốc theo mức ưu tiên tại [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5a: Legal R&D hoàn thành đánh giá tác động theo mốc của mức ưu tiên đã phân, `TL-KT` rà danh sách khách bị ảnh hưởng trong cùng mốc đó | Theo ngày hiệu lực của văn bản | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5a | Không |
| KT-26 | Rà soát đầu năm cho cả danh mục khách | Đầu năm | Danh mục khách | Kết luận phân loại kỳ khai thuế, thuế suất và ưu đãi, chế độ kế toán, danh mục hồ sơ cho từng khách | Trong tháng 01, hoàn tất trước 31/01 | Không có | Nội bộ | Không |
| KT-27 | Chốt các khoản có mức khống chế trước 31/12 | Cuối năm | Sổ tới thời điểm rà | Bản rà soát các khoản chạm mức tối đa: trang phục, phúc lợi, bảo hiểm hưu trí bổ sung, ăn giữa ca, quỹ lương dự phòng, khấu hao xe từ 9 chỗ trở xuống | Trước 31/12 | Không có | CC-KT-11 tới CC-KT-16 | Không |
| KT-28 | Bàn giao khi kết thúc dịch vụ | AM báo kết thúc | Toàn bộ hồ sơ khách | Bộ bàn giao đầy đủ;<br>biên bản bàn giao | Chuẩn bị trong 05 ngày làm việc kể từ khi AM báo.<br>Handbook Chương 20 mục 6.3 có thêm một mốc đếm lùi, bộ hồ sơ bàn giao phải sẵn sàng chậm nhất 10 ngày làm việc trước ngày kết thúc.<br>Hai mốc tính từ hai ngày khác nhau và không thay nhau; khi AM báo muộn thì hai mốc chồng nhau, áp mốc đến trước và ghi lý do trên Job | Không có | Handbook Ch.20 | Không |
| KT-29 | Thu hồi quyền truy cập | Sau bàn giao hoặc nhân sự nghỉ việc | Danh sách quyền truy cập | Bản ghi đã thu hồi | Sau bàn giao khách: 24 giờ.<br>Nhân sự nghỉ việc: chậm nhất trong ngày làm việc cuối; 04 giờ nếu nghỉ đột ngột hoặc chấm dứt do vi phạm | Không có | Không có | Không |
| KT-30 | Nộp tiền thuê đất và thuế sử dụng đất | Cơ quan thuế gửi thông báo nộp tiền thuê đất | Thông báo nộp tiền thuê đất của cơ quan thuế | Biên nộp tiền thuê đất, thuế sử dụng đất | Nộp trong thời hạn ghi trên thông báo của cơ quan thuế | Lần đầu: 30 ngày kể từ ngày ban hành thông báo của cơ quan thuế;<br>các năm tiếp theo: hạn nộp hằng năm theo lựa chọn nộp một lần hoặc hai lần trong năm | Handbook Ch.13;<br>NĐ 252/2026 Đ.21, TT 89/2026 Đ.25 | Không |

%%/JOBTABLE:KT%%

## 3. BẢNG KIỂM THEO JOB

### KT-01. Tiếp nhận khách hàng mới

1. AM bàn giao hồ sơ khách sau thanh toán; TL-KT ghi sự kiện Nhận vào sổ cái.
2. COO phân công CV-KT phụ trách chính và CV-KT dự phòng, rồi ghi sự kiện Chuyển vào sổ cái.
3. CV-KT khởi tạo hồ sơ khách, thu nhận hồ sơ pháp lý và hồ sơ thuế cơ bản do AM thu từ khách, rồi lập biên bản giao nhận hồ sơ đầu vào.
4. CV-KT kiểm tra chữ ký số, tài khoản khai thuế và tài khoản hóa đơn điện tử của khách. Khi khách chưa cung cấp, CV-KT báo TL-KT trong ngày, AM thông báo khách và CV-KT ghi sự kiện Chờ vào sổ cái.
5. TL-KT ghi sự kiện Quyết định vào sổ cái về chế độ kế toán, kỳ khai thuế và phương pháp tính thuế, theo đề xuất của CV-KT.
6. Với khách đang hoạt động, CV-KT và TL-KT kiểm tra hiện trạng sổ sách theo bảng 25 điểm; CV-KT lập biên bản hiện trạng 14 mục; AM lấy chữ ký của khách và ghi sự kiện Gửi khách vào sổ cái.
7. CV-KT chỉ bắt đầu hạch toán và nộp hồ sơ khi có hợp đồng đã ký, quyết định nhận khách của CEO và biên bản hiện trạng có chữ ký khách.
8. TL-KT ghi sự kiện Xong vào sổ cái khi đủ 14 tiêu chí nghiệm thu onboarding.

Hướng dẫn chi tiết: [[03_Onboarding_khach_hang|Chương 03 Onboarding khách hàng]]; [[08_Che_do_ke_toan_ap_dung|Chương 08 Chế độ kế toán áp dụng]].

### KT-02. Thu thập và số hóa chứng từ kỳ

1. CV-KT mở kỳ kế toán mới, kiểm tra kỳ trước đã khóa sổ và ghi sự kiện Nhận vào sổ cái.
2. CV-KT kết xuất dữ liệu hóa đơn điện tử đầu ra và đầu vào, không chờ khách gửi.
3. AM gửi khách thư nhắc nộp chứng từ kèm danh mục còn thiếu của kỳ cũ và ghi sự kiện Gửi khách vào sổ cái.
4. CV-KT nhận chứng từ gốc từ khách, kiểm đếm, số hóa, phân loại, đặt tên tệp theo quy ước và lập biên bản giao nhận chứng từ.
5. CV-KT đối chiếu dữ liệu hóa đơn với chứng từ khách gửi và lập danh mục chứng từ còn thiếu.
6. AM gửi khách danh mục chứng từ còn thiếu kèm hạn phản hồi và ghi sự kiện Chờ vào sổ cái; khi khách bổ sung, AM ghi sự kiện Hết chờ vào sổ cái.
7. CV-KT chỉ ghi sổ khi có chứng từ. CV-KT không tạo chứng từ thay khách. CV-KT không điền số liệu ước tính vào sổ.
8. CV-KT làm trống thư mục chờ bổ sung của kỳ và ghi sự kiện Xong vào sổ cái.

Hướng dẫn chi tiết: [[04_Quan_ly_chung_tu|Chương 04 Quản lý chứng từ]].

### KT-03. Hạch toán nghiệp vụ kỳ

1. CV-KT nhận bộ chứng từ kỳ đã đủ và ghi sự kiện Nhận vào sổ cái.
2. CV-KT dùng bảng lương do Bộ phận Lao động và Tiền lương chốt. Khi bảng lương sai, CV-KT trả về Bộ phận Lao động và Tiền lương và ghi sự kiện Chuyển vào sổ cái. CV-KT không tự sửa số trên bảng lương.
3. CV-KT nhập liệu và định khoản 08 phần hành với bút toán đã có mẫu.
4. TL-KT định khoản bút toán cần xét đoán và thực hiện các bút toán cuối kỳ theo gói dịch vụ của khách.
5. CV-KT hạch toán số thuế phải nộp và đã nộp, lưu tờ khai và giấy nộp tiền.
6. Khi chứng từ chưa đủ, CV-KT dừng ghi sổ phần đó và ghi sự kiện Chờ vào sổ cái.
7. CV-KT ghi sự kiện Xong vào sổ cái khi sổ kỳ có tổng phát sinh nợ bằng tổng phát sinh có.

Hướng dẫn chi tiết: [[05_Quy_trinh_ke_toan_thang|Chương 05 Quy trình kế toán tháng]].

### KT-04. Khóa sổ và đối chiếu kỳ

1. CV-KT nhận sổ kỳ khi hạch toán xong và ghi sự kiện Nhận vào sổ cái.
2. CV-KT đối chiếu bốn nhóm: tiền, công nợ, kho, thuế. Với gói G2 và G3, CV-KT đối chiếu số dư ngân hàng với sao kê từng tài khoản.
3. CV-KT đối chiếu hóa đơn, doanh thu sổ và tờ khai GTGT, lập bảng đối chiếu ba chiều, rồi đối chiếu bảng kê hóa đơn.
4. CV-KT lập bảng cân đối số phát sinh: tổng phát sinh nợ bằng tổng phát sinh có; tồn kho và quỹ tiền mặt không âm.
5. CV-KT lập bảng chênh lệch và phân loại từng chênh lệch. Chênh lệch chưa giải thích được thì CV-KT giữ lại chờ xử lý và ghi vào Nhật ký chênh lệch. CV-KT không dùng bút toán cân bằng để xóa chênh lệch. TL-KT xử lý chênh lệch cần xét đoán.
6. CV-KT điền bảng kiểm khóa sổ: mỗi dòng có kết luận Đạt, Không đạt kèm phương án, hoặc Không áp dụng. CV-KT và TL-KT ký bảng kiểm khóa sổ kèm ngày.
7. CV-KT khóa kỳ trên sổ kế toán và ghi sự kiện Xong vào sổ cái.

Hướng dẫn chi tiết: [[06_Khoa_so_va_doi_chieu|Chương 06 Khóa sổ và đối chiếu]].

### KT-05. Bàn giao số liệu kỳ cho khách

1. CV-KT nhận bộ sổ kỳ đã khóa và ghi sự kiện Nhận vào sổ cái.
2. CV-KT lập biên bản bàn giao số liệu kỳ kèm danh mục tồn đọng. Khi không có tồn đọng, CV-KT ghi "không có" vào danh mục.
3. AM bàn giao số liệu kỳ cho khách và ghi sự kiện Gửi khách vào sổ cái.
4. AM lưu biên bản có xác nhận đã nhận của khách.
5. Với chứng từ thiếu quá hạn, AM chuyển lên TL-KT và COO, đồng thời ghi sự kiện Chuyển vào sổ cái; TL-KT và COO cập nhật hồ sơ rủi ro khách hàng.
6. AM ghi sự kiện Xong vào sổ cái.

### KT-06. Bộ báo cáo quản trị tháng, gói G3

1. CV-KT nhận sổ kỳ đã khóa và ghi sự kiện Nhận vào sổ cái.
2. CV-KT lập bộ báo cáo 5 phần theo bộ mẫu chuẩn: kết quả theo mảng, dòng tiền, tuổi nợ phải thu, tuổi nợ phải trả, vòng quay tồn kho.
3. CV-KT đối chiếu số liệu của bộ báo cáo với sổ đã khóa.
4. AM gửi bộ báo cáo cho khách và ghi sự kiện Gửi khách vào sổ cái.
5. AM ghi sự kiện Xong vào sổ cái.

### KT-07. Khai thuế GTGT kỳ

1. CV-KT nhận việc theo lịch và ghi sự kiện Nhận vào sổ cái.
2. CV-KT lập bảng đối chiếu ba chiều và nháp tờ khai GTGT mẫu 01/GTGT, rồi đối chiếu số thuế trên tờ khai với số dư tài khoản thuế trên sổ.
3. AM gửi khách nháp tờ khai kèm số thuế phải nộp, ghi sự kiện Gửi khách vào sổ cái và ghi sự kiện Chờ vào sổ cái.
4. AM nhận văn bản xác nhận số liệu của khách và ghi sự kiện Hết chờ vào sổ cái. Xác nhận bằng lời không thay được văn bản.
5. TL-KT ký gửi tờ khai. CV-KT nộp tờ khai và tải Thông báo tiếp nhận hồ sơ thuế điện tử; CV-KT ghi sự kiện Nộp cơ quan vào sổ cái.
6. CV-KT lưu Thông báo tiếp nhận và giấy nộp tiền. Hồ sơ chưa có Thông báo tiếp nhận là hồ sơ chưa nộp.
7. CV-KT ghi sự kiện Xong vào sổ cái.

Điểm kiểm soát: Tờ khai ký theo quy tắc chữ ký trên hồ sơ thuế của khách tại mục 1.

Thời hạn: theo pháp luật, xem cột Thời hạn theo pháp luật của KT-07 tại mục 2.

Hướng dẫn chi tiết: [[09_Thue_GTGT|Chương 09 Thuế GTGT]]; [[13_Lich_tuan_thu_va_quy_trinh_khai_nop|Chương 13 Lịch tuân thủ và quy trình khai nộp]].

### KT-08. Tạm nộp thuế TNDN quý

1. CV-KT nhận việc theo lịch quý và ghi sự kiện Nhận vào sổ cái.
2. TL-KT ước tính kết quả kinh doanh lũy kế trước mỗi kỳ tạm nộp, không chờ tới quyết toán.
3. CV-KT tính số thuế TNDN tạm nộp quý từ sổ quý và bản ước tính, rồi kiểm tra tỷ lệ tối thiểu của tổng số tạm nộp bốn quý theo [[10_Thue_TNDN|Chương 10 Thuế TNDN]].
4. AM thông báo khách số tạm nộp và mốc nội bộ nộp tiền, rồi ghi sự kiện Gửi khách vào sổ cái.
5. CV-KT nộp tiền tạm nộp, lưu giấy nộp tiền và ghi sự kiện Nộp cơ quan vào sổ cái. Tạm nộp thuế TNDN quý không có tờ khai.
6. CV-KT ghi sự kiện Xong vào sổ cái.

Thời hạn: theo pháp luật, xem cột Thời hạn theo pháp luật của KT-08 tại mục 2.

### KT-10. Thông báo số thuế phải nộp cho khách

1. CV-KT nhận tờ khai đã chốt và ghi sự kiện Nhận vào sổ cái.
2. CV-KT lập thông báo số thuế phải nộp và hạn nộp từ tờ khai đã chốt.
3. AM gửi thông báo cho khách theo mốc tại mục 2 và ghi sự kiện Gửi khách vào sổ cái.
4. AM ghi sự kiện Xong vào sổ cái.

### KT-11. Quản lý hóa đơn điện tử

1. CV-KT kết xuất dữ liệu hóa đơn điện tử đầu ra và đầu vào theo kỳ tháng, rồi ghi sự kiện Nhận vào sổ cái.
2. CV-KT điền bảng kiểm hóa đơn đầu ra F.1 và đầu vào G.1, mỗi bảng có kết quả đạt hoặc không đạt, rồi lập bảng kê hóa đơn đã đối chiếu.
3. Khi phát hiện hóa đơn sai sót, CV-KT báo TL-KT. TL-KT ghi sự kiện Quyết định vào sổ cái về điều chỉnh hay thay thế; CV-KT lập hồ sơ xử lý theo quyết định đó. CV-KT không tự lập hóa đơn mới.
4. Khi sai sót ảnh hưởng số thuế, TL-KT ghi sự kiện Phát sinh việc vào sổ cái để mở KT-19.
5. Với khách mới đăng ký sử dụng hóa đơn điện tử, CV-KT lập tờ khai Mẫu 01/ĐKTĐ-HĐĐT và ký bằng chữ ký số của khách; AM lập biên bản bàn giao chữ ký số có chữ ký khách. Khách phát hành hóa đơn thương mại sau khi có Thông báo chấp nhận Mẫu 01/TB-ĐKTĐ.
6. Bộ phận Kế toán giữ thiết bị chữ ký số của khách tại tủ bảo mật do AD-KT quản lý; bộ phận cần dùng ký nhận và ký trả.
7. CV-KT lưu bảng kê và hồ sơ xử lý, rồi ghi sự kiện Xong vào sổ cái.

Thời hạn: theo pháp luật, xem cột Thời hạn theo pháp luật của KT-11 tại mục 2.

Hướng dẫn chi tiết: [[12_Hoa_don_dien_tu|Chương 12 Hóa đơn điện tử]]; [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu|Phụ lục H Chữ ký số và hóa đơn điện tử]].

### KT-12. Bảng đối chiếu công nợ gửi khách xác nhận

1. CV-KT lập bảng đối chiếu từ sổ công nợ và ghi sự kiện Nhận vào sổ cái.
2. AM gửi bảng đối chiếu cho khách, ghi sự kiện Gửi khách vào sổ cái và ghi sự kiện Chờ vào sổ cái.
3. AM thu hồi bảng đối chiếu có xác nhận của khách và ghi sự kiện Hết chờ vào sổ cái.
4. CV-KT lưu bảng đối chiếu đã xác nhận và ghi sự kiện Xong vào sổ cái.

### KT-13. Báo cáo soát xét trước quyết toán, gói G3

1. TL-KT nhận sổ 6 tháng đầu năm và ghi sự kiện Nhận vào sổ cái.
2. TL-KT soát xét sổ 6 tháng đầu năm để phát hiện sớm rủi ro và lập báo cáo soát xét.
3. Khi phát hiện sai sót, TL-KT ghi sự kiện Phát sinh việc vào sổ cái để mở KT-19.
4. TL-KT ghi sự kiện Xong vào sổ cái.

### KT-14. Xin xác nhận số liệu quyết toán từ khách

1. CV-KT nhận bộ số liệu năm đã khóa và ghi sự kiện Nhận vào sổ cái.
2. CV-KT chuẩn bị bộ hồ sơ xin xác nhận gồm 07 tài liệu.
3. AM gửi bộ hồ sơ cho khách với hạn phản hồi tối thiểu 05 ngày làm việc trước mốc nội bộ, ghi sự kiện Gửi khách vào sổ cái và ghi sự kiện Chờ vào sổ cái.
4. Khách ký văn bản xác nhận số liệu gồm 06 nội dung; AM nhận văn bản và ghi sự kiện Hết chờ vào sổ cái.
5. TL-KT chỉ ký gửi hồ sơ quyết toán sau khi có văn bản xác nhận. Xác nhận bằng lời không thay được văn bản.
6. AM ghi sự kiện Xong vào sổ cái.

Hướng dẫn chi tiết: [[14_Quyet_toan_thue_nam|Chương 14 Quyết toán thuế năm]].

### KT-15. Lập và nộp báo cáo tài chính năm

1. CV-KT nhận sổ năm đã khóa và ghi sự kiện Nhận vào sổ cái.
2. CV-KT lập báo cáo tình hình tài chính, báo cáo kết quả hoạt động, báo cáo lưu chuyển tiền tệ và thuyết minh, để trống phần chữ ký.
3. CV-KT lập phiếu kiểm tra tiêu chuẩn kế toán trưởng của người khách cử; TL-KT ghi kết luận theo Điều 54 Luật Kế toán 41/VBHN-VPQH.
4. AM gửi khách bộ báo cáo cùng văn bản xác nhận số liệu, ghi sự kiện Gửi khách vào sổ cái và ghi sự kiện Chờ vào sổ cái.
5. Khách ký xác nhận số liệu, ký đủ ba chữ ký, đóng dấu và trả bộ báo cáo cho AM; AM ghi sự kiện Hết chờ vào sổ cái.
6. TL-KT tra cứu nơi nhận báo cáo tài chính theo chế độ kế toán khách áp dụng.
7. TL-KT ký gửi hồ sơ. CV-KT nộp, tải Thông báo tiếp nhận và ghi sự kiện Nộp cơ quan vào sổ cái.
8. AM thông báo khách kết quả nộp; CV-KT ghi sự kiện Xong vào sổ cái.

Điểm kiểm soát: báo cáo có chữ ký của người lập, kế toán trưởng và người đại diện theo pháp luật, theo Luật Kế toán 41/VBHN-VPQH Đ.29 k.2 đ.d. Cả ba chữ ký là của khách; CV-KT và TL-KT không ký. Khi khách yêu cầu oBacker đứng tên, TL-KT dừng phát hành và báo CEO trong cùng ngày. Ký bằng chữ ký số của khách cần văn bản ủy quyền và văn bản xác nhận nội dung, cả hai lập trước ngày ký.

Thời hạn: theo pháp luật, xem cột Thời hạn theo pháp luật của KT-15 tại mục 2.

Hướng dẫn chi tiết: [[07_Bao_cao_tai_chinh_nam|Chương 07 Báo cáo tài chính năm]].

### KT-16. Quyết toán thuế TNDN năm

1. CV-KT nhận sổ năm đã khóa và báo cáo tài chính đã chốt, rồi ghi sự kiện Nhận vào sổ cái. Số liệu quyết toán lấy từ báo cáo tài chính đã chốt.
2. CV-KT lập bảng điều chỉnh lợi nhuận kế toán sang thu nhập tính thuế và bảng kê chi phí bị loại trừ kèm lý do.
3. CV-KT lập bảng so sánh tạm nộp bốn quý với tỷ lệ tối thiểu, bằng tệp bảng tính có công thức, rồi lập tờ khai quyết toán thuế TNDN, mẫu 03/TNDN hoặc 04/TNDN, kèm các phụ lục phát sinh.
4. AM gửi khách hồ sơ để xác nhận, ghi sự kiện Gửi khách vào sổ cái, rồi ghi sự kiện Chờ vào sổ cái; khi có văn bản xác nhận số liệu của khách, AM ghi sự kiện Hết chờ vào sổ cái.
5. TL-KT ký gửi tờ khai quyết toán. CV-KT nộp tờ khai, tải Thông báo tiếp nhận và ghi sự kiện Nộp cơ quan vào sổ cái. AM thông báo khách số thuế còn phải nộp.
6. CV-KT lưu tờ khai, Thông báo tiếp nhận và giấy nộp tiền, rồi ghi sự kiện Xong vào sổ cái.

Điểm kiểm soát: Tờ khai ký theo quy tắc chữ ký trên hồ sơ thuế của khách tại mục 1.

Thời hạn: theo pháp luật, xem cột Thời hạn theo pháp luật của KT-16 tại mục 2.

Hướng dẫn chi tiết: [[14_Quyet_toan_thue_nam|Chương 14 Quyết toán thuế năm]]; [[10_Thue_TNDN|Chương 10 Thuế TNDN]].

### KT-18. Bàn giao bộ hồ sơ báo cáo tài chính cho khách

1. CV-KT tập hợp bộ hồ sơ đã nộp gồm báo cáo tài chính, tờ khai, Thông báo tiếp nhận và chứng từ nộp tiền, rồi ghi sự kiện Nhận vào sổ cái.
2. AM bàn giao bộ hồ sơ cho khách, lập biên bản bàn giao hồ sơ báo cáo tài chính và ghi sự kiện Gửi khách vào sổ cái.
3. CV-KT lưu bản của oBacker.
4. AM ghi sự kiện Xong vào sổ cái.

### KT-19. Xử lý sai sót và khai bổ sung

1. Người phát hiện sai sót ghi sự kiện Phát sinh việc vào sổ cái, gắn với việc gốc có sai sót.
2. CV-KT báo TL-KT khi sai sót ảnh hưởng số thuế. CV-KT không tự lập hồ sơ khai bổ sung trước khi có quyết định.
3. TL-KT xác định phạm vi sai sót, đề xuất phương án về việc có khai bổ sung hay không, khai cho kỳ nào, có lập hóa đơn điều chỉnh hay thay thế hay không, và thời điểm nộp hồ sơ khai bổ sung và nộp tiền, rồi ghi sự kiện Chuyển vào sổ cái cho COO.
4. COO ghi sự kiện Quyết định vào sổ cái về các nội dung đề xuất. Khi có tiền phạt hoặc rủi ro pháp lý, CEO ghi sự kiện Quyết định, theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]].
5. CV-KT lập hồ sơ khai bổ sung và bản đánh giá tác động, gồm số thuế và tiền chậm nộp.
6. AM soạn thông báo sai sót cho khách; COO ký thông báo; AM gọi điện cho khách trước, gửi thông báo sau và ghi sự kiện Gửi khách vào sổ cái.
7. CV-KT nộp hồ sơ vào thời điểm đã quyết tại bước 4, tải Thông báo tiếp nhận và ghi sự kiện Nộp cơ quan vào sổ cái.
8. TL-KT lập phiếu phân tích nguyên nhân gốc và ghi sự kiện Xong vào sổ cái.

Thời hạn: theo bản chất sai sót, xem cột Thời hạn theo pháp luật của KT-19 tại mục 2.

Hướng dẫn chi tiết: [[15_Xu_ly_sai_sot_va_khai_bo_sung|Chương 15 Xử lý sai sót và khai bổ sung]].

### KT-20. Giải trình văn bản của cơ quan thuế

1. CV-KT báo TL-KT trong ngày nhận văn bản của cơ quan thuế và ghi sự kiện Nhận vào sổ cái. TL-KT xác định ngày ban hành và thời hạn ghi trên chính văn bản, rồi đặt mốc nội bộ.
2. AM gọi điện báo khách và yêu cầu khách gửi bản gốc nếu văn bản đến qua bưu chính.
3. TL-KT đọc văn bản, kết luận yêu cầu và liệt kê từng điểm cần giải trình.
4. CV-KT lập bảng đối chiếu cho từng điểm: số đã khai, số trên sổ, chứng từ gốc, rồi tập hợp chứng từ theo thứ tự điểm.
5. TL-KT ghi sự kiện Quyết định vào sổ cái cho từng điểm: giải trình bảo vệ, hoặc khai bổ sung và nộp thuế. Điểm khai bổ sung mở KT-19 bằng sự kiện Phát sinh việc.
6. TL-KT soạn văn bản giải trình dẫn chiếu đúng điều khoản pháp luật, có đánh số phụ lục chứng từ kèm theo. AM gửi khách xác nhận nội dung bằng văn bản trước khi gửi cơ quan thuế.
7. Văn bản giải trình ký theo quy tắc chữ ký trên hồ sơ thuế của khách tại mục 1. CV-KT gửi văn bản và ghi sự kiện Nộp cơ quan vào sổ cái.
8. CV-KT lưu bản sao hồ sơ đã gửi và ghi sự kiện Xong vào sổ cái.

Thời hạn: theo thời hạn ghi trên chính văn bản của cơ quan thuế, xem KT-20 tại mục 2.

Hướng dẫn chi tiết: [[16_Thanh_tra_kiem_tra_thue|Chương 16 Kiểm tra thuế]].

### KT-21. Hỗ trợ kỳ kiểm tra hoặc thanh tra thuế

1. TL-KT phản hồi khách trong ngày làm việc nhận quyết định kiểm tra và ghi sự kiện Nhận vào sổ cái.
2. COO lập phương án tiếp đoàn.
3. TL-KT và CV-KT phụ trách có mặt tại buổi công bố quyết định kiểm tra.
4. CV-KT chuẩn bị bộ hồ sơ xuất trình theo danh mục khách phê duyệt. CV-KT chỉ cung cấp tài liệu có trong yêu cầu bằng văn bản của đoàn.
5. Khi đoàn yêu cầu hồ sơ, tài liệu, hóa đơn, chứng từ, sổ kế toán tại trụ sở, CV-KT cung cấp trong thời hạn tại mục 2.
6. CV-KT ghi nhật ký làm việc với đoàn và lưu biên bản làm việc.
7. Sau khi cơ quan thuế công bố quyết định kiểm tra, CV-KT giữ nguyên chứng từ. Người nộp thuế hoặc đại diện hợp pháp của người nộp thuế ký biên bản kiểm tra; CV-KT và TL-KT không ký biên bản thay khách. TL-KT có mặt tại buổi công khai dự thảo biên bản và buổi ký biên bản.
8. TL-KT ghi sự kiện Xong vào sổ cái.

Thời hạn: theo quyết định về thời hạn kiểm tra, xem cột Thời hạn theo pháp luật của KT-21 tại mục 2.

Hướng dẫn chi tiết: [[16_Thanh_tra_kiem_tra_thue|Chương 16 Kiểm tra thuế]] mục 5.6.

### KT-22. Trả lời câu hỏi nghiệp vụ đã đối chiếu bản gốc

1. AM ghi câu hỏi của khách vào sổ cái bằng sự kiện Tạo và ghi sự kiện Chuyển cho TL-KT.
2. TL-KT trả lời từ căn cứ đã đối chiếu bản gốc. Mọi con số luật trong câu trả lời truy được về một mã căn cứ.
3. AM truyền đạt câu trả lời cho khách và ghi sự kiện Gửi khách vào sổ cái.
4. AM ghi sự kiện Xong vào sổ cái.

### KT-23. Trả lời câu hỏi nghiệp vụ chưa đối chiếu bản gốc

1. AM ghi câu hỏi của khách vào sổ cái bằng sự kiện Tạo và ghi sự kiện Chuyển cho TL-KT.
2. TL-KT đối chiếu bản gốc để nâng câu trả lời lên mức đã đối chiếu bản gốc.
3. Khi kết luận được, TL-KT soạn câu trả lời có mã căn cứ; AM gửi khách, ghi sự kiện Gửi khách vào sổ cái, rồi ghi sự kiện Xong vào sổ cái.
4. Khi TL-KT đã tra mà không kết luận được, TL-KT mở Job RD-10 và ghi sự kiện Chuyển vào sổ cái. Mốc của Job RD-10 thay cho mốc T3 trong trường hợp kéo dài.
5. AM cam kết lại T2 với khách trong thời gian chờ tại mục 2 kể từ khi mở Job RD-10, rồi ghi sự kiện Chờ vào sổ cái.
6. Khi LEG trả lời Job RD-10, TL-KT ghi sự kiện Hết chờ vào sổ cái, soạn câu trả lời có mã căn cứ, và AM gửi khách.

### KT-24. Xử lý câu hỏi chạm nội dung chưa xác minh được

1. AM ghi câu hỏi của khách vào sổ cái bằng sự kiện Tạo và ghi sự kiện Chuyển cho TL-KT.
2. TL-KT dừng việc trả lời nội dung.
3. TL-KT mở Job RD-12 cho LEG trong cùng ngày làm việc, ghi sự kiện Chuyển vào sổ cái và thông tin COO.
4. AM gửi khách thư hẹn mốc trong thời gian tại mục 2, và ghi sự kiện Gửi khách vào sổ cái.
5. AM ghi sự kiện Xong vào sổ cái khi thư hẹn mốc đã gửi và Job RD-12 đã mở.

### KT-25. Đánh giá tác động khi có văn bản pháp luật mới

1. LEG thông báo văn bản pháp luật mới đã nhập kho; TL-KT ghi sự kiện Nhận vào sổ cái.
2. LEG hoàn thành đánh giá tác động theo mốc của mức ưu tiên đã phân tại [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.5a.
3. TL-KT rà danh sách khách bị ảnh hưởng trong cùng mốc của mức ưu tiên.
4. TL-KT ghi sự kiện Phát sinh việc vào sổ cái cho từng khách bị ảnh hưởng.
5. TL-KT ghi sự kiện Xong vào sổ cái khi có bản đánh giá tác động và danh sách khách bị ảnh hưởng.

Thời hạn: theo ngày hiệu lực của văn bản, xem KT-25 tại mục 2.

### KT-26. Rà soát đầu năm cho cả danh mục khách

1. TL-KT cập nhật danh mục khách còn hiệu lực hợp đồng, khách mới và khách chấm dứt; TL-KT ghi sự kiện Nhận vào sổ cái.
2. CV-KT rà từng khách về kỳ khai thuế theo ngưỡng doanh thu năm trước liền kề.
3. CV-KT rà từng khách về thuế suất và ưu đãi thuế TNDN.
4. CV-KT rà từng khách về chế độ kế toán đang áp dụng.
5. CV-KT rà danh mục hồ sơ, thông tin đăng ký thuế và tình trạng đăng ký sử dụng hóa đơn điện tử của từng khách.
6. TL-KT ghi sự kiện Quyết định vào sổ cái với kết luận phân loại kỳ khai thuế, thuế suất và ưu đãi, chế độ kế toán, danh mục hồ sơ của từng khách.
7. TL-KT ghi sự kiện Xong vào sổ cái khi đủ kết luận cho mọi khách trong danh mục.

Thời hạn: trong tháng 01, hoàn tất trước 31/01, xem cột SLA nội bộ oBacker của KT-26 tại mục 2.

Hướng dẫn chi tiết: [[13_Lich_tuan_thu_va_quy_trinh_khai_nop|Chương 13 Lịch tuân thủ và quy trình khai nộp]]; [[08_Che_do_ke_toan_ap_dung|Chương 08 Chế độ kế toán áp dụng]].

### KT-27. Chốt các khoản có mức khống chế trước 31/12

1. CV-KT nhận sổ tới thời điểm rà và ghi sự kiện Nhận vào sổ cái.
2. CV-KT rà từng khoản có mức khống chế: trang phục, phúc lợi, bảo hiểm hưu trí bổ sung, ăn giữa ca, quỹ lương dự phòng, khấu hao xe từ 9 chỗ trở xuống.
3. CV-KT ghi cảnh báo cho khoản sắp vượt hoặc đã chạm mức tối đa.
4. CV-KT lập bản rà soát các khoản chạm mức tối đa.
5. CV-KT ghi sự kiện Xong vào sổ cái trước 31/12.

Thời hạn: trước 31/12, xem KT-27 tại mục 2.

### KT-28. Bàn giao khi kết thúc dịch vụ

1. AM báo bộ phận Kế toán việc kết thúc dịch vụ; TL-KT ghi sự kiện Nhận vào sổ cái.
2. TL-KT xác định kỳ cuối cùng, gồm nghĩa vụ phát sinh trước ngày hết hạn và đến hạn thực hiện sau ngày đó, và lập kế hoạch hoàn tất và bàn giao.
3. CV-KT hoàn tất công việc kỳ cuối cùng.
4. CV-KT chuẩn bị bộ hồ sơ bàn giao theo 23 dòng danh mục bắt buộc.
5. COO ký biên bản bàn giao 13 phần; AM là đầu mối với khách và ghi sự kiện Gửi khách vào sổ cái.
6. oBacker bàn giao đủ hồ sơ, không kèm điều kiện, kể cả khi khách còn nợ phí. Không nhân viên nào tự quyết định giữ lại, bàn giao chậm hoặc bàn giao thiếu hồ sơ của khách.
7. TL-KT ghi sự kiện Phát sinh việc vào sổ cái để mở KT-29, rồi ghi sự kiện Xong vào sổ cái.

Thời hạn: hai mốc tại cột SLA nội bộ oBacker của KT-28 tại mục 2. Khi hai mốc chồng nhau, TL-KT áp mốc đến trước và ghi lý do vào sổ cái.

Hướng dẫn chi tiết: [[20_Ban_giao_va_ket_thuc|Chương 20 Bàn giao và kết thúc]].

### KT-29. Thu hồi quyền truy cập

1. AM báo việc bàn giao khách hoàn tất hoặc nhân sự nghỉ việc; TL-KT ghi sự kiện Nhận vào sổ cái.
2. TL-KT lập danh sách quyền truy cập cần thu hồi.
3. Bộ phận Công nghệ và Sản phẩm thu hồi quyền truy cập theo danh sách và lập bản ghi đã thu hồi. AM theo dõi và không tự thu hồi.
4. TL-KT ghi sự kiện Xong vào sổ cái khi có bản ghi đã thu hồi.

Thời hạn: theo cột SLA nội bộ oBacker của KT-29 tại mục 2.

### KT-30. Nộp tiền thuê đất và thuế sử dụng đất

1. CV-KT nhận thông báo nộp tiền thuê đất của cơ quan thuế và ghi sự kiện Nhận vào sổ cái.
2. CV-KT xác định kỳ nộp theo lựa chọn nộp một lần hoặc hai lần trong năm của khách.
3. AM thông báo khách số tiền và hạn nộp, rồi ghi sự kiện Gửi khách vào sổ cái.
4. CV-KT nộp tiền thuê đất và thuế sử dụng đất, lưu biên nộp tiền và ghi sự kiện Nộp cơ quan vào sổ cái.
5. CV-KT ghi sự kiện Xong vào sổ cái.

Thời hạn: theo thông báo của cơ quan thuế, xem cột Thời hạn theo pháp luật của KT-30 tại mục 2.

Hướng dẫn chi tiết: [[13_Lich_tuan_thu_va_quy_trinh_khai_nop|Chương 13 Lịch tuân thủ và quy trình khai nộp]].

## 4. LỖI THƯỜNG GẶP

| Lỗi | Hậu quả | Cách xử lý | Job |
| --- | --- | --- | --- |
| Dùng bút toán cân bằng để xóa chênh lệch | Chênh lệch không mất đi mà chuyển sang tài khoản khác, và bị phát hiện khi cơ quan thuế kiểm tra | Giữ chênh lệch chưa giải thích được chờ xử lý và ghi vào Nhật ký chênh lệch | KT-04 |
| Nộp hồ sơ thuế mà không lưu Thông báo tiếp nhận | Khi cơ quan thuế thông báo chưa nhận hồ sơ, oBacker không có bằng chứng đã nộp | Tải và lưu Thông báo tiếp nhận trước khi ghi sự kiện Xong | KT-07, KT-15, KT-16 |
| Ký thay khách vào báo cáo tài chính | Người ký báo cáo tài chính chịu trách nhiệm về nội dung báo cáo, theo Luật Kế toán 41/VBHN-VPQH Đ.29 k.2 đ.d | Chuyển báo cáo cho khách ký; khi khách yêu cầu oBacker đứng tên, TL-KT dừng và báo CEO trong cùng ngày | KT-15 |
| Ký gửi hồ sơ khi chưa có văn bản xác nhận số liệu của khách | Số liệu nộp cơ quan thuế thiếu căn cứ xác nhận của khách | Dừng ký gửi; AM lấy văn bản xác nhận; xác nhận bằng lời không thay được văn bản | KT-07, KT-14, KT-15, KT-16 |
| Hạch toán từ bảng lương nháp | Sai chi phí lương ở cả Bộ phận Lao động và Tiền lương và bộ phận Kế toán | Chờ bảng lương do Bộ phận Lao động và Tiền lương chốt; trả bảng lương sai về Bộ phận Lao động và Tiền lương | KT-03 |
| Dùng tên báo cáo cũ trên hồ sơ gửi cơ quan thuế | Hồ sơ dùng tên không còn trong Luật Kế toán 41/VBHN-VPQH Đ.29 k.1 | Dùng tên Báo cáo tình hình tài chính và Báo cáo kết quả hoạt động | KT-15 |
| CV-KT tự xử lý sai sót ảnh hưởng số thuế | Hồ sơ khai bổ sung hoặc hóa đơn điều chỉnh phát sinh khi chưa có quyết định của người có thẩm quyền | CV-KT báo TL-KT ngay; TL-KT quyết định hóa đơn sai sót tại KT-11; COO quyết định việc khai bổ sung tại KT-19, CEO quyết định khi có tiền phạt hoặc rủi ro pháp lý | KT-11, KT-19 |
| Tính thời hạn giải trình từ ngày khách nhận văn bản | Thời hạn còn lại thực tế ngắn hơn thời hạn ghi trên văn bản | Tính từ ngày ban hành và thời hạn ghi trên chính văn bản của cơ quan thuế, ngay trong ngày nhận | KT-20 |
| Sửa, bổ sung hoặc tạo mới chứng từ sau khi quyết định kiểm tra được công bố | Hồ sơ không còn nguyên trạng tại thời điểm công bố quyết định kiểm tra; Handbook Chương 16 xếp việc sửa chứng từ vào nhóm oBacker không được làm | Không sửa chứng từ; chỉ cung cấp tài liệu có trong yêu cầu bằng văn bản của đoàn | KT-21 |
| Giữ lại hồ sơ của khách vì khách còn nợ phí | Khách không nhận được hồ sơ của chính khách; hành vi oBacker nghiêm cấm | Bàn giao đủ hồ sơ không kèm điều kiện; xử lý công nợ phí qua AM và COO | KT-28 |

## NHẬT KÝ SỬA

| Ngày | Phiên bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | V3.0.0 | KT-19 do COO quyết; chuyển thuế TNCN từ tiền lương sang bộ phận Lao động và tiền lương; KT-23 lấy mốc RD-10 thay T3. |
