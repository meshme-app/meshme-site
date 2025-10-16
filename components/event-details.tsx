import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Award, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventDetails() {
  return (
    <section id="detalhes" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-[2deg] transform origin-bottom-left"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary px-4 py-2 mb-2 skew-x-[-5deg] transform">
            <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Detalhes do Evento</h2>
          </div>
          <p className="text-gray-600 mt-2">Tudo o que você precisa saber sobre a Liga da Firma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Onde */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Onde</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Arena Ibirapuera</p>
                  <p className="text-gray-600">
                    Av. Dr. Dante Pazzanese, 421 - Ibirapuera
                    <br />
                    São Paulo - SP, 04012-180
                  </p>
                </div>
                <Button variant="link" className="mt-4 text-primary hover:text-primary/80">
                  Ver no mapa
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quando */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Quando</h3>
                <ul className="space-y-2 w-full">
                  {[
                    { event: "InterConsultorias", dates: "1, 2 e 3 de agosto" },
                    { event: "InterTech", dates: "15, 16 e 17 de outubro" },
                    { event: "InterGestoras", dates: "Definição em breve" },
                    { event: "Copa E-commerce", dates: "Definição em breve" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b border-gray-100 pb-1 last:border-0"
                    >
                      <span className="font-medium text-gray-700">{item.event}</span>
                      <span className="text-gray-600 text-sm">{item.dates}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="mt-4 text-primary hover:text-primary/80">
                  Ver calendário completo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Modalidades */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Modalidades</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 w-full">
                  {[
                    "Futebol Society",
                    "Vôlei de praia 4x4",
                    "Tennis",
                    "Beach Tennis",
                    "Futevôlei",
                    "Padel",
                    "Tênis de Mesa",
                    "Truco",
                    "Sinuca",
                  ].map((sport, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                      <span className="text-gray-700">{sport}</span>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 text-primary hover:text-primary/80">
                  Ver todas as modalidades
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Atrações */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Music className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Atrações</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 w-full">
                  {[
                    "Praça de Alimentação",
                    "Área Kids",
                    "Shows ao Vivo",
                    "Espaço de Networking",
                    "Premiações",
                    "Ativações de Marcas",
                    "Lounge VIP",
                  ].map((attraction, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                      <span className="text-gray-700">{attraction}</span>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 text-primary hover:text-primary/80">
                  Ver programação completa
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
