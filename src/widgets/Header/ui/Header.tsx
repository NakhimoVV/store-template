'use client'

import './Header.scss'
import SearchForm from '@/features/SearchForm'
import { useFindHeightElement } from '@shared/hooks/useFindHeightElement'
import Button from '@shared/ui/Button'
import { ButtonMode } from '@shared/ui/Button/lib/constants'
import ContactLinks from '@shared/ui/ContactLinks'
import Logo from '@shared/ui/Logo'
import NavigationMenu from '@shared/ui/NavigationMenu'
import CatalogDropdown from '@widgets/CatalogDropdown'
import type { Contact, NavigationMenuItem } from '@shared/types'

const contactLinks: Contact[] = [
  {
    type: 'phone',
    value: '+71234567890',
    label: `+7(123)456-78-90`,
  },
  {
    type: 'email',
    value: 'example@mail.ru',
  },
]
const menuItems: NavigationMenuItem[] = [
  { href: '/promo', label: 'Акции' },
  { href: '/stores', label: 'Магазины' },
  { href: '/about', label: 'О компании' },
  { href: '/returns-exchanges', label: 'Возврат и обмен товаров' },
  { href: '/wholesale', label: 'Оптовикам' },
]

const Header = () => {
  const elementRef = useFindHeightElement('header')

  return (
    <header className="header" ref={elementRef}>
      <div className="header__inner container">
        <div className="header__top">
          <ContactLinks
            className="header__contact-links"
            links={contactLinks}
          />
          <NavigationMenu
            className="header__top-navigation"
            items={menuItems}
          />
          <Button
            className="header__top-button"
            href="/consult"
            label="Заказать консультацию"
            mode={ButtonMode.ANCHOR}
          />
        </div>
        <div className="header__bottom">
          <div className="header__bottom-left">
            <Logo className="header__logo" />
            <CatalogDropdown />
          </div>
          <SearchForm className="header____bottom-middle" />
          <div className="header__bottom-right">
            <Button
              className="header__button-cart"
              href="/cart"
              mode={ButtonMode.CIRCLE}
              label="Войти"
              isLabelHidden
              iconName="user"
            />
            <Button
              className="header__button-cart"
              href="/cart"
              mode={ButtonMode.CIRCLE}
              label="Избранное"
              isLabelHidden
              iconName="favorite"
            />
            <Button
              className="header__button-cart"
              href="/cart"
              mode={ButtonMode.CIRCLE}
              label="Корзина товаров"
              isLabelHidden
              iconName="cart"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
