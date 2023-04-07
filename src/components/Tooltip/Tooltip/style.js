import styled, { css } from "styled-components"

export const getFontSize = ({ size }) => {
    switch (size) {
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
export const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

`;


export const Top = css`
    bottom: 110%;
    &::before {
        content: " ";
        left: 50%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 6px;
        margin-left: calc(6px * -1);
        top: 100%;
        border-top-color: ${({ bgColor }) => bgColor || "#000"};
    }
`;

export const Right = css`
left: 100%;
    ::before {
        content: " ";
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 6px;
        margin-left: calc(6px * -1);
        left: calc(6px * -1);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-right-color: ${({ bgColor }) => bgColor || "#000"};
    }
`;

export const Bottom = css`
    top:110%;
    ::before {
        content: " ";
        left: 50%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 6px;
        margin-left: calc(6px * -1);
        bottom: 100%;
        border-bottom-color: ${({ bgColor }) => bgColor || "#000"};
    }
`;

export const Left = css`
    right: 100%;
    &::before {
        content: " ";
        left: 31%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 6px;
        margin-left: calc(6px * -1);
        left: auto;
        right: calc(6px * -2);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-left-color: ${({ bgColor }) => bgColor || "#000"};
    }
`;

export const common = ({ direction }) => {
    // const pos = direction.toLowerCase();
    switch (direction) {
        case "top":
            return Top;
        case "bottom":
            return Bottom;
        case "right":
            return Right;
        case "left":
            return Left;
        default:
            return Top;
    }
};



export const Layout = styled.span`
    ${common}
    position: absolute;
    border-radius: 4px;
    padding: 10px 6px;
    color: #fff;
    background: ${({ bgColor }) => bgColor || "#000"};
    font-size: ${getFontSize};
    font-family: sans-serif;
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
`

