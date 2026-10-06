---
title: "HƯỚNG DẪN 05. VẬN HÀNH HẰNG NGÀY VÀ ĐIỀU PHỐI CHÉO BỘ PHẬN"
code: "OBK-HB-35"
type: "sop"
folder: "03_DichVu"
level: "Cấp 3, hướng dẫn nghiệp vụ"
version: "R.1.1.1"
status: "đang áp dụng"
draft_date: "04/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-AM Quản lý khách hàng"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-HB-35
tags:
  - loai/sop
  - cap/3
---
# HƯỚNG DẪN 05. VẬN HÀNH HẰNG NGÀY VÀ ĐIỀU PHỐI CHÉO BỘ PHẬN

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-HB-35 |
| Cấp tài liệu | Cấp 3, hướng dẫn nghiệp vụ |
| Phiên bản | R.1.1.1, đang áp dụng |
| Ngày biên soạn | 04/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 07/09/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] Quản lý khách hàng |
| Đây là gì | Người đọc là `AM`, mỗi ngày.<br>Hướng dẫn này trả lời: nhận một yêu cầu thì làm gì trong 15 phút đầu, chuyển đi đâu, và ai chịu trách nhiệm cuối khi việc đi qua nhiều bộ phận |
| Đọc trước | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] mục 3 Job AM-10, AM-11, AM-25 và AM-26;<br>[[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] mục 2a;<br>[[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 5.5 |

---

## 1. MỤC ĐÍCH

Hướng dẫn này phục vụ sáu Job: `AM-10` tiếp nhận và phân loại yêu cầu, `AM-11` gửi đầu ra cho khách, `AM-12` xác nhận khách đã nhận, `AM-13` cập nhật định kỳ cho khách, `AM-25` điều phối vụ việc đi qua nhiều bộ phận, và `AM-26` theo dõi và xử lý bộ phận trễ SLA nội bộ.

Hướng dẫn này đạt ba mục đích.

1. Mọi yêu cầu được phân đúng mức ưu tiên và chuyển đúng bộ phận ngay lần đầu.
2. Vụ việc đi qua nhiều bộ phận có ĐÚNG MỘT người chịu trách nhiệm cuối và ĐÚNG MỘT mốc với khách.
3. Bộ phận trễ hạn nội bộ có đường xử lý, không để `AM` tự chịu và tự xin lỗi khách.

## 2. PHẠM VI ÁP DỤNG

Áp cho mọi yêu cầu của khách đang có hợp đồng, và cho mọi việc mà oBacker phải trả kết quả ra ngoài.

Không áp cho yêu cầu của lead; lead đi theo hướng dẫn 01. Không áp cho việc do lịch nghĩa vụ định kỳ sinh ra; việc định kỳ do bộ phận tự tạo Job, `AM` chỉ được thông tin. Không áp cho sự cố mức P1; sự cố đi theo hướng dẫn 06.


## 3. VAI TRÒ VÀ TRÁCH NHIỆM

| Việc | `AM` | `CV` bộ phận | `TL` bộ phận | `COO` |
| --- | --- | --- | --- | --- |
| Xác nhận đã nhận theo `T1` | R và A | N/A | N/A | N/A |
| Phân mức ưu tiên | R | I | A | I |
| Chuyển đúng bộ phận | R và A | I | C | I |
| Cam kết mốc `T2` với khách | R | I | A và C | I |
| Xác định Job chính, trường hợp ĐÃ RÕ bộ phận nào giữ đầu ra cuối | R và A | I | C | I |
| Chỉ định Job chính, trường hợp KHÔNG RÕ bộ phận nào giữ đầu ra cuối | R, việc chuyển lên cấp trên | I | C | A và R, nếu cả hai bộ phận thuộc Phòng Dịch vụ. Một bên là Legal R&D thì `CEO` quyết, xem [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 5.5 |
| Thực hiện nghiệp vụ | I | R | A | N/A |
| Gửi đầu ra cho khách | R và A | I | C | I |
| Xử lý bộ phận trễ SLA nội bộ | R | I | A | C từ lần trễ thứ hai |

## 4. ĐẦU VÀO BẮT BUỘC

| Đầu vào | Thiếu thì sao |
| --- | --- |
| Nội dung yêu cầu, dù chỉ một câu | Vẫn xác nhận `T1` và vẫn tạo Job. Làm rõ nội dung là việc của bước 2, không phải điều kiện để bắt đầu |
| Phạm vi hợp đồng của khách đó | Không tạo Job cho bộ phận. Phải biết yêu cầu trong hay ngoài phạm vi trước, xem `KS-AM-02` |
| Đầu ra đã qua hai lớp kiểm soát chất lượng | Không gửi khách. Xem `KS-AM-03` |
| Kết luận bộ phận nào sở hữu đầu ra cuối, với vụ việc nhiều bộ phận | Không cam kết mốc với khách. Leo `COO`, xem `KS-AM-09` |

## 5. CÁC BƯỚC THỰC HIỆN

### 5.1. Bước 1. Xác nhận đã nhận, trong hạn T1

Giống bước 1 của hướng dẫn 01: mở bảng `T1` tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 7.2.3 và đọc theo kênh. Mục này không chép lại con số, theo `PL_3` mục 4.3.

Yêu cầu đến qua kênh liên lạc thì phải đưa vào hệ thống trước khi xử lý, vì đồng hồ chỉ bắt đầu đếm từ khi yêu cầu được ghi nhận trên `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`.

### 5.2. Bước 2. Phân loại, trong cùng lượt xử lý

Bốn câu hỏi, theo thứ tự:

**Câu 1, trong hay ngoài phạm vi hợp đồng.** Ngoài phạm vi thì không tạo Job cho bộ phận; chuyển `AM-23` để xin duyệt mở rộng phạm vi và phí. Xem `KS-AM-02`.

**Câu 2, mức ưu tiên nào.** Phân theo HẬU QUẢ, không theo giọng điệu của khách. Bảng phân mức tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 7.3. Khi phân vân giữa hai mức, chọn mức cao hơn.

Ba dấu hiệu bắt buộc phân P1: có nguy cơ trễ một hạn pháp định; cơ quan nhà nước đã ra văn bản có thời hạn; hoặc khách nói tới việc hủy hợp đồng.

**Câu 3, bộ phận nào.** Bảng chiều ngang tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 8.1. Với việc pháp lý, áp quy tắc ba lớp tại mục 5.5, và câu hỏi để phân là hồ sơ đang ở tay ai, việc cần gì.

**Câu 4, một bộ phận hay nhiều bộ phận.** Nhiều bộ phận thì sang bước 3 trước khi cam kết bất cứ mốc nào.

### 5.3. Bước 3. Xác định Job chính, trong 04 giờ làm việc

Chỉ làm với vụ việc cần từ hai bộ phận trở lên. Ba quy tắc, bản gốc tại [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 2a quy tắc 4:

| Nội dung | Quy tắc |
| --- | --- |
| Job chính | Đúng một Job. Job chính là Job GIỮ ĐẦU RA CUỐI gửi ra khỏi oBacker |
| Người chịu trách nhiệm cuối | `TL` của bộ phận sở hữu đầu ra cuối. Không phải người mở Job, không phải người làm nhiều nhất |
| Job phụ | Mỗi bộ phận tham gia có Job phụ riêng, liên kết về Job chính. Job phụ không gửi đầu ra ra ngoài |

`AM` chỉ nhận bàn giao từ Job chính. `AM` không đi hỏi từng Job phụ rồi tự ghép kết quả, vì ghép như vậy thì không ai chịu trách nhiệm về bản đã ghép.

Không rõ bộ phận nào sở hữu đầu ra cuối thì chuyển lên `COO`, và `COO` chỉ định trước khi việc bắt đầu. Chỉ định sau khi việc đã chạy là chỉ định muộn, và số lần đó là chỉ số `AM-M18`.

Ba ví dụ đã có tiền lệ:

| Vụ việc | Job chính thuộc | Vì sao |
| --- | --- | --- |
| Khách tuyển người nước ngoài: xin giấy phép lao động, rồi ký hợp đồng lao động, rồi đăng ký bảo hiểm | Bộ phận Giấy phép ở giai đoạn 1, Bộ phận Lao động và Tiền lương ở giai đoạn 2 | Đây là HAI vụ việc nối tiếp, không phải một vụ việc nhiều bộ phận. Mỗi giai đoạn có đầu ra riêng gửi ra ngoài |
| Khách chuyển nhượng phần vốn góp: rà soát hợp đồng, rồi đăng ký thay đổi | Bộ phận Giấy phép | Đầu ra cuối gửi ra ngoài là Giấy chứng nhận đăng ký doanh nghiệp mới. Bản rà soát hợp đồng là đầu ra trung gian |
| Khách hỏi cách xử một khoản chi vừa liên quan thuế vừa liên quan hợp đồng | Bộ phận Kế toán và Thuế | Câu trả lời cuối gửi khách là kết luận về nghĩa vụ thuế. Phần hợp đồng là đầu vào |

### 5.4. Bước 4. Cam kết mốc T2 với khách, trong 04 giờ làm việc

Nội dung cam kết là một MỐC TRẢ LỜI, không phải câu trả lời. `AM` chỉ cam kết mốc sau khi có xác nhận của `TL` bộ phận trên Job, theo `KS-AM-01`.

Yêu cầu chạm nội dung chưa xác minh được thì nội dung cam kết chỉ được là một mốc hẹn, tuyệt đối không được là câu trả lời nghiệp vụ. Câu chữ mẫu tại `PL_A` mục 12.

### 5.5. Bước 5. Theo dõi, và xử lý bộ phận trễ SLA nội bộ

Hạn của bộ phận với `AM` nằm ở OBK-SOP-00 mục 7.4; hạn của Legal R&D nằm ở mục 7.4a. `AM` tra cứu thời hạn quy định tại hai mục này.

Trễ thì chạy `AM-26` theo ba bậc:

1. Quá hạn thì nhắc 01 lần ngay, trên Job.
2. Vẫn trễ thì chuyển lên `TL` của bộ phận đó trong cùng ngày làm việc.
3. Trễ lần thứ hai với cùng một bộ phận trong một tháng thì báo `COO`, vì đó là dấu hiệu về nguồn lực chứ không phải về một vụ việc.

Mốc đã hứa với khách bị đe dọa thì chạy `AM-15` và hướng dẫn 06 SONG SONG, không đợi xong việc chuyển lên cấp trên mới báo khách.

### 5.6. Bước 6. Gửi đầu ra cho khách

Ba chốt trước khi gửi, làm theo thứ tự: có dấu vết kiểm soát chất lượng hai lớp; nội dung bàn giao đủ năm phần theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 6.1; và gửi qua KÊNH CHÍNH THỐNG.

Đồng hồ `T3` chỉ dừng khi kết quả đã gửi qua email công ty. Nhắn chat báo đã xong không làm dừng đồng hồ.

Thiếu chốt nào thì trả lại bộ phận. `AM` có quyền từ chối gửi, và `AM` không tự viết thay phần thiếu, theo `KS-AM-04`.

## 6. ĐIỂM KIỂM SOÁT BẮT BUỘC

| Mã | Chốt | Trước bước nào | Không đạt thì làm gì |
| --- | --- | --- | --- |
| `KS-AM-02` | Phạm vi khách yêu cầu nằm trong hợp đồng đã ký | Trước khi tạo Job cho bộ phận | Chuyển `AM-23`. `COO` xác nhận khả thi trước khi người có thẩm quyền quyết giá |
| `KS-AM-09` | Vụ việc nhiều bộ phận đã có Job chính và người chịu trách nhiệm cuối ghi trên Job | Trước khi cam kết mốc với khách | Không cam kết mốc. Leo `COO` |
| `KS-AM-01` | Mốc cam kết với khách có xác nhận của `TL` bộ phận trên Job | Trước bước 4 | Không cam kết. Trả lời bằng câu chuẩn tại `PL_A` mục 5 |
| `KS-AM-03` | Đầu ra có dấu vết kiểm soát chất lượng hai lớp | Trước bước 6 | Trả lại bộ phận |
| `KS-AM-04` | Nội dung bàn giao đủ năm phần theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 6.1 | Trước bước 6 | Yêu cầu bộ phận bổ sung. Không tự viết thay |

## 7. LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ

| Lỗi thường gặp | Dấu hiệu nhận ra | Cách xử lý |
| --- | --- | --- |
| Phân mức thấp hơn thực tế | Một yêu cầu chạm hạn nộp hồ sơ được phân P3 vì khách nói nhẹ nhàng | Phân theo hậu quả. Ba dấu hiệu bắt buộc P1 ở bước 2 câu 2 |
| Tự ghép kết quả từ nhiều Job phụ | `AM` gửi khách một bản mà không Job nào giữ bản đó | Bản đã ghép không có ai chịu trách nhiệm. `AM` chỉ nhận bàn giao từ Job chính |
| Chỉ định Job chính sau khi việc đã chạy | Hai bộ phận đã làm một tuần rồi mới hỏi ai giữ đầu ra cuối | Bước 3 làm trong 04 giờ làm việc, trước khi cam kết mốc. Chỉ định muộn là chỉ số `AM-M18` |
| Tự làm thay việc trễ của bộ phận thay vì chuyển lên cấp trên | `AM` xin lỗi khách và tự hẹn lại mốc, Job không có bản ghi nhắc và chuyển lên cấp trên | `AM-26` có ba bậc. Tự làm thay làm mất dữ liệu về nguồn lực, và lần sau vẫn trễ |
| Nhắn chat báo đã xong rồi coi là đã giao | `T3` tính là đúng hạn mà email gửi sau đó một ngày | `T3` chỉ dừng khi gửi qua kênh chính thống, theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.2.1a quy tắc 1 |
| Trả lời khách bằng nội dung chưa đối chiếu bản gốc hoặc chưa xác minh được | Thư gửi khách có kết luận mà Job không có mã căn cứ đã đối chiếu bản gốc | Hành vi oBacker nghiêm cấm điểm 6 tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 9. Câu chuẩn tại `PL_A` mục 12 |
| Xử lý yêu cầu đến qua chat mà chưa vào hệ thống | Job được tạo sau khi việc đã làm xong | Đồng hồ chỉ đếm từ khi vào hệ thống, nên việc làm trước khi tạo Job là việc không đo được và không truy vết được |

## 8. ĐẦU RA VÀ NƠI LƯU

| Đầu ra | Nơi lưu | Giữ bao lâu |
| --- | --- | --- |
| Job đã tạo, có mức ưu tiên và bộ phận nhận | `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` | Theo thời hạn lưu hồ sơ khách hàng của oBacker |
| Bản ghi Job chính và các Job phụ liên kết | Job `AM-25` | Như trên |
| Thư cam kết mốc `T2` gửi khách | Hộp thư công ty của `AM`, đính vào Job | Như trên |
| Đầu ra đã gửi khách, kèm năm phần bàn giao | Hộp thư công ty của `AM`, và `[KHO LƯU TRỮ HỒ SƠ]` | Như trên |
| Bản ghi nhắc và chuyển lên cấp trên khi bộ phận trễ | Job `AM-26` | Như trên |

## 9. CHỈ SỐ THEO DÕI

| Mã | Chỉ số | Ngưỡng | Đọc ở đâu |
| --- | --- | --- | --- |
| `AM-M10` | Tỷ lệ xác nhận đã nhận đúng `T1` | Theo [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] mục 9.2 | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] mục 9.2 |
| `AM-M18` | Số vụ việc nhiều bộ phận không xác định được Job chính trước khi bắt đầu | 0 | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] mục 9.2 |
| `CS-06` | Tỷ lệ tuân thủ SLA nội bộ với `AM` | Theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 11.1 | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 11.1 |
| `CS-07` | Tỷ lệ liên lạc với khách đi qua `AM` | 100%, mục tiêu tuyệt đối | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 11.1 |

---

## LIÊN KẾT VỚI CÁC HƯỚNG DẪN KHÁC

| Hướng dẫn | Quan hệ |
| --- | --- |
| `04_Onboarding_khach_moi.md` | Bước trước. Vận hành bắt đầu khi dịch vụ đã khởi động |
| `06_Bao_thong_tin_bat_loi_va_su_co.md` | Chạy song song khi mốc đã hứa bị đe dọa, hoặc khi có sự cố P1 |
| `03_De_xuat_bao_gia_va_ky_hop_dong.md` | Nơi chuyển tới khi yêu cầu nằm ngoài phạm vi hợp đồng |
| `PL_A_Cau_chu_mau.md` | Câu chữ mẫu mục 5 và 12 |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.1 | Chuyển số đếm liệt kê ở phần mục đích của hướng dẫn vận hành hằng ngày và điều phối thành quy định. |
