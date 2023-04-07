import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`
export const Container = styled.div`
columns: ${({ col }) => col || 2};
height: fit-content;
box-sizing: border-box;
`
export const Title = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 16px;
color: var(--color);
margin-bottom: 20px;
`

export const DetailsContainer = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
margin-bottom: 38px;
color: #262626;
`
