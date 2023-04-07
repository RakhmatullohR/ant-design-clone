import styled from "styled-components";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { Close } from "@styled-icons/evaicons-solid/Close";

export const ErrorIcon = styled(Close)`
    height: 20px;
    border-radius: 50%;
    margin: 4px 10px 4px 0;
    color: #fff;
    background: #ff4d4f;
`;

export const SuccessIcon = styled(CheckCircle)`
    height: 18px;
    border-radius: 50%;
    display: ${({ percent }) => (percent === 100 ? "block" : "none")};
    color: #fff;
    background: #52c41a;
    path:first-child {
        color: #52c41a;
        background: #52c41a;
    }
`;

export const Filler = styled.div`
    height: 100%;
    width: ${({ percent }) => `${percent}%` || "10%"};
    background-color: ${({ bgColor, status }) => {
        if (status === "exception") {
            return "rgb(255, 77, 79)";
        } else if (status === "success") {
            return "#52c41a";
        } else if (status === "active") {
            return "#1890ff";
        } else {
            return bgColor;
        }
    }};
    background-color: ${({ percent }) => percent === 100 && "#52c41a"};
    border-radius: inherit;
    text-align: right;
    transition: all 0.2s linear;
    animation: ${({ status, percent }) =>
        status === "active" &&
        percent !== 100 &&
        "fill-up 1.9s ease-in-out infinite"};
    @keyframes fill-up {
        to {
            background: #1960aa;
        }
    }
`;
export const Container = styled.div`
    height: 20px;
    width: ${({ size }) => {
        if (size === "small") {
            return "300px";
        } else if (size === "medium") {
            return "450px";
        } else {
            return "100%";
        }
    }};
    background-color: #e0e0de;
    border-radius: 50px;
    margin: 0 15px 0 0;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
`;
export const Span = styled.span`
    display: ${({ percent }) => (percent === 100 ? "none" : "block")};
    height: 18px;
    font-size: ${({ percent }) => (percent === 100 ? "14px" : "12px")};
`;
export const DivForLabel = styled.div`
    display: ${({ showInfo }) => !showInfo && "none"};
`;
