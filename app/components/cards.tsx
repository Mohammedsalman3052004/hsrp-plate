import Image from "next/image"

const Cards = ({
  images,
  title,
  pricing,
  paragraph,
}: {
  images: string
  title: string
  pricing: string
  paragraph: string
}) => {
  return (
    <div className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 w-full mx-auto">
      {/* Image Container with Overlay */}
      <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 overflow-hidden">
        <Image
          src={images || "/placeholder.svg"}
          alt="number plate service"
          width={500}
          height={336}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Floating Price Badge */}
        <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-2 py-1 lg:px-4 lg:py-2 rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 text-sm lg:text-lg">
          {pricing}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-12 h-12 lg:w-20 lg:h-20 bg-yellow-400/10 rounded-full -translate-x-6 -translate-y-6 lg:-translate-x-10 lg:-translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative p-3 lg:p-6 bg-gradient-to-br from-gray-50 to-white">
        {/* Title with Underline Effect */}
        <h2 className="text-gray-900 font-bold text-sm sm:text-base lg:text-2xl mb-2 lg:mb-3 leading-tight relative">
          {title}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-500"></div>
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base leading-[1.8]">{paragraph}</p>

        {/* Decorative Bottom Element */}
        <div className="absolute bottom-0 right-0 w-8 h-8 lg:w-16 lg:h-16 bg-yellow-500/10 rounded-full translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
      </div>
    </div>
  )
}

export default Cards
