import React from 'react'

import MapThemes from '@/mapStyles/themes'
import RoadsDensityConfigs from '@/mapStyles/density/RoadsDensityConfigs'
import LandmarksDensityConfigs from '@/mapStyles/density/LandmarksDensityConfigs'
import LabelsDensityConfigs from '@/mapStyles/density/LabelsDensityConfigs'
import { MARKER_SHAPE_PIN } from '@/components/atoms/MarkerCustom/markerShape'

const StyleContext = React.createContext()

const DefaultReducerState = {
  theme: MapThemes[0],
  roadsDensity: RoadsDensityConfigs[RoadsDensityConfigs.length - 1],
  landmarksDensity: LandmarksDensityConfigs[LandmarksDensityConfigs.length - 1],
  labelsDensity: LabelsDensityConfigs[LabelsDensityConfigs.length - 1],
  canvasSize: {
    width: 800,
    height: 500,
  },
  markerStyle: {
    shape: MARKER_SHAPE_PIN,
  },
}

export const CHANGE_MAP_THEME = 'CHANGE_MAP_THEME'
export const CHANGE_DENSITY = 'CHANGE_DENSITY'
export const CHANGE_CANVAS_SIZE = 'CHANGE_CANVAS_SIZE'
export const CHANGE_MARKER_SHAPE = 'CHANGE_MARKER_SHAPE'

function styleReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case CHANGE_MAP_THEME: {
      const { theme } = payload
      return {
        ...state,
        theme,
      }
    }

    case CHANGE_DENSITY: {
      const { stateName, option } = payload
      return {
        ...state,
        [stateName]: option,
      }
    }

    case CHANGE_CANVAS_SIZE: {
      const { width, height } = payload
      return {
        ...state,
        canvasSize: {
          width: width || state.canvasSize.width,
          height: height || state.canvasSize.height,
        },
      }
    }

    case CHANGE_MARKER_SHAPE: {
      const { shape } = payload
      return {
        ...state,
        markerStyle: {
          ...state.markerStyle,
          shape,
        },
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
