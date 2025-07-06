import './Subcategories.scss'
import type { SubCategory } from '@/entities/category/model/types'

type SubcategoriesProps = {
  title: string | undefined
  subcategories: SubCategory[] | undefined
}
// TODO: A11y
const Subcategories = (props: SubcategoriesProps) => {
  const { title, subcategories } = props

  return (
    <section className="subcategories" aria-labelledby="subcategories-title">
      <header className="subcategories__title h4" id="subcategories-title">
        {title}
      </header>
      <ul className="subcategories__list">
        {subcategories?.map((sub) => (
          <li className="subcategories__item" key={sub.id}>
            <h4 className="h6">{sub.title}</h4>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Subcategories
