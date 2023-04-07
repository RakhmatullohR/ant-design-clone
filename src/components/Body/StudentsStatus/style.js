import styled from 'styled-components'
import { getColor } from '../style'

export const Container = styled.div`
display: flex;
flex: 1;
flex-direction: column;
width: fit-content;
height: fit-content;
padding: 20px;
border-right: ${({ last }) => last ? '' : '3px solid #F8F8F8'};
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

export const Top = styled.div`
display: flex;
padding-bottom: 34px;
`
export const Bottom = styled.div`
display: flex;
align-items: center;
`

export const Title = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
max-width: 116px;
color: #262626;
padding-right: 57px;
`


export const Time = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */
color: #898989;
`

export const Students = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 48px;
/* identical to box height */
color: ${getColor};
padding-right: 13px;
`
export const Added = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: ${getColor};
`
