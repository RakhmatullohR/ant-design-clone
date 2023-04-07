import styled from "styled-components";
import { fonts, buttons } from "../style";

export const Title = styled.span``;

export const Container = styled.button`
    ${buttons};
    ${fonts};
    & svg {
        height: ${({ size, rounded }) => {
            if (size === "large") {
                if (rounded) {
                    return "20px";
                } else {
                    return "18px";
                }
            } else if (size === "medium") {
                if (rounded) {
                    return "18px";
                } else {
                    return "16px";
                }
            } else if (size === "small") {
                if (rounded) {
                    return "16px";
                } else {
                    return "14px";
                }
            } else {
                return null;
            }
        }};
        margin: ${({ rounded, size }) =>
            rounded && size === "small" ? "0 5px" : "0"};
        margin: ${({ rounded, size }) =>
            rounded && size === "small" ? "0 5px" : "0"};
    }
    background: ${({ Primary }) => (Primary ? "#1890ff" : "#fff")};
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
