import { useEffect, useState } from 'react'

import { useTourismSpots } from '@/api/useTourismSpots'
import transformScenicSpotsData from '@/api/transformScenicSpotsData'
import transformRestaurantsData from '@/api/transformRestaurantsData'
import transformHotelsData from '@/api/transformHotelsData'
import transformActivitiesData from '@/api/transformActivitiesData'
import joinAllArrays from '@/libs/joinAllArrays'

export function useAllTourismSpots({ center, distance } = {}) {
  const { spots: scenicSpots, isLoading: isScenicSpotsLoading } = useTourismSpots(
    'ScenicSpot',
    transformScenicSpotsData,
    {
      center,
      distance,
    }
  )
  const { spots: restaurants, isLoading: isRestaurantsLoading } = useTourismSpots(
    'Restaurant',
    transformRestaurantsData,
    {
      center,
      distance,
    }
  )
  const { spots: hotels, isLoading: isHotelsLoading } = useTourismSpots(
    'Hotel',
    transformHotelsData,
    {
      center,
      distance,
    }
  )
  const { spots: activities, isLoading: isActivitiesLoading } = useTourismSpots(
    'Activity',
    transformActivitiesData,
    {
      center,
      distance,
    }
  )
  const isLoading =
    isScenicSpotsLoading || isRestaurantsLoading || isHotelsLoading || isActivitiesLoading

  const [spots, setSpots] = useState([])

  useEffect(() => {
    if (!isLoading) {
      setSpots(joinAllArrays(scenicSpots, restaurants, hotels, activities))
    }
  }, [scenicSpots, restaurants, hotels, activities, isLoading])

  return { spots, isLoading }
}
