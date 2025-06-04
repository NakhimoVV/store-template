import './Button.scss'
import Link from 'next/link'
import classNames from 'classnames'

type ButtonProps = {
  className?: string
  href?: string
  type?: 'submit' | 'button' | 'reset'
  target?: '_blank' | '_self'
  label?: string
  isLabelHidden?: boolean
}

const Button = (props: ButtonProps) => {
  const {
    className,
    href,
    type = 'button',
    target,
    label,
    isLabelHidden = false,
  } = props

  const isLink = href !== undefined
  const title = isLabelHidden ? label : undefined

  const commonAttrs = {
    className: classNames(className, 'button'),
    title,
    'aria-label': title,
  }

  const content = (
    <>{!isLabelHidden && <span className="button__label">{label}</span>}</>
  )

  if (isLink) {
    return (
      <Link href={href} target={target} {...commonAttrs}>
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
