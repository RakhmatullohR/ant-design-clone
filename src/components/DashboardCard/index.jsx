import React from 'react'
import { Container, Title } from './style'

export default ({ title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>
        {title || "Title"}
      </Title>
    </Container>
  )
}