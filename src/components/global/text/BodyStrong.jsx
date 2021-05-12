const BodyBold = ({ children, className, color }) => {
    return (
        <p
            className={className}
            style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "0",
                color: `${color}`,
            }}
        >
            {children}
        </p>
    );
};

export default BodyBold;
