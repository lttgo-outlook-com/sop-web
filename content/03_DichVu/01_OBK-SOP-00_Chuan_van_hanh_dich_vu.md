---
title: "OBK-SOP-00 CHUẨN VẬN HÀNH DỊCH VỤ OBACKER"
code: "OBK-SOP-00"
type: "sop"
folder: "03_DichVu"
level: "Cấp 1, văn bản KHUNG toàn công ty"
version: "R.3.0.0"
status: "đang áp dụng"
draft_date: "27/09/2026"
law_as_of: "Pháp luật có hiệu lực tại ngày 02/09/2026"
author: "COO"
reviewer: "Legal R&D"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-QCTC-02 Quy chế tổ chức và phân quyền"
next_review: "Không quá 06 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - OBK-SOP-00
tags:
  - loai/sop
  - cap/1
  - nghiep-vu/nghia-vu-ke-toan
---
# OBK-SOP-00 CHUẨN VẬN HÀNH DỊCH VỤ OBACKER

## Văn bản khung cấp 1, áp dụng cho toàn bộ khối Delivery và khối Thương mại

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-00 |
| Cấp tài liệu | Cấp 1, văn bản KHUNG toàn công ty |
| Phiên bản | R.3.0.0, đang áp dụng |
| Ngày biên soạn | 27/09/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 02/09/2026 |
| Người biên soạn | Legal R&D (LEG), COO soát |
| Người soát | đã soát |
| Người phê duyệt | (để trống) |
| Văn bản cấp trên | [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] Quy chế tổ chức và phân quyền |
| Lần rà soát tiếp theo | Không quá 6 tháng kể từ ngày ban hành |
| Phạm vi phát hành | Nội bộ oBacker. Không phát hành cho khách hàng. |
| Thay thế | Phần nguyên tắc chung, phân vai trò, chuẩn giao tiếp, chuẩn kiểm soát chất lượng và chuyển lên cấp trên trong: SOP Customer Handling v1.4;<br>SOP Licensing v0.1;<br>SOP Delivery Lao Động v0.1;<br>Chương 01, 02, 02b, 18, 19 của OBK-SOP-KT Handbook Kế toán |

---

> [!note] CƠ CẤU TỔ CHỨC ĐẶT Ở VĂN BẢN KHÁC
> Từ 02/09/2026, cơ cấu tổ chức, danh mục đơn vị, ma trận phân quyền và thang chuyển lên cấp trên toàn công ty ĐẶT tại [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen|OBK-QCTC-02]] Quy chế tổ chức và phân quyền cùng bốn phụ lục của văn bản đó. Tài liệu này chỉ DẪN CHIẾU và chỉ mô tả phần thuộc mảng dịch vụ. Khi hai bên khác nhau thì [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen|OBK-QCTC-02]] đúng.

## 1. TÀI LIỆU NÀY LÀ GÌ VÀ KHÔNG LÀ GÌ

**Là gì.** Đây là bộ luật chơi chung của mọi bộ phận làm dịch vụ cho khách hàng tại oBacker. Văn bản này đặt bốn thứ mà mọi bộ phận phải dùng giống hệt nhau: từ điển thuật ngữ, bộ vai trò, quy trình chuẩn 10 bước, và thang SLA. Bộ phận khác nhau ở NGHIỆP VỤ, không được khác nhau ở bốn thứ này.

**Không là gì.**

- Không phải hướng dẫn nghiệp vụ. Không có chỗ nào trong tài liệu này dạy cách tính lương, cách lập tờ khai thuế hay cách soạn hồ sơ đăng ký doanh nghiệp.
- Không phải nơi chứa căn cứ pháp lý. Mọi trích dẫn điều khoản nằm ở `PL_1_Can_cu_phap_ly.md`, một bản duy nhất cho cả bộ. Tài liệu này chỉ dẫn chiếu tới mã căn cứ.
- Không phải nơi chứa con số SLA gốc. Con số SLA gốc nằm ở bảng Job của từng SOP cấp 2. `PL_2_Bang_tra_SLA.md` là bản tra cứu được sinh tự động, không phải bản gốc.

**Vấn đề mà tài liệu này sinh ra để giải quyết.** Tính tới 02/09/2026, oBacker có bốn tài liệu quy trình do bốn người soạn độc lập. Bốn tài liệu đó dùng bốn bộ vai trò khác nhau, ba thang chuyển lên cấp trên khác nhau, hai cách đánh số bước khác nhau, và cùng một chữ viết tắt mang hai nghĩa ở hai tài liệu. Hệ quả không phải là khó đọc; hệ quả là khi một vụ việc đi qua hai bộ phận thì không ai xác định được ai là người chịu trách nhiệm cuối.

---

## 2. KIẾN TRÚC BA CẤP

| Cấp | Tên | Trả lời câu hỏi | Ai soạn | Ai duyệt |
| --- | --- | --- | --- | --- |
| Cấp 1 | Chuẩn vận hành dịch vụ (tài liệu này) | Luật chơi chung: ai là ai, quy trình nào, cam kết bao lâu, khi nào chuyển lên cấp trên | COO, LEG soát phần pháp lý | CEO |
| Cấp 2 | SOP bộ phận | Bộ phận này nhận những Job nào, đầu vào gì, đầu ra gì, hạn bao lâu, chỗ nào dễ sai | Team Lead bộ phận;<br>`CEO` với [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]], [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]], [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] và [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]];<br>Legal R&D soát phần pháp lý | **`CEO` BAN HÀNH cả sáu SOP cấp 2**, chốt ngày 08/09/2026.<br>Với [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]] và [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] thì `COO` ĐỒNG DUYỆT cùng `CEO`; bốn SOP còn lại `CEO` duyệt một mình.<br>Việc SỬA sau ban hành thì theo mục 12.1, không phải theo dòng này |
| Cấp 3 | Hướng dẫn nghiệp vụ | Làm từng thao tác thế nào, bấm ở đâu, điền mẫu nào | Team Lead bộ phận | Team Lead bộ phận |

**Sáu SOP cấp 2 hiện có:**

| Mã | Tên | Đơn vị | Nhánh | Trạng thái cấp 3 |
| --- | --- | --- | --- | --- |
| [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] | Quản lý khách hàng | Bộ phận AM | Thương mại, thuộc CEO | ĐÃ CÓ: `HuongDan_AM/`. Xem mục 11 của [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] |
| [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] | Kế toán và thuế | Bộ phận Kế toán và Thuế | Phòng Dịch vụ, thuộc COO | ĐÃ CÓ: `04_Handbook_KeToan/`, 22 chương và 7 phụ lục. Xem bảng chuyển cấp tại `PL_3` |
| [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]] | Giấy phép | Bộ phận Giấy phép | Phòng Dịch vụ, thuộc COO | Chưa có, Team Lead dựng |
| [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] | Lao động và tiền lương | Bộ phận Lao động và Tiền lương | Phòng Dịch vụ, thuộc COO | Chưa có, Team Lead dựng |
| [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] | Dịch vụ pháp lý | Bộ phận Dịch vụ pháp lý | Phòng Dịch vụ, thuộc COO | Chưa có, `TL-LS` dựng. Danh mục tại [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] mục 8 |
| [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] | Nghiên cứu và phát triển pháp lý | Legal R&D Team | Kiến tạo, thuộc CEO | Chưa có, `TL-RD` dựng. Danh mục tại [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] mục 8 |

> [!note] LEGAL R&D TRONG BỘ TÀI LIỆU NÀY
> Toàn bộ đầu ra của Legal R&D được bốn bộ phận dịch vụ tiêu thụ, và ba SOP cấp 2 tính thời gian của Legal R&D vào SLA của mình. Legal R&D Team không chịu ba chỉ số đúng hạn pháp định của Phòng Dịch vụ, và người phê duyệt SOP của Legal R&D là CEO.

**Quy tắc phân cấp, ba câu.**

1. Cấp cao hơn đặt NGUYÊN TẮC, THẨM QUYỀN và ĐỊNH MỨC. Cấp thấp hơn đặt BƯỚC, NGƯỜI LÀM và ĐẦU RA. Không trộn.
2. Một con số chỉ được ghi ở một tài liệu. Cấp dưới muốn nhắc thì viết "theo mục X.Y của OBK-SOP-00", không viết lại con số. Vi phạm quy tắc này là nguyên nhân của 16 lỗi lệch tìm được trong đợt soát 29/08/2026.
3. Khi cấp 2 hoặc cấp 3 mâu thuẫn với cấp 1, lấy cấp 1. Người phát hiện mâu thuẫn phải báo COO trong ngày, và báo LEG nếu mâu thuẫn nằm ở nội dung pháp lý, không tự xử lý theo bản nào mình thấy hợp lý.

**Thứ tự ưu tiên khi xung đột, áp dụng cho mọi tình huống:**

1. Quy định pháp luật
2. Hợp đồng dịch vụ đã ký với khách hàng
3. OBK-SOP-00 (tài liệu này)
4. SOP cấp 2 của bộ phận
5. Hướng dẫn nghiệp vụ cấp 3

---

## 3. TỪ ĐIỂN THUẬT NGỮ, DÙNG CHUNG TOÀN HỆ THỐNG

Trước 02/09/2026, bốn tài liệu quy trình dùng lẫn lộn "đầu việc", "task", "action", "kết quả bước", "đầu ra" mà không định nghĩa. Từ nay bảy từ dưới đây có nghĩa cố định.

| Thuật ngữ | Định nghĩa | Ví dụ | Nhận biết |
| --- | --- | --- | --- |
| **Dịch vụ** (Service) | Cái khách hàng mua và trả tiền, ghi trong hợp đồng dịch vụ | "Dịch vụ kế toán và thuế trọn gói", "Dịch vụ xin giấy phép lao động" | Có trong hợp đồng, có giá |
| **Job** (Đầu việc) | Một đơn vị công việc CÓ MỘT ĐẦU RA XÁC ĐỊNH và MỘT HẠN CHÓT. Là đơn vị lập kế hoạch, giao việc và đo lường | "Nộp tờ khai thuế GTGT tháng 8/2026 cho khách X", "Đăng ký nội quy lao động cho khách Y" | Trả lời được: xong nghĩa là gì, và xong trước ngày nào |
| **Hành động** (Bước) | Một trong 10 bước của Quy trình chuẩn tại mục 6. Mỗi Hành động có đúng một người R và đúng một người A | "B7 Kiểm soát chất lượng hai lớp" | Luôn là một trong 10 mã B1 tới B10 |
| **Task** | Hiện thân của một Job trên `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`. Một Job sinh ra đúng một Work Package | WP "KHÁCH X_Tờ khai GTGT tháng 8/2026" | Có mã WP, có assignee, có accountable |
| **Đầu vào** (Đầu vào bắt buộc) | Cái mà thiếu thì không chạy được bước tiếp theo. Khác với thông tin tham khảo | Bản scan HĐLĐ đã ký là đầu vào của Job đăng ký mã BHXH | Nếu thiếu mà vẫn chạy được thì không phải đầu vào bắt buộc |
| **Kết quả bước** | Kết quả của một Hành động. Phần lớn kết quả bước là nội bộ | Bảng đối chiếu dữ liệu ở B5 | Không phải cái nào cũng ra tới khách |
| **Đầu ra** (sản phẩm bàn giao) | Sản phẩm ĐI RA KHỎI oBacker: tới khách hàng hoặc tới cơ quan nhà nước. Mọi đầu ra phải qua B7 và B8 | Phiếu lương, tờ khai đã nộp, giấy phép, câu trả lời tư vấn | Nếu người ngoài oBacker nhìn thấy sản phẩm đó thì đó là đầu ra |

**Quy tắc đặt tên Job.** Mọi Job phải đặt tên theo khuôn `TÊN KHÁCH_NỘI DUNG_KỲ`. Ví dụ `WHISKUP_Báo cáo tình hình sử dụng lao động_6T2026`. Job không gắn với khách cụ thể thì thay tên khách bằng `NỘI BỘ`.

**Quy tắc một Job một phạm vi.** Yêu cầu của khách chứa nhiều phạm vi thì tách thành nhiều Job, mỗi Job một phạm vi, và tạo liên kết giữa các Job đó. Không gộp vì gộp làm mất khả năng đo và mất khả năng xác định ai chịu trách nhiệm phần nào.

---

## 4. TÁM NGUYÊN TẮC THI HÀNH ĐƯỢC

Nguyên tắc ở đây không phải khẩu hiệu. Mỗi nguyên tắc gồm bốn phần: quy tắc, hành vi bắt buộc, hành vi cấm, và cách phát hiện vi phạm. Nguyên tắc nào không đo được thì không nằm trong danh sách này.

### NT-1. Không trả lời bằng trí nhớ

**Quy tắc.** Mọi kết luận về nghĩa vụ pháp lý, thời hạn, mức phạt, tỷ lệ và điều kiện gửi ra ngoài oBacker phải dựa trên văn bản gốc đã mở tại thời điểm trả lời.

**Bắt buộc.** Trước khi gửi bất kỳ câu trả lời nào có chứa một con số luật hoặc một thời hạn pháp định, người trả lời phải mở văn bản gốc trong kho `05_PhapLuat/` hoặc nguồn chính thống, và ghi mã căn cứ vào Job.

**Cấm.** Cấm trả lời khách bằng trí nhớ, kể cả khi chắc chắn. Cấm dùng nội dung chưa đối chiếu bản gốc hoặc chưa xác minh được để trả lời khách hoặc để hành động có rủi ro bị xử phạt. Cấm suy ngược nghĩa vụ từ điều khoản xử phạt.

**Áp dụng cho mọi cấp**, gồm AM, Team Lead, COO và CEO.

**Cách phát hiện.** Soát ngẫu nhiên tối thiểu 5 Job mỗi tháng mỗi bộ phận: mọi con số luật trong đầu ra phải truy được về một dòng trong `PL_1_Can_cu_phap_ly.md` và dòng đó phải mang tag đã đối chiếu bản gốc.

### NT-2. Một đầu mối duy nhất với khách hàng

**Quy tắc.** Khách hàng chỉ làm việc với một người trong suốt vòng đời: AM. Không có giai đoạn nào khách làm việc với người khác.

**Bắt buộc.** Mọi đầu ra và mọi câu trả lời chuyên môn đi ra khách phải qua AM. Bộ phận nghiệp vụ gửi cho AM, AM gửi cho khách. Nhóm chat với khách do AM làm admin và là người phát ngôn.

**Cấm.** Bốn bộ phận của Phòng Dịch vụ, tức Kế toán và Thuế, Giấy phép, Lao động và Tiền lương, Dịch vụ pháp lý, cùng Legal R&D, đều không gọi điện, không nhắn tin, không gửi email trực tiếp cho khách dưới bất kỳ hình thức nào. Ngoại lệ duy nhất: tham gia cuộc họp do AM tổ chức và chủ trì; mọi follow-up sau họp vẫn qua AM.

**Xử lý khi khách liên hệ nhầm người.** Không trả lời nội dung. Chuyển cho AM trong 30 phút. AM phản hồi theo Channel SLA và nhắc khách kênh chính thống theo mục 7.2.1a.

**Cách phát hiện.** Chỉ số "tỷ lệ liên lạc với khách đi qua AM" đo bằng 100%. Một lần bộ phận nghiệp vụ trả lời thẳng khách là một lần vi phạm, ghi vào quality soát của bộ phận đó.

### NT-3. Không chặn công việc để chờ đầu vào hoàn hảo

**Quy tắc.** Thiếu thông tin không phải lý do để một Job đứng yên quá hạn. Người thực hiện chạy tiếp bằng giả thiết đã ghi rõ, trừ ba trường hợp phải dừng.

**Bắt buộc.** Khi thiếu đầu vào, người thực hiện phải: một, gửi yêu cầu bổ sung liệt kê ĐẦY ĐỦ phần thiếu trong tối đa hai lần gửi; hai, ghi rõ trong yêu cầu đó giả thiết sẽ dùng nếu không nhận đủ thông tin trước hạn; ba, ghi hậu quả của việc dùng giả thiết; bốn, khi bàn giao phải nêu lại giả thiết đã dùng và ảnh hưởng của giả thiết đó.

**Ba trường hợp BẮT BUỘC DỪNG,** không được chạy tiếp bằng giả thiết:

1. Chạy tiếp sẽ dẫn tới hành vi trái pháp luật.
2. Chạy tiếp sẽ tạo ra một hồ sơ nộp cơ quan nhà nước có nội dung sai mà việc sửa sau đó không khả thi hoặc phát sinh chế tài.
3. Quyết định vượt thẩm quyền của người thực hiện và của Team Lead.

