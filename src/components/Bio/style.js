import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
export const Container = styled.div`
margin-bottom: 50px;
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
export const Content = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
color: var(--color);
margin-bottom: ${({ bio }) => bio ? '40px' : "15px"};
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
export const Marker = styled.div`
display: flex;
align-items: center;
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
color: var(--color);
`
Marker.Dot = styled.div`
margin: 15px 10px;
width: 4px;
height: 4px;
border-radius: 50%;
border: 1px solid var(--color);
`