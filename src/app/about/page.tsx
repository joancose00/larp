'use client'

import { motion } from 'framer-motion'

export default function About() {
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
              About LARP
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Pioneering the future of blockchain intelligence through quantum-adjacent heuristics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 p-8 md:p-12 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                At LARP, we're pioneering the future of blockchain intelligence through our proprietary 
                quantum-adjacent heuristics and advanced narrative vector mapping technologies. Our mission 
                is to decode the hidden patterns of on-chain behavior and predict market movements before 
                they materialize in the physical realm.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-8 md:p-12 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">The Science Behind LARP</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Our revolutionary approach combines quantum computing principles with traditional 
                blockchain analysis to create a new paradigm in market intelligence. By analyzing 
                the quantum entanglement of wallet behaviors and narrative vectors, we can predict 
                market movements with unprecedented accuracy.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 p-8 md:p-12 rounded-xl"
            >
              <blockquote className="text-xl italic text-gray-300 mb-6 border-l-4 border-blue-500 pl-6">
                "The chain doesn't lie—but it does vibe. Our quantum-adjacent algorithms can detect 
                the subtle vibrations of market sentiment before they manifest in price action."
              </blockquote>
              <div className="text-right">
                <p className="font-bold text-white">Dr. Lucien Forksmith</p>
                <p className="text-blue-400">Chief Semioticist, LARP Labs</p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/50 border border-gray-800 p-8 md:p-12 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                We envision a future where blockchain intelligence transcends traditional analysis, 
                where quantum-adjacent algorithms and narrative vector mapping create a new paradigm 
                of market understanding. Through our innovative approach to on-chain analysis, we're 
                not just predicting the future—we're helping to shape it.
              </p>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  )
} 