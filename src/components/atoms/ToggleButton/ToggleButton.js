import PropTypes from 'prop-types'
import cn from 'classnames'

export default function ToggleButton({ onClick, children, active, className, ...props }) {
  return (
    <button
      className={cn(
        'py-2 px-4 w-full rounded-lg',
        active ? 'text-white bg-172A50 shadow-4px' : 'text-black bg-white hover:bg-gray-100',
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
