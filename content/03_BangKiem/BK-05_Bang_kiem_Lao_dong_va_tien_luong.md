---
title: "BẢNG KIỂM LAO ĐỘNG VÀ TIỀN LƯƠNG"
code: "BK-05"
type: "sop"
folder: "03_BangKiem"
level: "Bảng kiểm"
version: "R.1.1.2"
status: "đang áp dụng"
draft_date: "08/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-MSR Quy tắc sổ cái"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - BK-05
tags:
  - loai/sop
---
# BẢNG KIỂM LAO ĐỘNG VÀ TIỀN LƯƠNG

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | BK-05 |
| Cấp tài liệu | Bảng kiểm |
| Phiên bản | R.1.1.2, đang áp dụng |
| Ngày biên soạn | 08/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] Quy tắc sổ cái |

## 1. PHẠM VI

Bảng kiểm này áp dụng cho các Job LD-01 đến LD-27 của bộ phận Lao động và Tiền lương. Hướng dẫn tính lương và bảo hiểm xã hội nằm tại [[10_HD_Nghiep_vu_tinh_luong_va_bao_hiem_xa_hoi\|OBK-HB-51]]. Vai trò dùng ký hiệu AM, CV-LD, TL-LD, LEG, COO theo [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]]. Thời hạn theo pháp luật giữ đúng chữ của nguồn, kèm mã căn cứ CC.

## 2. DANH MỤC JOB

%%JOBTABLE:LD%%

