---
title: "Phụ lục H. Quy trình cung cấp chữ ký số và hóa đơn điện tử"
code: "OBK-SOP-PL-H"
type: "sop"
folder: "04_Handbook_KeToan"
level: "Phụ lục"
version: "R.2.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-KT Kế toán và thuế"
next_review: "Chậm nhất 28/02/2027"
appendix: "Quy trình cung cấp chữ ký số và hóa đơn điện tử"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-SOP-PL-H
tags:
  - loai/sop
  - cap/phu-luc
---
# Phụ lục H. Quy trình cung cấp chữ ký số và hóa đơn điện tử

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-PL-H |
| Tên phụ lục | Quy trình cung cấp chữ ký số và hóa đơn điện tử |
| Cấp tài liệu | Phụ lục của hướng dẫn cấp 3 |
| Phiên bản | R.2.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 27/09/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] Kế toán và thuế |
| Tính chất nội dung | QUY TRÌNH NGHIỆP VỤ THỰC HIỆN DỊCH VỤ. Hướng dẫn chi tiết năm bước cung cấp chữ ký số và thiết lập, đăng ký sử dụng hóa đơn điện tử cho khách hàng |
| Lần rà soát tiếp theo | Hằng năm, trước 28/02/2027. Rà soát đột xuất ngay khi có văn bản pháp luật mới về chữ ký số hoặc hóa đơn điện tử |

---

## 1. MỤC ĐÍCH VÀ PHẠM VI ÁP DỤNG

### 1.1. Mục đích
Tài liệu này chuẩn hóa trình tự năm bước cung cấp chữ ký số (chứng thư số điện tử) và đăng ký, kích hoạt, bàn giao hệ thống hóa đơn điện tử cho khách hàng doanh nghiệp của oBacker; bảo đảm tính tuân thủ pháp luật về thuế, giao dịch điện tử và kiểm soát chặt chẽ rủi ro kỹ thuật cũng như bảo mật thông tin tài khoản.

### 1.2. Phạm vi áp dụng
- Áp dụng đối với bộ phận Quản lý khách hàng (`AM`), bộ phận Kế toán dịch vụ (`CV-KT`, `TL-KT`) và các vị trí điều phối dịch vụ có liên quan.
- Áp dụng khi khách hàng đăng ký mới dịch vụ chữ ký số, gia hạn chữ ký số, mua gói hóa đơn điện tử hoặc sử dụng gói combo thành lập doanh nghiệp có bao gồm chữ ký số và hóa đơn điện tử theo danh mục OBK-DM-CKS.

---


---

## 2. PHÂN CÔNG VAI TRÒ VÀ MA TRẬN TRÁCH NHIỆM

Ký hiệu vai trò tuân thủ theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 5.1:

| Bước | Nội dung công việc | `AM` | `CV-KT` | `TL-KT` | Khách hàng |
| --- | --- | --- | --- | --- | --- |
| 1 | Tiếp nhận thông tin, kiểm tra hồ sơ pháp lý doanh nghiệp và CCCD đại diện | R | S | A | C |
| 2 | Đăng ký cấp phát với Nhà mạng / Nhà cung cấp chứng thư số (CA) | S | R | A | I |
| 3 | Bàn giao thiết bị, biên bản bàn giao, cài đặt driver và kiểm tra chữ ký số | R | S | I | C |
| 4 | Đăng ký sử dụng hóa đơn điện tử với Cơ quan Thuế qua Mẫu 01/ĐKTĐ-HĐĐT | I | R | A | C |
| 5 | Thiết lập hệ thống mẫu hóa đơn và bàn giao tài khoản sử dụng | S | R | A | C |

*Ghi chú: R = Người thực hiện chính; A = Người phê duyệt kiểm soát; S = Người hỗ trợ phối hợp; C = Bên phối hợp cung cấp hoặc ký duyệt; I = Người nhận thông tin theo dõi.*

---

