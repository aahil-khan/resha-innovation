import type { Metadata, Viewport } from 'next'
import { Yeseva_One, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const yesevaOne = Yeseva_One({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display'
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'RESHA - Circular Economy Network',
  description: 'RESHA: Reshaping Electronics Supply Chain for Humanity & the Environment. A circular economy platform for sustainable electronics management.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B5E3B',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${yesevaOne.variable} ${manrope.variable} bg-parchment`}>
      <body className="font-sans antialiased text-forest">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
