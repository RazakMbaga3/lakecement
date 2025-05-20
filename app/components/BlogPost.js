// components/BlogPost.js
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogPost = ({ 
  title, 
  date,  
  category,
  readTime = "5 min read",
  children,
  relatedPosts = []
}) => {
  // Helper function to get category color
  const getCategoryColor = (categoryName) => {
    const categories = {
      'Technical Knowledge': 'bg-blue-100 text-blue-800',
      'Construction Best Practices': 'bg-amber-100 text-amber-800',
      'DIY & Home Building': 'bg-green-100 text-green-800',
      'Sustainability & Innovation': 'bg-teal-100 text-teal-800',
      'Industry Insights': 'bg-violet-100 text-violet-800',
      'Application Guides': 'bg-orange-100 text-orange-800',
      'Customer Spotlights': 'bg-red-100 text-red-800'
    };
    
    return categories[categoryName] || 'bg-gray-100 text-gray-800';
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <nav className="flex text-sm">
          <Link href="/" className="text-nyati-grey hover:text-nyati-orange transition-colors">
            Home
          </Link>
          <span className="mx-2 text-nyati-grey">/</span>
          <Link href="/blog" className="text-nyati-grey hover:text-nyati-orange transition-colors">
            Blog
          </Link>
          {category && (
            <>
              <span className="mx-2 text-nyati-grey">/</span>
              <Link 
                href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-nyati-grey hover:text-nyati-orange transition-colors"
              >
                {category}
              </Link>
            </>
          )}
        </nav>
      </div>
      
      {/* Article Header */}
      <header className="mb-10">
        {category && (
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
              {category}
            </span>
          </div>
        )}
        
        <h1 className="text-3xl md:text-4xl font-bold text-nyati-navy mb-4 leading-tight">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center text-nyati-grey text-sm gap-4">
          
          {date && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time>{date}</time>
            </div>
          )}
          
          {readTime && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </header>
      
      {/* Social Sharing */}
      <div className="border-t border-b border-gray-200 py-4 mb-8 flex justify-between items-center">
        <div className="text-sm text-nyati-grey">
          Share this article:
        </div>
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="prose prose-lg max-w-none text-nyati-dark-grey">
        {children}
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 bg-nyati-navy rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Have Questions About Your Project?</h3>
        <p className="text-nyati-orange mb-6 max-w-2xl mx-auto">
          Our team of experienced engineers and technical advisors is here to provide professional guidance for your construction needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-nyati-orange hover:bg-nyati-grey text-white hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Contact Our Technical Team
          </Link>
          <Link 
            href="/products" 
            className="bg-white hover:bg-gray-100 text-nyati-navy font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogPost