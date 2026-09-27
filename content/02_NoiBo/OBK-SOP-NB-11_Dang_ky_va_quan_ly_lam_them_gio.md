---
title: "OBK-SOP-NB-11. Đăng ký và quản lý làm thêm giờ"
code: "OBK-SOP-NB-11"
type: "sop"
folder: "02_NoiBo"
level: "Cấp 2, quy trình bộ phận"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "27/09/2026"
law_as_of: "Pháp luật có hiệu lực tại ngày 27/09/2026"
author: "CEO"
reviewer: "CEO"
review_status: "đã soát"
approver: "CEO"
approval_status: "đã phê duyệt"
parent: "OBK-SOP-NB-00 Chuẩn vận hành nội bộ"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - OBK-SOP-NB-11
tags:
  - loai/sop
  - cap/2
  - nghiep-vu/tien-luong
---
# OBK-SOP-NB-11. Đăng ký và quản lý làm thêm giờ

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-NB-11 |
| Tên tài liệu | Quy trình đăng ký và quản lý làm thêm giờ |
| Cấp tài liệu | Cấp 2, quy trình vận hành nội bộ. Thi hành [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ và Nội quy lao động [[Noi_quy_lao_dong\|OBK-NQLD]] |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 27/09/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 27/09/2026 |
| Người biên soạn | `CEO` |
| Người soát | `CEO` |
| Người phê duyệt | `CEO`, ký với chức danh Tổng giám đốc |
| Văn bản cấp trên | [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ |
| Bộ tài liệu | OBK-SOP-NB, Sổ tay quy trình nội bộ oBacker |
| Tài liệu song hành | [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo\|OBK-SOP-NB-04]] công và tiền lương nội bộ;<br>[[OBK-SOP-NB-10_Quan_ly_nghi_phep_va_lam_viec_tu_xa\|OBK-SOP-NB-10]] quản lý nghỉ phép và làm việc từ xa;<br>[[07_Chinh_sach_cong_chuan_va_cham_cong\|OBK-QCNS-07]] chính sách công chuẩn và chấm công |
| Lần rà soát tiếp theo | Không quá 12 tháng kể từ ngày ban hành |
| Phạm vi phát hành | Nội bộ oBacker. Không phát hành cho khách hàng. |

---

## CẢNH BÁO MỞ ĐẦU

> [!warning] NGUYÊN TẮC KIỂM SOÁT LÀM THÊM GIỜ VÀ RỦI RO THUẾ
> 1. **Nguyên tắc phê duyệt trước:** Mọi trường hợp làm thêm giờ bắt buộc phải có Phiếu đăng ký và được Quản lý trực tiếp phê duyệt trước khi thực hiện. Giờ làm việc ngoài ca không có phê duyệt trước sẽ không được công nhận là giờ làm thêm và không được chi trả tiền lương làm thêm giờ.
> 2. **Kiểm soát giới hạn mức tối đa theo luật định:** Tuyệt đối không bố trí người lao động làm thêm giờ vượt quá các mức tối đa: không quá 50% số giờ làm việc bình thường trong 01 ngày; không quá 40 giờ trong 01 tháng; không quá 200 giờ trong 01 năm (hoặc 300 giờ trong 01 năm đối với trường hợp được pháp luật cho phép và đã thông báo bằng văn bản cho cơ quan nhà nước có thẩm quyền).
> 3. **Bảng kê thu nhập làm thêm giờ để miễn thuế TNCN:** Để bảo đảm quyền miễn thuế thu nhập cá nhân theo quy định pháp luật, mỗi kỳ tính lương bắt buộc phải lập Bảng kê chi tiết thời gian làm việc ban đêm, làm thêm giờ và số tiền tương ứng. Phần thời gian làm thêm vượt mức tối đa theo luật định (nếu phát sinh) sẽ bị tính toàn bộ vào thu nhập chịu thuế.

---

## 1. MỤC TIÊU VÀ RANH GIỚI

### 1.1. Mục tiêu

1. Thiết lập quy trình thống nhất cho việc đăng ký, thẩm định, phê duyệt, ghi nhận chấm công và thanh toán làm thêm giờ tại oBacker.
2. Kiểm soát chặt chẽ tính cấp bách của công việc và sự đồng ý tự nguyện của người lao động trước khi huy động làm thêm giờ.
3. Tuân thủ nghiêm ngặt các giới hạn mức tối đa về thời giờ làm thêm theo quy định của Bộ luật Lao động và các văn bản hướng dẫn thi hành.
4. Ghi nhận dữ liệu chấm công đối soát (Job `NB-35`) và lập Bảng kê thu nhập làm việc ban đêm, làm thêm giờ phục vụ việc miễn thuế thu nhập cá nhân chính xác theo quy định của pháp luật thuế (Job `NB-36`).

### 1.2. Ranh giới áp dụng

**Trong phạm vi:**
- Hoạt động làm thêm giờ của toàn bộ người lao động làm việc theo Hợp đồng lao động tại oBacker;
- Làm thêm giờ trước ca làm việc tiêu chuẩn, làm thêm giờ sau ca làm việc tiêu chuẩn;
- Làm thêm giờ vào ngày nghỉ hằng tuần (thứ Bảy, Chủ nhật);
- Làm thêm giờ vào ngày nghỉ lễ, tết theo quy định;
- Làm việc vào ban đêm (khung giờ từ 22:00 hôm trước đến 06:00 sáng hôm sau);
- Rà soát giới hạn giờ làm thêm định kỳ (Job `NB-47`);
- Lập Bảng kê thu nhập làm việc ban đêm, làm thêm giờ được miễn thuế thu nhập cá nhân kèm theo Bảng thanh toán tiền lương của kỳ.

**Ngoài phạm vi:**
- Khung thời giờ làm việc bình thường và chế độ nghỉ giữa ca (thực hiện theo [[07_Chinh_sach_cong_chuan_va_cham_cong|OBK-QCNS-07]]);
- Các trường hợp làm việc của cộng tác viên ngoài theo hợp đồng dịch vụ dân sự;
- Quy trình giải quyết tranh chấp lao động (thực hiện theo quy định pháp luật lao động và [[Noi_quy_lao_dong|OBK-NQLD]]).

---

## 2. DANH MỤC JOB

Quy trình này trực tiếp thực hiện và phối hợp các Job nội bộ đã được đăng ký tại [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo|OBK-SOP-NB-00]] mục 5:

