'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Updated paths to match Next.js app directory structure, with added Blog link
const navLinks = [
  { 
    name: 'About', 
    path: '/about', 
    dropdown: [
      { name: 'About us', path: '/about/about-us' },
      { name: 'The plant', path: '/about/plant' },
      { name: 'Certifications', path: '/about/certifications' },
      { name: 'CSR', path: '/about/csr' },
      { name: 'Code of conduct', path: '/about/code-of-conduct' },
      { name: 'Brochure', path: '/about/brochure' },
    ] 
  },
  { name: 'Our Products', path: '/products' },
  { name: 'Quality control', path: '/quality-control' },
  { name: 'Distribution', path: '/distribution' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'News', path: '/news' },
  { name: 'Blog', path: '/blog'},
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMenuItem, setActiveMenuItem] = useState(null)
  const navbarRef = useRef(null)
  const dropdownRefs = useRef([])
  const mobileMenuRef = useRef(null)

  // Set active menu item based on current path
  useEffect(() => {
    const currentPath = pathname;
    const activeIndex = navLinks.findIndex(link => 
      currentPath === link.path || 
      (link.dropdown && link.dropdown.some(item => item.path === currentPath)) ||
      (currentPath.startsWith('/blog/') && link.path === '/blog')
    );
    
    if (activeIndex !== -1) {
      setActiveMenuItem(activeIndex);
    }
  }, [pathname]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if scrolled past threshold
      if (currentScrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true) // Scrolling down - hide navbar
      } else {
        setHidden(false) // Scrolling up - show navbar
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown !== null &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target) &&
        !navbarRef.current?.contains(event.target)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  // Handle escape key press to close dropdowns and mobile menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Reset active dropdown when opening menu to avoid height issues
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Fixed Header/Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white shadow-lg border-b border-nyati-orange/20' 
            : 'bg-white/95 backdrop-blur-sm'
        } ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
        ref={navbarRef}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left Logo */}
            <div className="flex-shrink-0 relative z-10">
              <Link href="/" className="block transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Nyati Cement Logo" 
                    width={55} 
                    height={55} 
                    className="object-contain rounded-none"
                    priority
                  />                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <li key={index} 
                    className="relative group" 
                    onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                    onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                    ref={el => dropdownRefs.current[index] = el}
                  >
                    <Link 
                      href={link.path} 
                      className={`px-3 py-6 flex items-center text-sm font-medium transition-all duration-300 group relative
                        ${activeMenuItem === index || pathname === link.path || (pathname.startsWith('/blog/') && link.path === '/blog')
                          ? 'text-nyati-orange' 
                          : 'text-nyati-navy hover:text-nyati-orange'}`}
                      onClick={() => setActiveMenuItem(index)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Underline effect */}
                      <span className={`absolute inset-x-0 bottom-0 h-1 transform transition-all duration-300 ease-out bg-nyati-orange
                        ${activeMenuItem === index || pathname === link.path || (pathname.startsWith('/blog/') && link.path === '/blog')
                          ? 'scale-x-100' 
                          : 'scale-x-0 group-hover:scale-x-100'}`}
                        style={{ transformOrigin: 'left center' }}
                      ></span>
                      
                      {/* Dropdown indicator */}
                      {link.dropdown && (
                        <svg 
                          className={`w-4 h-4 ml-1 transition-transform duration-300 ease-in-out
                            ${activeDropdown === index ? 'rotate-180 text-nyati-orange' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    
                    {/* Dropdown Menu - Modern Design */}
                    {link.dropdown && (
                      <div 
                        className={`absolute left-0 mt-0 bg-white rounded-b-lg shadow-strong border-t-2 border-nyati-orange 
                          transition-all duration-300 w-64 overflow-hidden
                          ${activeDropdown === index 
                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ transformOrigin: 'top center' }}
                      >
                        <ul className="py-2">
                          {link.dropdown.map((dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                              <Link 
                                href={dropdownItem.path}
                                className={`block px-6 py-3 text-sm hover:bg-nyati-orange/10 hover:text-nyati-orange
                                  transition-all duration-200 relative group/item
                                  ${pathname === dropdownItem.path ? 'text-nyati-orange bg-nyati-orange/5' : 'text-nyati-dark-grey'}`}
                              >
                                <span className="relative z-10 group-hover/item:translate-x-2 transition-transform duration-300">
                                  {dropdownItem.name}
                                </span>
                                
                                {/* Left border indicator for hover state */}
                                <span className={`absolute left-0 top-0 bottom-0 w-1 bg-nyati-orange transform transition-transform duration-300
                                  ${pathname === dropdownItem.path ? 'scale-y-100' : 'scale-y-0 group-hover/item:scale-y-100'}`}>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Logo/Company Name */}
            <div className="hidden lg:block">
              <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-80">
                <Image 
                  src="/images/lake-cement-ltd.png" 
                  alt="Lake Cement Ltd" 
                  width={160} 
                  height={24} 
                  className="h-auto object-contain"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden relative z-50 flex items-center justify-center w-12 h-12 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 bg-nyati-navy transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 top-2' : 'top-0'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-nyati-navy top-2 transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0 w-0' : 'opacity-100 w-6'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-nyati-navy transform transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 top-2' : 'top-4'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Add padding to the top of the page to account for fixed header */}
      <div className="h-20"></div>

      {/* Mobile Menu - Full Screen Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Mobile Menu Panel */}
      <div 
        ref={mobileMenuRef}
        className={`fixed inset-y-0 right-0 z-50 w-10/12 max-w-sm bg-white shadow-xl lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="p-5 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/logo.jpg" 
                alt="Nyati Cement Logo" 
                width={45} 
                height={45}
                className="object-contain rounded-none"
              />
            </div>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-nyati-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu scrollable content */}
          <div className="flex-1 overflow-y-auto py-2">
            <nav>
              <ul className="space-y-0">
                {navLinks.map((link, index) => (
                  <li key={index} className="px-2">
                    {link.dropdown ? (
                      <div className="mb-0">
                        <button 
                          className={`flex w-full items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200
                            ${activeDropdown === index ? 'bg-nyati-orange/10 text-nyati-orange' : 'text-nyati-navy hover:bg-gray-100'}`}
                          onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                          aria-expanded={activeDropdown === index}
                        >
                          <span className="text-base font-medium">{link.name}</span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {activeDropdown === index && (
                          <div className="mt-1 ml-2 border-l border-nyati-orange/30 pl-2">
                            <ul className="space-y-0 py-1">
                              {link.dropdown.map((dropdownItem, dropdownIndex) => (
                                <li key={dropdownIndex}>
                                  <Link 
                                    href={dropdownItem.path}
                                    className={`block flex items-center px-3 py-2 rounded-lg text-sm transition-colors duration-200
                                      ${pathname === dropdownItem.path 
                                        ? 'bg-nyati-orange/5 text-nyati-orange' 
                                        : 'text-nyati-dark-grey hover:bg-gray-100'}`}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-nyati-orange mr-2"></span>
                                    {dropdownItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link 
                        href={link.path}
                        className={`flex items-center px-3 py-2.5 rounded-lg transition-colors duration-200 block w-full
                          ${pathname === link.path || (pathname.startsWith('/blog/') && link.path === '/blog')
                            ? 'bg-nyati-orange/10 text-nyati-orange' 
                            : 'text-nyati-navy hover:bg-gray-100'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-base font-medium">{link.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Mobile menu footer */}
          <div className="p-5 border-t border-gray-200">
            <div className="flex justify-center">
              <Image 
                src="/images/lake-cement-ltd.png" 
                alt="Lake Cement Ltd" 
                width={140} 
                height={20} 
                className="h-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}