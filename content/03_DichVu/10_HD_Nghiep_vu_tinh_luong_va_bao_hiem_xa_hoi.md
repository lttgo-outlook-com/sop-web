---
title: "HƯỚNG DẪN 51. ĐỐI SOÁT CHẤM CÔNG, TÍNH LƯƠNG VÀ BẢO HIỂM XÃ HỘI"
code: "OBK-HB-51"
type: "sop"
folder: "03_DichVu"
level: "Cấp 3, hướng dẫn nghiệp vụ"
version: "R.1.0.1"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-LD Lao động và tiền lương"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-HB-51
tags:
  - loai/sop
  - cap/3
---
# HƯỚNG DẪN 51. ĐỐI SOÁT CHẤM CÔNG, TÍNH LƯƠNG VÀ BẢO HIỂM XÃ HỘI

## Hướng dẫn nghiệp vụ cấp 3, áp dụng cho bộ phận Lao Động

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-HB-51 |
| Cấp tài liệu | Cấp 3, hướng dẫn nghiệp vụ |
| Phiên bản | R.1.0.1, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 27/09/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]] Lao động và tiền lương |
| Đây là gì | Hướng dẫn chi tiết phương pháp đối soát dữ liệu chấm công, công thức tính tiền lương làm thêm giờ, làm việc vào ban đêm theo Điều 98 Bộ luật Lao động, trích nộp bảo hiểm xã hội theo mức tham chiếu và quy trình lập tờ khai biến động lao động |
| Đọc trước | [[05_OBK-SOP-LD_Lao_dong_va_tien_luong\|OBK-SOP-LD]]; [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu\|OBK-SOP-00]] |

---

## 1. MỤC ĐÍCH

Hướng dẫn này quy định chi tiết kỹ thuật đối soát dữ liệu thời gian làm việc, thuật toán tính tiền lương làm thêm giờ và làm việc vào ban đêm theo đúng quy định tại Điều 98 Bộ luật Lao động số 45/2019/QH14 và Nghị định số 145/2020/NĐ-CP.

Tài liệu chuẩn hóa phương pháp tính trích nộp các khoản bảo hiểm bắt buộc theo cơ chế mức tham chiếu mới của Luật Bảo hiểm xã hội số 41/2024/QH15, cùng quy trình lập và nộp tờ khai biến động lao động trên hệ thống giao dịch điện tử bảo hiểm xã hội, bảo đảm không phát sinh lãi chậm đóng và chế tài xử phạt theo Nghị định số 283/2026/NĐ-CP.

## 2. PHẠM VI ÁP DỤNG

Áp dụng cho chuyên viên lao động `CV-LD` và Trưởng nhóm lao động `TL-LD` khi thực hiện các Job tính lương, trích nộp bảo hiểm xã hội và quản lý biến động lao động cho khách hàng, bao gồm:
1. Đối soát bảng chấm công và dữ liệu thời gian làm việc hằng tháng.
2. Tính toán tiền lương tháng, tiền lương làm thêm giờ, làm việc vào ban đêm, tiền lương ngừng việc và làm thêm giờ vào ban đêm.
3. Tính toán các khoản trích nộp theo lương: Bảo hiểm xã hội (BHXH), Bảo hiểm y tế (BHYT), Bảo hiểm thất nghiệp (BHTN), Bảo hiểm tai nạn lao động - bệnh nghề nghiệp (BHTNLĐ-BNN) và Kinh phí công đoàn (KPCĐ).
4. Lập hồ sơ và gửi tờ khai biến động lao động (báo tăng, báo giảm, điều chỉnh mức đóng) trên Hệ thống giao dịch bảo hiểm xã hội điện tử.

Không áp dụng cho việc hạch toán chi phí tiền lương vào sổ kế toán và lập tờ khai quyết toán thuế thu nhập cá nhân (do bộ phận Kế toán thực hiện theo OBK-SOP-KT).


## 3. VAI TRÒ VÀ TRÁCH NHIỆM

