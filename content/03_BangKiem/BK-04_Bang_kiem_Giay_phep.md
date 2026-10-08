---
title: "BẢNG KIỂM GIẤY PHÉP"
code: "BK-04"
type: "sop"
folder: "03_BangKiem"
level: "Bảng kiểm"
version: "V2.0.0"
release: "R.26.10.08.1"
status: "đang áp dụng"
draft_date: "08/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-MSR Quy tắc sổ cái"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - BK-04
tags:
  - loai/sop
---
# BẢNG KIỂM GIẤY PHÉP

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BK-04 |
| Cấp tài liệu | Bảng kiểm |
| Phiên bản | V2.0.0, đang áp dụng |
| Phát hành | R.26.10.08.1 |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] Quy tắc sổ cái |

## 1. PHẠM VI

Bảng kiểm này áp dụng cho các Job LIC-01 đến LIC-31 của bộ phận Giấy phép. Hướng dẫn nghiệp vụ chi tiết về giấy phép và thủ tục doanh nghiệp nằm tại [[09_HD_Nghiep_vu_giay_phep_va_thu_tuc_doanh_nghiep|OBK-HB-41]]. Vai trò dùng ký hiệu AM, CV-LIC, TL-LIC, LEG, COO theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]]. Thời hạn theo pháp luật giữ đúng chữ của nguồn, kèm mã căn cứ CC.

## 2. DANH MỤC JOB

