import React, { useState } from 'react'
import { Container } from './style'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default ({ showDoubleView, selectedDate, view, maxDate, minDate, onChange }) => {
  const [date, setDate] = useState(selectedDate || new Date())
  const onChangeDefault = date => {
    setDate(date)
  }

  return (
    <Container>
      <Calendar
        onChange={onChange || onChangeDefault}
        value={date}
        selectRange={true}
        view={view}
        showDoubleView={showDoubleView}
        calendarType="US"
        maxDate={maxDate}
        minDate={minDate}
      />
    </Container>
  )
}