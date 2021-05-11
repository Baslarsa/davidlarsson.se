const SubTitle = ({ children, className, color }) => {
    return (
        <h2
            className={className}
            style={{ fontSize: "56px", margin: "0", color: `${color}` }}
        >
            {children}
        </h2>
    );
};

export default SubTitle;
