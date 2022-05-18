import {Container, HelpText} from './styles'
import Card from '../card'
import {LocationDoc} from '../../../app'

interface Props {
	locations: LocationDoc[]
	removeLocation: (id: string) => void
}

const Dash = ({locations, removeLocation}: Props) => {
	return (
		<Container role={'region'} grid={!!locations.length}>
			{!locations.length && <HelpText>Select locations from map or click use location <br /> to add new weather cards to your dashboard</HelpText>}
			{
				locations.map(location => (
					<Card
						key={location.id}
						location={location}
						removeLocation={removeLocation}
					/>
				))
			}
		</Container>
	)
}

export default Dash