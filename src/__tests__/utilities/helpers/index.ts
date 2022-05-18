import '@testing-library/jest-dom';
import {dedupe} from '../../../utilities/helpers/dedupe'
import {formatMetric, formatValue} from '../../../utilities/helpers/formatting'
import {UNITS_MAP, UnitsEnum} from '../../../utilities/constants'

it('dedupes locations', () => {
	const dup = dedupe(testLocation1, testLocations)
	const noDup = dedupe(testLocation2, testLocations)
	expect(dup.length).toEqual(3)
	expect(noDup.length).toEqual(4)
});

it('formats correctly', () => {
	const test = 'feels_like'
	const metric = formatMetric(test)
	const value = formatValue(25.2235)
	const unit = UNITS_MAP[UnitsEnum.imperial][test]
	expect(metric).toEqual('Feels like')
	expect(value).toEqual(25.2)
	expect(unit).toEqual('°F')
});

// @todo uid test (jsdom does not have window.crypto)
// @todo test icons util

const testLocations = [
	{
		"id": "iibb777775lb5ektk1pgq4of136kar6",
		"longitude": -77.99735511635335,
		"latitude": 21.04894955345344
	},
	{
		"id": "i9haweeeeja1oi2ma7lsgmi01u24ykj",
		"longitude": -84.38702475641247,
		"latitude": 33.73574292647717
	},
	{
		"id": "bb9nsssssufmqgsbl1242iar13ho4u0",
		"longitude": -73.9984642,
		"latitude": 40.6845708
	}
]


const testLocation1 = {
	"id": "iibb777775lb5ektk1pgq4of136kar6",
	"longitude": -77.9974,
	"latitude": 21.0488
}

const testLocation2 = {
	"id": "mplwsssssuf1fh4g2nsbhgtr18mrs79",
	"longitude": -91.12675736495547,
	"latitude": 17.259715737116665
}