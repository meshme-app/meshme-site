import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function CGFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-red"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl text-[#B91C1C]">Corporate Games</span>
              <span className="text-white/60 ml-2 text-sm">by MeshMe</span>
            </div>
            <p className="text-gray-400 mb-6">
              A maior olimpíada corporativa do Brasil, promovendo esporte, cultura, employer branding e team building entre empresas.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-gray-800 transform hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href="https://www.instagram.com/_meshme?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-gray-400" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-gray-800 transform hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href="https://www.linkedin.com/company/meshmeapp/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-gray-400" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre-cg"
                  className="text-gray-400 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform inline-block"
                >
                  Sobre o Evento
                </a>
              </li>
              <li>
                <a
                  href="#modalidades"
                  className="text-gray-400 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform inline-block"
                >
                  Modalidades
                </a>
              </li>
              <li>
                <a
                  href="#detalhes"
                  className="text-gray-400 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform inline-block"
                >
                  Calendário
                </a>
              </li>
              <li>
                <a
                  href="#empresas"
                  className="text-gray-400 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform inline-block"
                >
                  Empresas Participantes
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="text-gray-400 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform inline-block"
                >
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a
                  href="#faq-cg"
                  className="text-gray-400 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform inline-block"
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="/termos-e-condicoes"
                  className="text-gray-400 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform inline-block"
                >
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#B91C1C] mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Rua Doutor Renato Paes de Barros 618 Conj 1,
                  <br />
                  Itaim Bibi, São Paulo - SP - 04530-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#B91C1C] mr-2" />
                <span className="text-gray-400">(11) 91779-0769</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#B91C1C] mr-2" />
                <span className="text-gray-400">corporategames@meshme.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Corporate Games by MeshMe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
