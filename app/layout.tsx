import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Outfit } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'RESHA — Reverence in Recycling',
  description: 'India\'s first dignity-first circular infrastructure for ritual textile waste — transforming sacred offerings into traceable recycled fiber through on-site Moksha Shredders.',
  keywords: ['circular economy', 'ritual textile waste', 'sacred cloth recycling', 'Moksha Shredder', 'India', 'sustainable', 'temple waste'],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'RESHA — Reverence in Recycling',
    description: 'Transforming sacred ritual textile waste into traceable recycled fiber with dignity.',
    type: 'website',
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
    <html lang="en" className={`${dmSerifDisplay.variable} ${outfit.variable}`}>
      <body style={{ backgroundColor: '#F5F0E8', color: '#1B5E3B' }}>
        {children}
      </body>
    </html>
  )
}
