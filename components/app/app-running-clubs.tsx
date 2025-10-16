"use client"

import { MapPin, Ticket, Users } from "lucide-react"

export default function AppRunningClubs() {
  return (
    <section className="py-20 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg">Running Clubs</span>
              <h2 className="text-4xl font-bold text-gray-900">
                Sua empresa nas
                <span className="text-primary"> maiores corridas do Brasil</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O <strong>Running Clubs da MeshMe</strong> conecta empresas e colaboradores a uma curadoria de corridas
                de rua em todo o Brasil. Com inscrições direto pelo app, apoio logístico e pontos exclusivos durante os
                eventos, sua empresa pode incentivar metas individuais, promover saúde física e reforçar sua marca
                empregadora em ambientes esportivos de alta visibilidade.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-lg mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Curadoria de provas com inscrição rápida pelo app
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary text-white p-2 rounded-lg mt-1">
                  <Ticket className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Modelos flexíveis: inscrição 100%, coparticipação ou desconto
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Apoio presencial nos eventos com kit, hidratação e comunidade MeshMe
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="/running-club-photo.png"
                alt="Running Club MeshMe - Participantes com medalhas"
                className="w-full max-w-md mx-auto drop-shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-300"
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
              <Ticket className="h-6 w-6" />
            </div>
            <div
              className="absolute top-1/2 -right-8 bg-white border-2 border-primary p-3 rounded-xl shadow-lg animate-float"
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
