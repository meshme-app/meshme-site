"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, BarChart3, Gift } from "lucide-react"

export default function ParaEmpresasCTA() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-[#FF7816] via-[#FF7816]/90 to-[#FF7816]/80 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#99F700]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Building2 className="h-4 w-4" />
              Plano Pro para Empresas
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Pronto para transformar
              <br />
              <span className="text-[#99F700]">o bem-estar na sua empresa?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fale com nosso time e descubra como a MeshMe pode ajudar a criar uma cultura ativa que engaja e retém talentos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-[#FF7816] hover:bg-white/90 group min-w-[280px] h-14 text-base font-bold" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5511917790769&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Pr%C3%B3%20para%20empresas." target="_blank" rel="noopener noreferrer">
                Falar com especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent min-w-[280px] h-14 text-base font-bold" asChild>
              <a href="mailto:contato@meshme.com.br">
                Agendar demonstração
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center space-x-2 text-white/90">
              <Users className="h-5 w-5" />
              <span className="text-sm">+120 empresas</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm">Dashboard completo</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Gift className="h-5 w-5" />
              <span className="text-sm">Incentivos personalizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
