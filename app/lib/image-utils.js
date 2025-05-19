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
 * Normalize image paths to handle case sensitivity
 */
export function normalizeImagePath(path) {
  if (!path) return ''
  
  // Try different case combinations for image extensions
  const basePath = path.substring(0, path.lastIndexOf('.'))
  const extensions = ['.jpg', '.JPG', '.png', '.PNG', '.webp', '.WEBP']
  return path.replace(/\.[^/.]+$/, (ext) => {
    // Keep the original extension as first choice
    return [ext, ...extensions.filter(e => e.toLowerCase() !== ext.toLowerCase())]
      .find(e => {
        try {
          require(`public${basePath}${e}`)
          return true
        } catch {
          return false
        }
      }) || ext
  })
}

/**
 * Create placeholder content for failed images
 */
export function getImagePlaceholder(title, type = 'default') {
  const icons = {
    company: '🏢',
    csr: '🤝',
    product: '📦',
    default: '📷'
  }
  return {
    overlay: <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-90">
      <span className="text-4xl">{icons[type] || icons.default}</span>
    </div>,
    altText: `Image unavailable - ${title || 'Placeholder'}`
  }
}
