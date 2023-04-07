
import styled from 'styled-components'

const getColor = ({ type }) => {
  switch (type) {
    case 'given': return '#00B533';
    case 'reminder': return '#DE1E3A';
    default: return '#262626'
  }
}

const getBgColor = ({ type }) => {
  switch (type) {
    case 'given': return '#D2FFED';
    case 'reminder': return '#FFE9ED';
    case 'name': return '';
    default: return '#F8F8F8'
  }
}

export const Container = styled.div`
border-top: 3px solid #F8F8F8;
`

export const Header = styled.div`
display: flex;
margin: 17px 23px;
`
Header.Left = styled.div`
`
Header.Right = styled.div`
display: flex;
margin-left: auto;
align-items: center;
`

export const DateYear = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #262626;
padding-right: 23px;
`

export const Table = styled.table`
width: 100%;
border: 0;
`;

export const TH = styled.th`

font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
text-transform: uppercase;
color: #262626;


background: white;
padding-left: 25px;
height: 64px;
box-sizing: border-box;
width: ${({ width }) => `${width.desktop}px`};
white-space: nowrap;
text-align: ${({ position }) => position};
border-bottom: 1px solid #000000;

`;

export const TD = styled.td`
border: 0;
font-family: SF Pro Display;
font-style: normal;
font-weight: ${({ name }) => name ? 600 : 500};
font-size:${({ name }) => name ? "14px" : '13px'};
line-height: 16px;
color: ${getColor};

background: white;
white-space: nowrap;
box-sizing: border-box;
padding-left: 25px;
text-align: ${({ position }) => position};
border-bottom: 1px solid #f5f5f5;
height: 71px;
cursor: ${({ key }) => key === 'Icon' && 'pointer'};
`;

export const TBody = styled.tbody`
box-sizing: border-box;

`;

export const TR = styled.tr`
box-sizing: border-box;
border: 1px solid #000000;
background: red;

`;

export const StudentCon = styled.div`
text-align:center;
`
StudentCon.Count = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
color: #262626;
`
export const Period = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
Period.Title = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 16px;
color: ${({ plus }) => plus ? "#00B533" : '#898989'};
`

export const DataWrapper = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: ${({ name }) => name ? 600 : 500};
font-size:${({ name }) => name ? "14px" : '13px'};
line-height: 16px;
color: ${getColor};
box-sizing: border-box;
border-radius: 4px;
padding: 6px 10px;
align-items: center;
background:${getBgColor};
`