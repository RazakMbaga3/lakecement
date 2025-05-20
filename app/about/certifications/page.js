'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

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

export default function CertificationsPage() {
  const parallaxRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const certifications = [
    {
      category: "Quality Standards",
      items: [
        {
          image: "/images/certifications/iso-9001-logo.png",
          title: "ISO 9001:2008",
          downloadLink: "/docs/RENEWED DOCS/Latest ISO certificate- 2024 onwrad.pdf",
          alt: "ISO 9001 Logo",
          subItems: []
        },
        {
          image: "/images/certifications/tbs_logo.jpg",
          title: "TBS Licence",
          downloadLink: "/docs/RENEWED DOCS/TBS CERTIFICATE FROM 2024-07-02 TO 2025-07-01.pdf",
          alt: "TBS Logo",
          subItems: []
        }
      ]
    },
    {
      category: "Internal Test Results",
      items: [
        {
          title: "Internal 42.5 N test certificate",
          downloadLink: "/docs/RENEWED DOCS/TBS JUne 2024 42.5 N test results.pdf",
          subItems: []
        },
        {
          title: "Internal 42.5 R test certificate",
          downloadLink: "/docs/RENEWED DOCS/TBS 42.5 R JUne 2024 test results.pdf",
          subItems: []
        },
        {
          title: "Internal 32.5 N test certificate",
          downloadLink: "/docs/RENEWED DOCS/TBS JUNE 24 test report 32.5 N.pdf",
          subItems: []
        },
        {
          title: "Internal OPC test certificate",
          downloadLink: "/docs/RENEWED DOCS/TBS TEST REPORT NYATI CEMENT CEM I (OPC) 42.5N.pdf",
          subItems: []
        }
      ]
    },
    {
      category: "Other Certifications",
      items: [
        {
          image: "/images/certifications/tra.png",
          title: "VAT Certificate",
          downloadLink: "/docs/VAT CERTIFICATE.jpg",
          alt: "TRA LOGO",
          subItems: []
        },
        {
          image: "/images/certifications/tra.png",
          title: "TIN Certificate",
          downloadLink: "/docs/TIN CERTIFICATE.jpg",
          alt: "TRA LOGO",
          subItems: []
        },
        {
          title: "Business Licence",
          downloadLink: "/docs/RENEWED DOCS/Renewed business License - 2025.pdf",
          subItems: []
        },
        {
          title: "Material Safety Data Sheet - MSDS",
          downloadLink: "/docs/RENEWED DOCS/MSDS-LCL CEMENT.pdf",
          subItems: []
        }
      ]
    }
  ];

  // Filter out empty categories and combine Last two categories
  const filteredCertifications = certifications.filter(section => section.category);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-gray-50"
    >
      {/* Compact Banner with Parallax Effect */}
      <div className="relative h-40 md:h-48 w-full overflow-hidden" ref={parallaxRef}>
      <Image 
      src="/images/certifications/CERTIMG.jpg" 
      alt="Certification Quality Assurance" 
      fill
      className="object-cover"
    />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Page title */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white mx-auto mt-12 px-4 relative z-10 text-center">
              <h1 className="text-4xl font-bold text-white">
                CERTIFICATIONS
              </h1>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/10 fill-current">
            <path d="M37.5,-48.1C49.3,-40.9,60.1,-30.8,65.3,-18.1C70.4,-5.3,69.9,10.1,63.5,22.1C57.1,34.1,44.8,42.8,31.7,48.9C18.5,55,4.6,58.4,-10.2,58.8C-24.9,59.1,-40.5,56.3,-48.2,46.8C-55.9,37.2,-55.7,20.9,-57.4,4.7C-59,-11.5,-62.4,-27.7,-56.5,-38.7C-50.6,-49.7,-35.3,-55.5,-21.5,-61.5C-7.7,-67.4,4.6,-73.6,15.4,-69.5C26.2,-65.4,25.7,-55.2,37.5,-48.1Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-6">
        {/* Certifications Accordion Sections */}
        <motion.div variants={staggerContainer} className="space-y-6">
          {filteredCertifications.map((section, sectionIndex) => (
            <motion.section 
              key={sectionIndex} 
              variants={fadeIn}
              className="bg-white rounded-sm shadow-sm overflow-hidden"
            >
              <motion.h2 
                variants={slideUp} 
                className="text-lg font-bold text-white bg-nyati-navy p-3 md:p-4 flex items-center"
              >
                <span className="mr-2">
                  {sectionIndex === 0 && "🏆"}
                  {sectionIndex === 1 && "✅"}
                  {sectionIndex === 2 && "📊"}
                  {sectionIndex === 3 && "📑"}
                </span>
                {section.category}
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                className="p-3 md:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
              >
                {section.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex} 
                    variants={cardVariant}
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(`${sectionIndex}-${itemIndex}`)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="bg-gray-50 rounded-sm p-3 flex flex-col h-full border border-gray-100"
                  >
                    <div className="flex items-center mb-2">
                      {item.image ? (
                        <div className="relative h-12 w-12 mr-3 flex-shrink-0">
                          <Image 
                            src={item.image} 
                            alt={item.alt || item.title}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center mr-3 bg-nyati-orange/10 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      )}
                      <h3 className="text-nyati-navy font-bold text-sm">{item.title}</h3>
                    </div>
                    
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="mb-3 flex-grow">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="text-xs text-gray-600 mb-1">{subItem}</div>
                        ))}
                      </div>
                    )}
                    
                    <motion.a 
                      href={item.downloadLink} 
                      download
                      className="mt-auto self-start text-sm flex items-center text-nyati-orange font-medium hover:text-nyati-navy transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </motion.div>
        
       {/* Banner Image */}
<motion.section 
  variants={fadeIn}
  className="mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.3 }}
>
  <div className="relative w-full h-32 md:h-48 rounded-sm overflow-hidden">
    <Image 
      src="/images/certifications/CERTIMG.jpg" 
      alt="Certification Quality Assurance" 
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/50 to-transparent flex items-center">
      <div className="p-6 md:p-8">
        <h3 className="text-white font-bold text-xl md:text-2xl mb-2">Quality Assurance</h3>
        <p className="text-white/90 text-sm md:text-base max-w-md">Our certifications demonstrate our commitment to maintaining the highest standards in all our operations.</p>
      </div>
    </div>
  </div>
</motion.section>
      </div>
    </motion.div>
  );
}