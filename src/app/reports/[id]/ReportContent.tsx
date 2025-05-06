'use client'

import { motion } from 'framer-motion'

interface Report {
  title: string
  category: string
  date: string
  author: string
  content: string
  metrics: {
    accuracy: string
    confidence: string
    impact: string
  }
}

export default function ReportContent({ report }: { report: Report }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <span className="text-blue-500 text-sm font-medium">{report.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {report.title}
        </h1>
        <div className="flex items-center text-gray-400 text-sm">
          <span>{report.date}</span>
          <span className="mx-2">•</span>
          <span>By {report.author}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-12">
        <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-xl">
          <div className="text-2xl font-bold text-blue-500 mb-1">{report.metrics.accuracy}</div>
          <div className="text-sm text-gray-400">Accuracy</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-xl">
          <div className="text-2xl font-bold text-purple-500 mb-1">{report.metrics.confidence}</div>
          <div className="text-sm text-gray-400">Confidence</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-xl">
          <div className="text-2xl font-bold text-blue-500 mb-1">{report.metrics.impact}</div>
          <div className="text-sm text-gray-400">Impact</div>
        </div>
      </div>

      <div 
        className="prose prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: report.content }}
      />
    </motion.div>
  )
} 