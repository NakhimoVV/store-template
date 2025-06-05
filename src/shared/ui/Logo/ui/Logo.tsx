import './Logo.scss'
import classNames from 'classnames'
import Link from 'next/link'
import LogoIcon from '@shared/assets/images/logo.svg'

type LogoProps = {
  className?: string
}

const Logo = (props: LogoProps) => {
  const { className } = props
  const title = 'Главная страница'

  return (
    <Link
      className={classNames(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      <LogoIcon className="logo-icon" />
    </Link>
  )
}

export default Logo
