// app/news/components/NewsGallery.jsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function NewsGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="relative rounded-sm overflow-hidden shadow-md group cursor-pointer"
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="relative h-64 w-full">
            <Image 
              src={item.image} 
              alt={item.alt} 
              fill
              className="object-cover"
            />
          </div>
          
          <div className={`absolute inset-0 bg-nyati-orange/60 flex items-center justify-center transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'}`}>
            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto bg-white rounded-sm flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <h3 className="text-white font-semibold">{item.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}