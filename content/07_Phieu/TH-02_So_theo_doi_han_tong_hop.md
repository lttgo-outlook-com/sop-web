---
title: "PHIẾU TH-02. SỔ THEO DÕI HẠN TỔNG HỢP"
code: "TH-02"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.2.0.0"
status: "đang áp dụng"
draft_date: "06/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - TH-02
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU TH-02. SỔ THEO DÕI HẠN TỔNG HỢP

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | TH-02 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.2.0.0, đang áp dụng |
| Ngày biên soạn | 06/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | TH-02 |
| **Màu** | XANH, theo dõi hạn tổng hợp đa mảng |
| **Ai dùng** | Chuyên viên Quản lý khách hàng (`AM`), `KTV`, Chuyên viên phụ trách thủ tục cấp phép (`CV-LIC`), Trưởng bộ phận Giấy phép (`TL-LIC`), Chuyên viên Nhân sự (`HR`), Quản lý trực tiếp (`TL`), Trưởng phòng Thương mại (`TP Thương mại`), `KTT` |
| **Sinh từ** | [[02_OBK-SOP-AM_Quan_ly_khach_hang\|OBK-SOP-AM]] Job `AM-13`;<br>[[PL_H_Quy_trinh_chu_ky_so_va_hoa_don_dien_tu\|OBK-SOP-PL-H]] mục 5;<br>[[04_OBK-SOP-LIC_Giay_phep\|OBK-SOP-LIC]];<br>[[PL_LIC_01_Quy_trinh_giay_phep_chuyen_nganh_va_so_huu_tri_tue\|OBK-SOP-PL-LIC-01]];<br>[[OBK-SOP-NB-05_Tuyen_dung_va_onboarding_noi_bo\|OBK-SOP-NB-05]];<br>[[OBK-SOP-NB-06_Nghi_viec_va_offboarding_noi_bo\|OBK-SOP-NB-06]];<br>[[01_Khung_nhan_su_tong_hop\|OBK-QCNS-01]];<br>`DV-02`, `GP-01`, `HD-01` (ba phiếu theo dõi hạn cũ nhập vào phiếu này ngày 06/10, bản lưu tại `_luu_tru/phieu/`) |
| **Ngày làm phiếu** | 06/10/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Sổ theo dõi hạn tổng hợp gộp một trục duy nhất: **mọi đối tượng có ngày hết hạn hoặc mốc thời gian theo luật cần theo dõi và nhắc trước hạn**, gồm ba mảng:

1. **Dịch vụ khách hàng** (trước đây Phiếu DV-02): chữ ký số (Token USB hoặc Smart-CA), gói phần mềm hóa đơn điện tử, dịch vụ kế toán thuế trọn gói, dịch vụ duy trì văn phòng đại diện và tên miền. Trục chữ ký số trùng với [[CK-02_Theo_doi_kho_token_va_kich_hoat_cyberx|CK-02]]: CK-02 giữ vai trò kho token và kích hoạt, sổ này giữ mốc hạn và mốc nhắc gia hạn.
2. **Thủ tục hành chính và giấy phép khách hàng** (trước đây Phiếu GP-01): đăng ký doanh nghiệp, đăng ký đầu tư, giấy phép lao động và các loại giấy phép chuyên ngành phát sinh từ hợp đồng dịch vụ ký với khách hàng.
3. **Hợp đồng lao động nội bộ** (trước đây Phiếu HD-01): toàn bộ người lao động của Công ty cổ phần oBacker, bao gồm nhân sự thử việc, hợp đồng lao động xác định thời hạn và không xác định thời hạn.

## KHUÔN SỔ THEO DÕI HẠN TỔNG HỢP

