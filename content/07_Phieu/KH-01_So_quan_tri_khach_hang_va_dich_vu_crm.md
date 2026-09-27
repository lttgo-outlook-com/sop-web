---
title: "SỔ KH-01. QUẢN TRỊ KHÁCH HÀNG, TRẠNG THÁI DỊCH VỤ VÀ CRM"
code: "KH-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "27/09/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
law_as_of: ""
next_review: ""
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - KH-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# SỔ KH-01. QUẢN TRỊ KHÁCH HÀNG, TRẠNG THÁI DỊCH VỤ VÀ CRM

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | KH-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 27/09/2026 |
| Người biên soạn | `CEO` soạn bản đầu. Bản sau do `CEO` phân công |
| Người soát | đã soát |
| Người phê duyệt | đã phê duyệt |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | KH-01 |
| **Màu** | XANH DƯƠNG, sổ quản trị tài khoản khách hàng và dữ liệu quan hệ khách hàng (CRM) |
| **Ai dùng** | Chuyên viên Quản lý khách hàng (`AM`), Chuyên viên Kế toán (`KTV`), Chuyên viên Cấp phép (`CV-LIC`), Chuyên viên Lao động (`CV-LD`), Chuyên viên Dịch vụ pháp lý (`CV-LS`), Kế toán trưởng nội bộ (`KTT`), Trưởng phòng Thương mại, Giám đốc điều hành (`COO`) và Giám đốc điều hành cấp cao (`CEO`) |
| **Sinh từ** | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] (Job AM-01 tới AM-30);<br>[[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] tới [[07_Bang_gia_Dich_vu_o_nuoc_ngoai\|OBK-DM-07]];<br>[[00_TnC_Master_VI\|OBK-TnC-00]] Điều khoản dịch vụ chung |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Sổ quản trị khách hàng, trạng thái dịch vụ và CRM được áp dụng bắt buộc cho 100% khách hàng và đầu mối liên hệ phát sinh tại oBacker. Sổ ghi nhận xuyên suốt vòng đời khách hàng từ thời điểm tiếp nhận yêu cầu đầu tiên (Lead), đàm phán hợp đồng, tiếp nhận khách hàng mới (Onboarding), vận hành thường xuyên định kỳ hằng tháng hoặc hằng quý, theo dõi sức khỏe tài khoản để phát hiện nguy cơ rời bỏ (Churn Risk), cho đến khi thanh lý hợp đồng dịch vụ.

Sổ là cơ sở dữ liệu duy nhất ghi nhận thông tin pháp lý doanh nghiệp, đầu mối điều hành, gói dịch vụ đăng ký, chuyên viên phụ trách, doanh thu định kỳ hằng tháng (MRR), tình trạng thanh toán, đánh giá mức độ hài lòng khách hàng (CSAT) và lịch họp rà soát định kỳ.

## KHUÔN SỔ QUẢN TRỊ KHÁCH HÀNG, TRẠNG THÁI DỊCH VỤ VÀ CRM

| Cột | Tên trường | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã khách hàng (`Client ID`) | Mã định danh duy nhất của khách hàng trên hệ thống oBacker (dạng `KH-[Số]` hoặc `OBK-CLI-[Số]`) |
| 2 | Tên doanh nghiệp khách hàng | Tên đầy đủ của doanh nghiệp theo Giấy chứng nhận đăng ký doanh nghiệp |
| 3 | Mã số thuế (`MST`) | Mã số doanh nghiệp hoặc mã số thuế 10 chữ số (hoặc 13 chữ số đối với chi nhánh) |
| 4 | Ngành nghề kinh doanh chính | Mã ngành cấp 4 và mô tả lĩnh vực hoạt động kinh doanh thực tế của khách hàng |
| 5 | Người đại diện theo pháp luật | Họ tên đầy đủ, số điện thoại cá nhân và địa chỉ thư điện tử của Người đại diện theo pháp luật |
| 6 | Đầu mối kế toán hoặc vận hành | Họ tên, chức danh, số điện thoại và thư điện tử của nhân sự trực tiếp làm việc với oBacker |
| 7 | Nhóm dịch vụ đăng ký | Nhóm dịch vụ theo danh mục [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]]: Kế toán thuế (`OBK-DM-03`), Chữ ký số và hóa đơn (`OBK-DM-06`), Giấy phép (`OBK-DM-02`), Lao động và tiền lương (`OBK-DM-04`), Dịch vụ pháp lý (`OBK-DM-05`), Dịch vụ ở nước ngoài (`OBK-DM-07`) |
| 8 | Gói dịch vụ chi tiết | Tên gói dịch vụ cụ thể ghi nhận trong Hợp đồng dịch vụ hoặc Đơn đặt hàng |
| 9 | Chuyên viên quản lý khách hàng (`AM`) | Họ tên chuyên viên sở hữu quan hệ và cam kết với khách hàng theo [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] |
| 10 | Chuyên viên nghiệp vụ thực hiện | Họ tên các chuyên viên trực tiếp phụ trách: `KTV`, `CV-LIC`, `CV-LD` hoặc `CV-LS` |
| 11 | Trưởng bộ phận nghiệp vụ kiểm soát | Chức danh Trưởng bộ phận chịu trách nhiệm kiểm soát lớp hai: `TL-KT`, `TL-LIC`, `TL-LD`, `TL-LS` |
| 12 | Trạng thái tài khoản khách hàng | Một trong 07 trạng thái chuẩn: `Lead`, `Đang ký hợp đồng`, `Onboarding`, `Vận hành thường xuyên`, `Tạm dừng`, `Nguy cơ rời bỏ` (`Churn Risk`), `Đã thanh lý` |
| 13 | Ngày ký hợp đồng | Ngày hai bên hoàn tất ký kết Hợp đồng dịch vụ hoặc Thỏa thuận khung |
| 14 | Ngày bắt đầu tính phí | Mốc thời gian chính thức bắt đầu tính phí dịch vụ định kỳ |
| 15 | Ngày hết hạn hoặc kỳ gia hạn | Ngày cuối cùng của thời hạn hợp đồng hoặc mốc rà soát gia hạn trước 30 ngày theo [[DV-02_Bang_theo_doi_chu_ky_so_va_dich_vu_khach_hang\|DV-02]] |
| 16 | Doanh thu định kỳ hằng tháng (`MRR`) | Giá trị doanh thu dịch vụ định kỳ hằng tháng theo hợp đồng (đơn vị: đồng Việt Nam, chưa gồm thuế GTGT) |
| 17 | Chu kỳ thanh toán phí | Kỳ hạn thu phí dịch vụ: Hằng tháng, Hằng quý, 06 tháng hoặc Hằng năm |
| 18 | Tình trạng thanh toán phí | Một trong các tình trạng: `Đã thanh toán`, `Chưa đến hạn`, `Chậm từ 01 ngày đến 15 ngày`, `Chậm từ 16 ngày đến 30 ngày`, `Quá hạn trên 30 ngày` |
| 19 | Mức độ hài lòng khách hàng (`CSAT`) | Kết quả khảo sát theo chỉ số `AM-M12`: `Hài lòng` (từ 4,0 điểm đến 5,0 điểm), `Bình thường` (từ 3,0 điểm đến 3,9 điểm), `Cần cải thiện` (dưới 3,0 điểm) |
| 20 | Điểm sức khỏe tài khoản | Tổng điểm theo thang 100 điểm dựa trên 05 nhóm chỉ số quy định tại [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] mục 9.3 |
| 21 | Phân loại rủi ro tài khoản | `Bình thường` (từ 80 điểm trở lên); `Cần theo dõi` (từ 60 điểm đến 79 điểm); `Rủi ro cao` (dưới 60 điểm hoặc nhóm Tuân thủ bằng 0 điểm) |
| 22 | Lịch họp định kỳ với khách hàng | Ghi rõ chu kỳ họp (Hằng tháng hoặc Hằng quý theo Job `AM-27`), Ngày họp gần nhất và Ngày hẹn họp tiếp theo |
| 23 | Kênh giao tiếp chính thức | Nhóm trao đổi điện tử đã thiết lập kèm danh sách thư điện tử nhận thông báo nghiệp vụ |
| 24 | Trạng thái cập nhật gần nhất | Mốc ngày giờ và chức danh nhân sự thực hiện cập nhật thông tin sổ |

