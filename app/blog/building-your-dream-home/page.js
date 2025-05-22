import React from 'react';
import Image from 'next/image';
import BlogPost from '../../components/BlogPost';
import Link from 'next/link';
import { generateBlogPostMetadata, generateBlogPostSchema } from '../metadata';
import Script from 'next/script';

const blogData = {
  title: 'Building Your Dream Home with Nyati Cement: A Step-by-Step Guide',
  description: 'Learn the step-by-step process of building a durable home using Nyati Cement products, from foundation to finishing work.',
  image: '/images/blog/home.webp',
  date: 'April 3, 2025',
  category: 'DIY & Home Building',
  slug: 'building-your-dream-home',
  author: 'Lake Cement Technical Team',
  tags: ['home building', 'DIY construction', 'cement guide', 'house construction']
};

export const metadata = generateBlogPostMetadata(blogData);

// Related blog posts
const relatedPosts = [
  {
    title: 'Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project',
    excerpt: 'Learn how to select the perfect cement grade for your specific construction needs with our comprehensive guide.',
    date: 'March 28, 2025',
    category: 'Technical Knowledge',
    slug: '/blog/understanding-cement-grades',
    readTime: '3 Minute Read'
  },
  {
    title: 'The Role of Water-Cement Ratio in Concrete Durability',
    excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
    date: 'March 26, 2025',
    category: 'Technical Knowledge',
    slug: '/blog/water-cement-ratio',
    readTime: '2 Minute Read'
  }
];

