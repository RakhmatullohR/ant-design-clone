import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Header, Setting, LeftArrow, RightArrow, Content } from './style'


export const Collapse = ({ children }) => <Container>{children}</Container>



export const Panel = ({ children, header, key, setting, alignIcon }) => {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(null);
  const [isLeft, setIsLeft] = useState(false)
  useEffect(() => {
    alignIcon === "right" ?
      setIsLeft(false) :
      setIsLeft(true)
  }, [alignIcon])
  return (
    <Wrapper>
      <Header left={!isLeft}>
        {isLeft && <LeftArrow isOpen={open} onClick={() => setOpen(!open)} size={22} />}
        {header ? header : "Header"}
        {!isLeft && <RightArrow isOpen={open} onClick={() => setOpen(!open)} size={22} />}
        {setting && <Setting size={20} />}
      </Header>
      <Content active={open} onClick={() => setId(id)}>
        {children}
      </Content>
    </Wrapper>
  )
}