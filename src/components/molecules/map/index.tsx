import {useEffect, useRef} from 'react'
import MapGL, {MapRef, Marker} from 'react-map-gl'
import mapLibreGl, {MapMouseEvent} from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import MarkerIcon from '../../atoms/icons/marker'
import {Expandable} from './styles'
import {LocationDoc} from '../../../app'
import {uid} from '../../../utilities/helpers/uid'

/**
 * MapLibre GL JS is a community led fork derived from mapbox-gl-js
 * prior to their switch to a non-OSS license
 */

interface Props {
	addLocation: (l: LocationDoc) => void
	locations: LocationDoc[]
	visible: boolean
}

const Map = ({addLocation, locations, visible}: Props) => {
	const ref = useRef<MapRef | null>(null)
	const isRef = !!ref.current

	useEffect(() => {
		// set up an event listener on the map
		if (!ref.current) return
		ref.current.on('click', (e: MapMouseEvent) => {
			addLocation({
				id: uid(),
				longitude: e.lngLat.lng,
				latitude: e.lngLat.lat
			})
		})
	}, [addLocation, isRef])

	return (
		<Expandable visible={visible} aria-hidden={!visible}>
			<MapGL
				ref={ref}
				mapLib={mapLibreGl}
				style={{width: '100%', height: '400px', borderRadius: 4}}
				mapStyle={`https://api.maptiler.com/maps/hybrid/style.json?key=${process.env.REACT_APP_MAP_API_KEY}`}
			>
				{
					locations.map(l => (
						<Marker
							key={l.id}
							longitude={l.longitude}
							latitude={l.latitude}
							anchor="bottom"
						>
							<MarkerIcon/>
						</Marker>
					))
				}
			</MapGL>
		</Expandable>
	)
}

export default Map