export default function BuildingYourDreamHomePage() {
  const articleSchema = generateBlogPostSchema(blogData);

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPost
        {...blogData}
        relatedPosts={relatedPosts}
      >
        <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
          <Image 
            src="/images/blog/home.webp" 
            alt="Home Construction" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <p className="lead">
          Building your own home is one of life's most rewarding achievements. With quality materials like Nyati Cement and careful planning, you can create a structure that will stand strong for generations. This comprehensive guide walks you through the essential steps of home building, with a focus on proper cement application for superior results.
        </p>

        <h2>1. Planning and Preparation</h2>
        
        <h3>Designing Your Home</h3>
        <p>Before any construction begins, you need a solid plan:</p>
        <ul>
          <li>Work with an architect to create detailed blueprints</li>
          <li>Secure all necessary building permits</li>
          <li>Establish a realistic budget and timeline</li>
          <li>Choose the right Nyati Cement products for each phase</li>
        </ul>

        <h3>Site Preparation</h3>
        <p>Proper site preparation sets the foundation for success:</p>
        <ul>
          <li>Clear the land of vegetation, debris, and obstacles</li>
          <li>Level the ground according to your building plans</li>
          <li>Mark the outline of the foundation with stakes and string</li>
          <li>Arrange for proper drainage away from the building site</li>
        </ul>

        <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
          <Image 
            src="/images/blog/prep.jpeg" 
            alt="Site preparation for home construction" 
            fill 
            className="object-cover"
          />
        </div>

        <h2>2. Foundation Construction</h2>

        <h3>Excavation</h3>
        <p>The foundation begins with proper excavation:</p>
        <ul>
          <li>Dig foundation trenches to the depth specified by your structural engineer</li>
          <li>Ensure the bottom of the trench is flat and compacted</li>
          <li>Set up foundation forms using wooden boards</li>
        </ul>

        <h3>Concrete Mixture</h3>
        <p>For a strong foundation, the right cement mixture is crucial:</p>
        <ul>
          <li>Use Nyati 42.5R cement for foundations due to its high strength and durability</li>
          <li>Mix at a ratio prescribed by your structural engineer</li>
          <li>Maintain a water-cement ratio as recommended by construction experts for optimal strength</li>
          <li>Mix thoroughly until you achieve a consistent texture</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="font-bold">Pro Tip:</p>
          <p>Never compromise on foundation quality. Using high-quality Nyati 42.5R cement for your foundation will ensure the long-term stability of your entire structure with its superior load-bearing capacity and early strength development.</p>
        </div>

        <h3>Pouring the Foundation</h3>
        <p>Careful pouring ensures a solid base:</p>
        <ul>
          <li>Pour the concrete mixture into the foundation trenches</li>
          <li>Use a vibrator to remove air bubbles and ensure proper settling</li>
          <li>Level the surface with a screed board</li>
          <li>Allow the foundation to cure for the duration recommended by your engineer, keeping it moist throughout</li>
        </ul>

        <h2>3. Building the Structural Frame</h2>

        <h3>Column Construction</h3>
        <p>Columns provide critical structural support:</p>
        <ul>
          <li>Create reinforcement cages using steel bars as specified by your structural engineer</li>
          <li>Place the cages at designated points along the foundation</li>
          <li>Build formwork around the reinforcement</li>
          <li>Use Nyati 42.5R cement at a ratio prescribed by an engineer for columns</li>
          <li>Pour the concrete and vibrate to remove air pockets</li>
          <li>Allow columns to cure for the duration recommended by your structural engineer</li>
        </ul>

        <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
          <Image 
            src="/images/blog/column.jpeg" 
            alt="Column construction with reinforcement" 
            fill 
            className="object-cover"
          />
        </div>

        <h3>Beam Construction</h3>
        <p>Horizontal beams connect and support the structure:</p>
        <ul>
          <li>Set up formwork and reinforcement for beams</li>
          <li>Connect beam reinforcement to column reinforcement</li>
          <li>Use Nyati 42.5R cement mixture as advised by an engineer for optimal strength</li>
          <li>Ensure proper curing with regular watering as directed by your construction expert</li>
        </ul>

        <h2>4. Wall Construction</h2>

        <h3>Bricklaying</h3>
        <p>Quality brickwork requires precision and the right mortar:</p>
        <ul>
          <li>Use Nyati 32.5N cement for mortar at a ratio advised by a professional mason</li>
          <li>Lay out the first course of bricks to mark wall positions</li>
          <li>Build corners first as guides for wall height and alignment</li>
          <li>Use a string line between corners to ensure straight walls</li>
          <li>Maintain consistent mortar joints at the thickness recommended by your mason</li>
          <li>Check for plumb (vertical alignment) frequently</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p className="font-bold">Why Nyati 32.5N for Mortar?</p>
          <p>Nyati 32.5N offers superior adhesion that eliminates the need for extra lime in plasters. Its great workability and plasticity makes it perfect for creating smooth, durable mortar joints with excellent bonding properties.</p>
        </div>

        <h3>Creating Openings</h3>
        <p>Plan for doors and windows during wall construction:</p>
        <ul>
          <li>Use temporary supports (lintels) above door and window openings</li>
          <li>Construct permanent concrete lintels with Nyati 42.5R cement</li>
          <li>Allow lintels to cure fully before removing temporary supports, as advised by your engineer</li>
        </ul>

        <h2>5. Roof Construction</h2>

        <h3>Roof Frame</h3>
        <p>The roof frame must be strong enough to support roofing materials:</p>
        <ul>
          <li>Construct trusses or rafters according to your roof design</li>
          <li>Ensure proper anchoring to the wall structure</li>
          <li>Create adequate overhangs for weather protection as recommended by your architect</li>
        </ul>

        <h3>Concrete Roof Slab (if applicable)</h3>
        <p>For flat concrete roofs:</p>
        <ul>
          <li>Build formwork and reinforcement for the roof slab</li>
          <li>Use Nyati 42.5R cement at a ratio prescribed by an engineer for high-grade concrete with superior load-bearing capacity</li>
          <li>Consider adding waterproofing admixtures to the mix</li>
          <li>Pour the concrete and level carefully</li>
          <li>Cure for the duration recommended by your structural engineer before adding further waterproofing</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="font-bold">Important Note:</p>
          <p>Proper curing is essential for concrete strength development. Always keep newly poured concrete moist for the duration recommended by your engineer to achieve maximum strength. With Nyati 42.5R, you'll notice faster strength development thanks to its high initial strength properties.</p>
        </div>

        <h2>6. Finishing Work</h2>

        <h3>Plastering</h3>
        <p>Smooth walls require quality plastering:</p>
        <ul>
          <li>Mix Nyati 32.5N cement with fine sand at the ratio prescribed by your mason for plastering</li>
          <li>Apply a thin scratch coat first to ensure adhesion</li>
          <li>Follow with a leveling coat at the thickness recommended by your plastering professional</li>
          <li>Finish with a thin final coat for a smooth surface</li>
          <li>Cure the plaster by keeping it moist for the duration advised by your mason</li>
        </ul>

        <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
          <Image 
            src="/images/blog/plastering.webp" 
            alt="Wall plastering with cement" 
            fill 
            className="object-cover"
          />
        </div>

        <h3>Flooring</h3>
        <p>Durable floors start with proper concrete:</p>
        <ul>
          <li>Create a base layer with Nyati 32.5N cement mixed according to your contractor's specifications</li>
          <li>For the finish layer, use Nyati 42.5R with a stronger mix as advised by your flooring expert for higher durability</li>
          <li>Consider adding floor hardeners for high-traffic areas</li>
          <li>Allow the floor to cure fully before applying tiles or other finishes, as recommended by your contractor</li>
        </ul>

        <h3>External Finishes</h3>
        <p>Protect your home from the elements:</p>
        <ul>
          <li>Apply waterproofing treatments to external walls</li>
          <li>Create proper drainage systems around the home</li>
          <li>Consider a decorative finish like textured plaster or paint</li>
        </ul>

        <h2>7. Special Considerations for Tanzania's Climate</h2>

        <h3>Coastal Regions</h3>
        <p>For homes near the ocean:</p>
        <ul>
          <li>Use Nyati 42.5R cement for all structural elements to resist salt corrosion</li>
          <li>Increase concrete cover over reinforcement as specified by your coastal construction expert</li>
          <li>Consider additional waterproofing treatments</li>
        </ul>

        <h3>Rainy Regions</h3>
        <p>In areas with heavy rainfall:</p>
        <ul>
          <li>Ensure proper roof overhangs to protect walls, as designed by your architect</li>
          <li>Create adequate drainage around the house</li>
          <li>Use Nyati 42.5R cement for external applications where water resistance is critical</li>
          <li>Consider raised foundations to prevent flooding, as advised by your engineer</li>
        </ul>

        <h2>8. Maintenance Tips for Longevity</h2>

        <p>Proper maintenance ensures your home lasts for generations:</p>
        <ul>
          <li>Inspect for and repair any cracks in concrete or plaster promptly</li>
          <li>Check and maintain roof integrity annually</li>
          <li>Clean and repaint external surfaces as needed</li>
          <li>Maintain proper drainage systems around the home</li>
        </ul>

        <h2>Conclusion</h2>

        <p>Building a home is a complex but rewarding process. By using quality materials like Nyati Cement products and following proper construction techniques, you'll create a safe, durable home that will serve your family for decades to come.</p>

        <div className="border-t border-b border-gray-200 rounded-sm py-6 my-8">
          <p className="italic text-nyati-grey">
            Do you have questions about building your home with Nyati Cement? Share your thoughts in the comments below or contact our technical support team at +255 658 888 999 for personalized advice.
          </p>
        </div>
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
              href="/products" 
              className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
            >
              Explore our cement products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        
      </BlogPost>
    </>
  );
}