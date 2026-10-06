---
title: "Nhật ký sửa toàn kho"
type: nhat-ky
tags:
  - loai/nhat-ky
---

# Nhật ký sửa toàn kho

> [!info] PHẠM VI
> Trang này giữ lịch sử sửa của các bản đã bị thay. Mục NHẬT KÝ SỬA trong từng tài liệu chỉ giữ thay đổi của bản hiện hành so với bản liền trước; các bản cũ hơn ghi tại đây.

> [!note] RESET CHANGELOG
> Changelog bắt đầu từ bản ban hành chính thức R.1.0.0 ngày 01/10/2026. Lịch sử sửa đổi các phiên bản tiếp theo được ghi nhận chi tiết tại trang này.

> [!tip] CẬP NHẬT PHIÊN BẢN R.1.1.0 (28/09/2026) — HỢP NHẤT MASTER SKU CATALOG VÀ BỘ GÓI ĐỐI TÁC PARTNER
> Ngày 28/09/2026, oBacker ban hành phiên bản **R.1.1.0** cho toàn bộ Bộ Danh mục dịch vụ (`10_DanhMuc`) và Bộ Điều khoản dịch vụ (`09_TnC`):
> - **Master SKU Catalog (`10_DanhMuc`):** Hợp nhất và chuẩn hóa 372 mã SKU, chuyển dịch hoàn toàn từ hệ thống gói cũ (`Starter`, `Scale`, `Premium`) sang kiến trúc 3 gói đối tác: **Partner Core** (`OBG-PTR-CORE`), **Partner Growth** (`OBG-PTR-GROWTH`), và **Partner Prime** (`OBG-PTR-PRIME`).
> - **Cơ chế FUP & Phụ phí:** Thiết lập trần cứng 1.500 giao dịch/tháng cho gói Growth, các gói bổ sung chứng từ FUP (`ADD-TXN-*`), biểu phí di trú dữ liệu (`OBG-ONB-*`), và rà soát sức khỏe sổ sách (`OBG-HEALTH-CHECK`).
> - **Chính sách FDI:** Áp dụng hệ số phụ thu rủi ro hồ sơ FDI (+25%), chuẩn hóa 100% doanh nghiệp FDI thực hiện ghi sổ và BCTC theo Thông tư 99/2025/TT-BTC.
> - **Điều khoản dịch vụ & Hợp đồng khung (`09_TnC`):** Giới hạn trách nhiệm bồi thường tổng hợp không vượt quá 03 tháng phí dịch vụ thực trả gần nhất; định mức kê khai thuế nhà thầu nước ngoài (FCT) 03 hợp đồng/tháng; ranh giới thanh tra thuế tại bàn (`ADD-TAX-INSPECT`) và tính độc lập của kiểm toán FDI; cơ chế cam kết thời hạn Quý 4 (tối thiểu 05 quý) và mốc thanh toán đợt 2 trước 15/03.

> [!tip] CẬP NHẬT PHIÊN BẢN R.2.0.0 (27/09/2026) — TINH GIẢN VÀ CHUẨN HÓA VẬN HÀNH
> Ngày 27/09/2026, oBacker ban hành phiên bản **R.2.0.0** cho các tài liệu trọng yếu nhằm tinh giản thủ tục hành chính, áp dụng lằn ranh tuân thủ tối thiểu theo pháp luật (MVC) và nguyên tắc Single Source of Truth (SSOT):
> - [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]]: Thu gọn hạn mức chi tiêu 3 bậc (B1 dưới 5 triệu do TL quyết, B2 từ 5 đến dưới 20 triệu do COO/KTT quyết, B3 từ 20 triệu do TGĐ quyết).
> - [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]]: Bỏ cơ chế tự động nâng bậc, xác minh nhà cung cấp dưới 20 triệu qua tra cứu MST trực tuyến, chuẩn hóa báo giá 3 bậc.
> - [[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]]: Phân quyền chi tiêu 3 bậc; phân quyền ký hợp đồng dịch vụ chuẩn và bảng giá chuẩn cho TP Thương mại.
> - [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]]: Chuyển T1/T2 thành văn hóa phản hồi, đo lường duy nhất OTD %, chuẩn hóa 4 nhóm thời hạn SLA.
> - [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]]: Phân quyền ký hợp đồng chuẩn cho TP Thương mại, định rõ 4 trường hợp ngoại lệ chuyển TGĐ.
> - [[03_De_xuat_bao_gia_va_ky_hop_dong\|OBK-HB-33]]: Quy trình ký hợp đồng dịch vụ chuẩn do TP Thương mại ký duyệt.
> - [[00_Muc_luc_va_cach_dung\|OBK-HB-00]]: Cơ cấu Handbook Kế toán thành 2 khối độc lập (4 Bảng kiểm chu kỳ và Khối tri thức tra cứu tham khảo).
> - [[03_Mo_hinh_van_hanh_bon_muc_kiem_soat_va_ma_tran_RACI\|OBK-QCNS-03]]: Thu gọn mô hình kiểm soát từ 4 mức thành 2 cấp thực chất (Maker làm, Checker/Approver duyệt), COO làm QA độc lập.
> - [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]]: Bãi bỏ đánh giá chéo ngang hàng, thu gọn 3 nhóm chỉ số cốt lõi (OTD 70%, Khối lượng 20%, Kỷ luật 10%) và 4 mức xếp loại.
> - [[NS-02_Phieu_danh_gia_cheo_hieu_suat\|NS-02]]: Ghi nhận chính thức bãi bỏ biểu mẫu đánh giá chéo ngang hàng.
> - [[00_INDEX]]: Xóa bỏ bảng 42 dòng tranh chấp, thiết lập Nguyên tắc Phân định Hiệu lực 3 Cấp và SSOT.

## 1. Danh mục tài liệu

Trang này ghi 265 lượt sửa thuộc các bản cũ của 135 tài liệu, tính tới 06/10/2026. Lượt sửa của bản hiện hành ghi tại mục NHẬT KÝ SỬA trong chính tài liệu đó.

