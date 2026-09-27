---
title: "KHO TÀI LIỆU OBACKER. MỤC LỤC GỐC"
code: "OBK-INDEX"
type: "sop"
folder: "goc"
level: "Mục lục"
version: "R.1.2.1"
status: "đang áp dụng"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: ""
draft_date: "23/09/2026"
law_as_of: ""
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - OBK-INDEX
tags:
  - loai/sop
  - cap/muc-luc
---
# KHO TÀI LIỆU OBACKER. MỤC LỤC GỐC

| Hạng mục | Nội dung |
| --- | --- |
| Người biên soạn | `CEO` soạn bản đầu. Bản sau do `CEO` phân công |
| Ngày sắp xếp lại gần nhất | 23/09/2026 |
| Mốc pháp luật | Mỗi tài liệu ghi riêng tại trường `law_as_of` ở frontmatter; không dùng một mốc chung cho cả kho |
| Trạng thái | Toàn bộ đang áp dụng. Bản hiện hành của từng tài liệu tại mục 3 |

Đọc văn bản này trước khi mở bất cứ thứ gì khác. Văn bản này trả lời hai câu: cái gì nằm ở đâu, và khi hai văn bản khác nhau thì cái nào đúng.

---

> [!info] TRA CỨU TOÀN DIỆN
> - [[Trạng thái ban hành]]: phiên bản, trạng thái và người phê duyệt của tài liệu toàn kho.
> - [[Nhật ký sửa toàn kho]]: toàn bộ lịch sử sửa đổi của các tài liệu.
>
> Nguyên văn điều khoản pháp luật nằm tại thư mục `CanCu`, một trang cho mỗi mã căn cứ.

> [!info] HỆ THỐNG THẺ PHÂN LOẠI (TAGS)
> Hệ thống thẻ phân loại giúp lọc và tra cứu nhanh tài liệu theo các chiều quản trị:
>
> | Tag | Lọc ra cái gì |
> | --- | --- |
> | `#loai/sop` `#loai/can-cu` `#loai/van-ban` `#loai/tnc` `#loai/danh-muc` `#loai/huong-dan` `#loai/nhat-ky` `#loai/tong-hop` | Loại nội dung |
> | `#dich-vu/lao-dong` `#dich-vu/ke-toan-thue` `#dich-vu/doanh-nghiep` `#dich-vu/dau-tu` `#dich-vu/giay-phep` `#dich-vu/phap-ly` | Dòng dịch vụ, cắt ngang mọi thư mục |
> | `#nghiep-vu/...` | Chủ đề nghiệp vụ, ví dụ `#nghiep-vu/tien-luong`, `#nghiep-vu/bao-hiem-xa-hoi`, `#nghiep-vu/hoa-don-dien-tu`. Trang căn cứ lấy chủ đề từ trường `topic`; trang SOP lấy theo chủ đề của các mã căn cứ mà trang đó dẫn chiếu từ hai mã trở lên |
> | `#cap/1` `#cap/2` `#cap/3` `#cap/phu-luc` `#cap/phieu-thao-tac` `#cap/danh-muc` `#cap/so-can-cu` `#cap/muc-luc` | Cấp tài liệu |
> | `#can-xac-minh` | Trang còn chứa nội dung ở mức xác minh thấp nhất, tức chưa đối chiếu bản gốc |
> | `#het-hieu-luc` | Văn bản đã hết hiệu lực |
> | `#du-thao` | Tài liệu còn ở trạng thái dự thảo |

## 1. DANH MỤC THƯ MỤC VÀ TÀI LIỆU VẬN HÀNH

Chín thư mục dưới đây chứa bản hiện hành của toàn bộ tài liệu vận hành oBacker.

Nguyên văn từng điều khoản pháp luật được dẫn chiếu tại thư mục `CanCu`, một trang cho mỗi mã căn cứ.

#### Tổ chức và phân quyền

Thư mục `01_ToChuc`. Nhóm này áp dụng cho việc xác định cơ cấu tổ chức, thẩm quyền quyết định, và trình tự chuyển lên cấp trên.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen\|OBK-QCTC-02]] | [[OBK-QCTC-02_Quy_che_to_chuc_va_phan_quyen]] | QUY CHẾ TỔ CHỨC VÀ PHÂN QUYỀN | Cấp 1 |
| [[PL_Anh_xa_nhan_su\|OBK-QCTC-02-PL-D]] | [[PL_Anh_xa_nhan_su]] | Ánh xạ nhân sự vào position | Phụ lục |
| [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] | [[PL_Chuyen_len_cap_tren]] | Chuyển lên cấp trên và cơ chế xử lý xung đột | Phụ lục |
| [[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]] | [[PL_Ma_tran_phan_quyen]] | Ma trận phân quyền theo loại quyết định | Phụ lục |
| [[PL_Tu_dien_vai\|OBK-QCTC-02-PL-A]] | [[PL_Tu_dien_vai]] | Từ điển ký hiệu vai trò và cặp tên Việt Anh | Phụ lục |

#### Vận hành nội bộ