## NGUYÊN TẮC QUẢN TRỊ VÀ ĐÁNH GIÁ SỨC KHỎE TÀI KHOẢN (CRM)

### 1. Bảy trạng thái tài khoản khách hàng

Toàn bộ khách hàng được quản trị theo 07 trạng thái thống nhất:

```
[Lead] -> [Đang ký hợp đồng] -> [Onboarding] -> [Vận hành thường xuyên]
                                                     |         |
                                     [Tạm dừng] <----+         +----> [Nguy cơ rời bỏ]
                                          |                                 |
                                          +----------------> [Đã thanh lý] <-+
```

1. `Lead`: Khách hàng tiềm năng đang trong giai đoạn tiếp nhận thông tin, phân loại nhu cầu và thẩm định rủi ro đầu vào (Job `AM-01` đến `AM-05`).
2. `Đang ký hợp đồng`: Hồ sơ báo giá đã được chấp thuận, đang hoàn tất ký Hợp đồng dịch vụ hoặc Đơn đặt hàng theo đúng biểu mẫu quy định.
3. `Onboarding`: Khách hàng mới ký hợp đồng, đang trong quy trình thiết lập dữ liệu ban đầu, thu thập hồ sơ và khởi động dịch vụ trong thời hạn 07 ngày làm việc (Job `AM-06` đến `AM-09`).
4. `Vận hành thường xuyên`: Dịch vụ đang chạy định kỳ ổn định, các nghĩa vụ báo cáo và kê khai được thực hiện theo đúng kế hoạch.
5. `Tạm dừng`: Khách hàng có văn bản đề nghị tạm ngừng hoạt động kinh doanh hoặc hai bên tạm dừng dịch vụ do vướng mắc hồ sơ hoặc vi phạm nghĩa vụ thanh toán quá 30 ngày.
6. `Nguy cơ rời bỏ` (`Churn Risk`): Tài khoản bị chấm điểm sức khỏe dưới 60 điểm, hoặc khách hàng có khiếu nại về chất lượng, hoặc phát sinh sự cố trễ hạn nghĩa vụ pháp lý.
7. `Đã thanh lý`: Hai bên đã hoàn tất biên bản thanh lý hợp đồng, đối soát hết công nợ và bàn giao toàn bộ dữ liệu, chữ ký số và hồ sơ lưu trữ (Job `AM-21`).

