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

// Add selected field to each spot
function transformSpots(spots) {
  return spots.map((spot) => ({
    ...spot,
    selected: false,
  }))
}

export const SET_SPOTS = 'SET_SPOTS'

function spotsReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case SET_SPOTS: {
      const { scenicSpots, restaurants, hotels, activities } = payload
      const scenicSpotsTransformed = transformSpots(scenicSpots)
      const restaurantsTransformed = transformSpots(restaurants)
      const hotelsTransformed = transformSpots(hotels)
      const activitiesTransformed = transformSpots(activities)
      return {
        ...state,
        scenicSpots: scenicSpotsTransformed,
        restaurants: restaurantsTransformed,
        hotels: hotelsTransformed,
        activities: activitiesTransformed,
        spots: joinAllArrays(
          scenicSpotsTransformed,
          restaurantsTransformed,
          hotelsTransformed,
          activitiesTransformed
        ),
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
