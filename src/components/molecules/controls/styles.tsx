import styled from 'styled-components'
import {gridCol} from '../../../layout/styles'

const Container = styled.section`
  ${gridCol};
  grid-row: 2;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`

const Buttons = styled.div`
  display: flex;
`

export {Container, Header, Buttons}