Thư mục `02_NoiBo`. Nhóm này áp dụng cho sổ sách, tiền và tài sản của chính oBacker.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] | [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo]] | CHUẨN VẬN HÀNH NỘI BỘ OBACKER | Cấp 1 |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo]] | Quy chế tài chính nội bộ oBacker | Cấp 1 |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] | [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan]] | Quy chế hạch toán kế toán oBacker | Cấp 1 |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo]] | Mua sắm nội bộ và đề nghị thanh toán | Cấp 3 |
| [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]] | [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu]] | Thu tiền và công nợ phải thu | Cấp 3 |
| [[OBK-SOP-NB-03_Quan_ly_tien\|OBK-SOP-NB-03]] | [[OBK-SOP-NB-03_Quan_ly_tien]] | Quản lý tiền | Cấp 3 |
| [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] | [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo]] | Công và tiền lương nội bộ | Cấp 3 |
| [[OBK-SOP-NB-05_Tuyen_dung_va_onboarding_noi_bo\|OBK-SOP-NB-05]] | [[OBK-SOP-NB-05_Tuyen_dung_va_onboarding_noi_bo]] | Tuyển dụng và onboarding nội bộ | Cấp 3 |
| [[OBK-SOP-NB-06_Nghi_viec_va_offboarding_noi_bo\|OBK-SOP-NB-06]] | [[OBK-SOP-NB-06_Nghi_viec_va_offboarding_noi_bo]] | Nghỉ việc và offboarding nội bộ | Cấp 3 |
| [[OBK-SOP-NB-07_Quan_ly_con_dau_va_chu_ky_so\|OBK-SOP-NB-07]] | [[OBK-SOP-NB-07_Quan_ly_con_dau_va_chu_ky_so]] | Quản lý con dấu và chữ ký số nội bộ | Cấp 3 |
| [[OBK-SOP-NB-08_Quan_ly_tai_san_va_cong_cu_dung_cu\|OBK-SOP-NB-08]] | [[OBK-SOP-NB-08_Quan_ly_tai_san_va_cong_cu_dung_cu]] | Quản lý tài sản và công cụ dụng cụ nội bộ | Cấp 3 |
| [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo\|OBK-SOP-NB-09]] | [[OBK-SOP-NB-09_Xu_ly_su_co_du_lieu_ca_nhan_noi_bo]] | Xử lý sự cố dữ liệu cá nhân nội bộ | Cấp 3 |
| [[OBK-SOP-NB-10_Quan_ly_nghi_phep_va_lam_viec_tu_xa\|OBK-SOP-NB-10]] | [[OBK-SOP-NB-10_Quan_ly_nghi_phep_va_lam_viec_tu_xa]] | Quản lý nghỉ phép và làm việc từ xa | Cấp 2 |
| [[OBK-SOP-NB-11_Dang_ky_va_quan_ly_lam_them_gio\|OBK-SOP-NB-11]] | [[OBK-SOP-NB-11_Dang_ky_va_quan_ly_lam_them_gio]] | Đăng ký và quản lý làm thêm giờ | Cấp 2 |
| [[OBK-SOP-NB-12_Xu_ly_ky_luat_lao_dong_va_trach_nhiem_vat_chat\|OBK-SOP-NB-12]] | [[OBK-SOP-NB-12_Xu_ly_ky_luat_lao_dong_va_trach_nhiem_vat_chat]] | Xử lý kỷ luật lao động và trách nhiệm vật chất | Cấp 3 |
| [[OBK-SOP-NB-13_Tiep_nhan_va_xu_ly_khieu_nai_quay_roi_tinh_duc\|OBK-SOP-NB-13]] | [[OBK-SOP-NB-13_Tiep_nhan_va_xu_ly_khieu_nai_quay_roi_tinh_duc]] | Tiếp nhận và xử lý khiếu nại quấy rối tình dục | Cấp 3 |
| [[OBK-SOP-NB-14_Tam_thoi_chuyen_nguoi_lao_dong_lam_viec_khac\|OBK-SOP-NB-14]] | [[OBK-SOP-NB-14_Tam_thoi_chuyen_nguoi_lao_dong_lam_viec_khac]] | Tạm thời chuyển người lao động làm công việc khác | Cấp 3 |
| [[OBK-SOP-NB-15_Duy_tri_kinh_doanh_lien_tuc_va_sao_luu_du_lieu\|OBK-SOP-NB-15]] | [[OBK-SOP-NB-15_Duy_tri_kinh_doanh_lien_tuc_va_sao_luu_du_lieu]] | Duy trì kinh doanh liên tục và sao lưu dữ liệu | Cấp 3 |
| [[OBK-SOP-NB-16_Kiem_toan_noi_bo_va_kiem_soat_tuan_thu\|OBK-SOP-NB-16]] | [[OBK-SOP-NB-16_Kiem_toan_noi_bo_va_kiem_soat_tuan_thu]] | Kiểm toán nội bộ và kiểm soát tuân thủ | Cấp 3 |
| [[OBK-SOP-NB-17_Lap_ke_hoach_kinh_doanh_va_ngan_sach_tai_chinh\|OBK-SOP-NB-17]] | [[OBK-SOP-NB-17_Lap_ke_hoach_kinh_doanh_va_ngan_sach_tai_chinh]] | Lập kế hoạch kinh doanh và ngân sách tài chính | Cấp 3 |
| [[OBK-SOP-NB-18_Quan_ly_cong_tac_phi_va_thanh_toan_chi_phi_cong_tac\|OBK-SOP-NB-18]] | [[OBK-SOP-NB-18_Quan_ly_cong_tac_phi_va_thanh_toan_chi_phi_cong_tac]] | Quản lý công tác phí và thanh toán chi phí công tác | Cấp 3 |
| [[PL_BM_Bieu_mau_mua_sam_thanh_toan\|OBK-SOP-NB-PL-BM]] | [[PL_BM_Bieu_mau_mua_sam_thanh_toan]] | Phụ lục BM. Biểu mẫu mua sắm nội bộ và thanh toán | Phụ lục |

#### Dịch vụ cho khách

Thư mục `03_DichVu`. Nhóm này áp dụng cho hồ sơ của khách hàng.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[00_README_Cach_dung\|OBK-SOP-DV-00]] | [[00_README_Cach_dung]] | Bộ OBK-SOP Dịch vụ. Tài liệu đọc trước | Cấp 1 |
| [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu]] | CHUẨN VẬN HÀNH DỊCH VỤ OBACKER | Cấp 1 |
| [[01_Tiep_nhan_va_sang_loc_lead\|OBK-HB-31]] | [[01_Tiep_nhan_va_sang_loc_lead]] | HƯỚNG DẪN 01. TIẾP NHẬN VÀ SÀNG LỌC LEAD | Cấp 3 |
| [[02_Hop_lam_ro_nhu_cau\|OBK-HB-32]] | [[02_Hop_lam_ro_nhu_cau]] | HƯỚNG DẪN 02. HỌP LÀM RÕ NHU CẦU | Cấp 3 |
| [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] | [[02_OBK-SOP-AM_Quan_ly_khach_hang]] | QUẢN LÝ KHÁCH HÀNG | Cấp 2 |
| [[03_De_xuat_bao_gia_va_ky_hop_dong\|OBK-HB-33]] | [[03_De_xuat_bao_gia_va_ky_hop_dong]] | HƯỚNG DẪN 03. ĐỀ XUẤT, BÁO GIÁ VÀ KÝ HỢP ĐỒNG | Cấp 3 |
| [[03_OBK-SOP-KT_Ke_toan_va_thue\|OBK-SOP-KT]] | [[03_OBK-SOP-KT_Ke_toan_va_thue]] | KẾ TOÁN VÀ THUẾ | Cấp 2 |
| [[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]] | [[04_OBK-SOP-LIC_Giay_phep]] | GIẤY PHÉP | Cấp 2 |
| [[04_Onboarding_khach_moi\|OBK-HB-34]] | [[04_Onboarding_khach_moi]] | HƯỚNG DẪN 04. ONBOARDING KHÁCH MỚI | Cấp 3 |
| [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] | [[05_OBK-SOP-LD_Lao_dong_va_tien_luong]] | LAO ĐỘNG VÀ TIỀN LƯƠNG | Cấp 2 |
| [[05_Van_hanh_hang_ngay_va_dieu_phoi\|OBK-HB-35]] | [[05_Van_hanh_hang_ngay_va_dieu_phoi]] | HƯỚNG DẪN 05. VẬN HÀNH HẰNG NGÀY VÀ ĐIỀU PHỐI CHÉO BỘ PHẬN | Cấp 3 |
| [[06_Bao_thong_tin_bat_loi_va_su_co\|OBK-HB-36]] | [[06_Bao_thong_tin_bat_loi_va_su_co]] | HƯỚNG DẪN 06. BÁO THÔNG TIN BẤT LỢI VÀ XỬ LÝ SỰ CỐ | Cấp 3 |
| [[06_OBK-SOP-LS_Dich_vu_phap_ly\|OBK-SOP-LS]] | [[06_OBK-SOP-LS_Dich_vu_phap_ly]] | DỊCH VỤ PHÁP LÝ | Cấp 2 |
| [[07_Giu_khach_va_mo_rong\|OBK-HB-37]] | [[07_Giu_khach_va_mo_rong]] | HƯỚNG DẪN 07. GIỮ KHÁCH VÀ MỞ RỘNG DOANH THU | Cấp 3 |
| [[07_OBK-SOP-RD_Nghien_cuu_phap_ly\|OBK-SOP-RD]] | [[07_OBK-SOP-RD_Nghien_cuu_phap_ly]] | NGHIÊN CỨU VÀ PHÁT TRIỂN PHÁP LÝ | Cấp 2 |
| [[08_Ket_thuc_va_ban_giao\|OBK-HB-38]] | [[08_Ket_thuc_va_ban_giao]] | HƯỚNG DẪN 08. KẾT THÚC DỊCH VỤ VÀ BÀN GIAO | Cấp 3 |
| [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang\|OBK-SOP-PM]] | [[08_OBK-SOP-PM_Chuong_trinh_doi_tac_gioi_thieu_khach_hang]] | CHƯƠNG TRÌNH ĐỐI TÁC GIỚI THIỆU KHÁCH HÀNG | Cấp 2 |
| [[09_HD_Nghiep_vu_giay_phep_va_thu_tuc_doanh_nghiep\|OBK-HB-41]] | [[09_HD_Nghiep_vu_giay_phep_va_thu_tuc_doanh_nghiep]] | HƯỚNG DẪN 41. NGHIỆP VỤ GIẤY PHÉP VÀ THỦ TỤC DOANH NGHIỆP | Cấp 3 |
| [[10_HD_Nghiep_vu_tinh_luong_va_bao_hiem_xa_hoi\|OBK-HB-51]] | [[10_HD_Nghiep_vu_tinh_luong_va_bao_hiem_xa_hoi]] | HƯỚNG DẪN 51. ĐỐI SOÁT CHẤM CÔNG, TÍNH LƯƠNG VÀ BẢO HIỂM XÃ HỘI | Cấp 3 |
| [[11_HD_Ky_thuat_ra_soat_hop_dong_kinh_te\|OBK-HB-61]] | [[11_HD_Ky_thuat_ra_soat_hop_dong_kinh_te]] | HƯỚNG DẪN 61. KỸ THUẬT RÀ SOÁT HỢP ĐỒNG KINH TẾ | Cấp 3 |
| [[12_HD_Phuong_phap_tra_cuu_va_cap_nhat_phap_luat\|OBK-HB-71]] | [[12_HD_Phuong_phap_tra_cuu_va_cap_nhat_phap_luat]] | HƯỚNG DẪN 71. PHƯƠNG PHÁP TRA CỨU VÀ CẬP NHẬT VĂN BẢN PHÁP LUẬT | Cấp 3 |
| [[13_OBK-SOP-MK_Marketing_va_phat_trien_nguon_khach_hang\|OBK-SOP-MK]] | [[13_OBK-SOP-MK_Marketing_va_phat_trien_nguon_khach_hang]] | MARKETING VÀ PHÁT TRIỂN NGUỒN KHÁCH HÀNG | Cấp 2 |
| [[PL_1_Can_cu_phap_ly\|OBK-SOP-PL1]] | [[PL_1_Can_cu_phap_ly]] | PHỤ LỤC 1. CĂN CỨ PHÁP LÝ | Phụ lục |
| [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] | [[PL_2_Bang_tra_SLA]] | PHỤ LỤC 2. BẢNG TRA SLA | Phụ lục |
| [[PL_3_Ban_do_lien_ket_va_chuyen_tang\|OBK-SOP-PL3]] | [[PL_3_Ban_do_lien_ket_va_chuyen_tang]] | PHỤ LỤC 3. BẢNG LIÊN KẾT VÀ CHUYỂN CẤP | Phụ lục |
| [[PL_A_Cau_chu_mau\|OBK-HB-31-PL-A]] | [[PL_A_Cau_chu_mau]] | PHỤ LỤC A. CÂU CHỮ MẪU CỦA BỘ PHẬN AM | Phụ lục |
| [[PL_HD_Mau_hop_dong_dich_vu_khung\|OBK-SOP-AM-PL2]] | [[PL_HD_Mau_hop_dong_dich_vu_khung]] | Quy chuẩn và Bản mẫu Hợp đồng Dịch vụ Khung | Phụ lục |
| [[PL_LIC_01_Quy_trinh_giay_phep_chuyen_nganh_va_so_huu_tri_tue\|OBK-SOP-LIC-PL-01]] | [[PL_LIC_01_Quy_trinh_giay_phep_chuyen_nganh_va_so_huu_tri_tue]] | PHỤ LỤC QUY TRÌNH GIẤY PHÉP CHUYÊN NGÀNH VÀ SỞ HỮU TRÍ TUỆ | Phụ lục |
| [[PL_PM_Dieu_kien_thuong_mai_chuan\|OBK-SOP-PM-PL1]] | [[PL_PM_Dieu_kien_thuong_mai_chuan]] | Điều kiện thương mại chuẩn của Chương trình đối tác giới thiệu khách hàng | Phụ lục |

