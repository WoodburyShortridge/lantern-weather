/**
 * Navigator geolocation util
 *
 * @return {askLocation, location, loading, error}
 */

import {useCallback, useState} from 'react'
import {uid} from '../helpers/uid'
import {LocationDoc} from '../../app'

const useLocation = () => {
	const [location, setLocation] = useState<LocationDoc | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const askLocation = useCallback(() => {
			setLoading(true)
			if (!navigator.geolocation) {
				setError('Location is not supported on your browser. :(')
				setLoading(false)
				return
			}

			const handleSuccess = (position: GeolocationPosition) => {
				const {latitude, longitude} = position.coords
				if (latitude && latitude) {
					setLocation({
						id: uid(),
						longitude,
						latitude
					})
					setLoading(false)
				}
			}

			const handleError = (error: GeolocationPositionError) => {
				setError(error.message + ' :(')
				setLoading(false)
			}
			navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
		},
		[]
	)

	return {askLocation, location, loading, error}
}

export default useLocation