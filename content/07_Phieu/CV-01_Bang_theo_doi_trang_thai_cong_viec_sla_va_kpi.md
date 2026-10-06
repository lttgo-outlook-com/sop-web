---
title: "BẢNG CV-01. THEO DÕI TRẠNG THÁI CÔNG VIỆC, TASKS, SLA VÀ KPI"
code: "CV-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.1.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - CV-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# BẢNG CV-01. THEO DÕI TRẠNG THÁI CÔNG VIỆC, TASKS, SLA VÀ KPI

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | CV-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | CV-01 |
| **Màu** | CAM, theo dõi tiến độ công việc, cam kết dịch vụ (SLA) và hiệu suất nhân sự (KPI) |
| **Ai dùng** | Người thực hiện (`Assignee`: `CV-LIC`, `KTV`, `CV-LD`, `CV-LS`, `CV-RD`, `AD-KT`), Người kiểm soát lớp hai (`Reviewer`: `TL-LIC`, `TL-KT`, `TL-LD`, `TL-LS`, `TL-RD`), Chuyên viên Quản lý khách hàng (`AM`), Giám đốc điều hành (`COO`) và Giám đốc điều hành cấp cao (`CEO`) |
| **Sinh từ** | [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] Bảng tra cứu 203 Job toàn công ty;<br>[[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] Chuẩn vận hành dịch vụ;<br>[[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]] Khung đánh giá hiệu suất (và các phụ lục [[08_PL_A_Thang_cham_tieu_chi_chung\|PL-A]], [[08_PL_B_Tieu_chi_cong_viec_dang_ho_so\|PL-B]], [[08_PL_E_Phieu_vi_tri\|PL-E]]);<br>[[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu\|TL-02]] Phiếu yêu cầu và biên bản bàn giao tài liệu |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Bảng theo dõi trạng thái công việc, tasks, SLA và KPI được áp dụng bắt buộc cho 100% nhiệm vụ công việc (`Task` / `Work Package`) phát sinh từ các hợp đồng dịch vụ ký với khách hàng hoặc các kế hoạch công việc nội bộ tại oBacker.

Bảng bao phủ toàn bộ 203 mã Job thuộc 07 bộ phận đã được chuẩn hóa tại OBK-SOP-PL2, liên kết trực tiếp với các dòng dịch vụ trong Danh mục dịch vụ và Bảng giá OBK-DM-00 đến OBK-DM-07, cùng các quy trình nội bộ từ `OBK-SOP-NB-01` đến `OBK-SOP-NB-14`.

Bảng là công cụ duy nhất để kiểm soát mốc tiếp nhận yêu cầu T1 (trong thời hạn tối đa 02 giờ làm việc), thời hạn cam kết hoàn thành T2 (SLA), mốc làm trước tối thiểu theo nguyên tắc NT-6, cơ chế tạm dừng đồng hồ tính thời gian cam kết dịch vụ khi khách hàng chậm nộp hồ sơ theo TL-02, kiểm soát chất lượng hai lớp độc lập (NT-5), ghi nhận sai sót và tính toán các chỉ số hiệu suất cá nhân (`HS-01`, `HS-02`, tỷ lệ hoàn thành đúng hạn `OTD %`).

## KHUÔN BẢNG THEO DÕI TRẠNG THÁI CÔNG VIỆC, TASKS, SLA VÀ KPI

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã công việc (`Task ID` / `Work Package ID`) | Mã định danh số duy nhất của nhiệm vụ trên hệ thống quản lý công việc (ví dụ: `WP-10425`) |
| 2 | Mã Job nghiệp vụ chuẩn | Khớp chính xác với 203 mã Job tại [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] (ví dụ: `LIC-02`, `KT-04`, `LD-05`, `LS-03`, `AM-09`, `RD-05`, `NB-33`...) |
| 3 | Mã dịch vụ danh mục liên kết | Mã dịch vụ chuẩn theo [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] đến [[07_Bang_gia_Dich_vu_o_nuoc_ngoai\|OBK-DM-07]] (ví dụ: `KT-GOI-01`, `CKS-TOKEN-01`, `GP-DKKD-01`...) |
| 4 | Quy trình SOP áp dụng | Dẫn chiếu quy trình nghiệp vụ cấp 2: [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]], [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]], [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]], [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]], [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]], [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]], hoặc quy trình nội bộ `OBK-SOP-NB-01` đến `OBK-SOP-NB-14` |
| 5 | Tên công việc hoặc tóm tắt nhiệm vụ | Tóm tắt ngắn gọn nội dung công việc cụ thể cần thực hiện |
| 6 | Mã khách hàng (`Client ID`) | Mã định danh khách hàng theo Sổ quản trị khách hàng [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] |
| 7 | Tên khách hàng hoặc Dự án | Tên doanh nghiệp khách hàng thụ hưởng hoặc tên dự án nội bộ |
| 8 | Người thực hiện (`Assignee`) | Họ tên chuyên viên nghiệp vụ trực tiếp xử lý: `KTV`, `CV-LIC`, `CV-LD`, `CV-LS`, `CV-RD`, `AD-KT` |
| 9 | Người kiểm soát lớp hai (`Reviewer`) | Họ tên Trưởng bộ phận (`TL-LIC`, `TL-KT`, `TL-LD`, `TL-LS`, `TL-RD`) hoặc nhân sự được chỉ định kiểm soát độc lập theo NT-5 |
| 10 | Chuyên viên quản lý khách hàng (`AM`) | Họ tên chuyên viên sở hữu quan hệ và đầu mối giao tiếp duy nhất với khách hàng |
| 11 | Trạng thái Task | Một trong 07 trạng thái: `Mới tiếp nhận`, `Đang xử lý`, `Chờ khách hàng nộp hồ sơ`, `Đang nộp cơ quan nhà nước`, `Chờ duyệt lớp hai`, `Hoàn thành`, `Hủy bỏ` |
| 12 | Thời điểm tiếp nhận yêu cầu | Mốc ngày giờ tiếp nhận thông tin từ khách hàng hoặc yêu cầu khởi tạo nội bộ |
| 13 | Mốc phản hồi tiếp nhận T1 | Thời điểm xác nhận thông tin đã nhận gửi khách hàng (quy định trong thời hạn tối đa 02 giờ làm việc, đo chỉ số `AM-M10`) |
| 14 | Hạn chót cam kết SLA (Mốc T2) | Hạn chót hoàn thành đầu ra theo cam kết dịch vụ, được tính từ bảng tra SLA [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] và xác nhận bởi Trưởng bộ phận (KS-AM-01) |
| 15 | Thời hạn theo pháp luật | Mốc thời gian nộp hồ sơ hoặc nghĩa vụ báo cáo theo quy định của pháp luật (đối với các Job có thời hạn pháp lý) |
| 16 | Mốc làm trước tối thiểu (NT-6) | Hoàn thành trước thời hạn theo pháp luật tối thiểu 03 ngày làm việc đối với hồ sơ nộp cơ quan nhà nước; gửi khách hàng ký trước tối thiểu 05 ngày làm việc |
| 17 | Thời điểm bắt đầu tạm dừng SLA | Ngày giờ kích hoạt trạng thái "Chờ khách hàng nộp hồ sơ" khi quá hạn cung cấp tài liệu theo thông báo [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu\|TL-02]] |
| 18 | Thời điểm kích hoạt lại SLA | Ngày giờ nhận đủ hồ sơ và tài liệu hợp lệ từ phía khách hàng theo biên bản bàn giao |
| 19 | Tổng thời gian tạm dừng SLA | Tổng số giờ hoặc ngày làm việc được loại trừ khi tính toán thời hạn cam kết cuối cùng |
| 20 | Thời điểm hoàn thành thực tế | Ngày giờ hoàn tất việc phê duyệt lớp hai và bàn giao kết quả cho khách hàng hoặc nộp thành công cơ quan nhà nước |
| 21 | Độ trễ cam kết dịch vụ | Số giờ hoặc số ngày làm việc bị trễ so với Mốc T2 (đã điều chỉnh trừ thời gian tạm dừng SLA hợp lệ) |
| 22 | Phân loại nguyên nhân trễ hạn | Một trong 03 nhóm: `Do khách hàng nộp chậm` (có văn bản nhắc nhở theo TL-02), `Do cơ quan nhà nước` (vượt thời hạn ghi trên giấy hẹn), `Do lỗi nội bộ` (lỗi chủ quan) |
| 23 | Đánh giá chất lượng và Thang lỗi | Ghi nhận chất lượng: `Đúng ngay lần đầu`, hoặc phân loại theo ba mức lỗi của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]]: `Nhỏ`, `Đáng kể`, `Nghiêm trọng` |
| 24 | Mức độ vượt biên kiểm soát lỗi | Ghi nhận lỗi theo hai biên đo: `Chưa vượt Biên 1` (nội bộ), `Vượt Biên 1 chưa vượt Biên 2` (lớp hai chặn lại), `Vượt Biên 2` (đã gửi khách hoặc nộp cơ quan nhà nước) |
| 25 | Ghi nhận tiêu chí KPI `HS-01` | Đánh dấu hồ sơ bị cơ quan nhà nước yêu cầu sửa đổi bổ sung do lỗi oBacker (`Có` hoặc `Không`) |
| 26 | Ghi nhận tiêu chí KPI `HS-02` | Số lần phải trình ký lại hồ sơ do sai sót kỹ thuật hoặc thiếu tài liệu nội bộ |
| 27 | Đánh giá tỷ lệ đúng hạn `OTD %` | Kết luận hoàn thành: `Đúng hạn tuyệt đối`, `Đúng hạn pháp định` (`CS-01`), hoặc `Trễ hạn do lỗi chủ quan` (`CS-02`) |

