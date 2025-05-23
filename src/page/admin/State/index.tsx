import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";
import stateClass from '@/assets/img/state-class.png'
import Image from "@/components/Image";
import state1 from '@/assets/img/state1.png'
import state2 from '@/assets/img/state2.png'
import state3 from '@/assets/img/state3.png'
import state4 from '@/assets/img/state4.png'
import ResizableComponent from "@/components/ResizableComponent";
const data = [
    {
        question: "State là gì?", answers: [
            `Trong phần trước đã nói giá trị của props không được thay đổi, 
            chỉ truyền từ compoent này qua cmponent khác(cha xuống con).
            Nhưng trong thực tế thì các Component cũng cần phải xử lý dữ liệu riêng, cập nhật dữ liệu riêng.
            Chính vì thế state ra đời để giải quyết bài toán về dữ liệu bên trong component.`
        ]
    }
]
const data2 = [
    {
        question: "useState là gì?", answers: [
            "- Là một hook được sử dụng trong Function Compoent thay thế cho this.state của class component",
            "- useState là một hàm trả về một mảng có 2 phần tử: giá trị hiện tại của state và hàm cập nhật giá trị của state.",
            "- Dùng để quản lý trạng thái, lưu trữ và cập nhật dữ liệu trong component. Khi state thay đổi thì React sẽ tự động rerender lại componet để phản ánh sự thay đổi đó.",
            "- useState có thể lưu trữ bất kì kiểu dữ liêu nào như số, chuỗi, mảng, object, function, ....",
            "- Có thể sử dụng nhiều state trong 1 component."
        ]
    }
]
const data3 = [
    {
        question: "Cú pháp", answers: [
            "const [state, setState] = useState(initialState);",
            "- state - Biến chứa giá trị hiện tại",
            "- setState - Hàm cập nhật lại giá trị của state. Khi gọi setState react sẽ rerender lại component với giá trị mới",
            "- setState có thể nhận vào 1 giá trị hoặc 1 hàm callback. Nếu truyền vào giá trị thì giá trị này sẽ được gán cho state. Nếu truyền vào hàm callback thì hàm này sẽ nhận vào giá trị trước đó và trả về giá trị mới cho state.",
            "- initialState - Giá trị ban đầu của state chỉ sử dụng tại lần đầu component render. Nếu không truyền giá trị này thì state sẽ có giá trị là undefined.",
            "- initialState có thể là một hàm, trong trường hợp này hàm sẽ được gọi chỉ một lần khi component được khởi tạo. Điều này giúp tối ưu hiệu suất cho các state phức tạp.",
            "- initialState có thể là một component, trong trường hợp này component sẽ được render và trả về giá trị cho state.",
        ]
    }
]
const data4 = [
    {
        question: "state", answers: [
            "- Trong 1 component có thể sử dụng nhiều state nhưng không nên lạm dụng state, cấn áp dụng các kiến thức nâng cao để tối ưu state 1 cách hiệu quả"
        ]
    },
    {
        question: "setState", answers: [
            "- setState không cập nhật state ngay lập tức",
            "- Nếu giá trị state trước đó dùng để tính toán giá trị mới, hãy dùng hàm callback trong setState để tránh lỗi khi cập nhật liên tục."
        ]
    }
]
const State = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về State
                </h2>
                <AccordionItemComponent data={data} />
                <Image src={stateClass} alt='HTML JSX' width={500} height={500}></Image>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về useState
                </h2>
                <AccordionItemComponent data={data2} />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Giải thích chi tiết
                </h2>
                <AccordionItemComponent data={data3} />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Lưu ý
                </h2>
                <AccordionItemComponent data={data4} />
                <ResizableComponent img1={state3} img2={state4} />
                <ResizableComponent img1={state1} img2={state2} />

            </div>
            {/* Làm bài tập với form code/formState */}
        </Container>
    )
};

export default State;