| Hoạt động | `CV-LD` | `TL-LD` | `AM` | `CV-KT` |
| --- | --- | --- | --- | --- |
| Tiếp nhận dữ liệu chấm công và đơn từ phê duyệt | R | I | S | I |
| Đối soát dữ liệu chấm công 3 bên | R | A | I | I |
| Lập bảng tính lương và trích nộp bảo hiểm | R | A | I | I |
| Soát xét bảng lương và phê duyệt nội bộ | S | A | I | I |
| Gửi bảng lương cho khách hàng phê duyệt | I | I | R | I |
| Nhận phản hồi và giải trình số liệu cho khách | R | A | S | I |
| Lập và nộp tờ khai Mẫu D02-LT qua hệ thống điện tử | R | A | I | I |
| Bàn giao bảng lương đã chốt cho bộ phận Kế toán | S | A | I | R |

*Ghi chú: R = Người thực hiện chính, A = Người phê duyệt cuối cùng, S = Người hỗ trợ, C = Người được tham vấn, I = Người nhận thông tin.*

## 4. ĐẦU VÀO BẮT BUỘC

Trước khi thực hiện tính toán, `CV-LD` phải thu thập đủ các tài liệu sau trên Hệ thống quản lý công việc và lưu trữ hồ sơ:

1. Bảng dữ liệu ghi nhận thời gian làm việc: Bản xuất dữ liệu từ thiết bị ghi nhận thời gian làm việc hoặc bảng chấm công có chữ ký xác nhận của phụ trách bộ phận khách hàng.
2. Đơn từ phê duyệt nghỉ việc và công tác phát sinh trong tháng:
   - Đơn xin nghỉ phép năm có hưởng lương;
   - Đơn xin nghỉ việc riêng có hưởng lương (kết hôn, tang chế theo Điều 115 BLLĐ);
   - Đơn xin nghỉ không hưởng lương đã được người sử dụng lao động chấp thuận;
   - Giấy chứng nhận nghỉ việc hưởng bảo hiểm xã hội (nghỉ ốm đau, thai sản, khám thai) do cơ sở khám bệnh, chữa bệnh cấp theo mẫu quy định;
   - Phiếu xác nhận công tác ngoài doanh nghiệp.
3. Phiếu đăng ký làm thêm giờ (OT): Có đầy đủ thông tin thời gian bắt đầu, thời gian kết thúc, nội dung công việc và chữ ký phê duyệt của người sử dụng lao động trước khi người lao động thực hiện làm thêm giờ.
4. Hồ sơ nhân sự và hợp đồng lao động: Hợp đồng lao động, phụ lục hợp đồng lao động đang có hiệu lực thi hành, xác định rõ:
   - Mức lương chính theo công việc hoặc chức danh;
   - Các khoản phụ cấp lương tính đóng bảo hiểm xã hội (phụ cấp chức vụ, chức danh, trách nhiệm, nặng nhọc, độc hại);
   - Các khoản phụ cấp lương không tính đóng bảo hiểm xã hội (phụ cấp xăng xe, điện thoại, ăn trưa, nhà ở, nuôi con nhỏ);
   - Các khoản bổ sung khác xác định được mức tiền cụ thể hoặc biến đổi theo năng suất.
5. Thông báo kết quả đóng bảo hiểm xã hội tháng liền trước (Mẫu C12-TS do cơ quan bảo hiểm xã hội phát hành).

## 5. CÁC BƯỚC THỰC HIỆN

Quy trình thực hiện gồm 4 phần nghiệp vụ chính:

### 5.1. Quy trình đối soát dữ liệu chấm công giữa các bên liên quan

#### Bước 1: Kiểm tra tính toàn vẹn của dữ liệu thời gian
- `CV-LD` nhập tệp dữ liệu thô từ thiết bị ghi nhận thời gian làm việc vào Bảng tính dữ liệu.
- Rà soát các bản ghi thiếu giờ vào hoặc thiếu giờ ra. Lập danh sách các trường hợp thiếu dữ liệu và gửi `AM` để yêu cầu khách hàng cung cấp Giấy xác nhận công tác hoặc Giấy giải trình quên ghi nhận có xác nhận của quản lý trực tiếp.

#### Bước 2: Đối chiếu đơn từ phê duyệt với dữ liệu thời gian
- `CV-LD` đối chiếu từng ngày nghỉ của người lao động với Đơn xin nghỉ phép đã được phê duyệt.
- Phân loại chính xác ký hiệu ngày công: Ngày làm việc thực tế (X), Nghỉ phép năm hưởng nguyên lương (P), Nghỉ lễ tết hưởng nguyên lương (L), Nghỉ việc riêng hưởng nguyên lương (Ro), Nghỉ ốm đau hưởng trợ cấp BHXH (Om), Nghỉ thai sản hưởng trợ cấp BHXH (TS), Nghỉ không hưởng lương (KL).

