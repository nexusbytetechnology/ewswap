"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Casual Rider",
    price: "$29",
    period: "/week",
    description: "Perfect for weekend adventures and occasional commutes",
    features: [
      "3 hours daily usage",
      "Unlimited battery swaps",
      "Basic insurance included",
      "Access to 50+ stations",
      "Mobile app support",
    ],
    popular: false,
  },
  {
    name: "Daily Commuter",
    price: "$89",
    period: "/month",
    description: "Ideal for regular Sydney commuters and daily riders",
    features: [
      "Unlimited daily usage",
      "Priority battery swaps",
      "Premium insurance",
      "All Sydney locations",
      "24/7 customer support",
      "Free helmet included",
    ],
    popular: true,
  },
  {
    name: "Business Fleet",
    price: "$199",
    period: "/month",
    description: "Comprehensive solution for businesses and delivery services",
    features: [
      "Multiple vehicle access",
      "Fleet management dashboard",
      "Bulk battery swaps",
      "Commercial insurance",
      "Dedicated account manager",
      "Custom branding options",
    ],
    popular: false,
  },
]

export default function SubscriptionPlans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="pricing"
      className="py-5"
      aria-label="eSwap Subscription Plans for Electric Scooter Rentals Sydney"
      ref={ref}
    >
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 mb-md-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#000000" }}>
            Choose Your Sydney Mobility Plan
          </h2>
          <p className="lead" style={{ color: "#606060" }}>
            Flexible subscription plans designed for every type of rider in Sydney.
          </p>
        </motion.div>

        <div className="row g-3 g-md-4 justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-12 col-md-6 col-xl-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`card h-100 shadow-sm border-0 position-relative card-mobile ${plan.popular ? "border-warning" : ""}`}
                style={plan.popular ? { borderWidth: "2px", borderColor: "#F37002" } : {}}
              >
                {plan.popular && (
                  <div
                    className="position-absolute top-0 start-50 translate-middle px-3 py-1 rounded-pill d-flex align-items-center gap-1"
                    style={{ backgroundColor: "#F37002", color: "white" }}
                  >
                    <Star size={14} fill="currentColor" />
                    <small className="fw-bold">Most Popular</small>
                  </div>
                )}

                <div className="card-body text-center p-3 p-md-4 d-flex flex-column">
                  <h3 className="card-title h4 fw-bold mb-3" style={{ color: "#000000" }}>
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <span className="display-5 fw-bold" style={{ color: "#F37002" }}>
                      {plan.price}
                    </span>
                    <span className="text-muted">{plan.period}</span>
                  </div>
                  <p className="text-muted mb-4">{plan.description}</p>

                  <ul className="list-unstyled text-start mb-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-2">
                        <Check size={16} className="me-2 flex-shrink-0" style={{ color: "#F37002" }} />
                        <span style={{ color: "#606060", fontSize: "0.9rem" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button
                      className={`btn w-100 fw-semibold ${plan.popular ? "text-white" : "btn-outline-dark"}`}
                      style={
                        plan.popular
                          ? { backgroundColor: "#F37002", border: "none", minHeight: "44px" }
                          : { minHeight: "44px" }
                      }
                    >
                      Get Started
                    </button>
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
