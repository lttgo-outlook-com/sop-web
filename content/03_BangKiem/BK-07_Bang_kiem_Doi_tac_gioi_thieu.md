---
title: "BẢNG KIỂM ĐỐI TÁC GIỚI THIỆU"
code: "BK-07"
type: "sop"
folder: "03_BangKiem"
level: "Bảng kiểm"
version: "V1.1.0"
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
  - BK-07
tags:
  - loai/sop
---

# BẢNG KIỂM ĐỐI TÁC GIỚI THIỆU

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BK-07 |
| Cấp tài liệu | Bảng kiểm |
| Phiên bản | V1.1.0, đang áp dụng |
| Phát hành | R.26.10.08.1 |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] Quy tắc sổ cái |


---

## 1. PHẠM VI

Bảng kiểm này áp dụng cho các Job PM-01 đến PM-11 của Bộ phận Đối tác và Chương trình. Mỗi bước ghi sự kiện vào sổ cái [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]]. Điều kiện thương mại chuẩn nằm tại [[PL_PM_Dieu_kien_thuong_mai_chuan|OBK-SOP-PM-PL1]]. Các trường dữ liệu của báo cáo hoa hồng tháng lấy từ phiếu [[HH-02_Phieu_bao_cao_hoa_hong_thang|HH-02]], các trường của thông báo hoàn trả hoa hồng lấy từ phiếu [[HH-03_Phieu_thong_bao_hoan_tra_hoa_hong|HH-03]], và phép tính hoa hồng đối soát theo bảng [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission|UE-01]].

---

## 2. DANH MỤC JOB


