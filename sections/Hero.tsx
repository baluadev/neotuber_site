'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import AppButton from '@/components/AppButton'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Force play video
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video is playing')
          })
          .catch((error) => {
            console.log('Video autoplay failed:', error)
          })
      }
      
      // Log video events
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded')
      })
      video.addEventListener('canplay', () => {
        console.log('Video can play')
      })
      video.addEventListener('error', (e) => {
        console.log('Video error event:', e)
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback gradient - only shows if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-white to-charcoal-dark z-0"></div>
        
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{ minWidth: '100%', minHeight: '100%' }}
          onError={(e) => {
            console.log('Video error:', e)
            const target = e.target as HTMLVideoElement
            if (target) {
              target.style.display = 'none'
            }
          }}
          onLoadedData={() => {
            console.log('Video data loaded')
          }}
        >
          {/* Option 1: Local video file (recommended) - Place video in /public folder */}
          {/* <source src="/hero-video.mp4" type="video/mp4" /> */}
          
          {/* Option 2: Google Drive (may not work due to CORS) */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability - reduced opacity */}
        <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[1px] z-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <Image
                src="/logo.svg"
                alt="Neo Tuber Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Neo Tuber
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              Listen. Share. Connect.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Music & video sharing experience. Discover new sounds, share your favorites, and connect with friends through the power of music.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <AppButton store="apple" />
              <AppButton store="google" />
            </motion.div>
          </motion.div>
          
          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-charcoal-light rounded-3xl blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-charcoal rounded-3xl shadow-2xl p-4 border border-charcoal-light hover:border-primary-500/50 transition-colors">
                <div className="aspect-[9/19] bg-charcoal-dark rounded-2xl flex items-center justify-center border border-charcoal-light hover:border-primary-500/50 transition-colorser">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 mx-auto flex items-center justify-center">
                      <Image
                        src="/logo.svg"
                        alt="Neo Tuber App"
                        width={96}
                        height={96}
                        className="w-24 h-24"
                      />
                    </div>
                    <p className="text-gray-300 font-medium">App Mockup</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-200"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