**Cấm.** Cấm để một Job ở trạng thái "chờ khách" mà không có yêu cầu bổ sung bằng văn bản kèm thời hạn cụ thể. Cấm bàn giao mà không nêu giả thiết đã dùng.

**Cách phát hiện.** Mọi Job quá hạn phải có ít nhất một trong hai thứ trong nhật ký: yêu cầu bổ sung có thời hạn, hoặc bản ghi chuyển lên cấp trên.

### NT-4. Truy vết được dưới hai phút

**Quy tắc.** Bất kỳ ai có thẩm quyền phải tìm lại được bản gốc đầu vào, bản đầu ra đã gửi, và lý do của một quyết định, trong dưới hai phút, mà không cần hỏi người đã làm.

**Bắt buộc.** Tệp gốc khách gửi lưu nguyên trạng, không sửa lên bản gốc. Mọi quyết định nghiệp vụ có tính xét đoán phải ghi bốn trường: nội dung quyết định, các phương án đã cân nhắc, căn cứ chọn, người chốt. Mọi trao đổi với khách và mọi trao đổi nội bộ có ảnh hưởng tới kết quả phải để lại văn bản.

**Cấm.** Cấm chốt nghiệp vụ qua kênh liên lạc. Yêu cầu đến qua Zalo cá nhân hoặc kênh liên lạc khác thì phải đưa vào hệ thống trước khi xử lý, và kết quả phải gửi lại bằng email công ty theo mục 7.2.1a.

**Cách phát hiện.** Kiểm ngẫu nhiên: chọn một Job đã đóng, giao cho một người không tham gia Job đó tìm bản gốc đầu vào và lý do của quyết định chính. Bấm giờ.

### NT-5. Hai lớp kiểm soát chất lượng, và ngoại lệ duy nhất đã được chốt

**Quy tắc.** Không đầu ra nào rời khỏi bộ phận khi chưa qua đủ hai lớp: người thực hiện tự soát theo bảng kiểm, và một người thứ hai xác nhận độc lập. Hai lớp là MẶC ĐỊNH của oBacker. Ngoài hai lớp đó còn một lớp hậu kiểm, soát chọn mẫu sau khi đầu ra đã ra ngoài; lớp hậu kiểm không thay được lớp hai, vì lớp hậu kiểm không chặn được lỗi.

**Bắt buộc, ba lớp và tác dụng của từng lớp:**

| Lớp | Ai làm | Chặn được lỗi trước khi đầu ra rời bộ phận |
| --- | --- | --- |
| Lớp một, tự soát | Chính người thực hiện, đối chiếu bảng kiểm nghiệp vụ cộng đối chiếu quy định pháp luật | Không. Người thực hiện tự kiểm tra lại hồ sơ nên không đảm bảo tính độc lập |
| Lớp hai, lớp CHẶN | Team Lead hoặc người Team Lead chỉ định, không phải người đã làm | Có. Đây là lớp duy nhất chặn được lỗi trước khi đầu ra rời bộ phận |
| Lớp hậu kiểm | Một người không nằm trong chuỗi làm và chốt đầu ra đó;<br>Legal R&D soát phần nội dung pháp lý | Không. Đầu ra đã ra ngoài. Lớp hậu kiểm đo xem lớp hai có thật sự hoạt động hay không |

Cả ba lớp phải để lại dấu vết trên Job.

**Ngoại lệ duy nhất, `CEO` chốt ngày 26/08/2026.** Phần việc do chính Team Lead TRỰC TIẾP LÀM thì Team Lead tự soát và tự chốt phần đó, và không bắt buộc một Team Lead khác đọc lại. Ngoại lệ chỉ áp cho phần việc cần xét đoán nghiệp vụ do chính Team Lead làm; phần việc do người khác làm vẫn phải đủ hai lớp. Ba việc bù trừ là bắt buộc, thiếu một việc thì ngoại lệ không có hiệu lực:

1. Ghi rõ trên phiếu soát xét và chốt phần nào do chính Team Lead làm.
2. Ghi rõ trên chính phiếu đó rằng phần đó KHÔNG CÓ LỚP SOÁT THỨ HAI.
3. Lớp hậu kiểm phải ưu tiên lấy mẫu đúng vào các phần đó.

**Phạm vi và hệ quả của ngoại lệ.** Ngoại lệ nêu trên là một mô hình một lớp soát, do `CEO` quyết, và không phải chuẩn của oBacker. Trong phạm vi ngoại lệ đó, không có người thứ hai bắt lỗi trước khi đầu ra rời bộ phận. Điểm kiểm soát bù đang chạy thay cho lớp hai là ba việc bù trừ nêu ngay trên; ba dấu hiệu tại bảng dưới đây buộc phải thêm lớp soát thứ hai.

**Ba dấu hiệu buộc phải thêm lớp soát thứ hai:**

| # | Dấu hiệu | Ngưỡng |
| --- | --- | --- |
| 1 | Có khách bị cơ quan nhà nước xử phạt mà nguyên nhân là lỗi kỹ thuật thuộc oBacker | Xảy ra 01 lần |
| 2 | Một Team Lead phụ trách số khách vượt hạn mức `CEO` quyết định | Vượt từ 20 phần trăm trở lên, trong 02 tháng liên tiếp |
| 3 | Lỗi bị khách phát hiện sau khi đầu ra đã gửi đi | Từ 03 vụ trong một quý |

Khi chạm bất kỳ dấu hiệu nào, `COO` đưa vấn đề lên `CEO` trong kỳ họp gần nhất. Việc thêm lớp soát thứ hai chỉ `CEO` được quyết, và cũng chỉ `CEO` được bỏ.

**Cấm.** Cấm người thực hiện tự đóng vai trò lớp hai, trừ đúng ngoại lệ nêu trên. Cấm bỏ lớp hai vì gấp; gấp thì rút ngắn thời gian lớp hai, không bỏ lớp hai. Cấm bỏ lớp hậu kiểm. Cấm hiểu ngoại lệ nêu trên thành được soát nhẹ hơn: phần việc không có lớp thứ hai làm cho lớp CHẶN QUAN TRỌNG HƠN, không phải nhẹ hơn.

**Cách phát hiện.** Chỉ số đúng ngay lần đầu và chỉ số lỗi đầu ra sau bàn giao. Một lỗi đầu ra mức Nghiêm trọng lọt ra khách là một lần lớp hai đã không được thực hiện đúng. Bộ phận nào dùng ngoại lệ nêu trên mà phiếu soát xét và chốt không ghi đủ hai dòng bắt buộc thì tính là đã bỏ lớp hai.

### NT-6. Mốc làm trước thời hạn theo pháp luật

**Quy tắc.** Thời hạn theo pháp luật không bao giờ là hạn làm việc của oBacker. oBacker luôn làm xong trước thời hạn theo pháp luật một khoảng làm trước cố định.

**Bắt buộc, ba mốc làm trước tối thiểu:**

| Loại | Khoảng làm trước tối thiểu |
| --- | --- |
| Hồ sơ, tờ khai nộp cơ quan nhà nước: oBacker hoàn tất nội bộ trước thời hạn theo pháp luật | 03 ngày làm việc |
| Đầu ra cần khách duyệt hoặc khách ký trước khi nộp: gửi khách trước thời hạn theo pháp luật | 05 ngày làm việc |
| Bộ phận nghiệp vụ gửi AM trước hạn AM phải gửi khách | 0,5 ngày làm việc |

**Cấm.** Cấm cam kết với khách một mốc bằng đúng thời hạn theo pháp luật. Cấm nộp hồ sơ vào ngày cuối cùng khi không có lý do bất khả kháng đã được Team Lead ghi nhận.

**Cách phát hiện.** So ngày hoàn tất thực tế với thời hạn theo pháp luật trên từng Job. Bất kỳ Job nào có khoảng làm trước nhỏ hơn mốc trên là một ngoại lệ phải giải trình.

### NT-7. Chuyển lên cấp trên để xin quyền quyết, không phải để bàn giao vấn đề

**Quy tắc.** Chuyển lên cấp trên là việc gọi thêm người có thẩm quyền hoặc chuyên môn vào; việc chuyển lên cấp trên không chuyển trách nhiệm đi.

**Bắt buộc.** Người chuyển lên cấp trên vẫn theo sát Job cho tới khi có quyết định cuối. Nội dung chuyển lên cấp trên phải gồm bốn phần: vấn đề, phương án đã thử, phương án đề xuất, và quyết định cần xin. Cấp thấp hơn luôn được thông tin lại kết quả.

**Cấm.** Cấm chuyển lên cấp trên mà không kèm đề xuất. Cấm chuyển lên cấp trên rồi rời khỏi vụ việc. Cấm mở kênh riêng với khách ở mọi cấp chuyển lên cấp trên; COO và CEO tham gia họp cùng AM, không thay AM.

**Cách phát hiện.** Đọc nội dung chuyển lên cấp trên trên Job: thiếu phần "phương án đề xuất" là chuyển lên cấp trên không đạt chuẩn.

### NT-8. Mỗi lỗi phải sinh ra một thay đổi

**Quy tắc.** Một lỗi được xử lý xong nhưng không thay đổi quy trình, bảng kiểm hay hướng dẫn thì lỗi đó sẽ lặp lại.

**Bắt buộc.** Mọi lỗi đầu ra mức Nghiêm trọng và Đáng kể, và mọi vụ việc chuyển lên cấp trên lên cấp 2 trở lên, phải kết thúc bằng một trong ba kết quả ghi trên Job: sửa hướng dẫn, thêm mục vào bảng kiểm, hoặc kết luận không cần sửa kèm lý do.

**Cấm.** Cấm đóng Job có lỗi đầu ra Nghiêm trọng mà mục cập nhật hướng dẫn để trống.

**Cách phát hiện.** Đếm số lỗi đầu ra Nghiêm trọng trong tháng và đếm số thay đổi hướng dẫn trong tháng. Hai con số lệch nhau nhiều là dấu hiệu bài học không được ghi lại.

---

## 5. BỘ VAI TRÒ THỐNG NHẤT

> [!note] MỤC 5 KHÔNG CÓ MỤC 5.4
> Số mục cũ đó đã bỏ trong lượt chuẩn hóa ngày 04/09/2026, và các số mục còn lại giữ nguyên để không phá dẫn chiếu ở tài liệu khác. Đây là mục cố ý bỏ số, không phải mục bị thiếu.

### 5.1. Bộ vai trò của mảng dịch vụ, tám ký hiệu

| Ký hiệu | Vai trò | Lead của vai trò này là ai | Một câu định nghĩa | Tiếp xúc khách |
| --- | --- | --- | --- | --- |
| **AM** | Account Manager, TOÀN TRÌNH | TP Thương mại | Đầu mối duy nhất với khách từ lúc là lead tới lúc kết thúc hợp đồng.<br>Bán hàng, làm rõ nhu cầu, báo giá, chốt hợp đồng, giữ quan hệ, cam kết mốc, thu chứng từ, xử khiếu nại, gia hạn | Có, toàn bộ hành trình |
| **CV** | Chuyên viên nghiệp vụ | TL cùng bộ phận | Người LÀM. Vận hành nghiệp vụ hằng ngày trên hồ sơ khách được phân công. Ghi là `CV-KT`, `CV-LIC`, `CV-LD`, `CV-LS` | Không |
| **TL** | Team Lead bộ phận | COO | Người CHỐT KỸ THUẬT và là lớp kiểm soát chất lượng thứ hai.<br>Chịu trách nhiệm cuối cho đầu ra của bộ phận.<br>Là cấp chuyển lên cấp trên 1.<br>Ghi là `TL-KT`, `TL-LIC`, `TL-LD`, `TL-LS` | Không |
| **TL-RD** | Legal R&D Team Lead | CEO | Người CHỐT KẾT LUẬN PHÁP LÝ dùng làm chuẩn nội bộ, duyệt mã căn cứ, quyết mức xác minh.<br>Sở hữu sổ căn cứ và quy trình cập nhật văn bản.<br>Là lớp soát thứ hai của Legal R&D.<br>Xem [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] | Không. Ngoại lệ ký văn bản với tư cách `NĐDPL` xem [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] mục 1.5 |
| **CV-RD** | Paralegal, chuyên viên nghiên cứu pháp lý | TL-RD | Người LÀM của Legal R&D. Tra bản gốc, chép nguyên văn, soạn bản nháp kết luận, giữ kho văn bản | Không |
| **LEG** | Ký hiệu chỉ ĐƠN VỊ Legal R&D Team | CEO | Dùng khi câu văn nói tới cả đơn vị mà không cần phân biệt `TL-RD` với `CV-RD`.<br>Vai trò THAM VẤN và KIẾN TẠO cho mọi bộ phận; không thực hiện nghiệp vụ của bộ phận khác.<br>Từ 02/09/2026, phần dịch vụ pháp lý CÓ THU đã tách thành bộ phận riêng với `TL-LS` và `CV-LS` trong Phòng Dịch vụ, xem [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] | Không |
| **COO** | Giám đốc vận hành, trực tiếp phụ trách Phòng Dịch vụ | CEO | Điều hành BỐN BỘ PHẬN DỊCH VỤ Kế toán và Thuế, Giấy phép, Lao động và Tiền lương, Dịch vụ pháp lý: xử xung đột liên bộ phận, phân bổ nguồn lực và định biên, chỉ số dịch vụ.<br>Đồng thời sở hữu bộ tài liệu SOP và quản Bộ phận Công nghệ và Sản phẩm theo [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] Điều 6.<br>không quản nhánh thương mại | Chỉ họp cùng AM |
| **CEO** | Tổng giám đốc, chủ trì `BOM`, hiện kiêm **TP Thương mại** | `HĐQT` | Quản lý THƯƠNG MẠI và TÀI CHÍNH của công ty.<br>Nhận khách, từ chối khách, chấm dứt hợp đồng, hành vi oBacker nghiêm cấm, khiếu nại cấp cuối | Chỉ họp cùng AM |

Hai vai trò của bảng trên có thêm quyền SỞ HỮU TÀI LIỆU, ghi ở đây để khớp mục 12.1: `COO` sở hữu bộ SOP dịch vụ và quản lý phiên bản, phát hành cả bộ, gồm cả Handbook Kế toán ở cấp 3; `TL-RD` sở hữu sổ căn cứ [[OBK-CC]] cùng `PL_1`, và mọi nội dung pháp lý, chuẩn chuyên môn, quy trình cập nhật văn bản, ở mọi cấp tài liệu. Hai quyền này không chồng nhau: `COO` quyết bản nào được phát hành, `TL-RD` quyết nội dung pháp lý trong bản đó có đúng hay không.

### 5.1.1. Thang thẩm quyền

Cơ cấu tổ chức toàn công ty ĐẶT tại [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen|OBK-QCTC-02]] Quy chế tổ chức và phân quyền, cùng sơ đồ `OrgChart/obk_org_chart.dot`. Tài liệu này chỉ dẫn chiếu và vẽ lại phần liên quan tới mảng dịch vụ.

```
CEO   chu tri BOM, hien kiem TP Thuong mai
 |
 +-- Phong Thuong mai      TP Thuong mai
 |     +-- Bo phan AM      -->  AM  -->  AE
 |     +-- Doi tac va Chuong trinh  -->  PM
 |
 +-- Legal R&D Team        vai tro kien tao, khong doi mat khach
 |     --> TL-RD --> CV-RD
 |
 +-- COO                   truc tiep phu trach Phong Dich vu
      |
      +-- Bo phan Ke toan va Thue      -->  TL-KT  -->  CV-KT, AD-KT
      +-- Bo phan Giay phep            -->  TL-LIC -->  CV-LIC
      +-- Bo phan Lao dong va Tien luong -->  TL-LD -->  CV-LD
      +-- Bo phan Dich vu phap ly      -->  TL-LS  -->  CV-LS
```

**Đọc cây này để hiểu ba điều quan trọng.** Một, nhánh thương mại và Phòng Dịch vụ nằm ở HAI nhánh khác nhau và chỉ gặp nhau ở CEO. Hai, COO không có quyền với nhánh thương mại, và CEO hiện kiêm TP Thương mại nên cấp 2 và cấp 3 của nhánh thương mại đang là một người. Ba, vì thế xung đột giữa AM và một bộ phận dịch vụ không có cấp chung trung lập nào dưới CEO; quy tắc xử lý riêng cho tình huống đó tại mục 8.2.1.

