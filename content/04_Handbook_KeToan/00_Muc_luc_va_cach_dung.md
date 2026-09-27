---
title: "SỔ TAY QUY TRÌNH DỊCH VỤ KẾ TOÁN oBacker"
code: "OBK-HB-00"
type: "sop"
folder: "04_Handbook_KeToan"
level: "Mục lục"
version: "R.2.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
law_as_of: "Pháp luật có hiệu lực tại ngày 25/08/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
parent: "OBK-SOP-KT Kế toán và thuế"
next_review: "Không quá 06 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
previous_version: "R.1.0.0"
aliases:
  - OBK-HB-00
tags:
  - loai/sop
  - cap/muc-luc
---
# SỔ TAY QUY TRÌNH DỊCH VỤ KẾ TOÁN oBacker

> [!note] ĐỌC PHẦN NÀY TRƯỚC
> BA NƠI ĐẶT NỘI DUNG, VÀ AI ĐÚNG KHI LỆCH NHAU
>
> Handbook Kế toán là tài liệu **CẤP 3**. Handbook nằm dưới [[03_OBK-SOP-KT_Ke_toan_va_thue|OBK-SOP-KT]] là cấp 2, và dưới [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] là cấp 1.
>
> | Nội dung | ĐẶT tại | Handbook này |
> | --- | --- | --- |
> | Cơ cấu tổ chức, tên đơn vị, ký hiệu vai trò, thẩm quyền quyết định | [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] cùng bốn phụ lục `PL_Tu_dien_vai.md`, `PL_Ma_tran_phan_quyen.md`, `PL_Chuyen_len_cap_tren.md`, `PL_Anh_xa_nhan_su.md` | chỉ DẪN CHIẾU |
> | SLA, mốc thời gian, thời hạn cam kết với khách | Bảng Job của SOP cấp 2, và `03_DichVu/01_OBK-SOP-00` mục 7 | chỉ DẪN CHIẾU |
>
> **Khi Handbook này khác hai nơi trên thì HAI NƠI TRÊN ĐÚNG.** Phát hiện lệch thì báo Legal R&D về phần nội dung và `COO` về phần phát hành, không tự sửa bản trên máy cá nhân.

> [!note] ĐỔI KÝ HIỆU VAI TRÒ
> Thực hiện ngày 02/09/2026. Toàn bộ Handbook này đã đổi `KTV` thành `CV-KT` và `KTT` thành `TL-KT`, tổng 3.754 chỗ. Lý do: hai ký hiệu cũ trùng nghĩa với vai trò miền NỘI BỘ tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]], nơi `KTV` là kế toán viên nội bộ và `KTT` là kế toán trưởng nội bộ, cả hai làm việc trên sổ sách CỦA CHÍNH OBACKER. Sau khi đổi, hai mảng không còn ký hiệu nào trùng nghĩa.
>
> Ba vai trò dễ nhầm nhau, phân biệt trước khi ký bất cứ gì: `TL-KT` là người chốt kỹ thuật trên hồ sơ KHÁCH; `KTT` theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] là kế toán trưởng NỘI BỘ của oBacker; kế toán trưởng CỦA KHÁCH đứng tên trên báo cáo tài chính của khách và mặc định không phải người của oBacker. Ba vai trò mang ba trách nhiệm pháp lý khác nhau, không thay nhau được.
>
> Từ điển ký hiệu đầy đủ: [[PL_Tu_dien_vai|OBK-QCTC-02-PL-A]].

## SOP Handbook dành cho nhân viên kế toán dịch vụ

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-HB-00 |
| Phiên bản | R.2.0.0, đang áp dụng |
| Cấp tài liệu | Mục lục của Handbook cấp 3 |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 25/08/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] Kế toán và thuế |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Lần rà soát tiếp theo | Không quá 06 tháng |
| Phạm vi phát hành | Nội bộ oBacker. Không phát hành cho khách hàng. |

---

## 1. TÀI LIỆU NÀY LÀ GÌ VÀ KHÔNG LÀ GÌ

