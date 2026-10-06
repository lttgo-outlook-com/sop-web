---
title: "SỔ KN-01. TIẾP NHẬN VÀ XỬ LÝ KHIẾU NẠI KHÁCH HÀNG VÀ CHẾ TÀI DỊCH VỤ"
code: "KN-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.1.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - KN-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# SỔ KN-01. TIẾP NHẬN VÀ XỬ LÝ KHIẾU NẠI KHÁCH HÀNG VÀ CHẾ TÀI DỊCH VỤ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | KN-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | KN-01 |
| **Màu** | ĐỎ, quản lý khiếu nại khách hàng và giải quyết tranh chấp dịch vụ |
| **Ai dùng** | Chuyên viên Quản lý khách hàng (`AM`), Trưởng phòng Thương mại, Trưởng bộ phận nghiệp vụ (`TL`), Giám đốc điều hành (`COO`), Giám đốc điều hành cấp cao (`CEO`) |
| **Sinh từ** | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.3, mục 8.2.1;<br>[[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] Job `AM-14`;<br>[[08_PL_B_Tieu_chi_cong_viec_dang_ho_so\|OBK-QCNS-08-PL-B]] tiêu chí `HS-04`;<br>[[00_TnC_Master_VI\|Master TnC]] |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi được áp dụng bắt buộc để tiếp nhận, phân loại mức độ ưu tiên, điều tra nguyên nhân và theo dõi toàn bộ tiến độ xử lý đối với 100% khiếu nại, phản ánh không hài lòng hoặc yêu cầu bồi thường dịch vụ từ phía khách hàng tại oBacker.

Sổ bao phủ toàn bộ các khiếu nại phát sinh từ:
1. Chậm trễ tiến độ nộp hồ sơ hoặc bàn giao kết quả so với cam kết dịch vụ (SLA).
2. Sai sót nghiệp vụ trong hồ sơ, tờ khai thuế, số liệu báo cáo tài chính hoặc thủ tục giấy phép.
3. Cơ quan nhà nước ban hành thông báo phạt vi phạm hành chính hoặc yêu cầu giải trình do lỗi nghiệp vụ của oBacker.
4. Thái độ phục vụ, quy tắc ứng xử hoặc vi phạm cơ chế một đầu mối giao tiếp quy định tại [[02_OBK-SOP-AM_Quan_ly_khach_hang|OBK-SOP-AM]].

Sổ là công cụ kiểm soát chỉ số hài lòng khách hàng (`AM-M12`), tỷ lệ giữ khách hàng (`AM-M13`), chỉ số khiếu nại chuyển lên cấp trên (`HS-04`), và liên kết trực tiếp với Sổ theo dõi kiểm soát chất lượng [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa|CL-01]].

