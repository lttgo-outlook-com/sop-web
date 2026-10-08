---
title: "BẢNG KIỂM QUẢN LÝ KHÁCH HÀNG"
code: "BK-02"
type: "sop"
folder: "03_BangKiem"
level: "Bảng kiểm"
version: "V4.1.0"
release: "R.26.10.09.1"
status: "đang áp dụng"
draft_date: "08/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-MSR Quy tắc sổ cái"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - BK-02
tags:
  - loai/sop
---
# BẢNG KIỂM QUẢN LÝ KHÁCH HÀNG

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BK-02 |
| Cấp tài liệu | Bảng kiểm |
| Phiên bản | V4.1.0, đang áp dụng |
| Phát hành | R.26.10.09.1 |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] Quy tắc sổ cái |

## 1. PHẠM VI

Bảng kiểm này áp dụng cho AM trong các Job từ AM-01 đến AM-30 của Bộ phận Quản lý khách hàng thuộc Phòng Thương mại, từ lúc tiếp nhận lead đến lúc kết thúc hợp đồng. AM là đầu mối của khách ở mọi giai đoạn, sở hữu quan hệ với khách và sở hữu cam kết của oBacker với khách; bộ phận nghiệp vụ sở hữu nội dung chuyên môn. AM chỉ trả lời khách về tiến độ và về nội dung đã có văn bản của bộ phận nghiệp vụ.

## 2. DANH MỤC JOB

Ký hiệu SLA: `NLV` là ngày làm việc; `g` là giờ; `gLV` là giờ làm việc.

