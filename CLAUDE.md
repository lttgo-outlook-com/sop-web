# Quy tắc làm việc trên kho sop-web (oBacker SOP Web)

Tệp này quy định nguyên tắc phát triển, quản lý mã nguồn và quy trình phát hành cho `sop-web`.

---

## 1. Nguyên tắc cốt lõi về Deploy & Git

1. **TUYỆT ĐỐI KHÔNG TỰ Ý DEPLOY LÊN CLOUD RUN / PRODUCTION:**
   * Không được tự động chạy `./scripts/deploy.sh` hoặc `gcloud builds submit`.
   * Không được tự ý đẩy mã nguồn sang nhánh `deploy`.
   * Không được cấu hình trigger tự động deploy khi có commit mới trên `master`.
   * **Chỉ deploy khi Tuấn yêu cầu rõ ràng** bằng chỉ đạo trực tiếp trong chat (ví dụ: "deploy lên web", "deploy Cloud Run").

2. **QUY TRÌNH PHÁT TRIỂN & MERGE:**
   * Mọi sửa đổi tính năng, sửa lỗi giao diện, tối ưu CSS/component: commit hoặc mở Pull Request và **tự động merge vào nhánh `master`**.
   * Sau khi merge vào `master`: kiểm tra build cục bộ (`npx quartz build`), xác nhận kết quả sạch sẽ và **dừng lại tại đó**, thông báo cho Tuấn nội dung đã merge.

---

## 2. Các lệnh thường dùng

| Việc | Lệnh | Ghi chú |
| :--- | :--- | :--- |
| Kiểm tra build tĩnh | `npx quartz build` | Phải hoàn thành không có lỗi cú pháp |
| Xem trước cục bộ | `npx quartz build --serve` | Chạy dev server tại localhost:8080 |
| Deploy Cloud Run (CHỈ khi Tuấn yêu cầu) | `./scripts/deploy.sh` | Chạy Cloud Build trực tiếp và deploy Direct IAP |

---

## 3. Cấu trúc hệ thống

* `content/`: Thư mục chứa các tài liệu Markdown ban hành, được đồng bộ từ kho `SOP/Publish SOPs/` bằng công cụ `_tools/dong_bo_sop_web.py`.
* `quartz/`: Mã nguồn engine Quartz 4 (components, plugins, layout, styles).
* `scripts/deploy.sh`: Script build Docker image qua Cloud Build và deploy Cloud Run service `sop-web` với cờ `--no-default-url` và `--iap`.
* `.github/workflows/deploy.yaml`: Workflow GitHub Actions dự phòng (chỉ chạy thủ công qua `workflow_dispatch` hoặc push vào nhánh `deploy`, không kích hoạt trên `master`).