#### Handbook Kế toán

Thư mục `04_Handbook_KeToan`. Nhóm này áp dụng cho thao tác nghiệp vụ kế toán và thuế.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[00_Muc_luc_va_cach_dung\|OBK-HB-00]] | [[00_Muc_luc_va_cach_dung]] | SỔ TAY QUY TRÌNH DỊCH VỤ KẾ TOÁN oBacker | Mục lục |
| [[01_Nguyen_tac_hanh_nghe\|OBK-SOP-01]] | [[01_Nguyen_tac_hanh_nghe]] | Chương 01. Nguyên tắc hành nghề và đạo đức nghề nghiệp | Cấp 3 |
| [[02_Mo_hinh_dich_vu_va_phan_vai\|OBK-SOP-02]] | [[02_Mo_hinh_dich_vu_va_phan_vai]] | Chương 02. Mô hình dịch vụ, phân vai trò và cam kết chất lượng | Cấp 3 |
| [[03_Onboarding_khach_hang\|OBK-SOP-03]] | [[03_Onboarding_khach_hang]] | Chương 03. Tiếp nhận khách hàng mới | Cấp 3 |
| [[04_Quan_ly_chung_tu\|OBK-SOP-04]] | [[04_Quan_ly_chung_tu]] | Chương 04. Thu thập, kiểm tra và lưu trữ chứng từ | Cấp 3 |
| [[05_Quy_trinh_ke_toan_thang\|OBK-HB-05]] | [[05_Quy_trinh_ke_toan_thang]] | Chương 05. Quy trình kế toán tháng theo phần hành | Cấp 3 |
| [[06_Khoa_so_va_doi_chieu\|OBK-HB-06]] | [[06_Khoa_so_va_doi_chieu]] | Chương 06. Khóa sổ và đối chiếu cuối kỳ | Cấp 3 |
| [[07_Bao_cao_tai_chinh_nam\|OBK-HB-07]] | [[07_Bao_cao_tai_chinh_nam]] | Chương 07. Lập, soát xét và nộp báo cáo tài chính năm | Cấp 3 |
| [[08_Che_do_ke_toan_ap_dung\|OBK-HB-08]] | [[08_Che_do_ke_toan_ap_dung]] | Chương 08. Lựa chọn chế độ kế toán áp dụng cho khách hàng | Cấp 3 |
| [[09_Thue_GTGT\|OBK-HB-09]] | [[09_Thue_GTGT]] | Chương 09. Thuế giá trị gia tăng | Cấp 3 |
| [[10_Thue_TNDN\|OBK-HB-10]] | [[10_Thue_TNDN]] | Chương 10. Thuế thu nhập doanh nghiệp | Cấp 3 |
| [[11_Thue_TNCN\|OBK-HB-11]] | [[11_Thue_TNCN]] | Chương 11. Thuế thu nhập cá nhân | Cấp 3 |
| [[12_Hoa_don_dien_tu\|OBK-HB-12]] | [[12_Hoa_don_dien_tu]] | Chương 12. Hóa đơn điện tử | Cấp 3 |
| [[13_Lich_tuan_thu_va_quy_trinh_khai_nop\|OBK-HB-13]] | [[13_Lich_tuan_thu_va_quy_trinh_khai_nop]] | Chương 13. Lịch tuân thủ và quy trình khai nộp thuế định kỳ | Cấp 3 |
| [[14_Quyet_toan_thue_nam\|OBK-SOP-14]] | [[14_Quyet_toan_thue_nam]] | Chương 14. Quyết toán thuế năm | Cấp 3 |
| [[15_Xu_ly_sai_sot_va_khai_bo_sung\|OBK-SOP-15]] | [[15_Xu_ly_sai_sot_va_khai_bo_sung]] | Chương 15. Xử lý sai sót và khai bổ sung | Cấp 3 |
| [[16_Thanh_tra_kiem_tra_thue\|OBK-SOP-16]] | [[16_Thanh_tra_kiem_tra_thue]] | Chương 16. Kiểm tra thuế và xử lý khi bị chuyển hồ sơ sang cơ quan thanh tra | Cấp 3 |
| [[17_Khung_xu_phat_va_phong_ngua\|OBK-SOP-17]] | [[17_Khung_xu_phat_va_phong_ngua]] | Chương 17. Khung xử phạt và biện pháp phòng ngừa | Cấp 3 |
| [[18_Kiem_soat_chat_luong\|OBK-SOP-18]] | [[18_Kiem_soat_chat_luong]] | Chương 18. Kiểm soát chất lượng và quy trình soát xét | Cấp 3 |
| [[19_Giao_tiep_khach_hang\|OBK-SOP-19]] | [[19_Giao_tiep_khach_hang]] | Chương 19. Giao tiếp và quản trị kỳ vọng khách hàng | Cấp 3 |
| [[20_Ban_giao_va_ket_thuc\|OBK-SOP-20]] | [[20_Ban_giao_va_ket_thuc]] | Chương 20. Bàn giao nội bộ và kết thúc hợp đồng dịch vụ | Cấp 3 |
| [[21_Cap_nhat_van_ban_phap_luat\|OBK-SOP-21]] | [[21_Cap_nhat_van_ban_phap_luat]] | Chương 21. Theo dõi và cập nhật văn bản pháp luật | Cấp 3 |
| [[PL_A_Bang_kiem\|OBK-SOP-PL-A]] | [[PL_A_Bang_kiem]] | Phụ lục A. Bộ bảng kiểm in ra dùng được | Phụ lục |
| [[PL_B_Bieu_mau\|OBK-SOP-PL-B]] | [[PL_B_Bieu_mau]] | Phụ lục B. Biểu mẫu nội bộ | Phụ lục |
| [[PL_C_Lich_tuan_thu_nam\|OBK-SOP-PL-C]] | [[PL_C_Lich_tuan_thu_nam]] | Phụ lục C. Lịch tuân thủ cả năm | Phụ lục |
| [[PL_D_Thao_tac_phan_mem\|OBK-SOP-PL-D]] | [[PL_D_Thao_tac_phan_mem]] | Phụ lục D. Thao tác trên phần mềm và công cụ | Phụ lục |
| [[PL_E_Danh_muc_van_ban\|OBK-SOP-PL-E]] | [[PL_E_Danh_muc_van_ban]] | Phụ lục E. Danh mục văn bản pháp luật áp dụng | Phụ lục |
| [[PL_F_Bao_cao_kiem_soat\|OBK-SOP-PL-F]] | [[PL_F_Bao_cao_kiem_soat]] | Phụ lục F. Báo cáo kiểm soát chất lượng | Phụ lục |
| [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu\|OBK-SOP-PL-G]] | [[PL_G_Moc_cong_viec_va_dau_ra_dich_vu]] | Phụ lục G. Mốc công việc và đầu ra dịch vụ | Phụ lục |
| [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] | [[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu]] | Phụ lục H. Quy trình cung cấp chữ ký số và hóa đơn điện tử | Phụ lục |

