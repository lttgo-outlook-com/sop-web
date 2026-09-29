---
title: "OBK-QCTC-02 QUY CHẾ TỔ CHỨC VÀ PHÂN QUYỀN"
code: "OBK-QCTC-02"
type: "sop"
folder: "01_ToChuc"
level: "Cấp 1, văn bản KHUNG toàn công ty"
version: "R.1.0.0"
status: "đang áp dụng"
draft_date: "01/10/2026"
author: "CEO"
reviewer: "CEO"
approver: "CEO"
parent: ""
law_as_of: "Pháp luật có hiệu lực tại ngày 01/10/2026"
next_review: "Không quá 12 tháng kể từ ngày ban hành"
distribution: "Nội bộ oBacker"
previous_version: ""
aliases:
  - OBK-QCTC-02
tags:
  - loai/sop
  - cap/1
---
# OBK-QCTC-02 QUY CHẾ TỔ CHỨC VÀ PHÂN QUYỀN

| Hạng mục | Nội dung |
| --- | --- |
| Mã tài liệu | OBK-QCTC-02 |
| Cấp tài liệu | Cấp 1, quy chế khung, song song [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo\|OBK-QCTC-01]] |
| Phiên bản | R.1.0.0, đang áp dụng |
| Ngày biên soạn | 01/10/2026 |
| Người biên soạn | CEO (Lê Trọng Tuấn) |
| Người soát | CEO (Lê Trọng Tuấn) |
| Người phê duyệt | CEO (Lê Trọng Tuấn) |
| Văn bản cấp trên | Không có. Đây là văn bản gốc |
| Người ban hành | CEO (Lê Trọng Tuấn) |
| Ngày hiệu lực | chưa có |
| Người đọc | `BOM`, `HĐQT`, và toàn bộ nhân sự |


---

## CHƯƠNG 1. QUY ĐỊNH CHUNG

### Điều 1. Mục đích

Quy chế này trả lời ba câu hỏi, cho mọi vị trí trong oBacker:

1. Ai làm gì, tức nhiệm vụ của từng đơn vị và từng vị trí.
2. Ai quyết cái gì, tức thẩm quyền và giới hạn thẩm quyền.
3. Việc chuyển lên đâu khi vượt thẩm quyền, tức chuyển lên cấp trên.

### Điều 2. Phạm vi và đối tượng áp dụng

Áp dụng cho toàn bộ đơn vị và vị trí của oBacker, gồm cả người ngoài biên chế trong phạm vi công việc họ nhận.

Quy chế này không điều chỉnh: tỷ lệ sở hữu và quan hệ cổ đông; điều kiện chuyển nhượng cổ phần; phân định quyền và nghĩa vụ giữa những người đại diện theo pháp luật. Ba nhóm việc này thuộc cấp Điều lệ.

### Điều 3. Giải thích từ ngữ

Mọi ký hiệu vai trò, cặp tên tiếng Việt và tiếng Anh, và quy tắc phân định ký hiệu trùng nghĩa: xem `PL_Tu_dien_vai.md`.

Bốn khái niệm cấu trúc dùng trong quy chế này:

| Khái niệm | Nghĩa |
| --- | --- |
| Dept, tiếng Việt là Phòng | Đơn vị có Head và chứa từ hai đơn vị con trở lên |
| Team, tiếng Việt là Bộ phận | Đơn vị đã đủ người, có lead riêng |
| Đơn vị một tới hai vị trí | Nhãn ghi tên chức năng và position phụ trách, không gắn chữ Phòng hay Bộ phận. Khi đủ người thì nâng nhãn thành Bộ phận |
| Position độc lập | Vị trí không có cấp dưới, báo cáo thẳng lên cấp trên |

Junior và Senior là cấp độ nhân viên, không phải position, không xuất hiện trên sơ đồ tổ chức.

---

## CHƯƠNG 2. CƠ CẤU TỔ CHỨC

### Điều 4. Ba lớp

| Lớp | Gồm | Chức năng |
| --- | --- | --- |
| Quản trị | `ĐHĐCĐ`, `HĐQT`, `NĐDPL` | Quyết việc thuộc quyền chủ sở hữu; định hướng chiến lược; giám sát điều hành. Không điều hành sự vụ hằng ngày |
| Điều hành | `BOM` gồm `CEO`, `COO`, `CMO` | Điều hành toàn công ty. Quyết toàn bộ việc vận hành và thương mại |
| Thực thi | các Phòng, Bộ phận và position | Làm việc |

`CTHĐQT` không thuộc `BOM`. Việc vượt thẩm quyền `BOM` thuộc lớp quản trị.

### Điều 5. Sơ đồ tổ chức

Sơ đồ chính thức là tệp `OrgChart/obk_org_chart.dot` cùng bản kết xuất `.png` và `.svg`. Sơ đồ là một phần của quy chế này; sửa cơ cấu thì sửa tệp `.dot` rồi kết xuất lại, không vẽ bản khác.

### Điều 6. Danh mục đơn vị

