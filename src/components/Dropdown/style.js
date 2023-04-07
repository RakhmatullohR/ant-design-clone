import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Container2 = styled.div`
    display: grid;
    grid-gap: 15px;
`;

export const getFontSize = ({ size }) => {
    const Size = size.toLowerCase();
    switch (Size) {
        case "large":
            return "14px";
        case "medium":
            return "13px";
        case "small":
            return "12px";
        default:
            return "13px";
    }
};

export const getHeight = ({ size }) => {
    const Size = size.toLowerCase();
    switch (Size) {
        case "large":
            return "46px";
        case "medium":
            return "35px";
        case "small":
            return "27px";
        default:
            return "35px";
    }
};

export const getPadding = ({ size }) => {
    const Size = size.toLowerCase();
    switch (Size) {
        case "large":
            return "0 15px";
        case "medium":
            return "0 12px";
        case "small":
            return "0 8px";
        default:
            return "0 12px";
    }
};

export const getBorderRadius = ({ size }) =>
    `${["small", "Small"].includes(size) ? "4px" : "8px"}`;

export const fonts = css`
    font-size: ${getFontSize};
`;

export const dropdown = css`
    transition: all 0.3s linear;
    font-size: ${getFontSize};
    height: ${getHeight};
    padding: ${getPadding};
    align-items: center;
    &:focus {
        color: #1890ff;
    }
    &:not(:disabled):active {
        color: #096dd9;
        border: ${({ basic, disabled }) => (basic || disabled ? "none" : "1px solid #096dd9")};
    }
`;