#### Phiếu thao tác

Thư mục `07_Phieu`. Nhóm này áp dụng cho người thực hiện công việc chưa thuộc quy trình.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp\|BC-01]] | [[BC-01_Bang_kiem_tra_sao_luu_du_lieu_va_ung_pho_su_co_bcp]] | PHIẾU BC-01. BẢNG KIỂM TRA SAO LƯU DỮ LIỆU VÀ ỨNG PHÓ SỰ CỐ BCP | Phiếu thao tác |
| [[BG-01_Ban_giao_tiep_nhan_nhan_su\|BG-01]] | [[BG-01_Ban_giao_tiep_nhan_nhan_su]] | PHIẾU BG-01. BÀN GIAO TIẾP NHẬN NHÂN SỰ ONBOARDING | Phiếu thao tác |
| [[BG-02_Ban_giao_nghi_viec_offboarding\|BG-02]] | [[BG-02_Ban_giao_nghi_viec_offboarding]] | PHIẾU BG-02. BÀN GIAO NGHỈ VIỆC VÀ THU HỒI QUYỀN OFFBOARDING | Phiếu thao tác |
| [[BH-01_Bang_theo_doi_bien_dong_bhxh_va_lao_dong_khach_hang\|BH-01]] | [[BH-01_Bang_theo_doi_bien_dong_bhxh_va_lao_dong_khach_hang]] | PHIẾU BH-01. BẢNG THEO DÕI BIẾN ĐỘNG BẢO HIỂM XÃ HỘI VÀ LAO ĐỘNG KHÁCH HÀNG | Phiếu thao tác |
| [[CK-01_Ban_giao_chu_ky_so_va_hoa_don\|CK-01]] | [[CK-01_Ban_giao_chu_ky_so_va_hoa_don]] | PHIẾU CK-01. BÀN GIAO CHỮ KÝ SỐ VÀ HÓA ĐƠN ĐIỆN TỬ | Phiếu thao tác |
| [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx\|CK-02]] | [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx]] | PHIẾU CK-02. SỔ THEO DÕI KHO TOKEN TRẮNG VÀ KÍCH HOẠT CHỮ KÝ SỐ CYBERX | Phiếu thao tác |
| [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa\|CL-01]] | [[CL-01_So_theo_doi_kiem_soat_chat_luong_va_nhat_ky_sai_sot_capa]] | SỔ CL-01. THEO DÕI KIỂM SOÁT CHẤT LƯỢNG HỒ SƠ VÀ SAI SÓT PHÂN CẤP M1-M6 (CAPA LOG) | Phiếu thao tác |
| [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no\|CN-01]] | [[CN-01_So_theo_doi_cong_no_phai_thu_va_tuoi_no]] | PHIẾU CN-01. SỔ THEO DÕI CÔNG NỢ PHẢI THU VÀ TUỔI NỢ | Phiếu thao tác |
| [[CT-01_Giay_di_duong_va_quyet_toan_cong_tac_phi\|CT-01]] | [[CT-01_Giay_di_duong_va_quyet_toan_cong_tac_phi]] | PHIẾU CT-01. GIẤY ĐI ĐƯỜNG VÀ QUYẾT TOÁN CÔNG TÁC PHÍ | Phiếu thao tác |
| [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] | [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi]] | BẢNG CV-01. THEO DÕI TRẠNG THÁI CÔNG VIỆC, TASKS, SLA VÀ KPI | Phiếu thao tác |
| [[DL-01_Nhat_ky_theo_doi_su_co_du_lieu_ca_nhan\|DL-01]] | [[DL-01_Nhat_ky_theo_doi_su_co_du_lieu_ca_nhan]] | PHIẾU DL-01. NHẬT KÝ THEO DÕI SỰ CỐ DỮ LIỆU CÁ NHÂN | Phiếu thao tác |
| [[DT-01_Danh_ba_thong_tin_doi_tac_nha_cung_cap_va_co_quan\|DT-01]] | [[DT-01_Danh_ba_thong_tin_doi_tac_nha_cung_cap_va_co_quan]] | PHIẾU DT-01. DANH BẠ THÔNG TIN ĐỐI TÁC, NHÀ CUNG CẤP VÀ CƠ QUAN NHÀ NƯỚC | Phiếu thao tác |
| [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo\|DT-02]] | [[DT-02_So_theo_doi_doanh_thu_tra_truoc_va_phan_bo]] | BẢNG DT-02. SỔ THEO DÕI DOANH THU, THUẾ, TRẢ TRƯỚC VÀ PHÂN BỔ ĐỊNH KỲ | Phiếu thao tác |
| [[DV-02_Bang_theo_doi_chu_ky_so_va_dich_vu_khach_hang\|DV-02]] | [[DV-02_Bang_theo_doi_chu_ky_so_va_dich_vu_khach_hang]] | PHIẾU DV-02. BẢNG THEO DÕI HẠN CHỮ KÝ SỐ VÀ DỊCH VỤ ĐỊNH KỲ KHÁCH HÀNG | Phiếu thao tác |
| [[GC-01_Bang_tinh_gia_thanh_dich_vu_va_bien_loi_nhuan_khach_hang\|GC-01]] | [[GC-01_Bang_tinh_gia_thanh_dich_vu_va_bien_loi_nhuan_khach_hang]] | BẢNG GC-01. BẢNG TÍNH GIÁ THÀNH DỊCH VỤ VÀ BIÊN LỢI NHUẬN KHÁCH HÀNG | Phiếu thao tác |
| [[GP-01_Bang_theo_doi_tien_do_giay_phep_va_doanh_nghiep\|GP-01]] | [[GP-01_Bang_theo_doi_tien_do_giay_phep_va_doanh_nghiep]] | PHIẾU GP-01. BẢNG THEO DÕI TIẾN ĐỘ THỦ TỤC DOANH NGHIỆP VÀ GIẤY PHÉP CHUYÊN NGÀNH | Phiếu thao tác |
| [[HD-01_So_theo_doi_hop_dong_lao_dong_va_thu_viec\|HD-01]] | [[HD-01_So_theo_doi_hop_dong_lao_dong_va_thu_viec]] | PHIẾU HD-01. SỔ THEO DÕI HỢP ĐỒNG LAO ĐỘNG VÀ THỬ VIỆC | Phiếu thao tác |
| [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao\|HD-02]] | [[HD-02_So_theo_doi_hoa_don_dien_tu_dau_ra_va_dau_vao]] | BẢNG HD-02. SỔ THEO DÕI HÓA ĐƠN ĐIỆN TỬ ĐẦU RA VÀ ĐẦU VÀO | Phiếu thao tác |
| [[HH-01_Phieu_dang_ky_khach_duoc_gioi_thieu\|HH-01]] | [[HH-01_Phieu_dang_ky_khach_duoc_gioi_thieu]] | PHIẾU HH-01. ĐĂNG KÝ KHÁCH ĐƯỢC GIỚI THIỆU | Phiếu thao tác |
| [[HH-02_Phieu_bao_cao_hoa_hong_thang\|HH-02]] | [[HH-02_Phieu_bao_cao_hoa_hong_thang]] | PHIẾU HH-02. BÁO CÁO HOA HỒNG THÁNG | Phiếu thao tác |
| [[HH-03_Phieu_thong_bao_hoan_tra_hoa_hong\|HH-03]] | [[HH-03_Phieu_thong_bao_hoan_tra_hoa_hong]] | PHIẾU HH-03. THÔNG BÁO HOÀN TRẢ HOA HỒNG | Phiếu thao tác |
| [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] | [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm]] | SỔ KH-01. QUẢN TRỊ KHÁCH HÀNG, TRẠNG THÁI DỊCH VỤ VÀ CRM | Phiếu thao tác |
| [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang\|KN-01]] | [[KN-01_So_tiep_nhan_va_xu_ly_khieu_nai_khach_hang]] | SỔ KN-01. TIẾP NHẬN VÀ XỬ LÝ KHIẾU NẠI KHÁCH HÀNG VÀ CHẾ TÀI DỊCH VỤ | Phiếu thao tác |
| [[KP-01_Bang_theo_doi_chi_so_hieu_suat_kpi_toan_cong_ty\|KP-01]] | [[KP-01_Bang_theo_doi_chi_so_hieu_suat_kpi_toan_cong_ty]] | BẢNG KP-01. THEO DÕI CHỈ SỐ HIỆU SUẤT, SLA VÀ KPI TOÀN CÔNG TY | Phiếu thao tác |
| [[KQ-01_Kiem_ke_quy_tien_mat\|KQ-01]] | [[KQ-01_Kiem_ke_quy_tien_mat]] | PHIẾU KQ-01. KIỂM KÊ QUỸ TIỀN MẶT | Phiếu thao tác |
| [[KT-01_Bang_kiem_tra_va_bao_cao_kiem_toan_noi_bo\|KT-01]] | [[KT-01_Bang_kiem_tra_va_bao_cao_kiem_toan_noi_bo]] | PHIẾU KT-01. BẢNG KIỂM TRA VÀ BÁO CÁO KIỂM TOÁN NỘI BỘ | Phiếu thao tác |
| [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan\|LU-01]] | [[LU-01_Bang_theo_doi_va_thanh_toan_tien_luong_chuan]] | PHIẾU LU-01. BẢNG THEO DÕI VÀ THANH TOÁN TIỀN LƯƠNG CHUẨN | Phiếu thao tác |
| [[MK-01_Bang_theo_doi_chien_dich_marketing_va_chuyen_doi_lead\|MK-01]] | [[MK-01_Bang_theo_doi_chien_dich_marketing_va_chuyen_doi_lead]] | BẢNG MK-01. THEO DÕI CHIẾN DỊCH MARKETING VÀ CHUYỂN ĐỔI LEAD | Phiếu thao tác |
| [[MT-01_Ma_tran_lien_ket_luong_nghiep_vu_cheo_va_kich_hoat_tu_dong\|MT-01]] | [[MT-01_Ma_tran_lien_ket_luong_nghiep_vu_cheo_va_kich_hoat_tu_dong]] | BẢNG MT-01. MA TRẬN LIÊN KẾT LUỒNG NGHIỆP VỤ CHÉO VÀ KÍCH HOẠT CHUYỂN GIAO TỰ ĐỘNG | Phiếu thao tác |
| [[NC-01_So_theo_doi_nha_cung_cap_va_danh_gia\|NC-01]] | [[NC-01_So_theo_doi_nha_cung_cap_va_danh_gia]] | PHIẾU NC-01. SỔ THEO DÕI NHÀ CUNG CẤP VÀ ĐÁNH GIÁ ĐỊNH KỲ | Phiếu thao tác |
| [[NH-01_Doi_chieu_ngan_hang\|NH-01]] | [[NH-01_Doi_chieu_ngan_hang]] | PHIẾU NH-01. ĐỐI CHIẾU NGÂN HÀNG | Phiếu thao tác |
| [[NS-01_Phieu_tu_danh_gia_hieu_suat\|NS-01]] | [[NS-01_Phieu_tu_danh_gia_hieu_suat]] | PHIẾU NS-01. PHIẾU TỰ ĐÁNH GIÁ HIỆU SUẤT | Phiếu thao tác |
| [[NS-02_Phieu_danh_gia_cheo_hieu_suat\|NS-02]] | [[NS-02_Phieu_danh_gia_cheo_hieu_suat]] | PHIẾU NS-02. PHIẾU ĐÁNH GIÁ CHÉO HIỆU SUẤT | Phiếu thao tác |
| [[NS-03_Phieu_tong_hop_diem_cuoi_ky\|NS-03]] | [[NS-03_Phieu_tong_hop_diem_cuoi_ky]] | PHIẾU NS-03. PHIẾU TỔNG HỢP ĐIỂM CUỐI KỲ | Phiếu thao tác |
| [[NS-06_Don_xin_nghi_phep_va_ban_giao\|NS-06]] | [[NS-06_Don_xin_nghi_phep_va_ban_giao]] | PHIẾU NS-06. ĐƠN XIN NGHỈ PHÉP VÀ BÀN GIAO CÔNG VIỆC | Phiếu thao tác |
| [[NS-07_Phieu_dang_ky_lam_them_gio\|NS-07]] | [[NS-07_Phieu_dang_ky_lam_them_gio]] | PHIẾU NS-07. ĐĂNG KÝ LÀM THÊM GIỜ | Phiếu thao tác |
| [[NS-08_Bien_ban_vi_pham_ky_luat_lao_dong\|NS-08]] | [[NS-08_Bien_ban_vi_pham_ky_luat_lao_dong]] | PHIẾU NS-08. BIÊN BẢN VI PHẠM KỶ LUẬT LAO ĐỘNG | Phiếu thao tác |
| [[NS-09_Bang_ke_hoach_va_phan_bo_ngan_sach_tai_chinh_nam\|NS-09]] | [[NS-09_Bang_ke_hoach_va_phan_bo_ngan_sach_tai_chinh_nam]] | PHIẾU NS-09. BẢNG KẾ HOẠCH VÀ PHÂN BỔ NGÂN SÁCH TÀI CHÍNH NĂM | Phiếu thao tác |
| [[OB-01_Bang_theo_doi_tien_do_onboarding_khach_hang_moi\|OB-01]] | [[OB-01_Bang_theo_doi_tien_do_onboarding_khach_hang_moi]] | BẢNG OB-01. THEO DÕI TIẾN ĐỘ TIẾP NHẬN VÀ ONBOARDING KHÁCH HÀNG MỚI | Phiếu thao tác |
| [[PM-01_Bang_theo_doi_thue_bao_phan_mem_noi_bo\|PM-01]] | [[PM-01_Bang_theo_doi_thue_bao_phan_mem_noi_bo]] | PHIẾU PM-01. BẢNG THEO DÕI THUÊ BAO PHẦN MỀM VÀ DỊCH VỤ ĐỊNH KỲ NỘI BỘ | Phiếu thao tác |
| [[RD-01_So_theo_doi_yeu_cau_nghien_cuu_phap_ly_va_ban_ghi_nho_tu_van\|RD-01]] | [[RD-01_So_theo_doi_yeu_cau_nghien_cuu_phap_ly_va_ban_ghi_nho_tu_van]] | SỔ RD-01. THEO DÕI YÊU CẦU NGHIÊN CỨU PHÁP LÝ VÀ BẢN GHI NHỚ TƯ VẤN (TICKET LOG) | Phiếu thao tác |
| [[SC-01_Nhan_thong_bao_doi_so_tai_khoan\|SC-01]] | [[SC-01_Nhan_thong_bao_doi_so_tai_khoan]] | PHIẾU SC-01. NHẬN THÔNG BÁO ĐỔI SỐ TÀI KHOẢN NHÀ CUNG CẤP | Phiếu thao tác |
| [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh\|TC-01]] | [[TC-01_Bang_theo_doi_dong_tien_va_suc_khoe_tai_chinh]] | PHIẾU TC-01. BẢNG THEO DÕI DÒNG TIỀN VÀ SỨC KHỎE TÀI CHÍNH | Phiếu thao tác |
| [[TH-01_Bang_theo_doi_tien_do_khai_thue_va_bctc\|TH-01]] | [[TH-01_Bang_theo_doi_tien_do_khai_thue_va_bctc]] | PHIẾU TH-01. BẢNG THEO DÕI TIẾN ĐỘ KHAI THUẾ VÀ BÁO CÁO TÀI CHÍNH | Phiếu thao tác |
| [[TL-01_So_giao_nhan_tai_lieu_va_buu_pham\|TL-01]] | [[TL-01_So_giao_nhan_tai_lieu_va_buu_pham]] | PHIẾU TL-01. SỔ THEO DÕI GIAO NHẬN TÀI LIỆU, THƯ TỪ VÀ BƯU PHẨM | Phiếu thao tác |
| [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu\|TL-02]] | [[TL-02_Phieu_yeu_cau_va_bien_ban_ban_giao_tai_lieu]] | PHIẾU TL-02. PHIẾU YÊU CẦU VÀ BIÊN BẢN BÀN GIAO TÀI LIỆU | Phiếu thao tác |
| [[TS-01_So_theo_doi_tai_san_va_cong_cu\|TS-01]] | [[TS-01_So_theo_doi_tai_san_va_cong_cu]] | PHIẾU TS-01. SỔ THEO DÕI TÀI SẢN VÀ CÔNG CỤ DỤNG CỤ | Phiếu thao tác |
| [[TS-02_Bang_theo_doi_gio_lam_viec_nang_suat_va_cong_suat_nhan_su\|TS-02]] | [[TS-02_Bang_theo_doi_gio_lam_viec_nang_suat_va_cong_suat_nhan_su]] | BẢNG TS-02. THEO DÕI GIỜ LÀM VIỆC, NĂNG SUẤT VÀ CÔNG SUẤT NHÂN SỰ | Phiếu thao tác |
| [[TU-01_So_theo_doi_tam_ung_va_hoan_ung\|TU-01]] | [[TU-01_So_theo_doi_tam_ung_va_hoan_ung]] | PHIẾU TU-01. SỔ THEO DÕI TẠM ỨNG VÀ HOÀN ỨNG NỘI BỘ | Phiếu thao tác |
| [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission\|UE-01]] | [[UE-01_Bang_theo_doi_va_tinh_toan_chi_so_kinh_te_cac_ltv_commission]] | BẢNG UE-01. BẢNG THEO DÕI VÀ TÍNH TOÁN CHỈ SỐ KINH TẾ ĐƠN VỊ, CAC, LTV VÀ ĐỐI SOÁT HOA HỒNG HAI CHIỀU | Phiếu thao tác |
| [[VB-01_So_theo_doi_vu_viec_tu_van_va_hop_dong\|VB-01]] | [[VB-01_So_theo_doi_vu_viec_tu_van_va_hop_dong]] | PHIẾU VB-01. SỔ THEO DÕI VỤ VIỆC TƯ VẤN VÀ RÀ SOÁT HỢP ĐỒNG | Phiếu thao tác |

