"use client"

import { Zap, Users, TrendingUp } from "lucide-react"

export default function AppMockup() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-left">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=700&width=350&text=App+Interface"
                alt="Interface do App MeshMe"
                className="w-full max-w-sm mx-auto drop-shadow-2xl animate-float"
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-10 -left-4 bg-primary text-white p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <Zap className="h-6 w-6" />
            </div>
            <div
              className="absolute bottom-20 -right-4 bg-secondary text-gray-900 p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <TrendingUp className="h-6 w-6" />
            </div>
            <div
              className="absolute top-1/2 -right-8 bg-white border-2 border-primary p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <Users className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg">Experiência Gamificada</span>
              <h2 className="text-4xl font-bold text-gray-900">
                Metas coletivas que geram
                <span className="text-primary"> impacto real</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa plataforma transforma atividade física em uma jornada colaborativa, onde cada passo individual
                contribui para objetivos maiores da empresa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-lg mt-1">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Gamificação Inteligente</h3>
                  <p className="text-gray-600">
                    Sistema de pontos, badges e rankings que motivam participação contínua
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary text-gray-900 p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Metas Coletivas</h3>
                  <p className="text-gray-600">Objetivos compartilhados que fortalecem o espírito de equipe</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Impacto Mensurável</h3>
                  <p className="text-gray-600">Dados concretos sobre engajamento, saúde e produtividade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
