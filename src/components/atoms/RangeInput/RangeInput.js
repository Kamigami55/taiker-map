import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './RangeInput.module.scss'

export default function RangeInput({ className, ...props }) {
  return (
    <input
      type="range"
      className={cn(
        'overflow-hidden h-3 bg-gray-400 rounded-lg appearance-none',
        styles.rangeInput,
        className
      )}
      {...props}
    />
  )
}

RangeInput.propTypes = {
  className: PropTypes.string,
}

RangeInput.defaultProps = {
  className: '',
}
