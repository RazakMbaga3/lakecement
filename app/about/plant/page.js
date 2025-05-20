'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

// Fade-in-slide animation for feature cards
const fadeInSlide = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut" 
    }
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

export default function PlantPage() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const features = [
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-gray-50"
    >
      {/* Compact Banner with Parallax Effect */}
      <div className="relative h-40 md:h-48 w-full overflow-hidden" ref={parallaxRef}>
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/aboutus/the-plant.jpg" 
            alt="Lake Cement Plant" 
            fill
            priority
            className="object-cover"
          />
<div className="absolute inset-0 bg-black/40"></div>        </motion.div>
        
        {/* Page title */}
        <div className="relative py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white container mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl font-bold text-white">
                <span>THE</span> PLANT
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-6">
        {/* Introduction */}
        <motion.div
          variants={fadeIn}
          className="mb-6"
        >
          <motion.p 
            variants={slideUp}
            className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto"
          >
            Our integrated cement manufacturing unit, spread in an area of over 100 hectares, is the most modern, fully automated and energy-efficient plant of its kind in East Africa. The Plant, with a capacity of 1,000,000 Tons per annum, is located at Kimbiji village in Kigamboni District; just 45 km south of Dar es Salaam's central business district.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeInSlide}
              initial="rest"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <div className="p-4 flex items-center">
                <div className="w-16 h-16 relative flex-shrink-0 mr-3">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    width={64}
                    height={64} 
                    className="object-contain justify-center rounded-2xl h-20"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 text-nyati-orange">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}