import { generateMetadata as baseGenerateMetadata } from './seo-utils';
import { blogConfig } from '../blog/metadata';

export async function generateBlogMetadata({
  title,
  description,
  path,
  publishDate,
  authors = [],
  tags = [],
  image,
  category
}) {
  const fullPath = `/blog${path}`;
  
  const metadata = await baseGenerateMetadata({
    title: `${title} | ${blogConfig.title}`,
    description,
    path: fullPath,
    type: 'article',
    tags: [...tags, category].filter(Boolean),
    published: publishDate,
    images: [image || '/images/blog/default.jpg'],
    alternates: {
      canonical: fullPath
    }
  });

  return {
    ...metadata,
    authors: authors.map(name => ({ name })),
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: publishDate,
      authors,
      tags,
      siteName: blogConfig.title
    },
    twitter: {
      ...metadata.twitter,
      title: metadata.title,
      description: metadata.description,
      site: '@nyaticemet',
      card: 'summary_large_image'
    }
  };
}
