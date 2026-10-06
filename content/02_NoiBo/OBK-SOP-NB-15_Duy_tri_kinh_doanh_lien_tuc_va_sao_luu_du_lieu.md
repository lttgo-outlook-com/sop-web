---
title: "OBK-SOP-NB-15. Duy trì kinh doanh liên tục và sao lưu dữ liệu"
code: "OBK-SOP-NB-15"
type: "sop"
folder: "02_NoiBo"
level: "Cấp 3, hướng dẫn nghiệp vụ"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-NB-00 Chuẩn vận hành nội bộ"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-SOP-NB-15
tags:
  - loai/sop
  - cap/3
---
# OBK-SOP-NB-15. Duy trì kinh doanh liên tục và sao lưu dữ liệu

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-NB-15 |
| Tên tài liệu | Quy định về duy trì kinh doanh liên tục và sao lưu dữ liệu an toàn |
| Cấp tài liệu | Cấp 3, hướng dẫn nghiệp vụ. Thi hành [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 27/09/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ |
| Bộ tài liệu | OBK-SOP-NB, Sổ tay quy trình nội bộ oBacker |
| Tài liệu song hành | [[OBK-SOP-NB-08_Quan_ly_tai_san_va_cong_cu_dung_cu\|OBK-SOP-NB-08]] quản lý tài sản;<br>[[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo\|OBK-SOP-NB-09]] xử lý sự cố dữ liệu cá nhân;<br>[[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]] phiếu kiểm tra sao lưu và BCP |
| Lần rà soát tiếp theo | Không quá 12 tháng kể từ ngày ban hành |
| Phạm vi phát hành | Nội bộ oBacker. Không phát hành cho khách hàng. |

---

## CẢNH BÁO MỞ ĐẦU

> [!warning] MỤC TIÊU PHỤC HỒI DỮ LIỆU BẮT BUỘC (RTO VÀ RPO)
> Mọi kịch bản ứng phó sự cố gián đoạn vận hành và phương án sao lưu dữ liệu tại oBacker phải bảo đảm hai chỉ số kỹ thuật cốt lõi: Thời gian phục hồi mục tiêu (RTO - Recovery Time Objective) không quá 04 giờ kể từ thời điểm công bố sự cố; Điểm phục hồi mục tiêu (RPO - Recovery Point Objective) không quá 24 giờ dữ liệu giao dịch phát sinh. Toàn bộ dữ liệu kế toán, dữ liệu pháp lý và hồ sơ khách hàng phải được bảo vệ theo nguyên tắc 3-2-1 không có ngoại lệ.

---

## 1. Mục đích

Quy định thống nhất kế hoạch duy trì kinh doanh liên tục (Business Continuity Plan - BCP) và quy chế sao lưu dữ liệu an toàn theo nguyên tắc 3-2-1 tại Công ty cổ phần oBacker. Bốn mục tiêu bắt buộc:

1. Bảo đảm hoạt động sản xuất kinh doanh và cung ứng dịch vụ kế toán, thuế, pháp lý cho khách hàng không bị gián đoạn kéo dài khi xảy ra thiên tai, hỏa hoạn, mất điện diện rộng, sự cố viễn thông hoặc sự cố hạ tầng kỹ thuật số.
2. Thiết lập quy chuẩn sao lưu dữ liệu tự động, nhiều lớp, có mã hóa bảo mật, bảo vệ an toàn toàn vẹn dữ liệu sổ sách kế toán của doanh nghiệp và khách hàng theo đúng quy định tại Điều 41 Luật Kế toán số 88/2015/QH13 và Điều 11, Điều 15 Nghị định số 174/2016/NĐ-CP.
3. Khống chế ngưỡng thiệt hại kỹ thuật ở mức tối đa cho phép: Thời gian phục hồi mục tiêu RTO từ 04 giờ trở xuống và Điểm phục hồi mục tiêu RPO từ 24 giờ trở xuống.
4. Duy trì kỷ luật diễn tập phục hồi thảm họa định kỳ tối thiểu 06 tháng một lần, bảo đảm 100% nhân sự nắm vững kịch bản ứng phó khi xảy ra tình huống khẩn cấp.

---

## 2. Phạm vi áp dụng

**Trong phạm vi:**
- Toàn bộ hoạt động vận hành, hệ thống hạ tầng công nghệ thông tin, đường truyền mạng, máy chủ và thiết bị đầu cuối tại trụ sở chính Đà Nẵng và các địa điểm làm việc từ xa;
- Dữ liệu cơ sở dữ liệu kế toán, chứng từ điện tử, sổ sách kế toán trên phần mềm kế toán doanh nghiệp (%%MIENTRU:N6%%MISA%%/MIENTRU:N6%% hoặc phần mềm kế toán khác đang sử dụng);
- Dữ liệu hồ sơ số hóa khách hàng: Giấy chứng nhận đăng ký doanh nghiệp, Giấy chứng nhận đăng ký đầu tư, hồ sơ thuế, hợp đồng kinh tế và tài liệu pháp lý lưu trữ trên hạ tầng đám mây Google Workspace và Google Cloud Platform (GCP);
- Dữ liệu mã nguồn, cấu hình hệ thống máy chủ, nhật ký truy cập hệ thống và tài sản số nội bộ của oBacker;
- Bốn nhóm kịch bản sự cố gián đoạn:
  * Kịch bản 1: Thiên tai bão lũ, thời tiết cực đoan, ngập lụt văn phòng làm việc;
  * Kịch bản 2: Sự cố mất điện lưới diện rộng hoặc cháy nổ khu vực tòa nhà văn phòng;
  * Kịch bản 3: Sự cố đứt cáp quang biển, đứt đường truyền viễn thông Internet diện rộng;
  * Kịch bản 4: Sự cố ngừng trệ dịch vụ đám mây công cộng (Google Workspace, GCP) hoặc phần mềm kế toán.

**Ngoài phạm vi:**
- Sự cố vi phạm an toàn dữ liệu cá nhân thuộc phạm vi xử lý theo OBK-SOP-NB-09;
- Xử lý khiếu nại thương mại từ khách hàng không xuất phát từ lỗi hạ tầng kỹ thuật (thực hiện theo [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang|KN-01]]);

