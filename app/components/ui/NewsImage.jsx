'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { normalizeImagePath, getImageSizes, getImagePlaceholder, customLoader } from '@/app/lib/image-utils'

export default function NewsImage({ 
  src,
  alt,
  className = '',
  priority = false,
  fill = false,
  sizes,
  category = 'default'
}) {
  const [error, setError] = useState(false)
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0)
  const { srcSet, fallback } = normalizeImagePath(src)
  
  // Reset error state when src changes
  useEffect(() => {
    setError(false)
    setCurrentSrcIndex(0)
  }, [src])

  const handleError = () => {
    if (currentSrcIndex < srcSet.length - 1) {
      setCurrentSrcIndex(prev => prev + 1)
    } else {
      setError(true)
    }
  }

  if (error) {
    const placeholder = getImagePlaceholder(category)
    return (
      <div className={`relative ${placeholder.bgColor} ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <span className="text-4xl mb-2 block">
              {placeholder.icon}
            </span>
            <span className="text-gray-600 text-sm px-2 py-1 rounded-sm bg-white bg-opacity-80">
              Image unavailable
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={srcSet[currentSrcIndex]}
        alt={alt}
        className="object-cover"
        onError={handleError}
        fill={fill}
        sizes={sizes || getImageSizes('default')}
        priority={priority}
        loader={customLoader}
      />
    </div>
  )
}
