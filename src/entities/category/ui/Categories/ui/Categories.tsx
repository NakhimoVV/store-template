import './Categories.scss'
import clsx from 'clsx'
import type { Category } from '@/entities/category/model/types'

type CategoriesProps = {
  categories: Category[]
  activeCategoryId: string | null
  onHoverItem: (id: string) => void
}
// TODO: A11y
const Categories = (props: CategoriesProps) => {
  const { categories, activeCategoryId, onHoverItem } = props

  return (
    <nav className="categories" aria-label="Категории товаров">
      <header className="categories__title h4">Выберите категорию:</header>
      <ul className="categories__list">
        {categories.map((category) => (
          <li
            className={clsx('categories__item', {
              'is-active': category.id === activeCategoryId,
            })}
            key={category.id}
            onMouseEnter={() => onHoverItem(category.id)}
          >
            <h3 className="h6">{category.title}</h3>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Categories