---

## 3. Vai trò và trách nhiệm

| Vai trò | Trách nhiệm trong quy trình | Giới hạn quyền hạn |
| --- | --- | --- |
| `CEO` (Tổng Giám đốc) | Trưởng Ban duy trì kinh doanh liên tục (BCP); phê duyệt ban hành quy chế sao lưu dữ liệu và kế hoạch BCP; ban hành lệnh công bố tình trạng khẩn cấp hoặc chuyển giao địa điểm vận hành; duyệt ngân sách mua sắm trang thiết bị sao lưu và bản quyền phần mềm bảo vệ dữ liệu; ký duyệt Biên bản diễn tập BCP định kỳ | Không trực tiếp can thiệp vào các thao tác kỹ thuật sao lưu dữ liệu hằng ngày |
| `COO` (Giám đốc Vận hành) | Phó Ban BCP; trực tiếp điều phối phân luồng nhân sự làm việc từ xa khi xảy ra sự cố; điều động nhân sự hỗ trợ chéo giữa các nhóm làm việc tại chỗ và làm việc từ xa; giám sát tiến độ xử lý hồ sơ khách hàng nhằm bảo đảm cam kết SLA trong thời gian xảy ra sự cố | Không tự ý hủy bỏ hoặc cắt giảm yêu cầu kiểm tra sao lưu định kỳ |
| Quản trị hệ thống (`IT Admin` / `CV-CN`) | Trực tiếp thiết lập và quản trị hệ thống sao lưu tự động theo nguyên tắc 3-2-1; kiểm tra tính toàn vẹn của các bản sao lưu vào sáng Thứ Hai hằng tuần; quản lý thiết bị lưu trữ ngoại vi có mã hóa AES-256; chủ trì tổ chức diễn tập phục hồi thảm họa 06 tháng một lần; thực hiện khôi phục hệ thống khi có sự cố phát sinh | Không chia sẻ khóa giải mã hoặc tài khoản quản trị sao lưu cho người không có thẩm quyền |
| Kế toán trưởng (`KTT`) | Giám sát việc sao lưu cơ sở dữ liệu kế toán hằng ngày lúc 23h00; đối chiếu kiểm tra số liệu kế toán sau mỗi lượt diễn tập hoặc sau khi khôi phục từ bản sao lưu; xác nhận tính đầy đủ của sổ sách, chứng từ kế toán số hóa | Không xóa hoặc sửa đổi cơ sở dữ liệu kế toán khi chưa có biên bản sao lưu an toàn |
| `KTV` Kế toán nội bộ | Kiểm tra báo cáo hoàn thành sao lưu tự động của phần mềm kế toán mỗi sáng làm việc; thông báo cho Quản trị hệ thống ngay khi phát hiện tác vụ sao lưu kế toán bị gián đoạn | Không lưu dữ liệu kế toán duy nhất trên máy tính xách tay cá nhân |
| `TL` các bộ phận chuyên môn | Cập nhật danh bạ liên lạc khẩn cấp của nhân sự bộ phận; hướng dẫn nhân sự kích hoạt chế độ làm việc từ xa khi có thông báo của Ban BCP; giám sát tiến độ công việc và bàn giao tạm thời các việc cấp bách | Không tự ý cho phép nhân sự tạm ngừng xử lý việc khẩn của khách hàng mà không báo cáo `COO` |
| Người lao động (`CV`) | Lưu trữ 100% tài liệu làm việc trên kho lưu trữ đám mây dùng chung của công ty; tuyệt đối không để tài liệu duy nhất tại máy tính cá nhân; chủ động trang bị thiết bị phát sóng dữ liệu di động dự phòng khi làm việc ngoài văn phòng | Không tự ý tải hoặc cài đặt các phần mềm sao lưu không rõ nguồn gốc vào máy tính công ty |