**Là gì.** Đây là quy trình làm việc chuẩn của oBacker khi cung cấp dịch vụ kế toán và thuế cho khách hàng. Handbook trả lời ba câu hỏi: một nghiệp vụ làm theo trình tự nào, ai chịu trách nhiệm ở bước nào, và chỗ nào dễ sai thì phải kiểm gì.

**Cấu trúc hai khối tài liệu:**
Handbook Kế toán được tổ chức thành hai khối tài liệu độc lập:
1. **Khối Bảng kiểm thao tác nghiệp vụ chuẩn:** Là công cụ làm việc thực hành cốt lõi, cô đọng toàn bộ quy trình thực hiện thành 04 Bảng kiểm theo chu kỳ:
   - Bảng kiểm 1: Tiếp nhận và thiết lập ban đầu (Onboarding)
   - Bảng kiểm 2: Vận hành định kỳ hằng tháng
   - Bảng kiểm 3: Báo cáo và kê khai định kỳ hằng quý
   - Bảng kiểm 4: Khóa sổ và quyết toán năm
2. **Khối Tri thức tham khảo pháp lý và tình huống (Chương 01, 08, 16, 17, 18, 21):** Phục vụ đào tạo, tra cứu chuyên sâu và xử lý tình huống bất thường, không xem là quy trình vận hành bắt buộc hằng ngày.

**Không là gì.**

- Không phải giáo trình kế toán. Tài liệu giả định người đọc đã có nền nghiệp vụ; tài liệu này dạy cách làm theo chuẩn oBacker, không dạy lại nguyên lý kế toán.
- Không phải văn bản pháp luật. Mọi trích dẫn trong đây là để định hướng và tra cứu nhanh. Khi làm việc có rủi ro bị xử phạt hoặc khi trả lời khách, phải mở văn bản gốc.
- Không phải bản thay thế cho phán đoán chuyên môn. Quy trình bao được phần lớn tình huống, không bao được tất cả. Gặp tình huống ngoài quy trình thì chuyển TL-KT, không tự suy diễn.

---

## 2. NĂM VAI TRÒ TRONG TOÀN BỘ TÀI LIỆU

| Ký hiệu | Vai trò | Một câu định nghĩa |
| --- | --- | --- |
| **CV-KT** | Chuyên viên Kế toán và Thuế | Người LÀM. Vận hành nghiệp vụ hằng ngày trên hồ sơ khách được phân công: nhập liệu, lưu trữ chứng từ, hạch toán đơn giản.<br>không tiếp xúc khách hàng. |
| **TL-KT** | Trưởng bộ phận Kế toán và Thuế | Người CHỐT KỸ THUẬT. Tự làm phần nghiệp vụ cần xét đoán, soát, quyết định cách xử lý nghiệp vụ, ký hồ sơ gửi cơ quan thuế.<br>không đứng tên trên báo cáo tài chính của khách trong trường hợp mặc định; ngoại lệ phải do CEO duyệt từng khách. |
| **AM** | Account Manager | Người GIỮ QUAN HỆ VÀ THƯƠNG MẠI.<br>ĐẦU MỐI DUY NHẤT với khách: hợp đồng, phạm vi, báo giá, cam kết mốc, nhắc chứng từ, khiếu nại. |
| **COO** | Giám đốc vận hành, Chief Operating Officer | Người GIẢI QUYẾT XUNG ĐỘT VÀ ĐIỀU HÀNH.<br>Xử xung đột giữa AM và TL-KT, định biên, phân bổ khách, chỉ số dịch vụ, khiếu nại cấp 2. |
| **CEO** | Tổng giám đốc | Người QUYẾT CUỐI. Nhận khách, từ chối khách, chấm dứt hợp đồng, hành vi oBacker nghiêm cấm, khiếu nại cấp cuối. |

