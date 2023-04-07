import styled from 'styled-components'

export const MapContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
height: 100%;

.map-custom-marker{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: #ffffff;
width: 56px;
height: 56px;
border-radius: 50% 50% 0 50%;
position: relative;
overflow: hidden;

img {
  width: calc(100% - 6px);
  height: calc(100 - 6px);
  border-radius: 50%;
}
}

div[title="marker"] {
display: flex !important;
align-items: center;
justify-content: center;
flex-direction: column;
background: #ffffff;
width: 56px !important;
height: 56px !important;
border-radius: 50% 50% 0 50%;
position: relative;
opacity: 1 !important;
overflow: hidden;

&::after {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color:#fff;
}

&::before {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #1BC585;
  right: 6px;
  bottom: 4px;
  z-index: 2;
}

img {
  width: calc(100% - 6px) !important;
  height: calc(100% - 6px) !important;
  border-radius: 50%;
  position: static !important;
  z-index: 1;
}
}

.map-custom-marker-inner{
  overflow: hidden;
  border-radius: 50%;
  height: 100%;
}

.online-status{
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #1BC585;
  right: 6px;
  bottom: 4px;
}

.gm-style .gm-style-iw-c {
  padding: 0 !important;
  
  button {
  width: 8px !important;
  height: 8px !important;
    top: 18px !important;
    right: 15px !important;

    opacity: 1 !important;
    
    img {
      display: none !important;
    }
  }
 }

.gm-style-iw-d {
  overflow: auto !important; 
}

.ymaps-2-1-77-balloon__content{
padding: 0 !important;
margin-right: 0 !important;
border-radius: 8px !important;
}

.ymaps-2-1-77-balloon{
  border-radius: 8px;
}

.ymaps-2-1-77-balloon__layout{
  border-radius: 8px;
}

.ymaps-2-1-77-balloon__close {
  float: unset; 
  margin-bottom: 0;
  position: absolute;
  z-index: 2;
  right: 15px;
  top: 18px;
}

.ymaps-2-1-77-balloon__close-button {
  width: 8px;
  height: 8px;

  opacity: 1;
}

.placemark-popover-header{
  padding: 13px 16px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #EBEBF3;
}

.placemark-props {
  padding: 8px 16px;
}

.placemark-prop-item {
  display: flex;
  align-items: center;
  padding: 4px 0;
  font-size: 11px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  min-width: 230px;
}

.placemark-prop-icon{
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 13px;
}

.placemark-prop-icon.time{

}

.placemark-prop-icon.people{

}

.placemark-prop-icon.etc{

}

`;