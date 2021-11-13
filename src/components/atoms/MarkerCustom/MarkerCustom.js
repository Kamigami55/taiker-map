import PropTypes from 'prop-types'
import { Marker } from '@react-google-maps/api'

import { MARKER_SHAPE_CIRCLE, MARKER_SHAPE_CONFIGS, MARKER_SHAPE_PIN } from './markerShape'
import { DEFAULT_SCENIC_SPOT_ICON } from './markerIcon'

export default function MarkerCustom({
  spot,
  shape,
  labelIconText,
  useMaterialIcons,
  iconColor,
  shapeColor,
  borderColor,
  label,
}) {
  const shapeIconProps = MARKER_SHAPE_CONFIGS[shape]?.iconProps || {}
  return (
    <>
      <Marker
        position={spot.position}
        icon={{
          ...shapeIconProps,
          fillColor: shapeColor,
          fillOpacity: 1,
          strokeColor: borderColor,
          strokeWeight: 1,
        }}
        label={{
          text: labelIconText,
          fontFamily: useMaterialIcons ? 'Material Icons' : '',
          color: iconColor,
          fontSize: '16px',
        }}
        title={spot.name}
      />
      {label && (
        <Marker
          position={spot.position}
          icon={{
            ...shapeIconProps,
            fillOpacity: 0,
            labelOrigin: shapeIconProps.besideTextLabelOrigin,
          }}
          label={{
            text: label,
            color: shapeColor,
            fontSize: '14px',
          }}
        />
      )}
    </>
  )
}

MarkerCustom.propTypes = {
  spot: PropTypes.shape({
    position: PropTypes.shape({ lat: PropTypes.number, lng: PropTypes.number }),
    name: PropTypes.string,
  }).isRequired,
  shape: PropTypes.oneOf([MARKER_SHAPE_PIN, MARKER_SHAPE_CIRCLE]),
  labelIconText: PropTypes.string,
  useMaterialIcons: PropTypes.bool,
  iconColor: PropTypes.string,
  shapeColor: PropTypes.string,
  borderColor: PropTypes.string,
  label: PropTypes.string,
}

MarkerCustom.defaultProps = {
  shape: MARKER_SHAPE_CIRCLE,
  labelIconText: DEFAULT_SCENIC_SPOT_ICON,
  useMaterialIcons: true,
  iconColor: 'white',
  shapeColor: 'red',
  borderColor: 'black',
  label: '',
}
