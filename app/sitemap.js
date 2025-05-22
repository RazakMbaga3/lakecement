const newsArticles = [
  {
    id: 1,
    date: '2024-05-01',
    slug: 'dar-regional-commissioner-visit'
  },
  {
    id: 2,
    date: '2024-04-15',
    slug: 'environmental-initiative'
  },
  {
    id: 3,
    date: '2024-04-01',
    slug: 'community-support'
  }
];

export default async function sitemap() {
  const baseUrl = 'https://nyaticemet.com'
  
  // Generate news URLs
  const newsUrls = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Static routes
  const routes = [
    '',
    '/about',
    '/about/about-us',
    '/about/certifications',
    '/about/code-of-conduct',
    '/about/csr',
    '/about/plant',
    '/products',
    '/distribution',
    '/quality-control',
    '/sustainability',
    '/careers',
    '/contact',
    '/blog',
    '/blog/building-your-dream-home',
    '/blog/compressive-strength-testing',
    '/blog/concrete-curing',
    '/blog/monsoon-construction',
    '/blog/tanzania-infrastructure-boom',
    '/blog/understanding-cement-grades',
    '/blog/water-cement-ratio'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  return [...routes, ...newsUrls]
}