## 3. QUY TRÌNH THỰC HIỆN CHI TIẾT

```
  [Bước 1] Tiếp nhận thông tin & Thẩm định tính hợp lệ hồ sơ
     │
     ▼
  [Bước 2] Đăng ký cấp phát với Nhà cung cấp CA (USB Token / Cloud-CA)
     │
     ▼
  [Bước 3] Bàn giao thiết bị, lập Biên bản, Cài driver & Kiểm tra chữ ký
     │
     ▼
  [Bước 4] Đăng ký sử dụng HĐĐT với Cơ quan Thuế (Tờ khai Mẫu 01/ĐKTĐ-HĐĐT)
     │
     ▼
  [Bước 5] Thiết lập ký hiệu, mẫu hóa đơn, dải số & Bàn giao tài khoản
```

### 3.1. Bước 1: Tiếp nhận thông tin và kiểm tra hồ sơ pháp lý doanh nghiệp

1. **Đầu vào thu thập từ khách hàng:**
   - Bản quét màu Giấy chứng nhận đăng ký doanh nghiệp (ERC) hoặc Giấy chứng nhận đăng ký đầu tư (IRC đối với doanh nghiệp có vốn đầu tư nước ngoài).
   - Bản quét màu Thẻ căn cước công dân hoặc Thẻ căn cước hoặc Hộ chiếu còn thời hạn sử dụng của người đại diện theo pháp luật.
   - Phiếu xác nhận thông tin đơn hàng: Nhà mạng/nhà cung cấp được chọn (Viettel, VNPT, CyberLotus, Bkav, EasyCA...); loại chứng thư số (USB Token vật lý hoặc Cloud-CA/Smart-CA); gói thời hạn (01 năm, 02 năm hoặc 03 năm); gói hóa đơn điện tử (số lượng dải số hóa đơn khởi tạo).
   - Giấy ủy quyền theo mẫu nếu người trực tiếp ký hồ sơ đề nghị cấp chứng thư số không phải là người đại diện theo pháp luật ghi trên ERC.

2. **Thẩm định tính hợp pháp và tính chính xác:**
   - `CV-KT` đối chiếu thông tin doanh nghiệp (Tên doanh nghiệp, mã số thuế, địa chỉ trụ sở chính) với Hệ thống thông tin quốc gia về đăng ký doanh nghiệp. Doanh nghiệp phải ở trạng thái "Đang hoạt động".
   - Kiểm tra ngày hết hạn giấy tờ tùy thân của người đại diện theo pháp luật; ảnh chụp hoặc bản quét phải rõ ràng, không bị lóa sáng, không mất góc, không có dấu hiệu chỉnh sửa tẩy xóa.
   - Thời hạn hoàn thành kiểm tra: Chậm nhất 04 giờ làm việc kể từ thời điểm nhận đủ hồ sơ.

### 3.2. Bước 2: Đăng ký cấp phát với Nhà mạng / Nhà cung cấp chứng thư số (CA)

1. **Lựa chọn loại hình chứng thư số theo nhu cầu vận hành:**
   - **USB Token (Thiết bị phần cứng chuyên dụng):** Thích hợp cho doanh nghiệp có kế toán viên làm việc cố định tại văn phòng, thực hiện ký nộp báo cáo thuế, hải quan, bảo hiểm xã hội qua cổng thông tin điện tử; thiết bị đạt tiêu chuẩn bảo mật phần cứng FIPS 140-2 Level 2 hoặc Level 3.
   - **Cloud-CA / Smart-CA (Chữ ký số từ xa lưu trữ đám mây):** Thích hợp cho người quản lý có nhu cầu làm việc lưu động, cho phép ký số linh hoạt trên điện thoại thông minh, máy tính bảng thông qua ứng dụng xác thực eKYC/OTP/Smart-OTP, tích hợp trực tiếp qua API vào phần mềm phát hành hóa đơn điện tử mà không cần cắm thiết bị phần cứng.