%%JOBTABLE:LIC%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn theo pháp luật | Căn cứ | Soát bắt buộc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIC-01 | Đánh giá điều kiện và tính khả thi | AM chuyển yêu cầu | Thông tin thực tế của khách: chủ thể, ngành nghề, vốn, địa điểm, nhân sự | Bản đánh giá đủ, chưa đủ, hoặc cần bổ sung gì, kèm mã căn cứ;<br>kết luận tự làm hay cần đối tác thuê ngoài | 02 ngày làm việc với nghiệp vụ quen.<br>Nghiệp vụ lạ: 05 ngày làm việc, trong đó Job RD-09 chiếm 03 ngày làm việc và Bộ phận Giấy phép chiếm 02 ngày làm việc soạn bản đánh giá.<br>Văn bản chưa có trong kho thì RD-09 không cam kết mốc, và Job này chuyển sang nhánh chưa cam kết được mốc, AM trả lời khách bằng một mốc hẹn theo T2 | Không có | Nội bộ | Không |
| LIC-02 | Thành lập doanh nghiệp trong nước | Khách yêu cầu | Thông tin thành viên, cổ đông, vốn, ngành nghề, trụ sở;<br>giấy tờ pháp lý cá nhân hoặc số định danh | Bộ hồ sơ đã nộp;<br>GCN ĐKDN;<br>biên nhận | Soạn hồ sơ 02 ngày làm việc kể từ khi đủ thông tin;<br>nộp trong 01 ngày làm việc sau khi khách ký | Cơ quan cấp trong **03 ngày làm việc** | CC-DN-01 tới CC-DN-09 | Không |
| LIC-03 | Thành lập doanh nghiệp có vốn nước ngoài | Khách yêu cầu | Như LIC-02, cộng giấy tờ pháp lý tổ chức nước ngoài đã hợp pháp hóa lãnh sự;<br>kết luận điều kiện tiếp cận thị trường | Bộ hồ sơ đã nộp;<br>GCN ĐKDN | Soạn hồ sơ 05 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa | Cơ quan cấp trong **03 ngày làm việc** | CC-DN-06, CC-DT-40 tới CC-DT-47 | Không |
| LIC-04 | Đăng ký thay đổi nội dung GCN ĐKDN | Khách phát sinh thay đổi | Nghị quyết hoặc quyết định của cấp có thẩm quyền của khách | Bộ hồ sơ đã nộp;<br>GCN ĐKDN mới | Soạn hồ sơ 02 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi khách ký, và luôn trong hạn 10 ngày của khách | Khách phải đăng ký trong **10 ngày** kể từ ngày có thay đổi;<br>cơ quan cấp trong **03 ngày làm việc** | CC-DN-20, CC-DN-21 | Không |
| LIC-05 | Thông báo thay đổi nội dung ĐKDN | Khách phát sinh thay đổi | Nghị quyết hoặc quyết định | Thông báo đã nộp;<br>giấy xác nhận nếu khách có nhu cầu | Như LIC-04 | Khách phải thông báo trong **10 ngày**;<br>cơ quan xử lý trong **03 ngày làm việc** | CC-DN-23, CC-DN-28 | Không |
| LIC-06 | Thay đổi người đại diện theo pháp luật | Khách yêu cầu | Nghị quyết đúng cấp thẩm quyền theo loại hình;<br>xác thực điện tử của người ủy quyền và người được ủy quyền | Bộ hồ sơ đã nộp;<br>GCN ĐKDN mới | Soạn hồ sơ 02 ngày làm việc | Trong **10 ngày**;<br>cơ quan cấp trong **03 ngày làm việc** | CC-DN-26, CC-DN-14 | Không |
| LIC-07 | Thay đổi vốn điều lệ | Khách yêu cầu | Nghị quyết;<br>giấy tờ chứng minh góp vốn với phần tăng;<br>văn bản chấp thuận của Cơ quan đăng ký đầu tư nếu thuộc diện phải đăng ký | Bộ hồ sơ đã nộp;<br>GCN ĐKDN mới | Soạn hồ sơ 02 ngày làm việc | Trong **10 ngày**;<br>cơ quan cấp trong **03 ngày làm việc** | CC-DN-27 | Không |
| LIC-08 | Theo dõi hạn góp vốn điều lệ | Sau khi cấp GCN ĐKDN | Ngày cấp GCN | Nhắc khách trước hạn;<br>hồ sơ đăng ký thay đổi vốn nếu góp thiếu | Nhắc khách tại ngày thứ 60 và ngày thứ 80 kể từ ngày cấp GCN | Góp đủ trong **90 ngày**;<br>nếu thiếu thì đăng ký thay đổi vốn trong **30 ngày** kể từ ngày cuối cùng phải góp | CC-DN-40 tới CC-DN-45 | Không |
| LIC-09 | Tạm ngừng kinh doanh | Khách yêu cầu | Nghị quyết;<br>thông tin liên hệ của người đại diện theo pháp luật | Thông báo đã nộp;<br>giấy xác nhận | Gửi khách bản để ký trước ngày tạm ngừng ít nhất 08 ngày làm việc; nộp trước ngày tạm ngừng ít nhất 06 ngày làm việc, theo mốc làm trước tại [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5 | Khách phải thông báo chậm nhất **03 ngày làm việc trước ngày tạm ngừng**;<br>mỗi lần không quá **12 tháng**;<br>tổng liên tiếp không quá **24 tháng**;<br>cơ quan cấp trong **01 ngày làm việc** | CC-DN-50 tới CC-DN-55 | Không |
| LIC-10 | Xác nhận kinh doanh trở lại sau tạm ngừng | Hết thời hạn tạm ngừng | Cam kết đã thực hiện đủ nghĩa vụ đăng ký doanh nghiệp | Xác nhận đã nộp | Nhắc khách 10 ngày trước ngày kết thúc tạm ngừng;<br>nộp trong 02 ngày làm việc kể từ ngày kết thúc | **05 ngày làm việc** kể từ ngày kết thúc thời hạn tạm ngừng.<br>Không xác nhận thì có thể bị thu hồi GCN ĐKDN và buộc giải thể | CC-DN-56 | Không |
| LIC-11 | Giải thể doanh nghiệp | Khách yêu cầu | Nghị quyết giải thể;<br>báo cáo thanh lý tài sản;<br>danh sách chủ nợ đã thanh toán;<br>xác nhận của cơ quan thuế;<br>với CTCP chưa niêm yết thêm bản sao sổ đăng ký cổ đông | Hồ sơ đã nộp;<br>trạng thái đã giải thể trên hệ thống | Gửi nghị quyết trong 03 ngày làm việc kể từ khi khách thông qua;<br>chấm dứt hoạt động chi nhánh, VPĐD, địa điểm kinh doanh trước khi nộp hồ sơ giải thể | Gửi nghị quyết trong **07 ngày làm việc** kể từ ngày thông qua;<br>gửi hồ sơ giải thể trong **05 ngày làm việc** kể từ ngày thanh toán hết nợ;<br>mốc **180 ngày** | CC-DN-58 tới CC-DN-66 | Không |
| LIC-12 | Đăng ký chi nhánh, VPĐD, địa điểm kinh doanh | Khách yêu cầu | Quyết định thành lập | Hồ sơ đã nộp;<br>GCN đăng ký hoạt động | Soạn và nộp trong 03 ngày làm việc kể từ khi có quyết định | Gửi hồ sơ trong **10 ngày** kể từ ngày quyết định;<br>cơ quan cấp trong **03 ngày làm việc** | CC-DN-13 | Không |
| LIC-13 | Chấp thuận chủ trương đầu tư | Khách yêu cầu | Văn bản đề nghị;<br>tài liệu tư cách pháp lý;<br>tài liệu chứng minh năng lực tài chính;<br>đề xuất dự án;<br>giải trình công nghệ | Hồ sơ đã nộp;<br>Quyết định chấp thuận chủ trương | Soạn hồ sơ 10 ngày làm việc kể từ khi đủ tài liệu | Tùy cấp thẩm quyền. Chủ tịch UBND cấp tỉnh: báo cáo thẩm định trong **14 ngày làm việc**, quyết định trong **03 ngày làm việc**.<br>Ban quản lý KCN: **17 ngày làm việc**.<br>Thủ tướng: thẩm định **20 ngày làm việc**, quyết định **05 ngày làm việc** | CC-DT-01 tới CC-DT-06 | Không |
| LIC-14 | Cấp GCN đăng ký đầu tư | Khách yêu cầu | Hồ sơ theo Đ.32 k.1 Nghị định 96/2026;<br>kết luận điều kiện tiếp cận thị trường | GCNĐKĐT | Soạn hồ sơ 05 ngày làm việc kể từ khi đủ tài liệu | Thuộc diện chấp thuận chủ trương: **05 ngày làm việc** kể từ ngày có Quyết định.<br>Không thuộc diện: **10 ngày làm việc** kể từ ngày nhận hồ sơ hợp lệ | CC-DT-07 tới CC-DT-12 | Không |
| LIC-15 | Theo dõi mốc 12 tháng của tổ chức kinh tế do NĐTNN lập trước GCNĐKĐT | Sau LIC-03 | Ngày thành lập tổ chức kinh tế | Nhắc khách;<br>hồ sơ cấp GCNĐKĐT | Nhắc khách tại tháng thứ 6, tháng thứ 9 và tháng thứ 11 | **12 tháng** kể từ ngày thành lập phải hoàn thành thủ tục cấp GCNĐKĐT.<br>Trước khi có GCNĐKĐT thì cấm bổ sung ngành nghề khác và cấm thực hiện dự án | CC-DT-13 | Không |
| LIC-16 | Đăng ký góp vốn, mua cổ phần của nhà đầu tư nước ngoài | Khách yêu cầu | Văn bản đăng ký;<br>tài liệu tư cách pháp lý;<br>văn bản thỏa thuận nguyên tắc;<br>thông tin GCN quyền sử dụng đất nếu thuộc diện | Văn bản chấp thuận của Cơ quan đăng ký đầu tư | Soạn hồ sơ 03 ngày làm việc;<br>phải nộp trước khi khách thay đổi thành viên, cổ đông | Cơ quan xử lý trong **10 ngày làm việc**.<br>Có đất tại khu vực ảnh hưởng quốc phòng an ninh thì vẫn **10 ngày làm việc** nhưng có bước lấy ý kiến | CC-DT-20 tới CC-DT-30 | Không |
| LIC-17 | Tra điều kiện tiếp cận thị trường | Trước LIC-03, LIC-14, LIC-16, và trước khi bổ sung ngành nghề cho khách FDI | Danh sách ngành nghề dự kiến | Bản tra có ghi ngày tra, nguồn tra, và kết luận theo từng ngành nghề | 01 ngày làm việc | Không có | CC-DT-40 tới CC-DT-48 | Không |
| LIC-18 | Cấp giấy phép lao động cho người nước ngoài | Khách yêu cầu | Văn bản Mẫu số 03;<br>giấy khám sức khỏe;<br>hộ chiếu còn hạn;<br>phiếu lý lịch tư pháp cấp không quá 6 tháng;<br>02 ảnh 4x6 nền trắng;<br>giấy tờ chứng minh hình thức làm việc;<br>giấy tờ chứng minh là nhà quản lý, chuyên gia hoặc lao động kỹ thuật | Giấy phép lao động | Soạn hồ sơ 03 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa và dịch công chứng;<br>nộp sao cho đạt hạn dưới | Nộp **trong 60 ngày nhưng không ít hơn 10 ngày** tính đến ngày dự kiến làm việc;<br>cơ quan cấp trong **10 ngày làm việc** | CC-LIC-01 tới CC-LIC-06 | Không |
| LIC-19 | Gia hạn giấy phép lao động | Giấy phép sắp hết hạn | Văn bản Mẫu số 03;<br>hồ sơ theo Đ.27 Nghị định 219/2025 | Giấy phép đã gia hạn | Tạo Job tự động 60 ngày trước ngày hết hạn;<br>soạn hồ sơ 03 ngày làm việc | Nộp **trước ít nhất 10 ngày nhưng không quá 45 ngày** trước khi hết hạn `[CC-LIC-09]`;<br>cơ quan giải quyết trong **10 ngày làm việc**;<br>chỉ được gia hạn **01 lần**, tối đa **02 năm** | CC-LIC-09 | Không |
| LIC-20 | Cấp lại giấy phép lao động | Mất, hỏng, hoặc thay đổi thông tin | Hồ sơ 4 loại theo Đ.24 | Giấy phép cấp lại | Soạn hồ sơ 02 ngày làm việc | Cơ quan giải quyết trong **03 ngày làm việc**;<br>thời hạn giấy cấp lại bằng thời hạn giấy đã cấp trừ thời gian đã làm việc | CC-LIC-10 | Không |
| LIC-21 | Giấy xác nhận không thuộc diện cấp giấy phép lao động | Khách có người nước ngoài thuộc diện miễn | Hồ sơ chứng minh thuộc diện miễn | Giấy xác nhận, hoặc bản ghi đã thông báo với trường hợp chỉ phải thông báo | Soạn hồ sơ 02 ngày làm việc | Nộp **trong 60 ngày và không ít hơn 10 ngày** trước ngày dự kiến làm việc; cơ quan cấp trong **05 ngày làm việc**.<br>Trường hợp chỉ phải thông báo: **trước ít nhất 03 ngày làm việc** | CC-LIC-12 | Không |
| LIC-22 | Điều phối đối tác thuê ngoài | Nghiệp vụ oBacker không tự làm | Kết luận cần đối tác thuê ngoài tại LIC-01;<br>phạm vi, thời hạn và chi phí đã chốt với đối tác | Sản phẩm của đối tác đã được soát xét và đã chuẩn hóa theo biểu mẫu oBacker | Soát xét sản phẩm của đối tác trong 02 ngày làm việc kể từ khi nhận;<br>đối tác không được liên hệ trực tiếp khách | Theo nghiệp vụ | Nội bộ | Không |
| LIC-23 | Bàn giao kết quả và hướng dẫn sau cấp phép | Có kết quả | Giấy phép đã kiểm tra đúng thông tin | Bản mềm và bản cứng;<br>ghi chú nghĩa vụ sau cấp phép, thời hạn hiệu lực và mốc gia hạn, việc phải làm tiếp và bên chịu trách nhiệm | Bàn giao AM trong 01 ngày làm việc kể từ khi nhận kết quả | Không có | Nội bộ | Không |
| LIC-24 | Đăng ký hạn gia hạn vào lịch theo dõi | Sau LIC-23 | Ngày hết hạn của giấy phép | Job gia hạn đã được tạo trước với ngày kích hoạt | Ngay tại bước 3 của Job gốc, trước khi đóng Job | Không có | Nội bộ | Không |
| LIC-25 | Cấp Giấy phép kinh doanh bán lẻ hàng hóa cho DN FDI | Khách yêu cầu | Báo cáo tài chính, xác nhận không nợ thuế, thông tin mặt hàng và phương thức bán lẻ | Giấy phép kinh doanh bán lẻ do Sở Công Thương cấp | Soạn hồ sơ 05 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi ký | Thẩm định và lấy ý kiến từ 21 ngày làm việc đến 28 ngày làm việc | Nghị định 09/2018/NĐ-CP Điều 5, Điều 9, Điều 12, Điều 13 (đến 17/10/2026); Nghị định 342/2026/NĐ-CP Điều 5, Điều 9, Điều 11, Điều 12 (từ 18/10/2026) | Không |
| LIC-26 | Cấp Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm | Khách yêu cầu | Mặt bằng cơ sở, danh sách nhân sự, giấy khám sức khỏe, quy trình chế biến | Giấy chứng nhận cơ sở đủ điều kiện ATTP | Hướng dẫn cơ sở và lập hồ sơ 03 - 05 ngày làm việc;<br>nộp trong 01 ngày làm việc | Thẩm định thực tế và cấp phép trong 20 ngày làm việc | Luật An toàn thực phẩm 2010 Điều 34, Điều 36; Nghị định 15/2018/NĐ-CP Điều 11, Điều 12 | Không |
| LIC-27 | Đăng ký hoạt động tổ chức khoa học và công nghệ | Khách yêu cầu | Điều lệ, quyết định thành lập, hồ sơ 05 nhân sự đại học, hợp đồng thuê trụ sở | Giấy chứng nhận đăng ký hoạt động KH&CN | Soạn hồ sơ 04 ngày làm việc;<br>rà soát nhân sự 02 ngày làm việc;<br>nộp trong 01 ngày làm việc | Cấp trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ | Luật Khoa học và Công nghệ 2013 Điều 11; Nghị định 08/2014/NĐ-CP Điều 5, Điều 6 | Không |
| LIC-28 | Thông báo website thương mại điện tử bán hàng | Khách yêu cầu | Tên miền hợp lệ, thông tin doanh nghiệp, bộ 06 chính sách chuẩn trên website theo CC-LIC-28-TMDT-04 đến CC-LIC-28-TMDT-09 | Xác nhận thông báo và mã nhúng biểu tượng xanh của Bộ Công Thương | Rà soát website theo CC-LIC-28-TMDT-01, soạn chính sách 02 ngày làm việc;<br>nộp trực tuyến 01 ngày làm việc | Chưa có mốc theo pháp luật đã đối chiếu bản gốc; đối chiếu bản gốc trước khi nộp | Luật 122/2025/QH15 Điều 3, 5, 11;<br>NĐ 248/2026/NĐ-CP Điều 4, 5, 8, 10, 13, 14, 23;<br>NĐ 117/2025/NĐ-CP Điều 4, 5, 7;<br>xem căn cứ CC-LIC-28-TMDT-01 đến 12 | Không |
| LIC-29 | Đăng ký website cung cấp dịch vụ TMĐT (Sàn giao dịch TMĐT) | Khách yêu cầu | Đề án cung cấp dịch vụ sàn giao dịch, Quy chế quản lý sàn thương mại điện tử, Hợp đồng dịch vụ mẫu, website hoàn thiện | Giấy xác nhận đăng ký và mã nhúng biểu tượng đỏ của Bộ Công Thương | Soạn Đề án và Quy chế 05 - 07 ngày làm việc;<br>nộp hồ sơ giấy trong 02 ngày làm việc sau duyệt điện tử | Thẩm định điện tử 07 ngày làm việc; cấp phép hồ sơ giấy 05 ngày làm việc | Nghị định 52/2013/NĐ-CP Điều 54, Điều 55; Nghị định 85/2021/NĐ-CP;<br>hiện đang chặn | Không |
| LIC-30 | Đăng ký xác lập quyền nhãn hiệu | Khách yêu cầu | Mẫu nhãn hiệu, danh mục sản phẩm/dịch vụ dự kiến, thông tin chủ sở hữu | Giấy biên nhận nộp đơn (giữ ngày nộp đơn ưu tiên); Giấy chứng nhận đăng ký nhãn hiệu | Tra cứu sơ bộ 01 ngày làm việc;<br>soạn hồ sơ và nộp trong 24 giờ đến 48 giờ làm việc sau ký | Thẩm định hình thức 01 tháng; thẩm định nội dung 09 tháng (thực tế 12 - 16 tháng) | CC-LIC-30-MARKS-01 tới CC-LIC-30-MARKS-10 | Không |
| LIC-31 | Đăng ký quyền tác giả (phần mềm, tác phẩm viết, mỹ thuật) | Khách yêu cầu | Bản sao tác phẩm, mã nguồn, tài liệu chứng minh quyền chủ sở hữu | Giấy chứng nhận đăng ký quyền tác giả do Cục Bản quyền tác giả cấp | Soạn hồ sơ và in đóng tập 03 ngày làm việc;<br>nộp trong 01 ngày làm việc sau khi ký | Cấp Giấy chứng nhận trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ | Luật Sở hữu trí tuệ 2005 (sửa đổi 2022); Nghị định 17/2023/NĐ-CP Điều 38;<br>hiện đang chặn | Không |

%%/JOBTABLE:LIC%%

## 3. BẢNG KIỂM THEO JOB

### LIC-01. Đánh giá điều kiện và tính khả thi

1. AM chuyển yêu cầu của khách; CV-LIC nhận Job, ghi sự kiện Nhận.
2. CV-LIC thu thông tin thực tế của khách (chủ thể, ngành nghề, vốn, địa điểm, nhân sự); thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. Với nghiệp vụ quen, CV-LIC đối chiếu hướng dẫn mới nhất với thực tế của khách và mở văn bản gốc.
4. Với nghiệp vụ lạ, CV-LIC hỏi LEG qua Job RD-09 về điều kiện, trình tự, thời hạn, cơ quan cấp phép, chi phí, ghi sự kiện Phát sinh việc, và tự tìm hiểu thực tế áp dụng.
5. CV-LIC soạn bản đánh giá (đủ, chưa đủ, hoặc cần bổ sung gì, kèm mã căn cứ) và kết luận tự làm hay cần đối tác thuê ngoài; TL-LIC quyết, ghi sự kiện Quyết định; cần đối tác thuê ngoài thì mở Job LIC-22, ghi sự kiện Phát sinh việc.
6. AM gửi bản đánh giá cho khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: AM kiểm trước khi thu phí và trước khi soạn hồ sơ rằng khách đã nhận bản đánh giá và xác nhận muốn tiếp tục dù chưa đủ điều kiện (nếu thiếu xác nhận thì dừng Job, vì oBacker không cam kết kết quả cấp phép); với nghiệp vụ lạ, TL-LIC kiểm trước khi soạn hồ sơ rằng cơ sở pháp lý từ LEG đã ghi đủ 5 mục gồm điều kiện, trình tự, thời hạn, cơ quan cấp, chi phí (nếu thiếu thì chờ Job RD-09); CV-LIC ghi mã căn cứ sau khi mở văn bản gốc, TL-LIC kiểm, kể cả với nghiệp vụ quen.

Thời hạn: theo pháp luật: không có; nội bộ oBacker: 02 ngày làm việc với nghiệp vụ quen; nghiệp vụ lạ 05 ngày làm việc, trong đó Job RD-09 chiếm 03 ngày làm việc và Bộ phận Giấy phép chiếm 02 ngày làm việc soạn bản đánh giá; văn bản chưa có trong kho thì RD-09 không cam kết mốc, và AM trả lời khách bằng một mốc hẹn.

### LIC-02. Thành lập doanh nghiệp trong nước

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: thông tin thành viên, cổ đông, vốn, ngành nghề, trụ sở; giấy tờ pháp lý cá nhân hoặc số định danh; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm bộ hồ sơ đã nộp, GCN ĐKDN và biên nhận, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: cơ quan cấp trong 03 ngày làm việc; căn cứ: CC-DN-01 tới CC-DN-09; nội bộ oBacker: soạn hồ sơ 02 ngày làm việc kể từ khi đủ thông tin; nộp trong 01 ngày làm việc sau khi khách ký.

### LIC-03. Thành lập doanh nghiệp có vốn nước ngoài

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái; mở Job LIC-17, ghi sự kiện Phát sinh việc.
2. CV-LIC thu đủ đầu vào: như LIC-02, cộng giấy tờ pháp lý tổ chức nước ngoài đã hợp pháp hóa lãnh sự; kết luận điều kiện tiếp cận thị trường; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm bộ hồ sơ đã nộp và GCN ĐKDN, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: bản tra điều kiện tiếp cận thị trường đã ghi ngày tra, TL-LIC kiểm trước khi soạn (thiếu thì quay lại Job LIC-17); trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: cơ quan cấp trong 03 ngày làm việc; căn cứ: CC-DN-06, CC-DT-40 tới CC-DT-47; nội bộ oBacker: soạn hồ sơ 05 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa.

### LIC-04. Đăng ký thay đổi nội dung GCN ĐKDN

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: nghị quyết hoặc quyết định của cấp có thẩm quyền của khách; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm bộ hồ sơ đã nộp và GCN ĐKDN mới, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: khách phải đăng ký trong 10 ngày kể từ ngày có thay đổi; cơ quan cấp trong 03 ngày làm việc; căn cứ: CC-DN-20, CC-DN-21; nội bộ oBacker: soạn hồ sơ 02 ngày làm việc; nộp trong 01 ngày làm việc sau khi khách ký, và luôn trong hạn 10 ngày của khách.

### LIC-05. Thông báo thay đổi nội dung ĐKDN

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: nghị quyết hoặc quyết định; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm thông báo đã nộp và giấy xác nhận nếu khách có nhu cầu, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: khách phải thông báo trong 10 ngày; cơ quan xử lý trong 03 ngày làm việc; căn cứ: CC-DN-23, CC-DN-28; nội bộ oBacker: như LIC-04.

### LIC-06. Thay đổi người đại diện theo pháp luật

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: nghị quyết đúng cấp thẩm quyền theo loại hình; xác thực điện tử của người ủy quyền và người được ủy quyền; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm bộ hồ sơ đã nộp và GCN ĐKDN mới, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: trong 10 ngày; cơ quan cấp trong 03 ngày làm việc; căn cứ: CC-DN-26, CC-DN-14; nội bộ oBacker: soạn hồ sơ 02 ngày làm việc.

### LIC-07. Thay đổi vốn điều lệ

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: nghị quyết; giấy tờ chứng minh góp vốn với phần tăng; văn bản chấp thuận của Cơ quan đăng ký đầu tư nếu thuộc diện phải đăng ký; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm bộ hồ sơ đã nộp và GCN ĐKDN mới, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: trong 10 ngày; cơ quan cấp trong 03 ngày làm việc; căn cứ: CC-DN-27; nội bộ oBacker: soạn hồ sơ 02 ngày làm việc.

### LIC-08. Theo dõi hạn góp vốn điều lệ

1. CV-LIC nhận Job theo lịch sau khi cấp GCN ĐKDN, ghi sự kiện Tạo và Nhận vào sổ cái; lấy ngày cấp GCN làm đầu vào.
2. CV-LIC mở văn bản gốc và ghi mã căn cứ CC-DN-40 tới CC-DN-45 vào sổ cái.
3. CV-LIC lập nội dung nhắc khách tại ngày thứ 60 và ngày thứ 80 kể từ ngày cấp GCN; AM gửi khách, ghi sự kiện Gửi khách mỗi lần nhắc.
4. Nếu khách góp thiếu vốn, CV-LIC lập hồ sơ đăng ký thay đổi vốn, ghi sự kiện Phát sinh việc vào sổ cái.
5. CV-LIC ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: góp đủ trong 90 ngày; nếu thiếu thì đăng ký thay đổi vốn trong 30 ngày kể từ ngày cuối cùng phải góp; căn cứ: CC-DN-40 tới CC-DN-45; nội bộ oBacker: nhắc khách tại ngày thứ 60 và ngày thứ 80 kể từ ngày cấp GCN.

### LIC-09. Tạm ngừng kinh doanh

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: nghị quyết; thông tin liên hệ của người đại diện theo pháp luật; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm thông báo đã nộp và giấy xác nhận, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: khách phải thông báo chậm nhất 03 ngày làm việc trước ngày tạm ngừng; mỗi lần không quá 12 tháng; tổng liên tiếp không quá 24 tháng; cơ quan cấp trong 01 ngày làm việc; căn cứ: CC-DN-50 tới CC-DN-55; nội bộ oBacker: gửi khách bản để ký trước ngày tạm ngừng ít nhất 08 ngày làm việc; nộp trước ngày tạm ngừng ít nhất 06 ngày làm việc.

### LIC-10. Xác nhận kinh doanh trở lại sau tạm ngừng

1. Job tự động tạo theo thời hạn tạm ngừng của khách; CV-LIC nhận Job, ghi sự kiện Tạo và Nhận vào sổ cái.
2. CV-LIC mở văn bản gốc và ghi mã căn cứ CC-DN-56 vào sổ cái.
3. AM nhắc khách 10 ngày trước ngày kết thúc tạm ngừng, ghi sự kiện Gửi khách; CV-LIC thu cam kết đã thực hiện đủ nghĩa vụ đăng ký doanh nghiệp.
4. CV-LIC soạn xác nhận kinh doanh trở lại; AM gửi khách ký, ghi sự kiện Gửi khách.
5. CV-LIC nộp trong 02 ngày làm việc kể từ ngày kết thúc tạm ngừng; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
6. CV-LIC chuyển xác nhận đã nộp cho AM; AM gửi khách; ghi các sự kiện Chuyển, Gửi khách, Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: 05 ngày làm việc kể từ ngày kết thúc thời hạn tạm ngừng. Không xác nhận thì có thể bị thu hồi GCN ĐKDN và buộc giải thể; căn cứ: CC-DN-56; nội bộ oBacker: nhắc khách 10 ngày trước ngày kết thúc tạm ngừng; nộp trong 02 ngày làm việc kể từ ngày kết thúc.

### LIC-11. Giải thể doanh nghiệp

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: nghị quyết giải thể; báo cáo thanh lý tài sản; danh sách chủ nợ đã thanh toán; xác nhận của cơ quan thuế; với CTCP chưa niêm yết thêm bản sao sổ đăng ký cổ đông; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm hồ sơ đã nộp và trạng thái đã giải thể trên hệ thống, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: gửi nghị quyết trong 07 ngày làm việc kể từ ngày thông qua; gửi hồ sơ giải thể trong 05 ngày làm việc kể từ ngày thanh toán hết nợ; mốc 180 ngày; căn cứ: CC-DN-58 tới CC-DN-66; nội bộ oBacker: gửi nghị quyết trong 03 ngày làm việc kể từ khi khách thông qua; chấm dứt hoạt động chi nhánh, VPĐD, địa điểm kinh doanh trước khi nộp hồ sơ giải thể.

### LIC-12. Đăng ký chi nhánh, VPĐD, địa điểm kinh doanh

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: quyết định thành lập; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm hồ sơ đã nộp và GCN đăng ký hoạt động, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: gửi hồ sơ trong 10 ngày kể từ ngày quyết định; cơ quan cấp trong 03 ngày làm việc; căn cứ: CC-DN-13; nội bộ oBacker: soạn và nộp trong 03 ngày làm việc kể từ khi có quyết định.

### LIC-13. Chấp thuận chủ trương đầu tư

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: văn bản đề nghị; tài liệu tư cách pháp lý; tài liệu chứng minh năng lực tài chính; đề xuất dự án; giải trình công nghệ; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm hồ sơ đã nộp và quyết định chấp thuận chủ trương, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: tùy cấp thẩm quyền. Chủ tịch UBND cấp tỉnh: báo cáo thẩm định trong 14 ngày làm việc, quyết định trong 03 ngày làm việc. Ban quản lý KCN: 17 ngày làm việc. Thủ tướng: thẩm định 20 ngày làm việc, quyết định 05 ngày làm việc; căn cứ: CC-DT-01 tới CC-DT-06; nội bộ oBacker: soạn hồ sơ 10 ngày làm việc kể từ khi đủ tài liệu.

### LIC-14. Cấp GCN đăng ký đầu tư

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái; mở Job LIC-17, ghi sự kiện Phát sinh việc.
2. CV-LIC thu đủ đầu vào: hồ sơ theo Đ.32 k.1 Nghị định 96/2026; kết luận điều kiện tiếp cận thị trường; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm GCNĐKĐT, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: bản tra điều kiện tiếp cận thị trường đã ghi ngày tra, TL-LIC kiểm trước khi soạn (thiếu thì quay lại Job LIC-17); trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: thuộc diện chấp thuận chủ trương: 05 ngày làm việc kể từ ngày có Quyết định. Không thuộc diện: 10 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ; căn cứ: CC-DT-07 tới CC-DT-12; nội bộ oBacker: soạn hồ sơ 05 ngày làm việc kể từ khi đủ tài liệu.

### LIC-15. Theo dõi mốc 12 tháng của tổ chức kinh tế do NĐTNN lập trước GCNĐKĐT

1. CV-LIC nhận Job theo lịch sau Job LIC-03, ghi sự kiện Tạo và Nhận vào sổ cái; lấy ngày thành lập tổ chức kinh tế làm đầu vào.
2. CV-LIC mở văn bản gốc và ghi mã căn cứ CC-DT-13 vào sổ cái.
3. CV-LIC lập nội dung nhắc khách tại tháng thứ 6, tháng thứ 9 và tháng thứ 11; AM gửi khách, ghi sự kiện Gửi khách mỗi lần nhắc.
4. CV-LIC lập hồ sơ cấp GCNĐKĐT; ghi sự kiện Phát sinh việc vào sổ cái.
5. CV-LIC ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: 12 tháng kể từ ngày thành lập phải hoàn thành thủ tục cấp GCNĐKĐT. Trước khi có GCNĐKĐT thì cấm bổ sung ngành nghề khác và cấm thực hiện dự án; căn cứ: CC-DT-13; nội bộ oBacker: nhắc khách tại tháng thứ 6, tháng thứ 9 và tháng thứ 11.

### LIC-16. Đăng ký góp vốn, mua cổ phần của nhà đầu tư nước ngoài

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái; mở Job LIC-17, ghi sự kiện Phát sinh việc.
2. CV-LIC thu đủ đầu vào: văn bản đăng ký; tài liệu tư cách pháp lý; văn bản thỏa thuận nguyên tắc; thông tin GCN quyền sử dụng đất nếu thuộc diện; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm văn bản chấp thuận của Cơ quan đăng ký đầu tư, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: bản tra điều kiện tiếp cận thị trường đã ghi ngày tra, TL-LIC kiểm trước khi soạn (thiếu thì quay lại Job LIC-17); trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: cơ quan xử lý trong 10 ngày làm việc. Có đất tại khu vực ảnh hưởng quốc phòng an ninh thì vẫn 10 ngày làm việc nhưng có bước lấy ý kiến; căn cứ: CC-DT-20 tới CC-DT-30; nội bộ oBacker: soạn hồ sơ 03 ngày làm việc; phải nộp trước khi khách thay đổi thành viên, cổ đông.

### LIC-17. Tra điều kiện tiếp cận thị trường

1. CV-LIC nhận Job trước Job LIC-03, LIC-14, LIC-16 hoặc trước khi bổ sung ngành nghề cho khách FDI, ghi sự kiện Nhận vào sổ cái; lấy danh sách ngành nghề dự kiến làm đầu vào.
2. CV-LIC đọc phụ lục danh mục ngành nghề hiện hành trong kho, rồi đối chiếu nguồn công bố chính thức của Nhà nước về đầu tư để nắm phần đã đổi sau ngày ban hành.
3. CV-LIC lập bản tra ghi ngày tra, nguồn tra và kết luận theo từng ngành nghề, trong 01 ngày làm việc.
4. CV-LIC ghi các sự kiện Chuyển, Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: bản tra ghi ngày tra, nguồn tra và kết luận theo từng ngành nghề (nếu thiếu ngày tra thì Job LIC-03, LIC-14, LIC-16 quay lại Job LIC-17).

Thời hạn: theo pháp luật: không có; nội bộ oBacker: 01 ngày làm việc.

### LIC-18. Cấp giấy phép lao động cho người nước ngoài

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: văn bản Mẫu số 03; giấy khám sức khỏe; hộ chiếu còn hạn; phiếu lý lịch tư pháp cấp không quá 6 tháng; 02 ảnh 4x6 nền trắng; giấy tờ chứng minh hình thức làm việc; giấy tờ chứng minh là nhà quản lý, chuyên gia hoặc lao động kỹ thuật; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm giấy phép lao động, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: nộp trong 60 ngày nhưng không ít hơn 10 ngày tính đến ngày dự kiến làm việc; cơ quan cấp trong 10 ngày làm việc; căn cứ: CC-LIC-01 tới CC-LIC-06; nội bộ oBacker: soạn hồ sơ 03 ngày làm việc kể từ khi đủ giấy tờ đã hợp pháp hóa và dịch công chứng; nộp sao cho đạt hạn dưới.

### LIC-19. Gia hạn giấy phép lao động

1. Job tự động tạo 60 ngày trước ngày hết hạn giấy phép; CV-LIC nhận Job, ghi sự kiện Tạo và Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: văn bản Mẫu số 03; hồ sơ theo Đ.27 Nghị định 219/2025; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm giấy phép đã gia hạn, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: nộp trước ít nhất 10 ngày nhưng không quá 45 ngày trước khi hết hạn CC-LIC-09; cơ quan giải quyết trong 10 ngày làm việc; chỉ được gia hạn 01 lần, tối đa 02 năm; nội bộ oBacker: tạo Job tự động 60 ngày trước ngày hết hạn; soạn hồ sơ 03 ngày làm việc.

### LIC-20. Cấp lại giấy phép lao động

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: hồ sơ 4 loại theo Đ.24; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm giấy phép cấp lại, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: cơ quan giải quyết trong 03 ngày làm việc; thời hạn giấy cấp lại bằng thời hạn giấy đã cấp trừ thời gian đã làm việc; căn cứ: CC-LIC-10; nội bộ oBacker: soạn hồ sơ 02 ngày làm việc.

### LIC-21. Giấy xác nhận không thuộc diện cấp giấy phép lao động

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: hồ sơ chứng minh thuộc diện miễn; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm giấy xác nhận, hoặc bản ghi đã thông báo với trường hợp chỉ phải thông báo, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: nộp trong 60 ngày và không ít hơn 10 ngày trước ngày dự kiến làm việc; cơ quan cấp trong 05 ngày làm việc. Trường hợp chỉ phải thông báo: trước ít nhất 03 ngày làm việc; căn cứ: CC-LIC-12; nội bộ oBacker: soạn hồ sơ 02 ngày làm việc.

### LIC-22. Điều phối đối tác thuê ngoài

1. CV-LIC nhận kết luận cần đối tác thuê ngoài từ Job LIC-01, ghi sự kiện Nhận vào sổ cái.
2. CV-LIC chốt phạm vi, thời hạn và chi phí với đối tác. TL-LIC đề xuất nhận việc cần đối tác thuê ngoài; COO quyết định; CEO quyết định khi vượt hạn mức chi, theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]]. Người quyết ghi sự kiện Duyệt.
3. CV-LIC chuyển việc cho đối tác, ghi sự kiện Chuyển; Bộ phận Giấy phép là đầu mối duy nhất, đối tác liên hệ khách qua CV-LIC.
4. CV-LIC soát xét sản phẩm của đối tác trong 02 ngày làm việc kể từ khi nhận, chuẩn hóa theo biểu mẫu oBacker.
5. CV-LIC lưu hồ sơ do đối tác làm như hồ sơ tự làm; sau khi kết thúc, đánh giá đối tác.
6. CV-LIC ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: theo nghiệp vụ; nội bộ oBacker: soát xét sản phẩm của đối tác trong 02 ngày làm việc kể từ khi nhận; đối tác không được liên hệ trực tiếp khách.

