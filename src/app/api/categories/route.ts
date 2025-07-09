import { NextResponse } from 'next/server'
import { getRandomInt } from '@shared/lib/getRandomInt'

const categories = [
  {
    id: 'polyurethane',
    title: 'Полиуретановые материалы',
    subcategories: [
      { id: 'primers-impregnations', title: 'Грунты, Пропитки' },
      { id: 'paints-enamels', title: 'Эмали, Краски' },
      { id: 'putties-sealants-glues', title: 'Шпаклёвки, Герметики, Клеи' },
      { id: 'varnishes', title: 'Лаки' },
      { id: 'pu-cement-coatings', title: 'Полиуретан-цементные покрытия' },
      { id: 'pu-self-leveling-floors', title: 'Полиуретановые наливные полы' },
      { id: 'colorants-additives', title: 'Колоранты, Добавки' },
    ],
    image: `/mockImages/category/${getRandomInt(1, 5)}.png`,
  },
  {
    id: 'epoxy',
    title: 'Эпоксидные материалы',
    subcategories: [
      { id: 'primers-impregnations', title: 'Грунты, Пропитки' },
      { id: 'paints-enamels-varnishes', title: 'Эмали, Краски, Лаки' },
      { id: 'epoxy-self-leveling-floors', title: 'Эпоксидные наливные полы' },
      { id: 'putties-repair', title: 'Шпаклёвки, Рем.составы' },
      { id: 'compounds-fillers', title: 'Компаунды, Составы для заливки' },
    ],
    image: `/mockImages/category/${getRandomInt(1, 5)}.png`,
  },
  {
    id: 'anti-static',
    title: 'Антистатические покрытия',
    subcategories: [
      { id: 'primers-impregnations', title: 'Грунты, Пропитки' },
      { id: 'paints-enamels', title: 'Эмали, Краски' },
      { id: 'putties-sealants-glues', title: 'Шпаклёвки, Герметики, Клеи' },
      { id: 'varnishes', title: 'Лаки' },
      { id: 'pu-cement-coatings', title: 'Полиуретан-цементные покрытия' },
      { id: 'pu-self-leveling-floors', title: 'Полиуретановые наливные полы' },
      { id: 'colorants-additives', title: 'Колоранты, Добавки' },
    ],
    image: `/mockImages/category/${getRandomInt(1, 5)}.png`,
  },
  {
    id: 'uv-resistant',
    title: 'УФ-стойкие материалы',
    subcategories: [
      { id: 'primers-impregnations', title: 'Грунты, Пропитки' },
      { id: 'paints-enamels-varnishes', title: 'Эмали, Краски, Лаки' },
      { id: 'epoxy-self-leveling-floors', title: 'Эпоксидные наливные полы' },
      { id: 'putties-repair', title: 'Шпаклёвки, Рем.составы' },
      { id: 'compounds-fillers', title: 'Компаунды, Составы для заливки' },
    ],
    image: `/mockImages/category/${getRandomInt(1, 5)}.png`,
  },
  {
    id: 'metal-coatings',
    title: 'Покрытия для металла',
    subcategories: [
      { id: 'primers-impregnations', title: 'Грунты, Пропитки' },
      { id: 'paints-enamels', title: 'Эмали, Краски' },
      { id: 'putties-sealants-glues', title: 'Шпаклёвки, Герметики, Клеи' },
      { id: 'varnishes', title: 'Лаки' },
      { id: 'pu-cement-coatings', title: 'Полиуретан-цементные покрытия' },
      { id: 'pu-self-leveling-floors', title: 'Полиуретановые наливные полы' },
      { id: 'colorants-additives', title: 'Колоранты, Добавки' },
    ],
    image: `/mockImages/category/${getRandomInt(1, 5)}.png`,
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get('categoryId')

  if (categoryId) {
    const foundCategory = categories.find((cat) => cat.id === categoryId)
    return NextResponse.json(foundCategory)
  }

  return NextResponse.json(categories)
}
