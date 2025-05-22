import { Input } from "@/components/ui/input";
import { useState } from "react";

const UseState01 = () => {
    const [count, setCount] = useState<number>(0)
    /* 
    - Khi truyền callBack vào setState thì callBack sẽ nhận giá
     trị trước đó (prev) và trả về giá trị mới.
        Tăng state từ 1 lên 2
        Tăng state từ 2 lên 3
        Tăng state từ 3 lên 4
    */
    const handleCount = () => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={handleCount}>Update count</button>
        </>
    )
};

export default UseState01;


export const UseState02 = () => {
    const [state, setState] = useState({
        name: "",
        age: 0
    })

    const [node, setNode] = useState([<Input />])

    const [fun] = useState(() => (
        <p>Hello</p>
    ));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleNode = () => {
        setNode([...node, <Input key={node.length} />])
    }
    return (
        <>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
            <Input name="name" value={state.name} onChange={handleChange} />
            <Input name="age" value={state.age} onChange={handleChange} />
            <button onClick={handleNode}>Add Input</button>
            {node}
            {fun}
        </>
    )
};