### LIC-23. Bàn giao kết quả và hướng dẫn sau cấp phép

1. CV-LIC nhận kết quả từ cơ quan, ghi sự kiện Nhận vào sổ cái.
2. CV-LIC kiểm giấy phép đúng thông tin so với hồ sơ đã nộp.
3. CV-LIC lập bản mềm và bản cứng, kèm ghi chú nghĩa vụ sau cấp phép, thời hạn hiệu lực và mốc gia hạn, việc phải làm tiếp và bên chịu trách nhiệm.
4. CV-LIC bàn giao AM trong 01 ngày làm việc kể từ khi nhận kết quả, ghi sự kiện Chuyển; AM gửi khách, ghi sự kiện Gửi khách.
5. CV-LIC ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: giấy phép đã kiểm đúng thông tin trước khi bàn giao, TL-LIC kiểm (nếu sai khác thì làm thủ tục hiệu đính trước khi bàn giao khách).

Thời hạn: theo pháp luật: không có; nội bộ oBacker: bàn giao AM trong 01 ngày làm việc kể từ khi nhận kết quả.

### LIC-24. Đăng ký hạn gia hạn vào lịch theo dõi

1. CV-LIC lấy ngày hết hạn của giấy phép làm đầu vào.
2. CV-LIC tạo trước Job gia hạn kèm ngày kích hoạt, ghi sự kiện Tạo và Phát sinh việc vào sổ cái.
3. CV-LIC đóng Job gốc sau khi Job gia hạn đã tạo; ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: Job gia hạn đã tạo cho giấy phép có thời hạn, TL-LIC kiểm trước khi đóng Job gốc (nếu thiếu thì dừng đóng Job).

