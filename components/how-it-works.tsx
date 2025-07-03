"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Smartphone, Battery, MapPin } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    title: "Download & Register",
    description:
      "Get the eSwap app, verify your license, and choose your subscription plan. Quick 2-minute setup process.",
  },
  {
    icon: MapPin,
    title: "Find Nearest Station",
    description:
      "Locate the closest eSwap station using our interactive map. Over 50 locations across Sydney CBD, Bondi, and Parramatta.",
  },
  {
    icon: Battery,
    title: "Swap & Ride",
    description:
      "Unlock your scooter or e-bike, swap batteries in seconds when needed. No charging downtime, just continuous riding.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-5 bg-light" aria-label="How eSwap Electric Scooter Rental Works" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#000000" }}>
            How eSwap Works in Sydney
          </h2>
          <p className="lead" style={{ color: "#606060", maxWidth: "600px", margin: "0 auto" }}>
            Get started with Sydney's most advanced electric scooter and e-bike rental system in three simple steps.
          </p>
        </motion.div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center h-100"
              >
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#F37002",
                    color: "white",
                  }}
                >
                  <step.icon size={32} />
                </div>
                <h3 className="h4 fw-bold mb-3" style={{ color: "#000000" }}>
                  {step.title}
                </h3>
                <p className="mb-0" style={{ color: "#606060" }}>
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
