"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const partners = [
  { name: "Nike", logo: "/logos/partners/nike.svg" },
  { name: "Petlove", logo: "/logos/partners/petlove.svg" },
  { name: "Vivara", logo: "/logos/partners/vivara.svg" },
  { name: "Centauro", logo: "/logos/partners/centauro.svg" },
  { name: "Netshoes", logo: "/logos/partners/netshoes.svg" },
]

export default function ParaEmpresasManifesto() {
  return (
    <section className="bg-[#FF7816] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text + CTAs */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight text-balance">
              Acreditamos que cada movimento importa
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-lg">
              Criamos a MeshMe para tornar a atividade fisica acessivel, social e recompensadora. Com tecnologia, competicao saudavel e uma comunidade vibrante, transformamos esforco em conquista e movimento em habito.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/acesse"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#FF7816] font-bold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-colors"
              >
                Leve para a sua empresa
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/acesse"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                Sou empresa e quero conhecer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Partner logos */}
            <div className="pt-6">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                Base de parceiros de premiacao
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {partners.map((partner) => (
                  <Image
                    key={partner.name}
                    src={partner.logo}
                    alt={partner.name}
                    width={80}
                    height={32}
                    className="h-6 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end items-center min-h-[360px] lg:min-h-[440px]">
            {/* Back phone */}
            <div className="absolute right-8 lg:right-16 top-0">
              <div className="relative w-[160px] md:w-[180px] lg:w-[200px]">
                <div className="relative bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl rotate-3">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-10" />
                  <div className="relative bg-white rounded-[1.6rem] overflow-hidden h-[300px] md:h-[340px] lg:h-[380px]">
                    <img
                      src="/meshcoins-screen.png"
                      alt="Tela de MeshCoins e recompensas"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Front phone */}
            <div className="relative z-10 left-0 lg:-left-4 top-6">
              <div className="relative w-[170px] md:w-[190px] lg:w-[210px]">
                <div className="relative bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl -rotate-3">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-10" />
                  <div className="relative bg-white rounded-[1.6rem] overflow-hidden h-[320px] md:h-[360px] lg:h-[400px]">
                    <img
                      src="/challenge-feed-mockup.png"
                      alt="Feed de desafios MeshMe"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
