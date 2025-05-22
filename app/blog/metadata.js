import { generateMetadata, generateStructuredData } from '../lib/seo-utils';

export function generateBlogPostMetadata({
  title,
  description,
  image,
  date,
  author = 'Lake Cement Ltd',
  category,
  tags = [],
}) {
  return generateMetadata({
    title,
    description,
    type: 'article',
    images: [image],
    published: date,
    tags: [
      category,
      'cement blog',
      'construction blog',
      'building materials',
      ...tags
    ],
  });
}

export function generateBlogListingMetadata({ category = null }) {
  const title = category 
    ? `${category} Articles | Nyati Cement Blog`
    : 'Knowledge Hub | Nyati Cement Blog';
  const description = category 
    ? `Read our latest articles about ${category.toLowerCase()} in construction and cement applications. Expert insights from Tanzania"s leading cement manufacturer.`
    : "Explore expert articles about cement, construction best practices, and building innovations. Stay informed with Nyati Cement\"s Knowledge Hub.";

  return generateMetadata({
    title,
    description,
    type: 'website',
    images: ['/images/blog/blog-header.jpg'],
    tags: [
      'cement blog',
      'construction blog',
      'building materials',
      'technical knowledge',
      'construction tips',
      category
    ].filter(Boolean),
  });
}

export function generateBlogPostSchema({
  title,
  description,
  slug,
  image,
  date,
  author = 'Lake Cement Ltd',
  category,
}) {
  return generateStructuredData({
    type: 'article',
    title,
    description,
    path: `/blog/${slug}`,
    images: [image],
    published: date,
    author,
    category,
  });
}
