import React from 'react'
import { debounce } from 'lodash'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

import { NEXT_PUBLIC_GOOGLE_MAP_API_KEY } from '@/constants/envValues'
import { useMapContext, UPDATE_MAP_CONTROL, SET_MAP } from '@/contexts/mapContext'
import { useStyleContext } from '@/contexts/styleContext'
import { useSpotsContext } from '@/contexts/spotsContext'
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '@/constants/mapConstants'
import joinAllArrays from '@/libs/joinAllArrays'
import MarkerCustom from '@/components/atoms/MarkerCustom'

import styles from './Map.module.scss'
import MapStub from './MapStub'
import {
  getSpecialIconText,
  SPECIAL_ICON_TYPE_ALPHABET,
  SPECIAL_ICON_TYPE_NUMBER,
} from '@/components/atoms/MarkerCustom/markerIcon'

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  })

  const { state: { enableControl } = {}, dispatch } = useMapContext()
  const {
    state: {
      theme,
      roadsDensity,
      landmarksDensity,
      labelsDensity,
      canvasSize,
      markerStyle: {
        shape: markerShape,
        icon: markerIconCodeOfTypes,
        iconColor: markerIconColorOfTypes,
        shapeColor: markerShapeColorOfTypes,
        borderColor: markerBorderColorOfTypes,
      },
    },
  } = useStyleContext()
  const { state: { scenicSpots, restaurants, hotels, activities } = {} } = useSpotsContext()

  const onLoad = React.useCallback((map) => {
    dispatch({ type: SET_MAP, payload: { map } })
  }, [])

  const onUnmount = React.useCallback(() => {
    dispatch({ type: SET_MAP, payload: { map: null } })
  }, [])

  const updateMapControl = debounce(() => {
    dispatch({ type: UPDATE_MAP_CONTROL })
  }, 1500)

  const mergedStyles = React.useMemo(
    () =>
      joinAllArrays(
        theme.config,
        roadsDensity.config,
        landmarksDensity.config,
        labelsDensity.config
      ),
    [theme.config, roadsDensity.config, landmarksDensity.config, labelsDensity.config]
  )

  const renderSpots = (spots) => {
    return spots?.map((spot, index) => {
      if (!spot.selected) return null
      const isSpecial = [SPECIAL_ICON_TYPE_NUMBER, SPECIAL_ICON_TYPE_ALPHABET].includes(
        markerIconCodeOfTypes[spot.type]
      )
      const labelIconText = isSpecial
        ? getSpecialIconText(markerIconCodeOfTypes[spot.type], index)
        : markerIconCodeOfTypes[spot.type]
      return (
        <MarkerCustom
          key={spot.id}
          spot={spot}
          shape={markerShape}
          labelIconText={labelIconText}
          useMaterialIcons={!isSpecial}
          iconColor={markerIconColorOfTypes[spot.type]}
          shapeColor={markerShapeColorOfTypes[spot.type]}
          borderColor={markerBorderColorOfTypes[spot.type]}
        />
      )
    })
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: canvasSize.width + 'px',
        height: canvasSize.height + 'px',
      }}
      mapContainerClassName={enableControl ? '' : styles.hideGoogleMapMarks}
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
        styles: mergedStyles,
      }}
      onIdle={updateMapControl}
    >
      {renderSpots(scenicSpots)}
      {renderSpots(restaurants)}
      {renderSpots(hotels)}
      {renderSpots(activities)}
    </GoogleMap>
  ) : (
    <></>
  )
}

function Map() {
  const { state: { stubbingMap = false } = {} } = useMapContext()

  return stubbingMap ? <MapStub /> : <MapComponent />
}

export default React.memo(Map)
