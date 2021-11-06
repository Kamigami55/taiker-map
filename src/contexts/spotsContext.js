import React from 'react'

import joinAllArrays from '@/libs/joinAllArrays'

const SpotsContext = React.createContext()

const DefaultReducerState = {
  scenicSpots: [],
  restaurants: [],
  hotels: [],
  activities: [],
  spots: [],
}

export const SET_SPOTS = 'SET_SPOTS'

function spotsReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case SET_SPOTS: {
      const { scenicSpots, restaurants, hotels, activities } = payload
      return {
        ...state,
        scenicSpots,
        restaurants,
        hotels,
        activities,
        spots: joinAllArrays(scenicSpots, restaurants, hotels, activities),
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export function SpotsProvider({ children, defaultState = DefaultReducerState }) {
  const [state, dispatch] = React.useReducer(spotsReducer, defaultState)
  const value = { state, dispatch }
  return <SpotsContext.Provider value={value}>{children}</SpotsContext.Provider>
}

export function useSpotsContext() {
  const context = React.useContext(SpotsContext)
  if (context === undefined) {
    throw new Error('useSpotsContext must be used within a SpotsProvider')
  }
  return context
}
