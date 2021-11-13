import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

export default function ColorInput({ value: outerValue, onChange, label, id }) {
  const [innerValue, setInnerValue] = useState(outerValue)
  const [lastDispatchedOuterValue, setLastDispatchedOuterValue] = useState(outerValue)

  const handleChange = (event) => {
    const newValue = event.target.value
    setInnerValue(newValue)
    updateOuterValue(newValue)
  }

  // Update outer value with debounce
  // ref:
  // https://dev.to/alexdrocks/using-lodash-debounce-with-react-hooks-for-an-async-data-fetching-input-2p4g
  const updateOuterValue = useMemo(
    () =>
      debounce((newValue) => {
        setLastDispatchedOuterValue(newValue)
        onChange(newValue)
      }, 500),
    [onChange]
  )
  // Stop the invocation of the debounced function after unmounting
  useEffect(() => {
    return () => {
      updateOuterValue.cancel()
    }
  }, [])

  // Update inner value if outer value changed from other source
  useEffect(() => {
    if (outerValue !== lastDispatchedOuterValue) {
      setInnerValue(outerValue)
      setLastDispatchedOuterValue(outerValue)
    }
  }, [outerValue])

  return (
    <div className="flex gap-2 items-center">
      <input type="color" id={id} name="head" value={innerValue} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

ColorInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
}

ColorInput.defaultProps = {
  value: '#ffffff',
  onChange: () => {},
  label: '',
  id: '',
}
