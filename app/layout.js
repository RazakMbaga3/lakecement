import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from './components/ui/navbar'
import Footer from './components/ui/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata = {
  title: 'Nyati Cement | Trusted Cement for Strong and Durable Construction',
  description: 'Lake Cement produces cement that is stronger and lasts longer. Our Nyati Cement brand is a leading cement brand in Tanzania and neighboring countries.',
  keywords: 'Lake Cement, Nyati Cement, Tanzania cement, construction, building materials, cement technology, Dar es Salaam',
  metadataBase: new URL('https://lakecement.co.tz'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/favicon/web-app-manifest-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/favicon/web-app-manifest-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: [
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.png',
        color: '#F7941D' // Nyati Orange color
      }
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}