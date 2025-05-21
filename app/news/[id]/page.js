'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { getNewsArticle, getRelatedArticles } from '../newsData'

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
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
}

export default function NewsArticlePage({ params }) {
  // State and refs
  const [readingTime, setReadingTime] = useState('3 min')
  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1])

  // Get article data
  const articleId = parseInt(params.id)
  const article = getNewsArticle(articleId)
  const relatedArticles = article ? getRelatedArticles(articleId, 3) : []

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-nyati-orange mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-nyati-navy mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/news" className="inline-flex items-center px-4 py-2 bg-nyati-orange text-white rounded-sm hover:bg-nyati-orange/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero section with parallax effect */}
      <section className="relative h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 z-0">
            <Image 
              src={article.mainImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/95 via-nyati-navy/40 to-transparent z-10"></div>
          </div>
          
          {/* Decorative blur effects */}
          <motion.div 
            className="absolute top-1/3 right-10 w-64 h-64 bg-nyati-orange/10 rounded-sm blur-xl"
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
          
          <motion.div 
            className="absolute bottom-0 left-1/4 w-40 h-40 bg-nyati-green/10 rounded-sm blur-xl"
            animate={{ 
              scale: [1, 1.15, 1],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              {/* Metadata Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <span className={`inline-block text-white text-xs px-3 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                  article.category === 'company' ? 'bg-nyati-navy' :
                  article.category === 'csr' ? 'bg-nyati-green' :
                  'bg-nyati-orange'
                }`}>
                  {article.category === 'company' ? 'Company' :
                   article.category === 'csr' ? 'CSR' :
                   'Product'}
                </span>
                <span className="text-white/80 text-xs sm:text-sm">
                  {formatDate(article.date)}
                </span>
                <span className="text-white/80 text-xs sm:text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTime} read
                </span>
              </div>

              {/* Title Section */}
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-futura leading-tight">
                {article.title}
              </h1>
              <div className="h-1 w-24 md:w-32 bg-nyati-orange mb-4"></div>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
                {article.fullContent.intro}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="relative mt-6 z-30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-sm shadow-soft p-8 md:p-12 mb-12">
            {/* Article Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="prose max-w-none prose-lg prose-headings:font-futura prose-headings:text-nyati-navy prose-a:text-nyati-orange hover:prose-a:text-nyati-orange/80"
            >
              {/* Main paragraphs */}
              <div className="mb-10">
                {article.fullContent.paragraphs.map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    variants={itemVariants}
                    className="mb-6 text-gray-700"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              {/* Image Gallery */}
              {article.gallery && article.gallery.length > 0 && (
                <motion.div 
                  variants={itemVariants}
                  className="my-12"
                >
                  <h2 className="text-2xl font-bold mb-6 text-nyati-navy font-futura">Image Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {article.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-sm overflow-hidden shadow-soft">
                        <Image
                          src={image}
                          alt={`${article.title} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Quote Section */}
              {article.fullContent.quote && article.fullContent.quote.text && (
                <motion.div 
                  variants={itemVariants}
                  className="my-12 border-l-4 border-nyati-orange pl-6 py-2"
                >
                  <blockquote className="text-xl text-gray-700 italic">
                    "{article.fullContent.quote.text}"
                    <footer className="mt-2 text-base font-semibold text-nyati-navy">
                      {article.fullContent.quote.author}
                    </footer>
                  </blockquote>
                </motion.div>
              )}
              
              {/* Additional Content */}
              {article.fullContent.additionalContent && (
                <div className="mb-10">
                  {article.fullContent.additionalContent.map((paragraph, index) => (
                    <motion.p 
                      key={index} 
                      variants={itemVariants}
                      className="mb-6 text-gray-700"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              )}
              
              {/* Conclusion */}
              {article.fullContent.conclusion && (
                <motion.div variants={itemVariants}>
                  <h2 className="text-xl font-bold mb-4 text-nyati-navy font-futura">Looking Forward</h2>
                  <p className="text-gray-700">
                    {article.fullContent.conclusion}
                  </p>
                </motion.div>
              )}
              
              {/* Social Share Section */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-sm text-gray-500">Share this article</p>
                    <div className="flex space-x-4 mt-2">
                      <button className="text-nyati-navy hover:text-nyati-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </button>
                      <button className="text-nyati-navy hover:text-nyati-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </button>
                      <button className="text-nyati-navy hover:text-nyati-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {article.externalLink && (
                    <a 
                      href={article.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-nyati-orange hover:text-nyati-orange/80 transition-colors"
                    >
                      <span className="mr-2">Read Original Article</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-nyati-navy font-futura">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    href={`/news/${article.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-sm shadow-soft overflow-hidden hover:shadow-md transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={article.mainImage}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 m-3">
                          <span className={`text-white text-xs px-2 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                            article.category === 'company' ? 'bg-nyati-navy' :
                            article.category === 'csr' ? 'bg-nyati-green' :
                            'bg-nyati-orange'
                          }`}>
                            {article.category === 'company' ? 'Company' :
                             article.category === 'csr' ? 'CSR' :
                             'Product'}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-gray-500 mb-2">
                          {formatDate(article.date)}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-nyati-navy group-hover:text-nyati-orange transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
          
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
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-nyati-navy via-nyati-orange to-nyati-green rounded-sm"></div>
          </div>
        </div>
      </main>
    </div>
  )
}