const Triangle = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 212 862"
            height="100%"
            width="100%"
            {...props}
            preserveAspectRatio="none">
            <polygon points="212 862 0 862 0 0 212 862 212 862" />
        </svg>
    );
};

export default Triangle;
