// app/blog/understanding-cement-grades/page.js
import React from 'react'
import BlogPost from '../../components/BlogPost'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Understanding Cement Grades | Nyati Cement',
  description: 'Learn how to choose the right Nyati Cement grade for your construction project with our comprehensive guide to cement applications and properties.',
}

// Related posts for this article
const relatedPosts = [
  {
    title: 'The Role of Water-Cement Ratio in Concrete Durability',
    excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
    category: 'Technical Knowledge',
    date: 'Coming Soon',
    readTime: '6 min read',
    slug: '#'
  },
  {
    title: 'Why Compressive Strength Matters: Nyati Cement\'s Testing Standards',
    excerpt: 'Understand the importance of compressive strength testing and how Nyati ensures consistent quality.',
    category: 'Technical Knowledge',
    date: 'Coming Soon',
    readTime: '5 min read',
    slug: '#'
  }
]

export default function CementGradesPage() {
  return (
    <BlogPost 
      title="Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project"
      date="March 28, 2025"
      category="Technical Knowledge"
      readTime="7 min read"
      relatedPosts={relatedPosts}
    >
      <p className="lead text-xl mb-6">
        When embarking on any construction project, selecting the appropriate cement grade is crucial for ensuring structural integrity, durability, and cost-effectiveness. Nyati Cement, manufactured by Lake Cement Ltd., offers multiple cement grades designed for specific applications. This guide will help you understand cement grades and select the right Nyati product for your construction needs.
      </p>

      {/* Optional featured image */}
      <div className="my-8 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9 bg-gray-100">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center bg-nyati-orange/10">
          <span className="text-nyati-orange font-bold">[Featured Image: Various cement grades being used in construction]</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">What Do Cement Grade Numbers Mean?</h2>
      <p>
        The numbers in cement grades (such as 32.5N or 42.5R) indicate the minimum compressive strength in megapascals (MPa) the cement will achieve after 28 days of curing.
      </p>
      <ul className="list-disc pl-6 mt-3 mb-6">
         <li><strong>R</strong> (Rapid): Higher early strength development</li>
        <li><strong>N</strong> (Normal): Standard early strength development</li>
      </ul>

      <div className="bg-nyati-cream p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Key Takeaway:</h3>
        <p className="italic">
          The higher the grade number, the stronger the final concrete will be. The "R" designation means the cement sets faster and gains strength earlier - ideal for projects with tight timelines.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Nyati Cement CEM II A-L 42.5R: For Fast-Track Projects</h2>
      <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-nyati-navy">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Key Features:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Superior early strength development (21-22 MPa at 2 days)</li>
          <li>High final compressive strength (42.5-52 MPa at 28 days)</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Ideal Applications:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Quality Blocks and Pavers</li>
          <li>Precast concrete elements</li>
          <li>Ready-mix concrete requiring high early strength</li>
          <li>Projects with tight construction schedules</li>
          <li>Prestressed concrete components</li>
          <li>Hydraulic structures</li>
          <li>Construction during colder weather when faster setting is beneficial</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Why Choose Nyati 42.5R:</h3>
        <p>When time is critical but strength cannot be compromised, Nyati 42.5R allows faster formwork removal, earlier loading of structures, and quicker project completion while maintaining exceptional long-term durability.</p>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Nyati Cement CEM II A-L 42.5N: The All-Purpose Performer</h2>
      <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-nyati-orange">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Key Features:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Normal Initial Strength</li>
          <li>Balanced strength development profile</li>
          <li>Excellent workability</li>
          <li>High ultimate compressive strength (42.5-51 MPa at 28 days)</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Ideal Applications:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>General construction work requiring high-grade concrete</li>
          <li>High-rise buildings and substantial structures</li>
          <li>Ready-mix concrete operations</li>
          <li>Projects where balanced setting time and strength are required</li>
          <li>Bridge construction and other infrastructure works</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Why Choose Nyati 42.5N:</h3>
        <p>This versatile grade offers an optimal balance between workability and strength development, making it suitable for most construction applications while providing superior long-term performance.</p>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Nyati Cement CEM II B-L 32.5N: For General Construction</h2>
      <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Key Features:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Moderate heat of hydration</li>
          <li>Good workability and plasticity</li>
          <li>Excellent adhesion</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Ideal Applications:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Standard Construction</li>
          <li>Mortars and masonry works</li>
          <li>Road stabilization</li>
          <li>General civil works</li>
          <li>Non-structural applications like plastering and flooring</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Why Choose Nyati 32.5N:</h3>
        <p>When working on projects that don't require high early strength but need good workability and reduced heat generation, 32.5N provides a cost-effective solution without sacrificing quality.</p>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Nyati Cement CEM I OPC 42.5N: The Pure Portland Option</h2>
      <div className="bg-violet-50 p-6 rounded-lg mb-6 border-l-4 border-violet-600">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Key Features:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Excellent early strength (21-22 MPa at 2 days)</li>
          <li>High final strength (42.5-62.5 MPa at 28 days)</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Ideal Applications:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Precast concrete elements</li>
          <li>High Grade Concrete</li>
          <li>Large-scale Projects </li>
          <li>Applications requiring customized concrete mixes with specific additives</li>
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">Why Choose Nyati OPC 42.5N:</h3>
        <p>When specifications call for pure Portland cement or when creating specialized concrete mixes with specific additives, this grade provides the ideal foundation.</p>
      </div>
      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Factors to Consider When Choosing Cement Grade</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong className="text-nyati-navy">Structural Requirements:</strong> 
          <p>Consider the load-bearing requirements and structural importance of your project. Higher grades (42.5 and above) are typically used for structural elements carrying significant loads.</p>
        </li>
        <li>
          <strong className="text-nyati-navy">Construction Timeline:</strong> 
          <p>Fast-track projects benefit from R-grade cements that allow quicker formwork removal and faster construction progress.</p>
        </li>
        <li>
          <strong className="text-nyati-navy">Weather Conditions:</strong> 
          <p>Cold weather construction may require higher-grade cements to counter slower setting times in lower temperatures.</p>
        </li>
        <li>
          <strong className="text-nyati-navy">Economic Considerations:</strong> 
          <p>Balance material costs against performance requirements. Using a higher grade than necessary increases project costs without providing proportional benefits.</p>
        </li>
        <li>
          <strong className="text-nyati-navy">Technical Specifications:</strong> 
          <p>Ensure compliance with project specifications and building codes, which may mandate specific cement types for particular applications.</p>
        </li>
      </ol>

      <div className="bg-nyati-navy text-white p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold mb-3 text-nyati-light-orange">Expert Tip:</h3>
        <p>
          When in doubt, consult with Nyati Cement's technical team. Our experts can provide specific recommendations based on your project requirements, environmental conditions, and construction schedule.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Conclusion</h2>
      <p>
        Selecting the appropriate cement grade is essential for project success. Nyati Cement's range of products offers solutions for every construction need, from rapid-setting requirements to general applications. For technical assistance in selecting the right cement grade for your specific project, Nyati Cement provides expert consultation through our technical support team.
      </p>
      <p className="mt-4">
        Remember that all Nyati Cement products exceed Tanzania Bureau of Standards (TBS) requirements, ensuring that regardless of which grade you choose, you're building with cement that delivers strength, reliability, and longevity.
      </p>

      <div className="flex items-center mt-8 border-t border-gray-200 pt-8">
        <div className="mr-4">
          <Link 
            href="/blog" 
            className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
        <div className="ml-auto">
          <Link 
            href="/contact" 
            className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
          >
            Have questions?
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </BlogPost>
  )
}