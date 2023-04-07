import React from 'react'
import { Container } from './style'
import Basic from './Basic'
import { sourceData1, sourceData2, header1 } from '../../data/table'
import Api from '../Api'
import { data } from '../../data/api'
import { Bio, Text, Mark } from '../Bio'
import Card from "../DetailsCard";

export default () => (
  <Container>
    <Bio title='Table' bio="To toggle an operation">
      <Text>A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.</Text>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
    </Bio>
    <Card
      bio="disabled switch accepts size, bgChecked, bgNotChecked props"
      title="Basic"
      Component={
        <Basic
          data={sourceData1}
          header={header1}
        // fixedId height={300}
        // fixedHeader
        // editable
        />
      }
    />
    {/* fixed header */}
    <Card
      bio="disabled switch accepts size, bgChecked, bgNotChecked props"
      title="Fixed Header"
      Component={
        <Basic
          data={sourceData2}
          header={header1}
          height={300}
          // fixedId
          fixedHeader
        // editable
        />
      }
    />
    <Card
      bio="disabled switch accepts size, bgChecked, bgNotChecked props"
      title="Fixed ID"
      Component={
        <Basic
          data={sourceData2}
          header={header1}
          height={300}
          width={600}
          fixedId
          fixedHeader
        // editable
        />
      }
    />
    <Card
      bio="disabled switch accepts size, bgChecked, bgNotChecked props"
      title="editable"
      Component={
        <Basic
          data={sourceData2}
          header={header1}
          height={300}
          fixedId
          fixedHeader
          editable
        />
      }
    />
    <Api data={data} headerContent="api explanation || important definition" />
  </Container>
)