| Tài liệu | Số lượt sửa | Ngày sửa gần nhất |
| --- | --- | --- |
| [[00_Muc_luc_va_cach_dung\|OBK-HB-00]] | 5 | 06/10/2026 |
| [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]] | 3 | 06/10/2026 |
| [[NH-01_Doi_chieu_ngan_hang\|NH-01]] | 3 | 06/10/2026 |
| [[TH-02_So_theo_doi_han_tong_hop\|TH-02]] | 1 | 06/10/2026 |
| [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] | 10 | 04/10/2026 |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] | 7 | 04/10/2026 |
| [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] | 7 | 04/10/2026 |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | 6 | 04/10/2026 |
| [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] | 6 | 04/10/2026 |
| [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] | 6 | 04/10/2026 |
| [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] | 5 | 04/10/2026 |
| [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] | 5 | 04/10/2026 |
| [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] | 4 | 04/10/2026 |
| [[PL_LIC_01_Quy_trinh_giay_phep_chuyen_nganh_va_so_huu_tri_tue\|OBK-SOP-LIC-PL-01]] | 4 | 04/10/2026 |
| [[04_Onboarding_khach_moi\|OBK-HB-34]] | 3 | 04/10/2026 |
| [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]] | 3 | 04/10/2026 |
| [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] | 3 | 04/10/2026 |
| [[17_Khung_xu_phat_va_phong_ngua\|OBK-SOP-17]] | 3 | 04/10/2026 |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] | 3 | 04/10/2026 |
| [[02_Mo_hinh_dich_vu_va_phan_vai\|OBK-SOP-02]] | 2 | 04/10/2026 |
| [[07_Bao_cao_tai_chinh_nam\|OBK-HB-07]] | 2 | 04/10/2026 |
| [[PL_3_Ban_do_lien_ket_va_chuyen_tang\|OBK-SOP-PL3]] | 2 | 04/10/2026 |
| [[BH-01_Bang_theo_doi_bien_dong_bhxh_va_lao_dong_khach_hang\|BH-01]] | 2 | 04/10/2026 |
| [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no\|CN-01]] | 2 | 04/10/2026 |
| [[HH-02_Phieu_bao_cao_hoa_hong_thang\|HH-02]] | 2 | 04/10/2026 |
| [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] | 2 | 04/10/2026 |
| [[KP-01_Bang_theo_doi_chi_so_hieu_suat_kpi_toan_cong_ty\|KP-01]] | 2 | 04/10/2026 |
| [[KT-01_Bang_kiem_tra_va_bao_cao_kiem_toan_noi_bo\|KT-01]] | 2 | 04/10/2026 |
| [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]] | 2 | 04/10/2026 |
| [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]] | 2 | 04/10/2026 |
| [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] | 2 | 04/10/2026 |
| [[09_Thue_GTGT\|OBK-HB-09]] | 2 | 04/10/2026 |
| [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]] | 2 | 04/10/2026 |
| [[PL_E_Bang_tra_nhanh_than_quyen\|OBK-QCTC-02-PL-E]] | 1 | 04/10/2026 |
| `OBK-SOP-PL-T` | 1 | 04/10/2026 |
| [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]] | 6 | 03/10/2026 |
| [[02_Accounting_Tax_VI\|02_Accounting_Tax_VI]] | 6 | 02/10/2026 |
| [[02_Accounting_Tax_EN\|02_Accounting_Tax_EN]] | 6 | 02/10/2026 |
| [[00_TnC_Master_VI\|00_TnC_Master_VI]] | 4 | 02/10/2026 |
| [[00_TnC_Master_EN\|00_TnC_Master_EN]] | 4 | 02/10/2026 |
| [[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]] | 3 | 02/10/2026 |
| [[03_De_xuat_bao_gia_va_ky_hop_dong\|OBK-HB-33]] | 3 | 02/10/2026 |
| [[PL_C_Lich_tuan_thu_nam\|OBK-SOP-PL-C]] | 2 | 02/10/2026 |
| [[05_Van_hanh_hang_ngay_va_dieu_phoi\|OBK-HB-35]] | 2 | 02/10/2026 |
| [[NS-06_Don_xin_nghi_phep_va_ban_giao\|NS-06]] | 2 | 02/10/2026 |
| [[08_Ket_thuc_va_ban_giao\|OBK-HB-38]] | 2 | 02/10/2026 |
| [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] | 2 | 02/10/2026 |
| [[NS-07_Phieu_dang_ky_lam_them_gio\|NS-07]] | 2 | 02/10/2026 |
| [[05_Client_Guide_VI\|05_Client_Guide_VI]] | 3 | 01/10/2026 |
| [[05_Client_Guide_EN\|05_Client_Guide_EN]] | 3 | 01/10/2026 |
| [[03_Mo_hinh_van_hanh_bon_muc_kiem_soat_va_ma_tran_RACI\|OBK-QCNS-03]] | 2 | 01/10/2026 |
| [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]] | 2 | 01/10/2026 |
| [[NS-02_Phieu_danh_gia_cheo_hieu_suat\|NS-02]] | 2 | 01/10/2026 |
| [[04_Legal_Services_VI\|04_Legal_Services_VI]] | 2 | 01/10/2026 |
| [[04_Legal_Services_EN\|04_Legal_Services_EN]] | 2 | 01/10/2026 |
| [[08_Framework_Agreement_VI\|08_Framework_Agreement_VI]] | 2 | 01/10/2026 |
| [[08_Framework_Agreement_EN\|08_Framework_Agreement_EN]] | 2 | 01/10/2026 |
| [[09_HD_Nghiep_vu_giay_phep_va_thu_tuc_doanh_nghiep\|OBK-HB-41]] | 2 | 01/10/2026 |
| [[13_OBK-SOP-MK_Marketing_va_phat_trien_nguon_khach_hang\|OBK-SOP-MK]] | 2 | 01/10/2026 |
| [[OBK-SOP-NB-05_Tuyen_dung_va_onboarding_noi_bo\|OBK-SOP-NB-05]] | 2 | 01/10/2026 |
| [[OBK-SOP-NB-06_Nghi_viec_va_offboarding_noi_bo\|OBK-SOP-NB-06]] | 2 | 01/10/2026 |
| [[OBK-SOP-NB-10_Quan_ly_nghi_phep_va_lam_viec_tu_xa\|OBK-SOP-NB-10]] | 2 | 01/10/2026 |
| [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] | 1 | 01/10/2026 |
| [[01_Goi_dich_vu_va_hang_muc_kem_goi\|OBK-DM-GOI]] | 1 | 01/10/2026 |
| [[02_Bang_gia_Giay_phep_va_doanh_nghiep\|OBK-DM-GP]] | 1 | 01/10/2026 |
| [[03_Bang_gia_Ke_toan_va_thue\|OBK-DM-KT]] | 1 | 01/10/2026 |
| [[04_Bang_gia_Lao_dong_va_giay_to_nguoi_nuoc_ngoai\|OBK-DM-LD]] | 1 | 01/10/2026 |
| [[05_Bang_gia_Dich_vu_phap_ly_va_so_huu_tri_tue\|OBK-DM-LS]] | 1 | 01/10/2026 |
| [[06_Bang_gia_Chu_ky_so_va_hoa_don_dien_tu\|OBK-DM-CKS]] | 1 | 01/10/2026 |
| [[07_Bang_gia_Dich_vu_o_nuoc_ngoai\|OBK-DM-NN]] | 1 | 01/10/2026 |
| [[08_Hang_muc_ghi_nhan_rieng\|OBK-DM-NG]] | 1 | 01/10/2026 |
| [[GLOSSARY\|GLOSSARY]] | 1 | 01/10/2026 |
| [[00_INDEX\|OBK-INDEX]] | 1 | 01/10/2026 |
| [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]] | 1 | 01/10/2026 |
| [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] | 1 | 01/10/2026 |
| [[12_HD_Phuong_phap_tra_cuu_va_cap_nhat_phap_luat\|OBK-HB-71]] | 1 | 01/10/2026 |
| [[PL_F_Bao_cao_kiem_soat\|OBK-SOP-PL-F]] | 1 | 01/10/2026 |
| [[13_Lich_tuan_thu_va_quy_trinh_khai_nop\|OBK-HB-13]] | 1 | 01/10/2026 |
| [[01_Nguyen_tac_hanh_nghe\|OBK-SOP-01]] | 1 | 01/10/2026 |
| [[03_Onboarding_khach_hang\|OBK-SOP-03]] | 1 | 01/10/2026 |
| [[04_Quan_ly_chung_tu\|OBK-SOP-04]] | 1 | 01/10/2026 |
| [[05_Quy_trinh_ke_toan_thang\|OBK-HB-05]] | 1 | 01/10/2026 |
| [[06_Khoa_so_va_doi_chieu\|OBK-HB-06]] | 1 | 01/10/2026 |
| [[08_Che_do_ke_toan_ap_dung\|OBK-HB-08]] | 1 | 01/10/2026 |
| [[08_PL_C_Ky_nang_chuyen_mon\|OBK-QCNS-08-PL-C]] | 1 | 01/10/2026 |
| [[08_PL_E_Phieu_vi_tri\|OBK-QCNS-08-PL-E]] | 1 | 01/10/2026 |
| [[BG-01_Ban_giao_tiep_nhan_nhan_su\|BG-01]] | 1 | 01/10/2026 |
| [[BG-02_Ban_giao_nghi_viec_offboarding\|BG-02]] | 1 | 01/10/2026 |
| [[CK-01_Ban_giao_chu_ky_so_va_hoa_don\|CK-01]] | 1 | 01/10/2026 |
| [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx\|CK-02]] | 1 | 01/10/2026 |
| [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]] | 1 | 01/10/2026 |
| [[CT-01_Giay_di_duong_va_quyet_toan_cong_tac_phi\|CT-01]] | 1 | 01/10/2026 |
| [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] | 1 | 01/10/2026 |
| [[DL-01_Nhat_ky_theo_doi_su_co_du_lieu_ca_nhan\|DL-01]] | 1 | 01/10/2026 |
| [[DT-01_Danh_ba_thong_tin_doi_tac_nha_cung_cap_va_co_quan\|DT-01]] | 1 | 01/10/2026 |
| [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]] | 1 | 01/10/2026 |
| `DV-02` | 1 | 01/10/2026 |
| [[GC-01_Bang_tinh_gia_thanh_dich_vu_va_bien_loi_nhuan_khach_hang\|GC-01]] | 1 | 01/10/2026 |
| `GP-01` | 1 | 01/10/2026 |
| `HD-01` | 1 | 01/10/2026 |
| [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao\|HD-02]] | 1 | 01/10/2026 |
| [[HH-01_Phieu_dang_ky_khach_duoc_gioi_thieu\|HH-01]] | 1 | 01/10/2026 |
| [[HH-03_Phieu_thong_bao_hoan_tra_hoa_hong\|HH-03]] | 1 | 01/10/2026 |
| [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang\|KN-01]] | 1 | 01/10/2026 |
| [[KQ-01_Kiem_ke_quy_tien_mat\|KQ-01]] | 1 | 01/10/2026 |
| [[MK-01_Bang_theo_doi_chien_dich_marketing_va_chuyen_doi_lead\|MK-01]] | 1 | 01/10/2026 |
| `MT-01` | 1 | 01/10/2026 |
| [[NC-01_So_theo_doi_nha_cung_cap_va_danh_gia\|NC-01]] | 1 | 01/10/2026 |
| [[NS-01_Phieu_tu_danh_gia_hieu_suat\|NS-01]] | 1 | 01/10/2026 |
| [[NS-03_Phieu_tong_hop_diem_cuoi_ky\|NS-03]] | 1 | 01/10/2026 |
| [[NS-08_Bien_ban_vi_pham_ky_luat_lao_dong\|NS-08]] | 1 | 01/10/2026 |
| [[NS-09_Bang_ke_hoach_va_phan_bo_ngan_sach_tai_chinh_nam\|NS-09]] | 1 | 01/10/2026 |
| [[OB-01_Bang_theo_doi_tien_do_onboarding_khach_hang_moi\|OB-01]] | 1 | 01/10/2026 |
| [[PM-01_Bang_theo_doi_thue_bao_phan_mem_noi_bo\|PM-01]] | 1 | 01/10/2026 |
| [[RD-01_So_theo_doi_yeu_cau_nghien_cuu_phap_ly_va_ban_ghi_nho_tu_van\|RD-01]] | 1 | 01/10/2026 |
| [[SC-01_Nhan_thong_bao_doi_so_tai_khoan\|SC-01]] | 1 | 01/10/2026 |
| [[TH-01_Bang_theo_doi_tien_do_khai_thue_va_bctc\|TH-01]] | 1 | 01/10/2026 |
| [[TL-01_So_giao_nhan_tai_lieu_va_buu_pham\|TL-01]] | 1 | 01/10/2026 |
| [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu\|TL-02]] | 1 | 01/10/2026 |
| [[TS-01_So_theo_doi_tai_san_va_cong_cu\|TS-01]] | 1 | 01/10/2026 |
| [[TS-02_Bang_theo_doi_gio_lam_viec_nang_suat_va_cong_suat_nhan_su\|TS-02]] | 1 | 01/10/2026 |
| [[TU-01_So_theo_doi_tam_ung_va_hoan_ung\|TU-01]] | 1 | 01/10/2026 |
| [[VB-01_So_theo_doi_vu_viec_tu_van_va_hop_dong\|VB-01]] | 1 | 01/10/2026 |
| [[PL_Anh_xa_nhan_su\|OBK-QCTC-02-PL-D]] | 1 | 01/10/2026 |
| [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] | 1 | 01/10/2026 |
| [[PL_Tu_dien_vai\|OBK-QCTC-02-PL-A]] | 1 | 01/10/2026 |
| [[01_Tiep_nhan_va_sang_loc_lead\|OBK-HB-31]] | 1 | 01/10/2026 |
| [[07_Giu_khach_va_mo_rong\|OBK-HB-37]] | 1 | 01/10/2026 |
| [[18_Kiem_soat_chat_luong\|OBK-SOP-18]] | 1 | 01/10/2026 |
| [[21_Cap_nhat_van_ban_phap_luat\|OBK-SOP-21]] | 1 | 01/10/2026 |
| [[08_PL_B_Tieu_chi_cong_viec_dang_ho_so\|OBK-QCNS-08-PL-B]] | 1 | 01/10/2026 |
| [[00_README_Cach_dung\|OBK-SOP-DV-00]] | 1 | 01/10/2026 |
| [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] | 2 | 30/09/2026 |
| [[OBK-SOP-NB-11_Dang_ky_va_quan_ly_lam_them_gio\|OBK-SOP-NB-11]] | 1 | 30/09/2026 |
| [[OBK-SOP-NB-16_Kiem_toan_noi_bo_va_kiem_soat_tuan_thu\|OBK-SOP-NB-16]] | 1 | 30/09/2026 |

