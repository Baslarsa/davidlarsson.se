const Body = ({ children, className, color }) => {
    return (
        <p
            className={className}
            style={{
                fontSize: "18px",
                margin: "0",
                color: `${color}`,
            }}
        >
            {children}
        </p>
    );
};

export default Body;
