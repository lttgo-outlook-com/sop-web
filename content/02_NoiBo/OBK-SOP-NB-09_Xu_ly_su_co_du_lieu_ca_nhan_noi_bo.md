---
title: "OBK-SOP-NB-09. Xử lý sự cố dữ liệu cá nhân nội bộ"
code: "OBK-SOP-NB-09"
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
  - OBK-SOP-NB-09
tags:
  - loai/sop
  - cap/3
---
# OBK-SOP-NB-09. Xử lý sự cố dữ liệu cá nhân nội bộ

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-NB-09 |
| Tên tài liệu | Quy định tinh gọn về xử lý sự cố dữ liệu cá nhân nội bộ |
| Cấp tài liệu | Cấp 3, hướng dẫn nghiệp vụ. Thi hành [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] Quy chế tổ chức và phân quyền |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 27/09/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ |
| Bộ tài liệu | OBK-SOP-NB, Sổ tay quy trình nội bộ oBacker |
| Tài liệu song hành | [[06_Data_Protection_VI\|OBK-TnC-06]] cam kết bảo vệ dữ liệu cá nhân;<br>[[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] mục 19.4 |
| Lần rà soát tiếp theo | Không quá 12 tháng kể từ ngày ban hành |
| Phạm vi phát hành | Nội bộ oBacker. Không phát hành cho khách hàng. |

---

## CẢNH BÁO MỞ ĐẦU

> [!warning] MỐC THÔNG BÁO CƠ QUAN NHÀ NƯỚC TRONG 72 GIỜ
> Căn cứ Điều 23 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định số 356/2025/NĐ-CP, khi phát hiện sự cố vi phạm quy định bảo vệ dữ liệu cá nhân (lộ, mất, rò rỉ hoặc truy cập trái phép) có nguy cơ gây thiệt hại đến quyền và lợi ích hợp pháp của chủ thể dữ liệu, oBacker BẮT BUỘC phải lập thông báo bằng văn bản gửi Cơ quan chuyên trách bảo vệ dữ liệu cá nhân (Bộ Công an) chậm nhất trong vòng **72 giờ** kể từ khi phát hiện hành vi vi phạm.

---

## 1. Mục đích

Thiết lập cơ chế ứng phó khẩn cấp, tinh gọn và tuân thủ chặt chẽ pháp luật khi xảy ra sự cố liên quan đến an toàn dữ liệu cá nhân tại Công ty cổ phần oBacker. Bốn mục tiêu phải đạt đồng thời:

1. Phát hiện, ngăn chặn và khoanh vùng sự cố trong thời gian ngắn nhất nhằm giảm thiểu tổn thất đối với hệ thống thông tin của oBacker và quyền lợi của chủ thể dữ liệu.
2. Tuân thủ tuyệt đối nghĩa vụ pháp lý về báo cáo sự cố cho cơ quan nhà nước có thẩm quyền trong thời hạn **72 giờ** theo đúng quy định tại Điều 23 Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.
3. Thực hiện thông báo minh bạch, đúng thời hạn cho người lao động và khách hàng có dữ liệu bị ảnh hưởng, phối hợp hướng dẫn các biện pháp giảm nhẹ rủi ro.
4. Điều tra nguyên nhân gốc rễ, xác định rõ trách nhiệm cá nhân, khắc phục triệt để điểm yếu an toàn thông tin và cập nhật biện pháp phòng ngừa tái diễn.

---

## 2. Phạm vi áp dụng

**Trong phạm vi:**
- Toàn bộ sự cố an toàn dữ liệu cá nhân phát sinh trong quá trình thu thập, lưu trữ, xử lý, truyền tải hoặc hủy bỏ dữ liệu tại oBacker;
- Dữ liệu cá nhân của người lao động oBacker (thông tin nhân thân, Căn cước công dân, dữ liệu sinh trắc học, tiền lương, tài khoản ngân hàng, hồ sơ bảo hiểm);
- Dữ liệu cá nhân của khách hàng và người lao động của khách hàng mà oBacker tiếp nhận xử lý trong quá trình cung cấp dịch vụ kế toán, thuế, tiền lương, pháp lý (với tư cách Bên xử lý dữ liệu theo Điều 19.4 [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen|OBK-QCTC-02]]);
- Các sự cố kỹ thuật (máy chủ bị tấn công, mã độc mã hóa tống tiền ransomware, lộ thông tin tài khoản quản trị) và sự cố con người (gửi nhầm tệp dữ liệu khách hàng ra ngoài, thất lạc máy tính, nhân viên sao chép dữ liệu trái phép).

