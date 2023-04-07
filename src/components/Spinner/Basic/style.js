import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

export const Spin = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

export const LoadingText = styled.div`
    text-align: center;
    padding-top: 3px;
    margin-left: -30px;
    color: #1890ff;
    font-size: 14px;
`;
export const Div = styled.div`
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
`;
export const P = styled.div`
    font-size: 14px;
    line-height: 22px;
`;

export const SpinWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    display: ${({ display }) => (display ? "block" : "none")};
`;
export const AlertMe = styled.div`
    color: rgba(0, 0, 0, 0.9);
    padding: 8px 16px;
    border-radius: 4px;
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    transition: all 0.5s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    opacity: ${({ spinning }) => spinning && "0.3"};
`;
export const getSize = ({ size }) => {
    switch (size) {
        case "large":
            return "32px";
        case "medium":
            return "20px";
        case "small":
            return "14px";
        default:
            return "20px";
    }
};
export const Spinner = styled.div`
    & {
        text-indent: -9999em;
        border-radius: 50%;
        background: #1890ff;
        background: linear-gradient(
            to right,
            #1890ff 10%,
            rgba(24, 144, 255, 0) 42%
        );
        position: relative;
        animation: load3 1.4s infinite linear;
        transform: translateZ(0);
        font-size: ${getSize};
        width: ${getSize};
        height: ${getSize};
    }
    &:before {
        width: 50%;
        height: 50%;
        background: #1890ff;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
    }
    &:after {
        background: #ffffff;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: "";
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    @keyframes load3 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
