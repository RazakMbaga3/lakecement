// SEO Utilities for Nyati Cement
export const DEFAULT_SITE_NAME = 'Lake Cement Ltd - Nyati Cement';
export const DEFAULT_SITE_TITLE = 'Leaders in Cement Technology | Nyati Cement';
export const DEFAULT_SITE_DESCRIPTION = 'Lake Cement produces cement that is stronger and lasts longer. Our Nyati Cement brand is a leading cement brand in Tanzania and neighboring countries.';
export const SITE_URL = 'https://nyaticemet.com';

export function generateMetadata({ 
  title, 
  description, 
  path = '',
  type = 'website',
  images = ['/images/lake-cement-ltd.png'],
  published = null,
  modified = null,
  tags = []
}) {
  const fullTitle = title ? `${title} | ${DEFAULT_SITE_NAME}` : `${DEFAULT_SITE_TITLE} | ${DEFAULT_SITE_NAME}`;
  const fullDescription = description || DEFAULT_SITE_DESCRIPTION;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      'Lake Cement',
      'Nyati Cement',
      'Tanzania cement',
      'construction',
      'building materials',
      'cement technology',
      'Dar es Salaam',
      ...tags
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: DEFAULT_SITE_NAME,
      type,
      images: images.map(image => ({
        url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
        width: 1200,
        height: 630,
        alt: fullTitle,
      })),
      locale: 'en_US',
      ...(published && { publishedTime: published }),
      ...(modified && { modifiedTime: modified }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: images.map(image => image.startsWith('http') ? image : `${SITE_URL}${image}`),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export function generateStructuredData({ 
  type, 
  title, 
  description, 
  path = '', 
  images = [],
  published = null,
  modified = null,
  author = null,
}) {
  const url = `${SITE_URL}${path}`;
  const baseData = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case 'article':
      return {
        ...baseData,
        "@type": "Article",
        headline: title,
        description: description,
        image: images.map(image => image.startsWith('http') ? image : `${SITE_URL}${image}`),
        datePublished: published,
        dateModified: modified || published,
        author: {
          "@type": "Person",
          name: author || "Lake Cement Ltd",
        },
        publisher: {
          "@type": "Organization",
          name: "Lake Cement Ltd",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/lake-cement-ltd.png`
          }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url
        }
      };
    case 'organization':
      return {
        ...baseData,
        "@type": "Organization",
        name: "Lake Cement Ltd",
        alternateName: "Nyati Cement",
        url: SITE_URL,
        logo: `${SITE_URL}/images/lake-cement-ltd.png`,
        sameAs: [
          "https://www.linkedin.com/company/lake-cement-ltd",
          // Add other social media URLs
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+255-xxxx-xxxx",
          contactType: "customer service",
          areaServed: "TZ",
          availableLanguage: ["en", "sw"]
        }
      };
    default:
      return {
        ...baseData,
        "@type": "WebSite",
        name: DEFAULT_SITE_NAME,
        description: description || DEFAULT_SITE_DESCRIPTION,
        url: url || SITE_URL,
      };
  }
}

export function generateProductStructuredData({
  name,
  description,
  image,
  category,
  sku = '',
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    category,
    brand: {
      "@type": "Brand",
      name: "Nyati Cement"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Lake Cement Ltd"
    },
    sku,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "TZS",
      seller: {
        "@type": "Organization",
        name: "Lake Cement Ltd"
      }
    }
  };
}
