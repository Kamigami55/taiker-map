import PropTypes from 'prop-types'

export default function CanvasContainer({ children }) {
  return <div className="flex flex-col flex-grow p-4">{children}</div>
}

CanvasContainer.propTypes = {
  children: PropTypes.node,
}

CanvasContainer.defaultProps = {
  children: null,
}
