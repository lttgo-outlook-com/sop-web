---
title: "BẢNG KIỂM NỘI BỘ"
code: "BK-01"
type: "sop"
folder: "03_BangKiem"
level: "Bảng kiểm"
version: "R.2.1.0"
status: "đang áp dụng"
draft_date: "08/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-MSR Quy tắc sổ cái"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - BK-01
tags:
  - loai/sop
---
# BK-01. BẢNG KIỂM NỘI BỘ

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BK-01 |
| Cấp tài liệu | Bảng kiểm |
| Phiên bản | R.2.1.0, đang áp dụng |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] Quy tắc sổ cái |
| Đây là gì | Bảng kiểm các bước của Job nội bộ |

## 1. PHẠM VI

Bảng kiểm áp dụng cho Job của miền nội bộ trong các chu trình CHI, THU, TIỀN, SỔ và LƯƠNG, tức mọi việc oBacker làm trên sổ sách và tài sản của chính oBacker. Mỗi bước ghi một sự kiện vào sổ cái theo [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]]. Ký hiệu vai trò theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]]. Khi con số hoặc thẩm quyền trong bảng kiểm khác với [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] thì lấy OBK-QCTC-01.

## 2. DANH MỤC JOB

%%JOBTABLE:NB%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Định mức và thẩm quyền | Chu trình |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NB-01 | Đề nghị mua sắm | Bộ phận phát sinh nhu cầu | Nhu cầu có căn cứ;<br>ngân sách còn hạn | Phiếu đề nghị BM-01 đã duyệt | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.12, Đ.21, Đ.22 | CHI |
| NB-02 | Lựa chọn nhà cung cấp và ký hợp đồng | Đề nghị đã duyệt | Phiếu đề nghị đã duyệt;<br>báo giá | Hợp đồng hoặc đơn hàng đã ký | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.12, Đ.12a | CHI |
| NB-03 | Đề nghị thanh toán | Có nghĩa vụ trả tiền;<br>báo cáo hoa hồng đã chấp thuận từ Job `PM-08` | Chứng từ chứng minh nghĩa vụ;<br>nghiệm thu nếu có | Phiếu đề nghị thanh toán đã duyệt;<br>lệnh chuyển tiền;<br>số thuế thu nhập cá nhân đã khấu trừ của đối tác là cá nhân, chuyển NB-24 | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.5.1, Đ.18, Đ.19, Đ.23, Đ.24 | CHI |
| NB-04 | Tạm ứng | Nhu cầu chi trước | Phiếu đề nghị tạm ứng đã duyệt | Tiền đã chuyển;<br>theo dõi công nợ tạm ứng | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.36 | CHI |
| NB-05 | Hoàn ứng | Đã chi xong khoản tạm ứng | Chứng từ chi thực tế | Phiếu hoàn ứng;<br>số dư tạm ứng về 0 hoặc còn dư có lý do | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.37 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.37, Đ.38 chế tài quá hạn | CHI |
| NB-06 | Chi hộ bằng tiền cá nhân, không qua tạm ứng | Người lao động chi hộ | Chứng từ thanh toán KHÔNG DÙNG TIỀN MẶT của người lao động | Hoàn lại bằng chuyển khoản | Theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.19, Đ.39;<br>`PL_1` CC-KT-30, CC-KT-31 | CHI |
| NB-07 | Thanh toán định kỳ và thanh toán tự động | Theo lịch;<br>báo cáo hoa hồng đã chấp thuận từ Job `PM-08` | Danh mục khoản định kỳ đã duyệt | Bản ghi đã thanh toán | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.40 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.40 | CHI |
| NB-08 | Rà soát ngân sách bộ phận | Theo tháng | Số liệu chi thực tế trên sổ | Bảng so sánh thực tế và ngân sách theo bộ phận | Trong 05 ngày làm việc đầu tháng sau | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.22 | CHI |
| NB-09 | Xuất hóa đơn dịch vụ cho khách | Hoàn thành cung ứng dịch vụ hoặc từng phần;<br>hoặc thu tiền trước;<br>yêu cầu xuất hóa đơn từ Job `AM-05` | Hợp đồng dịch vụ nêu rõ mốc hoàn thành và cách lập hóa đơn;<br>xác nhận hoàn thành | Hóa đơn điện tử đã phát hành | Trong 01 ngày làm việc kể từ thời điểm xác định doanh thu | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.14;<br>`PL_1` `CC-DN` không áp dụng, dùng `254/2026/NĐ-CP` Đ.9 k.2 | THU |
| NB-10 | Duyệt điều khoản thanh toán ngoài chuẩn | Ký hợp đồng với điều khoản khác chuẩn | Đề xuất kèm lý do | Phê duyệt bằng văn bản | Trong 02 ngày làm việc | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.15.1, Đ.15.2, Đ.14.2 | THU |
| NB-11 | Lập bảng tuổi nợ phải thu | Theo tuần | Sổ công nợ phải thu | Bảng tuổi nợ theo 4 nhóm: trong hạn;<br>quá hạn tới 30 ngày;<br>quá hạn 31 tới 90 ngày;<br>quá hạn từ 91 ngày trở lên | Hằng tuần | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.15.3 | THU |
| NB-12 | Nhắc phí và nhắc nợ theo bảng mốc | Đến hạn hoặc quá hạn | Bảng tuổi nợ | Bằng chứng đã nhắc, lưu trên hệ thống và trong hồ sơ khách | Theo bảng mốc tại [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] mục 6.8.2, là bản gốc.<br>Phân vai trò: `KTV` lập nội dung và số liệu, `AM` gửi cho khách, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.1 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.1 | THU |
| NB-13 | Đề xuất dừng dịch vụ với khách quá hạn | Quá hạn vượt mốc | Bảng tuổi nợ;<br>lịch sử nhắc nợ | Đề xuất trình TGĐ;<br>thông báo bằng văn bản cho khách nếu được chấp thuận | Trong 02 ngày làm việc kể từ khi chạm mốc | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.2. **TGĐ quyết**, không cấp nào khác | THU |
| NB-14 | Đối chiếu công nợ phải thu với khách | Theo quý | Sổ công nợ | Biên bản đối chiếu có xác nhận của khách | Trong 05 ngày làm việc đầu tháng đầu quý sau | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.15.3 | THU |
| NB-15 | Đề xuất xóa nợ phải thu khó đòi | Nợ không thu được | Hồ sơ chứng minh đã dùng hết biện pháp thu hồi | Nghị quyết HĐQT | Không có SLA cố định | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.16.3. **HĐQT quyết**. TGĐ và `KTT` không có quyền xóa nợ | THU |
| NB-16 | Theo dõi tuổi nợ phục vụ dự phòng | Liên tục | Sổ công nợ | Dữ liệu tuổi nợ đủ để trích dự phòng khi có văn bản | Cùng kỳ NB-11 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.17.1, bốn mức trích lập | THU |
| NB-17 | Kiểm quỹ tiền mặt | Theo lịch và đột xuất | Sổ quỹ;<br>tiền mặt thực tế | Biên bản kiểm quỹ có chữ ký | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.33 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.32, Đ.33 | TIỀN |
| NB-18 | Đối chiếu sao kê ngân hàng với sổ kế toán | Theo kỳ hai tuần và theo tháng | Sao kê tất cả tài khoản;<br>sổ kế toán | Bảng đối chiếu từng tài khoản kèm sao kê | Đối chiếu nhanh mỗi 02 tuần; đối chiếu đầy đủ trong 05 ngày làm việc đầu tháng sau.<br>Hai con số ĐẶT tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.34.2, chốt ngày 07/09/2026 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.34, Đ.48 chốt số 1. Người làm là `AD-KT`, không phải `KTV` | TIỀN |
| NB-31 | Lập phiếu thu và phiếu chi cho mọi lần nhập, xuất quỹ tiền mặt | Mỗi lần tiền mặt vào quỹ hoặc ra quỹ | Chứng từ gốc của khoản thu hoặc khoản chi;<br>với khoản chi thì kèm `BM-02` đã duyệt | Phiếu thu `BM-PT` hoặc phiếu chi `BM-PC`, đủ chữ ký theo chức danh, đánh số liên tục trong kỳ kế toán; chờ phân công `TQ`, mẫu tại `07_ViecChoChot/BM-PT_PC_Phiu_thu_chi_quy.md` | Ngay tại thời điểm nhập quỹ hoặc xuất quỹ, không lập sau | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.32; [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] Điều 4; `Thông tư 99/2025/TT-BTC` Tài khoản 111 mục 1 điểm b.<br>**`BM-02` không thay phiếu chi**: `BM-02` là đề nghị trước khi chi, phiếu chi là chứng từ xuất quỹ | TIỀN |
| NB-19 | Rà soát phân quyền lập và duyệt trên ngân hàng điện tử | Khi có thay đổi nhân sự | Danh sách người dùng và quyền hiện hành trên hệ thống ngân hàng | Bảng rà soát;<br>đề xuất điều chỉnh nếu lệch | Ngay trong ngày khi có nhân sự nghỉ việc hoặc thay đổi vai trò, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.35.2 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.35, Đ.47. Người làm là TGĐ, KHÔNG phải `KTT` | TIỀN |
| NB-20 | Mở, đóng, thay đổi tài khoản ngân hàng | Nhu cầu phát sinh | Đề xuất kèm lý do | Quyết định và hồ sơ ngân hàng | Trong 03 ngày làm việc kể từ khi được duyệt | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.34 | TIỀN |
| NB-21 | Lập kế hoạch dòng tiền | Theo tháng | Công nợ phải thu;<br>công nợ phải trả;<br>ngân sách | Bảng kế hoạch dòng tiền 03 tháng tới | Trong 05 ngày làm việc đầu tháng | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.22 | TIỀN |
| NB-22 | Ghi sổ kế toán kỳ của oBacker | Theo tháng | Chứng từ kỳ đã đủ | Sổ kế toán kỳ | Theo lịch của [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.42, Đ.43 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.42, Đ.43 | SỔ |
| NB-23 | Khóa sổ và đối chiếu kỳ của oBacker | Sau NB-22 | Sổ kỳ;<br>sao kê;<br>biên bản kiểm quỹ;<br>số hoa hồng đã phát sinh chưa có hóa đơn từ Job NB-49, để trích trước | Bảng cân đối số phát sinh;<br>bảng chênh lệch | Theo lịch của [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.43 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.43 | SỔ |
| NB-24 | Kê khai và nộp thuế của chính oBacker | Theo lịch pháp định | Sổ kỳ đã khóa;<br>số thuế thu nhập cá nhân đã khấu trừ khi chi cho đối tác là cá nhân, từ Job NB-03 | Tờ khai đã nộp;<br>Thông báo tiếp nhận;<br>giấy nộp tiền | Làm trước 03 ngày làm việc trước thời hạn theo pháp luật | Theo `PL_1` mục 5 | SỔ |
| NB-25 | Lập và nộp báo cáo tài chính năm của oBacker | Theo năm | Sổ năm đã khóa;<br>biên bản kiểm kê | Báo cáo tình hình tài chính;<br>Báo cáo kết quả hoạt động;<br>đã có đủ chữ ký gồm chữ ký NĐDPL | Nộp trước hạn pháp định ít nhất 05 ngày làm việc | **90 ngày** kể từ ngày kết thúc kỳ kế toán năm. `PL_1` CC-KT-03 | SỔ |
| NB-26 | Kiểm kê tài sản và công nợ | Theo năm và khi có sự kiện bắt buộc | Danh mục tài sản;<br>sổ công nợ | Biên bản kiểm kê | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.44 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.44 | SỔ |
| NB-27 | Đưa tài liệu kế toán vào lưu trữ | Theo năm | Bộ tài liệu kế toán của kỳ | Bản ghi đã đưa vào lưu trữ | **Trong 12 tháng** kể từ ngày kết thúc kỳ kế toán năm | `PL_1` CC-KT-04;<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.45 | SỔ |
| NB-28 | Rà soát các khoản chạm mức tối đa trước 31/12 | Cuối năm | Sổ tới thời điểm rà | Bảng rà soát trang phục, phúc lợi, bảo hiểm hưu trí bổ sung, ăn giữa ca, quỹ lương dự phòng, khấu hao xe từ 9 chỗ trở xuống | Trước 15/12 | `PL_1` CC-KT-11 tới CC-KT-16;<br>[[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.21, Đ.26, Đ.27 | SỔ |
| NB-29 | Rà soát giao dịch với người có liên quan | Theo quý và trước mỗi giao dịch thuộc diện;<br>danh sách đối tác mới từ Job `PM-01` | Danh sách người có liên quan;<br>danh mục giao dịch trong kỳ | Bảng rà soát;<br>hồ sơ phê duyệt của cấp có thẩm quyền | Hằng quý;<br>và trước khi ký từng giao dịch thuộc diện | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.12a | SỔ |
| NB-30 | Điểm kiểm soát định kỳ | Theo lịch | Theo từng điểm kiểm soát | Bản ghi kết quả từng điểm kiểm soát | Theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.48 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.47, Đ.48 | SỔ |
| NB-32 | Tạm ứng tiền lương | Người lao động đề nghị, hoặc phát sinh một trong ba sự kiện bắt buộc tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.26a.1 | `BM-08` đã lập;<br>số lần đã tạm ứng tiền lương trong quý và trong nửa năm | Tiền đã chuyển vào tài khoản đứng tên người lao động;<br>khoản đã ghi vào trường Tạm ứng kỳ I của Bảng thanh toán tiền lương kỳ đó | Theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.6 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.26a;<br>`PL_1` CC-LD-196, CC-LD-197 | LƯƠNG |
| NB-33 | Tổng hợp bảng công tạm và gửi xác nhận | Theo tháng, ngày 16 | Dữ liệu ghi nhận thời điểm vào ca và ra ca từ ngày 21 tháng trước đến ngày 15;<br>đơn đã được chấp thuận trong kỳ | Bảng công tạm đã gửi từng người lao động;<br>bản ghi thời điểm gửi và thời hạn xác nhận, lưu trên hệ thống | Ngày 16 hằng tháng, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.1 | [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]] mục 1.2.<br>Người làm là `HR` | LƯƠNG |
| NB-34 | Chốt bảng công của kỳ | Hết thời hạn xác nhận bảng công tạm | Bảng công tạm đã qua thời hạn xác nhận;<br>phản hồi lệch của người lao động, nếu có;<br>dữ liệu hệ thống từ ngày 16 đến ngày 20 | Bảng công của kỳ đã chốt | Ngày 20: `HR` chốt bảng công.<br>Theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.2 | [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]] mục 1.2.<br>Người làm: `HR` cộng công từ ngày 16 đến ngày 20 theo dữ liệu hệ thống và chốt bảng công | LƯƠNG |
| NB-35 | Duyệt toàn bảng công | Sau NB-34 | Bảng công của kỳ đã chốt | Bảng chấm công `BM-09` của kỳ đã duyệt, là đầu vào bắt buộc của NB-36 | Ngày 21 hằng tháng, một chữ ký, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.2 | [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]] mục 1.2.<br>Người làm là `CEO` theo [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] mục 3 | LƯƠNG |
| NB-36 | Tính lương, lập Bảng thanh toán tiền lương, và tính phần bù của kỳ trước | Sau NB-35 | Bảng chấm công `BM-09` của kỳ đã duyệt;<br>khoản tạm ứng tiền lương của kỳ đã ghi theo NB-32;<br>phần chênh của kỳ trước, nếu có;<br>khoản thưởng đã chi ngày 15 của tháng | Bảng thanh toán tiền lương mẫu số 01-LĐTL của kỳ, gồm phần bù của kỳ trước và khoản thưởng đã chi để tính thuế thu nhập cá nhân | Từ ngày 23 hằng tháng, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.4 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Chương 5;<br>[[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] mục 4.3;<br>[[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]].<br>Người làm là `KTV` | LƯƠNG |
| NB-37 | Duyệt bảng lương, lập lệnh, xác nhận lệnh và chi lương | Sau NB-36 | Bảng thanh toán tiền lương đã lập | Bảng thanh toán tiền lương đã duyệt;<br>lệnh chuyển tiền lương đã xác nhận;<br>tiền lương của kỳ đã chi | Chi xong trong ngày làm việc cuối cùng của tháng, theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.4 | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Đ.35.<br>Người làm: `TGĐ` duyệt bảng lương;<br>`NTT` lập lệnh;<br>xác nhận lệnh theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 35 | LƯƠNG |
| NB-38 | Xét đơn nghỉ phép, đơn cập nhật công, đơn làm việc từ xa, đăng ký làm thêm giờ | Người lao động gửi đơn, nhiều lần trong kỳ | Đơn đã được ghi nhận trên hệ thống | Đơn đã được chấp thuận hoặc bị từ chối, ghi nhận trên hệ thống | Theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 5.3 | [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]] mục 7.<br>Người xét đơn nghỉ phép: quản lý trực tiếp, theo [[Noi_quy_lao_dong\|OBK-NQLD]] Điều 7.5.2;<br>người xét đơn làm việc từ xa: Tổng giám đốc hoặc người được ủy quyền, theo [[Noi_quy_lao_dong\|OBK-NQLD]] Điều 11.2;<br>người xét đơn cập nhật công: quản lý trực tiếp | LƯƠNG |
| NB-39 | Đăng ký mã bảo hiểm xã hội lần đầu cho người lao động của oBacker | oBacker ký hợp đồng lao động với người lao động thuộc đối tượng tham gia | Hợp đồng lao động đã ký giữa oBacker và người lao động | Hồ sơ đã nộp;<br>xác nhận của cơ quan BHXH | Thời hạn theo pháp luật: Kê khai và nộp hồ sơ tham gia BHXH bắt buộc trong **30 ngày** kể từ ngày người lao động thuộc đối tượng tham gia | `PL_1` CC-LD-140.<br>Người làm là `HR` | LƯƠNG |
| NB-40 | Báo tăng lao động | Có người lao động mới | Hợp đồng lao động đã ký;<br>thông tin cá nhân | Hồ sơ báo tăng đã nộp | Thời hạn theo pháp luật: Theo CC-LD-140, mốc 30 ngày | `PL_1` CC-LD-140.<br>Người làm là `HR` | LƯƠNG |
| NB-41 | Báo giảm lao động | Có người lao động nghỉ việc | Quyết định hoặc thỏa thuận chấm dứt hợp đồng lao động | Hồ sơ báo giảm đã nộp | Thời hạn theo pháp luật: **KHÔNG TÌM THẤY mốc số ngày trong kho.** Xem cảnh báo [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] mục 9.2 | `PL_1` mục 2.7 cảnh báo.<br>Người làm là `HR` | LƯƠNG |
| NB-42 | Tổng hợp và nộp tiền bảo hiểm xã hội | Theo tháng | Bảng thanh toán tiền lương đã duyệt;<br>thông báo C12 của cơ quan BHXH | Hồ sơ nộp tiền BHXH đã lập theo từng mã BHXH;<br>khoản nộp tiền đã chuyển sang chu trình CHI, nhóm N6 tại [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 5.1 | Thời hạn theo pháp luật: oBacker phải nộp tiền chậm nhất **ngày cuối cùng của tháng tiếp theo** | `PL_1` CC-LD-143.<br>Người làm: `HR` lập hồ sơ;<br>khoản nộp tiền thực hiện theo chu trình CHI, nhóm N6 | LƯƠNG |
| NB-43 | Chốt sổ bảo hiểm xã hội khi người lao động nghỉ việc | Người lao động nghỉ việc | Quyết định chấm dứt hợp đồng lao động;<br>đã báo giảm theo NB-41 | Xác nhận thời gian đóng BHXH;<br>sổ đã trả người lao động | Thời hạn theo pháp luật: **KHÔNG TÌM THẤY mốc số ngày trong kho.** Nghĩa vụ có tại CC-LD-30, không kèm số ngày | `PL_1` CC-LD-30, CC-LD-158, CC-LD-159.<br>Người làm là `HR` | LƯƠNG |
| NB-44 | Lập và cập nhật sổ quản lý lao động | Người lao động bắt đầu làm việc, và khi có biến động | Danh sách lao động;<br>20 nhóm thông tin bắt buộc | Sổ quản lý lao động của oBacker | Thời hạn theo pháp luật: Lập trong **30 ngày** kể từ ngày bắt đầu hoạt động;<br>cập nhật kể từ ngày người lao động bắt đầu làm việc | `PL_1` CC-LD-123 tới CC-LD-125.<br>Người làm là `HR` | LƯƠNG |
| NB-45 | Báo cáo tình hình sử dụng lao động 06 tháng đầu năm | Theo lịch năm | Sổ quản lý lao động;<br>biến động trong kỳ | Mẫu số 01/PLI đã nộp qua Cổng Dịch vụ công Quốc gia;<br>thông báo tới cơ quan BHXH cấp huyện | Thời hạn theo pháp luật: **Trước ngày 05 tháng 6** | `PL_1` CC-LD-121.<br>Người làm là `HR` | LƯƠNG |
| NB-46 | Báo cáo tình hình sử dụng lao động cả năm | Theo lịch năm | Như NB-45 | Như NB-45 | Thời hạn theo pháp luật: **Trước ngày 05 tháng 12** | `PL_1` CC-LD-121.<br>Người làm là `HR` | LƯƠNG |
| NB-47 | Rà soát giới hạn giờ làm thêm | Ngày 20 hằng tháng, cùng ngày chốt bảng công | Bảng công của kỳ đã chốt | Bảng rà soát số giờ làm thêm của từng người lao động so với mức tối đa tháng và mức tối đa năm | Mức tối đa theo pháp luật: **40 giờ mỗi tháng;<br>200 giờ mỗi năm**, hoặc **300 giờ mỗi năm** với 5 nhóm ngành nghề | `PL_1` CC-LD-69 tới CC-LD-71.<br>Người làm là `HR` | LƯƠNG |
| NB-48 | Rà soát mức lương tối thiểu vùng | Khi có nghị định mới, và khi oBacker đổi địa bàn | Danh sách lao động và mức lương;<br>địa bàn | Danh sách người lao động dưới mức tối thiểu;<br>đề xuất điều chỉnh | Mức hiện hành theo `293/2025/NĐ-CP` hiệu lực 01/01/2026.<br>Doanh nghiệp phải rà soát hợp đồng, thỏa ước và quy chế để điều chỉnh | `PL_1` CC-LD-60 tới CC-LD-63.<br>Người làm là `HR` | LƯƠNG |
| NB-49 | Chốt doanh thu tính hoa hồng theo khách | Kết thúc tháng;<br>phần gia hạn từ Job `AM-18`;<br>dịch vụ bán thêm từ Job `AM-29` để loại khỏi doanh thu tính hoa hồng | Khoản thu của khách thuộc sổ đăng ký giới thiệu, đã phân loại theo nhóm khoản thu;<br>danh sách dịch vụ ghi trong hợp đồng dịch vụ đầu tiên và phần gia hạn của chính dịch vụ đó | Bảng doanh thu thực thu theo khách thuộc sổ đăng ký giới thiệu, đã loại thuế GTGT, thu hộ, chi hộ, lệ phí;<br>số hoa hồng tính bằng công cụ;<br>chuyển cho Job `PM-07` và cho NB-23 | Xong trước mốc gửi báo cáo hoa hồng tại Job `PM-07`; SLA nội bộ do `CEO` chốt khi ban hành | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều về chi hoa hồng giới thiệu khách hàng | THU |
| NB-50 | Thu hồi hoặc khấu trừ hoa hồng | Thông báo Job `PM-09` đã gửi | Thông báo hoàn trả hoa hồng đã gửi đối tác | Chứng từ điều chỉnh của đối tác;<br>khoản phải thu hoặc khoản khấu trừ kỳ sau | Đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo, theo Điều 5.5 bản mẫu;<br>nghĩa vụ hoàn trả chỉ áp cho khoản oBacker hoàn tiền trong 12 tháng kể từ ngày oBacker chi hoa hồng tương ứng | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều về chi hoa hồng giới thiệu khách hàng | CHI |
| NB-51 | Hoàn tiền cho khách hoặc xử lý hủy dịch vụ | Khách yêu cầu hoàn tiền hoặc hủy dịch vụ;<br>hoặc Job `AM-19` | Yêu cầu hoàn tiền hoặc hủy dịch vụ, căn cứ hợp đồng với khách;<br>số tiền hoàn, phần dịch vụ đã thực hiện | Chứng từ điều chỉnh;<br>khoản chi hoàn;<br>thông báo cho Job `PM-09` khi khách có trong sổ đăng ký giới thiệu | Không áp | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 12.3 | THU |

%%/JOBTABLE:NB%%

## 3. BẢNG KIỂM THEO JOB

Mốc ngày của chu trình LƯƠNG rơi vào ngày nghỉ hằng tuần hoặc ngày nghỉ lễ, tết thì việc của mốc đó làm xong vào ngày làm việc liền trước.

### NB-01. Đề nghị mua sắm

1. NĐN phân loại khoản chi vào một trong sáu nhóm (N1 nhà cung cấp trong nước có hóa đơn; N2 nhà cung cấp nước ngoài; N3 cá nhân và hộ kinh doanh; N4 thanh toán định kỳ; N5 hoàn ứng cho người lao động; N6 khoản nộp bắt buộc), rồi lập BM-01 Đề nghị mua sắm, nêu nhu cầu, lý do, dòng ngân sách, số tiền dự kiến, thời hạn cần có. Kết quả: BM-01. Ghi sự kiện Tạo.
2. TL xác nhận nhu cầu và ngân sách, ký duyệt trên BM-01. Kết quả: BM-01 đã duyệt. Ghi sự kiện Duyệt.
3. Khoản ngoài ngân sách do CEO phân bổ thì TL chuyển hồ sơ lên NDC theo bậc. Ghi sự kiện Chuyển.

Điểm kiểm soát: BM-01 có chữ ký của TL trước khi oBacker cam kết với nhà cung cấp. Người duyệt chi theo bậc tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 12.3: TL ở bậc B1; TGĐ ở bậc B3 sau khi TL duyệt nhu cầu; cấp cao hơn theo luật định.
Thời hạn: bước 2 trong 02 ngày làm việc.

### NB-02. Lựa chọn nhà cung cấp và ký hợp đồng

1. NĐN lấy báo giá: bậc B1 không yêu cầu; bậc B3 tối thiểu 02 báo giá khi mua tài sản mới, không áp dụng cho gia hạn dịch vụ cũ. Báo giá về thì NĐN tính lại bậc theo báo giá cao nhất trong nhóm đang xét và ghi bậc vào BM-01. Bậc đổi, hoặc nhà cung cấp đổi, thì mọi chữ ký duyệt nhu cầu hết giá trị và NĐN xin duyệt nhu cầu lại. Kết quả: báo giá đính kèm BM-01. Ghi sự kiện Chuyển.
2. NĐN đề xuất, TL quyết nhà cung cấp theo tiêu chí giá, thời hạn giao, điều khoản thanh toán, khả năng xuất hóa đơn hợp pháp, rủi ro phụ thuộc. Nhà cung cấp không xuất được hóa đơn hợp pháp thì TL loại, trừ nhóm N3 đã xử lý theo Job NB-03. Kết quả: lý do chọn ghi trên BM-01. Ghi sự kiện Quyết định.
3. KTV xác minh nhà cung cấp lần đầu: khoản bậc B1 tra cứu trực tuyến trạng thái mã số thuế; khoản bậc B3 lập BM-05 theo sáu nội dung xác minh. Nhà cung cấp đã giao dịch trước đó thì người ký kiểm BM-05 có trong hồ sơ. Kết quả: kết quả tra cứu hoặc BM-05. Ghi sự kiện Soát.
4. NDC theo bậc ký hợp đồng hoặc gửi đơn đặt hàng khi đủ sáu điều kiện: BM-05 có trong hồ sơ; người ký đúng bậc; đã đọc điều khoản thanh toán, hóa đơn, gia hạn tự động; việc thuộc quyền riêng của TGĐ thì TGĐ ký; đối tác là người có liên quan thì đã đi theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 12a; bên bán chưa bị phong tỏa. Kết quả: hợp đồng hoặc đơn đặt hàng có số. Ghi sự kiện Duyệt, rồi Xong.
5. Dừng trước khi ký thì TL quyết và ghi sự kiện Hủy. Dừng sau khi ký thì người đã ký quyết, ghi số tiền mất nếu có.

Điểm kiểm soát: TGĐ giữ quyền riêng, không ủy quyền, với bốn việc: ký hợp đồng có điều khoản ràng buộc dài hạn hoặc phạt vi phạm; chấp nhận thanh toán trước 100% cho nhà cung cấp lần đầu; chi tiền mặt vượt mức tối đa; phê duyệt danh mục ngoại lệ. Giao dịch với người có liên quan xử lý theo Luật Doanh nghiệp 67/VBHN-VPQH Đ.167 k.5; giao dịch từ 35% tổng giá trị tài sản qua HĐQT hoặc ĐHĐCĐ. Hợp đồng ghi thanh toán bằng tiền mặt cho giá trị từ 05 triệu đồng trở lên thì sửa điều khoản. Bên bán cam kết xuất hóa đơn đúng thời điểm theo Nghị định 254/2026/NĐ-CP Đ.9, ghi đúng tên, địa chỉ, mã số thuế của oBacker.
Thời hạn: bước 1 trong 05 ngày làm việc; bước 3 trong 01 ngày (tra cứu) hoặc 03 ngày (BM-05).

### NB-03. Đề nghị thanh toán

1. NĐN lập BM-02 Đề nghị thanh toán kèm hồ sơ tối thiểu theo nhóm khoản chi: hợp đồng hoặc đơn đặt hàng, bằng chứng nhận hàng hoặc BM-06, hóa đơn hợp pháp; nhóm N2 thêm kết luận nghĩa vụ khấu trừ do KTT ký; nhóm N3 thêm chứng từ khấu trừ thuế TNCN hoặc bảng kê thu mua Mẫu 02/TNDN. TL xác nhận nghiệp vụ có thật và đúng ngân sách, ký trên BM-02. Ghi sự kiện Tạo, rồi Duyệt.
2. KTV kiểm hồ sơ: đối chiếu ba chiều (cam kết, thực nhận, hóa đơn) về số lượng, đơn giá, tổng tiền, tên hàng hóa dịch vụ; kiểm hóa đơn ghi nhận hai lần theo bộ ba mã số thuế bên bán, số hóa đơn, số tiền; kiểm các điều kiện thuế ở phần Điểm kiểm soát. Kết quả: BM-07. Lệch thì KTV dừng và chuyển KTT, không tự điều chỉnh. Ghi sự kiện Soát.
3. Với cá nhân thuộc diện khấu trừ, KTV xác định cư trú hay không cư trú và tình trạng hợp đồng lao động, tính 10% trên thu nhập trước khi trả, lập chứng từ khấu trừ thuế, chuyển số thuế đã khấu trừ sang Job NB-24. Ghi sự kiện Chuyển.
4. KTT chốt kỹ thuật kế toán và thuế, ký chứng từ chi tiền trước khi chuyển tiền. Ghi sự kiện Duyệt.
5. NDC duyệt chi theo bậc trên BM-02. Ghi sự kiện Duyệt.
6. NTT tạo lệnh chuyển tiền trong chu kỳ chi. TGĐ hoặc Chủ tịch HĐQT kiểm BM-02 đủ chữ ký của TL, KTV, KTT, NDC rồi xác nhận lệnh; thiếu chữ ký thì từ chối và trả KTV. Lệnh chỉ chạy khi số tài khoản người nhận đã xác minh (BM-05 ghi ngày gọi và tên người xác nhận) và số tiền trùng số đã duyệt. Ghi sự kiện Chuyển, rồi Xong.

Điểm kiểm soát: người có thẩm quyền duyệt chi và KTT ký chứng từ chi tiền trước khi thực hiện; KTT vắng mặt thì phải có văn bản ủy quyền có thời hạn (Luật Kế toán 41/VBHN-VPQH Đ.19 k.3). Sửa số tiền hoặc người nhận sau khi có chữ ký thì mọi chữ ký hết giá trị và hồ sơ đi lại từ đầu ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 12.3b). Mọi thay đổi số tài khoản của nhà cung cấp phải xác minh bằng cuộc gọi tới số điện thoại gốc lấy từ hợp đồng đã ký; lần đầu chuyển vào số tài khoản mới từ 10.000.000 đồng trở lên thì chuyển một khoản nhỏ trước. Điều kiện thuế: khoản mua từng lần từ 05 triệu đồng trở lên đã gồm thuế GTGT phải có chứng từ thanh toán không dùng tiền mặt, kể cả nhiều lần mua của cùng người bán trong một ngày có tổng từ 05 triệu đồng trở lên (Văn bản hợp nhất 18/VBHN-BTC ngày 04/06/2026 Đ.26; Văn bản hợp nhất 19/VBHN-BTC Đ.9 k.1 đ.c, c1); hóa đơn ghi đúng tên, địa chỉ, mã số thuế của oBacker (Nghị định 254/2026/NĐ-CP Đ.10); trả cá nhân không ký hợp đồng hoặc ký hợp đồng lao động dưới 03 tháng, từ 05 triệu đồng một lần trở lên, khấu trừ 10% (Nghị định 253/2026/NĐ-CP Đ.50 k.2); trả nhà cung cấp nước ngoài thì KTT kết luận bằng văn bản về nghĩa vụ khấu trừ nộp thay trước khi chi (Luật Thuế GTGT 114/VBHN-VPQH Đ.4 k.3, k.4). Mua chưa thanh toán mà đến hạn thanh toán không có chứng từ không dùng tiền mặt thì kê khai điều chỉnh giảm chi phí và thuế đầu vào (Văn bản hợp nhất 19/VBHN-BTC Đ.9 k.1 đ.c3; Văn bản hợp nhất 18/VBHN-BTC Đ.26 k.2 đ.g). Chi hoa hồng giới thiệu chỉ chuyển khoản vào tài khoản ghi trong hợp đồng giới thiệu khách hàng, kèm báo cáo hoa hồng đã chấp thuận theo Job PM-08 và chứng từ khấu trừ thuế lập tại thời điểm chi.
Thời hạn: chu kỳ chi thường xuyên vào thứ Ba và thứ Sáu, hồ sơ nộp trước 16h00 ngày làm việc liền trước; chi khẩn ngoài chu kỳ cần NDC bậc cao hơn một cấp phê duyệt và lý do ghi trên BM-02.

### NB-04. Tạm ứng

1. NĐN lập BM-03 Đề nghị tạm ứng, nêu mục đích và dự toán từng khoản; chuyến công tác thì kèm văn bản cử đi công tác lập trước chuyến đi. Kết quả: BM-03. Ghi sự kiện Tạo.
2. NDC duyệt theo bậc; khoản trên mức tối đa của một khoản tạm ứng do TGĐ duyệt ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 36.1). Kết quả: BM-03 đã duyệt. Ghi sự kiện Duyệt.
3. NTT tạo lệnh chuyển tiền vào tài khoản ngân hàng của người đề nghị; TGĐ hoặc Chủ tịch HĐQT xác nhận lệnh. Kết quả: tiền đã chuyển, công nợ tạm ứng được theo dõi. Ghi sự kiện Chuyển, rồi Xong.