## QUY TẮC QUẢN TRỊ TRẠNG THÁI TASK, ĐỒNG HỒ SLA VÀ CHẤT LƯỢNG

### 1. Bảy trạng thái Task và luật chuyển đổi

Mọi nhiệm vụ công việc trên hệ thống phải nằm ở đúng một trong 07 trạng thái sau:

```
[Mới tiếp nhận] ---> [Đang xử lý] ---> [Chờ duyệt lớp hai] ---> [Hoàn thành]
         |                 |                   |
         |                 +-> [Chờ KH nộp HS] +-> [Hủy bỏ]
         |                 |    (Dừng SLA)
         |                 v
         +---------> [Đang nộp CQNN]
```

1. `Mới tiếp nhận`: Nhiệm vụ vừa được khởi tạo từ hợp đồng dịch vụ hoặc yêu cầu nội bộ. Chuyên viên tiếp nhận phải gửi xác nhận mốc T1 trong thời hạn tối đa 02 giờ làm việc.
2. `Đang xử lý`: Chuyên viên nghiệp vụ đang nghiên cứu hồ sơ, soạn thảo văn bản, hạch toán sổ sách hoặc tính toán tờ khai.
3. `Chờ khách hàng nộp hồ sơ`: Trạng thái TẠM DỪNG ĐỒNG HỒ SLA. Chỉ được kích hoạt khi đã gửi phiếu yêu cầu theo TL-02, đã nhắc nhở và khách hàng bị quá hạn nộp tài liệu. Toàn bộ số ngày khách hàng chậm nộp được cộng trực tiếp vào thời hạn hoàn thành cuối cùng.
4. `Đang nộp cơ quan nhà nước`: Hồ sơ đã được nộp trực tuyến hoặc nộp trực tiếp tại Bộ phận một cửa của cơ quan nhà nước có thẩm quyền và đã có giấy biên nhận tiếp nhận hồ sơ. Thời gian cơ quan nhà nước thụ lý theo luật định không tính vào thời gian xử lý nội bộ của oBacker.
5. `Chờ duyệt lớp hai`: Chuyên viên đã hoàn thành công việc theo bảng kiểm và chuyển hồ sơ sang Trưởng bộ phận hoặc nhân sự kiểm soát độc lập theo quy tắc NT-5. Không một đầu ra nào được gửi cho khách hàng hoặc nộp cơ quan nhà nước khi chưa có phê duyệt lớp hai tại trạng thái này.
6. `Hoàn thành`: Đầu ra đã được bàn giao chính thức cho khách hàng kèm biên bản hoặc đã nhận kết quả phê duyệt của cơ quan nhà nước, đã đóng Task và ghi nhận đầy đủ chi phí, thời gian và bài học kinh nghiệm theo quy tắc NT-8.
7. `Hủy bỏ`: Nhiệm vụ dừng thực hiện do khách hàng chấm dứt dịch vụ hoặc cơ quan nhà nước từ chối thụ lý do nguyên nhân bất khả kháng ngoài tầm kiểm soát của oBacker. Phải có xác nhận bằng văn bản của `COO` hoặc `CEO`.

