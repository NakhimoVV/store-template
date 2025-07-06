'use client'

import { useEffect } from 'react'
import { useCategoryStore } from '@/entities/category/model/store'
import CategoryCard from '@/entities/category/ui/CategoryCard'
import Grid from '@shared/ui/Grid'

const CatalogPage = () => {
  const fetchCategories = useCategoryStore((state) => state.fetchCategories)
  const categories = useCategoryStore((state) => state.categories)

  useEffect(() => {
    void fetchCategories()
  }, [fetchCategories])

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
              key={category.id}
            />
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default CatalogPage
