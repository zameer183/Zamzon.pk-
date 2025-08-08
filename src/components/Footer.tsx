'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { currentLanguage, t } = useLanguage()

  const contactInfo = {
    phone: '0325-6044582',
    whatsapp: '03256044582',
    email: 'mehsoodkhan41@gmail.com',
    website: 'www.Zamzon.pk'
  }

  const paymentMethods = [
    { name: 'EasyPaisa', icon: '💳' },
    { name: 'JazzCash', icon: '📱' },
    { name: 'Bank Transfer', icon: '🏦' },
    { name: 'Cash on Delivery', icon: '💰' }
  ]

  const features = [
    { 
      icon: '✅', 
      title: currentLanguage.code === 'en' ? 'Trusted Products' : 'معیاری پروڈکٹس' 
    },
    { 
      icon: '🚚', 
      title: currentLanguage.code === 'en' ? 'Fast Delivery' : 'تیز ڈیلیوری' 
    },
    { 
      icon: '🔒', 
      title: currentLanguage.code === 'en' ? 'Safe Shopping' : 'محفوظ خریداری' 
    },
    { 
      icon: '🤝', 
      title: currentLanguage.code === 'en' ? 'Friendly Support' : 'دوستانہ سپورٹ' 
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`space-y-4 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center">
              <span className="text-2xl">🛍️</span>
              <div className="ml-2">
                <h3 className="text-xl font-bold text-white">Zamzon.pk</h3>
                <p className="text-sm text-gray-300">
                  {currentLanguage.code === 'en' ? 'Your Shopping Partner' : 'آپ کا شاپنگ ساتھی'}
                </p>
              </div>
            </div>
            <p className={`text-gray-300 text-sm leading-relaxed ${currentLanguage.code === 'ur' ? 'urdu-text' : 'english-text'}`}>
              {currentLanguage.code === 'en' 
                ? 'Zamzon.pk brings you the best online shopping experience with quality products, fast delivery, and excellent customer service.'
                : 'Zamzon.pk آپ کو بہترین آن لائن شاپنگ کا تجربہ فراہم کرتا ہے معیاری پروڈکٹس، تیز ڈیلیوری، اور بہترین کسٹمر سروس کے ساتھ۔'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className={`space-y-4 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold">
              {currentLanguage.code === 'en' ? 'Quick Links' : 'فوری لنکس'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.categories')}
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.deals')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {currentLanguage.code === 'en' ? 'About Us' : 'ہمارے بارے میں'}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {currentLanguage.code === 'en' ? 'Privacy Policy' : 'پرائیویسی پالیسی'}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {currentLanguage.code === 'en' ? 'Terms & Conditions' : 'شرائط و ضوابط'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`space-y-4 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold">
              {currentLanguage.code === 'en' ? 'Contact Us' : 'رابطہ کریں'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {contactInfo.whatsapp}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <span className="text-gray-300 text-sm">{contactInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className={`space-y-4 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold">
              {currentLanguage.code === 'en' ? 'Payment Methods' : 'ادائیگی کے طریقے'}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-800 rounded-lg p-2">
                  <span className="text-lg">{method.icon}</span>
                  <span className="text-xs text-gray-300">{method.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400">
                {currentLanguage.code === 'en' 
                  ? '100% Secure & Encrypted Payments' 
                  : '100% محفوظ اور خفیہ کردہ ادائیگیاں'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-gray-800 rounded-lg p-4">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm font-medium text-gray-300">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              {currentLanguage.code === 'en' 
                ? 'Stay Updated with Latest Deals!' 
                : 'تازہ ترین ڈیلز کے ساتھ اپڈیٹ رہیں!'
              }
            </h3>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder={currentLanguage.code === 'en' ? 'Enter your email' : 'اپنا ای میل داخل کریں'}
                className={`flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-r-lg transition-colors"
              >
                {currentLanguage.code === 'en' ? 'Subscribe' : 'سبسکرائب'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className={`flex flex-col md:flex-row justify-between items-center ${currentLanguage.code === 'ur' ? 'md:flex-row-reverse' : ''}`}>
            <div className={`text-sm text-gray-400 ${currentLanguage.code === 'ur' ? 'text-right' : 'text-left'}`}>
              <p>
                © 2024 Zamzon.pk. {currentLanguage.code === 'en' ? 'All rights reserved.' : 'تمام حقوق محفوظ ہیں۔'}
              </p>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span className="text-sm text-gray-400">
                {currentLanguage.code === 'en' 
                  ? 'Shop Smart, Live Better!' 
                  : 'سمجھداری سے خریدیں، بہتر زندگی گزاریں!'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
