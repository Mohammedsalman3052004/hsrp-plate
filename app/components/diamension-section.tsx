"use client"

export default function DimensionsSection() {
  const bikeSpecifications = [
    {
      serviceType: "Motorcycle / Scooter / Two Wheeler",
      dimensions: "28.5L x 10W cm",
      frontPlateSize: "28.2 cm x 4.3 cm",
      rearPlateSize: "19.5 cm x 10.16 cm",
      thickness: "1mm",
      material: "Aluminum (Special Grade)",
      reflectiveSheet: "White Reflective Lamination",
      hsrpCompliant: "Non-HSRP (Old Registered Vehicles)",
      screwHoles: "No Screw Holes",
      serialCode: "No Serial/Bar Code",
    },
    {
      serviceType: "Bicycle",
      dimensions: "28.5L x 10W cm",
      frontPlateSize: "28.2 cm x 4.3 cm",
      rearPlateSize: "19.5 cm x 10.16 cm",
      thickness: "1mm",
      material: "Aluminum (Special Grade)",
      reflectiveSheet: "White Reflective Lamination",
      hsrpCompliant: "Non-HSRP (Old Registered Vehicles)",
      screwHoles: "No Screw Holes",
      serialCode: "No Serial/Bar Code",
    },
  ]

  const carSpecifications = [
    {
      serviceType: "Car (Standard)",
      dimensions: "52L x 6W cm",
      frontPlateSize: '49.5 cm x 11.4 cm (19.5" x 4.5")',
      rearPlateSize: '49.5 cm x 11.4 cm (19.5" x 4.5")',
      thickness: "Standard",
      material: "Aluminum",
      reflectiveSheet: "Embossed Numbers",
      hsrpCompliant: "Non-HSRP (Old Registered Vehicles)",
      screwHoles: "No Screw Holes",
      serialCode: "No Serial/Bar Code",
    },
    {
      serviceType: "HSRP Frame/Cover/Guard",
      dimensions: "50.8L x 12.7W cm",
      frontPlateSize: '50.8 cm x 12.7 cm (20" x 5")',
      rearPlateSize: '50.8 cm x 12.7 cm (20" x 5")',
      thickness: "Standard",
      material: "Plastic",
      reflectiveSheet: "Protective Cover",
      hsrpCompliant: "IND and HSRP Compatible",
      screwHoles: "Universal Fit",
      serialCode: "Frame Protection",
    },
  ]

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "16px",
              lineHeight: "1.2",
            }}
          >
            Number Plate Specifications
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#6b7280",
              maxWidth: "768px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Detailed dimensions and specifications for motorcycle, car, and bicycle number plates suitable for old
            registered vehicles.
          </p>
        </div>

        <div style={{ display: "grid", gap: "32px" }}>
          {/* Bike Specifications */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(to right, #fbbf24, #f59e0b)",
                color: "white",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  margin: 0,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  🏍️
                </div>
                Two Wheeler Number Plate Specifications
              </h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f3f4f6" }}>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        minWidth: "200px",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Vehicle Service Type
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Dimensions
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Front Plate Size
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Rear Plate Size
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Thickness
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Material
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Surface Treatment
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      HSRP Status
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Installation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bikeSpecifications.map((spec, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #f3f4f6",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <td style={{ padding: "12px 16px" }}>
                        <span
                          style={{
                            backgroundColor: "#fef3c7",
                            color: "#92400e",
                            padding: "4px 8px",
                            borderRadius: "6px",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            border: "1px solid #fcd34d",
                          }}
                        >
                          {spec.serviceType}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.dimensions}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.frontPlateSize}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.rearPlateSize}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.thickness}
                      </td>
                      <td style={{ padding: "12px 16px" }}>{spec.material}</td>
                      <td style={{ padding: "12px 16px", fontSize: "0.875rem" }}>{spec.reflectiveSheet}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span
                          style={{
                            backgroundColor: "#fee2e2",
                            color: "#991b1b",
                            padding: "4px 8px",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: "500",
                          }}
                        >
                          {spec.hsrpCompliant}
                        </span>
                      </td>
                      <td style={{ padding: "12px 16px", fontSize: "0.875rem" }}>{spec.screwHoles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Car Specifications */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(to right, #fbbf24, #f59e0b)",
                color: "white",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  margin: 0,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  🚗
                </div>
                Car Number Plate Specifications
              </h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f3f4f6" }}>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        minWidth: "200px",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Vehicle Service Type
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Dimensions
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Front Plate Size
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Rear Plate Size
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Thickness
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Material
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Surface Treatment
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      HSRP Status
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Installation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carSpecifications.map((spec, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #f3f4f6",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <td style={{ padding: "12px 16px" }}>
                        <span
                          style={{
                            backgroundColor: spec.serviceType.includes("Frame") ? "#dcfce7" : "#dbeafe",
                            color: spec.serviceType.includes("Frame") ? "#166534" : "#1e40af",
                            padding: "4px 8px",
                            borderRadius: "6px",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            border: spec.serviceType.includes("Frame") ? "1px solid #86efac" : "1px solid #93c5fd",
                          }}
                        >
                          {spec.serviceType}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.dimensions}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.frontPlateSize}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.rearPlateSize}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "monospace",
                          fontSize: "0.875rem",
                        }}
                      >
                        {spec.thickness}
                      </td>
                      <td style={{ padding: "12px 16px" }}>{spec.material}</td>
                      <td style={{ padding: "12px 16px", fontSize: "0.875rem" }}>{spec.reflectiveSheet}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span
                          style={{
                            backgroundColor: spec.hsrpCompliant.includes("IND") ? "#dcfce7" : "#fee2e2",
                            color: spec.hsrpCompliant.includes("IND") ? "#166534" : "#991b1b",
                            padding: "4px 8px",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: "500",
                          }}
                        >
                          {spec.hsrpCompliant}
                        </span>
                      </td>
                      <td style={{ padding: "12px 16px", fontSize: "0.875rem" }}>{spec.screwHoles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div
          style={{
            marginTop: "48px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Important Information
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              fontSize: "0.875rem",
              color: "#6b7280",
            }}
          >
            <div>
              <h4
                style={{
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "8px",
                }}
              >
                Installation Requirements:
              </h4>
              <ul style={{ margin: 0, paddingLeft: "16px", lineHeight: "1.6" }}>
                <li>No screw holes provided on plates</li>
                <li>Professional installation required from nearby shop</li>
                <li>Custom fitting based on vehicle measurements</li>
                <li>Front and rear plates included in package</li>
              </ul>
            </div>
            <div>
              <h4
                style={{
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "8px",
                }}
              >
                Product Features:
              </h4>
              <ul style={{ margin: 0, paddingLeft: "16px", lineHeight: "1.6" }}>
                <li>Suitable for old registered vehicles</li>
                <li>No serial code or bar code included</li>
                <li>Custom vehicle details required after order</li>
                <li>Standard universal fit design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
