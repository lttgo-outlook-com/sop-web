---
title: "OBK-SOP-NB-03. Quản lý tiền"
code: "OBK-SOP-NB-03"
type: "sop"
folder: "02_NoiBo"
level: "Cấp 3, hướng dẫn nghiệp vụ"
version: "R.2.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: "OBK-SOP-NB-00 Chuẩn vận hành nội bộ"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
aliases:
  - OBK-SOP-NB-03
tags:
  - loai/sop
  - cap/3
---
# OBK-SOP-NB-03. Quản lý tiền

## Thông tin phiên bản

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-SOP-NB-03 |
| Tên tài liệu | Quy trình quản lý quỹ tiền mặt, tài khoản ngân hàng và dòng tiền |
| Cấp tài liệu | Cấp 3, hướng dẫn nghiệp vụ. Thi hành Chương 7 của [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Quy chế tài chính nội bộ |
| Phiên bản | R.2.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Mốc pháp luật áp dụng | Pháp luật có hiệu lực tại ngày 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | [[06_OBK-SOP-NB-00_Chuan_van_hanh_noi_bo\|OBK-SOP-NB-00]] Chuẩn vận hành nội bộ |
| Bộ tài liệu | OBK-SOP-NB, Sổ tay quy trình nội bộ oBacker |
| Tài liệu song hành | [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mua sắm và thanh toán;<br>[[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]] thu tiền và công nợ |
| Lần rà soát tiếp theo | Không quá 12 tháng kể từ ngày ban hành;<br>rà soát đột xuất khi đổi nhân sự giữ quyền trên ngân hàng điện tử |
| Phạm vi phát hành | Nội bộ oBacker. Không phát hành cho khách hàng. |

---

## CẢNH BÁO MỞ ĐẦU

> [!note] PHẠM VI QUẢN LÝ TIỀN NỘI BỘ
> Quy trình này quy định việc quản lý quỹ tiền mặt, tài khoản ngân hàng, phân quyền hệ thống ngân hàng điện tử và lập kế hoạch dòng tiền. Quy trình mua sắm và phê duyệt chi thực hiện theo [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]]; quy trình thu tiền và quản lý công nợ thực hiện theo [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu|OBK-SOP-NB-02]].

> [!note] NGUYÊN TẮC PHÂN ĐỊNH VỚI CHU TRÌNH CHI
> Quy trình này tập trung vào thẩm quyền, quyền hạn người dùng và cơ chế kiểm soát an toàn trên hệ thống ngân hàng điện tử. Trình tự luân chuyển chứng từ và phê duyệt từng khoản chi cụ thể tuân thủ OBK-SOP-NB-01.

> [!note] TRỌNG TÂM KIỂM SOÁT ĐỐI CHIẾU ĐỘC LẬP
> Người tạo lệnh và người xác nhận lệnh trên hệ thống ngân hàng điện tử bắt buộc phải là hai người độc lập. Lịch rà soát phân quyền định kỳ hằng quý và đột xuất khi thay đổi nhân sự bảo đảm nguyên tắc phân tách kiểm soát không bị vi phạm.

---

## 1. Mục đích

Đặt một trình tự duy nhất cho việc giữ tiền, giữ quyền trên tài khoản ngân hàng, và biết trước dòng tiền; sao cho ba việc sau đều đạt: không ai một mình chuyển được tiền ra ngoài, mọi đồng tiền trên sổ khớp với tiền thật, và oBacker biết trước 03 tháng là có đủ tiền hay không.

## 2. Phạm vi áp dụng

**Trong phạm vi:** quỹ tiền mặt tại từng văn phòng; phiếu thu và phiếu chi; kiểm quỹ định kỳ và đột xuất; mở, đóng và thay đổi tài khoản ngân hàng; Danh mục tài khoản; phân quyền trên hệ thống ngân hàng điện tử và việc rà soát phân quyền; đối chiếu sao kê với sổ kế toán; kế hoạch dòng tiền; xử lý chênh lệch quỹ và chênh lệch sao kê.

**Ngoài phạm vi:** việc phê duyệt một khoản chi và hành trình của một lệnh chi, thuộc [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo|OBK-SOP-NB-01]]; việc xuất hóa đơn và theo dõi công nợ, thuộc [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu|OBK-SOP-NB-02]]; việc khóa sổ và lập báo cáo tài chính, thuộc [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan|OBK-QCTC-03]] và Handbook Kế toán.

## 3. Vai trò và trách nhiệm

