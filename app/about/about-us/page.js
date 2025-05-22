'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll, useTransform } from 'framer-motion';
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
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
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

// Component for compact info cards
const CompactInfoCard = ({ title, imageSrc, description, linkPath, index }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="bg-white rounded-sm overflow-hidden shadow-md flex flex-col h-full"
    >
      <div className="relative h-32 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 to-transparent">
          <div className="absolute bottom-3 left-3">
            <h3 className="text-white font-bold text-lg">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-3 flex-grow">
        <p className="text-sm text-gray-700">{description}</p>
        <motion.a 
          href={linkPath}
          className="mt-2 text-nyati-orange text-sm font-medium inline-block"
          whileHover={{ x: 5 }}
        >
          Learn more &rarr;
        </motion.a>
      </div>
    </motion.div>
  );
};

// Core Values Card Component
const CoreValueCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-sm overflow-hidden shadow-md relative group"
    >
      <div className={`p-5 transition-all duration-300 ${isHovered ? 'bg-nyati-light-orange bg-opacity-5' : ''}`}>
        <div className="flex mb-3">
          <div className="w-12 h-12 bg-nyati-orange/10 rounded-sm flex items-center justify-center mr-3">
            <span className="text-nyati-orange text-xl">{icon}</span>
          </div>
          <h3 className="text-lg font-bold text-nyati-navy self-center">{title}</h3>
        </div>
        
        <div className={`transition-all duration-300 ${isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <p className="text-sm text-nyati-navy">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Advantage Item Component
const AdvantageItem = ({ title, description, index }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="bg-white rounded-sm overflow-hidden shadow-sm"
    >
      <div className="flex items-center">
        <div className="bg-nyati-orange w-2 self-stretch"></div>
        <div className="w-12 h-12 flex items-center justify-center">
          <span className="text-nyati-orange text-lg font-bold">{index + 1}</span>
        </div>
        <div className="p-3">
          <h3 className="text-nyati-navy font-bold">{title}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutUsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  const [activeVisionMission, setActiveVisionMission] = useState(null);

  const advantages = [
    {
      title: "Integrated Manufacturing",
      description: "Full control over production process ensures consistent quality and reliability."
    },
    {
      title: "Own Power for Uninterrupted Production",
      description: "10MW thermal power plant guarantees continuous operations independent of grid issues."
    },
    {
      title: "Own Clinker",
      description: "In-house clinker production maintains quality control from raw materials to final product."
    },
    {
      title: "Consistent Quality",
      description: "Rigorous testing at every stage ensures our cement meets the highest standards every time."
    },
    {
      title: "Better Energy-Efficiency",
      description: "Modern equipment and processes minimize energy consumption and reduce environmental impact."
    },
    {
      title: "Enhanced Sustainability",
      description: "Commitment to sustainable practices in production and community engagement."
    }
  ];

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
              src="/images/aboutus/group1.jpg"
              alt="About Lake Cement"
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
                <li><span className="text-white">About Us</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Leading
              <br />
              <span className="text-nyati-orange">Innovation</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Discover our journey of excellence in cement manufacturing and our commitment to quality and innovation.
            </motion.p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeIn}
              className="mb-8"
            >
              <motion.div className="flex items-center mb-4">
                <motion.h1 
                  variants={slideUp}
                  className="text-nyati-orange text-2xl md:text-3xl font-bold"
                >
                  ABOUT US
                </motion.h1>
                <div className="h-px flex-grow bg-gray-200 ml-4"></div>
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                className="space-y-2 mb-8 bg-white p-6 rounded-sm shadow-sm"
              >
                <motion.p 
                  variants={slideUp}
                  className="text-sm md:text-base"
                >
                  Lake Cement Ltd is a specialist in cement manufacturing with a state-of-the-art fully integrated cement plant, with a captive 10MW thermal power plant. Our plant is located in the Kigamboni district of Dar es Salaam and has an installed capacity of 1,000,000 MT per annum.
                </motion.p>
                <motion.p 
                  variants={slideUp}
                  className="text-sm md:text-base"
                >
                  We produce consistent high quality cement for which we have leveraged best-in-class technologies and extensive sectoral experience. We started production in 2014 under the <strong className="text-nyati-orange">Nyati Cement</strong> brand. <strong className="text-nyati-orange">Nyati Cement</strong> is now the leading cement brand not only in Tanzania, but also has prominence in Rwanda, Burundi and other neighboring countries.
                </motion.p>
              </motion.div>

              {/* Enhanced Mission & Vision Section */}
              <motion.div 
                variants={fadeIn}
                className="mb-12"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    variants={cardVariant}
                    whileHover="hover"
                    onMouseEnter={() => setActiveVisionMission('mission')}
                    onMouseLeave={() => setActiveVisionMission(null)}
                    className={`transition-all duration-300 rounded-sm overflow-hidden shadow-md ${activeVisionMission === 'mission' ? 'bg-nyati-navy' : 'bg-white'}`}
                  >
                    <div className="p-6">
                      <h2 className={`font-bold text-xl mb-1 ${activeVisionMission === 'mission' ? 'text-nyati-orange' : 'text-nyati-orange'}`}>
                        OUR MISSION
                      </h2>
                      <p className={`text-sm transition-colors duration-300 ${activeVisionMission === 'mission' ? 'text-white' : 'text-gray-700'}`}> 
                        To become the leading cement manufacturer in Tanzania, by delivering consistent high quality cement to our customers with service beyond our customers' expectations
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={cardVariant}
                    whileHover="hover"
                    onMouseEnter={() => setActiveVisionMission('vision')}
                    onMouseLeave={() => setActiveVisionMission(null)}
                    className={`transition-all duration-300 rounded-sm overflow-hidden shadow-md ${activeVisionMission === 'vision' ? 'bg-nyati-orange' : 'bg-white'}`}
                  >
                    <div className="p-6">
                      <h2 className={`font-bold text-xl mb-1 ${activeVisionMission === 'vision' ? 'text-white' : 'text-nyati-navy'}`}>
                        OUR VISION
                      </h2>
                      <p className={`text-sm transition-colors duration-300 ${activeVisionMission === 'vision' ? 'text-white' : 'text-gray-700'}`}>
                        To become a key driver in Tanzania's growth by creating value for our customers, employees, business partners and shareholders - through fundamentally sound governance and policies
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Core Values Section */}
              <motion.div
                variants={fadeIn}
                className="mb-12"
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-nyati-navy">Our Core Values</h2>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <CoreValueCard 
                    icon="⚖️"
                    title="Integrity"
                    description="Honest and accurate reporting of performance, both internally and externally, creating an environment conducive to proper business conduct."
                  />
                  <CoreValueCard 
                    icon="🤝"
                    title="Responsibility"
                    description="Protecting our stakeholders' interests is our responsibility, making it the core of all our policies and management decisions."
                  />
                  <CoreValueCard 
                    icon="🔒"
                    title="Trust"
                    description="We are the trustees of the trust reposed on us by our stakeholders, guiding our actions and decisions at every level."
                  />
                  <CoreValueCard 
                    icon="👥"
                    title="Cooperative Effort"
                    description="We recognize that our society and surrounding communities are important stakeholders, making us responsible to practice good corporate citizenship."
                  />
                </div>
              </motion.div>
              
              {/* Lake Cement Advantage Section */}
              <motion.div
                variants={fadeIn}
                className="mb-12"
              >
                <div className="bg-nyati-navy p-6 rounded-sm shadow-md mb-6">
                  <h2 className="text-xl font-bold text-white mb-1">THE LAKE CEMENT ADVANTAGE</h2>
                  <p className="text-white/80 text-sm">Our commitment to excellence and innovation creates distinct advantages that benefit our customers and partners.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-3">
                  {advantages.map((advantage, index) => (
                    <AdvantageItem 
                      key={index}
                      title={advantage.title}
                      description={advantage.description}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Info Cards Section - Compact Grid */}
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-4"
              >
                <CompactInfoCard 
                  title="THE PLANT"
                  imageSrc="/images/aboutus/img1.jpg"
                  description="Our integrated cement manufacturing unit, spread in an area of over 100 hectares, is the most modern, fully automated and energy-efficient plant of its kind in East Africa."
                  linkPath="/about/plant"
                  index={0}
                />
                
                <CompactInfoCard 
                  title="CSR"
                  imageSrc="/images/aboutus/img2.jpg"
                  description="In addition to being a profitable corporate entity, we also strive to be a responsible corporate citizen. Our CSR initiatives traverse a wide spectrum of stakeholders."
                  linkPath="/about/csr"
                  index={1}
                />
                
                <CompactInfoCard 
                  title="CODE OF CONDUCT"
                  imageSrc="/images/aboutus/img3.jpg"
                  description="Our Code of Conduct helps maintain the standard of business conduct at Lake Cement and ensures compliance with legal requirements."
                  linkPath="/about/code-of-conduct"
                  index={2}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}