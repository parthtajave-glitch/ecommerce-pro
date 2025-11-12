import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.images[0] || '/placeholder.jpg'}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-1 text-sm font-medium text-gray-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
