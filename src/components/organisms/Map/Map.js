import React from 'react'
import { debounce } from 'lodash'
// import PropTypes from 'prop-types'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import { NEXT_PUBLIC_GOOGLE_MAP_API_KEY } from '@/constants/envValues'
import { useMapContext, UPDATE_MAP_CONTROL, SET_MAP } from '@/contexts/mapContext'
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '@/constants/mapConstants'

import styles from './Map.module.scss'

const PIN_ICON_SRC = '/images/pin.png'

const containerStyle = {
  width: '400px',
  height: '400px',
}

function MapComponent({ spots }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  })

  const { state, dispatch } = useMapContext()
  const { enableControl } = state

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
      mapContainerClassName={!enableControl && styles.hideGoogleMapMarks}
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      clickableIcons={false}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        gestureHandling: enableControl ? 'auto' : 'none',
        zoomControl: enableControl,
        scaleControl: enableControl,
        rotateControl: enableControl,
        mapTypeControl: false,
        streetViewControl: false,
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

function MapStub() {
  return <img src="/images/map.png" alt="" className="object-cover w-[400px] h-[400px]" />
}

function Map(props) {
  const { state: { stubbingMap = false } = {} } = useMapContext()
  if (stubbingMap) {
    return <MapStub />
  } else {
    return <MapComponent {...props} />
  }
}

export default React.memo(Map)
