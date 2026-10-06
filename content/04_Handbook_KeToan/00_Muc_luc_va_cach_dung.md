---
title: "SỔ TAY QUY TRÌNH DỊCH VỤ KẾ TOÁN oBacker"
code: "OBK-HB-00"
type: "sop"
folder: "04_Handbook_KeToan"
level: "Mục lục"
version: "R.3.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-KT Kế toán và thuế"
next_review: "Không quá 06 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-HB-00
tags:
  - loai/sop
  - cap/muc-luc
---
# SỔ TAY QUY TRÌNH DỊCH VỤ KẾ TOÁN oBacker

> [!note] HỆ THỐNG VĂN BẢN VÀ THỨ BẬC HIỆU LỰC
> Handbook Kế toán là tài liệu **CẤP 3**, nằm dưới [[03_OBK-SOP-KT_Ke_toan_va_thue|OBK-SOP-KT]] (cấp 2) và [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] (cấp 1).
>
> | Nội dung | Tài liệu ban hành chuẩn | Quy chế tại Handbook này |
> | --- | --- | --- |
> | Cơ cấu tổ chức, tên đơn vị, ký hiệu vai trò, thẩm quyền quyết định | [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] cùng các phụ lục phân quyền | Dẫn chiếu |
> | SLA, mốc thời gian, thời hạn cam kết chất lượng | Bảng Job của SOP cấp 2, và `03_DichVu/01_OBK-SOP-00` mục 7 | Dẫn chiếu |
>
> Khi có sự khác biệt giữa Handbook và các tài liệu cấp trên, nội dung tại tài liệu cấp trên được ưu tiên áp dụng. Khi phát hiện điểm sai lệch, nhân sự báo cáo Legal R&D về nội dung chuyên môn và `COO` về thủ tục phát hành ngay trong ngày phát hiện; không tự ý chỉnh sửa tài liệu cá nhân.

> [!note] QUY ƯỚC KÝ HIỆU VAI TRÒ
> Quy ước ký hiệu vai trò trong toàn bộ Handbook: `CV-KT` (Chuyên viên Kế toán và Thuế phụ trách hồ sơ khách hàng) và `TL-KT` (Trưởng bộ phận Kế toán và Thuế chốt kỹ thuật hồ sơ khách hàng). Quy ước này phân biệt với vai trò kế toán nội bộ của oBacker tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]].
>
> Phân định ba vai trò chuyên môn: `TL-KT` chốt kỹ thuật trên hồ sơ khách hàng; `KTT` theo OBK-QCTC-01 là Kế toán trưởng nội bộ của oBacker; Kế toán trưởng của khách hàng đứng tên trên báo cáo tài chính của khách hàng (mặc định không phải nhân sự oBacker). Ba vai trò chịu trách nhiệm pháp lý độc lập.
>
> Từ điển ký hiệu đầy đủ: [[PL_Tu_dien_vai|OBK-QCTC-02-PL-A]].

## SOP Handbook dành cho nhân viên kế toán dịch vụ

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-HB-00 |
| Phiên bản | R.3.0.0, đang áp dụng |
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

## 2. Hệ thống vai trò trong toàn bộ tài liệu

| Ký hiệu | Vai trò | Một câu định nghĩa |
| --- | --- | --- |
| **CV-KT** | Chuyên viên Kế toán và Thuế | Người LÀM. Vận hành nghiệp vụ hằng ngày trên hồ sơ khách được phân công: nhập liệu, lưu trữ chứng từ, hạch toán đơn giản.<br>không tiếp xúc khách hàng. |
| **TL-KT** | Trưởng bộ phận Kế toán và Thuế | Người CHỐT KỸ THUẬT. Tự làm phần nghiệp vụ cần xét đoán, soát, quyết định cách xử lý nghiệp vụ, ký hồ sơ gửi cơ quan thuế.<br>không đứng tên trên báo cáo tài chính của khách trong trường hợp mặc định; ngoại lệ phải do CEO duyệt từng khách. |
| **AM** | Account Manager | Người GIỮ QUAN HỆ VÀ THƯƠNG MẠI.<br>ĐẦU MỐI DUY NHẤT với khách: hợp đồng, phạm vi, báo giá, cam kết mốc, nhắc chứng từ, khiếu nại. |
| **COO** | Giám đốc vận hành, Chief Operating Officer | Người GIẢI QUYẾT XUNG ĐỘT VÀ ĐIỀU HÀNH.<br>Xử xung đột giữa AM và TL-KT, định biên, phân bổ khách, chỉ số dịch vụ, khiếu nại cấp 2. |
| **CEO** | Tổng giám đốc | Người QUYẾT CUỐI. Nhận khách, từ chối khách, chấm dứt hợp đồng, hành vi oBacker nghiêm cấm, khiếu nại cấp cuối. |

