'use client'

import { useEffect } from 'react'
import { useCategoryStore } from '@/entities/category/model/store'
import CategoryCard from '@/entities/category/ui/CategoryCard'
import { useProductStore } from '@/entities/product/model/store'
import ProductCard from '@/entities/product/ui/ProductCard'

export default function Home() {
  const categories = useCategoryStore((state) => state.categories)
  const fetchCategories = useCategoryStore((state) => state.fetchCategories)

  const products = useProductStore((state) => state.products)
  const fetchProducts = useProductStore((state) => state.fetchProducts)

  useEffect(() => {
    void fetchCategories()
    void fetchProducts()
  }, [fetchCategories, fetchProducts])

  return (
    <main>
      <div className="container">
        <h1 className="visually-hidden">Продажа материалов</h1>
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  )
}
