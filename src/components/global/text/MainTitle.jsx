const MainTitle = ({ children, className, color }) => {
    return (
        <h1
            className={className}
            style={{
                margin: "0",
                color: `${color}`,
                textTransform: "uppercase",
            }}
        >
            {children}
        </h1>
    );
};

export default MainTitle;
