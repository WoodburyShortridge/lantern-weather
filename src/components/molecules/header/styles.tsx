import styled from 'styled-components'
import {gridCol, gridCols} from '../../../layout/styles'
import {COLORS} from '../../../utilities/constants'

const Container = styled.header`
  ${gridCols};
  display: grid;
  grid-column: col-start 1 / span 24;
  background-color: ${COLORS.black};
  height: 60px;
  align-items: center;
`

const Title = styled.h1`
  ${gridCol};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: ${COLORS.white};
  margin: 0;
`

export {Container, Title}