| Đơn vị | Position phụ trách | Cấp trên | Đơn vị con |
| --- | --- | --- | --- |
| Phòng Thương mại | TP Thương mại | `CEO` | Bộ phận AM;<br>Đối tác và Chương trình |
| Bộ phận AM | `AM` | TP Thương mại | |
| Đối tác và Chương trình | `PM` | TP Thương mại | |
| Kế toán nội bộ | `KTT` | `CEO` | `KTV` |
| Bộ phận Nghiên cứu và Phát triển pháp lý | Legal R&D Team Lead | `CEO` | |
| Nhân sự | HR Generalist | `CEO` | Hành chính văn phòng |
| Công nghệ và Sản phẩm | Tech Lead | `COO` | Product Owner |
| Phòng Dịch vụ | `COO` trực tiếp phụ trách | `CEO` | bốn bộ phận dưới đây |
| Bộ phận Kế toán và Thuế | `TL-KT` | `COO` | |
| Bộ phận Giấy phép | `TL-LIC` | `COO` | |
| Bộ phận Lao động và Tiền lương | `TL-LD` | `COO` | |
| Bộ phận Dịch vụ pháp lý | `TL-LS` | `COO` | |
| Bộ phận Marketing | `CMO` trực tiếp phụ trách | `CEO` | MKT Executive |

Phòng Dịch vụ không có position Head of Delivery riêng. `COO` trực tiếp phụ trách.

### Điều 7. Hai văn phòng

oBacker có hai văn phòng tại Đà Nẵng và Thành phố Hồ Chí Minh, cộng nhân sự làm việc từ xa. Văn phòng là ĐỊA ĐIỂM LÀM VIỆC, không phải lớp tổ chức: không có trưởng văn phòng, không có thẩm quyền theo văn phòng. Thẩm quyền chạy theo Phòng và Bộ phận.

### Điều 8. Người ngoài biên chế

Hiện có hai nhóm: đối tác thuê ngoài hỗ trợ Công nghệ và Sản phẩm; cộng tác viên ngoài hỗ trợ Bộ phận Kế toán và Thuế.

Ba điều người ngoài biên chế không được làm: giữ vai trò duyệt; làm đầu mối với khách; chịu trách nhiệm chất lượng thay Trưởng bộ phận.

---

## CHƯƠNG 3. NHIỆM VỤ VÀ THẨM QUYỀN TỪNG ĐƠN VỊ

### Điều 9. Cách đọc chương này

Chương này quy định nhiệm vụ, thẩm quyền, giới hạn thẩm quyền và đầu ra của từng đơn vị và từng position. `CEO` duyệt toàn bộ 25 khối ngày 02/09/2026.

Mỗi khối có sáu dòng cố định:

| Dòng | Nghĩa |
| --- | --- |
| Vị trí | vai trò giữ đơn vị đó |
| Báo cáo | cấp trên trực tiếp |
| Tồn tại để | lý do đơn vị tồn tại, một câu |
| Quyền quyết | việc đơn vị được chốt mà không phải xin ai |
| Không có quyền | việc đơn vị không được tự làm, dù có khả năng làm |
| Đầu ra | thứ đơn vị chịu trách nhiệm về kết quả |

**Dòng "Không có quyền" là dòng quan trọng nhất của chương này.** Dòng đó là chỗ ngăn một vai trò lấn sang thẩm quyền của vai trò khác. Khi có tranh chấp về việc ai được làm gì, đọc dòng đó trước.

Một số khối có thêm dòng riêng: Ràng buộc cứng, Quy tắc ưu tiên, Cảnh báo, hoặc Nghĩa vụ riêng. Những dòng đó không phải mô tả công việc mà là điều kiện để việc làm đúng có hiệu lực.

Hạn mức, mốc và thời hạn không viết lại ở đây, chỉ dẫn chiếu. Ai đang giữ vai trò nào nằm ở `PL_Anh_xa_nhan_su.md`.

#### 9.1. Lớp quản trị

##### ĐHĐCĐ, Đại hội đồng cổ đông

```
Tồn tại để:      quyết những việc thuộc quyền chủ sở hữu
Quyền quyết:     theo Điều lệ Đ.24 k.2. Gồm đầu tư hoặc bán tài sản từ mốc
                 tại Đ.24 k.2 đ.d; mức và hình thức cổ tức; tổng thù lao
                 HĐQT; phê duyệt quy chế quản trị nội bộ; thông qua BCTC năm
Không có quyền:  điều hành sự vụ hằng ngày
Đầu ra:          nghị quyết ĐHĐCĐ, biên bản họp thường niên
Họp thường niên phải xong TRƯỚC mốc nộp BCTC năm, xem
                 OBK-QCTC-01 phần trình tự báo cáo năm
```

##### HĐQT, Hội đồng quản trị

```
Vị trí:          Chủ tịch HĐQT, thành viên HĐQT
Tồn tại để:      định hướng chiến lược dài hạn và giám sát BOM
Quyền quyết:     theo Điều lệ Đ.25 k.2. Gồm thông qua hợp đồng và giao dịch
                 từ mốc tại Đ.25 k.2 đ.h; bổ nhiệm và miễn nhiệm TGĐ; lương
                 và thù lao của TGĐ và người quản lý do HĐQT bổ nhiệm; ban
                 hành quy chế quản lý nội bộ theo Đ.25 k.2 đ.l; kiến nghị
                 mức cổ tức; phân định quyền và nghĩa vụ giữa những người đại
                 diện theo pháp luật
Không có quyền:  điều hành sự vụ hằng ngày; bác bỏ kết luận nghiệp vụ của Team
                 Lead hoặc kết luận khả thi của COO
Đầu ra:          nghị quyết HĐQT, quyết định bổ nhiệm, quy chế được ban hành
Ủy quyền được:   việc ban hành một quy chế quản lý nội bộ cụ thể có thể được
                 ủy quyền cho TGĐ bằng nghị quyết hoặc quyết định của HĐQT,
                 căn cứ Luật Doanh nghiệp 67/VBHN-VPQH Đ.162 k.3 đ.i cho TGĐ
                 quyền và nghĩa vụ khác theo nghị quyết, quyết định của HĐQT.
                 Khi đã ủy quyền thì TGĐ ký ban hành là đúng thẩm quyền. Áp
                 dụng đầu tiên: OBK-QCTC-03 Quy chế hạch toán kế toán, xem
                 mục 10.2 của văn bản đó
Ghi chú:         oBacker chưa thuộc trường hợp phải lập Ban kiểm soát theo
                 Điều lệ Đ.41
```

