import styled from 'styled-components'
import {gridCol, gridCols} from '../../../layout/styles'

const Container = styled.header`
	${gridCols};
  display: grid;
  grid-column: col-start 1 / span 24;
  background-color: black;
	height: 60px;
  align-items: center;
`

const Title = styled.h1`
  ${gridCol};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #FFFFFF;
	margin: 0;
`

export { Container, Title }