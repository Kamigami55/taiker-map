import React from 'react'
import { debounce } from 'lodash'
// import PropTypes from 'prop-types'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import { NEXT_PUBLIC_GOOGLE_MAP_API_KEY } from '@/constants/envValues'
import { useMapContext, UPDATE_MAP_CONTROL, SET_MAP } from '@/contexts/mapContext'
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '@/constants/mapConstants'

const PIN_ICON_SRC = '/images/pin.png'

const containerStyle = {
  width: '400px',
  height: '400px',
}

function Map({ spots }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  })

  const { state, dispatch } = useMapContext()

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
      clickableIcons={false}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: false,
        styles: state.style.config,
      }}
      onIdle={updateMapControl}
    >
      {spots?.map((spot) => (
        <Marker
          key={spot.id}
          position={spot.position}
          icon={{
            url: PIN_ICON_SRC,
            size: { width: 64, height: 64 },
            anchor: { x: 16, y: 32 },
            scaledSize: { width: 32, height: 32 },
          }}
        />
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
