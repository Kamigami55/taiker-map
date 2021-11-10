import PropTypes from 'prop-types'
import cn from 'classnames'

export default function Section({ children, className }) {
  return <section className={cn('px-5 mx-auto w-full max-w-7xl', className)}>{children}</section>
}

Section.propTypes = { children: PropTypes.node, className: PropTypes.string }

Section.defaultProps = { children: null, className: null }
