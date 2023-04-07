import React from 'react'
import { Container, Header, DateYear, Table, DataWrapper, TH, TR, TBody, TD, Period, StudentCon } from './style'
import { Calendar, Title, } from '../../FormElements'
import { list, total } from '../../../data/table'


const Student = ({ value }) => (
  <StudentCon>
    <StudentCon.Count>{value}</StudentCon.Count>
    <Period>
      <Period.Title>in this month </Period.Title>
      <Period.Title plus> +12 </Period.Title>

    </Period>
  </StudentCon>
)

export default ({ header, data }) => (
  <Container>
    <Header>
      <Header.Left>
        <Title>Mentor <br /> ishlab topgan pul</Title>
      </Header.Left>
      <Header.Right>
        <DateYear>Sentabr 2020</DateYear>
        <Calendar />
      </Header.Right>
    </Header>
    <Table>
      <thead>
        <TR>
          {
            header.map(({
              name, position, width, id
            }) => (
                <TH
                  className="box-details-fixed-tabel-TH"
                  width={width}
                  position={position}
                  key={id}
                >
                  {name}
                </TH>
              ))
          }
        </TR>
      </thead>
      <TBody>
        {
          data.slice().map((cell) => (
            <TR key={cell.id}>
              {
                ('child' in cell) ?
                  (
                    Object.entries(cell).slice(1).map(([key, value], i) => {
                      return (
                        key === !'child' &&
                        <TD type={key} name={key === 'name' ? 1 : 0} position={list[i]} key={key}>
                          {key === 'student' ? <Student value={value} /> : value}
                        </TD>
                      )
                    })
                  )
                  : Object.entries(cell).slice(1).map(([key, value], i) => {
                    return (
                      <TD type={key} name={key === 'name' ? 1 : 0} position={list[i]} key={key}>
                        {key === 'student' ? <Student value={value} /> : value}
                      </TD>
                    )
                  })
              }
            </TR>
          ))
        }
        {
          <TR>
            {
              Object.entries(total).slice(1).map(([key, value], i) => (
                <TD name={key === 'name' ? 1 : 0} position={list[i]} key={key}>
                  <DataWrapper type={key} key={key} position={list[i]} name={key === 'name' ? 1 : 0} total={value === 'Jami summa'}>
                    {value}
                  </DataWrapper>
                </TD>
              ))
            }
          </TR>
        }
      </TBody>
    </Table>
  </Container>
)