| Mã Job | Tên Job | Nguồn phát sinh | Đầu vào bắt buộc | Đầu ra | SLA nội bộ oBacker | Thời hạn theo pháp luật | Căn cứ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LD-01 | Trả lời câu hỏi về quy định lao động | Khách hỏi qua AM | Câu hỏi đã ghi trên hệ thống | Câu trả lời có mã căn cứ đã đối chiếu bản gốc | LD-01 không đi qua chuỗi T2.<br>Câu hỏi đã có căn cứ sẵn đã đối chiếu bản gốc trong `PL_1` thì bộ phận trả lời thẳng AM trong 02 giờ làm việc, không cấp mốc ước lượng.<br>Câu hỏi phải tra bản gốc thì đi đúng chuỗi: bộ phận cấp mốc ước lượng cho AM trong 02 giờ làm việc, AM cam kết T2 với khách trong 04 giờ làm việc, và T3 là 02 ngày làm việc.<br>Trường hợp kéo dài, ba điều kiện đủ: điều kiện áp dụng trường hợp kéo dài là bộ phận đã tra mà không kết luận được; mốc của trường hợp kéo dài là mốc của Job RD-10; và AM phải cam kết lại T2 với khách trong 04 giờ làm việc kể từ khi mở Job RD-10.<br>Chạm nội dung chưa xác minh được thì mở Job RD-12, AM gửi thư hẹn mốc trong 04 giờ làm việc, và không trả lời nội dung | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.1 |
| LD-02 | Soạn hợp đồng lao động, phụ lục, thỏa thuận | Khách yêu cầu | Thông tin đầy đủ về vị trí, mức lương, thời hạn, địa điểm;<br>với người nước ngoài thêm ngày hết hạn giấy phép lao động do Licensing cấp | Bản dự thảo hợp đồng lao động, phụ lục, thỏa thuận | 02 ngày làm việc kể từ khi nhận đủ thông tin | Không có | `PL_1` CC-LD-01 tới CC-LD-12 |
| LD-03 | Rà soát thời hạn hợp đồng xác định thời hạn | Theo lịch tháng | Danh sách hợp đồng sắp hết hạn | Cảnh báo gửi khách qua AM kèm phương án | Rà hằng tháng;<br>cảnh báo khách 45 ngày trước ngày hết hạn | Hết hạn mà vẫn làm việc thì phải ký hợp đồng mới trong **30 ngày**;<br>quá 30 ngày thì tự động thành hợp đồng không xác định thời hạn;<br>chỉ được ký thêm hợp đồng xác định thời hạn **01 lần** | `PL_1` CC-LD-02, CC-LD-03 |
| LD-04 | Đăng ký mã BHXH lần đầu cho người lao động | Khách gửi hợp đồng đã ký | Bản chụp hợp đồng đã ký giữa khách và người lao động | Hồ sơ đã nộp;<br>xác nhận của cơ quan BHXH | 02 ngày làm việc kể từ khi nhận bản chụp hợp đồng đã ký | Kê khai và nộp hồ sơ tham gia BHXH bắt buộc trong **30 ngày** kể từ ngày người lao động thuộc đối tượng tham gia | `PL_1` CC-LD-140 |
| LD-05 | Báo tăng lao động | Có người lao động mới | Hợp đồng đã ký;<br>thông tin cá nhân | Hồ sơ báo tăng đã nộp | Đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10 | Theo CC-LD-140, mốc 30 ngày | `PL_1` CC-LD-140 |
| LD-06 | Báo giảm lao động | Có người lao động nghỉ | Quyết định hoặc thỏa thuận chấm dứt | Hồ sơ báo giảm đã nộp | Đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10 | **Không tìm thấy mốc số ngày trong kho.** Xem cảnh báo OBK-SOP-LD mục 9.2 (thư viện tham khảo) | `PL_1` mục 2.7 cảnh báo |
| LD-07 | Tính lương và lập bảng lương | Theo lịch tháng | Dữ liệu chấm công của khách;<br>hợp đồng và phụ lục hiện hành;<br>quyết định điều chỉnh nếu có | Bảng lương đã chốt;<br>phiếu lương | Khách trả lương cuối tháng: tính ngày 25 tới 28, gửi ngày 29 tới 30.<br>Khách trả lương ngày 05: tính ngày 01 tới 03, gửi ngày 04 tới 05.<br>Khách trả lương ngày 10: tính ngày 06 tới 08, gửi ngày 09 tới 10.<br>Phiếu lương gửi trước ngày trả lương ít nhất 01 ngày | Không có mốc luật cho việc lập;<br>kỳ hạn trả lương theo thỏa thuận và `PL_1` CC-LD-66 | Nội bộ;<br>`PL_1` CC-LD-60 tới CC-LD-80 |
| LD-08 | Nhắc khách gửi dữ liệu chấm công | Theo lịch tháng | Danh sách khách | Bản ghi đã nhắc | Ngày 20 tới 25 | Không có | Nội bộ |
| LD-09 | Tổng hợp và thông báo số tiền BHXH phải đóng | Theo lịch tháng | Bảng lương;<br>thông báo C12 của cơ quan BHXH | Thông báo số phải đóng gửi khách qua AM, theo từng mã BHXH | Tổng hợp ngày 11 tới 14;<br>thông báo ngày 15 | Khách phải nộp tiền chậm nhất **ngày cuối cùng của tháng tiếp theo** | `PL_1` CC-LD-143 |
| LD-10 | Thông báo kinh phí công đoàn | Theo lịch tháng | Quỹ tiền lương làm căn cứ đóng BHXH | Thông báo gửi khách qua AM | Ngày 15 | Đóng mỗi tháng một lần cùng thời điểm đóng BHXH bắt buộc, chậm nhất ngày cuối cùng của tháng tiếp theo | Nghị định 105/2026/NĐ-CP Đ.4 k.1 đ.a, k.2 đ.a; Luật Công đoàn 90/VBHN-VPQH Đ.29 k.1 đ.b |
| LD-11 | Chốt sổ BHXH khi người lao động nghỉ việc | Người lao động nghỉ | Quyết định chấm dứt;<br>đã báo giảm | Xác nhận thời gian đóng BHXH;<br>sổ đã trả | 10 ngày làm việc kể từ ngày chính thức nghỉ việc | **Không tìm thấy mốc số ngày trong kho.** Nghĩa vụ có tại CC-LD-30, không kèm số ngày | `PL_1` CC-LD-30, CC-LD-158, CC-LD-159 |
| LD-12 | Tính và bàn giao hồ sơ chấm dứt hợp đồng lao động | Người lao động nghỉ | Quyết định hoặc thỏa thuận chấm dứt;<br>dữ liệu thời gian làm việc;<br>bảng lương 06 tháng liền kề | Bảng tính trợ cấp thôi việc hoặc mất việc;<br>bảng tính phép năm chưa nghỉ;<br>danh mục giấy tờ phải trả lại người lao động | Gửi khách trước hạn thanh toán ít nhất 05 ngày làm việc | **Thanh toán đầy đủ các khoản trong 14 ngày làm việc** kể từ ngày chấm dứt;<br>bốn trường hợp được kéo dài nhưng không quá **30 ngày** | `PL_1` CC-LD-28, CC-LD-29, CC-LD-40 tới CC-LD-49 |
| LD-13 | Đăng ký nội quy lao động | Khách bàn giao nội quy | Nội quy lao động đã ban hành;<br>biên bản tham khảo ý kiến tổ chức đại diện người lao động | Hồ sơ đã nộp;<br>xác nhận đăng ký | 02 ngày làm việc kể từ khi khách bàn giao nội quy | Bắt buộc với khách sử dụng **từ 10 người lao động trở lên**;<br>nộp hồ sơ trong **10 ngày** kể từ ngày ban hành;<br>cơ quan xử lý trong **07 ngày làm việc**;<br>nội quy có hiệu lực sau **15 ngày** kể từ ngày cơ quan nhận đủ hồ sơ | `PL_1` CC-LD-90 tới CC-LD-98 |
| LD-14 | Lập và cập nhật sổ quản lý lao động | Khách mới, và liên tục | Danh sách lao động;<br>20 nhóm thông tin bắt buộc | Sổ quản lý lao động | Lập trong 10 ngày làm việc kể từ khi tiếp nhận khách;<br>cập nhật trong 02 ngày làm việc kể từ khi có biến động | Lập trong **30 ngày** kể từ ngày bắt đầu hoạt động;<br>cập nhật kể từ ngày người lao động bắt đầu làm việc | `PL_1` CC-LD-123 tới CC-LD-125 |
| LD-15 | Báo cáo tình hình sử dụng lao động 06 tháng đầu năm | Theo lịch năm | Sổ quản lý lao động;<br>biến động trong kỳ | Mẫu số 01/PLI đã nộp qua Cổng Dịch vụ công Quốc gia;<br>thông báo tới cơ quan bảo hiểm xã hội khu vực | Hoàn tất nội bộ và nộp chậm nhất 03 ngày làm việc trước 04/06, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5.<br>Không cam kết mốc 04/06 | **Trước ngày 05 tháng 6** | `PL_1` CC-LD-121 |
| LD-16 | Báo cáo tình hình sử dụng lao động cả năm | Theo lịch năm | Như LD-15 | Như LD-15 | Hoàn tất nội bộ và nộp chậm nhất 03 ngày làm việc trước 04/12, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5.<br>Không cam kết mốc 04/12 | **Trước ngày 05 tháng 12** | `PL_1` CC-LD-121 |
| LD-17 | Thông báo biến động lao động bất thường | Tăng hoặc giảm từ 50 người trở lên | Danh sách biến động | Thông báo đã gửi | Trước ngày 10 của tháng sau kỳ phát sinh | Pháp luật không ấn định thời hạn; thông báo theo Mẫu số 33 gửi tổ chức dịch vụ việc làm công nơi đặt trụ sở | Nghị định 374/2025/NĐ-CP Đ.32 k.10 |
| LD-18 | Thông báo làm thêm giờ trên 200 tới 300 giờ mỗi năm | Khách tổ chức làm thêm vượt 200 giờ | Danh sách người lao động và số giờ;<br>ngành nghề thuộc diện được làm 300 giờ | Mẫu số 02/PLIV đã gửi Sở Lao động | Trong 07 ngày kể từ ngày khách bắt đầu tổ chức làm thêm vượt ngưỡng | **Chậm nhất sau 15 ngày** kể từ ngày thực hiện | `PL_1` CC-LD-71 tới CC-LD-74 |
| LD-19 | Rà soát giới hạn giờ làm thêm | Theo lịch tháng | Dữ liệu chấm công | Cảnh báo gửi khách khi chạm ngưỡng | Rà hằng tháng khi tính lương;<br>cảnh báo khi đạt 80% mức tối đa tháng hoặc 80% mức tối đa năm | Mức tối đa: **40 giờ mỗi tháng;<br>200 giờ mỗi năm**, hoặc **300 giờ mỗi năm** với 5 nhóm ngành nghề | `PL_1` CC-LD-69 tới CC-LD-71 |
| LD-20 | Rà soát lương tối thiểu vùng | Khi có nghị định mới, và khi khách đổi địa bàn | Danh sách lao động và mức lương;<br>địa bàn | Danh sách người lao động dưới mức tối thiểu;<br>đề xuất điều chỉnh | Trong 10 ngày làm việc kể từ ngày nghị định mới được ban hành | Mức hiện hành theo `293/2025/NĐ-CP` hiệu lực 01/01/2026.<br>Doanh nghiệp phải rà soát hợp đồng, thỏa ước và quy chế để điều chỉnh | `PL_1` CC-LD-60 tới CC-LD-63 |
| LD-21 | Hỗ trợ trình tự xử lý kỷ luật lao động | Khách yêu cầu | Biên bản vi phạm;<br>nội quy lao động đã đăng ký;<br>hồ sơ nhân sự | Bộ hồ sơ trình tự: thông báo họp, biên bản họp, quyết định | Gửi khách bộ hồ sơ trước ngày họp ít nhất 10 ngày làm việc, theo mốc làm trước tại [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5 | Thông báo họp **ít nhất 05 ngày làm việc** trước ngày họp.<br>Thời hiệu **06 tháng** kể từ ngày xảy ra hành vi, **12 tháng** nếu liên quan tài chính, tài sản, bí mật công nghệ, bí mật kinh doanh | `PL_1` CC-LD-99 tới CC-LD-108 |
| LD-22 | Rà soát khấu trừ lương | Khi khách yêu cầu khấu trừ | Căn cứ khấu trừ;<br>bảng lương | Kết luận được phép hay không, và mức tối đa | 01 ngày làm việc | Chỉ được khấu trừ để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị, tài sản.<br>**Mức tối đa 30%** tiền lương thực trả hằng tháng sau khi trích nộp BHXH bắt buộc, BHYT, BHTN và thuế TNCN | `PL_1` CC-LD-64, CC-LD-65 |
| LD-23 | Giải trình hồ sơ với cơ quan BHXH | Cơ quan BHXH yêu cầu | Văn bản yêu cầu;<br>hồ sơ liên quan | Văn bản giải trình đã gửi | Thông báo khách kèm danh mục hồ sơ cần trong 01 ngày làm việc;<br>gửi giải trình trong 02 ngày làm việc kể từ khi nhận đủ hồ sơ từ khách | **Theo thời hạn ghi trên chính văn bản của cơ quan** | Nội bộ |
| LD-24 | Cập nhật công thức và chính sách mới vào bảng tính lương | Có văn bản mới, hoặc theo lịch | Bản đánh giá tác động của LEG | Bảng tính đã cập nhật và đã kiểm thử | Ngày 16 tới 19 hằng tháng | Theo ngày hiệu lực văn bản | Nội bộ |
| LD-25 | Rà soát tuân thủ lao động định kỳ | Theo lịch tháng | Hồ sơ khách | Bảng rà soát tuân thủ gửi khách qua AM | Hằng tháng, trước ngày 10 | Không có | Nội bộ |
| LD-26 | Bàn giao khi kết thúc dịch vụ | AM báo kết thúc | Toàn bộ hồ sơ lao động và BHXH của khách | Bộ bàn giao;<br>biên bản bàn giao | Chuẩn bị trong 05 ngày làm việc kể từ khi AM báo | Không có | [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] |
| LD-27 | Quyết toán thuế TNCN năm và đăng ký người phụ thuộc | Theo lịch năm | Bảng lương các kỳ trong năm;<br>bảng khấu trừ TNCN của bộ phận Kế toán theo Job [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] KT-09;<br>danh sách người phụ thuộc của khách | Tờ khai quyết toán TNCN năm đã nộp kèm xác nhận của hệ thống thuế điện tử;<br>người phụ thuộc đã đăng ký | Hoàn tất nội bộ và nộp chậm nhất 03 ngày làm việc trước 31/03 năm sau, theo mốc làm trước hồ sơ nộp cơ quan nhà nước tại [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] mục 7.5.<br>Không cam kết mốc 31/03 | Chậm nhất ngày 31 tháng 3 của năm dương lịch tiếp theo, theo Luật Quản lý thuế 108/2025/QH15 | Nội bộ; Job KT-09 của [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]]; Điều Khoản Dịch Vụ Kế toán & Thuế (PL-KT) mục 3.1 |

