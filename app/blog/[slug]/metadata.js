import { getMetadata } from '../../lib/metadata';

// This is a dynamic metadata configuration for blog posts
export async function generateMetadata({ params }) {
  const slug = params.slug;
  
  // In a real app, you would fetch the post data here
  // const post = await getBlogPost(slug);
  
  return getMetadata({
    title: {
      template: '%s | Nyati Cement Blog',
      default: 'Blog | Nyati Cement'
    },
    description: 'Expert advice, industry trends, and construction best practices to help you build better.',
    alternates: {
      canonical: `/blog/${slug}`,
    }
  });
}