### 2. Thang đo 100 điểm sức khỏe tài khoản khách hàng

Điểm sức khỏe tài khoản khách hàng được tính toán định kỳ hằng tháng dựa trên 05 nhóm chỉ số, mỗi nhóm tối đa 20 điểm theo [[02_OBK-SOP-AM_Quan_ly_khach_hang|OBK-SOP-AM]] mục 9.3:

| Nhóm chỉ số | Trọng số | Tiêu chí đánh giá | Quy tắc trừ điểm |
| --- | --- | --- | --- |
| Tuân thủ | 20 điểm | Tỷ lệ hoàn thành đúng thời hạn theo pháp luật các nghĩa vụ kê khai, nộp thuế và báo cáo | Nếu có bất kỳ Job nào trễ thời hạn theo pháp luật trong kỳ, điểm nhóm Tuân thủ chuyển về 0 điểm ngay lập tức |
| Chất lượng | 20 điểm | Số lượng lỗi đầu ra phát sinh trong kỳ của các bộ phận nghiệp vụ phục vụ khách hàng | Mỗi lỗi đầu ra mức Nghiêm trọng trừ 20 điểm;<br>Mỗi lỗi đầu ra mức Đáng kể trừ 10 điểm;<br>Mỗi lỗi đầu ra mức Nhỏ trừ 03 điểm |
| Quan hệ | 20 điểm | Mức độ hài lòng của khách hàng và tần suất khách hàng phải đôn đốc tiến độ | Điểm khảo sát CSAT dưới 4,0 điểm trừ 10 điểm;<br>Mỗi lần khách hàng phải đôn đốc tiến độ trừ 03 điểm |
| Thanh toán | 20 điểm | Mức độ tuân thủ nghĩa vụ thanh toán phí dịch vụ định kỳ theo hợp đồng | Chậm thanh toán từ 16 ngày đến 30 ngày trừ 10 điểm;<br>Chậm thanh toán quá 30 ngày trừ 20 điểm |
| Mức dùng | 20 điểm | Tỷ lệ sử dụng thực tế của khách hàng so với phạm vi gói dịch vụ đã thỏa thuận | Tỷ lệ sử dụng thực tế chưa đến mức 50% khối lượng hóa đơn hoặc phạm vi gói dịch vụ định kỳ trừ 10 điểm |

