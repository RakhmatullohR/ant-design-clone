import styled from "styled-components";
import { width, height, heightOfCircle } from "../style";

export const Wrapper = styled.div``;

export const Input = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
    &:disabled {
        cursor: disabled;
    }
    &:checked + Label Span {
        left: calc(100% - 2px);
        transform: translateX(-100%);
        background: #fff;
        position: absolute;
        right: 0;
    }
    &:checked + Label {
        background: ${({ disabled }) => (disabled ? "#accfef" : "#1890ff")};
        background-color: ${({ bgChecked }) => bgChecked || "#1890ff"};
    }
`;
export const Label = styled.label`
    opacity: ${({ disabled }) => (disabled ? ".6" : "1")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    width: ${width};
    height: ${height};
    background: ${({ bgNotChecked }) => bgNotChecked || "rgba(0, 0, 0, 0.25)"};
    border-radius: 12px;
    position: relative;
    transition: background-color 0.2s linear;
`;
export const Span = styled.span`
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
export const ToggleButton = styled.button`
    padding: 5px 10px;
    background-color: #1890ff;
    cursor: pointer;
    border-radius: 8px;
    outline: none;
    border: none;
    font-size: 24px;
    color: #fff;
    margin-top: 12px;
`;
