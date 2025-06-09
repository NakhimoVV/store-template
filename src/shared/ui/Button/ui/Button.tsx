import './Button.scss'
import clsx from 'clsx'
import Link from 'next/link'
import Icon from '@shared/ui/Icon'
import { ButtonMode } from '@shared/ui/Button/lib/constants'

type ButtonProps = {
  className?: string
  href?: string
  type?: 'submit' | 'button' | 'reset'
  mode?: ButtonMode
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
    mode = '',
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
    className: clsx(className, 'button', {
      [`button--${mode}`]: mode,
    }),
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
