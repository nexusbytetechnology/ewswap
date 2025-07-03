"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Search, User, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#vehicles", label: "Vehicles" },
    { href: "#stations", label: "Stations Network" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className="fixed-top"
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        zIndex: 1050,
        padding: "0.75rem 0",
        boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <a href="#home" aria-label="eSwap Technology Homepage" className="d-flex align-items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESWAP%20-%20Logo%20black-8ozgZgPcgGJRkzSrvhux0lbrKiBfms.png"
              alt="eSwap Technology - Electric Scooter and E-Bike Rentals Sydney"
              width={100}
              height={35}
              priority
              className="d-none d-sm-block"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESWAP%20-%20Logo%20black-8ozgZgPcgGJRkzSrvhux0lbrKiBfms.png"
              alt="eSwap Technology"
              width={80}
              height={28}
              priority
              className="d-block d-sm-none"
            />
          </a>

          {/* Desktop Navigation - Hidden on tablets and mobile (below 1024px) */}
          <nav className="d-none d-xl-flex align-items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-decoration-none fw-medium px-2 py-2"
                style={{
                  color: "#000000",
                  transition: "color 0.3s ease",
                  fontSize: "0.95rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#F37002"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000000"
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side container for icons and hamburger */}
          <div className="d-flex align-items-center gap-2">
            {/* Desktop Action Icons - Hidden on tablets and mobile (below 1024px) */}
            <div className="d-none d-xl-flex align-items-center gap-2">
              <motion.button
                className="btn btn-link p-2"
                style={{ color: "#000000" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
              >
                <Search size={18} />
              </motion.button>

              <motion.button
                className="btn btn-link p-2"
                style={{ color: "#000000" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Login"
              >
                <User size={18} />
              </motion.button>

              <motion.button
                className="btn btn-link p-2 position-relative"
                style={{ color: "#000000" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shopping Cart"
              >
                <ShoppingCart size={18} />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ backgroundColor: "#F37002", fontSize: "0.6rem" }}
                >
                  0
                </span>
              </motion.button>
            </div>

            {/* Mobile/Tablet Action Icons - Shown on tablets and mobile (below 1024px), positioned LEFT of hamburger */}
            <div className="d-xl-none d-flex align-items-center gap-1">
              <motion.button
                className="btn btn-link p-2"
                style={{ color: "#000000" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
              >
                <Search size={20} />
              </motion.button>

              <motion.button
                className="btn btn-link p-2"
                style={{ color: "#000000" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Login"
              >
                <User size={20} />
              </motion.button>

              <motion.button
                className="btn btn-link p-2 position-relative"
                style={{ color: "#000000" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shopping Cart"
              >
                <ShoppingCart size={20} />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ backgroundColor: "#F37002", fontSize: "0.6rem" }}
                >
                  0
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Toggle - Shown on tablets and mobile (below 1024px) */}
            <button
              className="d-xl-none border-0 bg-transparent p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{ color: "#000000" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="d-xl-none mt-3 p-3 rounded"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <nav className="d-flex flex-column gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-decoration-none fw-medium py-3 px-3 rounded"
                  style={{
                    color: "#000000",
                    borderBottom: "1px solid #eee",
                    fontSize: "1.1rem",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#F37002"
                    e.target.style.backgroundColor = "rgba(243,112,2,0.05)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#000000"
                    e.target.style.backgroundColor = "transparent"
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
