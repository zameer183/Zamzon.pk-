'use client'

import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'
import { CartItem, Product } from '@/types'
import DeliveryFormModal from './DeliveryFormModal'

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

interface DeliveryFormState {
  isOpen: boolean
  product: Product | null
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

interface CartContextType {
  state: CartState
  deliveryForm: DeliveryFormState
  addToCart: (product: Product, quantity?: number, options?: { color?: string; size?: string }) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  openDeliveryForm: (product: Product, quantity?: number, options?: { color?: string; size?: string }) => void
  closeDeliveryForm: () => void
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; options?: { color?: string; size?: string } } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: { items: CartItem[] } }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, options } = action.payload
      const existingItemIndex = state.items.findIndex(
        item => item.productId === product.id &&
                item.selectedColor === options?.color &&
                item.selectedSize === options?.size
      )

      let newItems: CartItem[]

      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        const newItem: CartItem = {
          productId: product.id,
          product,
          quantity,
          selectedColor: options?.color,
          selectedSize: options?.size
        }
        newItems = [...state.items, newItem]
      }

      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount
      }
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.productId !== action.payload.productId)
      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount
      }
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload

      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { productId } })
      }

      const newItems = state.items.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount
      }
    }

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0
      }

    case 'LOAD_CART': {
      const items = action.payload.items
      const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

      return {
        items,
        total,
        itemCount
      }
    }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [deliveryForm, setDeliveryForm] = useState<DeliveryFormState>({
    isOpen: false,
    product: null,
    quantity: 1
  })

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('zamzon-cart')
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: { items: cartItems } })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('zamzon-cart', JSON.stringify(state.items))
  }, [state.items])

  const addToCart = (product: Product, quantity = 1, options?: { color?: string; size?: string }) => {
    // Instead of adding to cart, open delivery form
    openDeliveryForm(product, quantity, options)
  }

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const openDeliveryForm = (product: Product, quantity = 1, options?: { color?: string; size?: string }) => {
    setDeliveryForm({
      isOpen: true,
      product,
      quantity,
      selectedColor: options?.color,
      selectedSize: options?.size
    })
  }

  const closeDeliveryForm = () => {
    setDeliveryForm({
      isOpen: false,
      product: null,
      quantity: 1
    })
  }

  return (
    <CartContext.Provider value={{
      state,
      deliveryForm,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      openDeliveryForm,
      closeDeliveryForm
    }}>
      {children}

      {/* Delivery Form Modal */}
      {deliveryForm.isOpen && deliveryForm.product && (
        <DeliveryFormModal
          isOpen={deliveryForm.isOpen}
          onClose={closeDeliveryForm}
          product={deliveryForm.product}
          quantity={deliveryForm.quantity}
          selectedColor={deliveryForm.selectedColor}
          selectedSize={deliveryForm.selectedSize}
        />
      )}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