##### Người đại diện theo pháp luật, NĐDPL

```
Tồn tại để:      là chủ thể mà pháp luật gắn nghĩa vụ đích danh
Nghĩa vụ riêng:  ba nghĩa vụ Luật Kế toán không ai ký thay được, gồm tổ chức
                 công tác kế toán, chữ ký trên BCTC, tổ chức bảo quản lưu trữ
                 tài liệu kế toán. Dẫn chiếu 41/VBHN-VPQH Đ.50, Đ.29 k.2 đ.d,
                 Đ.41 k.4, và trách nhiệm liên đới tại Đ.50 k.3
Quy tắc dùng:    chữ ký thứ ba trên BCTC là của người ĐANG được ghi là NĐDPL
                 trên GCN đăng ký doanh nghiệp TẠI THỜI ĐIỂM KÝ
Hiện trạng:      GCN mã số doanh nghiệp 0402298185, đăng ký lần đầu 10/09/2025,
                 đăng ký thay đổi lần thứ 2 ngày 31/07/2026, ghi một NĐDPL,
                 chức danh Chủ tịch hội đồng quản trị. Bản gốc TGĐ cấp 07/09/2026,
                 đã mở bản gốc đối chiếu
Sẽ thực hiện:    bổ sung NĐDPL thứ hai là người giữ chức danh TGĐ. Phân định
                 quyền và nghĩa vụ giữa hai NĐDPL do HĐQT quyết ở cấp Điều lệ
```

#### 9.2. Lớp điều hành

##### BOM, Ban điều hành

```
Vị trí:          CEO chủ trì; thành viên gồm CEO, COO, CMO
Báo cáo:         HĐQT
Tồn tại để:      điều hành toàn công ty theo định hướng HĐQT
Quyền quyết:     toàn bộ việc vận hành và thương mại. Việc vượt quá thuộc
                 cấp HĐQT trở lên
Không có quyền:  việc thuộc quyền chủ sở hữu; việc vượt mốc thẩm quyền tài
                 chính tại Điều lệ Đ.24 và Đ.25
Đầu ra:          kết quả kinh doanh; nguyên tắc trách nhiệm chất lượng theo
                 Team Lead
Ghi chú:         Chủ tịch HĐQT KHÔNG thuộc BOM
```

##### CEO, Tổng giám đốc

```
Chức danh:       TGĐ trên mọi văn bản pháp lý, CEO trong nội bộ
Báo cáo:         HĐQT
Trực tiếp quản:  Commercial Dept, Finance, Legal R&D Team, HR
Tồn tại để:      chịu kết quả kinh doanh và tài chính của công ty
Quyền quyết:     nhận khách, từ chối khách, chấm dứt hợp đồng; giá, phạm vi,
                 chiết khấu, gia hạn; hành vi oBacker nghiêm cấm; khiếu nại cấp cuối; chính
                 sách tài chính; chi trong hạn mức tại OBK-QCTC-01; lương và
                 thù lao của người lao động và người quản lý do TGĐ bổ nhiệm
                 theo Điều lệ Đ.28 k.3 đ.e
Không có quyền:  bác bỏ kết luận khả thi của COO bằng thẩm quyền.
                 CEO đổi được ĐẦU VÀO rồi hỏi lại, không đổi được câu trả
                 lời. Xem OBK-SOP-00 mục 8.2.1
                 Không quyết một mình giao dịch vượt mốc Điều lệ Đ.25 k.2 đ.h
Đầu ra:          doanh thu, dòng tiền, quyết định nhận hoặc từ chối khách
```

##### COO

```
Báo cáo:         CEO
Trực tiếp quản:  Delivery Dept, Tech & Product
Tồn tại để:      trả lời câu hỏi oBacker LÀM ĐƯỢC gì, trong mốc nào, với
                 nguồn lực đang có
Quyền quyết:     kết luận khả thi và mốc giao; phân bổ nguồn lực và định biên
                 trong Delivery; xử xung đột liên team; chuẩn quy trình và
                 SLA; sở hữu bộ tài liệu SOP dịch vụ
Không có quyền:  quyết giá, nhận hoặc từ chối khách; quản khối thương mại;
                 quyết chi ngoài hạn mức được giao
Đầu ra:          SLA đúng hạn, chất lượng đầu ra, năng lực giao hàng
```

##### CMO

```
Báo cáo:         CEO
Trực tiếp quản:  Marketing
Tồn tại để:      tạo nguồn khách tiềm năng và giữ tính nhất quán thương hiệu
Quyền quyết:     nội dung và kênh truyền thông; nhận diện thương hiệu; kế
                 hoạch sự kiện và chương trình
Không có quyền:  cam kết phạm vi dịch vụ hoặc mốc với khách; công bố nội dung
                 mang tính tư vấn pháp lý mà Legal R&D chưa soát
Đầu ra:          số lượng và chất lượng lead chuyển sang AM Team
```

#### 9.3. Nhánh CEO

##### Commercial Dept

