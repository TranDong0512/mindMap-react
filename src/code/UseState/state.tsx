import { useState } from "react";
// Lạm dụng state, không tối ưu
export const Login = () => {
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <p>Name: {name}</p>
            <p>Password: {password}</p>
        </div>
    )
};