---

## 4. Đầu vào bắt buộc

| Hạng mục đầu vào | Nguồn cung cấp | Yêu cầu kỹ thuật và tiêu chuẩn bắt buộc |
| --- | --- | --- |
| Tài khoản quản trị đám mây Google Workspace và GCP | Quản trị hệ thống thiết lập | Bật xác thực hai yếu tố (2FA) bắt buộc bằng khóa bảo mật hoặc ứng dụng tạo mã xác thực; phân quyền theo nguyên tắc đặc quyền tối thiểu |
| Phần mềm kế toán doanh nghiệp | Nhà cung cấp phần mềm (%%MIENTRU:N6%%MISA%%/MIENTRU:N6%%) | Bản quyền hoạt động hợp lệ; cấu hình tính năng sao lưu dữ liệu tự động hằng ngày lúc 23h00 vào thư mục chuyên dụng |
| Thiết bị lưu trữ ngoại vi (Ổ cứng di động chuyên dụng) | Bộ phận mua sắm trang bị theo OBK-SOP-NB-01 | Tối thiểu 02 ổ cứng di động chuẩn SSD hoặc HDD chuyên dụng; kích hoạt mã hóa phân vùng phần cứng AES-256; có dán nhãn tài sản theo TS-01 |
| Hạ tầng kết nối mạng Internet văn phòng | Đơn vị cung cấp viễn thông (VNPT, Viettel hoặc FPT) | Ký kết hợp đồng với 02 nhà mạng độc lập tại mỗi văn phòng để thiết lập cơ chế chuyển mạch tự động (Dual WAN) hoặc bộ phát sóng dự phòng 4G/5G |
| Tủ két chống cháy lưu trữ vật lý | Ban Quản trị cơ sở vật chất | Tủ sắt chống cháy đạt tiêu chuẩn chịu nhiệt tối thiểu 02 giờ, đặt tại khu vực cao ráo, bảo đảm không bị ngập nước |
| Danh bạ liên lạc khẩn cấp BCP | Bộ phận nhân sự và Quản trị hệ thống cập nhật | Danh bạ lưu trữ tại biểu mẫu [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]], ghi nhận đầy đủ số điện thoại cá nhân và địa chỉ cư trú của 100% nhân sự |

---

## 5. Các bước thực hiện

Quy trình duy trì kinh doanh liên tục và sao lưu dữ liệu gồm bốn khối nghiệp vụ chuẩn hóa:

```
[Khối 1: Quy chế sao lưu dữ liệu theo nguyên tắc 3-2-1]
       │
       ▼
[Khối 2: Chu kỳ sao lưu tự động và kiểm tra tính toàn vẹn]
       │
       ▼
[Khối 3: Bốn kịch bản ứng phó sự cố gián đoạn vận hành BCP]
       │
       ▼
[Khối 4: Diễn tập phục hồi thảm họa định kỳ 06 tháng một lần]
```

### 5.1. Quy chế sao lưu dữ liệu theo nguyên tắc 3-2-1

Toàn bộ tài sản số và dữ liệu hoạt động của oBacker phải tuân thủ nghiêm ngặt nguyên tắc 3-2-1:

