import { create } from 'zustand'
import type { Category } from './types'

interface CategoryStore {
  categories: Category[]
  isLoading: boolean
  setCategories: (categories: Category[]) => void
  fetchCategories: () => Promise<void>
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  isLoading: false,

  setCategories: async (categories: Category[]) => set({ categories }),

  fetchCategories: async () => {
    set({ isLoading: true })

    try {
      const response = await fetch('/api/categories')
      const categories = await response.json()
      set({ categories })
    } catch (error) {
      console.error('Ошибка загрузки категорий: ', error)
    } finally {
      set({ isLoading: false })
    }
  },
}))
