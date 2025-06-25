import { NextResponse } from 'next/server'
import { getRandomInt } from '@shared/lib/getRandomInt'

const products = Array.from({ length: 5 * 20 }).map((_, i) => {
  const categories = [
    'polyurethane',
    'epoxy',
    'anti-static',
    'uv-resistant',
    'metal-coatings',
  ]
  const catIndex = Math.floor(i / 20)
  const id = i + 1

  return {
    id,
    title: `Грунт ${id} - спецсостав`,
    description:
      'Специальный антикоррозионный состав для обработки металлических поверхностей. Подходит для нанесения при отрицательных температурах.',
    categoryId: categories[catIndex],
    price: 480 + catIndex * 100 + (i % 5) * 10,
    unit: 'руб./кг',
    packaging: ['8 кг', '18 кг', '48 кг', '180 кг'],
    images: [
      `/mockImages/${getRandomInt(1, 5)}.png`,
      `/mockImages/${getRandomInt(1, 5)}.png`,
      `/mockImages/${getRandomInt(1, 5)}.png`,
    ],
  }
})

export async function GET() {
  return NextResponse.json(products)
}