1. **Quy tắc 3 (Có ít nhất 03 bản sao chép dữ liệu):**
   - Bản 1 (Bản gốc sản xuất - Production Data): Dữ liệu làm việc hằng ngày đang hoạt động trực tiếp trên hệ thống máy chủ đám mây hoặc máy trạm kế toán;
   - Bản 2 (Bản sao lưu thứ nhất - Local/Secondary Backup): Bản sao lưu lưu trữ trên hệ thống lưu trữ thứ cấp hoặc phân vùng đám mây độc lập;
   - Bản 3 (Bản sao lưu thứ hai - Off-site Backup): Bản sao lưu độc lập hoàn toàn, đặt tại thiết bị lưu trữ ngoại vi hoặc vùng lưu trữ đám mây địa lý khác.
2. **Quy tắc 2 (Lưu trữ trên ít nhất 02 hình thức hoặc phương tiện kỹ thuật khác nhau):**
   - Phương tiện 1: Hạ tầng lưu trữ điện toán đám mây cấp doanh nghiệp (Google Workspace và Google Cloud Platform Storage);
   - Phương tiện 2: Thiết bị phần cứng lưu trữ vật lý ngoại vi (Ổ cứng di động gắn ngoài chuyên dụng có mã hóa phần cứng AES-256).
3. **Quy tắc 1 (Lưu giữ ít nhất 01 bản tại địa điểm vật lý khác biệt hoàn toàn - Off-site):**
   - Đối với dữ liệu đám mây: Bản sao lưu được thiết lập chính sách lưu trữ đa vùng địa lý (Multi-region Bucket) để phòng ngừa rủi ro hỏng toàn bộ một trung tâm dữ liệu cục bộ;
   - Đối với thiết bị lưu trữ ngoại vi: Thiết bị ổ cứng sao lưu số 2 được cất giữ độc lập tại két sắt chống cháy an toàn tại vị trí lưu trữ ngoại vi tách biệt khỏi trụ sở chính.

### 5.2. Chu kỳ và lịch trình sao lưu dữ liệu tự động

Hệ thống sao lưu tự động hoạt động theo lịch trình phân bổ theo ba nhóm dữ liệu:

| Nhóm dữ liệu | Loại tài liệu | Tần suất và thời điểm sao lưu | Phương thức thực hiện | Nơi lưu trữ bản sao lưu | Người giám sát |
| --- | --- | --- | --- | --- | --- |
| Dữ liệu kế toán doanh nghiệp | Cơ sở dữ liệu phần mềm kế toán (%%MIENTRU:N6%%MISA%%/MIENTRU:N6%%), sổ nhật ký chung, sổ cái, bảng cân đối số phát sinh | Hằng ngày, lúc 23h00 từ Thứ Hai đến Chủ Nhật | Tự động kết xuất tệp nén mã hóa; tải lên đám mây và đồng bộ sang ổ cứng lưu trữ | Phân vùng Cloud Storage chuyên dụng + Ổ cứng mã hóa | `KTV` kế toán nội bộ và Quản trị hệ thống |
| Dữ liệu hồ sơ pháp lý số hóa | Bản quét giấy phép kinh doanh, điều lệ, hồ sơ thuế, hợp đồng kinh tế và hồ sơ khách hàng | Hằng tuần, lúc 20h00 tối Thứ Sáu | Tự động sao chép các tệp mới và tệp sửa đổi sang thư mục lưu trữ độc lập | Đám mây đa vùng + Ổ cứng ngoại vi số 1 | Quản trị hệ thống |
| Dữ liệu cấu hình hệ thống | Tệp cấu hình máy chủ, mã nguồn phần mềm nội bộ, phân quyền tài khoản và nhật ký hệ thống | Hằng tháng, lúc 22h00 ngày cuối cùng của tháng | Kết xuất gói tệp hình ảnh hệ thống (System Snapshot) | Đám mây GCP Coldline + Ổ cứng ngoại vi số 2 | Quản trị hệ thống |

Vào sáng Thứ Hai hằng tuần, Quản trị hệ thống thực hiện kiểm tra tính toàn vẹn của tệp sao lưu tuần trước bằng cách giải nén thử nghiệm ngẫu nhiên 01 tệp và ghi nhận kết quả vào Sổ kiểm tra theo mẫu [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp|BC-01]].

