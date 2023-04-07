import styled from 'styled-components'

export const Wrapper = styled.div`
box-sizing: border-box;
`
export const Container = styled.div`
border-top: 3px solid #F8F8F8;
padding-top: 20px;
box-sizing: border-box;
position: relative;
`

export const Title = styled.div`
position: absolute;
font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
color: #262626;
top: 30px;
left:20px;
z-index: 999;
`

export const DateTitle = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #262626;
white-space: nowrap;
padding-right: 10px;
`

export const Left = styled.div`
display: flex;
align-items: center;
width: fit-content;
position: absolute;
top: 30px;
right:20px;
z-index: 999;
padding-right: 10px;
`