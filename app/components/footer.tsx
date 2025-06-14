import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Company Logo"
                height={120}
                width={120}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Since 1984</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Trusted provider of high-quality number plates and automotive services for over 40 years.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold text-amber-400 mb-4 pb-2 border-b border-amber-400/30">Quick Links</h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link
                href="#numberplate"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                Number Plates
              </Link>
              <Link
                href="#location"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                Location
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold text-amber-400 mb-4 pb-2 border-b border-amber-400/30">
              Contact Info
            </h4>
            <div className="space-y-3">
              <Link
                href="tel:9003884178"
                className="flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-colors duration-200 group"
              >
                <svg
                  className="w-4 h-4 mr-3 text-amber-400 group-hover:text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">9003884178</span>
              </Link>
              <Link
                href="mailto:hsrpnumberplate1@gmail.com"
                className="flex items-center justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-colors duration-200 group"
              >
                <svg
                  className="w-4 h-4 mr-3 text-amber-400 group-hover:text-amber-300 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="font-medium break-all">hsrpnumberplate1@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold text-amber-400 mb-4 pb-2 border-b border-amber-400/30">Address</h4>
            <Link
              href="https://maps.app.goo.gl/ef7839QR8tvkeU6q6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-center lg:justify-start text-gray-300 hover:text-amber-400 transition-colors duration-200 group"
            >
              <svg
                className="w-4 h-4 mr-3 mt-1 text-amber-400 group-hover:text-amber-300 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium leading-relaxed">
                No:531r, Regional Transport Office Rd, Phase 2, Sathuvachari, Vellore - 632009
              </span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section with Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HSRP Number Plate. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <h5 className="text-amber-400 font-semibold text-sm">Get in Touch</h5>
            <div className="flex space-x-4">
              <Link
                href="tel:9003884178"
                className="p-2 bg-gray-800 hover:bg-amber-400 text-gray-300 hover:text-gray-900 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Call us"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </Link>
              <Link
                href="mailto:hsrpnumberplate1@gmail.com"
                className="p-2 bg-gray-800 hover:bg-amber-400 text-gray-300 hover:text-gray-900 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Email us"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-pink-600 text-gray-300 hover:text-white rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                </svg>
              </Link>
              <Link
                href="https://maps.app.goo.gl/ef7839QR8tvkeU6q6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Location"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://wa.me/9003884178"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