%%/JOBTABLE:LD%%

## 3. BẢNG KIỂM THEO JOB

### LD-01. Trả lời câu hỏi về quy định lao động

1. AM ghi câu hỏi của khách vào sổ cái; CV-LD nhận Job, ghi sự kiện Tạo và Nhận.
2. Nếu câu hỏi đã có căn cứ sẵn, đã đối chiếu bản gốc, CV-LD trả lời thẳng AM trong 02 giờ làm việc, không cấp mốc ước lượng.
3. Nếu câu hỏi phải tra bản gốc, CV-LD cấp mốc ước lượng cho AM trong 02 giờ làm việc; AM cam kết mốc với khách trong 04 giờ làm việc; CV-LD hoàn tất trong 02 ngày làm việc.
4. Nếu CV-LD đã tra mà chưa kết luận được, mở Job RD-10, ghi sự kiện Phát sinh việc; AM cam kết lại mốc với khách trong 04 giờ làm việc kể từ khi mở Job RD-10; mốc của Job là mốc của Job RD-10.
5. Nếu câu hỏi chạm nội dung chưa xác minh được, mở Job RD-12, ghi sự kiện Phát sinh việc; AM gửi thư hẹn mốc trong 04 giờ làm việc; CV-LD giữ nội dung, chưa trả lời.
6. CV-LD soạn câu trả lời kèm mã căn cứ đã đối chiếu bản gốc; AM gửi khách; ghi các sự kiện Chuyển, Gửi khách, Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: TL-LD kiểm trước khi gửi khách rằng mọi con số luật trong đầu ra truy được về một mã căn cứ CC-LD đã đối chiếu bản gốc (nếu thiếu thì trả lại và chuyển sang trường hợp chưa xác minh được của Job LD-01).

