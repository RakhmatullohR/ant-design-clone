import React from 'react'
import { Container } from './style'
import { header } from '../../data/api'
import Table from './Table'

export default ({ data, headerContent }) => (
  <Container>
    <Table headerContent={headerContent} data={data} header={header} />
  </Container>
)