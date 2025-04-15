// app/components/ui/ProductCard.jsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function ProductCard({ image, title, description, features, applications }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
      whileHover={{ y: -5 }}
      layout
    >
      <div className="flex flex-col lg:flex-row">
        <motion.div 
          className="lg:w-2/5 p-6 flex items-center justify-center bg-gray-50 relative overflow-hidden"
          layoutId={`image-container-${title}`}
        >
          <div className="relative h-64 w-full">
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-nyati-navy/10 to-transparent opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
        
        <div className="lg:w-3/5 p-6">
          <motion.h2 
            className="text-2xl font-bold mb-3 text-nyati-navy"
            layoutId={`title-${title}`}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-nyati-orange flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-nyati-navy">Features</h3>
              </div>
              <ul className="space-y-2 mb-6 md:mb-0">
                {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    <svg className="h-5 w-5 text-nyati-orange mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-nyati-green flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-nyati-navy">Applications</h3>
              </div>
              <ul className="space-y-2">
                {applications.slice(0, isExpanded ? applications.length : 3).map((application, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <svg className="h-5 w-5 text-nyati-green mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{application}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {(features.length > 3 || applications.length > 3) && (
            <motion.button 
              className="mt-4 text-nyati-orange text-sm font-medium flex items-center hover:text-nyati-navy transition-colors duration-300"
              onClick={() => setIsExpanded(!isExpanded)}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isExpanded ? (
                <>
                  Show Less
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show More
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}