%%JOBTABLE:AM%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn bên ngoài | Căn cứ | Soát bắt buộc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AM-01 | Tiếp nhận và đánh giá lead | Khách liên hệ qua kênh bất kỳ;<br>hoặc lead bàn giao nội bộ từ `MK-06` theo [[BK-08_Bang_kiem_Marketing\|BK-08]];<br>hoặc lead nhận từ `PM-05` theo [[BK-07_Bang_kiem_Doi_tac_gioi_thieu\|BK-07]], mang mã đăng ký giới thiệu | Thông tin liên hệ | Bản ghi lead trên hệ thống;<br>kết luận có phù hợp không;<br>nguồn khách đã ghi, gồm kênh tự đến, đối tác giới thiệu kèm mã đăng ký giới thiệu, hoặc kênh khác;<br>lead từ kênh khác đã tra sổ đăng ký giới thiệu trước khi nhận; khách trùng sổ đăng ký thì chuyển thông tin cho `PM-02` theo [[BK-07_Bang_kiem_Doi_tac_gioi_thieu\|BK-07]] | Xác nhận đã nhận theo T1;<br>đánh giá phù hợp trong 3 gLV;<br>hẹn lịch làm rõ trong 24 g | Không có | Nội bộ | Không |
| AM-02 | Họp làm rõ nhu cầu | Lead đã được đánh giá phù hợp và có phiếu sàng lọc kết luận NHẬN tại `AM-22` | Lịch họp đã được khách xác nhận;<br>phiếu sàng lọc kết luận NHẬN | Biên bản họp trên hệ thống;<br>email tóm tắt gửi khách;<br>kết luận đi tiếp hay dừng | Họp 15 tới 30 phút;<br>ghi biên bản trong 15 phút sau họp;<br>email tóm tắt trong 30 phút sau họp;<br>quyết định trong ngày | Không có | Nội bộ | Không |
| AM-03 | Lập và gửi đề xuất dịch vụ | Kết luận đi tiếp tại AM-02 | Biên bản làm rõ;<br>đầu vào phạm vi và tính khả thi từ `TL` bộ phận, tức `TL-KT` với mảng kế toán và thuế, bằng văn bản trên Job | Đề xuất dịch vụ dạng PDF;<br>email gửi khách | TL bộ phận cấp đầu vào trong 3 gLV;<br>soạn đề xuất trong 24 g, ca phức tạp tối đa 48 g;<br>gửi khách không quá 48 g sau họp làm rõ | Không có | Nội bộ | Không |
| AM-04 | Theo đuổi đề xuất | Đã gửi đề xuất | Đề xuất đã gửi | Bản ghi phản hồi của khách;<br>kết luận chốt, thương lượng hay dừng | Theo đuổi tại T+1, T+3, T+5 (lần cuối).<br>Đề xuất đã hết thời hạn hiệu lực mà khách yêu cầu báo giá lại: báo giá mới theo biểu giá hiện hành, giảm 35%, theo mục 10.4 Bản Điều Khoản Dịch Vụ Kế toán & Thuế, áp dụng với yêu cầu báo giá lại từ ngày 05/10/2026 đến 31/03/2027. Mức giảm 35% là chính sách chuyển tiếp giá cũ do CEO đã duyệt | Không có | Nội bộ | Không |
| AM-05 | Chốt hợp đồng và thu tiền lần đầu | Khách đồng ý | Đề xuất đã được khách chấp thuận;<br>phạm vi đã chốt | Hợp đồng đã ký;<br>hóa đơn do `KTV` nội bộ phát hành theo thời điểm `KTT` nội bộ chốt, yêu cầu xuất hóa đơn chuyển cho `NB-09` theo [[BK-01_Bang_kiem_noi_bo\|BK-01]];<br>xác nhận thanh toán;<br>hợp đồng đã ký, xác nhận thanh toán, danh sách dịch vụ chuyển cho `PM-06` theo [[BK-07_Bang_kiem_Doi_tac_gioi_thieu\|BK-07]] khi khách thuộc sổ đăng ký giới thiệu;<br>hàng 'Khách được giới thiệu bởi' trên Đơn Đặt Hàng ghi theo sổ đăng ký giới thiệu;<br>hàng 'Đồng ý cung cấp thông tin cho bên đã giới thiệu' do khách đánh dấu | Gửi hợp đồng trong ngày khách đồng ý;<br>nhắc thanh toán tại T+1, T+3, T+7 | Không có | Nội bộ | Không |
| AM-06 | Mở hồ sơ khách và bàn giao nội bộ cho bộ phận nghiệp vụ | Đã có xác nhận thanh toán | Hợp đồng đã ký;<br>đề xuất;<br>biên bản làm rõ;<br>ghi chú đặc điểm khách | Hồ sơ khách hoàn chỉnh trên hệ thống;<br>TL bộ phận đã nhận bàn giao và xác nhận | Trong 1 NLV kể từ xác nhận thanh toán | Không có | Nội bộ | Không |
| AM-07 | Gửi thư chào mừng và thiết lập kênh | Đã nhận bàn giao | Hồ sơ khách | Thư chào mừng nêu rõ AM là đầu mối duy nhất, kênh liên hệ, SLA phản hồi | Trong 24 g kể từ xác nhận thanh toán | Không có | Nội bộ | Không |
| AM-08 | Thu thập hồ sơ đầu vào | Sau thư chào mừng | Danh mục hồ sơ theo loại dịch vụ, do TL bộ phận cấp | Bộ hồ sơ đầu vào đã đủ và đã được bộ phận nghiệp vụ xác nhận hợp lệ | Gửi danh mục trong 1 NLV;<br>nhắc tại T+1 và T+3;<br>khi sau lần nhắc thứ hai vẫn thiếu và hậu quả ảnh hưởng nghĩa vụ theo pháp luật: chuyển lên TP Thương mại tại T+5, theo [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 2;<br>bộ phận nghiệp vụ xác nhận tính hợp lệ trong 2 gLV kể từ khi nhận | Không có | Nội bộ | Không |
| AM-09 | Hoàn tất onboarding | Hồ sơ đầu vào đã đủ | Hồ sơ đã xác nhận hợp lệ | Dịch vụ đã khởi động;<br>hồ sơ khách đầy đủ trên hệ thống | 07 ngày làm việc, tối đa 10 ngày làm việc nếu chờ hồ sơ từ khách.<br>AM-09 chỉ đóng giai đoạn 1 của onboarding; giai đoạn nghiệm thu 30 ngày làm việc thuộc KT-01 | Không có | Nội bộ | Không |
| AM-10 | Tiếp nhận và phân loại yêu cầu | Khách gửi yêu cầu | Nội dung yêu cầu | Job đã tạo, đã phân mức P1, P2 hoặc P3, đã chuyển đúng bộ phận | Xác nhận đã nhận theo T1;<br>cam kết mốc theo T2;<br>chuyển bộ phận ngay sau khi phân loại | Không có | Nội bộ | Không |
| AM-11 | Gửi đầu ra cho khách | Bộ phận nghiệp vụ đã bàn giao | Đầu ra đã có sự kiện Soát kết quả Đạt trong sổ cái khi Job gốc có Soát bắt buộc là Có, theo [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.4 | Đầu ra đã gửi khách đúng kênh, kèm 5 phần nội dung bàn giao | Nhận từ bộ phận từ 0,5 NLV trở lên trước hạn gửi khách;<br>gửi khách đúng SLA của Job gốc | Theo Job gốc | Nội bộ | Không |
| AM-12 | Xác nhận khách đã nhận | Đã gửi đầu ra | Bản ghi đã gửi | Xác nhận của khách, hoặc bản ghi đã nhắc đủ số lần | Nhắc 1 lần sau 2 NLV;<br>sau đó coi như đã nhận | Không có | Nội bộ | Không |
| AM-13 | Cập nhật định kỳ cho khách | Theo lịch | Trạng thái các Job đang chạy | Bản cập nhật gửi khách | Dự án đang chạy: mỗi thứ Sáu. Khách thường xuyên: tuần đầu mỗi tháng | Không có | Nội bộ | Không |
| AM-14 | Xử lý sự cố mức P1 | Phát hiện hoặc khách báo | Mô tả sự cố | Kế hoạch xử lý gửi khách;<br>cập nhật định kỳ;<br>xác nhận đã xử lý xong | AM gọi điện dưới 30 phút;<br>kế hoạch dưới 2 g;<br>cập nhật 2 lần mỗi ngày;<br>xong trong 1 NLV, tối đa 2 | Theo bản chất sự cố | Nội bộ | Không |
| AM-15 | Cảnh báo trước rủi ro trễ hạn | Bộ phận nghiệp vụ báo nguy cơ trễ | Nguyên nhân và phương án khôi phục | Thông báo chủ động gửi khách kèm phương án | Trong 4 gLV kể từ khi bộ phận báo, và luôn trước thời hạn theo pháp luật;<br>đầu ra sai: 4 gLV kể từ khi phát hiện, đã nộp cơ quan nhà nước thì 2 gLV | Trước thời hạn theo pháp luật | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5 | Không |
| AM-16 | Khảo sát mức độ hài lòng | Theo lịch | Danh sách khách đủ điều kiện | Kết quả khảo sát đã ghi nhận | Mốc 1 tháng, 3 tháng, 6 tháng sau onboarding;<br>sau đó hằng năm | Không có | Nội bộ | Không |
| AM-17 | Đánh giá sức khỏe tài khoản | Theo quý | Dữ liệu sử dụng dịch vụ, sự cố, khảo sát | Điểm sức khỏe và kết luận nhóm rủi ro | Mỗi 3 tháng | Không có | Nội bộ | Không |
| AM-18 | Gia hạn hợp đồng và phát hành phụ lục nâng hoặc đổi gói | Hợp đồng sắp hết hạn | Điểm sức khỏe;<br>kết quả `AM-30`;<br>lịch sử dịch vụ;<br>xác nhận năng lực phục vụ tiếp từ TL bộ phận | Hợp đồng gia hạn đã ký và đã thanh toán;<br>phần gia hạn của dịch vụ ghi trong hợp đồng dịch vụ đầu tiên chuyển cho `NB-49` theo [[BK-01_Bang_kiem_noi_bo\|BK-01]] để vẫn tính hoa hồng khi khách thuộc sổ đăng ký giới thiệu | Tạo việc và liên hệ khách trước mốc 60 ngày so với ngày hết hạn;<br>đề xuất trong 3 NLV sau khi trao đổi;<br>theo đuổi mỗi 3 ngày;<br>ký xong trước ngày hết hạn;<br>phát hành phụ lục nâng/đổi gói trong 03 ngày làm việc kể từ khi chốt với khách | Ngày hết hạn hợp đồng | Nội bộ | Không |
| AM-19 | Kết thúc dịch vụ và bàn giao dữ liệu | Khách không gia hạn hoặc chấm dứt trước hạn | Xác nhận chấm dứt bằng văn bản | Bộ bàn giao dữ liệu;<br>biên bản bàn giao;<br>đối soát công nợ cuối do `KTT` nội bộ lập;<br>hóa đơn cuối do `KTV` nội bộ phát hành theo `NB-09`;<br>trường hợp có hoàn tiền chuyển cho `NB-51` theo [[BK-01_Bang_kiem_noi_bo\|BK-01]] | Xác nhận và thông báo lộ trình trong 2 NLV;<br>bộ phận nghiệp vụ chuẩn bị bộ bàn giao trong 5 NLV;<br>gửi khách không muộn hơn ngày kết thúc hợp đồng | Ngày kết thúc hợp đồng | Nội bộ | Không |
| AM-20 | Thu hồi quyền truy cập và lưu trữ hồ sơ | Sau khi bàn giao xong | Biên bản bàn giao | Quyền truy cập đã thu hồi;<br>hồ sơ đã chuyển trạng thái lưu trữ | Ba mốc khác nhau. Thu hồi quyền truy cập của oBacker: trong 24 giờ sau bàn giao, mốc đặt tại KT-29, AM chỉ theo dõi chứ không tự thu hồi.<br>Khoảng tải dữ liệu của khách: 30 ngày kể từ ngày kết thúc, theo Điều 9 (Chấm dứt và bàn giao) của TnC; trong 30 ngày này oBacker không xóa dữ liệu.<br>Chuyển hồ sơ sang trạng thái lưu trữ hoặc xóa: chỉ sau khi hết 30 ngày tải của khách, là mốc riêng của AM-20 | Không có | Nội bộ | Không |
| AM-21 | Ghi nhận lý do rời bỏ và bài học | Sau AM-20 | Khảo sát rời bỏ | Bản ghi lý do và bài học trên hệ thống | 1 tuần sau ngày kết thúc | Không có | Nội bộ | Không |
| AM-22 | Sàng lọc rủi ro khách trước khi nhận | Lead đã được đánh giá phù hợp tại AM-01 | Thông tin pháp lý cơ bản của khách;<br>ngành nghề thật đang hoạt động;<br>nội dung khách muốn oBacker làm | Phiếu sàng lọc rủi ro có kết luận NHẬN, NHẬN CÓ ĐIỀU KIỆN, hoặc TỪ CHỐI, kèm lý do theo từng dấu hiệu | Trong 1 NLV kể từ AM-01. Có bất kỳ dấu hiệu nào trong tám dấu hiệu nêu ở Job AM-22 thì chuyển CEO trong cùng ngày làm việc và không hẹn họp làm rõ trước khi CEO quyết | Không có | [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 5 | Không |
| AM-23 | Xin duyệt giá hoặc phạm vi ngoài khung | Khách yêu cầu mức hoặc phạm vi ngoài khung đã duyệt | Bản đề xuất;<br>mức khách yêu cầu;<br>xác nhận khả thi của TL bộ phận | Quyết định duyệt hoặc không duyệt, ghi trên Job, kèm mức và điều kiện kèm theo | AM lập tờ trình trong 4 gLV; AM quyết chiết khấu đến 10%, CEO quyết chiết khấu lớn hơn 10%; TP Thương mại quyết trong 1 NLV nếu trong khung; CEO quyết trong 2 NLV nếu ngoài khung.<br>AM không báo mức cho khách trước khi có quyết định trên Job | Không có | [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 1;<br>[[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] | Không |
| AM-24 | Chốt hợp đồng dịch vụ và xử lý yêu cầu sửa điều khoản | Khách đồng ý về phạm vi và giá | Mẫu hợp đồng đang có hiệu lực theo [[08_Framework_Agreement_VI\|TNC-08-VI]];<br>phạm vi đã chốt bằng tên đầu ra tại bảng Job của bộ phận | Hợp đồng đã ký, dùng đúng mẫu đang có hiệu lực theo [[08_Framework_Agreement_VI\|TNC-08-VI]];<br>hoặc bản đã sửa điều khoản kèm dấu vết duyệt;<br>mẫu hợp đồng đang có hiệu lực gồm điều khoản khách đồng ý chia sẻ thông tin với bên đã giới thiệu khi khách thuộc sổ đăng ký giới thiệu, theo yêu cầu chuyển cho `RD-18` | AM dùng mẫu, không tự sửa điều khoản.<br>Khách đòi sửa thì AM mở Job phụ cho Legal R&D theo RD-18 và chờ kết luận; RD-18 trả kết luận trong 05 NLV.<br>Điều khoản về giá và phạm vi thì theo AM-23 | Không có | [[BK-06_Bang_kiem_Phap_ly\|BK-06]] RD-18; | Không |
| AM-25 | Điều phối vụ việc đi qua nhiều bộ phận | Một yêu cầu của khách cần từ hai bộ phận trở lên | Yêu cầu đã phân loại;<br>kết luận bộ phận nào sở hữu đầu ra cuối | Job chính đã xác định và các Job PHỤ đã liên kết về Job chính;<br>một mốc giao duy nhất với khách | AM xác định Job chính trong 4 gLV.<br>Không rõ bộ phận nào sở hữu đầu ra cuối thì chuyển lên CEO, và CEO chỉ định trước khi việc bắt đầu.<br>AM chỉ nhận bàn giao từ Job chính, không tự ghép kết quả từ các Job phụ | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 5 | Không |
| AM-26 | Theo dõi và xử lý bộ phận trễ SLA nội bộ | Bộ phận không đáp đúng hạn nhận việc theo [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 6 hoặc hạn SLA nội bộ của Job theo [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] | Bản ghi thời điểm AM yêu cầu và thời điểm bộ phận đáp | Bản ghi đã nhắc và đã chuyển lên cấp trên;<br>khách đã được báo trước nếu mốc đã hứa bị đe dọa | Nhắc 1 lần ngay khi quá hạn;<br>vẫn trễ thì chuyển lên TL của bộ phận đó trong cùng ngày làm việc;<br>trễ lần thứ hai với cùng một bộ phận trong một tháng thì báo COO | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 6;<br>[[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] | Không |
| AM-27 | Rà soát định kỳ với khách | Theo quý | Điểm sức khỏe tài khoản tại AM-17;<br>danh mục Job đã làm trong kỳ;<br>danh mục việc còn tồn | Biên bản rà soát gửi khách qua kênh chính thống, gồm việc đã làm, việc còn tồn, và nghĩa vụ sắp tới của khách | Mỗi 3 tháng, trong 10 NLV đầu của quý sau. Khách nhóm rủi ro cao theo AM-17 thì rà mỗi tháng | Không có | Nội bộ | Không |
| AM-28 | Phát hiện sớm và xử lý dấu hiệu khách rời bỏ | Điểm sức khỏe tụt, hoặc có một trong bảy dấu hiệu ghi tại bước 1 của Job này | Điểm sức khỏe hai kỳ liền kề;<br>lịch sử sự cố và khiếu nại;<br>lịch sử thanh toán | Kế hoạch giữ khách có người làm và mốc;<br>hoặc kết luận không giữ được kèm lý do | Lập kế hoạch trong 3 NLV kể từ khi phát hiện dấu hiệu. Nhóm rủi ro cao thì báo TP Thương mại cùng ngày | Không có | Nội bộ | Không |
| AM-29 | Bán thêm và bán chéo dịch vụ | Rà soát định kỳ tại AM-27, hoặc khách nêu nhu cầu | Nghĩa vụ hoặc nhu cầu chưa được phủ bởi hợp đồng hiện tại;<br>xác nhận năng lực phục vụ của TL bộ phận | Đề xuất mở rộng phạm vi kèm giá;<br>hoặc bản ghi khách không có nhu cầu;<br>dịch vụ bán thêm không tính hoa hồng, ghi nhận chuyển cho `NB-49` theo [[BK-01_Bang_kiem_noi_bo\|BK-01]] khi khách thuộc sổ đăng ký giới thiệu | Đề xuất trong 5 NLV kể từ khi phát hiện nhu cầu. Cam kết mốc theo KS-AM-01, không cam kết trước khi TL bộ phận xác nhận | Không có | [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 4 | Không |
| AM-30 | Rà soát khớp phạm vi hợp đồng với việc đang chạy | Theo quý, và ngay khi phát hiện lệch | Phạm vi ghi trong hợp đồng và phụ lục;<br>danh mục Job đang chạy thật cho khách đó | Danh mục việc đang làm mà ngoài phạm vi, và việc trong phạm vi mà chưa làm;<br>kết luận xử lý từng dòng | Mỗi 3 tháng, cùng kỳ với AM-27.<br>Phát hiện việc ngoài phạm vi thì dừng nhận thêm việc loại đó và chuyển AM-23 trong 2 NLV | Không có | KS-AM-02 | Không |

%%/JOBTABLE:AM%%

## 3. BẢNG KIỂM THEO JOB

Câu chữ mẫu gửi khách đặt tại [[PL_A_Cau_chu_mau|PL_A]].

### AM-01. Tiếp nhận và đánh giá lead

1. AM ghi nguồn khách (kênh tự đến; đối tác giới thiệu kèm mã đăng ký giới thiệu; kênh khác) và tạo việc. Kênh khác thì AM tra sổ đăng ký giới thiệu; khách trùng sổ thì AM chuyển thông tin cho Job PM-02 theo [[BK-07_Bang_kiem_Doi_tac_gioi_thieu|BK-07]]. Lead nhận từ MK-06 hoặc PM-05 thì ghi thêm sự kiện Nhận. Ghi sổ cái: Tạo.
2. AM gửi xác nhận đã nhận trong hạn T1, gồm ba nội dung: đã nhận, AM phụ trách, thời điểm liên hệ tiếp ([[PL_A_Cau_chu_mau|PL_A]] mục 1). Ghi sổ cái: Gửi khách.
3. AM tra tình trạng hoạt động, ngành nghề đã đăng ký và người đại diện theo pháp luật của khách, rồi đánh giá phù hợp trong 3 gLV theo bốn câu: việc khách cần nằm trong danh mục dịch vụ; khách thuộc nhóm quy mô oBacker phục vụ; mốc khách muốn khả thi (chưa chắc thì lấy đầu vào của TL bộ phận tại AM-03); khách sẵn sàng trả phí ở khung hiện hành. Kết quả: kết luận kèm ngày tra. Ghi sổ cái: Quyết định.
4. Lead không phù hợp: AM trả lời khách ([[PL_A_Cau_chu_mau|PL_A]] mục 2), ghi lý do và đóng lead. Ghi sổ cái: Gửi khách; Hủy.
5. Lead phù hợp: AM phát sinh việc AM-22 trong 1 NLV. Sau khi AM-22 kết luận NHẬN, hoặc CEO quyết nhận, AM hẹn họp làm rõ trong 24 g bằng hai mốc cụ thể ([[PL_A_Cau_chu_mau|PL_A]] mục 3). Ghi sổ cái: Phát sinh việc; Gửi khách.

Điểm kiểm soát: bản ghi lead có ngày tra, hoặc ghi "chưa tra", trước AM-22.

Thời hạn: xác nhận theo T1; đánh giá phù hợp trong 3 gLV; hẹn lịch làm rõ trong 24 g.

### AM-02. Họp làm rõ nhu cầu

1. AM nhận việc, kiểm ba điều kiện họp (bản ghi lead có kết quả tra; phiếu sàng lọc kết luận NHẬN; lịch họp đã được khách xác nhận) và chuẩn bị trước họp 15 phút: giả thiết về nhu cầu, hai câu hỏi bắt buộc, một điều chưa biết mà thiếu thì không báo giá được. AM mời TL bộ phận khi khách có nghĩa vụ quá hạn, hỏi nghiệp vụ oBacker chưa từng làm, hoặc yêu cầu mốc AM không tự đánh giá được. Ghi sổ cái: Nhận.
2. AM chủ trì họp 15 đến 30 phút ([[PL_A_Cau_chu_mau|PL_A]] mục 4) và hỏi theo thứ tự bốn nhóm: kết quả khách muốn đạt; hiện trạng (sổ sách và tờ khai kỳ gần nhất, nghĩa vụ quá hạn, dạng hồ sơ); mốc, phân biệt mốc theo pháp luật với mốc khách muốn; người quyết ở phía khách. AM chưa đưa mức giá, mốc giao hay cam kết phạm vi; khách hỏi bao lâu xong thì AM dùng [[PL_A_Cau_chu_mau|PL_A]] mục 5. Ghi sổ cái: Ghi giờ công và chi phí.
3. AM ghi biên bản trong 15 phút sau họp, đủ năm phần: kết quả khách muốn đạt; hiện trạng kèm nghĩa vụ tồn; mốc và loại mốc; người quyết; câu hỏi chuyên môn chưa kết luận kèm bộ phận trả lời, mở thành việc phụ. Ghi sổ cái: Phát sinh việc.
4. AM gửi thư tóm tắt trong 30 phút sau họp qua kênh chính thống ([[PL_A_Cau_chu_mau|PL_A]] mục 6). Ghi sổ cái: Gửi khách.
5. AM kết luận đi tiếp hay dừng trong ngày. Ghi sổ cái: Quyết định.

Điểm kiểm soát: bốn nhóm câu hỏi đều có trả lời trong biên bản, hoặc ghi "chưa hỏi được" và AM hẹn trao đổi bổ sung; thư tóm tắt gửi trong cùng ngày làm việc; biên bản và thư không chứa mức giá, mốc giao hay cam kết phạm vi.

Thời hạn: họp 15 đến 30 phút; biên bản trong 15 phút sau họp; thư tóm tắt trong 30 phút sau họp; quyết định trong ngày.

### AM-03. Lập và gửi đề xuất dịch vụ

1. AM nhận việc khi AM-02 kết luận đi tiếp. Vụ việc cần từ hai bộ phận trở lên thì AM chạy AM-25 trước. AM phát sinh việc phụ cho TL bộ phận, nêu hiện trạng lấy từ biên bản, phạm vi dự tính, mốc khách muốn và câu hỏi cụ thể. Ghi sổ cái: Phát sinh việc; Chuyển.
2. TL bộ phận trả lời bằng văn bản trên việc trong 3 gLV: phạm vi làm được không; mốc khách muốn khả thi không, nếu không thì mốc nào khả thi; khách cần cấp đầu vào gì. Ghi sổ cái: Nhận; Quyết định.
3. AM soạn đề xuất trong 24 g, ca phức tạp tối đa 48 g, đủ bảy phần: vấn đề của khách; hiện trạng kèm nghĩa vụ tồn; phạm vi bằng tên đầu ra ở cột Đầu ra của bảng Job kèm mã Job, không ghi tên nghề; phần không thuộc phạm vi, có nội dung; mốc giao đã có xác nhận của TL (mốc theo pháp luật ghi kèm khoảng làm trước, không ghi đúng ngày đó); đầu vào khách cần cung cấp kèm hạn; phí và điều kiện thanh toán theo khung hiện hành, ngoài khung thì AM-23 xong trước. Ghi sổ cái: sự kiện ghi ở bước 4.
4. AM gửi đề xuất trong 48 g sau họp làm rõ. Ghi sổ cái: Gửi khách.

Điểm kiểm soát: KS-AM-01, mọi mốc có xác nhận bằng văn bản của TL trước khi gửi (không đạt thì AM dùng [[PL_A_Cau_chu_mau|PL_A]] mục 5); KS-AM-05, mốc nộp cơ quan nhà nước đạt khoảng làm trước tối thiểu theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.5 trước khi cam kết lịch (không đạt thì AM báo COO).

Thời hạn: TL cấp đầu vào trong 3 gLV; soạn trong 24 g, ca phức tạp tối đa 48 g; gửi khách không quá 48 g sau họp làm rõ.

### AM-04. Theo đuổi đề xuất

1. AM theo đuổi tại T+1 và T+3 bằng việc nhắc lại đề xuất. Ghi sổ cái: Gửi khách.
2. AM gửi lượt cuối tại T+5, hỏi thẳng khách còn quan tâm hay không ([[PL_A_Cau_chu_mau|PL_A]] mục 8). Ghi sổ cái: Gửi khách.
3. AM ghi phản hồi của khách và kết luận chốt, thương lượng hay dừng. Khách chốt thì AM phát sinh việc AM-05. Ghi sổ cái: Quyết định; Phát sinh việc.
4. Đề xuất đã hết thời hạn hiệu lực mà khách yêu cầu báo giá lại: AM báo giá mới theo biểu giá hiện hành, giảm 35%, theo mục 10.4 Bản Điều Khoản Dịch Vụ Kế toán & Thuế, áp dụng với yêu cầu báo giá lại từ ngày 05/10/2026 đến 31/03/2027. Mức giảm 35% là chính sách chuyển tiếp giá cũ do CEO đã duyệt, không thuộc giới hạn mức chiết khấu 10% của AM tại [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4. Ghi sổ cái: Gửi khách.
5. Sau T+5 khách không phản hồi: AM đóng lead với lý do không phản hồi, đúng hạn. Ghi sổ cái: Hủy.

Thời hạn: theo đuổi tại T+1, T+3, T+5 (lần cuối).

### AM-05. Chốt hợp đồng và thu tiền lần đầu

1. AM gửi hợp đồng trong ngày khách đồng ý, dùng mẫu đang có hiệu lực theo AM-24. Ghi sổ cái: Gửi khách.
2. NĐDPL ký hợp đồng với khách; AM nhận bản đã ký và chuyển yêu cầu xuất hóa đơn cho kế toán nội bộ theo Job NB-09 của [[BK-01_Bang_kiem_noi_bo|BK-01]]. KTV nội bộ phát hành hóa đơn theo thời điểm KTT nội bộ chốt; AM không tự phát hành. Ghi sổ cái: Chuyển.
3. AM nhắc thanh toán tại T+1, T+3 và T+7. Ghi sổ cái: Chờ; Gửi khách.
4. Có xác nhận thanh toán: AM ghi Hết chờ. Khách thuộc sổ đăng ký giới thiệu thì AM chuyển hợp đồng đã ký, xác nhận thanh toán và danh sách dịch vụ cho Job PM-06 theo [[BK-07_Bang_kiem_Doi_tac_gioi_thieu|BK-07]], ghi bên giới thiệu trên Đơn Đặt Hàng theo sổ đăng ký giới thiệu, và ghi sự đồng ý của khách về việc cung cấp thông tin cho bên đã giới thiệu. Ghi sổ cái: Hết chờ; Chuyển.
5. AM phát sinh việc AM-06 trong 1 NLV kể từ xác nhận thanh toán. Ghi sổ cái: Phát sinh việc.

Điểm kiểm soát: KS-AM-08, hợp đồng gửi khách dùng đúng mẫu đang có hiệu lực và phạm vi ghi đúng tên đầu ra (không đạt thì AM không gửi).

Thời hạn: gửi hợp đồng trong ngày khách đồng ý; nhắc thanh toán tại T+1, T+3, T+7.

### AM-06. Mở hồ sơ khách và bàn giao nội bộ cho bộ phận nghiệp vụ

1. AM nhận việc khi có xác nhận thanh toán và kiểm đủ ba tài liệu: hợp đồng đã ký, đề xuất, biên bản làm rõ; ghi chú đặc điểm khách đi kèm, và thiếu ghi chú thì vẫn bàn giao được. AM mở hồ sơ khách đủ sáu phần: dữ kiện pháp lý lấy từ Giấy chứng nhận đăng ký doanh nghiệp của khách; hợp đồng và phụ lục; đề xuất đã chấp thuận; biên bản làm rõ; ghi chú đặc điểm khách; danh mục Job sẽ chạy kèm mốc. Ghi sổ cái: Nhận.
2. AM bàn giao qua việc phụ cho từng bộ phận tham gia, đủ năm phần: khách là ai (dữ kiện pháp lý, quy mô, ngành nghề thật); khách mua gì (đầu ra kèm mã Job lấy từ hợp đồng); hiện trạng và nghĩa vụ đang tồn; mốc đã cam kết, phân biệt mốc theo pháp luật với cam kết dịch vụ; giả thiết đã dùng khi báo giá. Ghi sổ cái: Phát sinh việc; Chuyển.
3. TL bộ phận xác nhận đã nhận bàn giao trên việc phụ. Chưa có xác nhận thì AM-06 chưa xong. Ghi sổ cái: Nhận.
4. AM đóng AM-06. Ghi sổ cái: Xong.

Điểm kiểm soát: TL bộ phận đã xác nhận nhận bàn giao trước khi đóng AM-06; bàn giao là việc phụ liên kết, không phải tin nhắn.

Thời hạn: trong 1 NLV kể từ xác nhận thanh toán.

### AM-07. Gửi thư chào mừng và thiết lập kênh

1. AM nhận việc khi bộ phận đã nhận bàn giao. Ghi sổ cái: Nhận.
2. AM gửi thư chào mừng trong 24 g kể từ xác nhận thanh toán ([[PL_A_Cau_chu_mau|PL_A]] mục 10), đủ bốn nội dung: AM là đầu mối duy nhất và mọi yêu cầu đi qua AM; kênh chính thống, trong đó nội dung chốt phải có văn bản; hạn phản hồi lần đầu theo bảng T1; bước tiếp theo là gửi danh mục hồ sơ đầu vào và thời điểm gửi. Thư nêu rõ hai giai đoạn onboarding: AM-09 đóng giai đoạn 1; nghiệm thu 30 NLV thuộc KT-01. Ghi sổ cái: Gửi khách.
3. AM chốt lịch họp khởi động 45 đến 60 phút với người phụ trách tài khoản của khách để giới thiệu quy trình, lập kế hoạch năm tuần đầu, xác nhận đầu mối chính và người dự phòng. Ghi sổ cái: Gửi khách.

Thời hạn: trong 24 g kể từ xác nhận thanh toán.

### AM-08. Thu thập hồ sơ đầu vào

1. AM xin danh mục hồ sơ đầu vào từ TL bộ phận qua việc phụ; AM không tự lập danh mục. Ghi sổ cái: Phát sinh việc; Nhận.
2. AM gửi khách danh mục đầy đủ trong 1 NLV, tối đa hai lượt. Khách không cấp được hết một lúc thì nhóm hồ sơ gắn với nghĩa vụ có hạn gần nhất đi trước. AM ghi Chờ kèm lý do. Ghi sổ cái: Gửi khách; Chờ.
3. AM nhắc tại T+1 và T+3 ([[PL_A_Cau_chu_mau|PL_A]] mục 11), mỗi lần đủ ba phần: danh sách còn thiếu, hạn cụ thể, hậu quả nếu không đủ trước hạn. Ghi sổ cái: Gửi khách.
4. Sau lần nhắc thứ hai vẫn thiếu và hậu quả ảnh hưởng nghĩa vụ theo pháp luật: AM chuyển lên TP Thương mại tại T+5, theo [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 2. Ghi sổ cái: Chuyển.
5. AM chuyển hồ sơ nhận được cho bộ phận nghiệp vụ xác nhận hợp lệ trong 2 gLV kể từ khi nhận; hồ sơ mờ, thiếu chữ ký hoặc hết hạn là chưa hợp lệ. Hồ sơ gốc lưu nguyên trạng. Ghi sổ cái: Chuyển; Hết chờ.

Điểm kiểm soát: danh mục gửi khách do TL bộ phận cấp; mỗi lần nhắc đủ ba phần; bộ phận xác nhận hợp lệ, không chỉ đã nhận.

Thời hạn: gửi danh mục trong 1 NLV; nhắc tại T+1 và T+3; chuyển lên TP Thương mại tại T+5; xác nhận hợp lệ trong 2 gLV.

### AM-09. Hoàn tất onboarding

1. AM kiểm ba điều kiện đóng giai đoạn 1: bộ phận nghiệp vụ xác nhận hồ sơ đầu vào hợp lệ; dịch vụ đã khởi động, tức Job đầu tiên của bộ phận đã sang bước thực hiện; hồ sơ khách đủ sáu phần. Thiếu một điều kiện thì AM chưa đóng. Ghi sổ cái: Hết chờ.
2. AM đóng AM-09. Giai đoạn nghiệm thu 30 NLV thuộc KT-01. Ghi sổ cái: Xong.

Điểm kiểm soát: không đóng khi bộ phận mới xác nhận đã nhận hồ sơ; không đóng khi Job đầu tiên của bộ phận chưa chạy.

Thời hạn: 07 NLV, tối đa 10 NLV nếu chờ hồ sơ từ khách.

### AM-10. Tiếp nhận và phân loại yêu cầu

1. AM tạo việc ngay khi yêu cầu đến và gửi xác nhận đã nhận theo T1. Ghi sổ cái: Tạo; Gửi khách.
2. AM kiểm phạm vi hợp đồng. Yêu cầu ngoài phạm vi thì AM chuyển AM-23 và chưa tạo việc cho bộ phận. Ghi sổ cái: Phát sinh việc.
3. AM phân mức P1, P2 hoặc P3 theo hậu quả, không theo giọng điệu của khách; phân vân giữa hai mức thì chọn mức cao hơn. Bắt buộc P1 khi nguy cơ trễ một hạn theo pháp luật, khi cơ quan nhà nước đã ra văn bản có thời hạn, hoặc khi khách nói tới việc hủy hợp đồng. Ghi sổ cái: Quyết định.
4. AM chọn bộ phận theo [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 1; việc pháp lý theo quy tắc ba lớp tại cùng mục. Vụ việc cần từ hai bộ phận trở lên thì AM chạy AM-25 trước khi cam kết mốc. Ghi sổ cái: Chuyển.
5. AM cam kết mốc T2 sau khi TL bộ phận xác nhận bằng văn bản trên việc. Nội dung cam kết là mốc trả lời; nội dung chưa xác minh thì AM dùng [[PL_A_Cau_chu_mau|PL_A]] mục 12. Ghi sổ cái: Gửi khách.

Điểm kiểm soát: KS-AM-02, phạm vi nằm trong hợp đồng trước khi tạo việc cho bộ phận; KS-AM-01, mốc có xác nhận của TL; KS-AM-05, mốc nộp cơ quan nhà nước đạt khoảng làm trước tối thiểu (không đạt thì báo COO).

Thời hạn: xác nhận đã nhận theo T1; mốc cam kết theo T2; chuyển bộ phận ngay sau khi phân loại.

### AM-11. Gửi đầu ra cho khách

1. AM nhận đầu ra từ bộ phận nghiệp vụ từ 0,5 NLV trở lên trước hạn gửi khách. Ghi sổ cái: Nhận.
2. AM kiểm ba điều kiện trước khi gửi: đầu ra có sự kiện Soát trong sổ cái khi Job gốc thuộc nhóm bắt buộc soát; nội dung bàn giao đủ năm phần; kênh gửi là kênh chính thống. Thiếu điều kiện nào thì AM trả lại bộ phận; AM có quyền từ chối gửi, và bộ phận nghiệp vụ bổ sung phần thiếu. Ghi sổ cái: Chuyển (khi trả lại).
3. AM gửi đầu ra đúng SLA của Job gốc qua kênh chính thống. Đồng hồ T3 chỉ dừng khi kết quả đã gửi qua kênh chính thống. Ghi sổ cái: Gửi khách.

Điểm kiểm soát: KS-AM-03, đầu ra có dấu vết soát theo yêu cầu của Job gốc trước khi gửi; KS-AM-04, nội dung bàn giao đủ năm phần trước khi gửi.

Thời hạn: nhận từ bộ phận từ 0,5 NLV trở lên trước hạn gửi khách; gửi khách đúng SLA của Job gốc.

### AM-12. Xác nhận khách đã nhận

1. AM ghi chờ xác nhận của khách sau khi gửi đầu ra. Ghi sổ cái: Chờ.
2. Sau 2 NLV chưa có xác nhận: AM nhắc 1 lần. Ghi sổ cái: Gửi khách.
3. Có xác nhận của khách, hoặc AM đã nhắc đủ số lần: AM đóng việc; sau lần nhắc đó đầu ra tính là khách đã nhận. Ghi sổ cái: Hết chờ; Xong.

Thời hạn: nhắc 1 lần sau 2 NLV.

### AM-13. Cập nhật định kỳ cho khách

1. AM lấy trạng thái các việc đang chạy của khách từ sổ cái theo lịch. Ghi sổ cái: Tạo.
2. AM gửi bản cập nhật cho khách: dự án đang chạy mỗi thứ Sáu; khách thường xuyên vào tuần đầu mỗi tháng. Ghi sổ cái: Gửi khách; Xong.

Thời hạn: dự án đang chạy mỗi thứ Sáu; khách thường xuyên tuần đầu mỗi tháng.

### AM-14. Xử lý sự cố mức P1

1. AM nhận tin sự cố từ bộ phận hoặc khách và phân P1. Sự cố hệ thống chuyển Công nghệ và Sản phẩm theo [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 1. Sự cố dữ liệu cá nhân xử lý theo [[Quy_che_bao_ve_du_lieu_ca_nhan|OBK-SOP-NB-09]] mục 7; AM chỉ thông báo khách. Ghi sổ cái: Tạo.
2. AM gọi điện cho khách dưới 30 phút ([[PL_A_Cau_chu_mau|PL_A]] mục 15). Ghi sổ cái: Gửi khách.
3. AM lấy từ TL bộ phận, trong 3 gLV, bốn nội dung: việc đã xảy ra; hậu quả cụ thể, kể cả khi bằng không; ít nhất một phương án kèm mốc; việc oBacker đã làm để sự cố không lặp lại. Ghi sổ cái: Chuyển.
4. AM gửi kế hoạch xử lý dưới 2 g theo thứ tự: việc; hậu quả; phương án và mốc; phòng ngừa. AM xin lỗi một lần, ngắn, và chỉ nêu phương án đã có xác nhận của TL. Văn bản qua kênh chính thống gửi trong cùng giờ với cuộc gọi. Ghi sổ cái: Gửi khách.
5. AM cập nhật 2 lần mỗi ngày, đầu giờ sáng và cuối giờ chiều, kể cả khi chưa có tiến triển, nêu bước đang xử lý, đầu mối phối hợp và mốc tiếp theo. Ghi sổ cái: Gửi khách.
6. AM đóng việc khi khách xác nhận xử lý xong (hoặc AM đã nhắc đủ số lần), lỗi đầu ra đã ghi kèm mức; lỗi đầu ra mức Nghiêm trọng hoặc Đáng kể có một trong ba kết quả theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 5: sửa bảng kiểm, sửa tài liệu, hoặc kết luận không cần sửa kèm lý do. Ghi sổ cái: Xong.

Điểm kiểm soát: nội dung gửi khách đủ bốn phần, phần phương án có nội dung; mọi trường hợp có văn bản qua kênh chính thống; chưa đóng việc khi thiếu lỗi đầu ra đã ghi kèm mức, hoặc khi lỗi mức Nghiêm trọng hoặc Đáng kể thiếu kết quả theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 5.

Thời hạn: gọi điện dưới 30 phút; kế hoạch dưới 2 g; cập nhật 2 lần mỗi ngày; xong trong 1 NLV, tối đa 2.

### AM-15. Cảnh báo trước rủi ro trễ hạn

1. TL bộ phận báo AM ngay khi phát hiện nguy cơ trễ mốc đã cam kết, không đợi chắc chắn trễ. Đầu ra đã gửi bị phát hiện sai cũng chạy Job này. Ghi sổ cái: Nhận.
2. AM lấy từ TL bộ phận, trong 3 gLV, nguyên nhân, hậu quả, ít nhất một phương án kèm mốc và việc phòng ngừa. Nguyên nhân hoặc hậu quả chưa rõ thì AM vẫn báo trong hạn và nói rõ phần đang xác định; phương án thì có ít nhất một. Ghi sổ cái: Chuyển.
3. AM báo khách theo thứ tự: việc; hậu quả; phương án và mốc; phòng ngừa ([[PL_A_Cau_chu_mau|PL_A]] mục 13; đầu ra sai thì mục 14). Kênh: P1 gọi điện trước; P2 văn bản, thêm gọi điện khi khách thuộc nhóm rủi ro cao theo AM-17; P3 văn bản. Mọi trường hợp có văn bản qua kênh chính thống. Ghi sổ cái: Gửi khách.
4. AM cập nhật theo mức: P2 mỗi ngày một lần, xử lý xong trong 2 NLV; P3 khi có tiến triển. AM đóng việc khi lỗi đầu ra đã ghi kèm mức; lỗi mức Nghiêm trọng hoặc Đáng kể có một trong ba kết quả theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 5. Ghi sổ cái: Gửi khách; Xong.

Điểm kiểm soát: khách được báo trước thời hạn theo pháp luật (không đạt thì AM chuyển lên COO ngay); văn bản qua kênh chính thống đã gửi trước khi đóng.

Thời hạn: báo khách trong 4 gLV kể từ khi bộ phận báo, và luôn trước thời hạn theo pháp luật; đầu ra sai: 4 gLV kể từ khi phát hiện, đã nộp cơ quan nhà nước thì 2 gLV.

### AM-16. Khảo sát mức độ hài lòng

1. AM lập danh sách khách đủ điều kiện theo mốc 1 tháng, 3 tháng, 6 tháng sau onboarding, rồi hằng năm. Ghi sổ cái: Tạo.
2. AM gửi khảo sát bốn câu: mức hài lòng chung; việc oBacker làm tốt; việc oBacker nên sửa; khách có sẵn sàng giới thiệu oBacker. Ghi sổ cái: Gửi khách.
3. AM ghi kết quả khảo sát. Điểm nhỏ hơn 4,0 thì trong 3 NLV AM trao đổi với khách về đúng câu khách chấm thấp. Ghi sổ cái: Gửi khách; Xong.

Thời hạn: mốc 1 tháng, 3 tháng, 6 tháng sau onboarding, sau đó hằng năm; trao đổi sau điểm thấp trong 3 NLV.

### AM-17. Đánh giá sức khỏe tài khoản

1. AM lấy số của năm nhóm từ sổ cái và từ kế toán nội bộ. Nhóm nào chưa có số thì AM ghi "chưa có số" và không ước lượng. Ghi sổ cái: Tạo.
2. AM tính điểm theo năm nhóm, mỗi nhóm 20 điểm, tổng 100, và ghi tổng cùng số của từng nhóm. Cách trừ điểm: nhóm Tuân thủ, có Job trễ hạn pháp định thì nhóm này về 0, không trừ dần; nhóm Chất lượng, mỗi lỗi đầu ra mức Nghiêm trọng trừ 20, mức Đáng kể trừ 10, mức Nhỏ trừ 3, mức lỗi theo [[08_Khung_danh_gia_hieu_suat|OBK-QCNS-08]]; nhóm Quan hệ, điểm khảo sát gần nhất nhỏ hơn 4,0 trừ 10 và mỗi lần khách phải nhắc oBacker trừ 3; nhóm Thanh toán, chậm quá 15 ngày trừ 10 và chậm quá 30 ngày trừ 20; nhóm Mức dùng, dùng dưới một nửa phạm vi đã mua trừ 10. AM xếp nhóm rủi ro theo tổng điểm: từ 80 điểm là bình thường; từ 60 đến 79 điểm là cần theo; dưới 60 điểm là rủi ro cao. Nhóm Tuân thủ về 0 thì khách vào nhóm rủi ro cao bất kể tổng điểm. Ghi sổ cái: Quyết định.

Điểm kiểm soát: điểm tính từ dữ liệu trong sổ cái, không tính từ cảm nhận; điểm không có nguồn dữ liệu không dùng để xếp nhóm rủi ro.

Thời hạn: mỗi 3 tháng.

### AM-18. Gia hạn hợp đồng và phát hành phụ lục nâng hoặc đổi gói

1. AM tạo việc trước mốc 60 ngày so với ngày hết hạn; tạo muộn thì AM tạo ngay và báo TP Thương mại. Ghi sổ cái: Tạo.
2. AM lấy ba đầu vào: điểm sức khỏe kỳ gần nhất; kết quả AM-30; xác nhận năng lực phục vụ tiếp của TL bộ phận. Ghi sổ cái: Chuyển.
3. AM liên hệ khách trước mốc 60 ngày so với ngày hết hạn, đề xuất gia hạn trong 3 NLV sau khi trao đổi và theo đuổi mỗi 3 ngày. Ghi sổ cái: Gửi khách.
4. Khách đồng ý: AM phát hành phụ lục nâng hoặc đổi gói trong 03 NLV kể từ khi chốt; hợp đồng gia hạn ký xong trước ngày hết hạn. Ghi sổ cái: Gửi khách.
5. Hợp đồng gia hạn đã ký và đã thanh toán, khách thuộc sổ đăng ký giới thiệu: AM chuyển phần gia hạn ghi trong hợp đồng dịch vụ đầu tiên cho Job NB-49 theo [[BK-01_Bang_kiem_noi_bo|BK-01]] để vẫn tính hoa hồng. Khách không gia hạn thì AM phát sinh việc AM-19. Ghi sổ cái: Chuyển; Phát sinh việc; Xong.

Điểm kiểm soát: việc AM-18 có trước mốc 60 ngày; ký xong trước ngày hết hạn.

Thời hạn: liên hệ khách trước mốc 60 ngày so với ngày hết hạn; đề xuất trong 3 NLV sau khi trao đổi; theo đuổi mỗi 3 ngày; ký xong trước ngày hết hạn; phụ lục trong 03 NLV kể từ khi chốt.

### AM-19. Kết thúc dịch vụ và bàn giao dữ liệu

1. AM nhận xác nhận chấm dứt bằng văn bản của khách; khách nói qua điện thoại thì AM gửi văn bản xác nhận và chờ trả lời. oBacker chấm dứt trước hạn thì CEO quyết bằng văn bản theo [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 5, và AM chưa trao đổi phương án với khách trước đó. Ghi sổ cái: Nhận; Quyết định.
2. AM gửi lộ trình trong 2 NLV, đủ năm mốc: ngày kết thúc hợp đồng; ngày giao bộ bàn giao; ngày đối soát công nợ cuối; ngày thu hồi quyền truy cập; đầu mối giai đoạn kết thúc ([[PL_A_Cau_chu_mau|PL_A]] mục 16). Ghi sổ cái: Gửi khách.
3. AM lấy từ TL bộ phận, trong 3 gLV, danh mục nghĩa vụ còn lại của khách sau ngày kết thúc và gửi khách văn bản nêu ai làm phần đã qua, ai làm phần còn lại. Ghi sổ cái: Chuyển; Gửi khách.
4. Bộ phận nghiệp vụ chuẩn bị bộ bàn giao trong 5 NLV, bốn nhóm: hồ sơ gốc trả nguyên trạng; sản phẩm oBacker đã làm; dữ liệu dạng dùng được; ghi chú chuyển tiếp. Mảng kế toán còn mốc tại Job KT-28 của [[BK-03_Bang_kiem_Ke_toan_va_thue|BK-03]]; hai mốc chồng nhau thì áp mốc đến trước. KTT nội bộ lập bảng đối soát công nợ cuối; KTV nội bộ phát hành hóa đơn cuối theo Job NB-09 của [[BK-01_Bang_kiem_noi_bo|BK-01]]; hoàn tiền thì AM chuyển Job NB-51 theo [[BK-01_Bang_kiem_noi_bo|BK-01]]. Ghi sổ cái: Phát sinh việc; Chuyển.
5. AM gửi bộ bàn giao kèm biên bản có danh mục từng món, không muộn hơn ngày kết thúc hợp đồng; khách còn nợ vẫn nhận bộ bàn giao. Hai bên ký biên bản. Ghi sổ cái: Gửi khách.
6. AM đóng việc khi bộ bàn giao đủ, công nợ đã đối soát và biên bản có chữ ký hai bên. Ghi sổ cái: Xong.

Điểm kiểm soát: KS-AM-06, bộ bàn giao đủ và công nợ đã đối soát trước ngày kết thúc (không đạt thì AM chưa chuyển trạng thái kết thúc và chuyển CEO); văn bản nghĩa vụ còn lại gửi trước khi giao bộ bàn giao.

Thời hạn: lộ trình trong 2 NLV; bộ bàn giao trong 5 NLV; gửi khách không muộn hơn ngày kết thúc hợp đồng.

### AM-20. Thu hồi quyền truy cập và lưu trữ hồ sơ

1. AM yêu cầu bộ phận nghiệp vụ lập danh sách quyền truy cập và Bộ phận Công nghệ và Sản phẩm thu hồi quyền truy cập của oBacker trong 24 giờ sau bàn giao, theo mốc đặt tại KT-29. Danh mục quyền truy cập lập từ onboarding. AM theo dõi và không tự thu hồi. Ghi sổ cái: Tạo; Chuyển.
2. Bản ghi thu hồi phải có trên việc. Chưa có bản ghi thì AM nhắc bộ phận ngay. Ghi sổ cái: Chờ; Hết chờ.
3. AM theo dõi khoảng tải dữ liệu của khách: 30 ngày kể từ ngày kết thúc theo Điều 9 (Chấm dứt và bàn giao) của TnC; trong 30 ngày đó oBacker không xóa dữ liệu. Ghi sổ cái: Chờ.
4. Sau khi hết 30 ngày tải của khách, AM chuyển hồ sơ sang trạng thái lưu trữ hoặc xóa. Ghi sổ cái: Hết chờ; Xong.

Điểm kiểm soát: quyền truy cập đã thu hồi và bản ghi thu hồi có trên việc trong 24 giờ sau bàn giao; ba mốc (thu hồi quyền, tải dữ liệu, lưu trữ hoặc xóa) tách riêng, mốc 24 giờ không dời được.

Thời hạn: thu hồi quyền truy cập trong 24 giờ sau bàn giao; khoảng tải dữ liệu 30 ngày kể từ ngày kết thúc; chuyển lưu trữ hoặc xóa chỉ sau 30 ngày đó.

### AM-21. Ghi nhận lý do rời bỏ và bài học

1. AM gửi khảo sát rời bỏ bốn câu trong 1 tuần sau ngày kết thúc: lý do chính khiến khách kết thúc; điều oBacker đã có thể làm khác; phương án khách chuyển sang; điều sẽ làm khách quay lại ([[PL_A_Cau_chu_mau|PL_A]] mục 17). Ghi sổ cái: Gửi khách.
2. AM ghi lý do và bài học, và kết thúc bằng một trong ba kết quả: sửa bảng kiểm, sửa tài liệu, hoặc kết luận không cần sửa kèm lý do. Ghi sổ cái: Quyết định; Xong.

Điểm kiểm soát: AM-21 chưa đóng khi chưa có một trong ba kết quả.

Thời hạn: 1 tuần sau ngày kết thúc.

### AM-22. Sàng lọc rủi ro khách trước khi nhận

1. AM điền phiếu sàng lọc trong 1 NLV kể từ AM-01: đi qua tám dấu hiệu nêu dưới các bước, ghi mỗi dấu hiệu là CÓ, KHÔNG hoặc CHƯA RÕ, không để dòng trống. Phiếu có kết luận NHẬN, NHẬN CÓ ĐIỀU KIỆN hoặc TỪ CHỐI, kèm lý do theo từng dấu hiệu. Ghi sổ cái: Quyết định.
2. Cả tám dấu hiệu là KHÔNG: NHẬN, AM sang AM-02. Có dấu hiệu 4, 5, 6 hoặc 8: NHẬN CÓ ĐIỀU KIỆN. Có dấu hiệu 1, 2, 3 hoặc 7: TỪ CHỐI. Hai kết luận sau chuyển CEO trong cùng ngày làm việc; AM chưa hẹn họp trước khi CEO quyết và không tự từ chối khách. Ghi sổ cái: Chuyển; Chờ.
3. CEO quyết bằng văn bản trên việc và trả lời khách khi từ chối. Dấu hiệu 7 thì sau quyết định của CEO, AM chuyển thông tin sang luật sư đối tác theo Job LS-18 của [[BK-06_Bang_kiem_Phap_ly|BK-06]]. Ghi sổ cái: Quyết định; Hết chờ; Gửi khách.

Tám dấu hiệu của bước 1:

- Dấu hiệu 1: Khách nói ngay từ đầu là muốn hồ sơ ghi khác thực tế, muốn hợp thức hóa chứng từ, hoặc hỏi về hóa đơn không có giao dịch thật: chạm hành vi oBacker nghiêm cấm tại [[08_Khung_danh_gia_hieu_suat|OBK-QCNS-08]].
- Dấu hiệu 2: Khách hỏi oBacker có quan hệ để đẩy nhanh hồ sơ hay không, hoặc đề nghị chi ngoài quy định: chạm hành vi oBacker nghiêm cấm tại [[08_Khung_danh_gia_hieu_suat|OBK-QCNS-08]].
- Dấu hiệu 3: Khách yêu cầu oBacker cam kết kết quả cấp phép, kết quả thanh tra, hoặc kết quả một tranh chấp: chạm hành vi oBacker nghiêm cấm tại [[08_Khung_danh_gia_hieu_suat|OBK-QCNS-08]].
- Dấu hiệu 4: Khách đang có nghĩa vụ quá hạn chưa xử lý mà chưa nói rõ, phát hiện được khi hỏi về hiện trạng: không phải lý do từ chối, và phải định giá, định phạm vi lại.
- Dấu hiệu 5: Khách yêu cầu oBacker đứng tên kế toán trưởng của khách, hoặc đứng tên trên báo cáo tài chính của khách: oBacker mặc định không đứng tên; ngoại lệ do CEO duyệt riêng từng khách bằng văn bản theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4.
- Dấu hiệu 6: Yêu cầu thuộc nhóm A hoặc nhóm B tại mục 1 của [[BK-06_Bang_kiem_Phap_ly|BK-06]], tức soạn, rà hợp đồng hoặc tư vấn pháp lý theo yêu cầu.
- Dấu hiệu 7: Yêu cầu là đại diện khách trong tố tụng tại tòa án hoặc trọng tài: ngoài phạm vi oBacker, chuyển đối tác thuê ngoài theo Job LS-18 của [[BK-06_Bang_kiem_Phap_ly|BK-06]].
- Dấu hiệu 8: Khách là bên có liên quan của một người giữ vai trò tại oBacker theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]]: giao dịch đi theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 12a.

Điểm kiểm soát: KS-AM-07, phiếu có kết luận và mọi dấu hiệu CÓ đã được CEO quyết bằng văn bản trước khi hẹn họp và trước khi báo giá (không đạt thì AM không hẹn họp, không báo giá, chuyển CEO).

Thời hạn: trong 1 NLV kể từ AM-01; có dấu hiệu thì chuyển CEO trong cùng ngày làm việc.

### AM-23. Xin duyệt giá hoặc phạm vi ngoài khung

1. AM lập tờ trình trong 4 gLV, đủ bốn phần: mức hoặc phạm vi khách yêu cầu; mức hoặc phạm vi theo khung; xác nhận khả thi của TL bộ phận; lý do đề nghị duyệt. Ghi sổ cái: Tạo; Chuyển.
2. Chiết khấu: AM tự quyết mức đến 10%, gồm đúng 10%; mức lớn hơn 10% do CEO quyết. Giá trong khung: TP Thương mại quyết trong 1 NLV. Ngoài khung: CEO quyết trong 2 NLV, và COO xác nhận khả thi trước khi CEO quyết khi đó là mở rộng phạm vi. Quyết định ghi trên việc, kèm mức và điều kiện. Ghi sổ cái: Quyết định.
3. Trong lúc chờ quyết định, khách hỏi mức thì AM trả lời bằng một mốc hẹn ([[PL_A_Cau_chu_mau|PL_A]] mục 7) và không nêu mức. Ghi sổ cái: Chờ; Gửi khách.
4. Có quyết định: AM báo khách đúng mức và điều kiện đã quyết. Ghi sổ cái: Hết chờ; Gửi khách; Xong.

Điểm kiểm soát: AM không báo mức cho khách trước khi có quyết định ghi trên việc.

Thời hạn: AM lập tờ trình trong 4 gLV; TP Thương mại quyết trong 1 NLV nếu trong khung; CEO quyết trong 2 NLV nếu ngoài khung.

### AM-24. Chốt hợp đồng dịch vụ và xử lý yêu cầu sửa điều khoản

1. AM nhận việc khi khách đồng ý về phạm vi và giá, dùng mẫu đang có hiệu lực theo [[08_Framework_Agreement_VI|TNC-08-VI]] và chỉ điền thông tin các bên, phạm vi bằng tên đầu ra kèm mã Job, phí và điều kiện thanh toán đã được duyệt. AM không tự sửa, thêm hay bỏ điều khoản. Ghi sổ cái: Nhận.
2. Khách đòi sửa điều khoản: AM mở việc phụ cho Legal R&D theo RD-18 và chờ kết luận; điều khoản về giá và phạm vi thì theo AM-23. Trong lúc chờ, AM nói với khách đúng một câu, rằng yêu cầu đang được bộ phận pháp lý xem xét và sẽ có phản hồi trước mốc nào ([[PL_A_Cau_chu_mau|PL_A]] mục 9). Ghi sổ cái: Phát sinh việc; Chờ; Gửi khách.
3. Cấp phê duyệt theo nhóm điều khoản: thương mại thông thường do TP Thương mại duyệt trong 04 gLV; vận hành và SLA do TP Thương mại duyệt cùng xác nhận khả thi của TL bộ phận trong 01 NLV; pháp lý cốt lõi (giới hạn trách nhiệm bồi thường, phạt vi phạm, chấm dứt trước hạn, cơ quan giải quyết tranh chấp, bảo mật dữ liệu) do Legal R&D thẩm định theo RD-18 và CEO phê duyệt. Ghi sổ cái: Duyệt.
4. NĐDPL ký hợp đồng; AM gửi hợp đồng đúng mẫu hoặc bản đã sửa kèm dấu vết duyệt. Ghi sổ cái: Hết chờ; Gửi khách; Xong.

Điểm kiểm soát: KS-AM-08, hợp đồng dùng đúng mẫu đang có hiệu lực và phạm vi ghi đúng tên đầu ra trước khi gửi (không đạt thì AM không gửi).

Thời hạn: RD-18 trả kết luận trong 05 NLV; thời hạn duyệt theo nhóm ở bước 3.

### AM-25. Điều phối vụ việc đi qua nhiều bộ phận

1. AM nhận yêu cầu đã phân loại cần từ hai bộ phận trở lên và xác định Job chính trong 4 gLV: đúng một Job chính, là Job giữ đầu ra cuối gửi ra khỏi oBacker; người chịu trách nhiệm cuối là TL của bộ phận sở hữu đầu ra cuối. Ghi sổ cái: Quyết định.
2. Không rõ bộ phận nào sở hữu đầu ra cuối: AM chuyển lên CEO, và CEO chỉ định trước khi việc bắt đầu, theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 5. Ghi sổ cái: Chuyển; Quyết định.
3. AM phát sinh việc phụ cho từng bộ phận tham gia và liên kết về việc chính. Việc phụ không gửi đầu ra ra ngoài. Ghi sổ cái: Phát sinh việc.
4. AM nhận bàn giao từ việc chính và cam kết một mốc giao duy nhất với khách. AM không ghép kết quả từ các việc phụ. Ghi sổ cái: Nhận; Gửi khách.

Điểm kiểm soát: KS-AM-09, việc chính và người chịu trách nhiệm cuối đã ghi trên việc trước khi cam kết mốc với khách (không đạt thì AM không cam kết mốc và chuyển COO).

Thời hạn: AM xác định Job chính trong 4 gLV.

### AM-26. Theo dõi và xử lý bộ phận trễ SLA nội bộ

1. AM ghi thời điểm AM yêu cầu và thời điểm bộ phận đáp, đối chiếu hạn nhận việc tại [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 6 và hạn SLA nội bộ của Job tại [[PL_2_Bang_tra_SLA|OBK-SOP-PL2]]. Ghi sổ cái: Chờ.
2. Quá hạn: AM nhắc 1 lần ngay trên việc. Ghi sổ cái: Chờ, kèm lần nhắc.
3. Vẫn trễ: AM chuyển lên TL của bộ phận đó trong cùng ngày làm việc. Ghi sổ cái: Chuyển.
4. Trễ lần thứ hai với cùng một bộ phận trong một tháng: AM báo COO. Ghi sổ cái: Chuyển.
5. Mốc đã hứa với khách bị đe dọa: AM phát sinh việc AM-15 và chạy song song, báo khách trước khi mốc bị đe dọa. Ghi sổ cái: Phát sinh việc; Hết chờ.

Thời hạn: nhắc 1 lần ngay khi quá hạn; chuyển lên TL cùng ngày làm việc; lần trễ thứ hai trong một tháng thì báo COO.

### AM-27. Rà soát định kỳ với khách

1. AM chuẩn bị ba thứ: điểm sức khỏe kèm ba nhóm bị trừ điểm nhiều nhất (AM-17); danh mục Job đã làm trong kỳ; danh mục nghĩa vụ sắp tới của khách, xin từ TL bộ phận trong 3 gLV. Ghi sổ cái: Tạo; Chuyển.
2. AM gửi biên bản rà soát qua kênh chính thống, đủ bốn phần: việc đã làm theo mã Job; việc còn tồn kèm bên chịu trách nhiệm (oBacker hoặc khách); nghĩa vụ của khách trong kỳ tới kèm mốc; việc oBacker đề nghị khách quyết, nếu có. Ghi sổ cái: Gửi khách.
3. Nghĩa vụ của khách chưa được hợp đồng phủ thì AM phát sinh việc AM-29. Ghi sổ cái: Phát sinh việc; Xong.

Điểm kiểm soát: biên bản có phần nghĩa vụ của khách trong kỳ tới (thiếu thì AM xin danh mục từ TL bộ phận trước khi gửi).

Thời hạn: mỗi 3 tháng, trong 10 NLV đầu của quý sau; khách nhóm rủi ro cao theo AM-17 thì mỗi tháng.

### AM-28. Phát hiện sớm và xử lý dấu hiệu khách rời bỏ

1. AM kiểm bảy dấu hiệu: điểm sức khỏe tụt từ 15 điểm trở lên so với kỳ trước; chậm thanh toán lần thứ hai liên tiếp; khách hỏi về điều khoản chấm dứt hoặc hỏi giá của bên khác; người liên hệ phía khách đổi và người mới chưa gặp AM; khách giảm phạm vi ở lần gia hạn gần nhất; số lần khách chủ động liên hệ giảm rõ trong hai kỳ; có lỗi đầu ra mức Nghiêm trọng trong kỳ. Khách có từ hai dấu hiệu trở lên, hoặc một trong ba dấu hiệu đầu, thì AM tạo việc AM-28. Ghi sổ cái: Tạo.
2. AM lập kế hoạch giữ khách trong 3 NLV, có người làm và mốc, trả lời câu hỏi khách đang không nhận được điều gì mà khách cần; hoặc kết luận không giữ được kèm lý do. Ghi sổ cái: Quyết định.
3. Khách thuộc nhóm rủi ro cao: AM báo TP Thương mại cùng ngày. Ghi sổ cái: Chuyển.

Thời hạn: lập kế hoạch trong 3 NLV kể từ khi phát hiện dấu hiệu; nhóm rủi ro cao thì báo TP Thương mại cùng ngày.

### AM-29. Bán thêm và bán chéo dịch vụ

1. AM xác định cơ hội theo thứ tự: nghĩa vụ của khách chưa được hợp đồng phủ (phần nghĩa vụ trong biên bản AM-27); việc khách đang tự làm mà làm không đúng; ngưỡng khách vừa vượt; dịch vụ mới oBacker vừa có. Ghi sổ cái: Tạo.
2. AM xin xác nhận năng lực phục vụ của TL bộ phận. Ghi sổ cái: Chuyển.
3. AM đề xuất mở rộng phạm vi kèm giá trong 5 NLV kể từ khi phát hiện nhu cầu, hoặc ghi khách không có nhu cầu. AM chỉ cam kết mốc sau khi TL bộ phận xác nhận. Ghi sổ cái: Gửi khách; Xong.
4. Khách thuộc sổ đăng ký giới thiệu: dịch vụ bán thêm không tính hoa hồng, và AM chuyển ghi nhận cho Job NB-49 theo [[BK-01_Bang_kiem_noi_bo|BK-01]]. Ghi sổ cái: Chuyển.

Điểm kiểm soát: KS-AM-01, mốc có xác nhận của TL trước khi cam kết; khách nhóm rủi ro cao mà nguyên nhân chưa xử lý xong thì AM hoãn bán thêm và ghi lý do hoãn.

Thời hạn: đề xuất trong 5 NLV kể từ khi phát hiện nhu cầu.

### AM-30. Rà soát khớp phạm vi hợp đồng với việc đang chạy

1. AM lấy hai danh sách: phạm vi ghi trong hợp đồng và phụ lục; danh mục Job đã chạy thật cho khách trong kỳ. Ghi sổ cái: Tạo.
2. AM so hai danh sách và lập danh mục: việc đang làm mà ngoài phạm vi; việc trong phạm vi mà chưa làm. Mỗi dòng có kết luận xử lý, không dòng nào để trống. Ghi sổ cái: Quyết định.
3. Việc ngoài phạm vi: AM dừng nhận thêm việc loại đó và chuyển AM-23 trong 2 NLV. Ghi sổ cái: Phát sinh việc.
4. Việc trong phạm vi mà chưa làm: AM báo TL bộ phận trong cùng ngày làm việc và đưa vào phần việc còn tồn của biên bản rà soát kỳ sau. Ghi sổ cái: Chuyển; Xong.

Điểm kiểm soát: KS-AM-02, phạm vi yêu cầu nằm trong hợp đồng đã ký; mọi dòng lệch có kết luận trước khi đóng việc.

Thời hạn: mỗi 3 tháng, cùng kỳ với AM-27; việc ngoài phạm vi chuyển AM-23 trong 2 NLV.

## 4. LỖI THƯỜNG GẶP

| Lỗi | Dấu hiệu | Cách xử lý |
| --- | --- | --- |
| AM tự trả lời nội dung chuyên môn | Khách hỏi một câu AM từng nghe câu trả lời, và AM trả lời ngay | AM chỉ trả lời trạng thái tiến độ và nội dung đã có văn bản của bộ phận; mọi nội dung khác chuyển bộ phận |
| Cam kết mốc khi chưa có xác nhận của TL | AM nêu một con số ngày trong họp hoặc trong đề xuất; hoặc ghi mốc đúng ngày theo pháp luật | AM dùng PL_A mục 5; mốc theo pháp luật ghi sau khi trừ khoảng làm trước |
| Báo mức giá trước khi có quyết định | Thư gửi khách có một con số mà AM-23 chưa có quyết định | AM chờ quyết định ghi trên việc rồi mới báo; trong lúc chờ AM dùng PL_A mục 7 |
| Tự sửa câu chữ điều khoản hợp đồng | Hợp đồng gửi khách khác mẫu ở một điều khoản và không có việc RD-18 | AM không gửi; AM mở việc cho Legal R&D theo RD-18 |
| Hẹn họp hoặc báo giá trước khi CEO quyết | Lịch họp đã gửi khi AM-22 còn chờ CEO | AM hủy lịch chưa phát hành chính thức và chờ quyết định của CEO |
| Phân mức ưu tiên thấp hơn hậu quả | Yêu cầu liên quan hạn nộp hồ sơ bị phân P3 | AM phân mức theo hậu quả; phân vân thì chọn mức cao hơn |
| Báo tin bất lợi sau khi đã trễ | Bộ phận báo đúng ngày hết thời hạn, AM báo khách hôm sau | AM báo trong 4 gLV kể từ khi bộ phận báo, với thông tin đang có và nêu rõ phần đang xác định |
| Quyết định chốt qua kênh liên lạc mà không gửi lại qua kênh chính thống | Khách chốt thay đổi phạm vi qua kênh liên lạc, việc không có văn bản | AM gửi lại bằng văn bản qua kênh chính thống trong cùng ngày làm việc; chưa gửi thì chưa tính là đã chốt |
| Tự ghép kết quả từ nhiều việc phụ | AM gửi khách một bản mà không việc nào giữ bản đó | AM chỉ nhận bàn giao từ việc chính; chưa xác định việc chính thì chuyển COO |
| Hợp đồng hết hạn mà dịch vụ vẫn chạy | Bộ phận vẫn làm khi hợp đồng đã hết hiệu lực | AM tạo AM-18 từ mốc 60 ngày trước ngày hết hạn; tạo muộn thì tạo ngay và báo TP Thương mại |

## NHẬT KÝ SỬA

| Ngày | Phiên bản | Nội dung |
| --- | --- | --- |
| 09/10/2026 | V4.1.0 | AM-04 ghi mức giảm 35% là chính sách chuyển tiếp giá cũ do CEO đã duyệt, áp dụng đến 31/03/2027. |