#### Bước 3: Nguyên tắc làm tròn và tính tổng số giờ công
- Số giờ làm việc bình thường: Tối đa 08 giờ trong một ngày và không quá 48 giờ trong một tuần. Đối với người làm công việc đặc biệt nặng nhọc, độc hại, nguy hiểm thì không quá 06 giờ trong một ngày.
- Làm tròn giờ làm thêm: Thực hiện theo quy chế tiền lương của khách hàng nhưng không được làm thiệt thòi quyền lợi của người lao động. Khung chuẩn: thời gian làm thêm dưới 15 phút (không tính hoặc tính theo quy chế); từ đủ 15 phút đến dưới 45 phút tính bằng 0.5 giờ; từ đủ 45 phút trở lên tính bằng 1.0 giờ.
- `CV-LD` xuất Bảng tổng hợp công đã đối soát và ký xác nhận kiểm soát lớp 1.

### 5.2. Quy tắc và công thức tính tiền lương làm thêm giờ, làm việc vào ban đêm
Theo quy định tại Điều 98 Bộ luật Lao động và các Điều 55, 56, 57 Nghị định số 145/2020/NĐ-CP, việc tính toán thực hiện theo các công thức quy chuẩn sau:

Xác định Tiền lương giờ thực trả của ngày làm việc bình thường ($TLG$):
$$TLG = \frac{\text{Tiền lương thực trả của công việc đang làm của tháng có làm thêm giờ}}{\text{Tổng số giờ thực tế làm việc bình thường trong tháng theo quy định}}$$
*Ghi chú: Tiền lương thực trả không bao gồm tiền lương làm thêm giờ, tiền lương làm việc vào ban đêm, tiền lương ngày lễ tết, tiền thưởng, tiền ăn giữa ca, các khoản hỗ trợ xăng xe, điện thoại, đi lại, tiền nhà ở, nuôi con nhỏ.*

#### Trường hợp 1: Tiền lương làm thêm giờ vào ban ngày
1. Làm thêm vào ngày làm việc bình thường:
   $$L_{TT-NT} = TLG \times 150\% \times \text{Số giờ làm thêm ban ngày}$$
2. Làm thêm vào ngày nghỉ hằng tuần:
   $$L_{TT-NNHT} = TLG \times 200\% \times \text{Số giờ làm thêm ban ngày}$$
3. Làm thêm vào ngày nghỉ lễ, tết, ngày nghỉ có hưởng lương:
   $$L_{TT-LE} = TLG \times 300\% \times \text{Số giờ làm thêm ban ngày}$$
   *(Mức 300% này chưa bao gồm tiền lương của ngày nghỉ lễ, tết, ngày nghỉ có hưởng lương đối với người lao động hưởng lương theo ngày).*

#### Trường hợp 2: Tiền lương làm việc vào ban đêm (tính từ 22:00 hôm trước đến 06:00 sáng hôm sau)
$$L_{DEM} = [TLG + (TLG \times 30\%)] \times \text{Số giờ làm việc ban đêm} = TLG \times 130\% \times \text{Số giờ ban đêm}$$

#### Trường hợp 3: Tiền lương làm thêm giờ vào ban đêm (công thức 4 thành phần theo Điều 57 Nghị định 145/2020/NĐ-CP)
$$L_{TT-DEM} = [A + B + C] \times \text{Số giờ làm thêm ban đêm}$$
Trong đó:
* $A = TLG \times (150\% \text{ hoặc } 200\% \text{ hoặc } 300\%)$ tùy thuộc vào ngày làm thêm;
* $B = TLG \times 30\%$ (phụ trội làm việc vào ban đêm);
* $C = 20\% \times TLG_{ngay}$ (tiền lương tính theo đơn giá tiền lương hoặc tiền lương thực trả của công việc vào ban ngày của ngày làm việc tương ứng).

