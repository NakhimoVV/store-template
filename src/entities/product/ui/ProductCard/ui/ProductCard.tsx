import './ProductCard.scss'
import Image from 'next/image'
import type { Product } from '@/entities/product/model/types'

type ProductCardProps = {
  product: Product
}

const ProductCard = (props: ProductCardProps) => {
  const { product } = props

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <Image src={product.images[0]} width={220} height={200} alt="" />
      <p>{product.description}</p>
      <div>{product.price}</div>
    </div>
  )
}

export default ProductCard
