"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Activity, Target, BarChart3, MessageCircle, Award, Calendar } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Registro de Treinos",
    description:
      "Poste seus treinos com modalidade, tempo e distância. Acompanhe sua evolução de forma simples e visual.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Target,
    title: "Desafio Corporativo",
    description:
      "Participe do desafio da sua empresa, registre atividades e suba no ranking coletivo. Engajamento com propósito!",
    color: "bg-secondary/20 text-gray-700",
  },
  {
    icon: BarChart3,
    title: "Rankings Dinâmicos",
    description:
      "Acompanhe seu desempenho e compare com colegas em rankings gamificados que valorizam esforço e constância.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    title: "Feed Social",
    description: "Interaja com seu time curtindo, comentando e postando treinos.",
    color: "bg-secondary/20 text-gray-700",
  },
  {
    icon: Award,
    title: "Sistema de Recompensas",
    description: "Ganhe pontos e desbloqueie benefícios exclusivos da empresa",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Calendar,
    title: "Eventos Esportivos",
    description: "Organize e participe de atividades presenciais e virtuais",
    color: "bg-secondary/20 text-gray-700",
  },
]

export default function AppFeatures() {
  return (
    <section id="funcionalidades" className="py-20 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-lg">Funcionalidades</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Tudo que você precisa para
            <span className="text-primary"> engajar sua equipe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas completas para promover atividade física, competição saudável e conexão entre colaboradores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
