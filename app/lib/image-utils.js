// Image utility functions for consistent handling across the site

/**
 * Get a fallback image based on content category
 */
export function getFallbackImage(category) {
  switch(category?.toLowerCase()) {
    case 'company':
      return '/images/news/fallback-company.jpg'
    case 'csr':
      return '/images/news/fallback-csr.jpg'
    case 'product':
      return '/images/news/fallback-product.jpg'
    default:
      return '/images/news/fallback-default.jpg'
  }
}

/**
 * Clean and normalize image path
 * Handles case sensitivity and multiple formats
 */
export function normalizeImagePath(path) {
  if (!path) return ''

  // Remove any double slashes
  path = path.replace(/\/+/g, '/')

  // Always ensure path starts with a single /
  if (!path.startsWith('/')) {
    path = '/' + path
  }

  // Get the base path without extension
  const basePath = path.substring(0, path.lastIndexOf('.'))
  
  // Define possible extensions in order of preference
  const extensions = [
    '.webp', '.WEBP',
    '.jpg', '.JPG', '.jpeg', '.JPEG',
    '.png', '.PNG'
  ]

  // For Vercel deployment, we'll just try the exact path first,
  // then try normalized lowercase version
  return {
    srcSet: [
      path, // Original path first
      basePath.toLowerCase() + path.substring(path.lastIndexOf('.')).toLowerCase(), // Lowercase version
      ...extensions.map(ext => basePath + ext) // Try all extensions
    ],
    fallback: getFallbackImage(null)
  }
}

/**
 * NextJS Image component loader for optimizing image loading
 */
export function customLoader({ src, width, quality }) {
  // Handle both local and external URLs
  if (src.startsWith('http')) {
    return src
  }
  // For local images, ensure proper path handling
  return src.startsWith('/') ? src : `/${src}`
}

/**
 * Create responsive image sizes config
 */
export function getImageSizes(type = 'default') {
  const sizes = {
    default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    hero: '100vw',
    gallery: '(max-width: 768px) 100vw, 50vw',
  }
  return sizes[type] || sizes.default
}

/**
 * Get placeholder image based on context
 */
export function getImagePlaceholder(type = 'default') {
  const placeholders = {
    company: {
      icon: '🏢',
      bgColor: 'bg-nyati-navy'
    },
    csr: {
      icon: '🤝',
      bgColor: 'bg-nyati-green'
    },
    product: {
      icon: '📦',
      bgColor: 'bg-nyati-orange'
    },
    default: {
      icon: '📷',
      bgColor: 'bg-gray-200'
    }
  }
  return placeholders[type] || placeholders.default
}