### 5.3. Bốn kịch bản ứng phó sự cố duy trì kinh doanh liên tục (BCP)

Khi xảy ra sự cố gián đoạn vận hành, Ban BCP kích hoạt một trong bốn kịch bản sau:

#### Kịch bản 1: Thiên tai bão lũ, ngập lụt văn phòng làm việc
- **Thời điểm kích hoạt:** Khi cơ quan dự báo khí tượng thủy văn công bố cảnh báo bão cấp 8 trở lên hoặc cảnh báo ngập lụt tại khu vực đặt trụ sở công ty.
- **Hành động trong vòng 02 giờ kể từ thông báo:**
  1. Ban BCP phát thông báo khẩn cấp cho phép toàn bộ nhân sự làm việc tại nhà hoặc địa điểm an toàn;
  2. Quản trị cơ sở vật chất ngắt toàn bộ nguồn điện lưới tại văn phòng; chuyển toàn bộ máy tính để bàn, hồ sơ chứng từ giấy quan trọng lên kệ cao từ 1,5 mét trở lên;
  3. Quản trị hệ thống kiểm tra và xác nhận lần cuối tình trạng đồng bộ dữ liệu đám mây trước khi tắt hệ thống máy trạm;
  4. Nhóm nhân sự dự phòng làm việc từ xa không bị ảnh hưởng tiếp nhận danh sách khách hàng đang có hạn chót xử lý hồ sơ trong ngày để hỗ trợ xử lý thay.

#### Kịch bản 2: Mất điện diện rộng tại tòa nhà hoặc khu vực
- **Thời điểm kích hoạt:** Mất điện đột ngột hoặc có thông báo cắt điện kéo dài từ 02 giờ trở lên.
- **Hành động ứng phó:**
  1. Bộ lưu điện (UPS) tự động duy trì nguồn điện cho thiết bị mạng cốt lõi tối thiểu 30 phút để nhân sự lưu lại dữ liệu đang làm việc;
  2. Nhân sự chuyển sang sử dụng pin của máy tính xách tay cá nhân và thiết bị phát sóng dữ liệu 4G/5G;
  3. Nếu sự cố mất điện kéo dài quá 02 giờ, `COO` phê duyệt điều chuyển nhân sự về nhà làm việc từ xa theo quy trình [[OBK-SOP-NB-10_Quan_ly_nghi_phep_va_lam_viec_tu_xa|OBK-SOP-NB-10]];
  4. Quản trị hệ thống theo dõi mức năng lượng của thiết bị mạng, chủ động tắt thiết bị đúng cách trước khi bộ lưu điện cạn pin.

#### Kịch bản 3: Đứt cáp quang biển hoặc gián đoạn đường truyền viễn thông Internet
- **Thời điểm kích hoạt:** Đứt đường truyền cáp quang của nhà mạng chính hoặc cáp quang biển quốc tế bị gián đoạn làm tốc độ truy cập giảm sâu.
- **Hành động ứng phó:**
  1. Thiết bị định tuyến văn phòng tự động chuyển mạch sang đường truyền dự phòng (Dual WAN Failover);
  2. Quản trị hệ thống kích hoạt chính sách ưu tiên băng thông (QoS) cho các dịch vụ cốt lõi: Cổng thông tin hóa đơn điện tử, hệ thống nộp thuế điện tử và phần mềm kế toán;
  3. Tạm thời chặn các hoạt động tải tệp video hoặc dữ liệu dung lượng lớn không cấp bách;
  4. Trường hợp toàn bộ mạng cáp quang bị tê liệt, công ty cấp phát thiết bị định tuyến 4G/5G chuyên dụng cho từng nhóm làm việc tại văn phòng.

#### Kịch bản 4: Sự cố gián đoạn dịch vụ đám mây công cộng hoặc phần mềm kế toán
- **Thời điểm kích hoạt:** Nền tảng Google Workspace, GCP hoặc hệ thống phần mềm kế toán (%%MIENTRU:N6%%MISA%%/MIENTRU:N6%%) bị lỗi kỹ thuật không thể truy cập.
- **Hành động ứng phó:**
   1. Ban BCP chỉ đạo chuyển đổi kênh liên lạc khẩn cấp sang danh bạ điện thoại và phần mềm tin nhắn bảo mật đã khai báo trong Phiếu BC-01;
  2. Quản trị hệ thống kiểm tra tình trạng dịch vụ từ trang trạng thái chính thức của nhà cung cấp; thông báo mốc thời gian ước tính khắc phục cho toàn công ty mỗi 60 phút một lần;
  3. Đối với công việc kế toán cấp bách: Trích xuất bản sao lưu cục bộ gần nhất để làm việc ngoại tuyến (Offline) trên máy trạm nội bộ;
  4. Khi dịch vụ hoạt động trở lại, `KTV` kế toán thực hiện đối soát và đồng bộ lại toàn bộ dữ liệu phát sinh trong thời gian gián đoạn.