Thời hạn: theo pháp luật: không có; nội bộ oBacker: ngay trước khi đóng Job gốc.

### LIC-25. Cấp Giấy phép kinh doanh bán lẻ hàng hóa cho DN FDI

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: báo cáo tài chính, xác nhận không nợ thuế, thông tin mặt hàng và phương thức bán lẻ; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày. CV-LIC cập nhật tiến độ ý kiến của Bộ Công Thương cho AM, cứ 03 ngày làm việc một lần.
6. CV-LIC chuyển cho AM kết quả gồm giấy phép kinh doanh bán lẻ do Sở Công Thương cấp, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: xác nhận không nợ thuế cấp không quá 30 ngày tính đến ngày nộp (có nợ thuế quá hạn thì dừng nộp); biểu mẫu theo ngày nộp: trước 18/10/2026 theo Nghị định 09/2018/NĐ-CP, từ 18/10/2026 theo Nghị định 342/2026/NĐ-CP; trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: thẩm định và lấy ý kiến từ 21 ngày làm việc đến 28 ngày làm việc; căn cứ: Nghị định 09/2018/NĐ-CP Điều 5, Điều 9, Điều 12, Điều 13 (đến 17/10/2026); Nghị định 342/2026/NĐ-CP Điều 5, Điều 9, Điều 11, Điều 12 (từ 18/10/2026); nội bộ oBacker: soạn hồ sơ 05 ngày làm việc; nộp trong 01 ngày làm việc sau khi ký.

