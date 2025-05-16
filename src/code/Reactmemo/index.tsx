import React, { useState } from "react";
// Input sẽ chỉ log count lần đầu tiên khi render
// Các lần sau nếu count không thay đổi thì Input sẽ không bị render lại
type Number = {
    count: number
}

const Input = React.memo(({ count }: Number) => {
    console.log(count);
    return (
        <input type="text" />
    )
});
const App = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<number>(0);
    return (
        <>
            <Input count={count} />
            <div>{name}</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setName(name + 1)}>Click </button>
        </>
    )
};

export default App;
