"use client"

import { Flag, Dumbbell, Users, Trophy, Handshake } from "lucide-react"

const deliverables = [
  {
    icon: Flag,
    title: "Abertura oficial do evento",
    description: "Cerimônia de abertura com desfile das delegações e início oficial do Corporate Games São Paulo.",
  },
  {
    icon: Dumbbell,
    title: "Acesso às modalidades esportivas",
    description: "Participação nas modalidades escolhidas com estrutura completa, arbitragem e organização profissional.",
  },
  {
    icon: Users,
    title: "Integração e ativação",
    description: "Espaços e momentos para promover conexão entre colaboradores e experiências de marca.",
  },
  {
    icon: Trophy,
    title: "Ranking e premiação",
    description: "Acompanhamento de resultados em tempo real e medalhas para os melhores colocados.",
  },
  {
    icon: Handshake,
    title: "Networking corporativo",
    description: "Ambiente propício para relacionamento entre empresas e fortalecimento da sua marca.",
  },
]

export default function CGDeliverables() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
            ENTREGÁVEIS
          </span>
          <h2 className="text-3xl md:text-4xl font-black italic text-gray-900 mb-4">
            O que está incluído
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A participação no Corporate Games envolve muito mais do que entrar em quadra. O evento foi desenhado como uma experiência corporativa completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-[#B91C1C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-[#B91C1C]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
