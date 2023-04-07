import styled, { css } from "styled-components";

export const InputContainer = styled.div`
    display: grid;
    margin: 0 10px;
    grid-gap: 10px;
    grid-template-columns: auto auto;
`;

export const Container = styled.div`
    /* margin: 10px; */
    display: flex;
    flex-wrap: wrap;
    display: grid;
    margin: 0 10px;
    grid-gap: 10px;
    grid-template-columns: auto;
`;

export const getFontSize = ({ size }) => {
    switch (size) {
        case "large" || "Large":
            return "14px";
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
            return "0 25px";
        case "medium" || "Medium":
            return "0 17px";
        case "small" || "Small":
            return "0 12px";
        default:
            return "0 17px";
    }
};

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
export const getColor = ({ type }) => {
    switch (type) {
        case "danger" || "Danger":
            return "#E71923";
        case "success" || "Success":
            return "#00AE59";
        default:
            return "#9D9D9D";
    }
};

export const getBorderRadius = ({ size }) =>
    `${["small", "Small"].includes(size) ? "2px" : "4px"}`;

export const inputs = css`
    border: none;
    padding: ${getPadding};
    height: ${getHeight};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
`;

export const fonts = css`
    font-weight: var(--font-normal);
    font-size: ${getFontSize};
`;

export const danger = css`
    ${inputs};
    ${fonts};
    background: #ffe9ed;
    border: 1px solid #f29392;
    color: #e71923;
    box-sizing: border-box;
    &:focus {
        outline: none;
        background: white;
        border: 1px solid #f29392;
    }
    &:not(:focus)&:not(:disabled):hover {
        color: #e71923;
        background: #ffe9ed;
    }
    ::placeholder {
        color: #e5858a;
    }
    &:disabled {
        color: #c4c4c4;
        cursor: not-allowed;
    }
`;

export const success = css`
    ${inputs};
    ${fonts};
    box-sizing: border-box;
    background: #e3f7ec;
    border: 1px solid #8edfb2;
    color: #00ae59;
    &:focus {
        border: none;
        color: #00ae59;
        background: white;
        border: 1px solid #8edfb2;
        outline: none;
    }
    &:not(:focus)&:not(:disabled):hover {
        color: #00ae59;
        background: #e3f7ec;
    }
    ::placeholder {
        color: #57e59f;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;

export const normal = css`
    ${inputs};
    ${fonts};
    max-height: ${getHeight};
    box-sizing: border-box;
    border: 1px solid #838385;
    background: #f5f5f5;
    color: #262626;
    .left-right {
        display: none;
    }
    &:focus {
        outline: none;
        color: #262626;
        border: 1px solid #838385;
    }
    &:not(:disabled):focus {
        background: #fff;
        border: 1px solid #838385;
    }
    &:not(:focus)&:not(:disabled):hover {
        background: #e9e9e9;
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
        color: rgba(0, 0, 0, 0.7);
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

export const getPwd = ({ typePwd }) => {
    switch (typePwd) {
        case "danger" || "Danger":
            return danger;
        case "success" || "Success":
            return success;
        default:
            return normal;
    }
};
export const getNum = ({ typeNum }) => {
    switch (typeNum) {
        case "danger" || "Danger":
            return danger;
        case "success" || "Success":
            return success;
        default:
            return normal;
    }
};