| Ký hiệu | Việc trong chu trình này | Việc KHÔNG được làm |
| --- | --- | --- |
| `TQ` | Giữ quỹ tiền mặt;<br>nhận và xuất tiền mặt;<br>ký ô Thủ quỹ trên phiếu thu và phiếu chi;<br>giữ sổ quỹ;<br>kiểm kê tồn quỹ thực tế | **Không hạch toán sổ.** Không là người quản lý điều hành. Không đối chiếu sao kê |
| `KTV` | Lập phiếu thu và phiếu chi;<br>hạch toán;<br>lập Danh mục tài khoản;<br>lập kế hoạch dòng tiền;<br>lập báo cáo thực hiện ngân sách;<br>**TẠO** lệnh trên ngân hàng điện tử | **Không đối chiếu sao kê.** Không là `TQ`. Không xác nhận lệnh mình đã tạo |
| `KTT` | Soát Danh mục tài khoản;<br>**TẠO** lệnh trên ngân hàng điện tử;<br>ký chứng từ chi tiền;<br>thực hiện kiểm quỹ đột xuất;<br>ký biên bản kiểm quỹ định kỳ | **Không đối chiếu sao kê.** Không là `TQ`. Không xác nhận lệnh mình đã tạo. Không rà soát phân quyền ngân hàng |
| `AD-KT` | **Đối chiếu sao kê ngân hàng với sổ kế toán**, hai cấp | **Không có quyền nào trên ngân hàng điện tử.** Không hạch toán sổ nội bộ. Không là `TQ` |
| `TGĐ` | **XÁC NHẬN** lệnh trên ngân hàng điện tử;<br>duyệt Danh mục tài khoản;<br>mở và đóng tài khoản;<br>**rà soát phân quyền ngân hàng hằng quý**;<br>duyệt kết quả kiểm quỹ và kết quả đối chiếu;<br>chỉ định người kiểm quỹ đột xuất | Không tạo lệnh mình sẽ xác nhận. Không là `TQ`, cũng không làm kế toán |
| `Chủ tịch HĐQT` | **XÁC NHẬN** lệnh trên ngân hàng điện tử | Không tạo lệnh mình sẽ xác nhận |
| `HĐQT` | Duyệt kết quả rà soát phân quyền ngân hàng;<br>phê duyệt ngân sách năm |  |

## 4. Đầu vào bắt buộc

| # | Đầu vào | Nguồn | Thiếu thì sao |
| --- | --- | --- | --- |
| 1 | Danh mục tài khoản ngân hàng đang hoạt động, mỗi tài khoản ghi rõ mục đích | `KTV` lập, `KTT` soát, `TGĐ` duyệt | Không biết phải đối chiếu bao nhiêu tài khoản, nên chốt `KS-NB-M3` không kiểm được |
| 2 | Danh sách người dùng và quyền hiện hành trên hệ thống ngân hàng điện tử | Lấy từ hệ thống ngân hàng | Không rà soát được phân quyền, tức điểm kiểm soát quan trọng nhất không đo được |
| 3 | Sao kê **tất cả** tài khoản trong Danh mục, theo kỳ | Ngân hàng | Đối chiếu thiếu tài khoản, và tài khoản ít giao dịch là chỗ dễ bị bỏ nhất |
| 4 | Sổ kế toán kỳ tương ứng | `[PHẦN MỀM KẾ TOÁN]` | Không có bên nào để đối chiếu vào |
| 5 | Văn bản chỉ định người giữ quỹ và người dự phòng, cho từng văn phòng | `TGĐ` | Không nhập quỹ và không xuất quỹ tiền mặt được;<br>xem mục 5.2 |
| 6 | Công nợ phải thu, công nợ phải trả, và ngân sách năm đã duyệt | [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]], [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]], `HĐQT` | Không lập được kế hoạch dòng tiền |

## 5. Các bước thực hiện

### 5.1. Lịch trình quản lý tiền theo chu kỳ