## 2. Chi tiết từng tài liệu

### `OBK-QCTC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.4.0.1 | Bỏ số đếm liệt kê, lối tự sự và ghi chú log ở quy chế tài chính. |
| 04/10/2026 | R.4.0.0 | Xóa định mức ĐM-13 (bảo hiểm hưu trí, nhân thọ tự nguyện) và định mức ĐM-14 (ăn giữa ca, ăn trưa chi bằng tiền) cùng mục 27.6 và mục 27.7 vì oBacker chưa áp dụng hai khoản này<br>Chuyển mức nội bộ của ĐM-10 (2.500.000 đồng một người một năm) và ĐM-12 (90% mức lương bình quân) thành định mức chính thức của oBacker, mức tối đa luật định chuyển sang cột căn cứ<br>Sửa mục 21.1, 27.1, 50.3, callout Điều 50 và bảng căn cứ cho phù hợp |
| 04/10/2026 | R.3.0.1 | Bo so dem tai tieu de Dieu 5; chuan hoa muc 5.1a phan dinh pham vi ap dung nguyen tac chung tu truoc; chuyen cac ghi chu dan do tu su, ghi nhan tra cuu va callout can xac minh tai cac Dieu 9, 12a, 16, 17, 21, 23, 24, 25, 29, 38, 45, 46, 49 thanh quy dinh va ghi chu hanh chinh chuan muc |
| 02/10/2026 | R.3.0.0 | Ma trận mục 12.3: bậc B2 người quyết định là COO, CEO là dự phòng khi COO vắng mặt, không còn KTT; cập nhật ghi chú kiểm tra quy tắc tách quyền 47.2 cho khớp bậc B2 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.2.1.0 | Thêm khối Bản tóm tắt đầu tài liệu (7 nguyên tắc tài chính theo Điều 5 và bảng bản đồ 10 chương kèm vai trò cần đọc); chia 26 câu văn dài thành các câu ngắn hơn tại các mục giải thích, không đổi nghĩa bất kỳ điều khoản nào |
| 27/09/2026 | R.2.0.0 | Thu gọn hạn mức chi tiêu 3 bậc tại mục 12.3: B1 dưới 5 triệu do TL quyết, B2 từ 5 đến dưới 20 triệu do COO hoặc KTT quyết, B3 từ 20 triệu do Tổng Giám đốc quyết |

