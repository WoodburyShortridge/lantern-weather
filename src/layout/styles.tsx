import styled, {createGlobalStyle} from 'styled-components'
import {BREAKPOINT} from '../utilities/constants'

const gridCols = `
  grid-template-columns: repeat(24, [col-start] 1fr)
`

const gridCol = `
	grid-column: col-start 2 / span 22;
  @media (min-width: ${BREAKPOINT}px) {
    grid-column: col-start 4 / span 18;
	}
`

const Main = styled.main`
	${gridCols};
  display: grid;
  gap: 0;
	margin-bottom: 60px;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica', sans-serif;
  }
`

export { Main, GlobalStyle, gridCols, gridCol }