Cụ thể từng ngày:
* Làm thêm ban đêm của ngày thường:
  $$L_{TT-DEM-NT} = TLG \times (150\% + 30\% + 20\% \times 100\%) = TLG \times 200\% \times \text{Số giờ}$$
* Làm thêm ban đêm của ngày nghỉ hằng tuần:
  $$L_{TT-DEM-NNHT} = TLG \times (200\% + 30\% + 20\% \times 200\%) = TLG \times 270\% \times \text{Số giờ}$$
* Làm thêm ban đêm của ngày lễ, tết, ngày nghỉ có hưởng lương:
  $$L_{TT-DEM-LE} = TLG \times (300\% + 30\% + 20\% \times 300\%) = TLG \times 390\% \times \text{Số giờ}$$

#### Tách thu nhập miễn thuế thu nhập cá nhân
- Phần tiền lương làm thêm giờ, làm việc ban đêm cao hơn tiền lương tính theo ngày làm việc bình thường được miễn thuế TNCN.
- Ví dụ: Làm thêm ngày thường hưởng $150\%$, thì phần $50\%$ vượt thêm được miễn thuế; làm việc ngày lễ hưởng $300\%$, thì phần $200\%$ vượt thêm được miễn thuế. `CV-LD` lập bảng kê chi tiết phần thu nhập miễn thuế này để bàn giao cho `CV-KT`.

### 5.3. Quy tắc trích nộp bảo hiểm xã hội theo Mức tham chiếu mới
Căn cứ Luật Bảo hiểm xã hội số 41/2024/QH15:

#### Nguyên tắc Mức tham chiếu
Toàn bộ quy định về "mức lương cơ sở" trước đây được bãi bỏ và chuyển sang áp dụng "Mức tham chiếu" do Chính phủ công bố cho từng thời kỳ.

#### Tỷ lệ trích nộp các quỹ bảo hiểm
- Doanh nghiệp (Người sử dụng lao động) đóng tổng cộng $21.5\%$:
  * Quỹ Hưu trí và tử tuất: $14.0\%$;
  * Quỹ Ốm đau và thai sản: $3.0\%$;
  * Quỹ Bảo hiểm tai nạn lao động, bệnh nghề nghiệp: $0.5\%$;
  * Quỹ Bảo hiểm y tế: $3.0\%$;
  * Quỹ Bảo hiểm thất nghiệp: $1.0\%$.
- Người lao động đóng tổng cộng $10.5\%$:
  * Quỹ Hưu trí và tử tuất: $8.0\%$;
  * Quỹ Bảo hiểm y tế: $1.5\%$;
  * Quỹ Bảo hiểm thất nghiệp: $1.0\%$.
- Kinh phí công đoàn: Doanh nghiệp đóng $2.0\%$ trên quỹ tiền lương làm căn cứ đóng BHXH cho người lao động (theo quy định của Luật Công đoàn). Từ ngày 01/09/2026, thực hiện đóng qua tài khoản thu tập trung của Tổng Liên đoàn Lao động Việt Nam theo mã định danh tại VietinBank (`1TLD` + MST), Agribank (`1400288668989`), BIDV (`V2TT` + MST), hoặc Vietcombank (`VCBTLD` + MST).

#### Mức tối đa và mức tối thiểu tiền lương làm căn cứ đóng bảo hiểm
- Mức trần đóng BHXH, BHYT: Tối đa bằng 20 lần Mức tham chiếu tại thời điểm đóng.
- Mức trần đóng BHTN: Tối đa bằng 20 lần mức lương tối thiểu vùng do Chính phủ công bố áp dụng cho địa bàn doanh nghiệp hoạt động.
- Mức tối thiểu đóng BHXH, BHYT, BHTN: Không được thấp hơn mức lương tối thiểu vùng đối với người lao động làm công việc giản đơn nhất trong điều kiện lao động bình thường.
- Đối với công việc đòi hỏi qua học nghề, đào tạo nghề: Mức lương đóng phải cao hơn ít nhất $7\%$ so với mức lương tối thiểu vùng (nếu doanh nghiệp có cam kết trong thỏa ước hoặc hợp đồng lao động).

### 5.4. Quy trình lập và nộp tờ khai biến động lao động (Mẫu D02-LT)

