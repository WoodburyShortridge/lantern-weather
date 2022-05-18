import {COLORS} from '../../../utilities/constants'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: { active: boolean }) => props.active ? COLORS.black: 'transparent'};
  color: ${(props: { active: boolean }) => props.active ? COLORS.white : COLORS.black};
  padding: 0 15px;
  cursor: pointer;
  border: 1px solid ${COLORS.black};
  border-radius: 4px;

  span {
    margin-right: 15px;
  }
`

export {StyledButton}