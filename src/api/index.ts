// @todo validate the schema of response
import {LocationDoc} from '../app'
import {UnitsEnum} from '../utilities/constants'

interface Weather {
	description: string
	icon: string
	id: number
}

export interface Main {
	feels_like: number
	humidity: number
	pressure: number
	temp: number
	temp_max: number
	temp_min: number
}

export interface WeatherReport {
	id: number
	name: string
	main: Main
	weather: Weather[]
	coord: {lat: number, lon: number}
	cod: 200
	locationId: string
	units: UnitsEnum
}

export interface WeatherError {
	cod: 400
	message: string
}

export const getWeatherReport = async ({location, units}: {location: LocationDoc, units: UnitsEnum}): Promise<WeatherReport | WeatherError> => {
	try {
		const res = await fetch(`
			https://api.openweathermap.org/data/2.5/weather?
			lat=${location.latitude}
			&lon=${location.longitude}
			&units=${units}
			&appid=${process.env.REACT_APP_API_KEY}
		`);
		const data = await res.json()
		return { ...data, units: units }
	} catch (e) {
		return {cod: 400, message: 'Fetch error'}
	}
}