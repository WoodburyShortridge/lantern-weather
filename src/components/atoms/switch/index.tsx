import React, { ChangeEvent } from "react";
import {Label, Input, Slider, Container, Option} from './styles'

interface Props {
	onToggle: (e: boolean) => void
	checked: boolean
}

const Switch = ({onToggle, checked}: Props) => {
	return (
		<Container>
			<Option
				active={!checked}
				aria-hidden={true}
				onClick={() => onToggle(false)}
				style={{paddingRight: 5}}
			>
				Imperial
			</Option>
			<Label>
				<Input
					type="checkbox"
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onToggle(e.currentTarget.checked)
					}
					checked={checked}
					aria-label={'metric'}
				/>
				<Slider checked={checked} />
			</Label>
			<Option
				active={checked}
				aria-hidden={true}
				onClick={() => onToggle(true)}
				style={{paddingLeft: 5}}
			>
				Metric
			</Option>
		</Container>
	);
};

export default Switch;