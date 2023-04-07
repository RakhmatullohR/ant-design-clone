import styled from "styled-components";
import { getSize } from "../style";

export const DotSpinner = styled.div`
    &,
    :before,
    :after {
        border-radius: 50%;
        width: 1em;
        height: 1em;
        animation-fill-mode: both;
        animation: load7 1.8s infinite ease-in-out;
    }
    & {
        color: #1890ff;
        font-size: ${getSize};
        margin: 1rem;
        position: relative;
        text-indent: -9999em;
        transform: translateZ(0);
        animation-delay: -0.16s;
    }
    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
    }
    &:before {
        left: -3.5em;
        animation-delay: -0.32s;
    }
    &:after {
        left: 3.5em;
    }
    @keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
`;
