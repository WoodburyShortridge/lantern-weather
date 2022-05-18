/**
 * WeatherReport fetching helper to request weatherReport by coords and handle async loading/error state
 *
 * @return {weatherReport, loading, error}
 */
import {useEffect, useState} from 'react'
import {getWeatherReport, WeatherError, WeatherReport} from '../../api'
import {LocationDoc} from '../../app'
import {UnitsEnum} from '../constants'

const useWeatherReport = (location: LocationDoc, units: UnitsEnum) => {
	const [weatherReport, setWeatherReport] = useState<WeatherReport | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<WeatherError | null>(null)
	useEffect(() => {
		const fetch = async () => {
			return await getWeatherReport({location, units: units})
		}
		fetch().then((res) => { // @todo handle err for end-user
			if (res.cod === 200) setWeatherReport(res)
			else setError(res)
			setLoading(false)
		});
	}, [location, units])
	return { weatherReport, loading, error }
}

export default useWeatherReport