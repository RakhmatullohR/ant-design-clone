import styled, { css } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const InnerWrapper = styled.div`
/* text-align: center; */
/* display: flex; */
/* grid-template-columns: repeat(auto-fit, minmax(70px, 1fr)); */
padding: 25px 20px;
`;
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

export const getPadding = ({ size }) => {
    switch (size) {
        case "large":
            return "8px 12px";
        case "medium":
            return "6px 10px";
        case "small":
            return "4px 8px";
        default:
            return "6px 10px";
    }
};

export const buttons = css`
    border: 1px solid #000;
    background: #fff;
    padding: ${getPadding};
    margin: 8px;
    color: #000;
    cursor: pointer;
    border-radius: 3px;
    outline: none;
    &:not(:disabled):focus {
        border: 1px solid #1890ff;
        color: #1890ff;
    }
    &:not(:disabled):hover {
        border: 1px solid #1890ff;
        color: #1890ff;
    }
    &:not(:disabled):active {
        color: #096dd9;
        border: 1px solid #096dd9;
    }
`;
export const fonts = css`
    font-size: ${getFontSize};
`;

export const PlacementContainer = styled.div`
display: flex;
flex-direction: column;
`

PlacementContainer.Layout = styled.div`
display: flex;
`

PlacementContainer.Top = styled.div`
display: flex;
justify-content: center;
`
PlacementContainer.Bottom = styled.div`
display: flex;
justify-content: center;
`
PlacementContainer.Left = styled.div`
display: flex;
flex-direction: column;
`
PlacementContainer.Right = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
`

export const Colors = styled.div`
display: flex;
flex-wrap: wrap;
`