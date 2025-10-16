"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users2, Building2 } from "lucide-react"

export default function AppBenefits() {
  return (
    <section id="beneficios" className="py-20 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-lg">Benefícios</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Vantagens para
            <span className="text-primary"> todos os envolvidos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Para Colaboradores */}
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-left">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary text-white p-4 rounded-xl">
                  <Users2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Para Colaboradores</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Melhoria da saúde física e mental</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Conexões genuínas com colegas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Motivação através de gamificação</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Recompensas e reconhecimento</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Maior satisfação no trabalho</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Para RH e Empresas */}
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-right">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-secondary text-white p-4 rounded-xl">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Para RH e Empresas</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <p className="text-gray-600">Redução do turnover e absenteísmo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <p className="text-gray-600">Melhoria do clima organizacional</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <p className="text-gray-600">Dados de engajamento em tempo real</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <p className="text-gray-600">ROI mensurável em bem-estar</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <p className="text-gray-600">Fortalecimento da marca empregadora</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
