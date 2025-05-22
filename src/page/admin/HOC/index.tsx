import React, { useEffect, useState } from "react";

const HOC = () => {
    const [state, setState] = useState()
    const [state1, setState1] = useState(0) // 1

    // component mount thì useEffect đc chạy
    // và bất kì 1 state hoặc props nào bị thay đổi giá trị thì useEffect sẽ chạy lại

    useEffect(() => {
        // Sẽ so sánh giá trị trước đó của state và giá trị mà nó đang đc set
        setState1(1)
    },)
    return <div>index</div>;
};

export default HOC;
