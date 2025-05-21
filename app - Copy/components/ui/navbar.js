'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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
  const [visible, setVisible] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownTimeoutRef = useRef(null)
  const navItemRefs = useRef([])
  const lastScrollY = useRef(0)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state for styling
      setScrolled(currentScrollY > 10)
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current + 10) {
        // Scrolling down - hide navbar
        setVisible(false)
      } else if (currentScrollY < lastScrollY.current - 10 || currentScrollY <= 0) {
        // Scrolling up or at the top - show navbar
        setVisible(true)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && e.target.classList.contains('mobile-overlay')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [])

  // Clean up any existing timeouts when unmounting
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveDropdown(null)
  }

  const toggleMobileDropdown = (index, e) => {
    e && e.preventDefault()
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  // Improved dropdown handler for desktop
  const handleDropdownHover = (index, isEntering) => {
    // Only apply for desktop
    if (window.innerWidth < 1024) return

    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }

    if (isEntering) {
      // Open dropdown immediately
      setActiveDropdown(index)
    } else {
      // Set a longer delay before closing the dropdown
      // This gives the user time to move to the dropdown content
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null)
      }, 500) // Increased timeout to 500ms to give more time to move to the dropdown
    }
  }

  const isActivePath = (path) => {
    if (path === pathname) return true
    if (path === '/blog' && pathname.startsWith('/blog/')) return true
    return false
  }

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform
          ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}
          ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 transition-all duration-300 transform hover:scale-105">
              <Image 
                src="/images/logo.jpg" 
                alt="Nyati Cement Logo" 
                width={55} 
                height={55} 
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-1">
                {navLinks.map((link, index) => (
                  <li 
                    key={index} 
                    className="relative group"
                    ref={el => navItemRefs.current[index] = el}
                    onMouseEnter={() => link.dropdown && handleDropdownHover(index, true)}
                    onMouseLeave={() => link.dropdown && handleDropdownHover(index, false)}
                  >
                    <div className="flex items-center">
                      <Link 
                        href={link.path}
                        className={`px-3 py-6 flex items-center text-sm font-medium transition-all duration-300 relative
                          ${isActivePath(link.path) ? 'text-nyati-orange' : 'text-nyati-navy hover:text-nyati-orange'}`}
                        onClick={(e) => link.dropdown && toggleMobileDropdown(index, e)}
                      >
                        <span className="relative z-10">{link.name}</span>
                        
                        {/* Active indicator line */}
                        <span 
                          className={`absolute inset-x-0 bottom-0 h-1 transform transition-all duration-300 ease-out bg-nyati-orange
                            ${isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                          style={{ transformOrigin: 'left center' }}
                        ></span>
                        
                        {/* Dropdown arrow */}
                        {link.dropdown && (
                          <svg 
                            className={`w-4 h-4 ml-1 transition-transform duration-300
                              ${activeDropdown === index ? 'rotate-180 text-nyati-orange' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                    </div>
                    
                    {/* Desktop Dropdown */}
                    {link.dropdown && (
                      <div 
                        className={`absolute left-0 mt-0 bg-white rounded-b-lg shadow-lg border-t-2 border-nyati-orange 
                          transition-all duration-300 w-64 z-50
                          ${activeDropdown === index ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}
                        onMouseEnter={() => handleDropdownHover(index, true)}
                        onMouseLeave={() => handleDropdownHover(index, false)}
                      >
                        <ul className="py-2">
                          {link.dropdown.map((item, idx) => (
                            <li key={idx}>
                              <Link 
                                href={item.path}
                                className={`block px-6 py-3 text-sm hover:bg-nyati-orange/10 hover:text-nyati-orange
                                  transition-all duration-200 relative
                                  ${pathname === item.path ? 'text-nyati-orange bg-nyati-orange/5' : 'text-nyati-dark-grey'}`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="transform transition-transform duration-300 inline-block hover:translate-x-1">
                                  {item.name}
                                </span>
                                <span className={`absolute left-0 top-0 bottom-0 w-1 bg-nyati-orange transform transition-all duration-300
                                  ${pathname === item.path ? 'scale-y-100' : 'scale-y-0 hover:scale-y-100'}`}>
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

            {/* Company Name (Desktop) */}
            <div className="hidden lg:block">
              <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-80">
                <Image 
                  src="/images/lake-cement-ltd.png" 
                  alt="Lake Cement Ltd" 
                  width={175} 
                  height={25} 
                  className="h-auto object-contain"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
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

      {/* Space for fixed header - conditionally rendered based on visibility */}
      <div className={`h-16 lg:h-20 transition-all duration-300 ${!visible ? 'opacity-0' : ''}`}></div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden mobile-overlay"
          onClick={toggleMenu}
        ></div>
      )}
      
      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-4/5 max-w-sm bg-white shadow-xl lg:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        {/* Mobile Menu Header */}
        <div className="p-4 flex items-center justify-end border-b border-gray-100">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-nyati-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Links */}
        <nav className="py-2">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.dropdown ? (
                  <>
                    <button 
                      className={`flex w-full items-center justify-between px-4 py-3 transition-colors
                        ${activeDropdown === index ? 'text-nyati-orange' : 'text-nyati-navy'}`}
                      onClick={() => toggleMobileDropdown(index)}
                    >
                      <span className="font-normal">{link.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`transition-max-height duration-300 ease-in-out overflow-hidden
                      ${activeDropdown === index ? 'max-h-96' : 'max-h-0'}`}>
                      <ul className="border-l-2 border-nyati-orange/30 ml-4 pl-2">
                        {link.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <Link 
                              href={item.path}
                              className={`block px-4 py-2.5 text-sm transition-colors
                                ${pathname === item.path ? 'text-nyati-orange' : 'text-nyati-dark-grey'}`}
                              onClick={toggleMenu}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-nyati-orange inline-block mr-2"></span>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.path}
                    className={`block px-4 py-3 transition-colors
                      ${isActivePath(link.path) ? 'text-nyati-orange' : 'text-nyati-navy'}`}
                    onClick={toggleMenu}
                  >
                    <span className="font-medium">{link.name}</span>
                  </Link>
                )}
                <div className="border-b border-gray-100 mx-4"></div>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Footer */}
        <div className="p-4 mt-auto">
          <div className="flex justify-center">
            <Image 
              src="/images/lake-cement-ltd.png" 
              alt="Lake Cement Ltd" 
              width={130} 
              height={18} 
              className="h-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </>
  )
}