#### Sổ căn cứ

Thư mục `08_SoCanCu`. Nhóm này áp dụng cho việc tra mã căn cứ và xử lý trường hợp văn bản pháp luật bị thay thế.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[OBK-CC\|OBK-CC]] | [[OBK-CC]] | SỔ CĂN CỨ PHÁP LÝ OBACKER | Sổ căn cứ |

#### T&C song ngữ (VI-EN)

Thư mục `09_TnC`. Nhóm này áp dụng cho Điều Khoản & Điều Kiện Dịch Vụ song ngữ (VI-EN) ký với khách hàng.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| không có mã | [[00_README_Index]] | BỘ T&C oBacker R.1.0.0; SONG NGỮ (VI-EN) · INDEX |  |
| không có mã | [[00_TnC_Master_VI]] | ĐIỀU KHOẢN VÀ ĐIỀU KIỆN DỊCH VỤ (BẢN ĐIỀU KHOẢN CHUNG) |  |
| không có mã | [[01_Licensing_VI]] | ĐIỀU KHOẢN DỊCH VỤ XIN GIẤY PHÉP (PL-GP) |  |
| không có mã | [[02_Accounting_Tax_VI]] | ĐIỀU KHOẢN DỊCH VỤ KẾ TOÁN & THUẾ (PL-KT) |  |
| không có mã | [[03_HR_Payroll_VI]] | ĐIỀU KHOẢN DỊCH VỤ NHÂN SỰ (PL-NS) |  |
| không có mã | [[04_Legal_Services_VI]] | ĐIỀU KHOẢN DỊCH VỤ PHÁP LÝ (PL-PL) |  |
| không có mã | [[05_Client_Guide_VI]] | CẨM NANG LÀM VIỆC VỚI OBACKER |  |
| không có mã | [[06_Data_Protection_VI]] | CHÍNH SÁCH BẢO VỆ DỮ LIỆU CÁ NHÂN |  |
| không có mã | [[07_Wallet_VI]] | VÍ OBACKER; GIẢI THÍCH, CÁCH HOẠT ĐỘNG & ĐIỀU KHOẢN |  |
| không có mã | [[08_Framework_Agreement_VI]] | HỢP ĐỒNG DỊCH VỤ (BẢN KHUNG; KÝ ĐIỆN TỬ) |  |
| không có mã | [[GLOSSARY]] | GLOSSARY & STYLE GUIDE; Bộ T&C oBacker R.1.0.0 (VI-EN) |  |

