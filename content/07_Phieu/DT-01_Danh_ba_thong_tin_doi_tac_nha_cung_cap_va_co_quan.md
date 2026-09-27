---
title: "PHIẾU DT-01. DANH BẠ THÔNG TIN ĐỐI TÁC, NHÀ CUNG CẤP VÀ CƠ QUAN NHÀ NƯỚC"
code: "DT-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
law_as_of: ""
next_review: ""
distribution: "Nội bộ oBacker"
previous_version: "R.1.0.0"
aliases:
  - DT-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU DT-01. DANH BẠ THÔNG TIN ĐỐI TÁC, NHÀ CUNG CẤP VÀ CƠ QUAN NHÀ NƯỚC

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | DT-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | DT-01 |
| **Màu** | XANH, danh bạ dữ liệu đối tác, nhà cung cấp và cơ quan |
| **Ai dùng** | `KTV`, `AD-KT`, `AM`, `TL`, `KTT`, `COO`, `CEO` |
| **Sinh từ** | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 24, Điều 34, Điều 35;<br>[[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]];<br>[[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]];<br>[[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Danh bạ thông tin đối tác, nhà cung cấp và cơ quan Nhà nước là cơ sở dữ liệu gốc tập trung của oBacker, dùng để quản lý thông tin liên hệ, căn cứ pháp lý, thông tin tài khoản ngân hàng thụ hưởng, chính sách thương mại và đầu mối thụ lý của các thực thể bên ngoài có quan hệ giao dịch hoặc phối hợp công việc với oBacker.

Danh bạ được `KTV` và `AD-KT` mở theo dõi tập trung, cập nhật khi:
1. Phát sinh đối tác, nhà cung cấp dịch vụ hoặc kênh giới thiệu khách hàng mới được phê duyệt theo quy trình mua sắm hoặc hợp đồng hợp tác;
2. Cơ quan Nhà nước hoặc đối tác có văn bản thông báo thay đổi thông tin pháp lý, mã số thuế, địa chỉ trụ sở, đầu mối thụ lý hoặc số tài khoản ngân hàng thụ hưởng;
3. Thực hiện rà soát định kỳ mỗi 06 tháng (trước ngày 15 tháng 07 và ngày 15 tháng 01 hằng năm) để chuẩn hóa dữ liệu và đối soát trạng thái hoạt động của đối tác.

## CẤU TRÚC 4 PHÂN HỆ DỮ LIỆU GỐC

Danh bạ phân định thành 04 phân hệ dữ liệu độc lập:

### Phân hệ 1. Nhà cung ứng công nghệ và dịch vụ nội bộ

Phân hệ này theo dõi các đơn vị cung cấp hạ tầng kỹ thuật, thiết bị, phần mềm và dịch vụ hỗ trợ phục vụ hoạt động nội bộ và cung ứng dịch vụ cho khách hàng của oBacker.

| STT | Tên nhà cung ứng | Mã số thuế | Dịch vụ cung ứng | Số tài khoản ngân hàng chính chủ | Ngân hàng và chi nhánh | Đơn giá đại lý / Hạn mức | Đầu mối phụ trách nội bộ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Công ty Cổ phần CyberLotus (CyberX) | 0105325608 | Chữ ký số USB Token, CloudCA, thiết bị Token trắng | Cập nhật theo thông báo tài khoản của bên bán | Techcombank | Theo hợp đồng đại lý; đặt thiết bị theo lô 10 chiếc, mốc đặt tiếp là 05 chiếc theo phiếu CK-02 | `KTV` phụ trách chữ ký số |
| 2 | Công ty Cổ phần %%MIENTRU:N6%%MISA%%/MIENTRU:N6%% | 0101243150 | Phần mềm hóa đơn điện tử, dịch vụ truyền nhận dữ liệu hóa đơn | Cập nhật theo thông báo tài khoản của bên bán | VietinBank | Gói đại lý phân phối hóa đơn điện tử | `KTV` phụ trách kế toán |
| 3 | Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) | 0100109106 | Đường truyền internet văn phòng, hạ tầng viễn thông công vụ | Cập nhật theo thông báo tài khoản của bên bán | Vietcombank | Cước thuê bao cố định hằng tháng theo hợp đồng dịch vụ | `AD-KT` |
| 4 | Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT) | 0100684378 | Dịch vụ viễn thông phụ trợ, chữ ký số dự phòng | Cập nhật theo thông báo tài khoản của bên bán | VietinBank | Cước phát sinh theo kỳ hóa đơn viễn thông | `AD-KT` |
| 5 | Nhà cung cấp hạ tầng máy chủ đám mây (Google Cloud Platform - GCP) | Nộp thuế nhà thầu nước ngoài | Hạ tầng máy chủ ảo, lưu trữ dữ liệu đám mây | Thanh toán thẻ tín dụng công ty | Ngân hàng thanh toán quốc tế | Đơn giá tính theo dung lượng và tài nguyên thực tế | `TL-CN` |
| 6 | Đơn vị cho thuê văn phòng Đà Nẵng | Cập nhật theo hợp đồng | Văn phòng làm việc theo hợp đồng thuê | Cập nhật theo hợp đồng và hóa đơn | Ngân hàng theo hợp đồng | Đơn giá thuê cố định theo hợp đồng thuê mặt bằng | `AD-KT` |
| 7 | Văn phòng công chứng phối hợp tại Đà Nẵng | Cập nhật theo thông báo | Dịch vụ công chứng hợp đồng, chứng thực chữ ký và bản sao | Cập nhật theo thông báo chính thức | Ngân hàng theo hợp đồng | Đơn giá theo biểu phí công chứng quy định và thỏa thuận | `KTV` pháp lý |
| 8 | Đơn vị dịch thuật công chứng phối hợp | Cập nhật theo thông báo | Dịch thuật công chứng tài liệu hồ sơ FDI, giấy tờ pháp lý | Cập nhật theo thông báo chính thức | Ngân hàng theo hợp đồng | Đơn giá theo trang dịch thuật và ngôn ngữ hồ sơ | `KTV` pháp lý |

