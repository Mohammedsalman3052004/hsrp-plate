"use client"

export default function DimensionsSection() {
  const hsrpDimensions = [
    { vehicle: "Two-Wheelers", size: "200 mm × 100 mm" },
    { vehicle: "Three-Wheelers", size: "285 mm × 45 mm" },
    { vehicle: "Light Motor Vehicles (LMV)", size: "340 mm × 200 mm" },
    { vehicle: "Medium & Heavy Vehicles", size: "500 mm × 120 mm" },
  ]

  return (
    <section id="platesdimensions" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Number Plate Dimensions (HSRP)
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Standard HSRP dimensions as specified
          by the Ministry of Road Transport and Highways, India. Sizes vary by
          vehicle category.
        </p>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 font-semibold text-gray-800">
                  Vehicle Type
                </th>
                <th className="py-3 px-4 font-semibold text-gray-800">
                  Plate Size (mm)
                </th>
              </tr>
            </thead>
            <tbody>
              {hsrpDimensions.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{item.vehicle}</td>
                  <td className="py-3 px-4 font-mono text-gray-700">
                    {item.size}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-sm text-gray-500 max-w-2xl mx-auto">
          All HSRP plates are crafted from aluminium with a chromium hologram and laser-etched identification numbers, ensuring authenticity and durability. They must be fixed on both the front and rear of the vehicle.
        </div>
      </div>
    </section>
  )
}
