import ProductCard from '@/entities/product/ui/ProductCard'
import { fetchProductByCategoryIdSSR } from '@shared/api/fetchProductByCategoryIdSSR'
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
  const products = await fetchProductByCategoryIdSSR(categoryId)

  return (
    <section
      className="category-page container"
      aria-labelledby="category-page"
    >
      <h1 className="category-page__title" id="category-page">
        {categoryId}
      </h1>
      <div className="category-page__list">
        <Grid columns={4}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
      </div>
    </section>
  )
}
