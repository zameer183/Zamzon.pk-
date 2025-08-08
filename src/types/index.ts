export interface Product {
  id: string
  name: {
    en: string
    ur: string
  }
  description: {
    en: string
    ur: string
  }
  price: number
  originalPrice?: number
  category: string
  subcategory?: string
  images: string[]
  inStock: boolean
  stockQuantity: number
  rating: number
  reviewCount: number
  tags: string[]
  specifications?: Record<string, string>
  isNewArrival?: boolean
  isFeatured?: boolean
  brand?: string
  colors?: string[]
  sizes?: string[]
}

export interface Category {
  id: string
  name: {
    en: string
    ur: string
  }
  slug: string
  image: string
  icon?: string
  subcategories?: Category[]
}

export interface CartItem {
  productId: string
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  addresses: Address[]
  orders: Order[]
  wishlist: string[]
  createdAt: Date
}

export interface Address {
  id: string
  type: 'home' | 'office' | 'other'
  street: string
  city: string
  state: string
  postalCode: string
  isDefault: boolean
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  shippingAddress: Address
  paymentMethod: 'easypaisa' | 'jazzcash' | 'bank_transfer' | 'cod'
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  trackingNumber?: string
  estimatedDelivery?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  images?: string[]
  helpful: number
  createdAt: Date
}

export interface Language {
  code: 'en' | 'ur'
  name: string
  direction: 'ltr' | 'rtl'
}

export interface SearchFilters {
  category?: string
  priceMin?: number
  priceMax?: number
  rating?: number
  inStock?: boolean
  sortBy?: 'price_low' | 'price_high' | 'rating' | 'newest' | 'popular'
  brand?: string[]
  colors?: string[]
  sizes?: string[]
}

export interface PaymentDetails {
  method: 'easypaisa' | 'jazzcash' | 'bank_transfer' | 'cod'
  phoneNumber?: string
  transactionId?: string
  bankDetails?: {
    accountName: string
    accountNumber: string
    bankName: string
  }
}

export interface SiteSettings {
  siteName: {
    en: string
    ur: string
  }
  logo: string
  favicon: string
  contactInfo: {
    phone: string
    whatsapp: string
    email: string
    address: {
      en: string
      ur: string
    }
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
  paymentMethods: string[]
  shippingInfo: {
    freeShippingThreshold: number
    deliveryTime: {
      en: string
      ur: string
    }
  }
}
