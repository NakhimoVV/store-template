import { getApiBaseUrl } from '@shared/lib/getApiBaseUrl'
import type { Product } from '@/entities/product/model/types'

export const fetchProductByCategoryIdSSR = async (
  categoryId: string,
): Promise<Product[]> => {
  const response = await fetch(
    `${getApiBaseUrl()}/products?categoryId=${categoryId}`,
    {
      cache: 'no-store',
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch products by categoryId!')
  }

  return response.json()
}
