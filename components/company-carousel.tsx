"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

const companies = [
  { name: "Visa", logo: "/companies/visa.png", height: "40px" },
  { name: "MasterCard", logo: "/companies/mastercard.png", height: "45px" },
  { name: "Bain & Company", logo: "/companies/bain.png", height: "35px" },
  { name: "QuintoAndar", logo: "/companies/quinto-andar.png", height: "30px" },
  { name: "TotalPass", logo: "/companies/totalpass-new.png", height: "35px" },
  { name: "Buser", logo: "/companies/buser.png", height: "35px" },
  { name: "Kinea", logo: "/companies/kinea.png", height: "30px" },
  { name: "Flash", logo: "/companies/flash-new.png", height: "35px", darkBg: false },
  { name: "Accenture", logo: "/companies/accenture.png", height: "35px" },
  { name: "iFood", logo: "/companies/ifood.png", height: "35px" },
  { name: "TechCorp", logo: "/images/logo.png", height: "40px" },
]

export default function CompanyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const totalWidth = scrollContainer.scrollWidth
    const containerWidth = scrollContainer.clientWidth

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += 0.5

      // Reset position when we've scrolled through all logos
      if (scrollPosition >= totalWidth / 2) {
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

  // Duplicate the companies to create a seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            <span className="text-[#FF7816]">times</span> que estão no app
          </h2>
          <p className="text-lg text-gray-600">
            Empresas que já transformaram sua cultura através da MeshMe
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div ref={scrollRef} className="flex gap-8 py-4 overflow-x-hidden">
          {duplicatedCompanies.map((company, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 w-44 h-24 flex items-center justify-center p-4 border border-gray-200 transform hover:rotate-3 hover:scale-110 transition-all duration-300 ${
                company.darkBg ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="object-contain"
                  style={{
                    height: company.height,
                    maxWidth: "100%",
                    filter: company.darkBg ? "brightness(1.2)" : "none",
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
