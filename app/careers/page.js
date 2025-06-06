'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function CareersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data
  const slides = [
    {
      image: '/images/career1.jpg',
      title: 'Join Our Team',
      alt: 'Careers at Lake Cement'
    },
    {
      image: '/images/career2.jpg',
      title: 'Build Your Career',
      alt: 'Career Development'
    },
    {
      image: '/images/career4.jpg',
      title: 'Growth Opportunities',
      alt: 'Professional Growth'
    }
  ];

  // Handle automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Modern Design */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/career5.jpg"
              alt="Join Our Team"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/95 via-nyati-navy/40 to-transparent"></div>
          </div>

          {/* Animated Decorative Elements */}
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
          />
          
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
          />
        </motion.div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6">
              <motion.ol 
                className="flex items-center space-x-2 text-sm text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">Home</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><span className="text-white">Careers</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Shape the Future
              <br />
              <span className="text-nyati-orange">With Us</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join our dynamic team and be part of a company that's building Tanzania's future. 
              Discover exciting opportunities and grow with us.
            </motion.p>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/10">
                <div className="text-nyati-orange text-2xl font-bold mb-1">500+</div>
                <div className="text-white text-sm">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/10">
                <div className="text-nyati-orange text-2xl font-bold mb-1">15+</div>
                <div className="text-white text-sm">Departments</div>
              </div>
              <div className="hidden md:block bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/10">
                <div className="text-nyati-orange text-2xl font-bold mb-1">100%</div>
                <div className="text-white text-sm">Growth Focus</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>      <div className="container mx-auto px-4">
        {/* Main content with solid white background that extends to footer */}
        <div className="relative bg-white min-h-screen z-10 shadow-xl mt-12">
          <div className="bg-white w-full h-full">
            <main className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                  {/* Mission Statement - More compact */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 bg-white p-6 rounded-sm shadow-soft"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-sm bg-nyati-orange/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-bold text-nyati-navy">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At Lake Cement, we aim to become a key driver in Tanzania's growth by consistently delivering high quality
                      cement and by creating value for customers, business partners, shareholders and employees.
                    </p>
                  </motion.div>

                  {/* Career Values Section - Horizontal scroll for mobile, grid for desktop */}
                  <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="mb-10"
                  >
                    <div className="flex items-center mb-6">
                      <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                      <h2 className="text-xl font-bold px-4 text-nyati-navy">Join Our Team</h2>
                      <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <motion.div 
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-sm shadow-soft p-5 flex items-start hover:shadow-md transition-all duration-300"
                      >
                        <div className="mr-4 bg-blue-100 rounded-sm p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-blue-900">Innovation</h3>
                          <p className="text-gray-700 text-sm">
                            We foster a culture of innovation and continuous improvement in all aspects of our operations.
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-sm shadow-soft p-5 flex items-start hover:shadow-md transition-all duration-300"
                      >
                        <div className="mr-4 bg-blue-100 rounded-sm p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-blue-900">Teamwork</h3>
                          <p className="text-gray-700 text-sm">
                            We believe in the power of collaboration and working together to achieve common goals.
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-sm shadow-soft p-5 flex items-start hover:shadow-md transition-all duration-300"
                      >
                        <div className="mr-4 bg-blue-100 rounded-sm p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-blue-900">Excellence</h3>
                          <p className="text-gray-700 text-sm">
                            We are committed to maintaining the highest standards in everything we do.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.section>

                  {/* Image and Benefits Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
                    {/* Image Section - Compact */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="lg:col-span-5 relative rounded-sm overflow-hidden shadow-md h-80"
                    >
                      <Image 
                        src="/images/career7.jpg" 
                        alt="Graduates Together" 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-lg text-nyati-light-orange font-bold">Building Future Leaders</h3>
                        <p className="text-sm text-white/90">Our team is our greatest asset</p>
                      </div>
                    </motion.div>

                    {/* Benefits Section - Compact grid */}
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={containerVariants}
                      className="lg:col-span-7"
                    >
                      <div className="flex items-center mb-4">
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                        <h2 className="text-xl font-bold px-4 text-nyati-navy">Why Work With Us</h2>
                        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div 
                          variants={cardVariants}
                          className="bg-white rounded-sm shadow-soft p-4 flex items-start hover:shadow-md transition-all duration-300"
                        >
                          <div className="mr-3 flex-shrink-0 bg-blue-100 rounded-sm p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-base font-bold mb-1 text-blue-900">Competitive Compensation</h3>
                            <p className="text-gray-700 text-sm">Attractive salary packages and benefits that recognize your contributions.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          variants={cardVariants}
                          className="bg-white rounded-sm shadow-soft p-4 flex items-start hover:shadow-md transition-all duration-300"
                        >
                          <div className="mr-3 flex-shrink-0 bg-blue-100 rounded-sm p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-base font-bold mb-1 text-blue-900">Meaningful Work</h3>
                            <p className="text-gray-700 text-sm">Be part of Tanzania's infrastructure and development journey.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          variants={cardVariants}
                          className="bg-white rounded-sm shadow-soft p-4 flex items-start hover:shadow-md transition-all duration-300"
                        >
                          <div className="mr-3 flex-shrink-0 bg-blue-100 rounded-sm p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-base font-bold mb-1 text-blue-900">Inclusive Environment</h3>
                            <p className="text-gray-700 text-sm">A diverse workplace that values different perspectives.</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA Section - More compact */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-r from-nyati-navy to-blue-700 rounded-sm shadow-md overflow-hidden">
                      <div className="md:flex md:items-center">
                        <div className="p-6 md:p-8 md:w-2/3">
                          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Join Our Team?</h2>
                          <p className="text-blue-100 mb-4 text-sm md:text-base">
                            We are passionate about our cement. If you have desire to excel and fly high, then mail us your resume at{' '}
                            <a href="mailto:career@lakecement.co.tz" className="text-white font-semibold hover:underline">
                              career@lakecement.co.tz
                            </a>
                          </p>
                          <motion.a 
                            href="mailto:career@lakecement.co.tz" 
                            className="inline-block bg-nyati-orange text-white font-semibold px-6 py-3 rounded-sm hover:bg-nyati-navy transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Send Your Resume
                          </motion.a>
                        </div>
                        <div className="hidden md:block md:w-1/3 relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-nyati-navy/25 z-10"></div>
                          <div className="relative h-full min-h-64">
                            <Image 
                              src="/images/career8.jpg" 
                              alt="Career opportunities" 
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </main>
            </div>
            {/* Additional white space to ensure footer overlap */}
            <div className="bg-white h-32"></div>
          </div>
        </div>
      </div>
  )
}