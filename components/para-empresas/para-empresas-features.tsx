"use client"

import { BarChart3, Repeat, Gift, Users, Dumbbell, TrendingUp, CheckCircle } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    number: "01",
    title: "Visibilidade real de engajamento",
    subtitle: "Acompanhe participação ativa. Não apenas cadastro.",
    description: "Tenha acesso a métricas que realmente importam para entender o impacto do programa de bem-estar.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    image: "/dashboard-analytics.png",
    bullets: [
      "Engajamento, frequência e recorrência",
      "Atividades realizadas",
      "Dados por área, cargo, perfil e faixa etária",
      "Leitura clara do que realmente gera hábito"
    ]
  },
  {
    icon: Repeat,
    number: "02",
    title: "Engajamento contínuo ao longo do ano",
    subtitle: "Menos campanhas pontuais. Mais rotina.",
    description: "Mantenha seus colaboradores ativos durante todo o ano com ferramentas que facilitam a gestão.",
    color: "bg-[#99F700]",
    iconColor: "text-black",
    image: "/challenge-mockup.png",
    bullets: [
      "Desafios ilimitados",
      "Templates prontos para diferentes objetivos",
      "Sustentação de engajamento mês após mês",
      "Sem sobrecarga operacional para o RH"
    ]
  },
  {
    icon: Gift,
    number: "03",
    title: "Incentivos que reforçam comportamento real",
    subtitle: "Recompense quem se mantém ativo e puxa o grupo junto.",
    description: "Sistema de recompensas que valoriza a constância e o impacto coletivo.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    image: "/challenge-feed-mockup.png",
    bullets: [
      "Moeda digital exclusiva da MeshMe",
      "Troca por produtos e experiências saudáveis",
      "Incentivos ligados à constância, não à inscrição",
      "Cultura ativa que se multiplica de forma orgânica"
    ]
  },
  {
    icon: Users,
    number: "04",
    title: "Comunidades esportivas que criam pertencimento",
    subtitle: "Pessoas voltam quando fazem parte de algo.",
    description: "Crie comunidades reais que conectam colaboradores através do esporte.",
    color: "bg-[#99F700]",
    iconColor: "text-black",
    image: "/running-club-photo.png",
    bullets: [
      "Comunidade de corrida com descontos em provas",
      "Opções de coparticipação em inscrições",
      "Inscrição e gestão de grupos",
      "Atendimento dedicado nas provas"
    ],
    extraBullets: [
      "Aluguel de quadras",
      "Coparticipação da empresa",
      "Grupos recorrentes por modalidade"
    ]
  },
  {
    icon: Dumbbell,
    number: "05",
    title: "Clube MeshMe. Rotina esportiva para agendas cheias",
    subtitle: "Quando o esporte entra na agenda, o hábito se consolida.",
    description: "Grupos fixos que facilitam a prática regular de atividades físicas.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    image: "/club-mockup.png",
    bullets: [
      "Grupos fixos em locais e horários compatíveis",
      "Acesso exclusivo para colaboradores elegíveis do Plano Pro",
      "Menos fricção. Mais consistência."
    ]
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Mais incentivos, mais recorrência",
    subtitle: "Quem está no Plano Pro participa mais.",
    description: "Colaboradores elegíveis têm mais chances de engajar e ganhar prêmios.",
    color: "bg-[#99F700]",
    iconColor: "text-black",
    image: "/meshme-celebration.png",
    bullets: [
      "Colaboradores elegíveis têm 2.5x mais chances de ganhar prêmios",
      "Maior exposição a eventos, grupos e recompensas",
      "Efeito rede dentro e fora da empresa"
    ]
  },
]

export default function ParaEmpresasFeatures() {
  return (
    <section id="funcionalidades" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FF7816] font-semibold text-lg">Como funciona</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Como a MeshMe funciona
            <span className="text-[#FF7816]"> para o RH</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas completas para criar, gerenciar e escalar programas de bem-estar corporativo
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className={`space-y-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center shadow-md`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <span className="text-4xl font-bold text-gray-200">{feature.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{feature.title}</h3>
                <p className="text-lg font-semibold text-[#FF7816]">{feature.subtitle}</p>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3 pt-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#99F700] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {feature.extraBullets && (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-500 mb-3">Comunidades esportivas diversas:</p>
                    <ul className="space-y-2">
                      {feature.extraBullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-[#FF7816] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative flex justify-center">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-auto h-80 md:h-96 lg:h-[420px] object-contain rounded-xl shadow-lg"
                  />
                  {/* Decorative gradient */}
                  <div
                    className={`absolute -z-10 inset-0 ${feature.color} opacity-10 rounded-xl blur-2xl transform scale-105`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
