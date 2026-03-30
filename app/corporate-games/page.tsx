import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Games São Paulo | A Olimpíada Corporativa do Brasil",
  description:
    "Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores, fortalecer pertencimento e gerar histórias internas que mobilizam RH e liderança.",
  openGraph: {
    title: "Corporate Games São Paulo | A Olimpíada Corporativa do Brasil",
    description:
      "Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores, fortalecer pertencimento e gerar histórias internas que mobilizam RH e liderança.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Games São Paulo | A Olimpíada Corporativa do Brasil",
    description:
      "Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores, fortalecer pertencimento e gerar histórias internas que mobilizam RH e liderança.",
  },
}

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import CGCompanyCarousel from "@/components/corporate-games/cg-company-carousel"
import CGEventDetails from "@/components/corporate-games/cg-event-details"
import CGTestimonials from "@/components/corporate-games/cg-testimonials"
import CGFAQ from "@/components/corporate-games/cg-faq"
import CGNavbar from "@/components/corporate-games/cg-navbar"
import CGFooter from "@/components/corporate-games/cg-footer"
import CGGridBackground from "@/components/corporate-games/cg-grid-background"
import CGPhotoGallery from "@/components/corporate-games/cg-photo-gallery"
import CGVideoTeaser from "@/components/corporate-games/cg-video-teaser"

export default function CorporateGamesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <CGNavbar />
      <div>
        {/* Hero Section */}
        <section id="sobre-cg" className="relative bg-white pt-32 pb-20 overflow-hidden">
          <CGGridBackground />
          <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-30 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute bottom-10 left-10 w-[150px] h-[150px] opacity-25 overflow-hidden">
            <div className="w-full h-full animate-rotate-reverse">
              <img src="/starburst-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#B91C1C] text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  2026
                </div>
                <div className="inline-block bg-[#B91C1C] px-4 py-2 skew-x-[-5deg] transform">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white skew-x-[5deg] transform tracking-tight">
                    CORPORATE GAMES
                  </h1>
                </div>
                <div className="inline-block bg-[#B91C1C] px-4 py-2 skew-x-[-5deg] transform -mt-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white skew-x-[5deg] transform tracking-tight">
                    SÃO PAULO
                  </h2>
                </div>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#B91C1C] transform rotate-[-2deg] skew-x-[-8deg] rounded-tr-2xl rounded-bl-2xl"></div>
                  <div className="absolute inset-0 bg-black transform rotate-[1deg] skew-x-[-4deg] rounded-tl-2xl rounded-br-2xl"></div>
                  <p className="relative z-10 text-xl md:text-2xl font-medium text-white px-4 py-2">
                    A Olimpíada Corporativa do Brasil
                  </p>
                </div>
                <p className="text-gray-600 max-w-md">
                  Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores, fortalecer pertencimento e gerar histórias internas que mobilizam RH e liderança.
                </p>
                <p className="text-gray-500 text-sm">
                  Há 4 anos promovendo o esporte corporativo no Brasil, o Corporate Games entra em 2026 com uma nova fase: operação <strong>MeshMe</strong>, mais estrutura, mais conexão e mais valor para empresas, patrocinadores e participantes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#B91C1C] hover:bg-[#B91C1C]/90 transform hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href="https://forms.gle/SqD9f7rjD5yFJT7k7" target="_blank" rel="noopener noreferrer">
                      Quero levar minha empresa
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-2">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full"></span> Marca global</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full"></span> Team building</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full"></span> Experiência corporativa</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full"></span> Presença internacional</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/sports-action.gif"
                  alt="Corporate Games - Ação esportiva"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="bg-gray-50 py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#B91C1C]/10 skew-y-[-2deg] transform origin-top-right"></div>
          <div className="absolute top-[10%] left-[5%] w-[120px] h-[120px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-rotate-reverse">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { value: "51 mil", label: "Organizações no mundo" },
                { value: "1 milhão", label: "Participantes no mundo" },
                { value: "12", label: "Modalidades" },
                { value: "Global", label: "Presença internacional" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="space-y-1 bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform"
                >
                  <p className="text-4xl font-bold text-[#B91C1C]">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Participating Companies */}
        <section id="empresas" className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-[30%] right-[5%] w-[120px] h-[120px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 mb-6 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#B91C1C] px-4 py-2 mb-2 skew-x-[-5deg] transform">
                <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Empresas Participantes</h2>
              </div>
              <p className="text-gray-600 mt-2">Empresas que já participam do Corporate Games no Brasil</p>
            </div>
            <CGCompanyCarousel />
          </div>
        </section>
        {/* Event Details */}
        <section id="modalidades" className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#B91C1C]/5 skew-y-[2deg] transform origin-bottom-left"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[150px] h-[150px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/starburst-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute top-[15%] left-[8%] w-[130px] h-[130px] opacity-15 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <CGEventDetails />
        </section>
        {/* Photo Gallery */}
        <CGPhotoGallery />
        {/* Testimonials */}
        <section id="depoimentos" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[#B91C1C]/5 skew-y-[-2deg] transform origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-25 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/starburst-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute top-[20%] right-[10%] w-[140px] h-[140px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-rotate-reverse">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <CGTestimonials />
        </section>
        {/* Video Teaser */}
        <CGVideoTeaser />
        {/* FAQ Section */}
        <section id="faq-cg" className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#B91C1C]/5 skew-y-[2deg] transform origin-bottom-left"></div>
          <div className="absolute top-[10%] right-[5%] w-[150px] h-[150px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute bottom-[15%] left-[7%] w-[120px] h-[120px] opacity-25 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <CGFAQ />
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-[#B91C1C] relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-grid-pattern-red"></div>
          </div>
          <div className="absolute top-[20%] left-[15%] w-[100px] h-[100px] opacity-40 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute bottom-[10%] right-[10%] w-[120px] h-[120px] opacity-40 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/starburst-red.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-black px-4 py-2 mb-6 skew-x-[-5deg] transform">
              <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Pronto para participar?</h2>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Inscreva sua empresa agora e faça parte do Corporate Games São Paulo 2026. Promova cultura, bem-estar e integração entre seus colaboradores em uma experiência global.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#B91C1C] hover:bg-white/90 transform hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://forms.gle/SqD9f7rjD5yFJT7k7" target="_blank" rel="noopener noreferrer">
                Quero levar minha empresa
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </div>
      <CGFooter />
    </div>
  )
}
