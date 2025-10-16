"use client"

import { MapPin, Clock, Users } from "lucide-react"

export default function AppClub() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-left">
            <div className="relative z-10">
              <img
                src="/club-mockup.png"
                alt="Clube MeshMe - Interface de Eventos"
                className="w-full max-w-xs mx-auto drop-shadow-2xl animate-float"
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-10 -left-4 bg-primary text-white p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <MapPin className="h-6 w-6" />
            </div>
            <div
              className="absolute bottom-20 -right-4 bg-secondary text-white p-3 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Clock className="h-6 w-6" />
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
              <span className="text-primary font-semibold text-lg">Clube MeshMe</span>
              <h2 className="text-4xl font-bold text-gray-900">
                jogos recorrentes,
                <span className="text-primary"> engajamento constante</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O <strong>Clube MeshMe</strong> é um modelo inovador de <strong>aluguel corporativo de quadras</strong>{" "}
                com gestão de presença, regras e comunidade integrada. Empresas contratam pacotes mensais para
                modalidades fixas e a MeshMe cuida de tudo: confirmação de presença, check-in virtual, reposição de
                vagas e engajamento com outros clubes parceiros.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-lg mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Gestão de Locais</h3>
                  <p className="text-gray-600">
                    Organize jogos em quadras fixas com sistema de reservas e check-ins automáticos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary text-white p-2 rounded-lg mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Jogos Recorrentes</h3>
                  <p className="text-gray-600">Configure horários fixos e gerencie presença de forma inteligente</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Comunidades Ativas</h3>
                  <p className="text-gray-600">Crie grupos esportivos com regras personalizadas e engajamento real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
