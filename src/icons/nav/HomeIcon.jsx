import React from "react";

const HomeIcon = ({ ...props }) => {
    return (
        <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M17.4201 8.17995L9.71012 0.299949C9.61715 0.20622 9.50655 0.131826 9.38469 0.0810573C9.26283 0.0302886 9.13213 0.00415039 9.00012 0.00415039C8.8681 0.00415039 8.7374 0.0302886 8.61554 0.0810573C8.49368 0.131826 8.38308 0.20622 8.29012 0.299949L0.580115 8.18995C0.393552 8.37802 0.24621 8.60127 0.146643 8.84676C0.0470768 9.09224 -0.00272978 9.35506 0.000115364 9.61995V17.9999C-0.00065946 18.5119 0.194889 19.0046 0.54649 19.3766C0.898091 19.7487 1.37898 19.9718 1.89012 19.9999H16.1101C16.6213 19.9718 17.1021 19.7487 17.4537 19.3766C17.8053 19.0046 18.0009 18.5119 18.0001 17.9999V9.61995C18.0009 9.08288 17.7929 8.56653 17.4201 8.17995V8.17995ZM7.00012 17.9999V11.9999H11.0001V17.9999H7.00012ZM16.0001 17.9999H13.0001V10.9999C13.0001 10.7347 12.8948 10.4804 12.7072 10.2928C12.5197 10.1053 12.2653 9.99995 12.0001 9.99995H6.00012C5.7349 9.99995 5.48055 10.1053 5.29301 10.2928C5.10547 10.4804 5.00012 10.7347 5.00012 10.9999V17.9999H2.00012V9.57995L9.00012 2.42995L16.0001 9.61995V17.9999Z" />
        </svg>
    );
};

export default HomeIcon;
