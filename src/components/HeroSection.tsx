'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function HeroSection() {
  const { currentLanguage, t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80',
      title: {
        en: 'Welcome to Zamzon.pk',
        ur: 'Zamzon.pk میں خوش آمدید'
      },
      subtitle: {
        en: 'Your Trusted Online Shopping Partner',
        ur: 'آپ کا قابل اعتماد آن لائن شاپنگ ساتھی'
      },
      description: {
        en: 'Discover premium quality products with fast delivery across Pakistan',
        ur: 'پورے پاکستان میں تیز ڈیلیوری کے ساتھ اعلیٰ معیار کی مصنوعات دریافت کریں'
      },
      cta: {
        en: 'Shop Now',
        ur: 'ابھی خریداری کریں'
      },
      link: '/categories'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&q=80',
      title: {
        en: 'Free Delivery Nationwide',
        ur: 'پورے ملک میں مفت ڈیلیوری'
      },
      subtitle: {
        en: 'On orders above Rs. 2,000',
        ur: '2000 روپے سے زیادہ کے آرڈر پر'
      },
      description: {
        en: 'Fast, reliable, and secure delivery to your doorstep',
        ur: 'آپ کے گھر تک تیز، قابل اعتماد اور محفوظ ڈیلیوری'
      },
      cta: {
        en: 'Learn More',
        ur: 'مزید جانیں'
      },
      link: '/delivery-info'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1920&h=1080&fit=crop&q=80',
      title: {
        en: 'Secure Payment Options',
        ur: 'محفوظ ادائیگی کے طریقے'
      },
      subtitle: {
        en: 'EasyPaisa | JazzCash | Cash on Delivery',
        ur: 'ایزی پیسہ | جاز کیش | کیش آن ڈیلیوری'
      },
      description: {
        en: 'Multiple secure payment methods for your convenience',
        ur: 'آپ کی سہولت کے لیے متعدد محفوظ ادائیگی کے طریقے'
      },
      cta: {
        en: 'Shop Safely',
        ur: 'محفوظ خریداری'
      },
      link: '/payment-info'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform scale-105"
          style={{ 
            backgroundImage: `url(${currentSlideData.image})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto container-padding w-full">
          <div className={`max-w-3xl ${currentLanguage.code === 'ur' ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'}`}>
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <span className="text-white/90 text-sm font-medium">
                  {currentLanguage.code === 'en' ? '✨ Premium Quality Products' : '✨ اعلیٰ معیار کی مصنوعات'}
                </span>
              </div>

              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${
                currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'
              }`}>
                {currentSlideData.title[currentLanguage.code]}
              </h1>
              
              <h2 className={`text-xl md:text-2xl lg:text-3xl text-primary-200 mb-6 font-medium ${
                currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'
              }`}>
                {currentSlideData.subtitle[currentLanguage.code]}
              </h2>
              
              <p className={`text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl ${
                currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'
              }`}>
                {currentSlideData.description[currentLanguage.code]}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 ${currentLanguage.code === 'ur' ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  href={currentSlideData.link}
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-large hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>{currentSlideData.cta[currentLanguage.code]}</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white hover:text-neutral-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-md hover:backdrop-blur-none transform hover:-translate-y-1"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  {currentLanguage.code === 'en' ? 'Contact Us' : 'رابطہ کریں'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          currentLanguage.code === 'ur' ? 'right-6' : 'left-6'
        } bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={currentLanguage.code === 'ur' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}/>
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          currentLanguage.code === 'ur' ? 'left-6' : 'right-6'
        } bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={currentLanguage.code === 'ur' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}/>
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Floating Features */}
      <div className="absolute bottom-8 right-8 hidden lg:block z-20">
        <div className="glass-effect rounded-2xl p-6 shadow-large">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-success-500 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H15a2 2 0 012 2v0M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                </svg>
              </div>
              <p className="text-xs font-medium text-neutral-700">
                {currentLanguage.code === 'en' ? 'Fast Delivery' : 'تیز ڈیلیوری'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <p className="text-xs font-medium text-neutral-700">
                {currentLanguage.code === 'en' ? 'Secure' : 'محفوظ'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <p className="text-xs font-medium text-neutral-700">
                {currentLanguage.code === 'en' ? 'Best Prices' : 'بہترین قیمت'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}