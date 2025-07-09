import './page.scss'
import { fetchCategoriesSSR } from '@shared/api/fetchCategoriesSSR'
import Card from '@shared/ui/Card'
import Grid from '@shared/ui/Grid'

export default async function CatalogPage() {
  const categories = await fetchCategoriesSSR()
  const titleId = 'catalog-page'

  return (
    <section className="catalog-page container" aria-labelledby={titleId}>
      <h1 className="catalog-page__title h3" id={titleId}>
        Выберите категорию товаров
      </h1>
      <div className="catalog-page__list">
        <Grid columns={4}>
          {categories.map((category) => (
            <Card
              title={category.title}
              href={`/catalog/${category.id}`}
              imgSrc={category.image}
              mode="category"
              key={category.id}
            />
          ))}
        </Grid>
      </div>
    </section>
  )
}
