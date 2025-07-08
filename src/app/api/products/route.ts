import { NextResponse } from 'next/server'
import { getRandomInt } from '@shared/lib/getRandomInt'

const categoryIds = [
  'polyurethane',
  'epoxy',
  'anti-static',
  'uv-resistant',
  'metal-coatings',
]
const subcategoryIds = [
  'primers-impregnations',
  'paints-enamels',
  'putties-sealants-glues',
  'varnishes',
  'pu-cement-coatings',
  'pu-self-leveling-floors',
  'colorants-additives',
]

const products = Array.from({ length: 5 * 20 }).map((_, i) => {
  const categoryId = categoryIds[i % categoryIds.length]
  const subcategoryId = subcategoryIds[i % subcategoryIds.length]
  const id = i + 1

  return {
    id,
    title: `Продукт ${id} - спецсостав`,
    description:
      'Специальный антикоррозионный состав для обработки металлических поверхностей. Подходит для нанесения при отрицательных температурах.',
    categoryId,
    subcategoryId,
    price: 480 + getRandomInt(0, 200),
    unit: 'руб./кг',
    packaging: ['8 кг', '18 кг', '48 кг', '180 кг'],
    images: [
      `/mockImages/product/${getRandomInt(1, 5)}.png`,
      `/mockImages/product/${getRandomInt(1, 5)}.png`,
      `/mockImages/product/${getRandomInt(1, 5)}.png`,
    ],
  }
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get('categoryId')
  const subcategoryId = searchParams.get('subcategoryId')

  let result = products

  if (categoryId) {
    result = result.filter((product) => product.categoryId === categoryId)
  }
  if (subcategoryId) {
    result = result.filter((product) => product.subcategoryId === subcategoryId)
  }

  return NextResponse.json(result)
}
