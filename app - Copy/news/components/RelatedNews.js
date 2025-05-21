'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function RelatedNews({ articles }) {
  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    }
  };

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center mb-8">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
        <h2 className="text-2xl font-bold text-nyati-navy px-6 flex items-center font-futura">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          RELATED NEWS
        </h2>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <motion.div 
            key={article.id}
            variants={itemVariants}
            className="bg-white rounded-sm shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={article.mainImage || article.image} 
                alt={article.title} 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-0 right-0 m-3">
                <span className={`text-white text-xs px-2 py-1rounded-sm uppercase font-semibold tracking-wide ${
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
            <div className="p-5">
              <div className="text-xs text-gray-500 mb-2">
                {formatDate(article.date)}
              </div>
              <h3 className="text-lg font-bold mb-2 text-nyati-navy group-hover:text-nyati-orange transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              {article.externalLink ? (
                <a 
                  href={article.externalLink} 
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
    </motion.section>
  );
}