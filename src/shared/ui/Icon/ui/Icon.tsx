import './Icon.scss'
import classNames from 'classnames'

type IconProps = {
  className: string
  name: string
  hasFill?: boolean
  ariaLabel?: string
}

const Icon = (props: IconProps) => {
  const { className, name, hasFill = false, ariaLabel } = props

  return (
    <span className={classNames(className, 'icon')} aria-label={ariaLabel}>
      <svg
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      >
        <use xlinkHref={`#${name}`} />
      </svg>
    </span>
  )
}

export default Icon
