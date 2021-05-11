const MainTitle = ({ children, className, color }) => {
    return (
        <h1
            className={className}
            style={{ fontSize: "78px", margin: "0", color: `${color}` }}
        >
            {children}
        </h1>
    );
};

export default MainTitle;
