import React, { useState, useEffect } from 'react'
import { Container, Table, TH, TR, TBody, THead, TD, Input, EditContainer, EditText } from './style'


export default ({ header, data, dataCounter, height, width, fixedHeader, fixedId, onChange, editTitle, editable }) => {
  const [source, setSource] = useState(data || [])
  const [cloneSource, setCloneSource] = useState(data || [])
  const [counter, setCounter] = useState(dataCounter)
  const [edit, setEdit] = useState(null)
  useEffect(() => {
    setSource(data)
    setCloneSource(data)
  }, [data])
  useEffect(() => {
    setCounter(dataCounter)
  }, [dataCounter])

  const onSave = (e) => {
    setCloneSource(source)
    setEdit(null)
    onChange && onChange(e)

  }
  const onCancel = () => {
    setSource(cloneSource)
    setEdit(null)
  }

  const onDataChange = ({ target: { value, name } }, id) => {
    setSource((prev) => {
      const newData = prev.map((data) =>
        data.id === id ?
          { ...data, [name]: value } : data
      )
      return newData
    })
  }


  return (
    <Container height={height} width={width}>
      <Table>
        <THead>
          <TR trhead>
            {
              header.map(({
                title, key, dataIndex
              }) => (
                  <TH
                    // width={width}
                    // position={position}
                    leftAlign={(fixedHeader || fixedId) && key === 'id'}
                    fixedHeader={fixedHeader}
                    fixedId={fixedId && key === 'id'}
                    edit={key === 'edit'}
                    key={key}
                  >
                    {title}
                  </TH>
                ))
            }
            {editable && <TH
              // width={width}
              // position={position}
              leftAlign={(fixedHeader || fixedId) && true}
              fixedHeader={fixedHeader}
              fixedId={fixedId && true}
              edit
              key={'edit-key'}
            >
              {editTitle || 'Edit'}
            </TH>}
          </TR>
        </THead>
        <TBody>
          {
            source.slice(dataCounter && 0, dataCounter && counter).map((cell) => (
              <TR key={cell.id}>
                {
                  header.map(({ dataIndex, render: Render }) => (
                    Object.entries(cell).map(([key, value], i) =>
                      dataIndex === key && (
                        <TD leftAlign={fixedId && key === 'id'} key={key}>
                          {Render ? Render(value) :
                            cell.id === edit ?
                              <Input readonly disabled={key === "id"} name={dataIndex} value={value}
                                onChange={(e) => onDataChange(e, cell.id)}
                              />
                              : value
                          }
                        </TD>
                      ))
                  ))
                }
                {editable && <TD edit >
                  <EditContainer>
                    {cell.id === edit ?
                      <EditContainer>
                        <EditText onClick={onSave} >Save</EditText>
                        <EditText onClick={onCancel} >Cancel</EditText>
                      </EditContainer>
                      : <EditText onClick={() => setEdit(cell.id)}>Edit</EditText>
                    }
                  </EditContainer>
                </TD>}
              </TR>
            ))
          }
        </TBody>
      </Table>
      {/* <Pagination
        // total={source.length}
        // alignCounter
        onClick={(e) => console.log('e', e)}
      /> */}
    </Container>
  )
}