Ba đơn vị không thuộc mảng dịch vụ nhưng có mặt trong quy trình dịch vụ: Legal R&D đặt chuẩn nghiệp vụ, Công nghệ và Sản phẩm cung cấp công cụ, Kế toán nội bộ xử lý công nợ và hóa đơn đầu ra. Cả ba đều không tiếp xúc khách.

### 5.1.2. Kiêm nhiệm đã biết

Vai trò định nghĩa theo CHỨC NĂNG, không theo tên người. Danh sách đầy đủ ai đang giữ vai trò nào, cùng bảng kiêm nhiệm, ĐẶT tại [[PL_Anh_xa_nhan_su|OBK-QCTC-02-PL-D]]; bảng kiêm nhiệm tại mục F của phụ lục đó.

Bốn trường hợp ảnh hưởng trực tiếp tới quy trình dịch vụ:

| Vai trò | Đồng thời là vai trò gì | Hệ quả |
| --- | --- | --- |
| **CEO** | Là **TGĐ**, và hiện kiêm **TP Thương mại** | Cấp 2 và cấp 3 của nhánh thương mại là một người. Xung đột với Phòng Dịch vụ áp mục 8.2.1, không áp thang dọc |
| **CEO** | `NĐDPL` hiện là NGƯỜI KHÁC, là Chủ tịch HĐQT theo GCN ngày 31/07/2026 | Ba nghĩa vụ Luật Kế toán gắn đích danh vào `NĐDPL` không thuộc CEO. Đọc tách hai ký hiệu, xem [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 4 |
| **COO** | Là **TL-LD**, Team Lead Bộ phận Lao động và Tiền lương | Leo từ cấp 1 lên cấp 2 của bộ phận này là chuyển lên chính mình. Leo THẲNG CEO và ghi lý do trên Job |
| **Legal R&D Team Lead** | Là **TL-LS**, Team Lead Bộ phận Dịch vụ pháp lý | Người đặt chuẩn và người thực thi chuẩn là một.<br>Không có lớp soát chuyên môn thứ hai; bù bằng soát tiến độ của COO và soát khớp yêu cầu của AM |

Trường hợp `TL-KT` kiêm `KTT` nội bộ xem `01_ToChuc/OBK-QCTC-02` mục 19.1 và 19.2.

### 5.1.3. Quy ước ghi vai trò

Vai trò CV và TL LUÔN ghi kèm hậu tố đơn vị, không có ngoại lệ. Đủ mười ký hiệu của mảng dịch vụ: `CV-KT`, `CV-LIC`, `CV-LD`, `CV-LS`, `CV-RD`, `TL-KT`, `TL-LIC`, `TL-LD`, `TL-LS`, `TL-RD`.

**Quy tắc riêng cho ký hiệu `LEG`.** `LEG` chỉ mang nghĩa ĐƠN VỊ Legal R&D Team. `LEG` dùng được trong văn xuôi và dùng được ở ô C hoặc ô I của một bảng RACI. `LEG` không được dùng ở ô R hoặc ô A của bất kỳ bảng RACI nào, vì hai ô đó cần đúng một vai trò chịu trách nhiệm; ở hai ô đó phải ghi `TL-RD` hoặc `CV-RD`.

> [!note] QUY TẮC TUYỆT ĐỐI
> Ký hiệu `KTV` và `KTT` chỉ dùng cho MẢNG NỘI BỘ. `KTV` là kế toán viên nội bộ, `KTT` là kế toán trưởng nội bộ, cả hai làm việc trên sổ sách CỦA CHÍNH OBACKER. Miền dịch vụ tuyệt đối không dùng hai ký hiệu này; mảng dịch vụ dùng `CV-KT` và `TL-KT`.
>
> Nhờ quy tắc này, hai mảng không còn ký hiệu nào trùng nghĩa, và [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] cùng [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]] không phải đổi ký hiệu. Cái phải đổi là Handbook Kế toán, vì bản cũ của Handbook dùng hai ký hiệu mảng nội bộ này với nghĩa dịch vụ. Việc đổi đã xong ngày 02/09/2026.

### 5.2. Bảng chuyển đổi từ bộ vai trò cũ, BẮT BUỘC đọc khi mở tài liệu cũ

| Tài liệu cũ | Ký hiệu cũ | Vai trò mới | Ghi chú |
| --- | --- | --- | --- |
| Handbook Kế toán | KTV | **CV-KT** | Bản cũ của Handbook dùng ký hiệu này với nghĩa DỊCH VỤ.<br>Nghĩa đó nay là `CV-KT`. Đã đổi hết ngày 02/09/2026 |
| Handbook Kế toán | KTT | **TL-KT** | Bản cũ của Handbook dùng ký hiệu này với nghĩa DỊCH VỤ, tức người chốt kỹ thuật và ký hồ sơ gửi cơ quan thuế.<br>Nghĩa đó nay là `TL-KT`. Đã đổi hết ngày 02/09/2026.<br>không nhầm với `KTT` của Kế toán nội bộ |
| Handbook Kế toán | TBP, Trưởng bộ phận dịch vụ | COO | |
| Handbook Kế toán | CEO | CEO | Giữ nguyên. Nay CEO chủ trì `BOM` và hiện kiêm TP Thương mại |
| SOP Licensing v0.1 | LSC member | CV-LIC | |
| SOP Licensing v0.1 | LSC Lead, Licensing Manager | TL-LIC | |
| SOP Lao Động v0.1 | Team Member | CV-LD | |
| SOP Lao Động v0.1 | Team Lead | TL-LD | |
| SOP Customer Handling v1.4 | Sales | AM | oBacker không có vai trò Sales riêng. AM là đầu mối toàn trình, làm cả phần bán hàng |
| SOP Customer Handling v1.4 | OPS | CV và TL của bộ phận tương ứng | "OPS" là tên gộp, không phải một bộ phận. Cấm dùng lại |
| SOP Customer Handling v1.4 | Manager | TL, COO hoặc CEO tùy cấp | "Manager" không xác định cấp. Cấm dùng lại |
| SOP Customer Handling v1.4 | Expert | Legal R&D nếu là chuẩn chưa có tiền lệ;<br>`TL-LS` nếu là dịch vụ pháp lý có thu;<br>`TL` bộ phận nếu là nghiệp vụ |  |
| SOP Customer Handling v1.4 | Finance | Kế toán nội bộ: CEO về chính sách, `KTT` nội bộ về thực thi | `Finance` là nhãn cũ của bản v1.4, nay thay bằng tên đơn vị Kế toán nội bộ, do `KTT` phụ trách và có `KTV` bên dưới, thuộc nhánh CEO.<br>Nhãn cũ không dùng lại trong tài liệu mới.<br>Chính sách tài chính vẫn thuộc CEO; hóa đơn, công nợ, đối soát thực thi ở mảng nội bộ, xem `02_NoiBo/06_OBK-SOP-NB-00` và `01_ToChuc/OBK-QCTC-02` |
| Ba bản của team | Ban Nghiệp vụ | Legal R&D với nội dung pháp lý;<br>COO với quản lý tài liệu | oBacker không có Ban Nghiệp vụ. Hai nhóm việc của Ban Nghiệp vụ được chia như trên |

### 5.3. Bố trí nhân sự kế toán

Việc kiểm ba điều cấm của Luật Kế toán khi bố trí người làm kế toán, và kết luận về việc `TL-KT` kiêm `KTT` kế toán nội bộ, thuộc mảng tổ chức chứ không thuộc chuẩn vận hành dịch vụ.

Bản gốc đặt tại `01_ToChuc/OBK-QCTC-02` mục 19.1 và 19.2. Điều khoản pháp luật tại `PL_1` mã [[CC-KT-01 Ba điều cấm về bố trí người làm kế toán, áp dụng cho công ty cổ phần, người quản lý điều hành kiêm kế toán, thủ kho, thủ quỹ (`Đ.13 k.7`)|CC-KT-01]].

### 5.5. QUY TẮC BA LỚP PHÂN VIỆC PHÁP LÝ

Đây là bản GỐC của quy tắc. [[06_OBK-SOP-LS_Dich_vu_phap_ly|OBK-SOP-LS]] mục 1.4, [[07_OBK-SOP-RD_Nghien_cuu_phap_ly|OBK-SOP-RD]] mục 1.4 và bốn SOP còn lại chỉ dẫn chiếu về đây.

**Vấn đề mà quy tắc này giải.** Từ 02/09/2026, việc pháp lý ở oBacker do ba nhóm khác nhau làm: bốn bộ phận nghiệp vụ tự xử phần pháp lý gắn với hồ sơ mình giữ; Bộ phận Dịch vụ pháp lý làm việc pháp lý CÓ THU cho một khách; Legal R&D đặt chuẩn. [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen|OBK-QCTC-02]] Điều 17 đã có nguyên tắc phân theo tính chất, nhưng nguyên tắc đó chưa trả lời được các ca giao nhau, ví dụ khách bị thanh tra lao động thì ai chủ trì.

**Quy tắc, một câu:** hỏi việc đang xét CẦN CÁI GÌ, không hỏi việc đang xét thuộc lĩnh vực nào.

| Việc cần cái gì | Ai chủ trì | Ai tham vấn |
| --- | --- | --- |
| Chỉ cần giải trình theo hồ sơ nghiệp vụ đã có sẵn | `TL` của bộ phận đang giữ hồ sơ, tức `TL-KT`, `TL-LIC` hoặc `TL-LD` | `TL-LS` về thủ tục và thời hiệu;<br>`TL-RD` về hành vi oBacker nghiêm cấm |
| Phải lập luận pháp lý, phải ra văn bản có ký, hoặc phải soạn một văn bản pháp lý cho một khách | `TL-LS` | Bộ phận giữ hồ sơ cấp hồ sơ;<br>`TL-RD` khi chưa có chuẩn |
| Chưa có chuẩn ở oBacker, hoặc chuẩn phải đổi vì văn bản pháp luật đổi, hoặc kết luận sẽ dùng cho mọi khách về sau | `TL-RD` | `TL` bộ phận cấp dữ kiện thực tế |
| Đại diện khách trong tố tụng tại tòa án hoặc trọng tài | Không thuộc oBacker | Chuyển đối tác thuê ngoài theo [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] LS-18 |

**Phép thử một câu, dùng khi hai lớp giữa còn lẫn:** kết luận này chỉ dùng cho một khách, hay dùng cho mọi khách về sau. Chỉ một khách thì thuộc `TL-LS`. Mọi khách về sau thì thuộc `TL-RD`, và đầu ra phải là một mã căn cứ hoặc một dòng chuẩn nghiệp vụ, không phải một câu trả lời rời.

**Bốn ca giao nhau, đã chốt:**

| Ca | Ai chủ trì | Vì sao |
| --- | --- | --- |
| Thanh tra và kiểm tra THUẾ của khách | `TL-KT` chủ trì, `TL-LS` tham vấn về thủ tục và thời hiệu, `TL-RD` về hành vi oBacker nghiêm cấm | Hồ sơ nằm ở đó, và [[16_Thanh_tra_kiem_tra_thue\|OBK-SOP-16]] đã đặt `TL-KT` là người chủ trì làm việc với đoàn |
| Thanh tra LAO ĐỘNG của khách | `TL-LD` chủ trì, `TL-LS` tham vấn về thủ tục và thời hiệu, `TL-RD` về hành vi oBacker nghiêm cấm | Cùng lý do với dòng trên: hồ sơ lao động và bảng lương nằm ở đó, và việc là giải trình theo hồ sơ |
| Tranh chấp lao động của khách phải lập luận pháp lý hoặc ra văn bản có ký | `TL-LS` | Đã ra khỏi nghiệp vụ thường, cần lập luận. Bộ phận Lao động và Tiền lương cấp hồ sơ |
| Một văn bản mới đổi cách tính cho toàn bộ khách | `TL-RD` | Kết luận dùng cho mọi khách về sau, nên là chuẩn |

