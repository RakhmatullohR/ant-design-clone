import styled from 'styled-components'
import { Close } from '@styled-icons/evaicons-solid/Close'
import { Marker } from '@styled-icons/foundation/Marker'

export const MarkerIcon = styled(Marker)`
position: absolute;
bottom: 0;
`
export const Container = styled.div`
width: 100%;
height: 70vh;
`

export const Wrapper = styled.div`
position: relative;
align-items: center;
display: flex;
flex-direction: column;
/* justify-content: center; */
opacity: ${({ open }) => open ? 1 : .5};
cursor: pointer;
`

export const Popup = styled.div`
display: ${({ open }) => open ? 'block' : 'none'};
position: absolute;
box-shadow: 0px 0px 12px 0px rgba(73, 75, 116, 0.16);
min-width: 200px;
min-height: 100px;
background: white;
border-radius: 8px;
top: -145px;
margin-right: 13px;
z-index: 1;
`
export const ArrowDown = styled.div`
position: absolute;
width: 0;
height: 0;
border-left: 7px solid transparent;
border-right: 7px solid transparent;
border-top: 10px solid white;
bottom: -9px;
left: 50%;
box-shadow: 20px 0px 12px 0px rgba(73, 75, 116, 0.16);
`

export const CloseInfo = styled(Close)`
float: right;
padding: 5px;
opacity: .2;
&:hover{
opacity: 1;
}
`
export const InfoBody = styled.div`
width: 100%;
height: 100%;
align-items: center;
display: flex;
justify-content: center;
text-align: center;

`