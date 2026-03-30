"use client"

import { Monitor, Megaphone, CalendarDays, Gamepad2, BarChart3 } from "lucide-react"

const offerings = [
  {
    icon: Monitor,
    title: "Comunicação interna pronta",
  },
  {
    icon: Megaphone,
    title: "Materiais de ativação interna pós evento",
  },
  {
    icon: CalendarDays,
    title: "Jornada de engajamento anual",
  },
  {
    icon: Gamepad2,
    title: "Aplicativo de desafio gamificado para engajamento interno",
  },
  {
    icon: BarChart3,
    title: "Painel do RH com métricas e dados esportivos",
  },
]

export default function CGExclusiveOffer() {
  return (
    <section className="py-20 bg-[#B91C1C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black italic text-white mb-4">
            Oferta Exclusiva
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            Um pacote pronto para transformar a participação da empresa em campanha interna. Comunicação, mobilização e estrutura para fazer o evento ganhar vida antes mesmo da primeira modalidade começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-medium text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
