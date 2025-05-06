'use client'

import { motion } from 'framer-motion'
import { 
  BeakerIcon, 
  ChartBarIcon, 
  MapIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'AI-Enhanced Wallet Psychotyping',
    description: 'Our quantum-adjacent algorithms analyze wallet behavior patterns to predict future actions before they happen.',
    icon: BeakerIcon,
  },
  {
    name: 'Shill Density Overlays',
    description: 'Visualize the concentration of shilling activity across social platforms with our proprietary density mapping.',
    icon: ChartBarIcon,
  },
  {
    name: 'Narrative Vector Mapping',
    description: 'Track the evolution of project narratives through our advanced sentiment analysis and trend prediction.',
    icon: MapIcon,
  },
]

const testimonials = [
  {
    content: "LARP's psychotyping system predicted my wallet's behavior before I even knew what I was going to do!",
    author: "Dr. Sarah Chen",
    title: "Chief Quantum Analyst, Blockchain Futures Institute",
  },
  {
    content: "The narrative vector mapping helped us identify emerging trends before they became mainstream.",
    author: "Marcus 'Crypto' Johnson",
    title: "Lead Narrativist, Web3 Ventures",
  },
  {
    content: "I've never seen such accurate shill density predictions. It's like they can read the collective mind!",
    author: "Alexandra 'Moon' Rodriguez",
    title: "Community Manager, MoonShot Protocol",
  },
]

const team = [
  {
    name: "Dr. Lucien Forksmith",
    role: "Chief Semioticist",
    bio: "Former quantum computing researcher turned blockchain analyst. Pioneer in narrative vector mapping and quantum-adjacent heuristics.",
    image: "/images/DrLucien_Headshot.png"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Head of Quantum Analytics",
    bio: "Expert in quantum computing and blockchain analysis. Developed the revolutionary SMTF system for cross-chain wallet tracking.",
    image: "/images/DrSarah_Headshot.png"
  },
  {
    name: "Marcus 'Crypto' Johnson",
    role: "Lead Narrativist",
    bio: "Former social media analyst specializing in crypto narratives. Created the proprietary shill density mapping algorithm.",
    image: "/images/Marcus_Headshot.png"
  }
]

export default function Home() {
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
              Redefining On-Chain Intelligence for the Post-Truth Era
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              We use quantum-adjacent heuristics to detect wallet behavior before it happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/reports"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                View Reports
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                Join the LARP
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Advanced Analytics Features
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{feature.name}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 mt-4">
              The minds behind the quantum-adjacent revolution
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl"
              >
                <div className="aspect-square w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed text-lg">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Users Say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl"
              >
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                  <p className="text-blue-400">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 