Thời hạn: theo pháp luật: không có; nội bộ oBacker: 02 giờ làm việc để trả lời AM khi căn cứ đã có sẵn; 02 giờ làm việc để cấp mốc ước lượng cho AM khi phải tra bản gốc; 04 giờ làm việc để AM cam kết mốc với khách, kể cả cam kết lại khi mở Job RD-10; 02 ngày làm việc để hoàn tất.

### LD-02. Soạn hợp đồng lao động, phụ lục, thỏa thuận

1. CV-LD nhận yêu cầu từ khách qua AM, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ CC-LD-01 tới CC-LD-12 vào sổ cái.
2. CV-LD thu đủ vị trí, mức lương, thời hạn, địa điểm; với người nước ngoài thì lấy ngày hết hạn giấy phép lao động từ bộ phận Licensing, và ghi ngày đó vào hợp đồng đúng như Licensing cung cấp; nếu thiếu thì AM đòi khách, ghi sự kiện Chờ và Hết chờ.
3. CV-LD soạn dự thảo hợp đồng lao động, phụ lục hoặc thỏa thuận trong 02 ngày làm việc kể từ khi đủ thông tin.
4. AM gửi dự thảo cho khách; ghi các sự kiện Chuyển, Gửi khách.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: với hợp đồng cho người nước ngoài, thời hạn hợp đồng không vượt quá thời hạn giấy phép lao động, và ngày hết hạn giấy phép lấy từ Licensing, TL-LD kiểm trước khi gửi dự thảo (nếu sai thì lấy lại ngày từ Licensing).

Thời hạn: theo pháp luật: không có; nội bộ oBacker: 02 ngày làm việc kể từ khi nhận đủ thông tin.

### LD-03. Rà soát thời hạn hợp đồng xác định thời hạn

1. CV-LD nhận Job theo lịch tháng, ghi sự kiện Tạo và Nhận; lấy danh sách hợp đồng sắp hết hạn làm đầu vào.
2. CV-LD mở văn bản gốc, ghi mã căn cứ vào sổ cái, và rà thời hạn hợp đồng xác định thời hạn hằng tháng.
3. CV-LD lập cảnh báo kèm phương án cho từng hợp đồng, gửi khách qua AM 45 ngày trước ngày hết hạn; ghi sự kiện Chuyển.
4. AM gửi cảnh báo cho khách; ghi sự kiện Gửi khách.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: hết hạn mà vẫn làm việc thì phải ký hợp đồng mới trong 30 ngày; quá 30 ngày thì tự động thành hợp đồng không xác định thời hạn; chỉ được ký thêm hợp đồng xác định thời hạn 01 lần; căn cứ: CC-LD-02, CC-LD-03; nội bộ oBacker: rà hằng tháng; cảnh báo khách 45 ngày trước ngày hết hạn.

### LD-04. Đăng ký mã BHXH lần đầu cho người lao động

1. CV-LD nhận Job khi khách gửi hợp đồng đã ký, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD nhận bản chụp hợp đồng đã ký giữa khách và người lao động; lập hồ sơ tham gia BHXH bắt buộc trong 02 ngày làm việc kể từ khi nhận bản chụp.
3. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
4. CV-LD nộp hồ sơ cho cơ quan BHXH; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
5. CV-LD nhận xác nhận của cơ quan BHXH, chuyển AM; AM gửi khách; ghi các sự kiện Chuyển, Gửi khách.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: kê khai và nộp hồ sơ tham gia BHXH bắt buộc trong 30 ngày kể từ ngày người lao động thuộc đối tượng tham gia; căn cứ: CC-LD-140; nội bộ oBacker: 02 ngày làm việc kể từ khi nhận bản chụp hợp đồng đã ký.

### LD-05. Báo tăng lao động

1. CV-LD nhận Job khi có người lao động mới, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu hợp đồng đã ký và thông tin cá nhân; thống kê danh sách báo tăng theo hai đợt trong tháng.
3. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
4. CV-LD nộp hồ sơ báo tăng theo từng đợt; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: theo CC-LD-140, mốc 30 ngày; nội bộ oBacker: đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10.

### LD-06. Báo giảm lao động

1. CV-LD nhận Job khi có người lao động nghỉ, ghi sự kiện Nhận; mở văn bản gốc và ghi căn cứ vào sổ cái.
2. CV-LD thu quyết định hoặc thỏa thuận chấm dứt; thống kê danh sách báo giảm theo hai đợt trong tháng.
3. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
4. CV-LD nộp hồ sơ báo giảm theo từng đợt; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: không tìm thấy mốc số ngày trong kho; nội bộ oBacker: đợt 1: ngày 29 tới 30. Đợt 2: ngày 09 tới 10; khi trả lời khách, nêu SLA này là cam kết dịch vụ của oBacker và là mốc ngoài quy định của pháp luật.

### LD-07. Tính lương và lập bảng lương

