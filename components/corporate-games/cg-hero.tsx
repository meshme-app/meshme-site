"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown } from "lucide-react"

export default function CGHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/gallery/group-celebration.png"
          alt="Corporate Games São Paulo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Year Badge */}
          <div className="inline-flex items-center gap-2 bg-[#B91C1C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            2026
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-2 tracking-tight">
            CORPORATE GAMES
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#B91C1C] leading-none mb-6 tracking-tight">
            SÃO PAULO
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-semibold text-white mb-4">
            A Olimpíada Corporativa do Brasil
          </p>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-xl mb-4 leading-relaxed">
            Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores, fortalecer pertencimento e gerar histórias internas que mobilizam RH e liderança.
          </p>

          <p className="text-gray-400 text-base max-w-xl mb-8 leading-relaxed">
            Há 4 anos promovendo o esporte corporativo no Brasil, o Corporate Games entra em 2026 com uma nova fase: operação <span className="text-white font-semibold">MeshMe</span>, mais estrutura, mais conexão e mais valor para empresas, patrocinadores e participantes.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            className="bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all"
            asChild
          >
            <a href="/corporate-games/inscricao">
              Quero levar minha empresa
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-10">
            {["Marca global", "Team building", "Experiência corporativa", "Presença internacional"].map((tag, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  )
}
