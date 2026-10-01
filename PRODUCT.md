# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Toàn bộ nhân viên nội bộ oBacker (xác nhận 2026-09-30): các dòng dịch vụ kế toán–thuế, giấy phép, lao động, pháp lý, marketing và vận hành nội bộ.

- Việc chính khi mở site: trong lúc làm nghiệp vụ, tra đúng tài liệu **bản hiện hành, đang áp dụng** và làm đúng theo đó.
- Người quản lý dùng thêm để xem trạng thái ban hành, phê duyệt, SLA/KPI.

## Product Purpose

Điểm vào duy nhất cho kho tài liệu hiện hành của oBacker: SOP, hướng dẫn nghiệp vụ, phiếu thao tác, phụ lục, TnC, căn cứ pháp luật và toàn văn văn bản. Mục đích là không ai làm việc theo bản sai hoặc bản cũ. Thành công = nhân viên tìm được và xác minh trong vài giây tài liệu nào là bản hiện hành, và khi hai tài liệu khác nhau thì bản nào đúng.

## Positioning

Bản đồng bộ của kho tài liệu quản lý (controlled documents): mỗi trang là một tài liệu có mã, phiên bản, trạng thái và chuỗi phê duyệt riêng; mục lục gốc cộng "Trạng thái ban hành" và "Nhật ký sửa toàn kho" là quyền tối cao về xung đột phiên bản. Cơ chế kiểm soát bản này là thứ một wiki hay notes site thường không thể cam kết thật được.

## Operating Context

- Nội dung là bản copy đồng bộ một chiều từ kho SOP (`SOP/Publish SOPs/`) bằng `_tools/dong_bo_sop_web.py`. Sửa nội dung làm trong kho SOP, không sửa tay `content/` trong repo này.
- Cấu trúc kho: `01_ToChuc`, `02_NoiBo`, `03_DichVu`, `04_Handbook_KeToan`, `07_Phieu`, `08_SoCanCu`, `09_TnC`, `10_DanhMuc`, `11_NhanSu`, `CanCu`, `VanBan`, plus `00_INDEX.md` là mục lục gốc.
- Mỗi tài liệu mang frontmatter quản trị: `code`, `version` (R.x.y), `status`, `author/reviewer/approver`, `law_as_of`, `next_review`, `distribution`, tags theo các chiều `loai/`, `dich-vu/`, `nghiep-vu/`, `cap/`.
- Tiếng Việt là ngôn ngữ chính; thư mục `09_TnC` song ngữ VI/EN (cặp file `_VI.md`/`_EN.md`).
- Build: `npx quartz build` (phải sạch lỗi); preview `npx quartz build --serve` (localhost:8080); deploy Cloud Run (service `sop-web`, IAP) bằng `./scripts/deploy.sh` **chỉ khi CEO yêu cầu rõ**.

## Capabilities and Constraints

- Site tĩnh Quartz 4, SPA mode, search/tags/folder pages/backlinks có sẵn; component tùy biến (LegalNav, ReaderMode, ConditionalRender…) và theme tùy biến trong `quartz.config.ts` + `quartz/styles/custom.scss`.
- Chỉ đọc: không có chức năng chỉnh sửa trên site; nội dung chỉ đến qua sync.
- Truy cập qua IAP — chỉ Google account nội bộ; site không public.
- Node >= 22, npm >= 10.9.2.
- Chưa có quyết định về việc thêm bề mặt public nào; mọi thay đổi bề mặt phải giữ tính nội bộ.

## Brand Commitments

- Tên: oBacker (pageTitle "oBacker SOP"). Chưa có ràng buộc thương hiệu nào khác được xác nhận; hướng hình ảnh do các bước sau (new-work/document) quyết định, không thuộc init.

## Evidence on Hand

- Toàn bộ kho tài liệu controlled tại `content/` (hàng trăm trang), gồm toàn văn văn bản pháp luật tại `content/VanBan/` và căn cứ pháp luật tại `content/CanCu/`.
- TnC song ngữ VI/EN tại `content/09_TnC/`.
- Không có testimonial, benchmark, press hay tài sản marketing — mọi bề mặt sau này không được bịa thêm các thứ này.

## Product Principles

1. Bản hiện hành, đang áp dụng là câu trả lời duy nhất đúng — phiên bản và mục lục gốc luôn thắng trong mọi xung đột.
2. Đây là tài liệu pháp lý – vận hành: tính chính xác của nội dung quan trọng hơn mọi trang trí hình ảnh; không bao giờ bịa hoặc diễn giải lại nội dung pháp lý.
3. Chỉ nội bộ: nội dung nhạy cảm (tài chính, lương, thông tin khách hàng) — mọi bề mặt phải giữ nguyên tính nội bộ.
4. Tài liệu dày (bảng, quy trình, phiếu) phải quét nhanh được, không chỉ đẹp.
5. Đồng bộ một chiều: web không bao giờ chạy lệch kho SOP; site là người đọc, không phải người viết.
