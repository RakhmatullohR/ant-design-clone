import styled from "styled-components"

export const Container = styled.div`
padding: 0 20px;
display: inline-block;
align-items: center;

`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin:${({ alone }) => alone && '15px'};

`;

export const Tester = styled.div`
width: 40px;
height: 40px;
background: #eee;
`

export const Span = styled.span`
padding-bottom: 5px;
`