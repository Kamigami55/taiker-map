import { useMemo } from 'react'
import useSWRImmutable from 'swr/immutable'

import getAuthorizationHeader from '@/libs/getAuthorizationHeader'

const fetcher = (...args) =>
  fetch(...args, { headers: getAuthorizationHeader() }).then((res) => res.json())

const transformData = (data) => {
  return (
    data?.map((spot) => ({
      id: spot?.ID || '',
      name: spot?.Name || '',
      position: {
        lat: spot?.Position?.PositionLat,
        lng: spot?.Position?.PositionLon,
      },
    })) || []
  )
}

export function useTourismSpots({ center, distance = 10000 } = {}) {
  const url = new URL(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=100&$format=JSON'
  )
  if (center) {
    url.searchParams.append('$spatialFilter', `nearby(${center.lat},${center.lng},${distance})`)
  }
  const { data } = useSWRImmutable(url.toString(), fetcher)
  const tourismSpots = useMemo(() => transformData(data), [data]) || []

  return { tourismSpots }
}
