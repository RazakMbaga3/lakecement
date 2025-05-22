import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from './components/ui/navbar'
import Footer from './components/ui/footer'
import Script from 'next/script'
import { generateMetadata, generateStructuredData } from './lib/seo-utils'

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

export const metadata = generateMetadata({
  title: 'Leaders in Cement Technology',
  type: 'website',
  images: ['/images/lake-cement-ltd.png'],
});

export default function RootLayout({ children }) {
  const organizationSchema = generateStructuredData({ type: 'organization' });

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        {/* Google Search Console Verification - Replace with your actual verification code */}
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* PWA Tags */}
        <meta name="application-name" content="Nyati Cement" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nyati Cement" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#F97316" />
        
        {/* Favicon Tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}