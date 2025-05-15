import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";

const reactDomData = [
    {
        question: 'ReactDOM là gì?',
        answers: [
            "ReactDOM là một thư viện trong React, đóng vai trò kết nối giữa các component React và DOM thật của trình duyệt.",
            "Nó chịu trách nhiệm render các component React lên giao diện người dùng trên trình duyệt.",
            "ReactDOM hoạt động cùng với Virtual DOM để tối ưu quá trình cập nhật giao diện."
        ]
    },
    {
        question: 'Các chức năng chính của ReactDOM là gì?',
        answers: [
            "Render Component: Dùng phương thức `ReactDOM.render()` hoặc `createRoot().render()` để render các component React vào một phần tử trong DOM thật.",
            "Quản lý cập nhật: Đồng bộ hóa các thay đổi trong Component (state, props) với DOM thật thông qua cơ chế Virtual DOM để tối ưu hiệu suất.",
            "Xử lý sự kiện: Quản lý sự kiện người dùng (onClick, onChange, v.v.) thông qua hệ thống sự kiện tổng hợp (Synthetic Events) giúp giảm số lượng event listener trên DOM.",
            "Tháo component khỏi DOM: Có thể remove component khỏi DOM bằng các phương thức như `unmountComponentAtNode()`."
        ]
    },
    {
        question: 'ReactDOM khác gì với React?',
        answers: [
            "React là thư viện dùng để định nghĩa, khai báo và quản lý các component, logic và trạng thái giao diện.",
            "ReactDOM là thư viện trung gian giúp React làm việc với DOM thật trên trình duyệt, thực hiện render và cập nhật giao diện.",
            "Nói ngắn gọn: ReactDOM giúp đưa các component của React hiển thị ra ngoài trình duyệt."
        ]
    }
];

const ReactDom = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về ReactDOM
                </h2>
                <AccordionItemComponent data={reactDomData} />
            </div>
        </Container>
    )
};

export default ReactDom