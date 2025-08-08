'use client'

import React, { useState, useEffect } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-medium' : 'bg-white shadow-soft'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center text-sm">
            <div className={`flex items-center space-x-6 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>0325-6044582</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>mehsoodkhan41@gmail.com</span>
              </div>
            </div>
            <div className={`flex items-center space-x-2 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs font-medium">24/7 {t('footer.support')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-large transition-all duration-300 transform group-hover:scale-105">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold gradient-text">Zamzon.pk</h1>
                <p className="text-xs text-neutral-500 -mt-1">
                  {currentLanguage.code === 'en' ? 'Your Shopping Partner' : 'آپ کا شاپنگ ساتھی'}
                </p>
              </div>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('search.placeholder')}
                  className={`w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-l-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 ${
                    currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                  }`}
                  dir={currentLanguage.direction}
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-r-xl transition-all duration-200 shadow-soft hover:shadow-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className={`flex items-center space-x-6 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden">
                {currentLanguage.code === 'en' ? (
                  <div className="w-full h-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">اردو</div>
                ) : (
                  <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">EN</div>
                )}
              </div>
              <span className="text-sm font-medium hidden sm:inline">
                {currentLanguage.code === 'en' ? 'اردو' : 'English'}
              </span>
            </button>

            {/* Cart */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50">
                <div className="relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
                  </svg>
                  {state.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-error-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-bounce-gentle">
                      {state.itemCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-sm font-medium">{t('nav.cart')}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('search.placeholder')}
                  className={`w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-l-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 ${
                    currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                  }`}
                  dir={currentLanguage.direction}
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-r-xl transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* Navigation - Desktop */}
        <nav className="hidden md:block border-t border-neutral-200">
          <div className={`flex items-center space-x-8 py-4 ${currentLanguage.code === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <Link
              href="/"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2 px-3 rounded-lg hover:bg-primary-50"
            >
              {t('nav.home')}
            </Link>

            <div className="relative group">
              <button className="text-neutral-700 hover:text-primary-600 font-medium transition-colors flex items-center py-2 px-3 rounded-lg hover:bg-primary-50">
                {t('nav.categories')} 
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute top-full left-0 w-80 bg-white shadow-large border border-neutral-200 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <Link
                    href="/categories"
                    className="block py-3 text-primary-600 font-semibold hover:text-primary-700 border-b border-neutral-100 mb-2"
                  >
                    {t('category.all')} →
                  </Link>
                  <div className="grid grid-cols-1 gap-1">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="flex items-center py-2 px-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      >
                        {category.icon && <span className="mr-3 text-lg">{category.icon}</span>}
                        <span className="text-sm">{category.name[currentLanguage.code]}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/deals"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2 px-3 rounded-lg hover:bg-primary-50 flex items-center"
            >
              {t('nav.deals')} 
              <span className="ml-1 text-error-500 animate-bounce-gentle">🔥</span>
            </Link>

            <Link
              href="/contact"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors py-2 px-3 rounded-lg hover:bg-primary-50"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 animate-slide-up">
          <nav className="container-padding py-4">
            <Link
              href="/"
              className="block py-3 text-neutral-700 hover:text-primary-600 font-medium transition-colors border-b border-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>

            <div className="py-3 border-b border-neutral-100">
              <span className="text-neutral-700 font-medium">{t('nav.categories')}</span>
              <div className="ml-4 mt-2 space-y-1">
                <Link
                  href="/categories"
                  className="block py-2 text-primary-600 font-medium hover:text-primary-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('category.all')}
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="block py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.icon && <span className="mr-2">{category.icon}</span>}
                    {category.name[currentLanguage.code]}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/deals"
              className="block py-3 text-neutral-700 hover:text-primary-600 font-medium transition-colors border-b border-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.deals')} 🔥
            </Link>

            <Link
              href="/contact"
              className="block py-3 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
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