```
Vị trí:          Head of Commercial, tiếng Việt là TP Thương mại
Báo cáo:         CEO
Đơn vị con:      AM Team, Partnerships & Programs
Tồn tại để:      sở hữu chỉ tiêu tăng trưởng doanh thu và quan hệ đối tác
Quyền quyết:     phân bổ chỉ tiêu giữa AM Team và Partnerships; thứ tự ưu
                 tiên khách trong danh mục; đề xuất giá
Không có quyền:  chốt giá ngoài khung; nhận hoặc từ chối khách; chấm dứt hợp
                 đồng; cam kết mốc chưa có xác nhận của Team Lead nghiệp vụ
Đầu ra:          doanh thu ký mới, tỷ lệ gia hạn, chất lượng nguồn đối tác
```

##### AM Team

```
Vị trí:          AM Lead, ký hiệu AM; Account Executive, ký hiệu AE
Báo cáo:         Head of Commercial
Tồn tại để:      là đầu mối tiếp xúc DUY NHẤT với khách suốt hành trình, từ
                 lúc là lead tới lúc kết thúc hợp đồng
Quyền quyết:     phân công khách; cách xử lý quan hệ khách trong thẩm quyền;
                 nội dung và thời điểm gửi khách
Không có quyền:  chốt kỹ thuật nghiệp vụ; cam kết mốc mà Team Lead nghiệp vụ
                 chưa xác nhận bằng văn bản trên Job. Team Lead nói không làm
                 được thì AM không cam kết, kể cả khi CEO là cấp trên. Xem
                 điểm kiểm soát KS-AM-01
Đầu ra:          SLA giao tiếp T1, T2, T3 theo OBK-SOP-00 mục 7; tỷ lệ giữ
                 khách
```

##### Partnerships & Programs

```
Vị trí:          PM, Partnerships Manager. Một position, chưa thành team
Báo cáo:         Head of Commercial
Tồn tại để:      phát triển kênh tăng trưởng theo định hướng đối tác
Quyền quyết:     đề xuất và vận hành chương trình hợp tác trong khung đã duyệt
Không có quyền:  ký kết cam kết ràng buộc với đối tác; cam kết phạm vi dịch vụ
Đầu ra:          số lượng và chất lượng đối tác, lead qua kênh đối tác
```

##### Finance

```
Vị trí:          KTT, tức Kế toán trưởng hoặc Người phụ trách kế toán
Báo cáo:         CEO
Đơn vị con:      KTV
Tồn tại để:      giữ sổ sách và nghĩa vụ kế toán CỦA CHÍNH OBACKER
Quyền quyết:     phương pháp hạch toán trên sổ nội bộ; duyệt chi trong bậc
                 được giao tại ma trận hạn mức OBK-QCTC-01 mục 12.3; từ chối
                 chứng từ không đủ điều kiện
Không có quyền:  kiêm quản lý điều hành, thủ kho, thủ quỹ, hoặc thường xuyên
                 mua bán tài sản, theo 41/VBHN-VPQH Đ.13 k.7 và Đ.52 k.4;
                 quyết chính sách tài chính, việc đó thuộc CEO
Đầu ra:          BCTC nội bộ, tờ khai của oBacker, số dư đối chiếu
Cảnh báo:        ký hiệu KTT và KTV ở đây thuộc MIỀN NỘI BỘ. Không nhầm với
                 TL-KT và CV-KT của mảng dịch vụ
Sẽ thực hiện:    Finance tách khỏi Accounting & Tax Team thành đơn vị riêng.
                 Trước khi tách xong, một người giữ cả KTT nội bộ và Team Lead
                 dịch vụ; kế toán của oBacker và dịch vụ kế toán cho khách
                 không tách người ở cấp Team Lead. Chỗ kiêm nhiệm này ghi tại
                 Điều 19 và tại PL_Anh_xa_nhan_su mục F điểm 4
```

##### KTV, Kế toán viên nội bộ

```
Báo cáo:         KTT
Tồn tại để:      lập chứng từ và ghi sổ nội bộ
Quyền quyết:     không có quyền quyết. Là vai trò LẬP
Không có quyền:  duyệt chi; kiêm giữ quỹ
Đầu ra:          chứng từ đúng, sổ khớp
```

##### Legal R&D Team

```
Vị trí:          Legal R&D Team Lead, Paralegal
Báo cáo:         CEO
Tồn tại để:      là vai trò KIẾN TẠO. Xây chuẩn nghiệp vụ pháp lý, nghiên cứu và
                 phát triển sản phẩm pháp lý, giữ nền tảng chuyên môn cho
                 dịch vụ
Quyền quyết:     kết luận pháp lý dùng làm chuẩn nội bộ; sở hữu PL_1 Căn cứ
                 pháp lý và quy trình cập nhật văn bản; soát nội dung pháp lý
                 trước khi công bố
Không có quyền:  tiếp xúc trực tiếp với khách; thực hiện nghiệp vụ của team
                 khác; cam kết mốc với khách
Đầu ra:          chuẩn nghiệp vụ bàn giao cho Delivery; PL_1 luôn đúng hiệu lực
```

##### HR

```
Vị trí:          HR Generalist
Báo cáo:         CEO
Đơn vị con:      Office Admin
Tồn tại để:      bảo đảm nguồn lực và năng lực nhân sự cho toàn công ty
Quyền quyết:     điều phối công việc hành chính giữa hai văn phòng
Tiếp nhận:       hồ sơ tuyển dụng, đãi ngộ và kỷ luật để trình CEO quyết
Thực hiện:       lập và nộp hồ sơ bảo hiểm xã hội của chính oBacker, gồm
                 đăng ký mã, báo tăng, báo giảm, nộp tiền và chốt sổ; tổng
                 hợp bảng công; lập và cập nhật sổ quản lý lao động; lập
                 báo cáo tình hình sử dụng lao động; rà soát giờ làm thêm
                 và mức lương tối thiểu vùng
Không có quyền:  quyết tuyển dụng; quyết mức lương và thù lao, việc đó thuộc
                 CEO theo Điều lệ Đ.28 k.3 đ.e, hoặc HĐQT theo Đ.25 k.2 đ.i;
                 quyết định kỷ luật, việc đó thuộc CEO là người có thẩm quyền
                 giao kết HĐLĐ theo Nội quy lao động
Đầu ra:          vị trí được lấp đúng hạn, hồ sơ lao động đủ và đúng
```

