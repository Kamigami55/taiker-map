import PropTypes from 'prop-types'

export default function ExportButton({ onClick }) {
  return <button onClick={onClick}>匯出</button>
}

ExportButton.propTypes = { onClick: PropTypes.func.isRequired }
