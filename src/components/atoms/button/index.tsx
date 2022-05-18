import {CSSProperties, MouseEventHandler} from 'react'
import {StyledButton} from './styles'

interface Props {
	ariaLabel: string
	onClick: MouseEventHandler<HTMLButtonElement>
	label?: string | null
	icon?: JSX.Element
	style?: CSSProperties
	active?: boolean
	disabled?: boolean
}

const Button = ({label = null, icon, ariaLabel, active = false, disabled = false, onClick, style = {}}: Props) => {
	return (
		<StyledButton
			onClick={onClick}
			aria-label={ariaLabel}
			aria-selected={active}
			style={style}
			active={active}
			disabled={disabled}
		>
			{label && <span>{label}</span>}
			{icon && icon}
		</StyledButton>
	)
}


export default Button