Legal R&D không nằm trong chuỗi vận hành khách hàng, chịu trách nhiệm nội dung pháp lý, chuẩn mực nghiệp vụ, quy ước ghi mức chắc chắn của căn cứ, cập nhật văn bản pháp luật và danh mục chờ xác minh Phụ lục E; việc quản lý phiên bản và phát hành tài liệu thuộc `COO`. Bản thiết kế đầy đủ, gồm bảng RACI và toàn bộ trình tự chuyển lên cấp trên, tại `02_Mo_hinh_dich_vu_va_phan_vai.md` Phụ lục 02-C.

Mỗi chương có bảng phân vai trò riêng ở mục 4. Khi bảng chương và bảng này khác nhau, lấy bảng của chương. Nhưng khi cả hai khác `01_ToChuc/OBK-QCTC-02` và bốn phụ lục của văn bản đó thì QCTC-02 đúng, xem cảnh báo đầu tài liệu.

---

## 3. MỨC CHẮC CHẮN CỦA CĂN CỨ, ĐỌC KỸ TRƯỚC KHI DÙNG BẤT KỲ CON SỐ NÀO

Pháp luật thuế và kế toán Việt Nam thay đổi rất lớn trong giai đoạn 2025 đến 2026. Handbook này chỉ chứa nội dung đã đối chiếu toàn văn văn bản gốc trong kho tài liệu nội bộ. Căn cứ nào chưa đạt mức đó thì được ghi rõ ngay tại chỗ dùng căn cứ đó.

| Cách ghi trong tài liệu | Nghĩa | Được dùng để làm gì |
| --- | --- | --- |
| Chỉ ghi số điều khoản | Đã đối chiếu toàn văn văn bản gốc trong kho tài liệu nội bộ | Dùng được ngay, kể cả để trả lời khách và lập memo. |
| Ghi thêm "chưa đối chiếu bản gốc" | Lấy từ nguồn thứ cấp đáng tin nhưng chưa đọc toàn văn | Dùng để lập kế hoạch nội bộ.<br>**không** dùng để cam kết với khách hoặc để hành động có rủi ro bị xử phạt trước khi đối chiếu bản gốc. |
| Ghi thêm "chưa xác minh được" | Chưa tra được bản gốc | **không** được dùng để trả lời khách dưới mọi hình thức. Phải tra cứu và đối chiếu bản gốc trước. |

> [!question] CẦN XÁC MINH
> Kho tài liệu nội bộ có bản gốc của các văn bản trọng yếu sau: Luật Quản lý thuế 108/2025, Nghị định 252/2026/NĐ-CP, Nghị định 254/2026/NĐ-CP, Thông tư 89/2026/TT-BTC kèm Phụ lục I, Thông tư 91/2026/TT-BTC và Luật Kế toán bản hợp nhất 41/VBHN-VPQH. Phần lớn nội dung chưa chắc chắn của bản 1.0 nay đã được đối chiếu bản gốc. Xem danh mục văn bản đầy đủ tại **Phụ lục E**, bản 1.3.

Nguyên tắc bất di bất dịch: **không trả lời khách bằng kiến thức từ trí nhớ.** Quy tắc này áp dụng cho mọi cấp, kể cả TL-KT và CEO. Chi tiết tại Chương 21.

---

## 4. QUY ƯỚC TRÌNH BÀY

**Cấu trúc chương.** Phần lớn các chương theo cùng một khung 10 mục: mục đích; phạm vi áp dụng; căn cứ pháp lý; vai trò và trách nhiệm; đầu vào bắt buộc; các bước thực hiện; điểm kiểm soát bắt buộc; lỗi thường gặp; đầu ra và nơi lưu; chỉ số theo dõi. Khi cần tra nhanh, đi thẳng tới mục 6 và mục 7.

**Cảnh báo.** Bốn loại, đọc theo mức độ ưu tiên giảm dần:

> [!danger] RỦI RO BỊ XỬ PHẠT
> Làm sai ở mục này dẫn tới tiền phạt hoặc tiền chậm nộp cho khách hoặc cho oBacker.

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> CV-KT và AM không có quyền quyết định, phải chuyển TL-KT. Việc vượt thẩm quyền TL-KT thì chuyển COO. Việc nhận khách, từ chối khách, chấm dứt hợp đồng và mọi việc thuộc hành vi oBacker nghiêm cấm thì chuyển CEO.

