
import * as React from 'react';

// Sử dụng cơ bản
export function MyComponent() {
    const myRef = React.useRef(null);

    // Accessing the current value of the ref
    console.log(myRef.current);

    return <div ref={myRef}>Hello, useRef!</div>;
}

// Truy cập phần tử DOM
const App = () => {
    const ref = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    return <input ref={ref} />;
};

export default App;

// Lưu trữ các giá trị trước đó
// Tại đây, prevValueRef lưu trữ giá trị trước đó của value prop,
// cho phép chúng ta so sánh và thực hiện hành động khi giá trị thay đổi.
export function Base() {
    const [value, setValue] = React.useState(1);
    return (
        <>
            <button onClick={() => setValue((prev) => prev + 1)}>Change</button>
            <ValueChangeDetector value={value} />
        </>
    );
}
export function ValueChangeDetector(props: { value: number }) {
    const prevValueRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        if (prevValueRef.current !== undefined && prevValueRef.current !== props.value) {
            console.log('Value changed:', prevValueRef.current, '->', props.value);
        }

        prevValueRef.current = props.value;
    }, [props.value]);

    return <div>{props.value}</div>;
}

// Lưu trữ các giá trị không được quản lý
// useRef có thể được sử dụng để lưu trữ các giá trị không kích hoạt việc render lại khi chúng thay đổi.
// Điều này hữu ích cho việc lưu trữ đệm các phép tính tốn kém hoặc các giá trị không phải là một phần của trạng thái thành phần:
export function ExpensiveComponent() {
    const expensiveValueRef = React.useRef<number>(0);
    const [count, setCount] = React.useState<number>(0);

    const calculateExpensiveValue = () => {
        if (expensiveValueRef.current === 0) {
            // Perform expensive calculation
            expensiveValueRef.current = 0 // expensiveValueRef lưu trữ kết quả của phép tính tốn kém, đảm bảo rằng phép tính chỉ xảy ra một lần.
        }
        return expensiveValueRef.current;
    };

    return (
        <div>
            <p>Expensive Value: {calculateExpensiveValue()}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// Tương tác với các thư viện của bên thứ ba
// Khi tích hợp React với các thư viện hoặc API của bên thứ ba dựa trên các giá trị có thể thay đổi,
// useRef có thể được sử dụng để duy trì các tham chiếu và tương tác an toàn với các thư viện đó:
// chartRef giữ tham chiếu đến phần tử canvas và chartInstance giữ tham chiếu đến thể hiện Chart.
// Chúng ta tạo và hủy biểu đồ một cách an toàn trong hook useEffect.

import { Chart } from 'chart.js';

export function ChartComponent(props: { data: number[] }) {
    const chartRef = React.useRef<HTMLCanvasElement | null>(null);
    const chartInstance = React.useRef<Chart | null>(null);

    React.useEffect(() => {
        if (chartRef.current) {
            chartInstance.current = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: [...Array(props.data.length).keys()],
                    datasets: [
                        {
                            label: 'Data',
                            data: props.data,
                            borderColor: 'blue',
                        },
                    ],
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [props.data]);

    return <canvas ref={chartRef} />;
}