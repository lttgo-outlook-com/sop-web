---
title: "SỔ CL-01. THEO DÕI KIỂM SOÁT CHẤT LƯỢNG HỒ SƠ VÀ SAI SÓT PHÂN CẤP M1-M6 (CAPA LOG)"
code: "CL-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
law_as_of: ""
next_review: ""
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - CL-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# SỔ CL-01. THEO DÕI KIỂM SOÁT CHẤT LƯỢNG HỒ SƠ VÀ SAI SÓT PHÂN CẤP M1-M6 (CAPA LOG)

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | CL-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | CL-01 |
| **Màu** | ĐỎ, kiểm soát chất lượng và hành động khắc phục phòng ngừa (CAPA) |
| **Ai dùng** | Toàn bộ chuyên viên thực hiện (`KTV`, `CV-LIC`, `CV-LD`, `CV-LS`, `CV-RD`), Người kiểm soát lớp hai (`TL-KT`, `TL-LIC`, `TL-LD`, `TL-LS`, `TL-RD`), Giám đốc điều hành (`COO`), Giám đốc điều hành cấp cao (`CEO`) |
| **Sinh từ** | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 11.2, 11.2a, 11.2b;<br>[[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]];<br>[[08_PL_B_Tieu_chi_cong_viec_dang_ho_so\|OBK-QCNS-08-PL-B]];<br>[[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] |
| **Ngày làm phiếu** | 27/09/2026 |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi được áp dụng bắt buộc để ghi nhận, phân tích nguyên nhân gốc rễ và theo dõi tiến độ thực hiện các hành động khắc phục, phòng ngừa đối với 100% sai sót phát sinh trong toàn bộ hoạt động dịch vụ tại oBacker.

Sổ bao phủ toàn bộ các sai lệch được phát hiện qua hai biên đo chuẩn hóa:
1. Biên 1: Rời tay người thực hiện sang người kiểm soát lớp hai (kiểm soát việc làm đúng ngay lần đầu).
2. Biên 2: Rời khỏi oBacker gửi cho khách hàng hoặc nộp cơ quan nhà nước (kiểm soát khả năng ngăn chặn lỗi của hệ thống).

Sổ là nguồn dữ liệu duy nhất để đo lường các chỉ số chất lượng dùng chung (`CS-04`, `CS-05`), các tiêu chí hiệu suất cá nhân của nhân sự dạng hồ sơ (`HS-01`, `HS-02`), đồng thời cung cấp căn cứ thực tế để cải tiến quy trình nghiệp vụ và biểu mẫu kiểm tra theo nguyên tắc NT-8.

## KHUÔN SỔ THEO DÕI KIỂM SOÁT CHẤT LƯỢNG VÀ SAI SÓT (CAPA LOG)

| Cột | Tên trường thông tin | Ý nghĩa và quy cách ghi nhận |
| --- | --- | --- |
| 1 | Mã bản ghi sai sót (`CAPA ID`) | Mã định danh số duy nhất: `CAPA-[Năm]-[Số thứ tự]` (ví dụ: `CAPA-2026-0042`) |
| 2 | Ngày phát hiện sai sót | Ngày giờ phát hiện sai sót theo định dạng `DD/MM/YYYY` |
| 3 | Mã nhiệm vụ liên kết (`Task ID`) | Mã công việc theo Bảng theo dõi công việc [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] |
| 4 | Mã Job nghiệp vụ chuẩn | Khớp chính xác với 203 mã Job tại [[PL_2_Bang_tra_SLA\|OBK-SOP-PL2]] (ví dụ: `KT-04`, `LIC-02`, `LD-05`, `LS-03`...) |
| 5 | Mã khách hàng liên quan | Mã khách hàng theo [[KH-01_So_quan_tri_khach_hang_va_dich_vu_crm\|KH-01]] |
| 6 | Bộ phận phát sinh sai sót | Một trong các bộ phận: `Licensing`, `Kế toán và Thuế`, `Lao động`, `Dịch vụ pháp lý`, `Legal R&D`, `AM` |
| 7 | Người thực hiện (Người mắc lỗi) | Họ tên và vai trò của chuyên viên trực tiếp tạo ra sản phẩm có sai sót |
| 8 | Người phát hiện sai sót | Họ tên người phát hiện (Người kiểm soát lớp hai, AM, Khách hàng, Cơ quan thuế, hoặc tự phát hiện) |
| 9 | Tự phát hiện | Đánh dấu `Có` nếu người mắc lỗi tự phát hiện và chủ động ghi nhận; đánh dấu `Không` nếu người khác phát hiện |
| 10 | Phân cấp sai sót chuẩn hóa | Một trong 6 mã: `M1`, `M2`, `M3`, `M4`, `M5`, `M6` |
| 11 | Phân loại mức lỗi bản chất | Một trong 3 mức theo [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 11.2: `Nhỏ`, `Đáng kể`, `Nghiêm trọng` |
| 12 | Vị trí phát hiện theo hai biên đo | Một trong 3 vị trí: `Chưa vượt Biên 1`, `Vượt Biên 1 chưa vượt Biên 2`, `Đã vượt Biên 2 lọt ra ngoài` |
| 13 | Mô tả chi tiết sai sót | Trình bày cụ thể nội dung sai lệch, số liệu sai, điều khoản thiếu hoặc quy trình bị bỏ sót |
| 14 | Hậu quả thực tế phát sinh | Phải trình ký lại (`HS-02`), Bị cơ quan nhà nước yêu cầu sửa đổi bổ sung (`HS-01`), Khách phàn nàn, Thiệt hại tài chính |
| 15 | Phân tích nguyên nhân gốc rễ | Phân tích nguyên nhân tác động được: thiếu thông tin đầu vào, quy trình chưa có bước kiểm, bảng kiểm chưa bao phủ |
| 16 | Biện pháp khắc phục tức thời | Hành động xử lý ngay để hạn chế tác động (soạn lại hồ sơ, nộp lại tài liệu, thông báo khách hàng) |
| 17 | Thời hạn hoàn thành khắc phục | Mốc hoàn thành khắc phục tức thời (trong 24 giờ đối với Nghiêm trọng; tối đa 05 ngày đối với Đáng kể) |
| 18 | Hành động phòng ngừa ngăn tái diễn | Hành động sửa đổi SOP, bổ sung bảng kiểm nghiệp vụ, hoặc tổ chức đào tạo lại nhân sự (CAPA) |
| 19 | Người chịu trách nhiệm CAPA | Trưởng bộ phận nghiệp vụ (`TL`) hoặc chuyên viên được phân công sửa đổi tài liệu |
| 20 | Thời hạn hoàn tất CAPA | Ngày cam kết hoàn thành việc cập nhật tài liệu hoặc bảng kiểm |
| 21 | Ngày hoàn thành thực tế | Ngày nghiệm thu hoàn thành toàn bộ biện pháp khắc phục và phòng ngừa |
| 22 | Trạng thái xử lý lỗi | Một trong 4 trạng thái: `Mới ghi nhận`, `Đang khắc phục`, `Đã khắc phục chờ nghiệm thu`, `Đã đóng lỗi` |
| 23 | Người phê duyệt đóng lỗi | Trưởng bộ phận nghiệp vụ (`TL`), `COO`, hoặc `CEO` theo phân cấp (người đóng không được là người mắc lỗi) |
| 24 | Số lần tái diễn trong 06 tháng | Đếm số lần lỗi cùng loại xảy ra ở cùng một cá nhân hoặc cùng một khách hàng (Lần 1, Lần 2, Lần 3) |
| 25 | Ảnh hưởng chỉ số hiệu suất | Ghi nhận tác động tiêu chí: `HS-01`, `HS-02`, `CS-04`, `CS-05`, `A-01`, `A-02`, `A-05`, `A-07`, `A-08` |

## HỆ THỐNG PHÂN CẤP SAI SÓT M1 ĐẾN M6 VÀ NGUYÊN TẮC ĐÓNG LỖI

### 1. Bảng chuẩn hóa 6 phân cấp sai sót (M1 đến M6)

Hệ thống phân cấp sai sót tích hợp thang 3 mức bản chất tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 11.2 và 6 nhóm sai sót nghiệp vụ thực tế:

| Mã cấp | Tên phân cấp sai sót | Định nghĩa bản chất | Mức lỗi bản chất | Vị trí phát hiện | Thời hạn khắc phục |
| --- | --- | --- | --- | --- | --- |
| `M1` | Sai sót hình thức và văn phong | Sai chính tả, căn lề, sai font chữ, sai tên tệp lưu trữ, mã tài liệu, thiếu liên kết nội bộ | **Nhỏ** | Chưa vượt Biên 1 hoặc tại Biên 2 | Tối đa 10 ngày làm việc |
| `M2` | Sai sót cấu trúc và bảng kiểm | Bỏ sót mục kiểm tra trên bảng kiểm, thiếu tài liệu kèm theo nội bộ, sai mẫu văn bản nội bộ | **Nhỏ** đến **Đáng kể** | Trước Biên 1 hoặc lớp hai phát hiện | Tối đa 05 ngày làm việc |
| `M3` | Sai sót nghiệp vụ trình ký nội bộ | Sai sót thông tin kỹ thuật, thiếu chữ ký người có thẩm quyền, phải trình ký lại (`HS-02`) | **Đáng kể** | Vượt Biên 1, bị lớp hai chặn lại | Tối đa 05 ngày làm việc |
| `M4` | Sai sót tiến độ và cảnh báo | Trễ mốc tiếp nhận T1, trễ mốc cam kết T2, không cảnh báo trước 04 giờ làm việc (`AM-M14`), vi phạm NT-6 | **Đáng kể** | Trong quá trình xử lý hoặc khi đến hạn T2 | Tối đa 02 ngày làm việc |
| `M5` | Sai sót đầu ra vượt Biên 2 | Hồ sơ gửi khách hàng hoặc nộp cơ quan nhà nước bị yêu cầu sửa đổi bổ sung do lỗi oBacker (`HS-01`, `CS-04`) | **Đáng kể** đến **Nghiêm trọng** | Đã vượt Biên 2 lọt ra ngoài | Lập phương án trong 24 giờ; xử lý dứt điểm |
| `M6` | Sai phạm pháp lý, thuế và dữ liệu | Sai chủ thể pháp lý, nộp sai cơ quan, tính sai nghĩa vụ thuế/BHXH gây phạt hành chính, lộ dữ liệu | **Nghiêm trọng** tuyệt đối | Vượt Biên 1 hoặc vượt Biên 2 | Lập phương án trong 24 giờ; báo cáo CEO |

### 2. Quy tắc bắt buộc về phân tích nguyên nhân và quyền đóng lỗi

Theo quy định tại mục 11.2a và 11.2b của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]]:
1. **Phân tích nguyên nhân gốc rễ:** Cột nguyên nhân gốc tuyệt đối không được ghi các từ cảm tính như "bất cẩn" hoặc "sơ suất". Phải ghi rõ nguyên nhân có thể tác động được bằng biện pháp quản lý: thiếu tài liệu đầu vào từ khách hàng, quy trình chưa có bước kiểm, bảng kiểm nghiệp vụ chưa bao phủ, chuyên viên chưa được đào tạo về nội dung đó, hoặc khối lượng công việc vượt năng lực xử lý.
2. **Quy tắc người đóng lỗi:** Người phê duyệt đóng lỗi không được là người gây ra lỗi. Thẩm quyền phê duyệt đóng lỗi được phân cấp như sau:
   - Lỗi mức Nhỏ (`M1`, `M2`): Trưởng bộ phận nghiệp vụ (`TL`) phê duyệt đóng lỗi sau khi đã nghiệm thu kết quả sửa chữa.
   - Lỗi mức Đáng kể (`M3`, `M4`): Trưởng bộ phận nghiệp vụ (`TL`) phê duyệt đóng lỗi; nếu người mắc lỗi là chính Trưởng bộ phận thì `COO` phê duyệt đóng lỗi.
   - Lỗi mức Nghiêm trọng (`M5`, `M6`): `COO` phê duyệt phương án khắc phục và đóng lỗi sau khi có báo cáo bằng văn bản gửi `CEO`.
