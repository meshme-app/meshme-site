"use client"

import { Button } from "@/components/ui/button"
import { Download, Shield, Star, Users } from "lucide-react"

export default function ParaPessoasCTA() {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-[#FF7816] via-[#FF7816]/90 to-[#FF7816]/80 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#99F700]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Pronto para começar
              <br />
              <span className="text-[#99F700]">sua jornada?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão se movimentando, competindo e se conectando através da MeshMe
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botoes de Download */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-white text-[#FF7816] hover:bg-white/90 group min-w-[220px] h-14 text-base font-bold" asChild>
                <a href="https://apps.apple.com/br/app/meshme/id6453362660" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
              </Button>

              <Button size="lg" className="bg-white text-[#FF7816] hover:bg-white/90 group min-w-[220px] h-14 text-base font-bold" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=com.meshme&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Play Store
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Dados seguros</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Star className="h-5 w-5 text-yellow-300 fill-current" />
              <span className="text-sm">4.8/5 Avaliação</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Download className="h-5 w-5" />
              <span className="text-sm">100% gratuito</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Users className="h-5 w-5" />
              <span className="text-sm">+10k usuários</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
