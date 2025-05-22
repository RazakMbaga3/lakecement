'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
      staggerChildren: 0.07
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
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const imageVariant = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const downloadButtonVariant = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export default function CertificationsClient({ certifications }) {
  const parallaxRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Filter out empty categories and combine Last two categories
  const filteredCertifications = certifications.filter(section => section.category);

  return (
    <div className="bg-gray-50">      {/* Hero Section with Modern Design */}
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
              src="/images/certifications/CERTIMG.jpg"
              alt="Our Certifications"
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
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.1, 0.05] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: 1
            }}
            className="absolute bottom-20 left-20 w-56 h-56 bg-nyati-green/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-4xl">
            {/* Breadcrumb */}
            <motion.nav 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">Home</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><Link href="/about" className="hover:text-nyati-orange transition-colors">About</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><span className="text-white">Certifications</span></li>
              </ol>
            </motion.nav>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            Tests and Statutory 
            <br />
              <span className="text-nyati-orange">Certifications</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-white/90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              View and download our quality certifications and compliance documents that demonstrate our commitment to excellence and industry standards.
            </motion.p>

            <motion.div 
              className="h-1 w-24 bg-nyati-orange mt-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </div>
      </section>

      {/* Certifications Grid Section */}      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {filteredCertifications.map((section, sectionIndex) => (
            <div key={section.category} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-nyati-navy"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {section.category}
                </motion.h2>
                <div className="h-px flex-grow ml-6 bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariant}
                    whileHover="hover"
                    className="bg-white rounded-sm shadow-soft overflow-hidden group"
                  >
                    <div className="p-6">
                      {item.image && (
                        <div className="relative">
                          <motion.div 
                            className="mb-6 relative h-28 bg-gray-50 rounded-sm p-4 overflow-hidden"
                            variants={imageVariant}
                            whileHover="hover"
                          >
                            <Image
                              src={item.image}
                              alt={item.alt || item.title}
                              fill
                              className="object-contain"
                            />
                          </motion.div>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-nyati-navy mb-3 group-hover:text-nyati-orange transition-colors">
                        {item.title}
                      </h3>
                      {item.subItems && item.subItems.length > 0 && (
                        <ul className="list-none space-y-2 text-gray-600 text-sm mb-6">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex items-start">
                              <span className="text-nyati-orange mr-2">•</span>
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {item.downloadLink && (
                        <Link 
                          href={item.downloadLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-nyati-navy text-white rounded-sm hover:bg-nyati-navy/90 transition-all group/button"
                        >
                          <motion.span 
                            variants={downloadButtonVariant}
                            initial="rest"
                            whileHover="hover"
                            className="flex items-center"
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 mr-2 group-hover/button:-translate-y-0.5 transition-transform" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                              />
                            </svg>
                            Download
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