### LIC-26. Cấp Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: mặt bằng cơ sở, danh sách nhân sự, giấy khám sức khỏe, quy trình chế biến; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày. AM thông báo kế hoạch kiểm tra cho khách trước ít nhất 02 ngày làm việc; CV-LIC rà hiện trường trước giờ đoàn thẩm định làm việc.
6. CV-LIC chuyển cho AM kết quả gồm giấy chứng nhận cơ sở đủ điều kiện ATTP, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, kiểm mặt bằng thực tế: khu sơ chế, chế biến, bảo quản theo nguyên tắc một chiều; đủ bồn rửa tay, xà phòng sát khuẩn, bảo hộ lao động; vắng dấu hiệu động vật gây hại; trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: thẩm định thực tế và cấp phép trong 20 ngày làm việc; căn cứ: Luật An toàn thực phẩm 2010 Điều 34, Điều 36; Nghị định 15/2018/NĐ-CP Điều 11, Điều 12; nội bộ oBacker: hướng dẫn cơ sở và lập hồ sơ 03 - 05 ngày làm việc; nộp trong 01 ngày làm việc.

### LIC-27. Đăng ký hoạt động tổ chức khoa học và công nghệ

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: điều lệ, quyết định thành lập, hồ sơ 05 nhân sự đại học, hợp đồng thuê trụ sở; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm giấy chứng nhận đăng ký hoạt động KH&CN, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, kiểm tỷ lệ 30% nhân sự có bằng cấp đúng ngành hoặc chuyên ngành phù hợp với lĩnh vực nghiên cứu chính ghi trong Điều lệ, và hợp đồng lao động là hợp đồng làm việc chính thức; trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: cấp trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ; căn cứ: Luật Khoa học và Công nghệ 2013 Điều 11; Nghị định 08/2014/NĐ-CP Điều 5, Điều 6; nội bộ oBacker: soạn hồ sơ 04 ngày làm việc; rà soát nhân sự 02 ngày làm việc; nộp trong 01 ngày làm việc.

