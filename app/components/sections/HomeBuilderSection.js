// components/sections/HomeBuilderSection.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeBuilderSection = () => {
  return (
    <div className="bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-nyati-orange text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-3">
            <Link href="/for-home-builders" className="font-medium border-b-2 border-white">
              For Home Builders
            </Link>
            <Link href="/for-infrastructure" className="font-medium hover:border-b-2 hover:border-white transition-all">
              For Infrastructure
            </Link>
            <Link href="/for-commercial" className="font-medium hover:border-b-2 hover:border-white transition-all">
              For Commercial
            </Link>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-nyati-navy mb-4 animate-fade-in">Building Dreams with Nyati</h1>
        <h2 className="text-2xl text-nyati-grey mb-6 animate-slide-up">From Foundation to Finishing Touches</h2>
        <p className="text-lg max-w-4xl animate-slide-up">
          Explore our comprehensive guides, expert tips, and detailed checklists to help you build your dream home with confidence using Nyati Cement products.
        </p>
      </div>

      {/* Main Interactive Section */}
      <div className="container mx-auto px-4 py-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Building Visualization */}
          <div className="relative rounded-xl overflow-hidden h-[600px] shadow-strong animate-scale-in">
            <Image 
              src="/images/home-building/house-construction-stages.jpg"
              alt="Home construction stages with Nyati Cement"
              fill
              className="object-cover"
            />
            
            {/* Interactive Hotspots */}
            <div className="absolute top-1/4 left-1/4 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-nyati-orange flex items-center justify-center border-2 border-white animate-float">
                <span className="text-white font-bold">1</span>
              </div>
              
              {/* Popup for Foundation */}
              <div className="absolute top-full left-0 mt-2 bg-white shadow-strong rounded-lg p-4 w-64 z-10 hidden group-hover:block transition-all">
                <h4 className="font-bold text-nyati-navy mb-2">Strong Foundations</h4>
                <p className="text-sm text-nyati-grey mb-2">Build a solid foundation with Nyati Super 42 for lasting durability.</p>
                <Link href="/guides/foundation" className="text-nyati-orange text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-nyati-orange flex items-center justify-center border-2 border-white animate-float" style={{animationDelay: "1s"}}>
                <span className="text-white font-bold">2</span>
              </div>
              
              {/* Popup for Walls */}
              <div className="absolute top-full left-0 mt-2 bg-white shadow-strong rounded-lg p-4 w-64 z-10 hidden group-hover:block transition-all">
                <h4 className="font-bold text-nyati-navy mb-2">Wall Construction</h4>
                <p className="text-sm text-nyati-grey mb-2">Building strong, durable walls with the right mix for your project.</p>
                <Link href="/guides/walls" className="text-nyati-orange text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="absolute bottom-1/3 right-1/4 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-nyati-orange flex items-center justify-center border-2 border-white animate-float" style={{animationDelay: "2s"}}>
                <span className="text-white font-bold">3</span>
              </div>
              
              {/* Popup for Finishing */}
              <div className="absolute top-full left-0 mt-2 bg-white shadow-strong rounded-lg p-4 w-64 z-10 hidden group-hover:block transition-all">
                <h4 className="font-bold text-nyati-navy mb-2">Finishing Touches</h4>
                <p className="text-sm text-nyati-grey mb-2">Perfect the final stages with Nyati Max 32 for smooth, durable surfaces.</p>
                <Link href="/guides/finishing" className="text-nyati-orange text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          {/* Building Stages Guide */}
          <div className="bg-nyati-light-grey rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-nyati-navy mb-6">Your Home Building Journey</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">Foundation & Structure</h4>
                    <p className="text-nyati-grey mb-3">Create a solid foundation using Nyati Super 42 for optimal strength and durability.</p>
                    <Link href="/guides/foundation" className="text-nyati-orange font-medium text-sm flex items-center">
                      Foundation guide
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">Walls & Columns</h4>
                    <p className="text-nyati-grey mb-3">Build strong and durable walls with the right Nyati cement mix and proper techniques.</p>
                    <Link href="/guides/walls-columns" className="text-nyati-orange font-medium text-sm flex items-center">
                      Wall construction guide
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">Roof & Finishing</h4>
                    <p className="text-nyati-grey mb-3">Complete your home with proper roofing and quality finishing with Nyati Max 32.</p>
                    <Link href="/guides/finishing" className="text-nyati-orange font-medium text-sm flex items-center">
                      Finishing touches guide
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">Maintenance & Care</h4>
                    <p className="text-nyati-grey mb-3">Learn how to maintain your home's structural integrity for decades to come.</p>
                    <Link href="/guides/maintenance" className="text-nyati-orange font-medium text-sm flex items-center">
                      Maintenance guide
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/home-building-guide" 
                className="bg-nyati-orange hover:bg-nyati-navy text-white py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors"
              >
                Complete Home Building Guide
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources Section */}
      <div className="bg-nyati-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nyati-navy mb-8">Essential Home Building Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resource Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
              <div className="relative h-48">
                <Image 
                  src="/images/home-building/cement-calculator.jpg"
                  alt="Cement calculator"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-nyati-navy text-xl mb-2">Cement Calculator</h3>
                <p className="text-nyati-grey mb-4">Calculate exactly how much cement you'll need for your project with our easy-to-use tool.</p>
                <Link 
                  href="/tools/cement-calculator" 
                  className="text-nyati-orange font-medium flex items-center"
                >
                  Calculate materials
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
              <div className="relative h-48">
                <Image 
                  src="/images/home-building/product-guide.jpg"
                  alt="Nyati product guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-nyati-navy text-xl mb-2">Product Selection Guide</h3>
                <p className="text-nyati-grey mb-4">Find the perfect Nyati Cement product for each stage of your home building project.</p>
                <Link 
                  href="/guides/product-selection" 
                  className="text-nyati-orange font-medium flex items-center"
                >
                  Choose the right cement
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
              <div className="relative h-48">
                <Image 
                  src="/images/home-building/expert-tips.jpg"
                  alt="Expert construction tips"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-nyati-navy text-xl mb-2">Expert Tips & Techniques</h3>
                <p className="text-nyati-grey mb-4">Learn professional construction techniques to build a stronger, more durable home.</p>
                <Link 
                  href="/guides/expert-tips" 
                  className="text-nyati-orange font-medium flex items-center"
                >
                  View expert advice
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Tutorials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-nyati-navy">Video Tutorials</h2>
          <Link 
            href="/videos" 
            className="text-nyati-orange font-medium flex items-center"
          >
            View all videos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
            <div className="relative h-48 group">
              <Image 
                src="/images/home-building/video-foundation.jpg"
                alt="Foundation construction video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <div className="w-16 h-16 rounded-full bg-nyati-orange flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-nyati-navy text-xl mb-2">Perfect Foundation Techniques</h3>
              <p className="text-nyati-grey">Learn how to prepare, pour and cure the perfect foundation for your home.</p>
              <div className="flex items-center mt-4 text-sm text-nyati-grey">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                8:24
              </div>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
            <div className="relative h-48 group">
              <Image 
                src="/images/home-building/video-mixing.jpg"
                alt="Cement mixing video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <div className="w-16 h-16 rounded-full bg-nyati-orange flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-nyati-navy text-xl mb-2">Perfect Cement Mixing Ratios</h3>
              <p className="text-nyati-grey">Master the perfect cement mixing ratios for different construction elements.</p>
              <div className="flex items-center mt-4 text-sm text-nyati-grey">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                6:42
              </div>
            </div>
          </div>

          {/* Video Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
            <div className="relative h-48 group">
              <Image 
                src="/images/home-building/video-finishing.jpg"
                alt="Wall finishing video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <div className="w-16 h-16 rounded-full bg-nyati-orange flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-nyati-navy text-xl mb-2">Wall Plastering Techniques</h3>
              <p className="text-nyati-grey">Learn professional plastering techniques for smooth, durable walls.</p>
              <div className="flex items-center mt-4 text-sm text-nyati-grey">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                12:18
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Assistance Section */}
      <div className="bg-nyati-navy py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Need Expert Assistance?</h2>
              <p className="text-nyati-orange text-xl mb-6">Our team of construction experts is here to help</p>
              <p className="text-white mb-8">
                Whether you're planning your first home or an experienced builder, our technical team can provide guidance on product selection, application techniques, and troubleshooting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-nyati-orange hover:bg-nyati-navy text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Contact Our Experts
                </Link>
                <Link 
                  href="/dealer-locator" 
                  className="bg-white hover:bg-gray-100 text-nyati-navy py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Find a Dealer Near You
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-strong">
              <Image 
                src="/images/home-building/expert-assistance.jpg"
                alt="Nyati Cement experts providing assistance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBuilderSection;