import styled from "styled-components";
import { dropdown } from "../style";

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: ${({ end }) => (end ? "column-reverse" : "column")};
    width: 100%;
    position: relative;
    & #SPINNER {
        animation: spin 1.6s linear infinite;
        height: ${({ size }) =>
        size === "large"
            ? "19px"
            : size === "medium"
                ? "17px"
                : size === "small"
                    ? "14px"
                    : null};
        margin-right: ${({ title }) => (title ? "5px" : "2px")};
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

export const Selection = styled.div`
    ${dropdown}
    &:hover {
        color: ${({ disabled }) => !disabled && "#40a9ff"};
        border: ${({ disabled }) => !disabled && "1px solid #40a9ff"};
    }
    &:hover div {
        color: ${({ disabled }) => !disabled && "#40a9ff"};
    }
    display: flex;
    flex-wrap: nowrap;
    border-radius: 8px;
    border: ${({ basic, disabled }) =>
        !basic && !disabled ? "1px solid #d9d9d9" : null};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    &:not(:disabled):active div {
        color: ${({ disabled }) => !disabled && "#096dd9"};
    }
    &:not(:disabled):active + svg {
        color: ${({ basic, disabled }) => {
        if (basic) {
            return "#096dd9";
        } else if (disabled) {
            return "#40a9ff";
        } else {
            return null;
        }
    }};
    }
    & svg {
        
        color: ${({ basic, disabled }) => {
        if (basic) {
            return "#40a9ff";
        } else if (disabled) {
            return "rgba(0,0,0,.45)";
        } else {
            return null;
        }
    }};
        height: ${({ size }) => (size === "large" ? "20px" : "18px")};
    }
`;
export const SpinContainer = styled.div`
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    :hover {
        color: ${({ loading }) => !loading && "#40a9ff"};
    }
    
`;

Selection.Text = styled.div`
    letter-spacing: 0.01em;
    line-height: 24px;
    text-align: left;
    & svg {
        color: ${({ disabled }) => (disabled ? "rgba(0, 0, 0, .25)" : "#000")};
    }
    color: ${({ color, basic, disabled }) => {
        if (color) {
            return color;
        } else if (basic) {
            return "#40a9ff";
        } else if (disabled) {
            return "rgba(0, 0, 0, .45)";
        } else {
            return "#000";
        }
    }};
`;
Selection.Icon = styled.div`
    margin-left: auto;
    border-left: 1px solid #d9d9d9;
    padding: 11.2px;
    margin-right: -15px;
    :hover {
        color: ${({ loading }) => !loading && "#40a9ff"};
        border-left: ${({ loading }) => !loading && "1px solid #40a9ff;"};
    }
    & #KeyboardArrowDownIcon {
        transform: ${({ Open }) => Open && "rotate(180deg)"};
        transition: all 0.2s linear;
    }
`;

export const Menu = styled.div`
    position: absolute;
    top: 1px;
    bottom: ${({ bottom }) => bottom && "45px"};
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    width: ${({ width }) => `${width}px`};
    height: fit-content;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
    box-shadow: 0px 0px 12px 0px rgba(73, 75, 116, 0.16);
    margin-bottom: ${({ end }) => (end ? "45px" : "0")};
    margin-top: ${({ end }) => (end ? "0" : "45px")};
    z-index: 1;
`;

Menu.Icon = styled.span`
    height: 20px;
    background: red;
`;

Menu.Item = styled.input`
    box-sizing: border-box;
    width: ${({ width }) => `${width}px`};
    padding: 13px 15px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    outline: none;
    border: none;
    color: ${({ active, danger, disabled }) => {
        if (active) {
            return "#262626";
        } else if (danger && !disabled) {
            return "red";
        } else {
            return "#000";
        }
    }};
    background: ${({ active }) => (active ? "#F5F5F5" : "inherit")};
    &:hover {
        background: #f5f5f5;
        color: ${({ danger, disabled }) => {
        if (danger && !disabled) {
            return "#fff";
        } else {
            return null;
        }
    }};
        background: ${({ danger, disabled }) => {
        if (danger && !disabled) {
            return "#ff4e4f";
        } else {
            return null;
        }
    }};
    }
`;

Menu.SubItem = styled.input`
    box-sizing: border-box;
    width: ${({ width }) => `${width}px`};
    padding: 8px 12px;
    cursor: pointer;
    outline: none;
    border: none;
    padding-left: 45px;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.01em;
    line-height: 24px;
    color: ${({ active }) => (active ? "#262626" : "#9D9D9D")};
    overflow: hidden;
    background: ${({ active }) => (active ? "#F5F5F5" : "inherit")};
    &:hover {
        background: #f5f5f5;
    }
`;
