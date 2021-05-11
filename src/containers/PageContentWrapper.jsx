const PageContentWrapper = ({ children, className }) => {
    return (
        <div
            className={className}
            style={{
                width: "100%",
                height: "100vh",
                padding: "4rem 0",
                boxSizing: "border-box",
            }}
        >
            {children}
        </div>
    );
};

export default PageContentWrapper;
