---
title: "QUY TẮC SỔ CÁI"
code: "OBK-MSR"
type: "sop"
folder: "01_ToChuc"
level: "Cấp 1, văn bản khung toàn công ty"
version: "V4.0.0"
release: "R.26.10.08.1"
status: "đang áp dụng"
draft_date: "08/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-QCTC-02 Bảng thẩm quyền"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-MSR
  - OBK-SOP-00
  - OBK-SOP-NB-00
  - CV-01
  - TH-02
  - CL-01
  - KN-01
  - VB-01
  - BH-01
  - TS-02
  - GC-01
  - KH-01
tags:
  - loai/sop
  - cap/1
---
# QUY TẮC SỔ CÁI

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-MSR |
| Cấp tài liệu | Cấp 1, văn bản khung toàn công ty |
| Phiên bản | V4.0.0, đang áp dụng |
| Phát hành | R.26.10.08.1 |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO |
| Người soát | CEO |
| Người phê duyệt | CEO |
| Văn bản cấp trên | [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] Bảng thẩm quyền |
| Mô tả | Quy tắc ghi việc vào sổ cái. Mọi nhân viên oBacker đọc trước khi nhận việc đầu tiên |

## 1. PHẠM VI VÀ NGUYÊN TẮC

Mọi việc của oBacker đều ghi vào sổ cái, kể cả việc một người tự làm và việc chưa có mã Job. Một việc không có dòng trong sổ cái thì chưa được giao, và một quyết định không có dòng nhật ký thì chưa được ra.

Tin nhắn và điện thoại dùng để hỏi nhanh và để nhắc. Nội dung phát sinh trên tin nhắn hoặc điện thoại mà có nghĩa vụ, có mốc, có số liệu hoặc có kết luận nghiệp vụ thì người nhận ghi vào sổ cái trước khi làm.

Quy tắc này áp dụng cho mọi bộ phận và mọi cấp, gồm `AM`, `TL`, `COO` và `CEO`.

## 2. CẤU TRÚC SỔ

| Bảng | Một hàng là | Ai ghi | Nội dung |
| --- | --- | --- | --- |
| Việc | Một việc | Người mở việc | Các trường: mã việc, việc gốc, quan hệ với việc gốc, mã Job, khách, hợp đồng, đầu ra cần có, người yêu cầu, hạn, thời hạn theo pháp luật, hạn chế quyền xem, liên kết hồ sơ |
| Nhật ký | Một sự kiện | Người làm sự kiện đó | Thời điểm, mã việc, người ghi, loại sự kiện, nội dung một câu, người nhận hoặc người được chờ, mã việc liên quan, hạn trả lời, giờ công, chi phí, kết quả soát hoặc duyệt, liên kết đầu ra |
| Danh mục Job | Một Job | `CEO` | Mã Job, bộ phận, tên Job, SLA nội bộ, thời hạn bên ngoài, soát bắt buộc. Nguồn là bảng Job trong các bảng kiểm, sinh lại tại [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] |
| Khách | Một khách | `AM` | Tên khách, mã số thuế, hợp đồng đang hiệu lực, `AM` phụ trách |
| Bảng chi tiết | Một lần dùng một biểu mẫu | Người mở việc | Các trường riêng của biểu mẫu, nối với bảng Việc bằng mã việc. Ví dụ: nghỉ phép, làm thêm giờ, đề nghị thanh toán |

Trạng thái, người chịu trách nhiệm, ngày nhận, ngày đóng, hạn nhận việc, tổng giờ công và tổng chi phí của một việc tính từ nhật ký. Không ai nhập tay các giá trị đó.

## 3. QUY TẮC GHI

1. Mỗi việc là một dòng trong bảng Việc và có một sự kiện Tạo trong nhật ký. Sự kiện Tạo ghi người nhận việc.
2. Mỗi việc có đúng một người chịu trách nhiệm tại mỗi thời điểm. Chuyển việc là ghi sự kiện Chuyển; người nhận ghi sự kiện Nhận.
3. Nhật ký chỉ ghi thêm. Ghi sai thì ghi thêm một sự kiện Quyết định nêu nội dung đúng.
4. Dòng nhật ký ghi theo đúng thứ tự thời gian, tại thời điểm sự kiện xảy ra. Không ghi bù vào cuối kỳ.
5. Chờ ai hoặc chờ việc nào thì ghi sự kiện Chờ, kèm người được chờ hoặc mã việc liên quan và hạn trả lời.
6. Mọi nhân viên đọc được mọi việc, trừ việc có trường Hạn chế quyền xem là Có. Việc về lương, kỷ luật, khiếu nại quấy rối tình dục và dữ liệu cá nhân ghi Có, và chỉ người có thẩm quyền theo [[Quy_che_bao_ve_du_lieu_ca_nhan\|OBK-SOP-NB-09]] được xem.
7. Quyết định liên quan tới một việc ghi vào nhật ký của việc đó, kèm lý do một câu. Quyết định có tính xét đoán ghi đủ bốn nội dung: nội dung quyết định, các phương án đã cân nhắc, căn cứ chọn, người chốt.
8. Tệp gốc khách gửi lưu nguyên trạng tại nơi ghi ở trường Liên kết hồ sơ. Người làm việc không sửa lên bản gốc.

