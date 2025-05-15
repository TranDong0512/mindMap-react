import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";

const data = [
    {
        question: 'Props là gì?', answers: [
            'Component thực chất là một function ( hoăc class ) trong đó phương thức truyền giá trị giữa các function được gọi là props. Nó được React xử lý và trả về kết quả trên trình duyệt.',
            "Props giúp component con nhận được giá trị hoặc hàm từ component cha, sau đó sử dụng hoặc hiển thị dữ liệu đó.",
            "Dữ liệu truyền qua props có thể là: số, chuỗi, boolean, object, mảng hoặc một hàm callback."
        ]
    },
    {
        question: 'Tính chất của props', answers: [
            "Props là **bất biến** (immutable) trong component con — nghĩa là component con chỉ được **đọc giá trị** từ props mà không được phép thay đổi trực tiếp.",
            "Nếu muốn thay đổi giá trị, phải dùng callback để thông báo cho component cha cập nhật lại.",
            "Props có thể truyền nhiều kiểu dữ liệu khác nhau và có thể thiết lập giá trị mặc định bằng `defaultProps`.",
            "Component con có thể tạo giá trị mới dựa trên props mà không sửa đổi trực tiếp props ban đầu."
        ]
    },
    {
        question: "Props truyền đi như thế nào?",
        answers: [
            "Component cha sẽ truyền props cho component con thông qua cú pháp tương tự như thuộc tính của thẻ HTML.",
            "Ví dụ: `<User name='Minh' age={25} />` sẽ truyền 2 props là `name` và `age` vào component `User`."
        ]
    },
    {
        question: "Tại sao Props là bất biến?",
        answers: [
            "Giữ cho luồng dữ liệu trong ứng dụng React **đơn chiều (one-way data flow)**, đảm bảo tính rõ ràng, dễ kiểm soát và debug.",
            "Nếu component con được phép thay đổi trực tiếp props thì luồng dữ liệu sẽ trở nên rối loạn, khó kiểm soát và dễ gây lỗi."
        ]
    }
]
const data2 = [
    {
        question: "Children", answers: [
            "Là một props đặc biệt được truyền động vào một component khi muốn đặt nội dung của các phần tử con. Chúng nằm giữa thẻ mở và thẻ đóng đại điện cho bất kỳ nội dung nào (JSX, text, component khác hoặc mảng các phần tử).",
            "Cho phép nhận và hiển thị nội dung mà không cần biết trước nội dung đó là gì, giúp component trở nên linh hoạt",
        ],
    },
    {
        question: "Lưu ý", answers: [
            "Chirlden trả về bất cứ thứ gì: JSX, Component, mảng thậm trí là null nếu không có nội dung",
            "Nên sử dụng Chirlden để tạo component có thể tái sử dụng: Card, modal, container",
            "Có thể thao tác với Chirlden như một props thông thường, có thể lặp qua Chirlden, render cs điều kiện hoặc truyền nó vào component khác"
        ]
    }
]
const Props = () => {
    return (
        <Container>
            <div className=" rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-1">
                    Tìm hiểu về Props
                </h2>
                <AccordionItemComponent data={data} />
            </div>
            <div className=" rounded-lg shadow-md p-6 mt-2">
                <h2 className="text-2xl font-bold mb-1">
                    Tìm hiểu về Children
                </h2>
                <AccordionItemComponent data={data2} />
            </div>
        </Container>
    )
};

export default Props;