1. CV-LD nhận Job theo lịch tháng, ghi sự kiện Tạo và Nhận; thu dữ liệu chấm công của khách, hợp đồng và phụ lục hiện hành, quyết định điều chỉnh nếu có.
2. CV-LD ghi mọi mâu thuẫn dữ liệu đủ 4 trường: thông tin mâu thuẫn, giá trị theo từng nguồn, người cần làm rõ, quyết định kèm lý do.
3. CV-LD tra hết nguồn nội bộ trước khi hỏi khách; yêu cầu bổ sung ghi đủ phần thiếu, thời hạn, giả thiết sẽ dùng, hậu quả của giả thiết; ghi sự kiện Chờ và Hết chờ.
4. CV-LD tính lương theo ngày trả lương của khách, lập bảng lương và phiếu lương; CV-LD tự soát và TL-LD soát lớp hai, ghi sự kiện Soát vào sổ cái.
5. CV-LD chốt bảng lương, ghi dấu vết chốt vào sổ cái; chuyển bộ phận Kế toán, ghi sự kiện Chuyển.
6. AM gửi bảng lương kèm phiếu lương cho khách, ghi sự kiện Gửi khách; CV-LD ghi sự kiện Ghi giờ công và chi phí, Xong.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước khi gửi khách rằng bảng lương khớp 100% với dữ liệu chấm công khách cung cấp, số người khớp danh sách lao động, mọi dòng có căn cứ (sai thì quay lại bước tính); TL-LD kiểm trước khi chuyển bộ phận Kế toán rằng bảng lương đã chốt và có dấu vết chốt; kiểm trước khi bàn giao rằng giả thiết đã dùng được nêu lại.

Thời hạn: theo pháp luật: không có mốc luật cho việc lập; kỳ hạn trả lương theo thỏa thuận và CC-LD-66; căn cứ: CC-LD-60 tới CC-LD-80; nội bộ oBacker: khách trả lương cuối tháng: tính ngày 25 tới 28, gửi ngày 29 tới 30. Khách trả lương ngày 05: tính ngày 01 tới 03, gửi ngày 04 tới 05. Khách trả lương ngày 10: tính ngày 06 tới 08, gửi ngày 09 tới 10. Phiếu lương gửi trước ngày trả lương ít nhất 01 ngày.

### LD-08. Nhắc khách gửi dữ liệu chấm công

1. CV-LD nhận Job theo lịch tháng, ghi sự kiện Tạo và Nhận; lấy danh sách khách làm đầu vào.
2. CV-LD nhắc từng khách gửi dữ liệu chấm công trong khoảng ngày 20 tới 25; ghi sự kiện Gửi khách.
3. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: không có; nội bộ oBacker: ngày 20 tới 25.

### LD-09. Tổng hợp và thông báo số tiền BHXH phải đóng

1. CV-LD nhận Job theo lịch tháng, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD lấy bảng lương và thông báo C12 của cơ quan BHXH; tổng hợp số tiền BHXH phải đóng theo từng mã BHXH trong khoảng ngày 11 tới 14.
3. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
4. CV-LD chuyển thông báo số phải đóng cho AM, ghi sự kiện Chuyển; AM gửi khách ngày 15, ghi sự kiện Gửi khách.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách.

Thời hạn: theo pháp luật: khách phải nộp tiền chậm nhất ngày cuối cùng của tháng tiếp theo; căn cứ: CC-LD-143; nội bộ oBacker: tổng hợp ngày 11 tới 14; thông báo ngày 15.

### LD-10. Thông báo kinh phí công đoàn

1. CV-LD nhận Job theo lịch tháng, ghi sự kiện Nhận; thu quỹ tiền lương làm căn cứ đóng BHXH.
2. CV-LD lập thông báo kinh phí công đoàn.
3. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
4. CV-LD chuyển thông báo cho AM, ghi sự kiện Chuyển; AM gửi khách ngày 15, ghi sự kiện Gửi khách.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách.

Thời hạn: theo pháp luật: đóng mỗi tháng một lần cùng thời điểm đóng BHXH bắt buộc, chậm nhất ngày cuối cùng của tháng tiếp theo; căn cứ: Nghị định 105/2026/NĐ-CP Đ.4 k.1 đ.a, k.2 đ.a; Luật Công đoàn 90/VBHN-VPQH Đ.29 k.1 đ.b; nội bộ oBacker: ngày 15.

### LD-11. Chốt sổ BHXH khi người lao động nghỉ việc

1. CV-LD nhận Job khi người lao động nghỉ, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu quyết định chấm dứt và xác nhận đã báo giảm.
3. CV-LD lập xác nhận thời gian đóng BHXH và chốt sổ trong 10 ngày làm việc kể từ ngày chính thức nghỉ việc.
4. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
5. CV-LD trả sổ đã chốt, chuyển AM; AM gửi khách; ghi các sự kiện Chuyển, Gửi khách.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách.

Thời hạn: theo pháp luật: không tìm thấy mốc số ngày trong kho; nghĩa vụ có tại CC-LD-30, không kèm số ngày; nội bộ oBacker: 10 ngày làm việc kể từ ngày chính thức nghỉ việc; khi trả lời khách, nêu SLA này là cam kết dịch vụ của oBacker và là mốc ngoài quy định của pháp luật.

### LD-12. Tính và bàn giao hồ sơ chấm dứt hợp đồng lao động

1. CV-LD nhận Job khi người lao động nghỉ, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu quyết định hoặc thỏa thuận chấm dứt, dữ liệu thời gian làm việc, bảng lương 06 tháng liền kề.
3. CV-LD lập bảng tính trợ cấp thôi việc hoặc mất việc, bảng tính phép năm chưa nghỉ, danh mục giấy tờ phải trả lại người lao động.
4. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
5. CV-LD chuyển hồ sơ cho AM, ghi sự kiện Chuyển; AM gửi khách trước hạn thanh toán ít nhất 05 ngày làm việc, ghi sự kiện Gửi khách.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước khi gửi khách rằng mọi con số luật trong đầu ra truy được về một mã căn cứ CC-LD đã đối chiếu bản gốc (nếu thiếu thì trả lại và chuyển sang trường hợp chưa xác minh được của Job LD-01).

Thời hạn: theo pháp luật: thanh toán đầy đủ các khoản trong 14 ngày làm việc kể từ ngày chấm dứt; bốn trường hợp được kéo dài nhưng không quá 30 ngày; căn cứ: CC-LD-28, CC-LD-29, CC-LD-40 tới CC-LD-49; nội bộ oBacker: gửi khách trước hạn thanh toán ít nhất 05 ngày làm việc.