## KHUÔN SỔ TIẾP NHẬN VÀ XỬ LÝ KHIẾU NẠI KHÁCH HÀNG

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã khiếu nại (`KN ID`) | Mã định danh duy nhất: `KN-[Năm]-[Số thứ tự]` (ví dụ: `KN-2026-0015`) |
| 2 | Ngày giờ tiếp nhận | Thời điểm nhận được thông tin khiếu nại theo định dạng `DD/MM/YYYY HH:MM` |
| 3 | Kênh tiếp nhận | Một trong 4 kênh: `Thư điện tử`, `Điện thoại đường dây nóng`, `Nhóm làm việc chung`, `Gặp trực tiếp` |
| 4 | Mã khách hàng (`Client ID`) | Mã định danh khách hàng theo [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] |
| 5 | Tên doanh nghiệp khách hàng | Tên đầy đủ trên đăng ký kinh doanh của khách hàng |
| 6 | Người khiếu nại | Họ tên, chức danh và số điện thoại liên hệ của người đại diện bên khách hàng |
| 7 | Chuyên viên quản lý khách hàng (`AM`) | Họ tên chuyên viên sở hữu quan hệ khách hàng và chịu trách nhiệm điều phối xử lý |
| 8 | Bộ phận bị khiếu nại | Bộ phận nghiệp vụ trực tiếp bị phản ánh: `Licensing`, `Kế toán và Thuế`, `Lao động`, `Dịch vụ pháp lý`, `AM` |
| 9 | Mã công việc liên quan (`Task ID`) | Mã nhiệm vụ trên hệ thống quản lý công việc và Bảng theo dõi [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] |
| 10 | Mức độ ưu tiên khiếu nại | Một trong 3 mức theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 7.3: `P1 Nghiêm trọng`, `P2 Lớn`, `P3 Thường` |
| 11 | Tóm tắt nội dung khiếu nại | Trình bày ngắn gọn, khách quan sự việc, yêu cầu cụ thể của khách hàng |
| 12 | Mốc thời gian phản hồi lần đầu | Mốc ngày giờ AM gọi điện hoặc gửi văn bản phản hồi đầu tiên cho khách hàng |
| 13 | Kết quả xác minh nguyên nhân | Một trong 4 nhóm: `Lỗi do oBacker`, `Lỗi do khách hàng nộp chậm`, `Lỗi do cơ quan nhà nước`, `Hiểu nhầm phạm vi` |
| 14 | Mã sai sót liên kết (`CL-01`) | Mã bản ghi sai sót trên Sổ [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]] (nếu có lỗi nội bộ) |
| 15 | Phương án xử lý thống nhất | Giải pháp kỹ thuật, tiến độ khắc phục đã được khách hàng chấp thuận bằng văn bản |
| 16 | Biện pháp chế tài và bồi thường | `Không bồi thường`, `Giảm trừ phí dịch vụ tháng sau`, `Hoàn trả một phần phí`, `Bồi hoàn tiền phạt nộp chậm` |
| 17 | Giá trị tài chính bồi thường | Số tiền giảm trừ hoặc bồi hoàn thực tế (đồng Việt Nam) |
| 18 | Thẩm quyền phê duyệt | Người phê duyệt phương án: `Trưởng phòng Thương mại`, `COO`, hoặc `CEO` |
| 19 | Thời hạn cam kết hoàn tất | Hạn chót hoàn thành toàn bộ nội dung khắc phục và bồi thường |
| 20 | Ngày hoàn thành thực tế | Ngày thực tế hoàn tất khắc phục và có xác nhận của khách hàng |
| 21 | Trạng thái giải quyết | Một trong 5 trạng thái: `Mới tiếp nhận`, `Đang xác minh`, `Đang khắc phục`, `Đã đóng thỏa đáng`, `Không đồng thuận` |
| 22 | Điểm hài lòng sau xử lý | Đánh giá của khách hàng sau khi sự việc được giải quyết (thang điểm từ 1 đến 5) |
| 23 | Ghi nhận tiêu chí `HS-04` và `A-06` | Đánh dấu `Có` nếu khiếu nại do lỗi nội bộ (tác động tiêu chí `A-06` của `OBK-QCNS-08`); đánh dấu `Chuyển cấp trên` nếu khiếu nại bị chuyển lên COO hoặc CEO giải quyết (tác động tiêu chí `HS-04`) |
| 24 | Bài học kinh nghiệm | Điểm rút ra để hoàn thiện tài liệu hướng dẫn và phòng ngừa sự việc tương tự |

## BA MỨC ƯU TIÊN KHIẾU NẠI VÀ MA TRẬN THẨM QUYỀN GIẢI QUYẾT BỒI THƯỜNG

### 1. Phân loại 3 mức ưu tiên theo chuẩn vận hành dịch vụ

Mọi khiếu nại phải được phân loại và xử lý theo đúng cam kết thời gian quy định tại OBK-SOP-00 mục 7.3:

