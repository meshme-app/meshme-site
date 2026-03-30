"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Building2, Users, Trophy, ArrowRight } from "lucide-react"

const modalities = [
  "Beach Tennis",
  "Vôlei de Praia",
  "Tênis",
  "Futebol Society",
  "Futevôlei",
  "Natação",
  "Corrida",
  "Padel",
  "Basquete",
  "Ciclismo",
  "CrossFit",
  "Tênis de Mesa",
]

export default function CGInscriptionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedModalities, setSelectedModalities] = useState<string[]>([])

  const handleModalityToggle = (modality: string) => {
    setSelectedModalities((prev) =>
      prev.includes(modality) ? prev.filter((m) => m !== modality) : [...prev, modality]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4">
              Inscrição enviada com sucesso!
            </h1>
            <p className="text-gray-600 mb-8">
              Obrigado pelo interesse no Corporate Games São Paulo 2026. Nossa equipe entrará em contato em breve para apresentar o evento e tirar todas as suas dúvidas.
            </p>
            <Button
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white rounded-full"
              asChild
            >
              <a href="/corporate-games">
                Voltar para a página inicial
              </a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
              INSCRIÇÃO
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Quero levar minha empresa
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo para demonstrar interesse em participar do Corporate Games São Paulo 2026. Nossa equipe entrará em contato para apresentar o evento.
            </p>
          </div>

          {/* Benefits sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Building2,
                title: "Para empresas de todos os portes",
                description: "De startups a grandes corporações",
              },
              {
                icon: Users,
                title: "Engajamento real",
                description: "Adesão espontânea dos colaboradores",
              },
              {
                icon: Trophy,
                title: "Experiência premium",
                description: "Estrutura profissional e organização de alto nível",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-[#B91C1C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-[#B91C1C]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Informações de contato</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="seu@empresa.com.br"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Cargo</Label>
                    <Input
                      id="role"
                      type="text"
                      placeholder="Ex: Gerente de RH"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Informações da empresa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Nome da empresa *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      placeholder="Empresa LTDA"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="employees">Número de colaboradores</Label>
                    <Input
                      id="employees"
                      type="text"
                      placeholder="Ex: 100-500"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Modalities */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Modalidades de interesse</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Selecione as modalidades que sua empresa tem interesse em participar (pode selecionar várias)
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {modalities.map((modality) => (
                    <label
                      key={modality}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedModalities.includes(modality)
                          ? "bg-[#B91C1C]/10 border-[#B91C1C]"
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <Checkbox
                        checked={selectedModalities.includes(modality)}
                        onCheckedChange={() => handleModalityToggle(modality)}
                        className="data-[state=checked]:bg-[#B91C1C] data-[state=checked]:border-[#B91C1C]"
                      />
                      <span className="text-sm font-medium">{modality}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos mais sobre o interesse da sua empresa ou alguma dúvida específica..."
                  className="mt-1"
                  rows={4}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold rounded-full"
              >
                Enviar inscrição
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-gray-500">
                Ao enviar, você concorda com nossa{" "}
                <a href="/documentos/politica-privacidade" className="text-[#B91C1C] hover:underline">
                  Política de Privacidade
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
