import './Header.scss'
import Logo from '@shared/ui/Logo'
import { Contact, NavigationMenuItem } from '@shared/types'
import ContactLinks from '@shared/ui/ContactLinks'
import NavigationMenu from '@shared/ui/NavigationMenu'
import Button from '@shared/ui/Button'

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
  { href: '/delivery-payment', label: 'Доставка и оплата' },
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
          Заказать консультацию
        </div>
        <div className="header__bottom">
          <div className="header__bottom-left">
            <Logo className="header__logo" />
            <Button
              className="header__button-catalog"
              type="button"
              label="Каталог"
              iconName="cart"
              iconPosition="before"
            />
          </div>
          <div className="header__bottom-right">
            <form className="header__search search-form">
              <input type="text" id="" name="" />
              <button type="submit">иконка поиска</button>
            </form>
            ЛОГИН ИЗБРАННОЕ
            <Button
              className="header__button-cart"
              href="/cart"
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
