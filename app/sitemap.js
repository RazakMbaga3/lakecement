import { getAllArticles } from './app/news/newsData'

export default async function sitemap() {
  const baseUrl = 'https://nyaticemet.com'
  
  // Get all news articles
  const articles = getAllArticles()
  const newsUrls = articles.map((article) => ({
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  return [...routes, ...newsUrls]
}
