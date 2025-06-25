import './ContactLinks.scss'
import type { Contact } from '@shared/types'
import clsx from 'clsx'
import Icon from '@shared/ui/Icon'

type ContactLinksProps = {
  className: string
  links: Contact[]
}

const ContactLinks = (props: ContactLinksProps) => {
  const { className, links } = props
  const isFooterLocation = className === 'footer__contact-links'

  return (
    <div className={clsx(className, 'contact-links')}>
      <ul
        className={clsx('contact-links__list', {
          'contact-links__list--column': isFooterLocation,
        })}
      >
        {links.map((link) => {
          const isPhone = link.type === 'phone'
          const href = isPhone ? `tel:${link.value}` : `mailto:${link.value}`
          const iconName = isFooterLocation
            ? isPhone
              ? 'phone-for-footer'
              : 'mail-for-footer'
            : isPhone
              ? 'phone'
              : 'mail'

          return (
            <li className="contact-links__item" key={link.value}>
              <a className="contact-links__link" href={href}>
                <Icon className="contact-links__icon" name={iconName} hasFill />
                {link.label || link.value}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContactLinks
