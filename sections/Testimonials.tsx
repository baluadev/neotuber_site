'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionContainer from '@/components/SectionContainer'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Music Enthusiast',
    quote: 'Neo Tuber has completely changed how I discover and share music. The recommendations are spot-on!',
    avatar: '👩',
  },
  {
    name: 'Michael Chen',
    role: 'Playlist Creator',
    quote: 'The sharing features are incredible. My friends and I create collaborative playlists all the time.',
    avatar: '👨',
  },
  {
    name: 'Emma Davis',
    role: 'Daily Listener',
    quote: 'Fast, beautiful, and intuitive. This is the music app I\'ve been waiting for.',
    avatar: '👩‍🦰',
  },
]

export default function Testimonials() {
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
          What People Say
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join thousands of happy users
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-charcoal-dark rounded-2xl p-8 shadow-lg hover:shadow-primary-500/20 hover:shadow-xl transition-shadow duration-300 relative border border-charcoal-light hover:border-primary-500/50 transition-colors"
          >
            <Quote className="w-10 h-10 text-red-200 absolute top-6 right-6" />
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-primary-600 rounded-full flex items-center justify-center text-3xl mb-4">
                {testimonial.avatar}
              </div>
              <p className="text-gray-200 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

