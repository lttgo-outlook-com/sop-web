---
title: "Phụ lục D. Thao tác trên phần mềm và công cụ"
code: "OBK-SOP-PL-D"
type: "sop"
folder: "04_Handbook_KeToan"
level: "Phụ lục"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-KT Kế toán và thuế"
next_review: "Chậm nhất 28/02/2027"
appendix: "Thao tác trên phần mềm và công cụ"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-SOP-PL-D
tags:
  - loai/sop
  - cap/phu-luc
---
# Phụ lục D. Thao tác trên phần mềm và công cụ

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-PL-D |
| Tên phụ lục | Thao tác trên phần mềm và công cụ |
| Cấp tài liệu | Phụ lục của hướng dẫn cấp 3 |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 25/08/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] Kế toán và thuế |
| Tính chất nội dung | QUY ĐỊNH NỘI BỘ oBacker. Phụ lục này là KHUNG TRỐNG, do oBacker tự điền theo công cụ thực tế đang dùng.<br>Không có nội dung pháp lý trong phụ lục này |
| Trạng thái | Khung chưa triển khai. Tỷ lệ hoàn thành: chưa xác định |
| Lần rà soát tiếp theo | Ngay khi bất kỳ công cụ nào thay đổi phiên bản hoặc giao diện;<br>định kỳ tối thiểu hằng năm, trước 28/02/2027 |

---

## PHẦN 1. NGUYÊN TẮC THIẾT KẾ VÀ PHẠM VI ÁP DỤNG

### 1.1. Nguyên tắc tool-agnostic của handbook

Toàn bộ phần thân handbook được viết theo nguyên tắc tool-agnostic: mô tả nghiệp vụ phải làm gì, không mô tả thao tác trên phần mềm nào. Khi cần nhắc tới một công cụ, handbook dùng placeholder trong dấu ngoặc vuông.

### 1.2. Mục đích phân tách hướng dẫn thao tác phần mềm

**Lý do thứ nhất, chi phí thay đổi.** Phần mềm kế toán, phần mềm hóa đơn, hệ thống quản lý công việc đều có thể bị thay thế: vì giá, vì tính năng, vì nhà cung cấp ngừng hỗ trợ, vì khách hàng yêu cầu dùng hệ thống của họ. Nếu hướng dẫn thao tác nằm rải trong 21 chương, mỗi lần đổi công cụ là phải sửa 21 chương và rủi ro sót rất cao. Khi tách riêng, đổi công cụ chỉ cần sửa phụ lục này.

**Lý do thứ hai, tần suất thay đổi khác nhau.** Nghiệp vụ kế toán và thuế thay đổi theo văn bản pháp luật, tính bằng tháng và năm. Giao diện phần mềm thay đổi theo bản cập nhật của nhà cung cấp, có thể tính bằng tuần. Hai tần suất này không nên bị trộn vào cùng một tài liệu, vì tài liệu thay đổi nhanh sẽ làm tài liệu thay đổi chậm bị coi là lỗi thời oan.

**Lý do thứ ba, cùng một nghiệp vụ, nhiều công cụ.** oBacker phục vụ nhiều khách hàng, và một số khách hàng yêu cầu dùng phần mềm của chính họ. Cùng một nghiệp vụ nhập chứng từ mua vào có thể được thực hiện trên ba phần mềm khác nhau ở ba khách hàng khác nhau. Phần thân handbook mô tả nghiệp vụ một lần; phụ lục này mô tả thao tác cho từng công cụ.

### 1.3. Ranh giới giữa phần thân handbook và phụ lục này

| Thuộc phần thân handbook | Thuộc phụ lục D |
| --- | --- |
| Nghiệp vụ phải làm gì và vì sao | Bấm ở đâu, chọn mục nào |
| Căn cứ pháp lý | Không có căn cứ pháp lý |
| Điểm kiểm soát nghiệp vụ, tiêu chí hoàn thành | Cách kiểm tra kết quả trên màn hình |
| Ai làm, ai soát, ai duyệt | Ai có quyền thao tác trên hệ thống |
| Thứ tự các bước nghiệp vụ | Đường dẫn menu, tên trường dữ liệu |
| Lỗi nghiệp vụ thường gặp | Lỗi kỹ thuật thường gặp và cách xử lý |
| Số liệu, ngưỡng, thời hạn | Thông số cấu hình hệ thống |

Quy tắc phân định khi không rõ: nếu nội dung đó vẫn đúng khi oBacker đổi sang một phần mềm khác, nội dung đó thuộc phần thân handbook. Nếu nội dung đó sai ngay khi đổi phần mềm thì thuộc phụ lục này.

### 1.4. Nghĩa vụ khi phát hiện thao tác bị nhắc trong phần thân

Mô tả thao tác cụ thể trên một phần mềm hoặc nhắc tên một sản phẩm thương mại trong phần thân handbook là lỗi biên soạn. Nội dung đó chuyển về phụ lục này; báo Legal R&D theo quy trình Chương 21 mục 6.5.

---

## PHẦN 2. BẢNG ĐĂNG KÝ CÔNG CỤ ĐANG DÙNG

Quy định nội bộ oBacker. Bảng này là bảng gốc, mọi nội dung khác trong phụ lục này tham chiếu về đây.

> [!info] ĐIỀU KIỆN BAN HÀNH
> KHÔNG PHẢI VIỆC LÀM SAU
> Bảng dưới đây đang để trống toàn bộ, và đó là một nội dung còn thiếu CHẶN, không phải một chi tiết còn thiếu.
>
> Mọi quy tắc "ghi trên Job", "ghi trên hệ thống", "kênh chính thức", "lưu tại kho hồ sơ", "đồng hồ SLA bắt đầu đếm khi yêu cầu vào hệ thống" của CẢ BỘ TÀI LIỆU, từ `03_DichVu/01_OBK-SOP-00` cấp 1 tới các SOP cấp 2 và toàn bộ Handbook này, đều trỏ vào những đối tượng CHƯA ĐƯỢC ĐỊNH DANH. Cụ thể: `03_DichVu/01_OBK-SOP-00` NT-4 và mục 7.2.1 gắn thời điểm bắt đầu đếm SLA vào `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`; mục 7.2.3 gắn mốc T1 của kênh chat vào `[HỆ THỐNG CHAT KHÁCH HÀNG]`. Khi chưa biết hai placeholder đó là công cụ nào, các quy tắc trên không kiểm chứng được và không đo được.
>
> Vì vậy: **điền đủ bảng này là ĐIỀU KIỆN BAN HÀNH của Handbook Kế toán và của cả bộ SOP dịch vụ.** Không ban hành khi bảng còn để trống. Người chịu trách nhiệm điền: người quản trị từng công cụ, `COO` duyệt và phát hành; Công nghệ và Sản phẩm cung cấp thông tin phiên bản và hình thức triển khai.

