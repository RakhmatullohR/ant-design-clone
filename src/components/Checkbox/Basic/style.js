import styled, { css } from "styled-components";

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    /* clippath: inset(50%); */
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;
export const CheckboxContainer = styled.div`
    display: flex;
    cursor: ${({ disabled }) => disabled ? "not-allowed" : 'pointer'};
`;
export const Span = styled.span`
    margin-left: 4px;
    font-size: ${({ size }) => {
        if (size === "large") {
            return "18px";
        } else if (size === "medium") {
            return "16px";
        }
        else if (size === "small") {
            return "14px";
        } else {
            return "16px";
        }
    }};
`;
export const Icon = styled.svg`
    fill: none;
    stroke: #fff;
    stroke-width: 3px;
`;
export const Label = styled.label`
display: flex;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "cursor")};
    opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
    padding-right: 5px;
`;
const checkedStyles = css`
    border: ${({ bgColor }) =>
        bgColor ? `1px solid ${bgColor}` : "1px solid #1890ff"};

`;

const uncheckedStyles = css`
    border: ${({ bgColor }) =>
        bgColor ? `1px solid ${bgColor}` : "1px solid #1890ff"};
          opacity: .4;
    :hover{
        opacity: 1;
    }
`;

export const StyledCheckbox = styled.div`
    display: inline-block;
    width: ${({ size }) => {
        if (size === "large") {
            return "24px";
        } else if (size === "medium") {
            return "20px";
        } else {
            return "16px";
        }
    }};
    height: ${({ size }) => {
        if (size === "large") {
            return "24px";
        } else if (size === "medium") {
            return "20px";
        } else {
            return "16px";
        }
    }};
    background: ${({ checked, bgColor }) => checked ? bgColor || "#1890ff" : "#fff"};
    border-radius: 3px;
    cursor: ${({ disabled }) => disabled ? "not-allowed" : null};
    opacity: ${({ disabled }) => disabled ? 0.5 : 1};
    transition: all .3s;
    ${(props) => (props.checked ? checkedStyles : uncheckedStyles)};
    ${Icon} 
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
`;
