"use client"

import { Users, Heart, TrendingUp, Handshake, Zap, Award, FileText, HeartPulse } from "lucide-react"

const leadershipBenefits = [
  {
    icon: Users,
    title: "Colaboração",
    description: "Times que competem juntos criam laços que se refletem no dia a dia da empresa.",
  },
  {
    icon: Heart,
    title: "Orgulho de pertencer",
    description: "Representar a empresa em um evento gera senso de propósito e identificação real.",
  },
  {
    icon: TrendingUp,
    title: "Retenção",
    description: "Experiências coletivas fortalecem vínculos e reduzem turnover.",
  },
  {
    icon: Handshake,
    title: "Networking B2B",
    description: "Um ambiente que conecta empresas e abre portas para relacionamentos comerciais.",
  },
]

const hrBenefits = [
  {
    icon: Zap,
    title: "Engajamento com baixo atrito",
    description: "Uma proposta que gera adesão espontânea, sem forçar participação ou depender de obrigatoriedade.",
  },
  {
    icon: Award,
    title: "Marca empregadora",
    description: "Fortalece a imagem da empresa como um lugar que valoriza bem-estar, cultura e pertencimento.",
  },
  {
    icon: FileText,
    title: "Conteúdo interno pronto",
    description: "Materiais de comunicação, storytelling e histórias que alimentam canais internos durante todo o ciclo.",
  },
  {
    icon: HeartPulse,
    title: "ESG, saúde e visibilidade",
    description: "Um programa que entrega métricas reais para relatórios de sustentabilidade, saúde e clima organizacional.",
  },
]

export default function CGBenefits() {
  return (
    <>
      {/* Para Liderança */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
              PARA LIDERANÇA
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Cultura e performance sem<br />palestra. Na prática.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Corporate Games cria um momento real de conexão entre pessoas, áreas e lideranças. Um espaço onde colaboração, orgulho de pertencer e energia coletiva deixam de ser discurso e passam a ser vivência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#B91C1C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-[#B91C1C]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para RH e Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
              PARA RH E BENEFÍCIOS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Bem-estar em prática. Com adesão real.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Corporate Games foi desenhado para empresas que querem transformar bem-estar e cultura em uma experiência concreta, desejada pelos colaboradores e fácil de ativar internamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hrBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#B91C1C]/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-[#B91C1C]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