##### Office Admin

```
Vị trí:          Office Admin, mỗi văn phòng một người kiêm nhiệm. Tại TPHCM
                 do HR Generalist kiêm
Báo cáo:         HR Generalist
Tồn tại để:      hành chính và hỗ trợ vận hành văn phòng
Quyền quyết:     không có quyền quyết
Không có quyền:  các tác vụ trọng yếu về tuân thủ, gồm nộp tờ khai, xuất hóa
                 đơn, đăng ký mã BHXH, xử lý dữ liệu gốc. Những việc đó thuộc
                 team sở hữu nghiệp vụ
Đầu ra:          văn phòng phẩm, thư từ, giao nhận, lưu trữ hồ sơ đúng chỗ
Cảnh báo:        mục Không có quyền áp cho việc làm với tư cách Office
                 Admin. Người kiêm nhiệm Office Admin và HR Generalist
                 đăng ký mã bảo hiểm xã hội, báo tăng, báo giảm, nộp tiền
                 và chốt sổ bảo hiểm xã hội với tư cách HR Generalist,
                 theo mục Thực hiện của HR
```

#### 9.4. Nhánh COO

##### Delivery Dept

```
Vị trí:          COO trực tiếp phụ trách, không có position
                 Head of Delivery riêng
Báo cáo:         CEO
Đơn vị con:      Accounting & Tax Team, Licensing Team, Labor & Payroll Team,
                 Legal Services Team
Tồn tại để:      vận hành cung cấp dịch vụ cho khách và điều phối khối lượng
                 công việc
Quyền quyết:     kết luận khả thi và mốc giao; điều phối nguồn lực giữa bốn
                 team; chuẩn quy trình và SLA nội bộ
Không có quyền:  quyết giá; nhận hoặc từ chối khách; tiếp xúc khách ngoài
                 kênh AM
Đầu ra:          tỷ lệ đúng hạn, chất lượng đầu ra, tuân thủ SLA
```

##### Accounting & Tax Team

```
Vị trí:          Team Lead, ký hiệu TL-KT; Chuyên viên, ký hiệu CV-KT;
                 Hành chính Kế toán, ký hiệu AD-KT, xem khối riêng dưới đây
Báo cáo:         COO
Ngoài biên chế:  Cộng tác viên ngoài
Tồn tại để:      kế toán, tờ khai thuế, quyết toán, hóa đơn cho khách, trọn khâu
Quyền quyết:     Team Lead chốt kỹ thuật và duyệt đầu ra; là cấp 1
                 nhận việc chuyển lên của nghiệp vụ này
Không có quyền:  cam kết mốc trực tiếp với khách; đứng tên Kế toán trưởng CỦA
                 KHÁCH trên BCTC của khách, trừ trường hợp CEO duyệt riêng
                 từng khách bằng văn bản
Đầu ra:          tờ khai đúng và đúng hạn, sổ khớp, hồ sơ đủ khi thanh kiểm
Cảnh báo:        TL-KT và CV-KT thuộc MIỀN DỊCH VỤ. Handbook Kế toán đã đổi
                 KTT thành TL-KT và KTV thành CV-KT ngày 02/09/2026
```

##### AD-KT, Hành chính Kế toán

```
Vị trí:          Hành chính Kế toán, ký hiệu AD-KT
Báo cáo:         Team Lead Bộ phận Kế toán và Thuế
Tồn tại để:      giúp việc cho hai vai trò kế toán, giữ công cụ và thực hiện thao tác
                 đã được phân công
Quyền quyết:     không có quyền quyết. Mọi việc làm theo phân công của KTT hoặc
                 TL-KT
Phạm vi việc:    quản lý con dấu và chữ ký số; bấm nộp các tờ khai đơn giản, gồm
                 tờ khai trắng; xuất hóa đơn theo lệnh; giúp việc hồ sơ chứng từ;
                 đối chiếu sao kê ngân hàng với sổ kế toán của mảng nội bộ theo
                 OBK-QCTC-01 Điều 48
Không có quyền:  tự quyết nội dung tờ khai hoặc hóa đơn; nộp hoặc xuất khi chưa
                 có lệnh để lại dấu vết; hạch toán; duyệt chứng từ
Đầu ra:          thao tác đúng lệnh, đúng hạn, và luôn tra được ai ra lệnh việc gì
Ràng buộc cứng:  mỗi lần dùng con dấu hoặc chữ ký số phải có lệnh để lại dấu vết
                 của KTT hoặc TL-KT. Không có dấu vết lệnh thì thao tác đó coi
                 như không được phép
Vì sao có ràng
buộc trên:       AD-KT giữ công cụ nhưng không chịu trách nhiệm nội dung. Dấu vết
                 lệnh là thứ duy nhất phân định trách nhiệm giữa người bấm và
                 người quyết khi có sai sót bị cơ quan nhà nước phát hiện
```

##### Licensing Team

