/**
 * Calculate distance of 2 points on map
 * @param {Double} lat1
 * @param {Double} lon1
 * @param {Double} lat2
 * @param {Double} lon2
 * @returns {Integer} Distance in meter
 * ref: https://stackoverflow.com/a/21623206/6728679
 */
export default function calculateDistance(lat1, lon1, lat2, lon2) {
  const p = 0.017453292519943295 // Math.PI / 180
  const c = Math.cos
  const a =
    0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2

  return 12742 * Math.asin(Math.sqrt(a)) * 1000 // 2 * R; R = 6371 km
}
