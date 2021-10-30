import calculateDistance from '@/libs/calculateDistance'

/**
 * Calculate radius of map view from Google Map Bounds
 * @param {Object} googleMapInstance
 * @returns {Integer} radius in meter
 */
export default function getMapRadiusFromBounds(googleMapInstance) {
  const _bounds = googleMapInstance.getBounds()
  const _pointNE = _bounds.getNorthEast()
  const _pointSW = _bounds.getSouthWest()
  const diagonalDistance = calculateDistance(
    _pointNE.lat(),
    _pointNE.lng(),
    _pointSW.lat(),
    _pointSW.lng()
  )
  const radius = Math.floor(diagonalDistance / 2)
  return radius
}
