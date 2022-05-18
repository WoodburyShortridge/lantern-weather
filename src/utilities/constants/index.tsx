const BREAKPOINT = 980
const LOCATION_THRESHOLD = 5 // km

enum UnitsEnum {
	imperial = 'imperial',
	metric = 'metric'
}

const UNITS_MAP = {
	[UnitsEnum.imperial]: {
		'temp': '°F',
		'feels_like': '°F',
		'temp_min': '°F',
		'temp_max': '°F',
		'pressure': 'hPa',
		'humidity': '%',
		'sea_level': ' hPa',
		'grnd_level': ' hPa'
	},
	[UnitsEnum.metric]: {
		'temp': '°C',
		'feels_like': '°C',
		'temp_min': '°C',
		'temp_max': '°C',
		'pressure': 'hPa',
		'humidity': '%',
		'sea_level': ' hPa',
		'grnd_level': ' hPa'
	}
}

const COLORS = {
	white: '#ffffff',
	black: '#000000',
	grey: '#00000070'
}

export {BREAKPOINT, COLORS, LOCATION_THRESHOLD, UNITS_MAP, UnitsEnum }