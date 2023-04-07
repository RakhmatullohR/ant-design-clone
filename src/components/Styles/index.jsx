import React from 'react'
import { Container, Title, Wrapper } from './style'

export const CardBody = ({ children, col }) => (
  <Wrapper className="masonry">
    <Title>Examples</Title>
    <Container col={col}>
      {children}
    </Container>
  </Wrapper>
)