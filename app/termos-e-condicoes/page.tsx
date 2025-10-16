"use client"

import { useState, Suspense } from "react"
import MainNavbar from "@/components/main-navbar" // Verifique o caminho correto
import Footer from "@/components/footer" // Verifique o caminho correto
import LegalDocumentsContent from "@/components/legal-documents-content" // Verifique o caminho correto
import { useSearchParams } from "next/navigation"

// Componente de fallback para Suspense
function LoadingFallback() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
}

function LegalDocumentsPageContent() {
  const searchParams = useSearchParams()
  const initialLang = searchParams.get("lang") || "pt-BR"
  const [language, setLanguage] = useState(initialLang)

  return <LegalDocumentsContent language={language} onLanguageChange={setLanguage} />
}

export default function LegalDocumentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNavbar />
      <div className="flex-grow pt-16">
        {" "}
        {/* Ajuste pt-16 conforme altura do Navbar */}
        <Suspense fallback={<LoadingFallback />}>
          <LegalDocumentsPageContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
