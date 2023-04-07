import React, { useState } from 'react'
import { Container, Top, Bottom, StatusContainer, DateText, Price } from './style'
import { Title, Calendar, Dropdown } from '../../FormElements'
import { single } from '../../../data/menu'
import HighCharts from '../HighChart'
export default () => {
  const [isActive, setIsActive] = useState('real')
  return (
    <Container>
      <Top>
        <Title width='138'>Umumiy tushum. Barcha tiplar bo'yicha</Title>
        <Top.Right>
          <Dropdown options={single} placeholder="Real pul turi" width="170" />
          <DateText>September.2020</DateText>
          <Calendar size="20px" />
        </Top.Right>
      </Top>
      <Bottom>
        <StatusContainer>
          <StatusContainer.Item onClick={() => setIsActive("all")} active={isActive === 'all'} >BARCHASI</StatusContainer.Item>
          <StatusContainer.Item onClick={() => setIsActive("real")} active={isActive === 'real'} >REAL PUL</StatusContainer.Item>
          <StatusContainer.Item onClick={() => setIsActive("noreal")} active={isActive === 'noreal'} >NO REAL PUL</StatusContainer.Item>
        </StatusContainer>
        <Bottom.Right>
          <Price>450,000,000 UZB</Price>
          <Price.Additional>
            This month: <Price.Additional price>+12,000,000</Price.Additional>
          </Price.Additional>
        </Bottom.Right>
      </Bottom>
      {/* charts */}
      <HighCharts />
    </Container>
  )
}