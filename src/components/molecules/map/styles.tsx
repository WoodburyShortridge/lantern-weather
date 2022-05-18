import styled from 'styled-components'

const Expandable = styled.div`
	height: ${(props: {visible: boolean}) => props.visible ? '400px' : 0};
  transition: height 150ms ease;
	overflow: hidden;
	position: relative;
	margin-bottom: ${(props: {visible: boolean}) => props.visible ? '20px' : 0};
`

export { Expandable }