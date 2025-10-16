"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import Link from "next/link"

export default function EventTermsPage() {
  const searchParams = useSearchParams()
  const [language, setLanguage] = useState(searchParams.get("lang") || "pt-BR")

  // Traduções para os diferentes idiomas
  const translations = {
    "pt-BR": {
      title: "Termos e Condições dos Eventos",
      description: "Termos específicos para participação nos eventos da Liga da Firma",
      backToDocuments: "Voltar para Documentos",
      content: "O conteúdo dos Termos e Condições dos Eventos será inserido aqui.",
      lastUpdated: "Última atualização",
      viewTerms: "Ver termos",
    },
    en: {
      title: "Event Terms and Conditions",
      description: "Specific terms for participation in Liga da Firma events",
      backToDocuments: "Back to Documents",
      content: "The content of the Event Terms and Conditions will be inserted here.",
      lastUpdated: "Last updated",
      viewTerms: "View terms",
    },
    es: {
      title: "Términos y Condiciones de los Eventos",
      description: "Términos específicos para la participación en los eventos de Liga da Firma",
      backToDocuments: "Volver a Documentos",
      content: "El contenido de los Términos y Condiciones de los Eventos se insertará aquí.",
      lastUpdated: "Última actualización",
      viewTerms: "Ver términos",
    },
    ro: {
      title: "Termeni și Condiții pentru Evenimente",
      description: "Termeni specifici pentru participarea la evenimentele Liga da Firma",
      backToDocuments: "Înapoi la Documente",
      content: "Conținutul Termenilor și Condițiilor pentru Evenimente va fi inserat aici.",
      lastUpdated: "Ultima actualizare",
      viewTerms: "Vezi termenii",
    },
  }

  const t = translations[language as keyof typeof translations]

  // Atualiza a URL quando o idioma muda
  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set("lang", language)
    window.history.replaceState({}, "", url.toString())
  }, [language])

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-20 overflow-hidden">
          <div className="w-full h-full animate-rotate-slow">
            <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <Link
              href={`/termos-e-condicoes?lang=${language}`}
              className="flex items-center text-gray-600 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.backToDocuments}
            </Link>
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
          <div className="text-center">
            <div className="inline-block bg-primary px-6 py-3 mb-4 skew-x-[-5deg] transform">
              <h1 className="text-4xl font-bold text-white skew-x-[5deg] transform">{t.title}</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.description}</p>
            <div className="mt-6 text-sm text-gray-500">
              {t.lastUpdated}: {new Date().toLocaleDateString(language)}
            </div>
          </div>
        </div>
      </section>

      {/* Document Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-lg mb-12">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-600">{t.content}</p>
              </div>
            </CardContent>
          </Card>

          {/* Event Specific Terms - NOVOS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Liga da Firma</h3>
                <p className="text-gray-600 mb-4">
                  {language === "pt-BR" && "Termos e condições gerais para eventos da Liga da Firma"}
                  {language === "en" && "General terms and conditions for Liga da Firma events"}
                  {language === "es" && "Términos y condiciones generales para eventos de Liga da Firma"}
                  {language === "ro" && "Termeni și condiții generale pentru evenimentele Liga da Firma"}
                </p>
                <Link
                  href={`/documentos/termos-eventos/liga-da-firma?lang=${language}`}
                  className="text-primary hover:underline flex items-center"
                >
                  {t.viewTerms}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Games Bucharest 2025</h3>
                <p className="text-gray-600 mb-4">
                  {language === "pt-BR" && "Acordo de Serviços para Corporate Games Bucharest 2025"}
                  {language === "en" && "Service Agreement for Corporate Games Bucharest 2025"}
                  {language === "es" && "Acuerdo de Servicios para Corporate Games Bucharest 2025"}
                  {language === "ro" && "Acord de Servicii pentru Corporate Games Bucharest 2025"}
                </p>
                <Link
                  href={`/documentos/termos-eventos/corporate-games-bucharest-2025?lang=${language}`}
                  className="text-secondary hover:underline flex items-center"
                >
                  {t.viewTerms}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">UK Corporate Games 2025</h3>
                <p className="text-gray-600 mb-4">
                  {language === "pt-BR" && "Acordo de Serviços para UK Corporate Games 2025"}
                  {language === "en" && "Service Agreement for UK Corporate Games 2025"}
                  {language === "es" && "Acuerdo de Servicios para UK Corporate Games 2025"}
                  {language === "ro" && "Acord de Servicii pentru UK Corporate Games 2025"}
                </p>
                <Link
                  href={`/documentos/termos-eventos/uk-corporate-games-2025?lang=${language}`}
                  className="text-blue-500 hover:underline flex items-center"
                >
                  {t.viewTerms}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
