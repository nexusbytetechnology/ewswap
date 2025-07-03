"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Clock, Shield, Smartphone, ArrowRight, Battery, Cpu, Wifi } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "5-Second Battery Swap",
    description: "Revolutionary technology that allows instant battery replacement in under 5 seconds",
    color: "#F37002",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our smart stations operate around the clock, ensuring you're never without power",
    color: "#FF6B35",
  },
  {
    icon: Shield,
    title: "Smart Safety System",
    description: "Advanced monitoring and safety protocols protect both batteries and users",
    color: "#F7931E",
  },
  {
    icon: Smartphone,
    title: "App Integration",
    description: "Seamless mobile app control for finding stations and managing your swaps",
    color: "#FF8C42",
  },
]

const techSpecs = [
  { icon: Battery, label: "Range per battery", value: "50km", color: "#F37002" },
  { icon: Cpu, label: "Swap cycles", value: "5000+", color: "#FF6B35" },
  { icon: Shield, label: "Waterproof rating", value: "IP67", color: "#F7931E" },
  { icon: Wifi, label: "Warranty", value: "2 Year", color: "#FF8C42" },
]

export default function ESwapTechnology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
        minHeight: "100vh",
      }}
      aria-label="eSwap Battery Swap Technology Introduction"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <motion.div className="position-absolute w-100 h-100" style={{ y: backgroundY }}>
        <div
          className="position-absolute"
          style={{
            top: "10%",
            right: "10%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(243,112,2,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "20%",
            left: "5%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="position-absolute"
          style={{
            width: "4px",
            height: "4px",
            backgroundColor: "#F37002",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container position-relative py-5" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
        {/* Hero Section */}
        <motion.div style={{ y: textY }} className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span
              className="badge px-4 py-2 mb-4 d-inline-block"
              style={{
                background: "linear-gradient(45deg, #F37002, #FF6B35)",
                color: "white",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Revolutionary Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display-3 fw-bold mb-4 text-white"
            style={{
              fontFamily: "Inter, sans-serif",
              background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Future of Electric Mobility
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lead text-light mb-5"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.3rem",
              lineHeight: "1.6",
            }}
          >
            Experience revolutionary battery swap technology that eliminates charging downtime forever. Swap batteries
            in seconds, not hours.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="row g-5 align-items-center mb-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.h3
                className="h1 fw-bold mb-4 text-white"
                whileInView={{
                  background: [
                    "linear-gradient(45deg, #ffffff, #f0f0f0)",
                    "linear-gradient(45deg, #F37002, #FF6B35)",
                    "linear-gradient(45deg, #ffffff, #f0f0f0)",
                  ],
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Smart Battery Ecosystem
              </motion.h3>

              <p className="mb-5 text-light" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                Our intelligent network of swap stations and smart batteries creates a seamless ecosystem that keeps
                Sydney moving. Each station monitors battery health, optimizes charging cycles, and ensures maximum
                availability.
              </p>

              {/* Features Grid */}
              <div className="row g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="p-4 rounded-4 h-100"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        cursor: "pointer",
                      }}
                    >
                      <motion.div
                        className="d-flex align-items-center mb-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className="rounded-3 d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: `linear-gradient(45deg, ${feature.color}, ${feature.color}dd)`,
                            boxShadow: `0 8px 25px ${feature.color}40`,
                          }}
                        >
                          <feature.icon size={24} color="white" />
                        </div>
                        <h4 className="h6 fw-bold mb-0 text-white">{feature.title}</h4>
                      </motion.div>
                      <p className="small mb-0 text-light opacity-75">{feature.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Main Station Image */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="position-relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.4 }}
                className="position-relative"
                style={{ perspective: "1000px" }}
              >
                <Image
                  src="/eswap-station-main.jpg"
                  alt="eSwap Battery Swap Station with 8 battery compartments and digital interface"
                  width={600}
                  height={700}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    maxHeight: "700px",
                    objectFit: "cover",
                    boxShadow: "0 25px 50px rgba(243,112,2,0.3)",
                  }}
                />

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="position-absolute top-0 end-0 me-n4 mt-4"
                  style={{ transform: "translateX(50%)" }}
                >
                  <div
                    className="p-3 rounded-3 text-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(243,112,2,0.9), rgba(255,107,53,0.9))",
                      backdropFilter: "blur(10px)",
                      minWidth: "120px",
                      boxShadow: "0 15px 35px rgba(243,112,2,0.4)",
                    }}
                  >
                    <div className="h4 fw-bold text-white mb-1">8</div>
                    <div className="small text-white opacity-90">Battery Slots</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="position-absolute bottom-0 start-0 ms-n4 mb-4"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div
                    className="p-3 rounded-3 text-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,240,0.9))",
                      backdropFilter: "blur(10px)",
                      minWidth: "120px",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div className="h4 fw-bold mb-1" style={{ color: "#F37002" }}>
                      24/7
                    </div>
                    <div className="small" style={{ color: "#606060" }}>
                      Available
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Battery Technology Section */}
        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 1 }}
              className="row g-3"
            >
              <div className="col-6">
                <motion.div whileHover={{ scale: 1.05, rotateZ: 2 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/eswap-battery.jpg"
                    alt="eSwap smart battery with transparent casing showing internal circuitry"
                    width={300}
                    height={250}
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ boxShadow: "0 20px 40px rgba(243,112,2,0.2)" }}
                  />
                </motion.div>
              </div>
              <div className="col-6">
                <motion.div whileHover={{ scale: 1.05, rotateZ: -2 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/eswap-station-front.jpg"
                    alt="Front view of eSwap station showing battery compartments"
                    width={300}
                    height={250}
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ boxShadow: "0 20px 40px rgba(255,107,53,0.2)" }}
                  />
                </motion.div>
              </div>
              <div className="col-12">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/eswap-station-side.jpg"
                    alt="Side view of eSwap station with orange branding"
                    width={600}
                    height={200}
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ boxShadow: "0 20px 40px rgba(247,147,30,0.2)" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h3 className="h1 fw-bold mb-4 text-white">Next-Gen Smart Batteries</h3>
              <p className="mb-5 text-light" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                Each battery is a masterpiece of engineering - featuring advanced lithium-ion cells, intelligent
                monitoring systems, and weatherproof design that withstands Sydney's conditions.
              </p>

              {/* Tech Specs */}
              <div className="row g-4">
                {techSpecs.map((spec, index) => (
                  <div key={index} className="col-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        rotateY: 10,
                        transition: { duration: 0.2 },
                      }}
                      className="text-center p-4 rounded-4"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        cursor: "pointer",
                      }}
                    >
                      <motion.div className="mb-3" whileHover={{ rotateY: 360 }} transition={{ duration: 0.6 }}>
                        <spec.icon size={32} color={spec.color} />
                      </motion.div>
                      <div className="h3 fw-bold mb-1" style={{ color: spec.color }}>
                        {spec.value}
                      </div>
                      <div className="small text-light opacity-75">{spec.label}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-5"
        >
          <div
            className="p-5 rounded-4 position-relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(243,112,2,0.1) 0%, rgba(255,107,53,0.1) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(243,112,2,0.2)",
            }}
          >
            <motion.h3
              className="h2 fw-bold mb-3 text-white"
              whileInView={{
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              Ready to Experience the Future?
            </motion.h3>
            <p className="mb-4 text-light" style={{ fontSize: "1.1rem" }}>
              Join thousands of Sydney riders who've already made the switch to instant, hassle-free electric mobility.
            </p>
            <motion.a
              href="#vehicles"
              className="btn btn-lg px-5 py-3 fw-semibold d-inline-flex align-items-center gap-3"
              style={{
                background: "linear-gradient(45deg, #F37002, #FF6B35)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                boxShadow: "0 15px 35px rgba(243,112,2,0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(243,112,2,0.6)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Vehicles
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
