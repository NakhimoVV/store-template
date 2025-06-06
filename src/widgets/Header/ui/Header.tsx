import './Header.scss'
import Logo from '@shared/ui/Logo'
import { Contact, NavigationMenuItem } from '@shared/types'
import ContactLinks from '@shared/ui/ContactLinks'
import NavigationMenu from '@shared/ui/NavigationMenu'
import Button from '@shared/ui/Button'
import SearchForm from '@/features/SearchForm'

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
  return (
    <header className="header">
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
          <Button type="button" mode="anchor" label="Заказать консультацию" />
        </div>
        <div className="header__bottom">
          <div className="header__bottom-left">
            <Logo className="header__logo" />
            <Button
              className="header__button-catalog"
              type="button"
              label="Каталог"
              iconName="catalog"
              iconPosition="before"
            />
          </div>
          <SearchForm className="header____bottom-middle" />
          <div className="header__bottom-right">
            <Button
              className="header__button-cart"
              href="/cart"
              mode="circle"
              label="Войти"
              isLabelHidden
              iconName="user"
            />
            <Button
              className="header__button-cart"
              href="/cart"
              mode="circle"
              label="Избранное"
              isLabelHidden
              iconName="favorite"
            />
            <Button
              className="header__button-cart"
              href="/cart"
              mode="circle"
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
