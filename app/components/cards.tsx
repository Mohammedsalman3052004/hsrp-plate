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
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 w-full max-w-sm mx-auto h-auto md:h-[26rem]">
      {/* Image Container with Overlay */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={images || "/placeholder.svg"}
          alt="our-courses-live-card"
          width={500}
          height={336}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Floating Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-4 py-2 rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 text-lg md:text-xl">
          {pricing}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400/10 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white flex flex-col justify-start items-start h-auto md:h-[calc(26rem-16rem)]">
        {/* Title with Underline Effect */}
        <h2 className="text-gray-900 font-bold text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 leading-tight relative w-full">
          {title}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-500"></div>
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base flex-grow">{paragraph}</p>

        {/* Decorative Bottom Element */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-full translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
      </div>
    </div>
  )
}

export default Cards
