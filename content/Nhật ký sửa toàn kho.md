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
> - [[OBK-QCTC-02_Bang_tham_quyen|OBK-QCTC-02]]: Phân quyền chi tiêu 3 bậc; phân quyền ký hợp đồng dịch vụ chuẩn và bảng giá chuẩn cho TP Thương mại.
> - [[OBK-MSR_Quy_tac_so_cai|OBK-MSR]]: Chuyển T1/T2 thành văn hóa phản hồi, đo lường duy nhất OTD %, chuẩn hóa 4 nhóm thời hạn SLA.
> - [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]]: Phân quyền ký hợp đồng chuẩn cho TP Thương mại, định rõ 4 trường hợp ngoại lệ chuyển TGĐ.
> - [[01_Huong_dan_AM_Ban_hang|OBK-HB-33]]: Quy trình ký hợp đồng dịch vụ chuẩn do TP Thương mại ký duyệt.
> - [[00_Muc_luc_va_cach_dung\|OBK-HB-00]]: Cơ cấu Handbook Kế toán thành 2 khối độc lập (4 Bảng kiểm chu kỳ và Khối tri thức tra cứu tham khảo).
> - `OBK-QCNS-03`: Thu gọn mô hình kiểm soát từ 4 mức thành 2 cấp thực chất (Maker làm, Checker/Approver duyệt), COO làm QA độc lập.
> - [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]]: Bãi bỏ đánh giá chéo ngang hàng, thu gọn 3 nhóm chỉ số cốt lõi (OTD 70%, Khối lượng 20%, Kỷ luật 10%) và 4 mức xếp loại.
> - `NS-02`: Ghi nhận chính thức bãi bỏ biểu mẫu đánh giá chéo ngang hàng.
> - [[00_INDEX]]: Xóa bỏ bảng 42 dòng tranh chấp, thiết lập Nguyên tắc Phân định Hiệu lực 3 Cấp và SSOT.

## 1. Danh mục tài liệu

Trang này ghi 751 lượt sửa thuộc các bản cũ của 186 tài liệu, tính tới 08/10/2026. Lượt sửa của bản hiện hành ghi tại mục NHẬT KÝ SỬA trong chính tài liệu đó.

| Tài liệu | Số lượt sửa | Ngày sửa gần nhất |
| --- | --- | --- |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] | 16 | 08/10/2026 |
| [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] | 15 | 08/10/2026 |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | 14 | 08/10/2026 |
| [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] | 11 | 08/10/2026 |
| [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]] | 10 | 08/10/2026 |
| [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] | 10 | 08/10/2026 |
| [[OBK-SOP-NB-06_Nghi_viec_va_offboarding_noi_bo\|OBK-SOP-NB-06]] | 10 | 08/10/2026 |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] | 10 | 08/10/2026 |
| [[00_Muc_luc_va_cach_dung\|OBK-HB-00]] | 9 | 08/10/2026 |
| [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]] | 9 | 08/10/2026 |
| [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] | 9 | 08/10/2026 |
| [[OBK-SOP-NB-05_Tuyen_dung_va_onboarding_noi_bo\|OBK-SOP-NB-05]] | 9 | 08/10/2026 |
| [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]] | 9 | 08/10/2026 |
| [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] | 8 | 08/10/2026 |
| [[NS-03_Phieu_tong_hop_diem_cuoi_ky\|NS-03]] | 8 | 08/10/2026 |
| [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02]] | 8 | 08/10/2026 |
| [[13_OBK-SOP-MK_Marketing_va_phat_trien_nguon_khach_hang\|OBK-SOP-MK]] | 7 | 08/10/2026 |
| [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] | 7 | 08/10/2026 |
| [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] | 7 | 08/10/2026 |
| [[08_PL_C_Ky_nang_chuyen_mon\|OBK-QCNS-08-PL-C]] | 7 | 08/10/2026 |
| [[NS-01_Phieu_tu_danh_gia_hieu_suat\|NS-01]] | 7 | 08/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|OBK-MSR]] | 7 | 08/10/2026 |
| [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]] | 7 | 08/10/2026 |
| [[PL_LIC_01_Quy_trinh_giay_phep_chuyen_nganh_va_so_huu_tri_tue\|OBK-SOP-LIC-PL-01]] | 6 | 08/10/2026 |
| [[17_Khung_xu_phat_va_phong_ngua\|OBK-SOP-17]] | 6 | 08/10/2026 |
| [[13_Lich_tuan_thu_va_quy_trinh_khai_nop\|OBK-HB-13]] | 6 | 08/10/2026 |
| [[08_PL_E_Phieu_vi_tri\|OBK-QCNS-08-PL-E]] | 6 | 08/10/2026 |
| [[NH-01_Doi_chieu_ngan_hang\|NH-01]] | 6 | 08/10/2026 |
| [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] | 6 | 08/10/2026 |
| [[11_Thue_TNCN\|OBK-HB-11]] | 6 | 08/10/2026 |
| [[12_Hoa_don_dien_tu\|OBK-HB-12]] | 6 | 08/10/2026 |
| [[Quy_che_bao_ve_du_lieu_ca_nhan\|OBK-SOP-NB-09]] | 6 | 08/10/2026 |
| [[00_INDEX\|OBK-INDEX]] | 5 | 08/10/2026 |
| [[09_HD_Nghiep_vu_giay_phep_va_thu_tuc_doanh_nghiep\|OBK-HB-41]] | 5 | 08/10/2026 |
| [[12_HD_Phuong_phap_tra_cuu_va_cap_nhat_phap_luat\|OBK-HB-71]] | 5 | 08/10/2026 |
| [[02_Mo_hinh_dich_vu_va_phan_vai\|OBK-SOP-02]] | 5 | 08/10/2026 |
| [[07_Bao_cao_tai_chinh_nam\|OBK-HB-07]] | 5 | 08/10/2026 |
| [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]] | 5 | 08/10/2026 |
| [[09_Thue_GTGT\|OBK-HB-09]] | 5 | 08/10/2026 |
| [[21_Cap_nhat_van_ban_phap_luat\|OBK-SOP-21]] | 5 | 08/10/2026 |
| [[08_PL_B_Tieu_chi_cong_viec_dang_ho_so\|OBK-QCNS-08-PL-B]] | 5 | 08/10/2026 |
| [[10_Thue_TNDN\|OBK-HB-10]] | 5 | 08/10/2026 |
| [[08_PL_D_Van_hanh_viec_cham\|OBK-QCNS-08-PL-D]] | 5 | 08/10/2026 |
| [[BK-01_Bang_kiem_noi_bo\|BK-01]] | 5 | 08/10/2026 |
| [[PL_C_Lich_tuan_thu_nam\|OBK-SOP-PL-C]] | 4 | 08/10/2026 |
| [[02_Huong_dan_AM_Van_hanh\|OBK-HB-35]] | 4 | 08/10/2026 |
| [[01_Nguyen_tac_hanh_nghe\|OBK-SOP-01]] | 4 | 08/10/2026 |
| [[03_Onboarding_khach_hang\|OBK-SOP-03]] | 4 | 08/10/2026 |
| [[05_Quy_trinh_ke_toan_thang\|OBK-HB-05]] | 4 | 08/10/2026 |
| [[06_Khoa_so_va_doi_chieu\|OBK-HB-06]] | 4 | 08/10/2026 |
| [[08_Che_do_ke_toan_ap_dung\|OBK-HB-08]] | 4 | 08/10/2026 |
| [[HH-02_Phieu_bao_cao_hoa_hong_thang\|HH-02]] | 4 | 08/10/2026 |
| [[NS-08_Bien_ban_vi_pham_ky_luat_lao_dong\|NS-08]] | 4 | 08/10/2026 |
| [[01_Huong_dan_AM_Ban_hang\|OBK-HB-31]] | 4 | 08/10/2026 |
| [[18_Kiem_soat_chat_luong\|OBK-SOP-18]] | 4 | 08/10/2026 |
| [[14_Quyet_toan_thue_nam\|OBK-SOP-14]] | 4 | 08/10/2026 |
| [[16_Thanh_tra_kiem_tra_thue\|OBK-SOP-16]] | 4 | 08/10/2026 |
| [[PL_HD_Mau_hop_dong_dich_vu_khung\|OBK-SOP-AM-PL2]] | 4 | 08/10/2026 |
| [[08_PL_A_Thang_cham_tieu_chi_chung\|OBK-QCNS-08-PL-A]] | 4 | 08/10/2026 |
| `BK-03` | 4 | 08/10/2026 |
| [[BK-08_Bang_kiem_Marketing\|BK-08]] | 4 | 08/10/2026 |
| [[BK-02_Bang_kiem_AM\|BK-02]] | 4 | 08/10/2026 |
| [[BK-06_Bang_kiem_Phap_ly\|BK-06]] | 4 | 08/10/2026 |
| [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] | 3 | 08/10/2026 |
| [[04_Quan_ly_chung_tu\|OBK-SOP-04]] | 3 | 08/10/2026 |
| [[HH-03_Phieu_thong_bao_hoan_tra_hoa_hong\|HH-03]] | 3 | 08/10/2026 |
| [[SC-01_Nhan_thong_bao_doi_so_tai_khoan\|SC-01]] | 3 | 08/10/2026 |
| [[03_Huong_dan_AM_Giu_khach_va_ket_thuc\|OBK-HB-37]] | 3 | 08/10/2026 |
| [[PL_B_Bieu_mau\|OBK-SOP-PL-B]] | 3 | 08/10/2026 |
| [[10_HD_Nghiep_vu_tinh_luong_va_bao_hiem_xa_hoi\|OBK-HB-51]] | 3 | 08/10/2026 |
| [[11_HD_Ky_thuat_ra_soat_hop_dong_kinh_te\|OBK-HB-61]] | 3 | 08/10/2026 |
| [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] | 3 | 08/10/2026 |
| [[20_Ban_giao_va_ket_thuc\|OBK-SOP-20]] | 3 | 08/10/2026 |
| [[15_Xu_ly_sai_sot_va_khai_bo_sung\|OBK-SOP-15]] | 3 | 08/10/2026 |
| [[Noi_quy_lao_dong\|OBK-NQLD]] | 3 | 08/10/2026 |
| [[BK-05_Bang_kiem_Lao_dong_va_tien_luong\|BK-05]] | 3 | 08/10/2026 |
| [[BK-07_Bang_kiem_Doi_tac_gioi_thieu\|BK-07]] | 3 | 08/10/2026 |
| [[BK-04_Bang_kiem_Giay_phep\|BK-04]] | 3 | 08/10/2026 |
| [[PL_E_Danh_muc_van_ban\|OBK-SOP-PL-E]] | 2 | 08/10/2026 |
| [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu\|OBK-SOP-PL-G]] | 2 | 08/10/2026 |
| [[PL_A_Cau_chu_mau\|OBK-HB-31-PL-A]] | 2 | 08/10/2026 |
| [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] | 2 | 08/10/2026 |
| [[Quy_che_dan_chu_o_co_so_tai_noi_lam_viec\|OBK-QCNS-09]] | 2 | 08/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|OBK-SOP-00]] | 9 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|OBK-SOP-NB-00]] | 9 | 07/10/2026 |
| [[02_Accounting_Tax_VI\|TNC-02-VI]] | 8 | 07/10/2026 |
| [[00_TnC_Master_VI\|TNC-00-VI]] | 7 | 07/10/2026 |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-SOP-NB-03]] | 7 | 07/10/2026 |
| [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02-PL-B]] | 5 | 07/10/2026 |
| [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCNS-03]] | 5 | 07/10/2026 |
| [[05_Client_Guide_VI\|TNC-05-VI]] | 5 | 07/10/2026 |
| [[08_Framework_Agreement_VI\|TNC-08-VI]] | 5 | 07/10/2026 |
| `OBK-SOP-NB-10` | 5 | 07/10/2026 |
| [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|LU-01]] | 5 | 07/10/2026 |
| [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02-PL-D]] | 5 | 07/10/2026 |
| [[04_Legal_Services_VI\|TNC-04-VI]] | 4 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|CL-01]] | 4 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|CV-01]] | 4 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|GC-01]] | 4 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|KH-01]] | 4 | 07/10/2026 |
| `KP-01` | 4 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|TS-02]] | 4 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|VB-01]] | 4 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|TH-02]] | 4 | 07/10/2026 |
| [[Quy_che_bao_ve_du_lieu_ca_nhan\|OBK-SOP-NB-15]] | 4 | 07/10/2026 |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-SOP-NB-18]] | 4 | 07/10/2026 |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-SOP-NB-PL-BM]] | 4 | 07/10/2026 |
| [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] | 3 | 07/10/2026 |
| [[02_Bang_gia_Giay_phep_va_doanh_nghiep\|OBK-DM-GP]] | 3 | 07/10/2026 |
| [[03_Bang_gia_Ke_toan_va_thue\|OBK-DM-KT]] | 3 | 07/10/2026 |
| [[04_Bang_gia_Lao_dong_va_giay_to_nguoi_nuoc_ngoai\|OBK-DM-LD]] | 3 | 07/10/2026 |
| [[05_Bang_gia_Dich_vu_phap_ly_va_so_huu_tri_tue\|OBK-DM-LS]] | 3 | 07/10/2026 |
| [[06_Bang_gia_Chu_ky_so_va_hoa_don_dien_tu\|OBK-DM-CKS]] | 3 | 07/10/2026 |
| [[07_Bang_gia_Dich_vu_o_nuoc_ngoai\|OBK-DM-NN]] | 3 | 07/10/2026 |
| `DT-01` | 3 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|KN-01]] | 3 | 07/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|TL-01]] | 3 | 07/10/2026 |
| [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02-PL-E]] | 3 | 07/10/2026 |
| [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-01]] | 3 | 07/10/2026 |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-SOP-NB-08]] | 3 | 07/10/2026 |
| [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-06]] | 2 | 07/10/2026 |
| [[OBK-QCTC-02_Bang_tham_quyen\|OBK-SOP-NB-07]] | 2 | 07/10/2026 |
| `OBK-SOP-NB-PL-DT` | 2 | 07/10/2026 |
| `OBK-QCNS-00` | 2 | 07/10/2026 |
| [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-07]] | 2 | 07/10/2026 |
| [[00_README_Index\|TNC-INDEX]] | 2 | 07/10/2026 |
| [[01_Licensing_VI\|TNC-01-VI]] | 2 | 07/10/2026 |
| [[03_HR_Payroll_VI\|TNC-03-VI]] | 2 | 07/10/2026 |
| `OBK-SOP-PL3` | 4 | 06/10/2026 |
| [[Quy_che_bao_ve_du_lieu_ca_nhan\|BC-01]] | 4 | 06/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|BH-01]] | 3 | 06/10/2026 |
| `CN-01` | 3 | 06/10/2026 |
| `KT-01` | 3 | 06/10/2026 |
| `OBK-SOP-NB-16` | 2 | 06/10/2026 |
| `OBK-SOP-DV-00` | 2 | 06/10/2026 |
| [[01_Huong_dan_AM_Ban_hang\|OBK-HB-33]] | 4 | 04/10/2026 |
| [[03_Huong_dan_AM_Giu_khach_va_ket_thuc\|OBK-HB-38]] | 3 | 04/10/2026 |
| [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] | 3 | 04/10/2026 |
| [[02_Huong_dan_AM_Van_hanh\|OBK-HB-34]] | 3 | 04/10/2026 |
| `TC-01` | 3 | 04/10/2026 |
| [[OBK-MSR_Quy_tac_so_cai\|CK-01]] | 2 | 04/10/2026 |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|CK-02]] | 2 | 04/10/2026 |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|CT-01]] | 2 | 04/10/2026 |
| [[Quy_che_bao_ve_du_lieu_ca_nhan\|DL-01]] | 2 | 04/10/2026 |
| `DT-02` | 2 | 04/10/2026 |
| `HD-02` | 2 | 04/10/2026 |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|KQ-01]] | 2 | 04/10/2026 |
| `TH-01` | 2 | 04/10/2026 |
| `TS-01` | 2 | 04/10/2026 |
| [[OBK-QCTC-02_Bang_tham_quyen\|OBK-QCTC-02-PL-A]] | 2 | 04/10/2026 |
| `OBK-SOP-NB-12` | 2 | 04/10/2026 |
| `OBK-SOP-NB-14` | 2 | 04/10/2026 |
| `OBK-SOP-PL-T` | 1 | 04/10/2026 |
| [[02_Accounting_Tax_EN\|TNC-02-EN]] | 6 | 02/10/2026 |
| [[00_TnC_Master_EN\|TNC-00-EN]] | 4 | 02/10/2026 |
| [[05_Client_Guide_EN\|TNC-05-EN]] | 4 | 02/10/2026 |
| `NS-06` | 2 | 02/10/2026 |
| `NS-07` | 2 | 02/10/2026 |
| `OBK-SOP-NB-11` | 2 | 02/10/2026 |
| `TNC-07-VI` | 1 | 02/10/2026 |
| `NS-02` | 2 | 01/10/2026 |
| [[01_Goi_dich_vu_va_hang_muc_kem_goi\|OBK-DM-GOI]] | 2 | 01/10/2026 |
| [[08_Hang_muc_ghi_nhan_rieng\|OBK-DM-NG]] | 2 | 01/10/2026 |
| [[04_Legal_Services_EN\|TNC-04-EN]] | 2 | 01/10/2026 |
| [[08_Framework_Agreement_EN\|TNC-08-EN]] | 2 | 01/10/2026 |
| `GLOSSARY` | 1 | 01/10/2026 |
| `OBK-SOP-PL-F` | 1 | 01/10/2026 |
| `BG-01` | 1 | 01/10/2026 |
| `BG-02` | 1 | 01/10/2026 |
| `DV-02` | 1 | 01/10/2026 |
| `GP-01` | 1 | 01/10/2026 |
| `HD-01` | 1 | 01/10/2026 |
| `HH-01` | 1 | 01/10/2026 |
| `MK-01` | 1 | 01/10/2026 |
| `MT-01` | 1 | 01/10/2026 |
| `NC-01` | 1 | 01/10/2026 |
| `NS-09` | 1 | 01/10/2026 |
| `OB-01` | 1 | 01/10/2026 |
| `PM-01` | 1 | 01/10/2026 |
| `RD-01` | 1 | 01/10/2026 |
| `TL-02` | 1 | 01/10/2026 |
| `TU-01` | 1 | 01/10/2026 |
| `OBK-SOP-PL-A` | 1 | 01/10/2026 |
| [[01_Huong_dan_AM_Ban_hang\|OBK-HB-32]] | 1 | 01/10/2026 |
| [[06_Data_Protection_VI\|TNC-06-VI]] | 1 | 01/10/2026 |
| `OBK-SOP-NB-17` | 1 | 30/09/2026 |