| Mã Job | Tên Job | Thời điểm thực hiện | Đầu vào bắt buộc | Đầu ra bắt buộc | Vai trò thực hiện | Mảng quy trình |
| --- | --- | --- | --- | --- | --- | --- |
| NB-38 | Đăng ký và xét duyệt làm thêm giờ | Trước khi bắt đầu làm thêm giờ | Phiếu đăng ký làm thêm giờ gửi trên hệ thống | Đơn đã được phê duyệt kèm căn cứ tính cấp bách | `NLĐ`, `TL`, `COO` | LƯƠNG |
| NB-47 | Rà soát giới hạn giờ làm thêm | Ngày 20 hằng tháng | Dữ liệu làm thêm giờ lũy kế của kỳ và lũy kế năm | Bảng rà soát số giờ làm thêm so với mức tối đa tháng và mức tối đa năm | `HR` | LƯƠNG |
| NB-35 | Duyệt toàn bảng công | Ngày 22 hằng tháng | Bảng chấm công `BM-09` tích hợp dữ liệu ca làm thêm | Bảng chấm công `BM-09` đã duyệt chính thức | `CEO` | LƯƠNG |
| NB-36 | Tính lương và lập Bảng kê thu nhập làm thêm giờ miễn thuế | Từ ngày 23 hằng tháng | Bảng chấm công `BM-09` đã duyệt và đơn làm thêm đã duyệt | Bảng thanh toán tiền lương mẫu 01-LĐTL và Bảng kê thu nhập làm thêm giờ miễn thuế TNCN | `HR`, `KTV` | LƯƠNG |

---

## 3. VAI TRÒ VÀ RACI

### 3.1. Bảng phân định trách nhiệm RACI

| Hoạt động | Người lao động (`NLĐ`) | Quản lý trực tiếp (`TL`) | Giám đốc vận hành (`COO`) | Tổng giám đốc (`CEO`) | Bộ phận Nhân sự (`HR`) | Kế toán viên (`KTV`) |
| --- | --- | --- | --- | --- | --- | --- |
| Đăng ký nhu cầu làm thêm giờ (trước khi làm) | R | C | I | I | I | I |
| Thẩm định tính cấp bách và duyệt ca ngày thường | I | R/A | I | I | C | I |
| Phê duyệt ca ngày nghỉ hằng tuần hoặc ca kéo dài | I | C | R/A | I | C | I |
| Chấm công vào ca và ra ca làm thêm | R | C | I | I | I | I |
| Rà soát giới hạn mức tối đa giờ làm thêm (Job `NB-47`) | I | C | I | I | R/A | I |
| Đối soát dữ liệu ca làm thêm vào Bảng công `BM-09` | I | C | I | I | R | C |
| Phê duyệt toàn bảng chấm công (Job `NB-35`) | I | I | I | R/A | C | I |
| Tính lương làm thêm giờ theo hệ số luật định | I | I | I | I | R | C |
| Lập Bảng kê thu nhập làm thêm giờ miễn thuế TNCN | I | I | I | I | C | R/A |

*Ghi chú mã RACI: R = Người thực hiện chính; A = Người phê duyệt; C = Người được tham vấn; I = Người nhận thông tin.*

### 3.2. Trách nhiệm cụ thể của từng vị trí

1. **Người lao động (`NLĐ`):**
   - Chủ động đăng ký làm thêm giờ trên hệ thống trước khi bắt đầu công việc;
   - Xác nhận sự đồng ý tự nguyện tham gia làm thêm giờ;
   - Chấm công vào ca và ra ca trung thực, chính xác tại địa điểm làm việc;
   - Hoàn thành đúng sản phẩm, công việc đã cam kết trong đơn đăng ký.

