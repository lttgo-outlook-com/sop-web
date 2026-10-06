---
title: "BẢNG MT-01. MA TRẬN LIÊN KẾT LUỒNG NGHIỆP VỤ CHÉO VÀ KÍCH HOẠT CHUYỂN GIAO TỰ ĐỘNG"
code: "MT-01"
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
  - MT-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# BẢNG MT-01. MA TRẬN LIÊN KẾT LUỒNG NGHIỆP VỤ CHÉO VÀ KÍCH HOẠT CHUYỂN GIAO TỰ ĐỘNG

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | MT-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.1.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | MT-01 |
| **Màu** | TÍM, ma trận điều phối luồng nghiệp vụ chéo và liên kết thực thể toàn công ty |
| **Ai dùng** | Ban Giám đốc (`CEO`, `COO`), Trưởng các bộ phận (`TL-KT`, `TL-LIC`, `TL-LD`, `TL-LS`, `TL-RD`, `TP Thương mại`, `HR`), Chuyên viên nghiệp vụ (`AM`, `KTV`, `CV`) |
| **Sinh từ** | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]];<br>[[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]];<br>[[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]];<br>`OBK-SOP-NB-01` đến `OBK-SOP-NB-06`;<br>`OBK-SOP-NB-10` đến `OBK-SOP-NB-14` |
| **Ngày làm phiếu** | 27/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu này ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] Sổ cái Quản trị Dịch vụ, nguồn sự thật duy nhất; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Bảng ma trận được áp dụng bắt buộc làm chuẩn mực điều phối toàn bộ các điểm giao cắt nghiệp vụ giữa 04 khối thực thể vận hành tại oBacker:
1. Chuỗi quản lý Tiền ra và Tiền vào (Thu `OBK-SOP-NB-02`, Chi `OBK-SOP-NB-01`, Ngân quỹ `OBK-SOP-NB-03`, [[NH-01_Doi_chieu_ngan_hang|NH-01]], [[KQ-01_Kiem_ke_quy_tien_mat|KQ-01]], [[TU-01_So_theo_doi_tam_ung_va_hoan_ung|TU-01]]).
2. Chuỗi Doanh thu, Thuế và Hóa đơn ([[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao|HD-02]], [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo|DT-02]], [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no|CN-01]], `PL_H`, `12_Hoa_don_dien_tu`).
3. Chuỗi Biến động nhân sự và Quản trị tài sản (Tuyển dụng và Onboarding `OBK-SOP-NB-05`, Hợp đồng lao động [[HD-01_So_theo_doi_hop_dong_lao_dong_va_thu_viec|HD-01]], Báo tăng giảm BHXH [[BH-01_Bang_theo_doi_bien_dong_bhxh_va_lao_dong_khach_hang|BH-01]], Tiền lương [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan|LU-01]], Offboarding `OBK-SOP-NB-06`, Bàn giao [[BG-01_Ban_giao_tiep_nhan_nhan_su|BG-01]], [[BG-02_Ban_giao_nghi_viec_offboarding|BG-02]], Tài sản dụng cụ [[TS-01_So_theo_doi_tai_san_va_cong_cu|TS-01]]).
4. Chuỗi Tiến độ công việc và Quản trị cam kết chất lượng ([[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi|CV-01]], [[OB-01_Bang_theo_doi_tien_do_onboarding_khach_hang_moi|OB-01]], [[DV-02_Bang_theo_doi_chu_ky_so_va_dich_vu_khach_hang|DV-02]], [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa|CL-01]], [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang|KN-01]], [[RD-01_So_theo_doi_yeu_cau_nghien_cuu_phap_ly_va_ban_ghi_nho_tu_van|RD-01]]).

Ma trận quy định rõ ràng điều kiện kích hoạt chuyển giao, đơn vị phát tín hiệu, đơn vị tiếp nhận, hành động bắt buộc, thời hạn cam kết và hồ sơ bàn giao, bảo đảm quá trình chuyển tiếp diễn ra liền mạch, không bỏ sót bất kỳ nhiệm vụ nào.

