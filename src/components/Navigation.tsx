import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-500">Spreading Smiles India</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-primary-500 transition-colors">
              About Us
            </Link>
            <Link href="/work" className="text-gray-600 hover:text-primary-500 transition-colors">
              Our Work
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-primary-500 transition-colors">
              Events
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">
              Contact
            </Link>
            <Link href="/donate" className="btn-primary">
              Donate
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/work"
                className="block px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/donate"
                className="block px-3 py-2 text-primary-500 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 