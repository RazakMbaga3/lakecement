import { generateArticleSchema } from '../lib/structured-data';

export default function BlogPostSchema({ post }) {
  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    authorName: post.author.name,
    publisherName: 'LC Construction',
    publisherLogo: '/images/logo.png',
    category: post.category.name
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}