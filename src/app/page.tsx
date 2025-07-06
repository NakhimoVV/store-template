'use client'

import { useEffect } from 'react'
import { useCategoryStore } from '@/entities/category/model/store'
import { useProductStore } from '@/entities/product/model/store'

export default function HomePage() {
  const fetchCategories = useCategoryStore((state) => state.fetchCategories)
  const fetchProducts = useProductStore((state) => state.fetchProducts)

  useEffect(() => {
    void fetchCategories()
    void fetchProducts()
  }, [fetchCategories, fetchProducts])

  return (
    <div className="container">
      <h1 className="visually-hidden">Продажа материалов</h1>
    </div>
  )
}