**Ngoài phạm vi:**
- Sự cố gián đoạn dịch vụ hạ tầng mạng không làm lộ hoặc không đe dọa an toàn dữ liệu cá nhân.

---

## 3. Vai trò và trách nhiệm

| Vai trò | Trách nhiệm trong quy trình | Giới hạn quyền hạn |
| --- | --- | --- |
| `CEO` | Trưởng ban chỉ đạo xử lý sự cố; quyết định tạm dừng hệ thống khi sự cố đặc biệt nghiêm trọng; phê duyệt phương án bồi thường, khắc phục hậu quả; ký văn bản thông báo chính thức gửi cơ quan chuyên trách bảo vệ dữ liệu cá nhân và khách hàng | Không trì hoãn việc thông báo cơ quan nhà nước vượt quá thời hạn 72 giờ luật định |
| `DPO` / Cán bộ chuyên trách bảo vệ dữ liệu | Đầu mối tiếp nhận cảnh báo sự cố; chủ trì đánh giá mức độ vi phạm; phối hợp bộ phận kỹ thuật điều tra nguyên nhân; soạn thảo báo cáo sự cố gửi cơ quan chuyên trách (Mẫu theo Nghị định 356/2025/NĐ-CP); giám sát quy trình khắc phục | Không tự ý phát ngôn ra công chúng hoặc khách hàng khi chưa có phê duyệt của `CEO` |
| Quản trị hệ thống IT | Thực thi ngay các biện pháp kỹ thuật khẩn cấp: ngắt kết nối mạng, cô lập máy chủ, thu hồi quyền truy cập, khóa tài khoản nghi ngờ; sao lưu nhật ký hệ thống làm bằng chứng; khôi phục hệ thống từ bản sao lưu sạch | Không được xóa nhật ký (log) hoặc định dạng lại ổ đĩa làm mất bằng chứng điều tra |
| Quản lý trực tiếp (`TL` / `Trưởng bộ phận`) | Đôn đốc nhân viên báo cáo sự cố ngay lập tức; phối hợp xác định danh sách khách hàng và dữ liệu cá nhân bị ảnh hưởng tại bộ phận mình; tham gia đánh giá mức độ ảnh hưởng | Không tự ý thỏa thuận bồi thường riêng với khách hàng |
| Toàn thể người lao động | Có nghĩa vụ phát hiện và báo cáo ngay cho `DPO` hoặc IT trong vòng **30 phút** khi nghi ngờ hoặc phát hiện lộ thông tin; tuân thủ nghiêm ngặt hướng dẫn xử lý sự cố | Nghiêm cấm hành vi giấu giếm sự cố hoặc tự ý xử lý làm tình trạng rò rỉ dữ liệu trầm trọng hơn |

---

## 4. Đầu vào bắt buộc

1. Cảnh báo hoặc báo cáo ban đầu về sự cố (từ nhân viên, khách hàng, đối tác hoặc cảnh báo tự động từ hệ thống giám sát an toàn thông tin);
2. Nhật ký truy cập hệ thống (Access Log), nhật ký tường lửa, nhật ký hoạt động thư điện tử trong khoảng thời gian xảy ra sự cố;
3. Danh mục hồ sơ, cơ sở dữ liệu có khả năng bị xâm hại;
4. Phiếu ghi nhận sự cố dữ liệu cá nhân ban đầu (`BM-SC-DL`);
5. Danh bạ khẩn cấp của Ban chỉ đạo xử lý sự cố và thông tin liên hệ của Cơ quan chuyên trách bảo vệ dữ liệu cá nhân (Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao - Bộ Công an).

---

## 5. Các bước thực hiện

