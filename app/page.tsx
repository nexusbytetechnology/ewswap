import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import ESwapTechnology from "@/components/eswap-technology"
import ProductHighlights from "@/components/product-highlights"
import ComparisonTable from "@/components/comparison-table"
import SubscriptionPlans from "@/components/subscription-plans"
import StationMap from "@/components/station-map"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "eSwap - Electric Scooter & E-Bike Rentals Sydney | Battery Swap Technology",
  description:
    "Rent electric scooters and e-bikes in Sydney with eSwap's innovative battery swap technology. Affordable subscriptions, convenient locations across Sydney. Book now!",
  keywords:
    "electric scooter rental Sydney, e-bike rental Sydney, battery swap technology, electric scooter subscription, Sydney mobility, eco-friendly transport",
  openGraph: {
    title: "eSwap - Electric Scooter & E-Bike Rentals Sydney",
    description:
      "Revolutionary battery swap technology for electric scooters and e-bikes in Sydney. Rent or subscribe today!",
    url: "https://eswap.com.au",
    siteName: "eSwap Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eSwap Electric Scooter Rental Sydney",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eSwap - Electric Scooter & E-Bike Rentals Sydney",
    description: "Revolutionary battery swap technology for electric scooters and e-bikes in Sydney.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://eswap.com.au",
  },
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <ESwapTechnology />
      <ProductHighlights />
      <ComparisonTable />
      <SubscriptionPlans />
      <StationMap />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