| Mã | Việc | Tần suất | Người làm | Người duyệt kết quả | Đầu ra |
| --- | --- | --- | --- | --- | --- |
| `M1` | Lập kế hoạch dòng tiền 03 tháng tới | Hằng tháng, trong 05 ngày làm việc đầu tháng | `KTV` | `KTT` | Bảng kế hoạch dòng tiền |
| `M1a` | Báo cáo thực hiện ngân sách, so thực hiện với ngân sách theo từng dòng | Hằng tháng, trong 05 ngày làm việc đầu tháng | `KTV` | `TL` và `TGĐ` nhận | Báo cáo thực hiện ngân sách |
| `M2` | Lập phiếu thu, phiếu chi cho mọi lần nhập quỹ và xuất quỹ;<br>giữ sổ quỹ trong mức tồn quỹ tối đa | Mỗi lần tiền mặt vào hoặc ra quỹ, ngay tại thời điểm đó | `KTV` lập phiếu, `TQ` nhận và xuất tiền | `KTT` | Phiếu `BM-PT` hoặc `BM-PC` đủ chữ ký theo chức danh, số liên tục trong kỳ |
| `M3` | Kiểm quỹ ĐỊNH KỲ | Cuối mỗi tháng | `TQ`, `KTV` và `KTT` cùng làm | `TGĐ` | Biên bản kiểm quỹ, ba chữ ký |
| `M3a` | Kiểm quỹ ĐỘT XUẤT, không báo trước | Tối thiểu 02 lần một năm | `KTT` hoặc người `TGĐ` chỉ định | `TGĐ` | Biên bản kiểm quỹ đột xuất |
| `M4` | Tạo lệnh chuyển tiền, và xác nhận lệnh | Theo chu kỳ chi | `KTV` hoặc `KTT` tạo;<br>`TGĐ` hoặc `Chủ tịch HĐQT` xác nhận | Đã duyệt ở bước duyệt chi của [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] | Ủy nhiệm chi hoặc bằng chứng giao dịch |
| `M5` | Đối chiếu sao kê với sổ, **cấp nhanh** | **Mỗi 02 tuần**, xong trong ngày làm việc đầu tiên của kỳ sau | `AD-KT` | `TGĐ` | Bảng đối chiếu nhanh |
| `M5a` | Đối chiếu sao kê với sổ, **cấp đầy đủ**, toàn bộ tài khoản | Hằng tháng, xong trong 05 ngày làm việc đầu tháng sau | `AD-KT` | `TGĐ` | Bảng đối chiếu đầy đủ từng tài khoản kèm sao kê |
| `M6` | Rà soát phân quyền lập và xác nhận trên ngân hàng điện tử | **Hằng quý, và ngay trong ngày** khi có nhân sự nghỉ việc hoặc thay đổi vai trò | `TGĐ` | `HĐQT` | Bảng rà soát;<br>đề xuất điều chỉnh nếu lệch |
| `M7` | Mở, đóng, thay đổi tài khoản ngân hàng | Khi phát sinh | `KTV` lập đề xuất, `KTT` soát | `TGĐ` quyết | Quyết định và hồ sơ ngân hàng;<br>Danh mục tài khoản cập nhật |

> [!note] CÁC ĐIỂM TRỌNG YẾU TRONG LỊCH TRÌNH VẬN HÀNH
>
> **Rà soát phân quyền ngân hàng (M6):** Ngoài mốc định kỳ hằng quý, mốc rà soát bắt buộc là **ngay trong ngày làm việc cuối cùng** khi có nhân sự nghỉ việc hoặc thay đổi vai trò. Việc thu hồi quyền ngân hàng điện tử phải thực hiện tức thời để ngăn chặn rủi ro thất thoát tài sản.
>
> **Thẩm quyền rà soát (M6):** `TGĐ` trực tiếp thực hiện rà soát và `HĐQT` phê duyệt kết quả nhằm bảo đảm tính độc lập với các nhân sự trực tiếp tạo và xác nhận lệnh chuyển tiền.
>
> **Đối chiếu sao kê hai cấp (M5, M5a):** Cấp đối chiếu nhanh 02 tuần một lần nhằm phát hiện sớm các giao dịch bất thường trong thời hiệu tra soát; cấp đối chiếu đầy đủ hằng tháng phục vụ chốt số liệu khóa sổ kế toán.
>
> **Quản lý quỹ tiền mặt (M2):** Chỉ thực hiện khi có nhân sự được phân công vai trò `TQ` theo quy định.

### 5.2. QUỸ TIỀN MẶT

#### 5.2.1. Hạn mức và định mức quỹ tiền mặt

> [!note] CĂN CỨ HẠN MỨC TIỀN MẶT THEO QUY CHẾ TÀI CHÍNH
> Mức tồn quỹ tối đa cuối ngày tại mỗi văn phòng, hạn mức chi tiền mặt tối đa cho một lần chi và các trường hợp bắt buộc thanh toán không dùng tiền mặt thực hiện theo OBK-QCTC-01 Điều 32.

Nguyên tắc quản lý hạn mức tiền mặt:

- **Vượt mức tồn quỹ tối đa cuối ngày** thì nộp vào tài khoản ngân hàng trong ngày làm việc tiếp theo.
- **Chi vượt mức tối đa một lần chi bằng tiền mặt** chỉ do `TGĐ` phê duyệt cho từng trường hợp, và phải có kết luận của `KTT` về hệ quả thuế.
- **Không được chia một khoản chi thành nhiều lần** để mỗi lần dưới mức tối đa. `KTV` kiểm bằng cách đối chiếu theo cặp nhà cung cấp và ngày, theo OBK-QCTC-01 mục 32.3.