> [!question] CẦN XÁC MINH
> Nội dung chưa chắc chắn, phải tra bản gốc trước khi dùng.

> [!bug] LỖI THƯỜNG GẶP
> Lỗi hay xảy ra trong thực tế, có dấu hiệu nhận biết và cách xử lý kèm theo.

**Placeholder công cụ.** Tài liệu viết độc lập với phần mềm. Chỗ nào cần thao tác trên hệ thống, tài liệu ghi placeholder trong ngoặc vuông: `[PHẦN MỀM KẾ TOÁN]`, `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`, `[KHO LƯU TRỮ HỒ SƠ]`, `[PHẦN MỀM HĐĐT]`, `[CỔNG THUẾ ĐIỆN TỬ]`. Hướng dẫn bấm ở đâu nằm riêng tại **Phụ lục D**. Lý do tách: đổi phần mềm thì chỉ sửa Phụ lục D, không phải sửa lại toàn bộ tài liệu.

**Trích dẫn pháp lý.** Dạng `[Tên văn bản Đ.<điều> k.<khoản> đ.<điểm>]`. Văn bản hợp nhất ghi theo số hiệu VBHN.

---

## 5. MỤC LỤC

### Phần I. Nền tảng

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 00 | Mục lục và cách dùng tài liệu | Đọc một lần khi mới vào |
| 01 | Nguyên tắc hành nghề và đạo đức nghề nghiệp | Đọc một lần khi mới vào, đọc lại khi gặp tình huống khó xử |
| 02 | Mô hình dịch vụ, phân vai trò và cam kết chất lượng | Khi cần biết gói dịch vụ bao gồm gì, ai làm gì, cam kết bao lâu |
| 03 | Tiếp nhận khách hàng mới | Khi có khách mới |
| 04 | Thu thập, kiểm tra và lưu trữ chứng từ | Hằng tháng, và mỗi khi chứng từ có vấn đề |

### Phần II. Nghiệp vụ kế toán

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 05 | Quy trình kế toán tháng theo phần hành | Hằng tháng, tra theo từng phần hành |
| 06 | Khóa sổ và đối chiếu cuối kỳ | Cuối mỗi tháng và cuối năm |
| 07 | Lập, soát xét và nộp báo cáo tài chính năm | Mùa báo cáo tài chính |
| 08 | Lựa chọn chế độ kế toán áp dụng cho khách hàng | Khi nhận khách mới, khi khách đổi quy mô |

### Phần III. Thuế và tuân thủ

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 09 | Thuế giá trị gia tăng | Hằng tháng hoặc hằng quý |
| 10 | Thuế thu nhập doanh nghiệp | Tạm nộp quý và quyết toán năm |
| 11 | Thuế thu nhập cá nhân | Hằng quý và quyết toán năm |
| 12 | Hóa đơn điện tử | Liên tục, và mỗi khi có hóa đơn sai sót |
| 13 | Lịch tuân thủ và quy trình khai nộp thuế định kỳ | Chương nền. Mở hằng tuần. |

### Phần IV. Rủi ro và xử lý

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 14 | Quyết toán thuế năm | Kỳ quyết toán thuế năm |
| 15 | Xử lý sai sót và khai bổ sung | Ngay khi phát hiện sai sót. Đọc trước, không đọc lúc khẩn cấp. |
| 16 | Kiểm tra thuế và xử lý khi bị chuyển hồ sơ sang cơ quan thanh tra | Ngay khi khách nhận quyết định kiểm tra |
| 17 | Khung xử phạt và biện pháp phòng ngừa | Khi cần ước lượng rủi ro, và khi thiết kế biện pháp kiểm soát |