2. **Lập và nộp hồ sơ cấp phát lên hệ thống của tổ chức CA:**
   - `CV-KT` soạn thảo Giấy đề nghị cấp chứng thư số doanh nghiệp theo mẫu của tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng được cấp phép hợp pháp tại Việt Nam.
   - Hướng dẫn người đại diện theo pháp luật ký tên, đóng dấu doanh nghiệp (đối với hồ sơ giấy) hoặc thực hiện quy trình định danh điện tử eKYC kết hợp video call và ký số hợp lệ theo tiêu chuẩn của nhà cung cấp CA.
   - Nộp hồ sơ và thanh toán phí bản quyền lên hệ thống đối tác của nhà mạng/CA.
   - Nhà cung cấp CA kiểm tra đối chiếu dữ liệu trên hệ thống dân cư quốc gia, khởi tạo cặp khóa bí mật (Private Key) và khóa công khai (Public Key), phát hành chứng thư số công cộng cho doanh nghiệp.
   - Thời hạn cấp phát: Từ 04 giờ làm việc đến tối đa 01 ngày làm việc kể từ khi nộp đủ hồ sơ hợp lệ cho nhà mạng.

### 3.3. Bước 3: Bàn giao thiết bị, biên bản bàn giao, cài đặt driver và kiểm tra chữ ký số

1. **Bàn giao thiết bị và thông tin truy cập:**
   - Đối với USB Token: `AM` thực hiện bàn giao trực tiếp hoặc chuyển phát nhanh có bảo đảm thiết bị USB Token nguyên niêm phong đến địa chỉ khách hàng chỉ định; cung cấp mật khẩu mặc định (mã PIN khởi tạo), mã mở khóa (PUK) và hợp đồng/chứng nhận bản quyền của nhà mạng.
   - Đối với Cloud-CA: Gửi thư điện tử kích hoạt tài khoản có chữ ký số của oBacker tới hòm thư điện tử chính thức của người đại diện theo pháp luật, kèm mã kích hoạt an toàn và đường dẫn tải ứng dụng quản trị chữ ký số từ xa.

2. **Lập Biên bản bàn giao:**
   - `AM` lập Biên bản bàn giao chữ ký số theo biểu mẫu quy chuẩn của oBacker, ghi rõ các thông số kỹ thuật bắt buộc: Tên tổ chức chứng thực chữ ký số (CA); Số sê-ri chứng thư số (Certificate Serial Number); Ngày bắt đầu có hiệu lực; Ngày hết hạn hiệu lực; Danh mục vật phẩm bàn giao kèm theo.
   - Biên bản bàn giao phải có chữ ký xác nhận của đại diện khách hàng và đại diện oBacker; lưu trữ bản quét vào Hệ thống quản lý công việc và lưu trữ hồ sơ.

3. **Cài đặt driver và phần mềm quản lý chữ ký số:**
   - `CV-KT` hỗ trợ khách hàng tải và cài đặt phần mềm quản lý thiết bị Token tương ứng với nhà mạng (Ví dụ: Viettel-CA Token Manager, CyberLotus Token Manager, Bkav Token Manager...).
   - Cài đặt tiện ích mở rộng ký số (Extension eSigner) trên các trình duyệt web để hỗ trợ nộp thuế điện tử và ký số văn bản trực tuyến.
   - Hướng dẫn khách hàng đổi mã PIN mặc định sang mã PIN cá nhân bảo mật; cảnh báo rõ ràng trách nhiệm quản lý bí mật mã PIN và thiết bị ký số theo Điều 13 Luật Doanh nghiệp và Điều 135/VBHN-VPQH.