### `OBK-SOP-NB-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.3.0.1 | Chuan hoa tieu de muc 6.10.2 bo so dem; chuyen cac callout can xac minh va ghi chu dan do tai cac muc 6.0, 6.4, 6.10, 6.14 thanh ghi chu hanh chinh va can cu phap ly chuan muc |
| 02/10/2026 | R.3.0.0 | Bậc B2 đổi người duyệt chi thành COO, CEO là dự phòng khi COO vắng mặt; KTT giữ vị trí chuyên môn không phải người duyệt. Bậc B3 nêu rõ mức tối đa 100.000.000 đồng, khoản từ 100.000.000 đồng trở lên do HĐQT phê duyệt, đồng bộ với mục 12.3 và 12.3a của OBK-QCTC-01 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.2.2.0 | Them cau dan chieu quy tac uy quyen khi nguoi phe duyet vang, muc 8.1 cua NB-00, vao sau buoc B6 Luong B; chuan hoa tu ngu khoan nho hon 20.000.000 dong trong vi du muc 6.15 |
| 30/09/2026 | R.2.1.0 | Thêm mục 1.1 TRA NHANH KÝ HIỆU VAI TRÒ bảy vai trò; mục 1.2 BẢNG TỔNG HỢP MỐC THỜI GIAN 21 mốc; mục 6.15 VÍ DỤ khoản mua 7,5 triệu bậc B2; mục 6.16 TRƯỜNG HỢP PHÁT SINH 9 nhánh; chia 18 câu dài |
| 27/09/2026 | R.2.0.0 | Cập nhật bảng thẩm quyền 3 bậc B1 tới B3, bỏ cơ chế tự động nâng bậc, đơn giản hóa xác minh nhà cung cấp dưới 20 triệu và yêu cầu báo giá theo 3 bậc |

### `OBK-QCTC-02-PL-B`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.3.0.0 | Hàng chi trong hạn mức bậc B2 đổi thành COO, CEO là dự phòng. Hai hàng ký hợp đồng với khách đổi chủ thể ký thành NĐDPL (CEO hoặc Chủ tịch HĐQT); TP Thương mại chỉ đàm phán và duyệt, không ký |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Cập nhật bảng thẩm quyền chi tiêu 3 bậc B1 tới B3; phân quyền ký hợp đồng dịch vụ chuẩn và biểu giá chuẩn cho Trưởng phòng Thương mại |

### `OBK-SOP-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.4.0.1 | Bỏ lối tự sự và ghi chú log ở chuẩn hành dịch vụ, mục trình tự xung đột. |
| 04/10/2026 | R.4.0.0 | Gộp mười bước B1 đến B10 thành năm bước B1 đến B5 tại mục 6, sửa NT-2, NT-5, chỉ số CS-07, chuẩn nhắc mục 6.2 và các dẫn chiếu bước |
| 03/10/2026 | R.3.1.0 | Thêm mục 5.6 Nguyên tắc xử lý yêu cầu ngoài bảng Job gồm 6 nguyên tắc, là bản gốc cho các SOP bộ phận dẫn chiếu |
| 02/10/2026 | R.3.0.0 | Mục 7.3a: thêm bảng SLA thống nhất theo loại yêu cầu và mức (sự cố, thường quy, tư vấn, gấp), áp chung cho bốn bộ phận dịch vụ |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Chuyển đồng hồ T1 và T2 thành văn hóa phản hồi, tập trung đo lường chỉ số On-Time Delivery và quy chuẩn 4 nhóm thời hạn SLA |