```
Vị trí:          Team Lead, ký hiệu TL-LIC; Chuyên viên, ký hiệu CV-LIC
Báo cáo:         COO
Tồn tại để:      thủ tục giấy phép và đăng ký doanh nghiệp, làm việc trực tiếp
                 với cơ quan nhà nước
Quyền quyết:     Team Lead chốt kỹ thuật và duyệt đầu ra; là cấp 1
                 nhận việc chuyển lên
Không có quyền:  cam kết mốc trực tiếp với khách; kết luận pháp lý ngoài phạm
                 vi thủ tục, việc đó cần Legal R&D
Đầu ra:          giấy phép ra đúng hạn, hồ sơ không bị trả lại
```

##### Labor & Payroll Team

```
Vị trí:          Team Lead, ký hiệu TL-LD; Chuyên viên, ký hiệu CV-LD
Báo cáo:         COO
Tồn tại để:      tính lương, bảo hiểm xã hội, hồ sơ lao động cho khách, trọn khâu
Quyền quyết:     Team Lead chốt kỹ thuật và duyệt đầu ra; là cấp 1
                 nhận việc chuyển lên
Không có quyền:  cam kết mốc trực tiếp với khách
Đầu ra:          lương và BHXH đúng, đối chiếu chéo lương với thuế TNCN và
                 với BHXH khớp
Cảnh báo:        không nhầm với C&B nội bộ của oBacker, cái đó thuộc HR
```

##### Legal Services Team

```
Vị trí:          Team Lead, ký hiệu TL-LS; Chuyên viên, ký hiệu CV-LS
Báo cáo:         COO
Tồn tại để:      thực hiện dịch vụ pháp lý có thu, gồm tư vấn ngoài phạm vi
                 các bộ phận khác, nghiên cứu theo yêu cầu, soạn hợp đồng
Quyền quyết:     Team Lead chốt kỹ thuật và duyệt đầu ra
Không có quyền:  tiếp xúc trực tiếp với khách; nhận việc ngoài các lĩnh vực
                 oBacker phục vụ; đặt chuẩn pháp lý mới, việc đó thuộc
                 Legal R&D
Đầu ra:          sản phẩm pháp lý đúng hạn và đúng chuẩn của Legal R&D
Quy tắc ưu tiên: khi một người giữ cả vai trò ở Legal R&D và ở đây, việc có mốc
                 khách được COO xếp trước; nếu Legal R&D có hạn
                 chót cứng do văn bản pháp luật mới có hiệu lực thì CEO quyết
                 bổ sung nguồn lực, không đổi thứ tự đã xếp
```

##### Tech & Product

```
Vị trí:          Tech Lead
Báo cáo:         COO
Đơn vị con:      Product Owner
Ngoài biên chế:  Đối tác thuê ngoài
Tồn tại để:      là vai trò KIẾN TẠO. Xây công cụ và tự động hóa, vận hành hệ
                 thống nội bộ phục vụ toàn công ty
Quyền quyết:     roadmap và thứ tự triển khai; kiến trúc và lựa chọn kỹ thuật;
                 điều phối và nghiệm thu sản phẩm của đối tác thuê ngoài
Không có quyền:  tiếp xúc trực tiếp với khách; thay đổi quy trình nghiệp vụ
                 của team khác mà chưa được team đó và COO đồng ý
Đầu ra:          hệ thống chạy được, dữ liệu không sai không mất, thời gian
                 tiết kiệm cho Delivery
Ràng buộc cứng:  dữ liệu toàn vẹn
```

##### Product Owner

```
Báo cáo:         Tech Lead
Tồn tại để:      biến nhu cầu vận hành thành yêu cầu làm được
Quyền quyết:     thứ tự việc chờ làm trong phạm vi roadmap đã duyệt;
                 nghiệm thu từng hạng mục
Không có quyền:  đổi roadmap; cam kết mốc phát hành với bên ngoài đơn vị
Đầu ra:          yêu cầu rõ, bản chạy được, tài liệu bàn giao
```

#### 9.5. Nhánh CMO

##### Marketing

```
Vị trí:          CMO trực tiếp phụ trách
Đơn vị con:      MKT Executive
Tồn tại để:      thương hiệu, nội dung, sự kiện, tạo nguồn khách tiềm năng
Quyền quyết:     nội dung và kênh; nhận diện; lịch sự kiện
Không có quyền:  cam kết phạm vi hoặc mốc dịch vụ; công bố nội dung pháp lý
                 chưa qua Legal R&D
Đầu ra:          lead chuyển sang AM Team, tính nhất quán thương hiệu
```

##### MKT Executive

```
Báo cáo:         CMO
Tồn tại để:      sản xuất nội dung và vận hành kênh
Quyền quyết:     không có quyền quyết
Đầu ra:          nội dung đúng lịch, kênh được vận hành
```

#### 9.6. Ngoài biên chế

```
Đối tác thuê ngoài      thực hiện phát triển theo điều phối của Tech Lead.
                        Nghiệm thu trước khi đưa vào dùng
Cộng tác viên ngoài     hỗ trợ Accounting & Tax Team. Team Lead vẫn chịu
                        trách nhiệm cuối về đầu ra
Nguyên tắc:             người ngoài biên chế KHÔNG giữ vai trò duyệt, KHÔNG là
                        đầu mối với khách, KHÔNG chịu trách nhiệm chất lượng
                        thay Team Lead
```

---

---

## CHƯƠNG 4. PHÂN QUYỀN

### Điều 10. Ma trận phân quyền

Xem `PL_Ma_tran_phan_quyen.md`. Sáu nhóm quyết định: nhân sự; tiền; khách và giá; kỹ thuật nghiệp vụ; pháp lý; hệ thống và dữ liệu.

Bốn cột mỗi dòng: ai đề xuất; ai quyết; ai phải được hỏi; ai phải được thông báo. Mỗi dòng chỉ một vai trò quyết.

