import type { Metadata } from 'next'
import Script from 'next/script'
import { Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rev Dave Thompson | Developer Portfolio',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  keywords: ['developer', 'portfolio', 'rdt', 'rev dave thompson', 'showcase', 'resume', 'web design', 'nextjs', 'react', 'node', 'javascript'],
  description: 'A collection of all things geekish that I know or have done, LEARN MORE! >>',
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png'
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Rev Dave Thompson | Developer Portfolio',
    description: 'A collection of all things geekish that I know or have done, LEARN MORE! >>',
    url: 'https://dev.revdavethompson.com',
    siteName: 'Rev Dave Thompson | Developer Portfolio',
    images: [
      {
        url: 'https://dev.revdavethompson.com/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://dev.revdavethompson.com/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Developer Site: Rev Dave Thompson',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rev Dave Thompson | Developer Portfolio',
    description: 'A collection of all things geekish that I know or have done, LEARN MORE! >>',
    siteId: '1467726470533754880',
    creator: '@revdavethompson',
    creatorId: '1467726470533754880',
    images: ['https://dev.revdavethompson.com/og.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#8B5CF6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="./assets/js/dynamicTitle.js"
        strategy='afterInteractive'
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M11CMZ12Q"
        strategy='lazyOnload'
      />
      <Script
        id="google-analytics" // Optional: Adds an ID to the script tag
        strategy="afterInteractive" // Executes the script after the page has been rendered
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-M11CMZ12Q');
          `,
        }}
      />
    </html>
  )
}
