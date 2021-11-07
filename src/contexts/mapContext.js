import React from 'react'

import getMapRadiusFromBounds from '@/libs/getMapRadiusFromBounds'
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '@/constants/mapConstants'

const MapContext = React.createContext()

const DefaultReducerState = {
  stubbingMap: false,
  map: null,
  center: DEFAULT_CENTER,
  zoom: DEFAULT_ZOOM,
  radius: 0, // radius of map view in meter
  enableControl: true,
}
export const MockReducerState = {
  ...DefaultReducerState,
  stubbingMap: true,
}

export const UPDATE_MAP_CONTROL = 'UPDATE_MAP_CONTROL'
export const SET_MAP = 'SET_MAP'
export const TOGGLE_MAP_CONTROL = 'TOGGLE_MAP_CONTROL'

function mapReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case UPDATE_MAP_CONTROL: {
      if (state.map === null) return state
      const center = {
        lat: state.map.center.lat(),
        lng: state.map.center.lng(),
      }
      const zoom = state.map.zoom
      const radius = getMapRadiusFromBounds(state.map)

      return {
        ...state,
        center,
        zoom,
        radius,
      }
    }
    case SET_MAP: {
      return {
        ...state,
        map: payload?.map,
      }
    }
    case TOGGLE_MAP_CONTROL: {
      return {
        ...state,
        enableControl: !state.enableControl,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export function MapProvider({ children, defaultState = DefaultReducerState }) {
  const [state, dispatch] = React.useReducer(mapReducer, defaultState)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export function useMapContext() {
  const context = React.useContext(MapContext)
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider')
  }
  return context
}
