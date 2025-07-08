import './CatalogPage.scss'
import CategoryCard from '@/entities/category/ui/CategoryCard'
import { fetchCategoriesSSR } from '@shared/api/fetchCategoriesSSR'
import Grid from '@shared/ui/Grid'

export default async function CatalogPage() {
  const categories = await fetchCategoriesSSR()

  return (
    <section className="catalog-page container" aria-labelledby="catalog-page">
      <h1 className="catalog-page__title h3" id="catalog-page">
        Выберите категорию товаров
      </h1>
      <div className="catalog-page__list">
        <Grid columns={4}>
          {categories.map((category) => (
            <CategoryCard
              title={category.title}
              categoryId={category.id}
              imgSrc={category.image}
              key={category.id}
            />
          ))}
        </Grid>
      </div>
    </section>
  )
}
