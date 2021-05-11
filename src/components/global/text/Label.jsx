const Label = ({ children, className, color }) => {
    return (
        <p
            className={className}
            style={{
                fontSize: "18px",
                margin: "0",
                color: `${color}`,
                letterSpacing: "1px",
            }}
        >
            {children}
        </p>
    );
};

export default Label;
