import {Container, Header, Name, Body, Icon, Description, ReportsScroll, Reports, Report} from './styles'
import {Main} from '../../../api'
import Button from '../../atoms/button'
import X from '../../atoms/icons/x'
import {getIconSrc} from '../../../utilities/helpers/icons'
import Separator from '../../atoms/separator'
import {capitalize, formatMetric, formatValue} from '../../../utilities/helpers/formatting'
import {memo, useContext} from 'react'
import {UNITS_MAP} from '../../../utilities/constants'
import {LocationDoc} from '../../../app'
import useWeatherReport from '../../../utilities/hooks/useWeatherReport'
import {Units} from '../../../context'

interface ReportItemProps {
	value: number
	metric: string
	unit: string
}

const ReportItem = ({metric, unit, value}: ReportItemProps) => {
	return (
		<Report>
			<p className={'value'}>{formatValue(value)}{unit}</p>
			<p className={'metric'}>{formatMetric(metric)}</p>
		</Report>
	)
}

interface Props {
	location: LocationDoc
	removeLocation: (id: string) => void
}

const Card = ({location, removeLocation}: Props) => {
	const {units} = useContext(Units)
	const {weatherReport, loading, error} = useWeatherReport(location, units)
	if (loading || !weatherReport) return null // @todo loading ui for cards
	if (error) {
		removeLocation(location.id)
		return null
	} // @todo show network error msg to user

	const weather = weatherReport.weather[0]!
	const report = weatherReport.main

	return (
		<Container>
			<Header>
				<Name>{weatherReport.name || `${weatherReport.coord.lat}, ${weatherReport.coord.lon}` }</Name>
				<Button
					ariaLabel={'remove location'}
					onClick={() => removeLocation(location.id)}
					icon={<X/>}
					style={{padding: 0}}
				/>
			</Header>
			<Body>
				<Icon
					src={getIconSrc(weather.icon)}
					alt={weather.description}
				/>
				<Description>{capitalize(weather.description)}</Description>
				<Separator />
				<ReportsScroll>
					<Reports>
						{
							Object.keys(report).map(_key => {
								const key = _key as keyof Main
								return (
									<ReportItem
										key={key}
										metric={key}
										value={report[key]}
										unit={UNITS_MAP[weatherReport.units][key]}
									/>
								)
							})
						}
					</Reports>
				</ReportsScroll>
			</Body>
		</Container>
	)
}

export default memo(Card)