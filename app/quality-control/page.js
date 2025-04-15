"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
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

export default function QualityControlPage() {
  // State to handle image loading errors
  const [imgErrors, setImgErrors] = useState({});
  const policyCards = [
    {
      number: '1',
      text: 'To provide products conforming to Tanzania Bureau of Standards (TBS) and exceeding customer expectations'
    },
    {
      number: '2',
      text: 'To continually improve performance and effectiveness of the Quality Management System'
    }
  ];
  
  const featureCards = [
    {
      text: 'A state-of-the-art dry process technology for producing cement. It is monitored by a <strong>round-the-clock automated video surveillance</strong> at the burning zone.',
      image: '/images/quality/quality-img1.svg',
    },
    {
      text: 'A fully equipped <strong>world-class laboratory with XRF spectrometer</strong> for hourly sampling and testing to ensure and maintain the quality of the cement.',
      image: '/images/quality/quality-img2.svg',
    },
    {
      text: '<strong>Fully computerised central control room</strong> with intelligent Motor Control Centres (MCCs) and sophisticated instrumentation controls for monitoring the operation of the entire plant.',
      image: '/images/quality/quality-img3.svg',
    },
    {
      text: '<strong>High efficiency classifiers</strong> have been installed at the raw material (roller) and cement mills. They give more accurate separation and thereby reduce over-grinding and enhance the mill\'s energy efficiency.',
      image: '/images/quality/quality-img4.svg',
    }
  ];

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      className="bg-white"
    >
      {/* Compact Banner - Simple Image Strip */}
      <motion.div 
        variants={fadeIn}
        className="w-full h-48 relative overflow-hidden"
      >
        <div className="w-75% h-full flex">
            <Image
              src="/images/quality/banner.jpg" 
              alt="Quality Control Process" 
              fill
              className="object-cover"
            />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-6xl py-4">
        {/* Page Title Section */}
        <motion.div variants={fadeIn} className="mb-4">
          <motion.h1 
            variants={slideUp} 
            className="text-3xl font-bold text-nyati-orange mb-1"
          >
            QUALITY CONTROL
          </motion.h1>
          <motion.p 
            variants={slideUp}
            className="text-sm text-nyati-dark-grey"
          >
            The quality of our products, is of paramount importance to us. Our stringent standards are governed by our Quality Policy.
          </motion.p>
        </motion.div>

        {/* Quality Policy Section */}
        <motion.section 
          variants={staggerContainer}
          className="mb-4"
        >
          <motion.h2 
            variants={slideUp} 
            className="text-xl font-bold text-nyati-navy mb-2"
          >
            QUALITY POLICY
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {policyCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover="hover"
                className="px-4 py-3 bg-nyati-navy rounded-sm flex items-center transition-all duration-300"
              >
                <div className="flex-shrink-0 text-4xl font-bold text-nyati-orange mr-3">
                  {card.number}
                </div>
                <p className="text-white text-sm">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.p 
          variants={fadeIn}
          className="text-sm mb-3"
        >
          In order to embed quality across our production process, we have introduced following technologies at our Plant.
        </motion.p>

        {/* Feature Cards Grid - Keeping Original Design */}
        <motion.section
          variants={staggerContainer}
          className="mb-8"
        >
          <div className="grid md:grid-cols-4 gap-4">
            {featureCards.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={cardVariant}
                whileHover="hover"
                className="bg-gray-50 rounded-sm overflow-hidden transition-all duration-300 group flex flex-col shadow-sm"
              >
                <div className="relative h-32 w-full overflow-hidden flex justify-center items-center">
                  {!imgErrors[feature.image] ? (
                    <Image 
                      src={feature.image}
                      alt={`Feature: ${feature.text.substring(0, 20)}...`}
                      width={100}
                      height={100}
                      className="object-contain p-2"
                      onError={(e) => {
                        setImgErrors(prev => ({...prev, [feature.image]: true}));
                      }}
                    />
                  ) : (
                    <div className="text-nyati-orange text-4xl p-4">
                      {index === 0 && "🎥"}
                      {index === 1 && "🔬"}
                      {index === 2 && "💻"}
                      {index === 3 && "⚙️"}
                    </div>
                  )}
                </div>
                
                <div className="p-3 flex-grow border-t border-gray-200">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="h-0.5 bg-nyati-orange/40 mb-2"
                  />
                  <p 
                    className="text-xs text-nyati-dark-grey"
                    dangerouslySetInnerHTML={{ __html: feature.text }}
                  ></p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* New Laboratory Photo Section */}
        <motion.section
          variants={fadeIn}
          className="mb-8 rounded-sm overflow-hidden shadow-md"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image side */}
            <motion.div 
              variants={slideUp}
              className="md:w-1/2 relative h-64 md:h-auto"
            >
              <Image
                src="/images/quality/labmalik.png"
                alt="Quality Control Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/70 to-transparent mix-blend-multiply"></div>
            </motion.div>
            
            {/* Content side */}
            <motion.div 
              variants={staggerContainer}
              className="md:w-1/2 bg-white p-6 flex flex-col justify-center"
            >
              <motion.div variants={slideUp}>
                <h2 className="text-xl font-bold text-nyati-navy mb-2">OUR QUALITY COMMITMENT</h2>
              </motion.div>
              
              <motion.p variants={slideUp} className="text-sm text-nyati-dark-grey mb-3">
                At Nyati Cement, quality is not just a process—it's our promise. Our dedicated laboratory team conducts rigorous testing at every stage of production, from raw materials to the final product, ensuring consistent excellence.
              </motion.p>
              
              <motion.p variants={slideUp} className="text-sm text-nyati-dark-grey mb-3">
                Our cement undergoes over 40 quality checks before reaching customers, with samples tested for compressive strength, setting time, and chemical composition. This meticulous approach enables us to consistently exceed Tanzania Bureau of Standards requirements.
              </motion.p>
              
              <motion.div variants={slideUp} className="flex flex-wrap gap-2 mt-2">
  <Link href="/about/certifications" className="cursor-pointer">
    <span className="bg-nyati-orange/10 text-nyati-orange text-xs px-3 py-1 rounded-sm hover:bg-nyati-orange/20 transition-colors">ISO Certified</span>
  </Link>
  <Link href="/about/certifications" className="cursor-pointer">
    <span className="bg-nyati-orange/10 text-nyati-orange text-xs px-3 py-1 rounded-sm hover:bg-nyati-orange/20 transition-colors">TBS Approved</span>
  </Link>
  <Link href="/about/certifications" className="cursor-pointer">
    <span className="bg-nyati-orange/10 text-nyati-orange text-xs px-3 py-1 rounded-sm hover:bg-nyati-orange/20 transition-colors">100% Quality Assured</span>
  </Link>
</motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Quality Process Steps */}
        <motion.section
          variants={staggerContainer}
          className="mb-8"
        >
          <motion.h2 
            variants={slideUp} 
            className="text-xl font-bold text-nyati-navy mb-4"
          >
            OUR QUALITY ASSURANCE PROCESS
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={cardVariant}
              whileHover="hover"
              className="bg-gray-50 p-5 rounded-sm shadow-sm border-t-4 border-nyati-orange"
            >
              <div className="text-nyati-orange font-bold text-xl mb-2">01. Raw Material Selection</div>
              <p className="text-sm text-nyati-dark-grey">
                We carefully source and select the finest limestone, clay, and other raw materials. Each batch undergoes chemical analysis to ensure optimal composition before entering our production process.
              </p>
            </motion.div>
            
            <motion.div
              variants={cardVariant}
              whileHover="hover"
              className="bg-gray-50 p-5 rounded-sm shadow-sm border-t-4 border-nyati-orange"
            >
              <div className="text-nyati-orange font-bold text-xl mb-2">02. Production Monitoring</div>
              <p className="text-sm text-nyati-dark-grey">
                Our advanced control systems continuously monitor kiln temperature, clinker quality, and grinding fineness. This real-time monitoring allows us to maintain precise control over every aspect of cement production.
              </p>
            </motion.div>
            
            <motion.div
              variants={cardVariant}
              whileHover="hover"
              className="bg-gray-50 p-5 rounded-sm shadow-sm border-t-4 border-nyati-orange"
            >
              <div className="text-nyati-orange font-bold text-xl mb-2">03. Testing</div>
              <p className="text-sm text-nyati-dark-grey">
                Every batch of Nyati Cement undergoes comprehensive physical and chemical testing before release. We test for strength development, setting time, and durability to ensure our customers receive only the best.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Quality Commitment Banner */}
        <motion.div
          variants={fadeIn}
          className="bg-nyati-navy rounded-sm p-6 text-center mb-8"
        >
          <motion.h3 
            variants={slideUp}
            className="text-white text-xl font-bold mb-2"
          >
            Our Commitment to Excellence Never Stops
          </motion.h3>
          <motion.p
            variants={slideUp}
            className="text-white/80 text-sm max-w-3xl mx-auto"
          >
            From raw material selection to final packaging, quality control is embedded in every step of our production process. 
            Nyati Cement continues to invest in advanced technologies and training to ensure we consistently deliver 
            Tanzania's most reliable and high-performing cement products.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}