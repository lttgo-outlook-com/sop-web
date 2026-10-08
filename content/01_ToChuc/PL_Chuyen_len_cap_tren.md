---
title: "Chuyển lên cấp trên và cơ chế xử lý xung đột"
code: "OBK-QCTC-02-PL-C"
type: "sop"
folder: "01_ToChuc"
level: "Phụ lục"
version: "R.3.0.1"
status: "đang áp dụng"
draft_date: "04/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-QCTC-02 Quy chế tổ chức và phân quyền"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-QCTC-02-PL-C
tags:
  - loai/sop
  - cap/phu-luc
---
# Chuyển lên cấp trên và cơ chế xử lý xung đột

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-QCTC-02-PL-C |
| Cấp tài liệu | Phụ lục |
| Phiên bản | R.3.0.1, đang áp dụng |
| Ngày biên soạn | 04/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] Bảng thẩm quyền |

Tài liệu này quy định tuyến chuyển lên cấp trên theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]] mục 7.6.

## 1. Tuyến xử lý theo chuyên môn và theo cấp bậc

**Theo chuyên môn.** Vấn đề cần chuyên môn nào thì đi thẳng tới đơn vị có chuyên môn đó, không phụ thuộc cấp bậc. Người chuyển vẫn theo sát tới khi có kết quả.

| Loại vấn đề | Đơn vị nhận |
| --- | --- |
| Giấy phép lao động, thẻ tạm trú, thị thực, đăng ký doanh nghiệp, đăng ký đầu tư, sở hữu trí tuệ | Bộ phận Giấy phép |
| Hạch toán, tờ khai thuế, quyết toán, hóa đơn, báo cáo tài chính của KHÁCH | Bộ phận Kế toán và Thuế |
| Hợp đồng lao động, bảng lương, BHXH, báo cáo lao động, kỷ luật lao động CỦA KHÁCH | Bộ phận Lao động và Tiền lương |
| Soạn và rà hợp đồng, tư vấn theo yêu cầu, nghiên cứu theo yêu cầu, bộ tài liệu nội bộ cho khách | Bộ phận Dịch vụ pháp lý, xem `03_DichVu/06_OBK-SOP-LS` |
| Nghiệp vụ chưa có chuẩn, văn bản pháp luật mới, kết luận dùng cho mọi khách về sau, hành vi oBacker nghiêm cấm | Legal R&D, xem `03_DichVu/07_OBK-SOP-RD` |
| Thanh tra và kiểm tra **THUẾ** của khách, làm việc với đoàn kiểm tra thuế | Bộ phận Kế toán và Thuế: `TL-KT` chủ trì; Bộ phận Dịch vụ pháp lý tham vấn về thủ tục và thời hiệu; Legal R&D về hành vi oBacker nghiêm cấm |
| Thanh tra **LAO ĐỘNG** của khách | Bộ phận Lao động và Tiền lương: `TL-LD` chủ trì, Bộ phận Dịch vụ pháp lý tham vấn về thủ tục và thời hiệu |
| **Tranh chấp** của khách phải lập luận pháp lý hoặc phải ra văn bản có ký | Bộ phận Dịch vụ pháp lý chủ trì, bộ phận giữ hồ sơ cấp hồ sơ |
| Yêu cầu và phản hồi của khách, phạm vi dịch vụ, phí, gia hạn, khiếu nại | Bộ phận Quản lý khách hàng |
| Đối tác và chương trình hợp tác | Đối tác và Chương trình |
| Công nợ, hóa đơn đầu ra, đối soát thanh toán, sổ sách CỦA OBACKER | Kế toán nội bộ, xem [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] |
| Sự cố hệ thống, công cụ, dữ liệu | Công nghệ và Sản phẩm |
| Tuyển dụng, hợp đồng lao động, đãi ngộ, hành chính CỦA OBACKER | Nhân sự |

Các trường hợp dễ chuyển sai đơn vị:

