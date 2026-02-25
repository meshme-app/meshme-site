"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Building2, Mail, User, Users, Briefcase, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AcesseForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <nav className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/meshme-navbar-logo.png"
              alt="MeshMe Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/para-empresas"
            className="text-sm text-gray-500 hover:text-gray-900 inline-flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4 py-12 lg:py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#FF7816]/10 text-[#FF7816] px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Building2 className="h-3.5 w-3.5" />
                Para Empresas
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-3">
                Descubra como a MeshMe pode
                <span className="text-[#FF7816]"> engajar sua equipe</span>
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Preencha o formulário e nosso time entrará em contato para apresentar a plataforma, discutir o melhor plano para sua empresa e mostrar exemplos de competições corporativas.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#99F700]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-[#99F700]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Configuração em menos de 15 min</p>
                  <p className="text-xs text-gray-500">Sem integração complexa, sem fricção</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#99F700]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-[#99F700]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Gratuito para empresas</p>
                  <p className="text-xs text-gray-500">Remuneração vem dos parceiros de premiação</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#99F700]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-[#99F700]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">+600 empresas em 6 países</p>
                  <p className="text-xs text-gray-500">Plataforma testada e aprovada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#99F700]/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-[#99F700]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Recebemos seus dados!</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Nosso time entrará em contato em breve para apresentar a plataforma e discutir o melhor plano para sua empresa.
                </p>
                <Link
                  href="/para-empresas"
                  className="inline-flex items-center gap-2 text-[#FF7816] font-semibold text-sm hover:underline mt-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para a página
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Quero conhecer a MeshMe</h2>
                  <p className="text-sm text-gray-500 mt-1">Preencha abaixo e entraremos em contato.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7816]/30 focus:border-[#FF7816] transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail corporativo
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7816]/30 focus:border-[#FF7816] transition-colors"
                        placeholder="você@empresa.com.br"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7816]/30 focus:border-[#FF7816] transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Cargo
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="role"
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7816]/30 focus:border-[#FF7816] transition-colors"
                        placeholder="Seu cargo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantidade de funcionários
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <select
                        id="employees"
                        required
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7816]/30 focus:border-[#FF7816] transition-colors appearance-none bg-white"
                      >
                        <option value="">Selecione...</option>
                        <option value="1-50">1 - 50</option>
                        <option value="51-200">51 - 200</option>
                        <option value="201-500">201 - 500</option>
                        <option value="501-1000">501 - 1.000</option>
                        <option value="1000+">1.000+</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FF7816] hover:bg-[#FF7816]/90 text-white font-bold py-3 text-sm group"
                  >
                    Quero conhecer a MeshMe
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    Ao enviar, você concorda com nossos{" "}
                    <Link href="/termos-e-condicoes" className="underline hover:text-gray-600">
                      termos e condições
                    </Link>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
