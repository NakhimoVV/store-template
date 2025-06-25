import { NextResponse } from 'next/server'

const categories = [
  { id: 'polyurethane', title: 'Полиуретановые материалы' },
  { id: 'epoxy', title: 'Эпоксидные материалы' },
  { id: 'anti-static', title: 'Антистатические покрытия' },
  { id: 'uv-resistant', title: 'УФ-стойкие материалы' },
  { id: 'metal-coatings', title: 'Покрытия для металла' },
]

export async function GET() {
  return NextResponse.json(categories)
}
