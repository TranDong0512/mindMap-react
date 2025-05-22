import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";
import ResizableComponent from "@/components/ResizableComponent";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import depen1 from '@/assets/img/depen1.png'
import depen2 from '@/assets/img/depen2.png'
import depen3 from '@/assets/img/depen3.png'
import depen4 from '@/assets/img/depen4.png'

import clear1 from '@/assets/img/useEffect_clearup1.png'
import clear2 from '@/assets/img/useEffect_clearup2.png'
import clear3 from '@/assets/img/useEffect_clearup3.png'
import clear4 from '@/assets/img/useEffect_clearup4.png'
const useEffectData = [
    {
        question: 'useEffect là gì?',
        answers: [
            "useEffect là một hook trong React cho phép bạn thực hiện các tác vụ phụ (side effects) trong component.",
            "Nó được sử dụng để xử lý các tác vụ như gọi API, cập nhật DOM, hoặc thiết lập subscription.",
            "useEffect được gọi sau khi render và có thể được sử dụng để dọn dẹp (cleanup) các tác vụ trước đó."
        ],
    },
    {
        question: "Side effects trong React",
        answers: [
            "Tác vụ chính là những tác vụ liên quan trực tiếp đến việc render giao diện, ví dụ như cập nhật state hoặc props.",
            "Side effects là những tác vụ không liên quan trực tiếp đến việc render giao diện, ví dụ như gọi API, cập nhật DOM, hoặc thiết lập subscription, timmer, cập nhật dữ liệu trong storage.",
            "Vì react component là 1 pure functions (với cùng một props và state thì luôn render cùng một kết quả) nhưng side effect lại làm thay đổi trạng thái bên ngoài. Nó gây khó khăn trong việc kiểm soát và dự đoán hành vi của component.",
            "Trong React, side effects thường được thực hiện trong useEffect để đảm bảo rằng chúng không làm ảnh hưởng đến quá trình render.",
            "Việc sử dụng useEffect giúp tách biệt logic xử lý side effects ra khỏi phần render của component."
        ]
    },
    {
        question: "Tại sao cần useEffect?",
        answers: [
            "Để thực hiện các tác vụ phụ (side effects) mà không làm ảnh hưởng đến quá trình render của component.",
            "Để quản lý và dọn dẹp các tác vụ phụ khi component bị unmount hoặc khi các giá trị trong mảng phụ thuộc thay đổi.",
            "Để tối ưu hóa hiệu suất của ứng dụng bằng cách chỉ thực hiện các tác vụ phụ khi cần thiết."
        ]
    },
    {
        question: "Trường hợp sử dụng useEffect",
        answers: [
            `Gọi Api, lấy dữ liệu từ phía server`,
            `Kết nối vơi hệ thống bên ngoài`,
            `Chỉ định các phụ thuộc làm ảnh hưởng đến việc re-render`,
            `Cập nhật trạng thái trước đó dựa trên Effect`,
            `Xóa các phụ thuộc, các hàm không cần thiết`,
            `Đọc các props, state mới nhất từ effect`,
            `Hiển thị nội dụng khác nhau trên máy khách, máy chủ`
        ]
    }
]
const useEffectData2 = [
    {
        question: 'Các tham số của useEffect',
        answers: [
            "Tham số đầu tiên là một hàm callback, nơi bạn thực hiện các tác vụ phụ.",
            "Tham số thứ hai là một mảng phụ thuộc (dependency array), xác định khi nào hàm callback sẽ được gọi lại.",
            "Nếu mảng phụ thuộc rỗng, hàm callback chỉ được gọi một lần khi component mount.",
            "Nếu không truyền mảng phụ thuộc, hàm callback sẽ được gọi sau mỗi lần render."
        ],
    },
    {
        question: "Các trường hợp với dependencies",
        answers: [
            "Nếu không truyền mảng phụ thuộc, useEffect sẽ chạy sau mỗi lần render. Nếu có nhiều state hoặc props thay đổi, useEffect sẽ chạy lại nhiều lần.",
            "Nếu truyền mảng phụ thuộc rỗng, useEffect chỉ chạy một lần khi component mount.",
            "Nếu truyền mảng phụ thuộc với các giá trị cụ thể,useEffect sẽ chạy 1 lần khi component mount và sẽ chạy lại khi các giá trị trong mảng thay đổi."
        ]
    }
]
const useEffectData3 = [
    {
        question: "Clearup trong useEffect",
        answers: [
            "Clearup là tác vụ thực hành sau khi component unmount hoặc khi các giá trị trong mảng phụ thuộc thay đổi.",
            "Trước khi sideEffect chạy lại để dọn dẹp lần trước đó."
        ]
    },
    {
        question: 'Các trường hợp sử dụng clearup',
        answers: [
            ` Khi sử dụng setInterval, setTimout`,
            ` Event listener(window.addEventListener)`,
            ` Khi thiết lập các subscription(WebSocket, Firebase, hoặc observable).`,
            ` Khi useEffect phụ thuộc vào các giá trị thay đổi`,
            ` Khi reset trạng thái hoặc thực hiện hành động trước khi component unmount`,
        ]
    }
]
const useEffectData4 = [
    {
        question: "Cách react xử lý khi trong component sử dụng useEffect/useLayoutEffect",
        answers: [
            `1: React khởi tạo useState, nhận vào các props`,
            `2: Hàm function chạy trả về JSX`,
            `3: React DOM render JSX vào màn hình`,
            `4: useLayoutEffect chạy ngay sau khi cập nhật DOM và trước khi browser vẽ giao diện`,
            `5: useEfect chạy sau khi browser vẽ giao diện xong`
        ]
    }
]
const UseEffectComponent = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về useEffect
                </h2>
                <AccordionItemComponent data={useEffectData} />
                <SyntaxHighlighter
                    language="reactjs"
                    style={darcula}
                    customStyle={{
                        padding: "1rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        overflowX: "auto",
                    }}>
                    {`
useEffect(() => {
                    // Code thực hiện side effect ở đây
                    return () => {
                        // Code dọn dẹp (cleanup) ở đây
                    };
                }, [depen1, depen2, ...]);

                `}
                </SyntaxHighlighter>
                <AccordionItemComponent data={useEffectData2} />
                <ResizableComponent img1={depen1} img2={depen2} />
                <div className="mt-4"></div>
                <ResizableComponent img1={depen3} img2={depen4} />
                <AccordionItemComponent data={useEffectData3} />
                <ResizableComponent img1={clear1} img2={clear2} />
                <div className="mt-4"></div>
                <ResizableComponent img1={clear3} img2={clear4} />
                <AccordionItemComponent data={useEffectData4} />

            </div>
        </Container>
    )
};

export default UseEffectComponent;