4. **Kiểm tra chữ ký số (Kiểm thử thực tế):**
   - Kiểm tra tính toàn vẹn của chuỗi chứng thư số (Certificate Path) trong kho lưu trữ chứng thư số của hệ điều hành, bảo đảm trạng thái chứng thư là hợp lệ ("This certificate is OK").
   - Thực hiện ký thử nghiệm trên một tệp tài liệu số định dạng PDF hoặc ký thử trên Cổng tiếp nhận dịch vụ công của Cơ quan Thuế.
   - Kiểm tra kết quả ký số: Thông tin người ký phải thể hiện chính xác Tên doanh nghiệp, Mã số thuế; thuật toán ký và chứng thực số dấu thời gian (Timestamp) hoạt động chính xác.

### 3.4. Bước 4: Đăng ký sử dụng hóa đơn điện tử với Cơ quan Thuế (Tờ khai Mẫu 01/ĐKTĐ-HĐĐT)

1. **Lập Tờ khai đăng ký sử dụng hóa đơn điện tử:**
   - Căn cứ quy định tại Điều 7 Nghị định số 254/2026/NĐ-CP và Điều 6 Thông tư số 91/2026/TT-BTC, `CV-KT` truy cập vào hệ thống phần mềm hóa đơn điện tử của khách hàng để lập Tờ khai Mẫu số 01/ĐKTĐ-HĐĐT (Tờ khai đăng ký/thay đổi thông tin sử dụng hóa đơn điện tử).
   - Điền đầy đủ và chuẩn xác các chỉ tiêu nghiệp vụ:
     + Hình thức hóa đơn: Tích chọn "Có mã của cơ quan thuế" (trừ các trường hợp đặc thù quy định tại điểm b, điểm c khoản 1 Điều 6 Nghị định 254/2026/NĐ-CP áp dụng hình thức "Không có mã").
     + Loại hóa đơn sử dụng: Tích chọn loại hóa đơn phù hợp theo đăng ký thuế: Hóa đơn giá trị gia tăng (mẫu 1), Hóa đơn bán hàng (mẫu 2), hoặc Hóa đơn khởi tạo từ máy tính tiền (nếu thuộc diện kinh doanh bán lẻ, ăn uống theo khoản 1 Điều 6 NĐ 254/2026).
     + Phương thức chuyển dữ liệu hóa đơn điện tử: Chuyển trực tiếp hoặc qua tổ chức cung cấp dịch vụ hóa đơn điện tử.
     + Danh sách chứng thư số sử dụng: Cập nhật chính xác thông tin chứng thư số vừa cấp phát ở Bước 2 và Bước 3 (Tên tổ chức CA, Số sê-ri chứng thư số, Thời hạn hiệu lực từ ngày... đến ngày...).

2. **Ký số và gửi Tờ khai tới Cơ quan Thuế:**
   - `CV-KT` kiểm tra lại toàn bộ thông tin đăng ký thuế của doanh nghiệp, gắn chữ ký số hợp lệ của khách hàng để ký điện tử lên Tờ khai Mẫu 01/ĐKTĐ-HĐĐT.
   - Truyền dữ liệu Tờ khai trực tiếp lên Cổng thông tin điện tử của Tổng cục Thuế qua cổng kết nối của nhà cung cấp dịch vụ giải pháp hóa đơn.

3. **Theo dõi phản hồi và tiếp nhận kết quả từ Cơ quan Thuế:**
   - Trong vòng 15 phút kể từ khi gửi tờ khai, Hệ thống hóa đơn điện tử của Cơ quan Thuế tự động gửi Thông báo tiếp nhận tờ khai đăng ký sử dụng hóa đơn điện tử (Mẫu số 01/TB-TNĐT).
   - Trong thời hạn **01 ngày làm việc** kể từ ngày gửi thông báo tiếp nhận, Cơ quan Thuế ban hành Thông báo chấp nhận hoặc không chấp nhận đăng ký sử dụng hóa đơn điện tử (Mẫu số 01/TB-ĐKTĐ) gửi cho người nộp thuế qua thư điện tử.
   - **Xử lý tình huống Cơ quan Thuế không chấp nhận:** Trường hợp nhận được thông báo không chấp nhận hoặc yêu cầu giải trình bổ sung thông tin (Mẫu số 01/TB-BSTT-NNT), `CV-KT` phải báo ngay cho `TL-KT` trong vòng 02 giờ làm việc, xác định nguyên nhân (sai lệch thông tin địa chỉ trụ sở, người đại diện chưa cập nhật trên hệ thống quản lý thuế, hoặc lỗi sê-ri chứng thư số), liên hệ phối hợp cơ quan thuế quản lý trực tiếp và nộp lại tờ khai hoàn chỉnh trong vòng 01 ngày làm việc.

