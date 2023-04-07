import React from 'react'
import { Container, Title, Wrapper, Content, Marker } from './style'

export const Bio = ({ bio, title, children }) => (
  <Wrapper>
    <Title>{title || 'Buttons'}</Title>
    <Content bio>{bio || 'explain component type..'}</Content>
    <Title>When To Use</Title>
    <Container>
      {children}
    </Container>
  </Wrapper>
)

export const Text = ({ children }) => (
  <Content>
    {children}
  </Content>
)

export const Mark = ({ children }) => (
  <Marker>
    <Marker.Dot />
    {children}
  </Marker>
)