### `OBK-SOP-AM`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.4.0.0 | Gộp bảng RACI của OBK-SOP-AM từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 03/10/2026 | R.3.1.1 | Sau bảng Job: thêm dẫn chiếu về mục 5.6 OBK-SOP-00 cho yêu cầu không khớp Job nào |
| 02/10/2026 | R.3.1.0 | thêm mục Q&A cho các Job AM ưu tiên; mở rộng AM-18 gồm phát hành phụ lục nâng/đổi gói |
| 02/10/2026 | R.3.0.0 | AM-04: đề xuất đã hết thời hạn hiệu lực mà khách yêu cầu báo giá lại, báo giá mới theo biểu giá hiện hành giảm 35%, theo mục 10.4 Bản Điều Khoản Dịch Vụ Kế toán và Thuế |
| 02/10/2026 | R.2.3.0 | AM-20: tách 3 mốc; thu hồi quyền oBacker 24 giờ, khoảng tải dữ liệu khách 30 ngày theo Điều 9 TnC, lưu trữ/xóa chỉ sau khi hết 30 ngày |
| 02/10/2026 | R.2.2.0 | Bổ nguồn phát sinh thứ hai cho AM-01: lead bàn giao nội bộ từ MK-06 theo OBK-SOP-MK |
| 01/10/2026 | R.2.1.0 | Thêm dẫn chiếu tới CC-LIC-29-SECURITY-01 tới 15 vào các Job AM-06, AM-08, AM-19, AM-20 liên quan tới quản lý dữ liệu khách hàng |
| 01/10/2026 | R.2.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Cập nhật phân quyền 2 cấp ký hợp đồng dịch vụ chuẩn cho Trưởng phòng Thương mại và quy định 4 trường hợp ngoại lệ chuyển Tổng Giám đốc |

### `OBK-HB-33`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.3.0.0 | Người ký hợp đồng dịch vụ chuẩn là đại diện theo pháp luật (NĐDPL: CEO hoặc Chủ tịch HĐQT); TP Thương mại chỉ đàm phán và duyệt trong phân quyền, không ký; cập nhật ma trận vai trò và bước 6 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Cập nhật thẩm quyền ký hợp đồng dịch vụ chuẩn do Trưởng phòng Thương mại phê duyệt, trường hợp ngoại lệ chuyển Tổng Giám đốc |

### `OBK-HB-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.1.2 | Đồng bộ khung chương: mục "Căn cứ pháp lý" ra khỏi khuôn cấp 3 (K4 đủ 9 mục), "khung 10 mục" thành "khung 9 mục", tra nhanh mục 5 và 6 |
| 04/10/2026 | R.2.1.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de muc 2 va 9, chuyen callout sang can cu phap luat |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 29/09/2026 | R.2.1.0 | Chuyển mục 5 Mục lục từ bảng chữ thường sang liên kết tới từng chương và phụ lục |
| 27/09/2026 | R.2.0.0 | Cơ cấu lại Handbook Kế toán thành 2 khối độc lập: 4 Bảng kiểm chu kỳ thao tác và khối tri thức tra cứu tham khảo pháp lý |

