'use client'

import { motion } from 'framer-motion'
import SectionContainer from '@/components/SectionContainer'

const screenshots = [
  { id: 1, alt: 'Home Screen' },
  { id: 2, alt: 'Playlist View' },
  { id: 3, alt: 'Player Screen' },
  { id: 4, alt: 'Discover Page' },
]

export default function Screenshots() {
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
          See It In Action
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Take a look at what makes Neo Tuber special
        </p>
      </motion.div>
      
      <div className="overflow-hidden">
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-64 md:w-80 snap-center"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 shadow-2xl border border-charcoal-light hover:border-primary-500/50 transition-colorser">
                <div className="aspect-[9/19] bg-charcoal rounded-2xl flex items-center justify-center border border-charcoal-light hover:border-primary-500/50 transition-colorser">
                  <div className="text-center space-y-3 p-6">
                    <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{screenshot.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

