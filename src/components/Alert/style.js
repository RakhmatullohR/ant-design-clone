import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

export const getBgColor = ({ type }) => {
    switch (type) {
        case "success":
            return "#f6ffed";
        case "info":
            return "#e6f7ff";
        case "warning":
            return "#fffbe6";
        case "error":
            return "#fff2f0";
        default:
            return null;
    }
};

export const getBorder = ({ type }) => {
switch (type) {
    case "success":
        return "1px solid #b7eb8f";
    case "info":
        return "1px solid #91d5ff";
    case "warning":
        return "1px solid #ffe58f";
    case "error":
        return "1px solid #ffccc7;";
    default:
        return null;
    }
}

export const alerts = css`
    border: ${getBorder};
    padding: 8px 15px;
    background: ${getBgColor};
    width: 100%;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    margin: 10px 0;
    border-radius: 4px;
`;