### `OBK-QCNS-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Thu gọn mô hình kiểm soát từ 4 mức thành 2 cấp thực chất Maker làm và Checker Approver duyệt, COO thực hiện hậu kiểm xác suất |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Bãi bỏ hoàn toàn đánh giá chéo ngang hàng, thu gọn 3 nhóm chỉ số cốt lõi Chất lượng OTD 70%, Khối lượng 20%, Kỷ luật 10% và 4 mức xếp loại |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Ghi nhận bãi bỏ biểu mẫu đánh giá chéo theo chủ trương tinh giản khung đánh giá hiệu suất và OBK-QCNS-08 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-GOI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-GP`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-KT`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-LD`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-LS`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-CKS`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-NN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-NG`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `00_TnC_Master_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.0.0 | Định mức FCT theo gói, Partner Core 01 hợp đồng/tháng, Partner Growth và Prime 03 hợp đồng/tháng<br>Rà soát hợp đồng: hợp đồng 11 đến 20 trang tính 02 lượt soát xét; hợp đồng trên 20 trang, từ trang thứ 21 phụ thu 100.000đ/trang hoặc chuyển dịch vụ bổ sung<br>Nguyên tắc cam kết thời gian phản hồi: xác nhận trong 04 giờ làm việc, nội dung trả lời trong 24 đến 48 giờ làm việc |
| 01/10/2026 | R.1.1.1 | Đổi từ ngữ: cách gọi định mức giao dịch tối đa (Điều 15) và cách gọi cơ chế cam kết Quý 4 (Điều 16) viết lại bằng 'mức tối đa' và 'chốt hợp đồng Quý 4' |
| 01/10/2026 | R.1.1.0 | Cập nhật ranh giới bồi thường 3 tháng, trần cứng 1.500 ct/tháng, cơ chế FUP, chính sách FCT 3 HĐ/tháng, thanh tra tại bàn và kiểm toán độc lập FDI |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `00_TnC_Master_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.0.0 | FCT quota by package, Partner Core 01 contract/month, Partner Growth and Prime 03 contracts/month<br>Contract review: contracts of 11 to 20 pages count as two review rounds; contracts over 20 pages are charged VND 100,000 per page from page 21 or move to an add-on service<br>Response-time principle: acknowledgement within 04 business hours, substantive reply within 24 to 48 business hours |
| 01/10/2026 | R.1.1.1 | Wording: 'hard ceiling of 1,500 transactions' reworded to 'maximum of 1,500 transactions' (Article 15); Q4 commitment mechanism reworded (Article 16) |
| 01/10/2026 | R.1.1.0 | Update the 3-month liability cap boundary, the hard cap of 1,500 vouchers per month, the FUP mechanism, the FCT 3-agreements-per-month policy, on-site inspection and independent audit for FDI |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `02_Accounting_Tax_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.2.0 | Tách TNCN tiền lương thành hai đầu việc: khấu trừ và kê khai thuế TNCN theo kỳ thuộc Dịch Vụ Kế toán (PL-KT); quyết toán TNCN năm, đăng ký người phụ thuộc và chứng từ khấu trừ cho người lao động thuộc Dịch Vụ Nhân Sự (PL-NS) |
| 02/10/2026 | R.2.1.0 | Mục 10.1: phụ phí tài khoản ngân hàng ngoài định mức 200.000đ/tài khoản/tháng, mã mới `ADD-BANK-ACC-2026`; kê khai FCT ngoài định mức 1.000.000đ/hồ sơ, mã mới `ADD-FCT-RETURN-2026`<br>Mục 10.4: thêm dòng chuyển tiếp hai mã phụ thu trên kể từ ngày 05/10/2026 |
| 02/10/2026 | R.2.0.0 | Mục 10.1: phụ thu mở rộng định mức giao dịch dùng mã mới `ADD-TXN-BLOCK-500-2026`, `ADD-TXN-BLOCK-1000-2026`, `ADD-TXN-BLOCK-1500-2026`, định mức Partner Core cho doanh nghiệp FDI là 100 Giao Dịch/tháng; hỗ trợ thanh tra thuế tại trụ sở 2.500.000đ/ngày làm việc, mã mới `ADD-TAX-INSPECT-2026`, thông báo và thanh toán trước tối thiểu 03 ngày, đối soát theo ngày thực tế<br>Mục 10.4: thêm điều khoản áp dụng giá và mã phụ thu mới từ ngày 05/10/2026; khách hiện tại giữ giá và mã đã ký đến hết ngày 31/03/2027, áp mã mới từ kỳ 01/04/2027; báo giá hết hạn mà khách yêu cầu báo giá lại giảm 35%<br>Mục 3.2: định mức FCT theo gói, Partner Core 01 hợp đồng/tháng, Partner Growth và Prime 03 hợp đồng/tháng |
| 01/10/2026 | R.1.1.1 | Đổi từ ngữ: cách gọi định mức tối đa gói Growth (Điều 10) viết lại bằng 'mức tối đa'; từ tiếng Anh gọi tệp làm việc (Điều 7) đổi thành 'tệp làm việc' |
| 01/10/2026 | R.1.1.0 | Đồng bộ chế độ kế toán nhị phân (TT 58 cho VN siêu nhỏ, TT 99 cho 100% FDI), định mức FCT và quy chế thanh tra/kiểm toán độc lập |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `02_Accounting_Tax_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.2.0 | Split salary PIT into two workstreams: periodic withholding and filing under the Accounting & Tax Services (PL-KT); annual PIT finalisation, dependant registration and employee withholding certificates under the HR, Payroll & Insurance Services (PL-NS) |
| 02/10/2026 | R.2.1.0 | Section 10.1: bank-account overage surcharge VND 200,000/account/month under new code `ADD-BANK-ACC-2026`; excess FCT filings VND 1,000,000/filing under new code `ADD-FCT-RETURN-2026`<br>Section 10.4: transition line for the two surcharge codes from October 5, 2026 |
| 02/10/2026 | R.2.0.0 | Section 10.1: transaction-volume surcharges move to new codes `ADD-TXN-BLOCK-500-2026`, `ADD-TXN-BLOCK-1000-2026`, `ADD-TXN-BLOCK-1500-2026`; Partner Core quota for FDI enterprises is 100 Transactions/month; on-site tax audit support is VND 2,500,000 per working day under new code `ADD-TAX-INSPECT-2026`, prepaid on an estimate of at least 03 days, settled on actual days<br>Section 10.4: new clause applying the new surcharge codes and prices from October 5, 2026; existing clients keep contracted codes and prices through March 31, 2027, new codes apply from the April 1, 2027 cycle; re-quoted expired quotations carry a 35% discount<br>Section 3.2: FCT quota by package, Partner Core 01 contract/month, Partner Growth and Prime 03 contracts/month |
| 01/10/2026 | R.1.1.1 | Wording: Growth package 'hard ceiling' reworded to 'maximum' (Article 10); fix REVISION LOG header to Date/Version/Description |
| 01/10/2026 | R.1.1.0 | Synchronize binary accounting standards (Circular 58 for micro VN, Circular 99 for 100% FDI), FCT quotas and audit representation |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `04_Legal_Services_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.1.0 | Tích hợp hạn mức rà soát hợp đồng và ĐKKD vào các gói đối tác Partner Growth/Prime, áp dụng Master SKU Catalog cho dịch vụ ngoài gói |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `04_Legal_Services_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.1.0 | Integrate contract review and ERC quotas into Partner Growth/Prime retainers, apply Master SKU Catalog for add-on services |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `05_Client_Guide_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.1.1 | Đổi từ ngữ: cách gọi định mức giao dịch (mục 3, mục 13) viết lại bằng 'mức tối đa'; cụm rủi ro (mục 11) viết lại bằng 'rủi ro bị xử phạt nộp chậm' |
| 01/10/2026 | R.1.1.0 | Cập nhật bảng so sánh ba gói đối tác Partner Core, Growth, Prime, cơ chế FUP và biểu phí phụ thu FDI +25% |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `05_Client_Guide_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.1.1 | Wording: transaction 'hard ceiling' reworded to 'maximum' (Sections 3, 13); penalty wording fixed (Section 11); fix REVISION LOG header to Date/Version/Description |
| 01/10/2026 | R.1.1.0 | Update comparative matrix for Partner Core, Growth, Prime packages, FUP mechanism and FDI +25% surcharge |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `08_Framework_Agreement_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.1.0 | Đồng bộ mẫu Đơn Đặt Hàng (loại hình FDI, TT 58/99, định mức FUP, chu kỳ phí năm/quý), cơ chế cam kết Quý 4, mốc 15/03 và trần bồi thường 3 tháng |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `08_Framework_Agreement_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.1.0 | Synchronize Order Form template (FDI entity, Circular 58/99, FUP quotas, billing cycles), Q4 commitment, March 15 checkpoint and 3-month liability cap |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `GLOSSARY`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-INDEX`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-41`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.0.1 | Thực hiện N12.4: biện pháp xử lý tại bảng kiểm cấp thẻ tạm trú viết rõ 'nhỏ hơn 03 tỷ đồng' theo Luật 51/2019/QH14 |

### `OBK-SOP-KT`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.3.0.0 | Gộp bảng RACI của OBK-SOP-KT từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 03/10/2026 | R.2.1.1 | Sau bảng Job: thêm dẫn chiếu về mục 5.6 OBK-SOP-00 cho yêu cầu kế toán không khớp Job nào |
| 02/10/2026 | R.2.1.0 | Thêm mục CÂU HỎI THƯỜNG GẶP THEO JOB cho 8 Job ưu tiên KT-01, KT-07, KT-10, KT-21, KT-23, KT-28, KT-29, KT-30 |
| 02/10/2026 | R.2.0.0 | Thêm job KT-30 Nộp tiền thuê đất và thuế sử dụng đất, chu trình theo thông báo của cơ quan thuế, và liệt kê vào phạm vi mục 1.2; thêm mục 3.3 quy ước custodial token chữ ký số của khách hàng: bộ phận Kế toán giữ tập trung, bộ phận khác xin và trả token, không lưu giữ quá 24 giờ làm việc. |
| 02/10/2026 | R.1.1.0 | KT-07: tách mốc nháp tờ khai (ngày 13) khỏi ký gửi (ngày 19-20, sau khi KT-04 khóa sổ ngày 18), khớp mốc đóng sổ 16-25 của TnC |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-LIC`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 03/10/2026 | R.1.3.1 | Sau bảng Job: thêm dẫn chiếu về mục 5.6 OBK-SOP-00 cho yêu cầu giấy phép không khớp Job nào |
| 02/10/2026 | R.1.3.0 | thêm mục Q&A cho các Job LIC ưu tiên |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.2.0 | Mở khóa LIC-28 "Thông báo website TMĐT": thêm 12 CanCu (CC-LIC-28-TMDT-01 đến -12) từ Luật 122/2025/QH15, NĐ 248/2026/NĐ-CP, NĐ 117/2025/NĐ-CP; 3 VanBan (VB-122, VB-248, VB-117); cập nhật dẫn chiếu pháp lý trong job table LIC-28 và mục 9<br>Thêm 10 CanCu về Nhãn hiệu (CC-LIC-30-MARKS-01 đến -10) từ Luật 07/2022 và Nghị định 65/2023; cập nhật danh sách tài liệu căn cứ cho LIC-30 |
| 30/09/2026 | R.1.1.0 | Tích hợp bảy Job LIC-25 tới LIC-31 từ bảng nguồn PL_LIC_01 mục 9 vào danh mục Job, bổ sung cột 'Nguồn phát sinh'; bốn Job LIC-28 tới LIC-31 ghi chú hiện đang chặn, xem mục 9 |