## 2. Chi tiết từng tài liệu

### `OBK-QCTC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.8.1.2 | Bỏ cụm nhấn mạnh không có ngoại lệ ở mục 5.1a và các số đếm điều kiện, chế tài, nghĩa vụ; hai chỗ duy nhất viết thành chỉ |
| 08/10/2026 | R.8.1.1 | Rà chính tả; bỏ đoạn lặp ở mục 5.1b; đổi dẫn chiếu phiếu công tác sang quy chế hạch toán kế toán |
| 08/10/2026 | R.8.1.0 | Thêm mục 47.3a: kế toán trưởng được kiêm Team Lead bộ phận Kế toán vì Team Lead không phải người quản lý, điều hành |
| 08/10/2026 | R.8.0.0 | Gộp OBK-SOP-NB-03, NB-08 và NB-18 vào quy chế, giữ mọi mức tiền, hạn mức, bậc duyệt và thời hạn, bỏ phần giải thích, ví dụ và nội dung trùng với OBK-QCTC-03. |
| 07/10/2026 | R.7.1.0 | Bo KP-01 khoi danh sach bao cao quan tri phai doi khoi so ke toan |
| 07/10/2026 | R.7.0.0 | Bo bac B2, Dieu 47 con hai quy tac noi bo, Dieu 48 con nam diem, muc 35.2 rao soat ngay trong ngay |
| 07/10/2026 | R.6.0.0 | Điều 33.1 bỏ yêu cầu một người dự phòng thủ quỹ theo quyết định của CEO ngày 07/10/2026 |
| 06/10/2026 | R.5.0.0 | Chốt cấp ban hành là Hội đồng quản trị theo Điều lệ Đ.25 k.2 đ.l; không quy định trợ cấp thôi việc cao hơn mức luật định; thêm nhóm nợ đang tranh chấp tại mục 15.4; AD-KT giữ Danh mục nhà cung cấp, TGĐ duyệt khi thêm nhà cung cấp mới; bổ sung hai dòng liên kết tài liệu tại Phụ lục 5 |
| 06/10/2026 | R.4.0.2 | Ghi thêm ngày 04/06/2026 cho trích dẫn Văn bản hợp nhất 18/VBHN-BTC mục 24 để phân biệt với bản hợp nhất cùng số hiệu đã hết hiệu lực |
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
| 08/10/2026 | R.4.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.3.5.0 | Them dong du lieu bang nuoc PL_DT va view bieu mau, cat muc 5.15 va 5.16 |
| 07/10/2026 | R.3.4.0 | Bo bac B2, luong B co 5 buoc B1 den B5, bai bo nghanh G-2 va gop bang loi va KPI diem 9 |
| 07/10/2026 | R.3.3.0 | Sua thoi han hoan ung tu 07/05/07 ve 05/10/15 ngay lam viec khop OBK-QCTC-01 muc 37.1 tai bang SLA (muc 1.2); muc 5.7.1 bo bang muc trong boi, truyen bang 1.2, sua cap khoan tam ung ton dong tu 02 ve 03 khop muc 36.3 |
| 07/10/2026 | R.3.2.1 | Hai việc đọc điều khoản hóa đơn và điều khoản gia hạn tự động tại giai đoạn ký kết có chủ thể NDC (người duyệt chi theo bậc) |
| 06/10/2026 | R.3.2.0 | Quyết định và phân bổ dòng ngân sách thuộc CEO, Team Lead nhận thông báo, không ký phê duyệt ngân sách; khoản ngoài ngân sách không dừng ở Team Lead mà chuyển thẳng lên người duyệt chi của bậc |
| 06/10/2026 | R.3.1.0 | Bỏ phụ lục danh sách placeholder công cụ và câu hướng dẫn thay placeholder bằng tên công cụ thực tế; mô tả nghiệp vụ giữ nguyên |
| 04/10/2026 | R.3.0.2 | Bỏ lối tự sự ở quy trình mua sắm và thanh toán. |
| 04/10/2026 | R.3.0.1 | Chuan hoa tieu de muc 6.10.2 bo so dem; chuyen cac callout can xac minh va ghi chu dan do tai cac muc 6.0, 6.4, 6.10, 6.14 thanh ghi chu hanh chinh va can cu phap ly chuan muc |
| 02/10/2026 | R.3.0.0 | Bậc B2 đổi người duyệt chi thành COO, CEO là dự phòng khi COO vắng mặt; KTT giữ vị trí chuyên môn không phải người duyệt. Bậc B3 nêu rõ mức tối đa 100.000.000 đồng, khoản từ 100.000.000 đồng trở lên do HĐQT phê duyệt, đồng bộ với mục 12.3 và 12.3a của OBK-QCTC-01 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.2.2.0 | Them cau dan chieu quy tac uy quyen khi nguoi phe duyet vang, muc 8.1 cua NB-00, vao sau buoc B6 Luong B; chuan hoa tu ngu khoan nho hon 20.000.000 dong trong vi du muc 6.15 |
| 30/09/2026 | R.2.1.0 | Thêm mục 1.1 TRA NHANH KÝ HIỆU VAI TRÒ bảy vai trò; mục 1.2 BẢNG TỔNG HỢP MỐC THỜI GIAN 21 mốc; mục 6.15 VÍ DỤ khoản mua 7,5 triệu bậc B2; mục 6.16 TRƯỜNG HỢP PHÁT SINH 9 nhánh; chia 18 câu dài |
| 27/09/2026 | R.2.0.0 | Cập nhật bảng thẩm quyền 3 bậc B1 tới B3, bỏ cơ chế tự động nâng bậc, đơn giản hóa xác minh nhà cung cấp dưới 20 triệu và yêu cầu báo giá theo 3 bậc |

### `OBK-QCTC-02-PL-B`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.3.1.0 | Bac chi noi bo gop lai hai bac B1 va B3 theo moc Dieu le |
| 04/10/2026 | R.3.0.1 | Bỏ ghi chú log dựng bản ở đầu phụ lục ma trận. |
| 02/10/2026 | R.3.0.0 | Hàng chi trong hạn mức bậc B2 đổi thành COO, CEO là dự phòng. Hai hàng ký hợp đồng với khách đổi chủ thể ký thành NĐDPL (CEO hoặc Chủ tịch HĐQT); TP Thương mại chỉ đàm phán và duyệt, không ký |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Cập nhật bảng thẩm quyền chi tiêu 3 bậc B1 tới B3; phân quyền ký hợp đồng dịch vụ chuẩn và biểu giá chuẩn cho Trưởng phòng Thương mại |

### `OBK-SOP-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.4.1.0 | Them muc dong du lieu chung cua mang dich vu, rat gion cac muc lap lai phieu |
| 07/10/2026 | R.4.0.3 | Ngoại lệ NT-5: hai việc bù trừ (ghi rõ phần do chính Team Lead làm và phần không có lớp soát thứ hai) có chủ thể Team Lead |
| 05/10/2026 | R.4.0.2 | Sửa lỗi lặp từ 'hành hành' ở hàng nhật ký bản R.4.0.1. |
| 04/10/2026 | R.4.0.1 | Bỏ lối tự sự và ghi chú log ở chuẩn hành dịch vụ, mục trình tự xung đột. |
| 04/10/2026 | R.4.0.0 | Gộp mười bước B1 đến B10 thành năm bước B1 đến B5 tại mục 6, sửa NT-2, NT-5, chỉ số CS-07, chuẩn nhắc mục 6.2 và các dẫn chiếu bước |
| 03/10/2026 | R.3.1.0 | Thêm mục 5.6 Nguyên tắc xử lý yêu cầu ngoài bảng Job gồm 6 nguyên tắc, là bản gốc cho các SOP bộ phận dẫn chiếu |
| 02/10/2026 | R.3.0.0 | Mục 7.3a: thêm bảng SLA thống nhất theo loại yêu cầu và mức (sự cố, thường quy, tư vấn, gấp), áp chung cho bốn bộ phận dịch vụ |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Chuyển đồng hồ T1 và T2 thành văn hóa phản hồi, tập trung đo lường chỉ số On-Time Delivery và quy chuẩn 4 nhóm thời hạn SLA |

### `OBK-SOP-AM`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.5.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.4.3.0 | Bảng hướng dẫn cấp 3 ở mục 11 đổi tám hướng dẫn thành ba hướng dẫn gộp và dẫn chiếu thao tác ở mục 9.3 thêm số phần |
| 07/10/2026 | R.4.2.0 | Them muc dong du lieu bang nuoc va view KH-01, rat gion muc 4 va muc 11 |
| 07/10/2026 | R.4.1.0 | Gỡ câu ghi phụ lục thao tác công cụ chưa dựng vì Phụ lục D (tệp đã xóa) không còn |
| 04/10/2026 | R.4.0.1 | Chuyển số đếm liệt kê thành quy định, bỏ lối tự sự ở quản lý khách. |
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
| 04/10/2026 | R.3.0.1 | Chuyển số đếm liệt kê ở phần lý do thành quy định. |
| 02/10/2026 | R.3.0.0 | Người ký hợp đồng dịch vụ chuẩn là đại diện theo pháp luật (NĐDPL: CEO hoặc Chủ tịch HĐQT); TP Thương mại chỉ đàm phán và duyệt trong phân quyền, không ký; cập nhật ma trận vai trò và bước 6 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Cập nhật thẩm quyền ký hợp đồng dịch vụ chuẩn do Trưởng phòng Thương mại phê duyệt, trường hợp ngoại lệ chuyển Tổng Giám đốc |

### `OBK-HB-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.4.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.3.2.0 | Dòng Phụ lục A rút bỏ vì tệp bảng kiểm đã đưa khỏi vault; dòng Phụ lục F đổi trỏ về vị trí mới tại thư mục việc chờ chốt |
| 06/10/2026 | R.3.1.0 | Gỡ Phụ lục D về thao tác phần mềm và bảng đăng ký công cụ khỏi mục lục; bảng đăng ký công cụ không còn là điều kiện ban hành |
| 06/10/2026 | R.3.0.0 | Nghĩa vụ báo cáo điểm sai lệch giữa Handbook và tài liệu cấp trên có mốc ngay trong ngày phát hiện |
| 06/10/2026 | R.2.1.2 | Đồng bộ khung chương: mục "Căn cứ pháp lý" ra khỏi khuôn cấp 3 (K4 đủ 9 mục), "khung 10 mục" thành "khung 9 mục", tra nhanh mục 5 và 6 |
| 04/10/2026 | R.2.1.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de muc 2 va 9, chuyen callout sang can cu phap luat |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 29/09/2026 | R.2.1.0 | Chuyển mục 5 Mục lục từ bảng chữ thường sang liên kết tới từng chương và phụ lục |
| 27/09/2026 | R.2.0.0 | Cơ cấu lại Handbook Kế toán thành 2 khối độc lập: 4 Bảng kiểm chu kỳ thao tác và khối tri thức tra cứu tham khảo pháp lý |

