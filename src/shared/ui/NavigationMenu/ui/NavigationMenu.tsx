import './NavigationMenu.scss'
import Link from 'next/link'
import { NavigationMenuItem } from '@shared/types'
import classNames from 'classnames'

type NavigationMenuProps = {
  className?: string
  items: NavigationMenuItem[]
}

const NavigationMenu = (props: NavigationMenuProps) => {
  const { className, items } = props

  return (
    <nav className={classNames(className, 'navigation-menu')}>
      <ul className="navigation-menu__list">
        {items.map((item) => (
          <li className="navigation-menu__item" key={item.href}>
            <Link className="navigation-menu__link" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationMenu
