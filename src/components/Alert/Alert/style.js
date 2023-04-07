import { alerts } from "../style";
import styled from "styled-components";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { ErrorWarning } from "@styled-icons/remix-line/ErrorWarning";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle";
import { ErrorAlt } from "@styled-icons/boxicons-regular/ErrorAlt";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export const Alert = styled.div`
${alerts};
display: ${({ display }) => (display ? "block" : "none")};
transition: all 0.5s linear;
`;
export const Description = styled.div`
    ${alerts}
    font-size: 14px;
    margin-left: -15px;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;
export const FlexWrapper = styled.div`
    width: ${({ closable }) => (closable ? "90%" : "75%")};
`;
export const CloseText = styled.span`
    color: rgba(0, 0, 0, 0.55);
    text-align: right;
    margin: 0 10px 4px 0;
    position: absolute;
    right: -15px;
    cursor: pointer;
    &:hover {
        color: rgba(0, 0, 0, 0.85);
    }
`;
export const CrossIcon = styled(CloseOutline)`
    color: rgba(0, 0, 0, 0.55);
    text-align: right;
    margin: 4px 10px 4px 0;
    position: absolute;
    right: -15px;
    height: ${({ description }) => (description ? "20px" : "16px")};
    cursor: pointer;
    &:hover {
        color: rgba(0, 0, 0, 0.85);
    }
`;

export const SuccessIcon = styled(CheckCircle)`
    height: ${({description})=> description ? "24px":"16px"};
    border-radius: 50%;
    margin: 4px 10px 4px 0;
    color: #fff;
    background: #52c41a;
    path:first-child {
        color: #52c41a;
        background: #52c41a;
    }
`;
export const WarningIcon = styled(ErrorWarning)`
    height: ${({description})=> description ? "24px":"16px"};
    border-radius: 50%;
    margin: 4px 10px 4px 0;
    color: #fff;
    background: #faad14;
`;
export const InfoIcon = styled(InfoCircle)`
    height: ${({description})=> description ? "24px":"16px"};
    border-radius: 50%;
    margin: 4px 10px 4px 0;
    color: #fff;
    background: #1890ff;
`;
export const ErrorIcon = styled(ErrorAlt)`
    height: ${({description})=> description ? "24px":"16px"};
    border-radius: 50%;
    margin: 4px 10px 4px 0;
    color: #fff;
    background: #ff4d4f;
`;

