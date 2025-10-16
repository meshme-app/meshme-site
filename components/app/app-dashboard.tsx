"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users, TrendingUp, Calendar } from "lucide-react"

export default function AppDashboard() {
  return (
    <section id="dashboard" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg">Dashboard RH</span>
              <h2 className="text-4xl font-bold text-gray-900">
                Dados que transformam
                <span className="text-primary"> decisões</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tenha acesso a métricas completas sobre engajamento, participação e impacto das atividades esportivas na
                sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Engajamento</div>
                </CardContent>
              </Card>

              <Card className="border border-secondary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-gray-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1.2k</div>
                  <div className="text-sm text-gray-600">Usuários Ativos</div>
                </CardContent>
              </Card>

              <Card className="border border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">+32%</div>
                  <div className="text-sm text-gray-600">Produtividade</div>
                </CardContent>
              </Card>

              <Card className="border border-secondary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-gray-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-sm text-gray-600">Eventos/Mês</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <img
              src="/dashboard-analytics.png"
              alt="Dashboard RH MeshMe - Analytics Completo"
              className="w-full drop-shadow-2xl"
              style={{ background: "transparent" }}
            />
            <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-xl shadow-lg animate-float">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
