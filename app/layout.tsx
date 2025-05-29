import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon-32x32.png',},
  title: 'Website Component Library',
  keywords: ['website', 'component', 'library', 'React', 'Next.js', 'UI', 'components', 'design'],
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