| Cột | Tên trường | Nội dung ghi nhận |
| --- | --- | --- |
| 1 | Loại hạn | Một trong: `chữ ký số`, `dịch vụ định kỳ`, `thủ tục hành chính`, `giấy phép`, `HĐLĐ`, `thử việc` |
| 2 | Mã đối tượng | Mã khách hàng (mảng dịch vụ); mã Job `LIC-01` đến `LIC-31` (mảng thủ tục); mã nhân sự `OBK-EMP-[Số thứ tự]` (mảng nội bộ) |
| 3 | Tên đối tượng | Tên doanh nghiệp khách hàng; tên thủ tục; họ tên người lao động |
| 4 | Mã số thuế / Mã số doanh nghiệp | Của khách hàng hoặc cá nhân nộp (mảng nội bộ để trống) |
| 5 | Ngày bắt đầu | Ngày kích hoạt dịch vụ; ngày nộp hồ sơ có biên nhận; ngày nhận việc hoặc ngày bắt đầu hiệu lực HĐLĐ |
| 6 | Ngày hết hạn / mốc theo luật | Ngày hết hạn dịch vụ hoặc chứng thư số; ngày hẹn trả kết quả theo luật ghi trên giấy biên nhận; ngày kết thúc thử việc; ngày hết hạn HĐLĐ |
| 7 | Mốc nhắc theo luật và nội bộ | Trước 30 ngày (gia hạn dịch vụ; tái ký HĐLĐ theo Điều 20 Bộ luật Lao động); trước 07 ngày (đánh giá thử việc); ngày hẹn trả kết quả của cơ quan (mảng thủ tục) |
| 8 | Cột bổ sung theo mảng | Mảng dịch vụ: số Serial chứng thư số / số HĐ, nhà cung ứng. Mảng thủ tục: cơ quan tiếp nhận hồ sơ, số giấy biên nhận, số lần thông báo sửa đổi bổ sung, ngày nhận kết quả thực tế, mốc thời gian cam kết với khách hàng (SLA) theo thỏa thuận dịch vụ nội bộ. Mảng nội bộ: thời gian thử việc, lần ký kết HĐLĐ (Lần 1, Lần 2, Không xác định thời hạn), hình thức HĐ, kết quả thử việc |
| 9 | Người phụ trách | `AM` (mảng dịch vụ), `CV-LIC` (mảng thủ tục), `HR` (mảng nội bộ) |
| 10 | Trạng thái | Mảng dịch vụ: Bình thường, Đã gửi thông báo 30 ngày, Đang thương thảo, Đã thanh toán gia hạn, Khách hàng hủy. Mảng thủ tục: Đang chuẩn bị, Đã nộp chờ biên nhận, Đang xử lý, Sửa đổi bổ sung lần 1, Sửa đổi bổ sung lần 2, Đã nhận kết quả, Đã bàn giao. Mảng nội bộ: Đang thử việc, Đang hiệu lực, Đã tái ký, Chuyển không xác định thời hạn, Đã chấm dứt |
| 11 | Phiếu nguồn | `DV-02`, `GP-01` hoặc `HD-01` (dòng dữ liệu di chuyển từ phiếu nào) |

## MỐC NHẮC BẮT BUỘC THEO LOẠI HẠN

### 1. Dịch vụ khách hàng và chữ ký số (trục DV-02, liên kết CK-02)

```
[ ]  Mốc trước 30 ngày so với ngày hết hạn:
     - AM xuất danh sách khách hàng đến hạn trong tháng kế tiếp.
     - Gửi Thư điện tử thông báo thời hạn kèm Báo giá chính sách gia hạn ưu đãi.
     - Nêu rõ cảnh báo: chữ ký số hết hạn sẽ làm gián đoạn nộp tờ khai thuế và xuất hóa đơn điện tử.
[ ]  Mốc trước 15 ngày: AM liên hệ trực tiếp xác nhận nhu cầu, gửi Hợp đồng dịch vụ hoặc Phụ lục gia hạn;
     khách hàng đồng ý thì chuyển KTV chuẩn bị hồ sơ gia hạn với nhà cung ứng.
[ ]  Mốc trước 07 ngày: AM đôn đốc thanh toán; KTV nộp hồ sơ gia hạn điện tử ngay khi nhận chứng từ;
     cập nhật chứng thư số mới vào Token hoặc kích hoạt gói mới (liên kết CK-02).
[ ]  Mốc ngày hết hạn: đã gia hạn thì KTV kiểm thử chữ ký số mới trên Cổng Tổng cục Thuế và lập
     Biên bản bàn giao theo [[CK-01_Ban_giao_chu_ky_so_va_hoa_don|CK-01]]; chưa gia hạn thì gửi
     Thông báo khẩn cấp, đề nghị tạm dừng xuất hóa đơn đến khi gia hạn thành công.
[ ]  Mốc sau 07 ngày kể từ ngày hết hạn: khách hàng không tiếp tục thì AM lập phiếu ghi nhận lý do
     ngừng dịch vụ, hướng dẫn bàn giao tài khoản quản trị và lưu trữ dữ liệu.
```

### 2. Thủ tục hành chính và giấy phép (trục GP-01)

