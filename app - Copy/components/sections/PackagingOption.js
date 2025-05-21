'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const PackagingOption = ({ image, title, description, index }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-sm shadow-lg overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-64 w-full overflow-hidden group">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            onError={() => {
              console.log(`Error loading image: ${image}`);
              setImageError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">Image not available</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-nyati-navy mb-3">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default PackagingOption;