#### Danh mục dịch vụ và bảng giá

Thư mục `10_DanhMuc`. Nhóm này áp dụng cho việc tra mã dịch vụ, mức giá, và điều khoản ràng buộc theo từng mã.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[00_Danh_muc_dich_vu_va_bang_gia\|OBK-DM-00]] | [[00_Danh_muc_dich_vu_va_bang_gia]] | DANH MỤC DỊCH VỤ VÀ BẢNG GIÁ | Danh mục |
| [[01_Goi_dich_vu_va_hang_muc_kem_goi\|OBK-DM-GOI]] | [[01_Goi_dich_vu_va_hang_muc_kem_goi]] | GÓI DỊCH VỤ VÀ HẠNG MỤC KÈM GÓI | Danh mục |
| [[02_Bang_gia_Giay_phep_va_doanh_nghiep\|OBK-DM-GP]] | [[02_Bang_gia_Giay_phep_va_doanh_nghiep]] | BẢNG GIÁ DỊCH VỤ GIẤY PHÉP VÀ DOANH NGHIỆP | Danh mục |
| [[03_Bang_gia_Ke_toan_va_thue\|OBK-DM-KT]] | [[03_Bang_gia_Ke_toan_va_thue]] | BẢNG GIÁ DỊCH VỤ KẾ TOÁN VÀ THUẾ | Danh mục |
| [[04_Bang_gia_Lao_dong_va_giay_to_nguoi_nuoc_ngoai\|OBK-DM-LD]] | [[04_Bang_gia_Lao_dong_va_giay_to_nguoi_nuoc_ngoai]] | BẢNG GIÁ DỊCH VỤ LAO ĐỘNG VÀ GIẤY TỜ CHO NGƯỜI NƯỚC NGOÀI | Danh mục |
| [[05_Bang_gia_Dich_vu_phap_ly_va_so_huu_tri_tue\|OBK-DM-LS]] | [[05_Bang_gia_Dich_vu_phap_ly_va_so_huu_tri_tue]] | BẢNG GIÁ DỊCH VỤ PHÁP LÝ VÀ SỞ HỮU TRÍ TUỆ | Danh mục |
| [[06_Bang_gia_Chu_ky_so_va_hoa_don_dien_tu\|OBK-DM-CKS]] | [[06_Bang_gia_Chu_ky_so_va_hoa_don_dien_tu]] | BẢNG GIÁ CHỮ KÝ SỐ, HÓA ĐƠN ĐIỆN TỬ VÀ HỢP ĐỒNG ĐIỆN TỬ | Danh mục |
| [[07_Bang_gia_Dich_vu_o_nuoc_ngoai\|OBK-DM-NN]] | [[07_Bang_gia_Dich_vu_o_nuoc_ngoai]] | BẢNG GIÁ DỊCH VỤ Ở NƯỚC NGOÀI | Danh mục |
| [[08_Hang_muc_ghi_nhan_rieng\|OBK-DM-NG]] | [[08_Hang_muc_ghi_nhan_rieng]] | HẠNG MỤC GHI NHẬN RIÊNG, NGOÀI DANH MỤC DỊCH VỤ | Danh mục |