### 5.4. Quy trình thử nghiệm và diễn tập phục hồi thảm họa (Disaster Recovery Drill)

Diễn tập phục hồi thảm họa được tổ chức bắt buộc định kỳ **06 tháng một lần** (vào Tháng 3 và Tháng 9 hằng năm) theo trình tự 5 bước:

1. **Bước 1: Lập kế hoạch và phê duyệt kịch bản diễn tập:**
   - Quản trị hệ thống phối hợp với Kế toán trưởng (`KTT`) lập Kế hoạch diễn tập chi tiết;
   - Trình `CEO` phê duyệt trước ngày diễn tập ít nhất 05 ngày làm việc.
2. **Bước 2: Thiết lập môi trường thử nghiệm cô lập (Sandbox Environment):**
   - Quản trị hệ thống khởi tạo máy chủ ảo hoặc phân vùng thử nghiệm độc lập hoàn toàn với hệ thống sản xuất chính;
   - Nghiêm cấm tuyệt đối việc thử nghiệm khôi phục đè trực tiếp lên cơ sở dữ liệu đang vận hành thực tế.
3. **Bước 3: Thực hiện thao tác khôi phục số liệu:**
   - Quản trị hệ thống lấy ngẫu nhiên 01 bản sao lưu dữ liệu kế toán và 01 bản sao lưu hồ sơ pháp lý từ thiết bị lưu trữ ngoại vi hoặc đám mây;
   - Thực hiện lệnh khôi phục vào môi trường thử nghiệm;
   - Bấm giờ đo đạc chính xác thời gian hoàn thành phục hồi để đối chiếu chỉ số RTO.
4. **Bước 4: Đối chiếu và kiểm tra tính toàn vẹn số liệu:**
   - Kế toán trưởng (`KTT`) trực tiếp đăng nhập môi trường thử nghiệm, kiểm tra bảng cân đối phát sinh, số lượng hóa đơn, số dư tiền gửi ngân hàng đến ngày sao lưu;
   - Xác định khoảng thời gian dữ liệu bị chênh lệch so với thực tế để đối chiếu chỉ số RPO;
   - Đánh giá xem dữ liệu khôi phục có đạt độ chính xác 100% không.
5. **Bước 5: Lập biên bản diễn tập và cải tiến hệ thống:**
   - Quản trị hệ thống và Kế toán trưởng hoàn thành Biên bản diễn tập khôi phục thảm họa theo mẫu tại Phiếu [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp|BC-01]];
   - Báo cáo kết quả và kiến nghị các biện pháp nâng cấp hạ tầng (nếu có) trình `CEO` phê duyệt trong vòng 03 ngày làm việc sau diễn tập.

---

## 6. Điểm kiểm soát bắt buộc