## MA TRẬN 18 ĐIỂM KÍCH HOẠT CHUYỂN GIAO TỰ ĐỘNG GIỮA CÁC BỘ PHẬN

| Điểm kích hoạt | Sự kiện kích hoạt nghiệp vụ | Đơn vị phát tín hiệu | Đơn vị tiếp nhận | Hành động bắt buộc phải thực hiện | Thời hạn cam kết | Biểu mẫu và Sổ theo dõi liên kết |
| --- | --- | --- | --- | --- | --- | --- |
| **TG-01** | Hợp đồng dịch vụ mới được ký kết | Chuyên viên quản lý khách hàng (`AM`) | Kế toán (`KTV`), Giấy phép (`CV-LIC`), Lao động (`CV-LD`), Pháp lý (`CV-LS`) | Khởi tạo mã khách hàng, tạo thư mục lưu trữ, gửi thư chào mừng và phiếu yêu cầu hồ sơ | Trong thời hạn tối đa 02 giờ làm việc | [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]], [[OB-01_Bang_theo_doi_tien_do_onboarding_khach_hang_moi\|OB-01]], [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu\|TL-02]] |
| **TG-02** | Tiền về tài khoản ngân hàng của oBacker | Kế toán viên đối soát (`KTV`) / Thủ quỹ (`TQ`) | Kế toán thuế (`KTV`), Chuyên viên (`AM`) | Đối khớp sao kê ngân hàng, lập hóa đơn điện tử đầu ra, ghi nhận doanh thu chưa thực hiện TK 3387 | Trong ngày làm việc phát sinh giao dịch | [[NH-01_Doi_chieu_ngan_hang\|NH-01]], [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao\|HD-02]], [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]] |
| **TG-03** | Khóa sổ kế toán ngày cuối tháng | Kế toán viên doanh thu (`KTV`) | Kế toán trưởng (`KTT`), Giám đốc (`CEO`) | Lập bảng tính phân bổ doanh thu từ TK 3387 sang TK 511, đối chiếu công nợ TK 131 và thuế TK 33311 | Ngày cuối cùng của từng tháng | [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]], [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no\|CN-01]], [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]] |
| **TG-04** | Công nợ khách hàng quá hạn thanh toán | Kế toán viên công nợ (`KTV`) | Chuyên viên quản lý khách hàng (`AM`) | Gửi văn bản đôn đốc thanh toán; nếu quá hạn 30 ngày kích hoạt trạng thái dừng dịch vụ | Trước ngày 25 hằng tháng | [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no\|CN-01]], [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] |
| **TG-05** | Tiếp nhận nhân sự mới (Onboarding nhân sự) | Nhân sự (`HR`) | Hành chính (`Admin`), Kế toán (`KTV`), IT | Ký HĐLĐ, bàn giao trang thiết bị làm việc, đăng ký báo tăng BHXH, cấp mã nhân viên trên bảng lương | Ngày làm việc đầu tiên (Day 1) | [[HD-01_So_theo_doi_hop_dong_lao_dong_va_thu_viec\|HD-01]], [[BG-01_Ban_giao_tiep_nhan_nhan_su\|BG-01]], [[TS-01_So_theo_doi_tai_san_va_cong_cu\|TS-01]], [[BH-01_Bang_theo_doi_bien_dong_bhxh_va_lao_dong_khach_hang\|BH-01]], [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]] |
| **TG-06** | Nhân sự thôi việc (Offboarding nhân sự) | Nhân sự (`HR`) | Trưởng bộ phận (`TL`), Kế toán (`KTV`), IT | Thu hồi toàn bộ quyền truy cập và tài khoản ngân hàng điện tử, thu hồi tài sản CCDC, chốt hoàn ứng, chốt sổ BHXH, thanh toán trợ cấp | Trong thời hạn tối đa 14 ngày làm việc | [[BG-02_Ban_giao_nghi_viec_offboarding\|BG-02]], [[TS-01_So_theo_doi_tai_san_va_cong_cu\|TS-01]], [[TU-01_So_theo_doi_tam_ung_va_hoan_ung\|TU-01]], `VQ-17`, [[BH-01_Bang_theo_doi_bien_dong_bhxh_va_lao_dong_khach_hang\|BH-01]], [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]] |
| **TG-07** | Phê duyệt mua sắm và thanh toán nội bộ | Người đề nghị mua sắm | Trưởng bộ phận (`TL`), Người duyệt chi (`NDC`/`TGĐ`/`HĐQT`), Kế toán trưởng (`KTT`), Kế toán thanh toán (`KTV`) | Kiểm tra tính hợp lệ chứng từ, ký duyệt chi đúng hạn mức thẩm quyền (B1-B5), KTT ký chứng từ kế toán chi tiền, KTV tạo lệnh thanh toán ngân hàng điện tử, TGĐ hoặc CTHĐQT xác nhận lệnh, ghi tăng tài sản công cụ dụng cụ | Trong thời hạn 02 ngày làm việc | `OBK-SOP-NB-01`, [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao\|HD-02]], [[TS-01_So_theo_doi_tai_san_va_cong_cu\|TS-01]], [[NH-01_Doi_chieu_ngan_hang\|NH-01]] |
| **TG-08** | Dịch vụ chữ ký số khách hàng sắp hết hạn | Chuyên viên quản lý khách hàng (`AM`) | Kỹ thuật (`KTV`), Đối tác CyberX | Gửi thông báo gia hạn tại các mốc 30-15-7 ngày; khi thanh toán thì kích hoạt Token, bàn giao biên bản | Trước khi hết hạn tối thiểu 30 ngày | [[DV-02_Bang_theo_doi_chu_ky_so_va_dich_vu_khach_hang\|DV-02]], [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx\|CK-02]], [[CK-01_Ban_giao_chu_ky_so_va_hoa_don\|CK-01]] |
| **TG-09** | Khách hàng chậm bàn giao hồ sơ | Chuyên viên nghiệp vụ (`KTV`/`CV`) | Chuyên viên quản lý khách hàng (`AM`) | Gửi văn bản nhắc nhở lần 2; nếu quá hạn kích hoạt trạng thái tạm dừng đồng hồ tính SLA trên hệ thống | Ngay khi phát hiện quá hạn nộp hồ sơ | [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu\|TL-02]], [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] |
| **TG-10** | Phát hiện sai sót hồ sơ hoặc lỗi đầu ra | Người phát hiện (bất kỳ ai) | Người mắc lỗi, Trưởng bộ phận (`TL`) | Lập mã theo dõi sai sót trên Sổ [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]], triển khai khắc phục tức thời và thực hiện hành động phòng ngừa CAPA | Trong thời hạn tối đa 02 giờ làm việc | [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]], [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] |
| **TG-11** | Khách hàng khiếu nại dịch vụ | Chuyên viên quản lý khách hàng (`AM`) | Trưởng bộ phận (`TL`), Giám đốc điều hành (`COO`), Giám đốc (`CEO`) | Phân loại mức ưu tiên (P1, P2, P3), phản hồi khách hàng dưới 30 phút (P1), thẩm định kỹ thuật và lỗi nội bộ (COO), phê duyệt phương án thương mại hoặc bồi thường tài chính theo ma trận thẩm quyền (TP Thương mại ít hơn 2.000.000 đồng; CEO từ 2.000.000 đồng trở lên, tiền phạt nộp chậm và hủy hợp đồng) | Dưới 30 phút đối với P1; dưới 02 giờ đối với P2, P3 | [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang\|KN-01]], [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]] |
| **TG-12** | Ban hành văn bản quy phạm pháp luật mới | Người phát hiện (bất kỳ ai) | Bộ phận Legal R&D (`CV-RD`, `TL-RD`) | Nhập văn bản gốc vào kho 05_PhapLuat/, đánh giá tác động, phân mức ưu tiên và chuyển giao yêu cầu sửa đổi SOP | Trong ngày phát hiện văn bản mới | [[RD-01_So_theo_doi_yeu_cau_nghien_cuu_phap_ly_va_ban_ghi_nho_tu_van\|RD-01]], `05_PhapLuat/`, [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] |
| **TG-13** | Báo cáo hoa hồng tháng đối tác được chấp thuận | Chuyên viên Đối tác (`PM`) | Kế toán thanh toán (`KTV`), Kế toán trưởng (`KTT`) | Lập Đề nghị thanh toán theo OBK-SOP-NB-01, lập ủy nhiệm chi chuyển khoản hoa hồng đối tác (khấu trừ thuế TNCN cá nhân nếu có) | Trước ngày 10 hằng tháng | [[HH-02_Phieu_bao_cao_hoa_hong_thang\|HH-02]], [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]], `OBK-SOP-NB-01`, `OBK-SOP-PM` |
| **TG-14** | Khóa sổ đối soát đại lý Reseller và hoa hồng đầu vào | Kế toán viên đối soát (`KTV`) | Chuyên viên quản lý khách hàng (`AM`), Trưởng phòng Thương mại | Đối soát số lượng Token kích hoạt trên Sổ CK-02 với hóa đơn sỉ CyberX; đối soát và ghi nhận doanh thu hoa hồng đại lý ngân hàng, dịch vụ ngoại vào TK 1388 / TK 5113 | Trước ngày 15 hằng tháng | [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]], [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx\|CK-02]], [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]], [[NH-01_Doi_chieu_ngan_hang\|NH-01]] |
| **TG-15** | Đối soát và kết xuất Báo cáo tài chính quản trị từ Hệ thống Kế toán | Kế toán trưởng (`KTT`) | Giám đốc điều hành (`CEO`), Ban Giám đốc (`BOM`) | Khóa sổ kế toán tháng, kết xuất Bảng cân đối số phát sinh; đối khớp và đổ số liệu sang các báo cáo: dòng tiền [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]], ngân sách [[NS-09_Bang_ke_hoach_va_phan_bo_ngan_sach_tai_chinh_nam\|NS-09]], giá thành [[GC-01_Bang_tinh_gia_thanh_dich_vu_va_bien_loi_nhuan_khach_hang\|GC-01]], kinh tế đơn vị [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]] | Trước ngày 05 hằng tháng | [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]], [[NS-09_Bang_ke_hoach_va_phan_bo_ngan_sach_tai_chinh_nam\|NS-09]], [[GC-01_Bang_tinh_gia_thanh_dich_vu_va_bien_loi_nhuan_khach_hang\|GC-01]], [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]] |
| **TG-16** | Đồng bộ chỉ số SLA, chất lượng và năng suất sang Đánh giá hiệu suất nhân sự | Chuyên viên Nhân sự (`HR`) / Quản lý (`TL`) | Toàn bộ nhân sự chuyên môn, Ban Giám đốc | Trích xuất tỷ lệ SLA từ [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]], lỗi từ [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]], giờ công và năng suất từ [[TS-02_Bang_theo_doi_gio_lam_viec_nang_suat_va_cong_suat_nhan_su\|TS-02]], khiếu nại từ [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang\|KN-01]]; tự động tính Điểm Phần A đổ vào [[NS-03_Phieu_tong_hop_diem_cuoi_ky\|NS-03]] | Trước ngày 03 đầu tháng sau | [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]], [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]], [[TS-02_Bang_theo_doi_gio_lam_viec_nang_suat_va_cong_suat_nhan_su\|TS-02]], [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang\|KN-01]], [[NS-03_Phieu_tong_hop_diem_cuoi_ky\|NS-03]] |
| **TG-17** | Marketing bàn giao dữ liệu Lead hợp lệ cho Kinh doanh | Chuyên viên Tiếp thị (`MKT Executive`) / Giám đốc Tiếp thị (`CMO`) | Chuyên viên quản lý khách hàng (`AM`) | Sàng lọc dữ liệu lead đúng đối tượng, phân loại nhu cầu sơ bộ, bàn giao trên Lead Funnel; AM xác nhận tiếp nhận mốc T1, rà soát rủi ro AM-22 và liên hệ khách hàng để xếp lịch họp làm rõ nhu cầu | Trong thời hạn tối đa 02 giờ làm việc (mốc T1) | [[MK-01_Bang_theo_doi_chien_dich_marketing_va_chuyen_doi_lead\|MK-01]], [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]], `13_OBK-SOP-MK` |
| **TG-18** | Trình duyệt Kế hoạch ngân sách, Báo cáo tài chính năm và giao dịch chạm hạn mức lên HĐQT | Ban Giám đốc (`CEO`), Kế toán trưởng (`KTT`) | Hội đồng quản trị (`HĐQT`) | KTT kết xuất BCTC năm và dự thảo kế hoạch ngân sách NS-09, CEO thẩm định và trình HĐQT xem xét thông qua trước khi ban hành hoặc trình ĐHĐCĐ; HĐQT phê duyệt giao dịch chạm mốc Điều lệ Đ.25 k.2 đ.h | Ngân sách trước ngày 15/12; BCTC năm trước ngày 15/03; giao dịch lớn trước khi ký tối thiểu 05 ngày làm việc | [[NS-09_Bang_ke_hoach_va_phan_bo_ngan_sach_tai_chinh_nam\|NS-09]], [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]], `PL_Ma_tran_phan_quyen`, `OBK-QCTC-01`, `OBK-QCTC-02` |

