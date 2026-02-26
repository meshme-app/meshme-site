"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Download,
  Settings,
  ShoppingCart,
  Camera,
  Gift,
} from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Baixe o app e crie o perfil da empresa",
    description: "Você recebe acesso ao painel do RH para gerenciar tudo.",
    color: "bg-[#FF7816]",
    activeColor: "border-[#FF7816]",
    iconColor: "text-white",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    number: "2",
    icon: Settings,
    title: "Defina metas e desafios",
    description: "Configure desafios personalizados de acordo com os objetivos da sua empresa.",
    color: "bg-[#99F700]",
    activeColor: "border-[#99F700]",
    iconColor: "text-black",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    number: "3",
    icon: ShoppingCart,
    title: "Compre Mesh Points",
    description: "Personalize como os pontos serão distribuídos entre seus colaboradores.",
    color: "bg-[#FF7816]",
    activeColor: "border-[#FF7816]",
    iconColor: "text-white",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    number: "4",
    icon: Camera,
    title: "Colaboradores registram atividades",
    description: "Validação automática por fotos, relógios inteligentes e integração com Strava.",
    color: "bg-[#99F700]",
    activeColor: "border-[#99F700]",
    iconColor: "text-black",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    number: "5",
    icon: Gift,
    title: "Metas batidas, prêmios na conta",
    description: "Quem atinge as metas definidas pelo RH recebe Mesh Points e troca por produtos e experiências.",
    color: "bg-[#FF7816]",
    activeColor: "border-[#FF7816]",
    iconColor: "text-white",
    image: "/placeholder.svg?height=500&width=600",
  },
]

const AUTO_CYCLE_INTERVAL = 4000

export default function ParaEmpresasFeatures() {
  const [activeStep, setActiveStep] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, AUTO_CYCLE_INTERVAL)
  }, [])

  useEffect(() => {
    if (!isHovering) {
      startAutoPlay()
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovering, startAutoPlay])

  const handleMouseEnter = (index: number) => {
    setIsHovering(true)
    setActiveStep(index)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <section id="funcionalidades" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Como <span className="text-[#FF7816]">funciona</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop: split layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left: timeline */}
            <div className="relative" onMouseLeave={handleMouseLeave}>
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200" />

              <div className="space-y-3">
                {steps.map((step, index) => {
                  const isActive = activeStep === index
                  return (
                    <div
                      key={index}
                      className="relative flex items-start gap-4 cursor-pointer"
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      {/* Icon */}
                      <div
                        className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive ? step.color + " scale-110 shadow-md" : "bg-gray-200"
                        }`}
                      >
                        <step.icon
                          className={`h-5 w-5 transition-colors duration-300 ${
                            isActive ? step.iconColor : "text-gray-500"
                          }`}
                        />
                      </div>

                      {/* Card */}
                      <div
                        className={`flex-1 rounded-xl p-4 border-2 transition-all duration-300 ${
                          isActive
                            ? `bg-white shadow-md ${step.activeColor}`
                            : "bg-gray-50 border-transparent hover:bg-white"
                        }`}
                      >
                        <span
                          className={`text-xs font-bold mb-0.5 block transition-colors duration-300 ${
                            isActive ? "text-[#FF7816]" : "text-gray-400"
                          }`}
                        >
                          Passo {step.number}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 mb-0.5 leading-snug">
                          {step.title}
                        </h3>
                        <p
                          className={`text-xs leading-relaxed transition-all duration-300 overflow-hidden ${
                            isActive
                              ? "text-gray-600 max-h-20 opacity-100"
                              : "text-gray-500 max-h-0 opacity-0"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Progress bar under active step */}
              {!isHovering && (
                <div className="mt-4 ml-14">
                  <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FF7816] rounded-full"
                      style={{
                        animation: `progress ${AUTO_CYCLE_INTERVAL}ms linear`,
                      }}
                      key={activeStep}
                    />
                  </div>
                </div>
              )}

              <style jsx>{`
                @keyframes progress {
                  from { width: 0%; }
                  to { width: 100%; }
                }
              `}</style>
            </div>

            {/* Right: image */}
            <div className="relative h-[420px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              {steps.map((step, index) => (
                <img
                  key={index}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    activeStep === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile: vertical only (no image panel) */}
          <div className="lg:hidden max-w-md mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200" />

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    <div
                      className={`relative z-10 flex-shrink-0 w-10 h-10 ${step.color} rounded-lg flex items-center justify-center`}
                    >
                      <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                    </div>

                    <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-xs font-bold text-[#FF7816]">
                        Passo {step.number}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="mt-3 w-full rounded-lg border border-gray-100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group h-14 px-8 text-base font-bold"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send/?phone=5511917790769&text=Ol%C3%A1!%20Gostaria%20de%20conferir%20exemplos%20de%20um%20plano%20anual%20MeshMe."
                target="_blank"
                rel="noopener noreferrer"
              >
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