Điểm kiểm soát: người có thẩm quyền duyệt chi và KTT ký chứng từ chi tiền trước khi chuyển tiền (Luật Kế toán 41/VBHN-VPQH Đ.19 k.3). Tạm ứng chỉ dùng cho công tác phí, chi phí phát sinh tại chỗ không lường trước, và mua sắm nhỏ mà nhà cung cấp không nhận chuyển khoản; một người có tối đa 03 khoản tạm ứng chưa hoàn cùng lúc ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 36.1). Mọi chuyến công tác cần văn bản cử đi công tác trước chuyến (Văn bản hợp nhất 19/VBHN-BTC Đ.10 k.8 đ.h).

### NB-05. Hoàn ứng

1. NĐN lập BM-04 Bảng hoàn ứng kèm toàn bộ chứng từ gốc và bằng chứng hình thức thanh toán; TL ký xác nhận trên BM-04 theo mẫu tại [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]]. Kết quả: BM-04. Ghi sự kiện Chuyển.
2. KTV kiểm BM-04 theo năm câu hỏi: có khoản từ 05 triệu đồng trở lên mà người lao động thanh toán bằng tiền mặt hay không; có nhiều lần mua của cùng người bán trong một ngày với tổng từ 05 triệu đồng trở lên hay không; hóa đơn ghi đúng tên, địa chỉ, mã số thuế của oBacker hay chưa; công tác phí có văn bản cử đi công tác hay không; việc hoàn lại cho người lao động có bằng chuyển khoản hay không. Kết quả: BM-04 đã kiểm. Ghi sự kiện Soát.
3. KTT ký kết luận xử lý khoản không đủ điều kiện trên BM-04. Ghi sự kiện Duyệt.
4. NTT tạo lệnh, TGĐ hoặc Chủ tịch HĐQT xác nhận lệnh để tất toán chênh lệch bằng chuyển khoản: thu lại phần thừa hoặc chi bù phần thiếu. Kết quả: số dư tạm ứng về 0 hoặc còn dư có lý do. Ghi sự kiện Xong.