### Phần V. Vận hành và chất lượng

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 18 | Kiểm soát chất lượng và quy trình soát xét | TL-KT và COO dùng thường xuyên |
| 19 | Giao tiếp và quản trị kỳ vọng khách hàng | Khi soạn thư, khi khách khiếu nại, khi phải từ chối khách |
| 20 | Bàn giao nội bộ và kết thúc hợp đồng dịch vụ | Khi đổi người phụ trách, khi khách dừng dịch vụ |
| 21 | Theo dõi và cập nhật văn bản pháp luật | Định kỳ, và mỗi khi có văn bản mới |

### Phụ lục

| Mã | Tên | Nội dung |
| --- | --- | --- |
| A | Bộ bảng kiểm in ra dùng được | 12 bảng kiểm theo tình huống, định dạng để tick tay |
| B | Biểu mẫu nội bộ | 12 biểu mẫu để sao và điền |
| C | Lịch tuân thủ cả năm | Lịch 12 tháng kèm mốc cảnh báo nội bộ |
| D | Thao tác trên phần mềm và công cụ | Khung trống, oBacker tự điền theo stack thực tế |
| E | Danh mục văn bản pháp luật áp dụng | Văn bản đang hiệu lực, văn bản đã hết hiệu lực, danh mục chờ xác minh |
| F | Báo cáo kiểm soát chất lượng bản nháp 1.0 | Kết quả 08 phép kiểm độc lập, danh sách lỗi đã sửa, rủi ro còn lại cần người quyết định, điều kiện ban hành chính thức |
| G | Mốc công việc và đầu ra dịch vụ | Năm mốc theo vòng đời khách từ M1 tiếp nhận tới M5 kết thúc, task kèm người chủ trì và mốc, đầu ra phân biệt theo gói G1 tới G4, tiêu chí đóng từng mốc.<br>Dùng để giao việc, để soạn phạm vi hợp đồng, và để nghiệm thu |
| H | Quy trình cung cấp chữ ký số và hóa đơn điện tử | Trình tự 5 bước cấp phát chữ ký số, bàn giao thiết bị, cài đặt driver, đăng ký Mẫu 01/ĐKTĐ-HĐĐT và thiết lập mẫu hóa đơn điện tử |

### Tài liệu kèm theo, nằm cùng thư mục với Handbook

| Tài liệu | Nội dung |
| --- | --- |
| `02_Mo_hinh_dich_vu_va_phan_vai.md` Phụ lục 02-C | Bản thiết kế phân vai trò 5 cấp CV-KT, TL-KT, AM, COO, CEO và trình tự chuyển lên cấp trên: mô tả công việc từng vai trò, bốn nguyên tắc không được vi phạm, bảng RACI 45 đầu việc, trình tự chuyển lên cấp trên theo tình huống.<br>Đây là bản gốc về vai trò; chỗ nào trong Handbook còn ghi vai trò cũ thì lấy theo bản này |
| Tra cứu và cập nhật văn bản pháp luật | Quy trình tra cứu 04 bước tại Chương 21; các nội dung chưa có văn bản chính thức tuyệt đối không dùng để tư vấn khách hàng |
| `So_ket_luan_xac_minh_25082026` | Sổ kết luận xác minh, 13 tệp: một sổ tổng hợp `00_SO_KET_LUAN_XAC_MINH_25082026.md` và 12 phiếu kết luận từ V1 tới V12 theo từng chủ đề.<br>Mở khi cần biết một con số trong Handbook đã được đối chiếu tới đâu và bằng điều khoản nào |

---

## 6. BẢNG TRA NHANH NỘI DUNG NGHIỆP VỤ