### `OBK-QCNS-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.0.3 | Doi ten tap tu bon muc kiem soat thanh hai cap kiem soat cho khop noi dung mo hinh |
| 07/10/2026 | R.2.0.2 | Bổ sung chủ thể Trưởng nhóm chuyên môn cho câu ký duyệt phát hành kết quả (chốt VQ-22) |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.2.0.1 | Bỏ từ tiếng Anh kèm sau 'Bảng kiểm nghiệp vụ chuẩn' tại mục 3 Cấp 1 |
| 27/09/2026 | R.2.0.0 | Thu gọn mô hình kiểm soát từ 4 mức thành 2 cấp thực chất Maker làm và Checker Approver duyệt, COO thực hiện hậu kiểm xác suất |

### `OBK-QCNS-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.6.0.0 | Kỳ đánh giá là 03 tháng liên tục tính riêng từng người từ ngày bắt đầu hợp đồng chính thức, thay quý dương lịch; tổng kết năm mỗi 12 tháng của từng người |
| 08/10/2026 | R.5.0.0 | Kỳ đánh giá là quý dương lịch, chấm trong 10 ngày làm việc đầu quý kế tiếp; tổng kết năm cùng kỳ quý 4; thang cấp bậc dẫn tới quy chế tiền lương mục 5.2 |
| 08/10/2026 | R.4.0.0 | Bỏ cấu trúc phần A và phần B, chấm theo ba nhóm Chất lượng đúng hạn, Khối lượng, Kỷ luật; người chấm khi chưa có quản lý trực tiếp chuyển lên từng cấp tới người đầu tiên khác người được chấm |
| 08/10/2026 | R.3.0.0 | Bỏ phần còn sót của đánh giá chéo đã bãi bỏ; mức lệch so điểm tự đánh giá với điểm quản lý trực tiếp; thang xếp loại ghi bốn mức; bỏ số đếm ở tiêu đề mục |
| 08/10/2026 | R.2.2.1 | Đổi liên kết các tài liệu nhân sự, sổ giờ làm việc và từ điển vai trò đã gộp sang quy tắc sổ cái, bảng thẩm quyền và quy chế tiền lương |
| 07/10/2026 | R.2.2.0 | Danh phieu PL-TL sang Quy che tien luong muc 6 va mo ta lai phieu vi tri PL-E phieu chung |
| 07/10/2026 | R.2.1.0 | Suc nhap muc 0b.3 voi quyet dinh bai bo danh gia cheo ngang hang |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 27/09/2026 | R.2.0.0 | Bãi bỏ hoàn toàn đánh giá chéo ngang hàng, thu gọn 3 nhóm chỉ số cốt lõi Chất lượng OTD 70%, Khối lượng 20%, Kỷ luật 10% và 4 mức xếp loại |

### `NS-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Ghi nhận bãi bỏ biểu mẫu đánh giá chéo theo chủ trương tinh giản khung đánh giá hiệu suất và OBK-QCNS-08 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-DM-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Đổi ngày bản kết xuất nguồn dữ liệu sang 04/10/2026; bảng nội dung còn thiếu ghi hai danh sách gói chứa chờ xác minh và bỏ dòng tên gạch dài đã sửa trong nguồn |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật tổng phổ 372 mã SKU, đồng bộ 63 mã SKU chuẩn hóa mới và bộ gói đối tác Partner Core, Growth, Prime |

### `OBK-DM-GOI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Hợp nhất kiến trúc ba gói đối tác Partner Core, Partner Growth, Partner Prime, bổ sung gói FUP Add-on và chính sách trần 1.500 chứng từ/tháng |

### `OBK-DM-GP`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Đổi ngày bản kết xuất nguồn dữ liệu sang 04/10/2026; bảng giá giấy phép và doanh nghiệp không đổi mức |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật 66 mã dịch vụ doanh nghiệp và giấy phép, bổ sung SKU thành lập FDI (F-FDI-NEW, F-FDI-MA, OBL-DI, OBL-MA) và giải thể phân loại (LICE-DISSOLVE-DORM, LICE-DISSOLVE-ACT) |

### `OBK-DM-KT`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Đổi ngày bản kết xuất nguồn dữ liệu sang 04/10/2026; hai hạng mục OBG-ADD-INV-FIX và OBG-MTH1 để trống danh sách gói chứa, chờ xác minh |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật biểu phí kế toán và thuế, bổ sung các gói Partner Core/Growth/Prime, add-on chứng từ (ADD-TXN-*), onboarding di trú và rà soát sức khỏe sổ sách |

### `OBK-DM-LD`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Đổi ngày bản kết xuất nguồn dữ liệu sang 04/10/2026; bảng giá lao động và giấy tờ người nước ngoài không đổi mức |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật 15 mã lao động và thị thực, bổ sung SKU giấy phép lao động cấp mới/gia hạn (PER-WP-NEW, PER-WP-REN) và chuẩn hóa phí thẻ tạm trú PER-TRC |

### `OBK-DM-LS`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Đổi ngày bản kết xuất nguồn dữ liệu sang 04/10/2026; bảng giá pháp lý và sở hữu trí tuệ không đổi mức |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật 48 mã pháp lý và sở hữu trí tuệ, bổ sung biểu phí rà soát hợp đồng theo trang, giấy phép bán lẻ FDI (LCS-RETAIL) và công bố mỹ phẩm |

### `OBK-DM-CKS`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Đổi ngày bản kết xuất nguồn dữ liệu sang 04/10/2026; bảng giá chữ ký số và hóa đơn điện tử không đổi mức |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật 90 mã chữ ký số và hóa đơn điện tử, chuẩn hóa mã USB Token 3 năm (TOKEN-CA-USB-3Y) và các gói tích hợp |

### `OBK-DM-NN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Đổi ngày bản kết xuất nguồn dữ liệu sang 04/10/2026; bảng giá dịch vụ ở nước ngoài không đổi mức |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật biểu phí dịch vụ ở nước ngoài và hỗ trợ nhà đầu tư |

### `OBK-DM-NG`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 28/09/2026 | R.1.1.0 | Cập nhật 103 hạng mục ghi nhận riêng và điều kiện chuyển đổi gói dịch vụ |

