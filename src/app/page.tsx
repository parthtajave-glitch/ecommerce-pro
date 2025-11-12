import { prisma } from '@/lib/db'
import { ProductCard } from '@/components/product/ProductCard'

async function getFeaturedProducts() {
  return await prisma.product.findMany({
    where: { featured: true },
    take: 8,
    include: { collections: true }
  })
}

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Timeless Design</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our curated collection of minimalist pieces crafted for modern living.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-light text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
