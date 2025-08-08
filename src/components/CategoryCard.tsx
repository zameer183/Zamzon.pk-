'use client'

import React from 'react'
import Link from 'next/link'
import { Category } from '@/types'
import { useLanguage } from './LanguageProvider'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { currentLanguage } = useLanguage()

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block"
    >
      <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={category.image}
            alt={category.name[currentLanguage.code]}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
          
          {/* Category Icon */}
          {category.icon && (
            <div className="absolute top-4 left-4">
              <span className="text-2xl bg-white bg-opacity-90 p-2 rounded-full">
                {category.icon}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 text-center">
          <h3 className={`font-semibold text-gray-900 group-hover:text-primary-600 transition-colors ${
            currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'
          }`}>
            {category.name[currentLanguage.code]}
          </h3>
          
          {/* Subcategories Count */}
          {category.subcategories && category.subcategories.length > 0 && (
            <p className="text-xs text-gray-500 mt-1">
              {category.subcategories.length} {currentLanguage.code === 'en' ? 'subcategories' : 'ذیلی کیٹیگریز'}
            </p>
          )}

          {/* Hover Action */}
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm text-primary-600 font-medium">
              {currentLanguage.code === 'en' ? 'Shop Now →' : 'ابھی خریداری کریں ←'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
