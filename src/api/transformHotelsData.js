export default function transformHotelsData(data) {
  return (
    data?.map?.((spot) => ({
      id: spot?.ID || '',
      name: spot?.Name || '',
      position: {
        lat: spot?.Position?.PositionLat,
        lng: spot?.Position?.PositionLon,
      },
    })) || []
  )
}