### `OBK-SOP-LD`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.3.0.0 | Gộp bảng RACI của OBK-SOP-LD từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 04/10/2026 | R.2.2.0 | thêm mục Câu hỏi thường gặp theo Job cho các Job LD ưu tiên |
| 02/10/2026 | R.2.1.0 | Thêm quy ước custodial token chữ ký số vào mục 1.3: token của khách do bộ phận Kế toán giữ tập trung, bộ phận Lao Động xin token khi nộp tờ khai, báo cáo BHXH trên cổng điện tử, dùng xong trả lại ngay, không lưu giữ quá 24 giờ làm việc |
| 02/10/2026 | R.2.0.0 | Thêm Job LD-27 quyết toán thuế TNCN năm và đăng ký người phụ thuộc, chu trình năm, nộp chậm nhất 31/03 năm sau; tách ranh giới với Kế toán: Kế toán khấu trừ và kê khai thuế TNCN theo kỳ, Lao Động làm quyết toán TNCN năm và đăng ký người phụ thuộc |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-LS`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.2.0.0 | Gộp bảng RACI của OBK-SOP-LS từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 04/10/2026 | R.1.1.0 | Thêm mục CÂU HỎI THƯỜNG GẶP THEO JOB cho bộ LS, 10 Job LS-03, LS-04, LS-05, LS-06, LS-07, LS-08, LS-09, LS-13, LS-14, LS-17 |
| 03/10/2026 | R.1.0.2 | Sau bảng Job: thêm dẫn chiếu về mục 5.6 OBK-SOP-00 cho yêu cầu pháp lý không khớp Job nào |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-RD`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.2.0.0 | Gộp bảng RACI của OBK-SOP-RD từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 04/10/2026 | R.1.1.0 | Thêm mục CÂU HỎI THƯỜNG GẶP THEO JOB cho 10 Job ưu tiên RD |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-MK`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-LIC-PL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Gộp bảng RACI của PL_LIC_01 từ mười bước thành năm bước B1 đến B5 |
| 02/10/2026 | R.1.0.2 | Mục 7.1: bỏ tham chiếu mã GT-07, giữ dữ kiện quy định thẩm định theo Luật số 131/2025/QH15 và tồn đọng hồ sơ tại Cục Sở hữu trí tuệ |
| 01/10/2026 | R.1.0.1 | Ghi nhận mục 9 là bảng nguồn đã tích hợp vào danh mục Job OBK-SOP-LIC, ghi chú bốn Job LIC-28 tới LIC-31 hiện đang chặn, xem mục 9 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.2.1.2 | Bỏ lối tự sự ở chuẩn hành nội bộ. |
| 04/10/2026 | R.2.1.1 | Bo so dem tai tieu de muc 8 dan chieu cac nguyen tac tai chinh cua OBK-QCTC-01 Dieu 5 |
| 04/10/2026 | R.2.1.0 | Them muc CAU HOI THUONG GAP THEO JOB sau bang Job, tra loi theo chot kiem soat, moc thoi han va buoc chuyen Job cua 12 Job noi bo trong yeu, gom mua sam, thanh toan, tam ung, hoan ung, phiem thu phiem chi, tam ung tien luong, cham cong, luong, nghi phep va gio lam them |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.2.0.0 | Thêm mục 8.1 ủy quyền phê duyệt khi người có thẩm quyền phê duyệt theo quy trình vắng mặt: thẩm quyền chuyển tự động lên cấp trên liền kề trong chuỗi phê duyệt, chỉ trong thời gian vắng mặt, ghi nhận vào hệ thống quản trị nội bộ kèm lý do, không thay đổi chuỗi phê duyệt thường |

### `OBK-SOP-NB-05`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.1.0 | Thêm bảng Mốc thời gian tổng hợp trong mục 1, thêm mục VÍ DỤ và TRƯỜNG HỢP PHÁT SINH trước mục Liên kết, chia các câu dài hơn 250 ký tự thành câu ngắn hơn |

### `OBK-SOP-NB-06`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.1.0 | Thêm bảng Mốc thời gian tổng hợp trong mục 1, thêm mục VÍ DỤ và bảng TRƯỜNG HỢP PHÁT SINH dạng Nếu - Thì trước mục Liên kết, chia các câu dài hơn 250 ký tự thành câu ngắn hơn |

### `OBK-SOP-NB-10`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.1.0 | Thêm bảng MỐC THỜI GIAN TỔNG HỢP ngay sau cảnh báo mở đầu, thêm mục 9. VÍ DỤ và mục 10. TRƯỜNG HỢP PHÁT SINH trước nhật ký sửa; các câu trong tài liệu đều dưới 250 ký tự nên không chia câu |

### `OBK-SOP-NB-04`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 30/09/2026 | R.1.2.0 | Them cau dan chieu quy tac uy quyen khi nguoi duyet bang cong hoac bang luong vang, muc 8.1 cua NB-00, vao cuoi muc 4.1 |
| 30/09/2026 | R.1.1.0 | Thêm mục 1.1 BẢNG MỐC THỜI GIAN TỔNG HỢP 13 mốc; mục 6.9 gồm ví dụ kỳ lương tháng 10/2026 và 8 trường hợp phát sinh; chia 5 câu dài |

### `OBK-SOP-PL-C`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.1.1.0 | Dòng 11 phụ lục: sửa nhãn mốc 05 giờ thành 'mốc nội bộ, khắt khe hơn mốc pháp luật 06 giờ, Job KT-21 dẫn chiếu' (bỏ nhãn BẢN GỐC và ghi chú 'cần đồng bộ') |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-35`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.1.1.0 | Mục 1: bổ Job AM-12 xác nhận khách đã nhận và AM-13 cập nhật định kỳ (sáu Job, khớp cột Job của bảng mục lục) |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-06`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.1.1.0 | Mốc gửi đơn nghỉ: bỏ phân tầng 02/05 ngày, thống nhất nộp trước ít nhất 03 ngày làm việc cho mọi loại nghỉ, khớp Nội Quy Lao Động Điều 7.5.2 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-38`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.1.1.0 | Bước 5: tách mốc lưu trữ hồ sơ khỏi 30 ngày tải dữ liệu của khách (Điều 9 TnC); thêm dòng khoảng tải 30 ngày, lưu trữ/xóa chỉ sau khi hết hạn |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL2`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.1.1.0 | Sinh lại bảng tra SLA: đồng bộ mốc KT-07 và AM-20 mới, thêm 6 Job LIC-25 tới LIC-30 từ các PR đã merge (203 lên 210 Job) |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-34`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.2.0.1 | Đổi dẫn chiếu bước B1 đến B10 thành B1 đến B5 tại hướng dẫn onboarding khách mới |
| 02/10/2026 | R.2.0.0 | Gửi kèm thư chào mừng, chốt lịch buổi họp khởi động 45 đến 60 phút với người phụ trách tài khoản của khách, theo mục 4 Hướng Dẫn Khách |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `LU-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.2.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu LU-01 về Sổ cái OBK-MSR |
| 02/10/2026 | R.2.0.1 | Mục cấu trúc và dòng Sinh từ: 01-LĐTL là mẫu Bảng thanh toán tiền lương của Thông tư 99/2025/TT-BTC, BM-09 là biểu mẫu tự thiết kế riêng tại PL_BM, bỏ nhãn gộp hai mẫu |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-07`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.0.0 | Phiếu áp ngưỡng 10 giờ làm thêm lũy kế trong tháng: dưới 10 giờ quản lý trực tiếp phê duyệt, từ 10 giờ trở lên Ban Giám đốc (COO hoặc CEO theo nhánh quản lý) phê duyệt; cập nhật quy trình luân chuyển và ô ký xác nhận |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL-H`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-71`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-11`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 30/09/2026 | R.1.0.1 | Chia 3 câu dài ở giới hạn giờ làm thêm trong năm, công thức lương ban đêm và điều kiện miễn thuế thành câu ngắn, không đổi nghĩa |

### `OBK-SOP-PM`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm mục CÂU HỎI THƯỜNG GẶP THEO JOB cho 11 Job PM-01 tới PM-11 |
| 03/10/2026 | R.1.0.1 | Sau bảng Job: thêm dẫn chiếu về mục 5.6 OBK-SOP-00 cho yêu cầu đối tác không khớp Job nào |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL-F`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-17`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.2 | Sửa lối tự sự ở quy tắc chặn bội số. |
| 04/10/2026 | R.1.0.1 | Bo so dem tai tieu de cac bien phap bat buoc kiem soat rui ro xu phat cua muc 1.3 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-13`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de va RACI, chuyen callout sang quy dinh van hanh noi bo |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-04`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-05`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-06`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-07`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de 6.1 va 6.5, chuyen callout sang can cu phap ly |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL3`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Đổi dẫn chiếu bước B1 đến B10 thành B1 đến B5 và cập nhật nguyên tắc ba lớp theo NT-5 phân mức tại PL_3 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-08-PL-C`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-08-PL-E`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `BC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Rút lớp Tổng Giám đốc khỏi chuỗi ký xác nhận bảng kiểm tra sao lưu |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu BC-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `BG-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `BG-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `BH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu BH-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CK-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CK-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CN-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CN-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CT-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CV-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DT-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DT-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DV-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `GC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `GP-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HD-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HD-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HH-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu HH-02 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HH-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KH-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KN-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KP-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KP-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KQ-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KT-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KT-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `MK-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `MT-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Rút dòng Tổng Giám đốc duyệt khỏi mẫu đối chiếu ngân hàng |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu NH-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-09`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OB-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `PM-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `RD-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `SC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu TC-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TL-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TS-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TS-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TU-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `UE-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu UE-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `VB-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.1 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề, lược bỏ ghi chú dạng log và chuẩn hóa các quy định hiện hành |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02-PL-D`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02-PL-C`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02-PL-E`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.0 | Ban hành lần đầu: ma trận ủy quyền một trang với bốn mức trần (chi nội bộ, chiết khấu và giảm giá hướng khách, lịch trình, tính đảo); mức trần chi nội bộ dẫn chiếu mục 12.3 của OBK-QCTC-01 làm nguồn gốc duy nhất; nhóm không ủy quyền gồm bảy việc cộng hai dòng oBacker; hai trục tách riêng và bốn điều kiện để ma trận sống |

