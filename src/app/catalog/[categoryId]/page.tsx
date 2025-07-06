'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useProductStore } from '@/entities/product/model/store'
import ProductCard from '@/entities/product/ui/ProductCard'
import Grid from '@shared/ui/Grid'

const CategoryPage = () => {
  const { categoryId } = useParams() as { categoryId: string }
  const fetchProducts = useProductStore((state) => state.fetchProducts)
  const filteredProducts = useProductStore((state) => state.filteredProducts)
  const setFilteredProducts = useProductStore(
    (state) => state.setFilteredProducts,
  )

  useEffect(() => {
    void setFilteredProducts(categoryId)
    void fetchProducts()
  }, [fetchProducts, categoryId, setFilteredProducts])

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
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
      </div>
    </section>
  )
}
export default CategoryPage
