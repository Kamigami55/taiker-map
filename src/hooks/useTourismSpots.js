import { useMemo } from 'react'
import useSWR from 'swr'

import getAuthorizationHeader from '@/libs/getAuthorizationHeader'

const fetcher = (...args) =>
  fetch(...args, { headers: getAuthorizationHeader() }).then((res) => res.json())

const transformData = (data) => {
  return (
    data?.map((spot) => ({
      id: spot?.ID || '',
      name: spot?.Name || '',
    })) || []
  )
}

export function useTourismSpots() {
  const url = new URL(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=100&$format=JSON'
  )
  const { data } = useSWR([url.toString()], fetcher)
  const tourismSpots = useMemo(() => transformData(data), [data]) || []

  return { tourismSpots }
}
