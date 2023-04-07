import styled from "styled-components";

export const Container = styled.div`
width:auto;
height: fit-content;
`;

export const width = ({ size }) => {
    const lowerCaseSize = size.toLowerCase();
    switch (lowerCaseSize) {
        case "large":
            return "46px";
        case "medium":
            return "35px";
        case "small":
            return "27px";
        default:
            return "35px";
    }
};

export const heightOfCircle = ({ size }) => {
    const lowerCaseSize = size.toLowerCase();
    switch (lowerCaseSize) {
        case "large":
            return "22px";
        case "medium":
            return "18px";
        case "small":
            return "15px";
        default:
            return "18px";
    }
};

export const height = ({ size }) => {
    const lowerCaseSize = size.toLowerCase();
    switch (lowerCaseSize) {
        case "large":
            return "24px";
        case "medium":
            return "20px";
        case "small":
            return "17px";
        default:
            return "20px";
    }
};