### Phân hệ 2. Cơ quan Nhà nước liên quan trực tiếp

Phân hệ này lưu trữ đầu mối tiếp nhận, giải quyết thủ tục hành chính tại địa bàn Đà Nẵng và Thành phố Hồ Chí Minh:

| STT | Tên cơ quan Nhà nước | Địa chỉ trụ sở | Bộ phận tiếp nhận / Một cửa | Số điện thoại thụ lý | Cổng thông tin / Cổng dịch vụ công trực tuyến |
| --- | --- | --- | --- | --- | --- |
| 1 | Cục Thuế Thành phố Đà Nẵng | Số 190 Phan Đăng Lưu, Phường Hòa Cường Bắc, Quận Hải Châu, TP. Đà Nẵng | Bộ phận Một cửa - Hỗ trợ người nộp thuế | 0236.3821.227 | `https://thuedientu.gdt.gov.vn` |
| 2 | Chi cục Thuế Quận Hải Châu | Số 20 Lý Tự Trọng, Phường Thạch Thang, Quận Hải Châu, TP. Đà Nẵng | Bộ phận Tiếp nhận và Trả kết quả | 0236.3822.368 | `https://thuedientu.gdt.gov.vn` |
| 3 | Bảo hiểm xã hội Thành phố Đà Nẵng | Số 43 Xô Viết Nghệ Tĩnh, Phường Hòa Cường Nam, Quận Hải Châu, TP. Đà Nẵng | Bộ phận Tiếp nhận hồ sơ và Trả kết quả | 0236.3822.428 | `https://dichvucong.baohiemxahoi.gov.vn` |
| 4 | Bảo hiểm xã hội Quận Hải Châu | Số 10 Lý Tự Trọng, Phường Thạch Thang, Quận Hải Châu, TP. Đà Nẵng | Bộ phận Chế độ BHXH - Quản lý thu | 0236.3821.564 | `https://dichvucong.baohiemxahoi.gov.vn` |
| 5 | Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng | Trung tâm Hành chính (Khu A6), số 24 Trần Phú, Hải Châu, TP. Đà Nẵng | Phòng Đăng ký kinh doanh | 0236.3821.758 | `https://dangkykinhdoanh.gov.vn` |
| 6 | Sở Công Thương Thành phố Đà Nẵng | Trung tâm Hành chính (Khu A19), số 24 Trần Phú, Hải Châu, TP. Đà Nẵng | Phòng Quản lý thương mại | 0236.3822.525 | `https://socongthuong.danang.gov.vn` |
| 7 | Chi cục An toàn vệ sinh thực phẩm Đà Nẵng | Số 103 Hùng Vương, Phường Hải Châu 2, Quận Hải Châu, TP. Đà Nẵng | Bộ phận Thẩm định và Cấp giấy chứng nhận | 0236.3818.847 | `https://atvstp.danang.gov.vn` |
| 8 | Cục Sở hữu trí tuệ - Văn phòng đại diện Đà Nẵng | Số 135 Minh Mạng, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, TP. Đà Nẵng | Bộ phận Tiếp nhận đơn đăng ký sở hữu trí tuệ | 0236.3889.955 | `https://dvctt.noip.gov.vn` |
| 9 | Cục Thuế Thành phố Hồ Chí Minh | Số 63 Vũ Tông Phan, Phường An Phú, Thành phố Thủ Đức, TP. Hồ Chí Minh | Phòng Tuyên truyền và Hỗ trợ người nộp thuế | 028.3770.2288 | `https://thuedientu.gdt.gov.vn` |
| 10 | Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh | Số 32 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh | Phòng Đăng ký kinh doanh | 028.3829.3179 | `https://dkkd.hochiminhcity.gov.vn` |
| 11 | Cục Sở hữu trí tuệ - Văn phòng đại diện TP.HCM | Số 17-19 Tôn Thất Tùng, Phường Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh | Bộ phận Tiếp nhận đơn sở hữu công nghiệp | 028.3920.8483 | `https://dvctt.noip.gov.vn` |

