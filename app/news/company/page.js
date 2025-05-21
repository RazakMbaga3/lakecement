'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Newsletter from '@/app/components/ui/Newsletter'

export default function ProductNewsPage() {
  // State for parallax scrolling effect
  const [scrollY, setScrollY] = useState(0)
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('')
  // Ref for scroll animations
  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  })

  // Parallax and animation effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1])

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    }
  }
  // Mock data for company news
  const companyNewsArticles = [
    {
      id: 8,
      title: "Nyati Cement Engages Industry Stakeholders at the 2025 Annual Consultative Meeting for Contractors (ACM) & Exhibition",
      excerpt: "Lake Cement Ltd, the proud manufacturer of Nyati Cement, showcased its commitment to industry excellence at the 2025 Annual Consultative Meeting for Contractors (ACM) and Exhibition in Dar es Salaam, engaging with over 165 stakeholders and highlighting opportunities for sector growth.",
      date: "2025-05-16",
      image: "/images/news/acm1.jpg",
      category: "company",
      featured: true,
      tag: "Industry Event"
    },
    {
      id: 9,
      title: "Introducing Nyati Plus+: Our New Premium Cement Formula",
      excerpt: "Lake Cement proudly announces the launch of Nyati Plus+, our new premium cement formula designed for superior strength and durability. Engineered with advanced technology, Nyati Plus+ offers faster setting times and enhanced performance for demanding construction projects.",
      date: "2024-05-10",
      image: "/images/news/nyati-plus.jpg",
      category: "product",
      featured: true,
      tag: "New"
    },
    {
      id: 10,
      title: "Nyati Cement Receives Top Quality Certification",
      excerpt: "We're proud to announce that Nyati Cement has been awarded the prestigious TBS Quality Mark, recognizing our commitment to maintaining the highest standards in cement manufacturing. This certification confirms that our products meet and exceed all national quality standards.",
      date: "2024-03-18",
      image: "/images/news/quality-cert.jpg",
      category: "product",
      featured: true
    },
    {
      id: 11,
      title: "Extended Shelf Life: Nyati Cement's New Packaging Technology",
      excerpt: "Lake Cement introduces revolutionary new packaging technology that extends the shelf life of our cement products by up to 30%. The new moisture-resistant packaging ensures that Nyati Cement maintains its quality and strength even when stored for longer periods in challenging environments.",
      date: "2024-02-25",
      image: "/images/news/new-packaging.jpg",
      category: "product"
    },
    {
      id: 12,
      title: "Lake Cement Expands Product Range with Specialty Cement Solutions",
      excerpt: "Expanding our commitment to meeting diverse construction needs, Lake Cement announces the addition of three new specialty cement products to our range. These include rapid-hardening cement, sulfate-resistant cement, and masonry cement, all designed for specific construction applications.",
      date: "2023-11-15",
      image: "/images/news/specialty-cement.jpg",
      category: "product"
    }
  ];
  // Sort articles by date (newest first)
  const sortedArticles = [...companyNewsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Filter articles based on search query
  const filteredArticles = sortedArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Get featured articles
  const featuredArticles = filteredArticles.filter(article => article.featured);

  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero section with parallax effect */}
      <section className="relative h-60 md:h-72 lg:h-80 overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y, opacity }}
        >          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-nyati-orange/95 via-nyati-orange/40 to-transparent z-10"></div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute top-1/3 right-10 w-64 h-64 bg-nyati-navy/10 rounded-sm blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 10, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-3 font-futura">
                PRODUCT NEWS
              </h1>
              <div className="h-1 w-32 bg-white mb-4"></div>
              <p className="text-white/90 text-sm md:text-base max-w-xl">
                Discover our innovative cement products, improvements, and new solutions designed to meet your construction needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="pt-10 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-nyati-orange text-2xl md:text-3xl font-bold mb-4 font-futura">QUALITY & INNOVATION</h2>
            <p className="text-gray-700">
              At Lake Cement, we continuously improve our products to deliver superior strength, durability, and performance. Stay updated with our latest product innovations, enhancements, and certifications.
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-soft p-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* Search Input */}
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search product news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nyati-orange/50"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Back to all news */}
            <Link href="/news" className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-nyati-orange text-white hover:bg-nyati-orange/90">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All News
              </span>
            </Link>
          </motion.div>
          
          {/* Featured Product News */}
          {featuredArticles.length > 0 && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                <h2 className="text-2xl font-bold text-nyati-orange px-6 flex items-center font-futura">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-7-7v14" />
                  </svg>
                  FEATURED PRODUCTS
                </h2>
                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </motion.div>
                      {article.tag && (
                        <div className="absolute top-0 left-0 m-4">
                          <span className="bg-nyati-orange text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide">
                            {article.tag}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-nyati-orange group-hover:text-nyati-navy transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {article.excerpt}
                      </p>
                      {article.link ? (
                        <a 
                          href={article.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-nyati-navy font-medium hover:text-nyati-navy/80 transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`} 
                          className="inline-flex items-center text-nyati-navy font-medium hover:text-nyati-navy/80 transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* All Product News Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-orange px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                ALL PRODUCT NEWS
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      {article.tag && (
                        <div className="absolute top-0 left-0 m-3">
                          <span className="bg-nyati-orange text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                            {article.tag}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-nyati-orange group-hover:text-nyati-navy transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      {article.link ? (
                        <a 
                          href={article.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-nyati-navy font-medium hover:text-nyati-navy/80 text-sm transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`}
                          className="inline-flex items-center text-nyati-navy font-medium hover:text-nyati-navy/80 text-sm transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-gray-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No product news found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </motion.section>
          
          {/* Product Highlight Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-orange px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                PRODUCT SPOTLIGHT
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image 
                    src="/images/news/nyati-plus.jpg" 
                    alt="Nyati Plus+ Premium Cement" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-nyati-orange/10 text-nyati-orange text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide inline-block mb-4">
                    Featured Product
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-nyati-navy">Nyati Plus+ Premium Cement</h3>
                  <p className="text-gray-700 mb-6">
                    Our newest innovation, Nyati Plus+ Premium Cement, is specifically engineered for projects requiring exceptional strength and durability. With enhanced binding properties and accelerated setting time, it's the perfect choice for high-performance construction needs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Higher Strength</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Faster Setting</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Water Resistant</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Low Shrinkage</span>
                    </div>
                  </div>
                  <Link href="/products/nyati-plus" className="inline-flex items-center bg-nyati-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-nyati-orange/90 transition-colors">
                    Learn More About Nyati Plus+
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Newsletter />
          </motion.div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-nyati-navy via-nyati-orange to-nyati-navy rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  )
}