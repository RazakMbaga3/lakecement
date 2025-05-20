'use client'
// app/blog/page.js
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Note: Metadata is removed from this file as it can't be exported from a client component

// Blog post categories with their respective colors
const categories = [
  { 
    id: 'technical-knowledge', 
    name: 'Technical Knowledge', 
    color: 'bg-blue-100 text-blue-800',
    description: 'In-depth technical articles on cement properties and applications'
  },
  { 
    id: 'construction-best-practices', 
    name: 'Construction Best Practices', 
    color: 'bg-amber-100 text-amber-800',
    description: 'Professional techniques and methodologies for optimal construction'
  },
  { 
    id: 'diy-home-building', 
    name: 'DIY & Home Building', 
    color: 'bg-green-100 text-green-800',
    description: 'Guides for homeowners and small-scale construction projects'
  },
  { 
    id: 'sustainability-innovation', 
    name: 'Sustainability & Innovation', 
    color: 'bg-teal-100 text-teal-800',
    description: 'Environmental initiatives and forward-thinking approaches'
  },
  { 
    id: 'industry-insights', 
    name: 'Industry Insights', 
    color: 'bg-violet-100 text-violet-800',
    description: 'Market trends and developments in the cement and construction sectors'
  },
  { 
    id: 'application-guides', 
    name: 'Application Guides', 
    color: 'bg-orange-100 text-orange-800',
    description: 'Specific use-cases and applications for different cement types'
  },
  { 
    id: 'customer-spotlights', 
    name: 'Customer Spotlights', 
    color: 'bg-red-100 text-red-800',
    description: 'Success stories and case studies featuring Nyati Cement products'
  }
]

// All blog posts (published and upcoming)
const allPosts = [
  {
    id: 'building-your-dream-home',
    title: 'Building Your Dream Home with Nyati Cement: A Step-by-Step Guide',
    excerpt: 'Learn the complete process of home construction from foundation to finishing with quality Nyati Cement products.',
    image: '/images/blog/home.webp',
    date: 'April 3, 2025',
    category: 'DIY & Home Building',
    slug: '/blog/building-your-dream-home',
    status: 'published',
    readTime: '5 Minute Read'
  },
  {
    id: 'understanding-cement-grades',
    title: 'Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project',
    excerpt: 'Learn how to select the perfect cement grade for your specific construction needs with our comprehensive guide.',
    image: '/images/blog/understanding-cement-grades.jpg',
    date: 'March 28, 2025',
    category: 'Technical Knowledge',
    slug: '/blog/understanding-cement-grades',
    status: 'published',
    readTime: '3 Minute Read'
  },
  {
    id: 'water-cement-ratio',
    title: 'The Role of Water-Cement Ratio in Concrete Durability',
    excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
    image: '/images/blog/water-cement-ratio.jpg',
    date: 'March 26, 2025',
    category: 'Technical Knowledge',
    slug: '/blog/water-cement-ratio',
    status: 'published',
    readTime: '2 Minute Read'
  },
  {
    id: 'concrete-curing',
    title: 'Understanding Concrete Curing: Best Practices for Maximum Strength',
    excerpt: 'Master the art of proper concrete curing to achieve optimal strength and durability in your construction projects.',
    image: '/images/blog/concrete-curing.jpg',
    date: 'March 24, 2025',
    category: 'Construction Best Practices',
    slug: '/blog/concrete-curing',
    status: 'published',
    readTime: '1 Minute Read'
  },
  {
    id: 'compressive-strength',
    title: 'Why Compressive Strength Matters: Nyati Cement\'s Testing Standards',
    excerpt: 'Understand the importance of compressive strength testing and how Nyati ensures consistent quality.',
    image: '/images/blog/compression-test.jpg',
    date: 'March 22, 2025',
    category: 'Technical Knowledge',
    slug: '/blog/compressive-strength-testing',
    status: 'published',
    readTime: '2 Minute Read'
  },
  {
    id: 'infrastructure-boom',
    title: 'Tanzania\'s Infrastructure Boom: The Role of Quality Cement in Nation Building',
    excerpt: 'Explore how quality cement is driving infrastructure development across Tanzania.',
    image: '/images/blog/rufijidam1.jpg',
    date: 'March 20, 2025',
    category: 'Industry Insights',
    slug: '/blog/tanzania-infrastructure-boom',
    status: 'published',
    readTime: '3 Minute Read'
  },
  {
    id: 'Monsoon Construction',
    title: 'Monsoon Construction Guide: Building with Cement During Rainy Seasons',
    excerpt: 'Essential tips for ensuring quality construction during Tanzania\'s rainy seasons.',
    image: '/images/blog/monsoon-construction.jpeg',
    date: 'April 04, 2025',
    category: 'Construction Best Practices',
    slug: '/blog/monsoon-construction',
    status: 'published',
    readTime: '4 Minute Read'
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);
  
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-nyati-navy py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nyati Knowledge Hub
          </h1>
          <p className="text-xl text-nyati-orange max-w-3xl mx-auto">
            Expert insights, construction guides, and industry expertise from Tanzania's leading cement manufacturer
          </p>
        </div>
      </div>
      
      {/* Categories Filter Bar - Updated with click handlers */}
      <div className="bg-white shadow py-4 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <button 
              className={`${selectedCategory === 'All' ? 'bg-nyati-orange text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} px-6 py-2 rounded-sm text-sm font-medium transition-colors`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category.id}
                className={`${selectedCategory === category.name ? 'bg-nyati-orange text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} px-6 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition-colors`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Blog Content - Using filtered posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Display message if no posts in category */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-nyati-navy mb-2">No posts in this category yet</h3>
            <p className="text-gray-600">Please check back later or explore other categories.</p>
          </div>
        )}
        
        {/* Featured Posts - First Row */}
        {filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {filteredPosts.slice(0, 3).map((post, index) => (
            <div key={post.id} className="bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
                {post.status === 'upcoming' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold px-3 py-1 bg-nyati-orange rounded-sm">Coming Soon</span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5">
                {/* Category & Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-medium py-1 px-3 rounded-sm ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-nyati-orange transition-colors">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                
                {/* Author & Read Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
        
        {/* Remaining Posts - Second Row */}
        {filteredPosts.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.slice(3).map((post) => (
            <div key={post.id} className="bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {post.status === 'upcoming' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold px-3 py-1 bg-nyati-orange rounded-sm">Coming Soon</span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5">
                {/* Category & Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-medium py-1 px-3 rounded-sm ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-nyati-orange transition-colors">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                
                {/* Author & Read Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-nyati-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Nyati Cement</h2>
          <p className="text-xl text-nyati-orange mb-8">
            Subscribe to receive our latest articles, project showcases, and construction tips
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange"
              required
            />
            <button 
              type="submit" 
              className="bg-nyati-orange hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

// Helper function to get category color based on category name
function getCategoryColor(categoryName) {
  const category = categories.find(cat => cat.name === categoryName);
  return category ? category.color : 'bg-gray-100 text-gray-800';
}