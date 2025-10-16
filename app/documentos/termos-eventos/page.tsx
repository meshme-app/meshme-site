"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import Link from "next/link"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"

// Componente de fallback para Suspense
function LoadingFallback() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
}

function SpecificEventTermsPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialLang = searchParams.get("lang") || "pt-BR"
  const [language, setLanguage] = useState(initialLang)

  const translations = {
    "pt-BR": {
      title: "Termos e Condições dos Eventos",
      description: "Termos específicos para participação nos eventos da Liga da Firma",
      backToLegalDocuments: "Voltar para Documentos Legais",
      lastUpdated: "Última atualização",
      viewTerms: "Ver termos",
      ligaDaFirmaTitle: "Liga da Firma",
      ligaDaFirmaDesc: "Termos e condições gerais para eventos da Liga da Firma",
      corporateGamesBucharestTitle: "Corporate Games Bucharest 2025",
      corporateGamesBucharestDesc: "Acordo de Serviços para Corporate Games Bucharest 2025",
      ukCorporateGamesTitle: "UK Corporate Games 2025",
      ukCorporateGamesDesc: "Acordo de Serviços para UK Corporate Games 2025",
    },
    en: {
      title: "Event Terms and Conditions",
      description: "Specific terms for participation in Liga da Firma events",
      backToLegalDocuments: "Back to Legal Documents",
      lastUpdated: "Last updated",
      viewTerms: "View terms",
      ligaDaFirmaTitle: "Liga da Firma",
      ligaDaFirmaDesc: "General terms and conditions for Liga da Firma events",
      corporateGamesBucharestTitle: "Corporate Games Bucharest 2025",
      corporateGamesBucharestDesc: "Service Agreement for Corporate Games Bucharest 2025",
      ukCorporateGamesTitle: "UK Corporate Games 2025",
      ukCorporateGamesDesc: "Service Agreement for UK Corporate Games 2025",
    },
    es: {
      title: "Términos y Condiciones de los Eventos",
      description: "Términos específicos para la participación en los eventos de Liga da Firma",
      backToLegalDocuments: "Volver a Documentos Legales",
      lastUpdated: "Última actualización",
      viewTerms: "Ver términos",
      ligaDaFirmaTitle: "Liga da Firma",
      ligaDaFirmaDesc: "Términos y condiciones generales para eventos de Liga da Firma",
      corporateGamesBucharestTitle: "Corporate Games Bucharest 2025",
      corporateGamesBucharestDesc: "Acuerdo de Servicios para Corporate Games Bucharest 2025",
      ukCorporateGamesTitle: "UK Corporate Games 2025",
      ukCorporateGamesDesc: "Acuerdo de Servicios para UK Corporate Games 2025",
    },
    ro: {
      title: "Termeni și Condiții pentru Evenimente",
      description: "Termeni specifici pentru participarea la evenimentele Liga da Firma",
      backToLegalDocuments: "Înapoi la Documente Legale",
      lastUpdated: "Ultima actualizare",
      viewTerms: "Vezi termenii",
      ligaDaFirmaTitle: "Liga da Firma",
      ligaDaFirmaDesc: "Termeni și condiții generale pentru evenimentele Liga da Firma",
      corporateGamesBucharestTitle: "Corporate Games Bucharest 2025",
      corporateGamesBucharestDesc: "Acord de Servicii pentru Corporate Games Bucharest 2025",
      ukCorporateGamesTitle: "UK Corporate Games 2025",
      ukCorporateGamesDesc: "Acord de Servicii pentru UK Corporate Games 2025",
    },
  }

  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    const currentPath = window.location.pathname
    const newUrl = `${currentPath}?lang=${language}`
    router.replace(newUrl, { scroll: false })
  }, [language, router])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNavbar />
      <div className="flex-grow pt-16">
        {" "}
        {/* Ajuste pt-16 conforme altura do Navbar */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 md:w-48 md:h-48 opacity-15 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <Link
                href={`/termos-e-condicoes?lang=${language}`}
                className="flex items-center text-gray-600 hover:text-primary mb-4 sm:mb-0"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.backToLegalDocuments}
              </Link>
              <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            </div>
            <div className="text-center">
              <div className="inline-block bg-primary px-4 py-2 md:px-6 md:py-3 mb-4 skew-x-[-5deg] transform">
                <h1 className="text-2xl md:text-4xl font-bold text-white skew-x-[5deg] transform">{t.title}</h1>
              </div>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">{t.description}</p>
              <div className="mt-4 text-xs md:text-sm text-gray-500">
                {t.lastUpdated}: {new Date().toLocaleDateString(language)}
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Card Liga da Firma */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 self-start">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.ligaDaFirmaTitle}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{t.ligaDaFirmaDesc}</p>
                  <Link
                    href={`/documentos/termos-eventos/liga-da-firma?lang=${language}`}
                    className="text-primary hover:underline flex items-center font-medium mt-auto self-start"
                  >
                    {t.viewTerms}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Card Corporate Games Bucharest 2025 */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 self-start">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.corporateGamesBucharestTitle}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{t.corporateGamesBucharestDesc}</p>
                  <Link
                    href={`/documentos/termos-eventos/corporate-games-bucharest-2025?lang=${language}`}
                    className="text-secondary hover:underline flex items-center font-medium mt-auto self-start"
                  >
                    {t.viewTerms}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Card UK Corporate Games 2025 */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 self-start">
                    <Calendar className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.ukCorporateGamesTitle}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{t.ukCorporateGamesDesc}</p>
                  <Link
                    href={`/documentos/termos-eventos/uk-corporate-games-2025?lang=${language}`}
                    className="text-blue-500 hover:underline flex items-center font-medium mt-auto self-start"
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
      <Footer />
    </div>
  )
}

export default function SpecificEventTermsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SpecificEventTermsPageContent />
    </Suspense>
  )
}
