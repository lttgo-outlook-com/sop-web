---
title: "BẢNG KIỂM PHÁP LÝ"
code: "BK-06"
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
  - BK-06
tags:
  - loai/sop
---

# BẢNG KIỂM PHÁP LÝ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BK-06 |
| Cấp tài liệu | Bảng kiểm |
| Phiên bản | V2.0.0, đang áp dụng |
| Phát hành | R.26.10.08.1 |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] Quy tắc sổ cái |


---

## 1. PHẠM VI

Bảng kiểm này áp dụng cho các Job của Bộ phận Dịch vụ pháp lý (LS-01 đến LS-21) và của Legal R&D (RD-01 đến RD-22). Mỗi bước ghi sự kiện vào sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]]. Hướng dẫn rà soát hợp đồng nằm tại [[11_HD_Ky_thuat_ra_soat_hop_dong_kinh_te|OBK-HB-61]] và hướng dẫn tra cứu pháp luật nằm tại [[12_HD_Phuong_phap_tra_cuu_va_cap_nhat_phap_luat|OBK-HB-71]]. Tên đầu ra của mọi Job dùng đúng theo cột Đầu ra của bảng Job và không gọi là ý kiến pháp lý, thư luật sư hay dịch vụ pháp lý.

Nhóm yêu cầu của Bộ phận Dịch vụ pháp lý: nhóm A hợp đồng, gồm Job LS-03 đến LS-05; nhóm B tư vấn theo yêu cầu, gồm Job LS-06 đến LS-09; nhóm C nghiên cứu và rà soát, gồm Job LS-10 đến LS-12; nhóm D bộ tài liệu nội bộ cho khách, gồm Job LS-13 đến LS-16.

Lớp của yêu cầu theo hồ sơ đang ở bộ phận nào và việc cần làm gì: chỉ cần giải trình theo hồ sơ nghiệp vụ đã có thì `TL` của bộ phận đang giữ hồ sơ chủ trì; phải lập luận pháp lý, ra văn bản có ký hoặc soạn văn bản pháp lý cho một khách thì `TL-LS` chủ trì; chưa có chuẩn ở oBacker, chuẩn phải đổi theo văn bản pháp luật, hoặc kết luận dùng cho mọi khách về sau thì `TL-RD` chủ trì.

Mức phức tạp: mức thường là một bên Việt Nam, một loại quan hệ, đã có mẫu hoặc tiền lệ trong hồ sơ oBacker. Mức phức tạp là có ít nhất một trong bốn dấu hiệu: có bên nước ngoài; có biện pháp bảo đảm hoặc thế chấp; có quyền sở hữu trí tuệ; chưa có mẫu và chưa có tiền lệ. Yêu cầu không rơi vào hai mức, hoặc rơi vào cả hai, thì `CV-LS` chuyển lên cấp trên `TL-LS` trong 04 gLV, `TL-LS` xếp mức và ghi lý do. Mức chốt tại LS-01 và không đổi trong lúc làm Job.

---

## 2. DANH MỤC JOB

### 2.1. Bộ phận Dịch vụ pháp lý


