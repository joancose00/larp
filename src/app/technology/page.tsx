'use client'

import { motion } from 'framer-motion'
import { 
  BeakerIcon, 
  ChartBarIcon, 
  MapIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const technologies = [
  {
    name: 'Quantum-Adjacent Heuristics',
    description: 'Our proprietary algorithm combines principles from quantum computing with traditional blockchain analysis to predict market movements before they happen.',
    icon: BeakerIcon,
  },
  {
    name: 'Narrative Vector Mapping',
    description: 'Advanced sentiment analysis and trend prediction system that tracks the evolution of project narratives across social platforms.',
    icon: MapIcon,
  },
  {
    name: 'Shill Density Analysis',
    description: 'Proprietary system for visualizing and analyzing the concentration of shilling activity across social platforms.',
    icon: ChartBarIcon,
  },
]

export default function Technology() {
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
              Our Quantum-Adjacent Technology
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Discover how we're revolutionizing on-chain intelligence with our proprietary systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Core Technologies
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl"
              >
                <tech.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{tech.name}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              System Architecture
            </h2>
            <p className="text-xl text-gray-300 mt-4">
              How our quantum-adjacent systems work together
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Data Collection Layer</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Our system continuously monitors blockchain transactions, social media activity, and market movements to build a comprehensive dataset for analysis.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Analysis Engine</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Using quantum-adjacent algorithms, we process the collected data to identify patterns and predict future market movements with unprecedented accuracy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Output Layer</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Results are presented through our intuitive interface, providing actionable insights and real-time alerts to our users.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Performance Metrics
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">99.9%</div>
              <p className="text-gray-300 text-lg">Prediction Accuracy</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">50ms</div>
              <p className="text-gray-300 text-lg">Average Response Time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">24/7</div>
              <p className="text-gray-300 text-lg">System Uptime</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 