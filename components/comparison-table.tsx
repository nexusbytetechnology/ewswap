"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const comparisonData = [
  { feature: "Upfront Cost", rent: "Low ($15-25/day)", buy: "High ($899-1,299)" },
  { feature: "Maintenance", rent: "Included", buy: "Your responsibility" },
  { feature: "Insurance", rent: "Included", buy: "Additional cost" },
  { feature: "Battery Swaps", rent: "Unlimited", buy: "Pay per swap" },
  { feature: "Upgrades", rent: "Always latest model", buy: "Manual upgrade" },
  { feature: "Storage", rent: "Return to station", buy: "Your responsibility" },
  { feature: "Flexibility", rent: "Cancel anytime", buy: "Permanent ownership" },
  { feature: "Best For", rent: "Commuters & tourists", buy: "Daily heavy users" },
]

export default function ComparisonTable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-5 bg-light" aria-label="Rent vs Buy Comparison for Electric Scooters Sydney" ref={ref}>
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 mb-md-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#000000" }}>
            Rent vs Buy: What's Right for You?
          </h2>
          <p className="lead" style={{ color: "#606060" }}>
            Compare rental and purchase options for electric scooters and e-bikes in Sydney.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="row justify-content-center"
        >
          <div className="col-12 col-xl-10">
            <div className="table-responsive">
              <table className="table table-borderless bg-white rounded shadow-sm overflow-hidden table-mobile">
                <thead style={{ backgroundColor: "#F37002" }}>
                  <tr>
                    <th className="py-3 py-md-4 px-3 px-md-4 text-white fw-bold">Feature</th>
                    <th className="py-3 py-md-4 px-3 px-md-4 text-white fw-bold text-center">Rent</th>
                    <th className="py-3 py-md-4 px-3 px-md-4 text-white fw-bold text-center">Buy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-light" : "bg-white"}>
                      <td className="py-2 py-md-3 px-3 px-md-4 fw-semibold" style={{ color: "#000000" }}>
                        {row.feature}
                      </td>
                      <td className="py-2 py-md-3 px-3 px-md-4 text-center" style={{ color: "#606060" }}>
                        {row.rent}
                      </td>
                      <td className="py-2 py-md-3 px-3 px-md-4 text-center" style={{ color: "#606060" }}>
                        {row.buy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
