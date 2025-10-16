"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface DocumentTemplateProps {
  translations: {
    [key: string]: {
      title: string
      description: string
      backToDocuments: string
      content: string
      lastUpdated: string
    }
  }
  icon?: React.ReactNode
}

export default function DocumentTemplate({ translations, icon }: DocumentTemplateProps) {
  const searchParams = useSearchParams()
  const [language, setLanguage] = useState("pt-BR")
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing search params
  useEffect(() => {
    setMounted(true)
    const langParam = searchParams?.get("lang")
    if (langParam) {
      setLanguage(langParam)
    }
  }, [searchParams])

  // Get translation with fallback
  const getTranslation = () => {
    if (!translations || !mounted) {
      return {
        title: "Carregando...",
        description: "Carregando documento...",
        backToDocuments: "Voltar para Documentos",
        content: "Carregando conteúdo...",
        lastUpdated: "Última atualização",
      }
    }

    return (
      translations[language] ||
      translations["pt-BR"] ||
      Object.values(translations)[0] || {
        title: "Documento",
        description: "Documento legal",
        backToDocuments: "Voltar para Documentos",
        content: "Conteúdo do documento",
        lastUpdated: "Última atualização",
      }
    )
  }

  const t = getTranslation()

  // Update URL when language changes (only after mount)
  useEffect(() => {
    if (!mounted) return

    const url = new URL(window.location.href)
    url.searchParams.set("lang", language)
    window.history.replaceState({}, "", url.toString())
  }, [language, mounted])

  if (!mounted) {
    return (
      <div className="bg-white relative overflow-hidden">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-block bg-primary px-6 py-3 mb-4 skew-x-[-5deg] transform">
                <h1 className="text-4xl font-bold text-white skew-x-[5deg] transform">Carregando...</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

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
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-600">{t.content}</p>
                {/* O conteúdo específico do documento será inserido aqui */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