## 4. SỰ KIỆN

| Loại sự kiện | Trạng thái sau sự kiện | Ghi thêm |
| --- | --- | --- |
| Tạo | Mới | Người nhận việc |
| Nhận | Đang làm | |
| Chuyển | Mới, cho tới khi người nhận ghi Nhận | Người nhận việc |
| Chờ | Đang chờ | Người được chờ hoặc mã việc liên quan; hạn trả lời |
| Hết chờ | Đang làm | Mã việc liên quan nếu có |
| Quyết định | Giữ nguyên | Lý do |
| Phát sinh việc | Giữ nguyên | Mã việc mới |
| Soát | Giữ nguyên | Kết quả Đạt hoặc Không đạt |
| Duyệt | Giữ nguyên | Kết quả Duyệt hoặc Không duyệt |
| Nộp cơ quan | Giữ nguyên | Số biên nhận và ngày |
| Gửi khách | Giữ nguyên | Liên kết đầu ra đã gửi |
| Ghi giờ công và chi phí | Giữ nguyên | Số giờ, số tiền |
| Xong | Xong | Kết quả và liên kết đầu ra |
| Hủy | Hủy | Lý do |

Việc đã Xong hoặc đã Hủy không mở lại. Việc cần làm tiếp là một việc mới có trường Việc gốc ghi mã việc cũ.

## 5. VIỆC PHÁT SINH TỪ VIỆC KHÁC

Việc B phát sinh từ việc A là một dòng riêng trong bảng Việc, có người chịu trách nhiệm riêng và hạn riêng. Trường Việc gốc của B ghi mã việc A. Quan hệ giữa hai việc thuộc một trong hai loại, phân loại theo câu hỏi: việc A có xong được khi việc B chưa xong không.

| Quan hệ | Khi nào dùng | Ảnh hưởng tới việc A |
| --- | --- | --- |
| Việc gốc phải chờ | Việc A cần đầu ra của việc B để xong | Việc A ghi sự kiện Chờ với mã việc B. Việc A không ghi được Xong khi việc B chưa Xong hoặc chưa Hủy. Việc B Xong hoặc Hủy thì việc A ghi Hết chờ |
| Phát sinh từ việc gốc | Việc B do việc A gây ra, việc A không cần việc B | Việc A ghi sự kiện Phát sinh việc với mã việc B và làm tiếp |

Người phát hiện việc B là người tạo việc B. Việc nhiều bộ phận cùng làm có một việc gốc, là việc giữ đầu ra cuối gửi ra khỏi oBacker; `TL` của bộ phận sở hữu đầu ra cuối chịu trách nhiệm việc gốc, và `AM` chỉ nhận bàn giao từ việc gốc. Khi chưa rõ bộ phận nào sở hữu đầu ra cuối, `CEO` chỉ định trước khi việc bắt đầu.

Bộ phận A cần bộ phận B làm một phần việc thì mở một việc cho bộ phận B, liên kết về việc gốc, kèm đầu vào, đầu ra mong đợi và hạn. Việc của bộ phận tham gia không gửi đầu ra ra ngoài oBacker. `AM` không nhận đầu ra trực tiếp từ việc của bộ phận tham gia và không tự ghép kết quả của từng việc.

Lỗi phát hiện sau khi việc đã Xong là một việc sửa lỗi, quan hệ Phát sinh từ việc gốc. Sự kiện Tạo của việc sửa lỗi ghi nguyên nhân lỗi. Việc sửa lỗi của lỗi đầu ra mức Nghiêm trọng hoặc Đáng kể kết thúc bằng một trong các kết quả: sửa bảng kiểm, sửa tài liệu, hoặc kết luận không cần sửa kèm lý do.

## 6. HẠN NHẬN VIỆC

Người được giao nhận việc hoặc từ chối việc trong buổi làm việc. Buổi sáng từ 08:00 đến 12:00, buổi chiều từ 13:00 đến 17:00, theo [[Noi_quy_lao_dong\|OBK-NQLD]] Điều 4.3.

