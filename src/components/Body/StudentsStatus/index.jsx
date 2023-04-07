import React from "react";
import { Container, Top, Bottom, Title, Time, Wrapper, Students, Added } from "./style";
import { Calendar } from '../../FormElements'

function App({ status, last, data: { number, added } }) {
  return (
    <Container last={last}>
      <Top>
        <Title>Ro'yhatdan o'tgan talabalar soni</Title>
        <Calendar size="20px" />
      </Top>
      <Bottom>
        <Students status={status}>{number}</Students>
        <Wrapper>
          <Added status={status}>+{added} ta</Added>
          <Time>in this month</Time>
        </Wrapper>
      </Bottom>
    </Container>
  );
}

export default App;
