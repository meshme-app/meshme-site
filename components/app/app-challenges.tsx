"use client"

import { Zap, Users, TrendingUp } from "lucide-react"

export default function AppChallenges() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-left">
            <div className="relative z-10">
              <img
                src="/challenge-feed-mockup.png"
                alt="Desafio MeshMe - Feed de Atividades"
                className="w-full max-w-xs mx-auto drop-shadow-2xl animate-float"
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
              className="absolute bottom-20 -right-4 bg-secondary text-white p-3 rounded-xl shadow-lg animate-float"
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
              <span className="text-primary font-semibold text-lg">Desafio MeshMe</span>
              <h2 className="text-4xl font-bold text-gray-900">
                O Desafio fitness que movimenta
                <span className="text-primary"> times e fortalece o bem-estar</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O <strong>Desafio MeshMe</strong> é uma competição saudável que une colaboradores em torno de metas
                coletivas de atividade física. Ao registrar treinos no app, os usuários ganham pontos, sobem no ranking
                e contribuem para os resultados da empresa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-lg mt-1">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Rankings Dinâmicos</h3>
                  <p className="text-gray-600">Visualize seu progresso e o do time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary text-white p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Premiação</h3>
                  <p className="text-gray-600">Troque sua pontuação por prêmios com foco em constância e desempenho</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Feed Social Esportivo</h3>
                  <p className="text-gray-600">Compartilhe conquistas e motive colegas através de um feed interativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