#### 5.2.2. Trách nhiệm của Thủ quỹ và điều kiện phân công

OBK-QCTC-01 mục 33.1 đòi **mỗi văn phòng có một người giữ quỹ được chỉ định bằng văn bản; không đặt người dự phòng** theo quyết định của CEO ngày 07/10/2026. oBacker có hai văn phòng, Đà Nẵng và Thành phố Hồ Chí Minh; nên vai trò `TQ` do **hai người** giữ, tên ghi tại bảng ánh xạ nhân sự OBK-QCTC-02-PL-D.

Ba điều cấm khi chỉ định, và cả ba phải kiểm cho từng người:

| # | Điều cấm | Căn cứ |
| --- | --- | --- |
| 1 | `TQ` không được là người quản lý, điều hành. Loại `TGĐ`, `COO`, `CMO`, thành viên `HĐQT` | `[Luật Kế toán 41/VBHN-VPQH Đ.13 k.7]` |
| 2 | `TQ` không được là người làm kế toán. Loại `KTT` và `KTV` | `[Luật Kế toán 41/VBHN-VPQH Đ.52 k.4]` |
| 3 | `TQ` không được là người đối chiếu sao kê. Loại `AD-KT` | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 47.3a, kiểm soát bù số 1 |

Mọi giao dịch thu, chi tiền mặt phải có đầy đủ chứng từ mẫu 01-TT, 02-TT có chữ ký của Thủ quỹ. Khi chưa đủ điều kiện lập chứng từ quỹ tiền mặt, các khoản chi thực hiện qua chuyển khoản ngân hàng; các khoản thu nộp trực tiếp vào tài khoản ngân hàng trong ngày.

#### 5.2.3. Kiểm quỹ

| | Định kỳ, dòng `M3` | Đột xuất, dòng `M3a` |
| --- | --- | --- |
| Tần suất | Cuối mỗi tháng | Tối thiểu 02 lần một năm |
| Báo trước | Có, theo lịch | **không báo trước** |
| Người làm | `TQ`, `KTV` và `KTT` | `KTT`, hoặc người `TGĐ` chỉ định |
| Chữ ký trên biên bản | Ba, gồm `TQ`, `KTV` và `KTT` | Người làm, và `TQ` |
| Người duyệt kết quả | `TGĐ` | `TGĐ` |

> [!note] NGUYÊN TẮC KIỂM TRA QUỸ ĐỘT XUẤT
> Thời điểm kiểm tra đột xuất do `TGĐ` hoặc `KTT` quyết định không báo trước cho Thủ quỹ nhằm bảo đảm tính khách quan và hiệu lực kiểm soát.

Chênh lệch phát hiện ở bất kỳ lượt kiểm nào thì mở một sự cố theo mục 5.7. Không được để chênh lệch sang kỳ sau: điều luật đòi chênh lệch được xác định nguyên nhân và phản ánh vào sổ **trước khi lập báo cáo tài chính** `[Luật Kế toán 41/VBHN-VPQH Đ.40 k.3]`.

### 5.3. TÀI KHOẢN NGÂN HÀNG

#### 5.3.1. Danh mục tài khoản

Số tài khoản đang hoạt động và cách duyệt Danh mục: OBK-QCTC-01 mục 34.2. Mở thêm tài khoản ngoài số đó phải có lý do bằng văn bản.

Danh mục do `KTV` lập, `KTT` soát, **`TGĐ` duyệt**. Việc duyệt thuộc `TGĐ` vì cả `KTV` và `KTT` đều giữ quyền tạo lệnh, nên danh mục do hai người tạo lệnh tự duyệt là không đạt.

**Danh mục tài khoản là đầu vào của chốt `KS-NB-M3`:** không có danh mục thì không biết phải đối chiếu bao nhiêu tài khoản, nên không kiểm được là đã đối chiếu đủ hay chưa.

#### 5.3.2. Các hành vi nghiêm cấm trong quản lý tài khoản ngân hàng

- **Không dùng tài khoản cá nhân của bất kỳ nhân sự nào** để thu tiền của khách hoặc để chi cho hoạt động của công ty, theo OBK-QCTC-01 mục 34.4. Ngoại lệ duy nhất là cơ chế ủy quyền chi hộ tại Điều 19 của quy chế, trong đó người lao động dùng phương tiện thanh toán cá nhân rồi được oBacker hoàn lại bằng chuyển khoản.
- **Không ai được thực hiện đồng thời hai thao tác tạo và xác nhận cho cùng một lệnh**, theo OBK-QCTC-01 mục 35.1a.

### 5.4. ĐỐI CHIẾU SAO KÊ VỚI SỔ

