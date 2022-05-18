import React, {useCallback} from 'react'
import {UnitsProvider} from './context'
import Header from './components/molecules/header'
import Layout from './layout'
import Controls from './components/molecules/controls'
import {useStorageState} from './utilities/hooks/useStorageState'
import {dedupe} from './utilities/helpers/dedupe'
import Dash from './components/molecules/dash'
import {UnitsEnum} from './utilities/constants'

export type LocationDoc = {
  id: string
  longitude: number
  latitude: number
}

const App = () => {
  const [locations, setLocations] = useStorageState<LocationDoc[]>('lantern-weather-locations', [])
  const [units, setUnits] = useStorageState<UnitsEnum>('lantern-units', UnitsEnum.metric)

  const addLocation = useCallback((location: LocationDoc) => {
    setLocations(locations => dedupe(location, locations))
  }, [setLocations])

  const removeLocation = useCallback((id: string) => {
    setLocations(locations => locations.filter(l => l.id !== id))
  }, [setLocations])

  return (
    <UnitsProvider value={{units, setUnits}}>
      <Layout>
        <Header
          title={'Lantern Weather'}
        />
        <Controls
          addLocation={addLocation}
          locations={locations}
        />
        <Dash
          removeLocation={removeLocation}
          locations={locations}
        />
      </Layout>
    </UnitsProvider>
  );
}

export default App;
