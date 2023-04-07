import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
export const Wrapper = styled.div`
padding: 13px 0;
border-bottom: 3px solid #F8F8F8;
position: relative;
max-height: 300px;
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 50px;
`

export const Details = styled.div`
position: absolute;
width: 155px;
align-items: center;
display: flex;
flex-direction: column;
/* justify-content: center; */
top: 215px;
left: 88px;
`

Details.Number = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: ${({ num }) => num ? 800 : 600};
font-size: ${({ num }) => num ? '29px' : '20px'};
line-height: 34px;
display: flex;
align-items: center;
color: #000000;
white-space: nowrap;
`
Details.Title = styled.div`

font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 11.2px;
line-height: 13px;
display: flex;
align-items: center;
color: #898989;
`