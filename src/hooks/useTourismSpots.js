import { useMemo } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const transformData = (data) => {
  return (
    data?.map((spot) => ({
      id: spot?.ID || '',
      name: spot?.Name || '',
    })) || []
  )
}

export function useTourismSpots() {
  const { data } = useSWR(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON',
    fetcher
  )
  const tourismSpots = useMemo(() => transformData(data), [data]) || []

  return { tourismSpots }
}
