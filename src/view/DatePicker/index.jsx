import React from 'react'

import Calendar from '../../components/DatePicker'
import { Container } from './style'
import Api from '../../components/Api'
import Card from '../../components/DetailsCard'
import { CardBody } from '../../components/Styles'
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
    <CardBody>

      <Card
        title="Default"
        Component={<Calendar />}
      />
      <Card
        title="Date Range"
        Component={<Calendar selectedDate={[new Date(2020, 10, 1), new Date(2020, 10, 4)]} />}
      />
      <Card
        title="View in Year"
        Component={<Calendar view="year" />}
      />
      <Card
        title="Max Date"
        Component={<Calendar maxDate={new Date()} />}
      />
      <Card
        title="Min Date"
        Component={<Calendar minDate={new Date()} />}
      />
    </CardBody>
    <Card
      title="Show Double View"
      Component={<Calendar showDoubleView />}
    />
    <Api data={data} headerContent="api explanation || important definition" />
  </Container>
)