Điểm kiểm soát: hoàn lại cho người lao động chỉ bằng chuyển khoản. Quá hạn hoàn ứng thì khóa quyền tạm ứng mới cho tới khi hoàn xong ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 38.2a); khoản chưa hoàn là một khoản nợ, không trừ vào tiền lương, vì Bộ luật Lao động 18/VBHN-VPQH Đ.102 k.1 chỉ cho khấu trừ tiền lương để bồi thường thiệt hại theo Điều 129 và Đ.127 k.2 cấm phạt tiền, cắt lương thay xử lý kỷ luật lao động.
Thời hạn: tạm ứng công tác 05 ngày làm việc kể từ ngày kết thúc chuyến; tạm ứng mua sắm 10 ngày làm việc kể từ ngày chi khoản cuối cùng; tạm ứng khác 15 ngày làm việc kể từ ngày hoàn thành nhiệm vụ.

### NB-06. Chi hộ bằng tiền cá nhân, không qua tạm ứng

1. NĐN lập BM-02 kèm chứng từ gốc và bằng chứng người lao động đã thanh toán không dùng tiền mặt (sao kê hoặc biên lai giao dịch đứng tên người lao động). Ghi sự kiện Tạo.
2. KTV, KTT, NDC xử lý BM-02 theo các bước 2, 4 và 5 của Job NB-03. Ghi sự kiện Soát và Duyệt.
3. NTT tạo lệnh hoàn tiền vào tài khoản người lao động; TGĐ hoặc Chủ tịch HĐQT xác nhận lệnh. Kết quả: ủy nhiệm chi của oBacker vào tài khoản người lao động. Ghi sự kiện Xong.