> [!bug] LỖI THƯỜNG GẶP
> Phân việc theo lĩnh vực thay vì theo nhu cầu. Dấu hiệu là câu hỏi "yêu cầu này là lao động hay pháp lý". Câu hỏi đó không có câu trả lời, vì mọi việc lao động đều là việc pháp lý. Câu hỏi đúng là hồ sơ đang ở tay ai, và việc cần gì.

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> Và chú ý ai là người chỉ định. Hai đơn vị cùng nhận một việc, hoặc không đơn vị nào nhận, thì phải có người chỉ định người chủ trì trước khi việc bắt đầu, không chỉ định sau khi việc đã chạy. Ai chỉ định thì phụ thuộc hai đơn vị đó thuộc nhánh nào:
>
> | Hai đơn vị tranh chấp | Ai chỉ định | Vì sao |
> | --- | --- | --- |
> | Cả hai thuộc Phòng Dịch vụ, ví dụ `TL-KT` với `TL-LS` | `COO` | Cả hai báo cáo `COO`, nên `COO` chỉ định được |
> | Một bên là Legal R&D, ví dụ `TL-LS` với `TL-RD` | **`COO`** | `CEO` giao `COO` quyết ca này, dù Legal R&D Team báo cáo `CEO` |
> | Một bên là Bộ phận AM | Theo mục 8.2.1, tách quyền quyết theo bản chất vấn đề | Hai nhánh chỉ gặp nhau ở `CEO` |
>
> Đường cụ thể cho ca `TL-LS` với `TL-RD` ở [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 4 dòng xung đột ưu tiên. Quy tắc Job chính và Job phụ tại [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 2a quy tắc 4.

---

## 6. QUY TRÌNH CHUẨN 10 BƯỚC

Mọi Job của mọi bộ phận đi qua đúng 10 bước dưới đây. Bộ phận không được đánh số bước riêng. Nghiệp vụ nào không có bước nào thì ghi "không áp dụng", không được đổi số.

| Mã | Bước | Điều kiện chuyển bước (điều kiện coi là xong) |
| --- | --- | --- |
| **B1** | Tiếp nhận và xác nhận yêu cầu | Đã xác nhận đã nhận trong hạn Channel SLA;<br>đã tạo Job đúng quy ước tên;<br>đã trả lời được câu hỏi "khách muốn đạt được điều gì khi đưa ra yêu cầu này" |
| **B2** | Lưu trữ đầu vào gốc | 100% tệp gốc lưu đúng nơi, đúng tên, đúng phiên bản;<br>bản gốc không bị sửa;<br>người khác tìm lại được dưới 2 phút |
| **B3** | Phân loại Job và chọn quy trình | Đã xác định Job thuộc loại nào trong bảng Job của SOP cấp 2;<br>nhiều phạm vi thì đã tách Job;<br>không khớp loại nào thì đã chuyển lên cấp trên trong 15 phút |
| **B4** | Kiểm tra điều kiện và tính khả thi | Đã đối chiếu quy định pháp luật bản mới nhất với thực tế khách;<br>đã liệt kê điều kiện chưa đáp ứng;<br>với nghiệp vụ lạ đã có legal basis từ LEG ghi trên Job;<br>đã kết luận tự làm hay cần đối tác thuê ngoài |
| **B5** | Tổng hợp dữ liệu và xử lý dữ liệu thiếu | Đã tra hết nguồn nội bộ trước khi hỏi khách;<br>mâu thuẫn dữ liệu đã ghi đủ 4 trường;<br>thiếu đầu vào đã gửi yêu cầu bổ sung theo NT-3 |
| **B6** | Thực hiện nghiệp vụ | Hoàn thành đủ các bước của hướng dẫn cấp 3;<br>với hồ sơ nộp cơ quan nhà nước, bước này gồm cả việc nộp và lấy biên nhận |
| **B7** | Kiểm soát chất lượng hai lớp | Lớp 1 tự soát đối chiếu bảng kiểm đã xong;<br>lớp 2 người thứ hai xác nhận đã xong;<br>cả hai để lại dấu vết trên Job |
| **B8** | Bàn giao qua AM | Đã gửi AM trước hạn gửi khách ≥ 0,5 ngày làm việc;<br>nội dung bàn giao đủ 5 phần theo mục 6.1 |
| **B9** | Theo dõi tới khi có kết quả | Có xác nhận đã nhận của khách, hoặc đã nhắc đủ số lần chuẩn, hoặc đã có kết quả từ cơ quan nhà nước;<br>trạng thái Job luôn phản ánh đúng thực tế |
| **B10** | Đóng Job và cập nhật hướng dẫn | Đã ghi chi phí thực tế và thời gian thực tế so với SLA;<br>đã ghi lỗi đầu ra nếu có;<br>đã đề xuất cập nhật hướng dẫn hoặc kết luận không cần, kèm lý do |

### 6.1. Năm phần bắt buộc của nội dung bàn giao tại B8

Thiếu một trong năm phần là bàn giao chưa đạt, AM có quyền trả lại:

1. Đã làm gì và kết quả cụ thể là gì.
2. Tài liệu kết quả kèm theo, đặt tên đúng quy ước.
3. Giả thiết đã dùng (nếu có) và ảnh hưởng của giả thiết đó, theo NT-3.
4. Rủi ro còn lại và thay đổi so với lần trước (nếu có).
5. Việc tiếp theo, ai làm, hạn nào. Nêu đích danh bên chịu trách nhiệm: cơ quan nhà nước, oBacker, hay khách hàng.

### 6.2. Tiêu chuẩn nhắc nhở

Áp dụng thống nhất cho mọi bộ phận, mọi loại Job:

| Tình huống | Chuẩn nhắc |
| --- | --- |
| Chờ khách gửi thông tin hoặc hồ sơ | Nhắc tối đa 2 lần. Lần 1 tại T+1, lần 2 tại T+3.<br>Sau lần 2 không đủ thông tin và hậu quả ảnh hưởng nghĩa vụ pháp lý thì chuyển lên cấp trên TL và AM tại T+5 |
| Chờ khách xác nhận đã nhận đầu ra | Nhắc 1 lần sau 2 ngày làm việc. Sau đó coi như đã nhận và ghi vào Job |
| Chờ cơ quan nhà nước quá ngày hẹn trả kết quả | Chủ động liên hệ cơ quan trong 1 ngày làm việc kể từ ngày hẹn;<br>báo AM cùng ngày |
| Chờ bộ phận nội bộ khác | Nhắc 1 lần. Vẫn trễ thì chuyển lên cấp trên TL của bộ phận đó, đồng thời thông tin cho AM |

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> Khi bên nhận đầu ra là CƠ QUAN NHÀ NƯỚC, việc hoàn thành nghĩa vụ pháp lý không phụ thuộc vào xác nhận của khách hàng. Thông báo cho khách vẫn bắt buộc, nhưng không được lấy việc khách chưa phản hồi làm lý do không nộp. Trường hợp khách chủ động yêu cầu không nộp thì phải chuyển lên cấp trên TL và AM ngay, không tự quyết.

### 6.3. CHUẨN GIAO TIẾP VỚI KHÁCH HÀNG

Mục này ĐẶT chuẩn giao tiếp dùng chung cho mọi bộ phận có khách. Bộ phận khác nhau ở MẪU THƯ và ở nghiệp vụ, không được khác nhau ở bốn thứ tại mục này. Mẫu thư và quy trình của từng bộ phận nằm ở cấp 3: bộ phận Kế toán và Thuế tại [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.4; bộ phận AM tại [[PL_A_Cau_chu_mau|OBK-HB-31-PL-A]].

#### 6.3.1. Sáu nguyên tắc giao tiếp

**Nguyên tắc 1: Trả lời trước, giải thích sau.** Câu đầu tiên phải là câu trả lời hoặc là mốc thời gian sẽ có câu trả lời. Không mở đầu bằng bối cảnh, không mở đầu bằng xin lỗi dài dòng.

**Nguyên tắc 2: Không hứa quá.** Chỉ cam kết những gì nằm trong tầm kiểm soát của oBacker. Kết quả thuộc thẩm quyền cơ quan nhà nước không bao giờ nằm trong tầm kiểm soát của oBacker.

**Nguyên tắc 3: Nói rõ mức chắc chắn.** Phân biệt ba trạng thái và nói rõ trạng thái nào: đã xác minh và chắc chắn; đã có cơ sở nhưng cần đối chiếu bản gốc; chưa có căn cứ, cần tra cứu. Không được để khách hiểu nhầm trạng thái 2 hoặc 3 là trạng thái 1.

**Nguyên tắc 4: Không dùng thuật ngữ khi không cần.** Khách là chủ doanh nghiệp, không phải kế toán. Nói "số thuế phải nộp thêm" thay vì "chênh lệch phát sinh sau bút toán điều chỉnh". Khi buộc phải dùng thuật ngữ, giải thích ngay trong ngoặc ở lần dùng đầu tiên.

**Nguyên tắc 5: Một thông điệp, một hành động.** Mỗi lần liên hệ nên có đúng một việc cần khách làm, ghi rõ việc gì và hạn nào. Gửi năm yêu cầu trong một thư thường nhận về không yêu cầu nào được thực hiện.

**Nguyên tắc 6: Không đổ lỗi cho khách trong văn bản chính thức, nhưng không nhận lỗi thay khách.** Nêu sự việc kèm bằng chứng và ngày tháng. Việc phân định trách nhiệm là một cuộc trao đổi riêng, không lồng vào thư thông báo nghiệp vụ.

#### 6.3.2. Chuẩn xưng hô và văn phong

Áp dụng cho văn bản chính thức bằng tiếng Việt:

| Hạng mục | Chuẩn oBacker | Không dùng |
| --- | --- | --- |
| Gọi khách | "Quý Công ty", "Quý Khách hàng";<br>với cá nhân dùng "Ông/Bà [họ tên]" | "Anh chị bên mình", "Bên em gửi anh" trong văn bản chính thức |
| Gọi oBacker | "oBacker", "chúng tôi" | "Bên em", "công ty em" trong văn bản chính thức |
| Mở đầu | "Kính gửi:", "Kính chào Quý Công ty," | "Chào anh," trong thư có nội dung nghĩa vụ |
| Kết thúc | "Trân trọng." | "Thanks", "Cảm ơn nhiều nha" |
| Ngày tháng | Ghi đầy đủ dạng ngày/tháng/năm | Ghi tắt gây nhầm lẫn |
| Số tiền | Ghi bằng số, có dấu phân cách hàng nghìn, kèm đơn vị "đồng";<br>số quan trọng ghi thêm bằng chữ | Ghi tắt "50tr", "1 tỷ 2" |
| Thuật ngữ | Dùng đúng tên gọi pháp lý của hồ sơ, sắc thuế | Dùng tên gọi dân gian gây hiểu sai |

Trong tin nhắn nhanh hằng ngày, văn phong được phép thân thiện hơn, nhưng ba điều sau vẫn giữ nguyên: không cam kết vượt thẩm quyền, không nêu kết luận pháp lý chưa xác minh, không viết sai tên gọi hồ sơ và sắc thuế.

#### 6.3.3. Kênh giao tiếp và giá trị lưu vết

Hai loại kênh và ba quy tắc bắt buộc của hai loại đó nằm tại mục 7.2.1a. Bảng dưới đây chi tiết hóa từng kênh:

| Kênh | Dùng cho | Không dùng cho | Có giá trị lưu vết chính thức |
| --- | --- | --- | --- |
| Thư điện tử | Mọi nội dung có nghĩa vụ, mốc thời gian, số liệu, kết luận nghiệp vụ;<br>xác nhận của khách trước khi nộp hồ sơ;<br>thông báo sai sót;<br>thông báo thay đổi chính sách | Trao đổi cần phản hồi tức thì trong tình huống khẩn | Có |
| Văn bản giấy có chữ ký và dấu | Biên bản bàn giao;<br>văn bản gửi cơ quan nhà nước;<br>thỏa thuận thay đổi hợp đồng;<br>văn bản có cam kết tài chính | Trao đổi hằng ngày | Có |
| Nhóm tin nhắn công việc chung với khách | Nhắc việc;<br>hỏi nhanh;<br>thông báo tiến độ;<br>hẹn lịch | Kết luận pháp lý;<br>số thuế chính thức;<br>xác nhận trước khi nộp;<br>nội dung nhạy cảm về trách nhiệm | Không, phải xác nhận lại bằng thư điện tử |
| Điện thoại | Việc gấp;<br>giải thích nội dung phức tạp;<br>xoa dịu tình huống căng thẳng | Bất kỳ nội dung nào cần lưu vết mà không có bước xác nhận lại | Không, phải xác nhận lại bằng thư điện tử |
| Họp trực tiếp hoặc trực tuyến | Báo cáo định kỳ;<br>xử lý vấn đề lớn;<br>khởi động hợp đồng;<br>tổng kết năm | Thay thế cho văn bản xác nhận | Không, phải có biên bản hoặc thư tóm tắt |
| `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` | Theo dõi tiến độ nội bộ;<br>lưu trạng thái;<br>giao việc | Kênh chính thức với khách nếu khách không có quyền truy cập | Nội bộ |
| `[KHO LƯU TRỮ HỒ SƠ]` | Chuyển giao tài liệu, hồ sơ, báo cáo | Trao đổi nội dung | Lưu trữ |

#### 6.3.4. Nội dung bắt buộc bằng văn bản, và quy tắc xác nhận lại

**Quy tắc một.** Nội dung nào thuộc danh mục bắt buộc bằng văn bản mà chỉ có trao đổi miệng thì coi như chưa xảy ra. Danh mục của từng bộ phận do SOP cấp 2 của bộ phận đó đặt; danh mục của bộ phận Kế toán và Thuế tại [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.2.2. Bốn nội dung sau là bắt buộc bằng văn bản với mọi bộ phận: xác nhận của khách trước khi nộp hồ sơ cho cơ quan nhà nước; thông báo sai sót và phương án khắc phục; từ chối một yêu cầu của khách; thay đổi phạm vi dịch vụ.

**Quy tắc hai.** **Mọi quyết định quan trọng trao đổi qua điện thoại, tin nhắn hoặc họp đều phải được xác nhận lại bằng thư điện tử, do người của oBacker chủ động gửi, trong 24 giờ.**

**Quy tắc ba.** Khung thư xác nhận lại và bốn nguyên tắc khi sử dụng khung đó nằm tại [[19_Giao_tiep_khach_hang|OBK-SOP-19]] mục 6.2.3. Bộ phận nào chưa có mẫu riêng thì dùng khung đó.

**Cách phát hiện.** Lớp hậu kiểm theo NT-5 lấy mẫu các vụ việc có quyết định chốt qua kênh liên lạc, và đối chiếu xem có thư xác nhận lại trong thời hạn hay không. Thiếu thư xác nhận lại là lỗi quy trình.

### 6.4. QUY TRÌNH GIAO NHẬN TÀI LIỆU, THƯ TỪ VÀ BƯU PHẨM

Nhằm kiểm soát rủi ro thất lạc chứng từ gốc, hồ sơ pháp lý và tài liệu cơ quan nhà nước, toàn bộ các bộ phận Delivery và AM tuân thủ quy trình giao nhận sau:

1. **Quy trình đôn đốc và yêu cầu tài liệu từ khách hàng:**
   - **Mốc 1 (Yêu cầu hồ sơ ban đầu):** Khi khởi tạo dịch vụ, `AM` gửi văn bản danh mục tài liệu cần thu thập theo Phiếu [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu|TL-02]], nêu rõ định dạng chuẩn (bản sao chứng thực, bản gốc, bản dịch công chứng) và thời hạn chót khách hàng phải cung cấp.
   - **Mốc 2 (Nhắc nhở trước hạn):** Trước hạn chót 02 ngày làm việc, `AM` kiểm tra tiến độ cung cấp và gửi thông báo nhắc nhở các hạng mục còn thiếu.
   - **Mốc 3 (Tạm dừng tính cam kết tiến độ khi chờ khách):** Nếu khách hàng chậm nộp tài liệu quá hạn chót, thời gian thực hiện cam kết (SLA) của oBacker sẽ tạm dừng tính cho đến khi nhận đủ tài liệu hợp lệ; cơ chế xử lý tuân thủ Điều 5.4 Bản Điều Khoản Chung:
     + Với dịch vụ theo vụ việc (Giấy phép, Rà soát hợp đồng, SHTT, Nghiên cứu): Toàn bộ số ngày khách hàng chậm nộp được cộng dồn trực tiếp vào ngày hẹn bàn giao kết quả (cộng bù tương ứng 1:1).
     + Với dịch vụ định kỳ (Kế toán, Thuế, BHXH, Tiền lương): Khách hàng nộp chứng từ sau ngày 05 hằng tháng hoặc không xác nhận trước mốc D-7 thì cam kết tiến độ của oBacker tạm đình chỉ, oBacker được miễn trừ tiền phạt chậm nộp và có quyền tạm nộp tờ khai theo số liệu hiện có hoặc tờ khai trống để bảo đảm hạn chót với cơ quan nhà nước.

2. **Kiểm soát bưu phẩm, thư từ và công văn đi/đến:**
   - Mọi tài liệu, chứng từ gốc, bưu phẩm gửi đi (`Outbound`) hoặc tiếp nhận đến (`Inbound`) từ Khách hàng, Cơ quan Nhà nước hoặc Nhà cung ứng bắt buộc phải được ghi nhận vào Sổ theo dõi giao nhận [[TL-01_So_giao_nhan_tai_lieu_va_buu_pham|TL-01]].
   - Giao nhận hồ sơ gốc trực tiếp tại văn phòng phải có chữ ký của hai bên vào Biên bản bàn giao [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu|TL-02]].
   - Gửi hồ sơ qua đơn vị chuyển phát bưu chính: bắt buộc ghi nhận mã vận đơn (`Tracking Number`), gửi mã tra cứu cho khách hàng và theo dõi đến khi có xác nhận phát thành công.
   - Toàn bộ văn bản, thông báo từ Cơ quan Thuế, Tòa án, Thanh tra hoặc Cơ quan Đăng ký kinh doanh tiếp nhận tại văn phòng phải được chuyển giao cho Chuyên viên thụ lý vụ việc và Quản lý trực tiếp (`TL`) trong vòng 01 giờ làm việc.

---

## 7. THANG SLA THỐNG NHẤT

### 7.1. Bốn loại SLA và quan hệ giữa bốn loại đó

| Loại | Là gì | Ai cam kết với ai | Ghi ở đâu |
| --- | --- | --- | --- |
| **Thời hạn theo pháp luật** | Hạn do pháp luật đặt | Không ai cam kết;<br>đây là dữ kiện | `PL_1_Can_cu_phap_ly.md` |
| **SLA dịch vụ** | Hạn oBacker cam kết với khách | oBacker với khách hàng | Hợp đồng dịch vụ;<br>bảng Job của SOP cấp 2 |
| **SLA nội bộ** | Hạn bộ phận nghiệp vụ cam kết với AM | Bộ phận với AM | Mục 7.4 dưới đây |
| **Channel SLA** | Hạn phản hồi lần đầu theo kênh | AM với khách | Mục 7.2 dưới đây |

**Quy tắc bất di dịch:** SLA nội bộ sớm hơn SLA dịch vụ, SLA dịch vụ sớm hơn thời hạn theo pháp luật, theo đúng ba mốc làm trước tại NT-6. Bộ phận nào đặt SLA dịch vụ bằng hoặc muộn hơn thời hạn theo pháp luật là đặt sai, LEG trả lại.

### 7.2. Quy ước đếm thời gian và Channel SLA

#### 7.2.1. Quy ước đếm thời gian, dùng chung toàn hệ thống

| Quy ước | Nội dung |
| --- | --- |
| Giờ làm việc | Buổi sáng 08:00 tới 12:00, buổi chiều 13:00 tới 17:00.<br>Tức 08 giờ một ngày, 40 giờ một tuần.<br>Quyết định của CEO ngày 27/08/2026 |
| Ngày làm việc | Thứ Hai tới thứ Sáu, trừ ngày nghỉ lễ theo công bố của Chính phủ |
| Đơn vị mặc định | Con số ngày không kèm chữ "làm việc" là NGÀY LỊCH liên tục, gồm cả ngày nghỉ và ngày lễ |
| Mốc tính bằng giờ | Chỉ đếm trong giờ làm việc. Giờ nghỉ trưa 12:00 tới 13:00 không tính |
| Thời điểm bắt đầu đếm | Từ khi yêu cầu được ghi nhận trên `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`.<br>Yêu cầu nhận qua điện thoại hoặc trao đổi miệng chỉ bắt đầu đếm sau khi được ghi vào hệ thống.<br>Đây là lý do mọi yêu cầu phải vào hệ thống ngay |
| Thời điểm dừng đếm | Khi câu trả lời hoặc sản phẩm đã được GỬI CHO KHÁCH qua KÊNH CHÍNH THỐNG, không phải khi làm xong nội bộ và cũng không phải khi nhắn qua chat.<br>Định nghĩa kênh chính thống tại mục 7.2.1a |
| Tạm dừng tiến độ khi chờ khách | Thời gian cam kết tiến độ TẠM DỪNG khi oBacker đang chờ khách cung cấp thông tin, chứng từ hoặc xác nhận, tính từ lúc AM gửi yêu cầu tới lúc khách cung cấp đủ hợp lệ.<br>Cơ chế áp dụng theo Điều 5.4 Bản Điều Khoản Chung (cộng dồn 1:1 với vụ việc; miễn trừ tiền phạt chậm nộp và tạm kê khai với dịch vụ định kỳ).<br>Mỗi lần tạm dừng phải ghi lý do trên hệ thống.<br>Không ghi lý do thì không được tính là tạm dừng |

#### 7.2.1a. KÊNH CHÍNH THỐNG VÀ KÊNH LIÊN LẠC

Hai loại kênh này khác nhau về giá trị pháp lý, và lẫn hai loại là nguồn của tranh chấp với khách.

| Loại kênh | Gồm những gì | Dùng để làm gì |
| --- | --- | --- |
| **Kênh chính thống** | Email công ty của oBacker;<br>bản cứng gửi qua bưu điện khi có | Gửi kết quả, gửi tài liệu, chốt nội dung với khách. Đây là kênh duy nhất có giá trị làm bằng chứng |
| **Kênh liên lạc** | Zalo, điện thoại, họp trực tiếp, `[HỆ THỐNG CHAT KHÁCH HÀNG]` | Trao đổi hằng ngày, hỏi nhanh, hẹn lịch, báo tiến độ |

**Ba quy tắc bắt buộc:**

1. Đồng hồ `T3` chỉ dừng khi kết quả đã gửi qua kênh chính thống. Nhắn Zalo báo đã xong không làm dừng đồng hồ.
2. Mọi nội dung chốt với khách qua kênh liên lạc phải được `AM` gửi lại bằng email công ty trong cùng ngày làm việc. Chưa gửi email thì coi như chưa chốt.
3. Đồng hồ `T1` xác nhận đã nhận thì chạy trên cả hai loại kênh, vì `T1` chỉ báo cho khách biết yêu cầu đã tới đúng người, không mang nội dung nghiệp vụ.

Quy tắc 2 giải quyết lỗi thường gặp đã ghi tại [[02_OBK-SOP-AM_Quan_ly_khach_hang|OBK-SOP-AM]] mục 5, khi một thay đổi phạm vi được chốt trong nhóm chat rồi không ai đưa vào hệ thống.

> [!bug] LỖI THƯỜNG GẶP
> Ngày nghỉ bù khi lễ trùng cuối tuần, cách chia 05 ngày Tết Âm lịch, và ngày liền kề của Quốc khánh đều do Chính phủ công bố riêng từng năm. COO phải nạp danh sách ngày nghỉ THỰC TẾ vào `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` trong 05 ngày làm việc kể từ khi có công bố. Không nạp thì mọi mốc dạng ngày làm việc và giờ làm việc đều tính sai.

#### 7.2.2. Ba đồng hồ khác nhau, không được lẫn

Đây là chỗ hai tài liệu cũ của oBacker mâu thuẫn nhau. SOP Customer Handling v1.4 đặt phản hồi lần đầu là dưới 15 phút với chat; Handbook Kế toán PL_G mục 10.2 đặt "phản hồi đầu tiên" là 04 giờ làm việc. Hai con số này đo HAI VIỆC KHÁC NHAU. Từ nay tách rõ ba đồng hồ:

| Đồng hồ | Đo cái gì | Ai chịu |
| --- | --- | --- |
| **T1 Xác nhận đã nhận** | Thời gian tới khi khách biết yêu cầu đã tới đúng người. Nội dung: "đã nhận" | AM |
| **T2 Cam kết mốc trả lời** | Thời gian tới khi khách biết BAO GIỜ có câu trả lời. Nội dung: "sẽ trả lời trước [mốc cụ thể]" | AM, sau khi hỏi bộ phận nghiệp vụ |
| **T3 Trả lời hoàn chỉnh** | Thời gian tới khi khách nhận được câu trả lời hoặc sản phẩm | TL bộ phận nghiệp vụ về nội dung;<br>AM về việc gửi |

#### 7.2.3. Bảng T1, xác nhận đã nhận

| Kênh | T1 | Ghi chú |
| --- | --- | --- |
| Chat, gồm `[HỆ THỐNG CHAT KHÁCH HÀNG]` và Zalo. Đây là kênh liên lạc, không phải kênh chính thống | Dưới 15 phút | Áp dụng cho cả lead và khách hiện hữu, cùng một AM |
| Email | Dưới 01 giờ làm việc | |
| Điện thoại nhỡ | Gọi lại dưới 30 phút | |
| Ngoài giờ làm việc | Trước 09:00 ngày làm việc kế tiếp | Trừ P1 đang mở, theo cam kết riêng |
| Khách liên hệ nhầm bộ phận | Chuyển cho AM trong 30 phút | Không trả lời nội dung, theo NT-2 |

#### 7.2.4. Bảng T2, cam kết mốc trả lời

| Loại yêu cầu | T2 |
| --- | --- |
| Yêu cầu thông thường, đã có sẵn quy trình | 04 giờ làm việc |
| Yêu cầu chuyên môn phức tạp | 04 giờ làm việc, kèm mốc ước lượng do TL bộ phận cấp trong 02 giờ làm việc |
| Yêu cầu chạm nội dung chưa xác minh được | 04 giờ làm việc, và nội dung cam kết chỉ được là một mốc hẹn trả lời, không được là câu trả lời nghiệp vụ |
| Sự cố mức P1 | AM gọi điện dưới 30 phút, kèm mốc kế hoạch dưới 02 giờ |

T3 nằm ở bảng Job của từng SOP cấp 2.

### 7.3. Ba mức ưu tiên và SLA xử lý

| Mức | Định nghĩa | Phản hồi lần đầu | Xử lý xong |
| --- | --- | --- | --- |
| **P1 Nghiêm trọng** | Nguy cơ trễ thời hạn theo pháp luật;<br>sự cố dịch vụ nghiêm trọng;<br>khiếu nại nặng hoặc dọa hủy hợp đồng;<br>cơ quan nhà nước ra văn bản yêu cầu giải trình có thời hạn | AM gọi điện dưới 30 phút | Kế hoạch xử lý dưới 2 giờ làm việc;<br>cập nhật 2 lần mỗi ngày vào đầu giờ sáng và cuối giờ chiều;<br>xong trong 1 ngày làm việc, tối đa 2 |
| **P2 Lớn** | Ảnh hưởng đầu ra hoặc timeline;<br>sai sót cần điều chỉnh | Theo T1 | Kế hoạch trong 4 giờ làm việc cùng ngày;<br>xong trong 2 ngày làm việc |
| **P3 Thường** | Câu hỏi và yêu cầu thông thường | Theo T1 | Trả lời đầy đủ trong ngày nếu nhận trước 15:00, nếu không thì trước 12:00 hôm sau.<br>Cần bộ phận nghiệp vụ xử lý thì tối đa 2 ngày làm việc, và AM cam kết mốc theo T2 |

**Quy tắc phân mức.** Người tiếp nhận phân mức tại B1. Phân sai mức thấp hơn thực tế là lỗi chất lượng. Khi nghi ngờ giữa hai mức, chọn mức cao hơn.

### 7.4. SLA nội bộ, bộ phận nghiệp vụ với AM

Cơ chế một đầu mối chỉ chạy được nếu nội bộ phản hồi AM đúng hạn. Bảng này là bắt buộc và tính vào chỉ số của bộ phận nghiệp vụ.

| Tình huống | SLA | Lý do |
| --- | --- | --- |
| AM yêu cầu thông tin hoặc ý kiến từ bộ phận | Xác nhận đã nhận dưới 30 phút;<br>nội dung dưới 3 giờ làm việc | Để AM giữ được Channel SLA với khách |
| Câu hỏi chuyên môn phức tạp | Xác nhận đã nhận dưới 30 phút;<br>gửi AM ước lượng thời gian có câu trả lời trong 2 giờ làm việc | AM báo khách timeline trong 4 giờ |
| Đầu ra để AM gửi khách | Gửi AM trước ≥ 0,5 ngày làm việc so với hạn gửi khách | AM có thời gian soát và định dạng |
| Phát hiện nguy cơ trễ hạn | Báo AM NGAY khi phát hiện, không đợi tới hạn | AM báo khách trước thời hạn kèm phương án |
| Bộ phận trễ SLA nội bộ | AM nhắc 1 lần rồi chuyển lên cấp trên TL của bộ phận đó | Không để khách chờ quá mốc AM đã hứa |
| **Một bộ phận cần đầu vào nghiệp vụ từ bộ phận khác**, ví dụ Dịch vụ pháp lý cần hồ sơ lao động của khách để soạn nội quy | Xác nhận đã nhận dưới 30 phút; nội dung dưới 3 giờ làm việc. Cùng mốc với dòng đầu bảng này | Bộ phận giữ Job chính không kiểm soát được thời gian của bộ phận kia, nên phải có mốc.<br>Đồng hồ của Job chính DỪNG trong lúc chờ, và mỗi lần dừng ghi lý do theo mục 7.2.1 |

### 7.4a. SLA NỘI BỘ VỚI LEGAL R&D, VÀ QUY TẮC CHỐNG SLA KHÔNG CÓ CHỦ MỐC

Mục 7.4 đặt SLA nội bộ theo một chiều là bộ phận nghiệp vụ với `AM`. Mục 7.4 không phủ chiều thứ hai là bộ phận nghiệp vụ với Legal R&D, và ba Job của ba bộ phận đang tính vào SLA của mình một khoảng thời gian do Legal R&D thực hiện, trong khi Legal R&D không có bảng Job nào ghi mốc đó. Mục này đặt mốc cho chiều thứ hai đó.

| Tình huống | Ai yêu cầu | Ai đáp | Mốc đặt ở đâu |
| --- | --- | --- | --- |
| Nghiệp vụ lạ, cần cơ sở pháp lý đủ năm mục trước khi soạn hồ sơ | `TL` bộ phận | `TL-RD` | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] Job RD-09 |
| Bộ phận đã tra mà không kết luận được một câu hỏi pháp lý | `TL` bộ phận | `TL-RD` | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] Job RD-10 |
| Câu hỏi lặp lại từ hai bộ phận hoặc hai khách trở lên, cần thành chuẩn | `TL` bộ phận hoặc `COO` | `TL-RD` | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] Job RD-11 |
| Gặp nội dung chưa xác minh được, cần mở mã cần xác minh và đặt hạn chót | `TL` bộ phận | `TL-RD` | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] Job RD-12 |
| Văn bản pháp luật mới, cần bản đánh giá tác động | Bất kỳ ai phát hiện | `TL-RD` | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] Job RD-05, mốc theo mục 12.3a |
| Tài liệu sắp phát hành, cần soát nội dung pháp lý | `COO` hoặc `TL` bộ phận | `TL-RD` | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] Job RD-17 |
| Nội dung sắp công bố ra ngoài, cần soát nội dung pháp lý | Marketing hoặc `AM` | `TL-RD` | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] Job RD-19 |
| Legal R&D cần dữ kiện thực tế của khách để kết luận | `TL-RD` | `TL` bộ phận | Mục 7.4, dòng đầu: xác nhận dưới 30 phút, nội dung dưới 03 giờ làm việc |

