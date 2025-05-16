import { forwardRef, useRef, useImperativeHandle, InputHTMLAttributes } from 'react';
// Định nghĩa type cho các method mà ref có thể gọi
type CustomInputHandle = {
    focus: () => void
    clear: () => void
}
// Định nghĩa props cho input, thừa hưởng thuộc tính của input HTML
type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

// Trong react ref chỉ truy cập được tới DOM node hoặc class component. 
// Nếu muốn expose các method tùy chỉnh từ function component thì phải dùng `useImperativeHandle`
const CustomInput = forwardRef<CustomInputHandle, CustomInputProps>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    // expose các mothod qua useImperativeHandle
    // useImperativeHandle nhận vào ref từ component cha và một callback trả về các method mà component cha cps thể goị được
    // Nhờ đó khi component cha gọi ref.current.clear() nó sẽ thực thi đc hàm trong callback
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        clear: () => {
            if (inputRef.current) {
                inputRef.current.value = ''
            }
        },
    }));
    return <input ref={inputRef} {...props} />;
});

export function App() {
    const ref = useRef<CustomInputHandle>(null);
    return (
        <div>
            <CustomInput ref={ref} />
            <button onClick={() => {
                if (ref.current) {
                    ref.current.clear()
                }
            }}>Xóa</button>
        </div>
    );
}