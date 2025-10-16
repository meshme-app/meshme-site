"use client"

import { Calendar, Users, Trophy } from "lucide-react"

export default function AppTournaments() {
  return (
    <section className="py-20 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg">Gestão de Torneios</span>
              <h2 className="text-4xl font-bold text-gray-900">
                Tecnologia para torneios
                <span className="text-primary"> corporativos e interempresas</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com o módulo de <strong>Gestão de Torneios</strong>, sua empresa pode organizar campeonatos internos ou
                interempresas com total autonomia. A plataforma permite inscrições online, montagem de times, controle
                de pontuação, rankings e até integração com árbitros e organizadores.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-lg mt-1">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Organização Completa</h3>
                  <p className="text-gray-600">
                    Gerencie inscrições, escalações e calendário de jogos em uma plataforma única
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary text-white p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Gestão de Equipes</h3>
                  <p className="text-gray-600">Facilite formação de times e comunicação entre participantes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Placares e Resultados</h3>
                  <p className="text-gray-600">Acompanhe resultados em tempo real e chaveamento dos jogos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="/tournament-mockup.png"
                alt="Gestão de Torneios - Interface do App"
                className="w-full max-w-sm mx-auto drop-shadow-2xl animate-float"
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-10 -right-4 bg-primary text-white p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <Calendar className="h-6 w-6" />
            </div>
            <div
              className="absolute bottom-20 -left-4 bg-secondary text-white p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Trophy className="h-6 w-6" />
            </div>
            <div
              className="absolute top-1/2 -left-8 bg-white border-2 border-primary p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <Users className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
