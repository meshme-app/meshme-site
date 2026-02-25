"use client"

import { Zap, Gift, Link2 } from "lucide-react"

export default function ParaEmpresasDifferential() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#99F700]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#FF7816]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Por que somos
              <span className="text-[#99F700]"> diferentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FF7816]/40 transition-all duration-300">
              <div className="w-10 h-10 bg-[#FF7816] rounded-lg flex items-center justify-center mb-3">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1">Configuracao simples</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Implemente na sua empresa em menos de 15 min.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#99F700]/40 transition-all duration-300">
              <div className="w-10 h-10 bg-[#99F700] rounded-lg flex items-center justify-center mb-3">
                <Gift className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1">Gratuito para empresas</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Nossa remuneracao vem dos parceiros de premiacao.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FF7816]/40 transition-all duration-300">
              <div className="w-10 h-10 bg-[#FF7816] rounded-lg flex items-center justify-center mb-3">
                <Link2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white text-lg font-bold mb-1">Conexao entre o digital e o mundo real</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Fazemos os colaboradores vestirem a camisa da empresa, literalmente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