#### Nhân sự nội bộ

Thư mục `11_NhanSu`. Nhóm này áp dụng cho quan hệ lao động giữa oBacker và người lao động của chính oBacker.

| Mã | Tài liệu | Tên | Cấp |
| --- | --- | --- | --- |
| [[00_Bo_tai_lieu_quan_tri_nhan_su\|OBK-QCNS-00]] | [[00_Bo_tai_lieu_quan_tri_nhan_su]] | BỘ TÀI LIỆU QUẢN TRỊ NHÂN SỰ VÀ VẬN HÀNH. TÀI LIỆU ĐỌC TRƯỚC | Cấp 1 |
| [[01_Khung_nhan_su_tong_hop\|OBK-QCNS-01]] | [[01_Khung_nhan_su_tong_hop]] | KHUNG NHÂN SỰ TỔNG HỢP. LỘ TRÌNH THĂNG TIẾN VÀ CHÍNH SÁCH LƯƠNG THƯỞNG | Cấp 2 |
| [[02_Chuong_trinh_tang_luong_dinh_ky\|OBK-QCNS-02]] | [[02_Chuong_trinh_tang_luong_dinh_ky]] | CHƯƠNG TRÌNH TĂNG LƯƠNG ĐỊNH KỲ | Cấp 2 |
| [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo\|OBK-QCNS-02]] | [[02_Quy_che_tien_luong_va_tien_thuong_noi_bo]] | QUY CHẾ TIỀN LƯƠNG VÀ TIỀN THƯỞNG NỘI BỘ | Cấp 1 |
| [[03_Mo_hinh_van_hanh_bon_muc_kiem_soat_va_ma_tran_RACI\|OBK-QCNS-03]] | [[03_Mo_hinh_van_hanh_bon_muc_kiem_soat_va_ma_tran_RACI]] | MÔ HÌNH VẬN HÀNH BỐN MỨC KIỂM SOÁT VÀ MA TRẬN RACI CỦA PHÒNG DỊCH VỤ | Cấp 2 |
| [[06_Chinh_sach_thuong_khong_dinh_ky\|OBK-QCNS-06]] | [[06_Chinh_sach_thuong_khong_dinh_ky]] | CHÍNH SÁCH THƯỞNG KHÔNG ĐỊNH KỲ | Cấp 2 |
| [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] | [[07_Chinh_sach_cong_chuan_va_cham_cong]] | CHÍNH SÁCH CÔNG CHUẨN VÀ CHẤM CÔNG | Cấp 2 |
| [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]] | [[08_Khung_danh_gia_hieu_suat]] | KHUNG ĐÁNH GIÁ HIỆU SUẤT | Cấp 2 |
| [[08_PL_A_Thang_cham_tieu_chi_chung\|OBK-QCNS-08-PL-A]] | [[08_PL_A_Thang_cham_tieu_chi_chung]] | Thang chấm mười hai tiêu chí chung | Phụ lục |
| [[08_PL_B_Tieu_chi_cong_viec_dang_ho_so\|OBK-QCNS-08-PL-B]] | [[08_PL_B_Tieu_chi_cong_viec_dang_ho_so]] | Tiêu chí riêng của công việc dạng hồ sơ | Phụ lục |
| [[08_PL_C_Ky_nang_chuyen_mon\|OBK-QCNS-08-PL-C]] | [[08_PL_C_Ky_nang_chuyen_mon]] | Bảng kỹ năng chuyên môn | Phụ lục |
| [[08_PL_D_Van_hanh_viec_cham\|OBK-QCNS-08-PL-D]] | [[08_PL_D_Van_hanh_viec_cham]] | Vận hành việc chấm | Phụ lục |
| [[08_PL_E_Phieu_vi_tri\|OBK-QCNS-08-PL-E]] | [[08_PL_E_Phieu_vi_tri]] | Phiếu vị trí | Phụ lục |
| [[Noi_quy_lao_dong\|OBK-NQLD]] | [[Noi_quy_lao_dong]] | NỘI QUY LAO ĐỘNG | Cấp 1 |
## 2. TRẬT TỰ ƯU TIÊN. KHI HAI VĂN BẢN KHÁC NHAU THÌ CÁI NÀO ĐÚNG

Đọc theo thứ tự, gặp câu trả lời ở dòng nào thì dừng ở đó.

