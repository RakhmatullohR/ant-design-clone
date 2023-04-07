import styled from "styled-components";
import { buttons, fonts } from "../style";

export const Container = styled.button`
    ${buttons};
    ${fonts};
    background: ${({ Primary, Danger, Ghost }) => {
        if (Primary) {
            if (Danger) {
                return "#fff";
            } else if (Ghost) {
                return "rgb(190, 200, 200)";
            } else {
                return "#1890ff";
            }
        } else if (Ghost) {
            return "rgb(190, 200, 200)";
        } else {
            return "#fff";
        }
    }};
    &:focus {
        outline: none;
    }
    &:disabled {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        border-color: #d9d9d9;
        cursor: not-allowed;
    }
    width: ${({ block }) => block && "100%"};
`;
