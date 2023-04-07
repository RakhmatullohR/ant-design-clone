import React from 'react'
import {
  Container, Title, Header, SubTitle, Table, Thead, TH, TR, TBody, TD
} from './style'




export default ({ header, data, headerContent }) => (
  <Container>
    <Header>
      <Title>API</Title>
      <SubTitle>
        {headerContent}
      </SubTitle>
    </Header>
    <Table>
      <Thead>
        <TR>
          {
            header.map(({
              name, position, width, id
            }) => (
                <TH
                  width={width}
                  position={position}
                  key={id}
                >
                  {name}
                </TH>
              ))
          }
        </TR>
      </Thead>
      <TBody>
        {
          data.slice().map((cell) => (
            <TR key={cell.id}>
              {
                Object.entries(cell).slice(1).map(([key, value]) => {
                  return (
                    <TD type={key} key={key}>
                      {value}
                    </TD>
                  )
                })
              }
            </TR>
          ))
        }
      </TBody>
    </Table>
  </Container>
)