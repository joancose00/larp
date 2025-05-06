"use client"

import { motion } from 'framer-motion'
import { CheckIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

interface Tier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Just Vibing',
    price: '$99',
    description: 'For those who just want to vibe with the market',
    features: [
      'Basic market sentiment analysis',
      'Daily meme coin alerts',
      'Access to community chat',
      'Weekly vibes report',
      'Basic wallet tracking'
    ],
    cta: 'Start Vibing'
  },
  {
    name: 'On-Chain Detective',
    price: '$299',
    description: 'For the curious minds who want to dig deeper',
    features: [
      'Everything in Just Vibing',
      'Advanced wallet tracking',
      'Whale movement alerts',
      'Smart money flow analysis',
      'Custom alert settings',
      'Priority support'
    ],
    cta: 'Become a Detective',
    popular: true
  },
  {
    name: 'Narrative Oracle',
    price: '$999',
    description: 'For those who want to shape the market narrative',
    features: [
      'Everything in On-Chain Detective',
      'AI-powered narrative generation',
      'Exclusive alpha calls',
      'Private Discord channel',
      'Monthly strategy sessions',
      'Custom report generation',
      '24/7 priority support'
    ],
    cta: 'Become an Oracle'
  }
]

const faqs = [
  {
    question: 'What is quantum-adjacent heuristics?',
    answer: 'Quantum-adjacent heuristics is our proprietary methodology that combines principles from quantum computing with traditional blockchain analysis to predict market movements before they happen. While not actually quantum computing, it operates at a complexity level adjacent to quantum systems.'
  },
  {
    question: 'How accurate are your predictions?',
    answer: 'Our systems maintain a 99.9% accuracy rate for market predictions, measured by our proprietary accuracy metrics. Results may vary based on market conditions and the specific aspects of the blockchain you\'re analyzing.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. No refunds are provided for partial month usage.'
  },
  {
    question: 'Do you offer enterprise plans?',
    answer: 'Yes, we offer custom enterprise solutions for larger organizations with specific needs. Contact our sales team for a personalized consultation and custom pricing based on your requirements.'
  }
]

export default function Pricing() {
  const [showModal, setShowModal] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowModal(false)
    setShowThankYou(true)
    setTimeout(() => setShowThankYou(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6"
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              <span>Select Your Tier</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Choose Your Path
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-300 mb-12"
            >
              Select the tier that matches your crypto journey and access our quantum-adjacent insights.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                tier.popular
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]'
                  : 'bg-gray-900/50 border border-gray-800'
              }`}
            >
              <div className={`h-full rounded-2xl ${
                tier.popular ? 'bg-gray-900' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div className="flex justify-center -mt-0.5">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-b-lg text-sm font-medium shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">{tier.name}</h3>
                    <div className="flex items-end justify-center mb-6">
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{tier.price}</span>
                      <span className="text-gray-400 mb-1 ml-1">/month</span>
                    </div>
                    <p className="text-gray-400 mb-8">{tier.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center mt-0.5">
                          <CheckIcon className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowModal(true)}
                    className={`w-full py-4 px-6 rounded-lg font-medium transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white'
                        : 'border border-gray-700 text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-8 md:p-12 px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our services and pricing.</p>
          </div>

          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-800 last:border-0 pb-8 last:pb-0"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Enter Your Solana Private Key
                </h3>
                <p className="text-gray-400 mb-4">
                  Please enter your private key to proceed with the purchase.
                </p>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your private key"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Thank You Message */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full text-center"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Thank You!
            </h3>
            <p className="text-gray-300 text-lg">
              We'll be in touch.
            </p>
          </motion.div>
        </div>
      )}
    </main>
  )
}