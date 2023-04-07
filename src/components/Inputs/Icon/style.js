import styled, { css } from 'styled-components';
export const danger = css`
    /* border: 1px solid #f29392; */
    color: #e71923;
    box-sizing: border-box;
    &:focus {
        /* box-shadow:0 0 0 2px #ffe9ed; */
        background: white;
    }
    &:not(:focus)&:not(:disabled):hover {
        color: #e71923;
    }
    ::placeholder {
      color: #f29392;
    }
    &:disabled {
        color: #c4c4c4;
        cursor: not-allowed;
    }
`;

export const success = css`
    /* border: 1px solid #8edfb2; */
    color: #00ae59;
    &:focus {
        background: white;
        color: #00ae59;
        border: 1px solid #8edfb2;
        /* box-shadow:0 0 0 2px #e3f7ec; */

    }
    &:not(:focus)&:not(:disabled):hover {
        color: #00ae59;
    }
    ::placeholder {
        color: #90dea2;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;

export const normal = css`
    /* border: 1px solid #d9d9d9; */
    color: #262626;
    .left-right {
        display: none;
    }
    &:focus {
        outline: none;
        color: #262626;
        border-color: #40a9ff;
        background: white;
    }
    &:not(:disabled):focus {
        background: #fff;
        border-color: #40a9ff;
        /* box-shadow:0 0 0 2px rgba(24,144,255,.2) */
    }
    &:not(:focus)&:not(:disabled):hover {
      border-color: #40a9ff;
      transition: border .5s;
    }
    &:not(:disabled):active {
        color: #262626;
    }
    &:active {
        color: #262626;
    }
    &:disabled {
        color: #c4c4c4;
        cursor: not-allowed;
    }
    &::placeholder {
        color: #838385;
    }
`;

export const getType = ({ type }) => {
    switch (type) {
        case "danger" || "Danger":
            return danger;
        case "success" || "Success":
            return success;
        default:
            return normal;
    }
};
export const getBorderRadius = ({ size }) =>
    `${["small", "Small"].includes(size) ? "2px" : "4px"}`;

export const getIconPadding = ({ size }) => {
    switch (size) {
        case "large" || "Large":
            return "0 16px";
        case "medium" || "Medium":
            return "0 13px";
        case "small" || "Small":
            return "0 9px";
        default:
            return "11px 13px";
    }
};

export const getFontSize = ({ size }) => {
    switch (size) {
        case "large" || "Large":
            return "15px";
        case "medium" || "Medium":
            return "13px";
        case "small" || "Small":
            return "12px";
        default:
            return "13px";
    }
};

export const getHeight = ({ size }) => {
    switch (size) {
        case "large" || "Large":
            return "46px";
        case "medium" || "Medium":
            return "35px";
        case "small" || "Small":
            return "27px";
        default:
            return "35px";
    }
};
export const getPadding = ({ size }) => {
    switch (size) {
        case "large" || "Large":
            return "0 13px";
        case "medium" || "Medium":
            return "0 10px";
        case "small" || "Small":
            return "0 7px";
        default:
            return "0 10px";
    }
};


export const getIconPosition = ({ position }) => {
    switch (position) {
        case ('right' || 'Right'): return Right;
        case ('left' || 'Left'): return Left;
        default: return Left;
    }
};
export const getInputPosition = ({ position }) => {
    switch (position) {
        case ('right'): return Left;
        case ('left'): return Right;
        default: return Right;
    }
};
export const getBorder = ({ type }) => {
    switch (type) {
        case "danger" || "Danger":
            return "1px solid #f29397";
        case "success" || "Success":
            return "1px solid #8edfb2";
        default:
            return null;
    }
}
export const Left = css`
border-top-left-radius: ${getBorderRadius};
border-bottom-left-radius: ${getBorderRadius};
`;
export const Right = css`
border-top-right-radius: ${getBorderRadius};
border-bottom-right-radius: ${getBorderRadius};
`;

export const Input = styled.input`
    border: none;
        outline: none;
    &:not(:disabled):focus {
        border: none;
    }
    cursor: ${({ disabled }) => disabled && "not-allowed"};
    ${getInputPosition};
    width: 100% !important;
    opacity: ${({ disabled }) => disabled && ".7"};
    background: white;
    padding: ${getPadding};
    font-size: ${getFontSize};
    ${getType};
`;

export const Container = styled.div`
    opacity: ${({ disabled }) => disabled && ".7"};
    display: flex;
    border-radius: ${getBorderRadius};
    border: ${({ type }) => {
        if (!type || type === "normal") {
            return "1px solid #838385";
        } else {
            return getBorder
        }
    }};
    width: 100%;
    margin-bottom: 15px;
    & svg {
        color: ${({ type }) => {
        if (type === "danger") {
            return "red";
        } else if (type === "success") {
            return "green";
        } else {
            return "#000";
        }
    }};
        height: ${({ size }) => {
        if (size === "large") {
            return "19px";
        } else if (size === "medium") {
            return "17px";
        } else if (size === "small") {
            return "14px";
        } else {
            return "14px";
        }
    }};
    }
`;

export const IconContainerLeft = styled.div`
    opacity: ${({ disabled }) => disabled && ".7"};
    ${getIconPosition};
    border-left: none;
    display: ${({ position }) => (position === "left" ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    padding: ${getIconPadding};
    background: #f5f5f5;
    background:  ${({ type }) => type === "success" && "#e3f7ec"};
    background:  ${({ type }) => type === "danger" && "#ffe9ed"};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    height: ${getHeight};
`;

export const IconContainerRight = styled.div`
    opacity: ${({ disabled }) => disabled && ".7"};
    ${getIconPosition};
    border-right: none;
    display: ${({ position }) => (position === "right" ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    background: ${({ type }) => type === "success" && "#e3f7ec"};
    background: ${({ type }) => type === "danger" && "#ffe9ed"};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    padding: ${getIconPadding};
    min-height: ${getHeight};
`;
