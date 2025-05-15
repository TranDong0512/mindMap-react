/** @format */

import { useState } from "react";



const useCounter = () => {
    const [count, setCount] = useState(0);
    return {
        count,
        increment: () => setCount((prev) => prev + 1),
    };
};

export const Counter = () => {
    const { count, increment } = useCounter();
    return (
        <>
            {" "}
            <button onClick={() => increment}> Tăng </button> <p> Đã nhấp :{count} </p>{" "}
        </>
    );
};

