import './CategoryCard.scss'
import type { Category } from '@/entities/category/model/types'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = (props: CategoryCardProps) => {
  const { category } = props

  return (
    <div className="category-card">
      <div>{category.title}</div>
    </div>
  )
}

export default CategoryCard
