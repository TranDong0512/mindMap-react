
const Header = ({ user, onLogout }: { user: { name: string }, onLogout: () => void }) => (
    <header>
        <h1>Welcome, {user?.name}</h1>
        <button onClick={onLogout}>Logout</button>
    </header>
);

export default Header;