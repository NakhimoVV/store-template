import './Button.scss'
import Link from 'next/link'
import classNames from 'classnames'
import Icon from '@shared/ui/Icon'

type ButtonProps = {
  className?: string
  href?: string
  type?: 'submit' | 'button' | 'reset'
  label?: string
  isLabelHidden?: boolean
  iconName?: string
  iconPosition?: 'before' | 'after'
}

const Button = (props: ButtonProps) => {
  const {
    className,
    href,
    type = 'button',
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = 'before',
  } = props

  const isLink = href !== undefined
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )

  const commonAttrs = {
    className: classNames(className, 'button'),
    title,
    'aria-label': title,
  }

  const content = (
    <>
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && iconComponent}
    </>
  )

  if (isLink) {
    return (
      <Link href={href} {...commonAttrs}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} {...commonAttrs}>
      {content}
    </button>
  )
}

export default Button
