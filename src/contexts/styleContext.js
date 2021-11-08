import React from 'react'

import MapStyles from '@/mapStyles/themes'
import RoadsDensityConfigs from '@/mapStyles/density/RoadsDensityConfigs'

const StyleContext = React.createContext()

const DefaultReducerState = {
  style: MapStyles[0],
  roadsDensity: RoadsDensityConfigs[RoadsDensityConfigs.length - 1],
}

export const CHANGE_MAP_STYLE = 'CHANGE_MAP_STYLE'
export const CHANGE_ROADS_DENSITY = 'CHANGE_ROADS_DENSITY'

function styleReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case CHANGE_MAP_STYLE: {
      return {
        ...state,
        style: payload?.style,
      }
    }

    case CHANGE_ROADS_DENSITY: {
      const { value } = payload
      return {
        ...state,
        roadsDensity: RoadsDensityConfigs.find((density) => density.value === value),
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export function StyleProvider({ children, defaultState = DefaultReducerState }) {
  const [state, dispatch] = React.useReducer(styleReducer, defaultState)
  const value = { state, dispatch }
  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
}

export function useStyleContext() {
  const context = React.useContext(StyleContext)
  if (context === undefined) {
    throw new Error('useStyleContext must be used within a StyleProvider')
  }
  return context
}
