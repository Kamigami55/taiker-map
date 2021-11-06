import PropTypes from 'prop-types'
import cn from 'classnames'

export default function ToggleButton({ onClick, children, active, className, ...props }) {
  return (
    <button
      className={cn(
        'py-2 px-4 w-full rounded',
        active
          ? 'text-gray-700 bg-gray-100'
          : 'text-gray-300 hover:bg-gray-100 hover:text-gray-700',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

ToggleButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  active: PropTypes.bool,
  className: PropTypes.string,
}

ToggleButton.defaultProps = {
  active: false,
}
