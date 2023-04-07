import React from 'react'
import { Container } from './style'
import Api from '../Api'
import { data } from '../../data/api'
import { Bio, Text, Mark } from '../Bio'
export default () => (
  <Container>
    <Api data={data} headerContent="api explanation || important definition" />
    <Bio title='Button' bio="To trigger an operation">
      <Text>
        A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
      </Text>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
    </Bio>
  </Container>
)