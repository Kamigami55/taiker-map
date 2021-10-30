import React from 'react'
import { debounce } from 'lodash'
// import PropTypes from 'prop-types'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import { NEXT_PUBLIC_GOOGLE_MAP_API_KEY } from '@/constants/envValues'
import { useMapContext, UPDATE_MAP_CONTROL, SET_MAP } from '@/contexts/mapContext'
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '@/constants/mapConstants'

const containerStyle = {
  width: '400px',
  height: '400px',
}

function Map({ spots }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  })

  const { dispatch } = useMapContext()

  const onLoad = React.useCallback((map) => {
    dispatch({ type: SET_MAP, payload: { map } })
  }, [])

  const onUnmount = React.useCallback(() => {
    dispatch({ type: SET_MAP, payload: { map: null } })
  }, [])

  const updateMapControl = debounce(() => {
    dispatch({ type: UPDATE_MAP_CONTROL })
  }, 1500)

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: false,
      }}
      onIdle={updateMapControl}
    >
      {spots?.map((spot) => (
        <Marker key={spot.id} position={spot.position} />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(Map)

// Map.propTypes = {}

// Map.defaultProps = {}
