'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
};

export default function DistributionForm() {
  const [formData, setFormData] = useState({
    firmName: '',
    address: '',
    area: '',
    city: '',
    poBox: '',
    contactPerson: '',
    contactNumber: '',
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to the server endpoint
      const response = await fetch('/api/send-distributor-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipient: 'info@lakecement.co.tz',
          subject: `Distributor Application: ${formData.firmName}`
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your application has been submitted successfully! We will contact you soon.'
        });
        // Reset form after successful submission
        setFormData({
          firmName: '', address: '', area: '', city: '', poBox: '', 
          contactPerson: '', contactNumber: '', email: ''
        });
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your application. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firmName: '', address: '', area: '', city: '', poBox: '', 
      contactPerson: '', contactNumber: '', email: ''
    });
    setSubmitStatus(null);
  };

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
              src="/images/distribution/driver.jpg"
              alt="Distribution Network"
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
                <li><span className="text-white">Distribution</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Delivering Quality
              <br />
              <span className="text-nyati-orange">Nationwide</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join our growing network of distributors and be part of Nyati's commitment 
              to delivering excellence across Tanzania.
            </motion.p>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm border border-white/10">
                <div className="text-nyati-orange text-2xl font-bold mb-1">24/7</div>
                <div className="text-white text-sm">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotline Section - Styled similarly to the reference */}
      <div className="bg-white py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center">
          <div className="flex items-center text-nyati-orange font-medium">
            <span className="mr-2 font-bold">HOTLINE</span>
            <Image 
              src="/images/telephone (2).png" 
              alt="Phone" 
              width={20} 
              height={20} 
              className="mr-2"
            />
            <span className="text-lg">+255 65 8888999</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Distribution Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="bg-white p-4"
          >
            <h2 className="text-xl font-bold mb-2 text-nyati-navy">DISTRIBUTION</h2>
            <p className="text-sm text-gray-700 mb-3">
              If you are interested in being part of Tanzania's growth story as a Nyati dealer, please fill in these details.
            </p>
            
            {submitStatus && (
              <div className={`mb-3 p-2 text-sm rounded-sm ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <div className="form-group">
                  <label htmlFor="firmName" className="block text-gray-700 text-xs mb-1">Name of the Firm</label>
                  <input 
                    type="text" 
                    id="firmName" 
                    value={formData.firmName}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="address" className="block text-gray-700 text-xs mb-1">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="area" className="block text-gray-700 text-xs mb-1">Area</label>
                  <input 
                    type="text" 
                    id="area" 
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="city" className="block text-gray-700 text-xs mb-1">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="poBox" className="block text-gray-700 text-xs mb-1">P.O. Box No.</label>
                  <input 
                    type="text" 
                    id="poBox" 
                    value={formData.poBox}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactPerson" className="block text-gray-700 text-xs mb-1">Contact Person</label>
                  <input 
                    type="text" 
                    id="contactPerson" 
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactNumber" className="block text-gray-700 text-xs mb-1">Contact Number</label>
                  <input 
                    type="tel" 
                    id="contactNumber" 
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="block text-gray-700 text-xs mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-nyati-orange" 
                    required 
                  />
                </div>
              </div>
              
              <div className="flex space-x-2 mt-3">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-nyati-orange text-white py-1 px-4 text-sm rounded-sm hover:bg-nyati-navy transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="bg-gray-200 text-gray-800 py-1 px-4 text-sm rounded-sm hover:bg-gray-300 transition-colors duration-300"
                >
                  Reset
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Service Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="bg-white p-4"
          >
            <h2 className="text-xl font-bold mb-2 text-nyati-navy">SERVICE</h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-50 p-3 rounded-sm">
                <p className="text-sm text-gray-700">
                  We provide technical support to customers on issues related to architectural, structural and general civil engineering.
                </p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-sm">
                <p className="text-sm text-gray-700">
                  We educate and train our field staff and the sales force of our business partners regarding our products and their applications.
                </p>
              </div>
              
              <div className="bg-white">
                <div className="relative h-72 w-full overflow-hidden rounded-sm">
                  <Image 
                    src="/images/distribution/fundis.jpg" 
                    alt="Technical Seminar" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-nyati-orange text-white p-2 text-center text-sm font-medium">
                    WE CONDUCT TECHNICAL SEMINARS FOR MASONS AND BLOCKMAKERS
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}