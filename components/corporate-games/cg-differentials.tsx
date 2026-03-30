"use client"

import { Globe, Calendar, Award, Layers } from "lucide-react"

const differentials = [
  {
    icon: Globe,
    title: "Marca global",
    description: "Um movimento internacional presente em diversos países, conectando empresas por meio do esporte corporativo.",
  },
  {
    icon: Calendar,
    title: "Evento anual para cultura e bem-estar",
    description: "Um evento que transforma bem-estar em prática e gera um pico de engajamento e integração na empresa.",
  },
  {
    icon: Award,
    title: "Experiência premium",
    description: "Mais do que competição: cultura, employer branding, mobilização e memória coletiva dentro da empresa.",
  },
  {
    icon: Layers,
    title: "Desafio gamificado",
    description: "Aplicativo exclusivo com desafios e gamificação para engajar colaboradores antes, durante e depois do evento.",
  },
]

export default function CGDifferentials() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
            DIFERENCIAIS
          </span>
          <h2 className="text-3xl md:text-4xl font-black italic mb-4">
            Por que o Corporate Games é<br />diferente
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            O Corporate Games não é só competição. É cultura, employer branding, mobilização e memória coletiva dentro da empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <diff.icon className="h-7 w-7 text-[#B91C1C]" />
              </div>
              <h3 className="font-bold text-white mb-2">{diff.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
