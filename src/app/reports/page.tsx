'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const reports = [
  {
    id: 'whale-psy-ops',
    title: 'Whale Psy-Ops: A Retrospective',
    description: 'An in-depth analysis of whale wallet behavior patterns and their impact on market sentiment. Using our proprietary QIF system, we track the quantum entanglement of large wallet movements.',
    category: 'Market Analysis',
    date: '2025-03-22',
  },
  {
    id: 'bonkification-defi',
    title: 'Bonkification of DeFi',
    description: 'Exploring the emerging trend of meme token influence on DeFi protocols. Our NVI system reveals fascinating patterns in narrative vector evolution.',
    category: 'Trend Analysis',
    date: '2025-02-15',
  },
  {
    id: 'wallet-personality-types',
    title: 'Emerging Wallet Personality Types',
    description: 'A groundbreaking study of wallet behavior archetypes using our SMTF technology. Discover the hidden patterns that define different trading personalities.',
    category: 'Behavioral Analysis',
    date: '2025-01-28',
  },
  {
    id: 'quantum-entanglement-nft',
    title: 'Quantum Entanglement in NFT Markets',
    description: 'How our NPE system detected hidden correlations between seemingly unrelated NFT collections. A fascinating look at market quantum mechanics.',
    category: 'NFT Analysis',
    date: '2025-04-05',
  },
]

export default function Reports() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Latest Reports
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Deep insights into market behavior and emerging trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reports Grid Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <Link 
                key={report.id}
                href={`/reports/${report.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl hover:bg-gray-800/50 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-blue-500 text-sm font-medium">{report.category}</span>
                    <span className="text-gray-500 text-sm">{report.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {report.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">{report.description}</p>
                  <div className="flex items-center text-blue-500 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Read Report</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 