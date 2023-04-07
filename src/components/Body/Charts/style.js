import styled from 'styled-components'

export const Container = styled.div`
box-sizing: border-box;
`
export const Top = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
margin-bottom: 27px;
padding: 20px;

`
Top.Right = styled.div`
box-sizing: border-box;
display: flex;
margin-left: auto;
align-items: center;

`
export const Bottom = styled.div`
display: flex;
box-sizing: border-box;
padding: 20px;
`

Bottom.Right = styled.div`
margin-left: auto;
`
export const Price = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 36px;
color: #000000;
`
Price.Additional = styled.div`
display: flex;
justify-content: flex-end;
margin-left: ${({ price }) => price ? "" : 'auto'};
font-family: Proxima Nova;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: ${({ price }) => price ? '#00B533' : ' #003846'};
`

export const DateText = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #262626;
padding-right: 16px;
padding-left: 20px;
`

export const StatusContainer = styled.div`
height: 40px;
width: fit-content;
box-sizing: border-box;
border-radius: 50px;
padding-left:6px;
padding-right:6px;
display: flex;
background: #F8F8F8;
justify-content: center;
align-items: center;
`
StatusContainer.Item = styled.div`
box-sizing: border-box;
padding: 6px 13px;
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 16px;
text-transform: uppercase;
color: #262626;
opacity: ${({ active }) => active ? 1 : 0.3};
cursor: pointer;
background:${({ active }) => active && '#FFFFFF'};
box-shadow: ${({ active }) => active && ' 0px 2px 1px rgba(232, 232, 232, 0.734238)'};
border-radius: ${({ active }) => active && '120px'};
`