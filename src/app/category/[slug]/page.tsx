import { notFound } from 'next/navigation'
import { categories, products } from '@/data/products-new'
import { Category, Product } from '@/types'
import React from 'react'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params

  // Find category by slug
  const category: Category | undefined = categories.find(cat => cat.slug === slug)

  if (!category) {
    // Show 404 if category not found
    notFound()
  }

  // Filter products belonging to this category
  const categoryProducts: Product[] = products.filter(
    product => product.category === slug
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{category?.name.en}</h1>
      <p className="mb-6">
        {category?.subcategories && category.subcategories.length > 0
          ? `Subcategories: ${category.subcategories.map(sub => sub.name.en).join(', ')}`
          : 'No subcategories available.'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categoryProducts.length > 0 ? (
          categoryProducts.map(product => (
            <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
              <img
                src={product.images[0]}
                alt={product.name.en}
                className="w-full h-48 object-cover mb-2"
              />
              <h2 className="text-xl font-semibold">{product.name.en}</h2>
              <p className="text-gray-700">{product.description.en}</p>
              <p className="mt-2 font-bold">Price: PKR {product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  )
}
