import './Logo.scss'
import clsx from 'clsx'
import Link from 'next/link'
import LogoImageWhite from '@shared/assets/images/logo-w.svg'
import LogoImage from '@shared/assets/images/logo.svg'

type LogoProps = {
  className: string
}

const Logo = (props: LogoProps) => {
  const { className } = props
  const title = 'Главная страница'
  const isFooterLogo = className === 'footer__logo'

  return (
    <Link
      className={clsx(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      {isFooterLogo ? <LogoImageWhite /> : <LogoImage />}
    </Link>
  )
}

export default Logo
