"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap } from "lucide-react"
import Image from "next/image"

const products = [
  {
    type: "Electric Scooters",
    image: "/electric-scooter-white.jpg",
    features: ["50km range", "GPS tracking", "App unlock", "Weather resistant"],
    rentPrice: "$15/day",
    buyPrice: "$899",
    description:
      "Premium electric scooters perfect for Sydney commuting. Lightweight, foldable, and equipped with our revolutionary battery swap technology.",
    specs: {
      topSpeed: "25km/h",
      weight: "18kg",
      chargingTime: "Instant swap",
      waterRating: "IP67",
    },
  },
  {
    type: "E-Bikes",
    image: "/electric-bike-rider.jpg",
    features: ["80km range", "Pedal assist", "Cargo basket", "LED lights"],
    rentPrice: "$25/day",
    buyPrice: "$1,299",
    description:
      "High-performance e-bikes designed for Sydney's diverse terrain. From city streets to coastal paths, ride with confidence and style.",
    specs: {
      topSpeed: "25km/h",
      weight: "22kg",
      chargingTime: "Instant swap",
      waterRating: "IP65",
    },
  },
  {
    type: "Swap Batteries",
    image: "/eswap-battery-product.jpg",
    features: ["5-second swap", "Weatherproof", "Smart monitoring", "2-year warranty"],
    rentPrice: "$5/swap",
    buyPrice: "$199",
    description:
      "Revolutionary battery technology that eliminates charging downtime. Swap in seconds at any eSwap station across Sydney.",
    specs: {
      capacity: "48V 20Ah",
      weight: "2.8kg",
      chargingTime: "2-3 hours",
      lifespan: "5000+ cycles",
    },
  },
]

export default function ProductHighlights() {
  const [activeTab, setActiveTab] = useState("rent")
  const [hoveredCard, setHoveredCard] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="vehicles"
      className="py-5 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
      }}
      aria-label="eSwap Electric Scooter and E-Bike Products"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="position-absolute"
          style={{
            top: "20%",
            right: "10%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(243,112,2,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "10%",
            left: "5%",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, rgba(255,107,53,0.03) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="container position-relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge px-4 py-2 mb-4 d-inline-block"
            style={{
              background: "linear-gradient(45deg, #F37002, #FF6B35)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: "600",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              borderRadius: "50px",
            }}
          >
            Our Fleet
          </motion.span>

          <h2 className="display-4 fw-bold mb-4" style={{ color: "#000000" }}>
            Premium Electric Mobility for Sydney
          </h2>
          <p className="lead mb-5" style={{ color: "#606060", maxWidth: "700px", margin: "0 auto" }}>
            Choose from our range of cutting-edge electric scooters, e-bikes, and battery swap technology designed for
            Sydney's urban landscape.
          </p>

          {/* Enhanced Toggle */}
          <motion.div
            className="d-inline-flex p-1 rounded-pill shadow-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(243,112,2,0.1)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              type="button"
              className={`btn px-4 py-2 fw-semibold transition-all ${
                activeTab === "rent" ? "text-white shadow-sm" : "text-dark bg-transparent"
              }`}
              style={{
                background: activeTab === "rent" ? "linear-gradient(45deg, #F37002, #FF6B35)" : "transparent",
                border: "none",
                borderRadius: "50px",
                transition: "all 0.3s ease",
              }}
              onClick={() => setActiveTab("rent")}
            >
              Rent
            </button>
            <button
              type="button"
              className={`btn px-4 py-2 fw-semibold transition-all ${
                activeTab === "buy" ? "text-white shadow-sm" : "text-dark bg-transparent"
              }`}
              style={{
                background: activeTab === "buy" ? "linear-gradient(45deg, #F37002, #FF6B35)" : "transparent",
                border: "none",
                borderRadius: "50px",
                transition: "all 0.3s ease",
              }}
              onClick={() => setActiveTab("buy")}
            >
              Buy
            </button>
          </motion.div>
        </motion.div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="card h-100 border-0 position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  boxShadow:
                    hoveredCard === index ? "0 25px 50px rgba(243,112,2,0.15)" : "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Image Container */}
                <div className="position-relative overflow-hidden" style={{ borderRadius: "24px 24px 0 0" }}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      className="card-img-top"
                      alt={`${product.type} available for rent in Sydney`}
                      width={400}
                      height={280}
                      style={{
                        height: "280px",
                        objectFit: "cover",
                        filter: hoveredCard === index ? "brightness(1.1)" : "brightness(1)",
                      }}
                    />
                  </motion.div>

                  {/* Overlay Badge */}
                  <div
                    className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill"
                    style={{
                      background: "linear-gradient(45deg, #F37002, #FF6B35)",
                      color: "white",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {activeTab === "rent" ? "Available Now" : "In Stock"}
                  </div>
                </div>

                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="card-title h5 fw-bold mb-0" style={{ color: "#000000" }}>
                      {product.type}
                    </h3>
                    <motion.div animate={{ rotate: hoveredCard === index ? 360 : 0 }} transition={{ duration: 0.6 }}>
                      <Zap size={24} style={{ color: "#F37002" }} />
                    </motion.div>
                  </div>

                  <p className="card-text mb-4" style={{ color: "#606060", lineHeight: "1.6" }}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="row g-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="col-6">
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle me-2 d-flex align-items-center justify-content-center"
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: "#F37002",
                              opacity: 0.1,
                            }}
                          >
                            <div
                              className="rounded-circle"
                              style={{
                                width: "6px",
                                height: "6px",
                                backgroundColor: "#F37002",
                              }}
                            />
                          </div>
                          <span className="small" style={{ color: "#606060", fontSize: "0.85rem" }}>
                            {feature}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <div className="row g-2 mb-4">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div key={idx} className="col-6">
                        <div className="text-center p-2 rounded-3" style={{ backgroundColor: "rgba(243,112,2,0.05)" }}>
                          <div className="small fw-semibold" style={{ color: "#F37002", fontSize: "0.75rem" }}>
                            {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                          </div>
                          <div className="small" style={{ color: "#000000", fontSize: "0.8rem" }}>
                            {value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="h4 fw-bold mb-0" style={{ color: "#F37002" }}>
                          {activeTab === "rent" ? product.rentPrice : product.buyPrice}
                        </span>
                        {activeTab === "rent" && <small className="text-muted ms-1">starting from</small>}
                      </div>
                    </div>

                    <motion.button
                      className="btn w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: hoveredCard === index ? "linear-gradient(45deg, #F37002, #FF6B35)" : "#F37002",
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                        padding: "12px",
                        transition: "all 0.3s ease",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeTab === "rent" ? "Rent Now" : "Buy Now"}
                      <motion.div animate={{ x: hoveredCard === index ? 5 : 0 }} transition={{ duration: 0.2 }}>
                        →
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-5"
        >
          <div
            className="p-4 rounded-4"
            style={{
              background: "linear-gradient(135deg, rgba(243,112,2,0.05) 0%, rgba(255,107,53,0.05) 100%)",
              border: "1px solid rgba(243,112,2,0.1)",
            }}
          >
            <p className="mb-3" style={{ color: "#606060" }}>
              Need help choosing the right option? Our Sydney team is here to help.
            </p>
            <motion.a
              href="#contact"
              className="btn px-4 py-2"
              style={{
                background: "linear-gradient(45deg, #F37002, #FF6B35)",
                color: "white",
                border: "none",
                borderRadius: "50px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Expert Advice
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
