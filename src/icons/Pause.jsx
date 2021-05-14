import React from 'react';

const Pause = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            {...props}
            viewBox="0 0 24 24">
            <path d="M8 5C6.89543 5 6 5.89543 6 7V17C6 18.1046 6.89543 19 8 19 9.10457 19 10 18.1046 10 17V7C10 5.89543 9.10457 5 8 5zM16 5C14.8954 5 14 5.89543 14 7V17C14 18.1046 14.8954 19 16 19 17.1046 19 18 18.1046 18 17V7C18 5.89543 17.1046 5 16 5z" />
        </svg>
    );
};

export default Pause;
