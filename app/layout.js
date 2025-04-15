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
  title: 'Lake Cement Ltd - Nyati Cement | Leaders in Cement Technology',
  description: 'Lake Cement produces cement that is stronger and lasts longer. Our Nyati Cement brand is a leading cement brand in Tanzania and neighboring countries.',
  keywords: 'Lake Cement, Nyati Cement, Tanzania cement, construction, building materials, cement technology, Dar es Salaam',
  metadataBase: new URL('https://nyaticemet.com'), // Replace with your actual domain
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