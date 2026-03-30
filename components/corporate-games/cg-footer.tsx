"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function CGFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CG</span>
              </div>
              <div>
                <span className="font-bold text-lg block">CORPORATE GAMES</span>
                <span className="text-sm text-gray-400">São Paulo 2026</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A maior olimpíada corporativa do Brasil. Conectando empresas através do esporte.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">O Evento</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#sobre" className="hover:text-[#B91C1C] transition-colors">
                  Sobre o Corporate Games
                </Link>
              </li>
              <li>
                <Link href="#modalidades" className="hover:text-[#B91C1C] transition-colors">
                  Modalidades
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-[#B91C1C] transition-colors">
                  Como participar
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#B91C1C] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#B91C1C]" />
                <a href="mailto:corporategames@meshme.com.br" className="hover:text-[#B91C1C] transition-colors">
                  corporategames@meshme.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#B91C1C]" />
                <a href="tel:+5511917790769" className="hover:text-[#B91C1C] transition-colors">
                  +55 11 91779-0769
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/corporategamesbr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/corporate-games-brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {new Date().getFullYear()} Corporate Games. Operado por{" "}
            <a href="https://meshme.com.br" className="text-[#B91C1C] hover:underline">
              MeshMe
            </a>
            .
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/documentos/politica-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/documentos/termos-eventos/corporate-games-2026" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
