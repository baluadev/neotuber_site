'use client'

import { motion } from 'framer-motion'
import { Download, Search, Heart } from 'lucide-react'
import SectionContainer from '@/components/SectionContainer'

const steps = [
  {
    icon: Download,
    title: 'Download',
    description: 'Download Neo Tuber from the App Store or Google Play',
  },
  {
    icon: Search,
    title: 'Discover',
    description: 'Explore millions of songs and create your playlists',
  },
  {
    icon: Heart,
    title: 'Share & Connect',
    description: 'Share your music with friends and connect through sound',
  },
]

export default function HowItWorks() {
  return (
    <SectionContainer className="bg-charcoal">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Get started in three simple steps
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-primary-500/20 z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-charcoal-dark rounded-2xl p-8 pt-12 shadow-lg hover:shadow-primary-500/20 hover:shadow-xl transition-shadow duration-300 text-center border border-charcoal-light hover:border-primary-500/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-primary-500/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-red-300 to-red-100"></div>
              )}
            </motion.div>
          )
        })}
      </div>
    </SectionContainer>
  )
}

