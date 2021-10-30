import { useMemo } from 'react'

import { useTourismSpots } from '@/api/useTourismSpots'
import transformScenicSpotsData from '@/api/transformScenicSpotsData'
import transformRestaurantsData from '@/api/transformRestaurantsData'
import transformHotelsData from '@/api/transformHotelsData'
import transformActivitiesData from '@/api/transformActivitiesData'
import joinAllArrays from '@/libs/joinAllArrays'

export function useAllTourismSpots({ center, distance = 10000 } = {}) {
  const { spots: scenicSpots } = useTourismSpots('ScenicSpot', transformScenicSpotsData, {
    center,
    distance,
  })
  const { spots: restaurants } = useTourismSpots('Restaurant', transformRestaurantsData, {
    center,
    distance,
  })
  const { spots: hotels } = useTourismSpots('Hotel', transformHotelsData, {
    center,
    distance,
  })
  const { spots: activities } = useTourismSpots('Activity', transformActivitiesData, {
    center,
    distance,
  })
  const spots =
    useMemo(
      () => joinAllArrays(scenicSpots, restaurants, hotels, activities),
      [scenicSpots, restaurants, hotels, activities]
    ) || []

  return { spots }
}
