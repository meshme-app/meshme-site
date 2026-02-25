"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Settings, ShoppingCart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Baixe o app e crie o perfil da sua empresa",
    description: "Você receberá acesso ao painel do RH para gerenciar tudo.",
    color: "bg-[#FF7816]",
  },
  {
    number: "02",
    icon: Settings,
    title: "Defina as metas e desafios para seus colaboradores",
    description: "Configure desafios personalizados de acordo com os objetivos da sua empresa.",
    color: "bg-[#99F700]",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Compre Mesh Points de acordo com seu orçamento",
    description: "Personalize como os pontos serão distribuídos entre seus colaboradores.",
    color: "bg-[#FF7816]",
  },
]

export default function ParaEmpresasFeatures() {
  return (
    <section id="funcionalidades" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Como <span className="text-[#FF7816]">funciona</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-5">
                  {/* Step number circle */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <step.icon className={`h-5 w-5 ${step.color === "bg-[#99F700]" ? "text-black" : "text-white"}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#FF7816]/20 hover:shadow-md transition-all duration-300">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button size="lg" className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group h-14 px-8 text-base font-bold" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5511917790769&text=Ol%C3%A1!%20Gostaria%20de%20conferir%20exemplos%20de%20um%20plano%20anual%20MeshMe." target="_blank" rel="noopener noreferrer">
                Confira exemplos de um plano anual
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
