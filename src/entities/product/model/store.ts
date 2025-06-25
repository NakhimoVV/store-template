import { create } from 'zustand'
import type { Product } from '@/entities/product/model/types'

type ProductStore = {
  products: Product[]
  isLoading: boolean
  fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
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
}))