Điểm kiểm soát: khoản từ 05 triệu đồng trở lên chỉ tính vào chi phí được trừ và khấu trừ thuế GTGT đầu vào khi đủ ba điều kiện: văn bản của oBacker cho phép chi hộ ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 19); người lao động thanh toán không dùng tiền mặt; oBacker hoàn lại không dùng tiền mặt (Văn bản hợp nhất 19/VBHN-BTC Đ.9 k.1 đ.c2; Thông tư 20/2026/TT-BTC Đ.3 k.13 đ.b; Văn bản hợp nhất 18/VBHN-BTC Đ.26 k.2 đ.i). Người lao động trả bằng tiền mặt rồi oBacker hoàn bằng chuyển khoản thì thiếu điều kiện.

### NB-07. Thanh toán định kỳ và thanh toán tự động

1. KTV ghi mỗi khoản định kỳ vào sổ theo dõi thanh toán định kỳ: tên dịch vụ, nhà cung cấp, trong nước hay nước ngoài, số tiền mỗi kỳ, chu kỳ, ngày thanh toán, hình thức thanh toán, ngày hết hạn hợp đồng, có tự động gia hạn hay không, người sở hữu nghiệp vụ, trạng thái nghĩa vụ khấu trừ. Khoản định kỳ duyệt một lần cho cả chu kỳ hợp đồng tại thời điểm ký. Ghi sự kiện Tạo.
2. Mỗi kỳ KTV kiểm ba việc: số tiền đúng hợp đồng, hóa đơn kỳ này đã về, hợp đồng còn hiệu lực. Lệch một việc thì quay lại Job NB-03 đầy đủ. Khoản hoa hồng giới thiệu đối chiếu với báo cáo hoa hồng đã chấp thuận theo Job PM-08. Ghi sự kiện Soát.
3. Thanh toán theo Job NB-03 và ghi bản ghi đã thanh toán. Ghi sự kiện Xong.
4. Mỗi quý KTV rà soát sổ để phát hiện dịch vụ không còn dùng mà vẫn bị trừ tiền, hợp đồng sắp tự động gia hạn, thuê bao đang thanh toán bằng phương tiện thanh toán cá nhân.

Điểm kiểm soát: thời điểm lập hóa đơn dịch vụ là thời điểm hoàn thành cung cấp dịch vụ; thu tiền trước hoặc trong khi cung cấp thì là thời điểm thu tiền (Nghị định 254/2026/NĐ-CP Đ.9 k.2). Danh mục khoản chi ngay không qua chu kỳ do TGĐ phê duyệt, tối đa 05 dòng, rà soát mỗi 06 tháng.
Thời hạn: hóa đơn về trước ngày thanh toán 03 ngày làm việc; quá 07 ngày kể từ mốc mà hóa đơn chưa về thì KTV nhắc bằng văn bản; quá 15 ngày thì tạm dừng thanh toán kỳ tiếp theo và chuyển KTT.

### NB-08. Rà soát ngân sách bộ phận

Đầu vào: số liệu chi thực tế trên sổ. Đầu ra: bảng so sánh thực tế và ngân sách theo bộ phận ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 22). Ghi sự kiện Xong.
Thời hạn: trong 05 ngày làm việc đầu tháng sau.

### NB-09. Xuất hóa đơn dịch vụ cho khách

1. TL bộ phận thực hiện, hoặc KTT với mảng kế toán, xác nhận hoàn thành dịch vụ hoặc từng phần theo mốc ghi trong hợp đồng. Kết quả: biên bản hoặc bản ghi xác nhận có ngày. Ghi sự kiện Chuyển.
2. KTT chốt thời điểm xác định doanh thu và thời điểm lập hóa đơn, ghi kết luận trên hồ sơ. Ghi sự kiện Quyết định.
3. KTV kiểm thông tin bên mua (tên, địa chỉ, mã số thuế) khớp hợp đồng, hồ sơ khách và xác nhận của khách; số tiền khớp hợp đồng và phần đã xác nhận hoàn thành; chưa có hóa đơn nào cho cùng phần việc (bộ ba số hợp đồng, mốc hoàn thành, số tiền). Ghi sự kiện Soát.
4. KTV phát hành hóa đơn điện tử. Kết quả: hóa đơn điện tử đã phát hành. Ghi sự kiện Chuyển.
5. AM gửi hóa đơn cho khách và lưu bằng chứng đã gửi trong hồ sơ khách. Ghi sự kiện Gửi khách, rồi Xong.

Điểm kiểm soát: KTT chỉ ký xác nhận hồ sơ hợp đồng khi hợp đồng đủ ba nội dung: phạm vi dịch vụ và mốc hoàn thành từng phần; điều khoản và hình thức thanh toán; thời điểm và cách thức lập hóa đơn (Văn bản hợp nhất 19/VBHN-BTC Đ.8 k.2 đ.b). Khoản khách chuyển trước ghi là đặt cọc bảo đảm thực hiện hợp đồng theo Bộ luật Dân sự thì chưa lập hóa đơn khi nhận tiền; ghi là tạm ứng hoặc thanh toán đợt 1 thì lập hóa đơn tại thời điểm thu tiền (Nghị định 254/2026/NĐ-CP Đ.9 k.2). KTT quyết cách gọi tên khoản khách chuyển trước, bộ phận bán hàng không tự đặt. Mọi liên lạc ra khách về hóa đơn và công nợ đi qua AM.
Thời hạn: bước 1 trong 02 ngày làm việc kể từ khi hoàn thành; bước 4 trong 01 ngày làm việc kể từ thời điểm xác định doanh thu; bước 5 trong 01 ngày làm việc kể từ khi phát hành.

