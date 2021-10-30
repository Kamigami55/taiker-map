import React from 'react'

import getDistanceFromBounds from '@/libs/getDistanceFromBounds'
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '@/constants/mapConstants'

const MapContext = React.createContext()

const DefaultReducerValue = {
  map: null,
  center: DEFAULT_CENTER,
  zoom: DEFAULT_ZOOM,
  distance: 600000, // Diagonal distance of map view in meter
}

export const UPDATE_MAP_CONTROL = 'UPDATE_MAP_CONTROL'
export const SET_MAP = 'SET_MAP'

function mapReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case UPDATE_MAP_CONTROL: {
      if (state.map === null) return state
      const center = {
        lat: state.map.center.lat(),
        lng: state.map.center.lng(),
      }
      const zoom = state.map.zoom
      const distance = getDistanceFromBounds(state.map)

      return {
        ...state,
        center,
        zoom,
        distance,
      }
    }
    case SET_MAP: {
      return {
        ...state,
        map: payload?.map,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

function MapProvider({ children }) {
  const [state, dispatch] = React.useReducer(mapReducer, DefaultReducerValue)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

function useMapContext() {
  const context = React.useContext(MapContext)
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider')
  }
  return context
}

export { MapProvider, useMapContext }
