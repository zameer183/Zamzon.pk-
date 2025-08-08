'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'
import { useCart } from '@/components/CartProvider'
import { categories, products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import HeroSection from '@/components/HeroSection'

export default function HomePage() {
  const { currentLanguage, t } = useLanguage()
  const { addToCart } = useCart()

  const featuredProducts = products.filter(product => product.isFeatured)
  const newArrivals = products.filter(product => product.isNewArrival)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentLanguage.code === 'en' ? 'Shop by Category' : 'کیٹیگری کے ذریعے خریداری کریں'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {currentLanguage.code === 'en' 
                ? 'Discover our wide range of products across different categories'
                : 'مختلف کیٹیگریز میں ہمارے وسیع پروڈکٹس کا انتخاب دیکھیں'
              }
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center mb-8 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {currentLanguage.code === 'en' ? 'Featured Products' : 'خصوصی پروڈکٹس'}
              </h2>
              <p className="text-gray-600 mt-2">
                {currentLanguage.code === 'en' 
                  ? 'Handpicked products just for you'
                  : 'آپ کے لیے خاص طور پر منتخب کردہ پروڈکٹس'
                }
              </p>
            </div>
            <Link 
              href="/products" 
              className="btn-outline text-sm"
            >
              {currentLanguage.code === 'en' ? 'View All' : 'تمام دیکھیں'}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center mb-8 ${currentLanguage.code === 'ur' ? 'flex-row-reverse' : ''}`}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {currentLanguage.code === 'en' ? 'New Arrivals' : 'نئے آنے والے'}
              </h2>
              <p className="text-gray-600 mt-2">
                {currentLanguage.code === 'en' 
                  ? 'Latest products added to our collection'
                  : 'ہمارے کلیکشن میں شامل تازہ ترین پروڈکٹس'
                }
              </p>
            </div>
            <Link 
              href="/new-arrivals" 
              className="btn-outline text-sm"
            >
              {currentLanguage.code === 'en' ? 'View All' : 'تمام دیکھیں'}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {currentLanguage.code === 'en' ? 'Free Delivery' : 'مفت ڈیلیوری'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLanguage.code === 'en' 
                  ? 'Free delivery on orders above Rs. 2000'
                  : '2000 روپے سے زیادہ کے آرڈر پر مفت ڈیلیوری'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {currentLanguage.code === 'en' ? 'Secure Payment' : 'محفوظ ادائیگی'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLanguage.code === 'en' 
                  ? '100% secure payment options'
                  : '100% محفوظ ادائیگی کے طریقے'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {currentLanguage.code === 'en' ? 'Easy Returns' : 'آسان واپسی'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLanguage.code === 'en' 
                  ? '7-day return policy'
                  : '7 دن کی واپسی کی پالیسی'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {currentLanguage.code === 'en' ? '24/7 Support' : '24/7 سپورٹ'}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLanguage.code === 'en' 
                  ? 'Round the clock customer support'
                  : 'ہر وقت کسٹمر سپورٹ'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {currentLanguage.code === 'en' 
              ? 'Start Shopping Today!' 
              : 'آج ہی خریداری شروع کریں!'
            }
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            {currentLanguage.code === 'en' 
              ? 'Join thousands of satisfied customers and discover amazing deals on quality products'
              : 'ہزاروں مطمئن گاہکوں میں شامل ہوں اور معیاری پروڈکٹس پر شاندار ڈیلز دریافت کریں'
            }
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${currentLanguage.code === 'ur' ? 'sm:flex-row-reverse' : ''}`}>
            <Link href="/categories" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              {currentLanguage.code === 'en' ? 'Browse Categories' : 'کیٹیگریز دیکھیں'}
            </Link>
            <Link href="/deals" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              {currentLanguage.code === 'en' ? 'View Deals' : 'ڈیلز دیکھیں'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
