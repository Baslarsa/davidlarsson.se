import React from 'react';

const ToggleIcon = ({ ...props }) => {
    return (
        <svg
            width="19"
            height="13"
            viewBox="0 0 19 13"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.6667 0.8125H6.33341C3.27284 0.8125 0.791748 3.35888 0.791748 6.5C0.791748 9.64112 3.27284 12.1875 6.33341 12.1875H12.6667C15.7273 12.1875 18.2084 9.64112 18.2084 6.5C18.2084 3.35888 15.7273 0.8125 12.6667 0.8125Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12.6667 8.9375C13.9784 8.9375 15.0417 7.84619 15.0417 6.5C15.0417 5.15381 13.9784 4.0625 12.6667 4.0625C11.3551 4.0625 10.2917 5.15381 10.2917 6.5C10.2917 7.84619 11.3551 8.9375 12.6667 8.9375Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default ToggleIcon;