### Điều 11. Hiệu lực của bước phải được hỏi

Nếu người quyết chốt mà chưa lấy ý kiến vai trò ghi ở cột "phải được hỏi" thì quyết định đó không có hiệu lực nội bộ, và người quyết chịu trách nhiệm về hậu quả.

### Điều 12. Ba việc không ai được tự quyết

1. `CEO` không bác bỏ kết luận khả thi của `COO` bằng thẩm quyền. `CEO` đổi được đầu vào rồi hỏi lại, không đổi được câu trả lời.
2. `AM` không cam kết mốc mà `TL` bộ phận chưa xác nhận bằng văn bản trên Job.
3. `TGĐ` không ký thay `NĐDPL` trên báo cáo tài chính.

Chi tiết và nguồn: `PL_Ma_tran_phan_quyen.md` mục 7.

### Điều 13. Bốn nhóm việc thuộc CEO ở mọi tình huống

Nhận khách mới có yếu tố rủi ro; từ chối khách; chấm dứt hợp đồng dịch vụ trước hạn; mọi việc thuộc hành vi oBacker nghiêm cấm nêu tại [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] mục 9.

---

## CHƯƠNG 5. CƠ CHẾ CHUYỂN LÊN CẤP TRÊN

### Điều 14. Cơ chế chuyển lên cấp trên

Xem `PL_Chuyen_len_cap_tren.md`. Tài liệu đó thay thế mục 8.1, 8.2 và 8.3 của [[01_OBK-SOP-00_Chuan_van_hanh_dich_vu|OBK-SOP-00]] khi hai bên khác nhau.

Ba nhánh dọc: nhánh dịch vụ ba cấp; nhánh thương mại ba cấp; nhánh kiến tạo và hỗ trợ hai cấp.

### Điều 15. Quy tắc khi hai cấp liền kề do cùng một người giữ

Bỏ qua cấp trùng, chuyển thẳng lên cấp trên kế tiếp, và ghi lý do trên Job. Không được coi việc đã chuyển lên cấp trên khi người quyết cấp 2 chính là người quyết cấp 1.

Các chỗ kiêm nhiệm hiện có, kèm quy tắc bù cho từng chỗ: `PL_Chuyen_len_cap_tren.md` mục 2.

---

## CHƯƠNG 6. NGUYÊN TẮC VẬN HÀNH

### Điều 16. Bốn nguyên tắc

1. **Đầu mối khách hàng thống nhất.** Bộ phận AM là đầu mối tiếp xúc duy nhất với khách trong toàn bộ hành trình, gồm cả trước và sau bán hàng. Các bộ phận trong Phòng Dịch vụ, Legal R&D và Công nghệ và Sản phẩm không trực tiếp làm việc với khách.
2. **Vai trò kiến tạo của R&D.** Legal R&D và Công nghệ và Sản phẩm xây quy trình, nghiệp vụ và công cụ hỗ trợ Phòng Dịch vụ; không cung cấp dịch vụ trực tiếp cho khách.
3. **Trách nhiệm chất lượng.** Trưởng bộ phận chịu trách nhiệm về chất lượng đầu ra của bộ phận mình. Công ty không thiết lập bộ phận kiểm soát chất lượng độc lập.
4. **Mục tiêu đến hết 2026.** Ổn định bộ máy vận hành để `BOM` tập trung nguồn lực cho phát triển thương mại theo định hướng đối tác, trọng điểm tại Đà Nẵng.

### Điều 17. Ranh giới hai cặp dễ đi sai địa chỉ

| Việc | Của KHÁCH thì về | Của OBACKER thì về |
| --- | --- | --- |
| Lao động, tiền lương, BHXH, hợp đồng lao động | Bộ phận Lao động và Tiền lương | Nhân sự |
| Kế toán, thuế, hóa đơn, báo cáo tài chính | Bộ phận Kế toán và Thuế | Kế toán nội bộ |

Việc pháp lý phân theo tính chất, không theo chủ thể: có khách và có thu thì về Bộ phận Dịch vụ pháp lý; là chuẩn nội bộ hoặc chưa có tiền lệ thì về Legal R&D.

---

## CHƯƠNG 7. BAN HÀNH, SỬA ĐỔI VÀ RÀ SOÁT

### Điều 18. Thẩm quyền ban hành và sửa đổi

`HĐQT` ban hành và sửa đổi quy chế này, theo `Điều lệ Đ.25 k.2 đ.l`. `TGĐ` kiến nghị, theo `Điều lệ Đ.28 k.3 đ.d`.

Sửa các phụ lục:

| Phụ lục | Ai sửa | Ai duyệt |
| --- | --- | --- |
| `PL_Tu_dien_vai.md` | Ban biên soạn, Legal R&D soát | `CEO`; `HĐQT` khi đổi ký hiệu vai trò luật định |
| `PL_Ma_tran_phan_quyen.md` | `CEO` | `CEO` |
| `PL_Chuyen_len_cap_tren.md` | `COO` | `CEO` |
| `PL_Anh_xa_nhan_su.md` | HR Generalist | `CEO` |

### Điều 19. Bốn kết luận về bố trí nhân sự kế toán

19.1. **Team Lead bộ phận không phải người quản lý, điều hành theo Luật Kế toán.** Người giữ vai trò `KTT` kiêm `TL-KT` không vi phạm `[Luật Kế toán 41/VBHN-VPQH Đ.13 k.7]` và `[Đ.52 k.4]`. Danh sách người kiêm nhiệm tại [[PL_Anh_xa_nhan_su|OBK-QCTC-02-PL-D]] mục F.

