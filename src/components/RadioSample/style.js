import styled from 'styled-components'

export const Container = styled.div`
/* The container */
display: flex;
align-content: center;
margin-right: 20px;
align-items:center;
font-family: Arial;
  font-size: 14px;
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #212121;

.container {
  display: block;
  position: relative;
  padding-left: 30px;
  padding-top:2px;
  cursor: pointer;
  font-size: 14px;
  height:20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 2px solid tomato;
  border-radius: 50%;
  box-sizing: border-box;

}


/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: white;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  box-sizing: border-box;
 	top: 3px;
	left: 3px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
  background: tomato;
}
`