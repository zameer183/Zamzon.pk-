import { notFound } from 'next/navigation'
import { products } from '@/data/products-new'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name.en}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={product.name.en} className="mb-4 rounded" />
          ))}
        </div>
        <div>
          <p className="mb-4">{product.description.en}</p>
          <p className="text-xl font-semibold mb-2">Price: PKR {product.price}</p>
          <p className="text-sm text-gray-500 line-through mb-4">Original Price: PKR {product.originalPrice}</p>
          <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
          <p>Rating: {product.rating} ({product.reviewCount} reviews)</p>
        </div>
      </div>
    </div>
  )
}
