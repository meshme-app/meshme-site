"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function CGCTA() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B91C1C]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#B91C1C]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Pronto para levar sua empresa<br />ao Corporate Games?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Inscreva sua empresa agora e faça parte da maior olimpíada corporativa do Brasil. Promova integração, cultura e engajamento entre seus colaboradores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold px-8 py-6 text-lg rounded-full"
              asChild
            >
              <a href="/corporate-games/inscricao">
                Quero levar minha empresa
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-full"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=5511917790769&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Corporate%20Games." target="_blank" rel="noopener noreferrer">
                Falar com especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
