'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ApplicationRow = ({ title, description, image, darkBackground, reverse, index }) => {
  const [imageError, setImageError] = useState(false)
  
  // Generate a consistent fallback image path based on the title
  const generateFallbackImagePath = () => {
    // Convert title to kebab case for the filename
    const baseFilename = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    return `/images/products/${baseFilename}.jpg`
  }

  // Use these emoji icons as last resort fallback
  const getIconFallback = () => {
    const icons = ["🏗️", "🏢", "🧱", "🏭", "💧", "🔩", "⚒️", "🏠"]
    return icons[index % icons.length]
  }

  return (
    <motion.div 
      className={`py-6 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
        <div className="w-full md:w-1/2">
          <div className={`p-8 rounded-2xl ${darkBackground ? 'bg-nyati-navy/5' : 'bg-nyati-orange/5'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkBackground ? 'text-nyati-navy' : 'text-nyati-orange'}`}>
              {title}
            </h3>
            <p className="text-gray-700">
              {description}
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div 
            className="relative h-60 w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md"
            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            {!imageError ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-8"
                onError={(e) => {
                  console.log(`Error loading image: ${image}`);
                  
                  // Try loading a JPG version instead of SVG
                  const fallbackImg = new Image();
                  const fallbackSrc = generateFallbackImagePath();
                  
                  fallbackImg.onload = () => {
                    e.target.src = fallbackSrc;
                  };
                  
                  fallbackImg.onerror = () => {
                    // If fallback also fails, show icon
                    setImageError(true);
                  };
                  
                  fallbackImg.src = fallbackSrc;
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl bg-gray-50">
                {getIconFallback()}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ApplicationRow