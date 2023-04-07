import styled from 'styled-components'

export const Container = styled.div`
display: inline-block;
vertical-align: top;
border: var(--border);
border-radius: 8px;
background:white;
cursor: pointer;
transition: .5s;
margin-bottom: 25px;
width: 100%;

:hover{
  background: white;
  box-shadow: var(--shadow);
}
`
export const Title = styled.h3`
color: var(--color);
border-bottom: 1px solid white;
padding: 0 10px;
white-space: nowrap;
`
export const Body = styled.div`
padding: 10px 15px;
/* overflow: hidden; */
height: 100%;
`

export const Footer = styled.div`
display: flex;
padding: 10px 15px;
justify-content: center;
/* z-index: 1; */
`
export const IconWrapper = styled.a`
text-decoration: none;
color: inherit;
padding-right: 10px;
cursor: pointer;
opacity: .3;
&:hover{
  opacity: 1;
}
`

export const Code = styled.div`
display: ${({ expand }) => expand ? 'flex' : 'none'};
height: fit-content;
overflow: hidden;
width: 100%;
`

export const Wrapper = styled.div`
display: flex;
align-items: center;
`

export const Line = styled.div`
border: var(--border);
border-radius: 10px;
width:${({ start }) => start ? "100px" : '100%'};
`
export const Bio = styled.div`
border-bottom: var(--border);
`
Bio.Content = styled.div`
padding: 10px 15px;
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: var(--color);
`