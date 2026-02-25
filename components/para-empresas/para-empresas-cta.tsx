"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Shield, DollarSign, Clock, TrendingUp, UserMinus, ExternalLink } from "lucide-react"

export default function ParaEmpresasCTA() {
  return (
    <>
      {/* Section 6 - Resultado para quem usa */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-14 leading-tight">
              Resultado para <span className="text-[#FF7816]">quem usa</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-20 h-20 bg-[#FF7816]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#FF7816] transition-colors duration-300">
                  <Heart className="h-10 w-10 text-[#FF7816] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Saude</h3>
                <p className="text-gray-500">Habitos saudaveis que se sustentam ao longo do tempo</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-[#99F700]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#99F700] transition-colors duration-300">
                  <Users className="h-10 w-10 text-[#99F700] group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Conexao</h3>
                <p className="text-gray-500">Colaboradores que se conhecem e se apoiam no dia a dia</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-[#FF7816]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#FF7816] transition-colors duration-300">
                  <Shield className="h-10 w-10 text-[#FF7816] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pertencimento</h3>
                <p className="text-gray-500">Cultura corporativa viva que atrai e retem talentos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - ROI para empresas */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#99F700]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#FF7816]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                ROI para <span className="text-[#99F700]">empresas</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">Custo com saude</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Programas de wellness corporativo reduzem custos medicos em <span className="text-[#99F700] font-bold">US$ 3,27 para cada US$ 1 investido</span>.
                    </p>
                    <a href="https://www.healthaffairs.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#99F700] transition-colors inline-flex items-center gap-1">
                      Health Affairs <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">Absenteismo</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Unidades com alto engajamento tem <span className="text-[#FF7816] font-bold">81% menos absenteismo</span>.
                    </p>
                    <a href="https://www.gallup.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#FF7816] transition-colors inline-flex items-center gap-1">
                      Gallup <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">Produtividade</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Unidades com alto engajamento tem <span className="text-[#99F700] font-bold">18% mais produtividade</span> (sales).
                    </p>
                    <a href="https://www.gallup.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#99F700] transition-colors inline-flex items-center gap-1">
                      Gallup <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserMinus className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">Retencao</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Unidades com alto engajamento tem <span className="text-[#FF7816] font-bold">18% a 43% menos turnover</span>, dependendo do perfil da empresa.
                    </p>
                    <a href="https://www.gallup.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#FF7816] transition-colors inline-flex items-center gap-1">
                      Gallup <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Button size="lg" className="bg-[#99F700] hover:bg-[#99F700]/90 text-black group h-14 px-8 text-base font-bold" asChild>
                <a href="https://api.whatsapp.com/send/?phone=5511917790769&text=Ol%C3%A1!%20Gostaria%20de%20calcular%20o%20ROI%20do%20programa%20MeshMe." target="_blank" rel="noopener noreferrer">
                  Calcule o ROI
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
