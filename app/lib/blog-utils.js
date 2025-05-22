import { generateMetadata as baseGenerateMetadata } from './seo-utils';

export async function generateBlogMetadata({ title, description, path, publishDate, authors = [], tags = [], image }) {
  const metadata = await baseGenerateMetadata({
    title,
    description,
    path: `/blog${path}`,
    type: 'article',
    tags,
    published: publishDate,
    images: image ? [image] : ['/images/lake-cement-ltd.png'],
    alternates: {
      canonical: `/blog${path}`
    }
  });

  return {
    ...metadata,
    authors: authors.map(name => ({ name })),
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: publishDate,
      authors: authors.map(name => ({ name })),
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: metadata.openGraph.images,
    }
  };
}
