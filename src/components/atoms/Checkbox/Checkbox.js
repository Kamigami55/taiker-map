import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { CHECKBOX_STATUS } from './CheckboxStatus'

export default function Checkbox({ status, ...props }) {
  const checkRef = useRef()

  useEffect(() => {
    checkRef.current.checked = status === CHECKBOX_STATUS.Checked
    checkRef.current.indeterminate = status === CHECKBOX_STATUS.Indeterminate
  }, [status])

  return <input type="checkbox" ref={checkRef} {...props} />
}

Checkbox.propTypes = {
  status: PropTypes.number,
}

Checkbox.defaultProps = {
  status: CHECKBOX_STATUS.Unchecked,
}