**QUY TẮC CHỐNG SLA KHÔNG CÓ CHỦ MỐC, ba câu.**

1. Job của một đơn vị mà trong SLA của Job đó có một khoảng thời gian do đơn vị khác thực hiện thì phải dẫn chiếu mã Job của đơn vị đó. Cấm ghi lại con số, và cấm ghi bằng lời như "gồm thời gian bộ phận kia làm".
2. Đơn vị được dẫn chiếu phải có một Job thật trong bảng Job của mình, với mốc thật. Không có Job thì mốc đó không có chủ, và khi trễ thì không quy trách nhiệm được.
3. Mốc của Job được dẫn phải nằm TRONG mốc của Job dẫn, TRỪ khi Job dẫn khai rõ một NHÁNH KÉO DÀI. Đây là chỗ hay bị đặt sai theo hai hướng ngược nhau, nên phải viết đủ.

**Hai kiểu, và cách chọn.**

| Kiểu | Khi nào dùng | Bắt buộc có gì | Ví dụ đã có |
| --- | --- | --- | --- |
| NẰM TRONG | Việc của đơn vị kia là một PHẦN CHẮC CHẮN của Job, luôn xảy ra | Ô SLA ghi rõ phần nào của mốc thuộc ai, và cộng lại đúng bằng mốc của Job dẫn | [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]] LIC-01: 05 ngày làm việc, trong đó `RD-09` chiếm 03 và Licensing chiếm 02 |
| NHÁNH KÉO DÀI | Việc của đơn vị kia chỉ xảy ra trong một điều kiện, và khi xảy ra thì mốc gốc không giữ được | Đủ BA thứ: điều kiện vào nhánh;<br>mốc của nhánh viết bằng dẫn chiếu mã Job của đơn vị kia;<br>và câu buộc `AM` CAM KẾT LẠI `T2` với khách | [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] KT-23, [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] LD-01, [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] LS-07 |
| DỪNG ĐỒNG HỒ | Việc của đơn vị kia là cấp một ĐẦU VÀO, và trong lúc chờ thì Job không chạy được | Đủ BA thứ: câu ghi rõ ĐỒNG HỒ DỪNG trong lúc chờ;<br>dẫn chiếu mốc của đơn vị cấp đầu vào, tức mục 7.4 hoặc mục 7.4a hoặc một mã Job;<br>và câu buộc ghi lý do dừng trên Job theo mục 7.2.1 | [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] LS-11, LS-14, LS-15 |

Thiếu một trong ba thứ của nhánh kéo dài hoặc của kiểu dừng đồng hồ thì đó là SLA không có chủ mốc, không phải nhánh. Phân biệt hai kiểu cuối: nhánh kéo dài là khi đơn vị kia LÀM một phần việc, còn dừng đồng hồ là khi đơn vị kia CẤP một đầu vào rồi Job mới chạy được. Và cấm dùng nhánh kéo dài làm mặc định: nhánh phải là ngoại lệ có điều kiện, nếu phần lớn Job đi vào nhánh thì mốc gốc đặt sai và phải nới mốc gốc.

4. Cấm siết mốc của đơn vị được dẫn xuống dưới mức làm được để cho vừa mốc của Job dẫn. Mốc không làm được thì luôn trượt, và trượt có hệ thống thì chỉ số mất nghĩa.

Ô SLA của một Job chứa cụm chỉ sự phụ thuộc, ví dụ "gồm thời gian", "cộng thêm mốc", "nếu phải vào", thì ô đó phải chứa một mã Job của đơn vị được dẫn. Thiếu mã Job của đơn vị được dẫn là lỗi phải sửa.

### 7.5. Nơi tra SLA của từng Job

Con số SLA của từng Job cụ thể nằm ở bảng Job của SOP cấp 2 tương ứng. Bản tra cứu gộp toàn bộ SLA của bảy bảng Job nằm tại `PL_2_Bang_tra_SLA.md`.

> [!question] CẦN XÁC MINH
> `PL_2` là bản SINH TỰ ĐỘNG từ bảy bảng Job, gồm sáu SOP cấp 2 của mảng dịch vụ cộng [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo|OBK-SOP-NB-00]] của mảng nội bộ. `PL_2` không phải bản gốc. Con số SLA sửa ở SOP cấp 2, rồi sinh lại `PL_2`. Cấm sửa trực tiếp vào `PL_2`.

---

## 8. THANG CHUYỂN LÊN CẤP TRÊN

### 8.1. Hai chiều

**Chiều ngang (theo chuyên môn).** Vấn đề cần chuyên môn nào thì đi thẳng tới bộ phận có chuyên môn đó, không phụ thuộc cấp bậc. Người chuyển vẫn theo sát vụ việc tới khi có kết quả. Bốn dòng về việc pháp lý trong bảng dưới đây là bản rút gọn của mục 5.5; khi hai bên khác nhau thì mục 5.5 đúng.

