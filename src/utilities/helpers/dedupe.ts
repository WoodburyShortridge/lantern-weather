/**
 * Dedupe and aggregate locations
 * @todo dedupe on api res instead of location select
 */

import {cheapDistance} from './geo'
import {LocationDoc} from '../../app'
import {LOCATION_THRESHOLD} from '../constants'

export const dedupe = (location: LocationDoc, locations: LocationDoc[]) => {
	const duplicate = locations.find(l => cheapDistance(l, location) < LOCATION_THRESHOLD)
	if (duplicate) return [location, ...locations.filter(l => l.id !== duplicate.id)]
	return [location, ...locations]
}