### NB-10. Duyệt điều khoản thanh toán ngoài chuẩn

1. KTV soát điều khoản thanh toán, hạn mức bán chịu và tên khoản tiền khách chuyển trước; KTT quyết. Điều khoản chuẩn là khách trả trước toàn bộ theo từng đơn hàng; khách mới trả trước ba kỳ dịch vụ đầu, không bán chịu. Ghi sự kiện Soát, rồi Quyết định.
2. TGĐ phê duyệt bằng văn bản, riêng từng hợp đồng: điều khoản trả sau; vượt hạn mức bán chịu; ký dưới bảng giá quá 15%. Đề xuất kèm lý do. Kết quả: phê duyệt bằng văn bản. Ghi sự kiện Duyệt.
3. KTT ký xác nhận hồ sơ hợp đồng; TGĐ ký hợp đồng. Kết quả: hợp đồng có số. Ghi sự kiện Xong.

Điểm kiểm soát: khách là người có liên quan thì chuyển sang [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 12a ngay ở bước 1 (Luật Doanh nghiệp 67/VBHN-VPQH Đ.167 k.5). KTT không ký xác nhận hồ sơ khi hợp đồng thiếu một trong ba nội dung bắt buộc nêu ở Job NB-09.
Thời hạn: bước 1 và bước 2, mỗi bước trong 02 ngày làm việc.

### NB-11. Lập bảng tuổi nợ phải thu

1. KTV lập và cập nhật bảng tuổi nợ từ sổ công nợ phải thu hằng tuần, theo bốn nhóm: trong hạn; quá hạn tới 30 ngày; quá hạn 31 tới 90 ngày; quá hạn từ 91 ngày trở lên. Khoản đang tranh chấp đếm riêng, không gộp vào bốn nhóm. Kết quả: bảng tuổi nợ. Ghi sự kiện Xong.
2. KTV cung cấp số liệu công nợ cho AM tối thiểu 01 ngày làm việc trước từng mốc nhắc nợ. Ghi sự kiện Chuyển.

Thời hạn: hằng tuần.

### NB-12. Nhắc phí và nhắc nợ theo bảng mốc

1. KTV lập nội dung và số liệu nhắc nợ từ bảng tuổi nợ. Ghi sự kiện Chuyển.
2. AM gửi cho khách theo bảng mốc tại [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.8.2 (bản gốc) và lưu bằng chứng đã gửi trong hồ sơ khách. KTV, KTT, TL không liên hệ trực tiếp khách về công nợ. Ghi sự kiện Gửi khách.
3. Mốc quá hạn 30 ngày: KTT báo TGĐ và đề xuất phương án; COO duyệt thư nhắc chính thức. Mốc 45 ngày: COO lập bảng đánh giá nội bộ trình CEO. Mốc 60 ngày và 75 ngày: CEO quyết. Ghi sự kiện Quyết định.
4. Khách đang khiếu nại thì KTV chuyển khoản đó sang nhóm đang tranh chấp và chuyển sang quy trình khiếu nại. Ghi sự kiện Phát sinh việc.

Thời hạn: theo bảng mốc tại [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.8.2; AM gọi điện ở mốc quá hạn 20 ngày.

### NB-13. Đề xuất dừng dịch vụ với khách quá hạn

1. KTT báo TGĐ và đề xuất phương án, kèm bảng tuổi nợ và lịch sử nhắc nợ. Ghi sự kiện Chuyển.
2. TGĐ quyết dừng cung cấp dịch vụ khi quá hạn từ 31 ngày trở lên; không cấp nào khác quyết. Ghi sự kiện Quyết định.
3. AM gửi thông báo bằng văn bản cho khách trước khi dừng. Ghi sự kiện Gửi khách, rồi Xong.

Thời hạn: trong 02 ngày làm việc kể từ khi chạm mốc.

### NB-14. Đối chiếu công nợ phải thu với khách

1. KTV lập biên bản đối chiếu công nợ từ sổ công nợ. Ghi sự kiện Chuyển.
2. AM gửi khách, nhận biên bản có xác nhận của khách. Biên bản khách không xác nhận cũng lưu, kèm bằng chứng đã gửi, và khoản đó chuyển sang nhóm đang tranh chấp. Ghi sự kiện Gửi khách, rồi Xong.

Thời hạn: trong 05 ngày làm việc đầu tháng đầu quý sau.

### NB-15. Đề xuất xóa nợ phải thu khó đòi

1. KTT tổng hợp hồ sơ chứng minh đã dùng hết biện pháp thu hồi, rà soát điều kiện pháp lý, trình HĐQT. Ghi sự kiện Chuyển.
2. HĐQT quyết xóa nợ bằng nghị quyết; TGĐ và KTT không có quyền xóa nợ. Ghi sự kiện Quyết định.
3. KTV theo dõi khoản đã xóa trên sổ chi tiết ngoài sổ kế toán chính và lưu đủ hồ sơ. Ghi sự kiện Xong.

Điểm kiểm soát: nghị quyết HĐQT là chứng từ bắt buộc của quyết định xóa nợ ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 16.3 và mục 17.2).
Thời hạn: không có thời hạn cố định.

### NB-16. Theo dõi tuổi nợ phục vụ dự phòng

1. KTV cập nhật tuổi nợ của từng khoản, đếm theo thời gian trả nợ gốc ghi trong hợp đồng; hai bên tự gia hạn nợ không làm mốc đếm dịch đi. Ghi sự kiện Xong.
2. KTV ghi dấu hiệu tổn thất của khoản chưa đến hạn: khách đã phá sản hoặc đang mở thủ tục phá sản, đang giải thể, mất tích, bỏ trốn khỏi địa điểm kinh doanh. Ghi sự kiện Chuyển.
3. KTT tính và trình mức dự phòng khi lập báo cáo tài chính; trích và hoàn nhập làm tại thời điểm lập báo cáo tài chính, không làm hằng tháng. Ghi sự kiện Quyết định.

Điểm kiểm soát: bốn mức trích lập theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 17.1; phần dự phòng trích không đúng quy định bị loại khỏi chi phí được trừ.
Thời hạn: cùng kỳ với Job NB-11.

### NB-17. Kiểm quỹ tiền mặt

1. TQ, KTV và KTT cùng kiểm quỹ tiền mặt định kỳ hằng tháng, đối chiếu sổ quỹ với tiền mặt thực tế. Kết quả: biên bản kiểm quỹ có chữ ký của TQ, KTV và KTT. Ghi sự kiện Xong.
2. KTT hoặc người TGĐ chỉ định kiểm quỹ đột xuất, không báo trước, tối thiểu 02 lần một năm. Kết quả: biên bản kiểm quỹ có chữ ký. Ghi sự kiện Xong.

Điểm kiểm soát: biên bản kiểm quỹ có chữ ký theo chức danh ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 32, Điều 33). Vai trò TQ chưa có người giữ; khi chưa có thì oBacker chưa xuất quỹ tiền mặt.
Thời hạn: theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 33.

### NB-18. Đối chiếu sao kê ngân hàng với sổ kế toán

1. AD-KT chọn cấp đối chiếu cho lần làm: đối chiếu nhanh mỗi 02 tuần, hoàn thành vào ngày làm việc đầu tiên của kỳ sau; đối chiếu đầy đủ hằng tháng, hoàn thành trong 05 ngày làm việc đầu tháng sau. Tháng nào cũng chạy đủ cả hai cấp. Ghi sự kiện Nhận.
2. AD-KT tải sao kê của kỳ, đủ mọi tài khoản của oBacker, rồi đối chiếu số dư cuối kỳ trên sao kê với số dư trên sổ kế toán. Ghi sự kiện Soát.
3. AD-KT đối chiếu từng giao dịch trên sao kê với sổ kế toán, rồi lọc giao dịch chi không có đề nghị thanh toán tương ứng. Ghi sự kiện Soát.
4. AD-KT truy nguyên từng giao dịch đó trong 24 giờ: ngày, số tiền, người nhận, người lập lệnh. Ghi sự kiện Soát.
5. AD-KT báo TGĐ, ngay trong ngày phát hiện, mọi giao dịch chưa truy nguyên được sau 24 giờ và mọi chênh lệch chưa giải thích được; giao dịch chi không có đề nghị thanh toán với số tiền lớn thì báo ngay, không chờ hết 24 giờ. AD-KT không báo qua KTV hoặc KTT; KTT nhận bản sao để xử lý phần kế toán. Ghi sự kiện Phát sinh việc.
6. AD-KT lập bảng đối chiếu từng tài khoản kèm sao kê, ký và lưu vào hồ sơ kỳ. Ghi sự kiện Xong.
7. Cấp đối chiếu đầy đủ: AD-KT trình TGĐ duyệt bảng đối chiếu. Ghi sự kiện Duyệt.

Điểm kiểm soát: bảng đối chiếu có chữ ký của AD-KT; cấp đối chiếu đầy đủ có TGĐ duyệt. Người đối chiếu là AD-KT, không phải KTV ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 34, Điều 48 chốt số 1). Tiền khách về chưa khớp hóa đơn thì AD-KT báo KTT ngay trong ngày.
Thời hạn: đối chiếu nhanh mỗi 02 tuần; đối chiếu đầy đủ trong 05 ngày làm việc đầu tháng sau; truy nguyên giao dịch trong 24 giờ.

### NB-31. Lập phiếu thu và phiếu chi cho mọi lần nhập, xuất quỹ tiền mặt

1. KTV lập phiếu thu BM-PT hoặc phiếu chi BM-PC ngay tại thời điểm nhập quỹ hoặc xuất quỹ, từ chứng từ gốc của khoản thu hoặc khoản chi; khoản chi kèm BM-02 đã duyệt. Số phiếu đánh liên tục trong kỳ kế toán. Kết quả: phiếu thu hoặc phiếu chi. Ghi sự kiện Tạo.
2. Phiếu chi đủ chữ ký của người có thẩm quyền duyệt chi và KTT trước khi xuất quỹ; TQ ký phiếu theo chức danh. Kết quả: phiếu đủ chữ ký theo chức danh. Ghi sự kiện Duyệt, rồi Xong.
3. Khách trả tiền mặt mà chưa lập được phiếu thu thì người nhận nộp ngay vào tài khoản ngân hàng của oBacker trong ngày, không nhập quỹ. Ghi sự kiện Chuyển.