## NGUYÊN TẮC VẬN HÀNH LUỒNG NGHIỆP VỤ LIÊN TỤC

### 1. Nguyên tắc một đầu mối và không chuyển rủi ro đi
- Đối với khách hàng bên ngoài: Mọi luồng giao tiếp, tiếp nhận yêu cầu, bàn giao kết quả và xử lý khiếu nại bắt buộc phải đi qua một đầu mối duy nhất là Chuyên viên quản lý khách hàng (`AM`), bảo đảm tỷ lệ giao tiếp qua AM đạt 100% theo chỉ số `AM-M15` và `CS-07`.
- Đối với nội bộ công ty: Chuyển giao công việc giữa các bộ phận phải có bằng chứng bằng văn bản hoặc trạng thái ghi nhận trên hệ thống quản lý công việc trong thời hạn tối đa 24 giờ. Việc chuyển giao lên cấp trên là để phối hợp nguồn lực, không làm mất đi trách nhiệm theo dõi vụ việc của người khởi tạo (nguyên tắc NT-7).

### 2. Kiểm soát hai lớp độc lập tại các điểm nút chuyển giao (NT-5)
- Tuyệt đối không một sản phẩm nghiệp vụ nào (hồ sơ thành lập, báo cáo thuế, hợp đồng kinh tế, bản ghi nhớ tư vấn, hóa đơn điện tử) được gửi cho khách hàng hoặc nộp cơ quan nhà nước khi chưa được phê duyệt lớp hai độc lập bởi Trưởng bộ phận nghiệp vụ hoặc nhân sự được chỉ định.
- Mọi trường hợp bỏ qua bước kiểm soát lớp hai đều bị xử lý là vi phạm kỷ luật lao động và bị ghi nhận lỗi mức Nghiêm trọng trên Sổ [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa|CL-01]].

