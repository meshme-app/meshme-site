"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2 } from "lucide-react"

export default function ParaEmpresasHero() {
  return (
    <section
      id="para-empresas"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF7816]/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-40 h-40 bg-[#99F700]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#FF7816] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Para Empresas
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Bem-estar corporativo que
                <span className="text-[#99F700]"> gera resultados reais.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                People-first, com governança para o RH. Acompanhe engajamento, incentive hábitos saudáveis e fortaleça comunidades esportivas na sua empresa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group" asChild>
                <a href="https://api.whatsapp.com/send/?phone=5511917790769&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Pr%C3%B3%20para%20empresas." target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                <a href="#funcionalidades">
                  Ver funcionalidades
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/dashboard-rh-real.png"
                alt="Dashboard MeshMe para RH"
                className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#99F700] rounded-full opacity-20 animate-pulse" />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF7816] rounded-full opacity-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