### LD-13. Đăng ký nội quy lao động

1. CV-LD nhận Job khi khách bàn giao nội quy lao động, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu nội quy đã ban hành và biên bản tham khảo ý kiến tổ chức đại diện người lao động; kiểm khách sử dụng từ 10 người lao động trở lên.
3. CV-LD lập hồ sơ đăng ký trong 02 ngày làm việc kể từ khi khách bàn giao nội quy.
4. CV-LD nộp hồ sơ trong 10 ngày kể từ ngày khách ban hành nội quy; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
5. CV-LD theo dõi cơ quan xử lý; chuyển xác nhận đăng ký cho AM, ghi sự kiện Chuyển; AM gửi khách, ghi sự kiện Gửi khách.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: bắt buộc với khách sử dụng từ 10 người lao động trở lên; nộp hồ sơ trong 10 ngày kể từ ngày ban hành; cơ quan xử lý trong 07 ngày làm việc; nội quy có hiệu lực sau 15 ngày kể từ ngày cơ quan nhận đủ hồ sơ; căn cứ: CC-LD-90 tới CC-LD-98; nội bộ oBacker: 02 ngày làm việc kể từ khi khách bàn giao nội quy.

### LD-14. Lập và cập nhật sổ quản lý lao động

1. CV-LD nhận Job khi tiếp nhận khách mới, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu danh sách lao động và 20 nhóm thông tin bắt buộc.
3. CV-LD lập sổ quản lý lao động trong 10 ngày làm việc kể từ khi tiếp nhận khách.
4. CV-LD cập nhật sổ trong 02 ngày làm việc kể từ khi có biến động; ghi sự kiện Chuyển khi bàn giao AM.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: lập trong 30 ngày kể từ ngày bắt đầu hoạt động; cập nhật kể từ ngày người lao động bắt đầu làm việc; căn cứ: CC-LD-123 tới CC-LD-125; nội bộ oBacker: lập trong 10 ngày làm việc kể từ khi tiếp nhận khách; cập nhật trong 02 ngày làm việc kể từ khi có biến động.

### LD-15. Báo cáo tình hình sử dụng lao động 06 tháng đầu năm

1. CV-LD nhận Job theo lịch năm, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu sổ quản lý lao động và biến động trong kỳ; lập báo cáo tình hình sử dụng lao động.
3. CV-LD xác minh cơ quan nhận báo cáo thực tế trước khi nộp và ghi vào sổ cái.
4. CV-LD nộp báo cáo; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái; thông báo cho cơ quan bảo hiểm xã hội khu vực.
5. CV-LD chuyển kết quả cho AM, ghi sự kiện Chuyển; ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: trước ngày 05 tháng 6; căn cứ: CC-LD-121; nội bộ oBacker: hoàn tất nội bộ và nộp chậm nhất 03 ngày làm việc trước 04/06; không cam kết mốc 04/06.

### LD-16. Báo cáo tình hình sử dụng lao động cả năm

1. CV-LD nhận Job theo lịch năm, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu sổ quản lý lao động và biến động trong kỳ; lập báo cáo tình hình sử dụng lao động.
3. CV-LD xác minh cơ quan nhận báo cáo thực tế trước khi nộp và ghi vào sổ cái.
4. CV-LD nộp báo cáo; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái; thông báo cho cơ quan bảo hiểm xã hội khu vực.
5. CV-LD chuyển kết quả cho AM, ghi sự kiện Chuyển; ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: trước ngày 05 tháng 12; căn cứ: CC-LD-121; nội bộ oBacker: hoàn tất nội bộ và nộp chậm nhất 03 ngày làm việc trước 04/12; không cam kết mốc 04/12.

### LD-17. Thông báo biến động lao động bất thường

1. CV-LD nhận Job khi khách tăng hoặc giảm từ 50 người lao động trở lên, ghi sự kiện Nhận.
2. CV-LD thu danh sách biến động và lập thông báo biến động lao động.
3. CV-LD gửi thông báo trước ngày 10 của tháng sau kỳ phát sinh; gửi tổ chức dịch vụ việc làm công nơi đặt trụ sở của khách và ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
4. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: không ấn định, thông báo theo Mẫu số 33 gửi tổ chức dịch vụ việc làm công nơi đặt trụ sở (Nghị định 374/2025/NĐ-CP Đ.32 k.10); nội bộ oBacker: trước ngày 10 của tháng sau kỳ phát sinh.

### LD-18. Thông báo làm thêm giờ trên 200 tới 300 giờ mỗi năm

1. CV-LD nhận Job khi khách tổ chức làm thêm giờ vượt 200 giờ mỗi năm, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu danh sách người lao động, số giờ, và ngành nghề thuộc diện được làm 300 giờ.
3. CV-LD lập thông báo theo Mẫu số 02/PLIV gửi Sở Lao động trong 07 ngày kể từ ngày khách bắt đầu tổ chức làm thêm vượt ngưỡng.
4. CV-LD nộp thông báo; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: chậm nhất sau 15 ngày kể từ ngày thực hiện; căn cứ: CC-LD-71 tới CC-LD-74; nội bộ oBacker: trong 07 ngày kể từ ngày khách bắt đầu tổ chức làm thêm vượt ngưỡng.

### LD-19. Rà soát giới hạn giờ làm thêm

1. CV-LD nhận Job theo lịch tháng, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD lấy dữ liệu chấm công và rà giới hạn giờ làm thêm hằng tháng khi tính lương.
3. Khi khách đạt 80% mức tối đa của tháng hoặc của năm, CV-LD lập cảnh báo, chuyển AM, ghi sự kiện Chuyển.
4. AM gửi cảnh báo cho khách; ghi sự kiện Gửi khách.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: mức tối đa: 40 giờ mỗi tháng; 200 giờ mỗi năm, hoặc 300 giờ mỗi năm với 5 nhóm ngành nghề; căn cứ: CC-LD-69 tới CC-LD-71; nội bộ oBacker: rà hằng tháng khi tính lương; cảnh báo khi đạt 80% mức tối đa tháng hoặc 80% mức tối đa năm.

