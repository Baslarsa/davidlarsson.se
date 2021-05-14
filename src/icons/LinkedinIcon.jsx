import React from 'react';

const LinkedinIcon = ({ ...props }) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" {...props}>
            <path d="M16.5002 7.99903C15.605 7.99865 14.7236 8.22009 13.9348 8.64356C13.8628 8.45399 13.7349 8.2908 13.5679 8.17567C13.401 8.06055 13.203 7.99894 13.0002 7.99903H9.00021C8.86887 7.99896 8.7388 8.02477 8.61744 8.075C8.49608 8.12523 8.38582 8.19888 8.29294 8.29176C8.20007 8.38463 8.12641 8.4949 8.07618 8.61626C8.02595 8.73762 8.00014 8.86769 8.00022 8.99903V20.999C8.00014 21.1304 8.02595 21.2604 8.07618 21.3818C8.12641 21.5032 8.20006 21.6134 8.29294 21.7063C8.38581 21.7992 8.49608 21.8728 8.61744 21.9231C8.7388 21.9733 8.86887 21.9991 9.00021 21.999H13.0002C13.1316 21.9991 13.2616 21.9733 13.383 21.9231C13.5043 21.8728 13.6146 21.7992 13.7075 21.7063C13.8004 21.6134 13.874 21.5032 13.9242 21.3818C13.9745 21.2604 14.0003 21.1304 14.0002 20.999V15.499C14.0002 15.2338 14.1056 14.9795 14.2931 14.7919C14.4806 14.6044 14.735 14.499 15.0002 14.499C15.2654 14.499 15.5198 14.6044 15.7073 14.7919C15.8949 14.9795 16.0002 15.2338 16.0002 15.499V20.999C16.0001 21.1304 16.026 21.2604 16.0762 21.3818C16.1264 21.5032 16.2001 21.6134 16.2929 21.7063C16.3858 21.7992 16.4961 21.8728 16.6174 21.9231C16.7388 21.9733 16.8689 21.9991 17.0002 21.999H21.0002C21.1316 21.9991 21.2616 21.9733 21.383 21.9231C21.5044 21.8728 21.6146 21.7992 21.7075 21.7063C21.8004 21.6134 21.874 21.5032 21.9242 21.3818C21.9745 21.2604 22.0003 21.1304 22.0002 20.999V13.499C21.9984 12.0409 21.4184 10.643 20.3873 9.61195C19.3562 8.58089 17.9583 8.00084 16.5002 7.99903ZM20.0002 19.999H18.0002V15.499C18.0002 14.7034 17.6841 13.9403 17.1215 13.3777C16.5589 12.8151 15.7959 12.499 15.0002 12.499C14.2046 12.499 13.4415 12.8151 12.8789 13.3777C12.3163 13.9403 12.0002 14.7034 12.0002 15.499V19.999H10.0002V9.99903H12.0002V10.7022C12.0003 10.9094 12.0648 11.1114 12.1847 11.2804C12.3045 11.4494 12.4739 11.577 12.6694 11.6456C12.865 11.7142 13.077 11.7204 13.2761 11.6634C13.4753 11.6063 13.6519 11.4889 13.7815 11.3272C14.2302 10.7572 14.8458 10.3416 15.5422 10.1384C16.2386 9.93521 16.9811 9.95455 17.6659 10.1937C18.3508 10.4329 18.9439 10.88 19.3624 11.4726C19.7809 12.0651 20.0039 12.7736 20.0002 13.499V19.999ZM6.00022 7.99903H2.00022C1.86887 7.99896 1.7388 8.02477 1.61744 8.075C1.49608 8.12523 1.38581 8.19888 1.29294 8.29176C1.20007 8.38463 1.12641 8.4949 1.07618 8.61626C1.02595 8.73762 1.00014 8.86769 1.00022 8.99903V20.999C1.00014 21.1304 1.02595 21.2604 1.07618 21.3818C1.12641 21.5032 1.20006 21.6134 1.29294 21.7063C1.38581 21.7992 1.49608 21.8728 1.61744 21.9231C1.7388 21.9733 1.86887 21.9991 2.00022 21.999H6.00022C6.13156 21.9991 6.26163 21.9733 6.38299 21.9231C6.50435 21.8728 6.61462 21.7992 6.70749 21.7063C6.80037 21.6134 6.87402 21.5032 6.92425 21.3818C6.97448 21.2604 7.00029 21.1304 7.00022 20.999V8.99903C7.00029 8.86769 6.97448 8.73762 6.92425 8.61626C6.87402 8.4949 6.80036 8.38463 6.70749 8.29176C6.61462 8.19888 6.50435 8.12523 6.38299 8.075C6.26163 8.02477 6.13156 7.99896 6.00022 7.99903ZM5.00022 19.999H3.00022V9.99903H5.00022V19.999ZM4.01486 0.542031C3.57723 0.515835 3.13883 0.578929 2.72634 0.727476C2.31385 0.876023 1.93589 1.10692 1.61543 1.40612C1.29498 1.70533 1.03873 2.06659 0.862274 2.46793C0.685817 2.86928 0.592838 3.30232 0.588992 3.74072C0.585145 4.17913 0.670512 4.61374 0.8399 5.01811C1.00929 5.42249 1.25916 5.78819 1.57431 6.09297C1.88947 6.39775 2.26332 6.63525 2.67314 6.79101C3.08296 6.94677 3.52018 7.01755 3.95822 6.99903H3.98654C4.42533 7.02509 4.86484 6.96141 5.27819 6.81188C5.69155 6.66235 6.07007 6.43011 6.39064 6.12934C6.7112 5.82858 6.96707 5.46561 7.14262 5.06261C7.31817 4.65962 7.4097 4.22506 7.41163 3.78549C7.41356 3.34593 7.32584 2.91058 7.15383 2.50606C6.98183 2.10154 6.72915 1.73634 6.41123 1.43278C6.09332 1.12921 5.71685 0.893656 5.30482 0.740503C4.89279 0.587351 4.45386 0.519818 4.01485 0.542031H4.01486ZM3.98655 4.99903H3.95822C3.78528 5.02003 3.60986 5.00381 3.44371 4.95146C3.27755 4.89911 3.12452 4.81184 2.99486 4.6955C2.8652 4.57915 2.76191 4.43643 2.69193 4.27691C2.62194 4.11738 2.58688 3.94473 2.58909 3.77054C2.58909 3.02444 3.14865 2.54202 4.01486 2.54202C4.18956 2.51873 4.36722 2.53315 4.53588 2.58431C4.70454 2.63546 4.86027 2.72216 4.9926 2.83857C5.12493 2.95499 5.23077 3.0984 5.303 3.25916C5.37524 3.41992 5.41218 3.5943 5.41135 3.77054C5.41135 4.51663 4.85178 4.99903 3.98655 4.99903Z" />
        </svg>
    );
};

export default LinkedinIcon;