| Loại vấn đề | Bộ phận nhận |
| --- | --- |
| Giấy phép lao động, thẻ tạm trú, thị thực, đăng ký doanh nghiệp, đăng ký đầu tư, sở hữu trí tuệ | Licensing |
| Hạch toán, tờ khai thuế, quyết toán thuế TNCN, hóa đơn, báo cáo tài chính | Kế toán |
| Hợp đồng lao động, bảng lương, BHXH, báo cáo lao động, kỷ luật lao động | Lao Động |
| Thanh tra và kiểm tra THUẾ của khách | Kế toán và Thuế chủ trì;<br>Dịch vụ pháp lý tham vấn về thủ tục và thời hiệu;<br>Legal R&D về hành vi oBacker nghiêm cấm |
| Thanh tra LAO ĐỘNG của khách | Lao động và Tiền lương chủ trì;<br>Dịch vụ pháp lý tham vấn về thủ tục và thời hiệu;<br>Legal R&D về hành vi oBacker nghiêm cấm |
| Tranh chấp của khách phải lập luận pháp lý hoặc ra văn bản có ký | Dịch vụ pháp lý chủ trì, bộ phận giữ hồ sơ cấp hồ sơ |
| Nghiệp vụ chưa có chuẩn, văn bản pháp luật mới, kết luận dùng cho mọi khách về sau, hành vi oBacker nghiêm cấm | Legal R&D |
| Yêu cầu và phản hồi của khách, phạm vi dịch vụ, phí, gia hạn, khiếu nại | AM |
| Công nợ, hóa đơn đầu ra, đối soát thanh toán | Miền nội bộ, xem [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] |
| Soạn và rà hợp đồng, tư vấn theo yêu cầu, nghiên cứu theo yêu cầu, bộ tài liệu nội bộ cho khách | Bộ phận Dịch vụ pháp lý |
| Đối tác và chương trình hợp tác | Đối tác và Chương trình |
| Tuyển dụng, đãi ngộ, hành chính CỦA OBACKER | Nhân sự |
| Sự cố hệ thống và công cụ | Công nghệ và Sản phẩm |

### 8.2. Chiều dọc, HAI NHÁNH

Vì nhánh thương mại thuộc CEO còn Phòng Dịch vụ thuộc COO, thang dọc có hai nhánh khác nhau về số cấp. Nhánh thứ ba là các đơn vị kiến tạo và hỗ trợ, xem [[PL_Chuyen_len_cap_tren|OBK-QCTC-02-PL-C]] mục 1.

**Nhánh DỊCH VỤ, ba cấp:**

| Cấp | Người | Nhận việc gì |
| --- | --- | --- |
| **Cấp 1** | TL của bộ phận | Mọi vướng mắc nghiệp vụ trong bộ phận;<br>quyết định cách xử lý nghiệp vụ;<br>duyệt đầu ra |
| **Cấp 2** | COO | TL không đủ thẩm quyền; vấn đề liên bộ phận giữa bốn bộ phận dịch vụ; điều chuyển nguồn lực và định biên.<br>NGOẠI LỆ: việc của Bộ phận Lao động và Tiền lương chuyển thẳng lên CEO trong lúc COO còn kiêm `TL-LD` |
| **Cấp 3** | CEO | Vượt thẩm quyền COO: rủi ro pháp lý, có phát sinh tiền phạt, ảnh hưởng uy tín, hành vi oBacker nghiêm cấm |

**Nhánh THƯƠNG MẠI, ba cấp:**

| Cấp | Người | Nhận việc gì |
| --- | --- | --- |
| **Cấp 1** | AM | Mọi việc thuộc quan hệ khách hàng trong thẩm quyền bộ phận AM |
| **Cấp 2** | TP Thương mại | Ưu tiên giữa các khách;<br>giá trong khung đã duyệt;<br>điều phối giữa Bộ phận AM và Đối tác |
| **Cấp 3** | CEO | Giá ngoài khung, chiết khấu đặc biệt, khiếu nại thương mại, nhận khách, từ chối khách, chấm dứt hợp đồng |

> **CEO hiện kiêm TP Thương mại**, nên cấp 2 và cấp 3 đang là một người. Trong lúc còn kiêm nhiệm, việc thương mại xung đột với năng lực giao hàng không áp thang dọc này mà áp mục 8.2.1.

**Quy tắc nhảy cấp.** Mức nghiêm trọng quyết định có đi tuần tự hay nhảy thẳng. Không bắt buộc mọi vụ việc qua đủ cấp 1 rồi mới lên cấp 2. Nhưng cấp thấp hơn luôn phải được thông tin.

**Quy tắc thời gian.** Chuyển lên cấp trên P1 phải được cấp nhận trả lời trong 2 giờ làm việc. P2 trong 4 giờ làm việc. P3 trong 1 ngày làm việc. Không trả lời trong hạn thì tự động lên cấp tiếp theo.

### 8.2.1. Xung đột giữa khối AM và khối dịch vụ

Đây là tình huống mà cơ cấu tổ chức của oBacker không tự giải quyết được, nên phải có quy tắc riêng.

**Vấn đề.** AM báo cáo TP Thương mại, mà TP Thương mại hiện do CEO kiêm; bốn bộ phận dịch vụ báo cáo COO. Hai nhánh chỉ gặp nhau ở CEO. Nhưng CEO là Lead của một trong hai bên, nên nếu để CEO phân xử toàn bộ thì người đứng đầu một bên đang xử tranh chấp có bên mình trong đó.

**Quy tắc: tách quyền quyết theo BẢN CHẤT vấn đề, không theo cấp bậc.**

| Câu hỏi thật sự đang tranh chấp | Ai quyết | Vì sao |
| --- | --- | --- |
| Việc khách yêu cầu oBacker LÀM ĐƯỢC trong mốc đó không, với nguồn lực đang có | **COO** | Đây là câu hỏi về năng lực vận hành. COO có dữ liệu, AM và CEO không có |
| Chất lượng của một đầu ra đã đạt chuẩn chưa | **TL bộ phận, COO nếu chuyển lên tiếp** | Câu hỏi chuyên môn |
| oBacker CÓ NHẬN yêu cầu đó không, với giá nào, với cam kết nào | **CEO** | Đây là câu hỏi thương mại |
| Có bổ sung nguồn lực để làm được mốc khách muốn không | **CEO quyết chi, COO đề xuất phương án** | Chạm cả tài chính lẫn vận hành |

**Trình tự bắt buộc khi có xung đột.** Một, AM và TL ghi rõ trên Job hai thứ: khách muốn gì, và bộ phận nói làm được tới đâu. Hai, COO trả lời câu hỏi khả thi trong 1 ngày làm việc. Ba, nếu COO nói không làm được trong mốc khách muốn thì AM KHÔNG được cam kết mốc đó, kể cả khi CEO là cấp trên của AM; muốn cam kết thì phải qua bước bốn. Bốn, CEO quyết có bổ sung nguồn lực hay đàm phán lại mốc với khách, và ghi quyết định vào Job.

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> CEO KHÔNG bác bỏ kết luận khả thi của COO bằng thẩm quyền. CEO đổi được ĐẦU VÀO (thêm người, thêm tiền, giảm phạm vi, dời mốc) rồi hỏi lại COO, chứ không đổi được câu trả lời. Đây là điểm kiểm soát quan trọng nhất của cơ cấu hai nhánh; bỏ chốt đó thì áp lực doanh số sẽ đẩy cam kết vượt năng lực và hậu quả rơi vào thời hạn theo pháp luật của khách.

### 8.3. Ma trận chuyển lên cấp trên theo loại vấn đề

| Loại vấn đề | Cấp 1 | Cấp 2 | Cấp cuối |
| --- | --- | --- | --- |
| Chất lượng hoặc tiến độ dịch vụ | TL bộ phận | COO | CEO |
| Khiếu nại của khách về CHẤT LƯỢNG | AM tiếp nhận, TL bộ phận xử lý nội dung | COO | CEO |
| Khiếu nại của khách về QUAN HỆ hoặc THƯƠNG MẠI | AM | TP Thương mại | CEO |
| Báo giá, phạm vi, chiết khấu, gia hạn | AM | TP Thương mại nếu trong khung | CEO |
| Công nợ, thanh toán của khách với oBacker | AM đối ngoại, `KTT` kế toán nội bộ đối nội | TP Thương mại | CEO |
| Nghiệp vụ chưa có chuẩn, tuân thủ, văn bản pháp luật mới | `TL-RD` | CEO | CEO |
| Việc pháp lý CÓ THU cho một khách: chất lượng và tiến độ | `TL-LS` | COO | CEO |
| Xung đột ưu tiên giữa Legal R&D và Bộ phận Dịch vụ pháp lý | `TL-LS` và `TL-RD` | COO với việc có mốc khách | CEO khi cần bổ sung nguồn lực |
| Tranh chấp hợp đồng dịch vụ CỦA OBACKER với khách | AM | `TL-RD` và CEO cùng lúc | CEO |
| Nghi ngờ hành vi trái pháp luật của khách | TL bộ phận, báo ngay | `TL-RD` và COO cùng lúc, theo Job RD-22 | CEO |
| Xung đột giữa AM và bộ phận dịch vụ | Theo mục 8.2.1 | Theo mục 8.2.1 | Theo mục 8.2.1 |

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> Bốn nhóm việc dưới đây thuộc CEO ở mọi tình huống, không cấp nào được quyết thay: nhận khách mới có yếu tố rủi ro; từ chối khách; chấm dứt hợp đồng dịch vụ trước hạn; và mọi việc thuộc hành vi oBacker nghiêm cấm nêu tại mục 9.

---

## 9. HÀNH VI OBACKER NGHIÊM CẤM

Chín việc dưới đây oBacker không làm, không có ngoại lệ, không có mức phí nào đổi được. Người được yêu cầu làm phải từ chối và báo CEO trong ngày.

1. Lập, ký hoặc nộp hồ sơ, chứng từ, tờ khai có nội dung mà oBacker biết là sai sự thật.
2. Hợp thức hóa chứng từ cho giao dịch không có thật, hoặc mua bán hóa đơn dưới bất kỳ hình thức nào.
3. Cam kết kết quả cấp phép, cam kết kết quả thanh tra, hoặc cam kết một kết luận của cơ quan nhà nước.
4. Chi tiền hoặc lợi ích ngoài quy định cho cán bộ cơ quan nhà nước, và tư vấn cho khách chi tiền như vậy.
5. Dùng tài khoản, chữ ký số hoặc chữ ký của người khác mà không có ủy quyền hợp lệ bằng văn bản.
6. Trả lời khách bằng nội dung chưa đối chiếu bản gốc hoặc chưa xác minh được khi nội dung đó có rủi ro bị xử phạt cho khách.
7. Tiết lộ dữ liệu của một khách hàng cho bất kỳ bên nào không có quyền, gồm cả khách hàng khác.
8. Chi tiền hoặc lợi ích cho người lao động, người quản lý của khách hàng hoặc khách hàng tiềm năng để người đó chọn hoặc giữ oBacker làm nhà cung cấp, kể cả khi thực hiện qua đối tác giới thiệu khách hàng [[CC-DN-74 Đưa hối lộ cho người có chức vụ trong doanh nghiệp, tổ chức ngoài Nhà nước|CC-DN-74]].
9. Cung cấp, tham gia, môi giới hoặc hỗ trợ dịch vụ người đứng tên hộ (Nominee) dưới bất kỳ hình thức nào, bao gồm đứng tên hộ chủ sở hữu, thành viên góp vốn, cổ đông, hoặc người đại diện theo pháp luật của doanh nghiệp tại Việt Nam. Toàn bộ các mã dịch vụ liên quan đến người đứng tên hộ (gồm `NOM-HOLD` và `NOM-SET`) bị hủy bỏ vĩnh viễn khỏi danh mục cung cấp của oBacker kể từ ngày 27/09/2026.

### 9.1. Căn cứ pháp lý và cảnh báo rủi ro về việc nghiêm cấm dịch vụ người đứng tên hộ (Nominee)

Dịch vụ người đứng tên hộ (Nominee) là hành vi thỏa thuận để một cá nhân hoặc tổ chức đứng tên trên hồ sơ đăng ký doanh nghiệp với tư cách là chủ sở hữu, thành viên góp vốn, cổ đông hoặc người đại diện theo pháp luật thay cho chủ sở hữu hoặc người điều hành thực tế nhằm che giấu danh tính, né tránh điều kiện đầu tư, trốn tránh nghĩa vụ thuế hoặc thực hiện các hành vi vi phạm pháp luật. oBacker xác lập cảnh báo pháp lý nghiêm ngặt và nghiêm cấm tuyệt đối việc cung cấp dịch vụ này dựa trên ba cơ sở pháp luật sau:

#### 1. Căn cứ Luật Doanh nghiệp số 59/2020/QH14 (được sửa đổi, bổ sung bởi Luật số 03/2022/QH15, Luật số 76/2025/QH15, văn bản hợp nhất 67/VBHN-VPQH năm 2025)
- **Hành vi bị nghiêm cấm theo Điều 16 khoản 4:** Khoản 4 Điều 16 Luật Doanh nghiệp nghiêm cấm hành vi: *"Kê khai giả mạo, kê khai không trung thực, kê khai không chính xác nội dung hồ sơ đăng ký doanh nghiệp và nội dung hồ sơ đăng ký thay đổi nội dung đăng ký doanh nghiệp"*. Việc thuê hoặc nhờ người khác đứng tên hộ là hành vi kê khai không trung thực về người thành lập, chủ sở hữu và người quản lý doanh nghiệp, dẫn đến việc Giấy chứng nhận đăng ký doanh nghiệp có thể bị thu hồi do thông tin kê khai là giả mạo theo quy định của pháp luật.
- **Nghĩa vụ và trách nhiệm cá nhân của Người đại diện theo pháp luật (Điều 13, Điều 14):** Người đại diện theo pháp luật có nghĩa vụ thực hiện quyền và nghĩa vụ được giao một cách trung thực, cẩn trọng, tốt nhất nhằm bảo đảm lợi ích hợp pháp của doanh nghiệp (Điều 13 khoản 1 điểm a); trung thành với lợi ích của doanh nghiệp, không lạm dụng địa vị để tư lợi cho cá nhân hoặc tổ chức khác (Điều 13 khoản 1 điểm b). Người đại diện theo pháp luật phải chịu trách nhiệm cá nhân theo quy định của pháp luật đối với các thiệt hại gây ra cho doanh nghiệp (Điều 13 khoản 2). Khi nhận đứng tên hộ, người đại diện theo pháp luật trên danh nghĩa phải ký các hợp đồng, chứng từ, tờ khai thuế và báo cáo tài chính; do đó, người này phải chịu trách nhiệm pháp lý trực tiếp và vô hạn trước cơ quan nhà nước và bên thứ ba đối với toàn bộ hoạt động của doanh nghiệp, kể cả khi không thực tế điều hành.
- **Trách nhiệm liên đới và vô hạn về vốn, thuế và các khoản nợ của chủ sở hữu và thành viên thật (Điều 47, Điều 75):** 
  + Đối với công ty TNHH hai thành viên trở lên, theo Điều 47 khoản 4: Các thành viên chưa góp vốn hoặc chưa góp đủ số vốn đã cam kết phải chịu trách nhiệm tương ứng với tỷ lệ phần vốn góp đã cam kết đối với các nghĩa vụ tài chính của công ty phát sinh trong thời gian trước ngày đăng ký thay đổi vốn.
  + Đối với công ty TNHH một thành viên, theo Điều 75 khoản 4: *"Chủ sở hữu công ty chịu trách nhiệm bằng toàn bộ tài sản của mình đối với các nghĩa vụ tài chính của công ty, thiệt hại xảy ra do không góp, không góp đủ, không góp đúng hạn vốn điều lệ theo quy định tại Điều này"*.
  + Chủ sở hữu hoặc nhà đầu tư thật sự không thể loại trừ trách nhiệm tài sản thông qua các "thỏa thuận đứng tên hộ" hoặc "hợp đồng ủy quyền ngầm". Theo Điều 124 Bộ luật Dân sự 2015, các giao dịch dân sự được xác lập giả tạo nhằm che giấu một giao dịch dân sự khác đều bị vô hiệu. Do đó, chủ sở hữu thật vẫn phải liên đới chịu trách nhiệm vô hạn bằng toàn bộ tài sản của mình đối với các khoản nợ, nghĩa vụ thuế và nghĩa vụ tài chính phát sinh của doanh nghiệp.