3. **Cơ chế nâng cấp khi tái diễn:** Lỗi cùng loại phát sinh từ lần thứ 3 trở lên trong vòng 06 tháng ở cùng một cá nhân hoặc cùng một khách hàng phải tự động nâng lên một mức xử lý, đồng thời bắt buộc phải sửa đổi quy trình hoặc bảng kiểm nghiệp vụ để ngăn chặn tận gốc.

## QUY TRÌNH 5 BƯỚC XỬ LÝ SAI SÓT VÀ HÀNH ĐỘNG PHÒNG NGỪA (CAPA)

```
[1. Phát hiện & Ghi sổ] -> [2. Khắc phục tức thời] -> [3. Phân tích nguyên nhân] -> [4. Thực hiện CAPA] -> [5. Nghiệm thu & Đóng lỗi]
```

1. **Phát hiện và ghi sổ:** Ngay khi phát hiện sai sót, người phát hiện tạo bản ghi trên Sổ CL-01 trong thời hạn tối đa 02 giờ làm việc. Nếu người làm tự phát hiện, tự ghi nhận và được tính điểm khuyến khích văn hóa minh bạch.
2. **Khắc phục tức thời:** Người thực hiện triển khai ngay biện pháp sửa đổi tài liệu, đính chính thông tin hoặc hướng dẫn khách hàng bổ sung giấy tờ để giảm thiểu tối đa ảnh hưởng.
3. **Phân tích nguyên nhân gốc rễ:** Trưởng bộ phận chủ trì buổi làm việc ngắn với chuyên viên để xác định đúng nguyên nhân cốt lõi dẫn đến sai sót.
4. **Triển khai hành động phòng ngừa (CAPA):** Cập nhật bảng kiểm công việc, bổ sung điều kiện kiểm soát trên hệ thống quản lý công việc, hoặc biên soạn lại hướng dẫn nghiệp vụ cấp 3 tương ứng.
5. **Nghiệm thu và đóng lỗi:** Người có thẩm quyền kiểm tra kết quả khắc phục thực tế và tài liệu quy trình đã sửa đổi trước khi ký xác nhận đóng mã CAPA trên sổ.