#### Bước 1: Xác định các trường hợp phát sinh biến động trong tháng
- Báo tăng lao động: Người lao động mới tuyển dụng bắt đầu làm việc theo HĐLĐ từ đủ 01 tháng trở lên; người lao động quay trở lại làm việc sau kỳ nghỉ thai sản hoặc nghỉ không hưởng lương từ 14 ngày làm việc trở lên trong tháng.
- Báo giảm hẳn: Chấm dứt hợp đồng lao động, người lao động nghỉ việc.
- Báo giảm nghỉ chế độ: Người lao động nghỉ hưởng chế độ thai sản từ 14 ngày làm việc trở lên trong tháng; người lao động nghỉ việc do ốm đau từ 14 ngày làm việc trở lên trong tháng có giấy chứng nhận của cơ sở y tế; người lao động xin nghỉ không hưởng lương từ 14 ngày làm việc trở lên trong tháng.
- Điều chỉnh mức đóng: Khi có quyết định tăng lương, phụ cấp lương hoặc khi nhà nước điều chỉnh mức lương tối thiểu vùng, mức tham chiếu.

#### Bước 2: Lập tờ khai điện tử
- Sử dụng biểu mẫu điện tử D02-LT (Báo cáo tình hình sử dụng lao động và danh sách tham gia BHXH, BHYT, BHTN) trên Hệ thống kê khai bảo hiểm xã hội điện tử.
- Điền thông tin cá nhân: Họ và tên, số định danh cá nhân / CCCD (từ 01/09/2026 sử dụng số ĐDCN/CCCD thay thế mã số BHXH theo Thông báo số 6877/TB-BHXH; trong giai đoạn chuyển tiếp, tra cứu thông tin bằng cả số ĐDCN/CCCD và mã số BHXH cũ; mã đơn vị tham gia chuyển đổi sang bộ mã quản lý mới), chức danh nghề nghiệp, mức lương đóng, hệ số phụ cấp (nếu có), phương án báo biến động (Tăng mới - TM, Báo giảm hẳn - GH, Giảm thai sản - TS, Giảm ốm - OF, Nghỉ không lương - KL).

#### Bước 3: Soát xét và ký số tờ khai
- `CV-LD` đối chiếu thông tin trên tờ khai với Hợp đồng lao động và Quyết định tiếp nhận/chấm dứt.
- `TL-LD` kiểm tra và thực hiện ký số bằng chứng thư số công cộng của doanh nghiệp.

#### Bước 4: Nộp tờ khai và theo dõi phản hồi
- Nộp hồ sơ điện tử trước ngày 25 của tháng phát sinh biến động.
- Tiếp nhận Thông báo xác nhận nộp hồ sơ điện tử và Thông báo kết quả giải quyết hồ sơ từ cơ quan bảo hiểm xã hội qua hệ thống giao dịch điện tử.
- Trường hợp cơ quan BHXH từ chối: Kiểm tra nguyên nhân (số ĐDCN/CCCD chưa được đồng bộ hoặc xác thực với Cơ sở dữ liệu quốc gia về dân cư, chưa chốt sổ tại đơn vị cũ, thông tin cá nhân bị sai lệch), thực hiện hiệu chỉnh và nộp lại trong vòng 24 giờ làm việc.

## 6. ĐIỂM KIỂM SOÁT BẮT BUỘC

| Điểm kiểm soát | Nội dung kiểm tra | Tiêu chuẩn đạt | Hành động khi không đạt |
| --- | --- | --- | --- |
| KS-LD-01 | Số giờ làm thêm | Không quá 40 giờ/tháng và không quá 200 giờ/năm (hoặc 300 giờ đối với trường hợp đặc biệt đã thông báo cơ quan quản lý) | Cắt giảm số giờ làm thêm vượt mức; cảnh báo khách hàng về nguy cơ vi phạm Điều 107 BLLĐ |
| KS-LD-02 | Đối soát 3 bên chấm công | 100% ngày nghỉ, ngày công tác, giờ OT có đơn từ phê duyệt hợp lệ kèm theo | Trừ công không hưởng lương đối với ngày nghỉ không lý do hoặc chuyển giải trình |
| KS-LD-03 | Công thức tính OT ban đêm | Áp dụng đúng công thức 4 thành phần (có $20\%$ đơn giá ban ngày) theo Điều 57 Nghị định 145/2020/NĐ-CP | Hiệu chỉnh lại công thức trên bảng tính lương |
| KS-LD-04 | Mức tối đa đóng BHXH | Lương đóng BHXH, BHYT không vượt quá 20 lần Mức tham chiếu; BHTN không vượt quá 20 lần mức lương tối thiểu vùng | Tự động hạ mức tính đóng về mức giới hạn tối đa theo quy định |
| KS-LD-05 | Nghỉ từ 14 ngày làm việc trở lên | Người lao động nghỉ từ 14 ngày làm việc trở lên không hưởng lương trong tháng thì không đóng BHXH tháng đó | Lập hồ sơ báo giảm tạm thời theo Mẫu D02-LT |
| KS-LD-06 | Thời hạn nộp hồ sơ biến động | Nộp tờ khai D02-LT trước ngày 25 của tháng phát sinh biến động | Hoàn thành và nộp ngay trong ngày; theo dõi sát để không phát sinh tiền chậm nộp |