```
[ ]  Tiếp nhận và mở dòng: CV-LIC tiếp nhận yêu cầu từ AM kèm mã hợp đồng đã ký, mở dòng theo dõi
     (mã Job, tên khách hàng, mã số thuế, loại thủ tục), kiểm tra đủ tài liệu đầu vào theo bảng kiểm
     của từng loại thủ tục tại OBK-SOP-LIC.
[ ]  Trước khi nộp: TL-LIC kiểm tra tính hợp lệ hồ sơ trong 04 giờ làm việc (thủ tục thường) hoặc
     01 ngày làm việc (chuyên ngành phức tạp: bán lẻ FDI, khoa học và công nghệ); chuyển AM hướng
     dẫn khách ký tên, đóng dấu và thu văn bản gốc.
[ ]  Sau khi nộp: CV-LIC ghi nhận số giấy biên nhận, ngày nộp và ngày hẹn trả kết quả, thông báo
     số biên nhận và ngày hẹn cho AM để thông tin đến khách hàng.
[ ]  Theo dõi tình trạng xử lý hồ sơ trên hệ thống dịch vụ công định kỳ 09 giờ và 15 giờ mỗi ngày làm việc.
[ ]  Khi có thông báo sửa đổi, bổ sung: CV-LIC tải văn bản, ghi nhận số lần sửa đổi vào sổ;
     TL-LIC cùng CV-LIC phân tích nguyên nhân trong 02 giờ làm việc; nộp lại hồ sơ trong tối đa 02 ngày làm việc.
[ ]  Hồ sơ bị yêu cầu sửa đổi từ lần thứ 02 trở lên: TL-LIC báo cáo COO để xử lý vướng mắc.
[ ]  Khi có kết quả: CV-LIC tiếp nhận văn bản cấp phép gốc hoặc bản điện tử có chữ ký số hợp lệ,
     kiểm tra khớp đúng các trường thông tin (tên doanh nghiệp, mã số thuế, địa chỉ, ngành nghề),
     ghi nhận ngày nhận kết quả thực tế, chuyển trạng thái "Đã nhận kết quả"; bàn giao kết quả gốc
     cho AM kèm biên bản giao nhận để chuyển giao khách hàng, chuyển trạng thái "Đã bàn giao".
```

### 3. Hợp đồng lao động nội bộ (trục HD-01, Điều 20 và Điều 25 Bộ luật Lao động)

```
[ ]  Mốc trước 07 ngày so với ngày kết thúc thử việc: HR phát hành thông báo đánh giá thử việc;
     người lao động tự đánh giá trong 02 ngày làm việc; TL kết luận Đạt/Không đạt kèm đề xuất lương;
     chậm nhất trước 03 ngày làm việc kể từ ngày kết thúc, HR tổng hợp trình CEO phê duyệt.
[ ]  Sau khi CEO phê duyệt, trước ngày kết thúc thử việc:
     - Thử việc Đạt: HR hoàn thiện Hợp đồng lao động chính thức để hai bên ký kết trước ngày kết thúc thử việc.
     - Thử việc Không đạt: HR phát hành văn bản thông báo chấm dứt thử việc trước khi hết thời gian thử việc,
       hoàn tất thanh toán tiền công thử việc theo quy định.
[ ]  Mốc trước 45 ngày so với ngày hết hạn HĐLĐ: HR xuất danh sách hợp đồng hết hạn tháng kế tiếp,
     gửi phiếu lấy ý kiến TL (tái ký hoặc không tái ký).
[ ]  Mốc trước 30 ngày (bắt buộc theo Điều 20 BLLD): HR lập Tờ trình nhân sự gửi CEO; tiếp tục thì
     gửi Thỏa thuận tái ký (Lần 2 xác định thời hạn hoặc không xác định thời hạn); chấm dứt thì phát
     hành Thông báo chấm dứt hợp đồng lao động bằng văn bản theo Điều 45 BLLD.
[ ]  Mốc trước 15 ngày: tái ký thì hai bên hoàn tất ký kết; chấm dứt thì kích hoạt Phiếu bàn giao
     offboarding [[BG-02_Ban_giao_nghi_viec_offboarding|BG-02]].
```

Thời hạn thử việc chuẩn hóa theo Điều 25 BLLD: tối đa 60 ngày với vị trí cần trình độ từ cao đẳng trở lên; tối đa 30 ngày với vị trí trung cấp, công nhân kỹ thuật, nghiệp vụ văn phòng.

### Điểm kiểm soát bắt buộc (kế thừa HD-01)

