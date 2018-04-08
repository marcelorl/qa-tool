import React from 'react'
import styled from 'styled-components'

const TooltipContainer = styled.div`
  position: relative;
  
  &:hover span {
    display: block;
  }
`

const TooltipContent = styled.span`
  display: none;
  border-radius: 3px;
  position: absolute;
  border: 1px solid #000;
  text-decoration: none;
  border-radius: 2px;
  padding: 20px;
  margin-top: 5px;
  background: #fff;
  z-index: 1000;
  left: 125px;
  width: 15rem;
  
  &:before {
    content: '';
    display: block;  
    position: absolute;
    left: 140px;
    bottom: 100%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: black;
  }
  
  &:after {
    content: '';
    display: block;  
    position: absolute;
    left: 141px;
    bottom: 100%;
    width: 0;
    height: 0;
    border: 9px solid transparent;
    border-bottom-color: white;
  }
`

const Tooltip = ({ children, text }) =>
  <TooltipContainer>
    {children}
    <TooltipContent>
      {text}
    </TooltipContent>
  </TooltipContainer>

export default Tooltip
