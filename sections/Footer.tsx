'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const footerLinks = {
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Contact', href: 'mailto:nexstudio.up@gmail.com' },
  ],
  social: [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: XIcon, href: '#', label: 'X' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Neo Tuber Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold text-white">Neo Tuber</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Music & video sharing experience. Listen. Share. Connect.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-charcoal-dark hover:shadow-[0_0_15px_rgba(0,255,163,0.5)] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-charcoal-light hover:border-primary-500/50 transition-colors pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Neo Tuber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

