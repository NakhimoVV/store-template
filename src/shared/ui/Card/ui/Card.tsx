import './Card.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Button from '@shared/ui/Button'

type CardProps = {
  mode?: 'product' | 'category'
  title: string
  imgSrc?: string
  href?: string
  price?: number
}

const Card = (props: CardProps) => {
  const { mode, title, imgSrc, href, price } = props

  return (
    <div
      className={clsx('card', {
        [`card--${mode}`]: mode,
      })}
    >
      <header className="card__header">
        {imgSrc && (
          <Image
            className="card__image"
            src={imgSrc}
            alt=""
            width={240}
            height={200}
          />
        )}
        <h2 className="card__title h5">{title}</h2>
        {price && <p className="card__price">{price}</p>}
      </header>
      {href && <Button className="card__button" label="Перейти" href={href} />}
      {price && <Button type={'button'} label="В корзину" />}
    </div>
  )
}

export default Card
