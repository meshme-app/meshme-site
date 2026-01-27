"use client"

import { Sparkles, Users, BarChart3, Shield } from "lucide-react"

export default function ParaEmpresasDifferential() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#99F700]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#FF7816]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#99F700] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            O diferencial da MeshMe
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            People-first,
            <span className="text-[#99F700]"> com governança para o RH.</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Qualquer pessoa pode usar a MeshMe.
            <br />
            Com o <span className="font-bold text-[#FF7816]">Plano Pro</span>, o RH libera incentivos, acompanha dados e fortalece comunidades esportivas reais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">People-first</h3>
              <p className="text-gray-400 text-sm">Colaboradores se engajam naturalmente, sem fricção</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-2">Dados reais</h3>
              <p className="text-gray-400 text-sm">Visibilidade de engajamento, não apenas cadastros</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Governança</h3>
              <p className="text-gray-400 text-sm">Controle total para o RH gerenciar incentivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
