// app/components/ui/AnimatedNavbar.jsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navLinks = [
    { name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about/us' },
        { name: 'The Plant', path: '/about/plant' },
        { name: 'Certifications', path: '/about/certifications' },
        { name: 'CSR', path: '/about/csr' },
        { name: 'Code of Conduct', path: '/about/code-of-conduct' },
      ]
    },
    { name: 'Products', path: '/products' },
    { name: 'Quality Control', path: '/quality-control' },
    { name: 'Distribution', path: '/distribution' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image 
              src="/images/logo.jpg" 
              alt="Nyati Cement Logo" 
              width={120} 
              height={70} 
              className="h-16 w-auto"
            />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link href={link.path} className={`text-${scrolled ? 'nyati-navy' : 'white'} font-medium hover:text-nyati-orange transition-colors duration-300`}>
                  {link.name}
                </Link>
                
                {link.dropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ transformOrigin: 'top center' }}
                  >
                    <div className="py-2">
                      {link.dropdown.map((item, i) => (
                        <Link 
                          key={i}
                          href={item.path}
                          className="block px-4 py-2 text-nyati-navy hover:bg-nyati-orange hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-nyati-orange text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.path}
                  className="block py-2 text-nyati-navy font-medium hover:text-nyati-orange transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                
                {link.dropdown && (
                  <ul className="pl-4 mt-1 space-y-1 border-l-2 border-nyati-orange">
                    {link.dropdown.map((item, i) => (
                      <li key={i}>
                        <Link 
                          href={item.path}
                          className="block py-1 text-nyati-navy hover:text-nyati-orange transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.header>
  )
}