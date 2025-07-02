export type Category = {
  id: string
  title: string
  subcategories: SubCategory[]
}

export type SubCategory = Omit<Category, 'subcategories'>
