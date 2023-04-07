import React from 'react'
import { TitleText, DescriptionText } from './style'

export const Title = ({ children, width }) => (
  <TitleText width={width}>
    {children}
  </TitleText>
)

export const Description = ({ children }) => (
  <DescriptionText>
    {children}
  </DescriptionText>
)