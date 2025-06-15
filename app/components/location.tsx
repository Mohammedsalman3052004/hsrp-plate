import Image from "next/image"
import Link from "next/link"

const Location = () => {
  return (
    <section className="py-2 px-4 bg-gradient-to-br from-gray-50 to-white" id="location">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">Location On Map</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Image Container */}
          <div className="relative group">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
              <Image
                src="/images/shop.jpg"
                alt="Shop Location"
                height={500}
                width={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full opacity-60"></div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <div className="space-y-8">
              {/* Address Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  {/* Map Pin SVG Icon */}
                  <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-yellow-600 font-serif">Address</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-gray-800 text-lg lg:text-xl font-medium leading-relaxed">
                    No:531r, Regional Transport Office Rd, Phase 2, Sathuvachari, Vellore - 632009
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <Link
                  href="https://maps.app.goo.gl/ef7839QR8tvkeU6q6"
                  className="group inline-flex items-center gap-4 bg-gray-800 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>View on Map</span>
                  {/* Arrow Right SVG Icon */}
                  <svg
                    className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Open Now</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Easy Parking Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Location
