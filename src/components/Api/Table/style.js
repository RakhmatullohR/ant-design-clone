
import styled from 'styled-components'

// const common = css`
// color: var(--color);
// `

const getColor = ({ type }) => {
  switch (type) {
    case ("type" || "TYPE"): return '#c41d7f';
    default: return "rgba(73, 75, 113, 58.16)"
  }
}

export const Container = styled.div`
`
export const Title = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 16px;
color: var(--color);
`
export const SubTitle = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: var(--color);
margin-top: 15px;
`

export const Header = styled.div`
margin: 20px 0;
`

export const Table = styled.table`
width: 100%;
border: var(--border);
border-spacing: 0;
`;

export const Thead = styled.thead`

`

export const TH = styled.th`
font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 16px;
text-transform: uppercase;
color: var(--color);
background: whitesmoke;

padding: 15px;
box-sizing: border-box;
width: ${({ width }) => `${width.desktop}px`};
white-space: nowrap;
text-align: ${({ position }) => position};
border-bottom:var(--border);
opacity: .5;
`;

export const TD = styled.td`
border: 0;
font-family: SF Pro Display;
font-style: normal;
font-weight: ${({ type }) => type === "prop" ? 700 : 500};
font-size: 16px;
line-height: 16px;
color: ${getColor};

box-sizing: border-box;
padding-left: 25px;
padding: 15px;
text-align: ${({ position }) => position};
border-bottom: var(--border);
height: fit-content;
cursor: ${({ key }) => key === 'Icon' && 'pointer'};
`;

export const TBody = styled.tbody`
box-sizing: border-box;
`;

export const TR = styled.tr`
box-sizing: border-box;
border: var(--border);
background: white;
&:hover{
background: whitesmoke;
}
`;
