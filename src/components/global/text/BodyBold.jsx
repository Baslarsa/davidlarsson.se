const BodyBold = ({ children, className, color }) => {
    return (
        <p
            className={className}
            style={{
                fontWeight: "bold",
                margin: "0",
                color: `${color}`,
                letterSpacing: "1px",
            }}
        >
            {children}
        </p>
    );
};

export default BodyBold;
