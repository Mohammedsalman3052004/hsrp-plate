import Cards from "./cards"

const cardsData = [
  {
    images: "/images/bike-normal.png",
    title: "Bike Number Plate (Normal)",
    pricing: "₹350 - ₹450",
    paragraph: "Durable white plate with black embossed letters for petrol bikes.",
  },
  {
    images: "/images/111.jpg",
    title: "Bike Number Plate (IND)",
    pricing: "₹450 - ₹700",
    paragraph: "IND-compliant white plate with hologram and embossing for security.",
  },
  {
    images: "/images/ev.jpg",
    title: "EV Bike Number Plate (IND)",
    pricing: "₹450 - ₹700",
    paragraph: "Green IND plate for electric bikes, embossed and EV norm compliant.",
  },
  {
    images: "/images/c3.jpg",
    title: "Bike Number Plate (Plain)",
    pricing: "₹100 - ₹150",
    paragraph: "Simple, budget-friendly plain design with reliable quality.",
  },
  {
    images: "/images/c5.jpg",
    title: "Bike Number Plate (Case)",
    pricing: "₹160 - ₹200",
    paragraph: "Durable, weather-resistant holder for secure bike plate fitting.",
  },
  {
    images: "/images/black-plate.jpeg",
    title: "Car Number Plate (Normal)",
    pricing: "₹600 - ₹900",
    paragraph: "High-quality silver-white IND plate offering a modern look.",
  },
  {
    images: "/images/car-ind.png",
    title: "Car Number Plate (IND)",
    pricing: "₹800 - ₹1200",
    paragraph: "Sturdy IND-compliant car plate with hologram and embossing.",
  },
  {
    images: "/images/yellow.webp",
    title: "Car Yellow Number Plate (Normal)",
    pricing: "₹600 - ₹900",
    paragraph: "Robust yellow plate for commercial vehicles with clear embossing.",
  },
  {
    images: "/images/yellow-ind.jpg",
    title: "Car Yellow Number Plate (IND)",
    pricing: "₹800 - ₹1200",
    paragraph: "IND yellow plate with hologram security and robust embossing.",
  },
  {
    images: "/images/c12.jpg",
    title: "EV Car Number Plate (IND)",
    pricing: "₹800 - ₹1200",
    paragraph: "Green IND plate for EV cars with hologram and clear visibility.",
  },
  {
    images: "/images/c10.jpg",
    title: "Car Number Plate (Case)",
    pricing: "₹200 - ₹250",
    paragraph: "Strong universal holder that protects and enhances car plates.",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 lg:py-12">
      <div className="containerr mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-4">
            HSRP Number Plate <span className="text-yellow-500">Sales</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Premium aluminium HSRP number plates with tamper-proof security locks and quick delivery.
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
            * Prices do not include delivery charges. All plates are crafted with premium quality and durability.
          </p>
        </div>
      </div>
    </main>
  )
}