### `TNC-00-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.3.0.0 | Lấy mốc thấp hơn cho trần bồi thường mục 9.3 và chuyển con số thương mại Điều 15-19 về danh mục và PL-KT PL-PL theo VQ-44 VQ-45 |
| 07/10/2026 | R.2.2.0 | Bổ sung chủ ngữ oBacker cho câu kiểm tra rủi ro pháp lý cơ bản trong phạm vi 01 lượt soát xét hợp đồng (Điều 19) |
| 02/10/2026 | R.2.1.0 | Mã phụ thu kê khai FCT ngoài định mức cập nhật thành `ADD-FCT-RETURN-2026` |
| 02/10/2026 | R.2.0.0 | Định mức FCT theo gói, Partner Core 01 hợp đồng/tháng, Partner Growth và Prime 03 hợp đồng/tháng<br>Rà soát hợp đồng: hợp đồng 11 đến 20 trang tính 02 lượt soát xét; hợp đồng trên 20 trang, từ trang thứ 21 phụ thu 100.000đ/trang hoặc chuyển dịch vụ bổ sung<br>Nguyên tắc cam kết thời gian phản hồi: xác nhận trong 04 giờ làm việc, nội dung trả lời trong 24 đến 48 giờ làm việc |
| 01/10/2026 | R.1.1.1 | Đổi từ ngữ: cách gọi định mức giao dịch tối đa (Điều 15) và cách gọi cơ chế cam kết Quý 4 (Điều 16) viết lại bằng 'mức tối đa' và 'chốt hợp đồng Quý 4' |
| 01/10/2026 | R.1.1.0 | Cập nhật ranh giới bồi thường 3 tháng, trần cứng 1.500 ct/tháng, cơ chế FUP, chính sách FCT 3 HĐ/tháng, thanh tra tại bàn và kiểm toán độc lập FDI |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-00-EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.0.0 | FCT quota by package, Partner Core 01 contract/month, Partner Growth and Prime 03 contracts/month<br>Contract review: contracts of 11 to 20 pages count as two review rounds; contracts over 20 pages are charged VND 100,000 per page from page 21 or move to an add-on service<br>Response-time principle: acknowledgement within 04 business hours, substantive reply within 24 to 48 business hours |
| 01/10/2026 | R.1.1.1 | Wording: 'hard ceiling of 1,500 transactions' reworded to 'maximum of 1,500 transactions' (Article 15); Q4 commitment mechanism reworded (Article 16) |
| 01/10/2026 | R.1.1.0 | Update the 3-month liability cap boundary, the hard cap of 1,500 vouchers per month, the FUP mechanism, the FCT 3-agreements-per-month policy, on-site inspection and independent audit for FDI |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-02-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.3.1 | Bổ sung chủ ngữ oBacker cho sáu nhóm việc thuộc phạm vi Dịch Vụ (lập sổ sách, chốt sổ, lập và nộp BCTC năm, đối chiếu số liệu, lập và nộp tờ khai thuế, theo dõi và thông báo nghĩa vụ thuế) |
| 02/10/2026 | R.2.3.0 | Điều 8: bổ sung căn cứ xử phạt, ghi rõ Nghị định 125/2020/NĐ-CP đã được sửa đổi, bổ sung bởi Nghị định 291/2026/NĐ-CP; nội dung hiện hành theo văn bản hợp nhất 27/2026/VBHN-NĐ-BTC |
| 02/10/2026 | R.2.2.0 | Tách TNCN tiền lương thành hai đầu việc: khấu trừ và kê khai thuế TNCN theo kỳ thuộc Dịch Vụ Kế toán (PL-KT); quyết toán TNCN năm, đăng ký người phụ thuộc và chứng từ khấu trừ cho người lao động thuộc Dịch Vụ Nhân Sự (PL-NS) |
| 02/10/2026 | R.2.1.0 | Mục 10.1: phụ phí tài khoản ngân hàng ngoài định mức 200.000đ/tài khoản/tháng, mã mới `ADD-BANK-ACC-2026`; kê khai FCT ngoài định mức 1.000.000đ/hồ sơ, mã mới `ADD-FCT-RETURN-2026`<br>Mục 10.4: thêm dòng chuyển tiếp hai mã phụ thu trên kể từ ngày 05/10/2026 |
| 02/10/2026 | R.2.0.0 | Mục 10.1: phụ thu mở rộng định mức giao dịch dùng mã mới `ADD-TXN-BLOCK-500-2026`, `ADD-TXN-BLOCK-1000-2026`, `ADD-TXN-BLOCK-1500-2026`, định mức Partner Core cho doanh nghiệp FDI là 100 Giao Dịch/tháng; hỗ trợ thanh tra thuế tại trụ sở 2.500.000đ/ngày làm việc, mã mới `ADD-TAX-INSPECT-2026`, thông báo và thanh toán trước tối thiểu 03 ngày, đối soát theo ngày thực tế<br>Mục 10.4: thêm điều khoản áp dụng giá và mã phụ thu mới từ ngày 05/10/2026; khách hiện tại giữ giá và mã đã ký đến hết ngày 31/03/2027, áp mã mới từ kỳ 01/04/2027; báo giá hết hạn mà khách yêu cầu báo giá lại giảm 35%<br>Mục 3.2: định mức FCT theo gói, Partner Core 01 hợp đồng/tháng, Partner Growth và Prime 03 hợp đồng/tháng |
| 01/10/2026 | R.1.1.1 | Đổi từ ngữ: cách gọi định mức tối đa gói Growth (Điều 10) viết lại bằng 'mức tối đa'; từ tiếng Anh gọi tệp làm việc (Điều 7) đổi thành 'tệp làm việc' |
| 01/10/2026 | R.1.1.0 | Đồng bộ chế độ kế toán nhị phân (TT 58 cho VN siêu nhỏ, TT 99 cho 100% FDI), định mức FCT và quy chế thanh tra/kiểm toán độc lập |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-02-EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.2.0 | Split salary PIT into two workstreams: periodic withholding and filing under the Accounting & Tax Services (PL-KT); annual PIT finalisation, dependant registration and employee withholding certificates under the HR, Payroll & Insurance Services (PL-NS) |
| 02/10/2026 | R.2.1.0 | Section 10.1: bank-account overage surcharge VND 200,000/account/month under new code `ADD-BANK-ACC-2026`; excess FCT filings VND 1,000,000/filing under new code `ADD-FCT-RETURN-2026`<br>Section 10.4: transition line for the two surcharge codes from October 5, 2026 |
| 02/10/2026 | R.2.0.0 | Section 10.1: transaction-volume surcharges move to new codes `ADD-TXN-BLOCK-500-2026`, `ADD-TXN-BLOCK-1000-2026`, `ADD-TXN-BLOCK-1500-2026`; Partner Core quota for FDI enterprises is 100 Transactions/month; on-site tax audit support is VND 2,500,000 per working day under new code `ADD-TAX-INSPECT-2026`, prepaid on an estimate of at least 03 days, settled on actual days<br>Section 10.4: new clause applying the new surcharge codes and prices from October 5, 2026; existing clients keep contracted codes and prices through March 31, 2027, new codes apply from the April 1, 2027 cycle; re-quoted expired quotations carry a 35% discount<br>Section 3.2: FCT quota by package, Partner Core 01 contract/month, Partner Growth and Prime 03 contracts/month |
| 01/10/2026 | R.1.1.1 | Wording: Growth package 'hard ceiling' reworded to 'maximum' (Article 10); fix REVISION LOG header to Date/Version/Description |
| 01/10/2026 | R.1.1.0 | Synchronize binary accounting standards (Circular 58 for micro VN, Circular 99 for 100% FDI), FCT quotas and audit representation |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-04-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.1.1 | Bổ sung chủ ngữ oBacker cho ba nhóm việc thuộc phạm vi Dịch Vụ (đánh giá ảnh hưởng thuế, soạn thảo hợp đồng và văn bản pháp lý, kiểm tra rủi ro pháp lý cơ bản) |
| 02/10/2026 | R.2.1.0 | Đăng ký bản quyền tác giả và đăng ký nhãn hiệu (nộp đơn): hoàn thiện hồ sơ trong 05 ngày làm việc<br>Giai đoạn thẩm định nội dung nhãn hiệu: bỏ tham chiếu mã GT-07, giữ dữ kiện tồn đọng hồ sơ tại Cục SHTT |
| 01/10/2026 | R.1.1.0 | Tích hợp hạn mức rà soát hợp đồng và ĐKKD vào các gói đối tác Partner Growth/Prime, áp dụng Master SKU Catalog cho dịch vụ ngoài gói |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-04-EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.1.0 | Integrate contract review and ERC quotas into Partner Growth/Prime retainers, apply Master SKU Catalog for add-on services |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-05-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.1.0 | Mục 2, 10, 11, 12, 15 đổi thành trỏ Điều 2, 9, 20, 3, 21, 1 của Bản Điều Khoản Chung; nội dung pháp lý giữ ở Master |
| 02/10/2026 | R.2.0.0 | Bảng gói dịch vụ: định mức FCT theo gói, Partner Core 01 hợp đồng/tháng, Partner Growth và Prime 03 hợp đồng/tháng<br>Phạm vi rà soát hợp đồng: hợp đồng 11 đến 20 trang tính 02 lượt, hợp đồng trên 20 trang phụ thu 100.000đ/trang từ trang thứ 21<br>Cam kết phản hồi thư: xác nhận trong 01 giờ làm việc, nội dung trả lời trong 24 giờ làm việc<br>Trình tự khởi động: tuần 1 ký hợp đồng và thanh toán lần đầu, tuần 2 onboarding; thư chào mừng trong 24 giờ sau xác nhận thanh toán; mã phụ thu khối giao dịch cập nhật theo mã mới |
| 01/10/2026 | R.1.1.1 | Đổi từ ngữ: cách gọi định mức giao dịch (mục 3, mục 13) viết lại bằng 'mức tối đa'; cụm rủi ro (mục 11) viết lại bằng 'rủi ro bị xử phạt nộp chậm' |
| 01/10/2026 | R.1.1.0 | Cập nhật bảng so sánh ba gói đối tác Partner Core, Growth, Prime, cơ chế FUP và biểu phí phụ thu FDI +25% |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-05-EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.0.0 | Package table: FCT quota by package, Partner Core 01 contract/month, Partner Growth and Prime 03 contracts/month<br>Contract review scope: 11 to 20 pages count as two reviews; over 20 pages charged VND 100,000 per page from page 21<br>Email response commitment: acknowledgement within 01 business hour, substantive reply within 24 business hours<br>Onboarding sequence: week 1 contract and first payment, week 2 onboarding; welcome email within 24 hours after payment confirmation; block surcharge codes updated to the new codes |
| 01/10/2026 | R.1.1.1 | Wording: transaction 'hard ceiling' reworded to 'maximum' (Sections 3, 13); penalty wording fixed (Section 11); fix REVISION LOG header to Date/Version/Description |
| 01/10/2026 | R.1.1.0 | Update comparative matrix for Partner Core, Growth, Prime packages, FUP mechanism and FDI +25% surcharge |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-08-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.0.0 | Sửa điều 6 thành tham chiếu mức giới hạn bồi thường tại điều 9.3 Bản Điều Khoản Chung theo VQ-44 |
| 07/10/2026 | R.1.1.2 | Bổ sung chủ ngữ Quý Khách cho câu chấp nhận hợp đồng bằng ký điện tử hoặc thanh toán tại khối ký kết Bên B |
| 01/10/2026 | R.1.1.1 | Đổi từ ngữ: nhãn định mức trong mẫu Đơn Đặt Hàng (Điều 1) viết lại bằng 'Mức tối đa' |
| 01/10/2026 | R.1.1.0 | Đồng bộ mẫu Đơn Đặt Hàng (loại hình FDI, TT 58/99, định mức FUP, chu kỳ phí năm/quý), cơ chế cam kết Quý 4, mốc 15/03 và trần bồi thường 3 tháng |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-08-EN`

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
| 08/10/2026 | R.2.0.1 | Rà văn phong: bỏ số đếm ở câu mở đầu mục tài liệu ban hành; đổi nhãn cột của bảng tag phân loại |
| 08/10/2026 | R.2.0.0 | Viết lại mục lục theo cấu trúc kho mới: 19 tài liệu ban hành, bảng kiểm, thư viện tham khảo và thứ tự áp dụng |
| 07/10/2026 | R.1.2.0 | Mục 1 rút về một dòng trỏ trang Trạng thái ban hành; bảng liệt kê từng tài liệu không sinh nữa |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 29/09/2026 | R.1.1.0 | Them dan duong toi thu muc VanBan (toan van van ban phap luat) tai muc TRA CUU TOAN DIEN |

### `OBK-HB-41`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.1 | Bốn bước xử lý hồ sơ giấy phép (tra tên doanh nghiệp, đặt tên tệp, kiểm tra toàn vẹn tệp số hóa, ký số hồ sơ) có chủ thể CV-LIC |
| 02/10/2026 | R.1.1.0 | Bước 2: thay mốc '01 ngày làm việc' bằng dẫn chiếu mốc soạn hồ sơ riêng theo loại tại bảng Job OBK-SOP-LIC (02 ngày trong nước, 05 ngày có vốn nước ngoài) |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.0.1 | Thực hiện N12.4: biện pháp xử lý tại bảng kiểm cấp thẻ tạm trú viết rõ 'nhỏ hơn 03 tỷ đồng' theo Luật 51/2019/QH14 |

### `OBK-SOP-KT`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.4.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.3.2.0 | Sua link phieu TH-01 da gop sang TH-02 |
| 07/10/2026 | R.3.1.0 | Them muc dong du lieu bang nuoc va view bieu mau, cat noi dung lap lai |
| 04/10/2026 | R.3.0.1 | Chuyển lối tự sự ở vai trò kế toán trưởng thành quy định trung tính. |
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
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.2.2.0 | Bo Bang OB-01 khoi muc Bieu mau va So |
| 07/10/2026 | R.2.1.0 | Them muc dong du lieu bang nuoc va view bieu mau, gion noi dung truong hop |
| 04/10/2026 | R.2.0.0 | Gộp bảng RACI của OBK-SOP-LIC từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 03/10/2026 | R.1.3.1 | Sau bảng Job: thêm dẫn chiếu về mục 5.6 OBK-SOP-00 cho yêu cầu giấy phép không khớp Job nào |
| 02/10/2026 | R.1.3.0 | thêm mục Q&A cho các Job LIC ưu tiên |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.2.0 | Mở khóa LIC-28 "Thông báo website TMĐT": thêm 12 CanCu (CC-LIC-28-TMDT-01 đến -12) từ Luật 122/2025/QH15, NĐ 248/2026/NĐ-CP, NĐ 117/2025/NĐ-CP; 3 VanBan (VB-122, VB-248, VB-117); cập nhật dẫn chiếu pháp lý trong job table LIC-28 và mục 9<br>Thêm 10 CanCu về Nhãn hiệu (CC-LIC-30-MARKS-01 đến -10) từ Luật 07/2022 và Nghị định 65/2023; cập nhật danh sách tài liệu căn cứ cho LIC-30 |
| 30/09/2026 | R.1.1.0 | Tích hợp bảy Job LIC-25 tới LIC-31 từ bảng nguồn PL_LIC_01 mục 9 vào danh mục Job, bổ sung cột 'Nguồn phát sinh'; bốn Job LIC-28 tới LIC-31 ghi chú hiện đang chặn, xem mục 9 |

### `OBK-SOP-LD`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.4.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.3.1.0 | Them muc dong du lieu bang nuoc va view BH-01, cat duoi muc 5a |
| 07/10/2026 | R.3.0.2 | Bước ghi mọi cảnh báo vi phạm kéo dài đã gửi vào Job có chủ thể AM |
| 04/10/2026 | R.3.0.1 | Sửa câu hỏi tự sự ở thời hạn hợp đồng lao động nước ngoài. |
| 04/10/2026 | R.3.0.0 | Gộp bảng RACI của OBK-SOP-LD từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 04/10/2026 | R.2.2.0 | thêm mục Câu hỏi thường gặp theo Job cho các Job LD ưu tiên |
| 02/10/2026 | R.2.1.0 | Thêm quy ước custodial token chữ ký số vào mục 1.3: token của khách do bộ phận Kế toán giữ tập trung, bộ phận Lao Động xin token khi nộp tờ khai, báo cáo BHXH trên cổng điện tử, dùng xong trả lại ngay, không lưu giữ quá 24 giờ làm việc |
| 02/10/2026 | R.2.0.0 | Thêm Job LD-27 quyết toán thuế TNCN năm và đăng ký người phụ thuộc, chu trình năm, nộp chậm nhất 31/03 năm sau; tách ranh giới với Kế toán: Kế toán khấu trừ và kê khai thuế TNCN theo kỳ, Lao Động làm quyết toán TNCN năm và đăng ký người phụ thuộc |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-LS`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.4.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.3.1.0 | Them muc dong du lieu bang nuoc va view VB-01 |
| 06/10/2026 | R.3.0.0 | Mục 1.5 quy tắc 1: CEO nhận bằng văn bản yêu cầu nhóm A và B trong 02 ngày làm việc kể từ ngày yêu cầu được ghi nhận (chốt VQ-39 phương án A) |
| 04/10/2026 | R.2.0.1 | Bỏ lối tự sự và từ ngữ đối thoại ở dịch vụ pháp lý. |
| 04/10/2026 | R.2.0.0 | Gộp bảng RACI của OBK-SOP-LS từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 04/10/2026 | R.1.1.0 | Thêm mục CÂU HỎI THƯỜNG GẶP THEO JOB cho bộ LS, 10 Job LS-03, LS-04, LS-05, LS-06, LS-07, LS-08, LS-09, LS-13, LS-14, LS-17 |
| 03/10/2026 | R.1.0.2 | Sau bảng Job: thêm dẫn chiếu về mục 5.6 OBK-SOP-00 cho yêu cầu pháp lý không khớp Job nào |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-RD`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.2.2.0 | Sua 7 link phieu RD-01 da gop sang VB-01 |
| 07/10/2026 | R.2.1.0 | Sua lai muc 9, them dong du lieu bang nuoc va view RD-01 |
| 04/10/2026 | R.2.0.1 | Chuyển số đếm liệt kê thành quy định, bỏ lối tự sự ở nghiên cứu. |
| 04/10/2026 | R.2.0.0 | Gộp bảng RACI của OBK-SOP-RD từ mười bước thành năm bước B1 đến B5, cập nhật nguyên tắc hai lớp theo NT-5 phân mức và đổi dẫn chiếu bước |
| 04/10/2026 | R.1.1.0 | Thêm mục CÂU HỎI THƯỜNG GẶP THEO JOB cho 10 Job ưu tiên RD |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-MK`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.4.0 | Dòng liên kết ở bảng tài liệu của mục 7 đổi hướng dẫn tiếp nhận và sàng lọc lead thành hướng dẫn AM bán hàng |
| 07/10/2026 | R.1.3.0 | Them muc dong du lieu bang nuoc va view bieu mau, gion noi dung lap |
| 07/10/2026 | R.1.2.0 | Kiem duit noi dung con mot luot soat duy nhat truoc phat hanh, doi Job MK-02 MK-03 va KS-MK-01 02 |
| 02/10/2026 | R.1.1.0 | Giai đoạn 3: tách mốc bàn giao nội bộ 02 giờ (MK sang AM) khỏi mốc T1; sửa dẫn chiếu mục 7.2.3 thành 7.2.4 |
| 01/10/2026 | R.1.0.1 | Sửa dòng 'Người phê duyệt' trong bảng thông tin phiên bản về khuôn hai cột, bỏ dấu thừa và liên kết bị cắt cụt của OBK-SOP-00 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-LIC-PL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 04/10/2026 | R.1.1.1 | Bỏ lối tự sự ở ghi chú bảng nguồn. |
| 04/10/2026 | R.1.1.0 | Gộp bảng RACI của PL_LIC_01 từ mười bước thành năm bước B1 đến B5 |
| 02/10/2026 | R.1.0.2 | Mục 7.1: bỏ tham chiếu mã GT-07, giữ dữ kiện quy định thẩm định theo Luật số 131/2025/QH15 và tồn đọng hồ sơ tại Cục Sở hữu trí tuệ |
| 01/10/2026 | R.1.0.1 | Ghi nhận mục 9 là bảng nguồn đã tích hợp vào danh mục Job OBK-SOP-LIC, ghi chú bốn Job LIC-28 tới LIC-31 hiện đang chặn, xem mục 9 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.3.2.0 | Sua thi tham chieu BM-PT va BM-PC di 07_ViecChoChot |
| 07/10/2026 | R.3.1.0 | Job NB-34 NB-35 doi ngay, NB-19 do ngay trong ngay, NB-30 gom 5 diem, bang moc them dong NB-19 |
| 06/10/2026 | R.3.0.0 | Bổ sung bốn điểm kiểm soát KS-NB-T4 tới T7 của OBK-SOP-NB-02 vào mục 6.2 và ba điểm KS-NB-M4 tới M6 của OBK-SOP-NB-03 vào mục 7.3 |
| 05/10/2026 | R.2.1.3 | Sửa lỗi lặp từ 'hành hành' ở hàng nhật ký bản R.2.1.2. |
| 04/10/2026 | R.2.1.2 | Bỏ lối tự sự ở chuẩn hành nội bộ. |
| 04/10/2026 | R.2.1.1 | Bo so dem tai tieu de muc 8 dan chieu cac nguyen tac tai chinh cua OBK-QCTC-01 Dieu 5 |
| 04/10/2026 | R.2.1.0 | Them muc CAU HOI THUONG GAP THEO JOB sau bang Job, tra loi theo chot kiem soat, moc thoi han va buoc chuyen Job cua 12 Job noi bo trong yeu, gom mua sam, thanh toan, tam ung, hoan ung, phiem thu phiem chi, tam ung tien luong, cham cong, luong, nghi phep va gio lam them |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.2.0.0 | Thêm mục 8.1 ủy quyền phê duyệt khi người có thẩm quyền phê duyệt theo quy trình vắng mặt: thẩm quyền chuyển tự động lên cấp trên liền kề trong chuỗi phê duyệt, chỉ trong thời gian vắng mặt, ghi nhận vào hệ thống quản trị nội bộ kèm lý do, không thay đổi chuỗi phê duyệt thường |

### `OBK-SOP-NB-05`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.5.1 | Dieu chinh tu ngu check list ban giao tiep nhan ke thua BG-01 |
| 07/10/2026 | R.1.5.0 | Them checklist ban giao tiep nhan ke thua phieu BG-01 vao Buoc 5 onboarding |
| 07/10/2026 | R.1.4.0 | Them view bieu mau BG-01 va ghi nhap 11_NhanSu |
| 07/10/2026 | R.1.3.0 | TL quyet dinh tuyen dung trong dinh bien va ngan sach duyet, giu CEO duyet offer va cua can Day 1 |
| 07/10/2026 | R.1.2.1 | Hai bước lưu trữ bản sao hồ sơ nhân sự và theo dõi kết quả xử lý bảo hiểm xã hội có chủ thể HR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.2.0 | Them cau dan chieu quy tac uy quyen khi nguoi phe duyet tuyen dung vang, muc 8.1 cua NB-00, sau bang phan quyen muc 4 |
| 30/09/2026 | R.1.1.0 | Thêm bảng Mốc thời gian tổng hợp trong mục 1, thêm mục VÍ DỤ và TRƯỜNG HỢP PHÁT SINH trước mục Liên kết, chia các câu dài hơn 250 ký tự thành câu ngắn hơn |