## KÝ XÁC NHẬN

| Người phát hiện sai sót | Trưởng bộ phận nghiệp vụ (`TL`) | Giám đốc điều hành (`COO`) |
| --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Bảo đảm mọi sai sót phát sinh trong quá trình vận hành dịch vụ được ghi nhận trung thực, đầy đủ, không bị che giấu; thực hiện triệt để nguyên tắc kiểm soát hai lớp độc lập (NT-5); cung cấp dữ liệu số liệu khách quan để đánh giá hiệu suất nhân sự (`HS-01`, `HS-02`, `CS-04`, `CS-05`, và các tiêu chí Phần A: `A-01`, `A-02`, `A-05`, `A-07`, `A-08`); đồng thời biến mỗi sai sót thành bài học cải tiến hệ thống quy trình và bảng kiểm nghiệp vụ theo nguyên tắc NT-8.

### 2. Căn cứ quy định và pháp luật liên quan

| Mục | Nguồn | Nội dung |
| --- | --- | --- |
| Chuẩn vận hành dịch vụ | [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] mục 11.2 | Định nghĩa lỗi, hai biên đo, ba mức lỗi bản chất và nguyên tắc đóng lỗi |
| Khung đánh giá hiệu suất | [[08_Khung_danh_gia_hieu_suat\|OBK-QCNS-08]] | Khung chấm điểm hiệu suất nhân sự toàn công ty |
| Tiêu chí công việc dạng hồ sơ | [[08_PL_B_Tieu_chi_cong_viec_dang_ho_so\|OBK-QCNS-08-PL-B]] | Công thức tính toán và định mức tiêu chí `HS-01`, `HS-02` |
| Bảng theo dõi công việc | [[CV-01_Bang_theo_doi_trang_thai_cong_viec_sla_va_kpi\|CV-01]] | Cơ chế liên kết lỗi sai sót với từng nhiệm vụ công việc cụ thể |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