### 3.5. Bước 5: Thiết lập mẫu hóa đơn và bàn giao tài khoản

1. **Thiết lập thông tin và cấu hình mẫu hóa đơn:**
   - Sau khi có Thông báo chấp nhận Mẫu 01/TB-ĐKTĐ của Cơ quan Thuế, `CV-KT` tiến hành cấu hình hệ thống hóa đơn điện tử:
     + Khai báo chính xác thông tin doanh nghiệp: Tên công ty, mã số thuế, địa chỉ trụ sở chính (khớp 100% với ERC và Đăng ký thuế), số điện thoại, địa chỉ thư điện tử nhận thông báo, số tài khoản ngân hàng.
     + Thiết lập Ký hiệu mẫu số hóa đơn và Ký hiệu hóa đơn theo chuẩn Điều 10 Nghị định số 254/2026/NĐ-CP và Điều 13 Thông tư số 91/2026/TT-BTC: Ký hiệu gồm 6 ký tự thể hiện loại hóa đơn, năm lập hóa đơn, hình thức hóa đơn có mã ('C') và hai ký tự tự chọn của doanh nghiệp.
     + Cài đặt mẫu hiển thị hóa đơn: Tải lên biểu trưng (logo) chính thức của khách hàng (nếu có), lựa chọn màu sắc và bố cục theo nhận diện thương hiệu của khách hàng, tích hợp đầy đủ các trường thông tin pháp lý bắt buộc (tên hàng hóa dịch vụ, đơn vị tính, số lượng, đơn giá, thuế suất GTGT, tiền thuế, tổng thanh toán bằng số và bằng chữ).
     + Thiết lập dải số hóa đơn bắt đầu từ số 1, bảo đảm quy tắc số hóa đơn tăng liên tục theo thứ tự thời gian.

2. **Xuất hóa đơn thử nghiệm và kiểm tra kỹ thuật:**
   - Khởi tạo 01 hóa đơn điện tử thử nghiệm (mẫu nháp) trên hệ thống phần mềm để kiểm tra định dạng hiển thị, tính năng mã QR tra cứu, và kiểm tra trường ký số hiển thị.
   - `CV-KT` tự kiểm tra và trình `TL-KT` phê duyệt mẫu trước khi kích hoạt chính thức.

3. **Bàn giao tài khoản và hướng dẫn sử dụng:**
   - Tạo lập và phân quyền tài khoản người dùng: Tài khoản quản trị cấp cao (Admin) cho người đại diện theo pháp luật hoặc phụ trách tài chính của khách hàng; tài khoản thao tác lập hóa đơn cho nhân viên bán hàng/kế toán nội bộ của khách hàng.
   - Lập Biên bản bàn giao tài khoản hệ thống hóa đơn điện tử và chữ ký số: Ghi rõ đường dẫn đăng nhập, tên đăng nhập, mật khẩu khởi tạo, gói dịch vụ hóa đơn đã mua, số lượng hóa đơn sẵn sàng sử dụng.
   - Hướng dẫn vận hành bằng văn bản hoặc hướng dẫn trực tuyến cho khách hàng: Quy trình lập và xuất hóa đơn đầu ra; quy trình gửi hóa đơn cho khách hàng qua thư điện tử; quy định pháp lý về thời điểm lập hóa đơn theo Điều 9 Nghị định 254/2026/NĐ-CP; nguyên tắc xử lý hóa đơn sai sót theo cơ chế điều chỉnh hoặc thay thế (tuyệt đối không được tự ý xóa bỏ hóa đơn đã cấp mã).
   - Lưu trữ toàn bộ hồ sơ đăng ký, thông báo Mẫu 01/TB-ĐKTĐ, hợp đồng dịch vụ và các biên bản bàn giao tại thư mục điện tử của khách hàng trên Hệ thống quản lý công việc và lưu trữ hồ sơ.