| Mức ưu tiên | Dấu hiệu nhận diện | Thời hạn phản hồi lần đầu | Thời hạn hoàn thành xử lý |
| --- | --- | --- | --- |
| **P1 Nghiêm trọng** | Nguy cơ trễ thời hạn theo pháp luật;<br>cơ quan thuế ban hành văn bản phạt vi phạm hành chính;<br>khiếu nại gay gắt dọa hủy hợp đồng;<br>sự cố lộ lọt thông tin dữ liệu | AM gọi điện thoại trực tiếp trong thời hạn dưới 30 phút | Kế hoạch xử lý trong thời hạn dưới 02 giờ làm việc;<br>cập nhật tiến độ 02 lần mỗi ngày (đầu giờ sáng và cuối giờ chiều);<br>xử lý xong trong 01 ngày làm việc, tối đa không quá 02 ngày làm việc |
| **P2 Lớn** | Ảnh hưởng đến đầu ra hoặc tiến độ bàn giao;<br>sai lệch số liệu kế toán cần điều chỉnh bổ sung;<br>khiếu nại về chất lượng dịch vụ của bộ phận | Phản hồi mốc T1 (trong thời hạn dưới 02 giờ làm việc) | Lập phương án xử lý trong 04 giờ làm việc;<br>xử lý xong trong thời hạn tối đa 02 ngày làm việc |
| **P3 Thường** | Thắc mắc về giải thích chính sách;<br>phản ánh về quy cách giao tiếp hoặc thời gian trả lời tin nhắn;<br>yêu cầu chỉnh sửa hình thức văn bản | Phản hồi mốc T1 (trong thời hạn dưới 02 giờ làm việc) | Trả lời đầy đủ trong ngày nếu tiếp nhận trước 15:00;<br>nếu sau 15:00 thì trước 12:00 ngày làm việc tiếp theo;<br>xử lý tối đa không quá 02 ngày làm việc |

Quy tắc phân mức bắt buộc: Người tiếp nhận phân mức ngay tại bước đầu tiên. Phân sai mức thấp hơn thực tế là lỗi chất lượng. Khi phân vân giữa hai mức, bắt buộc chọn mức cao hơn.

### 2. Ma trận thẩm quyền phê duyệt chế tài và bồi thường dịch vụ

Căn cứ cơ chế phân định thẩm quyền tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 8.2.1 và Điều khoản dịch vụ chung `Master TnC`:
- **Thẩm quyền của Trưởng phòng Thương mại:** Phê duyệt phương án giải quyết và giảm trừ phí dịch vụ đối với các trường hợp có giá trị tài chính tối đa không quá 2.000.000 đồng (hoặc giảm trừ tối đa 10% phí dịch vụ của 01 tháng tiếp theo) khi nguyên nhân do sự chậm trễ của bộ phận giao dịch khách hàng.
- **Thẩm quyền của Giám đốc điều hành (`COO`):** Chủ trì thẩm định nguyên nhân kỹ thuật, xác định trách nhiệm của các bộ phận chuyên môn (`LIC`, `KT`, `LD`, `LS`), phê duyệt phương án khắc phục chuyên môn và xác nhận mức độ lỗi nội bộ đối với các khiếu nại mức `P1` hoặc `P2`.
- **Thẩm quyền của Giám đốc điều hành cấp cao (`CEO`):**
  * Phê duyệt toàn bộ các khoản bồi thường tài chính trực tiếp bằng tiền mặt hoặc chuyển khoản từ 2.000.000 đồng trở lên.
  * Phê duyệt việc bồi hoàn tiền phạt nộp chậm thuế hoặc tiền phạt vi phạm hành chính phát sinh do lỗi tác nghiệp của oBacker (căn cứ theo biên bản làm việc và quyết định xử phạt của cơ quan có thẩm quyền).
  * Quyết định phương án thương mại đối với các yêu cầu thanh lý hoặc chấm dứt hợp đồng dịch vụ trước hạn.
  * `CEO` tôn trọng kết luận thẩm định kỹ thuật của `COO` và không đảo ngược kết luận về tính khả thi nghiệp vụ.

### 3. Ghi nhận tiêu chí đánh giá hiệu suất nhân sự (`HS-04`)