### Phân hệ 3. Mạng lưới đối tác hệ sinh thái và Giới thiệu khách hàng

Phân hệ này theo dõi các đối tác liên kết vườn ươm khởi nghiệp, tổ chức xúc tiến thương mại, cộng đồng chuyên gia và các đơn vị giới thiệu khách hàng:

| STT | Tên đối tác | Nhóm đối tác | Người liên hệ và chức danh | Kênh liên lạc công vụ | Cơ chế phối hợp công việc | Chính sách hoa hồng giới thiệu khách hàng |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Da Nang Innovation Hub (DNIH) / Innov Da Nang | Vườn ươm đổi mới sáng tạo | Đại diện Ban điều hành vườn ươm | `contact@innovdanang.vn` | Phối hợp tổ chức hội thảo khởi nghiệp, hỗ trợ doanh nghiệp công nghệ | 10% doanh thu thực thu theo hợp đồng dịch vụ đầu tiên trong 12 tháng theo phiếu HH-02 |
| 2 | Relocate In Da Nang | Cộng đồng chuyên gia quốc tế | Quản trị viên điều hành cộng đồng | `info@relocateindanang.com` | Giới thiệu khách hàng thành lập doanh nghiệp FDI, visa lao động và thẻ tạm trú | 10% doanh thu thực thu theo hợp đồng dịch vụ đầu tiên theo thỏa thuận đối tác |
| 3 | Nomad365 | Mạng lưới doanh nhân di động | Đại diện phụ trách cộng đồng | `partner@nomad365.co` | Kết nối khách hàng tư vấn thành lập công ty, không gian làm việc và kế toán thuế | 10% doanh thu thực thu theo hợp đồng dịch vụ đầu tiên theo thỏa thuận đối tác |
| 4 | Trung tâm Khởi nghiệp Đổi mới sáng tạo Đà Nẵng (DISSC/DSAC) | Trung tâm phát triển vi mạch và đổi mới sáng tạo | Bộ phận Hợp tác doanh nghiệp | `contact@dsac.danang.gov.vn` | Phối hợp tư vấn thủ tục doanh nghiệp công nghệ cao, tiếp nhận ưu đãi đầu tư | Không áp dụng hoa hồng thương mại; thực hiện theo cơ chế hỗ trợ đối tác |
| 5 | Chi nhánh Công ty Kiểm toán quốc tế (KPMG Việt Nam) | Đối tác kiểm toán chuyên môn | Giám đốc phụ trách phát triển dịch vụ | `partner@kpmg.com.vn` | Chuyển tiếp vụ việc kiểm toán độc lập, thẩm định giá chuyên sâu | Phối hợp chuyên môn song phương theo từng vụ việc |
| 6 | BBCIncorp | Tư vấn cấu trúc doanh nghiệp nước ngoài | Trưởng bộ phận phát triển đối tác | `support@bbcincorp.com` | Hỗ trợ tư vấn dịch vụ thành lập doanh nghiệp tại Singapore, Hoa Kỳ (`SG-INC`, `US-INC`) | Phí giới thiệu hoặc chiết khấu dịch vụ theo từng hợp đồng hợp tác vụ việc |
| 7 | Công ty Luật đối tác chuyên trách tranh tụng | Đơn vị luật độc lập | Luật sư điều hành công ty luật | `legal@partnerlaw.vn` | Tiếp nhận chuyển tiếp các vụ việc tranh tụng tại Tòa án hoặc Trọng tài theo Job LS-18 | Theo thỏa thuận chuyển tiếp vụ việc độc lập |

