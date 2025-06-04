import './Logo.scss'
import classNames from 'classnames'
import Link from 'next/link'
import logoImgSrc from '@shared/assets/images/logo.svg'
import Image from 'next/image'

type LogoProps = {
  className?: string
  priority?: boolean
}

const Logo = (props: LogoProps) => {
  const { className, priority = false } = props
  const title = 'Главная страница'

  return (
    <Link
      className={classNames(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      <Image
        className="logo__image"
        src={logoImgSrc}
        alt=""
        priority={priority}
      />
    </Link>
  )
}

export default Logo
