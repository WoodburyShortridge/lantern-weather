import styled from 'styled-components'

const StyledButton = styled.button`
	height: 33px;
	display: flex;
	justify-content: center;
  align-items: center;
  background-color: ${(props: {active: boolean}) => props.active ? 'black' : 'transparent'};
  color: ${(props: {active: boolean}) => props.active ? 'white' : 'black'};
  padding: 0 15px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
	span {
    margin-right: 15px;
	}
`

export {StyledButton}