### Phân hệ 4. Ngân hàng thương mại mở tài khoản thanh toán của oBacker

Căn cứ Điều 34 [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]], oBacker duy trì tối đa 03 tài khoản ngân hàng hoạt động chính thức:

| STT | Tên ngân hàng và chi nhánh | Số tài khoản thanh toán | Tên chủ tài khoản | Mục đích sử dụng tài khoản | Hạn mức giao dịch trực tuyến | Phân quyền thao tác hệ thống | Đầu mối cán bộ quản lý khách hàng |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Vietcombank - Chi nhánh Đà Nẵng | Cập nhật theo hợp đồng mở tài khoản | CÔNG TY CỔ PHẦN OBACKER | Tài khoản chính: Thu tiền dịch vụ khách hàng, chi hoạt động văn phòng | 2.000.000.000 đồng/ngày | TẠO: `KTV` và `KTT`<br>XÁC NHẬN: `TGĐ` và `Chủ tịch HĐQT` | Phòng Khách hàng Doanh nghiệp chi nhánh |
| 2 | Techcombank - Chi nhánh Đà Nẵng | Cập nhật theo hợp đồng mở tài khoản | CÔNG TY CỔ PHẦN OBACKER | Tài khoản chi lương nhân sự và nộp thuế, bảo hiểm xã hội | 1.000.000.000 đồng/ngày | TẠO: `KTV` và `KTT`<br>XÁC NHẬN: `TGĐ` và `Chủ tịch HĐQT` | Phòng Khách hàng Doanh nghiệp chi nhánh |
| 3 | ACB - Chi nhánh Đà Nẵng | Cập nhật theo hợp đồng mở tài khoản | CÔNG TY CỔ PHẦN OBACKER | Tài khoản dự phòng thanh toán và theo dõi quỹ dự phòng | 500.000.000 đồng/ngày | TẠO: `KTV` và `KTT`<br>XÁC NHẬN: `TGĐ` và `Chủ tịch HĐQT` | Phòng Khách hàng Doanh nghiệp chi nhánh |

