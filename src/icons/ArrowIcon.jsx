import React from 'react';

const ArrowIcon = ({ ...props }) => {
    return (
        <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.5 1.5L7.5 7.5L1.5 1.5"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowIcon;
