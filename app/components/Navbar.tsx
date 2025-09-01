"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.jpg"
                  alt="logo"
                  height={60}
                  width={60}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300 hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="#platesdimensions"
                  className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300 hover:bg-white/10"
                >
                  Plates Diamensions
                </Link>
                <Link
                  href="#location"
                  className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300 hover:bg-white/10"
                >
                  Location
                </Link>
              </div>
            </div>

            {/* Desktop Booking Button */}
            <div className="hidden md:block">
              <Link href="#booking">
                <button className="bg-gray-900 hover:bg-yellow-700 text-white hover:text-yellow-100 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border-2 border-transparent hover:border-yellow-300">
                  Booking Now
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${menuOpen ? "opacity-0" : "opacity-100"}`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-yellow-600/95 backdrop-blur-sm border-t border-yellow-400/30">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-white hover:text-gray-900 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#platesdimensions"
              onClick={handleLinkClick}
              className="text-white hover:text-gray-900 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              Plates Dimensions
            </Link>
            <Link
              href="#location"
              onClick={handleLinkClick}
              className="text-white hover:text-gray-900 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              Location
            </Link>
            <Link href="#booking" onClick={handleLinkClick} className="block px-3 py-2">
              <button className="w-full bg-gray-900 hover:bg-yellow-700 text-white hover:text-yellow-100 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg border-2 border-transparent hover:border-yellow-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Marquee Section */}
      <div className="w-full bg-gradient-to-r from-red-500 to-red-600 border-t border-red-400/50 overflow-hidden">
        <div className="relative py-2">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
            <span className="text-white font-bold text-lg mx-8">
              🎉 15% off on first order 🎉
            </span>
          </div>
        </div>
      </div>

      {/* Phone Numbers Section */}
      <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 border-t border-yellow-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-3">
            {/* Phone Number 1 */}
            <div className="flex items-center gap-2 text-gray-900">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <a
                href="tel:+919443447469"
                className="font-bold text-lg hover:text-gray-700 transition-colors duration-300"
              >
                +91 94434 47469
              </a>
            </div>

            {/* Phone Number 2 */}
            {/* <div className="flex items-center gap-2 text-gray-900">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <a
                href="tel:+919003884178"
                className="font-bold text-lg hover:text-gray-700 transition-colors duration-300"
              >
                +91 90038 84178
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}

export default Navbar