Quy tắc phân loại hành động theo tổng điểm:
- **Từ 80 điểm trở lên (Tài khoản Bình thường):** Duy trì tần suất vận hành và cập nhật thông tin định kỳ.
- **Từ 60 điểm đến 79 điểm (Tài khoản Cần theo dõi):** `AM` rà soát nguyên nhân giảm điểm, làm việc với Trưởng bộ phận nghiệp vụ để chấn chỉnh chất lượng, tăng cường trao đổi với khách hàng.
- **Dưới 60 điểm hoặc nhóm Tuân thủ bằng 0 điểm (Tài khoản Nguy cơ rời bỏ - Churn Risk):** `AM` kích hoạt quy trình cứu vãn tài khoản, lập báo cáo giải trình gửi Trưởng phòng Thương mại và `COO` trong thời hạn 24 giờ, tổ chức buổi làm việc trực tiếp với Người đại diện theo pháp luật của khách hàng để xử lý triệt để nguyên nhân.

## QUY TRÌNH 6 BƯỚC QUẢN TRỊ DỮ LIỆU CRM VÀ TÀI KHOẢN KHÁCH HÀNG

```
[ ]  1. TIẾP NHẬN YÊU CẦU VÀ KHỞI TẠO MÃ KHÁCH HÀNG (D0 - D1)
        - AM tiếp nhận yêu cầu từ các kênh tiếp thị hoặc đầu mối đối tác giới thiệu (HH-01).
        - Thực hiện phản hồi đầu tiên trong thời hạn dưới 15 phút (chỉ số AM-M01).
        - Tạo bản ghi mới trên sổ với trạng thái "Lead", kiểm tra rà soát 08 dấu hiệu rủi ro (KS-AM-07).
        - Nếu có yếu tố rủi ro: chuyển CEO quyết định tiếp nhận trước khi gửi đề xuất báo giá.

[ ]  2. HOÀN TẤT KÝ KẾT VÀ CHUYỂN TRẠNG THÁI ONBOARDING (D2 - D7)
        - Gửi đề xuất dịch vụ theo biểu mẫu quy định thuộc OBK-DM và các phụ lục giá chuẩn.
        - Trình ký Hợp đồng dịch vụ theo đúng mẫu hiệu lực (KS-AM-08), không tự ý sửa đổi điều khoản.
        - Cập nhật số Hợp đồng, Ngày ký, Ngày bắt đầu tính phí và giá trị MRR vào sổ.
        - Chuyển trạng thái tài khoản sang "Onboarding" (Job AM-06).

[ ]  3. BÀN GIAO NỘI BỘ VÀ KHỞI ĐỘNG DỊCH VỤ (TRONG 07 NGÀY LÀM VIỆC)
        - AM gửi Thư chào mừng kèm Danh mục hồ sơ yêu cầu đầu vào theo biểu mẫu TL-02.
        - Phân công chuyên viên nghiệp vụ (KTV, CV-LIC, CV-LD, CV-LS) trên hệ thống.
        - Thu nhận hồ sơ pháp lý, chứng thư số (CK-01), hóa đơn điện tử, thông tin hệ thống thuế và BHXH.
        - Khi đủ 03 điều kiện khởi động dịch vụ: AM đóng Job AM-09, chuyển trạng thái "Vận hành thường xuyên".

[ ]  4. CẬP NHẬT ĐỊNH KỲ VÀ ĐỐI SOÁT CÔNG NỢ HẰNG THÁNG
        - KTV và các chuyên viên nghiệp vụ cập nhật biến động khối lượng chứng từ trước ngày 25 hằng tháng.
        - KTT nội bộ đối soát tình trạng thanh toán phí dịch vụ, cập nhật trạng thái nợ vào sổ trước ngày 05 hằng tháng.
        - Trường hợp khách hàng chậm thanh toán trên 15 ngày: AM gửi văn bản nhắc nhở lần 1.
        - Trường hợp chậm thanh toán trên 30 ngày: AM phối hợp KTT áp dụng quy định tạm dừng dịch vụ theo OBK-TnC-00.

[ ]  5. ĐÁNH GIÁ SỨC KHỎE TÀI KHOẢN VÀ HỌP RÀ SOÁT ĐỊNH KỲ
        - Ngày 01 hằng tháng, AM tổng hợp số liệu tính điểm sức khỏe tài khoản theo thang 100 điểm.
        - Thực hiện khảo sát mức độ hài lòng CSAT định kỳ (AM-M12) sau mỗi đợt quyết toán hoặc tối thiểu mỗi quý 01 lần.
        - Thực hiện họp rà soát định kỳ (Job AM-27, chỉ số AM-M19) theo lịch đã đăng ký (hằng tháng hoặc hằng quý).
        - Ghi nhận biên bản cuộc họp, gửi thư xác nhận lại toàn bộ nội dung đã thống nhất cho khách hàng trong cùng ngày làm việc.

[ ]  6. XỬ LÝ NGUY CƠ RỜI BỎ VÀ THỦ TỤC THANH LÝ (KHI PHÁT SINH)
        - Khi tài khoản chuyển sang trạng thái "Nguy cơ rời bỏ" (Churn Risk):
          AM chủ trì cuộc họp khẩn cấp nội bộ cùng TL nghiệp vụ và COO để thống nhất giải pháp khắc phục trong 48 giờ.
        - Trường hợp khách hàng hết hạn hợp đồng: thực hiện quy trình nhắc gia hạn theo 05 mốc của DV-02.
        - Trường hợp chấm dứt dịch vụ: hoàn tất bộ hồ sơ bàn giao, đối soát dứt điểm công nợ (KS-AM-06),
          lập Biên bản thanh lý hợp đồng (AM-21), thu hồi quyền truy cập và chuyển trạng thái "Đã thanh lý".
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ quản trị khách hàng và CRM được lưu trữ tập trung trên hệ thống quản lý dữ liệu dùng chung của oBacker. Toàn bộ thông tin thay đổi về trạng thái hợp đồng, gói dịch vụ và người phụ trách phải được cập nhật ngay trong ngày làm việc phát sinh biến động.

Dữ liệu sổ được `AM` và `KTT` nội bộ kết xuất để phục vụ:
1. Báo cáo doanh thu định kỳ hằng tháng (`MRR`) và tỷ lệ thu hồi công nợ gửi `TP Thương mại` và `CEO` trước ngày 05 hằng tháng.
2. Báo cáo biến động sức khỏe tài khoản, danh sách tài khoản `Churn Risk` và tỷ lệ duy trì khách hàng (`AM-M13`) gửi `COO` và `CEO` trong phiên giao ban đầu tháng.

## KÝ XÁC NHẬN

| Chuyên viên Quản lý khách hàng (`AM`) | Kế toán trưởng nội bộ (`KTT`) | Trưởng phòng Thương mại |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm oBacker nắm giữ đầy đủ, tập trung và thống nhất thông tin của toàn bộ khách hàng; ngăn ngừa tình trạng phân tán dữ liệu hoặc đứt gãy thông tin giữa khâu bán hàng và khâu vận hành nghiệp vụ; kiểm soát chặt chẽ doanh thu định kỳ hằng tháng (MRR) và công nợ dịch vụ; đồng thời chủ động phát hiện sớm nguy cơ rời bỏ của khách hàng để có biện pháp can thiệp, bảo đảm mục tiêu tỷ lệ giữ chân khách hàng đạt từ 90% trở lên hằng năm.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Quy trình quản lý khách hàng | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] | Quy định toàn trình 08 giai đoạn quản lý khách hàng từ Lead đến Thanh lý |
| Bảng giá và gói dịch vụ | [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] đến [[07_Bang_gia_Dich_vu_o_nuoc_ngoai\|OBK-DM-07]] | Danh mục sản phẩm, gói dịch vụ và đơn giá chuẩn của oBacker |
| Điều khoản dịch vụ chung | [[00_TnC_Master_VI\|OBK-TnC-00]] | Điều kiện cung cấp dịch vụ, chu kỳ thanh toán và quy định tạm dừng dịch vụ |
| Chuẩn vận hành dịch vụ | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] | Tiêu chuẩn chất lượng hai lớp kiểm soát, mốc làm trước và quản lý sai sót |
| Theo dõi gia hạn dịch vụ | [[DV-02_Bang_theo_doi_chu_ky_so_va_dich_vu_khach_hang\|DV-02]] | Quy trình 05 mốc nhắc gia hạn và xử lý dịch vụ có thời hạn |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.1.0.0 | Ban hành bản đầu. |
