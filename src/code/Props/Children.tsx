
import { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <h1>Props: Children</h1>
            <p>Children là một props đặc biệt được truyền động vào một component khi muốn đặt
                nội dung của các phần tử con. Chúng nằm giữa thẻ mở và thẻ đóng đại diện cho
                bất kỳ nội dung nào (JSX, text, component khác hoặc mảng các phần tử).</p>
            <p>Cho phép nhận và hiển thị nội dung mà không cần biết trước nội dung đó là gì,
                giúp component trở nên linh hoạt</p>
            <p>Chirlden trả về bất cứ thứ gì: JSX, Component, mảng thậm trí là null nếu
                không có nội dung</p>
            <p>Nên sử dụng Chirlden để tạo component có thể tái sử dụng: Card, modal, container</p>
            {children}
        </div>
    )
};

export default Wrapper;

export const Children = () => {
    return (
        <Wrapper>
            {/* Đây là children  */}
            <h2>Children</h2>
            <p>Có thể thao tác với Chirlden như một props thông thường, có thể lặp qua Chirlden,
                render cs điều kiện hoặc truyền nó vào component khác</p>

        </Wrapper>
    )
};
