import React from 'react'
import { Container } from './style'
const Checkbox = ({ checked, name, title }) => (
  <Container checked={checked}>
    <label class="container">
      {title}
      <input type="radio" checked={checked} name={name || "name"} />
      <span class="checkmark"></span>
    </label>
  </Container>
)
export default Checkbox