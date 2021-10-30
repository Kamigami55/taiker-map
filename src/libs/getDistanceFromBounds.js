import calculateDistance from '@/libs/calculateDistance'

/**
 * Calculate distance from Google Map Bounds
 * @param {Object} googleMapInstance
 * @returns {Integer} Distance in meter
 */
export default function getDistanceFromBounds(googleMapInstance) {
  const _bounds = googleMapInstance.getBounds()
  const _pointNE = _bounds.getNorthEast()
  const _pointSW = _bounds.getSouthWest()
  const distance = calculateDistance(_pointNE.lat(), _pointNE.lng(), _pointSW.lat(), _pointSW.lng())
  return distance
}
