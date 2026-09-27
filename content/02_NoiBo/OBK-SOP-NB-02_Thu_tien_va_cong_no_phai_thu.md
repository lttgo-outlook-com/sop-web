---
title: "OBK-SOP-NB-02. Thu tiền và công nợ phải thu"
code: "OBK-SOP-NB-02"
type: "sop"
folder: "02_NoiBo"
level: "Cấp 3, hướng dẫn nghiệp vụ"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
law_as_of: "Pháp luật có hiệu lực tại ngày 01/10/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-SOP-NB-00 Chuẩn vận hành nội bộ"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
previous_version: "R.1.0.0"
aliases:
  - OBK-SOP-NB-02
tags:
  - loai/sop
  - cap/3
---
# OBK-SOP-NB-02. Thu tiền và công nợ phải thu

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-NB-02 |
| Tên tài liệu | Quy trình thu tiền và quản lý công nợ phải thu |
| Cấp tài liệu | Cấp 3, hướng dẫn nghiệp vụ. Thi hành Chương 4 của [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Quy chế tài chính nội bộ |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ |
| Bộ tài liệu | OBK-SOP-NB, Sổ tay quy trình nội bộ oBacker |
| Tài liệu song hành | [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mua sắm và thanh toán;<br>[[OBK-SOP-NB-03_Quan_ly_tien\|OBK-SOP-NB-03]] quản lý tiền |
| Lần rà soát tiếp theo | Không quá 12 tháng kể từ ngày ban hành;<br>rà soát đột xuất khi có văn bản mới về hóa đơn hoặc về thuế thu nhập doanh nghiệp |
| Phạm vi phát hành | Nội bộ oBacker. Không phát hành cho khách hàng. |

---

## CẢNH BÁO MỞ ĐẦU

> [!note] CHU TRÌNH THU LÀ CHU TRÌNH DUY NHẤT CỦA MẢNG NỘI BỘ CÓ CHẠM KHÁCH HÀNG, NÊN NÓ CHỊU THÊM MỘT QUY TẮC MÀ HAI CHU TRÌNH KIA KHÔNG CHỊU
> Quy tắc một đầu mối duy nhất với khách: mọi liên lạc đi ra khách về hóa đơn và công nợ đều qua `AM`. `KTV`, `KTT` và `TL` lập số liệu và nội dung nhưng không gửi cho khách, kể cả bằng thư điện tử hay điện thoại. Căn cứ [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 16.1a và `06_OBK-SOP-NB-00` mục 8.

> [!danger] RỦI RO LỚN NHẤT CỦA CHU TRÌNH NÀY KHÔNG NẰM Ở KHÂU THU TIỀN, MÀ NẰM Ở KHÂU VIẾT HỢP ĐỒNG
> Cách gọi tên khoản tiền khách chuyển trước quyết định thời điểm phải lập hóa đơn, và lập hóa đơn sai thời điểm là lỗi bị xử phạt. Thẩm quyền chọn cách viết thuộc `KTT`, không thuộc bộ phận bán hàng. Xem mục 6.3.3.

> [!note] VĂN BẢN NÀY KHÔNG PHỦ HỒ SƠ CỦA KHÁCH HÀNG
> Việc oBacker làm kế toán và thuế CHO khách thuộc mảng dịch vụ, ở `03_DichVu`. Văn bản này chỉ nói về doanh thu và công nợ CỦA CHÍNH oBacker.

---

## 1. Mục đích

Đặt một trình tự duy nhất cho việc bán dịch vụ, xuất hóa đơn, theo dõi công nợ và thu tiền của chính oBacker, sao cho ba việc sau đều đạt cùng lúc: doanh thu ghi nhận đúng kỳ, hóa đơn lập đúng thời điểm, và tiền về trước khi khoản nợ mất khả năng thu.

Chu trình THU là chu trình mang tiền về. Chu trình CHI ở [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]] bảo vệ tiền đã có; chu trình này quyết định có tiền hay không.

## 2. Phạm vi áp dụng

Áp dụng cho toàn bộ doanh thu của oBacker, tức doanh thu dịch vụ back office bán cho khách hàng doanh nghiệp và cá nhân.

**Trong phạm vi:** hợp đồng dịch vụ và phụ lục hợp đồng; xác nhận hoàn thành dịch vụ hoặc từng phần; xuất hóa đơn; theo dõi tuổi nợ; nhắc nợ; đối chiếu công nợ; nhận tiền bằng chuyển khoản và bằng tiền mặt; dự phòng nợ phải thu khó đòi; xóa nợ.

**Ngoài phạm vi:** hồ sơ kế toán và thuế của khách hàng, thuộc `03_DichVu`; nội dung và trình tự nhắc phí gửi khách, bản gốc tại [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.8.2; việc chi tiền, thuộc [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]]; việc quản lý quỹ và tài khoản, thuộc [[OBK-SOP-NB-03_Quan_ly_tien|OBK-SOP-NB-03]].

**Quan hệ với mảng dịch vụ.** Một khách hàng vừa là đối tượng của chu trình này, vừa là đối tượng của các quy trình dịch vụ. Khi hai bên khác nhau về đầu mối liên lạc thì lấy quy tắc một đầu mối; khi khác nhau về số liệu công nợ thì lấy sổ kế toán của oBacker.

## 3. Căn cứ pháp lý

Mỗi dòng ghi điều luật và mức xác minh. Quy tắc gán mức xác minh theo `01_NGUYEN_TAC_VIET`.

| Nội dung | Căn cứ |
| --- | --- |
| Doanh thu tính thuế là toàn bộ tiền cung ứng dịch vụ, không phân biệt đã thu tiền hay chưa | Văn bản hợp nhất 19/VBHN-BTC Đ.8 k.1 |
| Doanh thu tính thuế của đơn vị kê khai theo phương pháp khấu trừ là doanh thu không có thuế giá trị gia tăng | Văn bản hợp nhất 19/VBHN-BTC Đ.8 k.1 đ.a |
| Thời điểm xác định doanh thu với dịch vụ là thời điểm hoàn thành cung ứng, hoặc hoàn thành từng phần | Văn bản hợp nhất 19/VBHN-BTC Đ.8 k.2 đ.b |
| Thời điểm lập hóa đơn với dịch vụ, và ngoại lệ của khoản đặt cọc bảo đảm thực hiện hợp đồng | Nghị định 254/2026/NĐ-CP Đ.9 k.2 |
| Hóa đơn là chứng từ kế toán, nội dung và trình tự lập theo pháp luật về thuế | Luật Kế toán 41/VBHN-VPQH Đ.20 |
| Mỗi nghiệp vụ lập chứng từ một lần | Luật Kế toán 41/VBHN-VPQH Đ.18 k.1 |
| Chứng từ phải có đủ chữ ký theo chức danh quy định trên chứng từ | Luật Kế toán 41/VBHN-VPQH Đ.19 k.1 |
| Bốn mức trích dự phòng nợ phải thu khó đòi theo tuổi nợ, và cách đếm tuổi nợ theo thời gian trả nợ gốc ghi trong hợp đồng | Thông tư 99/2025/TT-BTC, Tài khoản 229, mục 1.4 điểm c |
| Dự phòng trích không đúng pháp luật về trích lập dự phòng thì không được tính vào chi phí được trừ | Văn bản hợp nhất 19/VBHN-BTC Đ.10 k.5 |
| Giao dịch với người có liên quan thuộc thẩm quyền chấp thuận của HĐQT hoặc ĐHĐCĐ, và hệ quả nếu làm sai | Luật Doanh nghiệp 67/VBHN-VPQH Đ.167 |
| Chênh lệch phải được xác định nguyên nhân và phản ánh vào sổ trước khi lập báo cáo tài chính | Luật Kế toán 41/VBHN-VPQH Đ.40 k.3 |

**Căn cứ nội bộ:** [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 14 ghi nhận doanh thu, Điều 15 chính sách bán chịu, Điều 16 thu hồi nợ, Điều 17 dự phòng, Điều 12a giao dịch với người có liên quan, Điều 32 tiền mặt. [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] Điều 4 chữ ký theo chức danh của phiếu thu. `06_OBK-SOP-NB-00` mục 6 khung chu trình và danh mục Job `NB-09` tới `NB-16`.

## 4. Vai trò và trách nhiệm

Ký hiệu vai trò lấy nguyên từ `06_OBK-SOP-NB-00` mục 3.1, không đặt vai trò mới.

| Ký hiệu | Việc trong chu trình này | Việc KHÔNG được làm |
| --- | --- | --- |
| `AM` | Đầu mối duy nhất với khách: gửi hóa đơn, gửi nhắc nợ, gửi biên bản đối chiếu, gọi điện ở mốc quá hạn 20 ngày | Không tự đặt tên khoản tiền trong hợp đồng;<br>không tự cho khách gia hạn |
| `TL` bộ phận thực hiện | Xác nhận đã hoàn thành dịch vụ hoặc từng phần | Không xác nhận hoàn thành cho phần chưa giao |
| `KTV` | Kiểm hạn mức bán chịu;<br>xuất hóa đơn;<br>lập bảng tuổi nợ hằng tuần;<br>lập nội dung và số liệu nhắc nợ;<br>lập biên bản đối chiếu công nợ;<br>theo dõi tuổi nợ phục vụ dự phòng | **Không liên hệ trực tiếp khách về công nợ.** Không tự quyết cách gọi tên khoản tiền chuyển trước |
| `KTT` | Quyết cách gọi tên khoản tiền khách chuyển trước;<br>ký xác nhận hồ sơ hợp đồng;<br>chốt thời điểm xuất hóa đơn;<br>tính và trình mức dự phòng;<br>báo `TGĐ` ở mốc quá hạn 30 ngày | **Không liên hệ trực tiếp khách về công nợ.** Không có quyền xóa nợ |
| `COO` | Duyệt thư nhắc chính thức ở mốc quá hạn 30 ngày;<br>lập bảng đánh giá ở mốc 45 ngày |  |
| `TGĐ` | Duyệt điều khoản trả sau cho từng hợp đồng;<br>duyệt vượt hạn mức bán chịu;<br>duyệt ký dưới bảng giá quá 15%;<br>quyết việc dừng dịch vụ với khách quá hạn | **Không có quyền xóa nợ** |
| `HĐQT` | Quyết việc xóa nợ phải thu khó đòi | |
| `TQ` | Lập phiếu thu và nhận tiền khi khách trả bằng tiền mặt | Không hạch toán;<br>không đối chiếu sao kê |
| `AD-KT` | Đối chiếu sao kê để xác nhận tiền khách đã về, theo [[OBK-SOP-NB-03_Quan_ly_tien\|OBK-SOP-NB-03]] | Không lập hóa đơn;<br>không có quyền nào trên ngân hàng điện tử |

> [!note] `KTV` VÀ `KTT` LÀ HAI NGƯỜI CÓ SỐ LIỆU NHƯNG KHÔNG ĐƯỢC GỬI, `AM` LÀ NGƯỜI GỬI NHƯNG KHÔNG CÓ SỐ LIỆU. ĐÂY LÀ THIẾT KẾ CỐ Ý, KHÔNG PHẢI CHỖ VƯỚNG
> Lý do: một đầu mối duy nhất giữ được quan hệ với khách và tránh việc khách nhận hai con số khác nhau từ hai người. Hệ quả vận hành phải chấp nhận: mỗi lần nhắc nợ là hai bước của hai người, nên `KTV` phải gửi số liệu cho `AM` trước mốc, không đợi tới mốc.
>
> **`TQ` chỉ vào chu trình này khi khách trả tiền mặt.** Vai trò `TQ` đã đăng ký nhưng người giữ vai trò chưa gán, nên tới khi có người, oBacker **không nhận tiền mặt từ khách**; xem [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] mục 4.1 và mục 6.6.2 của văn bản này.

## 5. Đầu vào bắt buộc

Không mở một khoản phải thu khi thiếu bất kỳ đầu vào nào dưới đây.

| # | Đầu vào | Nguồn | Thiếu thì sao |
| --- | --- | --- | --- |
| 1 | Hợp đồng dịch vụ hoặc phụ lục đã ký, đủ ba nội dung tại mục 6.3.1 | `AM` | `KTT` không ký xác nhận hồ sơ, và không xuất hóa đơn |
| 2 | Thông tin định danh khách: tên, địa chỉ, mã số thuế | Hồ sơ khách hàng | Hóa đơn ghi sai thông tin bên mua, và khách sẽ đòi hủy hóa đơn |
| 3 | Xác nhận đã hoàn thành dịch vụ hoặc từng phần | `TL` bộ phận thực hiện | Chưa xác định được thời điểm doanh thu, nên chưa được xuất hóa đơn |
| 4 | Kết luận về điều khoản thanh toán: trả trước toàn bộ, hay đã được `TGĐ` duyệt trả sau | `KTV` lập, `KTT` soát | Mặc định là trả trước toàn bộ;<br>không tự cho trả sau |
| 5 | Kết luận về hạn mức bán chịu nếu là khách trả sau | `KTV` | Không được cung cấp thêm dịch vụ khi dư nợ đã vượt hạn mức |
| 6 | Với khách là **người có liên quan**: hồ sơ chấp thuận theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 12a | `KTT` | Giao dịch có rủi ro bị xử lý theo `[Luật Doanh nghiệp 67/VBHN-VPQH Đ.167 k.5]` |

## 6. Các bước thực hiện

### 6.0. HỢP ĐỒNG VÀ KHOẢN PHẢI THU LÀ HAI HỒ SƠ RIÊNG

Cùng nguyên tắc đã chốt cho chu trình mua sắm: một hợp đồng dịch vụ có thể sinh nhiều khoản phải thu, vì dịch vụ hoàn thành từng phần và mỗi phần sinh một hóa đơn. Hai hồ sơ nối nhau bằng **số hợp đồng**.

#### 6.0.1. Bảng tra trạng thái của HỢP ĐỒNG DỊCH VỤ

| Hồ sơ đang ở | Nghĩa là | Ai đang giữ | Cần gì để đi tiếp |
| --- | --- | --- | --- |
| **Đang đàm phán** | Chưa có bản nào đủ ba nội dung bắt buộc | `AM` | Bản dự thảo đủ ba nội dung tại mục 6.3.1 |
| **Chờ kế toán soát** | Đã đủ ba nội dung, chờ soát điều khoản và cách gọi tên khoản tiền | `KTV` soát, `KTT` quyết | `KTT` ký xác nhận hồ sơ |
| **Chờ duyệt điều khoản ngoài chuẩn** | Có trả sau, hoặc dưới bảng giá quá 15%, hoặc vượt hạn mức bán chịu | `TGĐ` | Phê duyệt bằng văn bản cho từng hợp đồng |
| **Chờ ký** | Đủ điều kiện, chờ người có thẩm quyền ký | `TGĐ` | Ký hợp đồng |
| **Đang thực hiện** | Đã ký. Mỗi lần hoàn thành một phần thì mở một khoản phải thu | `TL` bộ phận thực hiện | Xác nhận hoàn thành từng phần |
| **Đã đóng** | Đã hoàn thành phần cuối và đã xuất hóa đơn phần cuối | Đóng | |
| **Đã dừng** | Dừng giữa kỳ, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 16.2 hoặc theo điều khoản hợp đồng | Đóng | |

#### 6.0.2. Bảng tra trạng thái của KHOẢN PHẢI THU

Một khoản phải thu bằng một hóa đơn. Sinh khi xuất hóa đơn, đóng khi tiền về hoặc khi được xóa nợ.

| Hồ sơ đang ở | Nghĩa là | Ai đang giữ | Cần gì để đi tiếp |
| --- | --- | --- | --- |
| **Chờ xuất hóa đơn** | Đã có xác nhận hoàn thành, hoặc đã thu tiền trước, nhưng hóa đơn chưa phát hành | `KTV` | Phát hành hóa đơn điện tử, xem mục 6.4 |
| **Trong hạn** | Hóa đơn đã phát hành, chưa tới ngày đến hạn | `AM` theo dõi | Tiền về, hoặc tới ngày đến hạn |
| **Quá hạn tới 30 ngày** | Đang trong bốn mốc nhắc đầu | `AM` gửi, `KTV` cấp số liệu | Tiền về, hoặc chạm mốc 30 ngày |
| **Quá hạn 31 tới 90 ngày** | Đã qua thư nhắc chính thức và đã có đánh giá nội bộ | `COO` lập đánh giá, `TGĐ` quyết | Tiền về, hoặc quyết định dừng dịch vụ, hoặc thỏa thuận lịch trả |
| **Quá hạn từ 91 ngày trở lên** | Nhóm nặng nhất của bảng tuổi nợ | `KTT` | Tiền về, hoặc trình `HĐQT` xóa nợ |
| **Đang tranh chấp** | Khách không trả vì không đồng ý về dịch vụ, không phải vì thiếu tiền | `COO` | Xử xong khiếu nại rồi mới quay lại đường công nợ |
| **Đã thu đủ** | Tiền đã về và đã đối chiếu khớp sao kê | Đóng | |
| **Đã xóa nợ** | `HĐQT` đã quyết xóa. **Vẫn theo dõi tiếp ở sổ ngoài** | Đóng trên sổ chính | |

> [!note] "ĐANG TRANH CHẤP" LÀ TRẠNG THÁI PHẢI TÁCH RIÊNG, KHÔNG GỘP VÀO NHÓM QUÁ HẠN
> Bảng mốc nhắc phí tại [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.8.2 ghi rõ ở mốc quá hạn 20 ngày, nếu nguyên nhân là khách không hài lòng về dịch vụ thì **chuyển ngay sang quy trình khiếu nại**. Nếu gộp trạng thái này vào nhóm quá hạn thì hệ quả là oBacker tiếp tục nhắc nợ một khách đang có khiếu nại chưa xử, và đó là cách mất khách nhanh nhất. Bảng tuổi nợ phải đếm nhóm này riêng.

> [!note] "ĐÃ XÓA NỢ" KHÔNG PHẢI KẾT THÚC HOÀN TOÀN
> Xóa sổ kế toán không có nghĩa là xóa quyền đòi nợ. Sau khi xóa, khoản nợ tiếp tục được theo dõi trên một sổ chi tiết ngoài hệ thống sổ kế toán chính, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 17.1d.

### 6.1. PHÂN LOẠI KHOẢN THU, LÀM TRƯỚC MỌI VIỆC KHÁC

| Nhóm | Tên | Ví dụ tại oBacker | Rủi ro đặc thù |
| --- | --- | --- | --- |
| **H1** | Dịch vụ theo kỳ, thu trước | Kế toán và thuế hằng tháng, payroll hằng tháng | Xuất hóa đơn trễ so với thời điểm thu tiền |
| **H2** | Dịch vụ theo dự án, hoàn thành từng phần | Thành lập doanh nghiệp, giấy phép, tư vấn pháp lý | Xác nhận hoàn thành từng phần không có bằng chứng, nên không chứng minh được thời điểm doanh thu |
| **H3** | Dịch vụ trả sau, đã được `TGĐ` duyệt | Khách lớn có điều khoản trả sau riêng | Dư nợ vượt hạn mức mà vẫn tiếp tục cung cấp dịch vụ |
| **H4** | Khoản khách chuyển trước chưa xác định là gì | Tiền về tài khoản trước khi hợp đồng ký xong | Gọi tên sai thì lập hóa đơn sai thời điểm;<br>xem mục 6.3.3 |
| **H5** | Khoản thu không phải doanh thu | Khách nộp lại tiền oBacker đã chi hộ, tiền lãi ngân hàng | Ghi nhầm vào doanh thu, làm sai cả doanh thu và thuế |

> [!note] NHÓM H4 LÀ NHÓM PHẢI XỬ TRONG NGÀY
> Tiền vào tài khoản mà chưa biết là gì thì `KTV` báo `KTT` ngay trong ngày phát hiện qua đối chiếu nhanh, và `KTT` quyết cách gọi tên trước khi kỳ hai tuần kết thúc. Để tiền sang kỳ sau là mất dấu vết đối chiếu, và tới lúc lập báo cáo thì không còn ai nhớ khoản đó của khách nào.

### 6.2. THẨM QUYỀN VỀ ĐIỀU KHOẢN THANH TOÁN

> [!note] MỤC NÀY KHÔNG GHI SỐ TIỀN
> Mọi con số nằm ở [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 15, và chỉ nằm ở đó.

| Việc | Người quyết | Căn cứ |
| --- | --- | --- |
| Điều khoản thanh toán chuẩn: khách **TRẢ TRƯỚC TOÀN BỘ** theo từng đơn hàng | Là mặc định, không cần ai duyệt | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 15.1 |
| Cho một hợp đồng có điều khoản **trả sau** | `TGĐ`, phê duyệt riêng cho từng hợp đồng | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 15.1 |
| Cho một khách trả sau có dư nợ **vượt hạn mức bán chịu** | `TGĐ`, bằng văn bản, cho từng trường hợp | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 15.2 |
| Ký hợp đồng **dưới bảng giá quá 15%** | `TGĐ`, cho từng hợp đồng | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 14.6 |
| Khách hàng **mới**: ba kỳ dịch vụ đầu | Thu trước, không bán chịu. Không ai duyệt ngoại lệ ở bước này | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 15.3 |
| Khách là **người có liên quan** | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 12a, không theo bảng này | `[Luật Doanh nghiệp 67/VBHN-VPQH Đ.167]` |

> [!note] HẠN MỨC BÁN CHỊU CHỈ ÁP CHO KHÁCH ĐÃ ĐƯỢC DUYỆT TRẢ SAU
> Khách trả trước toàn bộ thì không có dư nợ nên không có hạn mức nào để kiểm.

### 6.3. LUỒNG H, KÝ HỢP ĐỒNG DỊCH VỤ

#### 6.3.1. Ba nội dung bắt buộc của mọi hợp đồng bán dịch vụ

Thiếu một trong ba thì `KTT` không ký xác nhận hồ sơ, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 14.5.

| # | Nội dung | Vì sao bắt buộc |
| --- | --- | --- |
| 1 | **Phạm vi dịch vụ và mốc hoàn thành từng phần** | Thời điểm xác định doanh thu với dịch vụ là thời điểm hoàn thành cung ứng hoặc hoàn thành **từng phần** `[Văn bản hợp nhất 19/VBHN-BTC Đ.8 k.2 đ.b]`.<br>Không có mốc từng phần trong hợp đồng thì không xác định được kỳ ghi doanh thu |
| 2 | **Điều khoản thanh toán và hình thức thanh toán** | Quyết định ngày đến hạn, tức quyết định cả bảng tuổi nợ và cả việc có được nhắc nợ hay không |
| 3 | **Thời điểm và cách thức lập hóa đơn** | Lập hóa đơn sai thời điểm là lỗi bị xử phạt. Xem mục 6.3.3 |

#### 6.3.2. Năm bước

| Bước | Việc | Người làm | Đầu ra | Thời hạn |
| --- | --- | --- | --- | --- |
| H1 | Lập dự thảo hợp đồng đủ ba nội dung tại mục 6.3.1, theo bảng giá `TGĐ` ban hành | `AM` | Dự thảo hợp đồng |  |
| H2 | Soát điều khoản thanh toán, hạn mức bán chịu, và tên khoản tiền chuyển trước | `KTV` soát, `KTT` quyết | Kết luận trên hồ sơ hợp đồng, hoặc hồ sơ trình `TGĐ` | 02 ngày làm việc |
| H3 | Duyệt điều khoản ngoài chuẩn nếu có | `TGĐ` | Phê duyệt bằng văn bản | 02 ngày làm việc |
| H4 | `KTT` ký xác nhận hồ sơ | `KTT` | Chữ ký xác nhận trên hồ sơ hợp đồng |  |
| H5 | Ký hợp đồng | `TGĐ` | Hợp đồng có số |  |

#### 6.3.3. ĐẶT CỌC HAY TẠM ỨNG. QUYẾT ĐỊNH ĐẮT NHẤT CỦA CẢ CHU TRÌNH

Nguyên văn: thời điểm lập hóa đơn với dịch vụ là thời điểm hoàn thành cung cấp dịch vụ; nếu bên bán thu tiền trước hoặc trong khi cung cấp thì thời điểm lập hóa đơn là **thời điểm thu tiền**, **không bao gồm trường hợp thu tiền đặt cọc theo quy định Bộ luật Dân sự để bảo đảm thực hiện hợp đồng** `[Nghị định 254/2026/NĐ-CP Đ.9 k.2]`.

| Cách ghi trong hợp đồng | Nghĩa vụ lập hóa đơn khi nhận tiền |
| --- | --- |
| **ĐẶT CỌC** bảo đảm thực hiện hợp đồng, theo Bộ luật Dân sự | Không lập hóa đơn tại thời điểm nhận tiền |
| **TẠM ỨNG**, hoặc **THANH TOÁN ĐỢT 1**, hoặc bất kỳ cách gọi nào khác | Lập hóa đơn NGAY tại thời điểm thu tiền |

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> CÁCH VIẾT HỢP ĐỒNG QUYẾT ĐỊNH THỜI ĐIỂM HÓA ĐƠN, VÀ THẨM QUYỀN CHỌN CÁCH VIẾT THUỘC `KTT`
> Bộ phận bán hàng không tự đặt tên khoản tiền trong hợp đồng. Đây là chốt `KS-NB-T2` tại mục 7.

> [!note] HAI CHIỀU SAI
> VÀ CHIỀU NÀO CŨNG TỐN TIỀN
> Ghi là đặt cọc để hoãn hóa đơn nhưng bản chất khoản tiền là thanh toán đợt 1 thì đó là lập hóa đơn trễ. Ghi là tạm ứng cho gọn rồi phải xuất hóa đơn ngay khi tiền về, trong khi dịch vụ chưa bắt đầu, thì doanh thu ghi sớm hơn thời điểm hoàn thành cung ứng và kỳ thuế bị lệch.
>
> **Chốt cách làm tại oBacker:** với nhóm H1 dịch vụ theo kỳ thu trước, khoản khách chuyển trước ghi là **thanh toán cho kỳ dịch vụ**, và hóa đơn lập tại thời điểm thu tiền. Cách này đơn giản và khớp với điều khoản chuẩn trả trước toàn bộ. Cách ghi đặt cọc chỉ dùng cho nhóm H2 dịch vụ theo dự án, khi khoản tiền thật sự có chức năng bảo đảm thực hiện hợp đồng, và mỗi lần dùng phải có kết luận riêng của `KTT`.

### 6.4. LUỒNG I, XÁC NHẬN HOÀN THÀNH VÀ XUẤT HÓA ĐƠN

#### 6.4.1. Bốn bước

| Bước | Việc | Người làm | Đầu ra | Thời hạn |
| --- | --- | --- | --- | --- |
| I1 | Xác nhận đã hoàn thành dịch vụ hoặc từng phần, theo mốc ghi trong hợp đồng | `TL` bộ phận thực hiện;<br>`KTT` với mảng kế toán | Biên bản hoặc bản ghi xác nhận có ngày | Trong 02 ngày làm việc kể từ khi hoàn thành |
| I2 | Chốt thời điểm xác định doanh thu và thời điểm lập hóa đơn | `KTT` | Kết luận ghi trên hồ sơ | |
| I3 | Phát hành hóa đơn điện tử | `KTV` | Hóa đơn điện tử đã phát hành | **Trong 01 ngày làm việc** kể từ thời điểm xác định doanh thu, theo Job `NB-09` |
| I4 | Gửi hóa đơn cho khách | `AM` | Bằng chứng đã gửi, lưu hồ sơ khách | Trong 01 ngày làm việc kể từ khi phát hành |

#### 6.4.2. Ba việc kiểm trước khi phát hành hóa đơn

- **Thông tin bên mua khớp ba nguồn:** hợp đồng, hồ sơ khách hàng, và thông tin khách vừa xác nhận. Sai tên, sai địa chỉ hay sai mã số thuế thì khách sẽ đòi hủy và lập lại, và mỗi lần hủy là một lần phải giải trình.
- **Số tiền khớp hợp đồng và khớp phần đã xác nhận hoàn thành.** Xuất cả hợp đồng khi mới hoàn thành một phần là ghi doanh thu sớm.
- **Chưa có hóa đơn nào cho cùng phần việc đó.** Mỗi nghiệp vụ lập chứng từ một lần `[Luật Kế toán 41/VBHN-VPQH Đ.18 k.1]`. Kiểm bằng cách tra theo bộ ba số hợp đồng, mốc hoàn thành, và số tiền.

> [!bug] LỖI THƯỜNG GẶP
> KHÁCH TRẢ TIỀN TRƯỚC KHI DỊCH VỤ BẮT ĐẦU, VÀ KHÔNG AI BÁO KẾ TOÁN
> Với điều khoản chuẩn trả trước toàn bộ, tiền về là sự kiện làm phát sinh nghĩa vụ lập hóa đơn, không phải việc hoàn thành dịch vụ. Nghĩa là **đối chiếu nhanh mỗi 02 tuần ở [[OBK-SOP-NB-03_Quan_ly_tien|OBK-SOP-NB-03]] là chốt phát hiện nghĩa vụ lập hóa đơn**, không chỉ là điểm kiểm soát tiền. `AD-KT` phát hiện một khoản tiền về chưa có hóa đơn thì báo `KTT` ngay trong ngày.

### 6.5. LUỒNG K, THEO DÕI VÀ THU HỒI

#### 6.5.1. Bảng tuổi nợ, bốn nhóm cộng một nhóm

`KTV` lập và cập nhật **hằng tuần**, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 15.4 và Job `NB-11`.

| Nhóm | Phạm vi |
| --- | --- |
| 1 | Trong hạn |
| 2 | Quá hạn tới 30 ngày |
| 3 | Quá hạn 31 tới 90 ngày |
| 4 | Quá hạn từ 91 ngày trở lên |
| **5** | **Đang tranh chấp**, đếm riêng, không gộp vào bốn nhóm trên |

#### 6.5.2. Nhắc nợ. BẢN GỐC KHÔNG Ở ĐÂY

**Tám mốc nhắc, nội dung từng mốc, kênh gửi và người thực hiện: bản gốc duy nhất là [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.8.2.** Văn bản này không ghi lại bảng đó.

Ba quy tắc mà tài liệu này đặt thêm, và bảng đó phải chạy theo:

1. **`KTV` lập nội dung và số liệu; `AM` gửi cho khách.** `KTV`, `KTT` và `TL` không liên hệ trực tiếp khách về công nợ. Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 16.1a.
2. **Mọi lần nhắc phải có bằng chứng đã gửi, lưu trong hồ sơ khách hàng.** Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 16.1b.
3. **`KTV` gửi số liệu cho `AM` trước mốc, không đợi tới mốc.** Đây là quy tắc riêng của tài liệu này: mỗi mốc là hai bước của hai người, nên nếu số liệu chỉ có vào đúng ngày mốc thì mốc luôn trễ một kỳ.

#### 6.5.3. Ba mốc chuyển lên cấp trên, và ai quyết cái gì

| Mốc | Việc | Người quyết |
| --- | --- | --- |
| Quá hạn đủ 30 ngày | `KTT` báo `TGĐ` và đề xuất phương án | `TGĐ` |
| Quá hạn từ 31 ngày trở lên | **Dừng cung cấp dịch vụ.** Phải thông báo trước cho khách bằng văn bản | `TGĐ` quyết;<br>`AM` là người gửi văn bản |
| Nợ không thu được | **Xóa nợ phải thu khó đòi** | `HĐQT`. `TGĐ` và `KTT` không có quyền xóa nợ |

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> XÓA NỢ THUỘC `HĐQT`, KHÔNG THUỘC `TGĐ`
> Đây là một trong ít việc của mảng nội bộ mà `TGĐ` không quyết được, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 16.3. Hệ quả vận hành: hồ sơ xóa nợ phải xếp theo kỳ họp `HĐQT`, nên `KTT` chuẩn bị hồ sơ trước kỳ họp, không chờ tới lúc lập báo cáo tài chính mới làm.

#### 6.5.4. Đối chiếu công nợ với khách, theo quý

`KTV` lập biên bản đối chiếu, `AM` gửi khách, hoàn thành trong 05 ngày làm việc đầu tháng đầu quý sau, theo Job `NB-14`.

Biên bản khách không xác nhận cũng phải lưu, kèm bằng chứng đã gửi. Khoản nợ mà khách không xác nhận là dấu hiệu phải chuyển sang nhóm 5 đang tranh chấp, không phải chỗ để bỏ qua.

### 6.6. NHẬN TIỀN

#### 6.6.1. Chuyển khoản là mặc định

Khách chuyển vào tài khoản của oBacker trong Danh mục tài khoản tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 34.2. **oBacker không dùng tài khoản cá nhân của bất kỳ nhân sự nào để thu tiền của khách** `[OBK-QCTC-01 mục 34.4]`.

Tiền về được xác nhận qua đối chiếu sao kê ở [[OBK-SOP-NB-03_Quan_ly_tien|OBK-SOP-NB-03]], không xác nhận bằng ảnh chụp màn hình khách gửi. Ảnh chụp chỉ dùng để tra soát, không dùng để ghi sổ.

#### 6.6.2. Thu tiền mặt

Tiền mặt chỉ được thu khi có đầy đủ phiếu thu mẫu 01-TT theo chức danh, có chữ ký của Thủ quỹ theo [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] mục 4.1. Trường hợp khách hàng thanh toán tiền mặt trực tiếp mà chưa thể lập phiếu thu theo quy định, người nhận nộp ngay vào tài khoản ngân hàng của oBacker trong ngày để hạch toán qua ngân hàng.

### 6.7. DỰ PHÒNG VÀ XÓA NỢ

> [!note] MỤC NÀY KHÔNG GHI MỨC TRÍCH
> Bốn mức trích theo tuổi nợ, ba trường hợp trích không theo tuổi nợ, thời điểm trích và tài khoản dùng: bản gốc tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 17.1a tới 17.1d. Không ghi lại ở đây.

Việc của chu trình này là **cấp dữ liệu đủ để trích**, tức Job `NB-16`:

- Tuổi nợ của từng khoản, đếm theo **thời gian trả nợ gốc ghi trong hợp đồng**. Việc hai bên tự gia hạn nợ về sau không làm mốc đếm dịch đi, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 17.1a.
- Dấu hiệu tổn thất của khoản **chưa đến hạn**: khách đã phá sản hoặc đang mở thủ tục phá sản, đang giải thể, mất tích, bỏ trốn khỏi địa điểm kinh doanh. Ba nhóm dấu hiệu đầy đủ tại mục 17.1b.
- Trích và hoàn nhập làm tại **thời điểm lập báo cáo tài chính**, không làm hằng tháng.

**Ba việc khi xóa sổ một khoản nợ**, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 17.1d: quyết định xóa do `HĐQT` ban hành; sau khi xóa vẫn theo dõi trên sổ chi tiết ngoài hệ thống sổ kế toán chính; và lưu đủ hồ sơ chứng minh đã dùng hết biện pháp thu hồi.

### 6.8. JOB NB-49, CHỐT DOANH THU TÍNH HOA HỒNG THEO KHÁCH ĐƯỢC GIỚI THIỆU

Job NB-49 chốt doanh thu tính hoa hồng cho chương trình đối tác giới thiệu khách hàng tại OBK-SOP-PM. Thực hiện khi kết thúc tháng.

Đầu vào: khoản thu của khách thuộc sổ đăng ký giới thiệu, đã phân loại theo nhóm khoản thu tại mục 6.1. Nhóm H5 khoản thu không phải doanh thu bị loại khỏi doanh thu tính hoa hồng.

Phạm vi doanh thu tính hoa hồng chỉ gồm dịch vụ ghi trong hợp đồng dịch vụ đầu tiên của khách và phần gia hạn của chính dịch vụ đó. Dịch vụ bán thêm hoặc bán chéo qua Job `AM-29` không tính hoa hồng. Phần gia hạn hợp đồng qua Job `AM-18` tính hoa hồng.

Số hoa hồng tính bằng công cụ, không tính tay.

Đầu ra: bảng doanh thu tính hoa hồng theo khách, chuyển cho Job `PM-07` để lập báo cáo hoa hồng tháng, và chuyển cho Job NB-23 để trích trước khoản hoa hồng đã phát sinh mà chưa có hóa đơn.

### 6.9. LUỒNG L, HOÀN TIỀN CHO KHÁCH HOẶC HỦY DỊCH VỤ. JOB NB-51

Nguồn phát sinh: khách yêu cầu hoàn tiền hoặc hủy dịch vụ; hoặc Job `AM-19` kết thúc dịch vụ.

| Bước | Việc | Người làm | Đầu ra |
| --- | --- | --- | --- |
| L1 | Ghi nhận yêu cầu hoàn tiền hoặc hủy dịch vụ, căn cứ hợp đồng với khách | do `CEO` chốt khi ban hành | Yêu cầu đã ghi nhận |
| L2 | Xác định số tiền hoàn, phần dịch vụ đã thực hiện | do `CEO` chốt khi ban hành | Kết luận số tiền hoàn |
| L3 | Duyệt theo bậc duyệt chi tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 12.3 | Người duyệt chi theo bậc tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 12.3 | Phê duyệt |
| L4 | Lập chứng từ điều chỉnh, chi hoàn | do `CEO` chốt khi ban hành | Chứng từ điều chỉnh;<br>khoản chi hoàn |
| L5 | Tra sổ đăng ký giới thiệu. Khách có trong sổ thì thông báo cho người giữ Job `PM-09` | do `CEO` chốt khi ban hành | Thông báo gửi Job `PM-09`, khi khách có trong sổ đăng ký giới thiệu |

## 7. Điểm kiểm soát bắt buộc

| Mã | Chốt | Trước bước nào | Ai kiểm | Ai duyệt kết quả |
| --- | --- | --- | --- | --- |
| `KS-NB-T1` | Hợp đồng có đủ ba nội dung bắt buộc tại mục 6.3.1. Thiếu một trong ba thì không ký xác nhận hồ sơ | H4 | `KTT` | `TGĐ` |
| `KS-NB-T2` | Cách gọi tên khoản tiền khách chuyển trước đã do `KTT` quyết, không do bộ phận bán hàng tự đặt | H4 | `KTT` | `TGĐ` |
| `KS-NB-T3` | Khách mới: ba kỳ dịch vụ đầu thu trước, không bán chịu | H2 | `KTV` | `KTT` |
| `KS-NB-T4` | Hóa đơn phát hành trong 01 ngày làm việc kể từ thời điểm xác định doanh thu, và chưa có hóa đơn nào cho cùng phần việc | I3 | `KTV` | `KTT` |
| `KS-NB-T5` | Mọi khoản tiền về tài khoản đều đã khớp với một hóa đơn hoặc đã được `KTT` gọi tên | Mỗi kỳ đối chiếu nhanh | `AD-KT` | `KTT` |
| `KS-NB-T6` | Không cung cấp thêm dịch vụ cho khách trả sau đã vượt hạn mức bán chịu, khi chưa có phê duyệt của `TGĐ` | Trước mỗi kỳ dịch vụ tiếp | `KTV` | `TGĐ` |
| `KS-NB-T7` | Mọi lần nhắc nợ có bằng chứng đã gửi trong hồ sơ khách | Sau mỗi mốc | `KTV` | `KTT` |

## 8. Lỗi thường gặp và cách xử lý

| # | Lỗi thường gặp | Hậu quả | Cách xử |
| --- | --- | --- | --- |
| 1 | Gọi khoản khách chuyển trước là tạm ứng cho gọn | Phải lập hóa đơn ngay khi tiền về, doanh thu ghi sớm hơn kỳ hoàn thành dịch vụ | `KTT` quyết cách gọi tên ở bước H2, trước khi ký |
| 2 | Hợp đồng không có mốc hoàn thành từng phần | Không xác định được kỳ ghi doanh thu với dịch vụ nhiều đợt | Chốt `KS-NB-T1`;<br>thiếu thì không ký xác nhận hồ sơ |
| 3 | Tiền khách về mà không ai báo kế toán | Nghĩa vụ lập hóa đơn phát sinh mà không ai biết, nên hóa đơn trễ | Chốt `KS-NB-T5` ở lượt đối chiếu nhanh mỗi 02 tuần |
| 4 | `KTV` hoặc `KTT` gửi thư nhắc nợ trực tiếp cho khách | Khách nhận hai con số từ hai người;<br>vi phạm quy tắc một đầu mối | `KTV` gửi số liệu cho `AM` trước mốc;<br>`AM` là người gửi |
| 5 | Khách không trả vì đang khiếu nại, mà vẫn bị nhắc nợ | Mất khách, và khiếu nại càng khó xử | Nhóm 5 đang tranh chấp, đếm riêng;<br>chuyển sang quy trình khiếu nại theo Handbook mục 6.8.2 |
| 6 | Hai bên tự gia hạn nợ, kế toán đếm lại tuổi nợ từ ngày gia hạn | Trích dự phòng thiếu, và phần dự phòng trích không đúng bị loại khỏi chi phí được trừ | Đếm theo thời gian trả nợ gốc ghi trong hợp đồng, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 17.1a |
| 7 | Khách là bên có liên quan, xử theo bảng thẩm quyền thông thường | Giao dịch có rủi ro bị xử lý kèm bồi thường `[Luật Doanh nghiệp 67/VBHN-VPQH Đ.167 k.5]` | Chuyển sang [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 12a ngay ở bước H2 |
| 8 | Nhận tiền mặt của khách trong lúc chưa có `TQ` | Phiếu thu thiếu chữ ký theo chức danh in trên mẫu | Nộp ngay vào tài khoản trong ngày, không nhập quỹ;<br>xem mục 6.6.2 |

## 9. Đầu ra và nơi lưu

| Đầu ra | Người tạo | Nơi lưu |
| --- | --- | --- |
| Hợp đồng dịch vụ đã ký, kèm chữ ký xác nhận của `KTT` | `AM` | Hồ sơ khách hàng, tại `[KHO LƯU TRỮ HỒ SƠ]` |
| Phê duyệt điều khoản ngoài chuẩn của `TGĐ` | `TGĐ` | Cùng thư mục hợp đồng |
| Biên bản hoặc bản ghi xác nhận hoàn thành | `TL` bộ phận thực hiện | Hồ sơ khách hàng |
| Hóa đơn điện tử đã phát hành | `KTV` | `[PHẦN MỀM KẾ TOÁN]` và hồ sơ khách hàng |
| Bằng chứng đã gửi hóa đơn | `AM` | Hồ sơ khách hàng |
| Bảng tuổi nợ theo năm nhóm, hằng tuần | `KTV` | Thư mục công nợ theo kỳ |
| Bằng chứng đã nhắc nợ từng mốc | `AM` | Hồ sơ khách hàng |
| Biên bản đối chiếu công nợ theo quý | `KTV` lập, `AM` gửi | Hồ sơ khách hàng |
| Hồ sơ trình `HĐQT` xóa nợ, và nghị quyết | `KTT` | Thư mục `HĐQT` |
| Sổ theo dõi nợ đã xóa, ngoài sổ kế toán chính | `KTV` | Thư mục công nợ |
| Phiếu thu `BM-PT` khi có tiền mặt | `KTV` lập, `TQ` ký | `[PHẦN MỀM KẾ TOÁN]`. Chưa dùng, xem mục 6.6.2 |

## 10. Chỉ số theo dõi

| # | Chỉ số | Nguồn số | Tần suất | Ngưỡng cảnh báo |
| --- | --- | --- | --- | --- |
| 1 | Số ngày từ thời điểm xác định doanh thu tới ngày phát hành hóa đơn | Hồ sơ khách và hóa đơn | Hằng tuần | Trên 01 ngày làm việc là lệch chuẩn |
| 2 | Số hóa đơn phát hành trễ trong kỳ | Chốt `KS-NB-T4` | Hằng tháng | Bất kỳ trường hợp nào cũng phải giải trình |
| 3 | Số khoản tiền về chưa khớp hóa đơn tại cuối kỳ đối chiếu nhanh | Chốt `KS-NB-T5` | Mỗi 02 tuần | Trên 0 là phải xử trước kỳ sau |
| 4 | Tỷ trọng dư nợ theo từng nhóm tuổi | Bảng tuổi nợ | Hằng tuần | chưa đặt |
| 5 | Số ngày thu tiền trung bình, tính từ ngày đến hạn | Sổ công nợ | Hằng tháng | chưa đặt |
| 6 | Số khách trả sau có dư nợ vượt hạn mức mà chưa có phê duyệt | Chốt `KS-NB-T6` | Hằng tuần | Phải bằng 0 |
| 7 | Tỷ lệ mốc nhắc nợ thực hiện đúng hạn | Bằng chứng đã nhắc | Hằng tháng | chưa đặt |
| 8 | Số biên bản đối chiếu quý khách không xác nhận | Job `NB-14` | Hằng quý | Trên 0 là dấu hiệu tranh chấp |
| 9 | Số khoản chuyển sang nhóm 5 đang tranh chấp trong kỳ | Bảng tuổi nợ | Hằng tháng | chưa đặt |
| 10 | Số dư dự phòng nợ phải thu khó đòi, và biến động so với kỳ trước | Sổ kế toán, tài khoản 2293 | Khi lập báo cáo tài chính | chưa đặt |

**Sáu trong mười chỉ số lấy số trực tiếp từ hai bảng tra trạng thái ở mục 6.0.** Đếm hồ sơ theo trạng thái và đo thời gian nằm trong từng trạng thái là đủ, không cần thêm sổ theo dõi nào.
Chỉ số chưa đặt ngưỡng thì người lập báo cáo ghi số đo và không phát cảnh báo. Ngưỡng của các chỉ số đó do `CEO` đặt sau 03 kỳ chạy thật.

## Liên kết với tài liệu khác

| Tài liệu | Quan hệ |
| --- | --- |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 14 tới Điều 17 | Bản gốc của nguyên tắc doanh thu, chính sách bán chịu, thu hồi nợ và dự phòng |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 12a | Đường đi riêng khi khách là người có liên quan |
| [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] mục 6.8.2 | **Bản gốc duy nhất** của bảng mốc nhắc phí. Tài liệu này không ghi lại |
| [[OBK-SOP-NB-03_Quan_ly_tien\|OBK-SOP-NB-03]] | Đối chiếu sao kê để xác nhận tiền khách đã về;<br>chốt `KS-NB-T5` chạy ở đó |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] Điều 4 và mục 4.1 | Chữ ký theo chức danh của phiếu thu, và vai trò `TQ` chưa có người |
| `06_OBK-SOP-NB-00` mục 6 | Khung chu trình và danh mục Job `NB-09` tới `NB-16` |
| `03_DichVu` | Quy trình làm hồ sơ CHO khách. Tài liệu này không phủ phần đó |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
