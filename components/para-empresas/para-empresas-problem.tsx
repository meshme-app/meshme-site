"use client"

import { Target, Repeat, Trophy, Sparkles } from "lucide-react"

export default function ParaEmpresasProblem() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF7816]/10 text-[#FF7816] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            Nossa especialidade
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Somos especialistas em competicoes,
            <br />
            <span className="text-[#FF7816]">por que competicao engaja!</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <div className="bg-gray-50 rounded-2xl p-8 text-left border border-gray-100 hover:border-[#FF7816]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-[#FF7816] rounded-xl flex items-center justify-center mb-5">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Metas pessoais</h3>
              <p className="text-gray-600 leading-relaxed">Jornada personalizada com AI</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-left border border-gray-100 hover:border-[#99F700]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-[#99F700] rounded-xl flex items-center justify-center mb-5">
                <Repeat className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Desafios internos</h3>
              <p className="text-gray-600 leading-relaxed">Recorrencia e recompensas</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-left border border-gray-100 hover:border-[#FF7816]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-[#FF7816] rounded-xl flex items-center justify-center mb-5">
                <Trophy className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competicoes entre empresas</h3>
              <p className="text-gray-600 leading-relaxed">Team Building e employer branding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
