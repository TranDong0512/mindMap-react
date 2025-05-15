import { useState } from "react";

const UseState = () => {
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

export default UseState;
