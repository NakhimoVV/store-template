import './page.scss'
import { fetchCategoryByIdSSR } from '@shared/api/fetchCategoryByIdSSR'
import { fetchProductByCategoryIdSSR } from '@shared/api/fetchProductByCategoryIdSSR'
import Card from '@shared/ui/Card'
import Grid from '@shared/ui/Grid'

type ProductsByCategoryIdPageProps = {
  params: {
    categoryId: string
  }
}

export default async function ProductsByCategoryIdPage({
  params,
}: ProductsByCategoryIdPageProps) {
  const { categoryId } = await params

  const [products, category] = await Promise.all([
    fetchProductByCategoryIdSSR(categoryId),
    fetchCategoryByIdSSR(categoryId),
  ])

  const titleId = 'category-page'

  return (
    <section className="category-page container" aria-labelledby={titleId}>
      <h1 className="category-page__title h3" id={titleId}>
        {category ? category.title : 'Категория не найдена'}
      </h1>
      <div className="category-page__list">
        <Grid columns={4}>
          {products.map((product) => (
            <Card
              title={product.title}
              imgSrc={product.images[0]}
              price={product.price}
              mode="product"
              key={product.id}
            />
          ))}
        </Grid>
      </div>
    </section>
  )
}
