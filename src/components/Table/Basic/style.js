
import styled from 'styled-components'


export const Container = styled.div`
height: ${({ height }) => height && `${height}px`};
overflow: ${({ height }) => height && 'scroll'};
overflow-x: scroll;
width: ${({ width }) => width && width};
position: relative;
background:white;

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: white;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: rgba(14, 15, 36, 0.16);
  border-radius: 8px;
  /* display: none; */
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(14, 15, 36, 0.16);
  border-radius: 8px;
  display: flex;
}
`

export const Table = styled.table`
width: 100%;
border: 0;
border-spacing: 0;
position: relative;
background:white;
/* border-collapse: collapse;  */

`;

export const THead = styled.thead`
border: 0;
border-spacing: 0;
`

export const TH = styled.th`
font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 14px;
text-transform: uppercase;
color: #262626;

background: whitesmoke;
padding: 0 10px 0 25px;
height: 56px;
box-sizing: border-box;
width: ${({ width }) => width ? `${width.desktop}px` : "auto"};
white-space: nowrap;
text-align: ${({ position }) => position || 'start'};
position: ${({ leftAlign }) => leftAlign && 'sticky'};
position: ${({ fixedHeader }) => fixedHeader && 'sticky'};
  top: 0; 
right: ${({ edit }) => edit && 0};

left: ${({ fixedId }) => fixedId && 0};
z-index: ${({ leftAlign }) => leftAlign ? 2 : 1};
`;

export const TD = styled.td`
border: 0;
font-family: SF Pro Display;
font-style: normal;
font-weight: ${({ name }) => name ? 600 : 500};
font-size:14px;
line-height: 14px;
color: var(--color);

background: white;
white-space: nowrap;
box-sizing: border-box;
padding: 0 10px 0 25px;
text-align: ${({ position }) => position};
border-bottom: 1px solid #f5f5f5;
height: 56px;
cursor: ${({ key }) => key === 'Icon' && 'pointer'};
position: ${({ leftAlign, edit }) => (leftAlign || edit) && 'sticky'};
/* position: ${({ leftAlign }) => leftAlign && 'sticky'}; */
left: 0;
right: ${({ edit }) => edit && 0};
`;

export const TBody = styled.tbody`
box-sizing: border-box;

`;

export const TR = styled.tr`
/* position: ${({ trhead }) => trhead && 'sticky'}; */
box-sizing: border-box;
border: 1px solid #000000;
background: white;
:hover td{
  background: whitesmoke;
  transition: background .5s;
}
`;

export const Input = styled.input`
width: 100%;
/* height: inherit; */
padding: 10px 5px;
/* padding: ${({ edit }) => edit ? '10px 10px' : '10px 0'}; */
border: none;
background: inherit;
border: 1px solid #000000;
/* border:${({ edit }) => edit && '1px solid #000000'}; */
border-radius: 4px;
outline: none;
box-sizing: border-box;

font-family: inherit;
font-style: inherit;
font-weight: inherit;
font-size: inherit;
line-height: inherit;
color: inherit;
margin-right: 5px;
`

export const EditContainer = styled.div`
color: #1890ff;
display: flex;
`
export const EditText = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
margin: 0 5px;
cursor: pointer;
`