import styled from 'styled-components'


export const Container = styled.div`
/* display: flex; */
width: 100%;
height: 100%;
`

export const Wrapper = styled.div`
display: flex;
background: white;
padding-top: var(--navbar-height);
`
export const Body = styled.div`
position: relative;
background: white;
border-radius: 8px;
padding: 25px;
margin: ${({ active }) => active ? '0px' : '35px 35px 35px calc(var(--sidebar-width) + 35px)'};
transition: margin 0.3s ease-in-out;
height: 100%;
/* height: calc(100vh - var(--navbar-height)); */
width: -webkit-fill-available;
box-shadow: 0px 0px 12px 0px rgba(73, 75, 116, 0.16);

`