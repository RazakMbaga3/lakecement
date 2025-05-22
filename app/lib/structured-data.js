import { blogConfig } from '../blog/metadata';

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

export function generateArticleSchema({
  title,
  description,
  path,
  images,
  published,
  author,
  category
}) {
  const categoryData = blogConfig.categories.find(c => c.id === category?.toLowerCase()?.replace(/\s+/g, '-'));
  const authorData = blogConfig.authors.find(a => a.id === author) || { name: author };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: images.map(image => image.startsWith('http') ? image : `https://nyaticemet.com${image}`),
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Person",
      name: authorData.name,
      ...(authorData.role && { jobTitle: authorData.role })
    },
    publisher: {
      "@type": "Organization",
      name: "Lake Cement Ltd",
      logo: {
        "@type": "ImageObject",
        url: "https://nyaticemet.com/images/lake-cement-ltd.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nyaticemet.com${path}`
    },
    articleSection: categoryData?.name || category,
    keywords: [
      "Nyati Cement",
      "Lake Cement",
      "Tanzania cement",
      "construction",
      category,
      ...(categoryData?.description?.split(' ') || [])
    ].filter(Boolean)
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": item.url,
        name: item.name
      }
    }))
  };
}

export function generateFAQSchema(questions) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    }))
  };
}

export const generateBlogPostSchema = ({
  title,
  description,
  path,
  publishDate,
  authors,
  category,
  image,
  tags = []
}) => {
  const url = `https://lakecement.co.tz/blog${path}`;
  const authorNames = authors.map(name => ({ '@type': 'Person', name }));
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image.startsWith('http') ? image : `https://lakecement.co.tz${image}`,
    url: url,
    datePublished: publishDate,
    dateModified: publishDate,
    author: authorNames,
    publisher: {
      '@type': 'Organization',
      name: 'Lake Cement Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lakecement.co.tz/images/lake-cement-ltd.png'
      }
    },
    keywords: tags.join(', '),
    articleSection: category
  };
};
