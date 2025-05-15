/** @format */

import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const data = [
    {
        question: "Component là gì?",
        answers: [
            "Component là các thành phần giao diện nhỏ trong React, giúp chia nhỏ một trang web thành từng phần độc lập như Header, Footer, Sidebar, Navbar, Button…",
            "Vì mỗi component hoạt động giống như một hàm JavaScript nên có thể được tái sử dụng ở nhiều nơi khác nhau, giúp code gọn gàng và dễ bảo trì.",
            "Component còn giúp tách biệt phần giao diện (UI) và logic xử lý, dễ dàng quản lý từng phần nhỏ của giao diện."
        ],
    }
];

const data2 = [
    {
        question: "Cách viết Component trong React",
        answers: [
            "Component có thể được viết dưới dạng **Function Component** hoặc **Class Component** (thường dùng Function Component từ React 16.8 trở đi với hook).",
            "Bên trong `return` của một Function Component luôn phải trả về một khối JSX, và JSX đó chỉ được bọc bởi **một element duy nhất** (ví dụ: `<div>`, `<section>` hoặc `<>...</>`).",
            "Tên component phải viết hoa chữ cái đầu và khi gọi component thì dùng cú pháp `<TenComponent />` hoặc `<TenComponent></TenComponent>`."
        ],
    },
    {
        question: "Tại sao phải chia nhỏ giao diện thành các Component?",
        answers: [
            "Giúp tổ chức mã nguồn rõ ràng, dễ quản lý, dễ bảo trì.",
            "Tăng khả năng tái sử dụng: một component có thể dùng lại ở nhiều chỗ khác nhau mà không cần viết lại.",
            "Dễ dàng kiểm soát từng phần giao diện và logic riêng biệt, thuận tiện cho việc nâng cấp và sửa lỗi.",
            "Tối ưu hiệu suất nhờ khả năng chỉ render lại những component có dữ liệu thay đổi."
        ],
    }
];

const Component = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về Component
                </h2>
                <AccordionItemComponent data={data} />
            </div>
            <div className="mt-4"></div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Cách viết Component
                </h2>
                <AccordionItemComponent data={data2} /> <SyntaxHighlighter
                    language="javascript"
                    style={darcula}
                    customStyle={{
                        padding: "1rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        overflowX: "auto",
                    }}
                >
                    {`
const SyntaxComponent = () => {
    return (
        <div className="container">
            <h3>Nguyễn Văn A</h3>
            <p>Tuổi: 25</p>
        </div>
    )
};

export default SyntaxComponent;
                `}
                </SyntaxHighlighter>

            </div>

        </Container>
    );
};

export default Component;
