'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/types'
import { useLanguage } from './LanguageProvider'

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { currentLanguage, t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`
  }

  const calculateDiscount = () => {
    if (product.originalPrice && product.originalPrice > product.price) {
      const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100
      return Math.round(discount)
    }
    return 0
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>)
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>)
    }

    return stars
  }

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const discount = calculateDiscount()

  return (
    <div 
      className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.images[currentImageIndex]}
            alt={product.name[currentLanguage.code]}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Image Navigation */}
        {product.images.length > 1 && isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 rounded-full transition-all duration-200"
            >
              <span className="text-sm">←</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 rounded-full transition-all duration-200"
            >
              <span className="text-sm">→</span>
            </button>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNewArrival && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              {currentLanguage.code === 'en' ? 'New' : 'نیا'}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              {t('product.outOfStock')}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-2 right-2 flex flex-col space-y-1 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-colors"
            title={currentLanguage.code === 'en' ? 'Add to Wishlist' : 'پسندیدہ فہرست میں شامل کریں'}
          >
            <span className="text-red-500">♡</span>
          </button>
          <Link
            href={`/product/${product.id}`}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-colors"
            title={currentLanguage.code === 'en' ? 'Quick View' : 'فوری نظارہ'}
          >
            <span className="text-gray-600">👁</span>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Brand */}
        {product.brand && (
          <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        )}

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className={`font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors ${
            currentLanguage.code === 'ur' ? 'urdu-text text-right' : 'english-text text-left'
          }`}>
            {product.name[currentLanguage.code]}
          </h3>
        </Link>

        {/* Rating */}
        <div className={`flex items-center mb-2 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className={`text-xs text-gray-500 ${currentLanguage.code === 'ur' ? 'mr-2' : 'ml-2'}`}>
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className={`flex items-center mb-3 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
          <span className="text-lg font-bold text-primary-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={`text-sm text-gray-500 line-through ${currentLanguage.code === 'ur' ? 'mr-2' : 'ml-2'}`}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className={`flex items-center mb-3 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
            <span className={`text-xs text-gray-500 ${currentLanguage.code === 'ur' ? 'ml-2' : 'mr-2'}`}>
              {currentLanguage.code === 'en' ? 'Colors:' : 'رنگ:'}
            </span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Stock Status */}
        <div className={`text-xs mb-3 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
          {product.inStock ? (
            <span className="text-green-600 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              {t('product.inStock')} ({product.stockQuantity} {currentLanguage.code === 'en' ? 'items' : 'آئٹمز'})
            </span>
          ) : (
            <span className="text-red-600 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
              {t('product.outOfStock')}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={onAddToCart}
            disabled={!product.inStock}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              product.inStock
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            🛒 {t('product.addToCart')}
          </button>
          
          <Link
            href={`/product/${product.id}`}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            {currentLanguage.code === 'en' ? 'View' : 'دیکھیں'}
          </Link>
        </div>
      </div>
    </div>
  )
}
