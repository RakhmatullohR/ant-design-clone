import styled from 'styled-components'


export const Container = styled.div`
`
export const Title = styled.div`
font-family: SF Pro Display;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 16px;
text-transform: uppercase;
color: #262626;
margin-left: 55px;
`

export const Wrapper = styled.div`
border: 3px solid #F8F8F8;
margin: 37px 55px;
`
export const Status = styled.div`
display: flex;
`

export const ChartContainer = styled.div`
display: flex;
border-top: 3px solid #F8F8F8;
`

ChartContainer.Left = styled.div`
flex:2;
box-sizing: border-box;
border-right: 3px solid #F8F8F8;
`

ChartContainer.Right = styled.div`
flex:1;
padding: 20px;
`

export const getColor = ({ status }) => {
  switch (status) {
    case ('all' || 'All'): return '#000000';
    case ('active' || 'Active'): return '#00B533';
    case ('finished' || 'Finished'): return '#FFB436';
    case ('stopped' || 'Stopped'): return '#DE1E3A';
    default: return '#000000';
  }
};
