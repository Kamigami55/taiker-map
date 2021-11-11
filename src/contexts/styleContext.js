import React from 'react'

import MapThemes from '@/mapStyles/themes'
import RoadsDensityConfigs from '@/mapStyles/density/RoadsDensityConfigs'
import LandmarksDensityConfigs from '@/mapStyles/density/LandmarksDensityConfigs'
import LabelsDensityConfigs from '@/mapStyles/density/LabelsDensityConfigs'
import { MARKER_SHAPE_PIN } from '@/components/atoms/MarkerCustom/markerShape'
import {
  DEFAULT_ACTIVITY_ICON,
  DEFAULT_HOTEL_ICON,
  DEFAULT_RESTAURANT_ICON,
  DEFAULT_SCENIC_SPOT_ICON,
} from '@/components/atoms/MarkerCustom/markerIcon'
import { SpotType } from '@/contexts/spotsContext'

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
    icon: {
      [SpotType.SCENIC_SPOT]: DEFAULT_SCENIC_SPOT_ICON,
      [SpotType.RESTAURANT]: DEFAULT_RESTAURANT_ICON,
      [SpotType.HOTEL]: DEFAULT_HOTEL_ICON,
      [SpotType.ACTIVITY]: DEFAULT_ACTIVITY_ICON,
    },
  },
}

export const CHANGE_MAP_THEME = 'CHANGE_MAP_THEME'
export const CHANGE_DENSITY = 'CHANGE_DENSITY'
export const CHANGE_CANVAS_SIZE = 'CHANGE_CANVAS_SIZE'
export const CHANGE_MARKER_SHAPE = 'CHANGE_MARKER_SHAPE'
export const CHANGE_MARKER_ICON = 'CHANGE_MARKER_ICON'

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

    case CHANGE_MARKER_ICON: {
      const { icon, type } = payload
      return {
        ...state,
        markerStyle: {
          ...state.markerStyle,
          icon: {
            ...state.markerStyle.icon,
            [type]: icon,
          },
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