### `OBK-SOP-NB-06`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.5.0 | Dẫn chiếu quy trình thanh lý hợp đồng dịch vụ ở mục ngoài phạm vi chuyển về OBK-HB-37 phần 2 |
| 07/10/2026 | R.1.4.1 | Dieu chinh tu ngu check list ban giao nghi viec ke thua BG-02 |
| 07/10/2026 | R.1.4.0 | Them checklist ban giao nghi viec ke thua phieu BG-02 vao Buoc 7 offboarding |
| 07/10/2026 | R.1.3.0 | Them view bieu mau BG-02 va ghi nhap 11_NhanSu |
| 07/10/2026 | R.1.2.2 | Bước kiểm tra hiện trạng máy tính, màn hình, chuột, sạc, thẻ ra vào và chìa khóa tủ khi nghỉ việc có chủ thể AD-KT |
| 04/10/2026 | R.1.2.1 | Chuẩn hóa tiêu đề callout cảnh báo mở đầu, bỏ số đếm và chuyển sang văn phong hành chính |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.2.0 | Them cau dan chieu quy tac uy quyen khi nguoi phe duyet nghi viec vang, muc 8.1 cua NB-00, cuoi bang phan quyen muc 4 |
| 30/09/2026 | R.1.1.0 | Thêm bảng Mốc thời gian tổng hợp trong mục 1, thêm mục VÍ DỤ và bảng TRƯỜNG HỢP PHÁT SINH dạng Nếu - Thì trước mục Liên kết, chia các câu dài hơn 250 ký tự thành câu ngắn hơn |

### `OBK-SOP-NB-10`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.2 | Hai nghĩa vụ của người làm việc từ xa (không để người khác dùng thiết bị, chấm công đúng thời điểm bắt đầu và kết thúc ca) có chủ thể Người lao động |
| 04/10/2026 | R.1.2.1 | Chuẩn hóa tiêu đề mục 4, bỏ số đếm và chuẩn hóa văn phong hành chính |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
| 30/09/2026 | R.1.2.0 | Them mot dong dan chieu quy tac uy quyen khi nguoi phe duyet van, muc 8.1 cua NB-00, vao muc phan cap thuyen quyen Luong A |
| 30/09/2026 | R.1.1.0 | Thêm bảng MỐC THỜI GIAN TỔNG HỢP ngay sau cảnh báo mở đầu, thêm mục 9. VÍ DỤ và mục 10. TRƯỜNG HỢP PHÁT SINH trước nhật ký sửa; các câu trong tài liệu đều dưới 250 ký tự nên không chia câu |

### `OBK-SOP-NB-04`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.2.2.0 | Them dong LU-01 va view bieu mau, cat muc 5.9 |
| 07/10/2026 | R.2.1.0 | HR chot bang cong ngay 20, CEO duyet toan bang cong ngay 21 mot chu ky, bo buoc chot song song |
| 04/10/2026 | R.2.0.1 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề và callout, chuẩn hóa quy trình chấm công và tính lương |
| 02/10/2026 | R.2.0.0 | Chuỗi duyệt đăng ký làm thêm giờ: lũy kế giờ làm thêm tháng dưới 10 giờ do quản lý trực tiếp duyệt, từ 10 giờ trở lên do COO hoặc CEO theo nhánh quản lý của bộ phận; cập nhật Job NB-38 |
| 30/09/2026 | R.1.2.0 | Them cau dan chieu quy tac uy quyen khi nguoi duyet bang cong hoac bang luong vang, muc 8.1 cua NB-00, vao cuoi muc 4.1 |
| 30/09/2026 | R.1.1.0 | Thêm mục 1.1 BẢNG MỐC THỜI GIAN TỔNG HỢP 13 mốc; mục 6.9 gồm ví dụ kỳ lương tháng 10/2026 và 8 trường hợp phát sinh; chia 5 câu dài |

