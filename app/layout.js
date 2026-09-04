import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const title = 'AIsy · Practical AI for your business'
const description =
  'AIsy is Gidon Peeper, an AI consultant and engineer in London. Practical AI for businesses: answers from your own documents, insight from your data, automation of repetitive work, and AI features in your product. Fixed scope, plain language, honest advice.'


const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AIsy',
  url: 'https://aisy-consulting.github.io',
  description,
  email: 'gidon.aisy@gmail.com',
  telephone: '+31620982768',
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  areaServed: ['GB', 'NL', 'US'],
  knowsLanguage: ['en', 'nl'],
  founder: {
    '@type': 'Person',
    name: 'Gidon Peeper',
    jobTitle: 'AI engineer and consultant',
    url: 'https://gidonpeeper.github.io',
    sameAs: ['https://www.linkedin.com/in/gidonpeeper'],
  },
}

export const metadata = {
  metadataBase: new URL('https://aisy-consulting.github.io'),
  title,
  description,
  keywords: [
    'AI consultant',
    'AI consultancy London',
    'AI for small business',
    'AI engineer',
    'document assistant',
    'data analysis',
    'automation',
    'Gidon Peeper',
  ],
  authors: [{ name: 'Gidon Peeper', url: 'https://gidonpeeper.github.io' }],
  openGraph: {
    type: 'website',
    title,
    description,
    url: 'https://aisy-consulting.github.io',
    siteName: 'AIsy',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  )
}

export const viewport = {
  themeColor: '#f8f7f3',
  width: 'device-width',
  initialScale: 1,
}
