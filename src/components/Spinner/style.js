import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    grid-gap: 5rem;
    padding: 3rem 1rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

export const getSize = ({ size }) => {
    switch (size) {
        case "large":
            return "7px";
        case "medium":
            return "5px";
        case "small":
            return "4px";
        default:
            return "5px";
    }
};