### 2. Quản trị đồng hồ SLA và cơ chế cảnh báo sớm

- **Mốc tiếp nhận T1:** Trong thời hạn tối đa 02 giờ làm việc kể từ thời điểm tiếp nhận thông tin, `AM` hoặc người thực hiện phải gửi phản hồi xác nhận tiếp nhận cho khách hàng, nêu rõ chuyên viên phụ trách và dự kiến tiến độ xử lý.
- **Hạn chót cam kết T2:** Được xác định chính xác theo số ngày làm việc quy định tại OBK-SOP-PL2. Trường hợp yêu cầu phức tạp có sự phối hợp nhiều bộ phận, `AM` phải lấy xác nhận bằng văn bản của Trưởng bộ phận nghiệp vụ trên Task trước khi cam kết với khách hàng (điểm kiểm soát `KS-AM-01`).
- **Mốc làm trước tối thiểu (nguyên tắc NT-6):** Đối với các nhiệm vụ có thời hạn theo pháp luật, hồ sơ phải được hoàn tất nội bộ trước thời hạn theo pháp luật tối thiểu 03 ngày làm việc; gửi khách hàng ký duyệt trước thời hạn theo pháp luật tối thiểu 05 ngày làm việc.
- **Cảnh báo nguy cơ trễ hạn (chỉ số AM-M14):** Khi phát hiện nguy cơ không thể hoàn thành đúng mốc T2 (do vướng mắc kỹ thuật hoặc cơ quan nhà nước chậm trả kết quả), người thực hiện phải báo cáo Trưởng bộ phận và `AM` ngay khi nhận diện nguy cơ. `AM` có trách nhiệm phát hành thông báo bằng văn bản cho khách hàng trước thời hạn cam kết tối thiểu 04 giờ làm việc, nêu rõ nguyên nhân và phương án xử lý thay thế. Tuyệt đối không thông báo cho khách hàng sau khi sự việc đã quá hạn.

