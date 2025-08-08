'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language } from '@/types'

interface LanguageContextType {
  currentLanguage: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const languages: Record<string, Language> = {
  en: { code: 'en', name: 'English', direction: 'ltr' },
  ur: { code: 'ur', name: 'اردو', direction: 'rtl' }
}

const translations = {
  en: {
    'site.title': 'Zamzon.pk - Your Online Shopping Partner',
    'site.tagline': 'Where Everything is Just a Click Away!',
    'nav.home': 'Home',
    'nav.categories': 'Categories',
    'nav.deals': 'Deals',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    'nav.account': 'Account',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'search.placeholder': 'Search products...',
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.outOfStock': 'Out of Stock',
    'product.inStock': 'In Stock',
    'product.reviews': 'Reviews',
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'footer.about': 'About Zamzon.pk',
    'footer.contact': 'Contact Us',
    'footer.support': '24/7 Customer Support',
    'footer.payment': 'Secure Payment',
    'footer.delivery': 'Fast Delivery',
    'category.all': 'All Categories',
    'filter.priceRange': 'Price Range',
    'filter.rating': 'Rating',
    'filter.brand': 'Brand',
    'filter.apply': 'Apply Filters',
    'filter.clear': 'Clear All',
    'delivery.title': 'Order Details',
    'delivery.info': 'Delivery Information',
    'delivery.fullName': 'Full Name',
    'delivery.phone': 'Mobile / WhatsApp Number',
    'delivery.city': 'City',
    'delivery.area': 'Area / Town',
    'delivery.landmark': 'Nearby Famous Place / Landmark',
    'delivery.address': 'Complete Address',
    'delivery.notes': 'Optional Notes',
    'delivery.paymentMethod': 'Payment Method',
    'delivery.cod': 'Cash on Delivery (COD)',
    'delivery.submit': 'Submit Order',
    'delivery.submitting': 'Submitting...',
    'delivery.success': 'Order Submitted!',
    'delivery.successMessage': 'Your order has been sent via email and WhatsApp. We will contact you shortly to confirm your order.',
    'delivery.cancel': 'Cancel',
    'delivery.close': 'Close'
  },
  ur: {
    'site.title': 'Zamzon.pk - آپ کا آن لائن شاپنگ ساتھی',
    'site.tagline': 'ہر چیز صرف ایک کلک کی دوری پر!',
    'nav.home': 'ہوم',
    'nav.categories': 'کیٹیگریز',
    'nav.deals': 'ڈیلز',
    'nav.contact': 'رابطہ',
    'nav.cart': 'کارٹ',
    'nav.account': 'اکاؤنٹ',
    'nav.login': 'لاگ ا��',
    'nav.register': 'رجسٹر',
    'search.placeholder': 'پروڈکٹس تلاش کریں...',
    'product.addToCart': 'کارٹ میں شامل کریں',
    'product.buyNow': 'ابھی خریدیں',
    'product.outOfStock': 'اسٹاک ختم',
    'product.inStock': 'دستیاب',
    'product.reviews': 'ریویوز',
    'cart.title': 'شاپنگ کارٹ',
    'cart.empty': 'آپ ک�� کارٹ خالی ہے',
    'cart.total': 'کل',
    'cart.checkout': 'چیک آؤٹ',
    'footer.about': 'Zamzon.pk کے بارے میں',
    'footer.contact': 'ہم سے رابطہ کریں',
    'footer.support': '24/7 کسٹمر سپورٹ',
    'footer.payment': 'محفوظ ادائیگی',
    'footer.delivery': 'تیز ڈیلیوری',
    'category.all': 'تمام کیٹیگریز',
    'filter.priceRange': 'قیمت کی حد',
    'filter.rating': 'ریٹنگ',
    'filter.brand': 'برانڈ',
    'filter.apply': 'فلٹر لگائیں',
    'filter.clear': 'صاف کریں',
    'delivery.title': 'آرڈر کی تفصیلات',
    'delivery.info': 'ڈیلیوری کی معلومات',
    'delivery.fullName': 'مکمل نام',
    'delivery.phone': 'موبائل / واٹس ایپ نمبر',
    'delivery.city': 'شہر',
    'delivery.area': 'علاقہ / قصبہ',
    'delivery.landmark': 'قریبی مشہور جگہ / نشان',
    'delivery.address': 'مکمل پتہ',
    'delivery.notes': 'اضافی نوٹس (اختیاری)',
    'delivery.paymentMethod': 'ادائیگی کا طریقہ',
    'delivery.cod': 'ڈیلیوری پر نقد ادائیگی',
    'delivery.submit': 'آرڈر بھیجیں',
    'delivery.submitting': 'بھیجا جا رہا ہے...',
    'delivery.success': 'آرڈر بھیج دیا گ��ا!',
    'delivery.successMessage': 'آپ کا آرڈر ای میل اور واٹس ایپ کے ذریعے بھیج دیا گیا ہے۔ ہم جلد ہی آپ سے رابطہ کر کے آرڈر کی تصدیق کریں گے۔',
    'delivery.cancel': 'منسوخ',
    'delivery.close': 'بند کریں'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages.en)

  useEffect(() => {
    const savedLang = localStorage.getItem('zamzon-language')
    if (savedLang && languages[savedLang]) {
      setCurrentLanguage(languages[savedLang])
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code
    document.documentElement.dir = currentLanguage.direction
    localStorage.setItem('zamzon-language', currentLanguage.code)
  }, [currentLanguage])

  const toggleLanguage = () => {
    setCurrentLanguage(current =>
      current.code === 'en' ? languages.ur : languages.en
    )
  }

  const t = (key: string): string => {
    return translations[currentLanguage.code][key] || key
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
