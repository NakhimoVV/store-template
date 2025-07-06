import { create } from 'zustand'
import type { Product } from '@/entities/product/model/types'

type ProductStore = {
  products: Product[]
  filteredProducts: Product[]
  isLoading: boolean
  fetchProducts: () => Promise<void>
  setFilteredProducts: (categoryId: string) => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  isLoading: false,

  fetchProducts: async () => {
    set({ isLoading: true })

    try {
      const response = await fetch('/api/products')
      const products = await response.json()
      set({ products })
    } catch (error) {
      console.error('Ошибка загрузки продуктов: ', error)
    } finally {
      set({ isLoading: false })
    }
  },

  setFilteredProducts: (categoryId) => {
    const filtered = get().products.filter(
      (product: Product) => product.categoryId === categoryId,
    )
    set({ filteredProducts: filtered })
  },
}))
