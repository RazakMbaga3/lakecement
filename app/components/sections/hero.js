// app/components/sections/hero.js
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  // State for slideshow
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Slideshow images
  const slideshowImages = [
    '/images/slideshow/1.jpeg',
    '/images/block2.png',
    '/images/slideshow/fam.webp',
    '/images/slideshow/3.jpeg',
    '/images/block1.jpg',
    '/images/slideshow/bulldozer.webp',
    '/images/img/nyati92.jpg',
    '/images/img/nyati113.jpg'
  ]

  // Effect for slideshow autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slideshowImages.length - 1 ? 0 : prevSlide + 1
      )
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [slideshowImages.length])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  }

  // Slide animation variants with crossfade effect
  const slideVariants = {
    enter: { 
      opacity: 0,
      transition: { duration: 0.8 }
    },
    center: { 
      opacity: 1,
      transition: { duration: 1.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8 }
    }
  }

  // Enhanced scale animation for product image
  const productAnimation = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.03,
      transition: { 
        duration: 0.4, 
        ease: "easeInOut"
      }
    },
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background base color to prevent white flash during transitions */}
      <div className="absolute inset-0 bg-nyati-navy z-0"></div>
      
      {/* Background Slideshow with crossfade effect */}
      <AnimatePresence mode="sync">
        <motion.div 
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <Image
            src={slideshowImages[currentSlide]}
            alt={`Slideshow image ${currentSlide + 1}`}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Animated shapes with Framer Motion */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.15, 0.05] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-nyati-orange/10 rounded-full blur-3xl"
      ></motion.div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.1, 0.03] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-nyati-orange/5 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10 py-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-white space-y-8 lg:col-span-7"
          >
            {/* Title with text shadow for better readability */}
            <div>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%),_0_0_30px_rgb(0_0_0_/_30%)]"
              >
                <span className="font-light">Innovative Technology,</span>
                <br/>
                <motion.span 
                  initial={{ color: "#fff" }}
                  animate={{ color: "#F79752" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="text-nyati-orange font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]"
                >Trusted Cement for</motion.span>
                <br/>
                <span className="font-bold">Strong <motion.span 
                  initial={{ color: "#fff" }}
                  animate={{ color: "#F79752" }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="text-nyati-orange [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]"
                >&</motion.span> Durable</span>
                <br/>
                <span className="font-bold">Construction</span>
              </motion.h1>
              
              <motion.div 
                variants={fadeInUp}
                className="space-y-4 text-lg text-gray-200 mt-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]"
              >
                <p>Building the future of Tanzania with premium quality cement products</p>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-8"
            >
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                <motion.div 
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-sm flex items-center space-x-3 border border-white/10 shadow-md"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
                    className="text-nyati-orange text-lg"
                  >✓</motion.span>
                  <span className="font-semibold text-sm">Own Clinker</span>
                </motion.div>
                
                <motion.div 
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-sm flex items-center space-x-3 border border-white/10 shadow-md"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 5, delay: 0.3 }}
                    className="text-nyati-orange text-lg"
                  >✓</motion.span>
                  <span className="font-semibold text-sm">Own Power</span>
                </motion.div>
                
                <motion.div 
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-sm flex items-center space-x-3 border border-white/10 shadow-md"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 5, delay: 0.6 }}
                    className="text-nyati-orange text-lg"
                  >✓</motion.span>
                  <span className="font-semibold text-sm">Consistent Quality</span>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center space-x-2 group bg-nyati-orange text-white px-6 hover:bg-nyati-light-grey py-3 rounded-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>CONTACT US</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 2
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>

          
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/about/certifications" 
                    className="inline-flex items-center space-x-2 group bg-nyati-navy hover:bg-white text-white px-6 py-3 rounded-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>Tests and Statutory Certifications</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 2
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Product display with improved animations */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative lg:col-span-5"
          >
            <motion.div 
              whileHover="hover"
              initial="rest"
              animate={["rest", "float"]}
              variants={productAnimation}
              className="relative h-[430px] w-full rounded-sm overflow-hidden"
            >
              {/* Glow effect behind the product */}
              <motion.div
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-sm bg-nyati-orange/20 filter blur-xl"
              />
              
              <Image
                src="/images/ALLNYATIBAGS.png"
                alt="Nyati Cement Product"
                width={400}
                height={400}
                className="object-contain relative z-10 mx-auto"
              />
            </motion.div>
            
            {/* Product info card with improved styling */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-4 -right-6 rounded-sm p-4 shadow-xl bg-gradient-to-br from-nyati-orange to-orange-300 border border-white/20"
            >
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-white text-xl font-bold mb-2 drop-shadow-sm"
              >
                Nyati Cement
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="text-white text-base font-medium drop-shadow-sm"
              >
                Tanzania's #1 choice for strength and durability
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Improved slideshow indicator dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slideshowImages.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-nyati-orange w-8 shadow-lg shadow-nyati-orange/50' : 'bg-white/50 w-2 hover:bg-white/70 hover:w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  )
}