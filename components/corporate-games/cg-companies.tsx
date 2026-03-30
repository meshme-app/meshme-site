"use client"

import { useEffect, useRef } from "react"

const companies = [
  { name: "iFood", logo: "/companies/ifood-dark.png" },
  { name: "Mastercard", logo: "/companies/mastercard.png" },
  { name: "Kinea", logo: "/companies/kinea.png" },
  { name: "McKinsey", logo: "/companies/mckinsey.png" },
  { name: "Caveo", logo: "/companies/caveo.png" },
  { name: "Isaac", logo: "/companies/isaac.png" },
  { name: "Visa", logo: "/companies/visa.png" },
  { name: "Accenture", logo: "/companies/accenture.png" },
  { name: "Bain", logo: "/companies/bain.png" },
  { name: "BTG Pactual", logo: "/companies/btg.png" },
]

export default function CGCompanies() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      if (!scrollContainer) return
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-gray-600 text-sm">
          Empresas que já participam do Corporate Games no Brasil
        </p>
      </div>

      <div className="overflow-hidden">
        <div ref={scrollRef} className="flex gap-8 py-4 overflow-x-hidden">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 bg-white rounded-xl border border-gray-100 flex items-center justify-center px-4 hover:shadow-md transition-shadow"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
