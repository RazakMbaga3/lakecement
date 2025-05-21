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
    y: -5, 
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2 
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
              src="/images/certifications/cert-hero.jpg"
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
        </motion.div>

        {/* Rest of your component JSX */}
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Certifications
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Certifications Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {filteredCertifications.map((section, sectionIndex) => (
            <div key={section.category} className="mb-16 last:mb-0">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-8"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {section.category}
              </motion.h2>
              
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
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Link href={item.downloadLink || '#'} target="_blank" rel="noopener noreferrer">
                      <div className="p-6">
                        {item.image && (
                          <div className="mb-4 relative h-32">
                            <Image
                              src={item.image}
                              alt={item.alt || item.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        {item.subItems && item.subItems.length > 0 && (
                          <ul className="list-disc list-inside text-gray-600">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Link>
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