### 3. Cơ chế kích hoạt chuỗi khi có biến động nhân sự
- Khi có nhân sự mới gia nhập: Quy trình Onboarding nhân sự phải tự động kích hoạt đồng thời 05 thủ tục nghiệp vụ liên quan: Ký hợp đồng lao động (`HD-01`), cấp phát thiết bị và công cụ làm việc (`TS-01`), báo tăng đóng bảo hiểm xã hội (`BH-01`), đăng ký mã số thuế cá nhân và người phụ thuộc, mở mã nhân viên trên hệ thống tính lương (LU-01).
- Khi nhân sự thôi việc: Quy trình Offboarding bắt buộc phải thực hiện thu hồi tài sản (`TS-01`), quyết toán dứt điểm các khoản tạm ứng (`TU-01`), thu hồi quyền truy cập ngân hàng điện tử (`VQ-17`), và hoàn tất thủ tục thanh toán tiền lương, trợ cấp thôi việc trong thời hạn theo pháp luật tối đa 14 ngày làm việc theo Bộ luật Lao động số 45/2019/QH14 Điều 48.

### 4. Nguyên tắc Trung tâm Kế toán và Nguồn dữ liệu tài chính duy nhất
- Mọi nghiệp vụ kinh tế phát sinh liên quan đến tiền (thu, chi, tạm ứng, công nợ, mua sắm, tài sản, lương, hoa hồng, doanh thu, giá thành) bắt buộc phải chuyển giao đầy đủ hóa đơn, chứng từ hợp pháp về Bộ phận Kế toán để ghi nhận vào Hệ thống Sổ kế toán theo Thông tư 99/2025/TT-BTC.
- Toàn bộ các báo cáo quản trị tài chính nội bộ ([[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh|TC-01]], [[NS-09_Bang_ke_hoach_va_phan_bo_ngan_sach_tai_chinh_nam|NS-09]], [[GC-01_Bang_tinh_gia_thanh_dich_vu_va_bien_loi_nhuan_khach_hang|GC-01]], [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission|UE-01]], [[KP-01_Bang_theo_doi_chi_so_hieu_suat_kpi_toan_cong_ty|KP-01]], [[CT-01_Giay_di_duong_va_quyet_toan_cong_tac_phi|CT-01]], [[PM-01_Bang_theo_doi_thue_bao_phan_mem_noi_bo|PM-01]], [[TS-01_So_theo_doi_tai_san_va_cong_cu|TS-01]]) bắt buộc đọc và đối khớp 100% với số dư Sổ cái và Bảng cân đối phát sinh kế toán. Nghiêm cấm việc lập báo cáo bằng số liệu ước tính ngoài sổ sách.

