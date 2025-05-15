import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";


const virtualDomData = [
    {
        question: 'Virtual DOM là gì?',
        answers: [
            "Virtual DOM là một cấu trúc dữ liệu dạng cây (tree) được lưu trong bộ nhớ, đại diện cho giao diện người dùng.",
            "Đây không phải là DOM thật mà trình duyệt hiển thị, mà là một bản sao ảo, trừu tượng được React tạo ra từ các component.",
            "Mỗi khi state hoặc props thay đổi, React sẽ tạo ra một bản Virtual DOM mới.",
            "React so sánh (diffing) Virtual DOM mới với phiên bản trước đó (old Virtual DOM) để xác định sự khác biệt.",
            "Chỉ những phần thay đổi sẽ được cập nhật lên DOM thật (real DOM) thông qua quá trình 'reconciliation' (điều hòa)."
        ]
    },
    {
        question: 'Virtual DOM hoạt động như thế nào?',
        answers: [
            "React tạo ra một bản Virtual DOM mới khi có sự thay đổi về dữ liệu.",
            "So sánh Virtual DOM mới với Virtual DOM cũ để tìm ra sự khác biệt (diffing).",
            "Chỉ cập nhật những phần cần thiết lên Real DOM (DOM thật) — giúp tối ưu hiệu suất.",
            "Quá trình cập nhật này diễn ra rất nhanh và hiệu quả nhờ Virtual DOM."
        ]
    },
    {
        question: 'Ý nghĩa của Virtual DOM là gì?',
        answers: [
            "Tối ưu hiệu suất: Giảm số lần thao tác trực tiếp với DOM thật — vốn rất tốn tài nguyên.",
            "Đơn giản hóa việc phát triển: Lập trình viên chỉ cần quan tâm tới dữ liệu và trạng thái, không cần trực tiếp thao tác với DOM.",
            "Cải thiện trải nghiệm người dùng: Các cập nhật giao diện diễn ra mượt mà và nhanh chóng."
        ]
    },
    {
        question: 'Vì sao cần Virtual DOM?',
        answers: [
            "Vì thao tác trực tiếp với DOM thật rất tốn thời gian và hiệu suất.",
            "Khi số lượng cập nhật nhiều và liên tục, Virtual DOM giúp tối ưu hóa quá trình cập nhật giao diện.",
            "Giảm thiểu tình trạng giật lag khi giao diện có nhiều thao tác động."
        ]
    }
]


const VirtualDom = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về VirtualDom
                </h2>
                <AccordionItemComponent data={virtualDomData} />
            </div>
            <div className="mt-4"></div>
        </Container>
    )
};
export default VirtualDom