#### 5.4.1. Trình tự đối chiếu sao kê hai cấp

| Cấp | Phạm vi | Tần suất | Mục đích |
| --- | --- | --- | --- |
| Nhanh, dòng `M5` | Số dư và các giao dịch phát sinh trong kỳ hai tuần | Mỗi 02 tuần, xong trong ngày làm việc đầu tiên của kỳ sau | Phát hiện sớm giao dịch lạ. Đây là cấp bắt được gian lận trong khi còn thời hiệu |
| Đầy đủ, dòng `M5a` | Toàn bộ tài khoản trong Danh mục, khớp về sổ kế toán | Hằng tháng, xong trong 05 ngày làm việc đầu tháng sau | Chốt số liệu để lập báo cáo |

Cả hai cấp do `AD-KT` làm và `TGĐ` duyệt. Con số hai tần suất ĐẶT tại [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]] mục 34.3.

#### 5.4.2. Nội dung kiểm tra trong lượt đối chiếu sao kê

Đối chiếu không chỉ là khớp số dư. Mỗi lượt phải trả lời ba câu:

1. **Số dư từng tài khoản khớp sổ hay không.**
2. **Có giao dịch phát sinh trên sao kê ngân hàng nhưng chưa ghi sổ kế toán:** phát hiện các lệnh chi chưa qua phê duyệt hoặc sai lệch tài khoản người nhận.
3. **Có khoản tiền nào về mà chưa khớp một hóa đơn nào.** Đây là chốt `KS-NB-T5` của [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu|OBK-SOP-NB-02]], chạy trên lượt đối chiếu nhanh này.

#### 5.4.3. Chênh lệch thì báo ai

Chênh lệch chưa giải thích được phải báo **`TGĐ` ngay trong ngày phát hiện**, không để sang kỳ sau, và **không báo qua `KTV` hoặc `KTT`** vì hai người đó là người tạo lệnh. `KTT` được nhận bản sao để xử phần kế toán, nhưng `KTT` không có quyền yêu cầu sửa bảng đối chiếu.

Mở một sự cố theo mục 5.7.

### 5.5. RÀ SOÁT PHÂN QUYỀN NGÂN HÀNG ĐIỆN TỬ

Đây là dòng `M6`, và là điểm kiểm soát nặng nhất của mảng nội bộ.

#### 5.5.1. Trình tự rà soát phân quyền ngân hàng điện tử

1. **Lấy danh sách người dùng và quyền hiện hành TỪ HỆ THỐNG NGÂN HÀNG**, không lấy từ danh sách nội bộ. Danh sách nội bộ là điều oBacker tưởng; danh sách của ngân hàng là điều thật.
2. **So với cơ chế đã chốt tại OBK-QCTC-01 mục 35.1a:** ai được TẠO lệnh, ai được XÁC NHẬN lệnh. Người ngoài hai nhóm đó mà có quyền là một điểm lệch phải xử trong ngày.
3. **Kiểm không ai giữ cả hai thao tác.** Một người có cả quyền tạo và quyền xác nhận là chốt tách quyền đã mất, dù người đó chưa dùng.
4. **Kiểm người đã nghỉ việc hoặc đã đổi vai trò không còn quyền nào.** Đây là điểm lệch hay gặp nhất, vì việc thu hồi quyền trên ngân hàng không nằm trong quy trình nghỉ việc của nhân sự.

#### 5.5.2. Ai làm, ai duyệt

`TGĐ` thực hiện rà soát, `HĐQT` duyệt kết quả rà soát kèm bản gốc danh sách người dùng và phân quyền lấy trực tiếp từ hệ thống ngân hàng điện tử.

### 5.6. KẾ HOẠCH DÒNG TIỀN

Dòng `M1`. `KTV` lập bảng 03 tháng tới, cập nhật hằng tháng trong 05 ngày làm việc đầu tháng, `KTT` soát.

Ba đầu vào, và cả ba đến từ hai văn bản kia:

