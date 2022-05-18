import {createContext} from 'react'
import {UnitsEnum} from '../utilities/constants'

/**
 * Multiple components using the unit enum so using context
 * instead of prop drilling :)
 */
export const Units = createContext({
	units: UnitsEnum.metric,
	setUnits: (u: UnitsEnum) => {}
})
export const UnitsProvider = Units.Provider