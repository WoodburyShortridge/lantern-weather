import styled from 'styled-components'
import {COLORS} from '../../../utilities/constants'

const Container = styled.div`
	display: flex;
  align-items: center;
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 26px;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.black};
  transition: 0.4s;
  border-radius: 34px;
	&:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: ${COLORS.white};
    border-radius: 50%;
    transition: transform 250ms;
    transform: translateX(${(props: {checked: boolean}) => props.checked ? '18px' : 0});
	}
`

const Option = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
	color: ${COLORS.black};
	opacity: ${(props: {active: boolean}) => props.active ? 1 : 0.5};
  transition: opacity 250ms;
	cursor: ${(props: {active: boolean}) => props.active ? 'default' : 'pointer'};
`


export {Container, Label, Input, Slider, Option}