import styled from 'styled-components'

export const Container = styled.div`
/* border: var(--border); */
border-radius: 8px;
background:whitesmoke;
cursor: pointer;
transition: .5s;

:hover{
  background: white;
  box-shadow: 0px 0px 12px 0px rgba(73, 75, 116, 0.16);
  transition: .5s;
}
`
export const Title = styled.h3`
color: var(--color);
border-bottom: 1px solid white;
padding: 10px 15px;
border-bottom: var(--border);
&${Container}:hover{
  color: red !important;
}
`