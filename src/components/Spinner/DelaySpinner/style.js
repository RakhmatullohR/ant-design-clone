import styled from "styled-components";

export const getSize = ({ size }) => {
    switch (size) {
        case "large":
            return "24px";
        case "medium":
            return "15px";
        case "small":
            return "12px";
        default:
            return "15px";
    }
};

export const DelaySpinner = styled.div`
    &,
    &:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }
    & {
        text-indent: -9999em;
        border-top: 2px solid rgba(68, 182, 197, 0.2);
        border-right: 2px solid rgba(68, 182, 197, 0.2);
        border-bottom: 2px solid rgba(68, 182, 197, 0.2);
        border-left: 2px solid #1890ff;
        transform: translateZ(0);
        animation: load8 1.1s infinite linear;
        font-size: ${getSize};
        width: ${getSize};
        height: ${getSize};
    }
    @keyframes load8 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
