// No need to import generateMetadata here since this is just a config file

export const blogConfig = {
  title: 'Knowledge Hub | Nyati Cement Blog',
  description: 'Expert insights on cement, construction best practices, and building innovations from Tanzania\'s leading cement manufacturer.',
  baseUrl: 'https://nyaticemet.com/blog',
  categories: [
    {
      id: 'technical-knowledge',
      name: 'Technical Knowledge',
      color: 'bg-blue-100 text-blue-800',
      description: 'In-depth technical articles on cement properties and applications'
    },
    {
      id: 'construction-best-practices',
      name: 'Construction Best Practices',
      color: 'bg-amber-100 text-amber-800',
      description: 'Professional techniques and methodologies for optimal construction'
    },
    {
      id: 'diy-home-building',
      name: 'DIY & Home Building',
      color: 'bg-green-100 text-green-800',
      description: 'Guides for homeowners and small-scale construction projects'
    },
    {
      id: 'sustainability-innovation',
      name: 'Sustainability & Innovation',
      color: 'bg-teal-100 text-teal-800',
      description: 'Environmental initiatives and forward-thinking approaches'
    },
    {
      id: 'industry-insights',
      name: 'Industry Insights',
      color: 'bg-violet-100 text-violet-800',
      description: 'Market trends and developments in the cement and construction sectors'
    }
  ],
  authors: [
    {
      id: 'technical-team',
      name: 'Lake Cement Technical Team',
      role: 'Technical Experts',
      bio: 'Our team of cement and construction professionals with decades of combined experience.'
    },
    {
      id: 'quality-team',
      name: 'Quality Control Department',
      role: 'Quality Assurance',
      bio: 'Dedicated specialists ensuring the highest standards in cement production.'
    }
  ]
};

export function getBlogPostMetadata({ title, description, image, slug, category, publishedDate }) {
  return {
    title: `${title} | Nyati Cement Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedDate,
      url: `${blogConfig.baseUrl}/${slug}`,
      images: [
        {
          url: image.startsWith('http') ? image : `https://nyaticemet.com${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    }
  };
}

export function getCategoryMetadata(categoryId) {
  const category = blogConfig.categories.find(c => c.id === categoryId);
  if (!category) return null;

  return {
    title: `${category.name} Articles | Nyati Cement Blog`,
    description: category.description,
    openGraph: {
      title: `${category.name} - Nyati Cement Blog`,
      description: category.description,
      url: `${blogConfig.baseUrl}?category=${categoryId}`,
    }
  };
}

export function getAuthorMetadata(authorId) {
  const author = blogConfig.authors.find(a => a.id === authorId);
  if (!author) return null;

  return {
    name: author.name,
    role: author.role,
    bio: author.bio
  };
}

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
