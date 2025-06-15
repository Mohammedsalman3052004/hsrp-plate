import Cards from "./cards"

const cardsData = [
  {
    images: "/images/c4.jpg",
    title: "Bike Number Plate (Normal)",
    pricing: "₹300 - ₹450",
    paragraph:
      "High-quality normal bike number plates with durable materials. Perfect for standard vehicles with professional finishing.",
  },
  {
    images: "/images/c1.jpg",
    title: "Bike Number Plate (IND)",
    pricing: "₹400 - ₹700",
    paragraph: "Premium IND format bike number plates with enhanced visibility and compliance with latest regulations.",
  },
  {
    images: "/images/c13.png",
    title: "EV Bike Number Plate (IND)",
    pricing: "₹400 - ₹700",
    paragraph: "Premium IND format bike number plates with enhanced visibility and compliance with latest regulations.",
  },
  {
    images: "/images/c3.jpg",
    title: "Bike Number Plate (plane)",
    pricing: "₹100 - ₹150",
    paragraph:
      "Budget-friendly bike number plates without compromising on quality. Ideal for cost-conscious customers.",
  },
  {
    images: "/images/c5.jpg",
    title: "Bike Number Plate (Case)",
    pricing: "₹500 - ₹800",
    paragraph:
      "Professional car number plates with superior durability and weather resistance for long-lasting performance.",
  },
  {
    images: "/images/home.jpg",
    title: "Car Number Plate (Normal)",
    pricing: "₹800 - ₹1200",
    paragraph: "Premium car number plates with advanced materials and enhanced aesthetics for luxury vehicles.",
  },
  {
    images: "/images/c8.jpg",
    title: "Car Number Plate (IND)",
    pricing: "₹600 - ₹900",
    paragraph: "Heavy-duty number plates designed for commercial vehicles with extra strength and visibility features.",
  },
  {
    images: "/images/c7.jpg",
    title: "Car Yellow Number Plate (Normal)",
    pricing: "₹600 - ₹900",
    paragraph: "Heavy-duty number plates designed for commercial vehicles with extra strength and visibility features.",
  },
  {
    images: "/images/c6.jpg",
    title: "Car Yellow Number Plate (IND)",
    pricing: "₹600 - ₹900",
    paragraph: "Heavy-duty number plates designed for commercial vehicles with extra strength and visibility features.",
  },
  {
    images: "/images/c12.jpg",
    title: "EV Car Number Plate (IND)",
    pricing: "₹600 - ₹900",
    paragraph: "Heavy-duty number plates designed for commercial vehicles with extra strength and visibility features.",
  },
  {
    images: "/images/c10.jpg",
    title: "Car Number Plate (Case)",
    pricing: "₹600 - ₹900",
    paragraph: "Heavy-duty number plates designed for commercial vehicles with extra strength and visibility features.",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 lg:py-12">
      <div className="containerr mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-4">
            HSRP Number Plate <span className="text-yellow-500">Service</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional number plate solutions with premium quality and fast delivery
          </p>
        </div>

        {/* Cards Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              images={card.images}
              title={card.title}
              pricing={card.pricing}
              paragraph={card.paragraph}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 lg:mt-16 text-center">
          <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
            * Prices do not include delivery charges. All plates comply with government regulations.
          </p>
        </div>
      </div>
    </main>
  )
}
