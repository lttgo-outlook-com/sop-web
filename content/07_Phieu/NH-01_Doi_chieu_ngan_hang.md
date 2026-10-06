---
title: "PHIẾU NH-01. ĐỐI CHIẾU NGÂN HÀNG"
code: "NH-01"
type: "sop"
folder: "07_Phieu"
level: "Phiếu thao tác"
version: "R.3.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-TTT-05 Cách làm phiếu thao tác"
next_review: ""
distribution: "Nội bộ oBacker"
aliases:
  - NH-01
tags:
  - loai/sop
  - cap/phieu-thao-tac
---
# PHIẾU NH-01. ĐỐI CHIẾU NGÂN HÀNG

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | NH-01 |
| Cấp tài liệu | Phiếu thao tác |
| Phiên bản | R.3.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | `OBK-TTT-05` Cách làm phiếu thao tác |
| **Mã phiếu** | NH-01 |
| **Màu** | XANH, phiếu theo lịch |
| **Ai dùng** | `AD-KT`. `KTV` và `KTT` không dùng phiếu này, vì hai vai trò đó lập lệnh chi |
| **Sinh từ** | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 34.3;<br>[[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 5.13.2 và chốt `K12` |
| **Ngày làm phiếu** | 04/09/2026 |
| **Dữ liệu chung** | Nghiệp vụ của phiếu ghi vào [[OBK-MSR_So_cai_quan_tri_dich_vu\|OBK-MSR]]; phiếu là hướng dẫn thao tác và view trên cùng dữ liệu |

## TRƯỜNG HỢP ÁP DỤNG

Đối chiếu ngân hàng có hai cấp, hai chu kỳ khác nhau, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 34.3. Mỗi lần dùng phiếu, chọn đúng một cấp.

| Cấp | Chu kỳ | Phạm vi | Hạn hoàn thành |
| --- | --- | --- | --- |
| Đối chiếu nhanh | Mỗi 02 tuần | Số dư và các giao dịch phát sinh trong kỳ hai tuần | Ngày làm việc đầu tiên của kỳ sau |
| Đối chiếu đầy đủ | Hằng tháng | Toàn bộ tài khoản, khớp về sổ kế toán | Trong 05 ngày làm việc đầu tháng sau |

Đặt ngày cố định cho cả hai chu kỳ để không bị bỏ sót. Kỳ đối chiếu đầy đủ không thay cho kỳ đối chiếu nhanh; tháng nào cũng chạy đủ cả hai.

## CÁC BƯỚC

```
Cấp:  Đối chiếu nhanh [ ]        Đối chiếu đầy đủ [ ]
Kỳ đối chiếu: từ ngày ........... đến ngày ...........

[ ]  1. TẢI sao kê ngân hàng của kỳ, đủ mọi tài khoản của oBacker.
        Số tài khoản đã tải: ..........

[ ]  2. ĐỐI CHIẾU số dư cuối kỳ trên sao kê với số dư trên sổ kế toán.
        Sao kê ......................... đồng
        Sổ kế toán ..................... đồng
        Chênh lệch ..................... đồng
                                        Khớp [ ]      Lệch [ ]

[ ]  3. ĐỐI CHIẾU từng giao dịch trên sao kê với sổ kế toán.
        Tổng số giao dịch trong kỳ: ..........
        Số giao dịch đã khớp: ..........

[ ]  4. LỌC các giao dịch CHI không tìm được đề nghị thanh toán tương ứng.
        Số giao dịch không có đề nghị: ..........
        Nếu bằng 0 thì bỏ qua bước 5.

[ ]  5. TRUY NGUYÊN từng giao dịch ở bước 4 trong vòng 24 giờ.
        Với mỗi giao dịch ghi: ngày, số tiền, người nhận, ai lập lệnh.

[ ]  6. BÁO TGĐ mọi giao dịch chưa truy nguyên được sau 24 giờ,
        và mọi chênh lệch chưa giải thích được, ngay trong ngày phát hiện.
        Không báo qua KTV hoặc KTT, vì hai vai trò đó lập lệnh chi.
        KTT nhận bản sao để xử lý phần kế toán.

[ ]  7. LẬP bảng đối chiếu, ký và lưu vào hồ sơ kỳ.

[ ]  8. Riêng cấp ĐỐI CHIẾU ĐẦY ĐỦ: trình TGĐ duyệt bảng đối chiếu.
```

## QUY TRÌNH LUÂN CHUYỂN VÀ LƯU TRỮ

**Khớp hết:** ký bảng đối chiếu, lưu hồ sơ kỳ. Cấp đối chiếu đầy đủ thì trình `TGĐ` duyệt. Kết thúc.

**Số dư lệch:** truy nguyên chênh lệch trước khi đóng kỳ, và báo `TGĐ` ngay trong ngày phát hiện. Không được để chênh lệch sang kỳ sau mà không có giải trình.

**Có giao dịch chi không có đề nghị thanh toán:** đây là dấu hiệu chi tiền ngoài quy trình. Báo `TGĐ` ngay, không đợi hết 24 giờ nếu số tiền lớn.

## KÝ XÁC NHẬN

| | |
| --- | --- |
| Cấp đối chiếu | ............................. |
| Kỳ đối chiếu | ............................. |
| Người đối chiếu (`AD-KT`) | ............................. |
| Ngày giờ hoàn thành | ............................. |
| Số giao dịch chưa truy nguyên | ............................. |
| `TGĐ` duyệt | ............................. |

---

## CĂN CỨ VÀ MỤC ĐÍCH SỬ DỤNG

### 1. Mục đích sử dụng

Đối chiếu ngân hàng là điểm kiểm soát cuối cùng phát hiện tiền ra khỏi công ty mà không đi qua quy trình. Mọi điểm kiểm soát khác đều nằm trước lúc chuyển tiền, còn chốt này nằm SAU nên bắt được những gì đã lọt qua tất cả các chốt trước.


## Con số của phiếu này lấy ở đâu

Phiếu này không tự đặt con số nào. Chu kỳ hai cấp lấy từ OBK-QCTC-01 mục 34.3; mốc truy nguyên 24 giờ lấy từ OBK-SOP-NB-01 mục 5.13.2. Cả hai là mốc nội bộ, không phải mốc theo pháp luật.

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 06/10/2026 | R.3.0.0 | Khôi phục dòng TGĐ duyệt trong mẫu: thân phiếu (bước 8, luân chuyển) vẫn bắt buộc trình TGĐ duyệt bảng đối chiếu ở cấp đối chiếu đầy đủ, mẫu R.2.0.0 không còn nơi ghi sự phê duyệt đó |
