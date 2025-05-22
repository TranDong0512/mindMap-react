import React from "react";
interface Data {
    title: string;
    body: string;
}
const url = "https://jsonplaceholder.typicode.com/posts/1";
const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
const Fetching = () => {
    const [data, setData] = React.useState<Data | null>(null);

    React.useEffect(() => {
        fetchData().then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>{data && data.title}</h1>
            <p>{data && data.body}</p>
        </div>
    )
};

export default Fetching;
