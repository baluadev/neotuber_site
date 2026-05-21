'use client'

import { motion } from 'framer-motion'
import { Share2, Sparkles, Bell, Zap } from 'lucide-react'
import SectionContainer from '@/components/SectionContainer'

const features = [
  {
    icon: Share2,
    title: 'Share Playlists',
    description: 'Share your favorite playlists with friends and discover new music together.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Recommendations',
    description: 'Get music recommendations tailored to your taste and listening habits.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay updated with smart notifications about new releases and friend activity.',
  },
  {
    icon: Zap,
    title: 'Fast & Lightweight',
    description: 'Enjoy a blazing-fast player that uses minimal resources and battery.',
  },
]

export default function Features() {
  return (
    <SectionContainer className="bg-charcoal-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Everything you need for the perfect music experience
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal rounded-2xl p-8 shadow-lg hover:shadow-primary-500/20 hover:shadow-xl transition-shadow duration-300 border border-charcoal-light hover:border-primary-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center mb-6 shadow-lg hover:shadow-primary-500/20">
                <Icon className="w-7 h-7 text-charcoal-dark" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </SectionContainer>
  )
}