2. **Quản lý trực tiếp (`TL`):**
   - Thẩm định tính cấp bách của công việc: chỉ phê duyệt khi có nguy cơ không đáp ứng cam kết mức chất lượng dịch vụ (SLA) với khách hàng, khắc phục sự cố kỹ thuật hoặc hoàn thành báo cáo có thời hạn theo luật định;
   - Kiểm tra số giờ làm thêm lũy kế của người lao động, không phê duyệt đối với nhân sự đã chạm ngưỡng cảnh báo tháng;
   - Phê duyệt các ca làm thêm trong ngày làm việc bình thường (tối đa không quá 04 giờ/ngày);
   - Chuyển tiếp trình `COO` phê duyệt đối với các ca làm thêm vào ngày nghỉ hằng tuần hoặc ca làm thêm có quy mô từ 03 nhân sự trở lên.

3. **Giám đốc vận hành (`COO`):**
   - Phê duyệt kế hoạch làm thêm giờ vào ngày nghỉ hằng tuần hoặc ngày nghỉ lễ, tết;
   - Điều phối nguồn lực và giám sát hiệu quả công việc làm thêm trên toàn khối vận hành;
   - Kiểm soát tổng quỹ thời gian làm thêm của toàn công ty, bảo đảm sức khỏe và quyền lợi của người lao động.

4. **Tổng giám đốc (`CEO`):**
   - Phê duyệt danh mục các đợt làm thêm giờ đặc thù (nếu có áp dụng khung mức tối đa 300 giờ/năm theo quy định pháp luật);
   - Ký văn bản thông báo gửi cơ quan quản lý nhà nước về lao động cấp tỉnh khi tổ chức làm thêm giờ từ trên 200 giờ đến 300 giờ trong một năm;
   - Phê duyệt toàn bộ Bảng chấm công của kỳ theo Job `NB-35`.

5. **Bộ phận Nhân sự (`HR`):**
   - Thực hiện Job `NB-47`: Rà soát định kỳ vào ngày 20 hằng tháng số giờ làm thêm của từng người lao động so với mức tối đa tháng (40 giờ) và mức tối đa năm (200 giờ/300 giờ);
   - Cảnh báo tức thời cho `TL` khi nhân sự đạt 80% mức tối đa tháng (32 giờ);
   - Khóa chức năng phê duyệt trên hệ thống đối với nhân sự đã đạt mức tối đa 40 giờ trong tháng;
   - Tổng hợp dữ liệu làm thêm giờ hợp lệ vào Bảng chấm công `BM-09`;
   - Phối hợp với `KTV` áp đúng hệ số tiền lương làm thêm giờ tương ứng với từng loại ngày.

6. **Kế toán viên phụ trách lương và thuế (`KTV`):**
   - Tính toán tiền lương làm thêm giờ theo công thức và hệ số quy định tại [[07_Chinh_sach_cong_chuan_va_cham_cong|OBK-QCNS-07]] và [[OBK-SOP-NB-04_Cong_va_tien_luong_noi_bo|OBK-SOP-NB-04]];
   - Lập Bảng kê chi tiết phần thu nhập làm việc ban đêm, làm thêm giờ được miễn thuế thu nhập cá nhân theo đúng quy định tại Điều 26 Nghị định 253/2026/NĐ-CP;
   - Tách bạch phần thu nhập trả theo giờ bình thường (chịu thuế TNCN) và phần thu nhập trả cao hơn do làm thêm giờ (miễn thuế TNCN);
   - Lưu trữ Bảng kê cùng Bảng thanh toán tiền lương và Bảng chấm công phục vụ công tác thanh tra, kiểm tra thuế.

---

## 4. TRÌNH TỰ VÀ THỦ TỤC THỰC HIỆN CHI TIẾT

```
                                  TRÌNH TỰ QUẢN LÝ
                             LÀM THÊM GIỜ (OBK-SOP-NB-11)
                                          |
    [BƯỚC 1] Nhu cầu cấp bách phát sinh (nguy cơ không đáp ứng SLA, sự cố hệ thống)
        |
        v
    [BƯỚC 2] Đăng ký trước khi thực hiện (Phiếu đăng ký trên hệ thống)
        |    - Nộp trước tối thiểu 04 giờ (ngày thường) hoặc trước 17:00 thứ Sáu
        |    - Cam kết tự nguyện của người lao động
        v
    [BƯỚC 3] Thẩm định và phê duyệt theo thẩm quyền
        |    - Ca ngày thường <= 4 giờ: TL duyệt
        |    - Ca ngày nghỉ / kéo dài: COO duyệt
        |    - Kiểm tra giới hạn: <= 50% giờ bình thường/ngày, <= 40 giờ/tháng
        v
    [BƯỚC 4] Thực hiện và ghi nhận chấm công ca làm thêm
        |    - Chấm công vào/ra ca làm thêm trên hệ thống
        |    - Giờ tính lương = min (giờ chấm công thực tế, giờ đăng ký đã duyệt)
        v
    [BƯỚC 5] Rà soát mức tối đa luật định vào ngày 20 hằng tháng (Job NB-47)
        |    - Chặn vi phạm: không quá 40 giờ/tháng, không quá 200 giờ/năm
        v
    [BƯỚC 6] Đối soát Bảng chấm công BM-09 (Job NB-35) - Ngày 22 hằng tháng
        |    - CEO duyệt toàn bảng công
        v
    [BƯỚC 7] Tính lương và Lập Bảng kê miễn thuế TNCN (Job NB-36) - Từ ngày 23
             - Áp hệ số 150%, 200%, 300%
             - Lập Bảng kê thu nhập làm thêm giờ miễn thuế theo NĐ 253/2026/NĐ-CP
```

