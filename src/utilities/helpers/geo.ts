/**
 * Stupid simple coord distance calc
 * Much more performant (and less accurate :) than haversine formula
 *
 * @return distance (km)
 */
import {LocationDoc} from '../../app'

const kRad = Math.PI / 180
export const cheapDistance = (a: LocationDoc, b: LocationDoc) => {
	const kx = Math.cos(a.latitude * kRad) * 111.321 // 1deg at equator
	const dx = (a.longitude - b.longitude) * kx
	const dy = (a.latitude - b.latitude) * 111.139 // 1deg at equator
	return Math.sqrt(dx * dx + dy * dy)
}