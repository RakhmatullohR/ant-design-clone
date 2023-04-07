import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const GhostContainer = styled.div`
    background: rgb(190, 200, 200);
    padding: 8px;
    border-radius: 8px;
    width: 100%;
`;

export const getFontSize = ({ size }) => {
    switch (size) {
        case "large":
            return "16px";
        case "medium":
            return "14px";
        case "small":
            return "13px";
        default:
            return "14px";
    }
};

export const getPadding = ({ size, rounded }) => {
    if (size === "large") {
        if (rounded) {
            return "12px";
        } else {
            return "10px 12px";
        }
    } else if (size === "medium") {
        if (rounded) {
            return "8px 13px";
        } else {
            return "8px 10px";
        }
    } else if (size === "small") {
        if (rounded) {
            return "9px";
        } else {
            return "6px 8px";
        }
    } else {
        if (rounded) {
            return "8px 13px";
        } else {
            return "8px 10px";
        }
    }
};
export const getBorder = ({ Dashed, Default, Danger, Primary, Ghost }) => {
    if (Dashed) {
        if (Danger) {
            return "1px dashed #ff4d4f";
        } else if (Ghost) {
            return "1px dashed #fff";
        } else {
            return "1px dashed #d9d9d9";
        }
    } else if (Default) {
        if (Danger) {
            return "1px solid #ff4d4f";
        } else if (Ghost) {
            return "1px solid #fff";
        } else {
            return "1px solid #d9d9d9";
        }
    } else if (Primary) {
        if (Danger) {
            return "1px solid #ff4d4f";
        } else if (Ghost) {
            return "1px solid #1890ff";
        } else {
            return "1px solid #1890ff";
        }
    } else if (Ghost) {
        return "1px solid #fff";
    } else {
        return "none";
    }
};
export const getFocus = ({ Primary, Dashed, Default, Text, Danger, Ghost }) => {
    if (Dashed) {
        if (Danger) {
            return "color: #ff4d4f; border: 1px dashed  #ff4d4f";
        } else if (Ghost) {
            return "color: #74ade1; border: 1px solid  #74ade1";
        } else {
            return "color: #74ade1; border: 1px dashed  #74ade1";
        }
    } else if (Default) {
        if (Danger) {
            return "color: #ff4d4f; border: 1px solid  #ff4d4f";
        } else if (Ghost) {
            return "color: #74ade1; border: 1px solid  #74ade1";
        } else {
            return "color: #74ade1; border: 1px solid #74ade1";
        }
    } else if (Text) {
        if (Danger) {
            return "color: #ff4d4f; background: #f2f4f5";
        } else {
            return "color: rgba(0, 0, 0, 0.85); border: transparent; background: #f2f4f5";
        }
    } else if (Text) {
        return "background: #f2f4f5";
    } else if (Primary) {
        if (Danger) {
            return "background: #fff";
        } else if (Ghost) {
            return "rgb(190, 200, 200)";
        } else {
            return "background: #74ade1";
        }
    } else if (Ghost) {
        return "color: #74ade1; border: 1px solid  #74ade1";
    } else {
        return "none";
    }
};
export const getColor = ({ Primary, Link, Danger, Default, Ghost }) => {
    if (Link) {
        if (Danger) {
            return "#ff4d4f";
        } else if (Ghost) {
            return "#fff";
        } else {
            return "#1890ff";
        }
    } else if (Primary) {
        if (Danger) {
            return "#ff7875";
        } else if (Ghost) {
            return "#1890ff";
        } else {
            return "#fff";
        }
    } else if (Danger) {
        return "#ff4d4f";
    } else if (Default) {
        if (Danger) {
            return "#ff7875";
        } else if (Ghost) {
            return "#fff";
        } else {
            return "rgba(0,0,0,.85)";
        }
    } else if (Ghost) {
        return "#fff";
    } else {
        return "rgba(0,0,0,.85)";
    }
};
export const getActiveColor = ({
    Primary,
    Link,
    Dashed,
    Default,
    Danger,
    Ghost,
}) => {
    if (Primary) {
        if (Danger) {
            return "color: #d9363e";
        } else if (Ghost) {
            return "color: #096dd9; border: 1px solid #096dd9";
        } else {
            return "background: #096dd9; color: #fff";
        }
    } else if (Link) {
        if (Danger) {
            return "color: #d9363e";
        } else {
            return "color: #096dd9";
        }
    } else if (Dashed) {
        if (Danger) {
            return "color: #d9363e; border: 1px dashed  #d9363e";
        } else {
            return "color: #096dd9; border: 1px dashed  #096dd9";
        }
    } else if (Default) {
        if (Danger) {
            return "color: #d9363e";
        } else {
            return "color: #096dd9; border: 1px solid #096dd9";
        }
    } else if (Ghost) {
        return "color: #096dd9; border: 1px solid #096dd9";
    } else {
        return "rgba(0,0,0,.85)";
    }
};

export const buttons = css`
    border: ${getBorder};
    padding: ${getPadding};
    margin: 8px;
    color: ${getColor};
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 3px;

    transition: all 0.3s linear;
    &:not(:disabled):focus {
        ${getFocus}
    }
    &:not(:disabled):hover {
        ${getFocus}
    }
    &:not(:disabled):active {
        ${getActiveColor};
        box-shadow: ${({ Link }) =>
        !Link && "0 0 5px 1.5x rgba(0, 0, 0, 0.20);"};
    }
`;
export const fonts = css`
    font-size: ${getFontSize};
`;
