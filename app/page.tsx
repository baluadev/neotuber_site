import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import HowItWorks from '@/sections/HowItWorks'
import Screenshots from '@/sections/Screenshots'
import Testimonials from '@/sections/Testimonials'
import CTA from '@/sections/CTA'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