| Nội dung nghiệp vụ cần thực hiện | Mở chương |
| --- | --- |
| Nhận một khách hàng mới | 03, rồi 08, rồi 13 |
| Xác định khách áp dụng chế độ kế toán nào | 08 |
| Xác định khách khai thuế theo tháng hay theo quý | 13 |
| Hạch toán một nghiệp vụ cụ thể | 05, tra theo phần hành |
| Kiểm tra một hóa đơn đầu vào trước khi kê khai | 09, và Phụ lục A |
| Xử lý hóa đơn đã lập bị sai | 12 |
| Lập tờ khai thuế GTGT | 09, rồi 13 |
| Tính tạm nộp thuế TNDN quý | 10 |
| Khai thuế TNCN, xử lý người phụ thuộc | 11 |
| Khóa sổ cuối tháng | 06, và Phụ lục A |
| Lập báo cáo tài chính năm | 07, rồi 06 phần khóa sổ năm |
| Làm quyết toán thuế năm | 14, rồi 10 và 11 |
| Vừa phát hiện đã làm sai một kỳ đã nộp | 15, đọc ngay mục về van an toàn |
| Khách vừa nhận quyết định kiểm tra thuế | 16, hành động trong ngày |
| Ước lượng khách có thể bị phạt bao nhiêu | 17 |
| Soát xét công việc của người khác | 18 |
| Soạn thư gửi khách, hoặc phải từ chối yêu cầu của khách | 19 |
| Bàn giao khách cho người khác, hoặc khách dừng dịch vụ | 20 |
| Vừa thấy có văn bản pháp luật mới | 21 |
| Chuyển số dư từ chế độ kế toán cũ sang mới | 06 |
| Không biết văn bản nào còn hiệu lực | Phụ lục E |

---

## 7. NHỮNG THAY ĐỔI PHÁP LUẬT LỚN ĐANG ẢNH HƯỞNG TRỰC TIẾP TỚI CÔNG VIỆC

Bảng dưới đây là các thay đổi pháp luật mà cách làm của kỳ trước không còn đúng cho kỳ 2026.

| Thay đổi | Hiệu lực | Chương liên quan | Mức xác minh |
| --- | --- | --- | --- |
| Thông tư 99/2025/TT-BTC thay Thông tư 200/2014 về chế độ kế toán doanh nghiệp | 01/01/2026 | 05, 06, 07, 08 |  |
| Bảng cân đối kế toán đổi tên thành Báo cáo tình hình tài chính | 01/01/2026 | 07 |  |
| Bỏ tài khoản cấp 2 quy định sẵn cho một số tài khoản, doanh nghiệp tự thiết kế và phải có Quy chế hạch toán kế toán | 01/01/2026 | 05, 06 |  |
| Lệ phí môn bài chấm dứt thu nộp | 01/01/2026 | 13 | `[NQ 198/2025 Đ.10 k.7;<br>NĐ 362/2025 Đ.6 k.4]` |
| Thông tư 58/2026/TT-BTC thay Thông tư 132/2018 về chế độ kế toán doanh nghiệp siêu nhỏ | 01/07/2026 | 08 |  |
| Nghị định 254/2026/NĐ-CP thay Nghị định 123/2020 và Nghị định 70/2025 về hóa đơn | 01/07/2026 | 12 | `[NĐ 254/2026 Đ.43 k.1, k.2]` |
| Thông tư 91/2026/TT-BTC thay Thông tư 78/2021 và Thông tư 32/2025 | 01/07/2026 | 12 |  |
| Khai thuế TNCN đối với thu nhập từ TIỀN LƯƠNG, TIỀN CÔNG của tổ chức trả thu nhập là khai theo quý.<br>Các khoản khấu trừ khác vẫn theo tháng hoặc theo quý cùng kỳ khai thuế GTGT | 01/07/2026 | 11, 13 | `[TT 89/2026 Đ.22 k.1 đ.a.1]` |
| Nghị định 252/2026/NĐ-CP thay Nghị định 126/2020 về quản lý thuế | 01/07/2026 | 13 | `[NĐ 252/2026 Đ.74 k.1, k.3]` |
| Thuế TNDN có mức theo quy mô doanh thu, gồm cả diện miễn thuế | Luật từ 01/10/2025, áp dụng từ kỳ tính thuế 2025;<br>diện miễn theo Nghị định từ 01/01/2026 | 10 | `[Luật TNDN 67/2025 Đ.19 k.1;<br>NĐ 141/2026 Đ.1 k.3 và Đ.3]` |
| Giảm trừ gia cảnh và biểu thuế lũy tiến TNCN thay đổi | (xem Chương 11) | 11 |  |
| Ngưỡng chứng từ thanh toán không dùng tiền mặt là 05 triệu đồng, thay mốc cũ | (xem Chương 09) | 09, 10, 05 |  |
| Giảm thuế GTGT còn 8% cho nhóm chịu thuế 10%, có loại trừ | 01/07/2025 đến hết 31/12/2026 | 09 | `[NQ 204/2025 Đ.1 k.1, Đ.2;<br>NĐ 174/2025 Đ.1, Đ.2 k.1]` |
| Ngưỡng doanh thu chịu thuế của hộ và cá nhân kinh doanh nâng lên 01 tỷ đồng một năm | 01/01/2026 | 09 | `[NĐ 68/2026 Đ.3, Đ.4 đã được sửa bởi NĐ 141/2026 Đ.1 k.1]` |

