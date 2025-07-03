"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: "100px", // Account for fixed header
      }}
      aria-label="eSwap Hero Section - Electric Scooter Rentals Sydney"
    >
      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Whisk_cauajdrmzwvhody1ltzinjitndk4nc05yjk2ltf-hlQse9xJdL6xsVfMEj0O3S3dP1AB9T.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Electric scooters and e-bikes in Sydney"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </video>

        {/* Overlay for better text readability */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(243,112,2,0.1) 100%)",
          }}
        />
      </div>

      <div className="container position-relative text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="row justify-content-center"
        >
          <div className="col-lg-10">
            <h1
              className="display-2 fw-bold mb-4"
              style={{ fontFamily: "Inter, sans-serif", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Sydney's Smart Electric Mobility Solution
            </h1>
            <p
              className="lead fs-3 mb-5"
              style={{ maxWidth: "800px", margin: "0 auto 3rem auto", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Rent premium electric scooters and e-bikes with revolutionary battery swap technology. Zero downtime,
              maximum convenience across Sydney.
            </p>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <motion.a
                href="#pricing"
                className="btn btn-lg px-5 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                style={{ backgroundColor: "#F37002", color: "white", border: "none" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Riding Today <ArrowRight size={20} />
              </motion.a>

              <motion.button
                className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} /> Watch Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="text-white text-center">
          
          
        </div>
      </motion.div>
    </section>
  )
}
