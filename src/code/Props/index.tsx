import React from "react";
interface ChildrenProps {
    name: string;
    age: number;
    address: string;
    phone: string;
    email: string;
}
const Parent = () => {
    const [name,] = React.useState("Minh");
    const [age,] = React.useState(25);
    const infor = {
        address: "Hà Nội",
        phone: "0123456789",
        email: "minh@gmail.com"
    }
    return (
        <Children name={name} age={age} {...infor} />
    )
};

export default Parent;

// Props là một đối tượng chứa các thuộc tính được truyền từ component cha xuống component con


export const Children2 = ({ name, age, address, phone, email }: ChildrenProps) => {
    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <p>Tên: {name}</p>
            <p>Tuổi: {age}</p>
            <p>Địa chỉ: {address}</p>
            <p>Số điện thoại: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}



export const Children = (props: ChildrenProps) => {
    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <p>Tên: {props.name}</p>
            <p>Tuổi: {props.age}</p>
            <p>Địa chỉ: {props.address}</p>
            <p>Số điện thoại: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
};