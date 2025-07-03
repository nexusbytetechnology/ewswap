"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager",
    location: "Sydney CBD",
    rating: 5,
    text: "eSwap has revolutionized my daily commute from Parramatta to the CBD. The battery swap technology means I never worry about running out of power. Highly recommend!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "James Wilson",
    role: "University Student",
    location: "Bondi Beach",
    rating: 5,
    text: "Perfect for getting around Sydney as a student. The subscription is affordable and the scooters are always in great condition. Love the app interface too!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Maria Rodriguez",
    role: "Food Delivery Driver",
    location: "Manly",
    rating: 5,
    text: "As a delivery driver, reliability is everything. eSwap's battery swap stations have increased my earning potential significantly. The Alexandria hub is perfectly located for my routes!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-5" aria-label="Customer Testimonials for eSwap Electric Scooter Rentals" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#000000" }}>
            What Sydney Riders Say
          </h2>
          <p className="lead" style={{ color: "#606060" }}>
            Join thousands of satisfied customers who've made eSwap their preferred mobility solution.
          </p>
        </motion.div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card h-100 shadow-sm border-0 p-4"
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Quote size={24} style={{ color: "#F37002" }} className="me-2" />
                    <div className="d-flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#F37002" style={{ color: "#F37002" }} />
                      ))}
                    </div>
                  </div>

                  <p className="card-text mb-4" style={{ color: "#606060" }}>
                    "{testimonial.text}"
                  </p>

                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name} - eSwap customer`}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h4 className="h6 fw-bold mb-0" style={{ color: "#000000" }}>
                        {testimonial.name}
                      </h4>
                      <small style={{ color: "#606060" }}>
                        {testimonial.role} • {testimonial.location}
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
