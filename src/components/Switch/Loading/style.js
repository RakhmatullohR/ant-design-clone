import styled from "styled-components";
import { width, height, heightOfCircle } from "../style";

export const Wrapper = styled.div``;

export const Input = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + Label Span {
        left: calc(100% - 2px);
        transform: translateX(-100%);
        background: #fff;
        position: absolute;
        right: 0;
    }
    &:checked + Label {
        background: ${({ bgChecked }) => bgChecked || "#1890ff"};
    }
`;
export const Label = styled.label`
    opacity: ${({ disabled }) => (disabled ? ".6" : "1")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${({ loading }) =>
        loading === "false" ? "pointer" : "not-allowed"};
    width: ${width};
    height: ${height};
    background: ${({ bgNotChecked }) => bgNotChecked || "rgba(0, 0, 0, 0.25)"};
    border-radius: 12px;
    position: relative;
    transition: background-color 0.3s linear;
`;

export const Span = styled.span`
    & i svg {
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    width: ${heightOfCircle};
    height: ${heightOfCircle};
    border-radius: 55px;
    transition: all 0.2s linear;
    background: #fff;
`;
Span.I = styled.i`
    position: relative;
    top: ${({ size }) => (size === "small" ? "-1.4px" : size==="medium"? "-1px": null)};
    margin-top: ${({ size }) =>
        size === "large"
            ? "-0.3px"
            : (size = "medium" ? "-1.4px" : size === "small" ? "2px" : null)};
    color: rgb(0, 0, 19);
`;
