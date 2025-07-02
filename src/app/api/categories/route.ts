import { NextResponse } from 'next/server'

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
  },
]

export async function GET() {
  return NextResponse.json(categories)
}