| # | Placeholder trong handbook | Tên công cụ thực tế | Phiên bản đang dùng | Hình thức triển khai | Người quản trị | Người quản trị dự phòng | Ngày bắt đầu sử dụng | Ngày cập nhật thông tin gần nhất | Trạng thái tài liệu hướng dẫn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `[PHẦN MỀM KẾ TOÁN]` | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | Chưa viết / Đang viết / Đã xong |
| 2 | `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | Chưa viết / Đang viết / Đã xong |
| 3 | `[KHO LƯU TRỮ HỒ SƠ]` | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | Chưa viết / Đang viết / Đã xong |
| 4 | `[PHẦN MỀM HĐĐT]` | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | Chưa viết / Đang viết / Đã xong |
| 5 | `[CỔNG THUẾ ĐIỆN TỬ]` | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | Chưa viết / Đang viết / Đã xong |
| 6 | `[HỆ THỐNG CHAT KHÁCH HÀNG]` | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | (để trống) | Chưa viết / Đang viết / Đã xong |

### 2.1. Bảng công cụ riêng theo khách hàng

Dùng khi khách hàng yêu cầu oBacker làm việc trên hệ thống của chính họ.

| # | Khách hàng | Placeholder tương ứng | Tên công cụ của khách | Phiên bản | R.1.0.0, đang áp dụng | Có tài liệu hướng dẫn riêng | Nơi lưu tài liệu |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | (để trống) | | | | | | |
| 2 | (để trống) | | | | | | |
| 3 | (để trống) | | | | | | |

### 2.2. Bảng phân quyền theo vai trò

Nguyên tắc gốc của bảng này: **CV-KT nhập liệu; TL-KT soát và ký; AM xem và xuất báo cáo cho khách; COO duyệt quyền truy cập.** Cột nào của một công cụ không có nội dung thì ghi `Không`, không để trắng.

| # | Placeholder | Quyền của CV-KT | Quyền của TL-KT | Quyền của AM | Quyền của người quản trị | Ai duyệt việc cấp quyền |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `[PHẦN MỀM KẾ TOÁN]` | Nhập liệu, sửa bút toán trong kỳ chưa khóa, xem sổ và báo cáo của khách được phân công.<br>không khóa kỳ, không mở kỳ đã khóa, không xóa dữ liệu | Toàn bộ quyền của CV-KT, cộng: khóa kỳ, mở lại kỳ đã khóa, xóa dữ liệu, chạy các bút toán cuối kỳ, kết xuất và chốt báo cáo tài chính | Chỉ XEM và KẾT XUẤT báo cáo để gửi khách. Không nhập liệu, không sửa bút toán, không khóa hay mở kỳ | Cấp và thu hồi quyền, cấu hình hệ thống, kết xuất nhật ký thao tác | COO |
| 2 | `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` | Cập nhật trạng thái công việc được phân công, ghi Phiếu tự kiểm, báo lỗi tự phát hiện | Ghi Phiếu soát xét và chốt, đóng lỗi theo phân cấp, xem toàn bộ cụm khách phụ trách | Ghi nhật ký liên hệ khách, ghi nhận và theo dõi khiếu nại, xem tiến độ toàn bộ khách hàng được phân công phụ trách | Cấp và thu hồi quyền, tạo dự án, cấu hình mẫu công việc định kỳ | COO |
| 3 | `[KHO LƯU TRỮ HỒ SƠ]` | Tải chứng từ lên đúng thư mục kỳ, đọc thư mục của khách được phân công. Không xóa, không chia sẻ ra ngoài | Đọc và ghi toàn bộ thư mục của cụm khách phụ trách, lưu hồ sơ soát xét | Đọc, và CHIA SẺ tệp hoặc thư mục cho khách trong phạm vi đã được duyệt | Cấp và thu hồi quyền, xóa dữ liệu theo phân cấp duyệt, kiểm soát phạm vi chia sẻ | COO |
| 4 | `[PHẦN MỀM HĐĐT]` | Kết xuất dữ liệu hóa đơn đầu vào, đầu ra của kỳ;<br>tra cứu tình trạng hóa đơn | Lập hóa đơn điều chỉnh, hóa đơn thay thế, thông báo hóa đơn có sai sót;<br>ký các nội dung thuộc thẩm quyền | Chỉ XEM và KẾT XUẤT để gửi khách. Không lập, không điều chỉnh, không hủy hóa đơn | Cấp và thu hồi quyền, cấu hình ký hiệu hóa đơn, quản lý chứng thư số | COO |
| 5 | `[CỔNG THUẾ ĐIỆN TỬ]` | Không. CV-KT KHÔNG được cấp quyền trên công cụ này | Lập, ký và nộp hồ sơ khai thuế, nộp tiền, tra cứu nghĩa vụ, nộp văn bản giải trình | Chỉ XEM và tải thông báo tiếp nhận để gửi khách. Không nộp hồ sơ, không nộp tiền, không ký | Cấp và thu hồi quyền, quản lý danh sách tài khoản của khách | COO |

Nguyên tắc phân quyền, quy định nội bộ oBacker:

1. Quyền tối thiểu cần thiết để làm việc. Không cấp quyền quản trị cho người không cần.
2. Quyền khóa kỳ, mở kỳ đã khóa, xóa dữ liệu chỉ cấp cho TL-KT trở lên.
3. Quyền nộp hồ sơ lên `[CỔNG THUẾ ĐIỆN TỬ]` chỉ cấp cho TL-KT. Hồ sơ do CV-KT làm phải có TL-KT soát và chốt trước khi nộp, tức vẫn giữ hai người theo Chương 18 mục 6.2.3 dòng 1. Phần hồ sơ do chính TL-KT làm thì TL-KT tự soát, tự chốt và ghi rõ trên Phiếu soát xét là phần việc do TL-KT trực tiếp thực hiện.
4. AM KHÔNG được cấp quyền ghi trên bất kỳ công cụ nào. Quyền của AM là xem và kết xuất báo cáo để gửi khách.
5. Mọi lần cấp và thu hồi quyền do COO duyệt, và được ghi vào Nhật ký cấp quyền tại mục 2.3.
6. Rà soát toàn bộ quyền tối thiểu 6 tháng một lần theo Chương 20 mục 6.7.2.

### 2.3. Nhật ký cấp và thu hồi quyền

| # | Ngày | Công cụ | Người được cấp hoặc bị thu hồi | Loại thao tác | Phạm vi quyền | Lý do | Người yêu cầu | Người duyệt | Người thực hiện |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | Cấp / Thu hồi / Thay đổi | | | | | |

---

## PHẦN 3. QUY ƯỚC MÃ THAO TÁC


`PLD-[số công cụ]-[số nhóm]-[số thao tác]`

| Số công cụ | Công cụ |
| --- | --- |
| 1 | `[PHẦN MỀM KẾ TOÁN]` |
| 2 | `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` |
| 3 | `[KHO LƯU TRỮ HỒ SƠ]` |
| 4 | `[PHẦN MỀM HĐĐT]` |
| 5 | `[CỔNG THUẾ ĐIỆN TỬ]` |

Ví dụ: `PLD-1-2-03` là thao tác thứ ba, nhóm 2, trên phần mềm kế toán.

## PHẦN 4. KHUNG THAO TÁC THEO TỪNG CÔNG CỤ

Các bảng dưới đây liệt kê danh mục thao tác cần được viết hướng dẫn, dựa trên những chỗ phần thân handbook có nhắc tới thao tác. Mỗi dòng là một mục thao tác sẽ được viết theo cấu trúc tám phần tại mục 3.1.

Cột "Ưu tiên": 1 là thao tác dùng hằng ngày, phải viết trước; 2 là dùng hằng kỳ; 3 là dùng khi phát sinh.

---

### 4.1. `[PHẦN MỀM KẾ TOÁN]`

| Trường | Nội dung |
| --- | --- |
| Tên công cụ thực tế | chưa xác định |
| Phiên bản | R.1.0.0, đang áp dụng |
| Người quản trị | chưa xác định |
| Ngày cập nhật phần này | chưa xác định |
| Số thao tác đã viết xong | 0/38 |

#### Nhóm 1. Thiết lập và quản trị

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-1-1-01 | Khai báo khách hàng mới, tạo đơn vị kế toán | Chương 08, Phụ lục A bảng kiểm A1 | 2 | | | Chưa viết |
| PLD-1-1-02 | Thiết lập thông tin định danh của đơn vị: tên, mã số thuế, địa chỉ, năm tài chính | Chương 08 | 2 | | | Chưa viết |
| PLD-1-1-03 | Thiết lập hệ thống tài khoản theo chế độ kế toán áp dụng | Chương 08 | 2 | | | Chưa viết |
| PLD-1-1-04 | Thêm, sửa tài khoản chi tiết;<br>quy ước đặt mã | Chương 05, 08 | 2 |  |  | Chưa viết |
| PLD-1-1-05 | Thiết lập phương pháp tính giá xuất kho | Chương 05 phần hành hàng tồn kho | 2 | | | Chưa viết |
| PLD-1-1-06 | Thiết lập phương pháp khấu hao và danh mục tài sản cố định | Chương 05 phần hành tài sản | 2 | | | Chưa viết |
| PLD-1-1-07 | Khai báo danh mục đối tượng: khách hàng, nhà cung cấp, nhân viên, vật tư | Chương 05 | 2 | | | Chưa viết |
| PLD-1-1-08 | Nhập số dư đầu kỳ và kiểm tra cân đối | Chương 06, Chương 20 | 2 | | | Chưa viết |
| PLD-1-1-09 | Chuyển số dư khi đổi chế độ kế toán | Chương 06 mục 5.5, Chương 08 mục 5.6.6 | 3 | | | Chưa viết |
| PLD-1-1-10 | Phân quyền người dùng theo vai trò CV-KT, TL-KT, AM, COO theo bảng tại mục 2.2 | Chương 18 mục 6.2, Phụ lục D mục 2.2 | 2 | | | Chưa viết |

#### Nhóm 2. Nhập liệu hằng ngày

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-1-2-01 | Nhập chứng từ mua vào, hàng hóa và dịch vụ | Chương 05 phần hành mua hàng | 1 | | | Chưa viết |
| PLD-1-2-02 | Nhập chứng từ bán ra | Chương 05 phần hành bán hàng | 1 | | | Chưa viết |
| PLD-1-2-03 | Nhập phiếu thu, phiếu chi tiền mặt | Chương 05 phần hành tiền | 1 | | | Chưa viết |
| PLD-1-2-04 | Nhập giao dịch ngân hàng từ sao kê | Chương 05 phần hành tiền | 1 | | | Chưa viết |
| PLD-1-2-05 | Nhập phiếu nhập kho, phiếu xuất kho | Chương 05 phần hành hàng tồn kho | 1 | | | Chưa viết |
| PLD-1-2-06 | Nhập bảng lương và các khoản trích theo lương | Chương 05 phần hành lương, Chương 11 | 2 | | | Chưa viết |
| PLD-1-2-07 | Nhập nghiệp vụ ngoại tệ và xử lý tỷ giá | Chương 05 phần hành ngoại tệ | 2 | | | Chưa viết |
| PLD-1-2-08 | Nhập nghiệp vụ với bên liên kết, gắn dấu theo dõi riêng | Chương 10 | 3 | | | Chưa viết |
| PLD-1-2-09 | Đính kèm chứng từ số hóa vào bút toán | Chương 05 | 1 | | | Chưa viết |
| PLD-1-2-10 | Nhập liệu hàng loạt từ tệp bảng tính;<br>kiểm tra sau khi nhập | Chương 05 | 2 |  |  | Chưa viết |

#### Nhóm 3. Cuối kỳ

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-1-3-01 | Chạy phân bổ chi phí trả trước | Chương 05, 06 | 2 | | | Chưa viết |
| PLD-1-3-02 | Chạy tính khấu hao kỳ | Chương 05, 06 | 2 | | | Chưa viết |
| PLD-1-3-03 | Tính giá xuất kho và giá vốn | Chương 05, 06 | 2 | | | Chưa viết |
| PLD-1-3-04 | Đánh giá lại các khoản mục có gốc ngoại tệ | Chương 06 | 3 | | | Chưa viết |
| PLD-1-3-05 | Chạy kết chuyển cuối kỳ | Chương 06 | 2 | | | Chưa viết |
| PLD-1-3-06 | Kiểm tra bảng cân đối phát sinh và xử lý khi lệch | Chương 06 mục 5.4 | 2 | | | Chưa viết |
| PLD-1-3-07 | Khóa kỳ kế toán | Chương 06 mục 5.3, Chương 18 mục 6.2.3 | 2 | | | Chưa viết |
| PLD-1-3-08 | Mở lại kỳ đã khóa, thao tác có duyệt | Chương 06, Chương 18 | 3 | | | Chưa viết |

#### Nhóm 4. Kết xuất

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-1-4-01 | Kết xuất báo cáo tài chính đúng mẫu theo chế độ kế toán áp dụng | Chương 07 | 2 | | | Chưa viết |
| PLD-1-4-02 | Kết xuất sổ kế toán: nhật ký chung, sổ chi tiết, sổ tổng hợp | Chương 05, 06 | 2 | | | Chưa viết |
| PLD-1-4-03 | Kết xuất bảng cân đối phát sinh | Chương 06 | 1 | | | Chưa viết |
| PLD-1-4-04 | Kết xuất bảng kê hóa đơn đầu vào, đầu ra phục vụ kê khai GTGT | Chương 09 | 1 | | | Chưa viết |
| PLD-1-4-05 | Kết xuất số liệu phục vụ quyết toán TNDN | Chương 10, 14 | 2 | | | Chưa viết |
| PLD-1-4-06 | Kết xuất số liệu phục vụ quyết toán TNCN | Chương 11, 14 | 2 | | | Chưa viết |
| PLD-1-4-07 | Kết xuất báo cáo quản trị theo định dạng đã thỏa thuận với khách | Chương 18 mục 6.3.7, Chương 19 | 2 | | | Chưa viết |
| PLD-1-4-08 | Sao lưu dữ liệu của một khách hàng phục vụ bàn giao | Chương 20 mục 6.4.2 | 3 | | | Chưa viết |
| PLD-1-4-09 | Gỡ dữ liệu khách hàng đã kết thúc khỏi hệ thống vận hành | Chương 20 mục 6.6 | 3 | | | Chưa viết |
| PLD-1-4-10 | Kết xuất nhật ký thao tác của người dùng phục vụ soát xét | Chương 18 mục 6.7 | 3 | | | Chưa viết |

---

### 4.2. `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`

| Trường | Nội dung |
| --- | --- |
| Tên công cụ thực tế | chưa xác định |
| Phiên bản | R.1.0.0, đang áp dụng |
| Người quản trị | chưa xác định |
| Ngày cập nhật phần này | chưa xác định |
| Số thao tác đã viết xong | 0/14 |

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-2-1-01 | Tạo dự án cho một khách hàng mới | Chương 20 mục 6.2.2 | 2 | | | Chưa viết |
| PLD-2-1-02 | Tạo công việc định kỳ theo lịch tuân thủ của khách | Chương 13 mục F, Phụ lục C | 1 | | | Chưa viết |
| PLD-2-1-03 | Cập nhật trạng thái công việc theo quy tắc trạng thái tổng hợp | Chương 13 mục F.2 | 1 | | | Chưa viết |
| PLD-2-1-04 | Ghi nhận Phiếu tự kiểm cấp 1 | Chương 18 mục 6.1.2 | 1 | | | Chưa viết |
| PLD-2-1-05 | Ghi nhận Phiếu soát xét và chốt của TL-KT, gồm cả việc ghi rõ phần nào do chính TL-KT làm | Chương 18 mục 6.3 | 1 | | | Chưa viết |
| PLD-2-1-06 | Ghi nhận quyết định chốt kỹ thuật của TL-KT, kể cả chốt rút gọn;<br>ghi nhận việc chuyển COO hoặc CEO khi vượt thẩm quyền TL-KT | Chương 18 mục 6.4 | 1 |  |  | Chưa viết |
| PLD-2-1-07 | Ghi nhận lỗi vào Sổ ghi nhận lỗi | Chương 18 mục 6.6.3 | 1 | | | Chưa viết |
| PLD-2-1-08 | Đóng lỗi theo đúng phân cấp người được đóng | Chương 18 mục 6.6.4 | 2 | | | Chưa viết |
| PLD-2-1-09 | Báo lỗi tự phát hiện, có dấu vết thời điểm báo | Chương 18 mục 6.9.4 | 1 | | | Chưa viết |
| PLD-2-1-10 | Ghi nhật ký liên hệ với khách hàng | Chương 19 mục 6.9.1 | 1 | | | Chưa viết |
| PLD-2-1-11 | Ghi nhận và theo dõi khiếu nại | Chương 19 mục 6.7.3 | 3 | | | Chưa viết |
| PLD-2-1-12 | Xác nhận đã đọc bản cập nhật handbook | Chương 21 mục 6.6.3 | 2 | | | Chưa viết |
| PLD-2-1-13 | Kết xuất số liệu tính chỉ số chất lượng | Chương 18 mục 6.8 | 2 | | | Chưa viết |
| PLD-2-1-14 | Chuyển dự án khách hàng đã kết thúc sang trạng thái lưu trữ | Chương 20 mục 6.7.1 | 3 | | | Chưa viết |

---

### 4.3. `[KHO LƯU TRỮ HỒ SƠ]`

| Trường | Nội dung |
| --- | --- |
| Tên công cụ thực tế | chưa xác định |
| Phiên bản | R.1.0.0, đang áp dụng |
| Người quản trị | chưa xác định |
| Ngày cập nhật phần này | chưa xác định |
| Số thao tác đã viết xong | 0/12 |

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-3-1-01 | Tạo cấu trúc thư mục chuẩn 16 mục cho khách hàng mới | Chương 20 mục 6.2.2 | 2 | | | Chưa viết |
| PLD-3-1-02 | Quy ước đặt tên tệp và áp dụng | Chương 05, Chương 20 | 1 | | | Chưa viết |
| PLD-3-1-03 | Tải chứng từ số hóa lên đúng thư mục kỳ | Chương 05 | 1 | | | Chưa viết |
| PLD-3-1-04 | Lưu hồ sơ đã nộp và thông báo tiếp nhận | Chương 13, Chương 18 | 1 | | | Chưa viết |
| PLD-3-1-05 | Lưu hồ sơ soát xét hai cấp, gồm 02 phiếu | Chương 18 mục 9 | 1 | | | Chưa viết |
| PLD-3-1-06 | Lưu thư trao đổi thuộc danh mục bắt buộc bằng văn bản | Chương 19 mục 6.2.2 | 1 | | | Chưa viết |
| PLD-3-1-07 | Cấp quyền truy cập thư mục khách hàng theo vai trò | Chương 18, Chương 20 | 2 | | | Chưa viết |
| PLD-3-1-08 | Thu hồi quyền truy cập thư mục khách hàng | Chương 20 mục 6.7 | 3 | | | Chưa viết |
| PLD-3-1-09 | Chia sẻ thư mục hoặc tệp cho khách hàng, kiểm soát phạm vi chia sẻ | Chương 19 | 2 | | | Chưa viết |
| PLD-3-1-10 | Chuyển thư mục khách hàng đã kết thúc sang kho lưu trữ có kiểm soát | Chương 20 mục 6.6.3 | 3 | | | Chưa viết |
| PLD-3-1-11 | Xóa dữ liệu theo phân cấp duyệt | Chương 20 mục 6.6.4 | 3 | | | Chưa viết |
| PLD-3-1-12 | Kiểm tra và báo cáo tệp để ngoài cấu trúc thư mục chuẩn | Chương 20 mục 6.2.4 | 2 | | | Chưa viết |

---

### 4.4. `[PHẦN MỀM HĐĐT]`

| Trường | Nội dung |
| --- | --- |
| Tên công cụ thực tế | chưa xác định |
| Phiên bản | R.1.0.0, đang áp dụng |
| Người quản trị | chưa xác định |
| Ngày cập nhật phần này | chưa xác định |
| Số thao tác đã viết xong | 0/13 |

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-4-1-01 | Đăng nhập và kiểm tra tình trạng đăng ký sử dụng hóa đơn của khách | Chương 12 mục B | 1 | | | Chưa viết |
| PLD-4-1-02 | Kiểm tra ký hiệu hóa đơn đang dùng | Chương 12 mục B.7 | 2 | | | Chưa viết |
| PLD-4-1-03 | Kết xuất dữ liệu hóa đơn đầu ra của kỳ | Chương 12 mục F | 1 | | | Chưa viết |
| PLD-4-1-04 | Kết xuất dữ liệu hóa đơn đầu vào của kỳ | Chương 09 mục 5.6, Phụ lục A bảng kiểm A3 | 1 | | | Chưa viết |
| PLD-4-1-05 | Đối chiếu dữ liệu hóa đơn với sổ kế toán | Chương 12 mục F.1 | 1 | | | Chưa viết |
| PLD-4-1-06 | Lập hóa đơn thay khách, nếu hợp đồng có phạm vi này | Chương 12, Chương 18 mục 6.2.3 dòng 12 | 3 | | | Chưa viết |
| PLD-4-1-07 | Lập hóa đơn điều chỉnh | Chương 12 mục E | 3 | | | Chưa viết |
| PLD-4-1-08 | Lập hóa đơn thay thế | Chương 12 mục E | 3 | | | Chưa viết |
| PLD-4-1-09 | Lập và gửi thông báo hóa đơn có sai sót | Chương 12 mục E.5 | 3 | | | Chưa viết |
| PLD-4-1-10 | Tra cứu tình trạng của một hóa đơn cụ thể | Chương 12 | 1 | | | Chưa viết |
| PLD-4-1-11 | Tra cứu tình trạng hoạt động và tình trạng hóa đơn của một nhà cung cấp | Chương 12 mục B.5, Phụ lục A bảng kiểm A3 | 1 | | | Chưa viết |
| PLD-4-1-12 | Kết xuất toàn bộ dữ liệu hóa đơn phục vụ bàn giao | Chương 20 mục 6.4.2 | 3 | | | Chưa viết |
| PLD-4-1-13 | Kiểm tra và xử lý khi hóa đơn không được cấp mã hoặc bị từ chối | Chương 12 | 2 | | | Chưa viết |

---

### 4.5. `[CỔNG THUẾ ĐIỆN TỬ]`

| Trường | Nội dung |
| --- | --- |
| Tên công cụ thực tế | chưa xác định |
| Phiên bản | R.1.0.0, đang áp dụng |
| Người quản trị | chưa xác định |
| Ngày cập nhật phần này | chưa xác định |
| Số thao tác đã viết xong | 0/15 |

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> Mọi thao tác nộp hồ sơ và nộp tiền trên công cụ này đều thuộc danh mục bắt buộc hai người theo Chương 18 mục 6.2.3 dòng 1 và dòng 2. Không thao tác khi chưa có Phiếu soát xét và chốt của TL-KT. CV-KT KHÔNG được cấp quyền trên công cụ này. AM chỉ được xem và tải thông báo tiếp nhận để gửi khách, không nộp hồ sơ, không nộp tiền, không ký.

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> Ký bằng chữ ký số của KHÁCH chỉ được làm khi có đủ HAI điều kiện, cả hai đều bằng văn bản: một, khách đã ủy quyền bằng văn bản cho oBacker sử dụng chữ ký số của khách cho đúng loại hồ sơ đó; hai, khách đã xác nhận nội dung hồ sơ bằng văn bản trước khi ký. Thiếu bất kỳ điều kiện nào thì DỪNG, gửi khách tự ký, và AM thông báo khách bằng văn bản. Văn bản ủy quyền và văn bản xác nhận nội dung phải được lưu vào hồ sơ của kỳ trước khi thao tác ký.

| Mã | Thao tác | Chương gốc | Ưu tiên | Người viết | Hạn | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| PLD-5-1-01 | Đăng nhập bằng tài khoản của khách hàng;<br>quy tắc bảo mật thông tin đăng nhập | Chương 20 mục 6.7 | 1 |  |  | Chưa viết |
| PLD-5-1-02 | Kiểm tra hạn hiệu lực chữ ký số trước khi nộp;<br>kiểm tra đã có văn bản ủy quyền và văn bản xác nhận nội dung của khách khi ký bằng chữ ký số của khách | Chương 13 mục G | 1 |  |  | Chưa viết |
| PLD-5-1-03 | Tải và chọn đúng mẫu tờ khai đang có hiệu lực theo bảng ký hiệu mẫu tại mục 4.5.1 | Chương 13, Phụ lục D mục 4.5.1, Phụ lục E | 1 | | | Chưa viết |
| PLD-5-1-04 | Nộp hồ sơ khai thuế GTGT, mẫu `01/GTGT` với phương pháp khấu trừ hoặc `04/GTGT` với phương pháp trực tiếp trên doanh thu | Chương 09, Chương 13 mục G, Phụ lục A bảng kiểm A6 | 1 | | | Chưa viết |
| PLD-5-1-05 | Nộp hồ sơ khai thuế TNCN theo quý của tổ chức trả thu nhập từ tiền lương, tiền công, mẫu `05/KK-TNCN` | Chương 11, Phụ lục A bảng kiểm A7 | 1 | | | Chưa viết |
| PLD-5-1-06 | Nộp hồ sơ quyết toán thuế TNDN, mẫu `03/TNDN` với phương pháp doanh thu trừ chi phí hoặc `04/TNDN` với phương pháp tỷ lệ trên doanh thu | Chương 14, Phụ lục A bảng kiểm A9 | 2 | | | Chưa viết |
| PLD-5-1-07 | Nộp hồ sơ quyết toán thuế TNCN của tổ chức trả thu nhập, mẫu `05/QTT-TNCN`, kèm các phụ lục bảng kê;<br>thu và lưu giấy ủy quyền mẫu `08/UQ-QTT-TNCN` của cá nhân ủy quyền quyết toán | Chương 14, Phụ lục A bảng kiểm A10 | 2 |  |  | Chưa viết |
| PLD-5-1-08 | Nộp báo cáo tài chính năm kèm hồ sơ quyết toán thuế TNDN | Chương 07 mục 5.7, Phụ lục A bảng kiểm A11 | 2 | | | Chưa viết |
| PLD-5-1-09 | Nộp hồ sơ khai bổ sung, mẫu `01/KHBS` kèm bản giải trình mẫu `01-1/KHBS` | Chương 15 | 3 | | | Chưa viết |
| PLD-5-1-10 | Nộp tiền thuế, tiền chậm nộp, tiền phạt | Chương 13 mục A.5, Chương 17 | 1 | | | Chưa viết |
| PLD-5-1-11 | Tra cứu và tải thông báo tiếp nhận hồ sơ | Chương 13 mục G | 1 | | | Chưa viết |
| PLD-5-1-12 | Tra cứu nghĩa vụ thuế và số dư nghĩa vụ của khách | Chương 13 mục F | 1 | | | Chưa viết |
| PLD-5-1-13 | Tra cứu và tải các thông báo, quyết định của cơ quan thuế | Chương 16, Chương 19 Mẫu 11 | 1 | | | Chưa viết |
| PLD-5-1-14 | Nộp văn bản giải trình, hồ sơ theo yêu cầu của cơ quan thuế | Chương 16 mục 5.2 | 3 | | | Chưa viết |
| PLD-5-1-15 | Xử lý khi nộp hồ sơ bị lỗi kỹ thuật sát hạn nộp | Chương 13 mục G | 1 | | | Chưa viết |

> [!danger] RỦI RO BỊ XỬ PHẠT
> Thao tác `PLD-5-1-15` phải được viết trước các thao tác khác trong nhóm. Lỗi kỹ thuật khi nộp sát hạn là tình huống có xác suất xảy ra thực tế và hậu quả trực tiếp là chế tài chậm nộp. Hướng dẫn phải bao gồm: cách ghi nhận bằng chứng đã thử nộp, ai phải báo, trong bao lâu, và các phương án dự phòng.

#### 4.5.1. Bảng ký hiệu mẫu phải chọn đúng trên công cụ

Chọn sai ký hiệu mẫu là lỗi hay xảy ra nhất khi nộp hồ sơ. Bảng dưới đây là ký hiệu mẫu theo Phụ lục I Thông tư 89/2026/TT-BTC `[TT 89/2026 Phụ lục I]`. Trước khi nộp, đối chiếu ký hiệu mẫu trên màn hình với bảng này.

| Ký hiệu mẫu | Tên mẫu | Thao tác dùng |
| --- | --- | --- |
| `01/GTGT` | Tờ khai thuế giá trị gia tăng, áp dụng với người nộp thuế tính thuế theo phương pháp khấu trừ có hoạt động sản xuất kinh doanh | `PLD-5-1-04` |
| `04/GTGT` | Tờ khai thuế giá trị gia tăng, áp dụng với người nộp thuế tính thuế theo phương pháp trực tiếp trên doanh thu | `PLD-5-1-04` |
| `05/KK-TNCN` | Tờ khai thuế thu nhập cá nhân, áp dụng với tổ chức, cá nhân trả các khoản thu nhập từ tiền lương, tiền công | `PLD-5-1-05` |
| `03/TNDN` | Tờ khai quyết toán thuế thu nhập doanh nghiệp, áp dụng với phương pháp doanh thu trừ chi phí | `PLD-5-1-06` |
| `04/TNDN` | Tờ khai thuế thu nhập doanh nghiệp, áp dụng với phương pháp tỷ lệ trên doanh thu | `PLD-5-1-06` |
| `05/QTT-TNCN` | Tờ khai quyết toán thuế thu nhập cá nhân, áp dụng với tổ chức, cá nhân trả thu nhập chịu thuế từ tiền lương, tiền công | `PLD-5-1-07` |
| `02/QTT-TNCN` | Tờ khai quyết toán thuế thu nhập cá nhân, áp dụng với cá nhân cư trú có thu nhập từ tiền lương, tiền công tự quyết toán | `PLD-5-1-07` |
| `08/UQ-QTT-TNCN` | Giấy ủy quyền quyết toán thuế thu nhập cá nhân | `PLD-5-1-07` |
| `01/KHBS` | Tờ khai bổ sung | `PLD-5-1-09` |
| `01-1/KHBS` | Bản giải trình khai bổ sung | `PLD-5-1-09` |

> [!note] PHẠM VI THỰC HIỆN THAO TÁC NỘP BÁO CÁO TÀI CHÍNH
> Thao tác `PLD-5-1-08` áp dụng cho việc nộp báo cáo tài chính kèm hồ sơ quyết toán thuế TNDN trên Cổng thông tin thuế điện tử. Việc nộp cho các cơ quan quản lý khác (nếu có) thực hiện theo quy định chuyên ngành của từng đối tượng doanh nghiệp.

---

## PHẦN 5. TIẾN ĐỘ VÀ PHÂN CÔNG VIẾT

### 5.1. Bảng tổng hợp tiến độ

| Công cụ | Tổng số thao tác | Ưu tiên 1 | Đã viết xong | Đang viết | Chưa viết | Tỷ lệ hoàn thành |
| --- | --- | --- | --- | --- | --- | --- |
| `[PHẦN MỀM KẾ TOÁN]` | 28 | 6 | | | | |
| `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` | 14 | 7 | | | | |
| `[KHO LƯU TRỮ HỒ SƠ]` | 12 | 5 | | | | |
| `[PHẦN MỀM HĐĐT]` | 13 | 5 | | | | |
| `[CỔNG THUẾ ĐIỆN TỬ]` | 15 | 8 | | | | |
| **Tổng** | **82** | **31** | | | | |

### 5.2. Thứ tự viết được khuyến nghị

Quy định nội bộ oBacker.

| Đợt | Nội dung | Lý do | Mốc đề xuất |
| --- | --- | --- | --- |
| Đợt 1 | Toàn bộ 31 thao tác ưu tiên 1 | Dùng hằng ngày;<br>thiếu hướng dẫn thì nhân sự mới không làm được việc | Trong 60 ngày kể từ khi phụ lục này được duyệt |
| Đợt 2 | Các thao tác ưu tiên 2 của nhóm cuối kỳ và kết xuất | Dùng hằng kỳ, có tính chu kỳ nên có thời gian chuẩn bị | Trong 120 ngày |
| Đợt 3 | Các thao tác ưu tiên 2 còn lại | | Trong 180 ngày |
| Đợt 4 | Các thao tác ưu tiên 3 | Ít dùng, nhưng thường là thao tác rủi ro cao nên không được bỏ | Trong 270 ngày |

### 5.3. Quy trình viết và duyệt một mục thao tác

| Bước | Việc làm | Người thực hiện |
| --- | --- | --- |
| 1 | Nhận phân công theo bảng tại Phần 4 | Người được phân công |
| 2 | Thực hiện thao tác thật trên dữ liệu mẫu, ghi lại từng bước | Người viết |
| 3 | Chụp màn hình, che thông tin khách hàng | Người viết |
| 4 | Viết theo cấu trúc tám phần tại mục 3.1 | Người viết |
| 5 | Nhờ một người chưa từng làm thao tác này thực hiện theo hướng dẫn, không được giải thích thêm | Người viết và người thử |
| 6 | Sửa các bước mà người thử bị vướng | Người viết |
| 7 | Người quản trị công cụ soát về mặt kỹ thuật | Người quản trị |
| 8 | TL-KT soát về mặt nghiệp vụ: thao tác có phục vụ đúng nghiệp vụ ở chương gốc không | TL-KT |
| 9 | Duyệt và đưa vào phụ lục | Legal R&D duyệt nội dung, `COO` phát hành |
| 10 | Cập nhật bảng tiến độ tại mục 5.1 | `COO` |

Bước 5 hay bị bỏ. Người viết luôn thấy hướng dẫn của mình rõ ràng, vì họ đã biết cách làm. Chỉ người chưa biết mới phát hiện được chỗ thiếu.

---

## PHẦN 6. QUY TẮC CẬP NHẬT KHI PHẦN MỀM THAY ĐỔI

### 6.1. Bốn loại thay đổi và cách xử lý

Quy định nội bộ oBacker.

| Loại thay đổi | Ví dụ | Mức xử lý | Mốc hoàn thành |
| --- | --- | --- | --- |
| Đổi công cụ hoàn toàn | Chuyển sang một phần mềm kế toán khác | Viết lại toàn bộ phần tương ứng của phụ lục này;<br>giữ bản cũ trong lưu trữ | Trước ngày bắt đầu vận hành trên công cụ mới |
| Nâng phiên bản lớn, giao diện thay đổi lớn | Từ bản 7 sang bản 8, menu được tổ chức lại | Rà toàn bộ các mục thao tác của công cụ đó;<br>sửa những mục bị ảnh hưởng;<br>cập nhật ảnh chụp màn hình | Trong 30 ngày kể từ ngày nâng phiên bản |
| Nâng phiên bản nhỏ, một số nút hoặc trường thay đổi | Đổi tên một nút, thêm một trường | Sửa các mục bị ảnh hưởng;<br>cập nhật ảnh chụp của các bước liên quan | Trong 10 ngày làm việc |
| Thay đổi không ảnh hưởng thao tác | Sửa lỗi nội bộ của phần mềm, thay đổi màu sắc | Ghi nhận phiên bản mới vào bảng đăng ký tại Phần 2;<br>không cần sửa mục thao tác | Trong 5 ngày làm việc |

### 6.2. Quy trình khi phát hiện hướng dẫn không còn đúng

| Bước | Việc làm | Người thực hiện | Mốc |
| --- | --- | --- | --- |
| 1 | Bất kỳ ai phát hiện hướng dẫn không khớp với màn hình thực tế đều phải báo người quản trị công cụ ngay | Người phát hiện | Trong ngày |
| 2 | Người quản trị xác nhận thay đổi có thật và xác định loại thay đổi theo mục 6.1 | Người quản trị | 1 ngày làm việc |
| 3 | Đánh dấu mục thao tác bị ảnh hưởng là "CẦN CẬP NHẬT" ngay trên phụ lục, để người khác không làm theo hướng dẫn cũ | Người quản trị | Trong ngày xác nhận |
| 4 | Thông báo toàn team về thay đổi và về việc mục nào đang cần cập nhật | Người quản trị | Trong ngày xác nhận |
| 5 | Sửa mục thao tác theo quy trình tại mục 5.3 | Người quản trị và người viết | Theo mốc tại mục 6.1 |
| 6 | Bỏ nhãn "CẦN CẬP NHẬT";<br>ghi ngày cập nhật và phiên bản công cụ mới | `COO` | Khi hoàn tất |
| 7 | Ghi vào nhật ký cập nhật tại mục 6.4 | `COO` | Khi hoàn tất |

Nguyên tắc bổ sung: nhân viên phát hiện hướng dẫn sai mà không báo là lỗi quy trình. Việc báo được ghi nhận tích cực theo Chương 18 mục 6.9.

### 6.3. Nghĩa vụ của người quản trị công cụ

Quy định nội bộ oBacker. Mỗi công cụ có một người quản trị được chỉ định trong bảng tại Phần 2, và người này có các nghĩa vụ:

1. Theo dõi thông tin về bản cập nhật của công cụ, tối thiểu hằng tháng.
2. Thử bản cập nhật trên dữ liệu mẫu trước khi cho áp dụng vào công việc thật, khi có thể lựa chọn thời điểm nâng cấp.
3. Thông báo toàn team trước khi nâng phiên bản, nêu rõ thay đổi nào ảnh hưởng thao tác.
4. Cập nhật bảng đăng ký công cụ và các mục thao tác bị ảnh hưởng.
5. Duy trì nhật ký cấp và thu hồi quyền tại mục 2.3.
6. Rà soát toàn bộ quyền truy cập của công cụ mình quản trị tối thiểu 6 tháng một lần.
7. Bàn giao đầy đủ khi chuyển giao vai trò quản trị, theo Chương 20.

### 6.4. Nhật ký cập nhật phụ lục D

| # | Ngày | Công cụ | Phiên bản cũ | Phiên bản mới | Loại thay đổi | Mục thao tác bị ảnh hưởng | Nội dung sửa | Người thực hiện | Người duyệt |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |
| 4 | | | | | | | | | |
| 5 | | | | | | | | | |

### 6.5. Rà soát định kỳ bắt buộc

| Hoạt động | Tần suất | Người thực hiện | Đầu ra |
| --- | --- | --- | --- |
| Kiểm tra bảng đăng ký công cụ còn đúng thực tế | Hằng quý | Người quản trị từng công cụ | Bảng đã cập nhật |
| Thử lại các mục thao tác ưu tiên 1 trên màn hình thực tế | Hằng nửa năm | Người quản trị | Danh mục mục cần sửa |
| Rà soát toàn bộ phụ lục | Hằng năm, trước 28/02 | `COO` chủ trì và phát hành, cùng các người quản trị công cụ | Phiên bản phụ lục mới |
| Rà soát quyền truy cập toàn bộ công cụ | Hằng nửa năm | Người quản trị, COO duyệt | Báo cáo quyền còn sót |

---

## PHẦN 7. NHỮNG GÌ KHÔNG ĐƯỢC ĐƯA VÀO PHỤ LỤC NÀY

Quy định nội bộ oBacker.

| # | Nội dung | Lý do | Đưa vào đâu |
| --- | --- | --- | --- |
| 1 | Mật khẩu, thông tin đăng nhập của bất kỳ hệ thống nào | Rủi ro bảo mật nghiêm trọng | Hệ thống quản lý thông tin đăng nhập có kiểm soát, do người quản trị vận hành |
| 2 | Ảnh chụp màn hình còn hiển thị thông tin của khách hàng | Nghĩa vụ bảo mật | Dùng dữ liệu mẫu hoặc làm mờ |
| 3 | Căn cứ pháp lý, thời hạn, mức thuế suất | Đây là nội dung nghiệp vụ, có tần suất thay đổi khác | Phần thân handbook và Phụ lục E |
| 4 | Đánh giá, so sánh các sản phẩm phần mềm trên thị trường | Không phải mục đích của phụ lục;<br>rủi ro phát ngôn | Tài liệu lựa chọn công cụ riêng, nếu cần |
| 5 | Cách xử lý vòng qua giới hạn của phần mềm để đạt kết quả không đúng nghiệp vụ | Rủi ro nghiệp vụ và đạo đức nghề nghiệp | Không đưa vào đâu. Nếu phần mềm không làm được đúng nghiệp vụ, báo TL-KT để kết luận về mặt nghiệp vụ, và TL-KT chuyển COO nếu phải xử lý ở cấp công cụ |
| 6 | Thao tác trên hệ thống của khách hàng mà oBacker không được cấp quyền chính thức | Rủi ro pháp lý | Không đưa vào |
| 7 | Kinh nghiệm cá nhân chưa được kiểm chứng, dạng "mẹo" | Không đáng tin, khó bàn giao | Đề xuất Legal R&D kiểm chứng rồi mới đưa vào |

---

## Liên kết với các chương khác

| Nội dung | Xem tại |
| --- | --- |
| Quy ước placeholder công cụ trong handbook | Quy ước biên soạn, mục 7 |
| Onboarding khách hàng mới, các thao tác thiết lập ban đầu | Chương 03 |
| Quản lý chứng từ, số hóa và lưu trữ chứng từ | Chương 04 |
| Quy trình kế toán tháng theo phần hành, nghiệp vụ nhập liệu | Chương 05 |
| Khóa sổ, đối chiếu, chuyển đổi số dư | Chương 06 |
| Kết xuất và phát hành báo cáo tài chính | Chương 07 |
| Thiết lập chế độ kế toán và hệ thống tài khoản | Chương 08 |
| Kết xuất bảng kê phục vụ kê khai GTGT | Chương 09 |
| Nghiệp vụ hóa đơn điện tử và xử lý sai sót | Chương 12 |
| Quy trình chuẩn cho một lần khai nộp | Chương 13 mục G |
| Nguyên tắc hai người và các thao tác bắt buộc có người thứ hai | Chương 18 mục 6.2.3 |
| Ghi nhận lỗi và phiếu soát xét trên hệ thống | Chương 18 mục 6.3, 6.4, 6.6 |
| Lưu vết trao đổi với khách hàng | Chương 19 mục 6.9 |
| Cấu trúc thư mục chuẩn của hồ sơ khách hàng | Chương 20 mục 6.2.2 |
| Thu hồi quyền truy cập và xử lý dữ liệu | Chương 20 mục 6.6 và 6.7 |
| Quy trình cập nhật tài liệu nội bộ và đánh phiên bản | Chương 21 mục 6.5 |
| Bộ bảng kiểm in ra dùng được | Phụ lục A |
| Biểu mẫu nội bộ | Phụ lục B |

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
