import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "eSwap - Electric Scooter & E-Bike Rentals Sydney",
  description: "Revolutionary battery swap technology for electric scooters and e-bikes in Sydney",
    developer: 'Laith Alawneh'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
