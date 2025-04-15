'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Newsletter from '@/app/components/ui/Newsletter'

export default function CSRNewsPage() {
  // State for parallax scrolling effect
  const [scrollY, setScrollY] = useState(0)
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('')
  // State for active CSR category
  const [activeCategory, setActiveCategory] = useState('all')
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

  // CSR pillars for the category filter
  const csrPillars = [
    { id: 'all', name: 'All Initiatives', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'education', name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z' },
    { id: 'health', name: 'Healthcare', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { id: 'environment', name: 'Environment', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'community', name: 'Community', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }
  ];

  // Mock data for CSR news (filtered from main news data)
  const csrNewsArticles = [
    {
      id: 3,
      title: "Nyati Cement Donates Cement Bags for School Construction",
      excerpt: "Nyati Cement Donates 400 bags to the Bagamoyo District Commissioner for the construction of School. Showing our commitment to CSR and support for education infrastructure development in local communities.",
      date: "2024-01-25",
      image: "/images/news/5.jpg",
      category: "csr",
      pillar: "education",
      featured: true
    },
    {
      id: 5,
      title: "Lake Cement Leads Blood Donation Drive to Save Lives",
      excerpt: "Lake Cement has demonstrated corporate social responsibility through an impactful blood donation drive at our factory. The initiative aims to address the critical shortage of blood supplies in Tanzania's healthcare system and highlights our dedication to community health and wellbeing.",
      date: "2023-05-17",
      image: "/images/news/damu4.jpg",
      category: "csr",
      pillar: "health",
      link: "https://www.michuzi.co.tz/2017/05/lake-cement-yachangia-damu-katika.html"
    },
    // Add more mock CSR initiatives
    {
      id: 7,
      title: "Lake Cement Supports Local Schools with Infrastructure Improvements",
      excerpt: "As part of our ongoing commitment to education, Lake Cement has completed improvements to classrooms and sanitation facilities in three local schools, benefiting over 1,200 students in the community.",
      date: "2023-09-12",
      image: "/images/news/school-support.jpg",
      category: "csr",
      pillar: "education"
    },
    {
      id: 8,
      title: "Environmental Conservation Program Launched by Lake Cement",
      excerpt: "Lake Cement has launched a comprehensive environmental conservation program that includes tree planting, waste management initiatives, and environmental education for local communities.",
      date: "2023-08-05",
      image: "/images/news/environmental-program.jpg",
      category: "csr",
      pillar: "environment",
      featured: true
    },
    {
      id: 9,
      title: "Nyati Cement Hands Over Kigamboni Bus Terminal",
      excerpt: "Nyati Cement has officially handed over the newly constructed Kigamboni Bus Terminal to the District Commissioner. The company invested 46 million shillings in this infrastructure project, demonstrating its commitment to supporting community development.",
      date: "2022-11-08",
      image: "/images/news/kigamboni-terminal.jpg",
      category: "csr",
      pillar: "community",
      featured: true,
      link: "https://www.michuzi.co.tz/2022/11/nyati-cement-wakabidhi-stendi-ya-kigamboni.html"
    }
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...csrNewsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Filter articles based on search query and category
  const filteredArticles = sortedArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.pillar === activeCategory;
    return matchesSearch && matchesCategory;
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
        >
          <div className="absolute inset-0 bg-nyati-green opacity-90 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center z-0"></div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute top-1/3 right-10 w-64 h-64 bg-nyati-orange/10 rounded-full blur-xl"
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
                CORPORATE SOCIAL RESPONSIBILITY
              </h1>
              <div className="h-1 w-32 bg-nyati-orange mb-4"></div>
              <p className="text-white/90 text-sm md:text-base max-w-xl">
                Discover how Lake Cement is making a positive impact in our communities through sustainable and meaningful initiatives.
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
            <h2 className="text-nyati-green text-2xl md:text-3xl font-bold mb-4 font-futura">BUILDING STRONGER COMMUNITIES</h2>
            <p className="text-gray-700">
              At Lake Cement, we believe in giving back to the communities where we operate. Our corporate social responsibility initiatives focus on education, healthcare, environmental conservation, and community development. Through strategic partnerships and targeted programs, we strive to create meaningful and lasting positive impact.
            </p>
          </motion.div>
          
          {/* CSR Philosophy Section - NEW SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                OUR CSR PHILOSOPHY
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/news/community-meeting.jpg"
                    alt="Community Meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-nyati-green">Our Approach</h3>
                  <p className="text-gray-700">
                    Our CSR initiatives are guided by a commitment to sustainable development and community empowerment. We believe in creating programs that address real needs, involve local stakeholders, and deliver measurable impact. By focusing on key pillars of education, healthcare, environment, and community infrastructure, we ensure our efforts contribute to holistic development.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/news/environmental-program.jpg"
                    alt="Environmental Program"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-nyati-green">Sustainable Development Goals</h3>
                  <p className="text-gray-700">
                    Our CSR programs align with the United Nations Sustainable Development Goals (SDGs), focusing particularly on Quality Education (SDG 4), Good Health and Well-being (SDG 3), Sustainable Cities and Communities (SDG 11), and Climate Action (SDG 13). This framework helps us ensure our initiatives contribute to globally recognized development priorities.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* CSR Pillars - IMPROVED SECTION WITH CATEGORIES */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                CSR PILLARS
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nyati-green">Education</h3>
                  <p className="text-gray-700 mb-4">
                    We support education through school infrastructure improvements, learning materials, and scholarship programs, fostering knowledge and skills development in our communities.
                  </p>
                  <button 
                    onClick={() => setActiveCategory('education')}
                    className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                  >
                    View Initiatives
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nyati-green">Healthcare</h3>
                  <p className="text-gray-700 mb-4">
                    Our healthcare initiatives include blood donation drives, medical facility support, and health education campaigns to promote wellbeing in the communities we serve.
                  </p>
                  <button 
                    onClick={() => setActiveCategory('health')}
                    className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                  >
                    View Initiatives
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nyati-green">Environment</h3>
                  <p className="text-gray-700 mb-4">
                    We implement environmental conservation programs including tree planting, waste management, and sustainable manufacturing practices to protect our natural resources.
                  </p>
                  <button 
                    onClick={() => setActiveCategory('environment')}
                    className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                  >
                    View Initiatives
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nyati-green">Community</h3>
                  <p className="text-gray-700 mb-4">
                    We develop infrastructure and support programs that directly benefit local communities, improving quality of life and creating sustainable development opportunities.
                  </p>
                  <button 
                    onClick={() => setActiveCategory('community')}
                    className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                  >
                    View Initiatives
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.section>
          
          {/* Search and Filter Bar - NEW SECTION */}
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
                placeholder="Search CSR initiatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nyati-green/50"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {csrPillars.map((pillar) => (
                <button 
                  key={pillar.id}
                  onClick={() => setActiveCategory(pillar.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                    activeCategory === pillar.id 
                      ? 'bg-nyati-green text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.icon} />
                  </svg>
                  {pillar.name}
                </button>
              ))}
            </div>
            
            {/* Link to All News */}
            <Link href="/news" className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-nyati-navy text-white hover:bg-nyati-navy/90 shrink-0">
              <span className="flex items-center">
                All News
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>
          
          {/* Featured CSR Initiatives */}
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
                <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-7-7v14" />
                  </svg>
                  FEATURED INITIATIVES
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
                      <div className="absolute top-0 right-0 m-4">
                        <span className="bg-nyati-green text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide">
                          {article.pillar}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-nyati-green group-hover:text-nyati-orange transition-colors">
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
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`} 
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
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
          
          {/* All CSR Initiatives Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                {activeCategory === 'all' ? 'ALL CSR INITIATIVES' : `${csrPillars.find(p => p.id === activeCategory)?.name.toUpperCase()} INITIATIVES`}
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
                      <div className="absolute top-0 right-0 m-3">
                        <span className="bg-nyati-green text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                          {article.pillar}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-nyati-green group-hover:text-nyati-orange transition-colors">
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
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 text-sm transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`}
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 text-sm transition-colors"
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
                <h3 className="text-xl font-bold text-gray-700 mb-2">No CSR initiatives found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </motion.section>
          
          {/* Our Impact Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                OUR IMPACT
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft overflow-hidden p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">15+</h3>
                  <p className="text-gray-600">Schools Supported</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">5,000+</h3>
                  <p className="text-gray-600">Community Members Impacted</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">500+</h3>
                  <p className="text-gray-600">Blood Donations</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">10,000+</h3>
                  <p className="text-gray-600">Trees Planted</p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Get Involved - NEW SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                GET INVOLVED
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-nyati-green">Partner With Us</h3>
                  <p className="text-gray-700 mb-6">
                    At Lake Cement, we believe that meaningful social impact requires collaboration. We welcome partnerships with organizations and individuals who share our commitment to sustainable development and community empowerment.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-nyati-green/10 p-2 rounded-full mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nyati-navy">Community Organizations</h4>
                        <p className="text-gray-600 text-sm">Partner with us on local development initiatives and outreach programs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-nyati-green/10 p-2 rounded-full mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nyati-navy">Educational Institutions</h4>
                        <p className="text-gray-600 text-sm">Collaborate on skills development and educational support programs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-nyati-green/10 p-2 rounded-full mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nyati-navy">Government Agencies</h4>
                        <p className="text-gray-600 text-sm">Work together on public infrastructure and service delivery initiatives.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-nyati-green/5 p-8">
                  <h3 className="text-xl font-bold mb-4 text-nyati-green">Contact Us</h3>
                  <p className="text-gray-700 mb-6">
                    Interested in learning more about our CSR initiatives or discussing potential partnerships? Reach out to our Corporate Social Responsibility team:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-nyati-green/10 p-2 rounded-full mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nyati-navy">Email</h4>
                        <p className="text-gray-600 text-sm">csr@lakecement.co.tz</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-nyati-green/10 p-2 rounded-full mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nyati-navy">Phone</h4>
                        <p className="text-gray-600 text-sm">+255 (0) 22 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-nyati-green/10 p-2 rounded-full mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nyati-navy">Address</h4>
                        <p className="text-gray-600 text-sm">Lake Cement Ltd, Plot 1, Industrial Area, Kimbiji, Kigamboni, Dar es Salaam, Tanzania</p>
                      </div>
                    </div>
                  </div>
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
            <div className="w-32 h-1 bg-gradient-to-r from-nyati-green to-nyati-orange rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  )
}