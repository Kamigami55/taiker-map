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

// Add type & selected field to each spot
function transformSpots(spots, type) {
  return spots.map((spot) => ({
    ...spot,
    selected: true,
    type,
  }))
}

export const SpotType = {
  SCENIC_SPOT: 'SCENIC_SPOT',
  RESTAURANT: 'RESTAURANT',
  HOTEL: 'HOTEL',
  ACTIVITY: 'ACTIVITY',
}

const SpotTypeToListName = {
  [SpotType.SCENIC_SPOT]: 'scenicSpots',
  [SpotType.RESTAURANT]: 'restaurants',
  [SpotType.HOTEL]: 'hotels',
  [SpotType.ACTIVITY]: 'activities',
}

export const SET_SPOTS = 'SET_SPOTS'
export const TOGGLE_SPOT = 'TOGGLE_SPOT'
export const TOGGLE_SPOT_TOTAL = 'TOGGLE_SPOT_TOTAL'

function spotsReducer(state, { type, payload = {} } = {}) {
  switch (type) {
    case SET_SPOTS: {
      const { scenicSpots, restaurants, hotels, activities } = payload
      const scenicSpotsTransformed = transformSpots(scenicSpots, SpotType.SCENIC_SPOT)
      const restaurantsTransformed = transformSpots(restaurants, SpotType.RESTAURANT)
      const hotelsTransformed = transformSpots(hotels, SpotType.HOTEL)
      const activitiesTransformed = transformSpots(activities, SpotType.ACTIVITY)
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

    case TOGGLE_SPOT: {
      const { id, type } = payload
      const targetSpotListName = SpotTypeToListName[type]
      return {
        ...state,
        [targetSpotListName]: state[targetSpotListName].map((spot) =>
          spot.id === id ? { ...spot, selected: !spot.selected } : spot
        ),
        spots: state.spots.map((spot) =>
          spot.id === id ? { ...spot, selected: !spot.selected } : spot
        ),
      }
    }

    case TOGGLE_SPOT_TOTAL: {
      const { type, checked } = payload
      const targetSpotListName = SpotTypeToListName[type]
      const newTargetSpotList = state[targetSpotListName].map((spot) => ({
        ...spot,
        selected: checked,
      }))
      return {
        ...state,
        [targetSpotListName]: newTargetSpotList,
        spots: state.spots.map((spot) =>
          spot.type === type ? { ...spot, selected: checked } : spot
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
