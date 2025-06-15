import Cards from "./cards"

const cardsData = [
  {
    images: "/images/c4.jpg",
    title: "Bike Number Plate (Normal)",
    pricing: "₹300 - ₹450",
    paragraph:
      "High-quality standard white background number plate with black embossed letters. Ideal for petrol-driven two-wheelers, offering long-lasting durability and a classic look.",
  },
  {
    images: "/images/c1.jpg",
    title: "Bike Number Plate (IND)",
    pricing: "₹400 - ₹700",
    paragraph: "Premium white IND-compliant number plate with hologram and embossed characters. Ensures high security and visibility while meeting government regulations for standard fuel bikes.",
  },
  {
    images: "/images/c13.png",
    title: "EV Bike Number Plate (IND)",
    pricing: "₹400 - ₹700",
    paragraph: "Green IND number plate designed for electric two-wheelers with embossed characters and clear visibility. Complies with EV vehicle norms and ensures eco-friendly identification.",
  },
  {
    images: "/images/c3.jpg",
    title: "Bike Number Plate (plane)",
    pricing: "₹100 - ₹150",
    paragraph:
      "Budget-friendly bike number plates with a clean, plain design. Perfect for those seeking simplicity and affordability without compromising quality.",
  },
  {
    images: "/images/c5.jpg",
    title: "Bike Number Plate (Case)",
    pricing: "₹500 - ₹800",
    paragraph:
      "Durable bike number plate holders designed for secure fitting and long-lasting use. Weather-resistant and ideal for protecting your plate from damage.",
  },
  {
    images: "/images/home.jpg",
    title: "Car Number Plate (Normal)",
    pricing: "₹800 - ₹1200",
    paragraph: "High-quality car number plates with a premium silver-white finish. Ideal for private vehicles, offering durability and a sleek look that meets modern standards.",
  },
  {
    images: "/images/c8.jpg",
    title: "Car Number Plate (IND)",
    pricing: "₹600 - ₹900",
    paragraph: "Sturdy IND-compliant car plates with hologram and embossed details. Designed for enhanced visibility and official recognition for all types of vehicles.",
  },
  {
    images: "/images/c7.jpg",
    title: "Car Yellow Number Plate (Normal)",
    pricing: "₹600 - ₹900",
    paragraph: "Robust yellow background number plates for commercial vehicles. Features clear embossed text for improved legibility and long-term reliability.",
  },
  {
    images: "/images/c6.jpg",
    title: "Car Yellow Number Plate (IND)",
    pricing: "₹600 - ₹900",
    paragraph: "Government-approved IND format plates for commercial use. Comes with security holograms and strong embossing to meet transport department norms.",
  },
  {
    images: "/images/c12.jpg",
    title: "EV Car Number Plate (IND)",
    pricing: "₹600 - ₹900",
    paragraph: "Official green number plates for electric vehicles with IND compliance. Features hologram and embossed text for improved visibility, safety, and recognition on the road.",
  },
  {
    images: "/images/c10.jpg",
    title: "Car Number Plate (Case)",
    pricing: "₹600 - ₹900",
    paragraph: "Strong and durable car number plate holders with universal fit. Designed to protect plates from damage and enhance overall appearance with easy installation.",
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