| Thời điểm ghi sự kiện Tạo hoặc Chuyển | Hạn ghi Nhận hoặc từ chối |
| --- | --- |
| Từ 08:00 đến trước 12:00 của ngày làm việc | 12:00 cùng ngày |
| Từ 12:00 đến trước 17:00 của ngày làm việc | 17:00 cùng ngày |
| Từ 17:00 đến trước 08:00 của ngày làm việc kế tiếp, hoặc vào ngày nghỉ | 12:00 ngày làm việc kế tiếp |

Từ chối việc là ghi sự kiện Chuyển trả lại người yêu cầu, kèm lý do.

## 7. NGUYÊN TẮC THI HÀNH

### 7.1. Không trả lời bằng trí nhớ

Mọi kết luận về nghĩa vụ pháp lý, thời hạn, mức phạt, tỷ lệ và điều kiện gửi ra ngoài oBacker dựa trên văn bản gốc mở tại thời điểm trả lời, trong kho văn bản pháp luật của oBacker hoặc nguồn chính thống. Người trả lời ghi mã căn cứ vào nhật ký của việc. Nội dung chưa đối chiếu bản gốc không được dùng để trả lời khách.

### 7.2. AM phụ trách quan hệ khách

Chỉ `AM` cam kết với khách về phạm vi dịch vụ, SLA, giá, chiết khấu và văn bản có giá trị pháp lý. Người quyết nội dung cam kết theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4, các hàng "Khách và giá". Chuyên viên trao đổi trực tiếp với khách về dữ liệu, phương pháp tính và tiến độ, trong kênh chung do `AM` quản trị. Yêu cầu thương mại đến chuyên viên thì chuyên viên chuyển cho `AM` trong 30 phút.

### 7.2a. Mốc phản hồi

| Mốc | Nội dung | Thời hạn |
| --- | --- | --- |
| `T1` | `AM` xác nhận với khách đã nhận yêu cầu | Tin nhắn: tối đa 15 phút. Thư điện tử: tối đa 01 giờ làm việc |
| `T2` | `AM` gửi khách mốc trả lời cụ thể, với yêu cầu cần tra cứu hoặc xử lý nghiệp vụ | Tối đa 04 giờ làm việc. Yêu cầu cần kết luận khả thi của `TL` bộ phận theo [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 3: tối đa 04 giờ làm việc kể từ khi `TL` bộ phận ghi kết luận trên việc |
| `T3` | Mốc hoàn thành gửi khách | SLA nội bộ của Job tại [[PL_2_Bang_tra_SLA\|Danh mục Job]] |
| Đầu vào giữa các bộ phận | Bộ phận được yêu cầu cấp đầu vào cho một việc của bộ phận khác | Xác nhận đã nhận: tối đa 30 phút. Nội dung: tối đa 03 giờ làm việc |

### 7.3. Không dừng việc để chờ đầu vào đầy đủ

Thiếu đầu vào thì người làm việc ghi sự kiện Chờ kèm yêu cầu bổ sung liệt kê đủ phần thiếu, giả thiết sẽ dùng nếu không nhận đủ trước hạn trả lời, và hậu quả của giả thiết đó. Khi bàn giao, người làm việc nêu lại giả thiết đã dùng. Các trường hợp dừng hẳn, không chạy tiếp bằng giả thiết:

1. Chạy tiếp dẫn tới hành vi trái pháp luật.
2. Chạy tiếp tạo ra hồ sơ nộp cơ quan nhà nước có nội dung sai mà việc sửa sau đó không khả thi hoặc phát sinh chế tài.
3. Quyết định vượt thẩm quyền của người làm việc và của `TL`.

### 7.4. Soát bắt buộc

Việc có Job thuộc danh sách soát bắt buộc tại [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] cần một sự kiện Soát kết quả Đạt, do người khác với người chịu trách nhiệm ghi, trước sự kiện Xong. Chứng từ kế toán có đủ chữ ký theo chức danh theo [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]]. Các việc khác do người làm tự soát theo bảng kiểm của Job. Duyệt đầu ra trước khi gửi khách là quyết định của `TL` bộ phận theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4, ghi bằng sự kiện Duyệt; sự kiện Duyệt không thay sự kiện Soát.

### 7.5. Mốc làm trước thời hạn theo pháp luật

Thời hạn theo pháp luật không phải hạn làm việc của oBacker. oBacker đặt các khoảng làm trước tối thiểu:

| Loại | Khoảng làm trước tối thiểu |
| --- | --- |
| Hồ sơ, tờ khai nộp cơ quan nhà nước: hoàn tất nội bộ trước thời hạn theo pháp luật | 03 ngày làm việc |
| Đầu ra cần khách duyệt hoặc khách ký trước khi nộp: gửi khách trước thời hạn theo pháp luật | 05 ngày làm việc |
| Bộ phận nghiệp vụ gửi `AM` trước hạn `AM` gửi khách | 0,5 ngày làm việc |

