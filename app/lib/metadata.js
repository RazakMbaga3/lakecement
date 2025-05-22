export const defaultMetadata = {
  title: {
    default: 'Lake Cement Ltd - Building Tanzania\'s Future',
    template: '%s | Lake Cement Ltd'
  },
  description: 'Lake Cement Ltd is Tanzania\'s premier cement manufacturer, producing high-quality cement for construction and infrastructure development.',
  keywords: ['cement manufacturer', 'Tanzania cement', 'construction materials', 'Nyati Cement', 'infrastructure development'],
  authors: [{ name: 'Lake Cement Ltd' }],
  creator: 'Lake Cement Ltd',
  publisher: 'Lake Cement Ltd',
  metadataBase: new URL('https://lakecement.co.tz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lakecement.co.tz',
    siteName: 'Lake Cement Ltd',
    images: [
      {
        url: '/images/lake-cement-ltd.png',
        width: 1200,
        height: 630,
        alt: 'Lake Cement Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Cement Ltd - Building Tanzania\'s Future',
    description: 'Tanzania\'s premier cement manufacturer, producing high-quality cement for construction and infrastructure development.',
    images: ['/images/lake-cement-ltd.png'],
    creator: '@LakeCementLtd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  assets: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    manifest: '/manifest.json',
  }
}