%%JOBTABLE:LS%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn bên ngoài | Căn cứ | Soát bắt buộc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LS-01 | Tiếp nhận và phân loại yêu cầu pháp lý | `AM` chuyển yêu cầu | Nội dung yêu cầu đã ghi trên hệ thống;<br>hồ sơ khách hiện có | Kết luận yêu cầu thuộc nhóm nào, thuộc lớp nào và thuộc mức phức tạp nào theo mục 1 | Xác nhận đã nhận dưới 30 phút;<br>kết luận phân loại trong 03 gLV | Không có | Nội bộ | Không |
| LS-02 | Cấp đầu vào phạm vi và tính khả thi cho `AM` báo giá | Kết luận đi tiếp tại LS-01 | Bản phân loại tại LS-01 | Bản phạm vi công việc: đầu ra sẽ giao, đầu vào cần khách cấp, mức phức tạp, mốc giao đề xuất, phần không làm | 03 gLV, khớp mốc `AM` cần tại AM-03.<br>Nhóm A và nhóm B: `CEO` quyết định nhận việc trước khi gửi `AM`, theo [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 4 | Không có | Job AM-03 tại [[BK-02_Bang_kiem_AM\|BK-02]];<br>[[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 4 | Không |
| LS-03 | Soạn hợp đồng theo yêu cầu của khách | Hợp đồng đã ký với khách, phạm vi đã chốt | Mục đích giao dịch;<br>thông tin các bên;<br>giá và cách thanh toán;<br>điều kiện đặc thù khách muốn có | Bản dự thảo hợp đồng, kèm bản ghi chú giải thích các điều khoản có rủi ro | Mức thường 03 NLV;<br>mức phức tạp 05 NLV, tính từ khi nhận đủ đầu vào | Không có | CC-LS-10 | Không |
| LS-04 | Rà soát hợp đồng do khách đưa | Khách gửi hợp đồng qua `AM` | Bản hợp đồng đầy đủ;<br>mục đích của khách khi ký;<br>vai trò của khách là bên nào | Bản rà soát ba phần: điều khoản phải sửa, điều khoản nên sửa, điều khoản chấp nhận được, mỗi dòng kèm lý do và câu chữ đề xuất | Mức thường 02 NLV;<br>mức phức tạp 04 NLV | Không có | CC-LS-10 | Không |
| LS-05 | Soạn phụ lục, biên bản, thỏa thuận sửa đổi hoặc chấm dứt | Khách yêu cầu | Hợp đồng gốc và toàn bộ phụ lục đang có hiệu lực;<br>nội dung muốn sửa | Bản dự thảo | 02 NLV | Không có | CC-LS-10 | Không |
| LS-06 | Trả lời câu hỏi tư vấn đã có căn cứ đã đối chiếu bản gốc | Khách hỏi qua `AM` | Câu hỏi đã ghi trên hệ thống;<br>mã căn cứ đã có trong sổ căn cứ | Câu trả lời kèm mã căn cứ | `T3` là 03 gLV.<br>Không cấp mốc ước lượng và không đi qua chuỗi `T2` | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| LS-07 | Trả lời câu hỏi tư vấn phải tra bản gốc | Khách hỏi qua `AM` | Câu hỏi đã ghi trên hệ thống | Câu trả lời sau khi đã đối chiếu bản gốc, kèm mã căn cứ | `T3` là 03 NLV để `TL-LS` đối chiếu bản gốc.<br>Trường hợp kéo dài, ba điều kiện đủ: điều kiện áp dụng là `TL-LS` đã tra mà không kết luận được; mốc của Job RD-10 thay mốc `T3`; và `AM` phải cam kết lại `T2` với khách trong 04 gLV kể từ khi mở Job RD-10 | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1;<br>RD-10 | Không |
| LS-08 | Xử lý câu hỏi chạm nội dung chưa xác minh được | Khách hỏi qua `AM` | Câu hỏi đã ghi trên hệ thống | Không trả lời nội dung. Thư hẹn mốc gửi khách; Job RD-12 đã mở cho Legal R&D | `AM` gửi thư hẹn mốc trong 04 gLV, đúng hạn `T2` cho nội dung chưa xác minh được;<br>`TL-LS` DỪNG và mở RD-12 trong cùng ngày làm việc | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1;<br>RD-12 | Không |
| LS-09 | Lập thư tư vấn hoặc bản ghi nhớ pháp lý | Khách yêu cầu bản có lập luận đầy đủ | Câu hỏi đã làm rõ;<br>dữ kiện thực tế của khách đã được khách xác nhận bằng văn bản | Bản ghi nhớ đủ bốn phần: vấn đề, quy định áp dụng kèm mã căn cứ, áp vào dữ kiện của khách, kết luận và phần chưa kết luận được | Mức thường 05 NLV;<br>mức phức tạp 08 NLV | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| LS-10 | Nghiên cứu chuyên đề theo yêu cầu | Khách yêu cầu | Đề bài đã làm rõ và đã chốt phạm vi bằng văn bản | Bản nghiên cứu kèm danh mục văn bản đã đọc, mức xác minh từng kết luận, và phần chưa kết luận được | Mức thường 07 NLV; mức phức tạp 12 NLV, xếp mức theo mục 1. Mức chốt tại LS-01, không đổi trong lúc làm Job | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| LS-11 | Rà soát tuân thủ doanh nghiệp | Khách yêu cầu, hoặc gói dịch vụ có mục này | Hồ sơ pháp lý doanh nghiệp;<br>hồ sơ lao động;<br>hồ sơ thuế;<br>hồ sơ giấy phép của khách | Bản rà soát theo từng nhóm nghĩa vụ, mỗi dòng ghi Đạt, Không đạt kèm việc phải làm, hoặc Không áp dụng;<br>không dòng nào để trống | 10 NLV kể từ khi nhận đủ hồ sơ, đếm trên thời gian bộ phận này làm.<br>Đồng hồ DỪNG trong lúc chờ đầu vào của ba bộ phận nghiệp vụ, và mỗi lần dừng ghi lý do theo [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.3.<br>Ba bộ phận cấp đầu vào cho nội dung dưới 03 gLV | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| LS-12 | Rà soát pháp lý phục vụ giao dịch | Khách yêu cầu | Danh mục tài liệu do bên bán hoặc bên nhận vốn cấp;<br>phạm vi rà soát đã chốt bằng văn bản | Bản rà soát kèm bảng xếp hạng rủi ro và danh mục tài liệu không được cấp | 15 NLV kể từ khi nhận đủ danh mục tài liệu. Danh mục thiếu thì tạm dừng tính cam kết tiến độ theo [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.3 | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| LS-13 | Soạn điều lệ và bộ tài liệu quản trị cho khách | Khách yêu cầu | Loại hình và cơ cấu sở hữu của khách;<br>dữ kiện trên Giấy chứng nhận đăng ký doanh nghiệp bản mới nhất;<br>ý muốn của khách về thẩm quyền và mức thông qua | Bản dự thảo điều lệ, quy chế nội bộ và bộ nghị quyết mẫu | Mức thường 07 NLV;<br>mức phức tạp 10 NLV | Không có | CC-DN-01 | Không |
| LS-14 | Soạn nội quy lao động và bộ quy chế nhân sự cho khách | Khách yêu cầu | Số người lao động;<br>cơ cấu bộ phận;<br>chế độ hiện hành của khách;<br>đầu vào của Bộ phận Lao động và Tiền lương về hồ sơ lao động đang có | Bản dự thảo nội quy lao động và bộ quy chế nhân sự. Việc đăng ký nội quy là Job LD-13, không thuộc Job này | 07 NLV kể từ khi nhận đủ đầu vào, đếm trên thời gian bộ phận này làm.<br>Đồng hồ dừng trong lúc chờ đầu vào của Bộ phận Lao động và Tiền lương; đầu vào ghi thành việc phát sinh, quan hệ Việc gốc phải chờ, theo [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 5; mốc cấp đầu vào theo mục 7.2a | Không có | CC-LD-90 | Không |
| LS-15 | Soạn quy chế tài chính và bộ chứng từ nội bộ cho khách | Khách yêu cầu | Chế độ kế toán khách đang áp;<br>đầu vào của Bộ phận Kế toán và Thuế về hiện trạng sổ sách và chứng từ | Bản dự thảo quy chế tài chính và bộ biểu mẫu chứng từ | 07 NLV kể từ khi nhận đủ đầu vào, đếm trên thời gian bộ phận này làm.<br>Đồng hồ dừng trong lúc chờ đầu vào của Bộ phận Kế toán và Thuế; đầu vào ghi thành việc phát sinh, quan hệ Việc gốc phải chờ, theo [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 5; mốc cấp đầu vào theo mục 7.2a | Không có | CC-KT-02 | Không |
| LS-16 | Soạn bộ hợp đồng mẫu và biểu mẫu cho khách | Khách yêu cầu | Danh mục giao dịch khách làm thường xuyên;<br>mẫu khách đang dùng nếu có | Bộ mẫu kèm hướng dẫn dùng từng mẫu và danh mục nội dung bắt buộc điền | 05 NLV | Không có | CC-LS-10 | Không |
| LS-17 | Hỗ trợ khách làm việc với cơ quan nhà nước trong một vụ việc pháp lý | Cơ quan nhà nước ra văn bản, hoặc khách yêu cầu | Văn bản của cơ quan;<br>hồ sơ nghiệp vụ do bộ phận giữ hồ sơ cấp | Bản dự thảo văn bản giải trình hoặc văn bản trả lời, do KHÁCH ký và KHÁCH gửi | Đọc và kết luận yêu cầu trong 01 NLV; gửi bản dự thảo cho `AM` chậm nhất **06 NLV** trước hạn ghi trên văn bản của cơ quan, theo [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5 | Theo thời hạn ghi trên chính văn bản của cơ quan | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5 | Không |
| LS-18 | Điều phối luật sư hoặc đối tác thuê ngoài | Việc ngoài bốn nhóm yêu cầu tại mục 1, hoặc thuộc tố tụng | Kết luận cần đối tác tại LS-01;<br>phạm vi, thời hạn và chi phí đã chốt với đối tác | Sản phẩm của đối tác đã được soát xét và đã chuẩn hóa theo biểu mẫu oBacker | Soát xét sản phẩm của đối tác trong 02 NLV kể từ khi nhận. Đối tác không liên hệ trực tiếp khách | Theo hợp đồng với đối tác | [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 4 | Không |
| LS-19 | Bàn giao sản phẩm pháp lý qua `AM` | Sản phẩm đã hoàn thành tại Job gốc | Sản phẩm đã duyệt;<br>danh mục giả thiết đã dùng | Bản bàn giao đủ năm phần | Gửi `AM` trước hạn gửi khách ít nhất 0,5 NLV | Theo mốc đã cam kết với khách | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5 | Không |
| LS-20 | Đóng vụ việc và nộp bài học về Legal R&D | Sau LS-19 | Hồ sơ vụ việc đã đóng;<br>danh mục nội dung phải tra bản gốc và nội dung chưa có chuẩn | Phiếu bài học gửi Legal R&D;<br>đề xuất bổ sung mẫu hoặc bổ sung mã căn cứ | 03 NLV kể từ ngày bàn giao. Legal R&D nhận và xử theo RD-16 | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 5;<br>RD-16 | Không |
| LS-21 | Cập nhật bảng Job và hướng dẫn cấp 3 khi có văn bản pháp luật mới | Legal R&D bàn giao yêu cầu sửa theo RD-07 | Bản đánh giá tác động;<br>danh sách Job bị ảnh hưởng | Bảng Job và hướng dẫn cấp 3 đã sửa;<br>Job sửa đã đóng để RD-07 đóng theo | Theo mốc cập nhật tài liệu của mức ưu tiên đã phân | Ngày hiệu lực của văn bản | RD-07 | Không |

%%/JOBTABLE:LS%%

### 2.2. Legal R&D

%%JOBTABLE:RD%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn bên ngoài | Căn cứ | Soát bắt buộc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RD-01 | Ghi nhận văn bản pháp luật mới | Bất kỳ ai phát hiện và báo | Số hiệu văn bản;<br>nguồn phát hiện | Dòng ghi nhận trên sổ theo dõi, kèm hạng nguồn và mức xác minh ban đầu | 02 NLV kể từ khi nhận tin báo. Ghi nhận cả khi chưa chắc chắn | Không có | Nội bộ | Không |
| RD-02 | Nhập bản gốc vào kho văn bản | Sau RD-01 | Bản gốc tải được từ nguồn chính thống | Tệp bản gốc trong kho `05_PhapLuat/`, kèm bảng thông tin đủ dòng | 03 NLV kể từ RD-01, và **01 NLV với văn bản mức ưu tiên 1**.<br>Không tải được thì lập phiếu theo dõi trong sổ cái [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] | Không có | Nội bộ | Không |
| RD-03 | Xác minh hiệu lực và phần bị bãi bỏ | Sau RD-02 | Bản gốc trong kho;<br>văn bản mới hơn cùng lĩnh vực | Kết luận hiệu lực, phần bị thay, phần bị bãi bỏ, và điều khoản chuyển tiếp nếu có | 03 NLV kể từ RD-02, và **01 NLV với văn bản mức ưu tiên 1**.<br>Đọc điều khoản thi hành của văn bản MỚI HƠN, cấm lấy từ trí nhớ và cấm lấy từ nguồn thứ cấp | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| RD-04 | Phân mức ưu tiên của văn bản mới | Sau RD-01 | Nội dung văn bản;<br>danh mục Job và danh mục khách hiện có | Mức ưu tiên đã phân, kèm lý do | **01 NLV kể từ RD-01.** Job này chạy TRƯỚC RD-02 và RD-03 | Ngày hiệu lực của văn bản | Nội bộ | Không |
| RD-05 | Lập bản đánh giá tác động | Sau RD-03 và RD-04 | Bản gốc đã nhập kho;<br>kết luận hiệu lực tại RD-03;<br>mức ưu tiên tại RD-04 | Bản đánh giá tác động;<br>danh sách mã Job bị ảnh hưởng;<br>danh sách nhóm khách bị ảnh hưởng | Theo mốc của mức ưu tiên đã phân, đặt tại [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5a, đếm từ ngày ghi nhận tại RD-01 | Ngày hiệu lực của văn bản | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5a | Không |
| RD-06 | Cập nhật sổ căn cứ và bảng tác động ngược | Sau RD-03 và RD-05 | Nguyên văn điều khoản;<br>mã văn bản đã có trong sổ | Mã căn cứ mới hoặc mã đã sửa trong dữ liệu nguồn của sổ;<br>bảng tác động ngược đã sinh lại | Cùng mốc với RD-05. Sửa dữ liệu nguồn rồi sinh lại sổ; cấm sửa thẳng vào tệp sổ | Không có | Nội bộ | Không |
| RD-07 | Bàn giao yêu cầu sửa cho `TL` bộ phận và theo dõi tới khi đóng | Sau RD-05 | Bản đánh giá tác động;<br>danh sách Job bị ảnh hưởng | Job sửa tài liệu đã mở cho từng bộ phận, liên kết về Job này;<br>bản ghi trạng thái từng Job | Giao trong 01 NLV kể từ khi xong RD-05.<br>Theo dõi tới khi `TL` bộ phận đóng Job sửa của bộ phận, tức `KT-25`, `LD-24` hoặc `LS-21`; mốc sửa theo mức ưu tiên đã phân.<br>Bộ phận Giấy phép chưa có Job tương đương, nên với bộ phận đó thì mở một Job rời và ghi lý do trên Job này | Ngày hiệu lực của văn bản | Nội bộ | Không |
| RD-08 | Họp thống nhất cách hiểu và cách áp dụng | Sau RD-05, trước khi bộ phận sửa tài liệu | Bản đánh giá tác động;<br>câu hỏi của từng bộ phận | Biên bản chốt cách hiểu và cách áp dụng;<br>điểm chưa rõ đã đưa lên `CEO` | Họp trong 02 NLV kể từ khi xong RD-05. Đây là bước bắt buộc, không được bỏ | Không có | Nội bộ | Không |
| RD-09 | Cấp cơ sở pháp lý cho nghiệp vụ lạ | `TL` bộ phận mở Job phụ khi gặp nghiệp vụ chưa có chuẩn | Mô tả nghiệp vụ;<br>dữ kiện thực tế của khách;<br>kết luận sơ bộ của bộ phận về chỗ vướng | Bản cơ sở pháp lý đủ năm mục: điều kiện, trình tự, thời hạn, cơ quan có thẩm quyền, chi phí. Mỗi mục kèm mã căn cứ | Văn bản đã có trong kho: 03 NLV.<br>Văn bản chưa có trong kho: cấp mốc ước lượng cho `TL` bộ phận trong 01 NLV, mở RD-02, và không cam kết mốc kết luận cho tới khi có bản gốc | Không có | Job LIC-01 tại [[BK-04_Bang_kiem_Giay_phep\|BK-04]] | Không |
| RD-10 | Trả lời câu hỏi pháp lý mà bộ phận không tra được | `TL` bộ phận mở Job phụ sau khi đã tra và không kết luận được | Câu hỏi đã ghi trên Job;<br>danh mục nguồn bộ phận đã tra;<br>dữ kiện thực tế của khách | Câu trả lời kèm mã căn cứ đã đối chiếu bản gốc, hoặc kết luận không kết luận được kèm RD-12 | 05 NLV kể từ khi nhận đủ đầu vào.<br>Mốc này thay mốc `T3` của Job KT-23 tại [[BK-03_Bang_kiem_Ke_toan_va_thue\|BK-03]], Job LD-01 tại [[BK-05_Bang_kiem_Lao_dong_va_tien_luong\|BK-05]] và Job LS-07 tại mục 2.1 khi các Job đó mở RD-10 | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 | Không |
| RD-11 | Kết luận pháp lý dùng làm chuẩn nội bộ | Câu hỏi lặp lại từ hai bộ phận, hoặc từ hai khách trở lên | Bản trả lời tại RD-10;<br>các vụ việc đã gặp | Kết luận chuẩn, đưa vào sổ căn cứ hoặc vào chuẩn nghiệp vụ;<br>mã hóa để mọi bộ phận dẫn chiếu | 05 NLV kể từ khi nhận đủ đầu vào. Đầu ra là một mã, không phải một câu trả lời rời | Không có | Nội bộ | Không |
| RD-12 | Mở mã cần xác minh và đặt hạn chót cho nội dung chưa xác minh được | Không kết luận được tại RD-09, RD-10, hoặc bộ phận báo gặp nội dung chưa xác minh được | Câu hỏi;<br>danh mục văn bản còn thiếu | Mở phiếu theo dõi trong sổ cái [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] kèm rủi ro, nhánh thay thế và thời hạn hoàn thành | Mở trong 01 NLV. Hạn chót bắt buộc với mã có hậu quả không tự lộ ra | Không có | Nội bộ | Không |
| RD-13 | Nâng mức xác minh từ chưa đối chiếu bản gốc hoặc chưa xác minh được lên đã đối chiếu bản gốc | Bản gốc đã vào kho, hoặc theo hạn chót của mã | Bản gốc trong kho;<br>mã cần xác minh | Mã căn cứ đã nâng mức, kèm nguyên văn điều khoản và ngày kiểm | Theo thời hạn cam kết trong sổ cái [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]]. Nội dung quá hai lần rà soát chưa hoàn thành thì báo cáo `CEO` | Không có | Nội bộ | Không |
| RD-14 | Rà soát hiệu lực toàn sổ căn cứ | Theo lịch | Sổ căn cứ;<br>kho văn bản | Danh mục mã có văn bản bị thay hoặc bị bãi bỏ;<br>Job sửa đã mở cho từng mã | Hằng quý, chậm nhất ngày cuối cùng của tháng đầu quý sau. Rà đột xuất ngay khi có văn bản mức ưu tiên 1 | Không có | Nội bộ | Không |
| RD-15 | Rà soát giả thiết và mã chưa kết luận | Theo lịch | Toàn bộ nội dung yêu cầu nghiên cứu pháp lý trong sổ cái [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] | Mỗi giả thiết được ghi một trong ba trạng thái GIỮ, ĐÚNG, SAI;<br>mã ở trạng thái GIỮ quá hai lần liên tiếp đã báo `CEO` | Mỗi 06 tháng, hoặc ngay khi có văn bản mới ảnh hưởng một giả thiết | Hạn chót cứng của từng giả thiết | Nội bộ | Không |
| RD-16 | Soạn và cập nhật chuẩn nghiệp vụ bàn giao cho Phòng Dịch vụ | Kết luận tại RD-11;<br>phiếu bài học của bộ phận;<br>kế hoạch quý | Kết luận chuẩn;<br>phiếu bài học LS-20 và các phiếu tương đương của ba bộ phận còn lại | Bản chuẩn nghiệp vụ hoặc bản sửa chuẩn, đã bàn giao và `TL` bộ phận đã xác nhận nhận | Theo kế hoạch quý. Phiếu bài học nhận được thì phản hồi trong 05 NLV bằng một trong ba kết quả: nhận, gộp vào bản quý, hoặc không cần sửa kèm lý do | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 5 | Không |
| RD-17 | Soát nội dung pháp lý của tài liệu trước khi phát hành | `COO` hoặc `TL` bộ phận gửi bản cần soát | Bản tài liệu cần soát;<br>danh mục chỗ có nội dung pháp lý | Kết luận đạt, hoặc danh mục chỗ phải sửa kèm mã căn cứ đúng | 03 NLV kể từ khi nhận bản. Legal R&D soát NỘI DUNG pháp lý; `COO` quyết bản nào được phát hành | Không có | Nội bộ | Không |
| RD-18 | Soát bộ hợp đồng dịch vụ và bộ điều khoản của oBacker | `AM` hoặc `CEO` yêu cầu;<br>và theo lịch;<br>yêu cầu từ `AM-24` về điều khoản khách đồng ý chia sẻ thông tin với bên đã giới thiệu | Bản hợp đồng mẫu đang dùng;<br>danh mục dịch vụ đang bán và tên đầu ra tại bảng Job của từng bộ phận | Bản mẫu đã soát, kèm danh mục điều khoản phải sửa và lý do;<br>phạm vi ghi trong mẫu khớp tên đầu ra tại bảng Job;<br>kết luận về điều khoản khách đồng ý chia sẻ thông tin với bên đã giới thiệu, khi có yêu cầu từ `AM-24` | 05 NLV khi có yêu cầu. Rà lại theo lịch mỗi 06 tháng, và ngay khi một bộ phận thêm hoặc bỏ một Job có đầu ra ra khỏi oBacker | Không có | Job AM-24 tại [[BK-02_Bang_kiem_AM\|BK-02]] | Không |
| RD-19 | Soát nội dung pháp lý trước khi công bố ra ngoài | Marketing hoặc `AM` gửi bản cần soát | Bản nội dung sắp công bố | Kết luận đạt, hoặc danh mục chỗ phải sửa | 02 NLV kể từ khi nhận bản. Nội dung pháp lý chưa qua bước này thì không được công bố | Không có | [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 4 | Không |
| RD-20 | Nghiên cứu phát triển dịch vụ pháp lý mới | Kế hoạch quý;<br>hoặc `CEO` yêu cầu | Đề bài;<br>nhu cầu quan sát được từ phiếu bài học và từ câu hỏi lặp lại | Bản thiết kế dịch vụ: phạm vi, đầu ra, đầu vào cần khách cấp, mốc đề xuất, điều kiện kinh doanh phải có | Theo kế hoạch quý. Đầu ra phải trả lời được điều kiện kinh doanh trước khi trả lời được giá | Không có | Nội bộ | Không |
| RD-21 | Chuẩn bị nội dung thông báo sự cố dữ liệu cá nhân | `DPO` mở việc sự cố theo [[Quy_che_bao_ve_du_lieu_ca_nhan\|OBK-SOP-NB-09]] mục 7 | Mô tả sự cố;<br>danh mục dữ liệu và danh mục khách bị ảnh hưởng | Bản dự thảo nội dung thông báo cho khách, và bản dự thảo cho cơ quan chuyên trách khi oBacker là bên kiểm soát hoặc bên kiểm soát và xử lý dữ liệu bị ảnh hưởng | Thông báo cơ quan chuyên trách chậm nhất 72 giờ kể từ thời điểm phát hiện; thông báo khách 24 giờ sau khi cô lập xong, theo [[Quy_che_bao_ve_du_lieu_ca_nhan\|OBK-SOP-NB-09]] mục 7 | Thông báo cơ quan chuyên trách chậm nhất 72 giờ kể từ thời điểm phát hiện | [[Quy_che_bao_ve_du_lieu_ca_nhan\|OBK-SOP-NB-09]] mục 7 | Không |
| RD-22 | Kết luận về hành vi oBacker nghiêm cấm khi có yêu cầu đáng ngờ | Bất kỳ vai trò nào báo | Mô tả yêu cầu của khách;<br>bản ghi ai yêu cầu, khi nào, qua kênh nào | Kết luận đề xuất yêu cầu đó có thuộc hành vi oBacker nghiêm cấm hay không, kèm mã căn cứ;<br>quyết định của `CEO` | Kết luận trong 04 gLV. Báo `CEO` trong ngày phát hiện, không đợi kết luận xong mới báo | Không có | [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 4 | Không |

%%/JOBTABLE:RD%%

---

## 3. BẢNG KIỂM THEO JOB

### LS-01. Tiếp nhận và phân loại yêu cầu pháp lý

1. `AM` chuyển yêu cầu; `CV-LS` nhận và xác nhận đã nhận; ghi sự kiện Nhận vào sổ cái.
2. `CV-LS` đọc nội dung yêu cầu và hồ sơ khách hiện có.
3. `CV-LS` kết luận yêu cầu thuộc nhóm nào, thuộc lớp nào và thuộc mức phức tạp nào theo mục 1; kết quả: bản phân loại kèm lý do phân lớp.
4. `TL-LS` xác nhận mức phức tạp; ghi sự kiện Quyết định vào sổ cái.
5. Yêu cầu chưa xếp được mức: `CV-LS` chuyển lên cấp trên `TL-LS` trong 04 gLV; `TL-LS` xếp mức và ghi lý do; ghi sự kiện Chuyển vào sổ cái.
6. Yêu cầu thuộc lớp của bộ phận khác: `CV-LS` chuyển cho `TL` của bộ phận đang giữ hồ sơ hoặc cho `TL-RD`; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-01`: yêu cầu đã được phân đúng lớp theo mục 1 và lý do phân lớp đã ghi trên Job; `TL-LS` kiểm trước khi làm tiếp; không đạt thì quay lại LS-01.

Thời hạn: xác nhận đã nhận dưới 30 phút; kết luận phân loại trong 03 gLV.

### LS-02. Cấp đầu vào phạm vi và tính khả thi cho `AM` báo giá

1. `CV-LS` nhận bản phân loại của LS-01; ghi sự kiện Nhận vào sổ cái.
2. `CV-LS` lập bản phạm vi công việc gồm: đầu ra sẽ giao, đầu vào cần khách cấp, mức phức tạp, mốc giao đề xuất, phần không làm.
3. Yêu cầu thuộc nhóm A hoặc nhóm B: `CEO` quyết định nhận việc trên Job trước khi `AM` báo giá, theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4; ghi sự kiện Quyết định vào sổ cái. `TL-LS` không tự nhận việc. Nhóm C và nhóm D chạy bình thường.
4. `CV-LS` chuyển bản phạm vi cho `AM` để báo giá theo AM-03 tại [[BK-02_Bang_kiem_AM|BK-02]]; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-02`: yêu cầu nhóm A và nhóm B đã có quyết định nhận việc của `CEO` ghi trên Job; `AM` và `TL-LS` kiểm; khi không đạt, `AM` dừng báo giá và dừng việc, rồi báo `CEO`.

Thời hạn: 03 gLV, khớp mốc `AM` cần tại AM-03.

### LS-03. Soạn hợp đồng theo yêu cầu của khách

1. `CV-LS` nhận đủ đầu vào: mục đích giao dịch, thông tin các bên, giá và cách thanh toán, điều kiện đặc thù khách muốn có. Thiếu đầu vào thì ghi sự kiện Chờ kèm lý do; đủ đầu vào thì ghi sự kiện Hết chờ.
2. `CV-LS` tra bản gốc của căn cứ pháp lý và ghi mã căn cứ cho từng kết luận.
3. `CV-LS` soạn bản dự thảo hợp đồng.
4. `CV-LS` soạn bản ghi chú giải thích các điều khoản có rủi ro.
5. `CV-LS` chuyển bản dự thảo và bản ghi chú sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: mức thường 03 NLV; mức phức tạp 05 NLV, tính từ khi nhận đủ đầu vào.

### LS-04. Rà soát hợp đồng do khách đưa

1. `CV-LS` nhận bản hợp đồng đầy đủ, mục đích của khách khi ký và vai trò của khách là bên nào; thiếu thì ghi sự kiện Chờ kèm lý do.
2. `CV-LS` rà soát hợp đồng theo [[11_HD_Ky_thuat_ra_soat_hop_dong_kinh_te|OBK-HB-61]] và ghi mã căn cứ cho từng kết luận.
3. `CV-LS` lập bản rà soát ba phần: điều khoản phải sửa, điều khoản nên sửa, điều khoản chấp nhận được; mỗi dòng kèm lý do và câu chữ đề xuất.
4. `CV-LS` chuyển bản rà soát sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: mức thường 02 NLV; mức phức tạp 04 NLV.

### LS-05. Soạn phụ lục, biên bản, thỏa thuận sửa đổi hoặc chấm dứt

1. `CV-LS` nhận hợp đồng gốc, toàn bộ phụ lục đang có hiệu lực và nội dung muốn sửa; thiếu thì ghi sự kiện Chờ kèm lý do.
2. `CV-LS` đối chiếu nội dung muốn sửa với hợp đồng gốc và các phụ lục.
3. `CV-LS` soạn bản dự thảo phụ lục, biên bản, thỏa thuận sửa đổi hoặc chấm dứt.
4. `CV-LS` chuyển bản dự thảo sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: 02 NLV.

### LS-06. Trả lời câu hỏi tư vấn đã có căn cứ đã đối chiếu bản gốc

1. `AM` chuyển câu hỏi đã ghi trên Job; `CV-LS` nhận; ghi sự kiện Nhận vào sổ cái.
2. `CV-LS` xác nhận mã căn cứ đã có trong sổ căn cứ với mức đã đối chiếu bản gốc.
3. `CV-LS` soạn câu trả lời kèm mã căn cứ.
4. `CV-LS` chuyển câu trả lời cho `AM`; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: `T3` là 03 gLV.

### LS-07. Trả lời câu hỏi tư vấn phải tra bản gốc

1. `AM` chuyển câu hỏi đã ghi trên Job; `CV-LS` nhận; ghi sự kiện Nhận vào sổ cái.
2. `TL-LS` đối chiếu bản gốc của căn cứ pháp lý và ghi mã căn cứ.
3. `TL-LS` đã tra mà không kết luận được: mở Job RD-10; ghi sự kiện Phát sinh việc, rồi sự kiện Chờ vào sổ cái. `AM` cam kết lại `T2` với khách trong 04 gLV kể từ khi mở RD-10.
4. Khi RD-10 trả kết quả: ghi sự kiện Hết chờ vào sổ cái.
5. `CV-LS` soạn câu trả lời kèm mã căn cứ đã đối chiếu bản gốc và chuyển cho `AM`; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: `T3` là 03 NLV để `TL-LS` đối chiếu bản gốc; trường hợp kéo dài có RD-10 thì mốc của RD-10 thay mốc `T3`.

### LS-08. Xử lý câu hỏi chạm nội dung chưa xác minh được

1. `AM` chuyển câu hỏi đã ghi trên Job; `CV-LS` nhận; ghi sự kiện Nhận vào sổ cái.
2. `TL-LS` xác định câu hỏi chạm nội dung chưa xác minh được; `TL-LS` dừng và không trả lời nội dung.
3. `TL-LS` mở Job RD-12 cho Legal R&D trong cùng ngày làm việc; ghi sự kiện Phát sinh việc vào sổ cái.
4. `AM` gửi khách thư hẹn mốc; ghi sự kiện Gửi khách vào sổ cái.

Thời hạn: `AM` gửi thư hẹn mốc trong 04 gLV, đúng hạn `T2` cho nội dung chưa xác minh được; `TL-LS` mở RD-12 trong cùng ngày làm việc.

### LS-09. Lập thư tư vấn hoặc bản ghi nhớ pháp lý

1. `CV-LS` nhận câu hỏi đã làm rõ; `AM` lấy văn bản khách xác nhận dữ kiện thực tế; thiếu xác nhận thì ghi sự kiện Chờ kèm lý do.
2. `CV-LS` tra bản gốc của căn cứ pháp lý và ghi mã căn cứ cho từng kết luận.
3. `CV-LS` soạn bản ghi nhớ đủ bốn phần: vấn đề; quy định áp dụng kèm mã căn cứ; áp vào dữ kiện của khách; kết luận và phần chưa kết luận được.
4. `CV-LS` chuyển bản ghi nhớ sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-04`: dữ kiện thực tế của khách dùng để kết luận đã được khách xác nhận bằng văn bản; `AM` lấy xác nhận, `TL-LS` kiểm; không đạt thì không kết luận và ghi rõ dữ kiện chưa xác nhận cùng hậu quả.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: mức thường 05 NLV; mức phức tạp 08 NLV.

### LS-10. Nghiên cứu chuyên đề theo yêu cầu

1. `CV-LS` nhận đề bài đã làm rõ và phạm vi đã chốt bằng văn bản; mức phức tạp chốt tại LS-02 và không đổi trong lúc làm Job.
2. `CV-LS` đọc văn bản pháp luật theo đề bài và ghi mức xác minh của từng kết luận.
3. `CV-LS` lập bản nghiên cứu kèm danh mục văn bản đã đọc, mức xác minh từng kết luận và phần chưa kết luận được.
4. `CV-LS` chuyển bản nghiên cứu sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: mức thường 07 NLV; mức phức tạp 12 NLV, xếp mức theo mục 1; mức chốt tại LS-01, không đổi trong lúc làm Job.

### LS-11. Rà soát tuân thủ doanh nghiệp

1. `CV-LS` nhận hồ sơ pháp lý doanh nghiệp, hồ sơ lao động, hồ sơ thuế và hồ sơ giấy phép của khách.
2. Hồ sơ do bộ phận nghiệp vụ khác giữ: `CV-LS` mở Job phụ liên kết về Job chính; ghi sự kiện Phát sinh việc và sự kiện Chờ; đủ đầu vào thì ghi sự kiện Hết chờ.
3. `CV-LS` rà soát theo từng nhóm nghĩa vụ; mỗi dòng ghi Đạt, Không đạt kèm việc phải làm, hoặc Không áp dụng; không dòng nào để trống.
4. `CV-LS` chuyển bản rà soát sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-04`: dữ kiện thực tế của khách dùng để kết luận đã được khách xác nhận bằng văn bản; `AM` lấy xác nhận, `TL-LS` kiểm; không đạt thì không kết luận và ghi rõ dữ kiện chưa xác nhận cùng hậu quả.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: 10 NLV kể từ khi nhận đủ hồ sơ, đếm trên thời gian bộ phận này làm; đồng hồ dừng trong lúc chờ đầu vào của ba bộ phận nghiệp vụ, mỗi bộ phận cấp đầu vào nội dung dưới 03 gLV.

### LS-12. Rà soát pháp lý phục vụ giao dịch

1. `CV-LS` nhận danh mục tài liệu do bên bán hoặc bên nhận vốn cấp và phạm vi rà soát đã chốt bằng văn bản; danh mục thiếu thì ghi sự kiện Chờ kèm lý do.
2. `CV-LS` rà soát từng tài liệu và ghi mã căn cứ cho từng kết luận.
3. `CV-LS` lập bản rà soát kèm bảng xếp hạng rủi ro và danh mục tài liệu không được cấp.
4. `CV-LS` chuyển bản rà soát sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-04`: dữ kiện thực tế của khách dùng để kết luận đã được khách xác nhận bằng văn bản; `AM` lấy xác nhận, `TL-LS` kiểm; không đạt thì không kết luận và ghi rõ dữ kiện chưa xác nhận cùng hậu quả.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: 15 NLV kể từ khi nhận đủ danh mục tài liệu; danh mục thiếu thì tạm dừng tính cam kết tiến độ theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.3.

### LS-13. Soạn điều lệ và bộ tài liệu quản trị cho khách

1. `CV-LS` nhận loại hình và cơ cấu sở hữu của khách, dữ kiện trên Giấy chứng nhận đăng ký doanh nghiệp bản mới nhất, ý muốn của khách về thẩm quyền và mức thông qua.
2. `CV-LS` tra bản gốc của căn cứ pháp lý và ghi mã căn cứ.
3. `CV-LS` soạn bản dự thảo điều lệ, quy chế nội bộ và bộ nghị quyết mẫu.
4. `CV-LS` chuyển bản dự thảo sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: mức thường 07 NLV; mức phức tạp 10 NLV.

### LS-14. Soạn nội quy lao động và bộ quy chế nhân sự cho khách

1. `CV-LS` nhận số người lao động, cơ cấu bộ phận và chế độ hiện hành của khách.
2. `CV-LS` mở Job phụ liên kết về Job chính để lấy đầu vào về hồ sơ lao động đang có từ Bộ phận Lao động và Tiền lương; ghi sự kiện Phát sinh việc và sự kiện Chờ kèm lý do. Khi đủ đầu vào, ghi sự kiện Hết chờ.
3. `CV-LS` soạn bản dự thảo nội quy lao động và bộ quy chế nhân sự. Việc đăng ký nội quy là Job LD-13 và không thuộc Job này.
4. `CV-LS` chuyển bản dự thảo sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: 07 NLV kể từ khi nhận đủ đầu vào, đếm trên thời gian bộ phận này làm; đồng hồ dừng trong lúc chờ đầu vào của Bộ phận Lao động và Tiền lương; bộ phận đó cấp nội dung đầu vào trong tối đa 03 giờ làm việc theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.2a.

### LS-15. Soạn quy chế tài chính và bộ chứng từ nội bộ cho khách

1. `CV-LS` nhận chế độ kế toán khách đang áp.
2. `CV-LS` mở Job phụ liên kết về Job chính để lấy đầu vào về hiện trạng sổ sách và chứng từ từ Bộ phận Kế toán và Thuế; ghi sự kiện Phát sinh việc và sự kiện Chờ kèm lý do. Khi đủ đầu vào, ghi sự kiện Hết chờ.
3. `CV-LS` soạn bản dự thảo quy chế tài chính và bộ biểu mẫu chứng từ.
4. `CV-LS` chuyển bản dự thảo sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: 07 NLV kể từ khi nhận đủ đầu vào, đếm trên thời gian bộ phận này làm; đồng hồ dừng trong lúc chờ đầu vào của Bộ phận Kế toán và Thuế; bộ phận đó cấp nội dung đầu vào trong tối đa 03 giờ làm việc theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.2a.

### LS-16. Soạn bộ hợp đồng mẫu và biểu mẫu cho khách

1. `CV-LS` nhận danh mục giao dịch khách làm thường xuyên và mẫu khách đang dùng nếu có.
2. `CV-LS` soạn bộ hợp đồng mẫu và biểu mẫu.
3. `CV-LS` soạn hướng dẫn dùng từng mẫu và danh mục nội dung bắt buộc điền.
4. `CV-LS` chuyển bộ mẫu sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: 05 NLV.

### LS-17. Hỗ trợ khách làm việc với cơ quan nhà nước trong một vụ việc pháp lý

1. Cơ quan nhà nước ra văn bản hoặc khách yêu cầu: `CV-LS` nhận văn bản; ghi sự kiện Nhận vào sổ cái.
2. Hồ sơ nghiệp vụ do bộ phận giữ hồ sơ cấp: `CV-LS` mở Job phụ lấy hồ sơ; ghi sự kiện Phát sinh việc vào sổ cái.
3. `CV-LS` đọc văn bản, kết luận yêu cầu trong 01 NLV và ghi hạn trên văn bản.
4. `CV-LS` soạn bản dự thảo văn bản giải trình hoặc văn bản trả lời; khách ký và khách gửi. Cam kết của oBacker chỉ là mốc gửi bản dự thảo, không phải thời hạn trả lời của cơ quan.
5. `CV-LS` chuyển bản dự thảo cho `AM` chậm nhất 06 NLV trước hạn ghi trên văn bản của cơ quan; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-LS-03`: mọi kết luận trong đầu ra truy được về một mã căn cứ đã đối chiếu bản gốc; `TL-LS` kiểm; không đạt thì trả lại.

Điểm kiểm soát: `KS-LS-07`: đầu ra không chứa cam kết về kết quả của một tranh chấp, một vụ kiện hay một quyết định của cơ quan nhà nước; `TL-LS` kiểm; không đạt thì sửa câu chữ.

Thời hạn: gửi bản dự thảo cho `AM` chậm nhất 06 NLV trước hạn ghi trên văn bản của cơ quan; thời hạn bên ngoài theo chính văn bản đó.

### LS-18. Điều phối luật sư hoặc đối tác thuê ngoài

1. Việc ngoài bốn nhóm yêu cầu tại mục 1 hoặc thuộc tố tụng: `CV-LS` từ chối việc soạn đơn từ; chuyển sang LS-18 và báo `CEO`; ghi sự kiện Chuyển vào sổ cái.
2. `TL-LS` đề xuất nhận việc cần đối tác thuê ngoài, kèm phạm vi, thời hạn và chi phí với đối tác; `COO` quyết định; `CEO` quyết định khi vượt hạn mức chi, theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4; người quyết ghi sự kiện Quyết định vào sổ cái. Đối tác không liên hệ trực tiếp khách.
3. `CV-LS` soát xét sản phẩm của đối tác và chuẩn hóa theo biểu mẫu oBacker; ghi sự kiện Soát vào sổ cái.
4. `CV-LS` chuyển sản phẩm đã chuẩn hóa sang LS-19; ghi sự kiện Chuyển vào sổ cái.

Thời hạn: soát xét sản phẩm của đối tác trong 02 NLV kể từ khi nhận; thời hạn bên ngoài theo hợp đồng với đối tác.

### LS-19. Bàn giao sản phẩm pháp lý qua `AM`

1. `TL-LS` duyệt sản phẩm; ghi sự kiện Duyệt vào sổ cái.
2. Vụ việc mức phức tạp: `COO` soát tiến độ và để lại dấu vết soát trên Job; ghi sự kiện Soát vào sổ cái.
3. `CV-LS` nhận sản phẩm đã duyệt và danh mục giả thiết đã dùng; lập bản bàn giao đủ năm phần.
4. `CV-LS` gửi bản bàn giao cho `AM` trước hạn gửi khách ít nhất 0,5 NLV; ghi sự kiện Chuyển vào sổ cái.
5. `AM` soát mức khớp giữa đầu ra và yêu cầu ghi trong hợp đồng; không khớp thì `AM` trả lại bộ phận; ghi sự kiện Soát vào sổ cái.
6. `AM` gửi bản bàn giao cho khách; ghi sự kiện Gửi khách vào sổ cái.

Điểm kiểm soát: `KS-LS-05`: `COO` đã soát tiến độ vụ việc mức phức tạp và dấu vết soát nằm trên Job; `COO` kiểm trước khi bàn giao; không đạt thì không bàn giao.

Điểm kiểm soát: `KS-LS-06`: `AM` đã soát mức khớp giữa đầu ra và yêu cầu ghi trong hợp đồng; `AM` kiểm trước khi gửi khách; không đạt thì `AM` trả lại bộ phận.

Thời hạn: gửi `AM` trước hạn gửi khách ít nhất 0,5 NLV; thời hạn bên ngoài theo mốc đã cam kết với khách.

### LS-20. Đóng vụ việc và nộp bài học về Legal R&D

1. `CV-LS` đóng hồ sơ vụ việc sau LS-19.
2. `CV-LS` lập phiếu bài học gồm danh mục nội dung phải tra bản gốc và nội dung chưa có chuẩn, kèm đề xuất bổ sung mẫu hoặc mã căn cứ.
3. `CV-LS` gửi phiếu bài học cho Legal R&D; ghi sự kiện Chuyển vào sổ cái. Legal R&D nhận và xử theo RD-16.
4. `CV-LS` ghi giờ công và chi phí của vụ việc; ghi sự kiện Ghi giờ công và chi phí, rồi sự kiện Xong vào sổ cái.

Thời hạn: 03 NLV kể từ ngày bàn giao.

### LS-21. Cập nhật bảng Job và hướng dẫn cấp 3 khi có văn bản pháp luật mới

1. Legal R&D bàn giao yêu cầu sửa theo RD-07; người giữ Job nhận bản đánh giá tác động và danh sách Job bị ảnh hưởng; ghi sự kiện Nhận vào sổ cái.
2. Người giữ Job sửa bảng Job và hướng dẫn cấp 3 theo danh sách Job bị ảnh hưởng.
3. Người giữ Job đóng Job sửa để RD-07 đóng theo; ghi sự kiện Xong vào sổ cái.

Thời hạn: theo mốc cập nhật tài liệu của mức ưu tiên đã phân tại [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.5a; thời hạn bên ngoài là ngày hiệu lực của văn bản.

### RD-01. Ghi nhận văn bản pháp luật mới

1. Người phát hiện báo số hiệu văn bản và nguồn phát hiện; `CV-RD` nhận; ghi sự kiện Nhận vào sổ cái.
2. `CV-RD` ghi dòng vào sổ theo dõi kèm hạng nguồn và mức xác minh ban đầu; ghi cả khi chưa chắc chắn; ghi sự kiện Tạo vào sổ cái.
3. `CV-RD` mở RD-04 và RD-02; ghi sự kiện Phát sinh việc vào sổ cái.

Thời hạn: 02 NLV kể từ khi nhận tin báo. Phương pháp tra cứu theo [[12_HD_Phuong_phap_tra_cuu_va_cap_nhat_phap_luat|OBK-HB-71]].

### RD-02. Nhập bản gốc vào kho văn bản

1. `CV-RD` tải bản gốc từ nguồn chính thống.
2. `CV-RD` lưu tệp bản gốc vào kho văn bản kèm bảng thông tin đủ dòng; ghi sự kiện Chuyển vào sổ cái để RD-03 nhận.
3. Không tải được: `CV-RD` lập phiếu theo dõi trong sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] và ghi văn bản vào danh mục văn bản còn thiếu; ghi sự kiện Chờ vào sổ cái. RD-05 không cam kết mốc và `TL-RD` báo `CEO` trong cùng ngày làm việc.

Thời hạn: 03 NLV kể từ RD-01; 01 NLV với văn bản mức ưu tiên 1.

### RD-03. Xác minh hiệu lực và phần bị bãi bỏ

1. `CV-RD` đọc bản gốc trong kho và văn bản mới hơn cùng lĩnh vực.
2. `CV-RD` đọc điều khoản thi hành của văn bản mới hơn; không lấy từ trí nhớ và không lấy từ nguồn thứ cấp.
3. `CV-RD` kết luận hiệu lực, phần bị thay, phần bị bãi bỏ và điều khoản chuyển tiếp nếu có; ghi vị trí bản gốc kèm số dòng.
4. `TL-RD` quyết mức xác minh; ghi sự kiện Quyết định vào sổ cái.

Điểm kiểm soát: `KS-RD-01`: kết luận hiệu lực dựa trên điều khoản thi hành của văn bản mới hơn, đã mở bản gốc và đã ghi vị trí bản gốc kèm số dòng; `TL-RD` kiểm trước RD-06; không đạt thì không cập nhật sổ, kết luận từ nguồn thứ cấp giữ mức chưa đối chiếu bản gốc.

Thời hạn: 03 NLV kể từ RD-02; 01 NLV với văn bản mức ưu tiên 1. Phương pháp theo [[12_HD_Phuong_phap_tra_cuu_va_cap_nhat_phap_luat|OBK-HB-71]].

### RD-04. Phân mức ưu tiên của văn bản mới

1. `TL-RD` nhận nội dung văn bản, danh mục Job và danh mục khách hiện có.
2. `TL-RD` phân mức ưu tiên theo tiêu chí tại [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.5a; ghi lý do; ghi sự kiện Quyết định vào sổ cái.
3. RD-02 và RD-03 đi nhánh nhanh với mức ưu tiên 1 và đi nhánh thường với các mức còn lại.

Thời hạn: 01 NLV kể từ RD-01; thời hạn bên ngoài là ngày hiệu lực của văn bản.

### RD-05. Lập bản đánh giá tác động

1. `CV-RD` nhận bản gốc đã nhập kho, kết luận hiệu lực của RD-03 và mức ưu tiên của RD-04.
2. `CV-RD` lập bản đánh giá tác động kèm danh sách mã Job bị ảnh hưởng và danh sách nhóm khách bị ảnh hưởng.
3. `CV-RD` đối chiếu danh sách mã Job với bảng tác động ngược.
4. Job chịu hai mốc trở lên: áp mốc đến trước và ghi lý do trên Job; văn bản mức Ưu tiên 1 có ngày hiệu lực đến trước mốc 05 ngày làm việc thì lấy ngày hiệu lực.
5. `CV-RD` chuyển bản đánh giá cho RD-07; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-RD-03`: bản đánh giá tác động có danh sách mã Job bị ảnh hưởng và danh sách đó đã đối chiếu với bảng tác động ngược; `TL-RD` kiểm trước RD-07; không đạt thì quay lại RD-05.

Thời hạn: theo mốc hoàn thành đánh giá tác động của mức ưu tiên đã phân tại [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.5a, đếm từ ngày ghi nhận tại RD-01; thời hạn bên ngoài là ngày hiệu lực của văn bản.

### RD-06. Cập nhật sổ căn cứ và bảng tác động ngược

1. `CV-RD` nhận nguyên văn điều khoản và mã văn bản đã có trong sổ căn cứ.
2. `CV-RD` sửa dữ liệu nguồn của sổ căn cứ; không sửa thẳng vào tệp sổ.
3. Mỗi mã căn cứ mới có đủ bốn mục: nguyên văn điều khoản, mã văn bản, vị trí bản gốc, ngày kiểm.
4. `TL-RD` duyệt mã căn cứ; ghi sự kiện Duyệt vào sổ cái.
5. `CV-RD` sinh lại sổ căn cứ và bảng tác động ngược; ghi sự kiện Xong vào sổ cái.

Điểm kiểm soát: `KS-RD-01`: kết luận hiệu lực dựa trên điều khoản thi hành của văn bản mới hơn và đã ghi vị trí bản gốc; `TL-RD` kiểm trước RD-06; không đạt thì không cập nhật sổ.

Điểm kiểm soát: `KS-RD-02`: mã căn cứ mới có đủ nguyên văn điều khoản, mã văn bản, vị trí bản gốc và ngày kiểm; `TL-RD` kiểm trước khi sinh lại sổ căn cứ; thiếu một mục thì không sinh lại.

Thời hạn: cùng mốc với RD-05.

### RD-07. Bàn giao yêu cầu sửa cho `TL` bộ phận và theo dõi tới khi đóng

1. `TL-RD` nhận bản đánh giá tác động và danh sách Job bị ảnh hưởng.
2. `TL-RD` giao Job sửa tài liệu cho từng bộ phận trong 01 NLV kể từ khi xong RD-05: `KT-25`, `LD-24`, `LS-21`; bộ phận Giấy phép chưa có Job tương đương nên `TL-RD` mở một Job rời và ghi lý do trên Job này; ghi sự kiện Phát sinh việc vào sổ cái.
3. `TL-RD` theo dõi trạng thái từng Job sửa.
4. `TL` bộ phận đóng Job sửa của bộ phận; `TL-RD` đóng RD-07; ghi sự kiện Xong vào sổ cái.

Thời hạn: giao trong 01 NLV kể từ khi xong RD-05; theo dõi tới khi `TL` bộ phận đóng Job sửa, mốc sửa theo mức ưu tiên đã phân tại [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.5a; thời hạn bên ngoài là ngày hiệu lực của văn bản.

### RD-08. Họp thống nhất cách hiểu và cách áp dụng

1. `TL-RD` họp với các `TL` bộ phận trong 02 NLV kể từ khi xong RD-05; cuộc họp là bước bắt buộc.
2. `TL-RD` lập biên bản chốt cách hiểu và cách áp dụng.
3. Điểm chưa rõ: `TL-RD` đưa lên `CEO`; ghi sự kiện Chuyển vào sổ cái.
4. `TL-RD` ghi sự kiện Quyết định vào sổ cái khi biên bản chốt xong.

Điểm kiểm soát: `KS-RD-06`: với văn bản mức ưu tiên 1, RD-08 đã họp và có biên bản chốt cách hiểu; `TL-RD` kiểm trước khi bộ phận sửa tài liệu; không đạt thì bộ phận chưa sửa.

Thời hạn: họp trong 02 NLV kể từ khi xong RD-05.

### RD-09. Cấp cơ sở pháp lý cho nghiệp vụ lạ

1. `TL` bộ phận mở Job phụ khi gặp nghiệp vụ chưa có chuẩn; `CV-RD` nhận mô tả nghiệp vụ, dữ kiện thực tế của khách và kết luận sơ bộ của bộ phận về chỗ vướng; ghi sự kiện Nhận vào sổ cái.
2. Văn bản chưa có trong kho: `CV-RD` cấp mốc ước lượng cho `TL` bộ phận trong 01 NLV, mở RD-02 và không cam kết mốc kết luận cho tới khi có bản gốc; ghi sự kiện Phát sinh việc vào sổ cái.
3. `CV-RD` lập bản cơ sở pháp lý đủ năm mục: điều kiện, trình tự, thời hạn, cơ quan có thẩm quyền, chi phí; mỗi mục kèm mã căn cứ.
4. `CV-RD` chuyển bản cơ sở pháp lý cho `TL` bộ phận; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-RD-04`: bản cơ sở pháp lý đủ năm mục và mỗi mục có mã căn cứ; `TL-RD` kiểm trước khi bàn giao cho `TL-LIC` hoặc `TL` bộ phận khác; không đạt thì chưa bàn giao.

Thời hạn: văn bản đã có trong kho: 03 NLV; văn bản chưa có trong kho: cấp mốc ước lượng trong 01 NLV.

### RD-10. Trả lời câu hỏi pháp lý mà bộ phận không tra được

1. `TL` bộ phận mở Job phụ sau khi đã tra và không kết luận được; `CV-RD` nhận câu hỏi đã ghi trên Job, danh mục nguồn bộ phận đã tra và dữ kiện thực tế của khách; ghi sự kiện Nhận vào sổ cái.
2. `CV-RD` tra bản gốc và ghi mã căn cứ đã đối chiếu bản gốc.
3. Không kết luận được: `CV-RD` mở RD-12 trước khi trả lời; ghi sự kiện Phát sinh việc vào sổ cái.
4. `CV-RD` trả lời `TL` bộ phận kèm mã căn cứ, hoặc kèm kết luận không kết luận được và RD-12; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-RD-05`: không kết luận được thì đã mở phiếu theo dõi trong sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] kèm nhánh thay thế và thời hạn hoàn thành; `TL-RD` kiểm trước khi trả lời bộ phận; không đạt thì không trả lời bằng câu chưa có căn cứ.

Thời hạn: 05 NLV kể từ khi nhận đủ đầu vào; mốc này thay mốc `T3` của KT-23, LD-01 và LS-07 khi các Job đó mở RD-10.

### RD-11. Kết luận pháp lý dùng làm chuẩn nội bộ

1. `CV-RD` nhận bản trả lời của RD-10 và các vụ việc đã gặp; câu hỏi lặp lại từ hai bộ phận hoặc từ hai khách trở lên.
2. `CV-RD` soạn kết luận chuẩn.
3. `TL-RD` chốt kết luận chuẩn; ghi sự kiện Quyết định vào sổ cái.
4. `CV-RD` đưa kết luận vào sổ căn cứ hoặc chuẩn nghiệp vụ và mã hóa để mọi bộ phận dẫn chiếu; đầu ra là một mã, không phải một câu trả lời rời; ghi sự kiện Xong vào sổ cái.

Thời hạn: 05 NLV kể từ khi nhận đủ đầu vào.

### RD-12. Mở mã cần xác minh và đặt hạn chót cho nội dung chưa xác minh được

1. `CV-RD` nhận câu hỏi và danh mục văn bản còn thiếu từ RD-09, RD-10 hoặc từ bộ phận báo gặp nội dung chưa xác minh được.
2. `CV-RD` mở phiếu theo dõi trong sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] kèm rủi ro, nhánh thay thế và thời hạn hoàn thành; ghi sự kiện Tạo vào sổ cái.
3. Mã có hậu quả không tự lộ ra: hạn chót là bắt buộc.
4. `TL-RD` ghi sự kiện Quyết định vào sổ cái khi chốt hạn chót.

Điểm kiểm soát: `KS-RD-05`: không kết luận được thì đã mở phiếu theo dõi trong sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] kèm nhánh thay thế và thời hạn hoàn thành; `TL-RD` kiểm trước khi trả lời bộ phận; không đạt thì `CV-RD` lập lại phiếu theo dõi.

Thời hạn: mở trong 01 NLV.

### RD-13. Nâng mức xác minh từ chưa đối chiếu bản gốc hoặc chưa xác minh được lên đã đối chiếu bản gốc

1. `CV-RD` nhận bản gốc trong kho và mã cần xác minh.
2. `CV-RD` chép nguyên văn điều khoản và ghi ngày kiểm.
3. `TL-RD` quyết mức xác minh mới của mã; ghi sự kiện Quyết định vào sổ cái.
4. Nội dung quá hai lần rà soát chưa hoàn thành: `TL-RD` báo cáo `CEO`; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-RD-02`: mã căn cứ đã nâng mức có đủ nguyên văn điều khoản, mã văn bản, vị trí bản gốc và ngày kiểm; `TL-RD` kiểm; thiếu một mục thì mã chưa dùng được.

Thời hạn: theo thời hạn cam kết trong sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]].

### RD-14. Rà soát hiệu lực toàn sổ căn cứ

1. `CV-RD` đối chiếu sổ căn cứ với kho văn bản.
2. `CV-RD` lập danh mục mã có văn bản bị thay hoặc bị bãi bỏ.
3. `CV-RD` mở Job sửa cho từng mã trong danh mục; ghi sự kiện Phát sinh việc vào sổ cái.
4. Có văn bản mức ưu tiên 1: `CV-RD` rà đột xuất ngay.

Thời hạn: hằng quý, chậm nhất ngày cuối cùng của tháng đầu quý sau; rà đột xuất ngay khi có văn bản mức ưu tiên 1.

### RD-15. Rà soát giả thiết và mã chưa kết luận

1. `CV-RD` rà toàn bộ nội dung yêu cầu nghiên cứu pháp lý trong sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]].
2. `CV-RD` ghi mỗi giả thiết một trong ba trạng thái: GIỮ, ĐÚNG, SAI.
3. Mã ở trạng thái GIỮ quá hai lần liên tiếp: `TL-RD` báo `CEO`; ghi sự kiện Chuyển vào sổ cái.

Thời hạn: mỗi 06 tháng, hoặc ngay khi có văn bản mới ảnh hưởng một giả thiết; thời hạn bên ngoài là hạn chót cứng của từng giả thiết.

### RD-16. Soạn và cập nhật chuẩn nghiệp vụ bàn giao cho Phòng Dịch vụ

1. `CV-RD` nhận kết luận chuẩn của RD-11, phiếu bài học LS-20 và các phiếu tương đương của ba bộ phận còn lại, kế hoạch quý.
2. Phiếu bài học nhận được: `CV-RD` phản hồi trong 05 NLV bằng một trong ba kết quả: nhận, gộp vào bản quý, hoặc không cần sửa kèm lý do.
3. `CV-RD` soạn bản chuẩn nghiệp vụ hoặc bản sửa chuẩn.
4. `CV-RD` bàn giao bản chuẩn cho `TL` bộ phận; ghi sự kiện Chuyển vào sổ cái.
5. `TL` bộ phận xác nhận đã nhận trên Job; ghi sự kiện Xong vào sổ cái.

Thời hạn: theo kế hoạch quý; phản hồi phiếu bài học trong 05 NLV.

### RD-17. Soát nội dung pháp lý của tài liệu trước khi phát hành

1. `COO` hoặc `TL` bộ phận gửi bản tài liệu cần soát và danh mục chỗ có nội dung pháp lý; `CV-RD` nhận; ghi sự kiện Nhận vào sổ cái.
2. `CV-RD` soát nội dung pháp lý của tài liệu và đối chiếu mã căn cứ.
3. `CV-RD` ghi kết luận đạt, hoặc danh mục chỗ phải sửa kèm mã căn cứ đúng; ghi sự kiện Soát vào sổ cái.
4. `COO` quyết bản nào được phát hành; quyết định này nằm ngoài Job RD-17.

Thời hạn: 03 NLV kể từ khi nhận bản.

### RD-18. Soát bộ hợp đồng dịch vụ và bộ điều khoản của oBacker

1. `AM` hoặc `CEO` yêu cầu, hoặc đến kỳ rà lại theo lịch; `CV-RD` nhận bản hợp đồng mẫu đang dùng, danh mục dịch vụ đang bán và tên đầu ra tại bảng Job của từng bộ phận; ghi sự kiện Nhận vào sổ cái.
2. `CV-RD` đối chiếu phạm vi ghi trong mẫu với tên đầu ra tại bảng Job.
3. `CV-RD` lập bản mẫu đã soát kèm danh mục điều khoản phải sửa và lý do.
4. Yêu cầu từ `AM-24`: `CV-RD` ghi kết luận về điều khoản khách đồng ý chia sẻ thông tin với bên đã giới thiệu.
5. `CV-RD` chuyển bản mẫu đã soát cho `AM`; ghi sự kiện Chuyển vào sổ cái.

Điểm kiểm soát: `KS-RD-07`: bộ hợp đồng dịch vụ ghi phạm vi đúng bằng tên đầu ra tại bảng Job của bộ phận; `TL-RD` kiểm trước khi `AM` dùng mẫu mới; không đạt thì không phát hành mẫu.

Thời hạn: 05 NLV khi có yêu cầu; rà lại theo lịch mỗi 06 tháng và ngay khi một bộ phận thêm hoặc bỏ một Job có đầu ra ra khỏi oBacker.

### RD-19. Soát nội dung pháp lý trước khi công bố ra ngoài

1. Marketing hoặc `AM` gửi bản nội dung sắp công bố; `CV-RD` nhận; ghi sự kiện Nhận vào sổ cái.
2. `CV-RD` soát nội dung pháp lý của bản nội dung.
3. `CV-RD` ghi kết luận đạt, hoặc danh mục chỗ phải sửa; ghi sự kiện Soát vào sổ cái.
4. Nội dung pháp lý chưa qua bước này thì không công bố.

Thời hạn: 02 NLV kể từ khi nhận bản.

### RD-20. Nghiên cứu phát triển dịch vụ pháp lý mới

1. `CV-RD` nhận đề bài từ kế hoạch quý hoặc từ `CEO`, cùng nhu cầu quan sát được từ phiếu bài học và từ câu hỏi lặp lại.
2. `CV-RD` xác định điều kiện kinh doanh phải có của dịch vụ.
3. `CV-RD` lập bản thiết kế dịch vụ: phạm vi, đầu ra, đầu vào cần khách cấp, mốc đề xuất, điều kiện kinh doanh phải có.
4. Đầu ra trả lời điều kiện kinh doanh trước khi trả lời giá; ghi sự kiện Xong vào sổ cái.

Thời hạn: theo kế hoạch quý.

### RD-21. Chuẩn bị nội dung thông báo sự cố dữ liệu cá nhân

1. `DPO` mở việc sự cố theo bước 1 mục 7 của [[Quy_che_bao_ve_du_lieu_ca_nhan|OBK-SOP-NB-09]]; `CV-RD` nhận mô tả sự cố, danh mục dữ liệu và danh mục khách bị ảnh hưởng; ghi sự kiện Nhận vào sổ cái.
2. `CV-RD` soạn bản dự thảo nội dung thông báo cho khách theo bước 6 mục 7 của quy chế đó.
3. Khi oBacker là bên kiểm soát hoặc bên kiểm soát và xử lý dữ liệu bị ảnh hưởng, `CV-RD` soạn bản dự thảo thông báo cho cơ quan chuyên trách theo bước 5 mục 7 của quy chế đó.
4. `CV-RD` chuyển các bản dự thảo cho `CEO`; `CEO` duyệt và ký; ghi sự kiện Chuyển vào sổ cái.

Thời hạn: thông báo cơ quan chuyên trách chậm nhất 72 giờ kể từ thời điểm phát hiện; thông báo khách 24 giờ sau khi cô lập xong, theo [[Quy_che_bao_ve_du_lieu_ca_nhan|OBK-SOP-NB-09]] mục 7.

### RD-22. Kết luận về hành vi oBacker nghiêm cấm khi có yêu cầu đáng ngờ

1. Vai trò phát hiện yêu cầu đáng ngờ báo `CV-RD` và báo `CEO` trong ngày phát hiện, không đợi kết luận xong; ghi sự kiện Nhận vào sổ cái.
2. `CV-RD` nhận mô tả yêu cầu của khách và bản ghi ai yêu cầu, khi nào, qua kênh nào.
3. `CV-RD` đề xuất kết luận yêu cầu thuộc hay không thuộc hành vi oBacker nghiêm cấm, kèm mã căn cứ; ghi sự kiện Chuyển vào sổ cái cho `CEO`.
4. `CEO` quyết định theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4; ghi sự kiện Quyết định vào sổ cái.

Thời hạn: kết luận trong 04 gLV; báo `CEO` trong ngày phát hiện.

---

## 4. LỖI THƯỜNG GẶP

| Lỗi | Dấu hiệu | Cách xử lý |
| --- | --- | --- |
| Nhận việc thuộc lớp của bộ phận khác | Yêu cầu tới Bộ phận Dịch vụ pháp lý nhưng hồ sơ đang ở Kế toán, Giấy phép hoặc Lao động, và việc chỉ là giải trình theo hồ sơ đó | Xác định bộ phận đang giữ hồ sơ theo lớp của yêu cầu tại mục 1; chuyển cho bộ phận giữ hồ sơ tại LS-01 theo `KS-LS-01` |
| Kết luận theo mẫu cũ mà không mở lại bản gốc | Bản dự thảo giống vụ việc trước và trên Job không có dấu vết mở bản gốc lần này | Mở lại bản gốc và ghi mã căn cứ theo `KS-LS-03`; mẫu cũ chỉ dùng để soạn nhanh |
| Kết luận khi dữ kiện của khách chưa xác nhận | Bản ghi nhớ mở bằng "theo thông tin được cung cấp" và không có văn bản nào của khách xác nhận thông tin | Lấy xác nhận bằng thư điện tử công ty theo `KS-LS-04`; xác nhận qua kênh liên lạc thông thường chưa đủ |
| Ghi thời hạn trả lời của cơ quan như lời hứa | Bản dự thảo hoặc thư gửi khách ghi cơ quan sẽ trả lời trong bao nhiêu ngày | Ghi rõ con số là thời hạn pháp luật đặt cho cơ quan; cam kết của oBacker là mốc gửi bản dự thảo |
| Đổi mức phức tạp trong lúc làm Job | Job chọn mức thường tại LS-01, gần hạn đổi sang mức phức tạp | Chốt mức tại LS-01 và ghi lý do; phát hiện muộn thì báo `AM` ngay, không tự đổi mức |
| Nhận việc tố tụng vì nghĩ chỉ soạn giấy tờ | Khách nhờ soạn đơn khởi kiện, đơn kháng cáo hoặc bản tự bảo vệ để khách tự nộp | Từ chối việc soạn đơn từ; chuyển sang LS-18 và báo `CEO` |
| Kết luận một văn bản còn hiệu lực vì chưa tìm thấy văn bản thay thế | Phần căn cứ để trống hoặc ghi đã tìm mà không thấy | Giữ mức chưa đối chiếu bản gốc và ghi nơi đã tìm; chỉ nâng mức khi đọc được điều khoản thi hành của văn bản mới hơn |
| Trích văn bản hợp nhất mà không ghi năm | Mã căn cứ ghi số hiệu văn bản hợp nhất, không kèm năm hoặc ngày ban hành | Mã căn cứ trỏ về mã văn bản trong sổ; số hiệu phải kèm năm hoặc ngày ban hành |
| Coi việc bàn giao tác động là xong | RD-05 đóng, RD-07 mở Job cho bộ phận, và không ai theo dõi tiếp | RD-07 chỉ đóng khi `TL` bộ phận đóng Job sửa của mình |
| Trả lời một khách cụ thể bằng một câu văn tại Legal R&D | Câu hỏi của một khách được trả lời trực tiếp, không thành mã căn cứ hoặc dòng chuẩn nghiệp vụ | Kết luận chỉ dùng cho một khách thì chuyển cho `TL-LS`; kết luận dùng cho mọi khách về sau thì thành mã căn cứ hoặc dòng chuẩn nghiệp vụ |

---

## NHẬT KÝ SỬA

| Ngày | Phiên bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | V2.0.0 | LS-02, LS-18, RD-22 theo bảng thẩm quyền; RD-21 theo quy chế bảo vệ dữ liệu; định nghĩa nhóm, lớp, mức phức tạp vào mục 1. |
