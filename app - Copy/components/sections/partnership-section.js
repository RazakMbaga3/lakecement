'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    id: 1,
    title: 'QUALITY CONTROL',
    image: '/images/index/img2.jpg',
    text: 'It is the quality of our products that sets us apart and cements our dominant position in the market. Our stringent quality standards conform to the guidelines prescribed by Tanzania Bureau of Standards (TBS).',
    link: '/quality-control'
  },
  {
    id: 2,
    title: 'DISTRIBUTION & SERVICE',
    image: '/images/index/img3.jpg',
    text: 'Our extensive distribution network ensures that our cement is always available to you. In addition to our products, we also provide technical support for structural and general civil engineering needs.',
    link: '/distribution-and-service'
  },
  {
    id: 3,
    title: 'SUSTAINABILITY',
    image: '/images/index/SUST.jpg',
    text: 'We are determined towards making the environment cleaner, greener and healthier. For this we have pioneered technologies and processes that reduce emissions, waste and noise.',
    link: '/sustainability'
  }
]

export default function FeaturesGrid() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, features.length)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
            entry.target.classList.remove('opacity-0')
            entry.target.classList.remove('translate-y-8')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative">
      {/* Background Texture Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/texture.webp"
          alt="Cement texture background"
          fill
          priority
          quality={85}
          className="object-cover opacity-100"
        />
        {/* Subtle overlay to enhance text readability if needed */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom relative z-10">  
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-nyati-dark-blue mb-6">
            Our Strengths
          </h2>
          <p className="text-nyati-grey text-lg">
            We pride ourselves on our commitment to quality, service, and sustainability. 
            These core strengths drive Nyati Cement forward and help us serve our customers better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              ref={el => cardRefs.current[index] = el}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nyati-dark-blue/80 to-transparent opacity-80"></div>
                <h3 className="absolute bottom-0 left-0 w-full text-xl font-bold text-white p-6 bg-gradient-to-t from-nyati-dark-blue to-transparent">
                  {feature.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-nyati-grey mb-4">
                  {feature.text}
                </p>
                <Link 
                  href={feature.link} 
                  className="text-nyati-orange font-semibold inline-flex items-center group"
                >
                  <span>Read More</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}