Điểm kiểm soát: BM-02 không thay phiếu chi. Chứng từ chi tiền do người có thẩm quyền duyệt chi và KTT ký trước khi thực hiện (Luật Kế toán 41/VBHN-VPQH Đ.19 k.3); ký chứng từ khi chưa ghi đủ nội dung thuộc trách nhiệm của người ký là hành vi bị nghiêm cấm (Đ.19 k.2), nên phiếu chi trống đã ký phải hủy; mỗi nghiệp vụ chỉ lập chứng từ một lần (Đ.18 k.1). Chứng từ thu, chi tiền ghi tổng số tiền bằng số và bằng chữ (Đ.16 k.1). Căn cứ: [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 32; [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] Điều 4; Thông tư 99/2025/TT-BTC, Tài khoản 111, mục 1 điểm b.
Thời hạn: ngay tại thời điểm nhập quỹ hoặc xuất quỹ, không lập sau.

### NB-19. Rà soát phân quyền lập và duyệt trên ngân hàng điện tử

1. TGĐ đối chiếu danh sách người dùng và quyền hiện hành trên hệ thống ngân hàng với danh sách nhân sự và vai trò hiện tại, ngay trong ngày khi có nhân sự nghỉ việc hoặc thay đổi vai trò. Ghi sự kiện Soát.
2. TGĐ xóa hoặc hủy kích hoạt quyền của nhân sự nghỉ việc, dù người đó tạo lệnh hay xác nhận lệnh, ngay trong ngày làm việc cuối cùng. HR báo TGĐ trước 24 giờ để thu hồi kịp ngày đó. Ghi sự kiện Xong.
3. TGĐ lập bảng rà soát và đề xuất điều chỉnh nếu quyền lệch với vai trò. Ghi sự kiện Quyết định.

Điểm kiểm soát: người tạo lệnh khác người xác nhận lệnh, kiểm lại mỗi lần đổi nhân sự. Luật Kế toán 41/VBHN-VPQH Đ.13 k.7 nghiêm cấm "Người có trách nhiệm quản lý, điều hành đơn vị kế toán kiêm làm kế toán, thủ kho, thủ quỹ, trừ doanh nghiệp tư nhân và công ty trách nhiệm hữu hạn do một cá nhân làm chủ sở hữu"; oBacker là công ty cổ phần nên không thuộc trường hợp loại trừ. Đ.52 k.3 và k.4 quy định thêm hai điều cấm với người làm kế toán. Căn cứ: [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 35, Điều 47.
Thời hạn: ngay trong ngày khi có nhân sự nghỉ việc hoặc thay đổi vai trò ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 35.2).

### NB-20. Mở, đóng, thay đổi tài khoản ngân hàng

Đầu vào: đề xuất kèm lý do. Đầu ra: quyết định và hồ sơ ngân hàng ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 34). oBacker không dùng tài khoản cá nhân của nhân sự để thu tiền của khách ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 34.3). Ghi sự kiện Quyết định, rồi Xong.
Thời hạn: trong 03 ngày làm việc kể từ khi đã duyệt.

### NB-21. Lập kế hoạch dòng tiền

KTV lập bảng kế hoạch dòng tiền 03 tháng tới từ công nợ phải thu, công nợ phải trả và ngân sách, cập nhật hằng tháng ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 22). Ghi sự kiện Xong.
Thời hạn: trong 05 ngày làm việc đầu tháng.

### NB-22. Ghi sổ kế toán kỳ của oBacker

KTV ghi sổ kế toán kỳ từ chứng từ kỳ đã đủ. KTV không đồng thời là TQ, không đồng thời duyệt chi hoặc xác nhận lệnh, và không đồng thời đối chiếu sao kê ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 42, Điều 43). Ghi sự kiện Xong.
Điểm kiểm soát: mỗi nghiệp vụ chỉ lập chứng từ một lần (Luật Kế toán 41/VBHN-VPQH Đ.18 k.1).
Thời hạn: theo lịch của [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 42, Điều 43.

### NB-23. Khóa sổ và đối chiếu kỳ của oBacker

Đầu vào: sổ kỳ; sao kê; biên bản kiểm quỹ; số hoa hồng đã phát sinh chưa có hóa đơn, từ Job NB-49, để trích trước. Đầu ra: bảng cân đối số phát sinh; bảng chênh lệch ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 43). Không khóa sổ khi còn sự cố chênh lệch chưa đóng. Hoa hồng ghi nhận vào tài khoản 641; khoản đã có doanh thu tính hoa hồng mà chưa có hóa đơn trích trước vào tài khoản 335 tại thời điểm khóa sổ. Ghi sự kiện Xong.
Thời hạn: theo lịch của [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 43, sau Job NB-22.

### NB-24. Kê khai và nộp thuế của chính oBacker

KTV lập tờ khai và nộp thuế theo lịch pháp định; KTT ký xác nhận số liệu trước khi nộp. KTV lấy số liệu từ sổ kỳ đã khóa và số thuế TNCN đã khấu trừ khi chi cho đối tác là cá nhân (từ Job NB-03). Đầu ra: tờ khai đã nộp; Thông báo tiếp nhận; giấy nộp tiền. Ghi sự kiện Nộp cơ quan, rồi Xong. Khoản nộp ngân sách nhà nước đi theo nhóm N6 của Job NB-03.
Thời hạn: làm trước 03 ngày làm việc so với thời hạn theo pháp luật; khoản nộp ngân sách nhà nước nộp trước hạn nộp 02 ngày làm việc.

### NB-25. Lập và nộp báo cáo tài chính năm của oBacker

KTV lập báo cáo tình hình tài chính và báo cáo kết quả hoạt động từ sổ năm đã khóa và biên bản kiểm kê, rồi nộp. Ghi sự kiện Nộp cơ quan, rồi Xong.
Điểm kiểm soát: báo cáo đủ ba chữ ký theo chức danh: người lập là KTV, KTT, NĐDPL (Luật Kế toán 41/VBHN-VPQH Đ.29 k.2 đ.d).
Thời hạn: 90 ngày kể từ ngày kết thúc kỳ kế toán năm (CC-KT-03); nộp trước hạn pháp định ít nhất 05 ngày làm việc.

### NB-26. Kiểm kê tài sản và công nợ

Đầu vào: danh mục tài sản; sổ công nợ. Đầu ra: biên bản kiểm kê ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 44). Ghi sự kiện Xong.
Thời hạn: theo năm và khi có sự kiện bắt buộc, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 44.

### NB-27. Đưa tài liệu kế toán vào lưu trữ

1. KTV đưa bộ tài liệu kế toán của kỳ vào lưu trữ. Kết quả: bản ghi đã đưa vào lưu trữ. Ghi sự kiện Xong.

Thời hạn lưu: ít nhất 05 năm với tài liệu dùng cho quản lý, điều hành, gồm báo giá, biên bản so sánh, phiếu xác minh nhà cung cấp; ít nhất 10 năm với chứng từ kế toán dùng trực tiếp để ghi sổ và lập báo cáo tài chính, sổ kế toán và báo cáo tài chính năm, gồm hóa đơn, ủy nhiệm chi, chứng từ khấu trừ thuế, hợp đồng làm căn cứ ghi sổ; vĩnh viễn với tài liệu có tính sử liệu, có ý nghĩa quan trọng về kinh tế, an ninh, quốc phòng. BM-05 lưu 05 năm sau khi chấm dứt quan hệ với nhà cung cấp.

Điểm kiểm soát: lưu trữ điện tử được, không cần in giấy, và phải tra cứu được suốt thời hạn lưu trữ (Luật Kế toán 41/VBHN-VPQH Đ.41 k.3, k.5; Đ.18 k.6).
Thời hạn: trong 12 tháng kể từ ngày kết thúc kỳ kế toán năm (CC-KT-04; [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 45).

### NB-28. Rà soát các khoản chạm mức tối đa trước 31/12

Đầu vào: sổ tới thời điểm rà. Đầu ra: bảng rà soát các khoản trang phục, phúc lợi, bảo hiểm hưu trí bổ sung, ăn giữa ca, quỹ lương dự phòng, khấu hao xe từ 9 chỗ trở xuống (CC-KT-11 tới CC-KT-16; [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 21, Điều 26, Điều 27). Ghi sự kiện Xong.
Thời hạn: trước 15/12.

### NB-29. Rà soát giao dịch với người có liên quan

1. Mọi nhân sự khai báo khi nhà cung cấp có quan hệ với người khai báo: người thân; doanh nghiệp mà người khai báo hoặc người thân có phần vốn góp; nơi người khai báo làm thêm. Người khai báo không tham gia bước chọn nhà cung cấp. Ghi sự kiện Tạo.
2. KTT lập bảng rà soát từ danh sách người có liên quan, danh mục giao dịch trong kỳ và danh sách đối tác mới từ Job PM-01. Ghi sự kiện Soát.
3. HĐQT thông qua giao dịch thuộc diện theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 12a; hồ sơ phê duyệt đi kèm bảng rà soát. Ghi sự kiện Duyệt, rồi Xong.

Điểm kiểm soát: giao dịch với người có liên quan phải qua cấp có thẩm quyền, làm sai thì giao dịch bị xử lý kèm bồi thường (Luật Doanh nghiệp 67/VBHN-VPQH Đ.167 k.5).
Thời hạn: hằng quý và trước khi ký từng giao dịch thuộc diện.

### NB-30. Điểm kiểm soát định kỳ

Đầu vào: theo từng điểm kiểm soát. Đầu ra: bản ghi kết quả từng điểm ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 47, Điều 48). Ghi sự kiện Xong.
Thời hạn: theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 48.

### NB-32. Tạm ứng tiền lương

1. NĐN lập BM-08 Đề nghị tạm ứng tiền lương, ghi rõ thuộc trường hợp bắt buộc nào tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 26a.1 hay thuộc trường hợp theo thỏa thuận. Ghi sự kiện Tạo.
2. KTV kiểm điều kiện của người đề nghị: đang làm việc theo hợp đồng lao động còn hiệu lực, không trong thời gian tạm hoãn thực hiện hợp đồng, không còn khoản tạm ứng tiền lương chưa trừ hết. Với trường hợp theo thỏa thuận, KTV kiểm thêm hai giới hạn: mức tối đa một lần 50% tiền lương theo hợp đồng lao động của tháng lập đề nghị (ĐM-21); số lần tối đa 02 lần một quý và 03 lần một nửa năm (ĐM-22). KTV ghi số lần đã dùng; chạm giới hạn thì từ chối và ghi rõ giới hạn đã chạm. Ghi sự kiện Soát.
3. KTT ký BM-08 trước người duyệt `[Luật Kế toán 41/VBHN-VPQH Đ.19 k.3]`. Duyệt theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 26a.3: TGĐ duyệt khi người đề nghị là người lao động hoặc người quản lý do TGĐ bổ nhiệm; HĐQT duyệt khi người đề nghị là TGĐ, Chủ tịch HĐQT hoặc người quản lý khác do HĐQT bổ nhiệm. Ghi sự kiện Duyệt.
4. NTT tạo lệnh chuyển tiền vào tài khoản ngân hàng đứng tên chính người lao động, không chi bằng tiền mặt; TGĐ hoặc Chủ tịch HĐQT xác nhận lệnh. TGĐ là người đề nghị thì Chủ tịch HĐQT xác nhận lệnh; Chủ tịch HĐQT là người đề nghị thì TGĐ xác nhận lệnh. Ghi sự kiện Chuyển.
5. KTV ghi số tiền đã chuyển vào trường Tạm ứng kỳ I của Bảng thanh toán tiền lương mẫu số 01-LĐTL của kỳ lương tương ứng, tách khỏi nhóm trường Các khoản phải khấu trừ vào lương. Ghi sự kiện Chuyển.
6. KTV trừ khoản đã tạm ứng khi tính số tiền lương còn phải trả của kỳ; KTT soát. Ghi sự kiện Soát, rồi Xong.

Điểm kiểm soát: không tính lãi trên khoản tạm ứng tiền lương (Bộ luật Lao động 18/VBHN-VPQH Đ.101 k.1). Khoản tạm ứng trừ đúng một lần, tại kỳ lương mà khoản đó thuộc về; phần vượt thành khoản nợ, thu hồi theo bốn cách tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 38.2a, không trừ vào tiền lương kỳ sau, vì Bộ luật Lao động 18/VBHN-VPQH Đ.102 k.1 chỉ cho khấu trừ tiền lương để bồi thường thiệt hại theo Điều 129. Người đề nghị không tự duyệt và không tự xác nhận lệnh cho khoản tạm ứng của chính người đề nghị ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 47).
Thời hạn: bước 4 và bước 6 theo kỳ lương tương ứng.

