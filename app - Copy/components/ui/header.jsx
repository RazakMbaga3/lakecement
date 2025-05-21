// app/components/Header.jsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo.jpg" 
                alt="Lake Cement Logo" 
                width={110} 
                height={110} 
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button 
            className="lg:hidden flex flex-col space-y-1.5 p-2 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-nyati-dark-blue"
            ></motion.span>
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-nyati-dark-blue"
            ></motion.span>
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-nyati-dark-blue"
            ></motion.span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-6">
              <li className="relative group">
                <button 
                  onClick={() => handleDropdownToggle('about')}
                  className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2 flex items-center"
                >
                  ABOUT US
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {(activeDropdown === 'about' || (!activeDropdown && scrolled)) && (
                    <motion.ul 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md py-2 z-50"
                    >
                      <li><Link href="/about-us" className="block px-4 py-2 text-sm text-nyati-dark-blue hover:bg-nyati-orange hover:text-white transition-colors">ABOUT US</Link></li>
                      <li><Link href="/the-plant" className="block px-4 py-2 text-sm text-nyati-dark-blue hover:bg-nyati-orange hover:text-white transition-colors">THE PLANT</Link></li>
                      <li><Link href="/certifications" className="block px-4 py-2 text-sm text-nyati-dark-blue hover:bg-nyati-orange hover:text-white transition-colors">CERTIFICATIONS</Link></li>
                      <li><Link href="/csr" className="block px-4 py-2 text-sm text-nyati-dark-blue hover:bg-nyati-orange hover:text-white transition-colors">CSR</Link></li>
                      <li><Link href="/code-of-conduct" className="block px-4 py-2 text-sm text-nyati-dark-blue hover:bg-nyati-orange hover:text-white transition-colors">CODE OF CONDUCT</Link></li>
                      <li><a href="/PDF/Brochure 2024 FINAL LOW RES.pdf" target="_blank" className="block px-4 py-2 text-sm text-nyati-dark-blue hover:bg-nyati-orange hover:text-white transition-colors">BROCHURE</a></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li><Link href="/products" className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2">PRODUCTS</Link></li>
              <li><Link href="/quality-control" className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2">QUALITY CONTROL</Link></li>
              <li><Link href="/distribution-and-service" className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2">DISTRIBUTION & SERVICE</Link></li>
              <li><Link href="/sustainability" className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2">SUSTAINABILITY</Link></li>
              <li><Link href="/news" className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2">NEWS</Link></li>
              <li><Link href="/careers" className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2">CAREERS</Link></li>
              <li><Link href="/contact" className="text-nyati-dark-blue font-medium hover:text-nyati-orange transition-colors py-2">CONTACT</Link></li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl z-50 overflow-y-auto"
              >
                <div className="p-4 flex flex-col h-full">
                  {/* Mobile Header with Close Button */}
                  <div className="flex items-center justify-end mb-6">
                    <button 
                      onClick={toggleMenu}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Close menu"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Navigation Content */}
                  <nav>
                    <ul className="space-y-6">
                      <li>
                        <button 
                          onClick={() => handleDropdownToggle('mobileAbout')}
                          className="text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors flex items-center"
                        >
                          ABOUT US
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === 'mobileAbout' && (
                            <motion.ul 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 mt-2 space-y-2 overflow-hidden"
                            >
                              <li><Link href="/about-us" className="block py-2 text-nyati-dark-blue hover:text-nyati-orange transition-colors" onClick={toggleMenu}>ABOUT US</Link></li>
                              <li><Link href="/the-plant" className="block py-2 text-nyati-dark-blue hover:text-nyati-orange transition-colors" onClick={toggleMenu}>THE PLANT</Link></li>
                              <li><Link href="/certifications" className="block py-2 text-nyati-dark-blue hover:text-nyati-orange transition-colors" onClick={toggleMenu}>CERTIFICATIONS</Link></li>
                              <li><Link href="/csr" className="block py-2 text-nyati-dark-blue hover:text-nyati-orange transition-colors" onClick={toggleMenu}>CSR</Link></li>
                              <li><Link href="/code-of-conduct" className="block py-2 text-nyati-dark-blue hover:text-nyati-orange transition-colors" onClick={toggleMenu}>CODE OF CONDUCT</Link></li>
                              <li><a href="/PDF/Brochure 2024 FINAL LOW RES.pdf" target="_blank" className="block py-2 text-nyati-dark-blue hover:text-nyati-orange transition-colors" onClick={toggleMenu}>BROCHURE</a></li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                      <li><Link href="/products" className="block text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors" onClick={toggleMenu}>PRODUCTS</Link></li>
                      <li><Link href="/quality-control" className="block text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors" onClick={toggleMenu}>QUALITY CONTROL</Link></li>
                      <li><Link href="/distribution-and-service" className="block text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors" onClick={toggleMenu}>DISTRIBUTION & SERVICE</Link></li>
                      <li><Link href="/sustainability" className="block text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors" onClick={toggleMenu}>SUSTAINABILITY</Link></li>
                      <li><Link href="/news" className="block text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors" onClick={toggleMenu}>NEWS</Link></li>
                      <li><Link href="/careers" className="block text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors" onClick={toggleMenu}>CAREERS</Link></li>
                      <li><Link href="/contact" className="block text-nyati-dark-blue font-bold text-xl hover:text-nyati-orange transition-colors" onClick={toggleMenu}>CONTACT</Link></li>
                    </ul>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lake Cement Ltd text/logo */}
          <div className="hidden lg:block">
            <Link href="/">
              <Image 
                src="/images/lake-cement-ltd-white.png" 
                alt="Lake Cement Ltd" 
                width={200} 
                height={22} 
                className="h-6 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}