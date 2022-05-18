import styled from 'styled-components'

const StyledSvg = styled.svg`
  animation-name: spinner;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Spinner = () => {
	return (
		<StyledSvg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.6316 7.99999C14.6316 4.33788 11.6621 1.36841 8 1.36841" stroke="black" strokeWidth="1.5" />
		</StyledSvg>
	)
}

export default Spinner