Legal R&D không nằm trong chuỗi vận hành khách hàng, chịu trách nhiệm nội dung pháp lý, chuẩn mực nghiệp vụ, quy ước ghi mức chắc chắn của căn cứ, cập nhật văn bản pháp luật và danh mục chờ xác minh Phụ lục E; việc quản lý phiên bản và phát hành tài liệu thuộc `COO`. Bản thiết kế đầy đủ, gồm bảng RACI và toàn bộ trình tự chuyển lên cấp trên, tại [[02_Mo_hinh_dich_vu_va_phan_vai|02_Mo_hinh_dich_vu_va_phan_vai]] Phụ lục 02-C.

Mỗi chương có bảng phân vai trò riêng ở mục 4. Khi bảng chương và bảng này khác nhau, lấy bảng của chương. Nhưng khi cả hai khác `01_ToChuc/OBK-QCTC-02` và bốn phụ lục của văn bản đó thì QCTC-02 đúng, xem cảnh báo đầu tài liệu.

---

## 3. MỨC CHẮC CHẮN CỦA CĂN CỨ, ĐỌC KỸ TRƯỚC KHI DÙNG BẤT KỲ CON SỐ NÀO

Pháp luật thuế và kế toán Việt Nam thay đổi rất lớn trong giai đoạn 2025 đến 2026. Handbook này chỉ chứa nội dung đã đối chiếu toàn văn văn bản gốc trong kho tài liệu nội bộ. Căn cứ nào chưa đạt mức đó thì được ghi rõ ngay tại chỗ dùng căn cứ đó.

| Cách ghi trong tài liệu | Nghĩa | Được dùng để làm gì |
| --- | --- | --- |
| Chỉ ghi số điều khoản | Đã đối chiếu toàn văn văn bản gốc trong kho tài liệu nội bộ | Dùng được ngay, kể cả để trả lời khách và lập memo. |
| Ghi thêm "chưa đối chiếu bản gốc" | Lấy từ nguồn thứ cấp đáng tin nhưng chưa đọc toàn văn | Dùng để lập kế hoạch nội bộ.<br>**không** dùng để cam kết với khách hoặc để hành động có rủi ro bị xử phạt trước khi đối chiếu bản gốc. |
| Ghi thêm "chưa xác minh được" | Chưa tra được bản gốc | **không** được dùng để trả lời khách dưới mọi hình thức. Phải tra cứu và đối chiếu bản gốc trước. |

> [!note] CĂN CỨ VĂN BẢN PHÁP LUẬT ÁP DỤNG
> Hệ thống tài liệu của Handbook viện dẫn trực tiếp từ các văn bản quy phạm pháp luật trọng yếu. Danh mục văn bản áp dụng đầy đủ đặt tại tài liệu nội bộ PL_E (Phụ lục E của Handbook).

Nguyên tắc bắt buộc: **không tư vấn hoặc trả lời khách hàng khi chưa đối chiếu văn bản quy phạm pháp luật.** Quy tắc này áp dụng cho mọi cấp, kể cả TL-KT và CEO. Chi tiết tại Chương 21.

---

## 4. QUY ƯỚC TRÌNH BÀY

**Cấu trúc chương.** Phần lớn các chương theo cùng một khung 9 mục: mục đích; phạm vi áp dụng; vai trò và trách nhiệm; đầu vào bắt buộc; các bước thực hiện; điểm kiểm soát bắt buộc; lỗi thường gặp; đầu ra và nơi lưu; chỉ số theo dõi. Khi cần tra nhanh, đi thẳng tới mục 5 và mục 6.

**Cảnh báo.** Các loại cảnh báo nghiệp vụ:

> [!danger] RỦI RO BỊ XỬ PHẠT
> Làm sai ở mục này dẫn tới tiền phạt hoặc tiền chậm nộp cho khách hoặc cho oBacker.

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> CV-KT và AM không có quyền quyết định, phải chuyển TL-KT. Việc vượt thẩm quyền TL-KT thì chuyển COO. Việc nhận khách, từ chối khách, chấm dứt hợp đồng và mọi việc thuộc hành vi oBacker nghiêm cấm thì chuyển CEO.

> [!note] CĂN CỨ PHÁP LÝ
> Căn cứ pháp luật hoặc lưu ý nghiệp vụ cần đối chiếu bản gốc văn bản trước khi áp dụng.

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
| 01 | [[01_Nguyen_tac_hanh_nghe\|Nguyên tắc hành nghề và đạo đức nghề nghiệp]] | Đọc một lần khi mới vào, đọc lại khi gặp tình huống khó xử |
| 02 | [[02_Mo_hinh_dich_vu_va_phan_vai\|Mô hình dịch vụ, phân vai trò và cam kết chất lượng]] | Khi cần biết gói dịch vụ bao gồm gì, ai làm gì, cam kết bao lâu |
| 03 | [[03_Onboarding_khach_hang\|Tiếp nhận khách hàng mới]] | Khi có khách mới |
| 04 | [[04_Quan_ly_chung_tu\|Thu thập, kiểm tra và lưu trữ chứng từ]] | Hằng tháng, và mỗi khi chứng từ có vấn đề |