### `OBK-SOP-PL-C`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 04/10/2026 | R.1.1.1 | Sửa lối tự sự ở lịch tuần thư năm. |
| 02/10/2026 | R.1.1.0 | Dòng 11 phụ lục: sửa nhãn mốc 05 giờ thành 'mốc nội bộ, khắt khe hơn mốc pháp luật 06 giờ, Job KT-21 dẫn chiếu' (bỏ nhãn BẢN GỐC và ghi chú 'cần đồng bộ') |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-35`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.2 | Gộp 3 hướng dẫn onboarding khách mới, vận hành hằng ngày và điều phối, báo thông tin bất lợi và sự cố thành 3 phần, bảng liên kết trong từng phần chuyển thành dẫn chiếu phần |
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
| 04/10/2026 | R.1.1.1 | Chuyển số đếm liệt kê ở phần mục đích của hướng dẫn kết thúc và bàn giao thành quy định. |
| 02/10/2026 | R.1.1.0 | Bước 5: tách mốc lưu trữ hồ sơ khỏi 30 ngày tải dữ liệu của khách (Điều 9 TnC); thêm dòng khoảng tải 30 ngày, lưu trữ/xóa chỉ sau khi hết hạn |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL2`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.1 | Sinh lại bảng tra SLA, đổi dẫn chiếu bước của Job LIC-24 từ B10 thành B5 |
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
| 08/10/2026 | R.7.0.0 | Xét tăng lương cuối mỗi kỳ đánh giá 03 tháng liên tục của từng người, thay quý dương lịch; thăng cấp và thưởng hiệu quả căn cứ kỳ đánh giá |
| 08/10/2026 | R.6.0.0 | Xét tăng lương theo hiệu suất hằng quý dương lịch, cùng mốc kỳ đánh giá quý, thay chu kỳ 3 tháng tính riêng từng người; thăng cấp và thưởng hiệu quả căn cứ kết quả quý |
| 08/10/2026 | R.5.0.0 | Thang xếp loại tính thưởng dùng thang của khung đánh giá: A Xuất sắc, B Tốt, C Cần cải thiện, D Không đạt, tỷ lệ thưởng giữ nguyên; điều kiện thăng cấp lên P2 đo bằng tỷ lệ đạt chất lượng ngay lần đầu |
| 08/10/2026 | R.4.0.1 | Sửa ngữ pháp; đổi dẫn chiếu xét đơn cập nhật công sang Bảng kiểm nội bộ |
| 08/10/2026 | R.4.0.0 | Tính tiền lương làm thêm giờ trên tiền lương giờ theo Nghị định 145/2020 Điều 55; đăng ký làm thêm giờ và đơn nghỉ phép ghi trên sổ cái thay cho phiếu |
| 08/10/2026 | R.3.0.0 | Hợp nhất OBK-QCNS-02, OBK-QCNS-01, OBK-QCNS-06, OBK-QCNS-07 và LU-01 thành một quy chế, đối chiếu căn cứ với văn bản pháp luật |
| 07/10/2026 | R.2.1.0 | Gop phieu OBK-QCNS-02-PL-TL vao muc 6 kem vi du minh hoa hai co che va nguyen tac ap dung Dieu 6.5 |
| 02/10/2026 | R.2.0.0 | Mục 4.1: tiền lương chi vào ngày làm việc cuối cùng của tháng, là tiền lương của chính tháng đó; điểm KS-LT-05 cập nhật mốc chi trả theo kỳ hạn mới |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `LU-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.3.1.0 | Danh phieu PL-TL sang Quy che tien luong muc 6 |
| 06/10/2026 | R.3.0.0 | Đổi nguồn đối chiếu danh sách nhân sự từ sổ HD-01 sang trục hợp đồng lao động nội bộ của sổ TH-02 |
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
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 02/10/2026 | R.2.0.0 | Thêm mục 4.6.4 quy ước custodial token chữ ký số của khách hàng: bộ phận Kế toán giữ tập trung tại tủ bảo mật, bộ phận nào cần nộp thì xin token và ký trả trên phiếu CK-02, không lưu giữ quá 24 giờ làm việc theo mục 20.2 nguyên tắc (1) của Bản Điều Khoản Chung. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-71`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.4.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.3.0.1 | Năm bước tiếp nhận văn bản mới (đặt tên tệp, ghi nhật ký theo dõi, kiểm tra ngày có hiệu lực, kiểm tra tình trạng hiệu lực, đối chiếu quy định chuyển tiếp) có chủ thể CV-RD; bước gửi báo cáo cho các bộ phận nghiệp vụ có chủ thể TL-RD |
| 06/10/2026 | R.3.0.0 | Bước 3: CV-RD hoàn thành rà soát và phân loại điều khoản chuyển tiếp trước khi soạn ý kiến tư vấn (chốt VQ-41 phương án A) |
| 02/10/2026 | R.2.0.0 | Bước 4 và bảng KS-RD-05: sửa tiêu chí phân loại 4 mức ưu tiên theo LOẠI thay đổi của văn bản, khớp OBK-SOP-00 mục 12.3a; hiệu lực trong vòng 60 ngày là điều kiện phụ của Mức 1; bỏ dải 15/45 ngày và quy tắc tự động xếp Mức 1 theo chế tài |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-11`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.2.0.0 | Chuỗi phê duyệt làm thêm giờ theo ngưỡng 10 giờ lũy kế trong tháng: dưới 10 giờ do TL phê duyệt, từ 10 giờ trở lên do COO hoặc CEO theo nhánh quản lý; cập nhật RACI, trách nhiệm từng vị trí, sơ đồ trình tự và Job NB-38 |
| 30/09/2026 | R.1.0.1 | Chia 3 câu dài ở giới hạn giờ làm thêm trong năm, công thức lương ban đêm và điều kiện miễn thuế thành câu ngắn, không đổi nghĩa |

### `OBK-SOP-PM`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.3.0 | Sua link RD-01 gop sang VB-01 va cap nhat mo ta phieu UE-01 sau khi cat bo chi so kinh te don vi |
| 07/10/2026 | R.1.2.0 | Them muc dong du lieu bang nuoc va view bieu mau, cat no i dung truong hop |
| 04/10/2026 | R.1.1.1 | Chuyển số đếm liệt kê thành quy định, bỏ lối tự sự ở chương trình đối tác. |
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
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.2.1.0 | Hai trích nguyên văn điểm a khoản 1 Điều 3 về bên được ủy quyền bị xử phạt đổi thành trỏ về Chương 01 mục 5.3.1; bảng pháp lý dài rút về trỏ kho pháp luật |
| 06/10/2026 | R.2.0.0 | Biện pháp bắt buộc mục 1: rà soát mẫu hợp đồng dịch vụ kế toán do Ban Pháp chế cùng COO thực hiện trong đợt đầu năm của phụ lục lịch tuân thủ, hoàn thành trước 31/3 hằng năm, tiêu chí 100% mẫu có điều khoản phạm vi ủy quyền |
| 04/10/2026 | R.1.0.2 | Sửa lối tự sự ở quy tắc chặn bội số. |
| 04/10/2026 | R.1.0.1 | Bo so dem tai tieu de cac bien phap bat buoc kiem soat rui ro xu phat cua muc 1.3 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-13`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Mục D và E đổi thành trỏ về Phụ lục C và Phụ lục G, giữ lại bảy dòng vận hành đặc thù và mốc quyết toán thu nhập cá nhân; hai trích ngưỡng 50 tỷ và 12 tháng đổi thành trỏ về Phụ lục C |
| 06/10/2026 | R.1.0.3 | Đồng bộ chương 13: "khung mười mục" thành "khung chín mục" (mục "Căn cứ pháp lý" ra khỏi khuôn cấp 3 ngày 06/10/2026) |
| 04/10/2026 | R.1.0.2 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de muc, chuyen cac callout can xac minh sang quy dinh chuan muc va go phu luc chua xac minh khoi ban publish |
| 04/10/2026 | R.1.0.1 | Bo so dem tai tieu de thu tuc bat buoc truoc moi mua bao cao doi voi doanh nghiep sieu nho tai muc 6.1.4 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Ba dòng 2, 3, 4 cùng các dòng 15 và 20 của danh mục không được tự quyết tại mục 5.7 đổi thành trỏ về Chương 18 mục 6.4.3 vì nội dung đã tập trung ở đó |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de 3.1 va 5.4, chuyen callout can xac minh sang can cu phap ly |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.2.0 | Câu trích nguyên văn Điều 70a Luật Kế toán tại mục 6.12 đổi thành trỏ về Chương 01 mục 5.10.1 và Chương 08 mục 5.4.5, không còn bản sao thứ ba trong vault |
| 06/10/2026 | R.1.1.0 | Bớt mục 3 Căn cứ (bảng căn cứ nội bộ trùng dẫn chiếu trong thân chương), Căn cứ không còn là mục khuôn cấp 3 theo A1 06/10 |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de va RACI, chuyen callout sang quy dinh van hanh noi bo |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Câu người ký báo cáo tài chính chịu trách nhiệm tại mục 5.12.2 đổi thành trỏ về phân tích tại Chương 01 mục 5.1.3, giữ nguyên mốc Luật Kế toán |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de 5.1 va 5.12, chuyen callout sang can cu phap ly |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-04`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de va callout luu tru tai lieu ke toan |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-05`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.0.2 | Ba bước đối chiếu chứng từ nhận, đối chiếu tồn kho và đối chiếu danh mục tài sản trong quy trình kế toán tháng có chủ thể CV-KT |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh va quy cach trinh bay callout thoi han theo phap luat va tai khoan hang ton kho |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-06`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.0.2 | Bước ghi nhận tiền phạt vi phạm hành chính và tiền chậm nộp thuế vào Tài khoản 811 có chủ thể CV-KT |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, sua loi bang kiem N01, bo so dem tieu de va chuyen callout sang can cu phap ly |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-07`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Trích nguyên văn điểm d khoản 2 Điều 29 Luật Kế toán về chữ ký báo cáo tài chính tại mục 5.2.1 đổi thành trỏ về Chương 01 mục 5.1.3 |
| 04/10/2026 | R.1.0.2 | Sửa lối tự sự ở so sánh quyền tự quyết. |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de 6.1 va 6.5, chuyen callout sang can cu phap ly |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Tám bảng nguyên văn Thông tư 58/2026 tại mục 5.4 và 5.6 đổi thành trỏ về bản gốc tại kho pháp luật, giữ lại toàn bộ ghi chú vận hành và điều kiện Điều 70a |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de cau hoi va chuyen callout sang can cu phap ly |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL3`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.1.1.2 | Đồng bộ khuôn cấp 3: mục "Căn cứ pháp lý" ra khỏi khuôn `OBK-TTT-07` (K4 đủ 9 mục, K5 hạ cảnh báo), sửa 3 tham chiếu "khung mười mục" |
| 04/10/2026 | R.1.1.1 | Sửa lối tự sự ở phụ lục liên kết và chuyển mức rủi ro. |
| 04/10/2026 | R.1.1.0 | Đổi dẫn chiếu bước B1 đến B10 thành B1 đến B5 và cập nhật nguyên tắc ba lớp theo NT-5 phân mức tại PL_3 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-08-PL-C`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.2 | Số lần vi phạm quy trình đếm trong một kỳ đánh giá |
| 08/10/2026 | R.2.0.1 | Đổi dẫn chiếu tiêu chí phần A, phần B sang ba nhóm của khung đánh giá |
| 08/10/2026 | R.2.0.0 | Điểm đánh giá chéo không dùng vì đã bãi bỏ; thang nhãn xếp loại bốn mức; sửa chính tả và bảng sai số giá trị |
| 08/10/2026 | R.1.1.1 | Đổi liên kết từ điển vai trò sang bảng thẩm quyền; SOP pháp lý và nghiên cứu pháp lý trỏ sang bảng kiểm pháp lý |
| 07/10/2026 | R.1.1.0 | Them goi y phien muc nay khong tham gia chui cham diem theo muc 9.3 va cap nhat dan phieu vi tri PL-E |
| 04/10/2026 | R.1.0.1 | Đổi dẫn chiếu bước B4 và B7 thành B1 và B3 tại bảng kỹ năng mảng giấy phép |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-08-PL-E`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Khuôn phiếu vị trí ghi tiêu chí theo ba nhóm của khung đánh giá |
| 08/10/2026 | R.1.1.2 | Sửa chính tả và ngữ pháp |
| 08/10/2026 | R.1.1.1 | Đổi liên kết chuẩn vận hành nội bộ và các SOP thu tiền, quản lý tiền sang quy tắc sổ cái và quy chế tài chính nội bộ |
| 07/10/2026 | R.1.1.0 | Gop 11 phieu vi tri thanh 1 phieu chung ap dung cho tat ca vi tri A den K kem 3 ghi chu vi tri dac thu C D I |
| 04/10/2026 | R.1.0.1 | Đổi dẫn chiếu bước B10 thành B5 tại tiêu chí TC-LIC-02 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `BC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.3.0.0 | Khôi phục ô ký Tổng Giám đốc phê duyệt (CEO): điểm kiểm soát KS-BC-02 và nghĩa vụ trình CEO phê duyệt biên bản diễn tập trong 03 ngày làm việc vẫn bắt buộc chữ ký CEO, khối ký R.2.0.0 không còn nơi thể hiện chữ ký đó |
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
| 06/10/2026 | R.2.0.0 | Rút lớp Giám đốc vận hành khỏi chuỗi ký xác nhận bảng biến động BHXH |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu BH-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CK-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CK-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CK-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CK-02 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.3.0 | Cat cot trung voi OBK-SOP-00 muc 11.2 trong bang M1 den M6 va truyen quy tac phan tich nguyen nhan sang OBK-SOP-00 |
| 07/10/2026 | R.1.2.0 | Bo so luong 203 ma Job, truyen OBK-SOP-PL2 la ban tra sinh tu dong |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CL-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CN-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Rút lớp Trưởng phòng Thương mại khỏi chuỗi ký xác nhận sổ công nợ |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CN-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CT-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CT-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `CV-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.3.0 | Sua 7 link phieu TL-02 da gop sang TL-01 |
| 07/10/2026 | R.1.2.0 | Bo so luong 203 ma Job, truyen OBK-SOP-PL2 la ban tra sinh tu dong |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu CV-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu DL-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DT-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.0 | KS-DT-03 do ngay trong ngay khi doi nhan su theo Dieu 35.2 |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu DT-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DT-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu DT-02 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `DV-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `GC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.0 | Bo so luong 203 ma Job, truyen OBK-SOP-PL2 la ban tra sinh tu dong |
| 07/10/2026 | R.1.1.1 | Bước 3 đối chiếu bậc lương của từng chuyên viên theo LU-01 có chủ thể KTV |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu GC-01 về Sổ cái OBK-MSR |
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
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu HD-02 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HH-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 06/10/2026 | R.2.0.0 | Đổi tên tham chiếu điểm kích hoạt TG-13 sau khi ma trận MT-01 chuyển lưu trữ |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu HH-02 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `HH-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu HH-03 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.1.0 | Gop phieu HH-01 vao so quan tri khach hang va dich vu CRM kem ban ghi dang ky khach duoc gioi thieu |
| 06/10/2026 | R.2.0.0 | Trỏ trục hạn dịch vụ khách hàng về sổ TH-02 và rút lớp Trưởng phòng Thương mại khỏi chuỗi ký |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KH-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KN-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.0 | Sua link phieu TL-02 da gop sang TL-01 |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KN-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KP-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.0.1 | Bước báo cáo kết quả rà soát cho COO tại giao ban tuần có chủ thể Trưởng bộ phận chủ quản |
| 06/10/2026 | R.2.0.0 | Đổi nguồn dữ liệu chỉ số QC-07 từ bảng GP-01 sang trục thủ tục hành chính của sổ TH-02 |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KP-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KQ-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu KQ-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `KT-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Đổi nguồn kiểm tra hợp đồng lao động từ sổ HD-01 sang trục hợp đồng lao động nội bộ của sổ TH-02 |
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
| 08/10/2026 | R.4.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.3.0.1 | Quy tắc mỗi lần dùng phiếu chọn đúng một cấp đối chiếu có chủ thể AD-KT |
| 06/10/2026 | R.3.0.0 | Khôi phục dòng TGĐ duyệt trong mẫu: thân phiếu (bước 8, luân chuyển) vẫn bắt buộc trình TGĐ duyệt bảng đối chiếu ở cấp đối chiếu đầy đủ, mẫu R.2.0.0 không còn nơi ghi sự phê duyệt đó |
| 06/10/2026 | R.2.0.0 | Rút dòng Tổng Giám đốc duyệt khỏi mẫu đối chiếu ngân hàng |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu NH-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.5.0.0 | Kỳ đánh giá ghi từ ngày đến ngày; thời hạn nộp tính từ ngày kết thúc kỳ |
| 08/10/2026 | R.4.0.0 | Kỳ đánh giá ghi theo quý; thời hạn nộp tính theo quý kế tiếp |
| 08/10/2026 | R.3.0.0 | Phiếu tự đánh giá chấm theo ba nhóm 70, 20, 10 phần trăm |
| 08/10/2026 | R.2.0.0 | Bỏ mục đề xuất đồng nghiệp đánh giá chéo đã bãi bỏ; bỏ số đếm ở tiêu đề mục |
| 08/10/2026 | R.1.1.1 | Chuyển phiếu tự đánh giá từ thư mục phiếu sang thư mục nhân sự, đi cùng khung đánh giá hiệu suất |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu NS-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.5.0.0 | Kỳ đánh giá ghi từ ngày đến ngày; buổi phản hồi tính từ ngày kết thúc kỳ |
| 08/10/2026 | R.4.0.0 | Kỳ đánh giá ghi theo quý; buổi phản hồi tính theo quý kế tiếp |
| 08/10/2026 | R.3.0.0 | Phiếu tổng hợp điểm theo ba nhóm 70, 20, 10 phần trăm; thang xếp loại theo khung |
| 08/10/2026 | R.2.0.0 | Bước và ngày làm việc theo năm bước của khung đánh giá; thang xếp loại bốn mức chép từ khung; bỏ số đếm ở tiêu đề |
| 08/10/2026 | R.1.2.1 | Chuyển phiếu tổng hợp điểm cuối kỳ từ thư mục phiếu sang thư mục nhân sự, đi cùng khung đánh giá hiệu suất |
| 07/10/2026 | R.1.2.0 | Doi trong so nguoi cham phan B thanh tu danh gia 20 phan tram va quan ly truc tiep 80 phan tram sau bai bo danh gia cheo |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu NS-03 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `NS-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.1.2 | Đổi dẫn chiếu sang mục 12 quy chế tiền lương; rà văn phong |
| 08/10/2026 | R.1.1.1 | Chuyển mẫu biên bản vi phạm kỷ luật lao động từ thư mục phiếu sang thư mục nhân sự, đi cùng nội quy lao động |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu NS-08 về Sổ cái OBK-MSR |
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
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu SC-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.1 | Sửa từ ngữ ở bảng theo dõi dòng tiền. |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu TC-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TH-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu TH-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TL-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.0 | Gop phieu TL-02 vao so giao nhan tai lieu va buu pham kem bien ban ban giao tai lieu |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu TL-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TL-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TS-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu TS-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TS-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.0 | Bo tham chieu Bang KP-01 da cat khoi kho |
| 07/10/2026 | R.1.1.1 | Bước báo cáo cân bằng công suất tuần gửi COO có chủ thể Quản lý trực tiếp (TL) |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu TS-02 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TU-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `UE-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.2.1.0 | Cat bo chi so kinh te don vi giu lai phan doi soat va thanh toan hoa hong hai chieu |
| 06/10/2026 | R.2.0.0 | Chuyển tham chiếu ma trận MT-01 về bản lưu trữ và thêm lớp KTT vào chuỗi ký phê duyệt |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu UE-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `VB-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.1.0 | Gop phieu RD-01 vao so vu viec tu van va hop dong kem ticket log nghien cuu phap ly |
| 06/10/2026 | R.2.0.0 | Bước 2: Bản đối chiếu điều khoản lập trong hạn cam kết tại cột 6 của Bước 1 (chốt VQ-42 phương án A) |
| 04/10/2026 | R.1.1.0 | Thêm dòng Dữ liệu chung dẫn nghiệp vụ của phiếu VB-01 về Sổ cái OBK-MSR |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.4.0.1 | Bỏ câu lặp nghĩa tên cột người quyết, các số đếm nghĩa vụ và sự kiện; cụm nơi duy nhất viết thành chỉ bảng này ghi |
| 08/10/2026 | R.4.0.0 | Bổ sung nguồn lực: Team Lead bộ phận đề xuất phương án và cung cấp số liệu, CEO quyết |
| 08/10/2026 | R.3.0.1 | Bỏ số đếm ở câu dẫn các danh sách việc và giới hạn thẩm quyền |
| 08/10/2026 | R.3.0.0 | Chiết khấu một khung chung: AM quyết đến 10%, CEO quyết mức lớn hơn; bốn việc bảo lãnh cá nhân, độc quyền, sở hữu trí tuệ, kiện tụng do CEO quyết sau ý kiến Legal R&D; thêm danh sách 11 việc bắt buộc hỏi ý kiến; bản tin pháp luật hằng tuần do Legal R&D duyệt và quyết công bố |
| 08/10/2026 | R.2.0.0 | Viết lại Quy chế tổ chức và phân quyền thành Bảng thẩm quyền, gộp bốn phụ lục, mô hình kiểm soát của Phòng Dịch vụ và quy định con dấu, chữ ký số vào một tệp. |
| 04/10/2026 | R.1.0.2 | Bỏ ghi chú log dựng bản và lối tự sự ở phụ lục nhân sự dẫn chiếu. |
| 04/10/2026 | R.1.0.1 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề, lược bỏ ghi chú dạng log và chuẩn hóa các quy định hiện hành |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02-PL-D`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.0 | Doi dan chieu 47.2 thay 47.3a cho ngoai le tao lenh cua KTV |
| 07/10/2026 | R.1.1.0 | Chỉ định hai thủ quỹ: văn phòng Thành phố Hồ Chí Minh là Đào Phương Linh, văn phòng Đà Nẵng là Sinh Nguyen, không đặt người dự phòng |
| 06/10/2026 | R.1.0.2 | Điền tên 11 người chưa có tên vào cột Người của bảng ánh xạ vị trí và bảng kiêm nhiệm |
| 04/10/2026 | R.1.0.1 | Bỏ dòng ghi chú cập nhật và lối tự sự ở đầu phụ lục. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02-PL-C`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Bảng ai quyết: bổ sung nguồn lực do Team Lead bộ phận đề xuất kèm số liệu, CEO quyết; khớp Bảng thẩm quyền |
| 08/10/2026 | R.2.0.0 | COO quyết kết luận khả thi theo Bảng thẩm quyền; đổi dẫn chiếu sang Quy tắc sổ cái mục 7.6 và Bảng thẩm quyền; bỏ từ ngữ ẩn dụ và từ tiếng Anh |
| 08/10/2026 | R.1.1.1 | Đổi liên kết chuẩn vận hành dịch vụ, chuẩn vận hành nội bộ, quy chế tổ chức và ma trận phân quyền sang quy tắc sổ cái và bảng thẩm quyền |
| 07/10/2026 | R.1.1.0 | Thang chuyen len cap tren con hai cap TL den CEO, ma tran loai van de gom tu 16 xuong 9 dong |
| 04/10/2026 | R.1.0.1 | Bỏ ghi chú log, viết lại đoạn kiêm nhiệm và số đếm liệt kê. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02-PL-E`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.0 | Chi noi bo con hai bac B1 va B3, B1 di den duoi 20 trieu dong |
| 04/10/2026 | R.1.0.1 | Bỏ lối đối thoại trong bảng tra nhanh thẩm quyền. |
| 04/10/2026 | R.1.0.0 | Ban hành lần đầu: ma trận ủy quyền một trang với bốn mức trần (chi nội bộ, chiết khấu và giảm giá hướng khách, lịch trình, tính đảo); mức trần chi nội bộ dẫn chiếu mục 12.3 của OBK-QCTC-01 làm nguồn gốc duy nhất; nhóm không ủy quyền gồm bảy việc cộng hai dòng oBacker; hai trục tách riêng và bốn điều kiện để ma trận sống |

### `OBK-QCTC-02-PL-A`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.1 | Bỏ ghi chú log dựng bản ở đầu phụ lục. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.6.0.0 | Khi chưa gán thủ quỹ chỉ dừng nhập quỹ và xuất quỹ tiền mặt, khớp quy chế tài chính nội bộ Điều 4.1; đổi dẫn chiếu sang Bảng kiểm nội bộ và Quy tắc sổ cái; bỏ số đếm và sửa ngữ pháp |
| 08/10/2026 | R.5.0.0 | Thêm chữ ký kế toán trưởng trên đề nghị tạm ứng kiêm văn bản cử đi công tác, theo Luật Kế toán Điều 19 khoản 3 |
| 08/10/2026 | R.4.0.0 | Gộp danh mục chứng từ BM-01 đến BM-07, KQ-01, CT-01, CK-02 và quy định sổ chi tiết vào quy chế, bỏ phần giải thích và cảnh báo. |
| 07/10/2026 | R.3.2.0 | Sua hai dong 01-TT va 02-TT di tham chieu 07_ViecChoChot |
| 07/10/2026 | R.3.1.0 | Danh muc 3b.1 gan Task voi ma Job tai OBK-SOP-PL2 theo ban tra, bo so luong ma Job cu |
| 06/10/2026 | R.3.0.0 | Ký ban hành quy chế ngày 06/10/2026, độc lập, không chờ OBK-QCTC-01 |
| 06/10/2026 | R.2.0.0 | Điểm 3a.5: gán chủ thể khấu trừ TNCN 10% là người thực hiện thanh toán (NTT theo OBK-QCTC-01 mục 35.1a) và mốc trước khi thực hiện lệnh chi trả |
| 04/10/2026 | R.1.0.2 | Bỏ lối tự sự ở quy chế hạch toán kế toán. |
| 04/10/2026 | R.1.0.1 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề và callout, cập nhật quy định chuẩn mực về chứng từ và thủ quỹ |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-31`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.0.3 | Gộp 3 hướng dẫn tiếp nhận và sàng lọc lead, họp làm rõ nhu cầu, đề xuất báo giá và ký hợp đồng thành 3 phần, bảng liên kết trong từng phần chuyển thành dẫn chiếu phần |
| 04/10/2026 | R.1.0.1 | Chuyển số đếm liệt kê ở phần mục đích của hướng dẫn tiếp nhận và sàng lọc lead thành quy định. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-37`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.0.2 | Gộp 2 hướng dẫn giữ khách và mở rộng doanh thu, kết thúc dịch vụ và bàn giao thành 2 phần, bảng liên kết trong từng phần chuyển thành dẫn chiếu phần |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL-T`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.0 | Dựng phụ lục đầu: phân 223 Job theo ba Tier, kèm cụm và cờ giữ hai lớp mọi Tier |

