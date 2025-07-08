import './CategoryCard.scss'
import Image from 'next/image'
import Button from '@shared/ui/Button'

type CategoryCardProps = {
  title: string
  imgSrc?: string
  categoryId: string
}

const CategoryCard = (props: CategoryCardProps) => {
  const { title, imgSrc, categoryId } = props

  return (
    <div className="category-card">
      <header className="category-card__header">
        {imgSrc && (
          <Image
            className="category-card__image"
            src={imgSrc}
            alt=""
            width={240}
            height={200}
          />
        )}
        <h2 className="category-card__title h5">{title}</h2>
      </header>
      <Button
        className="category-card__button"
        label="Перейти"
        href={`/catalog/${categoryId}`}
      />
    </div>
  )
}

export default CategoryCard
