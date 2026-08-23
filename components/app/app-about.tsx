"use client"

import { Users, Heart, Trophy } from "lucide-react"
import Link from "next/link"

export default function AppAbout() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-left">
            <div className="relative">
              <img
                src="/meshme-celebration.png"
                alt="Comunidade MeshMe celebrando vitória no InterConsultorias"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg">Sobre a MeshMe</span>
              <h2 className="text-4xl font-bold text-gray-900">
                Transformamos empresas em
                <span className="text-primary"> comunidades ativas</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A MeshMe é mais do que um app de esportes. Somos uma <strong>plataforma de engajamento contínuo</strong>{" "}
                que une colaboradores por meio de <strong>atividades físicas, gamificação e pertencimento</strong>. Além
                do nosso ecossistema digital, promovemos a{" "}
                <Link
                  href="https://www.corporategamesbrasil.com"
                  className="text-[#FF6600] font-bold hover:underline hover:text-[#e55a00] transition-all duration-200"
                >
                  Liga da Firma
                </Link>{" "}
                — o maior movimento esportivo entre empresas do Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bem-estar Real</h3>
                  <p className="text-gray-600 text-sm">Impacto mensurável na saúde e felicidade dos colaboradores</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cultura Forte</h3>
                  <p className="text-gray-600 text-sm">Construção de vínculos autênticos entre equipes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