```
[B1: Phát hiện & Báo cáo nội bộ khẩn cấp] (Trong vòng 30 phút)
       ↓
[B2: Khoanh vùng, Cô lập & Ngăn chặn phát tán] (Trong vòng 02 giờ)
       ↓
[B3: Điều tra, Đánh giá phạm vi & Mức độ tổn thất] (Trong vòng 24 giờ)
       ↓
[B4: Báo cáo Cơ quan Chuyên trách & Thông báo Chủ thể dữ liệu] 
       ├── Báo cáo Bộ Công an CHẬM NHẤT TRONG 72 GIỜ (Điều 23 Luật 91/2025)
       └── Thông báo Khách hàng / Nhân sự bị ảnh hưởng
       ↓
[B5: Khắc phục triệt để, Khôi phục hệ thống & Đóng hồ sơ]
```

### Bước 1: Tiếp nhận và báo cáo khẩn cấp nội bộ (Trong vòng 30 phút)

1. Khi bất kỳ người lao động nào phát hiện một trong các dấu hiệu:
   - Gửi nhầm thư điện tử chứa dữ liệu cá nhân của người này cho người khác;
   - Thiết bị làm việc (máy tính xách tay, điện thoại, ổ cứng) chứa dữ liệu công ty bị mất cắp hoặc thất lạc;
   - Phát hiện tài khoản Google Workspace hoặc tài khoản phần mềm có hoạt động đăng nhập bất thường từ địa chỉ IP lạ;
   - Hệ thống dữ liệu bị mã hóa, xuất hiện thông báo tống tiền hoặc phát hiện dữ liệu nội bộ bị rao bán trên không gian mạng;
2. Người phát hiện lập tức thông báo qua kênh khẩn cấp (điện thoại trực tiếp hoặc tin nhắn ưu tiên) cho `DPO` và Quản trị IT trong vòng **30 phút**.
3. `DPO` ghi nhận thông tin vào Phiếu ghi nhận sự cố (`BM-SC-DL`) và kích hoạt Ban chỉ đạo xử lý sự cố.

### Bước 2: Khoanh vùng, cô lập và ngăn chặn phát tán (Trong vòng 02 giờ)

1. Ngay khi tiếp nhận thông tin, Quản trị IT phối hợp `DPO` triển khai ngay các biện pháp kỹ thuật cô lập:
   - Thu hồi ngay lập tức liên kết chia sẻ dữ liệu công khai trên Google Drive hoặc hệ sinh thái đám mây;
   - Đổi mật khẩu khẩn cấp và đăng xuất toàn bộ phiên làm việc của các tài khoản nghi ngờ bị xâm nhập;
   - Ngắt kết nối mạng (Internet/LAN) của các máy chủ hoặc máy tính nghi ngờ nhiễm mã độc;
   - Chặn các địa chỉ IP độc hại trên tường lửa mạng văn phòng;
   - Khóa tạm thời cổng xuất dữ liệu ra ngoài thiết bị ngoại vi.
2. Trích xuất và bảo lưu nguyên trạng tệp nhật ký hệ thống (log) tại thời điểm xảy ra sự cố vào vùng lưu trữ an toàn độc lập để phục vụ công tác giám định kỹ thuật.

### Bước 3: Điều tra, phân loại mức độ và đánh giá thiệt hại (Trong vòng 24 giờ)

1. `DPO` chủ trì buổi đánh giá kỹ thuật cùng IT và các bộ phận nghiệp vụ liên quan:
   - Xác định chủng loại dữ liệu bị lộ: Dữ liệu cá nhân cơ bản (họ tên, ngày sinh, nơi ở, số điện thoại) hay Dữ liệu cá nhân nhạy cảm (dữ liệu tài chính, thông tin tài khoản ngân hàng, tiền lương, tình trạng sức khỏe, dữ liệu sinh trắc học theo CC-LD-215);
   - Xác định số lượng chủ thể dữ liệu bị ảnh hưởng (dưới 100 người, từ 100 đến 1.000 người, hoặc trên 1.000 người);
   - Đánh giá khả năng thu hồi dữ liệu và mức độ thiệt hại thực tế hoặc tiềm tàng;
