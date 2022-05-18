import {useContext, useEffect, useState} from 'react'
import {Buttons, Container, Header} from './styles'
import Map from '../map'
import Button from '../../atoms/button'
import MapIcon from '../../atoms/icons/map'
import Location from '../../atoms/icons/location'
import useLocation from '../../../utilities/hooks/useLocation'
import {LocationDoc} from '../../../app'
import Switch from '../../atoms/switch'
import Spinner from '../../atoms/icons/spinner'
import useIsMobile from '../../../utilities/hooks/useIsMobile'
import {Units} from '../../../context'
import {COLORS, UnitsEnum} from '../../../utilities/constants'

interface Props {
	addLocation: (l: LocationDoc) => void
	locations: LocationDoc[]
}

const Controls = ({addLocation, locations}: Props) => {
	const {askLocation, location, loading, error} = useLocation()
	const isMobile = useIsMobile()
	const {units, setUnits} = useContext(Units)
	const [active, setActive] = useState(false)

	if (error) console.log(error) // @todo show error to user

	useEffect(() => {
		if (!location) return
		addLocation(location)
	}, [location, addLocation])

	return (
		<Container role={'region'}>
			<Header>
				<Buttons>
					<Button
						label={!isMobile ? 'Select locations' : ''}
						icon={<MapIcon fill={active ? COLORS.white : COLORS.black }/>}
						ariaLabel={'Select locations'}
						onClick={() => setActive(!active)}
						style={{marginRight: 10}}
						active={active}
					/>
					<Button
						label={!isMobile ? 'Use my location' : null}
						icon={loading ? <Spinner/> : <Location/>}
						ariaLabel={'Use my location'}
						onClick={askLocation}
						disabled={loading}
					/>
				</Buttons>
				<Switch
					onToggle={b => setUnits(b ? UnitsEnum.metric : UnitsEnum.imperial)}
					checked={units === UnitsEnum.metric}
				/>
			</Header>
			<Map
				visible={active}
				addLocation={addLocation}
				locations={locations}
			/>
		</Container>
	)
}

export default Controls