import { AccordionItemComponent } from "@/components/AccordionItem";
import Container from "@/components/Container";
import lifecycle from "@/assets/img/lifecycleClass.png";
import Image from "@/components/Image";

const lifecycleData = [
    {
        question: 'Lifecycle là gì?',
        answers: [
            `Lifecycle là một khái niệm trong React để mô tả các giai đoạn khác nhau trong vòng đời của một component.`,
            `Nó bao gồm các giai đoạn như mounting (gắn kết), updating (cập nhật) và unmounting (ngắt kết nối).`,
            `Mỗi giai đoạn có các phương thức tương ứng mà bạn có thể sử dụng để thực hiện các tác vụ cụ thể.`
        ],
    },
    {
        question: 'Các giai đoạn của Lifecycle',
        answers: [
            `Mounting: Khi component được tạo ra và thêm vào DOM, các state được khởi tạo, tạo DOM ảo, Brower cập nhật giao diện. 
             Các phương thức liên quan bao gồm constructor, getDerivedStateFromProps, render, componentDidMount. `,
            `Updating: Khi component nhận props mới hoặc state mới, cập nhật DOM . 
             Các phương thức liên quan bao gồm getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate.`,
            `Unmounting: Khi component bị xóa khỏi DOM. 
             Phương thức liên quan là componentWillUnmount.`
        ],
    },
]

const Lifecycle = () => {
    return (
        <Container>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Tìm hiểu về Lifecycle
                </h2>
                <AccordionItemComponent data={lifecycleData} />
                <Image src={lifecycle} alt='lifecycle' width={500} height={500}></Image>
            </div>

            <div className="mt-4"></div>
        </Container >
    )
};

export default Lifecycle;
