import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'LARP - Ledger Analysis Reporting & Profiling',
  description: 'Redefining On-Chain Intelligence for the Post-Truth Era',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow pt-20 pb-16 flex flex-col items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
} 