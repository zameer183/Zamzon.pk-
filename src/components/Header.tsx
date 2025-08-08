'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'
import { useCart } from './CartProvider'
import { categories } from '@/data/products'

export default function Header() {
  const { currentLanguage, toggleLanguage, t } = useLanguage()
  const { state } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`flex items-center space-x-4 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <span>📞 0325-6044582</span>
            <span>✉️ mehsoodkhan41@gmail.com</span>
          </div>
          <div className={`flex items-center space-x-2 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <span className="text-xs">{t('footer.support')}</span>
            <span>🕐 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">🛍️</span>
              <div className="ml-2">
                <h1 className="text-xl font-bold text-gray-900">Zamzon.pk</h1>
                <p className="text-xs text-gray-500 -mt-1">
                  {currentLanguage.code === 'en' ? 'Your Shopping Partner' : 'آپ کا شاپنگ ساتھی'}
                </p>
              </div>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search.placeholder')}
                className={`flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-r-lg transition-colors"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className={`flex items-center space-x-4 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <span className="text-sm font-medium">
                {currentLanguage.code === 'en' ? '🇵🇰 اردو' : '🇺🇸 English'}
              </span>
            </button>

            {/* Cart Info */}
            <div className="relative flex items-center space-x-2 text-gray-700">
              <span className="text-xl">🛒</span>
              <span className="hidden sm:inline text-sm font-medium">{t('nav.cart')}</span>
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </div>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            >
              <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            >
              <span className="text-xl">🔍</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search.placeholder')}
                className={`flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                🔍
              </button>
            </form>
          </div>
        )}

        {/* Navigation - Desktop */}
        <nav className="hidden md:block border-t border-gray-200">
          <div className={`flex items-center space-x-8 py-4 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.home')}
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
                {t('nav.categories')} <span className="ml-1">▼</span>
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <Link
                    href="/categories"
                    className="block py-2 text-sm text-primary-600 font-medium hover:text-primary-700"
                  >
                    {t('category.all')}
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="block py-2 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      {category.name[currentLanguage.code]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/deals"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.deals')} 🔥
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-2">
            <Link
              href="/"
              className="block py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>

            <div className="py-3 border-b border-gray-100">
              <span className="text-gray-700 font-medium">{t('nav.categories')}</span>
              <div className="ml-4 mt-2">
                <Link
                  href="/categories"
                  className="block py-1 text-sm text-primary-600 font-medium hover:text-primary-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('category.all')}
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="block py-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name[currentLanguage.code]}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/deals"
              className="block py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.deals')} ��
            </Link>

            <Link
              href="/contact"
              className="block py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>


          </nav>
        </div>
      )}
    </header>
  )
}
