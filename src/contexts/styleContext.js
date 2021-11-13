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

// TODO define marker color type constant
// export const MarkerColorType = {
//   SCENIC_SPOT: 'SCENIC_SPOT',
//   RESTAURANT: 'RESTAURANT',
//   HOTEL: 'HOTEL',
//   ACTIVITY: 'ACTIVITY',
// }

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
    iconColor: {
      [SpotType.SCENIC_SPOT]: '#ffffff',
      [SpotType.RESTAURANT]: '#ffffff',
      [SpotType.HOTEL]: '#ffffff',
      [SpotType.ACTIVITY]: '#ffffff',
    },
    shapeColor: {
      [SpotType.SCENIC_SPOT]: '#34a853',
      [SpotType.RESTAURANT]: '#fbbc05',
      [SpotType.HOTEL]: '#ea4335',
      [SpotType.ACTIVITY]: '#4285f4',
    },
    borderColor: {
      [SpotType.SCENIC_SPOT]: '#000000',
      [SpotType.RESTAURANT]: '#000000',
      [SpotType.HOTEL]: '#000000',
      [SpotType.ACTIVITY]: '#000000',
    },
  },
}

export const CHANGE_MAP_THEME = 'CHANGE_MAP_THEME'
export const CHANGE_DENSITY = 'CHANGE_DENSITY'
export const CHANGE_CANVAS_SIZE = 'CHANGE_CANVAS_SIZE'
export const CHANGE_MARKER_SHAPE = 'CHANGE_MARKER_SHAPE'
export const CHANGE_MARKER_ICON = 'CHANGE_MARKER_ICON'
export const CHANGE_MARKER_COLOR = 'CHANGE_MARKER_COLOR'

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

    case CHANGE_MARKER_COLOR: {
      const { spotType, colorType, color } = payload
      if (!['iconColor', 'shapeColor', 'borderColor'].includes(colorType)) return state
      return {
        ...state,
        markerStyle: {
          ...state.markerStyle,
          [colorType]: {
            ...state.markerStyle[colorType],
            [spotType]: color,
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
