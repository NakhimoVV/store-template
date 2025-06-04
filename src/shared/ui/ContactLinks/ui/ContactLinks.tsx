import './ContactLinks.scss'
import { Contact } from '@shared/types'
import classNames from 'classnames'

type ContactLinksProps = {
  className: string
  links: Contact[]
}

const ContactLinks = (props: ContactLinksProps) => {
  const { className, links } = props

  return (
    <div className={classNames(className, 'contact-links')}>
      <ul className="contact-links__list">
        {links.map((link) => {
          const isPhone = link.type === 'phone'
          const href = isPhone ? `tel:${link.value}` : `mailto:${link.value}`
          return (
            <li className="contact-links__item" key={link.value}>
              <a className="contact-links__link" href={href}>
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