2. Phân loại mức độ sự cố:
   - **Mức 1 (Nhỏ / Kiểm soát được):** Sự cố nội bộ phạm vi hẹp, đã thu hồi và xóa ngay (ví dụ gửi nhầm email nội bộ giữa hai nhân viên cùng công ty và đã xóa ngay);
   - **Mức 2 (Đáng kể):** Rò rỉ dữ liệu cá nhân cơ bản của khách hàng hoặc nhân sự ra bên ngoài nhưng chưa phát hiện dấu hiệu bị khai thác trục lợi;
   - **Mức 3 (Nghiêm trọng):** Lộ lọt dữ liệu cá nhân nhạy cảm (tài khoản ngân hàng, thông tin lương, dữ liệu thuế quy mô lớn) hoặc dữ liệu bị đối tượng xấu chiếm đoạt, công khai trên mạng xã hội/diễn đàn tin tặc.

### Bước 4: Thông báo Cơ quan chuyên trách và thông báo cho chủ thể dữ liệu (Chậm nhất 72 giờ)

1. **Thông báo Cơ quan chuyên trách bảo vệ dữ liệu cá nhân (Bộ Công an):**
   - Áp dụng đối với sự cố Mức 2 và Mức 3 có nguy cơ gây thiệt hại đến quyền, lợi ích hợp pháp của chủ thể dữ liệu;
   - `DPO` dự thảo Văn bản thông báo sự cố theo Mẫu quy định tại Nghị định số 356/2025/NĐ-CP;
   - Nội dung thông báo gồm: mô tả bản chất sự cố vi phạm; thời điểm phát hiện; chủng loại và số lượng dữ liệu cá nhân bị ảnh hưởng; hậu quả, thiệt hại tiềm tàng; các biện pháp đã và đang áp dụng để khắc phục; thông tin liên hệ của cán bộ đầu mối (`DPO`);
   - `CEO` ký duyệt và gửi văn bản chậm nhất trong vòng **72 giờ** kể từ khi phát hiện hành vi vi phạm, qua Cổng thông tin quốc gia về bảo vệ dữ liệu cá nhân hoặc gửi trực tiếp cho Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05 - Bộ Công an).
2. **Thông báo cho khách hàng và chủ thể dữ liệu:**
   - Trường hợp dữ liệu bị lộ là dữ liệu của khách hàng dịch vụ (oBacker là Bên xử lý dữ liệu): gửi thông báo bằng văn bản cho Người đại diện theo pháp luật của khách hàng trong vòng 24 giờ sau khi khoanh vùng sự cố;
   - Thông báo rõ nội dung sự cố, khuyến nghị các biện pháp bảo vệ cần thiết (đổi mật khẩu ngân hàng, cảnh giác cuộc gọi lừa đảo, tạm khóa thẻ tín dụng);
   - Thiết lập đường dây nóng hỗ trợ giải đáp thắc mắc cho các bên bị ảnh hưởng.

### Bước 5: Khắc phục triệt để, khôi phục hệ thống và hoàn thiện hồ sơ

1. Khôi phục dữ liệu sạch từ hệ thống sao lưu định kỳ gần nhất đã được kiểm tra tính an toàn.
2. Khắc phục toàn bộ điểm yếu an toàn thông tin trên ứng dụng, cập nhật chính sách phân quyền truy cập và rà soát cấu hình mạng.
3. Ban chỉ đạo họp tổng kết sự cố:
   - Đánh giá hiệu quả ứng phó và chi phí khắc phục thiệt hại;
   - Làm rõ trách nhiệm của các cá nhân, bộ phận có lỗi dẫn đến sự cố và xử lý kỷ luật lao động theo [[Noi_quy_lao_dong|OBK-NQLD]];
   - Cập nhật quy chế, bổ sung chương trình đào tạo nhận thức an toàn thông tin cho toàn bộ nhân sự;
4. Hoàn tất Hồ sơ xử lý sự cố (`BM-HS-SC`) và lưu trữ theo chế độ mật tối thiểu 05 năm.

---

## 6. Điểm kiểm soát bắt buộc

| Mã chốt | Điểm kiểm soát | Thời điểm kiểm tra | Người kiểm | Xử lý khi không đạt |
| --- | --- | --- | --- | --- |
| `KS-SC-01` | Thời gian tiếp nhận và báo cáo khẩn cấp nội bộ trong 30 phút | Khi phát sinh sự cố | Toàn thể nhân viên, `DPO` | Đôn đốc báo cáo khẩn; xử lý kỷ luật nếu cố tình che giấu |
| `KS-SC-02` | Thao tác cô lập kỹ thuật hoàn thành trong vòng 02 giờ | Trong 02 giờ đầu sau báo cáo | Quản trị IT | Huy động toàn bộ nhân lực IT; ngắt kết nối vật lý khi chưa ngăn chặn được từ xa |
| `KS-SC-03` | **Lập và gửi thông báo Cơ quan chuyên trách trong vòng 72 giờ** theo Điều 23 Luật 91/2025/QH15 | Trước mốc 72 giờ kể từ khi phát hiện | `DPO`, `CEO` | **CHỐT PHÁP LÝ BẮT BUỘC: Không để vượt quá 72 giờ, tránh bị xử phạt vi phạm hành chính** |
| `KS-SC-04` | Thông báo cho khách hàng là Bên kiểm soát dữ liệu trong vòng 24 giờ | Trong vòng 24 giờ sau khoanh vùng | `DPO`, `CEO` | Gửi văn bản chính thức kèm khuyến nghị giảm nhẹ rủi ro |
| `KS-SC-05` | Bảo toàn nguyên vẹn nhật ký hệ thống (log) làm chứng cứ | Ngay khi cô lập hệ thống | Quản trị IT | Sao lưu độc lập ra thiết bị gắn ngoài có niêm phong |
| `KS-SC-06` | Họp rút kinh nghiệm và ban hành biện pháp khắc phục trong 07 ngày | Trong 07 ngày sau khi dập tắt sự cố | Ban chỉ đạo, `CEO` | Ban hành văn bản kết luận và cập nhật biện pháp kỹ thuật |

---

## 7. Lỗi thường gặp và cách xử lý

1. **Cố tình che giấu sự cố vì sợ bị kỷ luật:**
   - *Hậu quả:* Bỏ lỡ thời điểm vàng để khoanh vùng sự cố, dữ liệu bị phát tán tràn lan ra ngoài, vi phạm nghiêm trọng thời hạn báo cáo 72 giờ theo luật định, doanh nghiệp đối mặt án phạt hành chính rất nặng;
   - *Cách xử lý:* Phổ biến văn hóa minh bạch: nhân viên chủ động báo cáo trung thực sự cố sớm trong 30 phút được xem xét giảm nhẹ trách nhiệm; nhân viên che giấu bị xử lý kỷ luật mức sa thải.
2. **Quản trị IT vội vã cài đặt lại máy tính hoặc xóa dữ liệu làm mất dấu vết điều tra:**
   - *Hậu quả:* Không thể chứng minh nguyên nhân, không xác định được kẻ tấn công và không thể cung cấp chứng cứ khi cơ quan công an yêu cầu phối hợp điều tra;
   - *Cách xử lý:* Quy định cứng: thao tác đầu tiên là tạo bản sao lưu ảnh đĩa (disk image) và lưu trữ nhật ký hệ thống ra nơi an toàn trước khi thực hiện bất kỳ thao tác xóa hoặc vá lỗi nào.
3. **Quá thời hạn 72 giờ mới gửi thông báo cho Cục An ninh mạng (A05):**
   - *Hậu quả:* Vi phạm trực tiếp Điều 23 Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15, bị cơ quan quản lý nhà nước xử phạt và đưa vào danh sách đen doanh nghiệp vi phạm an toàn dữ liệu;
   - *Cách xử lý:* `DPO` theo dõi đồng hồ đếm ngược 72 giờ kể từ phút đầu tiên phát hiện sự cố; trong trường hợp chưa điều tra xong đầy đủ thì gửi báo cáo sơ bộ trước mốc 72 giờ và xin bổ sung báo cáo cập nhật sau.
4. **Không phối hợp thông báo cho khách hàng có dữ liệu bị ảnh hưởng:**
   - *Hậu quả:* Khách hàng bị tấn công dây chuyền, khởi kiện đòi bồi thường thiệt hại và chấm dứt hợp đồng dịch vụ;
    - *Cách xử lý:* Tuân thủ cam kết tại OBK-TnC-06: thông báo đúng hạn, phối hợp minh bạch giúp khách hàng phòng vệ.

