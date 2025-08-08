import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import { CartProvider } from '@/components/CartProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Zamzon.pk - Your Online Shopping Partner | آپ کا آن لائن شاپنگ ساتھی',
  description: 'Shop the latest fashion, electronics, beauty products and more at Zamzon.pk. Fast delivery across Pakistan with secure payment options including EasyPaisa, JazzCash and Cash on Delivery.',
  keywords: ['online shopping Pakistan', 'ecommerce', 'fashion', 'electronics', 'beauty', 'خریداری', 'آن لائن'],
  authors: [{ name: 'Zamzon.pk' }],
  openGraph: {
    title: 'Zamzon.pk - Your Online Shopping Partner',
    description: 'Shop the latest fashion, electronics, beauty products and more at Zamzon.pk',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ur_PK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LanguageProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
