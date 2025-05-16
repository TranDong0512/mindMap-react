import React, { useCallback, useState } from 'react';

// Trường hợp không dùng useCallback thì mỗi lần component render lại 
// thì hàm increment sẽ bị khởi tạo lại dẫn đến thừa 
export function Counter() {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount((prev) => prev + 1)
    };

    return <button onClick={increment}>Tăng {count}</button>;
}


export function CounterCallback() {
    const [count, setCount] = useState<number>(0)

    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return <button onClick={increment}>Tăng {count}</button>
}