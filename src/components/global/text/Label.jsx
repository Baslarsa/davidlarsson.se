const Label = ({ children, className, color }) => {
    return (
        <p
            className={className}
            style={{
                margin: '0',
                color: `${color}`,
                letterSpacing: '1px',
            }}>
            {children}
        </p>
    );
};

export default Label;
