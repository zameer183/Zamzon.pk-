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
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center mb-12 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              {currentLanguage.code === 'en' ? 'Product Categories' : 'پروڈکٹ کیٹیگریز'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 text-balance">
              {currentLanguage.code === 'en' ? 'Shop by Category' : 'کیٹیگری کے ذریعے خریداری کریں'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {currentLanguage.code === 'en' 
                ? 'Discover our carefully curated collection of premium products across different categories, each selected for quality and value.'
                : 'مختلف کیٹیگریز میں ہمارے احتیاط سے منتخب کردہ پریمیم پروڈکٹس کا مجموعہ دیکھیں، ہر ایک معیار اور قدر کے لیے منتخب کیا گیا ہے۔'
              }
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 ${currentLanguage.code === 'ur' ? 'md:flex-row-reverse' : ''}`}>
            <div className="mb-6 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
                {currentLanguage.code === 'en' ? 'Featured Collection' : 'خصوصی کلیکشن'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 text-balance">
                {currentLanguage.code === 'en' ? 'Featured Products' : 'خصوصی پروڈکٹس'}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                {currentLanguage.code === 'en' 
                  ? 'Handpicked premium products that represent the best of quality, design, and value for our customers.'
                  : 'ہاتھ سے منتخب کردہ پریمیم پروڈکٹس جو ہمارے گاہکوں کے لیے معیار، ڈیزائن اور قدر کی بہترین نمائندگی کرتے ہیں۔'
                }
              </p>
            </div>
            <Link 
              href="/products" 
              className="btn-outline flex items-center space-x-2 whitespace-nowrap"
            >
              <span>{currentLanguage.code === 'en' ? 'View All Products' : 'تمام پروڈکٹس دیکھیں'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 ${currentLanguage.code === 'ur' ? 'md:flex-row-reverse' : ''}`}>
            <div className="mb-6 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-success-100 text-success-700 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {currentLanguage.code === 'en' ? 'Latest Arrivals' : 'تازہ ترین آمد'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 text-balance">
                {currentLanguage.code === 'en' ? 'New Arrivals' : 'نئے آنے والے'}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                {currentLanguage.code === 'en' 
                  ? 'Stay ahead of trends with our latest product additions, featuring the newest designs and innovations.'
                  : 'ہماری تازہ ترین پروڈکٹ اضافوں کے ساتھ رجحانات سے آگے رہیں، جن میں نئے ڈیزائن اور اختراعات شامل ہیں۔'
                }
              </p>
            </div>
            <Link 
              href="/new-arrivals" 
              className="btn-outline flex items-center space-x-2 whitespace-nowrap"
            >
              <span>{currentLanguage.code === 'en' ? 'View All New' : 'تمام نئے دیکھیں'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              {currentLanguage.code === 'en' ? 'Why Choose Zamzon.pk?' : 'Zamzon.pk کیوں منتخب کریں؟'}
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              {currentLanguage.code === 'en' 
                ? 'Experience the difference with our commitment to quality, service, and customer satisfaction.'
                : 'معیار، خدمت، اور گاہک کی اطمینان کے لیے ہماری وابستگی کے ساتھ فرق کا تجربہ کریں۔'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H15a2 2 0 012 2v0M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentLanguage.code === 'en' ? 'Free Delivery' : 'مفت ڈیلیوری'}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {currentLanguage.code === 'en' 
                  ? 'Free nationwide delivery on orders above Rs. 2,000 with fast and reliable service.'
                  : '2000 روپے سے زیادہ کے آرڈر پر تیز اور قابل اعتماد سروس کے ساتھ مفت ملک گیر ڈیلیوری۔'
                }
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentLanguage.code === 'en' ? 'Secure Payment' : 'محفوظ ادائیگی'}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {currentLanguage.code === 'en' 
                  ? 'Multiple secure payment options including EasyPaisa, JazzCash, and Cash on Delivery.'
                  : 'ایزی پیسہ، جاز کیش، اور کیش آن ڈیلیوری سمیت متعدد محفوظ ادائیگی کے اختیارات۔'
                }
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentLanguage.code === 'en' ? 'Easy Returns' : 'آسان واپسی'}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {currentLanguage.code === 'en' 
                  ? 'Hassle-free 7-day return policy for your peace of mind and satisfaction.'
                  : 'آپ کے ذہنی سکون اور اطمینان کے لیے 7 دن کی آسان واپسی کی پالیسی۔'
                }
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentLanguage.code === 'en' ? '24/7 Support' : '24/7 سپورٹ'}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {currentLanguage.code === 'en' 
                  ? 'Round-the-clock customer support to assist you with any questions or concerns.'
                  : 'کسی بھی سوال یا تشویش میں آپ کی مدد کے لیے 24 گھنٹے کسٹمر سپورٹ۔'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            {currentLanguage.code === 'en' ? 'Start Your Shopping Journey' : 'اپنا شاپنگ سفر شروع کریں'}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            {currentLanguage.code === 'en' 
              ? 'Ready to Experience Premium Shopping?' 
              : 'پریمیم شاپنگ کا تجربہ کرنے کے لیے تیار ہیں؟'
            }
          </h2>
          <p className="text-xl text-secondary-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            {currentLanguage.code === 'en' 
              ? 'Join thousands of satisfied customers who trust Zamzon.pk for quality products, competitive prices, and exceptional service.'
              : 'ہزاروں مطمئن گاہکوں میں شامل ہوں جو معیاری پروڈکٹس، مسابقتی قیمتوں، اور بہترین سروس کے لیے Zamzon.pk پر بھروسہ کرتے ہیں۔'
            }
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center ${currentLanguage.code === 'ur' ? 'sm:flex-row-reverse' : ''}`}>
            <Link href="/categories" className="inline-flex items-center justify-center bg-white text-secondary-600 hover:bg-neutral-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-large hover:shadow-xl transform hover:-translate-y-1">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              {currentLanguage.code === 'en' ? 'Browse Categories' : 'کیٹیگریز دیکھیں'}
            </Link>
            <Link href="/deals" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-secondary-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
              {currentLanguage.code === 'en' ? 'View Special Deals' : 'خصوصی ڈیلز دیکھیں'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}