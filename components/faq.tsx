"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does battery swapping work for electric scooters in Sydney?",
    answer:
      "Our revolutionary battery swap technology allows you to exchange depleted batteries for fully charged ones in under 5 seconds at any eSwap station. Simply unlock the battery compartment through the app, remove the old battery, and insert a fresh one. No waiting, no charging downtime.",
  },
  {
    question: "Where are eSwap stations located across Sydney?",
    answer:
      "We have 50+ stations strategically located across Sydney including our main hub in Alexandria, CBD, Circular Quay, Bondi Beach, Parramatta, Manly, Darling Harbour, and major transport hubs. Our interactive map in the app shows real-time availability and directions to the nearest station.",
  },
  {
    question: "What are the requirements to rent an electric scooter in Sydney?",
    answer:
      "You must be 18+ years old, hold a valid driver's license or learner's permit, and complete our quick verification process through the eSwap app. We also provide a mandatory safety briefing for first-time users.",
  },
  {
    question: "Are eSwap electric scooters legal to ride in Sydney?",
    answer:
      "Yes, our electric scooters comply with NSW road rules and regulations. They're limited to 25km/h and can be ridden on bike paths, shared paths, and roads with speed limits up to 50km/h. Helmets are mandatory and provided with each rental.",
  },
  {
    question: "What happens if my electric scooter breaks down or has issues?",
    answer:
      "All rentals include comprehensive insurance and support. Simply report the issue through the app or call us at 0487 718 708, and we'll either provide remote troubleshooting or dispatch a replacement vehicle to your location within 30 minutes in the Sydney metro area.",
  },
  {
    question: "Can I use eSwap scooters for food delivery in Sydney?",
    answer:
      "Our Business Fleet plan is specifically designed for delivery drivers and commercial use. It includes priority battery swaps, extended usage hours, and commercial insurance coverage. Many Sydney delivery drivers have increased their earnings by 40% using our service.",
  },
  {
    question: "How much does it cost to rent an electric scooter in Sydney?",
    answer:
      "Our pricing starts from $15/day for casual use, $29/week for regular riders, and $89/month for unlimited access. Battery swaps are included in subscription plans or $5 per swap for casual users. No hidden fees or surge pricing.",
  },
  {
    question: "What's the range and speed of eSwap electric scooters?",
    answer:
      "Our premium scooters offer up to 50km range per battery and reach speeds of 25km/h (legal limit in NSW). With our battery swap network, you can effectively ride unlimited distances across Sydney without charging delays.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      className="py-5 bg-light"
      aria-label="Frequently Asked Questions about eSwap Electric Scooter Rentals"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#000000" }}>
            Frequently Asked Questions
          </h2>
          <p className="lead" style={{ color: "#606060" }}>
            Everything you need to know about electric scooter rentals and battery swapping in Sydney.
          </p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="accordion-item border-0 mb-3 shadow-sm rounded"
                >
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold border-0 rounded"
                      type="button"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      aria-expanded={openIndex === index}
                      style={{
                        backgroundColor: "white",
                        color: "#000000",
                        boxShadow: "none",
                      }}
                    >
                      {faq.question}
                      {openIndex === index ? (
                        <ChevronUp className="ms-auto" size={20} style={{ color: "#F37002" }} />
                      ) : (
                        <ChevronDown className="ms-auto" size={20} style={{ color: "#F37002" }} />
                      )}
                    </button>
                  </h3>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="accordion-collapse"
                      >
                        <div className="accordion-body pt-0" style={{ color: "#606060" }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
