import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { generateBlogPostSchema } from '../lib/structured-data';
import { getImageMetadata, optimizeImageUrl } from '../lib/image-utils';

export default function BlogPost({
  title,
  content,
  excerpt,
  category,
  date,
  readTime,
  author = 'Lake Cement Ltd',
  image,
  slug,
  relatedPosts = [],
  tags = []
}) {
  const articleSchema = generateBlogPostSchema({
    title,
    description: excerpt,
    path: slug,
    publishDate: date,
    authors: [author],
    category,
    image,
    tags,
    title,
    description: excerpt,
    path: `/blog/${slug}`,
    images: [image],
    published: date,
    author,
  });

  const imageMetadata = getImageMetadata(image);
  const optimizedImage = optimizeImageUrl(image, {
    width: 1200,
    height: 630,
    quality: 90,
    format: 'webp'
  });

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" itemScope itemType="https://schema.org/Article">
      <Script
        id={`schema-article-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Meta tags for article */}
      <meta itemProp="headline" content={title} />
      <meta itemProp="description" content={excerpt} />
      <meta itemProp="image" content={optimizedImage} />
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="author" content={author} />

      {/* Breadcrumbs with structured data */}
      <div className="mb-8">
        <nav 
          className="flex text-sm" 
          aria-label="Breadcrumb"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          <meta itemProp="numberOfItems" content="3" />
          <ol className="flex items-center space-x-2">
            <li 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              <Link href="/" className="text-nyati-grey hover:text-nyati-orange transition-colors" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
              <span className="mx-2 text-nyati-grey">/</span>
            </li>
            <li 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              <Link href="/blog" className="text-nyati-grey hover:text-nyati-orange transition-colors" itemProp="item">
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
              {category && <span className="mx-2 text-nyati-grey">/</span>}
            </li>
            {category && (
              <li 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                <Link 
                  href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-nyati-grey hover:text-nyati-orange transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{category}</span>
                </Link>
                <meta itemProp="position" content="3" />
              </li>
            )}
          </ol>
        </nav>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        {category && (
          <div className="mb-4">
            <span className={`inline-block text-xs font-medium py-1 px-3 rounded-sm ${
              category === 'Technical Knowledge' ? 'bg-blue-100 text-blue-800' :
              category === 'Construction Best Practices' ? 'bg-amber-100 text-amber-800' :
              category === 'DIY & Home Building' ? 'bg-green-100 text-green-800' :
              category === 'Industry Insights' ? 'bg-violet-100 text-violet-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {category}
            </span>
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-nyati-navy mb-4">
          {title}
        </h1>

        <div className="flex items-center text-sm text-nyati-grey gap-4">
          {date && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{date}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </header>
      
      {/* Featured Image */}
      {image && (
        <div className="relative h-[400px] mb-8 rounded-sm overflow-hidden">
          <Image 
            src={optimizedImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority
            quality={90}
            loading="eager"
            fetchPriority="high"
            itemProp="image"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12" itemProp="articleBody">
        {content}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-2xl font-bold text-nyati-navy mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post, index) => (
              <Link 
                key={index}
                href={post.slug}
                className="group block bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                itemProp="isRelatedTo"
                itemScope 
                itemType="https://schema.org/Article"
              >
                <div className="p-4">
                  {post.category && (
                    <span className="inline-block text-xs font-medium py-1 px-2 rounded-sm mb-2 bg-gray-100 text-gray-800">
                      {post.category}
                    </span>
                  )}
                  <h3 
                    className="font-bold text-nyati-navy group-hover:text-nyati-orange transition-colors mb-2"
                    itemProp="headline"
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2" itemProp="description">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex items-center text-xs text-gray-500">
                    {post.date && (
                      <span className="mr-3" itemProp="datePublished">
                        {post.date}
                      </span>
                    )}
                    {post.readTime && <span>{post.readTime}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Social Sharing with Web Share API support */}
      <div className="border-t border-gray-200 pt-6 mt-8">
        <h3 className="text-lg font-bold text-nyati-navy mb-4">Share this article</h3>
        <div className="flex space-x-4">
          <ShareButton 
            network="twitter"
            url={`/blog/${slug}`}
            title={title}
          />
          <ShareButton 
            network="facebook"
            url={`/blog/${slug}`}
            title={title}
          />
          <ShareButton 
            network="linkedin"
            url={`/blog/${slug}`}
            title={title}
          />
          {/* Web Share API button for mobile */}
          {typeof navigator !== 'undefined' && navigator.share && (
            <button
              onClick={() => {
                navigator.share({
                  title,
                  text: excerpt,
                  url: `https://nyaticemet.com/blog/${slug}`,
                });
              }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-nyati-orange hover:bg-nyati-orange/90 text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function ShareButton({ network, url, title }) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://nyaticemet.com${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://nyaticemet.com${url}`)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://nyaticemet.com${url}`)}&title=${encodeURIComponent(title)}`
  };

  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    )
  };

  return (
    <a
      href={shareUrls[network]}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
        network === 'twitter' ? 'bg-[#1DA1F2] hover:bg-[#1a91da] text-white' :
        network === 'facebook' ? 'bg-[#4267B2] hover:bg-[#385899] text-white' :
        'bg-[#0077B5] hover:bg-[#006699] text-white'
      }`}
    >
      {icons[network]}
    </a>
  );
}