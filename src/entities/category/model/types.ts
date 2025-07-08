export type Category = {
  id: string
  title: string
  subcategories: SubCategory[]
  image: string
}

export type SubCategory = Omit<Category, 'subcategories'>