### Phần II. Nghiệp vụ kế toán

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 05 | [[05_Quy_trinh_ke_toan_thang\|Quy trình kế toán tháng theo phần hành]] | Hằng tháng, tra theo từng phần hành |
| 06 | [[06_Khoa_so_va_doi_chieu\|Khóa sổ và đối chiếu cuối kỳ]] | Cuối mỗi tháng và cuối năm |
| 07 | [[07_Bao_cao_tai_chinh_nam\|Lập, soát xét và nộp báo cáo tài chính năm]] | Mùa báo cáo tài chính |
| 08 | [[08_Che_do_ke_toan_ap_dung\|Lựa chọn chế độ kế toán áp dụng cho khách hàng]] | Khi nhận khách mới, khi khách đổi quy mô |

### Phần III. Thuế và tuân thủ

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 09 | [[09_Thue_GTGT\|Thuế giá trị gia tăng]] | Hằng tháng hoặc hằng quý |
| 10 | [[10_Thue_TNDN\|Thuế thu nhập doanh nghiệp]] | Tạm nộp quý và quyết toán năm |
| 11 | [[11_Thue_TNCN\|Thuế thu nhập cá nhân]] | Hằng quý và quyết toán năm |
| 12 | [[12_Hoa_don_dien_tu\|Hóa đơn điện tử]] | Liên tục, và mỗi khi có hóa đơn sai sót |
| 13 | [[13_Lich_tuan_thu_va_quy_trinh_khai_nop\|Lịch tuân thủ và quy trình khai nộp thuế định kỳ]] | Chương nền. Mở hằng tuần. |

### Phần IV. Rủi ro và xử lý

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 14 | [[14_Quyet_toan_thue_nam\|Quyết toán thuế năm]] | Kỳ quyết toán thuế năm |
| 15 | [[15_Xu_ly_sai_sot_va_khai_bo_sung\|Xử lý sai sót và khai bổ sung]] | Ngay khi phát hiện sai sót. Đọc trước, không đọc lúc khẩn cấp. |
| 16 | [[16_Thanh_tra_kiem_tra_thue\|Kiểm tra thuế và xử lý khi bị chuyển hồ sơ sang cơ quan thanh tra]] | Ngay khi khách nhận quyết định kiểm tra |
| 17 | [[17_Khung_xu_phat_va_phong_ngua\|Khung xử phạt và biện pháp phòng ngừa]] | Khi cần ước lượng rủi ro, và khi thiết kế biện pháp kiểm soát |

### Phần V. Vận hành và chất lượng

| Chương | Tên | Dùng khi nào |
| --- | --- | --- |
| 18 | [[18_Kiem_soat_chat_luong\|Kiểm soát chất lượng và quy trình soát xét]] | TL-KT và COO dùng thường xuyên |
| 19 | [[19_Giao_tiep_khach_hang\|Giao tiếp và quản trị kỳ vọng khách hàng]] | Khi soạn thư, khi khách khiếu nại, khi phải từ chối khách |
| 20 | [[20_Ban_giao_va_ket_thuc\|Bàn giao nội bộ và kết thúc hợp đồng dịch vụ]] | Khi đổi người phụ trách, khi khách dừng dịch vụ |
| 21 | [[21_Cap_nhat_van_ban_phap_luat\|Theo dõi và cập nhật văn bản pháp luật]] | Định kỳ, và mỗi khi có văn bản mới |

### Phụ lục

