"use client"

import { Zap, Gift, Link2 } from "lucide-react"

export default function ParaEmpresasDifferential() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#99F700]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#FF7816]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
              Por que somos
              <span className="text-[#99F700]"> diferentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FF7816]/40 transition-all duration-300">
              <div className="w-14 h-14 bg-[#FF7816] rounded-xl flex items-center justify-center mb-5">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Configuracao simples</h3>
              <p className="text-gray-400 leading-relaxed">Implemente na sua empresa em menos de 15 min.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#99F700]/40 transition-all duration-300">
              <div className="w-14 h-14 bg-[#99F700] rounded-xl flex items-center justify-center mb-5">
                <Gift className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Gratuito para empresas</h3>
              <p className="text-gray-400 leading-relaxed">Nossa remuneracao vem dos parceiros de premiacao.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FF7816]/40 transition-all duration-300">
              <div className="w-14 h-14 bg-[#FF7816] rounded-xl flex items-center justify-center mb-5">
                <Link2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Conexao entre o digital e o mundo real</h3>
              <p className="text-gray-400 leading-relaxed">Fazemos os colaboradores vestirem a camisa da empresa, literalmente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