### LD-20. Rà soát lương tối thiểu vùng

1. CV-LD nhận Job khi có nghị định mới hoặc khi khách đổi địa bàn, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu danh sách lao động, mức lương và địa bàn.
3. CV-LD lập danh sách người lao động dưới mức lương tối thiểu và đề xuất điều chỉnh, trong 10 ngày làm việc kể từ ngày nghị định mới được ban hành.
4. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
5. CV-LD chuyển cho AM, ghi sự kiện Chuyển; AM gửi khách, ghi sự kiện Gửi khách.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước khi gửi khách rằng mọi con số luật trong đầu ra truy được về một mã căn cứ CC-LD đã đối chiếu bản gốc (nếu thiếu thì trả lại và chuyển sang trường hợp chưa xác minh được của Job LD-01).

Thời hạn: theo pháp luật: mức hiện hành theo 293/2025/NĐ-CP hiệu lực 01/01/2026. Doanh nghiệp phải rà soát hợp đồng, thỏa ước và quy chế để điều chỉnh; căn cứ: CC-LD-60 tới CC-LD-63; nội bộ oBacker: trong 10 ngày làm việc kể từ ngày nghị định mới được ban hành.

### LD-21. Hỗ trợ trình tự xử lý kỷ luật lao động

1. CV-LD nhận Job khi khách yêu cầu, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD kiểm nội quy lao động của khách đã đăng ký và còn hiệu lực; nếu chưa đăng ký thì mở Job LD-13, ghi sự kiện Phát sinh việc.
3. CV-LD thu biên bản vi phạm, nội quy lao động đã đăng ký, hồ sơ nhân sự.
4. CV-LD lập bộ hồ sơ trình tự gồm thông báo họp, biên bản họp, quyết định.
5. CV-LD chuyển bộ hồ sơ cho AM, ghi sự kiện Chuyển; AM gửi khách trước ngày họp ít nhất 10 ngày làm việc, ghi sự kiện Gửi khách.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: nội quy lao động đã đăng ký và còn hiệu lực với khách từ 10 người lao động trở lên, TL-LD kiểm khi tiếp nhận khách và trước Job LD-21 (nếu thiếu thì mở Job LD-13 và dừng hỗ trợ kỷ luật).

Thời hạn: theo pháp luật: thông báo họp ít nhất 05 ngày làm việc trước ngày họp. Thời hiệu 06 tháng kể từ ngày xảy ra hành vi, 12 tháng nếu liên quan tài chính, tài sản, bí mật công nghệ, bí mật kinh doanh; căn cứ: CC-LD-99 tới CC-LD-108; nội bộ oBacker: gửi khách bộ hồ sơ trước ngày họp ít nhất 10 ngày làm việc.

### LD-22. Rà soát khấu trừ lương

1. CV-LD nhận Job khi khách yêu cầu khấu trừ, ghi sự kiện Nhận; mở văn bản gốc và ghi mã căn cứ vào sổ cái.
2. CV-LD thu căn cứ khấu trừ và bảng lương.
3. CV-LD lập kết luận được phép khấu trừ hay không, và mức tối đa, trong 01 ngày làm việc.
4. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
5. CV-LD chuyển kết luận cho AM, ghi sự kiện Chuyển; AM gửi khách, ghi sự kiện Gửi khách.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước khi gửi khách rằng mọi con số luật trong đầu ra truy được về một mã căn cứ CC-LD đã đối chiếu bản gốc (nếu thiếu thì trả lại và chuyển sang trường hợp chưa xác minh được của Job LD-01).

Thời hạn: theo pháp luật: chỉ được khấu trừ để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị, tài sản. Mức tối đa 30% tiền lương thực trả hằng tháng sau khi trích nộp BHXH bắt buộc, BHYT, BHTN và thuế TNCN; căn cứ: CC-LD-64, CC-LD-65; nội bộ oBacker: 01 ngày làm việc.

### LD-23. Giải trình hồ sơ với cơ quan BHXH

1. CV-LD nhận Job khi cơ quan BHXH yêu cầu, ghi sự kiện Nhận; lấy văn bản yêu cầu và hồ sơ liên quan.
2. CV-LD thông báo khách kèm danh mục hồ sơ cần trong 01 ngày làm việc, qua AM; ghi sự kiện Chờ và Hết chờ.
3. CV-LD lập văn bản giải trình trong 02 ngày làm việc kể từ khi nhận đủ hồ sơ từ khách.
4. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
5. CV-LD gửi văn bản giải trình; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
6. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: theo thời hạn ghi trên chính văn bản của cơ quan; nội bộ oBacker: thông báo khách kèm danh mục hồ sơ cần trong 01 ngày làm việc; gửi giải trình trong 02 ngày làm việc kể từ khi nhận đủ hồ sơ từ khách.

### LD-24. Cập nhật công thức và chính sách mới vào bảng tính lương

1. CV-LD nhận Job khi có văn bản mới hoặc theo lịch, ghi sự kiện Nhận; lấy bản đánh giá tác động của LEG.
2. CV-LD cập nhật công thức và chính sách mới vào bảng tính lương trong khoảng ngày 16 tới 19 hằng tháng.
3. CV-LD kiểm thử bảng tính đã cập nhật.
4. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
5. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách.

Thời hạn: theo pháp luật: theo ngày hiệu lực văn bản; nội bộ oBacker: ngày 16 tới 19 hằng tháng.

### LD-25. Rà soát tuân thủ lao động định kỳ

1. CV-LD nhận Job theo lịch tháng, ghi sự kiện Nhận; lấy hồ sơ khách.
2. CV-LD lập bảng rà soát tuân thủ lao động trước ngày 10 hằng tháng.
3. CV-LD chuyển bảng rà soát cho AM, ghi sự kiện Chuyển; AM gửi khách, ghi sự kiện Gửi khách.
4. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: không có; nội bộ oBacker: hằng tháng, trước ngày 10.

### LD-26. Bàn giao khi kết thúc dịch vụ

