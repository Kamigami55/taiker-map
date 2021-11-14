import PropTypes from 'prop-types'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: '',
}
