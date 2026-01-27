"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isLigaDaFirmaPage = currentPath.includes("/liga-da-firma")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/meshme-navbar-logo.png"
              alt="MeshMe Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                currentPath === "/" 
                  ? "bg-[#FF7816] text-white shadow-lg shadow-orange-200" 
                  : "text-gray-700 hover:bg-[#FF7816] hover:text-white hover:shadow-lg hover:shadow-orange-200"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/para-pessoas"
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                currentPath.includes("/para-pessoas") 
                  ? "bg-[#99F700] text-black shadow-lg shadow-lime-200" 
                  : "text-gray-700 hover:bg-[#99F700] hover:text-black hover:shadow-lg hover:shadow-lime-200"
              }`}
            >
              Para pessoas
            </Link>
            <Link
              href="/para-empresas"
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                currentPath.includes("/para-empresas") 
                  ? "bg-[#FF7816] text-white shadow-lg shadow-orange-200" 
                  : "text-gray-700 hover:bg-[#FF7816] hover:text-white hover:shadow-lg hover:shadow-orange-200"
              }`}
            >
              Para empresas
            </Link>
            <Link
              href="/eventos"
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                currentPath.includes("/eventos") || currentPath.includes("/liga-da-firma") || currentPath.includes("/healthy-hour")
                  ? "bg-[#FF7816] text-white shadow-lg shadow-orange-200" 
                  : "text-gray-700 hover:bg-[#FF7816] hover:text-white hover:shadow-lg hover:shadow-orange-200"
              }`}
            >
              Eventos
            </Link>
            <Link
              href="/blog"
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                currentPath.includes("/blog") 
                  ? "bg-gray-900 text-white shadow-lg shadow-gray-300" 
                  : "text-gray-700 hover:bg-gray-900 hover:text-white hover:shadow-lg hover:shadow-gray-300"
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Liga da Firma Buttons (Desktop) */}
          {isLigaDaFirmaPage && (
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://forms.gle/example1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Inscreva-se
              </a>
              <a
                href="https://forms.gle/example2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
              >
                Indique um amigo
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-16 left-0 right-0 z-50 border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                currentPath === "/"
                  ? "bg-[#FF7816] text-white shadow-md"
                  : "text-gray-700 hover:bg-[#FF7816]/10 hover:text-[#FF7816]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/para-pessoas"
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                currentPath.includes("/para-pessoas")
                  ? "bg-[#99F700] text-black shadow-md"
                  : "text-gray-700 hover:bg-[#99F700]/10 hover:text-[#99F700]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Para pessoas
            </Link>
            <Link
              href="/para-empresas"
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                currentPath.includes("/para-empresas")
                  ? "bg-[#FF7816] text-white shadow-md"
                  : "text-gray-700 hover:bg-[#FF7816]/10 hover:text-[#FF7816]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Para empresas
            </Link>
            <Link
              href="/eventos"
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                currentPath.includes("/eventos") || currentPath.includes("/liga-da-firma") || currentPath.includes("/healthy-hour")
                  ? "bg-[#FF7816] text-white shadow-md"
                  : "text-gray-700 hover:bg-[#FF7816]/10 hover:text-[#FF7816]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Eventos
            </Link>
            <Link
              href="/blog"
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                currentPath.includes("/blog")
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            {/* Liga da Firma Buttons (Mobile) */}
            {isLigaDaFirmaPage && (
              <div className="pt-4 space-y-2">
                <a
                  href="https://forms.gle/example1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Inscreva-se
                </a>
                <a
                  href="https://forms.gle/example2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Indique um amigo
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