1. CV-LD nhận Job khi AM báo kết thúc dịch vụ, ghi sự kiện Nhận.
2. CV-LD tập hợp toàn bộ hồ sơ lao động và bảo hiểm xã hội của khách; lập bộ bàn giao trong 05 ngày làm việc kể từ khi AM báo.
3. CV-LD lập biên bản bàn giao; chuyển AM, ghi sự kiện Chuyển; AM bàn giao khách, ghi sự kiện Gửi khách.
4. CV-LD ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Thời hạn: theo pháp luật: không có; nội bộ oBacker: chuẩn bị trong 05 ngày làm việc kể từ khi AM báo.

### LD-27. Quyết toán thuế TNCN năm và đăng ký người phụ thuộc

1. CV-LD nhận Job theo lịch năm, ghi sự kiện Nhận; mở văn bản gốc và ghi căn cứ vào sổ cái.
2. CV-LD thu bảng lương các kỳ trong năm, bảng khấu trừ TNCN của bộ phận Kế toán theo Job KT-09, danh sách người phụ thuộc của khách.
3. CV-LD lập tờ khai quyết toán TNCN năm và hồ sơ đăng ký người phụ thuộc.
4. CV-LD tự soát, TL-LD soát lớp hai; ghi sự kiện Soát vào sổ cái.
5. CV-LD nộp tờ khai; ghi sự kiện Nộp cơ quan kèm số biên nhận vào sổ cái.
6. CV-LD chuyển xác nhận đã nộp cho AM, ghi sự kiện Chuyển; ghi các sự kiện Ghi giờ công và chi phí, Xong vào sổ cái.

Điểm kiểm soát: soát bắt buộc hai lớp, CV-LD tự soát và TL-LD soát lớp hai, trước khi nộp cơ quan hoặc gửi khách; TL-LD kiểm trước ngày nộp rằng hồ sơ nộp cơ quan nhà nước còn cách thời hạn theo pháp luật ít nhất 03 ngày làm việc (nếu còn ít hơn thì báo CEO, thông tin COO cùng lúc, ghi lý do vào sổ cái).

Thời hạn: theo pháp luật: chậm nhất ngày 31 tháng 3 của năm dương lịch tiếp theo, theo Luật Quản lý thuế 108/2025/QH15; nguồn chưa có mã căn cứ; nội bộ oBacker: hoàn tất nội bộ và nộp chậm nhất 03 ngày làm việc trước 31/03 năm sau; không cam kết mốc 31/03.

## 4. LỖI THƯỜNG GẶP

| Lỗi | Hậu quả | Cách xử lý |
| --- | --- | --- |
| Hợp đồng xác định thời hạn hết hạn mà người lao động vẫn làm việc | Sau 30 ngày, hợp đồng tự động thành hợp đồng không xác định thời hạn | Job LD-03 rà hằng tháng, cảnh báo khách 45 ngày trước ngày hết hạn; căn cứ CC-LD-02, CC-LD-03 |
| Ký hợp đồng xác định thời hạn lần thứ ba | Trái pháp luật; chỉ được ký thêm 01 lần | Từ chối yêu cầu của khách; căn cứ CC-LD-02, CC-LD-03 |
| Khấu trừ lương sai căn cứ hoặc tính mức tối đa trên lương gộp | Khấu trừ chỉ được để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị, tài sản; mức tối đa 30% tính trên tiền lương thực trả sau khi trích nộp BHXH bắt buộc, BHYT, BHTN và thuế TNCN | Job LD-22; căn cứ CC-LD-64, CC-LD-65 |
| Thông báo làm thêm giờ muộn | Chậm nhất sau 15 ngày kể từ ngày thực hiện; nghĩa vụ chỉ phát sinh với một số khách nên hay bị bỏ sót | Job LD-19 cảnh báo khi đạt 80% mức tối đa; Job LD-18; căn cứ CC-LD-71 tới CC-LD-74 |
| Hỗ trợ kỷ luật khi nội quy lao động chưa đăng ký | Nội quy có hiệu lực sau 15 ngày kể từ ngày cơ quan nhận đủ hồ sơ; kỷ luật dựa trên nội quy chưa hiệu lực làm toàn bộ quy trình vô hiệu | Kiểm nội quy trước Job LD-21; mở Job LD-13 khi thiếu; căn cứ CC-LD-90 tới CC-LD-98 |
| Nộp báo cáo và quyết toán sát ngày cuối | Mốc pháp luật là trước ngày 05 tháng 6, trước ngày 05 tháng 12, ngày 31 tháng 3 năm sau | Hoàn tất nội bộ và nộp chậm nhất 03 ngày làm việc trước mốc; không cam kết ngày cuối với khách; Job LD-15, LD-16, LD-27 |
| Trình bày mốc báo giảm, chốt sổ BHXH với khách như mốc pháp luật | Kho không có mốc số ngày pháp định cho hai Job này; SLA do oBacker tự đặt | Khi trả lời khách nêu SLA là cam kết dịch vụ của oBacker; Job LD-06, LD-11 |
| Chuyển bảng lương cho bộ phận Kế toán khi chưa chốt | bộ phận Kế toán có quyền từ chối bản nháp; bộ phận Kế toán không tự sửa số trên bảng lương | Chốt bảng lương, ghi dấu vết chốt vào sổ cái rồi mới chuyển; Job LD-07 |
| Soạn hợp đồng cho người nước ngoài với thời hạn vượt giấy phép lao động | Thời hạn hợp đồng lao động không được vượt thời hạn giấy phép lao động | Lấy ngày hết hạn giấy phép từ Licensing, không tự điền; Job LD-02 |
| Nhầm mức lương cơ sở với lương tối thiểu vùng khi tư vấn khách | Hai mức khác nhau, đổi vào hai thời điểm khác nhau | Tra lương tối thiểu vùng tại CC-LD-60 tới CC-LD-63; Job LD-20 |

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.1.2 | Bỏ câu tự mô tả ở mục phạm vi, mệnh đề lý do ở các Job báo cáo lao động và câu SLA tự đặt lặp ý |
