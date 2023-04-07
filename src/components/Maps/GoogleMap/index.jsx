import React from 'react'
import { Container } from './style'
import Basic from './Basic'
import { googleData } from '../../../data/map';
import { data } from '../../../data/api';
import Details from '../../DetailsCard'
import Api from '../../Api'
import { Bio, Text, Mark } from '../../Bio'
export default () => (
  <Container>
    <Bio title='Google Map' bio="To trigger an operation">
      <Text>
        A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
      </Text>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
      <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
    </Bio>
    {/* default */}
    <Details
      bio="Location Highler Google Map"
      title="Default"
      Component={<Basic data={googleData} />}
    />
    {/* Polyline */}
    <Details
      bio="Location Highler Google Map"
      title="Polyline"
      Component={
        <Basic
          polyline
          data={googleData}
        />}
    />
      Polygon
    <Details
      bio="Location Highler Google Map"
      title="Polyline"
      Component={
        <Basic
          polygon
          data={googleData}
        />}
    />
    {/* radiusHighliter */}
    <Details
      bio="Location Highler Google Map"
      title="Polyline"
      Component={
        <Basic
          radius={2000}
          data={googleData}
        />}
    />

    {/* all props */}
    <Details
      bio="Location Highler Google Map"
      title="All props"
      Component={
        <Basic
          polygon
          polyline
          radius={2000}
          data={googleData}
        />}
    />
    <Api data={data} headerContent="api explanation || important definition" />
  </Container>
)