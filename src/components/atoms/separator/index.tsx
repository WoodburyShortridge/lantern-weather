import {CSSProperties} from 'react'

interface Props {
	style?: CSSProperties
}

const Separator = ({style = {margin: `20px 0`}}: Props) => (
	<hr
		style={{
			borderTop: `1px solid #000000`,
			width: `100%`,
			...style
		}}
	/>
)

export default Separator