> [!danger] RỦI RO BỊ XỬ PHẠT
> Không được trích dẫn văn bản đã hết hiệu lực trong bất kỳ tài liệu nào gửi khách. Danh sách văn bản đã hết hiệu lực tại **Phụ lục E**. Những văn bản dễ bị trích sai nhất vì đã dùng nhiều năm: Thông tư 200/2014, Thông tư 219/2013, Thông tư 78/2021, Thông tư 80/2021, Nghị định 123/2020, Nghị định 126/2020, Nghị định 139/2016.
## 9. HAI HÀNH ĐỘNG CẦN LÀM NGAY, KHÔNG CHỜ TÀI LIỆU BAN HÀNH

Hai việc dưới đây là phát hiện trong quá trình biên soạn, có ảnh hưởng tới khách hàng hiện tại và không nên chờ.

**Một, rà soát mục lệ phí môn bài.** Lệ phí môn bài đã chấm dứt thu nộp từ 01/01/2026 `[NQ 198/2025 Đ.10 k.7; NĐ 362/2025 Đ.6 k.4]`. Cần rà và gỡ mục này khỏi toàn bộ mẫu thành lập doanh nghiệp, bảng báo giá dịch vụ, bảng kiểm tuân thủ, và lịch nhắc khách. Xem Chương 13.

**Hai, rà soát kỳ khai thuế TNCN của toàn bộ khách hàng.** Từ 01/07/2026, tổ chức, cá nhân trả thu nhập từ TIỀN LƯƠNG, TIỀN CÔNG khai thuế TNCN đã khấu trừ theo quý `[TT 89/2026 Đ.22 k.1 đ.a.1]`. Khách nào đang khai tiền lương, tiền công theo tháng thì đang sai kỳ khai. Phạm vi: quy định theo quý này chỉ áp cho tiền lương, tiền công. Các khoản khấu trừ khác, gồm cổ phiếu thưởng và cổ phiếu ESOP, đầu tư vốn, chuyển nhượng vốn, bản quyền, trúng thưởng, khai thay cho cá nhân kinh doanh, cá nhân không cư trú, tài sản số, vẫn khai theo tháng hoặc theo quý cùng kỳ khai thuế GTGT. Xem Chương 11 để lấy quy trình chuyển đổi, và Chương 13 để cập nhật lịch.

---

## 10. Nhật ký phiên bản Handbook

| Phiên bản | R.1.0.0, đang áp dụng | Chương thay đổi | Nội dung thay đổi | Lý do | Người thực hiện | Người duyệt |
| --- | --- | --- | --- | --- | --- | --- |
| R.1.0.0 | 21/09/2026 | Toàn bộ | Ban hành toàn bộ Handbook ở bản R.1.0.0 | Ban hành mới | `CEO` | `CEO` |

Quy tắc đánh phiên bản và quy trình cập nhật: xem Chương 21.

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Cơ cấu lại Handbook Kế toán thành 2 khối độc lập: 4 Bảng kiểm chu kỳ thao tác và khối tri thức tra cứu tham khảo pháp lý |
