import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";
import ResizableComponent from "@/components/ResizableComponent";

import html from '@/assets/img/HTML.png'
import jsx from '@/assets/img/JSX.png'
import HTMLJSX from '@/assets/img/HTML&JSX.png'
import Image from "@/components/Image";
const data = [
    {
        question: "JSX là gì?",
        answers: [
            "JSX (JavaScript XML) là một cú pháp mở rộng của JavaScript cho phép viết code có cấu trúc giống HTML ngay trong JavaScript.",
            "Có thể hiểu là cách viết HTML trực tiếp trong JavaScript, nhưng thực tế khi build sẽ được biên dịch về JavaScript thông qua Babel.",
            "JSX giúp mô tả giao diện UI rõ ràng, trực quan hơn khi làm việc với các component."
        ]
    },
    {
        question: "Tại sao cần dùng JSX?",
        answers: [
            " Giúp code rõ ràng, dễ đọc, dễ viết hơn khi xây dựng giao diện người dùng bằng React.",
            " Có thể nhúng biểu thức JavaScript vào trong JSX bằng cú pháp `{}`.",
            " Tự động chống lại tấn công XSS (Cross-site Scripting): ReactDOM sẽ loại bỏ những ký tự đặc biệt trong giá trị được nhúng vào JSX trước khi render lên DOM, giúp ngăn ngừa injection.",
            " Dễ bảo trì, chia nhỏ component UI, tăng tính tái sử dụng."
        ]
    }
];

const JSX = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về JSX
                </h2>
                <AccordionItemComponent data={data} />
            </div>
            <div className="mt-4"></div>
            <div className="mt-4"></div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    So sánh giữa HTML và JSX
                </h2>
                <ResizableComponent img1={html} img2={jsx} />

                <p className="mt-1 mb-1">
                    - Việc render ra thẻ div, h1 và nút button có sự kiện onClick() khi dùng HTML là rất phức tạp
                </p>
                <Image src={HTMLJSX} alt='HTML JSX' width={500} height={500}></Image>
            </div>

        </Container>
    )
};

export default JSX;
