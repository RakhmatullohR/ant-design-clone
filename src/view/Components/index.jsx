import React from 'react'
import { Container } from './style'
import Components from '../../components/Components'

export default ({ location: { pathname } }) => (
  <Container>
    <Components />
  </Container>
)