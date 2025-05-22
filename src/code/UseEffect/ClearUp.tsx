import { use, useEffect } from "react";

const UseEffect = () => {
    // Trong trường hợp này, useEffect sẽ chạy mỗi khi component
    // được render lại hoặc state/props thay đổi
    // và sẽ in ra "Component mounted" khi component được mounted,
    // và "Component unmounted" khi component bị unmounted
    // ClearUp function chỉ chạy từ lần conponent render thứ 2 trở đi, 
    // lần đầu tiên sẽ chạy hàm callback
    // và không chạy hàm clearUp
    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Component unmounted");
        };
    }, []);


    useEffect(() => {
        const timerId = setInterval(() => {
            console.log('Chạy ngay đi');

        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [])

    const serverUrl = "wss://example.com";
    const roomId = "room-1";
    function createConnection(url: string, room: string) {
        return {
            connect: () => console.log(`Connected to ${url} in ${room}`),
            disconnect: () => console.log(`Disconnected from ${url} in ${room}`)
        };
    }
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.connect()
        return () => connection.disconnect()
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetchData(value, { signal }).then((data) => {
            console.log(data);

        })
        return () => {
            controller.abort();
        }
    }, [value])

    return <div>UseEffect</div>;
};

export default UseEffect;
