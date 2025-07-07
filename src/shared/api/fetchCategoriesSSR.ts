import { getApiBaseUrl } from '@shared/lib/getApiBaseUrl'
import type { Category } from '@/entities/category/model/types'

export const fetchCategoriesSSR = async (): Promise<Category[]> => {
  const response = await fetch(`${getApiBaseUrl()}/categories`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }

  return response.json()
}
