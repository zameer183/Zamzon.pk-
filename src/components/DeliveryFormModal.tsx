'use client'

import React, { useState } from 'react'
import { useLanguage } from './LanguageProvider'
import { Product } from '@/types'

interface DeliveryFormData {
  fullName: string
  phoneNumber: string
  city: string
  area: string
  landmark: string
  completeAddress: string
  notes: string
}

interface DeliveryFormModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export default function DeliveryFormModal({
  isOpen,
  onClose,
  product,
  quantity,
  selectedColor,
  selectedSize
}: DeliveryFormModalProps) {
  const { currentLanguage, t } = useLanguage()
  const [formData, setFormData] = useState<DeliveryFormData>({
    fullName: '',
    phoneNumber: '',
    city: '',
    area: '',
    landmark: '',
    completeAddress: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`
  }

  const getTotalPrice = () => {
    return product.price * quantity
  }

  const createWhatsAppMessage = () => {
    const productName = product.name[currentLanguage.code]
    const total = getTotalPrice()

    let message = `🛍️ *New Order from Zamzon.pk*\n\n`
    message += `📦 *Product:* ${productName}\n`
    message += `💰 *Price:* ${formatPrice(product.price)}\n`
    message += `🔢 *Quantity:* ${quantity}\n`

    if (selectedColor) {
      message += `🎨 *Color:* ${selectedColor}\n`
    }
    if (selectedSize) {
      message += `📏 *Size:* ${selectedSize}\n`
    }

    message += `💵 *Total:* ${formatPrice(total)}\n\n`
    message += `👤 *Customer Details:*\n`
    message += `📝 *Name:* ${formData.fullName}\n`
    message += `📱 *Phone:* ${formData.phoneNumber}\n`
    message += `🏙️ *City:* ${formData.city}\n`
    message += `📍 *Area:* ${formData.area}\n`
    message += `🗺️ *Landmark:* ${formData.landmark}\n`
    message += `🏠 *Address:* ${formData.completeAddress}\n`

    if (formData.notes) {
      message += `📋 *Notes:* ${formData.notes}\n`
    }

    message += `\n✅ *Payment:* Cash on Delivery (COD)`

    return encodeURIComponent(message)
  }

  const createEmailBody = () => {
    const productName = product.name[currentLanguage.code]
    const total = getTotalPrice()

    let body = `New Order from Zamzon.pk\n\n`
    body += `Product Details:\n`
    body += `- Product: ${productName}\n`
    body += `- Price: ${formatPrice(product.price)}\n`
    body += `- Quantity: ${quantity}\n`

    if (selectedColor) {
      body += `- Color: ${selectedColor}\n`
    }
    if (selectedSize) {
      body += `- Size: ${selectedSize}\n`
    }

    body += `- Total: ${formatPrice(total)}\n\n`
    body += `Customer Details:\n`
    body += `- Name: ${formData.fullName}\n`
    body += `- Phone: ${formData.phoneNumber}\n`
    body += `- City: ${formData.city}\n`
    body += `- Area: ${formData.area}\n`
    body += `- Landmark: ${formData.landmark}\n`
    body += `- Complete Address: ${formData.completeAddress}\n`

    if (formData.notes) {
      body += `- Notes: ${formData.notes}\n`
    }

    body += `\nPayment Method: Cash on Delivery (COD)`

    return encodeURIComponent(body)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email and WhatsApp links
      const whatsappMessage = createWhatsAppMessage()
      const emailBody = createEmailBody()
      const emailSubject = encodeURIComponent(`New Order - ${product.name[currentLanguage.code]} - Zamzon.pk`)

      // Open email client (primary option)
      const emailLink = `mailto:mehsoodkhan41@gmail.com?subject=${emailSubject}&body=${emailBody}`
      window.open(emailLink, '_blank')

      // Also prepare WhatsApp link as backup
      const whatsappLink = `https://wa.me/923256044582?text=${whatsappMessage}`

      // Show success message with options
      setSubmitSuccess(true)

      // Auto-open WhatsApp after a delay if email doesn't work
      setTimeout(() => {
        if (confirm(currentLanguage.code === 'en'
          ? 'Email client opened. Click OK to also send via WhatsApp as backup.'
          : 'ای میل کلائنٹ کھل گیا۔ واٹس ایپ کے ذریعے بھی بھیجنے کے لیے OK دبائیں۔'
        )) {
          window.open(whatsappLink, '_blank')
        }
      }, 2000)

    } catch (error) {
      console.error('Error submitting order:', error)
      alert(currentLanguage.code === 'en'
        ? 'Error submitting order. Please try again.'
        : 'آرڈر بھیجنے میں خرابی۔ دوبارہ کوشش کریں۔'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            {t('delivery.success')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('delivery.successMessage')}
          </p>
          <button
            onClick={onClose}
            className="btn-primary"
          >
            {t('delivery.close')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            {t('delivery.title')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Product Summary */}
        <div className="p-6 border-b bg-gray-50">
          <div className="flex items-center space-x-4">
            <img
              src={product.images[0]}
              alt={product.name[currentLanguage.code]}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className={`font-semibold text-gray-900 ${
                currentLanguage.code === 'ur' ? 'urdu-text text-right' : 'english-text text-left'
              }`}>
                {product.name[currentLanguage.code]}
              </h3>
              <div className="text-sm text-gray-600 mt-1">
                {selectedColor && (
                  <span className="mr-4">
                    {currentLanguage.code === 'en' ? 'Color: ' : 'رنگ: '}{selectedColor}
                  </span>
                )}
                {selectedSize && (
                  <span>
                    {currentLanguage.code === 'en' ? 'Size: ' : 'سائز: '}{selectedSize}
                  </span>
                )}
              </div>
              <div className="text-primary-600 font-semibold mt-1">
                {formatPrice(product.price)} × {quantity} = {formatPrice(getTotalPrice())}
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t('delivery.info')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('delivery.fullName')} *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('delivery.phone')} *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="03XX-XXXXXXX"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('delivery.city')} *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('delivery.area')} *
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
            </div>

            {/* Landmark */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('delivery.landmark')} *
              </label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
            </div>

            {/* Complete Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('delivery.address')} *
              </label>
              <textarea
                name="completeAddress"
                value={formData.completeAddress}
                onChange={handleInputChange}
                required
                rows={3}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
            </div>

            {/* Optional Notes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('delivery.notes')}
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={2}
                placeholder={currentLanguage.code === 'en'
                  ? 'Any special instructions for delivery...'
                  : 'ڈیلیوری کے لیے کوئی خاص ہدایات...'
                }
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  currentLanguage.code === 'ur' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage.direction}
              />
            </div>
          </div>

          {/* Payment Method Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">
              {t('delivery.paymentMethod')}
            </h4>
            <p className="text-blue-800 text-sm">
              💰 {t('delivery.cod')}
            </p>
            <p className="text-blue-700 text-xs mt-1">
              {currentLanguage.code === 'en'
                ? 'Pay when your order arrives at your doorstep'
                : 'آرڈر پہنچنے پر ادائیگی کریں'
              }
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-outline"
            >
              {t('delivery.cancel')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-primary"
            >
              {isSubmitting ? t('delivery.submitting') : t('delivery.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