| Đầu vào | Từ đâu |
| --- | --- |
| Tiền sẽ về: công nợ phải thu theo ngày đến hạn, và hợp đồng đã ký chưa xuất hóa đơn | [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]] mục 5.5.1 bảng tuổi nợ |
| Tiền sẽ ra: công nợ phải trả, các khoản định kỳ, hợp đồng đã ký chưa tới đợt trả | [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 5.11 và các hồ sơ ở trạng thái đã duyệt chờ chi |
| Ngân sách năm đã duyệt, và thực hiện tới kỳ | [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 22;<br>dòng `M1a` |

> [!note] VAI TRÒ TỔNG HỢP CỦA KẾ HOẠCH DÒNG TIỀN
> Kế hoạch dòng tiền phản ánh mối quan hệ đối ứng giữa các chu trình Thu, Chi và Ngân sách. Mọi sai lệch giữa số liệu kế hoạch dòng tiền và số liệu công nợ phải thu, phải trả thực tế phải được xác minh nguyên nhân và điều chỉnh trước khi trình KTT phê duyệt.

### 5.7. Quy trình xử lý sự cố chênh lệch tiền

Một sự cố chênh lệch mở ra khi tiền thật không khớp sổ, từ một trong hai nguồn: kiểm quỹ, hoặc đối chiếu sao kê.

#### 5.7.1. Bảng tra trạng thái

| Sự cố đang ở | Nghĩa là | Ai đang giữ | Cần gì để đi tiếp |
| --- | --- | --- | --- |
| **Mới mở** | Đã phát hiện chênh lệch, chưa biết nguyên nhân | Người phát hiện: `AD-KT` hoặc người kiểm quỹ | Báo `TGĐ` **ngay trong ngày phát hiện** |
| **Đang tìm nguyên nhân** | `TGĐ` đã biết, đang truy | Người `TGĐ` chỉ định. **không giao cho người tạo lệnh của khoản đang xét** | Kết luận nguyên nhân bằng văn bản |
| **Đã có nguyên nhân, chờ xử kế toán** | Biết vì sao lệch, chưa phản ánh vào sổ | `KTT` | Bút toán điều chỉnh, hoặc bút toán ghi nhận thiếu hụt |
| **Đã có nguyên nhân, chờ xử trách nhiệm** | Lệch do lỗi của một người | `TGĐ` | Xử theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 49 |
| **Đã đóng** | Đã phản ánh vào sổ, và đã xử trách nhiệm nếu có | Đóng | |
| **Chuyển thành nghi gian lận** | Dấu hiệu không phải sai sót | `TGĐ`, và `HĐQT` được báo | Xử theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 49;<br>mọi lệnh chi liên quan dừng |

> [!note] NGUYÊN TẮC XỬ LÝ SỰ CỐ CHÊNH LỆCH TIỀN
> Mọi khoản chênh lệch tiền phải được xác định nguyên nhân và phản ánh vào sổ kế toán trước thời điểm lập báo cáo tài chính theo `[Luật Kế toán 41/VBHN-VPQH Đ.40 k.3]`. Tuyệt đối không để sự cố chênh lệch tồn đọng sang kỳ sau. Đồng thời, nhân sự được giao xác minh nguyên nhân phải độc lập với người đã tạo lệnh thanh toán đối với giao dịch đang kiểm tra nhằm bảo đảm tính khách quan và kiểm soát nội bộ.

## 6. Điểm kiểm soát bắt buộc

| Mã | Chốt | Tần suất | Ai kiểm | Ai duyệt kết quả |
| --- | --- | --- | --- | --- |
| `KS-NB-M1` | Không chi tiền khi chưa có chứng từ chứng minh nghĩa vụ trả tiền, và chứng từ chi tiền đã có người có thẩm quyền duyệt chi cùng người phụ trách kế toán ký trước khi thực hiện `[Luật Kế toán 41/VBHN-VPQH Đ.19 k.3]` | Mỗi lệnh | `KTT` | `TGĐ` |
| `KS-NB-M2` | Người tạo lệnh khác người xác nhận lệnh;<br>không ai giữ cả hai thao tác;<br>người đã nghỉ việc không còn quyền nào | Hằng quý, và ngay trong ngày khi đổi nhân sự | `TGĐ` | `HĐQT` |
| `KS-NB-M3` | **Mọi** tài khoản trong Danh mục đều được đối chiếu, không bỏ tài khoản nào, kể cả tài khoản ít giao dịch | Mỗi kỳ đối chiếu đầy đủ | `AD-KT` | `TGĐ` |
| `KS-NB-M4` | Mọi lần nhập quỹ và xuất quỹ đều có phiếu thu hoặc phiếu chi đủ chữ ký theo chức danh, lập ngay tại thời điểm đó, số liên tục trong kỳ | Mỗi lần | `KTT` | `TGĐ` |
| `KS-NB-M5` | Không có sự cố chênh lệch nào còn mở tại thời điểm khóa sổ | Mỗi lần khóa sổ | `KTT` | `TGĐ` |
| `KS-NB-M6` | Người tìm nguyên nhân chênh lệch không phải người tạo lệnh của khoản đang xét | Mỗi sự cố | `TGĐ` | `HĐQT` với sự cố chuyển thành nghi gian lận |

> [!note] CÁC ĐIỂM KIỂM SOÁT BỔ SUNG CỦA CHU TRÌNH QUẢN LÝ TIỀN
> Các điểm kiểm soát `KS-NB-M4`, `KS-NB-M5` và `KS-NB-M6` bổ sung yêu cầu bắt buộc đối với chứng từ thu chi tiền mặt, đóng sự cố chênh lệch trước khi khóa sổ và nguyên tắc độc lập khi điều tra chênh lệch nhằm hoàn thiện khung kiểm soát nội bộ.

## 7. Lỗi thường gặp và cách xử lý

| # | Lỗi thường gặp | Hậu quả | Cách xử |
| --- | --- | --- | --- |
| 1 | Người nghỉ việc còn quyền trên ngân hàng điện tử | Một người ngoài công ty vẫn tạo hoặc xác nhận được lệnh | Mốc rà soát thứ hai của dòng `M6`: rà soát ngay trong ngày khi đổi nhân sự, không đợi cuối quý |
| 2 | Mượn tài khoản người dùng của nhau khi một người đi vắng | Tách quyền mất tác dụng hoàn toàn, và dấu vết trên hệ thống chỉ ra sai người | Mỗi thao tác có hai người giữ nên không phát sinh nhu cầu mượn;<br>xem [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 35.1a |
| 3 | Kiểm quỹ đột xuất luôn rơi vào cùng thời điểm mỗi năm | Không còn là đột xuất, nên không bắt được gì | `TGĐ` hoặc `KTT` chọn thời điểm, không ghi vào lịch mà `TQ` xem được |
| 4 | Bỏ tài khoản ít giao dịch khỏi lượt đối chiếu | Tài khoản ít giao dịch là chỗ dễ ẩn giao dịch lạ nhất | Chốt `KS-NB-M3`, đối chiếu theo Danh mục tài khoản chứ không theo danh sách tài khoản hay dùng |
| 5 | Chênh lệch nhỏ nên để sang kỳ sau cho gọn | Vi phạm `Đ.40 k.3`, và tới lúc lập báo cáo thì không còn ai nhớ nguyên nhân | Chốt `KS-NB-M5`;<br>mọi sự cố phải đóng trước khi khóa sổ |
| 6 | Giao việc truy chênh lệch cho `KTV` vì `KTV` biết rõ giao dịch nhất | Người tạo lệnh đi điều tra chính lệnh mình tạo | Chốt `KS-NB-M6`;<br>`TGĐ` chỉ định người khác |
| 7 | Chia một khoản chi thành nhiều lần dưới mức tối đa để chi bằng tiền mặt | Mất quyền tính vào chi phí được trừ | `KTV` đối chiếu theo cặp nhà cung cấp và ngày, theo [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] mục 32.3 |
| 8 | Lấy danh sách phân quyền từ sổ nội bộ thay vì từ hệ thống ngân hàng | Rà soát đúng điều oBacker tưởng, không đúng điều thật | Việc số 1 của mục 5.5.1 |
| 9 | Kế hoạch dòng tiền làm tròn cho khớp ngân sách | Mất một phép kiểm chéo rẻ nhất giữa ba chu trình | Lệch thì tìm nguyên nhân, xem ghi chú tại mục 5.6 |

## 8. Đầu ra và nơi lưu

| Đầu ra | Người tạo | Tần suất | Nơi lưu |
| --- | --- | --- | --- |
| Bảng kế hoạch dòng tiền 03 tháng | `KTV` | Hằng tháng | Thư mục tài chính theo kỳ |
| Báo cáo thực hiện ngân sách | `KTV` | Hằng tháng | Thư mục tài chính theo kỳ;<br>gửi `TL` và `TGĐ` |
| Phiếu thu `BM-PT`, phiếu chi `BM-PC` | `KTV` lập, `TQ` ký | Mỗi lần | `[PHẦN MỀM KẾ TOÁN]`. Chưa dùng, xem mục 5.2.2 |
| Sổ quỹ tiền mặt | `TQ` | Liên tục | Tại văn phòng giữ quỹ. Chưa dùng |
| Biên bản kiểm quỹ định kỳ, ba chữ ký | `KTV` lập | Hằng tháng | Thư mục kiểm quỹ. Chưa dùng |
| Biên bản kiểm quỹ đột xuất | Người `TGĐ` chỉ định | Tối thiểu 02 lần một năm | Thư mục kiểm quỹ. Chưa dùng |
| Bảng đối chiếu nhanh | `AD-KT` | Mỗi 02 tuần | Thư mục đối chiếu theo kỳ |
| Bảng đối chiếu đầy đủ từng tài khoản, kèm sao kê | `AD-KT` | Hằng tháng | Thư mục đối chiếu theo kỳ |
| Bảng rà soát phân quyền, **kèm bản gốc danh sách từ hệ thống ngân hàng** | `TGĐ` | Hằng quý, và khi đổi nhân sự | Thư mục `HĐQT` |
| Danh mục tài khoản ngân hàng | `KTV` lập, `TGĐ` duyệt | Khi thay đổi | Thư mục tài chính |
| Hồ sơ sự cố chênh lệch, gồm kết luận nguyên nhân và bút toán xử lý | Người `TGĐ` chỉ định | Mỗi sự cố | Thư mục sự cố |

## 9. Chỉ số theo dõi

| # | Chỉ số | Nguồn số | Tần suất | Ngưỡng cảnh báo |
| --- | --- | --- | --- | --- |
| 1 | Số điểm lệch phát hiện ở lượt rà soát phân quyền | Dòng `M6` | Hằng quý | **Phải bằng 0.** Trên 0 là điểm kiểm soát nặng nhất đã bị nới |
| 2 | Số ngày từ lúc một người nghỉ việc tới lúc quyền trên ngân hàng bị thu hồi | Dòng `M6` | Mỗi lần | Phải bằng 0 ngày |
| 3 | Số tài khoản không được đối chiếu trong kỳ | Chốt `KS-NB-M3` | Hằng tháng | Phải bằng 0 |
| 4 | Số ngày trễ của lượt đối chiếu nhanh so với ngày làm việc đầu tiên của kỳ sau | Dòng `M5` | Mỗi 02 tuần | Trên 0 ngày là lệch chuẩn |
| 5 | Số sự cố chênh lệch mở trong kỳ, chia theo nguồn phát hiện | Mục 5.7 | Hằng tháng | Trên 03 sự cố |
| 6 | Số ngày trung bình từ lúc mở tới lúc đóng một sự cố chênh lệch | Mục 5.7 | Hằng tháng | Trên 05 ngày làm việc |
| 7 | Số sự cố còn mở tại thời điểm khóa sổ | Chốt `KS-NB-M5` | Mỗi lần khóa sổ | Phải bằng 0 |
| 8 | Số lần chi tiền mặt vượt mức tối đa, và số lần đã có phê duyệt của `TGĐ` | Dòng `M2` | Hằng tháng | Hai số phải bằng nhau |
| 9 | Số lần tồn quỹ cuối ngày vượt mức tối đa | Sổ quỹ | Hằng tháng | Trên 01 lần |
| 10 | Chênh lệch giữa kế hoạch dòng tiền kỳ trước và thực tế | Dòng `M1` | Hằng tháng | Trên 10% giá trị kế hoạch là phải giải trình |

**Bốn chỉ số đầu phải bằng 0 hoặc gần 0, và đó là bốn chỉ số đáng xem trước.** Bốn chỉ số đó đo ba điểm kiểm soát của chu trình này. Sáu chỉ số sau đo hiệu quả, và sáu chỉ số đó chỉ có nghĩa khi bốn chỉ số đầu đã đạt.
Ngưỡng cảnh báo ở bảng trên là mức tạm đặt ngày 06/10/2026, rà lại sau 03 kỳ chạy thật.

## Liên kết với tài liệu khác

| Tài liệu | Quan hệ |
| --- | --- |
| [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] Điều 22, 32 tới 35, 40, 47, 48, 49 | Bản gốc của con số, thẩm quyền, quy tắc tách quyền và chế tài |
| [[OBK-QCTC-03_Quy_che_hach_toan_ke_toan\|OBK-QCTC-03]] Điều 4 và mục 4.1 | Chữ ký theo chức danh của phiếu thu và phiếu chi;<br>vai trò `TQ` chưa có người |
| [[OBK-SOP-NB-01_Mua_sam_va_thanh_toan_noi_bo\|OBK-SOP-NB-01]] mục 5.0a | Hành trình của một lệnh chi. Văn bản này chỉ nói về quyền và cơ chế trên ngân hàng |
| [[OBK-SOP-NB-02_Thu_tien_va_cong_no_phai_thu\|OBK-SOP-NB-02]] mục 5.4.2 và 5.5.1 | Chốt `KS-NB-T5` chạy trên lượt đối chiếu nhanh của văn bản này;<br>bảng tuổi nợ là đầu vào của kế hoạch dòng tiền |
| [[PL_Tu_dien_vai\|OBK-QCTC-02-PL-A]] mục 4 | Vai trò `TQ` và ba điều cấm khi gán người |
| `06_OBK-SOP-NB-00` mục 7 | Khung chu trình và danh mục Job `NB-17` tới `NB-21`, `NB-31` |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 07/10/2026 | R.2.0.0 | Mục 5.2.2 bỏ người dự phòng thủ quỹ và ghi vai trò TQ do hai người của hai văn phòng giữ theo quyết định của CEO ngày 07/10/2026 |