Theo [[08_PL_B_Tieu_chi_cong_viec_dang_ho_so|OBK-QCNS-08-PL-B]], tiêu chí `HS-04` đo lường số lượng khiếu nại dịch vụ bị đẩy lên cấp trên (`COO` hoặc `CEO`) giải quyết trong kỳ đánh giá:
- Định mức chuẩn cho toàn bộ các vị trí từ `P1` đến `M1` là: **0 lần**.
- Mỗi lần phát sinh khiếu nại chuyển lên cấp trên do lỗi chủ quan của bộ phận nghiệp vụ hoặc do việc xử lý khiếu nại không dứt điểm tại cấp cơ sở sẽ bị trừ điểm trực tiếp vào kết quả đánh giá hiệu suất cuối kỳ của nhân sự phụ trách và Trưởng bộ phận liên quan.

## QUY TRÌNH TIẾP NHẬN VÀ XỬ LÝ KHIẾU NẠI KHÁCH HÀNG

```
[1. Tiếp nhận & Phân loại] -> [2. Phản hồi ban đầu] -> [3. Xác minh nguyên nhân] -> [4. Phê duyệt & Khắc phục] -> [5. Đóng khiếu nại]
```

1. **Tiếp nhận và phân loại:** `AM` tiếp nhận thông tin từ khách hàng, tạo mã bản ghi trên Sổ KN-01, phân loại đúng mức ưu tiên (`P1`, `P2`, `P3`) trong thời hạn tối đa 30 phút.
2. **Phản hồi ban đầu:** `AM` liên hệ ngay với khách hàng theo cam kết thời gian (gọi điện thoại dưới 30 phút nếu mức P1; gửi tin nhắn hoặc thư điện tử dưới 02 giờ nếu mức P2, P3), lắng nghe ghi nhận đầy đủ yêu cầu của khách hàng.
3. **Xác minh nguyên nhân và lập phương án:** `AM` phối hợp với Trưởng bộ phận nghiệp vụ bị khiếu nại để làm rõ nguyên nhân gốc rễ, đối soát hồ sơ lưu trữ và chứng từ giao nhận [[TL-01_So_giao_nhan_tai_lieu_va_buu_pham|TL-01]], [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu|TL-02]]. Lập phiếu ghi nhận sai sót trên [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa|CL-01]] nếu do lỗi nội bộ.
4. **Phê duyệt và triển khai khắc phục:** Trình phương án xử lý và chế tài bồi thường lên người có thẩm quyền (`TP Thương mại`, `COO` hoặc `CEO`) phê duyệt theo đúng ma trận thẩm quyền. Sau khi phê duyệt, triển khai ngay các biện pháp khắc phục hồ sơ và thủ tục tài chính.
5. **Nghiệm thu và đóng khiếu nại:** `AM` gửi văn bản thông báo kết quả giải quyết cho khách hàng, xin ý kiến đánh giá độ hài lòng, cập nhật kết quả vào Sổ KN-01 và ký biên bản đóng khiếu nại khi khách hàng đồng thuận.

## KÝ XÁC NHẬN

| Chuyên viên quản lý khách hàng (`AM`) | Trưởng bộ phận nghiệp vụ liên quan | Giám đốc điều hành (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm quyền lợi hợp pháp của khách hàng khi sử dụng dịch vụ của oBacker; chuẩn hóa quy trình ứng phó và giải quyết theo đúng thời hạn cam kết khi có sự cố dịch vụ; ngăn chặn việc khiếu nại bị bỏ rơi hoặc xử lý kéo dài gây giảm sút danh tiếng thương hiệu; minh bạch hóa cơ chế bồi thường và chế tài dịch vụ; đồng thời kiểm soát chặt chẽ chỉ số khiếu nại khách hàng (`A-06`) và khiếu nại chuyển lên cấp trên (`HS-04`) để nâng cao năng lực tự chịu trách nhiệm của từng bộ phận.



---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KN-01 về Sổ cái OBK-MSR |
