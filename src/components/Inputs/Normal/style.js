import styled, { css } from 'styled-components';

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


export const danger = css`
    border: 1px solid #f29392;
    color: #e71923;
    box-sizing: border-box;
    &:focus {
        box-shadow:0 0 0 2px #ffe9ed;
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
    border: 1px solid #8edfb2;
    color: #00ae59;
    &:focus {
        background: white;
        color: #00ae59;
        border: 1px solid #8edfb2;
        box-shadow:0 0 0 2px #e3f7ec;

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
    border: 1px solid #d9d9d9;
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
        box-shadow:0 0 0 2px rgba(24,144,255,.2)
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


export const Input = styled.input`
    transition: border .5s;
    border: none;
    outline: none;
    background: ${({ bgColor }) => bgColor || "white"};
    box-sizing: border-box;
    padding: ${getPadding};
    height: ${getHeight};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    font-weight: var(--font-normal);
    font-size: ${getFontSize};
    border-radius: ${({ size }) => ["small", "Small"].includes(size) ? "2px" : "4px"};
    opacity: ${({ disabled }) => disabled && ".7"};
    ${getType};
`;

export const Container = styled.div`
margin-bottom: 15px; 
margin-bottom: 15px;
`;