### 5. Nguyên tắc Liên kết cơ học giữa Đo lường vận hành và Đánh giá hiệu suất
- Điểm đánh giá hiệu suất chuyên môn Phần A của từng nhân sự (chiếm 75% tổng điểm theo OBK-QCNS-08) được trích xuất tự động và cơ học từ các Sổ theo dõi: tỷ lệ SLA từ CV-01, lỗi chất lượng từ CL-01, tỷ lệ tận dụng năng lực từ TS-02, và khiếu nại từ KN-01.
- Không một cá nhân nào được tự ý điều chỉnh điểm Phần A nếu không có bằng chứng văn bản về việc khắc phục lỗi hoặc sự cố khách quan được phê duyệt hợp lệ.

## KÝ XÁC NHẬN

| Trưởng bộ phận Kế toán (`TL-KT`) | Trưởng phòng Thương mại | Giám đốc điều hành (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Xóa bỏ tình trạng đứt gãy thông tin giữa các bộ phận chức năng; xác lập ranh giới trách nhiệm và thời hạn chuyển giao rõ ràng cho từng sự kiện tác nghiệp; liên kết dòng tiền thực tế với nghĩa vụ kế toán, hóa đơn và cam kết chất lượng dịch vụ; bảo đảm hệ thống vận hành trơn tru như một cỗ máy thống nhất, không để công việc bị rơi vào khoảng trống trách nhiệm.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu MT-01 về Sổ cái OBK-MSR |
