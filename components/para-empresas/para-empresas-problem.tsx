"use client"

import { Target, Repeat, Trophy, Sparkles } from "lucide-react"

export default function ParaEmpresasProblem() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF7816]/10 text-[#FF7816] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            Nossa especialidade
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-10 leading-tight">
            Somos especialistas em competições,
            <br />
            <span className="text-[#FF7816]">porque competição engaja!</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-left border border-gray-100 hover:border-[#FF7816]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-[#FF7816] rounded-lg flex items-center justify-center mb-3">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Metas pessoais</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Jornada personalizada com AI</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-left border border-gray-100 hover:border-[#99F700]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-[#99F700] rounded-lg flex items-center justify-center mb-3">
                <Repeat className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Desafios internos</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Recorrência e recompensas</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-left border border-gray-100 hover:border-[#FF7816]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-[#FF7816] rounded-lg flex items-center justify-center mb-3">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Competições entre empresas</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Team Building e employer branding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