### `OBK-HB-09`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Các bảng pháp lý dài trong chương rút về trỏ kho pháp luật, giữ lại ngưỡng nội bộ, điều kiện không tự quyết và toàn bộ mốc trích dẫn |
| 04/10/2026 | R.1.0.2 | Chuyển số đếm liệt kê ở ngưỡng thuế thành quy định trung tính. |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de muc, chuyen cac callout can xac minh sang quy dinh chuan muc va go phu luc chua xac minh khoi ban publish |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-18`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.0.2 | Mười sáu bước ba lớp kiểm soát chất lượng: tự kiểm có chủ thể CV-KT, soát xét có chủ thể TL-KT, hậu kiểm độc lập có chủ thể COO |
| 04/10/2026 | R.1.0.1 | Sửa từ ngữ ở chương kiểm soát chất lượng. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-21`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.2.0 | Hai tham chiếu Mẫu 09 tại bảng bước thứ 9 và bảng tra đổi thành khung Mẫu 09 tại Chương 19 mục 6.4 |
| 07/10/2026 | R.1.1.0 | Gỡ hai dòng tham chiếu Phụ lục D (tệp đã xóa) khỏi bảng lịch cập nhật và bảng tra |
| 04/10/2026 | R.1.0.1 | Bỏ lối tự sự ở căn cứ và mục dẫn lại. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-MSR`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.2.0 | Thêm mục 7.5a mức ưu tiên xử lý văn bản pháp luật mới, chuyển từ chuẩn vận hành dịch vụ cũ |
| 08/10/2026 | R.3.1.0 | Thêm mục 7.2a mốc phản hồi khách và mốc cấp đầu vào giữa các bộ phận, chuyển từ chuẩn vận hành dịch vụ cũ vì các bảng kiểm đang dùng |
| 08/10/2026 | R.3.0.1 | Rà văn phong và ngữ pháp: đổi nhãn mô tả ở bảng đầu tài liệu, sửa hai câu thiếu từ |
| 08/10/2026 | R.3.0.0 | Viết lại thành quy tắc sổ cái chung cho mọi việc: bảng Việc, nhật ký chỉ ghi thêm, 14 loại sự kiện, quan hệ giữa các việc, hạn nhận việc trong buổi làm việc; gộp nguyên tắc thi hành của chuẩn vận hành dịch vụ và chuẩn vận hành nội bộ; bỏ trường gate và cơ chế Tier |
| 06/10/2026 | R.2.0.0 | Quy tắc ghi số 5: đối chiếu mâu thuẫn dữ liệu có mốc ngay trong ngày phát hiện |
| 04/10/2026 | R.1.0.1 | Chuẩn hóa ký hiệu hệ thống quản lý công việc. |
| 04/10/2026 | R.1.0.0 | Dựng Sổ cái đầu: 28 trường, 9 quy tắc ghi, ba view |

### `OBK-QCNS-08-PL-B`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Tiêu chí công việc dạng hồ sơ tính trong nhóm Chất lượng đúng hạn của thang chấm ba nhóm |
| 08/10/2026 | R.1.0.3 | Rà văn phong: bỏ từ ẩn dụ |
| 08/10/2026 | R.1.0.2 | Đổi liên kết chuẩn vận hành dịch vụ sang quy tắc sổ cái tại tiêu chí công việc dạng hồ sơ |
| 04/10/2026 | R.1.0.1 | Sửa lối tự sự ở tiêu chí công việc đăng hồ sơ. |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-16`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Đổi nguồn hồ sơ hợp đồng lao động từ sổ HD-01 sang trục hợp đồng lao động nội bộ của sổ TH-02 |
| 30/09/2026 | R.1.0.1 | Chia 4 câu dài ở căn cứ pháp lý, dữ liệu thuế và lao động, nghĩa vụ báo cáo rủi ro mức Cao thành câu ngắn, không đổi nghĩa |

### `TH-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.2.0 | Sua link phieu BG-02 da gop thanh checklist trong NB-06 |
| 07/10/2026 | R.2.1.0 | Gop phieu TH-01 vao so theo doi han tong hop kem truc khai thue va bao cao tai chinh |
| 06/10/2026 | R.2.0.0 | Vá 10 finding P1 của lượt đọc diff ngược: nhập đủ 3 bước quy trình trục GP-01 (tiếp nhận mở dòng, kiểm tra hợp lệ 04 giờ/01 ngày trước nộp, thông báo số biên nhận cho AM), 2 nhánh sau phê duyệt thử việc (Đạt: hoàn thiện HĐLĐ trước ngày kết thúc; Không đạt: thông báo chấm dứt và thanh toán tiền công thử việc), HR rà soát tuần và báo cáo CEO ngày 25 hằng tháng, lưu bản in có chữ ký HR-CEO tại hồ sơ nhân sự, thêm cột SLA cam kết và cơ quan tiếp nhận vào cột 8, TP Thương mại nhận báo cáo tháng (Renewal Rate, tỷ lệ đạt cam kết), bổ sung OBK-QCNS-01 và OBK-SOP-PL-LIC-01 vào Sinh từ |
| 06/10/2026 | R.1.0.0 | Dựng bản đầu: nhập ba phiếu DV-02, GP-01, HD-01 (trục hạn + mốc theo luật + nhắc trước hạn, kể cả trục chữ ký số liên kết CK-02) |

### `OBK-SOP-DV-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.1.0.1 | Quy tắc vận hành số 3: viết rõ chủ ngữ 'người thực hiện công việc' cho hành động chạy tiếp bằng giả thiết |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.2.3.0 | Them dong so CN-01 va DT-02, tham chieu phieu thu chi di 07_ViecChoChot |
| 07/10/2026 | R.2.2.0 | Bỏ nhắc hẹn rà lại ngưỡng cảnh báo tạm sau 03 kỳ chạy thật theo chỉ thị của CEO ngày 07/10/2026, giữ nguyên các mức tạm đặt 06/10/2026 |
| 06/10/2026 | R.2.1.0 | Đặt ngưỡng cảnh báo tạm cho năm chỉ số mục 9 chưa có ngưỡng, mức tạm đặt 06/10/2026, rà lại sau 03 kỳ chạy thật |
| 06/10/2026 | R.2.0.0 | Mục 4: KTV mở và ghi nhận khoản phải thu theo từng vụ khi đủ đầu vào, KTT soát lại đầu vào tại thời điểm xuất hóa đơn (chốt VQ-40 phương án A) |
| 04/10/2026 | R.1.0.1 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề và callout, hoàn thiện các quy định về hợp đồng và công nợ |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-11`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.2.1.0 | Bảng pháp lý dài về thuế thu nhập cá nhân rút về trỏ kho pháp luật, giữ lại ngưỡng nội bộ và toàn bộ mốc trích dẫn |
| 06/10/2026 | R.2.0.0 | Mục 4: CV-KT thu thập và đối chiếu đầu vào bắt buộc trước hạn nộp thuế TNCN pháp luật của kỳ, AM nhắc khách khi thiếu (chốt VQ-43 phương án A) |
| 06/10/2026 | R.1.0.2 | Đồng bộ chương 11: "khung mười mục" thành "khung chín mục" (mục "Căn cứ pháp lý" ra khỏi khuôn cấp 3 ngày 06/10/2026) |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de muc, chuyen cac callout can xac minh sang quy dinh chuan muc va go phu luc chua xac minh khoi ban publish |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.1.0 | Danh phieu PL-TL sang Quy che tien luong muc 6 va cap nhat ten tap OBK-QCNS-03 |
| 06/10/2026 | R.2.0.0 | Điều kiện mất thưởng doanh thu tháng áp cho cả bốn hình thức kỷ luật lao động, kể cả khiển trách |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.3.0 | Them dong ba so TC-01 NH-01 KQ-01, tham chieu phieu thu chi di 07_ViecChoChot |
| 07/10/2026 | R.2.2.0 | Rao soat phan quyen ngan hang do ngay trong ngay khi doi nhan su thay hanh quy |
| 07/10/2026 | R.2.1.0 | Bỏ nhắc hẹn rà lại ngưỡng cảnh báo tạm sau 03 kỳ chạy thật theo chỉ thị của CEO ngày 07/10/2026, giữ nguyên các mức tạm đặt 06/10/2026 |
| 07/10/2026 | R.2.0.0 | Mục 5.2.2 bỏ người dự phòng thủ quỹ và ghi vai trò TQ do hai người của hai văn phòng giữ theo quyết định của CEO ngày 07/10/2026 |
| 06/10/2026 | R.1.1.0 | Đặt ngưỡng cảnh báo tạm cho bốn chỉ số mục 9 chưa có ngưỡng, mức tạm đặt 06/10/2026, rà lại sau 03 kỳ chạy thật |
| 04/10/2026 | R.1.0.2 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề và callout, hoàn thiện các quy định kiểm soát quỹ và tài khoản |
| 30/09/2026 | R.1.0.1 | Chia 3 câu dài ở mục đích, căn cứ nội bộ và mục 5.2.2 thành câu ngắn bằng dấu chấm phay, không đổi nghĩa |

### `OBK-SOP-PL-A`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-12`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.2.0 | Trích nguyên văn khoản 3 Điều 9 về miễn xử phạt khi tự sửa tại mục G.3 đổi thành trỏ về Chương 15 mục 5.2; bảng pháp lý dài rút về trỏ kho pháp luật |
| 07/10/2026 | R.1.1.0 | Gỡ tham chiếu Phụ lục D (tệp đã xóa) khỏi mục 2.3 về phạm vi áp dụng |
| 06/10/2026 | R.1.0.2 | Đồng bộ chương 12: "khung mười mục" thành "khung chín mục" (mục "Căn cứ pháp lý" ra khỏi khuôn cấp 3 ngày 06/10/2026) |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de muc, chuyen cac callout can xac minh sang quy dinh chuan muc va go phu luc chua xac minh khoi ban publish |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL-B`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Gỡ tham chiếu Phụ lục D (tệp đã xóa) khỏi Bảng 4 tài liệu bị ảnh hưởng và bảng tra cuối phụ lục |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-06`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.0.1 | Bổ sung chủ thể Trưởng bộ phận cho câu lưu bản sao đề xuất thưởng qua thư điện tử (chốt VQ-22) |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-51`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.0.1 | Hai bước đối soát tiền lương (đối chiếu ngày nghỉ phép với đơn đã duyệt, xuất bảng tổng hợp công và ký xác nhận kiểm soát lớp 1) có chủ thể CV-LD |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-61`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.0.1 | Tám bước thẩm định, soạn thảo và bàn giao sản phẩm pháp lý (phân loại độ phức tạp, tra mã số doanh nghiệp, kiểm tra ủy quyền, kiểm tra phê duyệt nội bộ, xuất bản dự thảo, chuyển giao cho AM...) có chủ thể CV-LS; bước kiểm tra tính logic của lập luận và phương án đàm phán có chủ thể TL-LS |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-32`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-10`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Bảng pháp lý dài về thuế thu nhập doanh nghiệp rút về trỏ kho pháp luật, giữ lại ngưỡng nội bộ và toàn bộ mốc trích dẫn |
| 07/10/2026 | R.1.0.2 | Bước gửi câu hỏi bằng văn bản và yêu cầu người đại diện theo pháp luật ký xác nhận, ghi ngày có chủ thể AM |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de muc, chuyen cac callout can xac minh sang quy dinh chuan muc va go phu luc chua xac minh khoi ban publish |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-07`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.0.1 | Tám bước từ kiểm tra thẩm quyền người ký đến lưu bản gốc văn bản đã đóng dấu có chủ thể AD-KT |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.0 | Them view bieu mau BM-BGTS va TS-01, cat ma trong cac buoc |
| 07/10/2026 | R.1.0.1 | Hai bước lập Phiếu bàn giao tài sản BM-BGTS và lập Biên bản điều chuyển tài sản có chủ thể AD-KT |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-15`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.0 | Bon kịch bản gián đoạn gom moi kịch bản mot dòng, diễn tập khôi phục thảm họa 01 lần mỗi năm |
| 07/10/2026 | R.1.0.2 | Dan thanh ten nha cung cap MISA thay cho thuc doan thau markup trong than da ban hanh |
| 07/10/2026 | R.1.0.1 | Bước thực hiện lệnh khôi phục vào môi trường thử nghiệm có chủ thể Quản trị hệ thống; bước đánh giá dữ liệu khôi phục đạt độ chính xác 100% có chủ thể KTT |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-17`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 30/09/2026 | R.1.0.1 | Chia 5 câu dài ở mục đích, căn cứ pháp lý và ngưỡng dung sai phương sai ngân sách thành câu ngắn, không đổi nghĩa |

### `OBK-SOP-NB-18`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.2.0 | Bo COO khoi chuoi duyet, TL de xuat va CEO ky quyet dinh cu di cong tac truoc chuyen di, mot chu ky |
| 07/10/2026 | R.1.1.0 | Doi chieu voi OBK-QCTC-01: cap khoan tam ung ton dong tu 02 ve 03 theo muc 36.3, che tai qua han theo muc 38.2a khong tru vao luong, muc 5.1 dinh muc ve ban dao lieu 21 OBK-QCTC-01, bang loi 8 xuong 3 dong, cot ban kiem soat ghi vai theo vai khong theo ten |
| 07/10/2026 | R.1.0.2 | Bước kiểm tra việc tuân thủ định mức chi phí khi thẩm định khoản chi có chủ thể KTV |
| 30/09/2026 | R.1.0.1 | Chia 4 câu dài ở mục đích, phạm vi áp dụng và yêu cầu chứng từ thanh toán không dùng tiền mặt thành câu ngắn, không đổi nghĩa |

### `OBK-SOP-NB-09`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.2 | Bỏ các số đếm nhóm dữ liệu ở mục 5 và số đếm nội dung thông báo ở mục 7 |
| 08/10/2026 | R.3.0.1 | Đổi văn bản cấp trên sang Quy tắc sổ cái |
| 08/10/2026 | R.3.0.0 | Chỉ định Trưởng nhóm Legal R&D giữ vai trò người phụ trách bảo vệ dữ liệu cá nhân |
| 08/10/2026 | R.2.0.0 | Hợp nhất OBK-SOP-NB-09, phần sao lưu của OBK-SOP-NB-15, DL-01 và BC-01 thành một quy chế, đối chiếu nghĩa vụ với Luật 91/2025 và Nghị định 356 |
| 07/10/2026 | R.1.0.1 | Hai bước đánh giá khả năng thu hồi dữ liệu và phân loại mức độ sự cố có chủ thể DPO |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-12`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.2 | Chuẩn hóa tiêu đề callout và nội dung mở đầu, bỏ số đếm và chuyển sang văn phong hành chính |
| 30/09/2026 | R.1.0.1 | Chia 5 câu dài ở căn cứ pháp lý, tạm đình chỉ, thời hạn ban hành, thu hồi tiền bồi thường và xét giảm thời hạn thành câu ngắn, không đổi nghĩa |