- Việc lao động tiền lương: của KHÁCH thì về Bộ phận Lao động và Tiền lương, gồm cả kỷ luật lao động của khách; của oBacker thì về Nhân sự. Việc "Nhân sự: xử lý kỷ luật lao động của oBacker" tại [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 4 là việc nội bộ, không chồng với việc lao động của khách nêu trên.
- Việc pháp lý: có khách và có thu thì về Bộ phận Dịch vụ pháp lý; là chuẩn nội bộ hoặc chưa có tiền lệ thì về Legal R&D.

> [!note] NGUYÊN TẮC PHÂN LỚP XỬ LÝ THANH TRA VÀ TRANH CHẤP
> Quy tắc phân lớp xác định theo nội dung yêu cầu:
> 1. Giải trình theo hồ sơ đã có: `TL` bộ phận giữ hồ sơ chủ trì (thanh tra thuế do `TL-KT` chủ trì, thanh tra lao động do `TL-LD` chủ trì).
> 2. Lập luận pháp lý hoặc phát hành văn bản có chữ ký: `TL-LS` chủ trì.
> 3. Vấn đề chưa có tiền lệ hoặc kết luận áp dụng chung: `TL-RD` tham mưu, `CEO` quyết định.

**Theo cấp bậc.**

Nhánh dịch vụ:

| Cấp | Vai trò | Nhận việc gì |
| --- | --- | --- |
| Cấp 1 | `TL` bộ phận | Mọi vướng mắc nghiệp vụ trong bộ phận;<br>cách xử lý;<br>duyệt đầu ra |
| Cấp 2 | `CEO` | `TL` không đủ thẩm quyền; vấn đề liên bộ phận; điều chuyển nguồn lực và định biên; rủi ro pháp lý, phát sinh tiền phạt, ảnh hưởng uy tín, hành vi oBacker nghiêm cấm |

Nhánh thương mại:

| Cấp | Vai trò | Nhận việc gì |
| --- | --- | --- |
| Cấp 1 | `AM` | Mọi việc thuộc quan hệ khách hàng trong thẩm quyền Bộ phận Quản lý khách hàng; ưu tiên giữa các khách; giá trong khung; điều phối giữa AM và Đối tác |
| Cấp 2 | `CEO` | Giá ngoài khung, chiết khấu đặc biệt, nhận khách, từ chối khách, chấm dứt hợp đồng, khiếu nại thương mại |

Nhánh kiến tạo và hỗ trợ:

| Cấp | Vai trò | Nhận việc gì |
| --- | --- | --- |
| Cấp 1 | Trưởng đơn vị, tức `TL-RD`, Tech Lead, `KTT`, HR Generalist | Mọi việc trong phạm vi đơn vị |
| Cấp 2 | `CEO` | Vượt thẩm quyền đơn vị;<br>xung đột với nhánh dịch vụ hoặc nhánh thương mại |

## 2. Xử lý thiếu hụt lớp kiểm soát do kiêm nhiệm

Người kiêm nhiệm xác định theo [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 3. Khi tách vai trò, các hệ quả nêu dưới đây không còn.

| Chỗ | Hệ quả | Quy tắc bù |
| --- | --- | --- |
| `CEO` đồng thời là TP Thương mại | Người đứng đầu nhánh thương mại là chính người quyết cấp cuối của nhánh | Không có cấp trung lập. Khi việc thương mại xung đột với năng lực giao hàng thì áp mục 3 dưới đây, không áp tuyến theo cấp bậc tại mục 1 |
| Legal R&D Team Lead đồng thời là `TL-LS` | Chuẩn chuyên môn và người thực thi chuẩn là một | Đầu ra của Bộ phận Dịch vụ pháp lý phải có bước soát xét độc lập của `COO` về tiến độ, và của `AM` về khớp yêu cầu khách.<br>Không có lớp soát xét chuyên môn thứ hai. |
| `NĐDPL` trên GCN và Chủ tịch `HĐQT` đồng thời là Legal R&D Team Lead | Legal R&D là vai trò không tiếp xúc khách, nhưng `NĐDPL` lại là người KÝ hợp đồng với khách | Việc **KÝ văn bản với tư cách `NĐDPL`** không tính là tiếp xúc khách.<br>Bù lại: **mọi trao đổi quanh việc ký vẫn qua `AM`**, gồm gửi bản ký, giải thích điều khoản, thương lượng sửa điều khoản, nhắc ký, nhận bản khách ký lại.<br>Người giữ vai trò không trao đổi trực tiếp với khách về nội dung hợp đồng; nếu khách hỏi thẳng thì chuyển `AM` trong cùng cuộc trao đổi |
| `AM` đồng thời là `PM`, tức Phụ trách Đối tác và Chương trình | Cấp 2 nhánh thương mại nhận việc "điều phối giữa AM và Đối tác", nhưng hai bên cần điều phối là một người. | Việc điều phối giữa Bộ phận Quản lý khách hàng và Đối tác và Chương trình **chuyển THẲNG lên TP Thương mại**, bỏ qua lớp tự điều phối, và ghi lý do trên Job là hai bên trùng người.<br>Do TP Thương mại hiện do `CEO` kiêm nhiệm, áp dụng tiếp quy tắc chung ở cuối mục này |
| `KTV` kế toán nội bộ đồng thời là `CV-KT` chuyên viên kế toán dịch vụ | Sổ sách CỦA OBACKER và hồ sơ CỦA KHÁCH do cùng một người làm ở cấp thực thi.<br>Ảnh hưởng nguyên tắc tách bạch việc THU PHÍ khỏi việc THỰC HIỆN nghĩa vụ tuân thủ tại [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] mục 6.8.1 nguyên tắc 1: người đang làm hồ sơ tuân thủ cho khách cũng là người có số liệu công nợ của khách đó | Với khách mà người này đang làm hồ sơ: việc **nhắc phí và công nợ vẫn do `KTV` lập số liệu, `KTT` giám sát, `AM` gửi cho khách**.<br>Người kiêm hai vai trò không trao đổi với khách về công nợ.<br>Khớp [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 16.1 |

**Quy tắc chung khi hai cấp liền kề do cùng một người giữ.** Bỏ qua cấp trùng, chuyển thẳng lên cấp trên kế tiếp, và ghi lý do trên Job. Không được coi việc đã chuyển lên cấp trên khi người quyết cấp 2 chính là người quyết cấp 1.

## 2a. Quy tắc giao tiếp trong bộ phận và giữa các bộ phận

Các quy tắc dưới đây áp dụng cho toàn bộ nhân sự oBacker:

**Quy tắc 1: chỉ Job trên hệ thống quản lý công việc là nơi ghi nhận.** Một yêu cầu, một quyết định, một xác nhận, một mốc cam kết chỉ tồn tại khi được ghi trên Job. Không có Job thì coi như việc chưa được giao và quyết định chưa được ra.

**Quy tắc 2: tin nhắn và điện thoại không có giá trị lưu vết.** Hai kênh này dùng để hỏi nhanh và để giục. Giao việc, chốt, đổi phạm vi và đổi mốc không dùng hai kênh này. Nội dung nào phát sinh trên tin nhắn hoặc điện thoại mà có nghĩa vụ, có mốc, có số liệu hoặc có kết luận nghiệp vụ thì **người nhận phải xác nhận lại trên Job** trước khi làm theo. Người ra yêu cầu bằng tin nhắn mà không xác nhận lại trên Job thì không được lấy tin nhắn làm căn cứ về sau.

**Quy tắc 3: chuyển việc giữa hai bộ phận bằng Job liên kết, không bằng tin nhắn.** Bộ phận A cần bộ phận B làm một phần việc thì tạo Job cho B và liên kết về Job gốc, kèm đầu vào, đầu ra mong đợi và mốc. Nhắc trên tin nhắn là được, nhưng bản thân việc chuyển phải là một Job liên kết.

**Quy tắc 4: Job đa bộ phận có một Job chính.**

| Nội dung | Quy tắc |
| --- | --- |
| Job chính | Đúng một Job cho mỗi việc có nhiều bộ phận tham gia. Job chính là Job giữ đầu ra cuối gửi ra khỏi oBacker |
| Người chịu trách nhiệm cuối | `TL` của bộ phận **sở hữu đầu ra cuối**. Không phải người mở Job, không phải người làm nhiều nhất |
| Job phụ | Mỗi bộ phận tham gia có Job phụ riêng, **liên kết về Job chính**. Job phụ không gửi đầu ra ra ngoài |
| Bàn giao cho `AM` | `AM` chỉ nhận bàn giao từ **Job chính**.<br>`AM` không nhận đầu ra trực tiếp từ Job phụ, và không đi hỏi từng Job phụ để tự ghép kết quả |
| Khi không rõ bộ phận nào sở hữu đầu ra cuối | Chuyển lên `CEO` theo nhánh dịch vụ. `CEO` chỉ định Job chính trước khi việc bắt đầu |

## 3. Xung đột giữa nhánh thương mại và nhánh dịch vụ

Cơ chế theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4, việc "Khách và giá: kết luận việc có làm được trong mốc khách muốn hay không", và phần Giới hạn thẩm quyền.

**Quy tắc: tách quyền quyết theo BẢN CHẤT vấn đề, không theo cấp bậc.**

| Câu hỏi thật sự đang tranh chấp | Ai quyết |
| --- | --- |
| oBacker LÀM ĐƯỢC trong mốc đó không, với nguồn lực đang có | `COO` quyết trên kết luận khả thi của `TL` bộ phận |
| Chất lượng đầu ra đã đạt chuẩn chưa | `TL` bộ phận |
| oBacker CÓ NHẬN yêu cầu đó không, giá nào, cam kết nào | `CEO` |
| Có bổ sung nguồn lực để làm được mốc khách muốn không | `CEO` quyết; `TL` bộ phận đề xuất phương án và cung cấp số liệu |

**Trình tự bắt buộc.**

1. `AM` và `TL` ghi rõ trên Job hai nội dung: khách muốn gì, bộ phận nói làm được tới đâu.
2. `TL` bộ phận trả lời câu hỏi khả thi trong 1 ngày làm việc.
3. Nếu `TL` kết luận không làm được trong mốc khách muốn, `AM` không cam kết mốc đó.
4. `CEO` quyết bổ sung nguồn lực hoặc đàm phán lại mốc với khách, và ghi quyết định vào Job.

**`CEO` không bác bỏ kết luận khả thi của `COO` bằng thẩm quyền.** `CEO` đổi được ĐẦU VÀO rồi hỏi lại `COO`, không đổi được câu trả lời.

## 4. Ma trận chuyển lên cấp trên theo loại vấn đề

Cột Cấp 2 để trống khi Cấp 1 chuyển thẳng lên Cấp cuối.

| Loại vấn đề | Cấp 1 | Cấp 2 | Cấp cuối |
| --- | --- | --- | --- |
| Chất lượng hoặc tiến độ dịch vụ | `TL` bộ phận | | `CEO` |
| Khiếu nại của khách, về CHẤT LƯỢNG hoặc QUAN HỆ, THƯƠNG MẠI | `AM` tiếp nhận, `TL` bộ phận xử lý nội dung | | `CEO` |
| Báo giá, phạm vi, chiết khấu, gia hạn; đối tác đòi cam kết ngoài khung | `AM`; đối tác do `PM` | | `CEO`;<br>Legal R&D được hỏi bắt buộc khi vượt khung |
| Công nợ và thanh toán của khách | `AM` đối ngoại, `KTT` đối nội | | `CEO` |
| Nghiệp vụ chưa có chuẩn, văn bản pháp luật mới, tuân thủ | Legal R&D | | `CEO` |
| Tranh chấp hợp đồng dịch vụ; nghi ngờ hành vi trái pháp luật của khách | `TL` bộ phận báo NGAY;<br>Legal R&D tham vấn | | `CEO` |
| Xung đột giữa nhánh thương mại và nhánh dịch vụ | theo mục 3 | theo mục 3 | theo mục 3 |
| **Sự cố dữ liệu cá nhân**: ai thông báo khách và cơ quan có thẩm quyền | Tech Lead báo NGAY nội bộ;<br>**Legal R&D chuẩn bị nội dung thông báo**;<br>`AM` là người THÔNG BÁO KHÁCH | | **`CEO` quyết**, gồm quyết thông báo cơ quan có thẩm quyền và quyết nội dung gửi ra ngoài |
| Việc nội bộ oBacker: nhân sự, chi vượt hạn mức | HR Generalist tiếp nhận hồ sơ; `KTT` cho chi vượt hạn mức | | `CEO`;<br>`HĐQT` nếu là chức danh HĐQT bổ nhiệm hoặc chạm mốc Điều lệ |

> [!note] NGUYÊN TẮC XỬ LÝ SỰ CỐ DỮ LIỆU CÁ NHÂN
> Với dữ liệu khách cung cấp để oBacker làm dịch vụ, oBacker là Bên xử lý: khi phát hiện vi phạm, oBacker thông báo KỊP THỜI cho khách, tức Bên kiểm soát; luật không đặt số giờ hay số ngày cụ thể cho nghĩa vụ này của Bên xử lý `[Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 Đ.23 k.1]`. Chính khách, với tư cách Bên kiểm soát, có nghĩa vụ thông báo cơ quan chuyên trách bảo vệ dữ liệu cá nhân chậm nhất 72 giờ kể từ khi phát hiện vi phạm, nếu vi phạm có thể gây tổn hại đến quốc phòng, an ninh quốc gia, trật tự, an toàn xã hội hoặc xâm phạm tính mạng, sức khỏe, danh dự, nhân phẩm, tài sản của chủ thể dữ liệu `[Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 Đ.23 k.1]`. Với dữ liệu người lao động của chính oBacker, oBacker là Bên kiểm soát và xử lý, và nghĩa vụ thông báo cơ quan chuyên trách trong 72 giờ đó thuộc về oBacker. Luật không đặt nghĩa vụ thông báo trực tiếp cho chủ thể dữ liệu khi xảy ra vi phạm.
>
> Thời hạn nội bộ thông báo cho khách hàng và nội dung cụ thể của thông báo gửi cơ quan chuyên trách thực hiện theo quy định tại Nghị định 356/2025/NĐ-CP và hướng dẫn quản trị nội bộ. Phân công vai trò xử lý: `AM` thông báo khách, Legal R&D chuẩn bị nội dung, `CEO` quyết.
>
> Liên quan: tư cách của oBacker là Bên xử lý hay Bên kiểm soát và xử lý với một loại dữ liệu cụ thể, xem [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4, việc "Hệ thống và dữ liệu: xác định oBacker là Bên kiểm soát hay Bên xử lý với một loại dữ liệu".

## 5. Thẩm quyền quyết định riêng của CEO

Không cấp nào được quyết thay, kể cả khi `CEO` không có mặt:

1. Nhận khách mới có yếu tố rủi ro.
2. Từ chối khách.
3. Chấm dứt hợp đồng dịch vụ trước hạn.
4. Mọi việc thuộc hành vi oBacker nghiêm cấm, theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4.

## 6. Chỉ số theo dõi hiệu quả cơ chế

| Dấu hiệu cơ chế không còn hiệu lực | Cách đo |
| --- | --- |
| Số lần `AM` cam kết mốc mà trên Job không có dấu vết xác nhận của `TL` bộ phận | đếm trên hệ thống, đọc hằng tháng |
| Số lần việc chuyển lên cấp trên mà cấp 1 và cấp 2 là cùng một người, không ghi lý do bỏ qua cấp | đếm trên hệ thống, đọc hằng tháng |

`CEO` và `COO` cùng đọc hai chỉ số này. Quy tắc theo dõi định kỳ được đánh giá và hoàn thiện sau 03 tháng vận hành.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.1 | Bỏ câu lặp phụ lục ở đầu tệp, khối nguyên tắc phân lớp, đoạn vấn đề ở mục 3, câu giới thiệu cơ cấu mới và mệnh đề lý do |
