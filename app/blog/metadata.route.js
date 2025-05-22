import { generateBlogMetadata } from '../lib/blog-metadata';

export async function generateMetadata() {
  return generateBlogMetadata({
    title: 'Knowledge Hub | Nyati Cement Blog',
    description: 'Expert insights on cement, construction best practices, and building innovations from Tanzania\'s leading cement manufacturer.',
    path: '',
    publishDate: null,
    authors: ['Nyati Cement Editorial Team'],
    category: null,
    tags: [
      'cement blog',
      'construction blog',
      'building materials',
      'technical knowledge',
      'construction tips'
    ],
    image: '/images/blog/blog-header.jpg'
  });
}
