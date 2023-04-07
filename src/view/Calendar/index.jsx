import React from 'react'

import Calendar from '../../components/Calendar'
import events from '../../data/calendar'

import { Container } from './style'
import Api from '../../components/Api'
import Card from '../../components/DetailsCard'
import { data } from '../../data/api'
import { Bio, Text, Mark } from '../../components/Bio'
export default () => (
  <Container>
    <Bio title='Button' bio="To trigger an operation">
      <Text>
        A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
      </Text>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
    </Bio>
    <Card
      title="Default"
      Component={<Calendar />}
    />
    <Card
      title="Default data"
      Component={<Calendar data={events} />}
    />
    <Api data={data} headerContent="api explanation || important definition" />
  </Container>
)