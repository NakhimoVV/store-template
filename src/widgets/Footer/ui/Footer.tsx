import './Footer.scss'
import Grid from '@shared/ui/Grid'
import { Contact, NavigationMenuItem } from '@shared/types'
import Logo from '@shared/ui/Logo'
import Button from '@shared/ui/Button'
import { ButtonMode } from '@shared/ui/Button/lib/constants'
import ContactLinks from '@shared/ui/ContactLinks'
import NavigationMenu from '@shared/ui/NavigationMenu'

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
  { href: '/catalog', label: 'Каталог' },
  { href: '/promo', label: 'Акции' },
  { href: '/stores', label: 'Магазины' },
  { href: '/delivery', label: 'Доставка и оплата' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/wholesale', label: 'Оптовикам' },
  { href: '/returns-exchanges', label: 'Возврат и обмен товаров' },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <Grid
          classNameForItem="footer__column"
          columns={5}
          wideElement={3}
          wide2
        >
          <>
            <Logo className="footer__logo" />
            <Button
              className="footer__policy-button"
              href="/policy"
              label="Политика конфиденциальности"
              mode={ButtonMode.ANCHOR}
            />
          </>
          <ContactLinks
            className="footer__contact-links"
            links={contactLinks}
          />
          <NavigationMenu className="footer__navigation" items={menuItems} />
          <>
            <Button
              href="/consult"
              label="Заказать консультацию"
              mode={ButtonMode.ANCHOR}
            />
            <p>Остались вопросы? Напишите нам на почту</p>
          </>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
