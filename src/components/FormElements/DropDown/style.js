import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction:${({ end }) => (end ? 'column-reverse' : 'column')};
width: 100%;
`;

export const Selection = styled.div`
padding: 13px 20px;
display: flex;
border-radius: 4px;
border: 1px solid #D8D8D8;
/* background: ${({ background }) => (background ? 'white' : '#f5f5f5')}; */
cursor: pointer;
overflow: hidden;
box-sizing: border-box;
width: ${({ width }) => width ? `${width}px` : '100%'};
`;

Selection.Text = styled.div`
letter-spacing: 0.01em;
line-height: 24px;
text-align: left;
color: ${({ color }) => (color || '#000000')};
`;
Selection.Icon = styled.div`
margin-left: auto;
`;

export const Menu = styled.div`
/* position: absolute; */
display: flex;
flex-direction: column;
width: ${({ width }) => `${width}px`};
height: fit-content;
border-radius: 8px;
background: #fff;
overflow: hidden;
box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.1);
margin-bottom: ${({ end }) => (end ? '45px' : '0')};
margin-top: ${({ end }) => (end ? '0' : '45px')};
z-index: 10;
`;

Menu.Item = styled.input`
box-sizing: border-box;
width: ${({ width }) => `${width}px`};
padding: 13px 24px;
cursor: pointer;
outline: none;
border: none;
color: ${({ active }) => (active ? '#262626' : '#9D9D9D')};
background:${({ active }) => (active ? '#F5F5F5' : 'inherit')};
:hover{
  background:#F5F5F5;
}

`;

Menu.SubItem = styled.input`
box-sizing: border-box;
width: ${({ width }) => `${width}px`};
padding: 13px 24px;
cursor: pointer;
outline: none;
border: none;
padding-left: 45px;

font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #000000;
color: ${({ active }) => (active ? '#262626' : '#9D9D9D')};

overflow: hidden;
background:${({ active }) => (active ? '#F5F5F5' : 'inherit')};
:hover{
  background:#F5F5F5;
}

`;