1. **Điểm kiểm soát KS-BCP-01 (Kỷ luật nguyên tắc 3-2-1):** 100% dữ liệu kế toán và hồ sơ pháp lý số hóa của khách hàng phải có đầy đủ 03 bản sao chép, lưu trữ trên tối thiểu 02 phương tiện kỹ thuật khác nhau và có ít nhất 01 bản lưu trữ ngoại vi độc lập. Bất kỳ cá nhân nào tự ý tắt chức năng sao lưu tự động đều bị xử lý kỷ luật theo Nội quy lao động (OBK-NQLD).
2. **Điểm kiểm soát KS-BCP-02 (Kiểm tra toàn vẹn định kỳ hằng tuần):** Quản trị hệ thống phải kiểm tra thực tế tính toàn vẹn của bản sao lưu vào sáng Thứ Hai hằng tuần và ghi nhận vào biểu mẫu BC-01. Nghiêm cấm việc chỉ nhìn trạng thái lịch trình trên phần mềm mà không thử giải nén tệp.
3. **Điểm kiểm soát KS-BCP-03 (Chỉ tiêu kỹ thuật RTO và RPO):** Trong mọi cuộc diễn tập hoặc sự cố thực tế, Thời gian phục hồi mục tiêu RTO không được vượt quá 04 giờ và Điểm phục hồi mục tiêu RPO không được mất mát quá 24 giờ dữ liệu giao dịch. Trường hợp vượt quá chỉ tiêu, Quản trị hệ thống và các bộ phận liên quan phải giải trình bằng văn bản trước `CEO`.
4. **Điểm kiểm soát KS-BCP-04 (Mã hóa thiết bị lưu trữ ngoại vi):** Toàn bộ thiết bị ổ cứng ngoại vi chứa dữ liệu sao lưu phải được bật mã hóa phân vùng phần cứng AES-256. Mật mã giải mã chỉ do `CEO` và Quản trị hệ thống nắm giữ trong phong bì niêm phong đặt tại két sắt an toàn.
5. **Điểm kiểm soát KS-BCP-05 (Cách ly môi trường diễn tập):** Khi thực hiện diễn tập thử nghiệm phục hồi dữ liệu, bắt buộc phải thực hiện trên môi trường máy chủ thử nghiệm tách biệt; nghiêm cấm chạy thử nghiệm trên cơ sở dữ liệu sản xuất chính.

---

## 7. Lỗi thường gặp và cách xử lý

| Mã lỗi | Mô tả sai sót thường gặp | Nguyên nhân gốc rễ | Biện pháp xử lý và phòng ngừa bắt buộc |
| --- | --- | --- | --- |
| `E-BCP-01` | Tệp sao lưu tự động có dung lượng 0 KB hoặc bị hỏng nhưng không phát hiện | Ổ đĩa lưu trữ bị đầy dung lượng hoặc tiến trình sao lưu bị ngắt quãng giữa chừng | Thiết lập cảnh báo tự động gửi thư điện tử khi dung lượng ổ đĩa đạt mức 85%; Quản trị hệ thống kiểm tra kích thước tệp vào sáng Thứ Hai hằng tuần theo [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]] |
| `E-BCP-02` | Thiết bị ổ cứng ngoại vi bị thất lạc hoặc hỏng phần cứng do bảo quản sai môi trường | Không cất giữ trong két chống cháy; thiếu danh mục bàn giao vật lý | Đưa ổ cứng ngoại vi vào Sổ theo dõi tài sản [[TS-01_So_theo_doi_tai_san_va_cong_cu\|TS-01]]; thay mới thiết bị lưu trữ sau mỗi 24 tháng vận hành; bảo quản trong két chống cháy |
| `E-BCP-03` | Thời gian khôi phục thực tế vượt quá 04 giờ (vi phạm chỉ số RTO) | Tệp sao lưu quá nặng, đường truyền mạng tải về chậm hoặc người thực hiện lúng túng do thiếu tài liệu hướng dẫn | Duy trì bản sao lưu nén sẵn trên ổ cứng cục bộ tốc độ cao; ban hành tài liệu các bước khôi phục từng lệnh; tổ chức diễn tập định kỳ để thành thạo thao tác |
| `E-BCP-04` | Mất mát dữ liệu vượt quá 24 giờ (vi phạm chỉ số RPO) | Tính năng sao lưu tự động hằng ngày bị lỗi nhưng nhân sự không kiểm tra báo cáo sáng hôm sau | Cài đặt thông báo tự động về hòm thư điện tử của Kế toán trưởng mỗi khi tác vụ sao lưu lúc 23h00 hoàn thành hoặc thất bại; kích hoạt sao lưu bù ngay nếu phát hiện lỗi |
| `E-BCP-05` | Nhân sự lưu hồ sơ khách hàng trên màn hình máy tính cá nhân, khi máy hỏng không thể tìm lại | Thói quen làm việc tùy tiện, vi phạm quy định lưu trữ dữ liệu tập trung | Định kỳ quét kiểm tra máy trạm; khóa quyền lưu trữ tệp ngoài thư mục đám mây đồng bộ; đánh giá kỷ luật lao động nếu tái phạm theo [[OBK-SOP-NB-12_Xu_ly_ky_luat_lao_dong_va_trach_nhiem_vat_chat\|OBK-SOP-NB-12]] |

---

## 8. Đầu ra và nơi lưu

