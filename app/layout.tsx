import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Supercycle - NFT Collection by Ben & Blacken',
  description: 'An NFT collection by Ben & Blacken from delivered.design, minting this summer on Abstract Chain',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
