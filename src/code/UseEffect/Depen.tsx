import React from "react";

const Depen = () => {
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // Trong trường hợp này, useEffect sẽ chạy liên tục và làm cho component bị render lại liên tục
        // Điều này sẽ dẫn đến việc component bị render lại liên tục và không thể dừng lại
        setData([])
        // useEffect sẽ chạy lại mỗi khi giá trị của data thay đổi
        // Trong trường hợp này sẽ dẫn đến việc component bị render lại liên tục và không thể dừng lại
        // Lý do là vì useEffect sẽ so sánh địa chỉ ô nhớ của 2 mảng data ở thời điểm hiện tại với data ở lần 1
        // Và địa chỉ ô nhớ sẽ không trùng nhau nên sẽ dẫn đến việc component bị render lại liên tục
    });

    React.useEffect(() => {
        // Trong trường hợp này, useEffect sẽ chạy mỗi khi component
        // được render lại hoặc state/props thay đổi
        setCount(count + 1);
        // Component sẽ bị render lại 2 lần trong trường hợp này
        // Lần 1 là khi component được mount
        // Lần 2 là khi useEffect chạy lại
        // và setCount sẽ làm cho component render lại 2 lần, nó sẽ so sánh count ở thời điểm hiện tại 
        // với count ở lần 1
        // useEffect sẽ chạy lại mỗi khi giá trị của count thay đổi
    });

    React.useEffect(() => {
        // useEffect sẽ chỉ chạy lần đầu tiên khi component được mount
        console.log("Chỉ chay khi component mount");
        return () => {
            console.log("Cleanup");
        };
        // Depen là mảng rỗng, không có sự phụ thuộc vào bất kỳ giá trị nào
    }, []);

    React.useEffect(() => {
        // useEffect sẽ chạy lần đầu tiên khi component được mount
        // và sẽ chạy lại mỗi khi giá trị của count thay đổi
        // Cleanup function sẽ chạy trước khi component unmount
        // hoặc trước khi useEffect chạy lại
        console.log("Count changed:", count);
        return () => {
            console.log("Cleanup for count:", count);
        };

        // Depen là mảng có sự phụ thuộc vào count
        // Nếu count thay đổi thì useEffect sẽ chạy lại
    }, [count]);






    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <h2>Data:</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Depen;
