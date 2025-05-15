import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";

const data = [
    { question: 'Reactjs là gì?', answers: ["React.js là một thư viện Javascript để xây dựng giao diện người dùng được Fb phát triển và được đóng góp lớn từ cộng đồng."] },
    { question: 'Sử dụng để làm gì?', answers: ["React.js được dùng để xây dựng Single Page Applications (SPA). Nghĩa là ứng dụng chỉ cần tải 1 lần và cập nhật nội dung mà không cần phải reload lại trang."] },
    { question: 'Phù hợp với các ứng dụng nào?', answers: ["React phù hợp với các ứng dụng lớn, khả năng mở rộng cao."] },
    { question: 'ReactJS hoạt động như thế nào?', answers: ['React sử dụng Virtual DOM để quản lý và cập nhật giao diện. Khi dữ liệu thay đổi, React chỉ cập nhật những phần giao diện cần thiết thay vì tải lại toàn bộ trang.'] },
    {
        question: 'Điểm mạnh, yếu của React.js?', answers: [" Ưu điểm: Tốc độ tải rang mượt, trải nghiệm người dùng tốt. Nó chia nhỏ các thanh phần thành các component giúp dễ quản lý, tái sử dụng ở nhiều nơi. Mỗi khi dữ liệu được cập nhật mới thì thay vì cập nhật lại toàn bộ trang react chỉ cập nhật các component liên quan => tối ưu hiệu suất.",
            "Yếu điểm: Khó học với một số người. Lần chạy đầu tiên của dự án sẽ lâu vì phải đọc tòa bộ dự án."
        ]
    },
]
const WhatReact = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về React.js
                </h2>
                <AccordionItemComponent data={data} />
            </div>
        </Container>
    )
};
export default WhatReact