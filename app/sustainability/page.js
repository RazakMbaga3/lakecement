'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    }
  },
  hover: { 
    y: -5, 
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
    transition: { 
      duration: 0.3 
    }
  }
};

// Fixed heading component to properly position the underline
const SectionHeading = ({ children, accent = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideUp}
      className="relative inline-block mx-auto text-center mb-2"
    >
      <h2 className={`text-2xl text-center md:text-3xl font-bold
        ${accent ? 'text-nyati-orange' : 'text-nyati-navy'}`}
      >
        {children}
      </h2>
    </motion.div>
  );
};

export default function SustainabilityPage() {
  // Policy cards data
  const policyCards = [
    {
      number: '01',
      title: 'Minimizing Environmental Impact',
      text: 'We are committed to efficient use of natural resources, energy, plant and equipment to reduce our ecological footprint.'
    },
    {
      number: '02',
      title: 'Promoting A Cleaner Environment',
      text: 'Our operations focus on reducing emissions, noise, waste, and greenhouse gases to create a clean, green, and healthy environment.'
    }
  ];

  // Technology features data
  const pioneeringTechnologies = [
    {
      icon: '/images/sustainability/sus_img1.jpg',
      title: 'Vertical Roller Mill',
      text: 'An energy-efficient alternative to conventional ball mills, used for grinding raw materials, reducing energy consumption significantly.'
    },
    {
      icon: '/images/sustainability/sus_img2.jpg',
      title: 'Surface Miners',
      text: 'Utilized for limestone mining without blasting, minimizing noise and dust pollution for a healthier environment.'
    },
    {
      icon: '/images/sustainability/sus_img3.jpg',
      title: 'Fluidised Bed Combustion (FBC) Boiler',
      text: 'Powers our plant with low emissions of nitric and sulphur oxides, enhancing air quality.'
    }
  ];

  const energyEfficientSolutions = [
    {
      icon: '/images/sustainability/sus_img4.jpg',
      title: 'Pyro Section with Grate Cooler',
      text: 'Features a static first grate for optimal heat energy utilization, improving overall efficiency.'
    },
    {
      icon: '/images/sustainability/sus_img5.jpg',
      title: 'Five-Stage Preheater with Pre-calciner',
      text: 'Enhances fuel combustion and delivers significant energy savings across our operations.'
    }
  ];

  const otherInitiatives = [
    {
      icon: '/images/sustainability/sus_img6.jpg',
      title: 'Lower Emissions',
      text: 'Equipped with bag filters at all transfer points and selective use of electrostatic precipitators to minimize emissions.'
    },
    {
      icon: '/images/sustainability/sus_img7.jpg',
      title: 'Local Sourcing',
      text: 'Sourcing coal from Songea reduces import costs and keeps our carbon footprint low, supporting local economies.'
    }
  ];

  // Section refs for animations
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [policyRef, policyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              src="/images/sustainability/banner2.jpg"
              alt="Sustainability at Nyati Cement"              fill
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
                <li><span className="text-white">Sustainability</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Building a
              <br />
              <span className="text-nyati-orange">Sustainable</span> Future
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Our commitment to environmental sustainability drives innovation in cement production, focusing on reducing emissions, conserving energy, and promoting eco-friendly practices.
            </motion.p>


          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        {/* Introduction Section - More compact */}
        <motion.div 
          ref={policyRef}
          initial="hidden"
          animate={policyInView ? "visible" : "hidden"}
          variants={slideUp}
          className="mb-12 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-nyati-navy mb-4">
            Our Environmental <span className="text-nyati-orange">Vision</span>
          </h2>
          <p className="text-base text-nyati-dark-grey leading-relaxed">
            At Nyati Cement, we are determined to make our environment cleaner, greener, and healthier. 
            We have pioneered technologies and processes that reduce emissions, waste, and noise.
            At the core of all our endeavors is our Sustainability and Environmental Policy.
          </p>
        </motion.div>

        {/* Policy Section */}
        <motion.section 
          variants={staggerContainer}
          className="mb-12"
        >
          {/* Centered Policy Header */}
          <motion.div
            variants={fadeIn}
            className="text-center mb-4"
          >
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-nyati-orange">SUSTAINABILITY & ENVIRONMENTAL POLICY</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {policyCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover="hover"
                className="bg-nyati-navy rounded-sm shadow-sm overflow-hidden h-full transition-all duration-300 border-l-4 border-nyati-orange"
              >
                <div className="p-6">
                  <div className="inline-block text-2xl font-bold text-nyati-light-grey mb-3">
                    {card.number}
                  </div>
                  <h3 className="text-xl font-bold text-nyati-light-grey mb-2">
                    {card.title}
                  </h3>
                  <p className="text-nyati-light-grey">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Infographic and Commitment Section - More compact */}
        <motion.section 
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Sustainability Measures - Left Column */}
              <motion.div 
                variants={cardVariant}
                className="p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-nyati-navy">Our Sustainability Measures</h3>
                <p className="text-nyati-dark-grey mb-4">
                  We've integrated sustainable practices across our operations to minimize environmental impact and maximize resource efficiency.
                </p>
                <div className="relative h-64">
                  <Image 
                    src="/images/sustainability/sustinfo.png" 
                    alt="Sustainability Infographic" 
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
              
              {/* Director - Right Column */}
              <motion.div 
                variants={cardVariant}
                className="bg-nyati-green/5 p-6 flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold mb-3 text-nyati-navy">Our Commitment in Action</h3>
                <div className="mb-4 relative h-56 overflow-hidden rounded-sm">
                  <Image 
                    src="/images/news/env.webp" 
                    alt="Environmental Initiative" 
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-nyati-dark-grey italic text-sm">
                  "Our commitment to sustainability is more than just words—it's reflected in our daily actions and long-term vision."
                </p>
                <p className="font-bold text-nyati-navy mt-2 text-sm">
                  — Managing Director, Nyati Cement
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Technologies Section - Completely redesigned */}
        <motion.section 
          ref={techRef}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-12"
        >
          <SectionHeading>
            Pioneering Technology
          </SectionHeading>
          
          {/* New tech layout - more professional */}
          <div className="bg-white rounded-sm shadow-sm overflow-hidden mb-10">
            <div className="grid md:grid-cols-3 gap-0 divide-x divide-gray-100">
              {pioneeringTechnologies.map((tech, index) => (
                <motion.div 
                  key={index} 
                  variants={cardVariant}
                  className="p-6 flex flex-col h-full hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 relative mr-3 flex-shrink-0 rounded-sm overflow-hidden">
                      <Image 
                        src={tech.icon} 
                        alt={tech.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-nyati-navy">{tech.title}</h3>
                  </div>
                  <p className="text-sm text-nyati-dark-grey">{tech.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <SectionHeading>
                Energy Efficient Solutions
              </SectionHeading>
              
              <div className="bg-white rounded-sm shadow-sm overflow-hidden">                
                <div className="divide-y divide-gray-100">
                  {energyEfficientSolutions.map((solution, index) => (
                    <motion.div 
                      key={index} 
                      variants={cardVariant}
                      className="p-5 flex items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 relative mr-4 flex-shrink-0 rounded-sm overflow-hidden">
                        <Image 
                          src={solution.icon} 
                          alt={solution.title} 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-nyati-navy mb-1">{solution.title}</h3>
                        <p className="text-sm text-nyati-dark-grey">{solution.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading>
                Other Initiatives
              </SectionHeading>
              
              <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {otherInitiatives.map((initiative, index) => (
                    <motion.div 
                      key={index} 
                      variants={cardVariant}
                      className="p-5 flex items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 relative mr-4 flex-shrink-0 rounded-sm overflow-hidden">
                        <Image 
                          src={initiative.icon} 
                          alt={initiative.title} 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-nyati-navy mb-1">{initiative.title}</h3>
                        <p className="text-sm text-nyati-dark-grey">{initiative.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}