### LIC-28. Thông báo website thương mại điện tử bán hàng

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: tên miền hợp lệ, thông tin doanh nghiệp, bộ 06 chính sách chuẩn trên website theo CC-LIC-28-TMDT-04 đến CC-LIC-28-TMDT-09; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp trực tuyến; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm xác nhận thông báo và mã nhúng biểu tượng xanh của Bộ Công Thương, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: sau khi cơ quan duyệt, kiểm mã nhúng biểu tượng đã gắn vào chân trang website và liên kết trỏ đúng trang thông tin của website; trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: chưa có mốc đã đối chiếu bản gốc, đối chiếu bản gốc trước khi nộp; căn cứ: Luật 122/2025/QH15 Điều 3, 5, 11; Nghị định 248/2026/NĐ-CP Điều 4, 5, 8, 10, 13, 14, 23; Nghị định 117/2025/NĐ-CP Điều 4, 5, 7; CC-LIC-28-TMDT-01 đến CC-LIC-28-TMDT-12; nội bộ oBacker: rà soát website theo CC-LIC-28-TMDT-01, soạn chính sách 02 ngày làm việc; nộp trực tuyến 01 ngày làm việc.

### LIC-29. Đăng ký website cung cấp dịch vụ TMĐT (Sàn giao dịch TMĐT)

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: đề án cung cấp dịch vụ sàn giao dịch, Quy chế quản lý sàn thương mại điện tử, Hợp đồng dịch vụ mẫu, website hoàn thiện; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ điện tử, rồi nộp hồ sơ giấy sau khi duyệt điện tử; ghi sự kiện Nộp cơ quan kèm số biên nhận mỗi lần nộp.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm giấy xác nhận đăng ký và mã nhúng biểu tượng đỏ của Bộ Công Thương, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: sau khi cơ quan duyệt, kiểm mã nhúng biểu tượng đã gắn vào chân trang website và liên kết trỏ đúng trang thông tin của website; trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: thẩm định điện tử 07 ngày làm việc; cấp phép hồ sơ giấy 05 ngày làm việc; căn cứ: Nghị định 52/2013/NĐ-CP Điều 54, Điều 55; Nghị định 85/2021/NĐ-CP; nội bộ oBacker: soạn Đề án và Quy chế 05 - 07 ngày làm việc; nộp hồ sơ giấy trong 02 ngày làm việc sau duyệt điện tử.

