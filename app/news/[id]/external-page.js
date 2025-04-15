'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Newsletter from '@/app/components/ui/Newsletter'

export default function ExternalNewsArticlePage({ params }) {
  // Get article ID from route parameters
  const articleId = parseInt(params.id)
  
  // Ref for scroll animations
  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  })

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

  // Mock database for articles with external links
  const externalNewsArticles = [
    {
      id: 1,
      title: "Dar es Salaam Regional Commissioner Visits Lake Cement on Workers' Day",
      excerpt: "The Dar es Salaam Regional Commissioner, Hon. Chalamila, has announced upcoming inspections of workplaces, including factories, to assess employee relations and working conditions. Lake Cement welcomed this initiative as part of our commitment to maintaining excellent labor standards.",
      date: "2024-06-15",
      image: "/images/news/RC-Chalamila.png",
      category: "company",
      externalLink: "https://www.mwananchi.co.tz/mw/habari/kitaifa/ukaguzi-wa-haki-za-wafanyakazi-viwandani-waja--4659252",
      source: "Mwananchi",
      relatedLinks: [
        {
          title: "Government Workplace Inspection Initiative",
          url: "https://www.example.com/workplace-inspections",
        },
        {
          title: "Tanzania Labor Standards Overview",
          url: "https://www.example.com/labor-standards",
        }
      ]
    },
    {
      id: 2,
      title: "RC Chalamila Conducts Tour of Kigamboni District",
      excerpt: "Dar es Salaam Regional Commissioner Albert John Chalamila conducted an extensive tour of Kigamboni District to inspect various development projects and engage with community members. During his visit, he emphasized the government's commitment to infrastructure development and public service improvement.",
      date: "2024-05-15",
      image: "/images/news/chalamila.jpg",
      category: "company",
      externalLink: "https://dsm.go.tz/new/rc-chalamila-afanya-ziara-kigamboni",
      source: "Dar es Salaam Regional Office",
      relatedLinks: [
        {
          title: "Kigamboni Development Plan",
          url: "https://www.example.com/kigamboni-development",
        },
        {
          title: "Tanzania Infrastructure Projects",
          url: "https://www.example.com/infrastructure-projects",
        }
      ]
    },
    {
      id: 5,
      title: "Lake Cement Leads Blood Donation Drive to Save Lives",
      excerpt: "Lake Cement has demonstrated corporate social responsibility through an impactful blood donation drive at our factory. The initiative aims to address the critical shortage of blood supplies in Tanzania's healthcare system and highlights our dedication to community health and wellbeing.",
      date: "2017-05-17",
      image: "/images/news/damu4.jpg",
      category: "csr",
      externalLink: "https://www.michuzi.co.tz/2017/05/lake-cement-yachangia-damu-katika.html",
      source: "Michuzi Blog",
      relatedLinks: [
        {
          title: "Tanzania Blood Donation Guidelines",
          url: "https://www.example.com/blood-donation",
        },
        {
          title: "Corporate Social Responsibility in Tanzania",
          url: "https://www.example.com/csr-tanzania",
        }
      ]
    },
    {
      id: 6,
      title: "Prime Minister Majaliwa Assures Lake Cement of Government Support",
      excerpt: "During his visit to Lake Cement's state-of-the-art factory, Prime Minister Kassim Majaliwa praised our production quality and affirmed the government's commitment to supporting local manufacturers. The PM emphasized the importance of private sector investment in strengthening Tanzania's industrial capacity.",
      date: "2021-03-27",
      image: "/images/news/PM-Majaliwa.png",
      category: "company",
      externalLink: "https://www.thecitizen.co.tz/tanzania/business/majaliwa-assures-investors-of-government-cooperation-2596696",
      source: "The Citizen",
      relatedLinks: [
        {
          title: "Tanzania Industrial Development Strategy",
          url: "https://www.example.com/industrial-strategy",
        },
        {
          title: "Government Support for Local Manufacturing",
          url: "https://www.example.com/local-manufacturing",
        }
      ]
    }
  ];

  // Get current article based on ID
  const article = externalNewsArticles.find(article => article.id === articleId);

  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-nyati-orange mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-nyati-navy mb-4">External Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/news" className="inline-flex items-center px-4 py-2 bg-nyati-orange text-white rounded-sm hover:bg-nyati-orange/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/90 to-nyati-navy/70 opacity-80 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image 
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className={`text-white text-xs px-3 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                  article.category === 'company' ? 'bg-nyati-navy' :
                  article.category === 'csr' ? 'bg-nyati-green' :
                  'bg-nyati-orange'
                }`}>
                  {article.category === 'company' ? 'Company' :
                   article.category === 'csr' ? 'CSR' :
                   'Product'}
                </span>
                <span className="text-white/80 text-sm">
                  {formatDate(article.date)}
                </span>
                <span className="text-white/80 text-sm">
                  Source: {article.source}
                </span>
              </div>

              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-futura">
                {article.title}
              </h1>
              <div className="h-1 w-32 bg-nyati-orange mb-4"></div>
              <p className="text-white/90 text-base md:text-lg max-w-3xl">
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="relative mt-6 z-30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-sm shadow-soft p-8 md:p-12 mb-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="prose max-w-none prose-lg"
            >
              
              {/* Lake Cement's Perspective */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-4 text-nyati-navy font-futura">Lake Cement's Perspective</h2>
                <p className="text-gray-700 mb-4">
                  At Lake Cement, we value our relationship with government stakeholders and the broader community. The article highlights our commitment to maintaining excellent standards across our operations while contributing to Tanzania's industrial development.
                </p>
                <p className="text-gray-700 mb-4">
                  We continue to invest in our facilities, workforce, and community initiatives as part of our mission to be a responsible corporate citizen and a leader in Tanzania's manufacturing sector.
                </p>
              </motion.div>
              
              {/* Image */}
              <motion.div 
                variants={itemVariants}
                className="my-10"
              >
                <div className="relative h-80 rounded-sm overflow-hidden shadow-soft">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Related Resources */}
              {article.relatedLinks && article.relatedLinks.length > 0 && (
                <motion.div 
                  variants={itemVariants}
                  className="mt-10 bg-gray-50 p-6 rounded-sm border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-nyati-navy mb-4">Related Resources</h3>
                  <ul className="space-y-3">
                    {article.relatedLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-nyati-orange hover:text-nyati-orange/80 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {/* Share Section */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-sm text-gray-500">Share this news</p>
                    <div className="flex space-x-4 mt-2">
                      <button className="text-nyati-navy hover:text-nyati-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </button>
                      <button className="text-nyati-navy hover:text-nyati-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </button>
                      <button className="text-nyati-navy hover:text-nyati-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </button>
                      <button className="text-nyati-navy hover:text-nyati-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Back to News Button */}
          <div className="flex justify-center mb-12">
            <Link 
              href="/news" 
              className="inline-flex items-center px-5 py-3 bg-nyati-navy text-white rounded-sm hover:bg-nyati-navy/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All News
            </Link>
          </div>
          
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
            <div className="w-32 h-1 bg-gradient-to-r from-nyati-navy via-nyati-orange to-nyati-green rounded-sm"></div>
          </div>
        </div>
      </main>
    </div>
  )
}