"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / documentHeight) * 100

      // Mostrar o botão após 20% de scroll
      setIsVisible(scrollPercentage >= 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511917790769&text&type=phone_number&app_absent=0",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-4 right-4 z-50 
        bg-[#FF6600] hover:bg-[#E55A00] 
        text-white font-medium
        px-6 py-3 rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
      size="lg"
    >
      Saiba mais
    </Button>
  )
}
