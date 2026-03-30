"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#sobre", label: "O evento" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#faq", label: "FAQ" },
]

export default function CGNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/corporate-games" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B91C1C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CG</span>
            </div>
            <div className={`transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
              <span className="font-bold text-lg">CORPORATE GAMES</span>
              <span className="block text-xs opacity-70">São Paulo 2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium text-sm transition-colors hover:text-[#B91C1C] ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold px-6 rounded-full"
              asChild
            >
              <Link href="/corporate-games/inscricao">
                Quero levar minha empresa
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-100">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#B91C1C] font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Button
                className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold rounded-full"
                asChild
              >
                <Link href="/corporate-games/inscricao">
                  Quero levar minha empresa
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
