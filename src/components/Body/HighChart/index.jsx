import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container, Wrapper, Title, Left, DateTitle } from './style'
import { Calendar } from '../../FormElements';
// import Highstock from 'highcharts/highstock';
import { options } from '../../../data/chart'

// const Charts = ReactHighcharts.withHighcharts(Highstock);

export default () => {
  return (
    <Wrapper>
      {
        options.map((option, index) => (
          <Container key={`${index}+1`}>
            <Title>Tushumlar <br /> kategoriyalar boyicha</Title>
            <Left>
              <DateTitle>September 2020</DateTitle>
              <Calendar size="20px" />
            </Left>
            <HighchartsReact
              highcharts={Highcharts}
              options={option}
            />
          </Container>
        ))
      }
    </Wrapper>
  )
}