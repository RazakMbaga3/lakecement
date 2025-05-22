export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lake Cement Ltd',
    url: 'https://lakecement.co.tz',
    logo: 'https://lakecement.co.tz/images/lake-cement-ltd.png',
    description: 'Tanzania\'s premier cement manufacturer, producing high-quality cement for construction and infrastructure development.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 384, Nyerere Road',
      addressLocality: 'Dar es Salaam',
      addressRegion: 'Dar es Salaam',
      postalCode: '78414',
      addressCountry: 'TZ'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+255-222-927-261',
      contactType: 'customer service'
    },
    sameAs: [
      'https://www.linkedin.com/company/lake-cement-limited',
      'https://twitter.com/LakeCementLtd',
      'https://www.facebook.com/LakeCementLtd'
    ]
  }
}

export const generateProductSchema = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Nyati Cement'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Lake Cement Ltd'
    },
    ...product.schema
  }
}

export const generateArticleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: article.mainImage,
    datePublished: article.date,
    dateModified: article.modifiedDate || article.date,
    author: {
      '@type': 'Organization',
      name: 'Lake Cement Ltd'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lake Cement Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lakecement.co.tz/images/lake-cement-ltd.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lakecement.co.tz/news/${article.id}`
    }
  }
}

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.href
    }))
  }
}