### 3. Đánh giá chất lượng và thang phân loại sai sót

Mọi sai sót phát sinh khi thực hiện nhiệm vụ phải được phân loại theo ba mức chuẩn hóa tại OBK-SOP-00 mục 11.2:

| Mức sai sót | Định nghĩa bản chất | Thời hạn khắc phục | Thẩm quyền phê duyệt đóng lỗi |
| --- | --- | --- | --- |
| **Nghiêm trọng** | Sai thông tin pháp lý, sai chủ thể, sai căn cứ pháp luật, nộp sai cơ quan có thẩm quyền, sai số liệu dẫn tới sai nghĩa vụ thuế hoặc nghĩa vụ bảo hiểm xã hội, trễ thời hạn theo pháp luật | Lập phương án khắc phục trong 24 giờ; hoàn thành theo mốc ghi trong phương án | `COO` phê duyệt đóng lỗi (sau khi `CEO` đã nhận báo cáo kết quả khắc phục) nếu lỗi đã lọt ra ngoài; `TL` đóng nếu chặn được trước Biên 2 |
| **Đáng kể** | Thiếu tài liệu, sai sót trong hướng dẫn ký, thiếu chữ ký hợp lệ, sai số liệu kỹ thuật không ảnh hưởng đến số thuế phải nộp, trễ hạn cam kết dịch vụ nội bộ (SLA) | Tối đa 05 ngày làm việc | Trưởng bộ phận nghiệp vụ (`TL`); `COO` đóng nếu người mắc lỗi là chính Trưởng bộ phận |
| **Nhỏ** | Sai lỗi chính tả, sai tên tệp lưu trữ, sai định dạng tài liệu, thiếu đường dẫn tra cứu nội bộ | Tối đa 10 ngày làm việc | Trưởng bộ phận nghiệp vụ (`TL`) hoặc chính chuyên viên khi sai sót chỉ nằm trên tài liệu nội bộ |

Quy tắc đóng lỗi bắt buộc (mục 11.2b): Người đóng lỗi không được là người mắc lỗi. Lỗi cùng loại phát sinh lần thứ ba trong 06 tháng ở cùng một cá nhân hoặc cùng một khách hàng phải tự động nâng lên một mức, đồng thời biện pháp khắc phục phải được sửa đổi ở cấp quy trình hoặc bảng kiểm nghiệp vụ (nguyên tắc NT-8).

### 4. Tích hợp chỉ số đánh giá hiệu suất nhân sự (KPI)