### 4.1. Bước 1: Đăng ký làm thêm giờ trước khi thực hiện

1. **Căn cứ phát sinh nhu cầu làm thêm:**
   Làm thêm giờ chỉ được xem xét áp dụng trong các trường hợp thật sự cần thiết sau:
   - Xử lý các công việc có hạn hoàn thành cố định theo luật định (hạn nộp hồ sơ thuế, báo cáo tài chính, báo cáo lao động) mà khối lượng phát sinh đột xuất không thể xử lý trong giờ làm việc bình thường;
   - Giải quyết sự cố kỹ thuật hạ tầng thông tin, sự cố bảo mật đe dọa trực tiếp đến hoạt động của công ty hoặc khách hàng;
   - Hồ sơ dịch vụ khách hàng có nguy cơ vi phạm cam kết SLA đã quy định trong hợp đồng dịch vụ.

2. **Thời hạn nộp Phiếu đăng ký:**
   - Đối với làm thêm giờ vào ngày làm việc bình thường: Nộp Phiếu đăng ký trước khi bắt đầu ca làm thêm tối thiểu 04 giờ (hoặc trước 16:00 của ngày làm việc);
   - Đối với làm thêm giờ vào ngày nghỉ hằng tuần (thứ Bảy, Chủ nhật): Nộp Phiếu đăng ký trước 17:00 của ngày thứ Sáu liền trước;
   - Đối với làm thêm giờ vào ngày nghỉ lễ, tết: Nộp Phiếu đăng ký trước ngày nghỉ lễ, tết tối thiểu 02 ngày làm việc.

3. **Nội dung bắt buộc trong Phiếu đăng ký:**
   - Lý do làm thêm giờ và tính cấp bách của công việc;
   - Danh sách cụ thể người lao động tham gia;
   - Thời gian dự kiến bắt đầu và thời gian dự kiến kết thúc;
   - Khối lượng công việc chi tiết và kết quả sản phẩm dự kiến đạt được;
   - Xác nhận đồng ý tham gia tự nguyện của từng người lao động trên hệ thống.

### 4.2. Bước 2: Thẩm định và phê duyệt của cấp quản lý

1. **Thẩm định tính cấp bách:**
   `TL` có trách nhiệm kiểm tra tính xác thực của lý do làm thêm. Nghiêm cấm phê duyệt làm thêm giờ cho các công việc tồn đọng do người lao động chây lười, giảm năng suất trong giờ làm việc bình thường.

2. **Kiểm soát giới hạn lũy kế trước khi duyệt:**
   Trước khi bấm phê duyệt, `TL` phải tra cứu số giờ làm thêm lũy kế của từng nhân sự:
   - Nếu nhân sự đã làm thêm từ 32 giờ trở lên trong tháng, `TL` phải cân nhắc bố trí nhân sự khác thay thế;
   - Nếu nhân sự đã làm thêm đủ 40 giờ trong tháng, hệ thống tự động khóa và `TL` tuyệt đối không được phê duyệt thêm.

3. **Phân cấp thẩm quyền phê duyệt:**
   - **Ca làm thêm từ 04 giờ trở xuống trong ngày làm việc bình thường:** `TL` trực tiếp xem xét và phê duyệt trên hệ thống;
   - **Ca làm thêm vào ngày nghỉ hằng tuần, ngày lễ tết, hoặc ca làm thêm có thời lượng trên 04 giờ:** `TL` gửi đề xuất, `COO` xem xét và phê duyệt chính thức.

### 4.3. Bước 3: Thực hiện làm việc và ghi nhận chấm công

1. **Kỷ luật chấm công ca làm thêm:**
   - Người lao động phải thực hiện chấm công vào ca và ra ca làm thêm trên hệ thống chấm công do công ty sử dụng;
   - Địa điểm chấm công phải trùng khớp với địa điểm làm việc được phê duyệt trong Phiếu đăng ký.