#### 2. Căn cứ Luật Phòng, chống rửa tiền số 14/2022/QH15 và Nghị định số 19/2023/NĐ-CP
- **Hành vi bị nghiêm cấm theo Điều 8:** Điều 8 khoản 1 và khoản 2 nghiêm cấm hành vi tổ chức, tham gia hoặc tạo điều kiện, trợ giúp thực hiện hành vi rửa tiền; thiết lập, duy trì tài khoản vô danh hoặc tài khoản sử dụng tên giả. Việc thiết lập pháp nhân hoặc tài khoản ngân hàng thông qua người đứng tên hộ để che giấu nguồn tiền hoặc che giấu chủ thể chi phối là hành vi cấu thành vi phạm pháp luật phòng, chống rửa tiền.
- **Nghĩa vụ nhận biết khách hàng (KYC) theo Điều 9:** Theo Điều 9 khoản 3 điểm đ Luật số 14/2022/QH15, tổ chức, cá nhân khi cung cấp dịch vụ thành lập, quản lý, điều hành doanh nghiệp, cung cấp dịch vụ giám đốc, thư ký công ty cho bên thứ ba bắt buộc phải thực hiện thủ tục nhận biết khách hàng và thu thập thông tin nhận dạng đầy đủ của các bên.
- **Xác định Chủ sở hữu hưởng lợi (UBO) theo Điều 21, Điều 22 và Nghị định số 19/2023/NĐ-CP Điều 7:**
  + Theo Điều 21 khoản 2 và Điều 22 khoản 1 Luật số 14/2022/QH15, pháp nhân và bên nhận ủy thác trong thỏa thuận pháp lý có trách nhiệm thu thập, cập nhật và lưu trữ thông tin về chủ sở hữu hưởng lợi.
  + Theo Điều 7 khoản 2 điểm a Nghị định số 19/2023/NĐ-CP, Chủ sở hữu hưởng lợi (UBO - Ultimate Beneficial Owner) đối với khách hàng là tổ chức được xác định là: *"cá nhân thực tế nắm giữ trực tiếp hoặc gián tiếp từ 25% vốn điều lệ trở lên của tổ chức đó hoặc cá nhân cuối cùng có quyền chi phối đối với khách hàng là tổ chức"*.
  + Hành vi sử dụng người đứng tên hộ nhằm che giấu danh tính của cá nhân nắm giữ từ 25% vốn điều lệ hoặc cá nhân có quyền chi phối thực tế (UBO) là thủ đoạn vi phạm pháp luật nghiêm trọng, thuộc diện giám sát đặc biệt và điều tra trọng điểm của Cục Phòng, chống rửa tiền (Ngân hàng Nhà nước) và Cơ quan Cảnh sát điều tra.

#### 3. Căn cứ Bộ luật Hình sự số 100/2015/QH13 (được sửa đổi, bổ sung bởi Luật số 12/2017/QH14, văn bản hợp nhất 135/VBHN-VPQH)
- **Tội trốn thuế (Điều 200 Bộ luật Hình sự):** Trường hợp sử dụng người đứng tên hộ để thành lập doanh nghiệp nhằm che giấu doanh thu, trốn tránh nghĩa vụ nộp thuế, mua bán sử dụng hóa đơn bất hợp pháp với số tiền trốn thuế từ 100.000.000 đồng trở lên, cá nhân vi phạm bị phạt tiền từ 100.000.000 đồng đến 4.500.000.000 đồng hoặc phạt tù từ 03 tháng đến 07 năm; pháp nhân thương mại bị phạt tiền từ 300.000.000 đồng đến 10.000.000.000 đồng hoặc đình chỉ hoạt động vĩnh viễn. Trong vụ án trốn thuế, cả người nhờ đứng tên (vai trò chủ mưu, tổ chức) và người nhận đứng tên (vai trò thực hành, giúp sức) đều bị truy cứu trách nhiệm hình sự với tư cách đồng phạm.
- **Tội rửa tiền (Điều 324 Bộ luật Hình sự):** Cá nhân hoặc tổ chức tham gia trực tiếp hoặc gián tiếp vào giao dịch tài chính, ngân hàng nhằm hợp thức hóa nguồn gốc tiền, tài sản do phạm tội mà có thông qua doanh nghiệp đứng tên hộ bị phạt tù từ 01 năm đến 15 năm, bị tịch thu một phần hoặc toàn bộ tài sản, phạt tiền đến 50.000.000 đồng đối với cá nhân; pháp nhân thương mại bị phạt tiền từ 1.000.000.000 đồng đến 20.000.000.000 đồng hoặc đình chỉ hoạt động vĩnh viễn.
- **Tội trốn đóng bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp cho người lao động (Điều 216 Bộ luật Hình sự):** Đứng tên người đại diện theo pháp luật hoặc chủ sở hữu doanh nghiệp nhưng gian dối, trốn tránh nghĩa vụ đóng bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp cho người lao động từ 06 tháng trở lên bị phạt tiền từ 50.000.000 đồng đến 1.000.000.000 đồng hoặc phạt tù từ 03 tháng đến 07 năm đối với cá nhân; pháp nhân thương mại bị phạt tiền đến 3.000.000.000 đồng.

#### 4. Quyết định của Tổng Giám đốc về danh mục dịch vụ
Kể từ ngày 27/09/2026, oBacker chính thức thu hồi và bãi bỏ toàn bộ các gói dịch vụ và mã sản phẩm liên quan đến việc đứng tên hộ, bao gồm hai mã dịch vụ `NOM-HOLD` (Dịch vụ người đứng Nominee CSH và Legal Rep) và `NOM-SET` (Dịch vụ Nominee Set). Mọi nhân sự của oBacker không được tiếp nhận yêu cầu, không được tư vấn hoặc hỗ trợ khách hàng tìm kiếm người đứng tên hộ dưới bất kỳ hình thức nào. Khi phát hiện khách hàng có yêu cầu hoặc dấu hiệu sử dụng người đứng tên hộ để che giấu chủ sở hữu hưởng lợi, nhân sự phải từ chối ngay lập tức và báo cáo Tổng Giám đốc trong ngày làm việc.

---

## 10. QUY ƯỚC GHI CĂN CỨ VÀ QUY ƯỚC TRÌNH BÀY

### 10.1. Mức chắc chắn của căn cứ pháp luật

Tài liệu phát hành chỉ chứa nội dung đã đối chiếu toàn văn bản gốc trong kho `05_PhapLuat/` hoặc trên nguồn chính thống. Căn cứ nào chưa đạt mức đó thì phải ghi rõ ngay tại chỗ dùng căn cứ đó.

| Cách ghi trong tài liệu | Nghĩa | Được dùng làm gì |
| --- | --- | --- |
| Chỉ ghi số điều khoản | Đã đối chiếu toàn văn bản gốc | Dùng được ngay, kể cả trả lời khách và lập memo |
| Ghi thêm "chưa đối chiếu bản gốc" | Lấy từ nguồn thứ cấp đáng tin nhưng chưa đọc toàn văn | Chỉ dùng để lập kế hoạch nội bộ. Không dùng để cam kết với khách hoặc để hành động có rủi ro bị xử phạt |
| Ghi thêm "chưa xác minh được" | Chưa tra được bản gốc | Không được dùng để trả lời khách dưới mọi hình thức. Phải tra và đối chiếu bản gốc trước |

### 10.2. Con số quản trị và giả thiết làm việc

Con số quản trị là con số oBacker tự chọn, không phải mốc do pháp luật đặt. Sai thì chỉ là chọn chưa phù hợp nhất. Toàn bộ con số quản trị của bộ tài liệu này đã được người có thẩm quyền quyết, và giá trị đã quyết nằm tại chính điều khoản đặt ra con số đó.

Giả thiết làm việc là câu trả lời TẠM cho một tình trạng pháp lý hoặc thực tế mà oBacker chưa xác nhận được. Sai thì phải sửa tài liệu theo nhánh thay thế. Tài liệu trong kho này chỉ ghi kết luận hiện hành.

Phân biệt cốt lõi: con số quản trị là việc oBacker CHỌN; giả thiết là việc oBacker chưa BIẾT.

### 10.3. Bốn loại cảnh báo

> [!danger] RỦI RO BỊ XỬ PHẠT
> Làm sai ở mục này dẫn tới tiền phạt hoặc tiền chậm nộp cho khách hoặc cho oBacker.

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> CV không có quyền quyết, phải chuyển TL; vượt thẩm quyền TL thì chuyển COO. AM không có quyền quyết về nội dung chuyên môn, phải chuyển TL; không có quyền quyết về giá và phạm vi, phải chuyển CEO. Việc thuộc hành vi oBacker nghiêm cấm thì chuyển CEO.

> [!question] CẦN XÁC MINH
> Nội dung chưa chắc chắn, phải tra bản gốc trước khi dùng.

> [!bug] LỖI THƯỜNG GẶP
> Lỗi hay xảy ra trong thực tế, kèm dấu hiệu nhận biết và cách xử lý.

### 10.4. Quy ước khác

**Placeholder công cụ.** Tài liệu viết độc lập với phần mềm. Chỗ cần thao tác trên hệ thống ghi placeholder trong ngoặc vuông: `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`, `[KHO LƯU TRỮ HỒ SƠ]`, `[HỆ THỐNG CHAT KHÁCH HÀNG]`, `[PHẦN MỀM KẾ TOÁN]`, `[CỔNG DỊCH VỤ CÔNG]`. Đổi phần mềm thì chỉ sửa hướng dẫn cấp 3, không sửa lại toàn bộ tài liệu.

**Trích dẫn pháp lý.** Dạng `<số hiệu> Đ.<điều> k.<khoản> đ.<điểm>`. Văn bản hợp nhất ghi theo số hiệu VBHN KÈM NĂM, vì số hiệu VBHN được đánh lại mỗi năm. Ví dụ `67/VBHN-VPQH năm 2025` là Luật Doanh nghiệp, còn `67/VBHN-VPQH năm 2026` là Luật Sở hữu trí tuệ. Bỏ năm là trích sai văn bản.

**Không dùng em dash và en dash.** Dùng dấu chấm phẩy, hai chấm, hoặc gạch nối.

---

## 11. CHỈ SỐ ĐO LƯỜNG DÙNG CHUNG

Nguyên tắc: mọi chỉ số phải lấy được số liệu từ `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]` hoặc từ hồ sơ lưu trữ, không dựa vào cảm nhận. Chỉ số nào không có nguồn dữ liệu thì không đưa vào bảng.

### 11.1. Chỉ số bắt buộc của mọi bộ phận Delivery

| Mã | Chỉ số | Công thức | Mục tiêu | Nguồn, tần suất |
| --- | --- | --- | --- | --- |
| CS-01 | Tỷ lệ đúng hạn pháp định, thuần | (Số Job đúng hạn + Số Job trễ do lỗi khách đã có bằng chứng nhắc đủ) chia Tổng số Job đến hạn | 100% | Hệ thống công việc, hằng tháng |
| CS-02 | Tỷ lệ đúng hạn pháp định, gộp | Số Job đúng hạn chia Tổng số Job đến hạn | ≥ 98% | Hệ thống công việc, hằng tháng |
| CS-03 | Tiền phạt phát sinh do lỗi chủ quan | Tổng tiền phạt oBacker phải chịu thay khách trong kỳ | 0 đồng | Kế toán nội bộ, hằng tháng |
| CS-04 | Tỷ lệ đúng ngay lần đầu | Số đầu ra được duyệt lần đầu chia Tổng đầu ra | Từ 80% | Hệ thống công việc, hằng tháng |
| CS-05 | Số lỗi đầu ra mức Nghiêm trọng lọt ra ngoài | Đếm | 0 | Hệ thống công việc, hằng tháng |
| CS-06 | Tỷ lệ tuân thủ SLA nội bộ với AM | Số lần đáp ứng đúng hạn chia Tổng số lần AM yêu cầu | Từ 80% | Hệ thống công việc, hằng tháng |
| CS-07 | Tỷ lệ liên lạc với khách đi qua AM | 100% trừ số lần bộ phận liên hệ thẳng khách | 100% | Rà soát ngẫu nhiên, hằng tháng |
| CS-08 | Tỷ lệ Job có khoảng làm trước đạt chuẩn NT-6 | Số Job hoàn tất đủ khoảng làm trước chia Tổng số Job nộp cơ quan nhà nước | ≥ 95% | Hệ thống công việc, hằng tháng |

### 11.1a. Khi một chỉ số chung không áp dụng cho một đơn vị

Tám chỉ số tại mục 11.1 viết cho bộ phận DELIVERY, tức bộ phận có khách và có thời hạn theo pháp luật. Hai đơn vị mới của bộ không đủ điều kiện đó cho mọi chỉ số, nên phải có quy tắc, nếu không sẽ có người đi tìm số liệu không tồn tại rồi báo là trượt chỉ tiêu.

**Quy tắc, ba câu.**

1. Chỉ số không áp dụng cho một đơn vị thì SOP cấp 2 của đơn vị đó phải GHI RA là không áp, kèm lý do bằng một câu. Bỏ trống không có nghĩa là không áp.
2. Lý do phải là lý do về BẢN CHẤT, ví dụ đơn vị không có Job nào mang thời hạn theo pháp luật. Lý do về khối lượng hay về khó đo thì không được nhận.
3. `COO` với đơn vị thuộc Phòng Dịch vụ, và `CEO` với đơn vị thuộc nhánh khác, duyệt danh sách chỉ số không áp mỗi lần rà soát định kỳ.

| Đơn vị | Chỉ số KHÔNG áp | Lý do |
| --- | --- | --- |
| Bộ phận Dịch vụ pháp lý | `CS-01`, `CS-02` | Bộ phận không có Job nào mang thời hạn theo pháp luật, tức hạn mà trễ thì khách bị phạt.<br>`CS-08` VẪN ÁP, nhưng chỉ cho Job `LS-17`, vì Job đó có một hạn do cơ quan nhà nước ghi trên văn bản và có mốc làm trước theo NT-6.<br>Các Job còn lại của bộ phận ghi Không áp dụng ở `CS-08` |
| Legal R&D Team | `CS-01`, `CS-02`, `CS-03`, `CS-06`, `CS-07`, `CS-08` | Đơn vị không có khách, không có thời hạn theo pháp luật, và không nằm trong chuỗi cam kết với `AM`.<br>Chỉ còn `CS-04` và `CS-05` áp được |

### 11.2. Định nghĩa lỗi, hai biên đo, và ba mức

**Hai biên đo, không được lẫn.** Một lỗi đi qua tối đa hai biên, và mỗi biên trả lời một câu hỏi khác nhau:

| Biên | Lỗi vượt qua biên này khi | Câu hỏi biên này trả lời |
| --- | --- | --- |
| Biên 1, rời tay người làm | Người thực hiện đã chuyển đầu ra sang lớp hai theo NT-5 | Người làm có làm đúng ngay lần đầu hay không |
| Biên 2, ra ngoài oBacker | Đầu ra đã gửi khách, hoặc đã nộp cơ quan nhà nước | Hệ thống kiểm soát có chặn được lỗi hay không |

**Lỗi đầu ra** là mọi sai hoặc thiếu trong sản phẩm của một bộ phận bị phát hiện SAU khi đã vượt BIÊN 1, bất kể ai phát hiện: khách hàng, AM, Team Lead, hay chính người làm phát hiện lại. Không cần chờ cơ quan nhà nước yêu cầu sửa đổi bổ sung mới tính là lỗi đầu ra.

**Lỗi lọt ra ngoài** là lỗi đầu ra đã vượt cả BIÊN 2. Mọi lỗi lọt ra ngoài đều là lỗi đầu ra; ngược lại thì không phải.

Sai hoặc thiếu còn nằm trên tài liệu nội bộ, chưa vượt biên 1, thì không phải lỗi đầu ra. Loại sai đó vẫn phải ghi nhận theo mục 11.2a, nhưng không vào chỉ số `CS-04` và không vào `CS-05`.

**Ba mức, phân theo BẢN CHẤT của cái sai, không phân theo việc lỗi đã vượt biên nào:**

| Mức | Định nghĩa |
| --- | --- |
| **Nghiêm trọng** | Sai thông tin pháp lý;<br>sai chủ thể;<br>sai căn cứ pháp luật;<br>nộp sai cơ quan;<br>sai số liệu dẫn tới sai nghĩa vụ thuế hoặc nghĩa vụ đóng;<br>trễ thời hạn theo pháp luật |
| **Đáng kể** | Thiếu tài liệu;<br>sai hướng dẫn ký;<br>thiếu chữ ký cần thiết;<br>sai số liệu không ảnh hưởng nghĩa vụ;<br>trễ SLA dịch vụ |
| **Nhỏ** | Sai chính tả;<br>sai tên tệp;<br>sai định dạng;<br>thiếu đường dẫn |

