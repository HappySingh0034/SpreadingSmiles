import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Spreading Smiles India - Empowering Communities',
  description: 'Spreading Smiles India is an NGO focused on uplifting and empowering marginalized communities through education, healthcare, and sanitation initiatives.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <Navigation />
        {children}
      </body>
    </html>
  )
} 