'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

// Container for staggered animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover animation for feature cards
const featureCardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Plant features data
const plantFeatures = [
  {
    image: '/images/aboutus/the_plant-1.png',
    title: '10 MW Captive Power Plant',
    description: 'Tanzania\'s first cement plant to have captive power plant, ensuring uninterrupted production with consistent quality and enhanced equipment efficiency.'
  },
  {
    image: '/images/aboutus/the_plant-2.png',
    title: 'Expert Management',
    description: 'Managed, maintained and operated by a team of qualified cement industry professionals with over 20 years of experience.'
  },
  {
    image: '/images/aboutus/the_plant-3.png',
    title: 'Automated Packing',
    description: 'Equipped with a fully automated electronic packing machine to maintain a consistently accurate package weight.'
  },
  {
    image: '/images/aboutus/the_plant-4.png',
    title: 'Vertical Roller Mill',
    description: 'Tanzania\'s First cement plant with vertical roller mill for higher energy efficiency.'
  },
  {
    image: '/images/aboutus/the_plant-5.png',
    title: 'Clinker Storage',
    description: 'A closed clinker storage yard for storing 30,000 MT clinker.'
  },
  {
    image: '/images/aboutus/the_plant-6.png',
    title: 'Stacker and Reclaimer',
    description: 'Equipped with Stacker and Reclaimer for a homogenised feed to the raw mill.'
  }
];

export default function PlantPage() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <Image 
              src="/images/slideshow/1.jpeg"
              alt="Our Manufacturing Plant"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/95 via-nyati-navy/40 to-transparent"></div>
          </div>

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
                <li><span className="text-white">Plant</span></li>
              </motion.ol>
            </nav>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              State-of-the-Art
              <br />
              <span className="text-nyati-orange">Manufacturing</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Discover our modern cement manufacturing facility that combines innovative technology 
              with sustainable practices.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/10">
                <div className="text-nyati-orange text-2xl font-bold mb-1">1.2M</div>
                <div className="text-white text-sm">Annual Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/10">
                <div className="text-nyati-orange text-2xl font-bold mb-1">99%</div>
                <div className="text-white text-sm">Equipment Uptime</div>
              </div>
              <div className="hidden md:block bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/10">
                <div className="text-nyati-orange text-2xl font-bold mb-1">ISO</div>
                <div className="text-white text-sm">Certified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-6xl py-12">
        {/* Introduction */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.p 
            variants={slideUp}
            className="text-lg text-gray-700 max-w-4xl mx-auto text-center"
          >
            Our integrated cement manufacturing unit, spread in an area of over 100 hectares, is the most modern, fully automated and energy-efficient plant of its kind in East Africa. The Plant, with a capacity of 1,000,000 Tons per annum, is located at Kimbiji village in Kigamboni District; just 45 km south of Dar es Salaam's central business district.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {plantFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={slideUp}
              initial="rest"
              whileHover="hover"
              animate="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <div className="p-6 flex items-start">
                <div className="w-16 h-16 relative flex-shrink-0 mr-4">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    width={64}
                    height={64} 
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-nyati-orange">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}