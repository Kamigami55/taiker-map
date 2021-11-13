import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './ToggleInput.module.scss'

export default function ToggleInput({ id, label, ...props }) {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      {/* <!-- toggle --> */}
      <div className="relative">
        <input id={id} type="checkbox" className="hidden" {...props} />
        {/* <!-- path --> */}
        <div
          className={cn('w-9 h-5 bg-gray-200 rounded-full shadow-inner', styles.togglePath)}
        ></div>
        {/* <!-- crcle --> */}
        <div
          className={cn(
            'absolute inset-y-0 left-0 w-3.5 h-3.5 bg-white rounded-full shadow',
            styles.toggleCircle
          )}
        ></div>
      </div>
      <div className="px-2">{label}</div>
    </label>
  )
}

ToggleInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}

ToggleInput.defaultProps = {
  label: '',
}