### Bảng kiểm tác nghiệp chi tiết từng thủ tục

`CV-LD` sử dụng các bảng kiểm sau đây để rà soát chi tiết từng thành phần nghiệp vụ trước khi bàn giao bảng lương cho bộ phận Kế toán:

#### Bảng kiểm tác nghiệp đối soát chấm công và làm thêm giờ

| STT | Thành phần và nội dung kiểm tra | Tiêu chuẩn đạt | Kết quả kiểm tra | Ghi chú xử lý |
| --- | --- | --- | --- | --- |
| 1 | Khóa dữ liệu máy chấm công hoặc bảng công | Dữ liệu đúng kỳ công từ ngày 21 tháng trước đến ngày 20 tháng này (hoặc theo quy định hợp đồng) | Đạt / Không đạt | Yêu cầu bộ phận nhân sự khách hàng chốt số liệu |
| 2 | Đối chiếu ngày nghỉ có hưởng lương | Đơn xin nghỉ phép năm, nghỉ lễ tết, nghỉ việc riêng có hưởng lương có chữ ký phê duyệt hợp lệ | Đạt / Không đạt | Chuyển sang diện nghỉ không lương nếu không có đơn |
| 3 | Đối chiếu ngày nghỉ ốm đau, thai sản | Có Giấy chứng nhận nghỉ việc hưởng BHXH (Mẫu C65-HD) hoặc Giấy ra viện hợp lệ | Đạt / Không đạt | Hướng dẫn bổ sung chứng từ y tế trong 03 ngày |
| 4 | Kiểm tra phiếu đăng ký làm thêm giờ (OT) | Có phiếu đăng ký được người quản lý trực tiếp phê duyệt trước khi thực hiện ca làm thêm | Đạt / Không đạt | Không tính tiền làm thêm giờ nếu thiếu phê duyệt trước |
| 5 | Kiểm tra hạn mức làm thêm giờ | Tổng số giờ làm thêm không vượt quá 40 giờ trong tháng và không vượt quá 200 giờ trong năm | Đạt / Không đạt | Cảnh báo vi phạm Điều 107 Bộ luật Lao động |
| 6 | Phân loại giờ làm thêm và làm việc ban đêm | Bóc tách chính xác số giờ: ngày thường (150%), ngày nghỉ tuần (200%), ngày lễ (300%), ban đêm (130%) | Đạt / Không đạt | Kiểm tra giờ bắt đầu và kết thúc ca đêm (22:00 - 06:00) |

#### Bảng kiểm tác nghiệp lập bảng thanh toán tiền lương và thuế TNCN