2. **Nguyên tắc xác định số giờ làm thêm được tính tiền lương:**
   - Số giờ làm thêm được thanh toán tiền lương là thời gian làm việc thực tế ghi nhận qua hệ thống chấm công, nhưng không vượt quá số giờ đã được cấp quản lý phê duyệt trong Phiếu đăng ký;
   - Trường hợp người lao động làm thêm quá giờ so với đơn đăng ký mà không có phê duyệt gia hạn từ `TL`, phần thời gian quá giờ đó không được công nhận là giờ làm thêm;
   - Trường hợp người lao động đến muộn hoặc về sớm so với đơn đăng ký, số giờ làm thêm chỉ tính theo thời gian thực tế có mặt làm việc.

3. **Nguyên tắc không bù trừ công:**
   - Giờ làm thêm giờ được tính độc lập và hưởng nguyên chế độ tiền lương làm thêm giờ theo quy định;
   - Nghiêm cấm việc dùng giờ làm thêm để bù trừ cho số giờ làm việc bình thường bị thiếu trong tháng theo đúng quy định tại [[07_Chinh_sach_cong_chuan_va_cham_cong|OBK-QCNS-07]] mục 3.3.

### 4.4. Bước 4: Kiểm soát giới hạn mức tối đa theo luật định (Job NB-47)

> [!note] CĂN CỨ GIỚI HẠN GIỜ LÀM THÊM
> Căn cứ Điều 107 Bộ luật Lao động và Điều 60 Nghị định 145/2020/NĐ-CP, việc tổ chức làm thêm giờ phải tuân thủ nghiêm ngặt các giới hạn mức tối đa theo luật định. Xem chi tiết tại [[CC-LD-69 Làm thêm không quá 50% giờ làm bình thường trong 01 ngày; theo tuần thì tổng không quá 12 giờ-ngày; KHÔNG QUÁ 40 GIỜ-THÁNG|CC-LD-69]], [[CC-LD-71 Không quá 300 giờ-năm với 5 nhóm ngành nghề|CC-LD-71]], [[CC-LD-72 Làm thêm theo khoản 3 phải THÔNG BÁO BẰNG VĂN BẢN cho cơ quan chuyên môn về lao động thuộc UBND cấp tỉnh|CC-LD-72]] và [[CC-LD-75 Tổng giờ làm thêm không quá 12 giờ-ngày khi làm thêm vào ngày nghỉ lễ tết và nghỉ hằng tuần|CC-LD-75]].

Định kỳ vào ngày 20 hằng tháng, `HR` thực hiện Job `NB-47` để kiểm soát các giới hạn mức tối đa sau:

1. **Giới hạn mức tối đa trong ngày:**
   - Số giờ làm thêm trong ngày làm việc bình thường không quá 50% số giờ làm việc bình thường trong 01 ngày (tối đa không quá 04 giờ làm thêm đối với ngày làm việc tiêu chuẩn 08 giờ);
   - Khi làm thêm vào ngày nghỉ hằng tuần hoặc ngày nghỉ lễ, tết, tổng số giờ làm việc trong ngày (gồm cả thời gian làm việc bình thường và làm thêm) không quá 12 giờ trong 01 ngày theo [[CC-LD-75 Tổng giờ làm thêm không quá 12 giờ-ngày khi làm thêm vào ngày nghỉ lễ tết và nghỉ hằng tuần|CC-LD-75]].

2. **Giới hạn mức tối đa trong tháng:**
   - Tổng số giờ làm thêm của mỗi người lao động không quá 40 giờ trong 01 tháng theo [[CC-LD-69 Làm thêm không quá 50% giờ làm bình thường trong 01 ngày; theo tuần thì tổng không quá 12 giờ-ngày; KHÔNG QUÁ 40 GIỜ-THÁNG|CC-LD-69]];
   - Khi dữ liệu chấm công chạm mốc 40 giờ trong tháng, `HR` có trách nhiệm thông báo bằng văn bản cho `TL` và người lao động để dừng bố trí làm thêm trong các ngày còn lại của tháng.

3. **Giới hạn mức tối đa trong năm:**
   - Tổng số giờ làm thêm của mỗi người lao động không quá 200 giờ trong 01 năm dương lịch;
   - Trường hợp công ty có nhu cầu huy động làm thêm từ trên 200 giờ đến 300 giờ trong 01 năm theo danh mục ngành nghề, công việc được pháp luật cho phép tại [[CC-LD-71 Không quá 300 giờ-năm với 5 nhóm ngành nghề|CC-LD-71]], `HR` phải tham mưu cho `CEO` ban hành quyết định và gửi văn bản thông báo cho cơ quan chuyên môn về lao động thuộc Ủy ban nhân dân cấp tỉnh theo đúng quy định tại [[CC-LD-72 Làm thêm theo khoản 3 phải THÔNG BÁO BẰNG VĂN BẢN cho cơ quan chuyên môn về lao động thuộc UBND cấp tỉnh|CC-LD-72]].