## CÁC BƯỚC CẬP NHẬT VÀ BẢO TRÌ DANH BẠ

```
[ ]  1. TIẾP NHẬN YÊU CẦU VÀ THẨM ĐỊNH THÔNG TIN MỚI
        - KTV tiếp nhận yêu cầu thêm hoặc cập nhật thông tin đối tác, nhà cung cấp hoặc cơ quan.
        - Tra cứu xác thực mã số thuế trên hệ thống ngành thuế, kiểm tra tình trạng doanh nghiệp đang hoạt động, không thuộc diện ngừng hoạt động hoặc đóng mã số thuế.
        - Đối chiếu số tài khoản ngân hàng thụ hưởng bảo đảm trùng khớp tên pháp nhân trên hợp đồng.

[ ]  2. ÁP DỤNG QUY TRÌNH THAY ĐỔI SỐ TÀI KHOẢN (KHI CÓ PHÁT SINH)
        - Khi nhà cung cấp có thông báo thay đổi số tài khoản thụ hưởng: thực hiện đúng theo Phiếu SC-01.
        - Bắt buộc có thông báo bằng văn bản có chữ ký của người đại diện theo pháp luật và đóng dấu của đối tác.
        - Thực hiện xác minh qua điện thoại với người liên hệ trước khi cập nhật dữ liệu.

[ ]  3. PHÊ DUYỆT VÀ CẬP NHẬT DỮ LIỆU VÀO DANH BẠ
        - KTV soạn thông tin cập nhật, trình KTT kiểm soát tính hợp pháp và hợp lệ của hồ sơ.
        - Trình COO phê duyệt đưa vào danh bạ Master Data.
        - Cập nhật thông tin vào hệ thống dữ liệu trong thời hạn 24 giờ kể từ khi được duyệt.

[ ]  4. ĐỐI SOÁT VÀ RÀ SOÁT ĐỊNH KỲ MỖI 06 THÁNG
        - Trước ngày 15 tháng 07 và ngày 15 tháng 01 hằng năm: KTV rà soát toàn bộ 04 phân hệ dữ liệu.
        - Kiểm tra tính hiệu lực của các hợp đồng nguyên tắc, biểu giá đại lý và cổng dịch vụ công trực tuyến.
        - Trình KTT và COO báo cáo rà soát danh bạ.
```

## ĐIỂM KIỂM SOÁT BẮT BUỘC

1. **Điểm kiểm soát KS-DT-01 (Kiểm soát xác thực tài khoản ngân hàng thụ hưởng):** Mọi lệnh chi tiền chuyển khoản cho nhà cung cấp hoặc đối tác chỉ được thực hiện đến số tài khoản đã được xác thực và lưu trong Danh bạ DT-01. Tuyệt đối không chi tiền vào số tài khoản cá nhân của nhân viên bên bán hoặc bên thứ ba nếu không có văn bản ủy quyền hợp pháp.
2. **Điểm kiểm soát KS-DT-02 (Kiểm soát cơ chế hoa hồng đối tác):** Tỷ lệ hoa hồng giới thiệu khách hàng áp dụng mức chuẩn 10% trên doanh thu thực thu trong 12 tháng theo đúng [[PL_PM_Dieu_kien_thuong_mai_chuan|OBK-SOP-PM-PL1]]. Mọi trường hợp điều chỉnh tỷ lệ khác mức 10% bắt buộc phải có phê duyệt bằng văn bản của `CEO`.
3. **Điểm kiểm soát KS-DT-03 (Kiểm soát rà soát tài khoản và phân quyền ngân hàng số):** Định kỳ hằng quý theo Điều 35 [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]], `TGĐ` rà soát trực tiếp danh sách người dùng và quyền trên hệ thống ngân hàng điện tử của 03 tài khoản oBacker, bảo đảm tuyệt đối tuân thủ nguyên tắc tách biệt người TẠO lệnh (`KTV`, `KTT`) và người XÁC NHẬN lệnh (`TGĐ`, `Chủ tịch HĐQT`).
4. **Điểm kiểm soát KS-DT-04 (Kiểm soát tình trạng pháp lý của đối tác):** Định kỳ kiểm tra trạng thái mã số thuế của các nhà cung cấp trước khi lập đề nghị thanh toán; không giao dịch với các đơn vị đã bị cơ quan thuế thông báo không hoạt động tại địa chỉ đăng ký.

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Danh bạ DT-01 được lưu giữ dưới dạng cơ sở dữ liệu số tập trung trên hệ thống nội bộ oBacker, sao lưu định kỳ hằng tháng. Bảng trích xuất phân hệ 1 và phân hệ 4 được cung cấp cho bộ phận Kế toán làm căn cứ kiểm soát thanh toán. Phân hệ 2 được cung cấp cho các bộ phận nghiệp vụ dịch vụ (`AM`, `KTV-KT`, `CV-LIC`). Phân hệ 3 do bộ phận Thương mại (`AM`, `COO`) quản lý và theo dõi hợp tác.

