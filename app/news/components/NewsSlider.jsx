// app/news/components/NewsSlider.jsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export default function NewsSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative bg-white rounded-sm shadow-lg overflow-hidden">
      <div className="relative h-96 w-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={slide.image} 
              alt={slide.alt} 
              fill
              className="object-cover"
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-gray-800 rounded-smw-10 h-10 flex items-center justify-center z-10 hover:bg-white transition-colors duration-300"
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-gray-800 rounded-sm w-10 h-10 flex items-center justify-center z-10 hover:bg-white transition-colors duration-300"
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-sm transition-colors duration-300 ${index === currentSlide ? 'bg-nyati-orange' : 'bg-white/70'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}