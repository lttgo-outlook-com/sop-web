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

Trang này ghi 41 lượt sửa thuộc các bản cũ của 31 tài liệu, tính tới 01/10/2026. Lượt sửa của bản hiện hành ghi tại mục NHẬT KÝ SỬA trong chính tài liệu đó.

| Tài liệu | Số lượt sửa | Ngày sửa gần nhất |
| --- | --- | --- |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] | 2 | 01/10/2026 |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | 2 | 01/10/2026 |
| [[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]] | 2 | 01/10/2026 |
| [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] | 2 | 01/10/2026 |
| [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] | 2 | 01/10/2026 |
| [[03_De_xuat_bao_gia_va_ky_hop_dong\|OBK-HB-33]] | 2 | 01/10/2026 |
| [[00_Muc_luc_va_cach_dung\|OBK-HB-00]] | 2 | 01/10/2026 |
| [[03_Mo_hinh_van_hanh_bon_muc_kiem_soat_va_ma_tran_RACI\|OBK-QCNS-03]] | 2 | 01/10/2026 |
| [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]] | 2 | 01/10/2026 |
| [[NS-02_Phieu_danh_gia_cheo_hieu_suat\|NS-02]] | 2 | 01/10/2026 |
| [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] | 1 | 01/10/2026 |
| [[01_Goi_dich_vu_va_hang_muc_kem_goi\|OBK-DM-GOI]] | 1 | 01/10/2026 |
| [[02_Bang_gia_Giay_phep_va_doanh_nghiep\|OBK-DM-GP]] | 1 | 01/10/2026 |
| [[03_Bang_gia_Ke_toan_va_thue\|OBK-DM-KT]] | 1 | 01/10/2026 |
| [[04_Bang_gia_Lao_dong_va_giay_to_nguoi_nuoc_ngoai\|OBK-DM-LD]] | 1 | 01/10/2026 |
| [[05_Bang_gia_Dich_vu_phap_ly_va_so_huu_tri_tue\|OBK-DM-LS]] | 1 | 01/10/2026 |
| [[06_Bang_gia_Chu_ky_so_va_hoa_don_dien_tu\|OBK-DM-CKS]] | 1 | 01/10/2026 |
| [[07_Bang_gia_Dich_vu_o_nuoc_ngoai\|OBK-DM-NN]] | 1 | 01/10/2026 |
| [[08_Hang_muc_ghi_nhan_rieng\|OBK-DM-NG]] | 1 | 01/10/2026 |
| [[00_TnC_Master_VI\|00_TnC_Master_VI]] | 1 | 01/10/2026 |
| [[00_TnC_Master_EN\|00_TnC_Master_EN]] | 1 | 01/10/2026 |
| [[02_Accounting_Tax_VI\|02_Accounting_Tax_VI]] | 1 | 01/10/2026 |
| [[02_Accounting_Tax_EN\|02_Accounting_Tax_EN]] | 1 | 01/10/2026 |
| [[04_Legal_Services_VI\|04_Legal_Services_VI]] | 1 | 01/10/2026 |
| [[04_Legal_Services_EN\|04_Legal_Services_EN]] | 1 | 01/10/2026 |
| [[05_Client_Guide_VI\|05_Client_Guide_VI]] | 1 | 01/10/2026 |
| [[05_Client_Guide_EN\|05_Client_Guide_EN]] | 1 | 01/10/2026 |
| [[08_Framework_Agreement_VI\|08_Framework_Agreement_VI]] | 1 | 01/10/2026 |
| [[08_Framework_Agreement_EN\|08_Framework_Agreement_EN]] | 1 | 01/10/2026 |
| [[GLOSSARY\|GLOSSARY]] | 1 | 01/10/2026 |
| [[00_INDEX\|OBK-INDEX]] | 1 | 01/10/2026 |

## 2. Chi tiết từng tài liệu

### `OBK-QCTC-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Thu gọn hạn mức chi tiêu 3 bậc tại mục 12.3: B1 dưới 5 triệu do TL quyết, B2 từ 5 đến dưới 20 triệu do COO hoặc KTT quyết, B3 từ 20 triệu do Tổng Giám đốc quyết |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-NB-01`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Cập nhật bảng thẩm quyền 3 bậc B1 tới B3, bỏ cơ chế tự động nâng bậc, đơn giản hóa xác minh nhà cung cấp dưới 20 triệu và yêu cầu báo giá theo 3 bậc |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-QCTC-02-PL-B`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Cập nhật bảng thẩm quyền chi tiêu 3 bậc B1 tới B3; phân quyền ký hợp đồng dịch vụ chuẩn và biểu giá chuẩn cho Trưởng phòng Thương mại |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Chuyển đồng hồ T1 và T2 thành văn hóa phản hồi, tập trung đo lường chỉ số On-Time Delivery và quy chuẩn 4 nhóm thời hạn SLA |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-SOP-AM`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Cập nhật phân quyền 2 cấp ký hợp đồng dịch vụ chuẩn cho Trưởng phòng Thương mại và quy định 4 trường hợp ngoại lệ chuyển Tổng Giám đốc |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-33`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Cập nhật thẩm quyền ký hợp đồng dịch vụ chuẩn do Trưởng phòng Thương mại phê duyệt, trường hợp ngoại lệ chuyển Tổng Giám đốc |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-HB-00`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.2.0.0 | Cơ cấu lại Handbook Kế toán thành 2 khối độc lập: 4 Bảng kiểm chu kỳ thao tác và khối tri thức tra cứu tham khảo pháp lý |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

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
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `00_TnC_Master_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `02_Accounting_Tax_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `02_Accounting_Tax_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `04_Legal_Services_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `04_Legal_Services_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `05_Client_Guide_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `05_Client_Guide_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `08_Framework_Agreement_VI`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `08_Framework_Agreement_EN`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `GLOSSARY`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |

### `OBK-INDEX`

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
