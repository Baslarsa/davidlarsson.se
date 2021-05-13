const SubTitle = ({ children, className, color }) => {
    return (
        <h2 className={className} style={{ margin: "0", color: `${color}` }}>
            {children}
        </h2>
    );
};

export default SubTitle;