| STT | Thành phần và nội dung kiểm tra | Tiêu chuẩn đạt | Kết quả kiểm tra | Ghi chú xử lý |
| --- | --- | --- | --- | --- |
| 1 | Mức lương chính và thang bảng lương | Khớp đúng mức lương ghi trên Hợp đồng lao động hoặc Quyết định lương gần nhất | Đạt / Không đạt | Cập nhật quyết định điều chỉnh lương mới nhất |
| 2 | Tính tiền lương làm thêm giờ ban đêm | Áp dụng đúng công thức 4 thành phần (có phụ trội 20% đơn giá ban ngày) theo Nghị định 145/2020/NĐ-CP | Đạt / Không đạt | Sử dụng hàm tự động kiểm tra công thức |
| 3 | Tách thu nhập miễn thuế TNCN từ làm thêm giờ | Bóc tách phần thu nhập trả cao hơn (50% ngày thường, 100% ngày nghỉ, 200% ngày lễ) vào cột miễn thuế | Đạt / Không đạt | Lập bảng kê chi tiết phần miễn thuế TNCN |
| 4 | Trích đóng BHXH, BHYT, BHTN người lao động | Áp dụng đúng tỷ lệ 10.5% (8% hưu trí, 1.5% y tế, 1% thất nghiệp); không vượt mức tối đa 20 lần Mức tham chiếu | Đạt / Không đạt | Điều chỉnh trích nộp đúng quy định quỹ |
| 5 | Trích nộp của Người sử dụng lao động | Doanh nghiệp đóng 21.5% (14% hưu trí, 3% ốm đau thai sản, 0.5% TNLĐ-BNN, 3% BHYT, 1% BHTN) và 2% KPCĐ | Đạt / Không đạt | Chuyển số liệu trích nộp cho kế toán hạch toán |
| 6 | Tính thuế TNCN theo biểu lũy tiến | Giảm trừ bản thân (11 triệu đồng/tháng), giảm trừ người phụ thuộc (4.4 triệu đồng/người/tháng) có hồ sơ hợp lệ | Đạt / Không đạt | Kiểm tra mã số thuế và văn bản đăng ký người phụ thuộc |

#### Bảng kiểm tác nghiệp khai báo biến động BHXH (Mẫu D02-LT)

| STT | Thành phần và nội dung kiểm tra | Tiêu chuẩn đạt | Kết quả kiểm tra | Ghi chú xử lý |
| --- | --- | --- | --- | --- |
| 1 | Danh sách lao động tăng mới | Hợp đồng lao động có hiệu lực; đầy đủ họ tên, ngày sinh, số định danh CCCD, chức danh nghề nghiệp | Đạt / Không đạt | Yêu cầu cung cấp CCCD gắn chip để tra cứu mã BHXH |
| 2 | Danh sách lao động giảm hẳn (nghỉ việc) | Quyết định chấm dứt HĐLĐ; xác định chính xác tháng bắt đầu giảm để không phát sinh nợ tiền bảo hiểm | Đạt / Không đạt | Báo giảm trước ngày 25 của tháng để tránh nợ phát sinh |
| 3 | Lao động nghỉ chế độ từ 14 ngày trở lên | Báo giảm tạm thời đối với trường hợp nghỉ ốm, nghỉ thai sản, nghỉ không hưởng lương từ 14 ngày làm việc trở lên | Đạt / Không đạt | Kiểm tra số ngày làm việc thực tế trong tháng |
| 4 | Ký số và gửi tờ khai điện tử | Ký bằng chứng thư số công cộng của doanh nghiệp; nhận thông báo tiếp nhận hồ sơ thành công | Đạt / Không đạt | Ghi lại mã số hồ sơ giao dịch điện tử |
| 5 | Đối chiếu Thông báo đóng BHXH (Mẫu C12-TS) | Đối chiếu số tiền phải nộp và số lao động trên thông báo của cơ quan BHXH với bảng lương nội bộ | Đạt / Không đạt | Làm việc với cơ quan BHXH nếu phát sinh chênh lệch |

## 7. LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ

| Nhóm lỗi | Biểu hiện cụ thể | Nguyên nhân gốc rễ | Biện pháp phòng ngừa và xử lý |
| --- | --- | --- | --- |
| Lỗi thiếu thành phần OT đêm | Tính thiếu khoản tiền $20\%$ đơn giá lương ban ngày khi làm thêm giờ vào ban đêm | Dùng công thức cũ hoặc hiểu nhầm làm thêm ban đêm chỉ gồm $150\% + 30\%$ | Cố định công thức chuẩn trên Bảng tính dữ liệu theo đúng Điều 57 Nghị định 145/2020/NĐ-CP |
| Lỗi chậm báo giảm lao động | Người lao động nghỉ việc từ đầu tháng nhưng đến cuối tháng hoặc tháng sau mới báo giảm | Khách hàng không thông báo việc thôi việc hoặc chuyên viên đợi gom hồ sơ | Rà soát danh sách nhân sự nghỉ việc trước ngày 20 hằng tháng; yêu cầu khách hàng chốt danh sách |
| Lỗi áp dụng mức giới hạn tối đa cũ | Vẫn sử dụng mức giới hạn tối đa theo lương cơ sở cũ sau khi mức tham chiếu mới có hiệu lực | Không cập nhật các văn bản hướng dẫn Luật BHXH số 41/2024/QH15 | Cập nhật thông số Mức tham chiếu mới ngay khi có Nghị định công bố chính thức |
| Lỗi phân loại khoản phụ cấp | Tính đóng BHXH trên cả tiền ăn ca, điện thoại, xăng xe, hoặc bỏ sót phụ cấp chức vụ | Không phân loại đúng các khoản thu nhập theo Điều 30 Thông tư 59/2015/TT-BLĐTBXH | Lập danh mục chuẩn các khoản phụ cấp của từng khách hàng, đánh dấu rõ cột chịu BHXH và miễn BHXH |
| Lỗi không chốt sổ BHXH | Người lao động nghỉ việc không được xác nhận quá trình đóng BHXH đúng thời hạn | Đơn vị còn nợ tiền đóng BHXH hoặc chuyên viên chưa nộp hồ sơ chốt sổ | Đôn đốc khách hàng hoàn thành nộp tiền đóng BHXH đến tháng nghỉ việc; nộp hồ sơ chốt sổ trong vòng 07 ngày làm việc |

## 8. ĐẦU RA VÀ NƠI LƯU

### 8.1. Danh mục kết quả đầu ra
1. Bảng chấm công đã đối soát và ký duyệt.
2. Bảng thanh toán tiền lương và các khoản trích nộp theo lương tháng.
3. Bảng kê thu nhập làm thêm giờ, làm việc ban đêm được miễn thuế TNCN.
4. Phiếu thanh toán tiền lương gửi từng cá nhân người lao động.
5. Tờ khai Mẫu D02-LT có xác nhận tiếp nhận thành công của cơ quan bảo hiểm xã hội.
6. Thông báo kết quả đóng BHXH (Mẫu C12-TS) tháng đối chiếu.

### 8.2. Quy cách lưu trữ
- Toàn bộ hồ sơ số hóa được lưu trữ trên Hệ thống quản lý công việc và lưu trữ hồ sơ theo cấu trúc:
  `ThuMucLuuTru / [Nam] / KhachHang / [MaKhachHang]_[TenDoanhNghiep] / LaoDong / BangLuong_[Nam]_[Thang] /`
- Thời hạn lưu trữ tối thiểu: 05 năm đối với chứng từ tiền lương và hồ sơ bảo hiểm xã hội.

## 9. CHỈ SỐ THEO DÕI

1. Tỷ lệ chính xác của bảng lương phát hành: Đạt $100\%$ không phát sinh khiếu nại sai số học hoặc sai công thức quy định.
2. Tỷ lệ hoàn thành bảng lương đúng hạn nội bộ: Đạt tối thiểu $98\%$ các chu kỳ lương trong năm.
3. Tỷ lệ nộp tờ khai biến động lao động đúng thời hạn: Đạt $100\%$, không để phát sinh lãi chậm đóng hoặc chế tài xử phạt theo Nghị định số 283/2026/NĐ-CP.
4. Thời hạn phản hồi giải trình thắc mắc về tiền lương của người lao động: Dưới 08 giờ làm việc kể từ thời điểm tiếp nhận.

---

## LIÊN KẾT VỚI CÁC TÀI LIỆU KHÁC

- Cấp trên: [[05_OBK-SOP-LD_Lao_dong_va_tien_luong|OBK-SOP-LD]] Lao động và tiền lương.
- Tài liệu phối hợp: [[03_OBK-SOP-KT_Ke_toan_va_thue|OBK-SOP-KT]] Kế toán và thuế; [[02_OBK-SOP-AM_Quan_ly_khach_hang|OBK-SOP-AM]] Quản lý khách hàng.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.1.0.1 | Hai bước đối soát tiền lương (đối chiếu ngày nghỉ phép với đơn đã duyệt, xuất bảng tổng hợp công và ký xác nhận kiểm soát lớp 1) có chủ thể CV-LD |