Ba mức trên là thang duy nhất dùng để báo cáo lên công ty. Bộ phận được chia nhỏ ba mức đó theo mục 11.2c.

### 11.2a. Ghi nhận lỗi, dùng chung

1. Mọi lỗi phát hiện được đều phải ghi vào sổ ghi nhận lỗi dùng chung trên `[HỆ THỐNG QUẢN LÝ CÔNG VIỆC]`, kể cả lỗi mức Nhỏ đã sửa xong ngay. Lỗi đầu ra còn phải ghi vào Job để đếm được.
2. Người phát hiện ghi nhận, không phải người mắc lỗi ghi nhận. Quy tắc đó tránh việc lỗi bị bỏ qua vì ngại.
3. Khi người mắc lỗi tự phát hiện lỗi của chính mình thì người đó tự ghi nhận, ở mọi cấp, kể cả Team Lead, `COO` và `CEO`. Đây là trường hợp được ghi nhận tích cực.
4. Cột nguyên nhân gốc không được ghi "bất cẩn" hoặc "sơ suất". Phải ghi nguyên nhân tác động được: thiếu thông tin, quy trình chưa có bước kiểm, bảng kiểm chưa bao phủ, chưa được đào tạo về nội dung đó, khối lượng công việc vượt năng lực, dữ liệu đầu vào từ khách không đủ.
5. Bốn trường bắt buộc của mọi bản ghi: mức theo mục 11.2, lỗi đã vượt biên nào, nguyên nhân gốc, biện pháp phòng ngừa tái diễn. Bộ phận đặt thêm trường riêng ở SOP cấp 2 hoặc hướng dẫn cấp 3 của bộ phận.

### 11.2b. Thời hạn khắc phục và quyền đóng lỗi, dùng chung

**Thời hạn khắc phục, tính từ khi phát hiện:**

| Mức | Thời hạn |
| --- | --- |
| Nghiêm trọng | Phương án khắc phục trong 24 giờ;<br>hoàn thành theo mốc ghi trong phương án, và mốc đó do người có quyền đóng lỗi duyệt |
| Đáng kể | Tối đa 05 ngày làm việc |
| Nhỏ | Tối đa 10 ngày làm việc |

**Quyền đóng lỗi:**

| Mức và tình huống | Ai được đóng |
| --- | --- |
| Nghiêm trọng, đã lọt ra ngoài | `COO`, sau khi `CEO` đã nhận báo cáo kết quả khắc phục |
| Nghiêm trọng, chưa lọt ra ngoài | Team Lead;<br>`COO` khi người mắc lỗi là chính Team Lead đó |
| Đáng kể | Team Lead;<br>`COO` khi người mắc lỗi là chính Team Lead đó, và `COO` khi lỗi là lỗi quy trình có nguy cơ dẫn tới lỗi mức Nghiêm trọng |
| Nhỏ | Team Lead;<br>hoặc chính người mắc lỗi khi sai chỉ nằm trên tài liệu nội bộ |

**Năm quy tắc đóng lỗi:**

1. Chỉ được đóng lỗi khi cả ba điều kiện đã hoàn tất: đã khắc phục hậu quả, đã xác định nguyên nhân gốc, đã có biện pháp phòng ngừa tái diễn được ghi rõ.
2. Người đóng lỗi không được là người mắc lỗi. Không có ngoại lệ. Đây là hệ quả trực tiếp của ngoại lệ tại NT-5: phần việc Team Lead tự làm không có ai soát chéo, nên Team Lead cũng không được tự đóng lỗi của mình.
3. Lỗi quá hạn khắc phục mà chưa đóng được thì tự động chuyển lên một cấp người xử lý sau mỗi 05 ngày làm việc.
4. Lỗi cùng loại xuất hiện lần thứ ba trong 06 tháng ở cùng một người hoặc cùng một khách hàng thì nâng lên một mức, và biện pháp khắc phục phải ở cấp quy trình chứ không ở cấp cá nhân.
5. Bộ phận được đặt thời hạn NGẮN HƠN bảng trên, và được đòi cấp đóng lỗi CAO HƠN bảng trên. Bộ phận không được đặt thời hạn dài hơn; cũng không được hạ cấp đóng lỗi.

### 11.2c. Thang chi tiết của bộ phận, và bảng ánh xạ bắt buộc

Bộ phận được chia nhỏ ba mức tại mục 11.2 thành thang chi tiết hơn để quản trị nội bộ, với ba điều kiện:

1. SOP cấp 2 hoặc hướng dẫn cấp 3 của bộ phận phải có bảng ánh xạ từng bậc của thang chi tiết về ĐÚNG MỘT trong ba mức. Một bậc ánh xạ về hai mức là lỗi, phải chia bậc đó thành hai bậc.
2. Số liệu báo cáo lên công ty ghi theo ba mức. Thang chi tiết chỉ dùng trong nội bộ bộ phận.
3. Thang chi tiết phải nghiêm hơn hoặc bằng bảng tại mục 11.2b, theo quy tắc 5 của mục đó.

Thang chi tiết đang có: bộ phận Kế toán và Thuế dùng ba nhóm A, B, C nhân bảy mức, đặt tại [[18_Kiem_soat_chat_luong|OBK-SOP-18]] mục 6.6, có sẵn cột ánh xạ về ba mức. Bốn bộ phận còn lại chưa có thang chi tiết nên dùng thẳng ba mức tại mục 11.2.

### 11.3. Chỉ số riêng của AM và Sales

Nằm tại [[02_OBK-SOP-AM_Quan_ly_khach_hang|OBK-SOP-AM]] mục 9, không lặp lại ở đây.

---

## 12. QUẢN LÝ THAY ĐỔI VÀ RÀ SOÁT

### 12.1. Ai được sửa cái gì

> [!warning] KHÔNG ĐƯỢC TỰ QUYẾT
> Mục này nói về việc SỬA một tài liệu ĐÃ BAN HÀNH, không nói về việc ban hành lần đầu. Ban hành lần đầu cả sáu SOP cấp 2 và cả Handbook Kế toán là `CEO`, xem mục 2. Uỷ quyền tại bảng dưới đây là để `CEO` không phải duyệt từng lần sửa; đọc lẫn hai việc này thì hoặc chặn mọi lần sửa, hoặc cho sửa vượt thẩm quyền.

| Nội dung | Người đề xuất | Người duyệt |
| --- | --- | --- |
| OBK-SOP-00 | Bất kỳ ai | CEO |
| SOP cấp 2 của bốn bộ phận thuộc Phòng Dịch vụ, gồm [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]], [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]], [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]], [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] | TL bộ phận | COO. Legal R&D soát phần pháp lý trước |
| [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] | `TL-RD` | **CEO**, vì Legal R&D Team thuộc nhánh CEO |
| [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] | AM | **CEO**, vì nhánh thương mại thuộc CEO |
| Hướng dẫn cấp 3 | CV hoặc TL | TL bộ phận |
| `PL_1_Can_cu_phap_ly.md` và sổ căn cứ [[OBK-CC]] | Bất kỳ ai phát hiện | **`TL-RD`. Đây là tài liệu do Legal R&D sở hữu duy nhất.** Sổ căn cứ là bản sinh tự động; sửa dữ liệu nguồn rồi sinh lại |
| `PL_2_Bang_tra_SLA.md` | Không ai sửa trực tiếp | Bản sinh tự động; sửa ở SOP cấp 2 rồi sinh lại |
| Handbook Kế toán, hướng dẫn cấp 3 của mảng kế toán và thuế | `TL-KT` | **COO** về quản lý phiên bản và phát hành. Legal R&D soát phần nội dung pháp lý trước |
| Nội dung pháp lý, chuẩn chuyên môn và quy trình cập nhật văn bản trong mọi tài liệu của bộ | Bất kỳ ai phát hiện | **`TL-RD`**, theo Job RD-17 |
| Quản lý phiên bản và phát hành cả bộ | COO | COO |

### 12.2. Rà soát định kỳ

Tối thiểu 6 tháng một lần, hoặc ngay khi có văn bản pháp luật mới ảnh hưởng tới một Job. LEG chủ trì, COO chốt. Mỗi lần rà soát phải đối chiếu toàn bộ danh mục quy trình với các văn bản pháp luật hiện hành.

> [!bug] LỖI THƯỜNG GẶP
> Giả thiết được để trạng thái GIỮ qua hai lần rà soát liên tiếp mà không ai xác minh là dấu hiệu không ai chịu trách nhiệm xác minh giả thiết đó. Quá hai lần thì LEG báo CEO. Giả thiết nào có hậu quả không tự lộ ra thì phải đặt hạn chót cứng.

### 12.3. Quy trình cập nhật khi có văn bản pháp luật mới

Mỗi bước dưới đây gắn với một Job của [[07_OBK-SOP-RD_Nghien_cuu_phap_ly|OBK-SOP-RD]] hoặc của SOP bộ phận. Mốc của từng Job nằm ở bảng Job tương ứng, mục này không đặt lại con số.

| Bước | Việc | Ai làm | Job giữ việc |
| --- | --- | --- | --- |
| 1 | Báo Legal R&D trong ngày, kèm số hiệu văn bản và nguồn | Người phát hiện | `RD-01` |
| 2 | Nhập bản gốc vào kho `05_PhapLuat/` theo quy trình nhập kho | `CV-RD` | `RD-02` |
| 3 | Xác minh hiệu lực bằng cách đọc điều khoản thi hành của văn bản MỚI HƠN, không lấy từ trí nhớ và không lấy từ nguồn thứ cấp | `TL-RD` | `RD-03` |
| 4 | Phân mức ưu tiên theo mục 12.3a | `TL-RD` | `RD-04` |
| 5 | Lập bản đánh giá tác động, ra danh sách Job và danh sách khách bị ảnh hưởng | `TL-RD` | `RD-05` |
| 6 | Cập nhật sổ căn cứ và bảng tác động ngược | `CV-RD` | `RD-06` |
| 7 | Họp thống nhất cách hiểu và cách áp dụng. BƯỚC BẮT BUỘC, không được bỏ | `TL-RD` chủ trì, `TL` bộ phận và `COO` dự | `RD-08` |
| 8 | Bàn giao yêu cầu sửa cho `TL` bộ phận và theo dõi tới khi đóng | `TL-RD` | `RD-07` |
| 9 | Cập nhật bảng Job trong SOP cấp 2 và hướng dẫn cấp 3 của bộ phận mình | `TL` bộ phận | `KT-25` với Kế toán và Thuế, `LD-24` với Lao động và Tiền lương, `LS-21` với Dịch vụ pháp lý.<br>**Bộ phận Giấy phép chưa có Job tương đương**, nên `RD-07` mở một Job rời cho bộ phận đó và ghi lý do; việc bổ sung Job cho Licensing do Trưởng bộ phận Giấy phép đề xuất và CEO phê duyệt |
| 10 | Sinh lại bảng tra SLA, rồi kiểm tính nhất quán của cả bộ tài liệu.<br>Phải 0 LỖI PHẢI SỬA | `COO` | Thuộc bước 9 |
| 11 | Thông báo khách bị ảnh hưởng, nếu thay đổi làm đổi nghĩa vụ hoặc mốc thời gian của khách | `AM` | `AM-15` |

> [!bug] LỖI THƯỜNG GẶP
> Bàn giao tác động rồi coi như xong. Bước 8 chỉ đóng khi `TL` bộ phận đóng Job sửa ở bước 9. Chuyển lên cấp trên và bàn giao là để gọi thêm người, không phải để chuyển vấn đề đi, theo NT-7.

#### 12.3a. Bốn mức ưu tiên của văn bản pháp luật mới

> [!note] ĐÂY LÀ BẢN GỐC
> Trước 07/09/2026, bốn mức ưu tiên và ba mốc 05, 10, 20 ngày làm việc đặt tại [[21_Cap_nhat_van_ban_phap_luat|OBK-SOP-21]] mục 6.2.3, tức trong hướng dẫn cấp 3 của một bộ phận. Nhưng bảng này điều khiển mốc của Legal R&D và của cả bốn bộ phận, nên bảng này thuộc cấp 1. Đã chuyển lên đây ngày 07/09/2026; mục 6.2.3 của Handbook nay chỉ dẫn chiếu.

| Mức | Tiêu chí | Mốc hoàn thành đánh giá tác động | Mốc cập nhật tài liệu của bộ phận |
| --- | --- | --- | --- |
| Ưu tiên 1 | Thay thế một văn bản nền;<br>đổi kỳ khai;<br>đổi thời hạn;<br>đổi thuế suất hoặc mức đóng;<br>bãi bỏ hoặc thêm một nghĩa vụ;<br>đổi mẫu biểu bắt buộc;<br>hoặc có hiệu lực trong vòng 60 ngày tới | 05 ngày làm việc | 10 ngày làm việc |
| Ưu tiên 2 | Sửa nội dung nghiệp vụ áp cho nhiều khách;<br>đổi điều kiện hồ sơ;<br>đổi mức khống chế | 10 ngày làm việc | 20 ngày làm việc |
| Ưu tiên 3 | Thay đổi áp cho một nhóm khách hẹp hoặc một nghiệp vụ ít gặp | 20 ngày làm việc | Gộp vào bản cập nhật quý |
| Ưu tiên 4 | Không ảnh hưởng khách hiện tại nhưng cần ghi nhận để theo dõi | Ghi nhận vào sổ theo dõi | Gộp vào bản rà soát năm |

Mốc đếm từ ngày ghi nhận tại `RD-01`. Với văn bản mức ưu tiên 1 mà ngày hiệu lực đến trước mốc của bảng này thì lấy mốc nào đến trước và ghi lý do trên Job, theo quy tắc nhiều mốc tại [[07_OBK-SOP-RD_Nghien_cuu_phap_ly|OBK-SOP-RD]] mục 2.

> [!danger] RỦI RO BỊ XỬ PHẠT
> Tính tới 02/09/2026 đang có bốn thay đổi lớn mà tài liệu cũ của các bộ phận chưa cập nhật, trong đó ba cái đã có hiệu lực và một cái có hiệu lực sau 8 ngày. Danh sách và tác động được cập nhật tại Sổ căn cứ [[OBK-CC]].

---

## 13. MỤC LỤC BỘ TÀI LIỆU

| Tệp | Nội dung | Ai đọc |
| --- | --- | --- |
| `00_README_Cach_dung.md` | Cách dùng bộ tài liệu, đọc trước | Mọi người, một lần khi mới vào |
| `01_OBK-SOP-00_Chuan_van_hanh_dich_vu.md` | Tài liệu này, cấp 1 | Mọi người, một lần khi mới vào;<br>đọc lại khi gặp tình huống khó xử |
| `02_OBK-SOP-AM_Quan_ly_khach_hang.md` | SOP cấp 2, khối AM | AM và CEO;<br>TL các bộ phận đọc mục 5 và 6 |
| `03_OBK-SOP-KT_Ke_toan_va_thue.md` | SOP cấp 2, Kế toán | CV-KT, TL-KT, AM |
| `04_OBK-SOP-LIC_Giay_phep.md` | SOP cấp 2, Licensing | CV-LIC, TL-LIC, AM |
| `05_OBK-SOP-LD_Lao_dong_va_tien_luong.md` | SOP cấp 2, Lao Động | CV-LD, TL-LD, AM |
| `06_OBK-SOP-LS_Dich_vu_phap_ly.md` | SOP cấp 2, Dịch vụ pháp lý | CV-LS, TL-LS, AM |
| `07_OBK-SOP-RD_Nghien_cuu_phap_ly.md` | SOP cấp 2, Legal R&D | CV-RD, TL-RD;<br>TL bốn bộ phận đọc mục 2 nhóm C |
| `PL_1_Can_cu_phap_ly.md` | Toàn bộ căn cứ pháp lý của cả bộ, bản duy nhất | Mọi người khi cần trích dẫn;<br>LEG sở hữu |
| `PL_2_Bang_tra_SLA.md` | Bảng tra SLA gộp bốn bộ phận, bản sinh tự động | Mọi người khi cần tra nhanh |
| `PL_3_Ban_do_lien_ket_va_chuyen_tang.md` | Nội dung nào đặt ở đâu, dẫn chiếu ở đâu;<br>bảng chuyển cấp Handbook Kế toán | COO, LEG và TL khi sửa tài liệu;<br>TL-LIC và TL-LD khi dựng cấp 3 |

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.3.0.0 | Bổ sung điều cấm số 9 về dịch vụ người đứng tên hộ Nominee và mục phân tích cảnh báo pháp lý |
