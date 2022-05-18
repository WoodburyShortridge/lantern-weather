/**
 * String and num formatting for UI
 */

const capitalize = (string: string): string => {
	return string.charAt(0).toLocaleUpperCase()+string.slice(1)
}

const formatMetric = (metric: string): string => {
	return capitalize(metric.replaceAll('_',  ' '))
}

const formatValue = (value: number): number => {
	return Math.round(value * 10) / 10;
}

export {formatMetric, formatValue, capitalize}