| Tài liệu / Dữ liệu đầu ra | Người chịu trách nhiệm lập | Định dạng và phương thức lưu trữ | Nơi lưu trữ bảo mật | Thời hạn lưu trữ tối thiểu |
| --- | --- | --- | --- | --- |
| Tệp sao lưu cơ sở dữ liệu kế toán hằng ngày | Phần mềm tự động kết xuất; Quản trị hệ thống giám sát | Tệp cơ sở dữ liệu nén mã hóa (.mbk hoặc .bak) | Đám mây Google Cloud Storage + Ổ cứng ngoại vi mã hóa | Tối thiểu 10 năm theo quy định tại Điều 41 Luật Kế toán |
| Tệp sao lưu hồ sơ pháp lý số hóa hằng tuần | Quản trị hệ thống | Gói tệp lưu trữ số hóa nén mã hóa | Đám mây đa vùng + Ổ cứng ngoại vi số 1 | Tối thiểu 10 năm hoặc theo vòng đời phục vụ khách hàng |
| Bảng kiểm tra sao lưu dữ liệu hằng tuần | Quản trị hệ thống | Phiếu [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]] | Thư mục hồ sơ BCP nội bộ | Tối thiểu 03 năm |
| Biên bản diễn tập khôi phục thảm họa định kỳ | Quản trị hệ thống và Kế toán trưởng | Phiếu [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]] có chữ ký của `CEO` | Thư mục BCP trên Google Workspace | Tối thiểu 05 năm |
| Danh bạ liên lạc khẩn cấp BCP | Bộ phận nhân sự phối hợp Quản trị hệ thống | Bảng dữ liệu số hóa trên trang nội bộ | Phiếu [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]] và lưu trong máy tính cá nhân của các `TL` | Cập nhật hằng quý |

---

## 9. Chỉ số theo dõi

| Mã chỉ số | Tên chỉ số theo dõi | Phương pháp đo lường | Mục tiêu tiêu chuẩn | Tần suất đo lường |
| --- | --- | --- | --- | --- |
| `KPI-BCP-01` | Tỷ lệ sao lưu tự động thành công | (Số lượt sao lưu thành công / Tổng số lượt theo kế hoạch) x 100% | Đạt 100% | Hằng tháng |
| `KPI-BCP-02` | Thời gian phục hồi thực tế (RTO) | Số giờ đo đạc từ thời điểm bắt đầu khôi phục đến khi hệ thống sẵn sàng hoạt động | Từ 04 giờ trở xuống | Mỗi kỳ diễn tập hoặc khi phát sinh sự cố |
| `KPI-BCP-03` | Điểm phục hồi thực tế (RPO) | Khoảng thời gian dữ liệu bị mất giữa mốc sao lưu gần nhất và thời điểm xảy ra sự cố | Từ 24 giờ trở xuống | Mỗi kỳ diễn tập hoặc khi phát sinh sự cố |
| `KPI-BCP-04` | Tỷ lệ kiểm tra tính toàn vẹn hằng tuần | (Số tuần hoàn thành kiểm tra mở tệp sao lưu / Tổng số tuần làm việc) x 100% | Đạt 100% | Hằng quý |
| `KPI-BCP-05` | Tỷ lệ hoàn thành diễn tập định kỳ | Số lần tổ chức diễn tập phục hồi thảm họa thực tế trong năm | Tối thiểu 02 lần mỗi năm (đạt 100%) | 06 tháng một lần |

---

## Liên kết với tài liệu khác

- [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ oBacker;
- [[OBK-SOP-NB-08_Quan_ly_tai_san_va_cong_cu_dung_cu|OBK-SOP-NB-08]] Quản lý tài sản và công cụ dụng cụ nội bộ;
- [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo|OBK-SOP-NB-09]] Xử lý sự cố dữ liệu cá nhân nội bộ;
- [[OBK-SOP-NB-10_Quan_ly_nghi_phep_va_lam_viec_tu_xa|OBK-SOP-NB-10]] Quản lý nghỉ phép và làm việc từ xa;
- [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp|BC-01]] Bảng kiểm tra sao lưu dữ liệu và ứng phó sự cố BCP;
- [[TS-01_So_theo_doi_tai_san_va_cong_cu|TS-01]] Sổ theo dõi tài sản và công cụ;
- [[PM-01_Bang_theo_doi_thue_bao_phan_mem_noi_bo|PM-01]] Bảng theo dõi thuê bao phần mềm nội bộ.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
