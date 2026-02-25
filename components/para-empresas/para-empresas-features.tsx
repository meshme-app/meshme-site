"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Download,
  Settings,
  ShoppingCart,
  Camera,
  Gift,
  ChevronRight,
} from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Baixe o app e crie o perfil da empresa",
    description: "Você recebe acesso ao painel do RH para gerenciar tudo.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
  },
  {
    number: "2",
    icon: Settings,
    title: "Defina metas e desafios",
    description: "Configure desafios personalizados de acordo com os objetivos da sua empresa.",
    color: "bg-[#99F700]",
    iconColor: "text-black",
  },
  {
    number: "3",
    icon: ShoppingCart,
    title: "Compre Mesh Points",
    description: "Personalize como os pontos serão distribuídos entre seus colaboradores.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
  },
  {
    number: "4",
    icon: Camera,
    title: "Colaboradores registram atividades",
    description: "Validação automática por fotos, relógios inteligentes e integração com Strava.",
    color: "bg-[#99F700]",
    iconColor: "text-black",
  },
  {
    number: "5",
    icon: Gift,
    title: "Metas batidas, prêmios na conta",
    description: "Quem atinge as metas definidas pelo RH recebe Mesh Points e troca por produtos e experiências.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
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

        <div className="max-w-6xl mx-auto">
          {/* Horizontal steps - desktop */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-5 left-[calc(50%+24px)] right-[calc(-50%+24px)] flex items-center justify-center z-0">
                      <div className="w-full h-0.5 bg-gray-200" />
                      <ChevronRight className="h-4 w-4 text-gray-300 -ml-1 flex-shrink-0" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`relative z-10 w-10 h-10 ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                    <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex-1 w-full">
                    <span className="text-xs font-bold text-[#FF7816] mb-1 block">Passo {step.number}</span>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical steps - mobile/tablet */}
          <div className="lg:hidden max-w-md mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200" />

              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 ${step.color} rounded-lg flex items-center justify-center`}>
                      <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                    </div>

                    <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-xs font-bold text-[#FF7816]">Passo {step.number}</span>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
