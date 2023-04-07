import styled from 'styled-components'

export const Container = styled.div`
/* position: relative; */
`

export const Input = styled.input`
outline: none;
border: none;
height: 36px;
padding: 0 10px;
  border-radius: 6px;
color: var(--color);
:focus{
  border: var(--border);
  border-radius: 6px;
}
::placeholder{
  color: #d1d1d1;
}
`