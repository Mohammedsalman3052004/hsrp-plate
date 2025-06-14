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
                href="#numberplate"
                className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300 hover:bg-white/10"
              >
                Number Plates
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
            href="#numberplate"
            onClick={handleLinkClick}
            className="text-white hover:text-gray-900 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
          >
            Number Plates
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
  )
}

export default Navbar
