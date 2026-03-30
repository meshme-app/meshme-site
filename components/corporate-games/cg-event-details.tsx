"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Award, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CGEventDetails() {
  return (
    <section id="detalhes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
            DETALHES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Informações do Evento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Corporate Games São Paulo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Onde */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-[#B91C1C]/10 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-[#B91C1C]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Onde</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">São Paulo</p>
                  <p className="text-gray-600 text-sm">
                    Local de alto padrão com estrutura completa para todas as modalidades.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quando */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-[#B91C1C]/10 flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-[#B91C1C]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Quando</h3>
                <p className="text-gray-700 font-medium text-center">2026</p>
                <p className="text-gray-600 text-sm text-center mt-2">
                  Datas exatas serão divulgadas em breve. Inscreva-se para ser notificado.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Modalidades */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-[#B91C1C]/10 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-[#B91C1C]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Modalidades</h3>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 w-full text-sm">
                  {[
                    "Beach Tennis",
                    "Vôlei de Praia",
                    "Tênis",
                    "Futebol Society",
                    "Futevôlei",
                    "Natação",
                    "Corrida",
                    "Padel",
                  ].map((sport, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mr-2"></div>
                      <span className="text-gray-700">{sport}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Atrações */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-[#B91C1C]/10 flex items-center justify-center mb-4">
                  <Music className="h-7 w-7 text-[#B91C1C]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Atrações</h3>
                <div className="grid grid-cols-1 gap-y-1 w-full text-sm">
                  {[
                    "Cerimônia de abertura",
                    "Praça de alimentação",
                    "Área de networking",
                    "Premiações",
                    "Ativações de marca",
                  ].map((attraction, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mr-2"></div>
                      <span className="text-gray-700">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
