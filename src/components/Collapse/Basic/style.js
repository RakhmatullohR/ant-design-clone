import styled from 'styled-components'
import { ArrowIosBack } from '@styled-icons/evaicons-solid/ArrowIosBack'
import { ArrowIosForward } from '@styled-icons/evaicons-solid/ArrowIosForward'
import { Settings } from '@styled-icons/ionicons-outline/Settings'

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
height: fit-content;
border: 1px solid #d9d9d9;
border-top: none;
`

export const Header = styled.div`
width:100%;
align-items: center;
padding: 10px 0px;
border-top: 1px solid #d9d9d9;
background-color: whitesmoke;
box-sizing: border-box;
padding-left: ${({left})=> left && '10px'};


`

export const Wrapper = styled.div`
align-items: center;
width:100%;
box-sizing: border-box;
background-color: white;
overflow: none;

`

export const Content = styled.div`
transition: padding .3s; 
max-height: 0;
max-height:${({active})=> active && '1000px'};
overflow: hidden;
padding: 0px 10px;
box-sizing: border-box;
padding:${({active})=> active && '10px 10px'};
border-top:${({active})=> active && '1px solid #d9d9d9'};


`


export const LeftArrow = styled(ArrowIosForward)`
  padding: 0 10px;
cursor: pointer;
transition: transform 0.5s;
transform: ${({isOpen})=> isOpen && "rotate(90deg)"};
`
export const RightArrow = styled(ArrowIosBack)`
   float: right;
  padding: 0 10px;
cursor: pointer;
transition: transform 0.5s;
transform: ${({isOpen})=> isOpen && "rotate(-90deg)"};
`

export const Setting = styled(Settings)`
   float: right;
  padding: 0 10px;
`