### `OBK-QCTC-02-PL-A`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.2 | Bỏ lối tự sự ở quy chế hạch toán kế toán. |
| 04/10/2026 | R.1.0.1 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề và callout, cập nhật quy định chuẩn mực về chứng từ và thủ quỹ |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-31`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-37`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL-T`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.0 | Dựng phụ lục đầu: phân 223 Job theo ba Tier, kèm cụm và cờ giữ hai lớp mọi Tier |

### `OBK-HB-09`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de muc, chuyen cac callout can xac minh sang quy dinh chuan muc va go phu luc chua xac minh khoi ban publish |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-18`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-21`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-MSR`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.1 | Chuẩn hóa ký hiệu hệ thống quản lý công việc. |
| 04/10/2026 | R.1.0.0 | Dựng Sổ cái đầu: 28 trường, 9 quy tắc ghi, ba view |

### `OBK-QCNS-08-PL-B`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-16`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 30/09/2026 | R.1.0.1 | Chia 4 câu dài ở căn cứ pháp lý, dữ liệu thuế và lao động, nghĩa vụ báo cáo rủi ro mức Cao thành câu ngắn, không đổi nghĩa |

### `TH-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.1.0.0 | Dựng bản đầu: nhập ba phiếu DV-02, GP-01, HD-01 (trục hạn + mốc theo luật + nhắc trước hạn, kể cả trục chữ ký số liên kết CK-02) |

### `OBK-SOP-DV-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