### LIC-30. Đăng ký xác lập quyền nhãn hiệu

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: mẫu nhãn hiệu, danh mục sản phẩm/dịch vụ dự kiến, thông tin chủ sở hữu; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày. CV-LIC báo AM sau mỗi mốc của đơn.
6. CV-LIC chuyển cho AM kết quả gồm giấy biên nhận nộp đơn (giữ ngày nộp đơn ưu tiên) và giấy chứng nhận đăng ký nhãn hiệu, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp đơn, kiểm phân loại nhóm theo Bảng phân loại Nice, mô tả danh mục rõ ràng, và khả năng tương tự với nhãn hiệu đã bảo hộ; AM giao khách giấy biên nhận có dấu của cơ quan, thông báo thời gian thẩm định thực tế từ 12 tháng đến 16 tháng, và không cam kết thời hạn 09 tháng; trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: thẩm định hình thức 01 tháng; thẩm định nội dung 09 tháng (thực tế 12 - 16 tháng); căn cứ: CC-LIC-30-MARKS-01 tới CC-LIC-30-MARKS-10; nội bộ oBacker: tra cứu sơ bộ 01 ngày làm việc; soạn hồ sơ và nộp trong 24 giờ đến 48 giờ làm việc sau ký.

### LIC-31. Đăng ký quyền tác giả (phần mềm, tác phẩm viết, mỹ thuật)

