"use client"

import { Activity, Users, MapPin, Building2 } from "lucide-react"

const features = [
  {
    icon: Activity,
    number: "01",
    title: "Registre suas atividades e concorra a prêmios",
    description:
      "Poste seus treinos com modalidade, tempo e distância. Acompanhe sua evolução, acumule pontos e concorra a prêmios exclusivos da plataforma.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    image: "/challenge-feed-mockup.png",
    integrations: ["Apple Health", "Google Fit", "Strava"],
  },
  {
    icon: Users,
    number: "02",
    title: "Crie desafios de atividade física com seus colegas",
    description:
      "Monte desafios personalizados com amigos ou colegas de trabalho. Defina metas, acompanhe rankings e celebre conquistas juntos.",
    color: "bg-[#99F700]",
    iconColor: "text-black",
    image: "/challenge-mockup.png",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Encontre corridas de rua e grupos esportivos recorrentes",
    description:
      "Descubra eventos próximos a você, grupos de corrida, peladas de futebol, treinos de beach tennis e muito mais. A comunidade está esperando por você.",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    image: "/running-club-photo.png",
  },
  {
    icon: Building2,
    number: "04",
    title: "Crie o perfil da sua empresa e convide mais pessoas",
    description:
      "Você não precisa ser do RH para começar uma comunidade esportiva na sua empresa. Crie o perfil corporativo, convide colegas e promova o bem-estar no trabalho.",
    color: "bg-[#99F700]",
    iconColor: "text-black",
    image: "/club-mockup.png",
  },
]

export default function ParaPessoasFeatures() {
  return (
    <section id="funcionalidades" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FF7816] font-semibold text-lg">Como funciona</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Sua jornada esportiva
            <span className="text-[#FF7816]"> começa aqui</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas simples e poderosas para você se manter ativo, conectado e motivado
          </p>
        </div>

        <div className="space-y-20">
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
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                {feature.integrations && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-sm text-gray-500 font-medium">Integrado com:</span>
                    {feature.integrations.map((integration, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                )}
                {index === 3 && (
                  <p className="text-sm text-gray-500 italic border-l-4 border-[#99F700] pl-4">
                    Dica: Se fizer sentido, indique para o seu RH e acumule ainda mais vantagens para você e seus colegas.
                  </p>
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