| Mã | Tên | Nội dung |
| --- | --- | --- |
| A | [[PL_A_Bang_kiem\|Bộ bảng kiểm in ra dùng được]] | 12 bảng kiểm theo tình huống, định dạng để tick tay |
| B | [[PL_B_Bieu_mau\|Biểu mẫu nội bộ]] | 12 biểu mẫu để sao và điền |
| C | [[PL_C_Lich_tuan_thu_nam\|Lịch tuân thủ cả năm]] | Lịch 12 tháng kèm mốc cảnh báo nội bộ |
| D | [[PL_D_Thao_tac_phan_mem\|Thao tác trên phần mềm và công cụ]] | Khung trống, oBacker tự điền theo stack thực tế |
| E | [[PL_E_Danh_muc_van_ban\|Danh mục văn bản pháp luật áp dụng]] | Văn bản đang hiệu lực, văn bản đã hết hiệu lực, danh mục chờ xác minh |
| F | [[PL_F_Bao_cao_kiem_soat\|Báo cáo kiểm soát chất lượng bản nháp 1.0]] | Kết quả 08 phép kiểm độc lập, danh sách lỗi đã sửa, rủi ro còn lại cần người quyết định, điều kiện ban hành chính thức |
| G | [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu\|Mốc công việc và đầu ra dịch vụ]] | Năm mốc theo vòng đời khách từ M1 tiếp nhận tới M5 kết thúc, task kèm người chủ trì và mốc, đầu ra phân biệt theo gói G1 tới G4, tiêu chí đóng từng mốc.<br>Dùng để giao việc, để soạn phạm vi hợp đồng, và để nghiệm thu |
| H | [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|Quy trình cung cấp chữ ký số và hóa đơn điện tử]] | Trình tự 5 bước cấp phát chữ ký số, bàn giao thiết bị, cài đặt driver, đăng ký Mẫu 01/ĐKTĐ-HĐĐT và thiết lập mẫu hóa đơn điện tử |

### Tài liệu kèm theo, nằm cùng thư mục với Handbook

| Tài liệu | Nội dung |
| --- | --- |
| [[02_Mo_hinh_dich_vu_va_phan_vai\|02_Mo_hinh_dich_vu_va_phan_vai]] Phụ lục 02-C | Thiết kế phân vai trò 5 cấp CV-KT, TL-KT, AM, COO, CEO và trình tự chuyển lên cấp trên: mô tả công việc từng vai trò, nguyên tắc phân định vai trò, bảng RACI 45 đầu việc, trình tự chuyển lên cấp trên theo tình huống.<br>Đây là tài liệu chuẩn về vai trò; trường hợp có sự khác biệt giữa các tài liệu thì áp dụng theo bản này |
| Tra cứu và cập nhật văn bản pháp luật | Quy trình tra cứu 04 bước tại Chương 21; các nội dung chưa có văn bản chính thức tuyệt đối không dùng để tư vấn khách hàng |
| `So_ket_luan_xac_minh_25082026` | Sổ kết luận xác minh, 13 tệp: một sổ tổng hợp `00_SO_KET_LUAN_XAC_MINH_25082026.md` và 12 phiếu kết luận từ V1 tới V12 theo từng chủ đề.<br>Tài liệu tra cứu chi tiết điều khoản và mức độ đối chiếu của các số liệu trong Handbook |

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
## 9. Các hành động cần thực hiện ngay

Các công việc dưới đây ảnh hưởng trực tiếp tới khách hàng hiện tại và cần thực hiện ngay:

- **Rà soát mục lệ phí môn bài:** Lệ phí môn bài đã chấm dứt thu nộp từ 01/01/2026 `[NQ 198/2025 Đ.10 k.7; NĐ 362/2025 Đ.6 k.4]`. Rà soát và loại bỏ mục này khỏi toàn bộ mẫu thành lập doanh nghiệp, bảng báo giá dịch vụ, bảng kiểm tuân thủ và lịch nhắc khách. Chi tiết tại Chương 13.
- **Rà soát kỳ khai thuế TNCN của toàn bộ khách hàng:** Từ 01/07/2026, tổ chức, cá nhân trả thu nhập từ tiền lương, tiền công khai thuế TNCN đã khấu trừ theo quý `[TT 89/2026 Đ.22 k.1 đ.a.1]`. Các trường hợp đang khai theo tháng phải chuyển đổi kỳ khai theo quý đối với khoản tiền lương, tiền công. Các khoản khấu trừ khác (cổ phiếu thưởng, cổ phiếu ESOP, đầu tư vốn, chuyển nhượng vốn, bản quyền, trúng thưởng, khai thay cá nhân kinh doanh, cá nhân không cư trú, tài sản số) tiếp tục khai theo tháng hoặc quý cùng kỳ khai thuế GTGT. Quy trình chuyển đổi quy định tại Chương 11 và cập nhật lịch tại Chương 13.

---

## 10. Nhật ký phiên bản Handbook

| Phiên bản | R.1.0.0, đang áp dụng | Chương thay đổi | Nội dung thay đổi | Lý do | Người thực hiện | Người duyệt |
| --- | --- | --- | --- | --- | --- | --- |
| R.1.0.0 | 21/09/2026 | Toàn bộ | Ban hành toàn bộ Handbook ở bản R.1.0.0 | Ban hành mới | `CEO` | `CEO` |

Quy tắc đánh phiên bản và quy trình cập nhật: xem Chương 21.

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.3.0.0 | Nghĩa vụ báo cáo điểm sai lệch giữa Handbook và tài liệu cấp trên có mốc ngay trong ngày phát hiện |
