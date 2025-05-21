'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    <>
      {/* Split Hero Banner */}
      <div className="relative flex flex-col lg:flex-row">
        {/* Left Side - Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="lg:w-1/2 bg-nyati-navy text-white px-8 py-16 lg:py-24 flex items-center"
        >
          <div className="max-w-xl mx-auto">
            <h1 className="text-2xl text-nyati-orange md:text-4xl lg:text-5xl font-bold mb-6">
              Distribution Network
            </h1>
            <p className="text-xl md:text-xl text-white/90 leading-relaxed">
              Our extensive distribution network ensures Nyati Cement reaches every corner of Tanzania, 
              supporting construction projects of all sizes with reliable supply and excellent service.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="lg:w-1/2 relative h-[400px] lg:h-auto"
        >
          <Image 
            src="/images/distribution/driver.png"
            alt="Distribution Network" 
            fill
            priority
            className="object-cover"
          />
          
          {/* Truck image overlay */}
          <div className="absolute left-0 bottom-0 w-64 h-40 md:w-80 md:h-48">
            <Image 
              src="/images/nyati-truck-container.png" 
              alt="Nyati Truck" 
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

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
                  className="bg-nyati-orange text-white py-1 px-4 text-sm rounded-sm hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50"
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
                <div className="relative h-60 w-full overflow-hidden rounded-sm">
                  <Image 
                    src="/images/trainee.jpeg" 
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
    </>
  )
}