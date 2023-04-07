import styled, { css } from "styled-components";


export const Container = styled.div`
display: ${({ flex }) => flex && 'flex'};
display: flex;
flex-wrap: wrap;
/* justify-content: space-between; */
align-items: center;
margin-bottom: 10px;
`

export const GroupContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;
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
export const Icon = styled.svg`
    fill: none;
    stroke: ${({ disabled, disabledChecked }) =>
        disabled || disabledChecked ? "#000" : "#fff"};
    stroke-width: 3px;
`;

const checkedStyles = css`
    border: ${({ checkedBgColor }) =>
        checkedBgColor ? `1px solid ${checkedBgColor}` : "1px solid #1890ff"};
`;

const uncheckedStyles = css`
    border: ${({ bgColor }) =>
        bgColor ? `1px solid ${bgColor}` : "1px solid #1890ff"};
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
    margin: 10px;
    background: ${({ checked, checkedBgColor, bgColor }) =>
        checked ? checkedBgColor || "#1890ff" : bgColor || "#fff"};
    border-radius: 3px;
    cursor: ${({ disabled, disabledChecked }) =>
        disabled || disabledChecked ? "not-allowed" : null};
  opacity: ${({ disabled, disabledChecked }) =>
        disabled || disabledChecked ? "0.5" : "1"};
    transition: all 150ms;
    ${(props) => (props.checked ? checkedStyles : uncheckedStyles)};
  ${Icon} {
        visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Label = styled.label`
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "cursor")};
    opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
`;
