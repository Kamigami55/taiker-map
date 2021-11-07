import React from 'react'

import MapStyles from '@/mapStyles'

const StyleContext = React.createContext()

const DefaultReducerState = {
  style: MapStyles[0],
}

export const CHANGE_MAP_STYLE = 'CHANGE_MAP_STYLE'

function styleReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case CHANGE_MAP_STYLE: {
      return {
        ...state,
        style: payload?.style,
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
