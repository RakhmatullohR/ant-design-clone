import styled from 'styled-components'

export const Layout = styled.div`

`
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-auto-rows: 200px;
grid-gap: 30px;
margin-bottom: 25px;
transition: display .5s;
transition-delay: 1s;
`

export const Wrapper = styled.div`
transition: .5s;
`
export const Title = styled.h1`
color: var(--color);
border-bottom: 1px solid white;
padding: 6px 0px;
transition: .5s;
`