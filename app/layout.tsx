import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Allura } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forever Still Studio | Web Design for Local Businesses — Titusville, PA',
  description:
    'Affordable, professional website design for local restaurants, bars, coffee shops, tattoo studios, VFWs, and small businesses in Titusville, PA. Get more customers with a fast, mobile-friendly site that actually works.',
  keywords: [
    'web design Titusville PA',
    'local business website design Pennsylvania',
    'affordable website small business',
    'restaurant website design',
    'coffee shop website',
    'tattoo shop website',
    'VFW website',
    'small business web design',
    'bar website design',
    'local SEO Pennsylvania',
  ].join(', '),
  authors: [{ name: 'Forever Still Studio' }],
  creator: 'Forever Still Studio',
  metadataBase: new URL('https://www.foreverstillstudio.com'),
  alternates: {
    canonical: 'https://www.foreverstillstudio.com',
  },
  openGraph: {
    title: 'Forever Still Studio | Web Design for Local Businesses',
    description:
      'Simple, fast websites that bring more customers through your door. Veteran-owned. Local. Built to work.',
    url: 'https://www.foreverstillstudio.com',
    siteName: 'Forever Still Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forever Still Studio | Web Design for Local Businesses',
    description: 'Simple, fast websites that bring more customers through your door.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
