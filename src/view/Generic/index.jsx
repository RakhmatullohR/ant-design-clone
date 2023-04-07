import React from 'react'
import { Container } from './style'

export default ({ location: { pathname } }) => (
  <Container>
    <h1>
      {pathname} Coming Soon
    </h1>
  </Container>
)