---

## 8. Đầu ra và nơi lưu

| Sản phẩm đầu ra | Định dạng | Trách nhiệm lưu trữ | Nơi lưu trữ | Thời hạn lưu trữ |
| --- | --- | --- | --- | --- |
| Phiếu tiếp nhận sự cố dữ liệu cá nhân (`BM-SC-DL`) | Bản ghi điện tử | `DPO` | Hệ thống quản lý an toàn thông tin | Tối thiểu 05 năm |
| Bản sao lưu nhật ký hệ thống (System logs) | Tệp dữ liệu nén bảo mật | Quản trị IT | Vùng lưu trữ chứng cứ số | Tối thiểu 05 năm |
| Báo cáo đánh giá phạm vi và mức độ tổn thất | Bản điện tử (PDF) | `DPO` | Hồ sơ bảo vệ dữ liệu | Tối thiểu 05 năm |
| Văn bản thông báo gửi Cơ quan chuyên trách (Bộ Công an) | Bản chính có dấu đỏ / Tệp ký số kèm xác nhận nộp | `DPO`, `CEO` | Hồ sơ pháp lý công ty | Tối thiểu 10 năm |
| Văn bản thông báo gửi khách hàng và chủ thể dữ liệu | Bản chính / Thư điện tử chính thức | `DPO`, Bộ phận dịch vụ | Hồ sơ khách hàng | Tối thiểu 05 năm |
| Báo cáo tổng kết sự cố và phương án khắc phục triệt để | Bản gốc giấy có phê duyệt của `CEO` | `DPO`, `CEO` | Hồ sơ quản trị nội bộ | Tối thiểu 05 năm |

---

## 9. Chỉ số theo dõi

| Mã chỉ số | Tên chỉ số | Cách đo lường | Mục tiêu | Tần suất | Người theo dõi |
| --- | --- | --- | --- | --- | --- |
| `SC-M01` | Tỷ lệ báo cáo sự cố nội bộ trong vòng 30 phút | Số vụ báo cáo trong 30 phút / Tổng số sự cố phát sinh x 100% | **100%** | Mỗi lần phát sinh | `DPO` |
| `SC-M02` | Thời gian hoàn thành thao tác cô lập kỹ thuật | Số phút từ khi nhận tin đến khi cô lập hoàn tất | $\le 120$ phút | Mỗi lần phát sinh | Quản trị IT |
| `SC-M03` | **Tỷ lệ thông báo Cơ quan chuyên trách đúng hạn 72 giờ** | Số văn bản gửi trước 72 giờ / Tổng số sự cố thuộc diện thông báo x 100% | **100%** | Mỗi lần phát sinh | `CEO`, `DPO` |
| `SC-M04` | Tỷ lệ khôi phục dữ liệu thành công từ bản sao lưu | Khối lượng dữ liệu phục hồi toàn vẹn / Khối lượng dữ liệu bị ảnh hưởng x 100% | **100%** | Mỗi lần phát sinh | Quản trị IT |
| `SC-M05` | Số vụ sự cố dữ liệu tái diễn cùng nguyên nhân gốc | Tổng số sự cố có nguyên nhân trùng lặp trong năm | **0 vụ** | Hằng năm | `CEO` |

---

## Liên kết với tài liệu khác

- [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ oBacker;
- [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen|OBK-QCTC-02]] Quy chế tổ chức và phân quyền (Điều 19.4);
- [[06_Data_Protection_VI|OBK-TnC-06]] Cam kết bảo vệ dữ liệu cá nhân;
- [[OBK-SOP-NB-05_Tuyen_dung_va_onboarding_noi_bo|OBK-SOP-NB-05]] Quy trình tuyển dụng và onboarding nội bộ (chốt ký NDA);
- [[OBK-SOP-NB-06_Nghi_viec_va_offboarding_noi_bo|OBK-SOP-NB-06]] Quy trình nghỉ việc và offboarding nội bộ;
- [[Noi_quy_lao_dong|OBK-NQLD]] Nội quy lao động của Công ty cổ phần oBacker.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
