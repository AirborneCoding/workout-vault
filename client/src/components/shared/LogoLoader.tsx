import Img from "./Img";

const LogoLoader = () => {
    return (
        <div className="flex items-center justify-center mt-24 min-h-screen">
            <Img
                src="/newlogo.png"
                alt="Loading Logo"
                className="w-16 h-16 animate-bounce "
            />
        </div>
    )
};

export default LogoLoader;