%%JOBTABLE:PM%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn bên ngoài | Căn cứ | Soát bắt buộc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PM-01 | Thẩm định hồ sơ đối tác và trình TGĐ ký | Đối tác đề nghị hợp tác | Thông tin đối tác theo phần đầu bản mẫu đúng loại đối tác;<br>cam kết của đối tác theo KS-PM-05 và KS-PM-06 | Hồ sơ đối tác gồm loại đối tác, kết quả rà soát giao dịch với người có liên quan tại `NB-29`, cam kết theo Điều 7.1 bản mẫu;<br>hợp đồng `TGĐ` đã ký theo bản mẫu đúng loại đối tác;<br>ngày hết hạn hợp đồng ghi vào sổ đăng ký giới thiệu | Hợp đồng có hiệu lực từ ngày ký, thời hạn 12 tháng | Ngày hết hạn hợp đồng | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 1, 2, 3, 23;<br>[[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] hàng "Ký hợp đồng giới thiệu khách hàng với đối tác" | Không |
| PM-02 | Tiếp nhận đăng ký khách được giới thiệu | Đối tác gửi thư điện tử đăng ký tới Kênh Đăng Ký contact@obacker.com;<br>hoặc `AM-01` chuyển thông tin lead từ kênh khác trùng một khách trong sổ đăng ký giới thiệu | Thư điện tử đăng ký có đủ năm nội dung tại Điều 3.2 bản mẫu, gồm bằng chứng đồng ý của người liên hệ | Bản ghi trong sổ đăng ký giới thiệu, có mã đăng ký và thời điểm Kênh Đăng Ký nhận thư;<br>thông tin trùng từ `AM-01` ghi vào bản ghi đã có | Ngày Được Giới Thiệu là ngày Kênh Đăng Ký nhận thư có đủ năm nội dung. Thời hạn 03 ngày làm việc của PM-03 bắt đầu từ Ngày Được Giới Thiệu | Không có | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 5, 6, 7, 28 | Không |
| PM-03 | Tra trùng và xác nhận hoặc từ chối đăng ký | Bản ghi PM-02 | Bản ghi PM-02;<br>ghi nhận trên hệ thống về khách trong 24 tháng trước Ngày Được Giới Thiệu, gồm thư trao đổi, hợp đồng, hóa đơn, bản ghi Lead;<br>tra theo pháp nhân khách, người đại diện theo pháp luật, công ty mẹ, công ty con và công ty con khác của cùng công ty mẹ | Thư điện tử xác nhận;<br>hoặc thư điện tử từ chối nêu lý do, kèm bằng chứng có ghi ngày cho lý do đó;<br>hoặc, sau Ghi Nhận Mặc Nhiên, thư điện tử chứng minh tiếp xúc trước kèm bằng chứng có ghi ngày;<br>kết quả tra trùng ghi vào sổ đăng ký giới thiệu | 03 ngày làm việc kể từ Ngày Được Giới Thiệu.<br>Thư chứng minh tiếp xúc trước sau Ghi Nhận Mặc Nhiên: 30 ngày kể từ ngày Ghi Nhận Mặc Nhiên | Hết 03 ngày làm việc mà oBacker chưa phản hồi thì khách được Ghi Nhận Mặc Nhiên kể từ Ngày Được Giới Thiệu | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 7, 8, 9, 10 | Không |
| PM-04 | Trình CEO quyết nguồn khi nhiều nguồn | PM-03 phát hiện nhiều nguồn đăng ký cùng một khách | Các bản ghi trùng khách, có thời điểm Kênh Đăng Ký nhận thư đủ nội dung | Quyết định nguồn của `CEO`: nguồn có đăng ký hợp lệ sớm nhất theo thứ tự thời điểm Kênh Đăng Ký nhận;<br>văn bản nêu lý do gửi đối tác | `CEO` quyết và văn bản nêu lý do gửi đối tác trong 10 ngày làm việc kể từ ngày oBacker phát hiện trùng nguồn | Đối tác không đồng ý thì Các Bên áp Điều 15 bản mẫu: thương lượng trong 10 ngày làm việc, sau đó mỗi Bên có quyền khởi kiện | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 11;<br>[[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] hàng "Quyết nguồn hưởng hoa hồng khi nhiều nguồn giới thiệu cùng một khách" | Không |
| PM-05 | Bàn giao lead cho AM | PM-03 xác nhận đăng ký, hoặc khách được Ghi Nhận Mặc Nhiên | Thư xác nhận hoặc bản ghi Ghi Nhận Mặc Nhiên;<br>mã đăng ký giới thiệu | Lead ở Job `AM-01`, mang mã đăng ký giới thiệu | Hợp đồng không có mốc | Không có | Job `AM-01` tại [[BK-02_Bang_kiem_AM\|BK-02]] | Không |
| PM-06 | Theo dõi chuyển đổi và mở thời gian hưởng hoa hồng | Đầu ra của `AM-05`: hợp đồng dịch vụ đã ký và xác nhận thanh toán;<br>hoặc hết 60 ngày kể từ Ngày Được Giới Thiệu | Hợp Đồng Dịch Vụ Đầu Tiên;<br>xác nhận khoản thanh toán đầu tiên đã về tài khoản oBacker;<br>danh sách dịch vụ | Ngày ký và ngày thanh toán lần đầu;<br>danh sách dịch vụ ghi trong Hợp Đồng Dịch Vụ Đầu Tiên;<br>ngày kết thúc thời gian hưởng hoa hồng;<br>với dịch vụ thành lập doanh nghiệp: người sáng lập và doanh nghiệp mới ghi chung một bản ghi;<br>hoặc bản ghi hết hạn 60 ngày mà khách chưa chuyển đổi | Ký và thanh toán lần đầu trong 60 ngày kể từ Ngày Được Giới Thiệu;<br>thời gian hưởng hoa hồng 12 tháng kể từ ngày thanh toán lần đầu | Ngày kết thúc thời gian hưởng hoa hồng | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 10, 12, 13, 17 | Không |
| PM-07 | Lập và gửi báo cáo hoa hồng tháng | Đầu ra của `NB-49` | Bảng doanh thu tính hoa hồng theo khách của tháng, từ `NB-49`;<br>sổ đăng ký giới thiệu | Báo cáo hoa hồng theo phiếu [[HH-02_Phieu_bao_cao_hoa_hong_thang\|HH-02]] đã gửi đối tác, có thời điểm gửi | Từ ngày 05 đến ngày 10 của tháng liền sau tháng phát sinh doanh thu | Ngày 10 của tháng liền sau tháng phát sinh doanh thu | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 14, 15, 16, 17, 18;<br>[[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]] | Không |
| PM-08 | Xử lý phản hồi của đối tác về báo cáo | Đối tác phản hồi, yêu cầu làm rõ, hoặc yêu cầu xác nhận số liệu một dòng;<br>hoặc hết 07 ngày làm việc kể từ ngày đối tác nhận báo cáo | Báo cáo đã gửi;<br>phản hồi của đối tác | Thông tin làm rõ, hoặc văn bản xác nhận số liệu một dòng, gửi đối tác;<br>ngày báo cáo được chấp thuận;<br>báo cáo đã chấp thuận cùng hóa đơn hoặc chứng từ của đối tác chuyển sang `NB-03` hoặc `NB-07` | 07 ngày làm việc kể từ ngày đối tác nhận báo cáo, tính lại từ ngày oBacker cung cấp thông tin làm rõ.<br>Việc chi tại `NB-03` hoặc `NB-07` trong 05 ngày làm việc theo mốc tại [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 20 | Hạn chi 05 ngày làm việc | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 19, 20, 21 | Không |
| PM-09 | Thông báo hoàn trả hoa hồng | Thông báo từ `NB-51` về khoản oBacker hoàn tiền cho khách có trong sổ đăng ký giới thiệu | Chứng từ hoàn tiền;<br>phần Doanh Thu oBacker hoàn cho khách;<br>kỳ và ngày trả số hoa hồng tương ứng | Thông báo theo phiếu [[HH-03_Phieu_thong_bao_hoan_tra_hoa_hong\|HH-03]] gửi đối tác kèm chứng từ hoàn tiền, ghi cách xử lý oBacker chọn: nhận tiền hoàn trả hoặc khấu trừ vào hoa hồng các kỳ sau;<br>thông báo đã gửi chuyển sang `NB-50` | 15 ngày kể từ ngày oBacker hoàn tiền cho khách. Thông báo gửi sau 15 ngày vẫn có hiệu lực khi khoản hoàn tiền phát sinh trong 12 tháng kể từ ngày oBacker trả số hoa hồng tương ứng | Đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 22 | Không |
| PM-10 | Gia hạn hoặc trình CEO chấm dứt hợp đồng với đối tác | 30 ngày trước ngày hết hạn hợp đồng;<br>hoặc đối tác vi phạm;<br>hoặc `CEO` quyết đơn phương chấm dứt;<br>hoặc đối tác gửi văn bản đơn phương chấm dứt | Ngày hết hạn trong sổ đăng ký giới thiệu;<br>bằng chứng vi phạm, nếu có | Văn bản gia hạn do `TGĐ` ký;<br>hoặc văn bản chấm dứt theo quyết định của `CEO`;<br>danh sách khách còn trong thời gian hưởng hoa hồng và khách có Ngày Được Giới Thiệu trước ngày chấm dứt, theo hệ quả chấm dứt tại Điều 11.5 bản mẫu | Thương lượng gia hạn trước ngày hết hạn ít nhất 30 ngày.<br>Đơn phương chấm dứt: văn bản gửi bên kia trước ít nhất 30 ngày.<br>Vi phạm Điều 7, thông tin sai sự thật, vi phạm Điều 2.4: oBacker có quyền chấm dứt ngay.<br>Vi phạm Điều 12, Điều 13, chậm trả tiền trên 30 ngày: 15 ngày khắc phục kể từ ngày nhận thông báo | Ngày hết hạn hợp đồng hoặc ngày chấm dứt ghi trong văn bản | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 2, 4, 23, 26, 27;<br>[[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] hàng "Chấm dứt hợp đồng giới thiệu khách hàng với đối tác" | Không |
| PM-11 | Lưu trữ và xóa dữ liệu sau khi kết thúc | Hết thời gian hưởng hoa hồng của khách cuối cùng của đối tác | Sổ đăng ký giới thiệu của đối tác;<br>danh sách chứng từ phải lưu | Biên bản xóa, hủy dữ liệu không còn cần cho đối soát, trả hoa hồng sau chấm dứt, lưu trữ chứng từ kế toán và giải quyết tranh chấp | Theo Điều 12.6 bản mẫu | Không có | [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] dòng 28 | Không |

%%/JOBTABLE:PM%%

---

## 3. BẢNG KIỂM THEO JOB

### PM-01. Thẩm định hồ sơ đối tác và trình TGĐ ký

1. Đối tác đề nghị hợp tác; `PM` nhận thông tin đối tác theo bản mẫu đúng loại đối tác và cam kết của đối tác; ghi sự kiện Nhận vào sổ cái.
2. `PM` chuyển danh sách đối tác mới sang `NB-29` để rà soát giao dịch với người có liên quan; `KTT` nội bộ lập bảng rà soát theo `NB-29`; ghi sự kiện Phát sinh việc, sự kiện Chờ và sự kiện Hết chờ vào sổ cái.
3. `PM` lập hồ sơ đối tác gồm loại đối tác, kết quả rà soát tại `NB-29` và cam kết theo Điều 7.1 bản mẫu.
4. `PM` trình `TGĐ` ký hợp đồng theo bản mẫu đúng loại đối tác; ghi sự kiện Chuyển vào sổ cái.
5. `TGĐ` ký hợp đồng; ghi sự kiện Duyệt vào sổ cái.
6. `PM` ghi ngày hết hạn hợp đồng vào sổ đăng ký giới thiệu; ghi sự kiện Xong vào sổ cái.

Điểm kiểm soát: trước khi trình ký, `PM` kiểm bốn điểm; không đạt thì dừng trình ký. `KS-PM-04`: đã có kết quả rà soát giao dịch với người có liên quan tại `NB-29`; đối tác thuộc diện người có liên quan thì đi theo Điều 12a của OBK-QCTC-01. `KS-PM-05`: đối tác và mọi người nhận một phần hoa hồng nằm ngoài nhóm người lao động, người quản lý hoặc người làm kế toán của khách được giới thiệu; không đạt thì báo `CEO` trong ngày. `KS-PM-06`: đối tác nằm ngoài nhóm người lao động oBacker và người thân của người lao động oBacker. `KS-PM-07`: hợp đồng dùng đúng bản mẫu theo loại đối tác.

Thời hạn: hợp đồng có hiệu lực từ ngày ký, thời hạn 12 tháng; thời hạn bên ngoài là ngày hết hạn hợp đồng.

### PM-02. Tiếp nhận đăng ký khách được giới thiệu

1. Đối tác gửi thư điện tử đăng ký tới Kênh Đăng Ký, hoặc `AM-01` chuyển thông tin lead trùng một khách trong sổ đăng ký giới thiệu; `PM` nhận; ghi sự kiện Nhận vào sổ cái.
2. `PM` kiểm thư có đủ năm nội dung theo Điều 3.2 bản mẫu, gồm bằng chứng đồng ý của người liên hệ. Thư thiếu nội dung thì bản ghi giữ trạng thái chờ đủ nội dung; ghi sự kiện Chờ vào sổ cái.
3. `PM` ghi bản ghi vào sổ đăng ký giới thiệu: mã đăng ký, thời điểm nhận, kênh nhận, đối tác, tên khách tiềm năng, mã số thuế nếu có, người liên hệ, bằng chứng đồng ý; ghi sự kiện Tạo vào sổ cái.
4. `PM` ghi Ngày Được Giới Thiệu, là ngày Kênh Đăng Ký nhận thư có đủ năm nội dung.
5. Thông tin trùng từ `AM-01`: `PM` ghi vào bản ghi đã có.

Điểm kiểm soát: `KS-PM-01`: đăng ký gửi bằng thư điện tử tới Kênh Đăng Ký, là kênh đăng ký duy nhất; `PM` kiểm trước khi ghi sổ; không đạt thì không ghi sổ, và thông tin gửi qua kênh khác, kể cả gửi tới cá nhân người lao động oBacker, không làm chạy thời hạn 03 ngày làm việc.

Thời hạn: Ngày Được Giới Thiệu là mốc bắt đầu của thời hạn 03 ngày làm việc tại PM-03.

### PM-03. Tra trùng và xác nhận hoặc từ chối đăng ký

1. `PM` nhận bản ghi của PM-02; ghi sự kiện Nhận vào sổ cái.
2. `PM` tra ghi nhận về khách trong 24 tháng trước Ngày Được Giới Thiệu (thư trao đổi, hợp đồng, hóa đơn, bản ghi Lead), theo pháp nhân khách, người đại diện theo pháp luật, công ty mẹ, công ty con và công ty con khác của công ty mẹ.
3. `PM` gửi đối tác thư điện tử xác nhận, hoặc thư từ chối nêu lý do kèm bằng chứng có ghi ngày; ghi sự kiện Gửi khách vào sổ cái, người nhận là đối tác.
4. Hết 03 ngày làm việc mà oBacker chưa phản hồi thì khách được Ghi Nhận Mặc Nhiên kể từ Ngày Được Giới Thiệu; `PM` gửi thư chứng minh tiếp xúc trước kèm bằng chứng có ghi ngày trong 30 ngày kể từ ngày Ghi Nhận Mặc Nhiên; ghi sự kiện Gửi khách vào sổ cái.
5. `PM` ghi kết quả tra trùng, ngày xác nhận hoặc từ chối và lý do từ chối vào sổ đăng ký giới thiệu.
6. Nhiều nguồn đăng ký cùng một khách: `PM` chuyển sang PM-04; ghi sự kiện Phát sinh việc vào sổ cái.

Điểm kiểm soát: `KS-PM-02`: mỗi đăng ký có bằng chứng đồng ý của người liên hệ cho việc đối tác chuyển giao dữ liệu cá nhân cho oBacker; `PM` kiểm trước khi xác nhận; không đạt thì bản ghi giữ trạng thái chờ đủ nội dung.

Điểm kiểm soát: `KS-PM-03`: thư nêu lý do tiếp xúc trước kèm bằng chứng có ngày thuộc 24 tháng liền trước Ngày Được Giới Thiệu; `PM` kiểm trước khi gửi thư; không đạt thì không dùng lý do đó.

Thời hạn: 03 ngày làm việc kể từ Ngày Được Giới Thiệu; thư chứng minh tiếp xúc trước trong 30 ngày kể từ ngày Ghi Nhận Mặc Nhiên.

### PM-04. Trình CEO quyết nguồn khi nhiều nguồn

1. `PM` nhận các bản ghi trùng khách cùng thời điểm Kênh Đăng Ký nhận thư đủ nội dung; ghi sự kiện Chuyển vào sổ cái.
2. `CEO` quyết nguồn: nguồn có đăng ký hợp lệ sớm nhất theo thứ tự thời điểm Kênh Đăng Ký nhận; ghi sự kiện Quyết định vào sổ cái.
3. `PM` gửi đối tác văn bản nêu lý do; ghi sự kiện Gửi khách vào sổ cái, người nhận là đối tác.
4. Đối tác không đồng ý: hai bên áp Điều 15 bản mẫu, thương lượng trong 10 ngày làm việc, sau đó mỗi bên có quyền khởi kiện.
5. `PM` ghi quyết định nguồn vào sổ đăng ký giới thiệu.

Thời hạn: `CEO` quyết và văn bản nêu lý do gửi đối tác trong 10 ngày làm việc kể từ ngày oBacker phát hiện trùng nguồn.

### PM-05. Bàn giao lead cho AM

1. `PM` nhận thư xác nhận của PM-03 hoặc bản ghi Ghi Nhận Mặc Nhiên, cùng mã đăng ký giới thiệu.
2. `PM` bàn giao lead cho Job `AM-01`, mang mã đăng ký giới thiệu; ghi sự kiện Chuyển vào sổ cái.

Thời hạn: hợp đồng không có mốc cho Job này.

### PM-06. Theo dõi chuyển đổi và mở thời gian hưởng hoa hồng

1. `PM` nhận đầu ra của `AM-05`: hợp đồng dịch vụ đã ký và xác nhận thanh toán; ghi sự kiện Nhận vào sổ cái.
2. `PM` ghi vào sổ đăng ký giới thiệu: ngày ký, ngày thanh toán lần đầu, danh sách dịch vụ ghi trong Hợp Đồng Dịch Vụ Đầu Tiên.
3. `PM` xác định ngày kết thúc thời gian hưởng hoa hồng: 12 tháng kể từ ngày thanh toán lần đầu.
4. Dịch vụ thành lập doanh nghiệp: người sáng lập và doanh nghiệp mới ghi chung một bản ghi; ngày thanh toán lần đầu là ngày khoản của người sáng lập hoặc của doanh nghiệp mới về trước.
5. Khi đã ghi đủ các nội dung tại bước 2 đến 4, `PM` ghi sự kiện Xong vào sổ cái.
6. Hết 60 ngày kể từ Ngày Được Giới Thiệu mà khách chưa chuyển đổi: `PM` ghi hết hạn 60 ngày vào bản ghi; ghi sự kiện Xong vào sổ cái.

Thời hạn: ký và thanh toán lần đầu trong 60 ngày kể từ Ngày Được Giới Thiệu; thời gian hưởng hoa hồng 12 tháng kể từ ngày thanh toán lần đầu; thời hạn bên ngoài là ngày kết thúc thời gian hưởng hoa hồng.

### PM-07. Lập và gửi báo cáo hoa hồng tháng

1. `PM` nhận bảng doanh thu tính hoa hồng theo khách của tháng từ `NB-49`; đối chiếu số thực thu với sổ chi tiết doanh thu và sổ chi tiết công nợ phải thu trên sổ kế toán; ghi sự kiện Nhận vào sổ cái.
2. `PM` tính số hoa hồng bằng công cụ và đối soát theo bảng [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission|UE-01]].
3. `PM` đối chiếu từng khách với sổ đăng ký giới thiệu: khách còn trong thời gian hưởng hoa hồng; dịch vụ thuộc danh sách dịch vụ của Hợp Đồng Dịch Vụ Đầu Tiên hoặc là phần gia hạn của chính dịch vụ đó. Dòng ngoài danh sách: `PM` trả lại `NB-49` kèm số dòng; ghi sự kiện Chuyển vào sổ cái.
4. `PM` lập báo cáo theo phiếu [[HH-02_Phieu_bao_cao_hoa_hong_thang|HH-02]] với các trường: Khách Hàng Hợp Lệ, mã đăng ký, số hóa đơn, ngày thu, số tiền thực thu, số hoa hồng, tổng, kỳ báo cáo; doanh thu tính hoa hồng không ghi vào báo cáo.
5. `PM` gửi báo cáo cho đối tác bằng thư điện tử từ ngày 05 đến ngày 10 của tháng liền sau; ghi sự kiện Gửi khách vào sổ cái, người nhận là đối tác.
6. `PM` ghi ngày đối tác nhận báo cáo và hạn phản hồi 07 ngày làm việc; ghi sự kiện Chờ vào sổ cái.

Điểm kiểm soát: `KS-PM-08`: số hóa đơn, số tiền thực thu và ngày thu chỉ ghi cho khách đã đồng ý cho oBacker gửi thông tin giao dịch cho bên đã giới thiệu; `PM` kiểm trước khi gửi; khách chưa đồng ý thì dòng chỉ ghi mã đăng ký và số hoa hồng tương ứng.

Thời hạn: từ ngày 05 đến ngày 10 của tháng liền sau tháng phát sinh doanh thu; thời hạn bên ngoài là ngày 10 của tháng đó.

### PM-08. Xử lý phản hồi của đối tác về báo cáo

1. Đối tác phản hồi, yêu cầu làm rõ hoặc yêu cầu xác nhận số liệu một dòng: `PM` nhận; ghi sự kiện Hết chờ vào sổ cái.
2. `PM` gửi đối tác thông tin làm rõ hoặc văn bản xác nhận số liệu một dòng; ghi sự kiện Gửi khách vào sổ cái, người nhận là đối tác.
3. Hết 07 ngày làm việc mà đối tác chưa phản hồi: báo cáo được xác định là chính xác và được chấp thuận, trừ trường hợp có sai sót số liệu rõ ràng hoặc gian lận; `PM` ghi ngày báo cáo được chấp thuận; ghi sự kiện Quyết định vào sổ cái.
4. `PM` chuyển báo cáo đã chấp thuận cùng hóa đơn hoặc chứng từ của đối tác sang `NB-03` hoặc `NB-07`; ghi sự kiện Chuyển vào sổ cái.
5. Việc chi do Job `NB-03` hoặc `NB-07` thực hiện trong 05 ngày làm việc. Đối tác là doanh nghiệp: tính từ ngày muộn hơn giữa ngày báo cáo được chấp thuận và ngày oBacker nhận hóa đơn hợp lệ. Đối tác là cá nhân: tính từ ngày báo cáo được chấp thuận, hoặc từ ngày muộn hơn khi đối tác phải lập hóa đơn theo Điều 6.5.4 bản mẫu.
6. `PM` ghi sự kiện Xong vào sổ cái sau khi đã chuyển báo cáo sang `NB-03` hoặc `NB-07`.

Thời hạn: 07 ngày làm việc kể từ ngày đối tác nhận báo cáo, tính lại từ ngày oBacker cung cấp thông tin làm rõ; hạn chi 05 ngày làm việc theo [[PL_PM_Dieu_kien_thuong_mai_chuan|OBK-SOP-PM-PL1]] dòng 20.

### PM-09. Thông báo hoàn trả hoa hồng

1. `PM` nhận thông báo từ `NB-51` về khoản oBacker hoàn tiền cho khách có trong sổ đăng ký giới thiệu; ghi sự kiện Nhận vào sổ cái.
2. Khách hủy dịch vụ mà oBacker giữ nguyên số tiền đã thu: đối tác giữ nguyên hoa hồng tương ứng; `PM` ghi sổ và dừng; ghi sự kiện Xong vào sổ cái.
3. `PM` ghi ngày oBacker hoàn tiền, số chứng từ hoàn tiền và phần Doanh Thu hoàn cho khách theo chứng từ từ `NB-51`; xác định kỳ hoa hồng tương ứng và ngày oBacker trả số hoa hồng đó.
4. Ngày hoàn tiền ngoài 12 tháng kể từ ngày oBacker trả số hoa hồng: nghĩa vụ hoàn trả không áp dụng; `PM` ghi sổ và dừng; ghi sự kiện Xong vào sổ cái.
5. `PM` ghi số hoa hồng phải hoàn trả, bằng số hoa hồng đã trả tương ứng với phần Doanh Thu hoàn cho khách, tính bằng công cụ; ghi cách xử lý oBacker chọn: đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo, hoặc khấu trừ vào hoa hồng các kỳ thanh toán sau.
6. `PM` gửi đối tác thông báo theo phiếu [[HH-03_Phieu_thong_bao_hoan_tra_hoa_hong|HH-03]] kèm chứng từ hoàn tiền; ghi sự kiện Gửi khách vào sổ cái, người nhận là đối tác. Các trường gồm các mục đã ghi ở bước 3 và bước 5, cùng chứng từ kèm theo.
7. `PM` chuyển thông báo đã gửi sang `NB-50`; ghi sự kiện Chuyển, rồi sự kiện Xong vào sổ cái.

Thời hạn: 15 ngày kể từ ngày oBacker hoàn tiền cho khách, tính theo ngày lịch; thông báo gửi sau 15 ngày vẫn có hiệu lực khi khoản hoàn tiền thuộc 12 tháng nêu ở bước 4; đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo.

### PM-10. Gia hạn hoặc trình CEO chấm dứt hợp đồng với đối tác

1. 30 ngày trước ngày hết hạn hợp đồng, hoặc khi đối tác vi phạm, hoặc khi một bên quyết đơn phương chấm dứt: `PM` mở Job; ghi sự kiện Nhận vào sổ cái.
2. Gia hạn: `PM` thương lượng trước ngày hết hạn ít nhất 30 ngày; `TGĐ` ký văn bản gia hạn; ghi sự kiện Duyệt vào sổ cái. Điều kiện khác mẫu có cam kết ràng buộc thì hỏi Legal R&D.
3. Chấm dứt: `CEO` quyết; ghi sự kiện Quyết định vào sổ cái. `PM` gửi văn bản chấm dứt cho bên kia trước ít nhất 30 ngày; ghi sự kiện Gửi khách vào sổ cái, người nhận là đối tác.
4. Vi phạm Điều 7, thông tin sai sự thật hoặc vi phạm Điều 2.4: oBacker có quyền chấm dứt ngay. Vi phạm Điều 12, Điều 13 hoặc chậm trả tiền trên 30 ngày: đối tác có 15 ngày khắc phục.
5. `PM` lập danh sách khách còn trong thời gian hưởng hoa hồng và khách có Ngày Được Giới Thiệu trước ngày chấm dứt, theo Điều 11.5 bản mẫu.

Điểm kiểm soát: `KS-PM-07`: văn bản trình ký dùng đúng bản mẫu theo [[PL_PM_Dieu_kien_thuong_mai_chuan|OBK-SOP-PM-PL1]]; `PM` kiểm trước khi trình ký; không đạt thì dừng trình ký, và điều khoản khác mẫu đi theo mục 1.5 của OBK-SOP-PM.

Thời hạn: thương lượng gia hạn trước ngày hết hạn ít nhất 30 ngày; đơn phương chấm dứt bằng văn bản trước ít nhất 30 ngày; thời hạn bên ngoài là ngày hết hạn hợp đồng hoặc ngày chấm dứt ghi trong văn bản.

### PM-11. Lưu trữ và xóa dữ liệu sau khi kết thúc

1. Hết thời gian hưởng hoa hồng của khách cuối cùng của đối tác: `PM` nhận sổ đăng ký giới thiệu của đối tác và danh sách chứng từ phải lưu; ghi sự kiện Nhận vào sổ cái.
2. `PM` xác định dữ liệu không còn cần cho đối soát, trả hoa hồng sau chấm dứt, lưu trữ chứng từ kế toán và giải quyết tranh chấp.
3. `PM` xóa, hủy dữ liệu đó và lập biên bản xóa, hủy dữ liệu; ghi sự kiện Xong vào sổ cái.

Thời hạn: theo Điều 12.6 bản mẫu.

---

## 4. LỖI THƯỜNG GẶP

| Lỗi | Dấu hiệu | Cách xử lý |
| --- | --- | --- |
| Khách được Ghi Nhận Mặc Nhiên sau 03 ngày làm việc | Thư đăng ký đủ nội dung đã đến Kênh Đăng Ký nhưng sổ chưa có bản ghi, hoặc thời hạn được đếm từ thời điểm ghi sổ | `PM` đếm thời hạn từ Ngày Được Giới Thiệu; quá 30 ngày kể từ ngày Ghi Nhận Mặc Nhiên thì quyền chứng minh tiếp xúc trước hết |
| Ghi sổ đăng ký nhận qua kênh khác Kênh Đăng Ký | Thông tin gửi tới cá nhân người lao động oBacker | Không ghi sổ và không chạy thời hạn 03 ngày làm việc, theo `KS-PM-01` |
| Xác lập Ngày Được Giới Thiệu khi đăng ký thiếu bằng chứng đồng ý | Thư đăng ký không kèm bằng chứng đồng ý của người liên hệ cho việc chuyển giao dữ liệu cá nhân | Bản ghi giữ trạng thái chờ đủ nội dung theo `KS-PM-02` |
| Chi hoa hồng cho người có chức vụ, quyền hạn tại khách được giới thiệu | Đối tác hoặc người nhận một phần hoa hồng thuộc nhóm người lao động, người quản lý hoặc người làm kế toán của khách | Dừng trình ký tại PM-01 và báo `CEO` trong ngày theo `KS-PM-05` |
| Tính thời gian hưởng hoa hồng từ ngày ký hợp đồng dịch vụ | Ngày kết thúc trong sổ lệch với ngày khoản thanh toán đầu tiên về tài khoản oBacker | Tính 12 tháng từ ngày thanh toán lần đầu; dịch vụ thành lập doanh nghiệp lấy ngày khoản của người sáng lập hoặc của doanh nghiệp mới về trước |
| Tính hoa hồng cho dịch vụ bán thêm | Báo cáo có dòng dịch vụ ngoài danh sách dịch vụ của Hợp Đồng Dịch Vụ Đầu Tiên, thường sinh từ `AM-29` | `PM` đối chiếu từng dòng với trường Danh sách dịch vụ trước khi gửi; phần gia hạn của chính dịch vụ ghi trong Hợp Đồng Dịch Vụ Đầu Tiên vẫn tính hoa hồng |
| Ghi thông tin giao dịch của khách chưa đồng ý vào báo cáo | Dòng của khách chưa đồng ý có số hóa đơn, số tiền thực thu hoặc ngày thu | Dòng chỉ ghi mã đăng ký và số hoa hồng tương ứng, theo `KS-PM-08` |
| Thông báo hoàn trả hoa hồng khi khách hủy mà oBacker giữ nguyên số tiền | Thông báo từ `NB-51` về việc hủy dịch vụ, chứng từ không có khoản chi hoàn | Nghĩa vụ hoàn trả chỉ phát sinh khi oBacker hoàn tiền cho khách; đối tác giữ nguyên hoa hồng tương ứng |

---

## NHẬT KÝ SỬA

| Ngày | Phiên bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | V1.1.0 | PM-01 khớp NB-29, thêm thời hạn PM-05, thêm sự kiện Xong ở PM-06 và PM-08. |
