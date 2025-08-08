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
  const [imageLoading, setImageLoading] = useState(true)

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
      stars.push(
        <svg key={i} className="w-4 h-4 text-secondary-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <svg className="w-4 h-4 text-neutral-300 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <svg className="w-4 h-4 text-secondary-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
        </div>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-neutral-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      )
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
      className="card card-hover overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Link href={`/product/${product.id}`}>
          <div className="relative w-full h-full">
            {imageLoading && (
              <div className="absolute inset-0 shimmer rounded-t-2xl" />
            )}
            <img
              src={product.images[currentImageIndex]}
              alt={product.name[currentLanguage.code]}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
          </div>
        </Link>

        {/* Image Navigation */}
        {product.images.length > 1 && isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNewArrival && (
            <span className="bg-success-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-soft">
              {currentLanguage.code === 'en' ? 'New' : 'نیا'}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-error-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-soft">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-neutral-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-soft">
              {t('product.outOfStock')}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          <button
            className="bg-white/90 hover:bg-white text-neutral-700 hover:text-error-500 p-2 rounded-full shadow-soft hover:shadow-medium transition-all duration-200 backdrop-blur-sm"
            title={currentLanguage.code === 'en' ? 'Add to Wishlist' : 'پسندیدہ فہرست میں شامل کریں'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
          <Link
            href={`/product/${product.id}`}
            className="bg-white/90 hover:bg-white text-neutral-700 hover:text-primary-600 p-2 rounded-full shadow-soft hover:shadow-medium transition-all duration-200 backdrop-blur-sm"
            title={currentLanguage.code === 'en' ? 'Quick View' : 'فوری نظارہ'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </Link>
        </div>

        {/* Image Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrentImageIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Brand */}
        {product.brand && (
          <p className="text-xs text-neutral-500 mb-2 font-medium">{product.brand}</p>
        )}

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className={`font-semibold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors leading-snug ${
            currentLanguage.code === 'ur' ? 'urdu-text text-right' : 'english-text text-left'
          }`}>
            {product.name[currentLanguage.code]}
          </h3>
        </Link>

        {/* Rating */}
        <div className={`flex items-center mb-3 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className={`text-xs text-neutral-500 ${currentLanguage.code === 'ur' ? 'mr-2' : 'ml-2'}`}>
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className={`flex items-center mb-4 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
          <span className="text-xl font-bold text-primary-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={`text-sm text-neutral-500 line-through ${currentLanguage.code === 'ur' ? 'mr-3' : 'ml-3'}`}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className={`flex items-center mb-4 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
            <span className={`text-xs text-neutral-500 ${currentLanguage.code === 'ur' ? 'ml-3' : 'mr-3'}`}>
              {currentLanguage.code === 'en' ? 'Colors:' : 'رنگ:'}
            </span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-neutral-200 shadow-soft"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-neutral-500 ml-1">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Stock Status */}
        <div className={`text-xs mb-4 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
          {product.inStock ? (
            <div className="flex items-center text-success-600">
              <div className="w-2 h-2 bg-success-500 rounded-full mr-2 animate-pulse"></div>
              <span className="font-medium">
                {t('product.inStock')} ({product.stockQuantity} {currentLanguage.code === 'en' ? 'items' : 'آئٹمز'})
              </span>
            </div>
          ) : (
            <div className="flex items-center text-error-600">
              <div className="w-2 h-2 bg-error-500 rounded-full mr-2"></div>
              <span className="font-medium">{t('product.outOfStock')}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onAddToCart}
            disabled={!product.inStock}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
              product.inStock
                ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-soft hover:shadow-medium transform hover:-translate-y-0.5'
                : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
            </svg>
            <span>{t('product.addToCart')}</span>
          </button>
          
          <Link
            href={`/product/${product.id}`}
            className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-900 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}