| Nội dung đang tranh chấp | Bản gốc đặt ở đâu |
| --- | --- |
| Cơ cấu tổ chức, danh mục đơn vị, vai trò, ký hiệu vai trò, quan hệ báo cáo | `01_ToChuc/OBK-QCTC-02` và `PL_Tu_dien_vai.md` |
| Ai quyết một loại việc, ai phải được hỏi, ai được thông báo | [[PL_Ma_tran_phan_quyen\|OBK-QCTC-02-PL-B]] |
| Việc chuyển lên cấp trên đi đường nào, xử xung đột giữa hai nhánh, quy tắc giao tiếp | [[PL_Chuyen_len_cap_tren\|OBK-QCTC-02-PL-C]] |
| Ai đang giữ vai trò nào, kiêm nhiệm ở đâu | [[PL_Anh_xa_nhan_su\|OBK-QCTC-02-PL-D]] |
| Ba điều cấm của Luật Kế toán khi bố trí nhân sự kế toán | `01_ToChuc/OBK-QCTC-02` Điều 19 |
| Hạn mức tiền, thẩm quyền chi, mốc thẩm quyền theo giá trị tài sản | `02_NoiBo/OBK-QCTC-01` mục 12.3 |
| Sửa số tiền hoặc người nhận sau khi đã ký thì chữ ký còn giá trị không | `02_NoiBo/OBK-QCTC-01` mục 12.3b;<br>cách làm ở [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 6.0a.3 |
| Hồ sơ chi tiền đang ở đâu, ai đang giữ, dừng thì hỏi ai | `02_NoiBo/OBK-SOP-NB-01` mục 6.0a |
| Hồ sơ mua sắm đang ở đâu, và sáu điều kiện phải đủ trước khi ký hợp đồng | `02_NoiBo/OBK-SOP-NB-01` mục 6.0b |
| Ai là Thủ quỹ, và tại sao oBacker chưa chi tiền mặt được | [[PL_Tu_dien_vai\|OBK-QCTC-02-PL-A]] mục 4;<br>`02_NoiBo/OBK-QCTC-03` mục 4.1;<br>[[OBK-SOP-NB-03_Quan_ly_tien\|OBK-SOP-NB-03]] mục 6.2.2 |
| Khoản khách chuyển trước gọi là đặt cọc hay tạm ứng, và ai quyết | `02_NoiBo/OBK-SOP-NB-02` mục 6.3.3 |
| Người lao động xin ứng trước một phần tiền lương thì được bao nhiêu, mấy lần, ai duyệt | `02_NoiBo/OBK-QCTC-01` Điều 26a;<br>quy trình ở [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 6.6;<br>biểu mẫu `BM-08` |
| Ba trường hợp oBacker bắt buộc phải cho tạm ứng tiền lương theo pháp luật lao động | `02_NoiBo/OBK-QCTC-01` mục 26a.1 |
| Có được trừ vào lương để thu hồi khoản tạm ứng hay khoản nợ của người lao động không | `02_NoiBo/OBK-QCTC-01` mục 38.2a bảng ba cơ chế, và mục 26a.6 |
| Chu kỳ tính công, mẫu số tiền lương ngày, cách tính ngày nghỉ lễ, tết, kỳ nối, thiếu giờ chấm | [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] mục 1.2, 1.2a, 2.5, 3.5, 3.6 |
| Ai tổng hợp, xác nhận, chốt, duyệt bảng công; lịch từ ngày 16 đến ngày trả lương; ai tính, duyệt và chi lương | [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 6.1 tới 6.4 |
| Ai xét đơn nghỉ phép, đơn cập nhật công, đơn làm việc từ xa | [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 6.3;<br>[[Noi_quy_lao_dong\|OBK-NQLD]] Điều 7.5.2 và Điều 11.2 |
| Trả thừa tiền lương thì xử thế nào; có được trừ vào lương kỳ sau không | [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 6.5 |
| Nghĩa vụ của oBacker với tư cách người sử dụng lao động: bảo hiểm xã hội, sổ quản lý lao động, báo cáo sử dụng lao động | [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 6.7;<br>thời hạn tại [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] mục 5, Job NB-39 tới NB-48 |
| [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] và [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] khác nhau thì văn bản nào đúng | [[00_Bo_tai_lieu_quan_tri_nhan_su\|OBK-QCNS-00]] mục 4: con số theo [[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]]; vai trò và trình tự bước theo [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] |
| Bảng chấm công là chứng từ gì, ai lập, ai duyệt | [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] Điều 5 và mục 6.6b, biểu mẫu `BM-09`;<br>[[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] mục 6.2 |
| Khoản lương, thưởng nào ghi điều kiện và mức hưởng ở văn bản nào | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 25.2 và 25.2a |
| Bao lâu phải xuất hóa đơn sau khi hoàn thành dịch vụ | `02_NoiBo/OBK-SOP-NB-02` mục 6.4.1 bước I3 |
| Khoản phải thu đang ở đâu, và ai quyết việc dừng dịch vụ hay xóa nợ | `02_NoiBo/OBK-SOP-NB-02` mục 6.0.2 và 6.5.3 |
| Tần suất kiểm quỹ, đối chiếu sao kê và rà soát phân quyền ngân hàng | `02_NoiBo/OBK-SOP-NB-03` mục 6.1 |
| Chênh lệch tiền thật so với sổ thì xử thế nào | `02_NoiBo/OBK-SOP-NB-03` mục 6.7 |
| Đổi nhà cung cấp hoặc đổi bậc sau khi đã duyệt nhu cầu thì sao | `02_NoiBo/OBK-QCTC-01` mục 12.3c |
| Công cụ nộp đề nghị phải chặn được cái gì | `OBK-SOP-NB-PL-DT` mục 12 và `OBK-SOP-NB-PL-DM` mục 10 |
| Danh mục biểu mẫu chứng từ oBacker tự thiết kế, và lý do từng cái | `02_NoiBo/OBK-QCTC-03` Điều 5 và Điều 6 |
| Chế độ kế toán áp dụng, có sửa hệ thống tài khoản hay sổ kế toán hay không | `02_NoiBo/OBK-QCTC-03` Điều 3 |
| Kênh chính thống và kênh liên lạc với khách | `03_DichVu/01_OBK-SOP-00` mục 7.2.1a |
| Việc pháp lý thuộc bộ phận nào: giữ hồ sơ, dịch vụ pháp lý có thu, hay đặt chuẩn | `03_DichVu/01_OBK-SOP-00` mục 5.5, quy tắc ba lớp |
| Bộ phận này được đáp trong bao lâu khi hỏi Legal R&D một câu pháp lý | `03_DichVu/07_OBK-SOP-RD` mục 2, Job `RD-09` tới `RD-12`. Quy tắc chống SLA không có chủ mốc ở `01_OBK-SOP-00` mục 7.4a |
| Mốc đánh giá tác động khi có văn bản pháp luật mới, bốn mức ưu tiên | `03_DichVu/01_OBK-SOP-00` mục 12.3a |
| Sáu đồng hồ thời gian, quy ước đếm, giờ làm việc | `03_DichVu/01_OBK-SOP-00` mục 7 |
| SLA của một Job cụ thể | Bảng Job trong SOP cấp 2 của bộ phận đó. `PL_2` chỉ là bản tra cứu sinh tự động |
| Điều khoản pháp luật, số hiệu văn bản, mức xác minh, nguyên văn điều khoản | [[OBK-CC]], sinh từ `08_SoCanCu/du_lieu/`.<br>Đây là bản gốc từ 05/09/2026.<br>[[PL_1_Can_cu_phap_ly\|OBK-SOP-PL1]] là bản đối chiếu; hai bên khác nhau thì sổ căn cứ đúng |
| Thao tác nghiệp vụ kế toán và thuế chi tiết | `04_Handbook_KeToan/` |

**Quy tắc chung:** cấp 1 thắng cấp 2, cấp 2 thắng cấp 3. Ngoại lệ giữa [[07_Chinh_sach_cong_chuan_va_cham_cong|OBK-QCNS-07]] và [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo|OBK-SOP-NB-04]] theo [[00_Bo_tai_lieu_quan_tri_nhan_su|OBK-QCNS-00]] mục 4. Riêng cơ cấu tổ chức thì `01_ToChuc/OBK-QCTC-02` thắng mọi văn bản khác.

---

## 3. TRẠNG THÁI BAN HÀNH

Bản hiện hành, cấp tài liệu và trạng thái ban hành của từng tài liệu ghi tại [[Trạng thái ban hành]]. Trang đó sinh lại từ frontmatter của từng tài liệu, nên số bản trên trang đó luôn khớp với tài liệu.

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 23/09/2026 | R.1.2.1 | Mục 2 hàng Bảng chấm công dẫn về OBK-QCTC-03 Điều 5, mục 6.6b và OBK-SOP-NB-04 mục 6.2; hàng lương, thưởng ghi liên kết tới OBK-QCTC-01.<br>Quy tắc chung ghi ngoại lệ giữa OBK-QCNS-07 và OBK-SOP-NB-04 theo OBK-QCNS-00 mục 4.<br>Bỏ hàng dẫn tới thư mục chuẩn soạn thảo |
