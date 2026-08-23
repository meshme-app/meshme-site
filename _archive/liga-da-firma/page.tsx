import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Liga da Firma | O maior torneio esportivo entre empresas do Brasil",
  description:
    "O maior torneio de esporte corporativo do Brasil. Empresas competem em diferentes modalidades, fortalecem o espírito de equipe e promovem employer branding com visibilidade, integração e pertencimento.",
  openGraph: {
    title: "Liga da Firma | O maior torneio esportivo entre empresas do Brasil",
    description:
      "O maior torneio de esporte corporativo do Brasil. Empresas competem em diferentes modalidades, fortalecem o espírito de equipe e promovem employer branding com visibilidade, integração e pertencimento.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liga da Firma | O maior torneio esportivo entre empresas do Brasil",
    description:
      "O maior torneio de esporte corporativo do Brasil. Empresas competem em diferentes modalidades, fortalecem o espírito de equipe e promovem employer branding com visibilidade, integração e pertencimento.",
  },
}

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import CompanyCarousel from "@/components/company-carousel"
import EventDetails from "@/components/event-details"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import GridBackground from "@/components/grid-background"
import PhotoGallery from "@/components/photo-gallery"
import VideoTeaser from "@/components/video-teaser"

export default function LigaDaFirmaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <div>
        {/* Hero Section */}
        <section id="sobre-liga" className="relative bg-white pt-32 pb-20 overflow-hidden">
          <GridBackground />
          <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-30 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute bottom-10 left-10 w-[150px] h-[150px] opacity-25 overflow-hidden">
            <div className="w-full h-full animate-rotate-reverse">
              <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-primary px-4 py-2 skew-x-[-5deg] transform">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white skew-x-[5deg] transform">
                    Liga da Firma
                  </h1>
                </div>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary transform rotate-[-2deg] skew-x-[-8deg] rounded-tr-2xl rounded-bl-2xl"></div>
                  <div className="absolute inset-0 bg-black transform rotate-[1deg] skew-x-[-4deg] rounded-tl-2xl rounded-br-2xl"></div>
                  <p className="relative z-10 text-xl md:text-2xl font-medium text-white px-4 py-2">
                    O maior movimento esportivo entre empresas do Brasil
                  </p>
                </div>
                <p className="text-gray-600 max-w-md">
                  Conectando empresas através do esporte, promovendo saúde, bem-estar e networking em um ambiente
                  competitivo e divertido.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href="https://forms.gle/SqD9f7rjD5yFJT7k7" target="_blank" rel="noopener noreferrer">
                      Inscreva sua empresa
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 transform hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href="https://forms.gle/E8f3Fniiq6whfmLK7" target="_blank" rel="noopener noreferrer">
                      Indique um amigo e ganhe R$300 na Centauro
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/sports-action.gif"
                  alt="Liga da Firma - Ação esportiva"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="bg-gray-50 py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 skew-y-[-2deg] transform origin-top-right"></div>
          <div className="absolute top-[10%] left-[5%] w-[120px] h-[120px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-rotate-reverse">
              <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { value: "150+", label: "Empresas" },
                { value: "5.000+", label: "Atletas" },
                { value: "9", label: "Esportes" },
                { value: "8", label: "Eventos" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="space-y-1 bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform"
                >
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
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
              <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 mb-6 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary px-4 py-2 mb-2 skew-x-[-5deg] transform">
                <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Empresas Participantes</h2>
              </div>
              <p className="text-gray-600 mt-2">Junte-se a estas empresas que já fazem parte da Liga da Firma</p>
            </div>
            <CompanyCarousel />
          </div>
        </section>
        {/* Event Details */}
        <section id="modalidades" className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 skew-y-[2deg] transform origin-bottom-left"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[150px] h-[150px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute top-[15%] left-[8%] w-[130px] h-[130px] opacity-15 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <EventDetails />
        </section>
        {/* Photo Gallery */}
        <PhotoGallery />
        {/* Testimonials */}
        <section id="depoimentos" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 skew-y-[-2deg] transform origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-25 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute top-[20%] right-[10%] w-[140px] h-[140px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-rotate-reverse">
              <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <Testimonials />
        </section>
        {/* Video Teaser */}
        <VideoTeaser />
        {/* FAQ Section */}
        <section id="faq-liga" className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 skew-y-[2deg] transform origin-bottom-left"></div>
          <div className="absolute top-[10%] right-[5%] w-[150px] h-[150px] opacity-20 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute bottom-[15%] left-[7%] w-[120px] h-[120px] opacity-25 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <FAQ />
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>
          <div className="absolute top-[20%] left-[15%] w-[100px] h-[100px] opacity-40 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute bottom-[10%] right-[10%] w-[120px] h-[120px] opacity-40 overflow-hidden">
            <div className="w-full h-full animate-pulse-slow">
              <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-secondary px-4 py-2 mb-6 skew-x-[-5deg] transform">
              <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Pronto para participar?</h2>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Inscreva sua empresa agora e faça parte do maior movimento esportivo corporativo do Brasil. Promova saúde,
              bem-estar e integração entre seus colaboradores.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://forms.gle/SqD9f7rjD5yFJT7k7" target="_blank" rel="noopener noreferrer">
                Inscreva sua empresa
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
