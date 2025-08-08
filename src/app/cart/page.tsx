'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

export default function CartPage() {
  const { currentLanguage } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <span className="text-6xl mb-4 block">🛍️</span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentLanguage.code === 'en' ? 'Instant Checkout' : 'فوری چیک آؤٹ'}
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6 text-lg">
              {currentLanguage.code === 'en'
                ? 'At Zamzon.pk, we\'ve made shopping super easy! No cart, no account needed.'
                : 'Zamzon.pk میں ہم نے خریداری کو بہت آسان بنا دیا ہے! نہ کارٹ کی ضرورت، نہ اکاؤنٹ کی۔'
              }
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentLanguage.code === 'en' ? 'How it works:' : 'یہ کیسے کام کرتا ہے:'}
              </h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">1.</span>
                  <p className="text-gray-700">
                    {currentLanguage.code === 'en'
                      ? 'Browse products and click "Add to Cart"'
                      : 'پروڈکٹس دیکھیں اور "کارٹ میں شامل کریں" ��ر کلک کریں'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">2.</span>
                  <p className="text-gray-700">
                    {currentLanguage.code === 'en'
                      ? 'Fill in your delivery details in the popup form'
                      : 'پاپ اپ فارم میں اپنی ڈیلیوری کی تفصیلات بھریں'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">3.</span>
                  <p className="text-gray-700">
                    {currentLanguage.code === 'en'
                      ? 'Submit your order - it goes directly to us via email/WhatsApp'
                      : 'اپنا آرڈر بھیجیں - یہ براہ راست ای میل/واٹس ایپ کے ذریعے ہمارے پاس آتا ہے'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">4.</span>
                  <p className="text-gray-700">
                    {currentLanguage.code === 'en'
                      ? 'Pay cash on delivery when your order arrives!'
                      : 'آرڈر پہنچنے پر نقد ادائیگی کریں!'
                    }
                  </p>
                </div>
              </div>
            </div>
            <Link href="/" className="btn-primary text-lg px-8 py-3">
              {currentLanguage.code === 'en' ? 'Start Shopping Now' : 'ابھی خریداری شروع کریں'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
