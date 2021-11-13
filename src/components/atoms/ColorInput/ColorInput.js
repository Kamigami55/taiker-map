import PropTypes from 'prop-types'

export default function ColorInput({ value, onChange, label, id }) {
  // TODO debounce
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="flex gap-2 items-center">
      <input type="color" id={id} name="head" value={value} onChange={handleChange} />
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
