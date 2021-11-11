import PropTypes from 'prop-types'
import { Marker } from '@react-google-maps/api'

import { MARKER_SHAPE_CIRCLE, MARKER_SHAPE_CONFIGS, MARKER_SHAPE_PIN } from './markerShape'
import { DEFAULT_SCENIC_SPOT_ICON } from './markerIcon'

export default function MarkerCustom({ spot, shape, labelIconText }) {
  const shapeIconProps = MARKER_SHAPE_CONFIGS[shape]?.iconProps || {}
  return (
    <Marker
      position={spot.position}
      icon={{
        ...shapeIconProps,
        fillColor: 'red',
        fillOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 1,
      }}
      label={{
        text: labelIconText,
        fontFamily: 'Material Icons',
        color: '#ffffff',
        fontSize: '16px',
      }}
    />
  )
}

MarkerCustom.propTypes = {
  spot: PropTypes.shape({
    position: PropTypes.shape({ lat: PropTypes.number, lng: PropTypes.number }),
  }).isRequired,
  shape: PropTypes.oneOf([MARKER_SHAPE_PIN, MARKER_SHAPE_CIRCLE]),
  labelIconText: PropTypes.string,
}

MarkerCustom.defaultProps = {
  shape: MARKER_SHAPE_CIRCLE,
  labelIconText: DEFAULT_SCENIC_SPOT_ICON,
}
