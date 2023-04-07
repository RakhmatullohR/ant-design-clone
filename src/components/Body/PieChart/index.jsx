import React from 'react'
import { Container, Header, Wrapper, Details } from './style'
import { PieChart } from 'react-minimal-pie-chart';
import { Calendar, Title } from '../../FormElements'
import { data } from '../../../data/pie'

export default () => (
  <Container>
    {
      data.map(({ data, title, details }, index) => (
        <Wrapper key={`${index}+1`}>
          <Header>
            <Title>{title}</Title>
            <Calendar size="20px" />
          </Header>
          <PieChart
            lineWidth={30}
            lengthAngle={-180}
            data={data}
            radius={40}
          />
          <Details>
            <Details.Number num={typeof details.number === 'number'} >{details.number}</Details.Number>
            <Details.Title>{details.title}</Details.Title>
          </Details>
        </Wrapper>
      ))
    }
  </Container>
)