1. CV-LIC nhận Job từ AM, ghi sự kiện Nhận; mở văn bản gốc, ghi mã căn cứ vào sổ cái.
2. CV-LIC thu đủ đầu vào: bản sao tác phẩm, mã nguồn, tài liệu chứng minh quyền chủ sở hữu; thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LIC soạn hồ sơ kèm hướng dẫn ký; AM gửi khách ký, ghi sự kiện Gửi khách.
4. CV-LIC nộp hồ sơ, lấy biên nhận, mã hồ sơ, ngày hẹn; ghi sự kiện Nộp cơ quan kèm số biên nhận.
5. CV-LIC theo dõi tới ngày hẹn; quá ngày hẹn thì liên hệ cơ quan trong 01 ngày làm việc và báo AM cùng ngày.
6. CV-LIC chuyển cho AM kết quả gồm giấy chứng nhận đăng ký quyền tác giả do Cục Bản quyền tác giả cấp, ghi sự kiện Chuyển.
7. AM gửi khách, ghi sự kiện Gửi khách; CV-LIC ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: trước khi nộp, kiểm ngày ký quyết định giao việc hoặc hợp đồng thuê sáng tạo phải trước ngày hoàn thành tác phẩm, và kiểm hợp đồng thuê ngoài ghi rõ điều khoản chuyển giao toàn bộ quyền tài sản cho bên thuê; trước khi nộp, CV-LIC kiểm hồ sơ nhận lại đủ chữ ký, đóng dấu, ghi ngày, đúng người có thẩm quyền, đủ số bộ (thiếu thì ký lại trong một lần gửi), và kiểm giấy tờ kèm theo còn hiệu lực; TL-LIC kiểm mã căn cứ đã ghi, và kiểm kết quả khớp hồ sơ đã nộp trước khi chuyển AM.

Thời hạn: theo pháp luật: cấp Giấy chứng nhận trong 15 ngày làm việc kể từ ngày nhận đủ hồ sơ; căn cứ: Luật Sở hữu trí tuệ 2005 (sửa đổi 2022); Nghị định 17/2023/NĐ-CP Điều 38; nội bộ oBacker: soạn hồ sơ và in đóng tập 03 ngày làm việc; nộp trong 01 ngày làm việc sau khi ký.

## 4. LỖI THƯỜNG GẶP

| Lỗi | Hậu quả | Cách xử lý |
| --- | --- | --- |
| Tách hai bước cho giấy phép lao động | Khách chờ thừa: chấp thuận nhu cầu sử dụng lao động nước ngoài đã gộp vào thủ tục cấp giấy phép lao động, cùng một bộ hồ sơ, cùng mốc 10 ngày làm việc | Lập bảng kiểm, báo giá và mốc theo một thủ tục; căn cứ CC-LIC-01 tới CC-LIC-06 |
| Đọc riêng Nghị định 168/2025/NĐ-CP mà bỏ Nghị định 296/2026/NĐ-CP | Dùng quy trình đăng ký doanh nghiệp đã đổi từ 23/07/2026 | Dùng bản hợp nhất 29/2026/VBHN-NĐ-BTC thay cho việc đọc riêng hai nghị định gốc |
| Quên xác nhận kinh doanh trở lại sau tạm ngừng | Khách có thể bị thu hồi GCN ĐKDN và buộc giải thể | Job LIC-10 tạo tự động; thời hạn 05 ngày làm việc kể từ ngày kết thúc thời hạn tạm ngừng, căn cứ CC-DN-56 |
| Cam kết ngày có kết quả hoặc cam kết kết quả cấp phép | Cam kết kết quả cấp phép là hành vi oBacker nghiêm cấm | Cam kết ngày nộp được hồ sơ hợp lệ, cộng thời hạn giải quyết theo pháp luật, kèm ghi chú thời hạn có thể kéo dài khi cơ quan yêu cầu sửa đổi, bổ sung |
| Giấy tờ nước ngoài hết hạn giữa chừng | Cơ quan trả hồ sơ: phiếu lý lịch tư pháp phải cấp không quá 6 tháng, hộ chiếu phải còn hạn, hợp pháp hóa lãnh sự mất thời gian | Kiểm lại giấy tờ ngay trước khi nộp, không kiểm lúc soạn |
| Bổ sung ngành nghề cho doanh nghiệp FDI khi chưa có GCNĐKĐT | Vi phạm điều cấm | Từ chối; theo dõi mốc 12 tháng bằng Job LIC-15, căn cứ CC-DT-13 |
| Bỏ sót nghĩa vụ đăng ký mua cổ phần, góp vốn của nhà đầu tư nước ngoài trước khi đổi cổ đông | Làm ngược thứ tự thì hồ sơ đăng ký kinh doanh bị trả lại và giao dịch hoàn tất chậm | Đăng ký trước khi thay đổi thành viên, cổ đông; Job LIC-16, căn cứ CC-DT-20 tới CC-DT-30 |
| Dùng biểu mẫu, bảng kiểm theo Luật Đầu tư 2020 và Nghị định 31/2021/NĐ-CP | Hồ sơ đầu tư sai căn cứ vì hai văn bản đã hết hiệu lực | Dùng Luật Đầu tư 143/2025/QH15 và Nghị định 96/2026/NĐ-CP; mở Job LIC-17 trước hồ sơ FDI |
| Gửi bản tạm ngừng cho khách ký muộn | Khách thông báo trễ hạn chậm nhất 03 ngày làm việc trước ngày tạm ngừng | Gửi khách bản để ký trước ngày tạm ngừng ít nhất 08 ngày làm việc; nộp trước ít nhất 06 ngày làm việc |
| Nộp gia hạn giấy phép lao động ngoài khoảng cho phép | Hồ sơ bị từ chối | Nộp trước ít nhất 10 ngày và không quá 45 ngày trước khi hết hạn; Job LIC-19 tự động tạo 60 ngày trước ngày hết hạn, căn cứ CC-LIC-09 |

## NHẬT KÝ SỬA

| Ngày | Phiên bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | V2.0.0 | LIC-22 theo bảng thẩm quyền, bỏ dẫn chiếu thư viện, sửa LIC-24 và mốc LIC-28 đã qua. |