4. **Đối tượng được bảo vệ đặc biệt:**
   - Tuyệt đối không bố trí làm thêm giờ đối với lao động nữ mang thai từ tháng thứ 07 trở lên (hoặc từ tháng thứ 06 nếu làm việc ở vùng sâu, vùng xa, hải đảo);
   - Tuyệt đối không bố trí làm thêm giờ đối với lao động nữ đang nuôi con dưới 12 tháng tuổi, trừ trường hợp được người lao động đồng ý bằng văn bản theo [[CC-LD-206 Bảo vệ thai sản, cấm bố trí làm ban đêm, làm thêm giờ, đi công tác xa; cấm sa thải vì kết hôn, mang thai, nghỉ thai sản, nuôi con dưới 12 tháng|CC-LD-206]].

### 4.5. Bước 5: Đối soát bảng công (Job NB-35), tính tiền lương và lập Bảng kê miễn thuế TNCN (Job NB-36)

> [!note] CĂN CỨ TÍNH LƯƠNG VÀ MIỄN THUẾ TNCN
> Căn cứ Điều 98 Bộ luật Lao động, tiền lương làm thêm giờ được trả theo đơn giá tiền lương hoặc tiền lương thực trả theo công việc đang làm. Xem chi tiết tại [[CC-LD-76 Lương làm thêm, ngày thường ít nhất 150%; ngày nghỉ hằng tuần ít nhất 200%; ngày lễ tết ít nhất 300%|CC-LD-76]], [[CC-LD-78 Làm thêm vào ban đêm, ngoài khoản 1 và 2 còn được trả thêm 20%|CC-LD-78]] và [[CC-LD-79 Giờ làm ban đêm tính từ 22 giờ tới 06 giờ sáng hôm sau|CC-LD-79]].
> Căn cứ Điều 26 Nghị định 253/2026/NĐ-CP và Điều 4 khoản 8 Luật Thuế thu nhập cá nhân, tiền lương làm việc ban đêm, làm thêm giờ được miễn thuế TNCN đối với phần tiền lương trả cao hơn so với tiền lương làm việc trong giờ tiêu chuẩn.

1. **Tổng hợp và duyệt bảng công (Job `NB-35`):**
   - Ngày 20 hằng tháng: `HR` tổng hợp dữ liệu làm thêm giờ từ các đơn đã được duyệt và dữ liệu chấm công thực tế, đưa vào Bảng chấm công `BM-09`;
   - Ngày 22 hằng tháng: `CEO` xem xét, đối soát và phê duyệt toàn bộ Bảng chấm công của công ty theo Job `NB-35`.

2. **Tính tiền lương làm thêm giờ (Job `NB-36`):**
   Từ ngày 23 hằng tháng, `HR` và `KTV` căn cứ Bảng chấm công `BM-09` đã duyệt để tính tiền lương làm thêm giờ theo công thức quy định tại Điều 55 Nghị định 145/2020/NĐ-CP:
   - **Làm thêm vào ngày làm việc bình thường:** Tiền lương làm thêm giờ = Tiền lương giờ thực trả x 150% x Số giờ làm thêm;
   - **Làm thêm vào ngày nghỉ hằng tuần:** Tiền lương làm thêm giờ = Tiền lương giờ thực trả x 200% x Số giờ làm thêm;
   - **Làm thêm vào ngày nghỉ lễ, tết:** Tiền lương làm thêm giờ = Tiền lương giờ thực trả x 300% x Số giờ làm thêm (chưa bao gồm tiền lương của ngày nghỉ lễ, tết được hưởng nguyên lương theo quy định);
   - **Làm thêm vào ban đêm (từ 22:00 đến 06:00):** Được trả thêm ít nhất 30% tiền lương tính theo đơn giá tiền lương của ngày làm việc bình thường, và cộng thêm ít nhất 20% tiền lương tính theo đơn giá tiền lương của ca làm việc ban ngày của ngày tương ứng theo [[CC-LD-78 Làm thêm vào ban đêm, ngoài khoản 1 và 2 còn được trả thêm 20%|CC-LD-78]].

3. **Lập Bảng kê thu nhập làm việc ban đêm, làm thêm giờ được miễn thuế TNCN:**
   Căn cứ Điều 26 Nghị định 253/2026/NĐ-CP, để được miễn thuế thu nhập cá nhân đối với phần thu nhập trả cao hơn do làm thêm giờ, `KTV` có trách nhiệm lập Bảng kê chi tiết phản ánh các chỉ tiêu bắt buộc sau:
   - Họ và tên, mã số thuế của người lao động;
   - Số giờ làm thêm thực tế trong kỳ (tách theo: ngày thường, ngày nghỉ hằng tuần, ngày lễ tết, làm việc ban đêm);
   - Mức tiền lương giờ bình thường;
   - Tổng số tiền lương làm thêm giờ thực tế đã chi trả;
   - **Phần thu nhập chịu thuế TNCN:** Bằng tiền lương giờ bình thường nhân với số giờ làm thêm thực tế;
   - **Phần thu nhập được miễn thuế TNCN:** Là phần chênh lệch trả cao hơn (bằng tổng tiền lương làm thêm giờ thực tế trừ đi phần thu nhập tính theo giờ bình thường).
   - Ví dụ minh họa: Người lao động có tiền lương giờ là 100.000 đồng/giờ, làm thêm 10 giờ vào ngày nghỉ hằng tuần (hệ số 200%), nhận tổng tiền lương làm thêm là 2.000.000 đồng. Trong khoản này:
     + Phần thu nhập tính theo giờ bình thường: 10 giờ x 100.000 đồng = 1.000.000 đồng (tính vào thu nhập chịu thuế TNCN);
     + Phần thu nhập trả cao hơn do làm thêm giờ: 2.000.000 đồng - 1.000.000 đồng = 1.000.000 đồng (được miễn thuế TNCN).