1. **KS-HD-01 (Ký cam kết bảo mật Day 1):** người lao động mới bắt buộc ký NDA và Cam kết tuân thủ Nội quy lao động ngay trong Ngày 1 trước khi được bàn giao máy tính và cấp tài khoản.
2. **KS-HD-02 (Kiểm soát số lần ký):** không ký HĐLĐ xác định thời hạn lần thứ 3 cho cùng một nhân sự (Điều 20 khoản 2 BLLD); nếu hết 30 ngày sau khi hết hạn mà không ký hợp đồng mới thì hợp đồng tự chuyển thành không xác định thời hạn.
3. **KS-HD-03 (Chặn chuyển đổi tự động ngoài kế hoạch):** toàn bộ hợp đồng đến hạn phải được giải quyết dứt điểm trước mốc 30 ngày kể từ ngày hết hạn.

## LUÂN CHUYỂN VÀ LƯU TRỮ

Sổ được cập nhật liên tục bởi người phụ trách từng mảng; đối soát chéo `AM` với `KTV` vào thứ Sáu hằng tuần cho mảng dịch vụ. Báo cáo các hạn sắp đến và tỷ lệ xử lý đúng mốc (gia hạn dịch vụ, đạt cam kết thủ tục, tái ký đúng hạn) tổng hợp gửi `TL-LIC`, `KTT`, `COO` trong báo cáo định kỳ hằng tuần; báo cáo tỷ lệ gia hạn dịch vụ (Renewal Rate) và tỷ lệ đạt cam kết thủ tục (mốc SLA cột 8) gửi thêm `TP Thương mại` trong báo cáo định kỳ hằng tháng. Mảng nội bộ: `HR` rà soát dữ liệu sổ hằng tuần và báo cáo biến động hợp đồng lao động cùng các trường hợp sắp đến hạn đánh giá thử việc hoặc tái ký hợp đồng cho `CEO` vào ngày 25 hằng tháng. `KTT` kiểm tra số liệu sổ khớp với dữ liệu [[OBK-MSR_So_cai_quan_tri_dich_vu|OBK-MSR]] hằng tháng. Bản in tổng hợp danh sách hợp đồng lao động có chữ ký xác nhận của `HR` và `CEO` được lưu trữ tại hồ sơ nhân sự của công ty, phục vụ công tác thanh tra lao động và đối soát bảo hiểm xã hội định kỳ.

## KÝ XÁC NHẬN

| Chuyên viên Quản lý khách hàng (`AM`) | Chuyên viên phụ trách thủ tục (`CV-LIC`) | Chuyên viên Nhân sự (`HR`) | Kế toán trưởng kiểm soát (`KTT`) |
| --- | --- | --- | --- |
| *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* | *(Ký và ghi rõ họ tên)* |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Đưa toàn bộ các mốc thời hạn có ràng buộc (theo luật, theo cam kết dịch vụ, theo chu kỳ gia hạn) vào một sổ duy nhất để không mảng nào bị sót mốc: chữ ký số và dịch vụ định kỳ khách hàng không gián đoạn xuất hóa đơn, nộp thuế; hồ sơ thủ tục không chậm mốc trả kết quả theo luật; hợp đồng lao động không chuyển đổi tự động ngoài ý chí quản trị theo Điều 20 Bộ luật Lao động. Nhập ba phiếu DV-02, GP-01, HD-01 vào một sổ một trục, giảm sổ trùng mà vẫn giữ nguyên người phụ trách và mốc nhắc của từng mảng.


---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.2.0.0 | Vá 10 finding P1 của lượt đọc diff ngược: nhập đủ 3 bước quy trình trục GP-01 (tiếp nhận mở dòng, kiểm tra hợp lệ 04 giờ/01 ngày trước nộp, thông báo số biên nhận cho AM), 2 nhánh sau phê duyệt thử việc (Đạt: hoàn thiện HĐLĐ trước ngày kết thúc; Không đạt: thông báo chấm dứt và thanh toán tiền công thử việc), HR rà soát tuần và báo cáo CEO ngày 25 hằng tháng, lưu bản in có chữ ký HR-CEO tại hồ sơ nhân sự, thêm cột SLA cam kết và cơ quan tiếp nhận vào cột 8, TP Thương mại nhận báo cáo tháng (Renewal Rate, tỷ lệ đạt cam kết), bổ sung OBK-QCNS-01 và OBK-SOP-PL-LIC-01 vào Sinh từ |
