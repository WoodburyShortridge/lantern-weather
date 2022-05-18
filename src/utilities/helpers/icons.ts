/**
 * Didn't love the icons from provider API https://openweathermap.org/weather-conditions
 * So found another source (https://www.weatherbit.io/api/codes) and made icon mapping util
 *
 * @return getIconSrc
 */

const iconMap = {
	'01': 'c01',
	'02': 'c02',
	'03': 'c02',
	'04': 'c03',
	'09': 'r05',
	'10': 'r01',
	'11': 't01',
	'13': 's02',
	'50': 'a01'
}

const getIconSrc = (iconCode: string) => {
	const dayOrNight = iconCode.at(-1)
	// @ts-ignore
	const code = iconMap[iconCode.slice(0,2)]
	return `https://www.weatherbit.io/static/img/icons/${code + dayOrNight}.png`
}

export {getIconSrc}
