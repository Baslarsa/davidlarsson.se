const Title = ({ children, className, color }) => {
    return (
        <h3 className={className} style={{ margin: "0", color: `${color}` }}>
            {children}
        </h3>
    );
};

export default Title;
