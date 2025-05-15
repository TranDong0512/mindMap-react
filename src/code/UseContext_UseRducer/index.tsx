import React, { createContext, useContext, useReducer } from "react";

// Xác định cấu trúc user có name và address
interface IUser {
    name: string;
    address: string;
}

/* 
→ Xác định trạng thái authentication:

isAuthenticated: đang đăng nhập hay chưa

token: token nếu có

user: thông tin người dùng */
interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: IUser | null;
}

/* 
→ Các kiểu hành động mà reducer sẽ xử lý:

LOGIN: đăng nhập với token và user

LOGOUT: đăng xuất

UPDATE_USER: cập nhật thông tin user
*/
type AuthAction =
    | { type: "LOGIN"; payload: { token: string; user: IUser } }
    | { type: "LOGOUT" }
    | { type: "UPDATE_USER"; payload: IUser };

// Define the context type
interface AuthContextType {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}

// Tạo Context để chia sẻ state + dispatch
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* 
Hàm xử lý hành động 

LOGIN: set isAuthenticated, token, user

LOGOUT: reset state

UPDATE_USER: cập nhật thông tin user
*/
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

// Custom hook để lấy context một cách an toàn (check undefined)
const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContext.Provider");
    }
    return context;
};

// Login component
const Login: React.FC = () => {
    // Lấy dispatch để gửi action từ context
    const { dispatch } = useAuthContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        // Simulate authentication
        if (username === "admin" && password === "password") {
            const fakeToken = "fake-jwt-token-" + Math.random().toString(36).slice(2);
            const user = { name: "Admin User", address: "123 Main St" };
            // Gửi action thông qua dispatch với type = 'Login' và dữ liệu thông qua payload
            dispatch({ type: "LOGIN", payload: { token: fakeToken, user } });
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        style={{ width: "100%", marginBottom: "10px" }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        style={{ width: "100%", marginBottom: "10px" }}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p style={{ marginTop: "10px" }}>
                Hint: Use username "admin" and password "password"
            </p>
        </div>
    );
};

// UserProfile component (protected)
const UserProfile: React.FC = () => {
    // Lấy state + dispatch từ context
    const { state, dispatch } = useAuthContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedUser = {
            name: formData.get("name") as string,
            address: formData.get("address") as string,
        };
        // Gửi action thông qua dispatch với type = 'UPDATE_USER' và dữ liệu thông qua payload
        dispatch({ type: "UPDATE_USER", payload: updatedUser });
    };

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>User Profile</h2>
            {state.user ? (
                <div>
                    <p>Name: {state.user.name}</p>
                    <p>Address: {state.user.address}</p>
                    <p>Token: {state.token}</p>
                </div>
            ) : (
                <p>No user data available</p>
            )}

            <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={state.user?.name || ""}
                        required
                    />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label htmlFor="address">Address: </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        defaultValue={state.user?.address || ""}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: "10px", marginRight: "10px" }}>
                    Update User
                </button>
                <button type="button" onClick={handleLogout} style={{ marginTop: "10px" }}>
                    Logout
                </button>
            </form>
        </div>
    );
};

// Main App component
const App: React.FC = () => {
    // Khởi tạo state với reducer
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        token: null,
        user: null,
    });

    return (
        //Truyền state + dispatch vào context
        <AuthContext.Provider value={{ state, dispatch }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h1>User Management App</h1>
                {/* 
                 Nếu đã đăng nhập → hiện UserProfile
                 Nếu chưa → hiện Login
                */}
                {state.isAuthenticated ? <UserProfile /> : <Login />}
            </div>
        </AuthContext.Provider>
    );
};

export default App;