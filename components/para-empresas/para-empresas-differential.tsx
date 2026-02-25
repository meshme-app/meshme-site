"use client"

import { Zap, Gift, Link2 } from "lucide-react"

export default function ParaEmpresasDifferential() {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Por que somos
              <span className="text-[#FF7816]"> diferentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#FF7816]/40 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-[#FF7816] rounded-lg flex items-center justify-center mb-3">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-gray-900 text-lg font-bold mb-1">Configuração simples</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Implemente na sua empresa em menos de 15 min.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#99F700]/40 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-[#99F700] rounded-lg flex items-center justify-center mb-3">
                <Gift className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-gray-900 text-lg font-bold mb-1">Gratuito para empresas</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Nossa remuneração vem dos parceiros de premiação.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#FF7816]/40 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-[#FF7816] rounded-lg flex items-center justify-center mb-3">
                <Link2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-gray-900 text-lg font-bold mb-1">Conexão entre o digital e o mundo real</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Fazemos os colaboradores vestirem a camisa da empresa, literalmente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