4. **Điều kiện miễn thuế và chế tài khi vi phạm giới hạn:**
   - Việc miễn thuế TNCN chỉ áp dụng đối với số giờ làm thêm nằm trong giới hạn mức tối đa luật định (không quá 40 giờ/tháng và không quá 200 giờ/năm, hoặc 300 giờ/năm theo quy định);
   - Trường hợp công ty để phát sinh số giờ làm thêm vượt mức tối đa theo luật định, toàn bộ tiền lương của số giờ vượt mức tối đa sẽ bị tính vào thu nhập chịu thuế TNCN của người lao động theo Điều 26 khoản 3 Nghị định 253/2026/NĐ-CP, và công ty phải chịu trách nhiệm giải trình trước cơ quan thanh tra lao động và cơ quan thuế.

---

## 5. ĐIỂM KIỂM SOÁT BẮT BUỘC

| Mã kiểm soát | Khâu kiểm soát | Nội dung kiểm soát bắt buộc | Vai trò kiểm soát | Bằng chứng kiểm soát | Xử lý khi có vi phạm |
| --- | --- | --- | --- | --- | --- |
| KS-NB-T01 | Đăng ký trước khi thực hiện | Phiếu đăng ký phải được duyệt trước khi bắt đầu làm việc tối thiểu 04 giờ | `TL` / Hệ thống | Dấu thời gian duyệt trên hệ thống quản trị | Giờ làm việc không được công nhận là giờ làm thêm nếu không duyệt trước |
| KS-NB-T02 | Căn cứ tính cấp bách | Chỉ phê duyệt khi có nguy cơ trượt SLA, sự cố kỹ thuật hoặc báo cáo pháp lý | `TL` / `COO` | Nội dung giải trình trên Phiếu đăng ký | Hủy đơn và xử lý trách nhiệm quản lý nếu phê duyệt cho công việc thường nhật |
| KS-NB-T03 | Giới hạn ngày (50%) | Số giờ làm thêm trong ngày không vượt quá 50% giờ làm việc bình thường | Hệ thống / `TL` | Cảnh báo tự động trên hệ thống chấm công | Hệ thống từ chối đăng ký vượt quá 04 giờ/ngày thường |
| KS-NB-T04 | Giới hạn tháng (40 giờ) | Tổng số giờ làm thêm trong tháng không quá 40 giờ theo Job `NB-47` | `HR` | Bảng rà soát Job `NB-47` ngày 20 hằng tháng | Khóa chức năng đăng ký của nhân sự khi chạm mốc 40 giờ/tháng |
| KS-NB-T05 | Giới hạn năm (200/300 giờ) | Tổng số giờ làm thêm trong năm không quá 200 giờ (hoặc 300 giờ có thông báo) | `HR` | Sổ theo dõi lũy kế năm của từng nhân sự | Không phê duyệt thêm ca làm thêm; xử lý trách nhiệm nếu để xảy ra vi phạm |
| KS-NB-T06 | Bảng kê miễn thuế TNCN | Lập đầy đủ Bảng kê chi tiết theo Điều 26 Nghị định 253/2026/NĐ-CP | `KTV` | Bảng kê đính kèm Bảng lương mẫu 01-LĐTL | Không xác nhận miễn thuế nếu thiếu Bảng kê chi tiết chứng minh |

---

## 6. LỖI THƯỜNG GẶP VÀ BIỆN PHÁP XỬ LÝ

