import {CSSProperties} from 'react'
import {COLORS} from '../../../utilities/constants'

interface Props {
	style?: CSSProperties
}

const Separator = ({style = {margin: `20px 0`}}: Props) => (
	<hr
		style={{
			borderTop: `1px solid ${COLORS.black}`,
			width: `100%`,
			...style
		}}
	/>
)

export default Separator