### NB-33. Tổng hợp bảng công tạm và gửi xác nhận

1. HR tổng hợp bảng công tạm từ dữ liệu ghi nhận thời điểm vào ca và ra ca từ ngày 21 tháng trước đến ngày 15, cùng đơn đã chấp thuận trong kỳ, rồi gửi từng người lao động xác nhận. Kết quả: bảng công tạm đã gửi; bản ghi thời điểm gửi và thời hạn xác nhận, lưu trên hệ thống. Ghi sự kiện Chuyển, rồi Chờ.
2. Người lao động xác nhận bảng công tạm hoặc phản hồi lệch từ ngày 16 đến ngày 19. Hết ngày 19 mà người lao động không phản hồi thì bảng công tạm xác định là đã xác nhận. Ghi sự kiện Hết chờ.

Điểm kiểm soát: cơ chế xác định đã xác nhận chỉ có cơ sở khi hệ thống lưu được thời điểm gửi và thời hạn xác nhận.
Thời hạn: ngày 16 hằng tháng gửi; từ ngày 16 đến ngày 19 xác nhận.

### NB-34. Chốt bảng công của kỳ

1. HR cộng công từ ngày 16 đến ngày 20 theo dữ liệu hệ thống. Ghi sự kiện Nhận.
2. HR chốt bảng công của kỳ trên cơ sở bảng công tạm đã qua thời hạn xác nhận, phản hồi lệch của người lao động nếu có, và dữ liệu từ ngày 16 đến ngày 20. Ngày công chưa rõ tính theo số thấp hơn; phần chênh trả bù ở kỳ sau, chỉ bù thêm. Kết quả: bảng công của kỳ đã chốt. Ghi sự kiện Xong.

Điểm kiểm soát: oBacker không trả thừa tiền lương; trừ khoản trả thừa của kỳ trước vào tiền lương kỳ sau nằm ngoài trường hợp khấu trừ duy nhất mà Bộ luật Lao động 18/VBHN-VPQH Đ.102 k.1 cho phép (CC-LD-65). Khoản trả thừa là khoản nợ, xử lý theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 26a.4 và mục 38.2a.
Thời hạn: ngày 20 hằng tháng.

### NB-35. Duyệt toàn bảng công

CEO duyệt toàn bảng công của kỳ bằng một chữ ký trên bảng chấm công BM-09, người lập là HR. Công của CEO nằm trong bảng công toàn công ty và đi qua chính chữ ký đó. Kết quả: BM-09 của kỳ đã duyệt, là đầu vào bắt buộc của Job NB-36. Ghi sự kiện Duyệt.
Điểm kiểm soát: BM-09 là chứng từ điện tử, ký bằng chữ ký điện tử hoặc hình thức xác nhận khác bằng phương tiện điện tử (Luật Kế toán 41/VBHN-VPQH Đ.16 k.1 đ.g; Đ.19 k.4; [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] mục 6.6b).
Thời hạn: ngày 21 hằng tháng.

### NB-36. Tính lương, lập Bảng thanh toán tiền lương, và tính phần bù của kỳ trước

1. KTV tính lương từ BM-09 của kỳ đã duyệt. Ghi sự kiện Nhận.
2. KTV lập Bảng thanh toán tiền lương mẫu số 01-LĐTL: đưa khoản thưởng đã chi ngày 15 của tháng vào bảng để tính thuế TNCN; trừ khoản tạm ứng tiền lương đã ghi theo Job NB-32; tính phần bù của kỳ trước nếu có. Kết quả: Bảng thanh toán tiền lương của kỳ. Ghi sự kiện Chuyển.

