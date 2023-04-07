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
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: ${width};
    height: ${height};
    background: ${({ bgNotChecked }) => bgNotChecked || "rgba(0, 0, 0, 0.25)"};
    border-radius: 12px;
    position: relative;
    transition: background-color 0.3s linear;
    display: flex;
`;
export const Span = styled.span`
    content: "";
    position: absolute;
    top: 0.8px;
    left: 1.2px;
    width: ${heightOfCircle};
    height: ${heightOfCircle};
    border-radius: 55px;
    transition: all 0.2s linear;
    background: #fff;
`;
export const TextLeft = styled.div`
    margin-top: -1px;
    font-size: ${({ size }) =>
        size === "large" ? "14px" : size === "medium" ? "10px" : "6px"};
    padding-left: ${({ size }) =>
        size === "large" ? "5px" : size === "medium" ? "3px" : "2px"};
    color: #fff;
    display: ${({ off }) => (off ? "none" : "block")};
    margin-left: ${({ size, id }) => {
        if (!id.includes("onOff")) {
            if (size === "large") {
                return "3px";
            } else {
                return "2px";
            }
        }
    }};
`;

export const TextRight = styled.div`
    margin-top: -1px;
    font-size: ${({ size }) =>
        size === "large" ? "14px" : size === "medium" ? "10px" : "6px"};
    padding-right: ${({ size }) =>
        size === "large" ? "5px" : size === "medium" ? "3px" : "2.5px"};
    color: #fff;
    display: ${({ off }) => (off ? "none" : "block")};
    @media (max-width: 500px) {
        margin-left: ${({ size }) => (size === "large" ? "3px" : null)};
    }
    margin-right: ${({ size, id }) => {
        if (!id.includes("onOff")) {
            if (size === "large") {
                return "3px";
            } else {
                return "2px";
            }
        }
    }};
`;
