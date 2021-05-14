const Body = ({ children, className, color }) => {
    return (
        <p
            className={className}
            style={{
                margin: '0',
                color: `${color}`,
            }}>
            {children}
        </p>
    );
};

export default Body;