Điểm kiểm soát: Bảng thanh toán tiền lương giữ ba chữ ký theo chức danh của mẫu 01-LĐTL: người lập bảng KTV, Kế toán trưởng KTT, Giám đốc TGĐ ([[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] Điều 4). Thuế TNCN khấu trừ đúng một lần khi tính tiền lương của tháng, trên tổng thu nhập tính thuế gồm tiền lương và khoản thưởng đã chi ngày 15; người không ký hợp đồng hoặc ký hợp đồng lao động dưới 03 tháng khấu trừ theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 26a.5. Thu nhập từ tiền lương, tiền công thuộc diện miễn thuế TNCN trong 05 năm kể từ ngày có văn bản xác nhận của Sở Khoa học và Công nghệ (văn bản ngày 29/12/2025) thì mức thuế khấu trừ là 0 đồng, căn cứ Nghị quyết 136/2024/QH15 Đ.14 k.1 đ.c; Nghị quyết 53/2024/NQ-HĐND Đ.6 k.4, Đ.7 k.3; Nghị quyết 24/2026/NQ-HĐND Đ.15 k.2 (CC-KT-91). Trường Tạm ứng kỳ I đứng tách khỏi nhóm trường Các khoản phải khấu trừ vào lương ([[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] mục 4.3).
Thời hạn: từ ngày 23 hằng tháng.

### NB-37. Duyệt bảng lương, lập lệnh, xác nhận lệnh và chi lương

1. TGĐ duyệt Bảng thanh toán tiền lương; người lập bảng khác người duyệt bảng. Kết quả: Bảng thanh toán tiền lương đã duyệt. Ghi sự kiện Duyệt.
2. NTT lập lệnh chuyển tiền lương vào tài khoản ngân hàng chính chủ của người lao động, không chuyển vào tài khoản của người thứ ba. Kết quả: lệnh chuyển tiền lương đã lập. Ghi sự kiện Chuyển.
3. TGĐ hoặc Chủ tịch HĐQT kiểm chứng từ đã có phê duyệt và xác nhận lệnh; người lập lệnh khác người xác nhận lệnh, trên hai tài khoản người dùng khác nhau. Kết quả: lệnh đã xác nhận; tiền lương của kỳ đã chi. Ghi sự kiện Xong.

Điểm kiểm soát: Bảng thanh toán tiền lương mẫu 01-LĐTL có đủ ba chữ ký theo chức danh của mẫu ([[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] Điều 4); xác nhận lệnh là thao tác thực hiện, không phải một lần phê duyệt thêm ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] Điều 35).
Thời hạn: chi xong trong ngày làm việc cuối cùng của tháng.

### NB-38. Xét đơn nghỉ phép, đơn cập nhật công, đơn làm việc từ xa, đăng ký làm thêm giờ

1. Người lao động gửi đơn; đơn chỉ có hiệu lực khi đã ghi nhận trên hệ thống ([[02_Quy_che_tien_luong_va_tien_thuong_noi_bo|OBK-QCNS-02]] mục 7). Ghi sự kiện Tạo.
2. Người xét: đơn nghỉ phép do quản lý trực tiếp, theo [[Noi_quy_lao_dong|OBK-NQLD]] Điều 7.5.2; đơn làm việc từ xa do Tổng giám đốc hoặc người được ủy quyền, theo [[Noi_quy_lao_dong|OBK-NQLD]] Điều 11.2; đơn cập nhật công do quản lý trực tiếp; đăng ký làm thêm giờ do quản lý trực tiếp khi lũy kế giờ làm thêm của tháng dưới 10 giờ, do COO hoặc CEO theo nhánh quản lý của bộ phận khi từ 10 giờ trở lên. Kết quả: đơn chấp thuận hoặc từ chối, ghi nhận trên hệ thống. Ghi sự kiện Quyết định.
3. Đơn đã chấp thuận trong kỳ là đầu vào của Job NB-33. Ghi sự kiện Xong.

### NB-39. Đăng ký mã bảo hiểm xã hội lần đầu cho người lao động của oBacker

1. HR kiểm hợp đồng lao động đã ký thuộc đối tượng tham gia bảo hiểm xã hội bắt buộc. Ghi sự kiện Nhận.
2. HR kê khai và nộp hồ sơ tham gia bảo hiểm xã hội bắt buộc cho cơ quan bảo hiểm xã hội. Kết quả: hồ sơ đã nộp. Ghi sự kiện Nộp cơ quan.
3. HR theo dõi kết quả xử lý của cơ quan bảo hiểm xã hội và xác nhận mã số bảo hiểm xã hội cho người lao động. Kết quả: xác nhận của cơ quan bảo hiểm xã hội. Ghi sự kiện Xong.

Điểm kiểm soát: thời hạn 30 ngày kể từ ngày người lao động thuộc đối tượng tham gia (Luật Bảo hiểm xã hội 41/2024/QH15 Đ.28 k.1; CC-LD-140).

### NB-40. Báo tăng lao động

1. HR tạo Job ngay khi ký hợp đồng lao động. Ghi sự kiện Tạo.
2. HR lập hồ sơ báo tăng lao động theo Mẫu D02-LT từ hợp đồng lao động đã ký và thông tin cá nhân, nộp theo hình thức điện tử. Kết quả: hồ sơ báo tăng đã nộp. Ghi sự kiện Nộp cơ quan, rồi Xong.
3. Khi có người lao động mới, KTV tra cứu mã số thuế TNCN của người lao động trên cổng thông tin của cơ quan thuế; người lao động chưa có mã số thuế thì KTV lập hồ sơ đăng ký thuế lần đầu và nộp qua cổng thuế điện tử. Ghi sự kiện Nộp cơ quan.

Thời hạn: hồ sơ báo tăng theo mốc 30 ngày của CC-LD-140; đăng ký thuế trong 10 ngày làm việc kể từ ngày phát sinh quan hệ chi trả thu nhập.

### NB-41. Báo giảm lao động

1. HR lập hồ sơ báo giảm lao động từ quyết định hoặc thỏa thuận chấm dứt hợp đồng lao động, ngay khi có quyết định chấm dứt hoặc trong kỳ kê khai của tháng chấm dứt, và nộp trước ngày cuối cùng của tháng người lao động chấm dứt hợp đồng. Kết quả: hồ sơ báo giảm đã nộp. Ghi sự kiện Nộp cơ quan, rồi Xong.

Điểm kiểm soát: Luật Bảo hiểm xã hội 41/2024/QH15 Đ.39 k.1 đ.c xếp việc đăng ký tiền lương làm căn cứ đóng bảo hiểm xã hội bắt buộc thấp hơn mức quy định tại Điều 31 khoản 1 vào trốn đóng.
Thời hạn: mốc số ngày theo pháp luật chưa xác minh được trong kho văn bản (PL_1 mục 2.7).

### NB-42. Tổng hợp và nộp tiền bảo hiểm xã hội

1. HR lập hồ sơ nộp tiền bảo hiểm xã hội theo từng mã bảo hiểm xã hội, từ Bảng thanh toán tiền lương đã duyệt và thông báo C12 của cơ quan bảo hiểm xã hội. Kết quả: hồ sơ nộp tiền đã lập. Ghi sự kiện Chuyển.
2. Khoản nộp tiền đi theo Job NB-03, nhóm N6 (khoản nộp bắt buộc). Kết quả: khoản nộp tiền đã chuyển sang chu trình CHI. Ghi sự kiện Xong.

Thời hạn: chậm nhất ngày cuối cùng của tháng tiếp theo (CC-LD-143).

### NB-43. Chốt sổ bảo hiểm xã hội khi người lao động nghỉ việc

1. HR phối hợp với cơ quan bảo hiểm xã hội chốt sổ, sau khi đã báo giảm theo Job NB-41. Kết quả: tờ rời xác nhận quá trình đóng bảo hiểm xã hội và bảo hiểm thất nghiệp đến thời điểm nghỉ việc (CC-LD-159). oBacker còn chậm đóng thì xác nhận thời gian đóng đến thời điểm đã đóng đủ (CC-LD-158). Ghi sự kiện Nộp cơ quan.
2. HR hoàn trả cho người lao động bản chính sổ bảo hiểm xã hội cùng các tờ rời, và bản chính văn bằng, chứng chỉ hoặc giấy tờ tùy thân nếu oBacker đang giữ. Hai bên ký biên bản giao nhận sổ. Kết quả: sổ đã trả người lao động. Ghi sự kiện Xong.

Thời hạn: mốc số ngày theo pháp luật chưa xác minh được trong kho văn bản; nghĩa vụ có tại CC-LD-30.

### NB-44. Lập và cập nhật sổ quản lý lao động

1. HR lập sổ quản lý lao động của oBacker từ danh sách lao động, đủ 20 nhóm thông tin bắt buộc. Ghi sự kiện Tạo.
2. HR cập nhật sổ khi người lao động bắt đầu làm việc, ngay trong ngày bắt đầu làm việc, và khi có biến động. Ghi sự kiện Xong.

Thời hạn: lập trong 30 ngày kể từ ngày bắt đầu hoạt động; cập nhật kể từ ngày người lao động bắt đầu làm việc (CC-LD-123 tới CC-LD-125).

### NB-45. Báo cáo tình hình sử dụng lao động 06 tháng đầu năm

Đầu vào: sổ quản lý lao động; biến động trong kỳ. HR lập báo cáo theo Mẫu số 01/PLI, nộp qua Cổng Dịch vụ công Quốc gia và thông báo tới cơ quan bảo hiểm xã hội cấp huyện (CC-LD-121). Ghi sự kiện Nộp cơ quan, rồi Xong.
Thời hạn: trước ngày 05 tháng 6.

### NB-46. Báo cáo tình hình sử dụng lao động cả năm

Đầu vào và đầu ra như Job NB-45. HR lập báo cáo theo Mẫu số 01/PLI, nộp qua Cổng Dịch vụ công Quốc gia và thông báo tới cơ quan bảo hiểm xã hội cấp huyện (CC-LD-121). Ghi sự kiện Nộp cơ quan, rồi Xong.
Thời hạn: trước ngày 05 tháng 12.

### NB-47. Rà soát giới hạn giờ làm thêm

HR rà soát ngày 20 hằng tháng, cùng ngày chốt bảng công, từ bảng công của kỳ đã chốt. Kết quả: bảng rà soát số giờ làm thêm của từng người lao động so với mức tối đa theo tháng và theo năm. Mọi đợt làm thêm giờ lập bảng kê chi tiết theo kỳ ([[02_Quy_che_tien_luong_va_tien_thuong_noi_bo|OBK-QCNS-02]] mục 5.3). Ghi sự kiện Xong.
Điểm kiểm soát: mức tối đa theo pháp luật là 40 giờ mỗi tháng; 200 giờ mỗi năm, hoặc 300 giờ mỗi năm với 5 nhóm ngành nghề (CC-LD-69 tới CC-LD-71).

### NB-48. Rà soát mức lương tối thiểu vùng

1. HR đối chiếu danh sách lao động, mức lương và địa bàn với mức lương tối thiểu vùng hiện hành theo Nghị định 293/2025/NĐ-CP, hiệu lực 01/01/2026, khi có nghị định mới và khi oBacker đổi địa bàn. Ghi sự kiện Soát.
2. HR lập danh sách người lao động có mức lương dưới mức tối thiểu và đề xuất điều chỉnh. oBacker rà soát hợp đồng, thỏa ước và quy chế để điều chỉnh (CC-LD-60 tới CC-LD-63). Ghi sự kiện Xong.

### NB-49. Chốt doanh thu tính hoa hồng theo khách

1. KTV lấy khoản thu của khách thuộc sổ đăng ký giới thiệu, đã phân loại theo nhóm khoản thu; khoản thu không phải doanh thu (nhóm H5) bị loại. Bảng doanh thu thực thu loại trừ thuế GTGT, thu hộ, chi hộ, lệ phí. Ghi sự kiện Nhận.
2. Phạm vi doanh thu tính hoa hồng gồm dịch vụ ghi trong hợp đồng dịch vụ đầu tiên của khách và phần gia hạn của chính dịch vụ đó (Job AM-18). Dịch vụ bán thêm hoặc bán chéo (Job AM-29) không tính hoa hồng. Ghi sự kiện Soát.
3. Số hoa hồng tính bằng công cụ tính, không tính tay. Kết quả: bảng doanh thu thực thu theo khách thuộc sổ đăng ký giới thiệu. Chuyển cho Job PM-07 và Job NB-23. Ghi sự kiện Chuyển, rồi Xong.

Thời hạn: xong trước mốc gửi báo cáo hoa hồng tại Job PM-07; SLA nội bộ do CEO chốt khi ban hành.

### NB-50. Thu hồi hoặc khấu trừ hoa hồng

1. KTV theo dõi đối tác hoàn trả sau khi Job PM-09 gửi thông báo hoàn trả hoa hồng. Nghĩa vụ hoàn trả chỉ áp cho khoản oBacker hoàn tiền trong 12 tháng kể từ ngày oBacker chi hoa hồng tương ứng. Ghi sự kiện Chờ.
2. KTV lập chứng từ điều chỉnh của đối tác; khoản phải thu hoặc khoản khấu trừ kỳ sau ghi theo chứng từ đó; thu hồi hoa hồng ghi giảm chi phí khi có chứng từ điều chỉnh. Ghi sự kiện Hết chờ, rồi Xong.

Thời hạn: đối tác hoàn trả trong 15 ngày kể từ ngày nhận thông báo, theo Điều 5.5 bản mẫu.

### NB-51. Hoàn tiền cho khách hoặc xử lý hủy dịch vụ

1. AM ghi nhận yêu cầu hoàn tiền hoặc hủy dịch vụ, căn cứ hợp đồng với khách. Ghi sự kiện Tạo.
2. AM xác định phần dịch vụ đã thực hiện, KTV tính số tiền hoàn. Ghi sự kiện Soát.
3. NDC duyệt theo bậc duyệt chi tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 12.3. Ghi sự kiện Duyệt.
4. KTV lập chứng từ điều chỉnh và chi hoàn. Kết quả: chứng từ điều chỉnh; khoản chi hoàn. Ghi sự kiện Chuyển.
5. KTV tra sổ đăng ký giới thiệu; khách có trong sổ thì thông báo cho người giữ Job PM-09. Ghi sự kiện Phát sinh việc, rồi Xong.

Thời hạn: không áp.

## 4. LỖI THƯỜNG GẶP

| Lỗi | Hậu quả | Cách làm đúng |
| --- | --- | --- |
| Chia nhỏ hóa đơn hoặc thù lao trong cùng ngày để khoản chi thấp hơn mức 05 triệu đồng | Cộng các lần của cùng một người bán trong cùng ngày, tổng từ 05 triệu đồng trở lên mà trả tiền mặt thì mất chi phí được trừ (Văn bản hợp nhất 19/VBHN-BTC Đ.9 k.1 đ.c1) | KTV cộng các lần của cùng một bên trong cùng ngày; chuyển khoản không dùng tiền mặt |
| Chuyển tiền theo email báo đổi số tài khoản | Chi nhầm tài khoản, mất tiền | KTV dừng lệnh chi, gọi số điện thoại gốc, không dùng số trong email, báo KTT. Bên kia không gửi thì giữ số cũ, giữ email, ghi sổ sự cố, KTT báo TGĐ. Bên kia có gửi thì lập BM-05, KTV sửa, KTT duyệt, mọi chữ ký trước đó hết giá trị. Chưa gọi được thì giữ lệnh dừng (SC-01) |
| Ký sẵn phiếu chi trống | Vi phạm Luật Kế toán 41/VBHN-VPQH Đ.19 k.2; phiếu phải hủy | Ký khi phiếu đã đủ nội dung; phiếu ký trước thì hủy |
| Chi hộ hoặc hoàn ứng bằng tiền mặt | Người lao động trả tiền mặt cho nhà cung cấp thì mất chi phí được trừ và khấu trừ GTGT; oBacker hoàn tiền mặt cho người lao động thì mất khấu trừ GTGT ([[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 19.2) | Người lao động trả bằng chuyển khoản; oBacker hoàn bằng chuyển khoản |
| Trừ nợ tạm ứng hoặc khoản trả thừa vào lương | Trái Bộ luật Lao động 18/VBHN-VPQH Đ.102 k.1 và Đ.127 k.2 | Ghi thành khoản nợ, xử lý theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 26a.4 và mục 38.2a |
| Gọi khoản khách chuyển trước là tạm ứng | Hóa đơn phải lập ngay khi nhận tiền; gọi sai tên sai kỳ doanh thu | KTT quyết cách gọi tên trước khi ghi sổ |
| KTV hoặc KTT gửi nhắc nợ trực tiếp cho khách | Khách nhận hai đầu mối, sai kênh giao tiếp | AM gửi nhắc nợ; KTV cấp số liệu trước mốc 01 ngày làm việc |
| Quên thu hồi quyền ngân hàng điện tử của nhân sự nghỉ việc | Người đã nghỉ vẫn còn quyền lập hoặc duyệt lệnh chi | TGĐ thu hồi quyền trong ngày làm việc cuối cùng |
| Bỏ qua khấu trừ nộp thay nhà thầu nước ngoài, hoặc trả dịch vụ nước ngoài bằng phương tiện thanh toán cá nhân | Thiếu nghĩa vụ thuế; chứng từ đứng tên cá nhân | KTT rà từng khoản; đăng ký lại tài khoản dịch vụ đứng tên oBacker |
| Chậm báo tăng bảo hiểm xã hội quá 30 ngày | Quá hạn Luật Bảo hiểm xã hội 41/2024/QH15 Đ.28 k.1 | HR tạo Job NB-40 ngay khi ký hợp đồng lao động; theo dõi hằng tuần |

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.1.0 | NB-32 bước 3: KTT ký BM-08 trước người duyệt; HĐQT duyệt khi Chủ tịch HĐQT đề nghị. |