19.2. **Ràng buộc đi kèm kết luận tại mục 19.1:** không đưa chức danh Trưởng bộ phận hoặc Team Lead vào danh sách người quản lý, điều hành của bất kỳ văn bản nội bộ nào. Đưa vào thì kết luận tại mục 19.1 hết áp dụng và việc kiêm nhiệm thành vi phạm điều cấm.

19.3. **Quan hệ thân thích theo `[Luật Kế toán 41/VBHN-VPQH Đ.52 k.3]`:** tại ngày 02/09/2026, giữa người giữ `KTT`, `KTV` với `NĐDPL` và `TGĐ` không có quan hệ thân thích. Kiểm lại mỗi lần đổi người ở bốn vai trò này, và đưa nội dung kiểm vào quy trình tuyển dụng khi quy trình đó được dựng.

19.4. **Tư cách của oBacker với dữ liệu khách hàng cung cấp để làm dịch vụ:** oBacker là Bên xử lý dữ liệu, theo định nghĩa "cơ quan, tổ chức, cá nhân thực hiện việc xử lý dữ liệu cá nhân theo yêu cầu của bên kiểm soát dữ liệu cá nhân... thông qua hợp đồng" `[Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 Đ.2 k.8]`. Nghĩa vụ của Bên xử lý dữ liệu: chỉ tiếp nhận dữ liệu cá nhân sau khi có thỏa thuận, hợp đồng về xử lý dữ liệu cá nhân với khách (Bên kiểm soát); xử lý đúng thỏa thuận, hợp đồng đã ký; thực hiện đầy đủ các biện pháp bảo vệ dữ liệu cá nhân; chịu trách nhiệm trước khách về thiệt hại do quá trình xử lý gây ra; ngăn chặn hoạt động thu thập dữ liệu cá nhân trái phép từ hệ thống của mình; phối hợp cơ quan nhà nước có thẩm quyền khi được yêu cầu `[Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 Đ.37 k.2]`. Khi phát hiện hành vi vi phạm, oBacker thông báo kịp thời cho khách; oBacker không tự thông báo trực tiếp cho cơ quan chuyên trách bảo vệ dữ liệu cá nhân `[Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 Đ.23 k.1]`.

### Điều 20. Rà soát định kỳ

Rà soát toàn bộ quy chế và các phụ lục mỗi 06 tháng, hoặc ngay khi có một trong bốn sự kiện: thay đổi GCN đăng ký doanh nghiệp; sửa Điều lệ; thêm hoặc bỏ một đơn vị; một vai trò kiêm nhiệm được tách thành hai người.

Người chủ trì rà soát: `COO`. Legal R&D soát phần pháp lý.

### Điều 21. Quy chế này không chờ Điều lệ

`CEO` chốt ngày 02/09/2026: quy chế này ban hành và áp dụng ngay, không chờ Điều lệ được cập nhật.

Hệ quả và cách xử lý ba chỗ mà Điều lệ đang lạc hậu hơn GCN đăng ký doanh nghiệp:

| Chỗ lệch | Quy chế này lấy theo | Lý do |
| --- | --- | --- |
| Vốn điều lệ và số cổ phần | GCN | Thực hiện theo Giấy chứng nhận đăng ký doanh nghiệp có hiệu lực tại thời điểm áp dụng |
| Chức danh của `NĐDPL` | GCN, tức Chủ tịch Hội đồng quản trị | Thực hiện theo Giấy chứng nhận đăng ký doanh nghiệp hiện hành |
| Địa chỉ trụ sở | GCN, tức **Tầng 2, 06 Trần Phú, Phường Hải Châu, Thành phố Đà Nẵng** | Địa chỉ trụ sở chính thức theo Giấy chứng nhận đăng ký doanh nghiệp |

Dữ liệu pháp lý doanh nghiệp được đối chiếu và áp dụng trực tiếp theo Giấy chứng nhận đăng ký doanh nghiệp mới nhất.

Ba mốc thẩm quyền theo giá trị tài sản tại `Điều lệ Đ.24 k.2 đ.d` và `Đ.25 k.2 đ.h` vẫn dùng nguyên, vì GCN không quy định về thẩm quyền và không có văn bản nào khác thay thế.

Khi Điều lệ được cập nhật, người chủ trì rà soát mở Phụ lục 3 của [[OBK-QCTC-01_Quy_che_tai_chinh_noi_bo|OBK-QCTC-01]], sửa theo, và kiểm ràng buộc tại Điều 19 của quy chế này.

---

## PHỤ LỤC

| Tệp | Nội dung |
| --- | --- |
| `OrgChart/obk_org_chart.dot` | Sơ đồ tổ chức, nguồn để sửa, kèm `.png` và `.svg` |
| `PL_Tu_dien_vai.md` | Ký hiệu vai trò bốn mảng, cặp tên Việt Anh, ba ký hiệu trùng nghĩa, bảng liên kết |
| `PL_Ma_tran_phan_quyen.md` | Ma trận sáu nhóm quyết định |
| `PL_Chuyen_len_cap_tren.md` | Chuyển lên cấp trên hai chiều ba nhánh, cơ chế xử xung đột |
| `PL_Anh_xa_nhan_su.md` | Ai đang giữ vai trò nào, bảng kiêm nhiệm, kiểm ba điều cấm Luật Kế toán |
| Bản nháp Chương 3 trước đây | Đã hết vai trò. Toàn bộ nội dung đã chuẩn hóa vào Chương 3 |

---

## NHẬT KÝ SỬA

| Ngày | Bản | Nội dung |
| --- | --- | --- |
| 01/10/2026 | R.1.0.0 | Ban hành chính thức phiên bản chuẩn R.1.0.0 toàn công ty |
