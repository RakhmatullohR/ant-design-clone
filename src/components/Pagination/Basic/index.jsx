import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Left, Right, NumContainer, Page, DotWrapper } from './style'
import Basic from "../../Dropdown/Basic";
import { ThreeDots } from '@styled-icons/bootstrap/ThreeDots';
import { ArrowheadRight } from '@styled-icons/evaicons-solid/ArrowheadRight'
import { ArrowheadLeft } from '@styled-icons/evaicons-solid/ArrowheadLeft'
export default ({ total, onClick, active, itemPerPage, showPageCounter }) => {
  const [source, setSource] = useState(total || Number)
  const [current, setCurrent] = useState(active || 1)
  const [pageSize, setPageSize] = useState(itemPerPage || 10)
  const [options, setOptions] = useState([])
  const [state, setState] = useState({ current: current, perPage: pageSize });
  const [hideIndex, setHideIndex] = useState([1, 2, 3, 4, 5, 6, Math.ceil(source / pageSize)])
  const [frontIcon, setFrontIcon] = useState(true)
  const [backIcon, setBackIcon] = useState(true)

  useEffect(() => {
    current >= 6 ?
      current > Math.ceil((source / pageSize) - 2) ?
        setHideIndex([1, Math.ceil(source / pageSize) - 2, Math.ceil(source / pageSize) - 1, Math.ceil(source / pageSize)])
        : setHideIndex([1, current - 1, current, current + 1, Math.ceil(source / pageSize)])
      : setHideIndex([1, 2, 3, 4, 5, 6, Math.ceil(source / pageSize)])
  }, [current, pageSize, source])


  useEffect(() => {
    setState({ current: current, perPage: pageSize })
  }, [current, pageSize])

  useEffect(() => {
    setSource(total || [])
    setCurrent(active || 1)
    setPageSize(itemPerPage || 10)
  }, [active, total, itemPerPage])

  useEffect(() => {
    const page = Math.ceil(source / 10);
    for (let i = 1; i <= page; i++) {
      setOptions((prev) => [
        ...prev,
        { id: i, value: `${i * 10} / page` }
      ]
      )
    }
  }, [source])

  const NextPage = () => {
    if (current !== Math.ceil(source / pageSize)) {
      setCurrent(current + 1)
      onClick({ current: state.current + 1, perPage: state.perPage })
    }
  }

  const onChange = (e) => {
    setCurrent(e + 1)
    onClick({ current: e + 1, perPage: state.perPage })
  }

  const PrevPage = () => {
    if (current !== 1) {
      setCurrent(current - 1)
      onClick({ current: state.current - 1, perPage: state.perPage })
      setHideIndex([1, current - 1, current, current + 1, Math.ceil(source / pageSize)])
    }
  }
  const onSelect = (e) => {
    setPageSize(e * 10);
    setCurrent(1)
    onClick({ current: state.current, perPage: e * 10 })
  }
  const frontMouseOut = () => {
    setFrontIcon(true)
  }
  const frontMouseOver = () => {
    setFrontIcon(false)
  }
  const backMouseOut = () => {
    setBackIcon(true)
  }
  const backMouseOver = () => {
    setBackIcon(false)
  }
  const onDoubleBack = () => {
    current - 3 <= 0 ? setCurrent(1) : setCurrent(current - 3)
  }
  const onDoubleForward = () => {
    if (current + 3 > Math.ceil(source / pageSize)) {
      setCurrent(Math.ceil(source / pageSize));
      onClick({ current: Math.ceil(source / pageSize), perPage: state.perPage })
    }
    else {
      setCurrent(current + 3)
    }
  }
  return (
    <Container>
      <Wrapper>
        <Left size="20px" onClick={PrevPage} />
        {
          Math.ceil(source / pageSize) > 10 ?

            [...Array(Math.ceil(source / pageSize))].map((page, index) => {
              return (
                <>
                  {
                    index + 1 === 2 ?
                      current >= 6 ?
                        !(current <= Math.ceil(source / pageSize) - 3) ?
                          <DotWrapper onClick={onDoubleBack} onMouseOut={backMouseOut} onMouseOver={backMouseOver} icon={backIcon}>
                            {backIcon ? <ThreeDots size={24} />
                              : <ArrowheadLeft size={20} />}
                          </DotWrapper>
                          : <DotWrapper onClick={onDoubleForward} onMouseOut={frontMouseOut} onMouseOver={frontMouseOver} icon={frontIcon}>
                            {frontIcon ? <ThreeDots size={24} />
                              : <ArrowheadRight size={20} />}
                          </DotWrapper>
                        : <NumContainer hide={!hideIndex.includes(index + 1)} key={`${index} + 1`} onClick={() => onChange(index)} current={current === index + 1} >
                          {index + 1}
                        </NumContainer>
                      :
                      index + 1 === Math.ceil(source / pageSize) - 1 ?
                        current > Math.ceil(source / pageSize) - 3 ?
                          <NumContainer hide={!hideIndex.includes(index + 1)} key={`${index} + 1`} onClick={() => onChange(index)} current={current === index + 1} >
                            {index + 1}
                          </NumContainer>
                          :
                          !(current < 6) ?
                            <DotWrapper onClick={onDoubleBack} onMouseOut={backMouseOut} onMouseOver={backMouseOver} icon={backIcon}>
                              {backIcon ? <ThreeDots size={24} />
                                : <ArrowheadLeft size={20} />}
                            </DotWrapper>
                            : <DotWrapper onClick={onDoubleForward} onMouseOut={frontMouseOut} onMouseOver={frontMouseOver} icon={frontIcon}>
                              {frontIcon ? <ThreeDots size={24} />
                                : <ArrowheadRight size={20} />}
                            </DotWrapper>
                        : <NumContainer hide={!hideIndex.includes(index + 1)} key={`${index} + 1`} onClick={() => onChange(index)} current={current === index + 1} >
                          {index + 1}
                        </NumContainer>
                  }
                </>
              )
            })
            :
            [...Array(Math.ceil(source / pageSize))].map((page, index) => {
              return (
                <>
                  <NumContainer key={`${index} + 1`} onClick={() => onChange(index)} current={current === index + 1} >
                    {index + 1}
                  </NumContainer>
                </>
              )
            })

        }
        <Right size="20px" onClick={NextPage} />
        {showPageCounter &&
          <Page >
            <Basic height={150} top onSelect={onSelect} size='large' options={options} placeholder={`${pageSize} / page`} />
          </Page>
        }
      </Wrapper>
    </Container>
  )
}