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
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
      title: {
        en: 'Welcome to Zamzon.pk',
        ur: 'Zamzon.pk میں خوش آمدید'
      },
      subtitle: {
        en: 'Your Online Shopping Partner',
        ur: 'آپ کا آن لائن شاپنگ ساتھی'
      },
      description: {
        en: 'Discover amazing deals on fashion, electronics, beauty products and more!',
        ur: 'فیشن، الیکٹرانکس، بیوٹی پروڈکٹس اور مزید پر شاندار ڈیلز دریافت کریں!'
      },
      cta: {
        en: 'Shop Now',
        ur: 'ابھی خریداری کریں'
      },
      link: '/categories'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
      title: {
        en: 'Free Delivery Nationwide',
        ur: 'پورے ملک میں مفت ڈیلیوری'
      },
      subtitle: {
        en: 'On orders above Rs. 2000',
        ur: '2000 روپے سے زیادہ کے آرڈر پر'
      },
      description: {
        en: 'Fast and reliable delivery to your doorstep across Pakistan',
        ur: 'پورے پاکستان میں آپ کے گھر تک تیز اور قابل اعتماد ڈیلیوری'
      },
      cta: {
        en: 'Learn More',
        ur: 'مزید جانیں'
      },
      link: '/delivery-info'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=600&fit=crop',
      title: {
        en: 'Secure Payment Options',
        ur: 'محفوظ ادائیگی کے طریقے'
      },
      subtitle: {
        en: 'EasyPaisa | JazzCash | COD',
        ur: 'ایزی پیسہ | جاز کیش | کیش آن ڈیلیوری'
      },
      description: {
        en: 'Multiple secure payment options for your convenience',
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
    }, 5000)

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
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentSlideData.image})` 
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-2xl ${currentLanguage.code === 'ur' ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'}`}>
            <div className="animate-fade-in">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight ${
                currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'
              }`}>
                {currentSlideData.title[currentLanguage.code]}
              </h1>
              
              <h2 className={`text-xl md:text-2xl lg:text-3xl text-primary-200 mb-6 ${
                currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'
              }`}>
                {currentSlideData.subtitle[currentLanguage.code]}
              </h2>
              
              <p className={`text-lg md:text-xl text-gray-200 mb-8 leading-relaxed ${
                currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'
              }`}>
                {currentSlideData.description[currentLanguage.code]}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 ${currentLanguage.code === 'ur' ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  href={currentSlideData.link}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                >
                  {currentSlideData.cta[currentLanguage.code]}
                </Link>
                
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                >
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
          currentLanguage.code === 'ur' ? 'right-4' : 'left-4'
        } bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 z-20`}
      >
        <span className="text-xl">{currentLanguage.code === 'ur' ? '→' : '←'}</span>
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          currentLanguage.code === 'ur' ? 'left-4' : 'right-4'
        } bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 z-20`}
      >
        <span className="text-xl">{currentLanguage.code === 'ur' ? '←' : '→'}</span>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Floating Features */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <span className="text-2xl">🚚</span>
              <p className="text-xs text-gray-600 mt-1">
                {currentLanguage.code === 'en' ? 'Fast Delivery' : 'تیز ڈیلیوری'}
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl">🔒</span>
              <p className="text-xs text-gray-600 mt-1">
                {currentLanguage.code === 'en' ? 'Secure' : 'محفوظ'}
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl">💰</span>
              <p className="text-xs text-gray-600 mt-1">
                {currentLanguage.code === 'en' ? 'Best Prices' : 'بہترین قیمت'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
