'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    firmName: '',
    address: '',
    query: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      firmName: '',
      address: '',
      query: ''
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  }

  // Updated contact information structure
  const contactInfo = {
    corporate: {
      title: "Corporate Office",
      name: "IPN Pathak",
      position: "Strategic Business Head",
      address: "First Floor, ATC House, Plot 773/40, Ohio Street,\nPO Box-40707, Dar-Es-Salaam, Tanzania",
      phone: "Tel: +255 22 2139610",
      email: "ipn_p@lakecement.co.tz"
    },
    plant: {
      title: "Plant",
      name: "Biswajeet Mallik",
      position: "Chief Plant Operations Officer",
      address: "Kimbiji, Plot No. 265, Municipal Council - Temeke,\nPO Box-40707, Dar-Es-Salaam, Tanzania",
      phone: "Tel: +255 677 047 650",
      email: "biswajeet.mallik@lakecement.co.tz"
    },
    sales: [
      {
        region: "Dar Es Salaam | Pwani | Kilimanjaro | Arusha | Tanga - Projects",
        email: "sales@lakecement.co.tz",
        phone: "Tel: +255 713 556 004"
      },
      {
        region: "Morogoro | Dodoma | Singida | Southern Highland",
        email: "ajit.singh@lakecement.co.tz",
        phone: "Tel: +255 677 111 083"
      },
      {
        region: "Tabora | Kigoma | Kahama | Geita | Shinyanga | Mwanza",
        email: "nirav.oza@lakecement.co.tz",
        phone: "Tel: +255 677 054 539"
      }
    ]
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header remains the same */}
      <header className="relative bg-gradient-to-r from-nyati-navy to-nyati-navy/90 py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute -right-16 -top-16 text-blue-500/10 w-96 h-96" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg className="absolute -left-16 -bottom-16 text-nyati-orange/10 w-96 h-96" viewBox="0 0 100 100" fill="currentColor">
            <rect x="10" y="10" width="80" height="80" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-3 inline-block relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-nyati-orange"></span>
            </h1>
            <p className="text-blue-100 text-lg">
              We're here to answer your questions and help with your cement needs. 
              Get in touch with our experts today.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 py-12">
        {/* Redesigned Contact Cards Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="relative mb-12 flex items-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <h2 className="section-title px-4 mb-0 flex items-center">
              <span className="mr-3 text-nyati-orange">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Our Offices
            </h2>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          {/* Two-column layout on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Combined Office & Plant Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-white rounded-sm shadow-soft overflow-hidden"
            >
              <div className="bg-nyati-navy py-3 px-4">
                <h3 className="text-white font-bold text-base">Our Locations</h3>
              </div>
              
              <div className="p-5">
                {/* Corporate Office Section */}
                <div className="mb-4 pb-6 border-b border-gray-100">
                  <h4 className="font-semibold text-nyati-orange">Corporate Office</h4>
                  
                  <div className="space-y-0">
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-nyati-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{contactInfo.corporate.address}</p>
                    </div>
                    
                    <h5 className="font-medium text-nyati-dark-grey mb-1">{contactInfo.corporate.name}</h5>
                    <p className="text-gray-600 text-sm mb-2">{contactInfo.corporate.position}</p>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-nyati-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <p className="text-sm text-gray-600">{contactInfo.corporate.phone}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-nyati-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <a href={`mailto:${contactInfo.corporate.email}`} className="text-sm text-nyati-blue hover:text-nyati-orange transition-colors">{contactInfo.corporate.email}</a>
                    </div>
                  </div>
                </div>
                
                {/* Plant Section */}
                <div>
                  <h4 className="font-semibold text-nyati-orange">Plant</h4>
                  
                  <div className="space-y-0">
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-nyati-orange mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{contactInfo.plant.address}</p>
                    </div>
                    
                    <h5 className="font-medium text-nyati-dark-grey mb-1">{contactInfo.plant.name}</h5>
                    <p className="text-gray-600 text-sm mb-2">{contactInfo.plant.position}</p>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-nyati-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <p className="text-sm text-gray-600">{contactInfo.plant.phone}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-nyati-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <a href={`mailto:${contactInfo.plant.email}`} className="text-sm text-nyati-blue hover:text-nyati-orange transition-colors">{contactInfo.plant.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sales and Marketing Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-white rounded-sm shadow-soft overflow-hidden"
            >
              <div className="bg-nyati-navy py-3 px-4">
                <h3 className="text-white font-bold text-base">Sales and Marketing</h3>
              </div>
              
              <div className="p-5">
                <div className="space-y-3 mt-6">
                  {contactInfo.sales.map((region, index) => (
                    <div key={index} className={`${index !== contactInfo.sales.length - 1 ? 'pb-5 border-b border-gray-100' : ''}`}>
                      <h4 className="font-medium text-nyati-dark-grey mb-3 text-sm">{region.region}</h4>
                      
                      <div className="space-y-0 mb-6">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-nyati-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                          <p className="text-sm text-gray-600">{region.phone}</p>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-nyati-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <a href={`mailto:${region.email}`} className="text-sm text-nyati-blue hover:text-nyati-orange transition-colors">{region.email}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form and Maps Section */}
        <div className="mb-16">
          <div className="relative mb-12 flex items-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <h2 className="section-title px-4 mb-0 flex items-center">
              <span className="mr-3 text-nyati-orange">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              Get in Touch
            </h2>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-sm shadow-md overflow-hidden"
              >
                <div className="bg-gradient-to-r from-nyati-navy to-nyati-dark-blue p-8 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-sm transform translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-nyati-orange/10 rounded-sm transform -translate-x-6 translate-y-6"></div>
                  
                  <h3 className="text-white text-2xl mb-2 relative z-10">Write to Us</h3>
                  <p className="text-blue-100 text-lg max-w-3xl relative z-10">
                    Get in touch with our team. We're here to help with your questions, requests, and cement needs.
                    Our team will get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="form-group" variants={itemVariants}>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange/50 focus:border-nyati-orange transition-all duration-200"
                      />
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange/50 focus:border-nyati-orange transition-all duration-200"
                      />
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                      <input 
                        type="tel" 
                        id="contactNumber" 
                        name="contactNumber" 
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange/50 focus:border-nyati-orange transition-all duration-200"
                      />
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange/50 focus:border-nyati-orange transition-all duration-200"
                      />
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
                      <label htmlFor="firmName" className="block text-sm font-medium text-gray-700 mb-2">Firm's Name</label>
                      <input 
                        type="text" 
                        id="firmName" 
                        name="firmName" 
                        value={formData.firmName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange/50 focus:border-nyati-orange transition-all duration-200"
                      />
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange/50 focus:border-nyati-orange transition-all duration-200"
                      />
                    </motion.div>

                    <motion.div className="form-group md:col-span-2" variants={itemVariants}>
                      <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                      <textarea 
                        id="query" 
                        name="query" 
                        value={formData.query}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange/50 focus:border-nyati-orange transition-all duration-200"
                      ></textarea>
                    </motion.div>
                  </motion.div>

                  <div className="flex justify-end space-x-4 mt-8">
                    <motion.button 
                      type="button" 
                      onClick={handleReset}
                      className="btn btn-secondary px-6"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reset
                    </motion.button>
                    <motion.button 
                      type="submit" 
                      className="btn btn-primary px-8 py-3"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Submit Message
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Maps Section */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
                <div className="bg-nyati-navy p-4">
                  <h3 className="text-white font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Our Locations
                  </h3>
                </div>
                
                <div className="p-4 flex flex-col h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 bg-gray-50 p-4 rounded-sm flex-1"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-nyati-orange rounded-sm mr-2"></div>
                      <h4 className="text-sm font-semibold">Lake Cement Head Office</h4>
                    </div>
                    <div className="h-60 rounded-sm overflow-hidden border border-gray-200">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6423469008564!2d39.28917679999999!3d-6.813283299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b4b0d6422a9%3A0x1683658d6536a34e!2sLake%20Cement%20Limited!5e0!3m2!1sen!2stz!4v1739883254501!5m2!1sen!2stz" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                      ></iframe>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-4 rounded-sm flex-1"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-nyati-navy rounded-sm mr-2"></div>
                      <h4 className="text-sm font-semibold">Lake Cement Factory</h4>
                    </div>
                    <div className="h-60 rounded-sm overflow-hidden border border-gray-200">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1024064256535!2d39.52027497524509!3d-6.997220093003958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185ddb1e88621cb1%3A0x7f3de8c43fa63494!2sNYATI%20CEMENT-Kimbiji!5e0!3m2!1sen!2stz!4v1739883859956!5m2!1sen!2stz" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                      ></iframe>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* Bottom decorative element */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-nyati-navy via-nyati-orange to-nyati-navy rounded-sm"></div>
        </div>
      </div>
    </div>
  )
}