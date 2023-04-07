import styled from "styled-components";
import { fonts, buttons } from "../style";

export const Title = styled.span``;

export const Container = styled.button`
    ${buttons};
    ${fonts};
    background: ${({ Primary, loading }) => {
        if (loading) {
            return "#74ade1";
        } else if (Primary) {
            return "#1890ff";
        } else {
            return null;
        }
    }};
    display: flex;
    cursor: ${({ loading }) =>
        loading === "false" ? "pointer" : "context-menu"};
    & svg {
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
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    &:focus {
        outline: none;
    }
    border-radius: ${({ rounded, squared, title }) => {
        if (rounded && !title) {
            return "50%";
        } else if (squared) {
            return "17px";
        } else {
            return "3px";
        }
    }};
`;