### 3.6. Cơ chế đại lý phân phối CyberX và quản lý tồn kho thiết bị USB Token trắng

1. **Tư cách pháp lý đại lý và luồng hóa đơn thanh toán:**
   - oBacker hoạt động với tư cách là đại lý phân phối (`Reseller`) đối với các sản phẩm chữ ký số và giải pháp phần mềm của nhà cung cấp CyberX.
   - **Luồng hóa đơn đầu ra:** oBacker xuất hóa đơn bán lẻ hoặc hóa đơn dịch vụ giá trị gia tăng trực tiếp cho Khách hàng (`KH`) theo đúng giá niêm yết hoặc thỏa thuận trong hợp đồng dịch vụ.
   - **Luồng hóa đơn đầu vào và thanh toán:** Nhà cung cấp CyberX xuất hóa đơn giá trị gia tăng cho oBacker theo đơn giá đại lý; oBacker thanh toán cho nhà cung cấp CyberX căn cứ theo hóa đơn hợp pháp và hợp đồng đại lý đã ký kết.

2. **Quy định mua sắm và quản lý tồn kho USB Token trắng CyberX:**
   - **Mua sắm đón đầu:** Để giảm thiểu thời gian chờ đợi nhận thiết bị phần cứng khi khách hàng phát sinh nhu cầu, oBacker mua trước một số lượng thiết bị USB Token trắng (chưa gắn chứng thư số) nhập về lưu kho tại văn phòng để sử dụng dần.
   - **Định mức nhập kho:** Mỗi lần mua hàng, `KTV` lập đề xuất mua sắm đúng **10 thiết bị** USB Token trắng từ nhà cung cấp CyberX.
   - **Điểm đặt hàng lại (`Reorder Point`):** Khi số lượng thiết bị Token trắng tồn kho thực tế giảm xuống chạm mức **05 thiết bị**, `KTV` có trách nhiệm lập ngay đề xuất mua sắm lô tiếp theo (10 thiết bị) để gối đầu kho, không để tồn kho cạn kiệt.
   - **Bảo quản và kiểm kê:** Toàn bộ thiết bị Token trắng được lưu trữ tại tủ bảo mật của bộ phận Kế toán do `AD-KT` quản lý; thực hiện kiểm kê đối chiếu định kỳ vào ngày 25 hằng tháng khớp với Sổ theo dõi kho Token CK-02.

3. **Quy trình xuất kho và kích hoạt chứng thư số cho khách hàng:**
   - Khi phát sinh đơn hàng từ khách hàng, `KTV` xuất 01 thiết bị Token trắng từ kho theo số Serial phần cứng, ghi giảm số lượng trên sổ theo dõi kho.
   - Thu thập hồ sơ định danh pháp lý của khách hàng và nộp lên cổng quản trị đại lý của CyberX.
   - Thực hiện quy trình nạp chứng thư số của khách hàng vào thiết bị Token trắng đã xuất kho.
   - Kiểm tra tính hợp lệ của chứng thư số sau khi nạp và thực hiện bàn giao cho khách hàng theo Phiếu [[CK-01_Ban_giao_chu_ky_so_va_hoa_don|CK-01]].

