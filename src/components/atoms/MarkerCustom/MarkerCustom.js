import PropTypes from 'prop-types'
import { Marker } from '@react-google-maps/api'

import { MARKER_SHAPE_CIRCLE, MARKER_SHAPE_CONFIGS, MARKER_SHAPE_PIN } from './markerShape'

export default function MarkerCustom({ spot, shape }) {
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
        text: '\ue530',
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
}

MarkerCustom.defaultProps = {
  // shape: MARKER_SHAPE_PIN,
  shape: MARKER_SHAPE_CIRCLE,
}
