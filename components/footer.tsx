"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white py-5" aria-label="eSwap Contact Information and Footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESWAP%20-%20Logo%20black-8ozgZgPcgGJRkzSrvhux0lbrKiBfms.png"
                alt="eSwap Technology Logo"
                width={120}
                height={40}
                className="mb-3"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="mb-4" style={{ color: "#cccccc" }}>
                Sydney's leading electric scooter and e-bike rental service with revolutionary battery swap technology.
                Sustainable, convenient, and reliable urban mobility.
              </p>
              <div className="d-flex gap-3">
                <a href="https://facebook.com/eswaptech" className="text-white" aria-label="Follow eSwap on Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com/eswaptech" className="text-white" aria-label="Follow eSwap on Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com/eswaptech" className="text-white" aria-label="Follow eSwap on Twitter">
                  <Twitter size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="h5 fw-bold mb-3">Quick Links</h4>
              <nav className="d-flex flex-column gap-2">
                <a href="#how-it-works" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  How It Works
                </a>
                <a href="#products" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  Products
                </a>
                <a href="#plans" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  Pricing
                </a>
                <a href="#map" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  Locations
                </a>
              </nav>
            </motion.div>
          </div>

          <div className="col-lg-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="h5 fw-bold mb-3">Support</h4>
              <nav className="d-flex flex-column gap-2">
                <a href="/help" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  Help Center
                </a>
                <a href="/safety" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  Safety Guide
                </a>
                <a href="/terms" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  Terms of Service
                </a>
                <a href="/privacy" className="text-decoration-none" style={{ color: "#cccccc" }}>
                  Privacy Policy
                </a>
              </nav>
            </motion.div>
          </div>

          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="h5 fw-bold mb-3">Contact Us</h4>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <Phone size={18} style={{ color: "#F37002" }} />
                  <div>
                    <div className="fw-semibold">Phone</div>
                    <a href="tel:+61487718708" className="text-decoration-none" style={{ color: "#cccccc" }}>
                      0487 718 708
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <Mail size={18} style={{ color: "#F37002" }} />
                  <div>
                    <div className="fw-semibold">Email</div>
                    <a href="mailto:info@eswap.com.au" className="text-decoration-none" style={{ color: "#cccccc" }}>
                      info@eswap.com.au
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <MapPin size={18} style={{ color: "#F37002" }} className="mt-1" />
                  <div>
                    <div className="fw-semibold">Address</div>
                    <address className="mb-0" style={{ color: "#cccccc" }}>
                      294 Botany Road
                      <br />
                      Alexandria NSW 2015
                      <br />
                      Australia
                    </address>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 mt-3">
                  <Clock size={18} style={{ color: "#F37002" }} className="mt-1" />
                  <div>
                    <div className="fw-semibold">Opening Hours</div>
                    <div style={{ color: "#cccccc" }}>Monday – Friday: 10:00 AM – 6:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "#444" }} />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0" style={{ color: "#cccccc" }}>
              © 2024 eSwap Technology Pty Ltd. All rights reserved. ABN: 12 345 678 901
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0" style={{ color: "#cccccc" }}>
              Made with ❤️ in Sydney, Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
