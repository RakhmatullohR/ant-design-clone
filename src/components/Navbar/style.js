import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const Title = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 16px;
color:  var(--color);
border-right: var(--border);
padding: 10px 6px;
border: 2px solid linear-gradient(90deg,transparent,red);
position: relative;
display: inline-block;
overflow: hidden;
opacity: 1;

:hover{
    color: #255784 ;
    transition-delay: 1s;
}
span {
  position: absolute;
  display: block;
}

span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, red);
}

&:hover span:nth-child(1) {
  left: 100%;
  transition: .7s;
}

& span:nth-child(2) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(270deg, transparent, red);
}

&:hover span:nth-child(2) {
  right: 100%;
  transition: 0.7s;
  transition-delay: 0.5s;
}

`

export const Container = styled.div`
position: fixed;
width: 100vw;
box-sizing: border-box;
height: var(--navbar-height);
background: white;
align-items: center;
display: flex;
padding: 0 25px;
box-shadow: 0px 0px 12px 0px rgba(73, 75, 116, 0.16);
z-index: 10;
`
export const Left = styled.div`
display: flex;
cursor: pointer;
align-items: center;
`

export const Right = styled.div`
display: flex;
align-items:center;
margin-left: auto;
`

export const UserName = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: var(--color);
padding-right: 10px;
`

export const NavItem = styled(NavLink)`
text-decoration: none;
font-family: SF Pro Display;
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 16px;
color: var(--color);
padding: 0 6px;
height: var(--navbar-height);
align-items:center;
display: flex;
justify-content: center;
margin-top: 2px;
border: none;
opacity: 0.4;
:hover{
opacity: 1;
}
`

export const activeStyle = {
  color: 'rgba(73, 75, 113, 58.16)',
  opacity: 1,
  hover: {
    opacity: 0.7
  }
}

export const IconWrapper = styled.a`
text-decoration: none;
color: inherit;
margin: 0 5px;
opacity: .6;
&:hover{
  opacity: 1
}
`