import React, { createContext, useContext, useState } from "react";

// Define the User interface
interface IUser {
    name: string;
    address: string;
}

// Define the context type
interface UserContextType {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

// Create the context with an initial undefined value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use the UserContext
const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserContext.Provider");
    }
    return context;
};

// Child component that consumes the context
const UserProfile: React.FC = () => {
    const { user, setUser } = useUserContext();

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newUser = {
            name: formData.get("name") as string,
            address: formData.get("address") as string,
        };
        setUser(newUser);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>User Profile</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Address: {user.address}</p>
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
                        defaultValue={user?.name || ""}
                        required
                    />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label htmlFor="address">Address: </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        defaultValue={user?.address || ""}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: "10px" }}>
                    Update User
                </button>
            </form>
        </div>
    );
};

// Main App component
const App: React.FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h1>User Management App</h1>
                <UserProfile />
            </div>
        </UserContext.Provider>
    );
};

export default App;