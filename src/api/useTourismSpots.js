import { useMemo } from 'react'
import useSWRImmutable from 'swr/immutable'

import getAuthorizationHeader from '@/libs/getAuthorizationHeader'
import { NUM_LIMIT_OF_SINGLE_SPOT_TYPE } from '@/constants/apiConstants'

const fetcher = (...args) =>
  fetch(...args, { headers: getAuthorizationHeader() }).then((res) => res.json())

export function useTourismSpots(route, dataTransformFunc, { center, distance } = {}) {
  const url = new URL(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/${route}?$top=${NUM_LIMIT_OF_SINGLE_SPOT_TYPE}&$format=JSON`
  )
  if (center) {
    url.searchParams.append('$spatialFilter', `nearby(${center.lat},${center.lng},${distance})`)
  }
  const { data, isValidating } = useSWRImmutable(distance > 0 && url.toString(), fetcher)
  const spots = useMemo(() => dataTransformFunc(data), [data]) || []

  return { spots, isLoading: isValidating }
}