Dữ liệu ghi nhận trên bảng theo dõi là căn cứ trực tiếp để tính toán các tiêu chí hiệu suất theo Khung đánh giá hiệu suất [[08_Khung_danh_gia_hieu_suat|OBK-QCNS-08]]:
- **Tiêu chí `HS-01` (Tỷ lệ hồ sơ không bị cơ quan nhà nước yêu cầu sửa đổi bổ sung do lỗi oBacker):** Công thức = (Tổng số hồ sơ nộp - Số hồ sơ bị yêu cầu sửa đổi bổ sung do lỗi oBacker) / Tổng số hồ sơ nộp. Định mức đạt chuẩn: `P1` từ 90% trở lên; `P2` từ 95% trở lên; `P3`, `P4`, `M1` từ 97% trở lên.
- **Tiêu chí `HS-02` (Tỷ lệ trình ký lại):** Công thức = Số lần phải trình ký lại / Tổng số lần trình ký hồ sơ. Định mức đạt chuẩn: `P1` tối đa 8%; `P2` tối đa 3%; `P3`, `P4`, `M1` tối đa 2%.
- **Chỉ số `CS-01` và `CS-02` (Tỷ lệ hoàn thành đúng hạn OTD %):**
  + Tỷ lệ đúng hạn pháp định thuần (`CS-01`): Mục tiêu 100% không để phát sinh phạt vi phạm hành chính cho khách hàng.
  + Tỷ lệ hoàn thành đúng cam kết dịch vụ SLA (`CS-02`): Mục tiêu từ 95% trở lên số Job hoàn thành đúng hoặc trước mốc cam kết T2.

## QUY TRÌNH VẬN HÀNH VÀ KIỂM SOÁT CÔNG VIỆC

