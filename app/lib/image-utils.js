export function getImageMetadata(imageUrl) {
  const imageMetadata = {
    alt: '',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  };

  // Map different image paths to their metadata
  const imagePatterns = {
    'blog': {
      alt: 'Nyati Cement Blog Article',
      width: 1200,
      height: 630,
    },
    'products': {
      alt: 'Nyati Cement Product',
      width: 800,
      height: 600,
    },
    'news': {
      alt: 'Nyati Cement News',
      width: 1200,
      height: 630,
    },
    'aboutus': {
      alt: 'About Lake Cement Ltd',
      width: 1920,
      height: 1080,
    },
  };

  // Find matching pattern and return its metadata
  for (const [pattern, metadata] of Object.entries(imagePatterns)) {
    if (imageUrl.includes(pattern)) {
      return { ...imageMetadata, ...metadata };
    }
  }

  return imageMetadata;
}

export function generateSrcSet(basePath, formats = ['jpg', 'webp']) {
  const widths = [640, 750, 828, 1080, 1200, 1920, 2048];
  const srcSet = [];

  for (const format of formats) {
    const formatSrcSet = widths
      .map(w => `${basePath}-${w}.${format} ${w}w`)
      .join(', ');
    srcSet.push({ format, srcSet: formatSrcSet });
  }

  return srcSet;
}

export function generatePlaceholder(width, height, bgColor = '#f3f4f6') {
  // Generate SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
    </svg>
  `;
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function getImageDimensions(imageType) {
  const dimensions = {
    thumbnail: { width: 150, height: 150 },
    preview: { width: 300, height: 200 },
    article: { width: 800, height: 450 },
    banner: { width: 1920, height: 600 },
    square: { width: 600, height: 600 },
    portrait: { width: 600, height: 800 },
  };

  return dimensions[imageType] || dimensions.article;
}

export function optimizeImageUrl(url, { width, height, quality = 75, format = 'webp' } = {}) {
  if (!url) return '';
  
  // If it's already an optimized URL, return as is
  if (url.includes('_next/image')) return url;

  // Add optimization parameters
  const params = new URLSearchParams();
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  if (quality) params.append('q', quality);
  if (format) params.append('fm', format);

  // Handle both absolute and relative URLs
  const baseUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_SITE_URL}${url}`;
  
  return `${baseUrl}?${params.toString()}`;
}