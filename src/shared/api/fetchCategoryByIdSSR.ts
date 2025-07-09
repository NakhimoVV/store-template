import { getApiBaseUrl } from '@shared/lib/getApiBaseUrl'
import type { Category } from '@/entities/category/model/types'

export async function fetchCategoryByIdSSR(
  categoryId: string,
): Promise<Category | null> {
  const response = await fetch(
    `${getApiBaseUrl()}/categories?categoryId=${categoryId}`,
    {
      cache: 'no-store',
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch category by Id!')
  }

  return response.json()
}
