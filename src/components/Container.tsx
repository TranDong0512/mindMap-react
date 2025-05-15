
type Props = {
    children?: React.ReactNode
}
const Container = ({ children }: Props) => {
    return (
        <div className="max-w-6xl mx-auto p-6  min-h-screen w-4/5">
            {children}
        </div>
    );
};

export default Container;