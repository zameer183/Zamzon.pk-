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
      <div className="card card-hover overflow-hidden">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
          <img
            src={category.image}
            alt={category.name[currentLanguage.code]}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
          
          {/* Category Icon */}
          {category.icon && (
            <div className="absolute top-4 left-4">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 transform group-hover:scale-110">
                <span className="text-2xl">{category.icon}</span>
              </div>
            </div>
          )}

          {/* Category Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className={`text-white font-bold text-xl mb-2 transform transition-all duration-300 group-hover:translate-y-0 translate-y-2 ${
              currentLanguage.code === 'ur' ? 'urdu-text text-right' : 'english-text text-left'
            }`}>
              {category.name[currentLanguage.code]}
            </h3>
            
            {/* Subcategories Count */}
            {category.subcategories && category.subcategories.length > 0 && (
              <p className="text-white/80 text-sm transform transition-all duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                {category.subcategories.length} {currentLanguage.code === 'en' ? 'subcategories' : 'ذیلی کیٹیگریز'}
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 bg-gradient-to-r from-primary-50 to-primary-100 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
          {/* Hover Action */}
          <div className="flex items-center justify-between">
            <span className="text-primary-700 font-semibold text-sm group-hover:text-primary-800 transition-colors">
              {currentLanguage.code === 'en' ? 'Explore Collection' : 'کلیکشن دیکھیں'}
            </span>
            <div className="transform transition-all duration-300 group-hover:translate-x-1">
              <svg className="w-5 h-5 text-primary-600 group-hover:text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={currentLanguage.code === 'ur' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}/>
              </svg>
            </div>
          </div>

          {/* Subcategories Preview */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
              <div className="flex flex-wrap gap-1">
                {category.subcategories.slice(0, 3).map((sub, index) => (
                  <span
                    key={sub.id}
                    className="text-xs bg-white/60 text-primary-700 px-2 py-1 rounded-full"
                  >
                    {sub.name[currentLanguage.code]}
                  </span>
                ))}
                {category.subcategories.length > 3 && (
                  <span className="text-xs bg-white/60 text-primary-700 px-2 py-1 rounded-full">
                    +{category.subcategories.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}