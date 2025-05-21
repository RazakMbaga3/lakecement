'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Newsletter from '@/app/components/ui/Newsletter';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5 } 
  }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut" 
    }
  },
  hover: { 
    y: -5, 
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2 
    }
  }
};

const bulletPoint = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function EnhancedCSRPage() {
  // Refs for scroll animations
  const contentRef = useRef(null);
  const parallaxRef = useRef(null);

  // Scroll progress for parallax effect
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  // Transform for parallax movement
  const y = useTransform(parallaxProgress, [0, 1], [0, 100]);

  const csrInitiatives = [
    {
      title: "SOCIETY",
      description: "In order to build a strong relationship with the surrounding community, we provide:",
      bullets: [
        { icon: "🎓", text: "Support to <strong>education</strong>" },
        { icon: "🤝", text: "<strong>Meaningful programs</strong> through reputed NGO partners" },
        { icon: "🏥", text: "<strong>Health programs</strong> through camps" }
      ],
      image: "/images/aboutus/csr_1.png",
      altText: "School education illustration"
    },
    {
      title: "ENVIRONMENT",
      description: "In order to minimise our impact on the environment and cut pollution and waste, we have undertaken following initiatives:",
      bullets: [
        { icon: "♻️", text: "Conducting energy conservation and waste reduction campaigns" },
        { icon: "💡", text: "Substituting power guzzling bulbs and equipment with energy-efficient alternatives" },
        { icon: "🏭", text: "Procuring the coal for the power plant from local sources in order to maintain a smaller carbon footprint" }
      ],
      image: "/images/aboutus/csr_2.png",
      altText: "Environmental sustainability illustration"
    },
    {
      title: "EMPLOYEES & SUPPLIERS",
      description: "We continuously engage with our employees and suppliers in order to align their expectations with our ambitions. Here are some ways in which we maintain a mutually enriching relationship with these stakeholders:",
      bullets: [
        { icon: "🔍", text: "By being open and honest about our products, their benefit and their limitation" },
        { icon: "📋", text: "Going beyond the minimum legal requirement when dealing with employees and promoting best practice in the workplace" }
      ],
      image: "/images/aboutus/csr_3.png",
      altText: "Employees and suppliers illustration"
    }
  ];

  // News articles data
  const newsArticles = [
    {
      id: 3,
      title: "Nyati Cement Donates Cement Bags for School Construction",
      excerpt: "Nyati Cement Donates 400 bags to the Bagamoyo District Commissioner for the construction of School. Showing our commitment to CSR and support for education infrastructure development in local communities.",
      date: "2016-11-25",
      image: "/images/news/5.jpg",
      category: "csr",
      pillar: "education",
      featured: true
    },
    {
      id: 5,
      title: "Lake Cement Leads Blood Donation Drive to Save Lives",
      excerpt: "Lake Cement has demonstrated corporate social responsibility through an impactful blood donation drive at our factory. The initiative aims to address the critical shortage of blood supplies in Tanzania's healthcare system and highlights our dedication to community health and wellbeing.",
      date: "2017-05-17",
      image: "/images/news/damu4.jpg",
      category: "csr",
      pillar: "health",
      link: "https://www.michuzi.co.tz/2017/05/lake-cement-yachangia-damu-katika.html"
    },
    {
      id: 9,
      title: "Nyati Cement Hands Over Kigamboni Bus Terminal",
      excerpt: "Nyati Cement has officially handed over the newly constructed Kigamboni Bus Terminal to the District Commissioner. The company invested 46 million shillings in this infrastructure project, demonstrating its commitment to supporting community development.",
      date: "2022-11-08",
      image: "/images/news/bs3.jpg",
      category: "csr",
      pillar: "community",
      featured: true,
      link: "https://www.michuzi.co.tz/2022/11/nyati-cement-wakabidhi-stendi-ya-kigamboni.html"
    }
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...newsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
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
              src="/images/news/bs2.jpg"
              alt="Corporate Social Responsibility"
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
                <li><Link href="/about" className="hover:text-nyati-orange transition-colors">About</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><span className="text-white">CSR</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Corporate Social
              <br />
              <span className="text-nyati-orange">Responsibility</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Building stronger communities through sustainable practices and meaningful initiatives.
            </motion.p>
          </div>
        </div>
      </section>

      <main className="py-12">
        {/* CSR Initiatives Section */}
        <div className="container mx-auto px-4 max-w-6xl py-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-nyati-green mb-4">
              Our Approach to Corporate Social Responsibility
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto">
              We believe that our success is intrinsically linked to the well-being of the communities 
              we serve. Our CSR initiatives are designed to create sustainable, meaningful impact 
              across multiple dimensions of social and environmental development.
            </p>
          </motion.div>

          {/* Initiatives Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {csrInitiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                variants={cardVariant}
                whileHover="hover"
                className="bg-white rounded-xl shadow-soft overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nyati-navy mb-4">{initiative.title}</h3>
                  <p className="text-gray-700 mb-6">{initiative.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {initiative.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-2xl text-nyati-orange">{bullet.icon}</span>
                        <span 
                          className="text-gray-700" 
                          dangerouslySetInnerHTML={{ __html: bullet.text }}
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="relative h-40 w-full">
                    <Image 
                      src={initiative.image}
                      alt={initiative.altText}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Impact Stories Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 py-4"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-nyati-green mb-4">
                Our Recent Impact Stories
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Discover how we're making a difference through our ongoing corporate social 
                responsibility initiatives across education, healthcare, environment, and community development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.slice(0, 3).map((article) => (
                <motion.div 
                  key={article.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-soft overflow-hidden"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-0 right-0 m-3">
                      <span className="bg-nyati-green text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                        {article.pillar}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-2">
                      {formatDate(article.date)}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-nyati-green line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 text-sm transition-colors"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/news" 
                className="inline-flex items-center px-6 py-3 bg-nyati-green text-white rounded-lg hover:bg-nyati-green/90 transition-colors"
              >
                View All Impact Stories
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Get Involved Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white py-6"
        >
          <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-nyati-green mb-4">
              Get Involved
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We believe in the power of collective action. Join us in our mission to create 
              sustainable impact and meaningful change in the communities we serve.
            </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl shadow-soft p-8"
            >
              <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-nyati-navy mb-2">
                Partnership Opportunities
              </h3>
              <p className="text-gray-700 mb-2">
                Explore ways to collaborate with us on meaningful CSR projects. 
                We welcome partnerships that drive sustainable development and create lasting community impact.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-5 py-2 bg-nyati-orange text-white rounded-lg hover:bg-nyati-orange/90 transition-colors"
              >
                Become a Partner
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl shadow-soft p-8"
            >
              <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-nyati-navy mb-2">
                Support Our Initiatives
              </h3>
              <p className="text-gray-700 mb-2">
                Stay informed about our ongoing CSR projects and discover how you can contribute 
                to our mission of creating positive change in education, healthcare, and community development.
              </p>
              <Link 
                href="/news"
                className="inline-flex items-center px-5 py-2 bg-nyati-green text-white rounded-lg hover:bg-nyati-green/90 transition-colors"
              >
                Subscribe to Updates
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
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
          <div className="w-32 h-1 bg-gradient-to-r from-nyati-green via-nyati-orange to-nyati-navy rounded-full"></div>
        </div>
      </main>
    </div>
  )
}