## KÝ XÁC NHẬN

| Kế toán viên cập nhật (`KTV`) | Kế toán trưởng kiểm soát (`KTT`) | Giám đốc vận hành phê duyệt (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Hoạt động vận hành và cung cấp dịch vụ của oBacker liên kết chặt chẽ với các nhà cung ứng công nghệ, cơ quan quản lý Nhà nước, hệ sinh thái khởi nghiệp và các ngân hàng thương mại. Việc thiếu cơ sở dữ liệu gốc tập trung dẫn đến nguy cơ sai lệch thông tin thanh toán, chuyển nhầm tiền, chậm trễ hồ sơ hành chính do sai đầu mối tiếp nhận, hoặc vi phạm chính sách thương mại với đối tác giới thiệu khách hàng. Danh bạ DT-01 chuẩn hóa toàn bộ thông tin đối tác, thiết lập điểm kiểm soát xác thực tài khoản ngân hàng và cơ chế phối hợp thông suốt giữa các bộ phận.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Căn cứ | Nội dung trích dẫn hoặc áp dụng |
| --- | --- | --- |
| Quy chế tài chính | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 24 | Quản lý đối tác và kiểm soát thanh toán mua sắm dịch vụ nội bộ |
| Tài khoản và ngân hàng số | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 34, Điều 35 | Quy định mở tối đa 03 tài khoản ngân hàng và cơ chế tách quyền TẠO và XÁC NHẬN lệnh |
| Quy trình mua sắm | [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | Trình tự lựa chọn nhà cung cấp và đối soát tài khoản thụ hưởng |
| Chương trình đối tác | [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] và [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] | Cơ chế tiếp nhận khách hàng giới thiệu và tỷ lệ hoa hồng 10% trong 12 tháng |
| Thay đổi tài khoản | [[SC-01_Nhan_thong_bao_doi_so_tai_khoan\|SC-01]] | Quy trình tiếp nhận và xác thực thông báo thay đổi số tài khoản ngân hàng của đối tác |
| Thanh toán không dùng tiền mặt | Nghị định số 52/2024/NĐ-CP | Quy định về thanh toán không dùng tiền mặt và tài khoản thanh toán của doanh nghiệp |
| Hóa đơn điện tử | Nghị định số 254/2026/NĐ-CP và Thông tư số 91/2026/TT-BTC | Quản lý, tra cứu và sử dụng hóa đơn điện tử hợp pháp từ nhà cung ứng |
| Luật Doanh nghiệp | Luật Doanh nghiệp 59/2020/QH14 (VBHN 67/2026/VBHN-VPQH) | Quyền và nghĩa vụ của doanh nghiệp trong quan hệ hợp đồng thương mại |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
