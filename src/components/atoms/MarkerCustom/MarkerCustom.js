import PropTypes from 'prop-types'
import { Marker } from '@react-google-maps/api'

export default function MarkerCustom({ spot }) {
  return (
    <Marker
      position={spot.position}
      icon={{
        path: 'M25.015 2.4c-7.8 0-14.121 6.204-14.121 13.854 0 7.652 14.121 32.746 14.121 32.746s14.122-25.094 14.122-32.746c0-7.65-6.325-13.854-14.122-13.854z',
        anchor: { x: 25, y: 50 },
        labelOrigin: { x: 25, y: 19 },
        fillColor: 'red',
        fillOpacity: 1,
        scale: 0.8,
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
}