### `OBK-SOP-NB-14`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 04/10/2026 | R.1.0.2 | Chuẩn hóa tiêu đề callout và nội dung mở đầu, bỏ số đếm và chuyển sang văn phong hành chính |
| 30/09/2026 | R.1.0.1 | Chia 4 câu dài ở mục đích, bước 3 và chế độ tiền lương khi tạm chuyển thành câu ngắn, không đổi nghĩa |

### `OBK-SOP-NB-PL-DT`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.0 | Mo hinh S2 gom 5 buoc, chuoi duyet chi con B4 la duyet chi, G4 G5 G9 doi dan muc |
| 21/09/2026 | R.1.0.0 | Ban hành. |

### `OBK-SOP-NB-PL-BM`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.1.0 | Chuyen BM-PT va BM-PC di 07_ViecChoChot, sua phan cach dung phu luc |
| 07/10/2026 | R.2.0.0 | Bo B2 khoi cac bac han muc, nghanh G-2 bai bo tu 07/10/2026, bieu mau ghi B1 B3 B4 B5 |
| 04/10/2026 | R.1.1.1 | Chuẩn hóa văn phong hành chính, bỏ số đếm ở tiêu đề và callout, lược bỏ ghi chú dạng log |
| 02/10/2026 | R.1.1.0 | Thêm biểu mẫu BM-09 Bảng chấm công gồm phần đầu, phần thân ngày 1 đến 30 với cột nghỉ, OT, WFH, tổng công và phần ký ba chữ ký; bỏ bold dòng BM-08 trong danh mục biểu mẫu cho đồng nhất BM-01 đến BM-07 |

### `OBK-SOP-14`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Trích nguyên văn khoản 4 Điều 16 Thông tư 99 về người lập báo cáo tài chính đổi thành trỏ về Chương 01 mục 5.1.3.1 |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de muc, chuyen callout can xac minh sang quy dinh chuan muc |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-16`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Bảng pháp lý dài về thanh tra kiểm tra thuế rút về trỏ kho pháp luật, giữ lại ngưỡng nội bộ và toàn bộ mốc trích dẫn |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai cac tieu de muc, chuyen callout sang quy dinh chuan muc |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-19`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Mười mẫu thư từ Mẫu 02 tới Mẫu 05 và Mẫu 07 tới Mẫu 12 tại mục 6.4 rút về trỏ giữ khung tình huống, giữ nguyên Mẫu 01 và Mẫu 06 cùng quy tắc duyệt mới |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-20`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 07/10/2026 | R.1.1.0 | Trích nguyên văn chữ ký báo cáo tài chính tại mục 6.4.1 và ba tiêu chuẩn kế toán trưởng tại mục 6.4.2 đổi thành trỏ về Chương 01 và Chương 03, giữ nguyên ba mốc trích dẫn |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.0 | Bo phieu NS-02 khoi bang dan chieu |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-07`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.0 | Muc 6.2 nghi khong phep danh sang che tai OBK-NQLD Dieu 39.1.1 va Dieu 41.1.4 thay vi lam bang trung lap |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-INDEX`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.0.1 | Bỏ dòng Glossary & Style Guide khỏi danh mục tài liệu; style guide nội bộ di ra ngoài vault |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-AM-PL2`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.1 | Chuyển mẫu hợp đồng dịch vụ khung từ thư mục dịch vụ sang thư mục điều khoản giao dịch với khách |
| 07/10/2026 | R.2.0.0 | Mục 7.2 tham chiếu điều 9.3 Bản Điều Khoản Chung và mục 9.2 khớp điều 10 về thương lượng không bắt buộc theo VQ-44 |
| 07/10/2026 | R.1.1.0 | Dẫn chiếu ma trận phê duyệt 3 cấp ở mục 1.2 chuyển về OBK-HB-31 phần 3 |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-15`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 04/10/2026 | R.1.0.1 | Chuan hoa van phong hanh chinh, bo so dem tai tieu de muc, chuyen callout can xac minh sang quy dinh chuan muc |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL-E`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PL-G`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-31-PL-A`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Chuyển vào thư viện tham khảo; nội dung không ban hành, các bước làm việc nằm ở bảng kiểm và quy tắc sổ cái |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-08-PL-A`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Viết lại thành thang chấm ba nhóm theo khung đánh giá; tiêu chí cũ đo đúng nội dung một nhóm chuyển thành cách đo của nhóm đó, tiêu chí còn lại bỏ |
| 08/10/2026 | R.1.0.2 | Rà văn phong: bỏ từ tiếng Anh và từ ẩn dụ |
| 08/10/2026 | R.1.0.1 | Đổi liên kết chuẩn vận hành dịch vụ và sổ giờ làm việc sang quy tắc sổ cái |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCNS-08-PL-D`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.4.0.0 | Lộ trình mới: 02 kỳ liên tiếp không đạt thì cảnh báo bằng văn bản và mở kế hoạch hỗ trợ cải thiện trong 01 kỳ; vẫn không đạt thì CEO quyết cho thôi việc, giảm thu nhập hoặc giảm chức theo điều kiện của Bộ luật Lao động |
| 08/10/2026 | R.3.0.0 | Đổi phần chấm sang ba nhóm; điều kiện bắt đầu dùng mức Tốt của thang xếp loại |
| 08/10/2026 | R.2.0.0 | Bỏ quy định đánh giá chéo đã bãi bỏ; quy tắc mức lệch so điểm tự đánh giá với điểm quản lý trực tiếp |
| 08/10/2026 | R.1.0.1 | Đổi liên kết chuẩn vận hành dịch vụ sang quy tắc sổ cái tại phụ lục vận hành việc chấm |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-NQLD`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.0.2 | Sửa câu dẫn căn cứ pháp luật ở cảnh báo đầu tài liệu; nội dung nội quy giữ nguyên |
| 08/10/2026 | R.1.0.1 | Đổi liên kết quy chế tổ chức và phân quyền sang bảng thẩm quyền |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-PM-PL1`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.0.1 | Chuyển điều kiện thương mại chuẩn từ thư mục dịch vụ sang thư mục điều khoản giao dịch với khách |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `BK-03`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.2 | Mốc đánh giá tác động văn bản mới dẫn tới Quy tắc sổ cái mục 7.5a |
| 08/10/2026 | R.2.0.1 | Đổi dẫn chiếu chuẩn vận hành cũ sang Quy tắc sổ cái; hạ chữ in hoa nhấn mạnh; thống nhất cách gọi trường hợp kéo dài |
| 08/10/2026 | R.2.0.0 | Thêm quy tắc chữ ký trên hồ sơ thuế của khách theo Thông tư 89/2026 và Nghị định 252/2026: khách ký, oBacker chỉ ký khi đủ tiêu chuẩn dịch vụ làm thủ tục về thuế và có hợp đồng; áp cho tờ khai và văn bản giải trình |
| 08/10/2026 | R.1.0.0 | Soạn bản nháp bảng kiểm 30 Job Kế toán và Thuế từ OBK-SOP-KT, Phụ lục G và Phụ lục H. |

### `BK-08`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.1 | Thống nhất cách viết hằng tuần, hằng tháng; bỏ từ tiếng Anh; bỏ dẫn chiếu chuẩn vận hành cũ |
| 08/10/2026 | R.3.0.0 | Cẩm nang hướng dẫn tuân thủ: Legal R&D duyệt nội dung pháp luật, CMO quyết công bố |
| 08/10/2026 | R.2.0.0 | Mốc 02 giờ làm việc bàn giao đầu mối khách hàng tính từ khi hoàn thành sàng lọc sơ bộ |
| 08/10/2026 | R.1.0.0 | Soạn bản nháp bảng kiểm Marketing từ OBK-SOP-MK |

### `BK-05`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.1.1 | Ghi căn cứ thời hạn kinh phí công đoàn ở phần thân Job; đổi dẫn chiếu chuẩn vận hành cũ; bỏ câu nhắc mốc cũ; thống nhất tên bộ phận Kế toán |
| 08/10/2026 | R.1.1.0 | Ghi thời hạn đóng kinh phí công đoàn theo Nghị định 105/2026 và căn cứ thông báo biến động lao động theo Nghị định 374/2025 |
| 08/10/2026 | R.1.0.0 | Soạn bản nháp đầu tiên từ danh mục Job lao động và tiền lương. |

### `BK-07`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.0.2 | Sửa dấu câu và câu thiếu vị ngữ ở Job chi hoa hồng |
| 08/10/2026 | R.1.0.1 | Đổi tên sổ đối chiếu hoa hồng sang sổ chi tiết doanh thu và sổ chi tiết công nợ phải thu |
| 08/10/2026 | R.1.0.0 | Lập bản đầu của bảng kiểm đối tác giới thiệu từ bảng Job của OBK-SOP-PM và các phiếu HH-02, HH-03, UE-01. |

### `BK-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.2 | Đổi dẫn chiếu quy chế tài chính nội bộ sang số khoản hiện hành |
| 08/10/2026 | R.2.0.1 | Bỏ số đếm ở tên Job điểm kiểm soát định kỳ; bỏ ngôi thứ nhất; sửa dẫn chiếu lịch khóa sổ sang quy chế tài chính nội bộ |
| 08/10/2026 | R.2.0.0 | Giao người làm sáu việc nội bộ: kê khai thuế và báo cáo tài chính của oBacker do kế toán viên lập; rà soát giao dịch với người có liên quan do kế toán trưởng lập, HĐQT thông qua; hoa hồng do kế toán viên; hoàn tiền cho khách do AM nhận, kế toán viên chi |
| 08/10/2026 | R.1.1.0 | Thêm chữ ký xác nhận của TL trên bảng hoàn ứng cho khớp mẫu tại quy chế hạch toán kế toán |
| 08/10/2026 | R.1.0.0 | Dựng bản đầu từ bảng Job và các quy trình nội bộ, thay cho các SOP nội bộ dạng dài |

### `BK-04`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.0.2 | Đổi dẫn chiếu chuẩn vận hành cũ sang Quy tắc sổ cái và thư viện tham khảo; hạ chữ in hoa nhấn mạnh; sửa chính tả |
| 08/10/2026 | R.1.0.1 | Bỏ dòng trống làm ngắt bảng danh mục Job giữa hai Job gia hạn và Job kế tiếp |
| 08/10/2026 | R.1.0.0 | Soạn bản nháp đầu tiên từ danh mục Job giấy phép và phụ lục giấy phép chuyên ngành. |

### `BK-02`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.3.0.0 | Khi chưa rõ bộ phận sở hữu đầu ra cuối, CEO chỉ định việc gốc trong mọi trường hợp |
| 08/10/2026 | R.2.0.1 | Đổi dẫn chiếu chuẩn vận hành cũ sang Quy tắc sổ cái, Bảng thẩm quyền và Bảng kiểm nội bộ; bỏ cụm Tier; thống nhất tên Job gia hạn hợp đồng |
| 08/10/2026 | R.2.0.0 | AM tự quyết chiết khấu đến 10%; mức lớn hơn 10% do CEO quyết |
| 08/10/2026 | R.1.0.0 | Soạn bản nháp bảng kiểm Quản lý khách hàng từ OBK-SOP-AM và ba hướng dẫn AM |

### `OBK-QCNS-09`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.2.0.0 | Ba thành viên bên người lao động trong đối thoại do Ban chấp hành công đoàn cơ sở cử |
| 08/10/2026 | R.1.0.0 | Soạn mới quy chế dân chủ ở cơ sở tại nơi làm việc theo Điều 37 đến Điều 48 Nghị định 145/2020/NĐ-CP. |

### `BK-06`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 08/10/2026 | R.1.0.3 | Mốc theo mức ưu tiên dẫn tới Quy tắc sổ cái mục 7.5a |
| 08/10/2026 | R.1.0.2 | Mốc cấp đầu vào của bộ phận khác ở hai Job soạn nội quy và quy chế cho khách dẫn tới Quy tắc sổ cái mục 7.2a |
| 08/10/2026 | R.1.0.1 | Đổi dẫn chiếu chuẩn vận hành cũ sang Quy tắc sổ cái, Bảng thẩm quyền và thư viện tham khảo; bỏ cụm Tier; bỏ ngôi thứ nhất và từ ẩn dụ |
| 08/10/2026 | R.1.0.0 | Lập bản đầu của bảng kiểm pháp lý từ bảng Job của OBK-SOP-LS và OBK-SOP-RD. |

### `TNC-01-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.1.1 | Bổ sung chủ ngữ oBacker cho ba nhóm việc thuộc phạm vi Dịch Vụ (lập Danh Mục Hồ Sơ, soạn thảo đơn và tờ khai, thông báo khi cơ quan yêu cầu bổ sung); đồng bộ số bản với bản tiếng Anh |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-03-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.0.3 | Bổ sung chủ ngữ oBacker cho ba nhóm việc thuộc phạm vi Dịch Vụ (phiếu lương, hồ sơ ốm đau thai sản, soạn hợp đồng lao động và phụ lục); đồng bộ số bản với bản tiếng Anh |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-06-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `TNC-07-VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 02/10/2026 | R.1.0.1 | Thêm bí danh 'Điều Khoản Nạp Ví' vào frontmatter để trỏ được từ Bản Điều Khoản Chung |