| Mã lỗi | Mô tả sai sót | Hậu quả phát sinh | Biện pháp ngăn chặn và xử lý |
| --- | --- | --- | --- |
| L-NB-07 | Tự ý làm việc ngoài giờ mà không có Phiếu đăng ký được duyệt trước | Gây tranh chấp lao động; không có căn cứ chi trả tiền lương làm thêm | Nghiêm cấm chi trả lương làm thêm giờ tự phát; `TL` nhắc nhở nhân sự tuân thủ quy trình |
| L-NB-08 | Bố trí nhân sự làm thêm quá 40 giờ trong tháng hoặc quá 200 giờ trong năm | Vi phạm quy định pháp luật lao động, bị xử phạt vi phạm hành chính | `HR` rà soát nghiêm ngặt ngày 20 hằng tháng; hệ thống tự động khóa đăng ký khi chạm mức tối đa |
| L-NB-09 | Lấy giờ làm thêm giờ để bù trừ vào giờ làm việc tiêu chuẩn bị thiếu | Vi phạm nguyên tắc tính công và tiền lương theo `OBK-QCNS-07` | Hệ thống tách riêng cột công chuẩn và cột làm thêm; tính trừ lương thời gian thiếu và trả riêng tiền làm thêm |
| L-NB-10 | Thiếu Bảng kê làm thêm giờ khi quyết toán thuế thu nhập cá nhân | Bị cơ quan thuế truy thu thuế TNCN phần miễn thuế và xử phạt kê khai sai | `KTV` bắt buộc lập và lưu trữ Bảng kê chi tiết cùng Bảng thanh toán tiền lương của từng kỳ |
| L-NB-11 | Bố trí lao động nữ mang thai từ tháng thứ 07 hoặc nuôi con dưới 12 tháng làm thêm | Vi phạm nghiêm trọng điều cấm của pháp luật lao động bảo vệ thai sản | Hệ thống tự động nhận diện hồ sơ nhân sự thuộc diện thai sản để chặn tạo đơn đăng ký làm thêm |
| L-NB-12 | Tính sai hệ số làm thêm giờ vào ban đêm của ngày nghỉ hằng tuần hoặc ngày lễ | Trả thiếu quyền lợi cho người lao động hoặc tính sai chi phí thuế | Áp dụng đúng công thức tại Điều 55 Nghị định 145/2020/NĐ-CP và kiểm soát chéo giữa `HR` và `KTV` |

---

## 7. CHỈ SỐ ĐO LƯỜNG

Hiệu quả thực hiện quy trình được đo lường định kỳ hằng tháng qua các chỉ số sau:

| Mã chỉ số | Tên chỉ số | Cách đo lường | Mục tiêu chuẩn | Tần suất đo |
| --- | --- | --- | --- | --- |
| M-NB-T01 | Tỷ lệ làm thêm có phê duyệt trước | Số giờ làm thêm có đơn duyệt trước / Tổng số giờ làm thêm thực tế | 100% | Hằng tháng |
| M-NB-T02 | Tỷ lệ vi phạm mức tối đa 40 giờ/tháng | Số người lao động có giờ làm thêm vượt quá 40 giờ trong một tháng | 0 người | Hằng tháng |
| M-NB-T03 | Tỷ lệ vi phạm mức tối đa 200 giờ/năm | Số người lao động có giờ làm thêm vượt quá 200 giờ trong một năm | 0 người | Hằng năm |
| M-NB-T04 | Tỷ lệ Bảng kê miễn thuế TNCN đầy đủ | Số kỳ lương có đầy đủ Bảng kê chi tiết theo Nghị định 253/2026/NĐ-CP | 100% | Hằng tháng |
| M-NB-T05 | Tỷ lệ sai sót khi tính tiền lương làm thêm | Số trường hợp khiếu nại về tiền lương làm thêm giờ được xác định là đúng | 0 vụ | Hằng tháng |
| M-NB-T06 | Tỷ lệ chấm công làm thêm giờ hợp lệ | Số ca làm thêm có dữ liệu vào/ra khớp với đơn đăng ký / Tổng số ca | 100% | Hằng tháng |

---

## 8. HỒ SƠ VÀ LƯU TRỮ

| Tên tài liệu / Hồ sơ | Định dạng | Trách nhiệm lưu trữ | Thời hạn lưu trữ |
| --- | --- | --- | --- |
| Phiếu đăng ký làm thêm giờ đã được duyệt | Dữ liệu điện tử trên hệ thống | `HR` bộ phận | Tối thiểu 03 năm |
| Dữ liệu chấm công ca làm thêm (giờ vào, giờ ra) | Dữ liệu điện tử trên hệ thống | `HR` bộ phận | Tối thiểu 03 năm |
| Bảng rà soát giới hạn giờ làm thêm tháng và năm (Job `NB-47`) | Bản điện tử có xác nhận | `HR` bộ phận | Tối thiểu 03 năm |
| Bảng chấm công `BM-09` đã duyệt chính thức (Job `NB-35`) | Bản điện tử có chữ ký | `HR`, `KTV` | Tối thiểu 05 năm |
| Bảng kê thu nhập làm việc ban đêm, làm thêm giờ miễn thuế TNCN | Bản điện tử và bản in lưu kèm bảng lương | `KTV` phụ trách thuế | Theo quy định lưu trữ hồ sơ thuế (tối thiểu 10 năm) |
| Văn bản thông báo gửi cơ quan lao động cấp tỉnh (nếu có ca 300 giờ) | Bản giấy có dấu xác nhận tiếp nhận | `HR` bộ phận | Vĩnh viễn |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 27/09/2026 | R.1.0.0 | Ban hành bản đầu quy trình đăng ký và quản lý làm thêm giờ, kiểm soát mức tối đa luật định và lập Bảng kê miễn thuế thu nhập cá nhân |
