"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, UserPlus } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logos/meshme-logo.png"
                alt="meshMe"
                className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#sobre"
              className="text-gray-600 hover:text-primary transform hover:scale-110 transition-transform"
            >
              Sobre
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-primary transform hover:scale-110 transition-transform"
            >
              Blog
            </Link>
            <Link
              href="#detalhes"
              className="text-gray-600 hover:text-primary transform hover:scale-110 transition-transform"
            >
              Modalidades
            </Link>
            <Link
              href="#depoimentos"
              className="text-gray-600 hover:text-primary transform hover:scale-110 transition-transform"
            >
              Depoimentos
            </Link>
            <Link
              href="#faq"
              className="text-gray-600 hover:text-primary transform hover:scale-110 transition-transform"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              className="bg-secondary hover:bg-secondary/90 transform hover:scale-110 transition-transform"
              size="sm"
              asChild
            >
              <a href="https://forms.gle/E8f3Fniiq6whfmLK7" target="_blank" rel="noopener noreferrer">
                <UserPlus className="h-4 w-4 mr-1" />
                Indique
              </a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 transform hover:scale-110 transition-transform" asChild>
              <a href="https://forms.gle/SqD9f7rjD5yFJT7k7" target="_blank" rel="noopener noreferrer">
                Inscreva-se
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 space-y-4">
            <Link
              href="#sobre"
              className="block py-2 text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#detalhes"
              className="block py-2 text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Modalidades
            </Link>
            <Link
              href="#depoimentos"
              className="block py-2 text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link
              href="#faq"
              className="block py-2 text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button className="bg-secondary hover:bg-secondary/90 w-full" asChild>
                <a href="https://forms.gle/E8f3Fniiq6whfmLK7" target="_blank" rel="noopener noreferrer">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Indique um amigo
                </a>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <a href="https://forms.gle/SqD9f7rjD5yFJT7k7" target="_blank" rel="noopener noreferrer">
                  Inscreva-se
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
