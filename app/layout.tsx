import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Website Component Library',
  keywords: ['website', 'component', 'library'],
  description: 'A library of reusable components for building websites.',
  authors: [{ name: 'Vivek Yadav', url: 'https://yourwebsite.com' }],
  generator: 'Vivek Yadav',
  creator: 'Vivek Yadav',
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
