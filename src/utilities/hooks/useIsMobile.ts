/**
 * Helper to test if window with is less than breakpoint
 * and recalculate on window resize
 *
 * @return isMobile
 */

import {useEffect, useState} from 'react'
import {BREAKPOINT} from '../constants'

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT)

	useEffect(() => {
		const onChange = () => {
			setIsMobile(window.innerWidth < BREAKPOINT)
		}
		window.addEventListener('resize', onChange)
		return () => {
			window.removeEventListener('resize', onChange)
		}
	}, [])

	return isMobile
}

export default useIsMobile