import './globals.css'

export const metadata = {
  title: 'AIsy — AI Integration for Your Business',
  description:
    'Fixed-scope AI integration projects delivered in weeks, not months. Built by Gidon Peeper, AI researcher at Princeton and UvA.',
  openGraph: {
    title: 'AIsy — AI Integration for Your Business',
    description: 'Fixed-scope AI integration projects delivered in weeks, not months.',
    url: 'https://aisy-ai.github.io',
    siteName: 'AIsy',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
