

import vite01 from '../../../assets/img/vite01.png'
import Container from "@/components/Container";
import { AccordionItemComponent } from "@/components/AccordionItem";
import { AlertComponent } from "@/components/AlertComponent";
const data = [
    {
        question: 'Vite là gì?',
        answers: [
            "Vite là một công cụ build (trình biên dịch) dành cho các dự án web hiện đại, giúp tăng tốc quá trình phát triển và build project.",
            "Được tạo ra bởi Evan You (tác giả Vue.js)."
        ]
    },
    {
        question: 'Vite dùng để làm gì?',
        answers: [
            "Dùng để khởi chạy server phát triển và build ứng dụng web một cách nhanh chóng.",
            "Cung cấp tính năng Hot Module Replacement (HMR) giúp cập nhật giao diện ngay lập tức khi thay đổi code mà không phải reload trang."
        ]
    },
    {
        question: 'Vì sao Vite khởi động nhanh?',
        answers: [
            "Vì Vite không bundle toàn bộ mã nguồn khi khởi động server.",
            "Nó sử dụng native ES modules trong trình duyệt để tải từng file khi cần, nên tốc độ khởi động rất nhanh."
        ]
    },
    {
        question: 'Vite hoạt động như thế nào?',
        answers: [
            "Trong môi trường development, Vite dùng native ES module và HMR để cập nhật module khi có thay đổi.",
            "Khi build production, Vite sử dụng Rollup để đóng gói và tối ưu mã nguồn thành các file tĩnh."
        ]
    },
    {
        question: 'Ưu điểm của Vite là gì?',
        answers: [
            "Khởi động server phát triển cực nhanh.",
            "Hot Module Replacement (HMR) nhanh và mượt mà.",
            "Cấu hình đơn giản và dễ dùng.",
            "Build production hiệu quả nhờ dùng Rollup.",
            "Hỗ trợ tốt cho nhiều framework như Vue, React, Svelte…"
        ]
    },
    {
        question: 'Nhược điểm của Vite là gì?',
        answers: [
            "Vì là công cụ mới nên một số thư viện cũ chưa hỗ trợ tốt.",
            "Cộng đồng và plugin chưa đa dạng bằng Webpack."
        ]
    }
]

const Vite = () => {
    return (
        <Container>
            <div className="space-y-8">
                {/* Phần Alert 1: CDN */}
                <div className="rounded-lg shadow-md bg-white p-6">
                    <AlertComponent
                        color="blue"
                        link="https://legacy.reactjs.org/docs/cdn-links.html"
                        text="Cài đặt dự án bằng CDN thông qua script"
                        detail='<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>'
                    />
                </div>

                <div className="rounded-lg shadow-md bg-white p-6">
                    <AccordionItemComponent data={data} />
                </div>

                <div className="rounded-lg shadow-md bg-white p-6">
                    <AlertComponent
                        color="green"
                        link="https://vite.dev/guide/"
                        text="Sử dụng Vite"
                        detail='npm create vite@latest my-app -- --template react
npm create vite@latest my-app -- --template react-ts'
                    />
                </div>

                <div className="flex justify-center">
                    <img
                        src={vite01}
                        alt="Vite setup illustration"
                        className="rounded-lg shadow-md max-w-full h-auto"
                        style={{ maxWidth: "700px" }}
                    />
                </div>
            </div>
        </Container>
    )
};
export default Vite