```
[ ]  1. KHỞI TẠO TASK VÀ XÁC ĐỊNH MÃ JOB (TRONG 02 GIỜ LÀM VIỆC)
        - Khi có hợp đồng dịch vụ mới hoặc yêu cầu công việc phát sinh:
          AM hoặc Trưởng bộ phận tạo Task trên hệ thống quản lý công việc, ghi nhận đúng Mã Job chuẩn theo OBK-SOP-PL2.
        - Gán đúng Người thực hiện (Assignee), Người kiểm soát lớp hai (Reviewer) và Chuyên viên phụ trách khách hàng (AM).
        - Gửi phản hồi tiếp nhận mốc T1 cho khách hàng trong thời hạn tối đa 02 giờ làm việc (AM-M10).

[ ]  2. THIẾT LẬP MỐC CAM KẾT VÀ KHOẢNG LÀM TRƯỚC (NT-6)
        - Trưởng bộ phận xác nhận mốc hoàn thành cam kết T2 dựa trên bảng tra SLA và khối lượng hồ sơ thực tế.
        - Đối với công việc có thời hạn theo pháp luật: hệ thống tự động khóa Mốc làm trước tối thiểu theo nguyên tắc NT-6
          (trước 03 ngày làm việc đối với hồ sơ nộp cơ quan nhà nước; trước 05 ngày làm việc đối với hồ sơ gửi khách hàng ký).
        - Cập nhật hạn chót T2 vào bảng theo dõi, AM chính thức xác nhận tiến độ với khách hàng.

[ ]  3. XỬ LÝ NGHIỆP VỤ VÀ TẠM DỪNG ĐỒNG HỒ SLA (KHI CHỜ HỒ SƠ)
        - Người thực hiện kiểm tra tính hợp lệ của tài liệu đầu vào theo bảng kiểm chuyên ngành.
        - Nếu hồ sơ bị thiếu hoặc phát hiện sai lệch: Người thực hiện thông báo AM phát hành văn bản đôn đốc theo mẫu TL-02.
        - Nếu khách hàng quá hạn cung cấp tài liệu: AM gửi thông báo tạm dừng dịch vụ, chuyển trạng thái Task sang
          "Chờ khách hàng nộp hồ sơ", kích hoạt cơ chế TẠM DỪNG ĐỒNG HỒ TÍNH THỜI GIAN CAM KẾT SLA.
        - Khi khách hàng nộp đủ hồ sơ hợp lệ: cập nhật ngày giờ nhận tài liệu, kích hoạt lại đồng hồ tính thời gian SLA.

[ ]  4. CẢNH BÁO NGUY CƠ TRỄ HẠN VÀ CHUYỂN LÊN CẤP TRÊN (AM-M14)
        - Khi xử lý nhiệm vụ, nếu xuất hiện nguy cơ trễ hạn (do cơ quan nhà nước kéo dài thời gian thụ lý hoặc lỗi kỹ thuật):
          Người thực hiện phải cập nhật ngay vào Task, thông báo cho Trưởng bộ phận và AM trước hạn chót tối thiểu 04 giờ làm việc.
        - AM phát hành văn bản cảnh báo trước nguy cơ trễ hạn kèm phương án xử lý thay thế cho khách hàng.
        - Trường hợp có vướng mắc liên bộ phận hoặc tranh chấp chuyên môn: chuyển lên COO để xử lý dứt điểm trong 24 giờ.

[ ]  5. KIỂM SOÁT CHẤT LƯỢNG HAI LỚP ĐỘC LẬP (NT-5)
        - Lớp 1 (Người thực hiện): Chuyên viên tự kiểm tra toàn bộ hồ sơ theo đúng bảng kiểm nghiệp vụ của từng Job,
          ký xác nhận và chuyển trạng thái Task sang "Chờ duyệt lớp hai".
        - Lớp 2 (Người kiểm soát độc lập): Trưởng bộ phận hoặc người được chỉ định kiểm tra độc lập hồ sơ.
        - Nếu phát hiện sai sót: ghi nhận mức lỗi (Nhỏ, Đáng kể, Nghiêm trọng), mức độ vượt biên và trả về Lớp 1 sửa đổi.
        - Chỉ khi Lớp 2 xác nhận đạt chuẩn, đầu ra mới được phát hành nộp cơ quan nhà nước hoặc gửi AM bàn giao cho khách hàng.

[ ]  6. ĐÓNG TASK, GHI BÀI HỌC VÀ TỔNG HỢP SỐ LIỆU HIỆU SUẤT (NT-8)
        - Sau khi nhận giấy biên nhận nộp thành công hoặc bàn giao hoàn tất cho khách hàng: chuyển trạng thái "Hoàn thành".
        - Ghi nhận đầy đủ thời gian hoàn thành thực tế, tính toán độ trễ SLA và nguyên nhân trễ hạn (nếu có).
        - Nếu có sai sót phát sinh: hoàn tất việc đóng lỗi theo đúng thẩm quyền và cập nhật bổ sung vào bảng kiểm nghiệp vụ (NT-8).
        - Dữ liệu hoàn thành được tự động ghi nhận vào hệ thống để tổng hợp các chỉ số hiệu suất KPI (HS-01, HS-02, OTD %).
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

Bảng theo dõi trạng thái công việc được cập nhật liên tục trực tiếp trên hệ thống điều hành công việc của oBacker. Toàn bộ thông tin thay đổi về trạng thái Task, thời gian tạm dừng và biên bản kiểm soát lớp hai phải được ghi nhận ngay tại thời điểm thực hiện.

Dữ liệu từ bảng theo dõi được trích xuất phục vụ các mục đích sau:
1. Đối soát tiến độ hằng ngày và hằng tuần giữa `AM` và các Trưởng bộ phận nghiệp vụ (`TL`), bảo đảm 100% rủi ro trễ hạn được cảnh báo trước cho khách hàng.
2. Báo cáo tỷ lệ đúng hạn cam kết dịch vụ (`CS-02`) và tỷ lệ đúng hạn pháp định (`CS-01`) gửi `COO` trong phiên họp điều hành thứ Sáu hằng tuần.
3. Cung cấp dữ liệu gốc để tính toán điểm đánh giá hiệu suất nhân sự cá nhân hằng tháng (đúng ngay lần đầu `A-01`, đúng thời hạn SLA `A-03`, `HS-01`, `HS-02`) phục vụ việc chấm điểm trên phiếu NS-03 theo Khung đánh giá hiệu suất OBK-QCNS-08.

## KÝ XÁC NHẬN

| Người thực hiện (`Assignee`) | Người kiểm soát lớp hai (`Reviewer`) | Giám đốc điều hành (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm toàn bộ công việc và nhiệm vụ tại oBacker được kiểm soát chặt chẽ về tiến độ, cam kết thời gian thực hiện (SLA) và chất lượng đầu ra; bảo đảm nguyên tắc kiểm soát chất lượng hai lớp độc lập (NT-5) được thực thi nghiêm túc trước khi tài liệu rời khỏi bộ phận; minh bạch hóa thời gian xử lý và trách nhiệm đối với việc trễ hạn thông qua cơ chế tạm dừng đồng hồ SLA (khi lỗi do khách hàng chậm nộp theo TL-02) và cảnh báo sớm (AM-M14); đồng thời tạo cơ sở dữ liệu khách quan, định lượng để đo lường chính xác các chỉ số hiệu suất nhân sự cá nhân theo đúng Khung hiệu suất OBK-QCNS-08.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CV-01 về Sổ cái OBK-MSR |
