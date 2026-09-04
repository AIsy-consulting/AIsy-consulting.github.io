export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: 'https://aisy-consulting.github.io/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