Trường Hạn của việc ghi mốc oBacker tự đặt; trường Thời hạn theo pháp luật ghi mốc của pháp luật.

### 7.5a. Mức ưu tiên xử lý văn bản pháp luật mới

Bảng dưới áp cho `LEG` và mọi bộ phận dịch vụ. Mốc đếm từ ngày `LEG` ghi nhận văn bản mới trên sổ cái. Văn bản mức Ưu tiên 1 có ngày hiệu lực đến trước mốc của bảng thì áp ngày hiệu lực và ghi lý do trên việc.

| Mức | Tiêu chí | Mốc hoàn thành đánh giá tác động | Mốc cập nhật tài liệu của bộ phận |
| --- | --- | --- | --- |
| Ưu tiên 1 | Thay thế một văn bản nền; đổi kỳ khai; đổi thời hạn; đổi thuế suất hoặc mức đóng; bãi bỏ hoặc thêm một nghĩa vụ; đổi mẫu biểu bắt buộc; hoặc có hiệu lực trong tối đa 60 ngày tới | 05 ngày làm việc | 10 ngày làm việc |
| Ưu tiên 2 | Sửa nội dung nghiệp vụ áp cho nhiều khách; đổi điều kiện hồ sơ; đổi mức khống chế | 10 ngày làm việc | 20 ngày làm việc |
| Ưu tiên 3 | Thay đổi áp cho một nhóm khách hẹp hoặc một nghiệp vụ ít gặp | 20 ngày làm việc | Gộp vào bản cập nhật quý |
| Ưu tiên 4 | Không ảnh hưởng khách hiện tại, cần ghi nhận để theo dõi | Ghi nhận trên sổ cái | Gộp vào bản rà soát năm |

### 7.6. Chuyển lên cấp trên

Chuyển lên cấp trên là ghi sự kiện Chuyển cho người có thẩm quyền, kèm bốn nội dung: vấn đề, phương án đã thử, phương án đề xuất, quyết định cần xin. Người chuyển vẫn theo dõi việc cho tới khi có quyết định. Tuyến chuyển theo chuyên môn và theo cấp bậc, và quy tắc khi hai cấp liền kề do cùng một người giữ, theo [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]].

## 8. CÁCH LỌC THAY CHO SỔ THEO DÕI RIÊNG

oBacker không mở sổ theo dõi riêng ngoài sổ cái, trừ sổ kế toán theo [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]].

| Nhu cầu theo dõi | Cách lọc |
| --- | --- |
| Trạng thái công việc, SLA | Bảng Việc lọc theo trạng thái, người chịu trách nhiệm, bộ phận theo Job |
| Hạn tổng hợp | Bảng Việc lọc theo Hạn và Thời hạn theo pháp luật |
| Kiểm soát chất lượng và lỗi | Việc có quan hệ Phát sinh từ việc gốc và nội dung sự kiện Tạo là lỗi; sự kiện Soát kết quả Không đạt |
| Khiếu nại khách | Việc có Job khiếu nại trong bảng kiểm Quản lý khách hàng |
| Vụ việc tư vấn và rà soát hợp đồng | Việc có Job thuộc bảng kiểm Pháp lý |
| Giao nhận tài liệu, bàn giao chữ ký số | Sự kiện Gửi khách, Nộp cơ quan, Xong có liên kết hồ sơ |
| Biến động bảo hiểm xã hội của khách | Việc có Job thuộc bảng kiểm Lao động và tiền lương |
| Giờ làm việc và giá thành dịch vụ | Tổng giờ công và tổng chi phí theo việc, theo khách, theo Job |
| Quản trị khách | Bảng Khách và bảng Việc lọc theo khách |

## 9. QUẢN TRỊ SỔ

`CEO` là người quản trị sổ cái. Người quản trị sổ giữ quyền sửa vùng nhật ký, sửa cấu trúc sổ và cấp quyền nhập liệu. Dòng nhật ký nhập qua biểu mẫu nhập liệu; người dùng khác không có quyền sửa dòng đã ghi.

`TL` của bộ phận sở hữu một bảng kiểm tự sửa câu chữ và dẫn chiếu của bảng kiểm đó; mỗi lần sửa ghi một sự kiện Xong của việc sửa bảng kiểm, kèm nội dung sửa. Thay đổi người, hạn hoặc bước của bảng kiểm do `COO` quyết theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]] mục 4.

## NHẬT KÝ SỬA

| Ngày | Phiên bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | V4.0.0 | Phân biệt Soát và Duyệt, thêm hạn 04 giờ làm việc cho bước T2, TL tự sửa câu chữ bảng kiểm còn COO quyết đổi người, hạn, bước. |
