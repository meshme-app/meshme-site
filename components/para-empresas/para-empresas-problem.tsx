"use client"

import { AlertTriangle, Users, TrendingDown, Heart } from "lucide-react"

export default function ParaEmpresasProblem() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="h-4 w-4" />
            O problema que o RH enfrenta hoje
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            O desafio não é ativar colaboradores.
            <br />
            <span className="text-[#FF7816]">É manter o vínculo ao longo do tempo.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
            <p>
              Programas de bem-estar focam em indivíduos isolados.
              <br />
              Mas <span className="font-semibold text-gray-900">hábitos não se sustentam sem contexto social.</span>
            </p>
            <p>
              Sem grupo, sem recorrência, sem pertencimento, <span className="text-red-500 font-semibold">o engajamento cai.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-gray-600">Foco em indivíduos isolados</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-gray-600">Engajamento que cai com o tempo</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-gray-600">Falta de pertencimento</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#99F700]/10 rounded-2xl border border-[#99F700]/30">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-[#99F700]">A MeshMe parte de uma lógica diferente.</span>
              <br />
              Pessoas se movem juntas. O RH cria as condições para isso escalar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
