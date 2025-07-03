"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Navigation } from "lucide-react"

const SydneyInteractiveMap = () => {
  const [selectedStation, setSelectedStation] = useState(null)

  const mapStations = [
    { id: 1, name: "Alexandria Hub", address: "294 Botany Road, Alexandria NSW 2015", x: 45, y: 70, available: 12 },
    { id: 2, name: "Sydney CBD Central", address: "George Street, Sydney NSW 2000", x: 45, y: 60, available: 8 },
    { id: 3, name: "Circular Quay Station", address: "Circular Quay, Sydney NSW 2000", x: 50, y: 55, available: 8 },
    { id: 4, name: "Bondi Beach Hub", address: "Campbell Parade, Bondi Beach NSW 2026", x: 70, y: 75, available: 15 },
    { id: 5, name: "Parramatta Centre", address: "Church Street, Parramatta NSW 2150", x: 25, y: 45, available: 10 },
    { id: 6, name: "Manly Wharf", address: "East Esplanade, Manly NSW 2095", x: 55, y: 35, available: 6 },
    { id: 7, name: "Darling Harbour", address: "Harbour Street, Sydney NSW 2000", x: 42, y: 58, available: 9 },
    { id: 8, name: "Surry Hills", address: "Crown Street, Surry Hills NSW 2010", x: 48, y: 65, available: 7 },
  ]

  const handleStationClick = (station) => {
    setSelectedStation(station)
  }

  const handleDirections = (address) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, "_blank")
  }

  return (
    <div className="position-relative w-100 h-100">
      {/* Sydney Map Background */}
      <div
        className="w-100 h-100 position-relative"
        style={{
          backgroundImage: `linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)`,
          backgroundSize: "cover",
        }}
      >
        {/* Sydney Harbour */}
        <div
          className="position-absolute"
          style={{
            top: "30%",
            left: "40%",
            width: "25%",
            height: "20%",
            backgroundColor: "#1976d2",
            borderRadius: "50% 30% 40% 60%",
            opacity: 0.6,
          }}
        />

        {/* Land masses */}
        <div
          className="position-absolute"
          style={{
            top: "20%",
            left: "20%",
            width: "60%",
            height: "70%",
            backgroundColor: "#4caf50",
            borderRadius: "20% 40% 30% 50%",
            opacity: 0.3,
          }}
        />

        {/* Station Dots */}
        {mapStations.map((station) => (
          <motion.div
            key={station.id}
            className="position-absolute"
            style={{
              left: `${station.x}%`,
              top: `${station.y}%`,
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              zIndex: 10,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleStationClick(station)}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center position-relative"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#F37002",
                boxShadow: "0 4px 12px rgba(243,112,2,0.4)",
                border: "3px solid white",
              }}
            >
              <motion.div
                className="position-absolute rounded-circle"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#F37002",
                  opacity: 0.3,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Popup */}
        {selectedStation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="position-absolute bg-white rounded-3 shadow-lg p-3"
            style={{
              left: `${selectedStation.x}%`,
              top: `${selectedStation.y - 15}%`,
              transform: "translateX(-50%)",
              minWidth: "250px",
              zIndex: 20,
              border: "1px solid rgba(243,112,2,0.2)",
            }}
          >
            <button
              className="btn-close position-absolute top-0 end-0 m-2"
              onClick={() => setSelectedStation(null)}
              style={{ fontSize: "0.8rem" }}
            />

            <h5 className="fw-bold mb-2" style={{ color: "#000000" }}>
              {selectedStation.name}
            </h5>
            <p className="small mb-2" style={{ color: "#606060" }}>
              {selectedStation.address}
            </p>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="badge" style={{ backgroundColor: "#F37002", color: "white" }}>
                {selectedStation.available} available
              </span>
              <span className="small text-success">● Online</span>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-sm flex-fill"
                style={{ backgroundColor: "#F37002", color: "white", border: "none" }}
                onClick={() => handleDirections(selectedStation.address)}
              >
                <Navigation size={14} className="me-1" />
                Directions
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setSelectedStation(null)}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

const stations = [
  { name: "Alexandria Hub", address: "294 Botany Road, Alexandria NSW 2015", available: 12 },
  { name: "Sydney CBD Central", address: "George Street, Sydney NSW 2000", available: 8 },
  { name: "Bondi Beach Hub", address: "Campbell Parade, Bondi Beach NSW 2026", available: 15 },
  { name: "Parramatta Centre", address: "Church Street, Parramatta NSW 2150", available: 10 },
  { name: "Manly Wharf", address: "East Esplanade, Manly NSW 2095", available: 6 },
  { name: "Darling Harbour", address: "Harbour Street, Sydney NSW 2000", available: 9 },
]

export default function StationMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="map" className="py-5 bg-light" aria-label="eSwap Station Locations Across Sydney" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#000000" }}>
            50+ Stations Across Sydney
          </h2>
          <p className="lead" style={{ color: "#606060" }}>
            Find eSwap stations conveniently located throughout Sydney's key areas and transport hubs.
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded shadow-sm p-4 h-100"
            >
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="h5 fw-bold mb-0" style={{ color: "#000000" }}>
                  Interactive Station Map
                </h3>
                <button
                  className="btn btn-sm d-flex align-items-center gap-2"
                  style={{ backgroundColor: "#F37002", color: "white", border: "none" }}
                >
                  <Navigation size={16} />
                  Find Nearest
                </button>
              </div>

              {/* Interactive Sydney Map */}
              <div className="bg-light rounded position-relative overflow-hidden" style={{ height: "400px" }}>
                <SydneyInteractiveMap />
              </div>
            </motion.div>
          </div>

          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded shadow-sm p-4 h-100"
            >
              <h3 className="h5 fw-bold mb-4" style={{ color: "#000000" }}>
                Popular Locations
              </h3>

              <div className="d-flex flex-column gap-3">
                {stations.map((station, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#F37002",
                        color: "white",
                      }}
                    >
                      <MapPin size={16} />
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="h6 fw-semibold mb-1" style={{ color: "#000000" }}>
                        {station.name}
                      </h4>
                      <p className="small mb-1" style={{ color: "#606060" }}>
                        {station.address}
                      </p>
                      <span className="badge" style={{ backgroundColor: "#F37002", color: "white" }}>
                        {station.available} available
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
