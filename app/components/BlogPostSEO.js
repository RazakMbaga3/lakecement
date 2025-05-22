import { generateArticleSchema } from '@/app/lib/structured-data'
import Script from 'next/script'

export function generateBlogMetadata({ title, excerpt, coverImage, date, author, slug }) {
  return {
    title: title,
    description: excerpt,
    openGraph: {
      title: title,
      description: excerpt,
      type: 'article',
      publishedTime: date,
      authors: [author],
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
      images: [coverImage],
    },
  }
}

export default function BlogPostSEO({ post }) {
  const articleSchema = generateArticleSchema({
    title: post.title,
    excerpt: post.excerpt,
    mainImage: post.coverImage,
    date: post.date,
    author: post.author,
    modifiedDate: post.modifiedDate,
    slug: post.slug
  })

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
