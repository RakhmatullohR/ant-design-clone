import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
position: fixed;
height: 100vh;
box-sizing: border-box;
width: var(--sidebar-width);
border-right: 1px solid #F5F5F5;
box-shadow: 0px 12px 6px rgba(73, 75, 116, 0.16);
padding: 45px 0 15px 55px;
background: linear-gradient(360deg,white,white);
overflow-y: scroll;
z-index: 3;
  opacity: ${({ active }) => active ? 0 : 1};
  transition: opacity 1s ease-in-out;
`
export const Wrapper = styled.div`
`

export const Element = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: ${({ active }) => (active ? 600 : 500)};
font-size: 16px;
line-height: 16px;
margin-bottom: 38px;
color: #262626;
opacity: ${({ active }) => (active ? 1 : .8)};
display: flex;
align-items: center;
cursor: pointer;
color: ${({ active }) => (active ? '#1A1A27' : '#A2A3B7')};
border-right: ${({ active }) => (active && '2px solid yellowgreen')};  
&:hover {
     color: #1A1A27;
     opacity:1;
    transition: opacity 0.2s ease-in-out;
 }
`

export const SubItem = styled(Element)`
border:0;
`

export const SubElement = styled(Element)`
display: ${({ collapsed }) => !collapsed && 'none'};
height:  ${({ collapsed }) => !collapsed && '0px'};
padding-left: 25px;
transition: height 1s ease-in-out;
overflow: hidden;
`

