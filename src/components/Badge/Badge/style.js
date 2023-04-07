import styled from "styled-components";


export const getType = ({ type }) => {
    switch (type) {
        case "success":
            return "#52c41a";
        case "warning":
            return "#faad14";
        case "error":
            return "#ff4d4f";
        case "processing":
            return "#1890ff";
        default:
            return "#1890ff";
    }
}


export const Container = styled.div`    
position: relative;    
background: transparent;        
width: fit-content;
height: fit-content;
margin-top: 10px;
`;


export const Badge = styled.div`
display: ${({ hide }) => hide && 'none'};
height: fit-content;
width: fit-content;
position: absolute;
color: ${({ color }) => color || 'white'};
background: ${({ bgColor }) => bgColor || '#ff4d4f'};
padding: ${({ more }) => more ? '0 8px' : '2px 8px'};
border-radius: 20px;
font-size: 14px;
top: -10px;
right: ${({ more }) => more ? "-33%" : '-20%'};
border: .5px solid white;
`
export const IconBadge = styled.div`
height: fit-content;
width: fit-content;
position: absolute;
color: ${({ color }) => color || 'white'};
background: ${({ bgColor }) => bgColor || 'transparent'};

border-radius: 20px;
top: -11px;
right: ${({ more }) => more ? "-33%" : '-20%'};
`


export const DotBadge = styled.div`
    position: absolute;
    top: -4px;
right: ${({ more }) => more ? "-13%" : '-11%'};
    width: ${({ size }) => {
        if (size === "large") {
            return "15px";
        } else if (size === "medium") {
            return "12px";
        } else if (size === "small") {
            return "9px";
        } else { return "12px" }
    }};
    height: ${({ size }) => {
        if (size === "large") {
            return "15px";
        } else if (size === "medium") {
            return "12px";
        } else if (size === "small") {
            return "9px";
        } else { return "12px" }
    }};
    border-radius: 50%;
    background: 'red';
    background: ${({ type }) => type === "processing" && "#1890ff"};
    background: ${({ dotColor }) => dotColor || getType};
    display: ${({ dot }) => !dot && "none"};
    transition: all 3s linear;
    @keyframes pulse {
        0% {box-shadow:${({ shadow }) => shadow ? `0 0 0 ${shadow}` : `0 0 0 #1890ff`};}
        70% {box-shadow: 0 0 0 5px rgba(204, 169, 44, 0);}
        100% {box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);}
    }
    animation: ${({ type }) => type === "processing" && "pulse 2s infinite"};
    cursor: pointer;
    box-shadow:${({ shadow }) => shadow ? `0 0 0 ${shadow}` : `0 0 0 #1890ff`};
`;
// ==================
// ==================
