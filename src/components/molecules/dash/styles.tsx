import styled from 'styled-components'
import {gridCol} from '../../../layout/styles'
import {BREAKPOINT} from '../../../utilities/constants'
import {COLORS} from '../../../utilities/constants'

const Container = styled.section`
  ${gridCol};
  grid-row: 3;
  display: ${(props: { grid: boolean }) => props.grid ? 'grid' : 'flex'};
  justify-content: center;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  gap: 20px;
  border-top: 1px solid ${COLORS.black};
  padding-top: 20px;
`

const HelpText = styled.p`
  margin: 50px 0;
  text-align: center;
`

export {Container, HelpText}