4. **Quy ước custodial token chữ ký số của khách hàng:**
   - Token chữ ký số chuyên dụng của khách hàng do bộ phận Kế toán giữ tập trung tại tủ bảo mật của bộ phận, do `AD-KT` quản lý; bộ phận nào cần nộp tờ khai, báo cáo điện tử, kể cả nộp bảo hiểm xã hội, thì xin token, ký nhận và ký trả trên phiếu CK-02, dùng xong trả lại ngay.
   - Không lưu giữ USB Token tại văn phòng oBacker quá 24 giờ làm việc, theo [[00_TnC_Master_VI|Bản Điều Khoản Chung]] mục 20.2 nguyên tắc (1). Quy ước này là quy ước duy nhất về lưu giữ token của khách hàng trong toàn kho; quy ước này ghi nhận tại [[03_OBK-SOP-KT_Ke_toan_va_thue|OBK-SOP-KT]] mục 3.3 và [[05_OBK-SOP-LD_Lao_dong_va_tien_luong|OBK-SOP-LD]] mục 1.3.

---

## 4. ĐIỂM KIỂM SOÁT BẮT BUỘC VÀ QUẢN TRỊ RỦI RO

| Mã kiểm soát | Điểm kiểm soát | Trách nhiệm | Xử lý khi có vi phạm |
| --- | --- | --- | --- |
| KS-CA-01 | Kiểm tra tính chính chủ và hiệu lực của CCCD người đại diện trước khi đăng ký cấp phát | `CV-KT` kiểm tra; `TL-KT` duyệt | Không thực hiện cấp phát khi có dấu hiệu giả mạo hoặc đứng tên hộ trái quy định |
| KS-CA-02 | Lập và ký đầy đủ Biên bản bàn giao thiết bị USB Token / mã kích hoạt Cloud-CA | `AM` thực hiện | Bắt buộc phải có chữ ký xác nhận của khách hàng trong vòng 03 ngày làm việc |
| KS-CA-03 | Kiểm tra khớp đúng 100% giữa thông tin trên Tờ khai Mẫu 01/ĐKTĐ-HĐĐT với Giấy chứng nhận ĐKDN | `CV-KT` thực hiện; `TL-KT` duyệt | Điều chỉnh tờ khai trước khi ký số và gửi cơ quan thuế |
| KS-CA-04 | Chỉ phát hành hóa đơn thương mại thực tế sau khi có Thông báo chấp nhận Mẫu 01/TB-ĐKTĐ | `CV-KT` và `AM` | Tuyệt đối cấm khách hàng xuất hóa đơn khi cơ quan thuế chưa phê duyệt chấp nhận |
| KS-CA-05 | Đổi mã PIN mặc định và bàn giao quyền kiểm soát mật khẩu cho khách hàng | `AM` và `CV-KT` | Hướng dẫn khách hàng đổi mã PIN ngay tại thời điểm bàn giao, không lưu giữ mã PIN của khách |

---

## 5. DANH MỤC BIỂU MẪU KÈM THEO

1. **Biểu mẫu BM-CA-01:** Biên bản bàn giao thiết bị chứng thư số và tài khoản quản trị.
2. **Biểu mẫu BM-HD-01:** Biên bản bàn giao hệ thống hóa đơn điện tử và hướng dẫn vận hành.
3. **Mẫu 01/ĐKTĐ-HĐĐT:** Tờ khai đăng ký/thay đổi thông tin sử dụng hóa đơn điện tử ban hành kèm theo Nghị định số 254/2026/NĐ-CP và Thông tư số 91/2026/TT-BTC.
4. **Mẫu 01/TB-ĐKTĐ:** Thông báo chấp nhận/không chấp nhận đăng ký sử dụng hóa đơn điện tử của Cơ quan Thuế.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.0.0 | Thêm mục 4.6.4 quy ước custodial token chữ ký số của khách hàng: bộ phận Kế toán giữ tập trung tại tủ bảo mật, bộ phận nào cần nộp thì xin token và ký trả trên phiếu CK-02, không lưu giữ quá 24 giờ làm việc theo mục 20.2 nguyên tắc (1) của Bản Điều Khoản Chung. |
