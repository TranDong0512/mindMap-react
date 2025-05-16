import { useRef, useEffect, forwardRef } from 'react';

// Child component using forwardRef
const FancyInput = forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} placeholder="Type here" {...props} />;
});

export function App() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return <FancyInput ref={inputRef} />;
}
